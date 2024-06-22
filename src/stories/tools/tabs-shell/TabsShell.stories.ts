import type { Meta, StoryObj } from "@storybook/vue3";
import BaseTab from "@app/ui/components/base/base-tab/BaseTab.vue"
import TabsBar from "@/app/ui/components/tools/tabs-shell/TabsShell.vue";
import { ref } from "vue";
import { vueRouter } from "storybook-vue3-router"

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
    },
    args: {
        id: "TabsBarID",
    }
} satisfies Meta<typeof TabsBar>

export default meta

type Story = StoryObj<typeof BaseTab>

const Templates: Story = {
    render: (args) => ({
        components: { BaseTab, TabsBar },
        setup() {
            const current = ref<string>('tab1')
            return { args, current }
        },
        template: `
            <TabsBar v-bind="args" >
                <template #tab="{ property: { id, label } }">
                    <BaseTab
                        :id="id"
                        :selected="id === current"
                        @send="setCurrent"
                    >
                        {{ label }}
                    </BaseTab>
                </template>
            </TabsBar>
        `,
        methods: {
            setCurrent({ id }: { id: string }): void {
                this.current = id
            }
        }
    })
}

export const Default: Story = {
    ...Templates
}

Default.decorators = [vueRouter()]