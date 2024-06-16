import type { Meta, StoryObj } from "@storybook/vue3"
import AccordionInfo from "@app/ui/components/elements/accordion-info/AccordionInfo.vue"

const meta = {
    title: "Elements/Accordion Info",
    component: AccordionInfo,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        title: { control: "text" },
        open: { control: "boolean" },
        summary: { control: "text" },
        content: { control: "text" },
    },
    args: {
        id: "AccordionID",
        title: "Accordion title",
        open: false,
        summary: "SUMMARY TITLE",
        content: "content"
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
                <template #summary>{{ args.summary }}</template>
                <template #content>{{ args.content }}</template>
            </AccordionInfo>
        `
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}