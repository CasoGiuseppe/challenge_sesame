import type { Meta, StoryObj } from "@storybook/vue3"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import { Sizes } from "@/app/ui/components/base/base-icon/types"

const meta = {
    title: "Base/Base Icon",
    component: BaseIcon,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        name: { control: "select", options: ['IconSearch'] },
        size: { control: "select", options: Object.values(Sizes) },
    },
    args: {
        id: "defaultID",
        name: 'IconSearch',
        size: Sizes.L
    }
} satisfies Meta<typeof BaseIcon>

export default meta

type Story = StoryObj<typeof BaseIcon>

const Templates: Story = {
    render: (args) => ({
        components: { BaseIcon },
        setup() {
            return { args }
        },
        template: `<Suspense><div style="color: gray"><BaseIcon v-bind="args" /></div></Suspense>`,
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}