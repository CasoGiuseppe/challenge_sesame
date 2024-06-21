import type { Meta, StoryObj } from "@storybook/vue3"
import DraggableArea from "@/app/ui/components/tools/draggable-area/DraggableArea.vue"

const meta = {
    title: "Tools/Draggable Area",
    component: DraggableArea,
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
    }
} satisfies Meta<typeof DraggableArea>

export default meta

type Story = StoryObj<typeof DraggableArea>

const Templates: Story = {
    render: (args, { updateArgs }) => ({
        components: { DraggableArea },
        setup() {
            return { args }
        },
        template: `
            <section style="height: 60vh; width: 35%">
                <DraggableArea v-bind="args">
                    <template #title>title</template>
                </DraggableArea>
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