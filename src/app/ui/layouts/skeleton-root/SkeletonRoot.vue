<template>
    <section class="app-layout">
        <RouterView
            v-slot="{ Component }"
            name="aside"
        >
            <component
                :is="Component"
                :key="uuid"
            />
        </RouterView>
        <section class="app-layout__content">
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
import { onBeforeMount, ref } from "vue"
import { TransitionIs } from '@app/ui/components/index';
import { Types , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types'
import { generateUUID } from "@app/shared/utilities"

const uuid = ref<string>(generateUUID())
onBeforeMount(() => uuid.value = generateUUID())
</script>