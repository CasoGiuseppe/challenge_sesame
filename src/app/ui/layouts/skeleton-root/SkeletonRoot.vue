<template>
    <section class="app-layout">
        <RouterView
            v-slot="{ Component }"
            name="aside"
        >
            <component :is="Component"/>
        </RouterView>
        <section class="app-layout__content" style="background: yellow;">
            <RouterView
                v-slot="{ Component }"
                name="header"
            >
                <component :is="Component"/>
            </RouterView>
            <RouterView
                v-slot="{ Component }"
                name="content"
            >
                <component :is="Component"/>
            </RouterView>
        </section>
    </section>
</template>