<template>
    <dialog
        class="toast-event"
        data-testID="ui-toast-message"
    >
        <section class="toast-event__body">
            <!-- @slot Default: slot to show toast body -->
            <slot />
        </section>
    </dialog>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, type PropType } from "vue";
import type { UniqueId } from '@app/ui/types';
import { Types, type IContdown } from "./types";
import { ensureValueCollectionExists } from "@app/ui/validators/useCustomValidator";

const { timer, id } = defineProps({
    /**
     * Set the unique id of the ui button
     */
    id: {
        type: String as PropType<UniqueId>,
        default: "toastId"
    },
    /**
     * Set the toast type [success, error]
     */
    type: {
        type: String as PropType<Types>,
        default: Types.SUCCESS,
        validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
    },

     /**
     * Set timing to hide toast
     */
    timer: {
        type: Object as PropType<IContdown>,
        default: () => { return { active: false, duration: 3000 } }
    },
})
</script>