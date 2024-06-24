<template>
    <h1 class="fake-logo">
        <slot />
    </h1>
</template>
<style lang="scss" scoped>
.fake-logo {
    @apply p-xsm border-logo-600 border-dotted border-[1px] flex items-center justify-center ;
    @apply text-xxsm text-logo-400;

    @screen tablet-pt {
        @apply p-md w-full
    }
}
</style>