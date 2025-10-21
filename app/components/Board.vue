<template>
  <section class="board flex gap-x-3 items-start">
    <ClientOnly>
      <draggableComponent
        v-model="props.board.columns"
        group="taskList"
        item-key="id"
        class="flex gap-x-5 min-h-[50dvh]"
        handle="#drag-board"
        :animation="200"
      >
        <template #item="{ element }">
          <TaskColumn :column="element" />
        </template>
      </draggableComponent>
    </ClientOnly>
  </section>
</template>

<script lang="ts" setup>
  import type { IBoard } from '~/store/BoardStore';
  import draggableComponent from 'vuedraggable';

  const props = defineProps<{ board: IBoard }>();
</script>

<style></style>
