<template>
    <header class="section-header">
        <RouterLink :to="{ name: 'positions'}">position</RouterLink>
        <RouterLink :to="{ name: 'applicants'}">applicants</RouterLink>
        <RouterLink :to="{ name: 'createApplicant'}">create</RouterLink>
    </header>
</template>