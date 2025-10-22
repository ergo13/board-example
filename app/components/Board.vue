<template>
  <div class="flex gap-x-5">
    <ClientOnly v-if="props.board.columns.length">
      <draggableComponent
        v-model="props.board.columns"
        group="taskList"
        item-key="id"
        class="board flex items-start gap-x-5"
        handle=".grab-board"
        tag="section"
        :animation="200"
      >
        <template #item="{ element }">
          <TaskColumn :column="element" />
        </template>
      </draggableComponent>
    </ClientOnly>
    <div
      class="h-full w-56 new-column flex items-center justify-center opacity-60"
    >
      <UiButton
        class="p-3 -m-3 w-3/6"
        title="добавить колонку задач"
        aria-label="добавить колонку задач"
      >
        <UiIcon icon="plus" class="cursor-pointer" />
      </UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IBoard } from '~/store/BoardStore';
  import draggableComponent from 'vuedraggable';

  const props = defineProps<{ board: IBoard }>();
</script>

<style scoped>
  .new-column {
    background: var(--bg-column);
    box-shadow: var(--box-shadow);
    transition: background var(--transition), box-shadow var(--transition);
  }
</style>
