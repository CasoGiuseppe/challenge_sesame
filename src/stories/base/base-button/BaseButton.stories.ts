import type { Meta, StoryObj } from "@storybook/vue3"
import BaseButton from "@app/ui/components/base/base-button/BaseButton.vue"
import { ComponentIs, Types } from "@app/ui/components/base/base-button/types"
import { action } from "@storybook/addon-actions"

const meta = {
    title: "Base/Base Button",
    component: BaseButton,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        ariaLabel: { control: "text" },
        type: { control: "select", options: Object.values(Types) },
        is: { control: "select", options: Object.values(ComponentIs) },
        disabled: { control: "radio", options: [true, false] },
        loading: { control: "radio", options: [true, false] },
        default: { control: "text" },
    },
    args: {
        id: "defaultID",
        ariaLabel: "button aria title",
        type: Types.PRIMARY,
        is: ComponentIs.BUTTON,
        disabled: false,
        loading: false,
        default: "Default Button",
    }
} satisfies Meta<typeof BaseButton>

export default meta

type Story = StoryObj<typeof BaseButton>

const Templates: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: `
            <BaseButton v-bind="args">
                <template #default>{{ args.default }}</template>
            </BaseButton>
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