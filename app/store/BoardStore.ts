import { defineStore } from 'pinia';
import { ref } from 'vue';
import { BoardRecord, TaskColumnRecord, TaskRecord, type IBoard } from '~/types/board';

const mockData = () => {
  const board1 = new BoardRecord('Доставка 1');
  const board2 = new BoardRecord('Доставка 2');

  const columnsNames = ['Новые', 'В работе', 'Завершено'];

  columnsNames.forEach((colName, i) => {
    const column = new TaskColumnRecord(colName);
    const task = new TaskRecord(`Задача ${i + 1}`, `Описание задачи ${i + 1}`);
    column.tasks.push(task);
    board1.columns.push(column);
  });

  columnsNames.forEach((colName, i) => {
    const column = new TaskColumnRecord(colName);
    board2.columns.push(column);
  });

  return [board1, board2];
};

export const useBoardStore = defineStore('board', () => {
  const boards = ref<IBoard[]>(
    JSON.parse(JSON.stringify(mockData()))
  );
  const activeBoard = ref<IBoard | null>(boards.value[0] || null);

  function setActiveBoard(boardId: number) {
    const targetBoard = boards.value.find((board) => board.id === boardId);

    if (!targetBoard) return;
    activeBoard.value = targetBoard;
  }

  function addBoard(title: string) {
    const newBoard = new BoardRecord(title);
    boards.value.push(newBoard);
  }

  function removeBoard(boardId: number) {
    boards.value = boards.value.filter((board) => board.id !== boardId);
  }

  function addColumn(boardId: number, title: string) {
    const targetBoard = boards.value.find((board) => board.id === boardId);
    if (!targetBoard) return;
    const newColumn = new TaskColumnRecord(title);
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
    const newTask = new TaskRecord(title, description);
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
