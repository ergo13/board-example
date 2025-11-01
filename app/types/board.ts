export interface IBoard {
  title: string;
  columns: ITaskColumn[];
  id: number;
}

export interface ITaskColumn {
  title: string;
  tasks: ITask[];
  id: number;
}

export interface ITask {
  title: string;
  description: string;
  id: number;
}

export enum ModalTypes {
  'TASK' = 'TASK',
  'COLUMN' = 'COLUMN',
}

export class BoardRecord implements IBoard {
  title: string;
  columns: ITaskColumn[];
  id: number;

  constructor(title: string) {
    this.title = title;
    this.columns = [];
    this.id = Date.now() + +(Math.random() * 1000).toFixed();
  }
}

export class TaskColumnRecord implements ITaskColumn {
  id: number;
  tasks: ITask[];
  title: string;

  constructor(title: string) {
    this.id = Date.now() + +(Math.random() * 1000).toFixed();
    this.tasks = [];
    this.title = title;
  }
}

export class TaskRecord implements ITask {
  description: string;
  id: number;
  title: string;

  constructor(title: string, description: string) {
    this.description = description;
    this.title = title;
    this.id = Date.now() + +(Math.random() * 1000).toFixed();
  }
}
