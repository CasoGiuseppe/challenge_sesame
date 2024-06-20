<template>
    <section class="section-content" style="background: gray; flex: 2;">
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

        <RouterView
            v-slot="{ Component }"
            name="aside"
        >
            <component :is="Component"/>
        </RouterView>
    </section>
</template>
<script setup lang="ts">
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
</script>