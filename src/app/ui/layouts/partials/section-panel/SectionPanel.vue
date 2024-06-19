<template>
    <RouterView
        v-slot="{ Component, route: { name} }"
        name="panel"
    >
        <component
            :is="Component"
            :key="name"
        />
    </RouterView>
</template>