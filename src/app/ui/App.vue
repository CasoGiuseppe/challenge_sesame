<script setup lang="ts">
import BaseButton from './components/base/base-button/BaseButton.vue';
import BaseIcon from './components/base/base-icon/BaseIcon.vue';
import LoadingState from './components/states/default/loading-state/LoadingState.vue'
import DrawerPanel from './components/elements/drawer-panel/DrawerPanel.vue'
import ResponsivePanel from './components/tools/responsive-panel/ResponsivePanel.vue'
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
  <div style="height: 100vh; display: flex; align-items: flex-start;">
    <!-- <LoadingState></LoadingState>
    <BaseIcon name="IconSearch" />
    <DrawerPanel></DrawerPanel> -->
    <ResponsivePanel>
      <template #header>
          <figure style="
            margin: 0;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 6vh;
            border: 1px dotted hsla(213, 27%, 84%, 1)"
          >
              Slot Logo
          </figure>
      </template>
      <template #body>body</template>
    </ResponsivePanel>
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
