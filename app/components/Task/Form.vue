<template>
  <form class="max-w-[30vw]">
    <header>
      <h2>
        {{ localTask.title || 'Новая задача' }}
      </h2>
    </header>
    <section class="flex flex-col gap-y-2">
      <label for="task-description" class="cursor-pointer">Описание задачи:</label>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta quasi ex quidem minima beatae rerum debitis accusamus. Adipisci dicta, libero corporis enim ipsa voluptates sunt fuga eum ea commodi.</p>
      <UiInput
        id="task-description"
        v-model="localTask.description"
        :placeholder="localTask.description ? '' : 'Заполните описание'"
        textarea
      />
    </section>
    <footer class="flex gap-x-4">
      <UiButton>Сохарнить</UiButton>
      <UiButton>Отменить</UiButton>
    </footer>
  </form>
</template>

<script lang="ts" setup>
  import type { ITask } from '~/types/board';

  const props = defineProps<{
    task: ITask;
  }>();

  const localTask = JSON.parse(JSON.stringify(props.task));
</script>

<style></style>
