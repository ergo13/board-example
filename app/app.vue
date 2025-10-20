<template>
  <NuxtRouteAnnouncer />
  <main>
    <NuxtPage />
  </main>
</template>
<script lang="ts" setup>
  useHead({
    htmlAttrs: { class: 'dark-theme' },
  });
</script>
