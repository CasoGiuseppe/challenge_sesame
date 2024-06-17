import type { Meta, StoryObj } from "@storybook/vue3"
import UserIdentity from "@app/ui/components/elements/user-identity/UserIdentity.vue"

const meta = {
    title: "Elements/User Identity",
    component: UserIdentity,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
    },
    args: {
        id: "defaultID",
    }
} satisfies Meta<typeof UserIdentity>

export default meta

type Story = StoryObj<typeof UserIdentity>

const Templates: Story = {
    render: (args) => ({
        components: { UserIdentity },
        setup() {
            return { args }
        },
        template: `
            <Suspense>
                <section style="display: flex; gap: 12px">
                    <UserIdentity v-bind="args">
                        <template #image><img src="https://picsum.photos/200" /></template>
                    </UserIdentity>
                    <UserIdentity v-bind="args" />
                </section>
            </Suspense>
        `,
    })
}

export const Default: Story = {
    ...Templates,
    args: {}
}