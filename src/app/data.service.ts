import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public goals = new Array<any>(['The initial goal'], ['Another silly life goal']);

  constructor() { }

  addGoal(goal) {
    this.goals.push(goal);
  }

}
