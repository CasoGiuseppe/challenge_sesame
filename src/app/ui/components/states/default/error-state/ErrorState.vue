<template>
    <figure class="error-state">
        <span class="error-state__icon"></span>
        <figcaption class="error-state__message"><slot>Fail</slot></figcaption>
    </figure>
</template>
<style src="./ErrorState.scss" lang="scss" scoped></style>