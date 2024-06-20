<template>
    <section class="main-navigation">
        <ResponsivePanel id="navigationPanel">
            <template #header>header</template>
            <template #body>body</template>
        </ResponsivePanel>
    </section>
</template>
<script setup lang="ts">
import ResponsivePanel from "@app/ui/components/tools/responsive-panel/ResponsivePanel.vue"
</script>
<style src="./MainNavigation.scss" lang="scss"></style>