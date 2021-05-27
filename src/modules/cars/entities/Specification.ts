import { v4 as uuid } from "uuid";

class Specification {

  id?: string; 

  name: string;

  description: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    {!this.id && (
      this.id = uuid()
    )}
  }
}

export { Specification };