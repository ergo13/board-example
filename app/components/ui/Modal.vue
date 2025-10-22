<template>
  <ClientOnly>
    <Transition>
      <Teleport to="body">
        <div v-if="visible" class="ui-modal" @click.self="modalClose">
          <span> pupa {{ props.modalType }} </span>
        </div>
      </Teleport>
    </Transition>
  </ClientOnly>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    modalType: string;
    visible: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  function modalClose() {
    emit('close');
  }
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
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    color: white;
    font-size: 2rem;
  }
</style>
