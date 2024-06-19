<template>
    <section id="app-layout">
        <!-- Aside -->
        <RouterView
            v-slot="{ Component }"
            name="aside"
        >
            <component :is="Component"/>
        </RouterView>
    </section>
</template>