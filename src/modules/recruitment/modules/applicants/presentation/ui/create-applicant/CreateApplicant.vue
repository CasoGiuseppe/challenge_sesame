<template>
    <DrawerPanel
        id="createPanel"
        :is="Types.DRAWER"
        :position="Position.RIGHT"
        :open="open"
        @close="close"
    >
        <template #header>title</template>
        <template #body>body</template>
    </DrawerPanel>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import DrawerPanel from "@app/ui/components/elements/drawer-panel/DrawerPanel.vue"
import { Types, Position } from "@app/ui/components/elements/drawer-panel/types"
import { useRouter } from "vue-router";

const router = useRouter()
const open = ref<boolean>(false)
const close = () => {
    open.value = false
    router.push({ name: 'applicants' })
}
onMounted(() => open.value = true)
</script>