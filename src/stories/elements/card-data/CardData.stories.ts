import type { Meta, StoryObj } from "@storybook/vue3";
import CardData from "@app/ui/components/elements/card-data/CardData.vue";

const meta = {
    title: "Elements/Card Data",
    component: CardData,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        hasAction: { control: "radio", options: [true, false] },
        title: { control: "text" },
    },
    args: {
        id: "defaultID",
        hasAction: true,
        title: 'Lorem ipsum dolor sit amet, consectetur adip',
    }
} satisfies Meta<typeof CardData>

export default meta

type Story = StoryObj<typeof CardData>

const Templates: Story = {
    render: (args) => ({
        components: { CardData },
        setup() {
            return { args }
        },
        template: `
            <CardData v-bind="args">
                <template #title>{{ args.title }}</template>
            </CardData>
        `,
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}