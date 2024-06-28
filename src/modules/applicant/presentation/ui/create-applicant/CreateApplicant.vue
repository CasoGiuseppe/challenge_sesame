<template>
    <DrawerPanel
        id="createPanel"
        :is="Types.DRAWER"
        :position="Position.RIGHT"
        :open="open"
        @close="close"
    >
        <template #header>
            {{ translate({ key: `${(family as string).toUpperCase()}.FORM.ADD.title` }) }}
        </template>
        <template #body>body</template>
    </DrawerPanel>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import DrawerPanel from "@app/ui/components/elements/drawer-panel/DrawerPanel.vue"
import { Types, Position } from "@app/ui/components/elements/drawer-panel/types"
import { useRouter, useRoute } from "vue-router";
import useTranslation from "@app/shared/composables/useTranslation";
const { translate } = useTranslation();

const router = useRouter()
const route = useRoute()

const open = ref<boolean>(false)
const family = ref<string>(route.meta.family as string)
const close = () => {
    open.value = false
    router.back()
}

onMounted(() => open.value = true)
</script>