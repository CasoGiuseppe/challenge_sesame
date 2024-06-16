import type { Meta, StoryObj } from "@storybook/vue3";
import CardData from "@app/ui/components/elements/card-data/CardData.vue";
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue";

const meta = {
    title: "Elements/Card Data",
    component: CardData,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        contextualMenu: { control: "radio", options: [true, false] },
        title: { control: "text" },
        content: { control: "text" },
        footer: { control: "text" },
    },
    args: {
        id: "defaultID",
        contextualMenu: true,
        title: 'Lorem ipsum dolor sit amet, consectetur adip',
        content: 'content',
        footer: 'time'
    }
} satisfies Meta<typeof CardData>

export default meta

type Story = StoryObj<typeof CardData>

const Templates: Story = {
    render: (args) => ({
        components: { CardData, BaseIcon },
        setup() {
            return { args }
        },
        template: `
            <div style="max-width: 50%">
                <Suspense>
                    <CardData v-bind="args">
                        <template #title>{{ args.title }}</template>
                        <template #content>{{ args.content }}</template>
                        <template #footer><BaseIcon name="IconTime" />{{ args.footer }}</template>
                    </CardData>
                </Suspense>
            </div>
        `,
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}