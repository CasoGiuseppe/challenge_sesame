import type { Meta, StoryObj } from "@storybook/vue3"
import AccordionInfo from "@app/ui/components/elements/accordion-info/AccordionInfo.vue"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import BaseItemMenu from "@app/ui/components/base/base-item-menu/BaseItemMenu.vue"

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
        summary: "Summary title",
        content: "content"
    }
} satisfies Meta<typeof AccordionInfo>

export default meta

type Story = StoryObj<typeof AccordionInfo>

const Templates: Story = {
    render: (args) => ({
        components: { AccordionInfo, BaseIcon, BaseItemMenu },
        setup() {
            return { args }
        },
        template: `
            <Suspense>
                <AccordionInfo v-bind="args">
                    <template #summary>{{ args.summary }}</template>
                    <template #content>
                        <AccordionInfo open customColor="6961ff">
                            <template #summary><BaseIcon name="IconRate" size="M" />Nested title</template>
                            <template #content>
                                <BaseItemMenu>item menu</BaseItemMenu>
                            </template>
                        </AccordionInfo>
                    </template>
                </AccordionInfo>
            </Suspense>
        `
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}