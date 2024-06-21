<template>
    <section class="draggable-area">
        <header
            v-if="$slots['title']"
            class="draggable-area__header"
        >
            <h3 class="draggable-area__title">
                <slot name="title" />
            </h3>
        </header>
    </section>
</template>
<style src="./DraggableArea.scss" lang="scss"></style>