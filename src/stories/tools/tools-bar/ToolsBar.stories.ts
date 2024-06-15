import type { Meta, StoryObj } from "@storybook/vue3";
import BaseTab from "@app/ui/components/base/base-tab/BaseTab.vue"
import TabsBar from "@/app/ui/components/tools/tabs-bar/TabsBar.vue";
import { Is } from "@app/ui/components/abstracts/component-is/types";

const meta = {
    title: "Tools/Tabs Bar",
    component: TabsBar,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
    },
    args: {
        id: "TabsBarID",
    }
} satisfies Meta<typeof BaseTab>

export default meta

type Story = StoryObj<typeof BaseTab>

const Templates: Story = {
    render: (args) => ({
        components: { BaseTab, TabsBar },
        setup() {
            return { args }
        },
        template: `
            <TabsBar v-bind="args" >
                
            </TabsBar>
        `
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}