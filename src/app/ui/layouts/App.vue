<template>
  <RouterView
    v-slot="{ Component }"
    class="unit--is-content"
  >
    <Suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
    </Suspense>
  </RouterView>
</template>
<script setup lang="ts">
</script>
