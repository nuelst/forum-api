import { Answer } from "src/answers/entities/answer.entity";
import { Question } from "src/questions/entities/question.entity";

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  questions: Question[];
  answers: Answer[];

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
