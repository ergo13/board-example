<template>
  <textarea v-if="props.textarea" v-model="model" />
  <input v-else v-model="model" />
</template>

<script lang="ts" setup>
  const props = defineProps<{
    textarea?: boolean;
  }>();

  const model = defineModel<string>();
</script>

<style scoped>
  input,
  textarea {
    background: var(--bg-main);
    color: var(--text-main);
    padding: 2px 8px;
  }
</style>
