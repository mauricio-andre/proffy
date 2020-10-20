import {Request, response, Response} from 'express';
import db from '../database/connection';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';

interface ScheduleItem {
  weekDay: number,
  from: string,
  to: string,
};

export default class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;

    if (!filters.weekDay || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: 'Missing filters to search classes',
      });
    }

    const weekDay = filters.weekDay as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('classSchedule.*')
          .from('classSchedule')
          .whereRaw('`classSchedule`.`classId` = `classes`.`id`')
          .whereRaw('`classSchedule`.`weekDay` = ??', [Number(weekDay)])
          .whereRaw('`classSchedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`classSchedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.userId', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    res.json(classes);
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({ name, avatar, whatsapp, bio });

      const insertedClassesIds = await trx('classes').insert({
        userId: insertedUsersIds[0],
        subject,
        cost,
      });

      const classSchedule = schedule.map(({ weekDay, from, to }: ScheduleItem) => {
        return {
          weekDay,
          classId: insertedClassesIds[0],
          from: convertHoursToMinutes(from),
          to: convertHoursToMinutes(to),
        };
      });

      await trx('classSchedule').insert(classSchedule);

      await trx.commit();

      res.status(201).send();
    } catch (error) {
      await trx.rollback();
      res.status(400).json({
        error: 'Unexpected error while creating new class',
      });
    }
  }
}
