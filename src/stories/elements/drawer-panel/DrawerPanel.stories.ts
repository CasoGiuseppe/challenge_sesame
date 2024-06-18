import type { Meta, StoryObj } from "@storybook/vue3"
import DrawerPanel from "@app/ui/components/elements/drawer-panel/DrawerPanel.vue"
import { Types, Position } from "@app/ui/components/elements/drawer-panel/types"

const meta = {
    title: "Elements/Drawer Panel",
    component: DrawerPanel,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        is: { control: "select", options: Object.values(Types) },
        position: { control: "select", options: Object.values(Position) },
        open: { control: "radio", options: [true, false] },
    },
    args: {
        id: "defaultID",
        is: Types.DRAWER,
        position: Position.LEFT,
        open: false,
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