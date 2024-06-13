import type { Meta, StoryObj } from "@storybook/vue3"
import BaseInput from "@app/ui/components/base/base-input/BaseInput.vue"
import { action } from "@storybook/addon-actions"

const meta = {
    title: "Base/Base Input",
    component: BaseInput,
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
    }
} satisfies Meta<typeof BaseInput>

export default meta

type Story = StoryObj<typeof BaseInput>

const Templates: Story = {
    render: (args) => ({
        components: { BaseInput },
        setup() {
            return { args }
        },
        template: `
            <BaseInput v-bind="args" @send="action">
            </BaseInput>
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