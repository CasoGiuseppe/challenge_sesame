<template>
    <section class="section-content" style="background: gray; flex: 2;">
        <RouterView v-slot="{ Component }">
            <component :is="Component"/>
        </RouterView>
    </section>
</template>