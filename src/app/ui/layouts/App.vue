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
  ploc.getVacancyByID('e5d90a95-ec3f-4a15-b884-bbea519f1e05')
})
</script>
