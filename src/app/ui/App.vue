<script setup lang="ts">
import BaseButton from './components/base/base-button/BaseButton.vue';
import BaseIcon from './components/base/base-icon/BaseIcon.vue';
import LoadingState from './components/states/default/loading-state/LoadingState.vue'
</script>

<template>
  <Suspense>
  <!-- <Suspense>
    <section class="app">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </section>
  </Suspense> -->
  <div>
    <LoadingState></LoadingState>
    <BaseIcon name="IconSearch" />
  </div>
</Suspense>
</template>
<style scoped lang="scss">
.app {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
</style>
