import type { Meta, StoryObj } from "@storybook/vue3"
import AccordionInfo from "@app/ui/components/elements/accordion-info/AccordionInfo.vue"

const meta = {
    title: "Elements/Accordion Info",
    component: AccordionInfo,
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
    }
} satisfies Meta<typeof AccordionInfo>

export default meta

type Story = StoryObj<typeof AccordionInfo>

const Templates: Story = {
    render: (args) => ({
        components: { AccordionInfo },
        setup() {
            return { args }
        },
        template: `
            <AccordionInfo v-bind="args">
            </AccordionInfo>
        `
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}