import type { Meta, StoryObj } from "@storybook/vue3"
import DraggableArea from "@app/ui/components/tools/draggable-area/DraggableArea.vue"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import { Areas } from "@app/ui/components/tools/draggable-area/types"

const meta = {
    title: "Tools/Draggable Area",
    component: DraggableArea,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        area: { control: "select", options: Object.values(Areas) },
    },
    args: {
        id: "defaultID",
        area: Areas.NEW,
    }
} satisfies Meta<typeof DraggableArea>

export default meta

type Story = StoryObj<typeof DraggableArea>

const Templates: Story = {
    render: (args, { updateArgs }) => ({
        components: { DraggableArea, BaseIcon },
        setup() {
            return { args }
        },
        template: `
            <Suspense>
                <section style="height: 60vh; width: 35%">
                    <DraggableArea v-bind="args">
                        <template #icon><BaseIcon name="IconBriefCase"/></template>
                        <template #title>title</template>
                    </DraggableArea>
                </section>
            </Suspense>
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