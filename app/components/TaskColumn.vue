<template>
  <article class="flex flex-col gap-y-5 task-column p-5">
    <h2 id="drag-board" class="active:cursor-grabbing cursor-grab">
      {{ props.column.title }}
    </h2>
    <ClientOnly>
      <draggableComponent
        v-model="props.column.tasks"
        group="task"
        item-key="id"
        class="flex-1 min-w-56 flex flex-col gap-y-5"
        tag="ul"
        :animation="200"
      >
        <template #item="{ element }">
          <Task :task="element" :key="element.id" />
        </template>
      </draggableComponent>
    </ClientOnly>
  </article>
</template>

<script lang="ts" setup>
  import type { ITaskColumn } from '~/store/BoardStore';
  import draggableComponent from 'vuedraggable';

  const props = defineProps<{ column: ITaskColumn }>();
</script>

<style></style>
