import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request ${JSON.stringify(req.body)}`);
  console.log(`Response ${res.statusCode}`);
  next();
}
