import type { Meta, StoryObj } from "@storybook/vue3";
import ToastEvent from "@app/ui/components/elements/toast-event/ToastEvent.vue";
import { Types, Tags } from "@/app/ui/components/elements/toast-event/types";
import { action } from "@storybook/addon-actions"

const meta = {
    title: "Elements/Toast Event",
    component: ToastEvent,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        type: { control: "select", options: Object.values(Types) },
        tag: { control: "select", options: Object.values(Tags) },
        default: { control: "text" },
    },
    args: {
        id: "defaultID",
        type: Types.SUCCESS,
        tag: Tags.ASIDE,
        default: 'Lorem ipsum dolor sit amet, consectetur adip',
    }
} satisfies Meta<typeof ToastEvent>

export default meta

type Story = StoryObj<typeof ToastEvent>

const Templates: Story = {
    render: (args) => ({
        components: { ToastEvent },
        setup() {
            return { args }
        },
        template: `
            <div style="max-width: 50%; height: 150px">
                <Suspense>
                    <ToastEvent v-bind="args">
                        <template #default>{{ args.default }}</template>
                    </ToastEvent>
                </Suspense>
            </div>
        `,
        methods: {
            init: action("drag-init"),
            stop: action("drag-stop"),
        }
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}