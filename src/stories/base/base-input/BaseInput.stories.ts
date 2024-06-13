import type { Meta, StoryObj } from "@storybook/vue3"
import BaseInput from "@app/ui/components/base/base-input/BaseInput.vue"
import { Types } from "@app/ui/components/base/base-input/types"
import { action } from "@storybook/addon-actions"

const meta = {
    title: "Base/Base Input",
    component: BaseInput,
    tags: ["autodocs"],
    argTypes: {
        id: { control: 'text' },
        proxyValue: { control: 'text' },
        type: { control: 'select', options: Object.values(Types) },
        placeholder: { control: 'text' },
        required: { control: 'radio', options: [true, false] },
        loading: { control: 'radio', options: [true, false] },
        readonly: { control: 'radio', options: [true, false] },
        pattern: { control: 'text' },
    },
    args: {
        id: 'inputID',
        type: Types.TEXT,
        placeholder: 'Add here your text',
        required: false,
        loading: false,
        readonly: false,
        pattern: '^[a-zA-Z0-9 ]+$',
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