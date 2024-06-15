import type { Meta, StoryObj } from "@storybook/vue3";
import BaseTab from "@app/ui/components/base/base-tab/BaseTab.vue"
import TabsBar from "@/app/ui/components/tools/tabs-bar/TabsBar.vue";
import { Is } from "@app/ui/components/abstracts/component-is/types";
import { ref } from "vue";

const tabsList = [
    { id: 'tab1', label: 'Tab 1'},
    { id: 'tab2', label: 'Tab 2',},
    { id: 'tab3', label: 'Tab 3',}
]
const meta = {
    title: "Tools/Tabs Bar",
    component: TabsBar,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        tabs: { control: "object" }
    },
    args: {
        id: "TabsBarID",
        tabs: tabsList
    }
} satisfies Meta<typeof TabsBar>

export default meta

type Story = StoryObj<typeof BaseTab>

const Templates: Story = {
    render: (args) => ({
        components: { BaseTab, TabsBar },
        setup() {
            const selected = ref<string>('tab1')
            return { args, selected }
        },
        template: `
            <TabsBar v-bind="args" >
                <template #tab="{ property: { id, label } }">
                    <BaseTab
                        :id="id"
                        :selected="id === selected"
                    >
                        label
                    </BaseTab>
                </template>
            </TabsBar>
        `
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}