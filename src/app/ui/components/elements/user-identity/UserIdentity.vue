<template>
    <figure class="user-identity">
        <!-- @slot Image: slot to show user identity photo -->
        <slot name="image">
          <span class="user-identity__base-icon">
            <BaseIcon
              name="IconUser"
              :size="Sizes.M"
            />
          </span>
        </slot>
    </figure>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { type PropType } from 'vue';
import BaseIcon from '@app/ui/components/base/base-icon/BaseIcon.vue';
import { Sizes } from '@app/ui/components/base/base-icon/types';

defineProps({
  /**
   * Set the unique id of the ui user identity
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'userId'
  },
})
</script>
<style src="./UserIdentity.scss" lang="scss" scoped></style>