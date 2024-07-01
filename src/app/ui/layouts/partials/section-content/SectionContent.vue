<template>
    <section class="section-content">
        <RouterView v-slot="{ Component, route: { meta: { family } } }">
            <TransitionIs
                :type="Types.OPACITY"
                :timing="Timing.FAST"
            >
            <component
                :is="Component"
                :key="family"
            />
        </TransitionIs>
        </RouterView>
    </section>
</template>
<script setup lang="ts">
import { TransitionIs } from '@app/ui/components/index';
import { Types , Timing } from '@app/ui/components/abstracts/transition-is/types';
</script>
<style src="./SectionContent.scss" lang="scss" scoped></style>