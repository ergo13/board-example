<template>
  <section class="board">
    <h1 class="mb-5">{{ props.board.title }}</h1>
    <div class="flex gap-x-6">
      <TaskColumn
        v-for="column in props.board.columns"
        :column="column"
        :key="column.id"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import type { IBoard } from '~/store/BoardStore';
  const props = defineProps<{ board: IBoard }>();
</script>

<style></style>
