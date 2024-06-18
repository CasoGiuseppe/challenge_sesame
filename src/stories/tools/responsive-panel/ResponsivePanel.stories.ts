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
            <section>
                <ResponsivePanel
                    v-bind="args"
                    @close="close"
                >
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