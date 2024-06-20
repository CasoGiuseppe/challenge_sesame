<template>
  <RouterView v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
    </Suspense>
  </RouterView>
</template>
