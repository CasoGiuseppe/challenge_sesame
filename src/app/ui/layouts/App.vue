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
import { onMounted } from 'vue';
import { dependencies } from '@modules/core/dependencies'
onMounted(async () => {
  // const vacancy = dependencies.provideVacancyPloc()
  const applicants = dependencies.provideApplicantPloc()
  applicants.createApplicant({
    firstName: 'e',
    lastName: 'b',
    email: 'e@example.com',
    statusId: '397627b9-7856-47fc-a918-f2055108d0a0',
  })
  // vacancy.getVacancyByID('e5d90a95-ec3f-4a15-b884-bbea519f1e05')
  // await applicants.addNewApplicant({
  //   firstName: 'ciccio', lastName: 'pasticcio', vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05', statusId: '397627b9-7856-47fc-a918-f2055108d0a0'
  // })

  // await applicants.getApplicantsByID({vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05'})
  // await applicants.changeApplicantArea({ employeeId: '00957c5e-83da-4184-be8a-034fda845e18', firstName: 'testName', lastName: 'testSurname', vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05', statusId: '2c11a05b-884c-4a80-ac76-ac3b1bb2169d'})
})
</script>
