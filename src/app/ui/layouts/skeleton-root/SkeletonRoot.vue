<template>
    <section class="app-layout">
        <RouterView
            v-slot="{ Component }"
            name="aside"
        >
            <component :is="Component"/>
        </RouterView>
        <section class="app-layout__content" style="background: yellow;">
            <RouterView
                v-slot="{ Component }"
                name="header"
            >
                <TransitionIs
                    :type="Types.FROMBOTTOM"
                    :easing="Easing.OUT"
                    :timing="Timing.NORMAL"
                >
                    <component :is="Component"/>
                </TransitionIs>
            </RouterView>
            <RouterView
                v-slot="{ Component, route: { meta: family } }"
                name="content"
            >
                <TransitionIs
                    :type="Types.FROMBOTTOM"
                    :easing="Easing.OUT"
                    :timing="Timing.NORMAL"
                >
                    <component
                        :is="Component"
                        :key="family"
                    />
                </TransitionIs>
            </RouterView>
        </section>
    </section>
</template>
<script setup lang="ts">
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
</script>