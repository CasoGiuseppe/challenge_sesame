import type { Meta, StoryObj } from "@storybook/vue3"
import BaseItemMenu from "@app/ui/components/base/base-item-menu/BaseItemMenu.vue"
import { vueRouter } from "storybook-vue3-router"
import { action } from "@storybook/addon-actions"
import { Is } from "@app/ui/components/abstracts/component-is/types"

const meta = {
    title: "Base/Base Item menu",
    component: BaseItemMenu,
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
    }
} satisfies Meta<typeof BaseItemMenu>

export default meta

type Story = StoryObj<typeof BaseItemMenu>

const Templates: Story = {
    render: (args) => ({
        components: { BaseItemMenu },
        setup() {
            return { args }
        },
        template: `
            <BaseItemMenu v-bind="args" @send="action">
                <template #default>{{ args.loading == false ? args.default : 'cargando' }}</template>
            </BaseItemMenu>
        `,
        methods: {
            action: action("submitted"),
        }
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}

Default.decorators = [vueRouter()]