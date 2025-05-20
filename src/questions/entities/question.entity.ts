import { Answer } from "src/answers/entities/answer.entity";
import { User } from "src/user/entities/user.entity";

export class Question {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
  User?: User;
  Answer: Answer[];

  constructor(init?: Partial<Question>) {
    Object.assign(this, init);
  }
}
