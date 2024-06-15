import type { Meta, StoryObj } from "@storybook/vue3";
import CardData from "@app/ui/components/elements/card-data/CardData.vue";

const meta = {
    title: "Elements/Card Data",
    component: CardData,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
    },
    args: {
        id: "defaultID",
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
            </CardData>
        `,
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}