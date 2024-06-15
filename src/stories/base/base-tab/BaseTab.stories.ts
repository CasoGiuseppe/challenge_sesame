import type { Meta, StoryObj } from "@storybook/vue3"
import BaseTab from "@app/ui/components/base/base-tab/BaseTab.vue"
import { Is } from "@app/ui/components/abstracts/component-is/types"

const meta = {
    title: "Base/Base Tab",
    component: BaseTab,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        is: { control: "select", options: Object.values(Is) },
        selected: { control: "radio", options: [true, false] },
        default: { control: "text" }
    },
    args: {
        id: "defaultID",
        is: Is.BUTTON,
        selected: false,
        default: 'Tab'
    }
} satisfies Meta<typeof BaseTab>

export default meta

type Story = StoryObj<typeof BaseTab>

const Templates: Story = {
    render: (args) => ({
        components: { BaseTab },
        setup() {
            return { args }
        },
        template: `
            <BaseTab v-bind="args" >
                <template #default>{{ args.default }}</template>
            </BaseButton>
        `
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}