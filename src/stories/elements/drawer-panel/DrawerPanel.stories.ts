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
        header: { control: "text" },
        body: { control: "text" }
    },
    args: {
        id: "defaultID",
        is: Types.DRAWER,
        position: Position.LEFT,
        open: false,
        header: "Drawer title",
        body: "Drawer body"
    }
} satisfies Meta<typeof DrawerPanel>

export default meta

type Story = StoryObj<typeof DrawerPanel>

const Templates: Story = {
    render: (args, { updateArgs }) => ({
        components: { DrawerPanel },
        setup() {
            return { args }
        },
        template: `
            <section>
                <button @click="() => close({state : true})">Open dialog </button>
                <DrawerPanel
                    v-bind="args"
                    @close="close"
                >
                    <template #header>{{ args.header }} </template>
                    <template #body>{{ args.body }} </template>
                </DrawerPanel>
            </section>
        `,
        methods: {
            close({ state }: {state: string}): void {
                updateArgs({ ...args, open: state })
            },
        }
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}