<template>
  <RouterView v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component"/>
      </template>
    </Suspense>
  </RouterView>
</template>
<script setup lang="ts">
import { dependencies } from '@/modules/core/dependencies';
import { onMounted } from 'vue';

onMounted(() => {
  const ploc = dependencies.provideVacancyPloc()
})
</script>
