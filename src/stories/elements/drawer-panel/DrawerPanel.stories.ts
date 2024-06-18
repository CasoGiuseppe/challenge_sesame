import type { Meta, StoryObj } from "@storybook/vue3"
import DrawerPanel from "@app/ui/components/elements/drawer-panel/DrawerPanel.vue"

const meta = {
    title: "Elements/Drawer Panel",
    component: DrawerPanel,
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
    }
} satisfies Meta<typeof DrawerPanel>

export default meta

type Story = StoryObj<typeof DrawerPanel>

const Templates: Story = {
    render: (args) => ({
        components: { DrawerPanel },
        setup() {
            return { args }
        },
        template: `
            <DrawerPanel v-bind="args">
            </DrawerPanel>
        `,
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}