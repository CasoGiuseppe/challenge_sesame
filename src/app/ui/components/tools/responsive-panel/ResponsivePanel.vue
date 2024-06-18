<template>
    <aside
        class="responsive-panel"
        data-testID="ui-panel-test"
    >
        <header
            v-if="$slots['header']"
            class="responsive-panel__header"
        >
            <slot name="header" />
        </header>
        <section class="responsive-panel__content">
            section
        </section>
    </aside>
</template>
<style src="./ResponsivePanel.scss" lang="scss"></style>