import { defineStore } from 'pinia';
import { ref } from 'vue';

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

class Board implements IBoard {
  title: string;
  columns: ITaskColumn[];
  id: number;

  constructor(title: string) {
    this.title = title;
    this.columns = [];
    this.id = Date.now() + +(Math.random() * 1000).toFixed();
  }
}

class TaskColumn implements ITaskColumn {
  id: number;
  tasks: ITask[];
  title: string;

  constructor(title: string) {
    this.id = Date.now() + +(Math.random() * 1000).toFixed();
    this.tasks = [];
    this.title = title;
  }
}

class Task implements ITask {
  description: string;
  id: number;
  title: string;

  constructor(title: string, description: string) {
    this.description = description;
    this.title = title;
    this.id = Date.now() + +(Math.random() * 1000).toFixed();
  }
}

const mockData = () => {
  const board1 = new Board('Доставка 1');
  const board2 = new Board('Доставка 2');

  const columnsNames = ['Новые', 'В работе', 'Завершено'];

  // columnsNames.forEach((colName, i) => {
  //   const column = new TaskColumn(colName);
  //   const task = new Task(`Задача ${i + 1}`, `Описание задачи ${i + 1}`);
  //   column.tasks.push(task);
  //   board1.columns.push(column);
  // });

  columnsNames.forEach((colName, i) => {
    const column = new TaskColumn(colName);
    board2.columns.push(column);
  });

  return [board1, board2];
};

export const useBoardStore = defineStore('board', () => {
  const boards = ref<Board[]>(
    JSON.parse(JSON.stringify(mockData()))
  );
  const activeBoard = ref<IBoard | null>(boards.value[0] || null);

  function setActiveBoard(boardId: number) {
    const targetBoard = boards.value.find((board) => board.id === boardId);

    if (!targetBoard) return;
    activeBoard.value = targetBoard;
  }

  function addBoard(title: string) {
    const newBoard = new Board(title);
    boards.value.push(newBoard);
  }

  function removeBoard(boardId: number) {
    boards.value = boards.value.filter((board) => board.id !== boardId);
  }

  function addColumn(boardId: number, title: string) {
    const targetBoard = boards.value.find((board) => board.id === boardId);
    if (!targetBoard) return;
    const newColumn = new TaskColumn(title);
    targetBoard.columns.push(newColumn);
  }

  function removeColumn(columnId: number, boardId: number) {
    const targetBoard = boards.value.find((board) => board.id === boardId);
    if (!targetBoard) return;
    targetBoard.columns = targetBoard.columns.filter(
      (column) => column.id !== columnId
    );
  }

  function addTask(
    boardId: number,
    columnId: number,
    title: string,
    description: string
  ) {
    const targetBoard = boards.value.find((board) => board.id === boardId);
    if (!targetBoard) return;
    const targetColumn = targetBoard.columns.find(
      (column) => column.id === columnId
    );
    if (!targetColumn) return;
    const newTask = new Task(title, description);
    targetColumn.tasks.push(newTask);
  }

  function removeTask(taskId: number, columnId: number, boardId: number) {
    const targetBoard = boards.value.find((board) => board.id === boardId);
    if (!targetBoard) return;
    const targetColumn = targetBoard.columns.find(
      (column) => column.id === columnId
    );
    if (!targetColumn) return;
    targetColumn.tasks = targetColumn.tasks.filter(
      (task) => task.id !== taskId
    );
  }

  return {
    boards,
    activeBoard,
    setActiveBoard,
    addBoard,
    removeBoard,
    addColumn,
    removeColumn,
    addTask,
    removeTask,
  };
});
