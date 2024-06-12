<script setup lang="ts">
import BaseButton from './components/base/base-button/BaseButton.vue';
</script>

<template>
  <!-- <Suspense>
    <section class="app">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </section>
  </Suspense> -->
  <BaseButton><template #default>ciccio</template></BaseButton>
</template>
<style scoped lang="scss">
.app {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
</style>
