import { CreateDate, UpdateDate, DeleteDate } from "../column";

export class Date {

  @CreateDate
  createAt: Date;

  @UpdateDate
  updatedAt: Date;

  @DeleteDate
  deletedAt: Date;
}
