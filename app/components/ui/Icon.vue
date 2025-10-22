<template>
  <div v-html="icon" class="ui-icon" />
</template>

<script lang="ts" setup>
  import icons from '~/assets/icons/index';
  const props = defineProps<{ icon: string }>();
  const icon = icons[props.icon];
</script>

<style></style>
