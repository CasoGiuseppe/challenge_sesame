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
    <template #body>
      <CreateForm>
        <template #description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </template>
      </CreateForm>
    </template>
  </DrawerPanel>
</template>
<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { DrawerPanel } from '@app/ui/components/index';
import CreateForm from '@modules/applicant/presentation/ui/create-form/CreateForm.vue';
import { Types, Position } from '@app/ui/components/elements/drawer-panel/types';
import { type ITranslation } from '@app/shared/composables';
import { keyUseTranslations } from '@app/shared/types/symbols';

const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
const router = useRouter();
const route = useRoute();

const open = ref<boolean>(false);
const family = ref<string>(route.meta.family as string);
const close = () => {
  open.value = false;
  router.back();
};

onMounted(() => (open.value = true));
</script>
