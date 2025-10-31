<template>
  <div class="order-1"></div>
  <aside class="order-3 flex flex-col gap-y-6 p-5 pt-0">
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
  <h2 class="pb-5 order-2">{{ boardStore.activeBoard?.title }}</h2>
  <BoardView
    v-if="boardStore.activeBoard"
    class="order-4"
    :board="boardStore.activeBoard"
  />
  <h2 class="order-4" v-else>Досок нет</h2>
</template>

<script lang="ts" setup>
  import { useBoardStore } from '~/store/BoardStore';
  const boardStore = useBoardStore();
  const { toggleTheme, isDark } = useTheme();
</script>

<style></style>
