<template>

    <div class="PageNotFound">

        <span>
            <fa-icon :icon="['fal', 'sitemap']"></fa-icon>
        </span>

        <h1>Page not found</h1>

        <router-link :to="{name: 'Home'}">
            Return Home
        </router-link>

    </div>

</template>
