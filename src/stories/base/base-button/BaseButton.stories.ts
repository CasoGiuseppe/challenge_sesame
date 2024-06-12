import type { Meta, StoryObj } from "@storybook/vue3"
import BaseButton from "@app/ui/components/base/base-button/BaseButton.vue"
import { Sizes, Types } from "@app/ui/components/base/base-button/types"
import { action } from "@storybook/addon-actions"
import { vueRouter } from "storybook-vue3-router"
import { Is } from "@app/ui/components/abstracts/component-is/types"

const meta = {
    title: "Base/Base Button",
    component: BaseButton,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        loading: { control: "radio", options: [true, false] },
        ariaLabel: { control: "text" },
        type: { control: "select", options: Object.values(Types) },
        size: { control: "select", options: Object.values(Sizes) },
        is: { control: "select", options: Object.values(Is) },
        disabled: { control: "radio", options: [true, false] },
        default: { control: "text" },
    },
    args: {
        loading: false,
        id: "defaultID",
        ariaLabel: "button aria title",
        type: Types.PRIMARY,
        size: Sizes.DEFAULT,
        is: Is.BUTTON,
        disabled: false,
        default: "Button",
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
                <template #default>{{ args.loading == false ? args.default : 'cargando' }}</template>
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

Default.decorators = [vueRouter()]