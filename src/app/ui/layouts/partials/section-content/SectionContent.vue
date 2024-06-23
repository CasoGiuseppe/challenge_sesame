<template>
    <section class="section-content">
        <RouterView v-slot="{ Component, route: { meta: { family } } }">
            <TransitionIs
                :type="Types.FROMBOTTOM"
                :easing="Easing.ELASTIC"
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
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
</script>
<style src="./SectionContent.scss" lang="scss"></style>