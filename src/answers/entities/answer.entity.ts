import { Question } from "src/questions/entities/question.entity";
import { User } from "src/user/entities/user.entity";

export class Answer {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
  questionId?: string;
  User?: User;
  Question?: Question;

  constructor(init?: Partial<Answer>) {
    Object.assign(this, init);
  }
}
