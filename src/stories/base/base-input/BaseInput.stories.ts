import type { Meta, StoryObj } from "@storybook/vue3"
import BaseInput from "@app/ui/components/base/base-input/BaseInput.vue"
import { Types } from "@app/ui/components/base/base-input/types"
import { action } from "@storybook/addon-actions"

const ERRORS = {
    required: 'input value is required',
    validation: 'input validation failed'
};

const meta = {
    title: "Base/Base Input",
    component: BaseInput,
    tags: ["autodocs"],
    argTypes: {
        id: { control: 'text' },
        proxyValue: { control: 'text' },
        type: { control: 'select', options: Object.values(Types) },
        placeholder: { control: 'text' },
        loading: { control: 'radio', options: [true, false] },
        readonly: { control: 'radio', options: [true, false] },
        required: { control: 'radio', options: [true, false] },
        pattern: { control: 'text' },
        message: { control: 'text' },
    },
    args: {
        id: 'inputID',
        type: Types.SEARCH,
        placeholder: 'Add here your text',
        loading: false,
        readonly: false,
        required: true,
        pattern: '^[a-zA-Z0-9 ]+$',
        message: null,
    }
} satisfies Meta<typeof BaseInput>

export default meta

type Story = StoryObj<typeof BaseInput>

const Templates: Story = {
    render: (args, { updateArgs }) => ({
        components: { BaseInput },
        setup() {
            return { args }
        },
        template: `
            <Suspense>
                <BaseInput
                    v-bind="args"
                    @update:modelValue="update"
                    @invalid="setInvalid"
                    @change="change"
                >
                    <template #message v-if="args.message !== null">{{ args.message }}</template>
                </BaseInput>
            </Suspense>
        `,
        methods: {
            change: action('change'),
            update({ value }: { value: string }): void {
                updateArgs({ ...args, proxyValue: value })
            },
            setInvalid({mode, value}: {mode: string, value: string}): void {
                updateArgs({ ...args, message: value
                    ? ERRORS[mode as keyof typeof ERRORS]
                    : null })
            },
        }
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}