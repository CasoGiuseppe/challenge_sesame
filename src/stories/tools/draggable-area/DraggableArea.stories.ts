import type { Meta, StoryObj } from "@storybook/vue3"
import DraggableArea from "@app/ui/components/tools/draggable-area/DraggableArea.vue"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import CardData from "@app/ui/components/elements/card-data/CardData.vue"
import { Areas, type ICardItem } from "@app/ui/components/tools/draggable-area/types"
import { action } from "@storybook/addon-actions"

const cards = [
    {
        id: '1',
        title: 'card title 1',
        content: 'card content 1',
        footer: 'card footer 1',
    },
    {
        id: '2',
        title: 'card title 2',
        content: 'card content 2',
        footer: 'card footer 2',
    },
    {
        id: '3',
        title: 'card title 3',
        content: 'card content 3',
        footer: 'card footer 3',
    },
    {
        id: '4',
        title: 'card title 4',
        content: 'card content 4',
        footer: 'card footer 4',
    }
] as ICardItem[];

const meta = {
    title: "Tools/Draggable Area",
    component: DraggableArea,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        area: { control: "select", options: Object.values(Areas) },
        cards: { control: "object" },
        title: { control: "text" },
    },
    args: {
        id: "defaultID",
        area: Areas.NEW,
        cards,
        title: "Title area"
    }
} satisfies Meta<typeof DraggableArea>

export default meta

type Story = StoryObj<typeof DraggableArea>

const Templates: Story = {
    render: (args) => ({
        components: { DraggableArea, BaseIcon, CardData },
        setup() {
            return { args }
        },
        template: `
            <Suspense>
                <section style="height: 60vh;  display: flex; justify-content: space-between; align-items: flex-start">
                    <DraggableArea
                        style="max-width: 65%"
                        v-bind="args"
                        @drag-enter="enter"
                        @drag-leave="leave"
                        @drop-end="drop"
                        @drag-over="over"
                    >
                        <template #icon><BaseIcon name="IconBriefCase"/></template>
                        <template #title>{{ args.title }}</template>
                        <template #items="{ property: { id, title, content, footer } }">
                            <CardData :id="id" draggable>
                                <template #title>{{ title }}</template>
                                <template #content>{{ content }}</template>
                                <template #footer>{{ footer }}</template>
                            </CardData>
                        </template>
                    </DraggableArea>
                </section>
            </Suspense>
        `,
        methods: {
            enter: action("drag-enter"),
            leave: action("drag-leave"),
            drop: action("drop"),
            over: action("drag-over")
        }
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}