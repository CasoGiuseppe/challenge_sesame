import type { Meta, StoryObj } from "@storybook/vue3"
import ResponsivePanel from "@/app/ui/components/tools/responsive-panel/ResponsivePanel.vue"

const meta = {
    title: "Tools/Responsive Panel",
    component: ResponsivePanel,
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
    }
} satisfies Meta<typeof ResponsivePanel>

export default meta

type Story = StoryObj<typeof ResponsivePanel>

const Templates: Story = {
    render: (args, { updateArgs }) => ({
        components: { ResponsivePanel },
        setup() {
            return { args }
        },
        template: `
            <section style="height: 60vh; background-color: hsla(227, 100%, 98%, 1); display: flex">
                <ResponsivePanel
                    v-bind="args"
                >
                    <template #header>
                        <figure style="margin: 0; padding: 16px; display: flex; align-items: center; justify-content: center; border: 1px dotted hsla(213, 27%, 84%, 1)">
                            Slot Logo
                        </figure>
                    </template>
                </ResponsivePanel>
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