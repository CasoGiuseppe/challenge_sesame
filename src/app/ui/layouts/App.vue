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

onMounted(async () => {
  const vacancy = dependencies.provideVacancyPloc()
  const applicants = dependencies.provideApplicantPloc()

  //vacancy.getVacancyByID('e5d90a95-ec3f-4a15-b884-bbea519f1e05')
  await applicants.createApplicant({
    firstName: 'ciccio', lastName: 'pasticcio', vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05', statusId: '1'
  })
  // await applicants.createApplicant({
  //   firstName: 'xxx', lastName: 'yyy', vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05', statusId: '397627b9-7856-47fc-a918-f2055108d0a0'
  // })
  // await applicants.getApplicantsByID('e5d90a95-ec3f-4a15-b884-bbea519f1e05')
})
</script>
