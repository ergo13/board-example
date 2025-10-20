<template>
  <li class="task hover:cursor-pointer p-3">
    <h3>{{ props.task.title }}</h3>
    <p>{{ props.task.description }}</p>
  </li>
</template>

<script lang="ts" setup>
  import type { ITask } from '~/store/BoardStore';
  const props = defineProps<{ task: ITask }>();
</script>

<style></style>
