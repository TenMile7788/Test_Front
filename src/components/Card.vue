<template>
    <div class="card shadow-sm">
        <router-link :to="{path: `/performances/${performance.performanceId}`}">
            <span class="img" :style="{backgroundImage: `url(${performance.posterPath})`}"></span>
        </router-link>
    
        <div class="card-body">
        <span class="badge text-bg-success">{{ performance.category }}</span>
        <p class="card-text-bold">{{ performance.name }}</p>
        <p class="card-text">{{ performance.location }}</p>
        <div class="d-flex justify-content-between align-items-center">
            <small class="price text-muted">
                {{ performance.cast }}
            </small>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        performance: Object
    }
}
</script>

<style scoped>
    .card .img {
        display: inline-block;
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
    }
    .card-text-bold {
        font-weight: bold;
        font-size: 1.2rem;
    }
    .badge {
        margin-bottom: 1rem;
    }
</style>