<template>
  <article class="flex flex-col gap-y-5 task-column p-5 h-full">
    <h2
      class="inline-flex items-center justify-between active:cursor-grabbing cursor-grab sticky top-0 bg-inherit"
    >
      <span class="grab-board grow">
        {{ props.column.title }}
      </span>
      <div class="flex gap-x-3">
        <UiButton
          class="p-3 -m-3"
          title="добавить задачу"
          aria-label="добавить задачу"
          @click="openModal('addTask')"
        >
          <UiIcon icon="plus" class="w-5 cursor-pointer" />
        </UiButton>
        <UiButton
          class="p-3 -m-3"
          title="редактировать колонку"
          aria-label="редактировать колонку"
          @click="openModal('editColumn')"
        >
          <UiIcon icon="editPen" class="w-5 cursor-pointer" />
        </UiButton>
      </div>
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
    <UiModal
      :visible="showModal"
      :modalType="modalType"
      @close="showModal = false"
    />
  </article>
</template>

<script lang="ts" setup>
  import type { ITaskColumn } from '~/store/BoardStore';
  import draggableComponent from 'vuedraggable';

  const props = defineProps<{ column: ITaskColumn }>();
  const showModal = ref(false);
  const modalType = ref('');

  function openModal(type: string) {
    modalType.value = type;
    showModal.value = true;
  }
</script>

<style></style>
