import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import BaseTab from "@app/ui/components/base/base-tab/BaseTab.vue"
import TabsShell from "@/app/ui/components/tools/tabs-shell/TabsShell.vue";
import MenuShell from "@app/ui/components/tools/menu-shell/MenuShell.vue"
import { vueRouter } from "storybook-vue3-router"

const meta = {
    title: "Tools/Tabs navigation",
    component: TabsShell,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
    },
    args: {
        id: "TabsBarID",
    }
} satisfies Meta<typeof TabsShell>

export default meta

type Story = StoryObj<typeof BaseTab>

const Templates: Story = {
    render: (args) => ({
        components: { BaseTab, TabsShell, MenuShell },
        setup() {
            const current = ref<string>('tab1')
            const tabsList = [
                { id: 'tab1', label: 'Tab 1', selected: true },
                { id: 'tab2', label: 'Tab 2',},
                { id: 'tab3', label: 'Tab 3',}
            ]
            return { args, current, tabsList }
        },
        template: `
            <TabsShell v-bind="args" >
                <template #default>
                    <MenuShell
                        id="tabsNavigation"
                        :routes="tabsList"
                        orientation="horizontal"
                        animation="from-bottom"
                    >
                        <template #navigation="{ property: { id, label, selected } }">
                            <BaseTab
                                :id="id"
                                is="router-link"
                                :selected="current === id"
                                @send="setCurrent"
                            >
                                {{ label }}
                            </BaseTab>
                        </template>
                    </MenuShell>
                </template>
            </TabsShell>
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