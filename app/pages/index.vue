<template>
  <aside class="row-span-full flex flex-col gap-y-6 p-5">
    <h2>Все доски:</h2>
    <h3
      v-for="board in boardStore.boards"
      :key="board.id"
      :class="[
        'text-center rounded p-5 hover:cursor-pointer',
        { task: boardStore.activeBoard?.id === board.id },
      ]"
      @click="boardStore.setActiveBoard(board.id)"
    >
      {{ board.title }}
    </h3>
    <button @click="toggleTheme">{{ isDark ? 'Темная' : 'Светлая' }}</button>
  </aside>
  <h2 class="pb-5">{{ boardStore.activeBoard?.title }}</h2>
  <Board v-if="boardStore.activeBoard" :board="boardStore.activeBoard" />
  <h2 v-else>Досок нет</h2>
</template>

<script lang="ts" setup>
  import { useBoardStore, type IBoard } from '~/store/BoardStore';
  const boardStore = useBoardStore();
  const { toggleTheme, isDark } = useTheme();
</script>

<style></style>
