<template>
  <ClientOnly>
    <Transition>
      <Teleport to="body">
        <div v-if="props.visible" class="ui-modal" @click.self="$emit('close')">
        <component :is="props.component" v-bind="props.modalData" />
      </div>
      </Teleport>
    </Transition>
  </ClientOnly>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    visible: boolean;
    component: string;
    modalData: any;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .ui-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
