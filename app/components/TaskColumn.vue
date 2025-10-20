<template>
  <article class="task-column p-3">
    <h2 class="mb-3">{{ props.column.title }}</h2>
    <ul>
      <Task v-for="task in props.column.tasks" :task="task" :key="task.id" />
    </ul>
  </article>
</template>

<script lang="ts" setup>
  import type { ITaskColum } from '~/store/BoardStore';
  const props = defineProps<{ column: ITaskColum }>();
</script>

<style></style>
