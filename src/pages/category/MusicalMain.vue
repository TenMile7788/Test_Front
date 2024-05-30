<template>
  <main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">뮤지컬</h1>
        <h2 class="lead text-body-secondary"></h2>
      </div>
    </div>
  </section>

   <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="(performance, idx) in state.performances" :key="idx">
                <Card :performance="performance"/>
            </div>
        </div>
      </div>
    </div>

</main>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import Card from "@/components/Card.vue"
axios.defaults.withCredentials = true; 

export default {
    name: "ConcertMain",
    components: {
        Card
    },
    setup() {
        const state = reactive({
            performances: []
        })

        axios.get("/api/performances/search?category=musical").then((res) => {
            state.performances = res.data;
        })

        return { state }
    }
}
</script>

<style scoped>
.container {
  width: 70%;
}
.card-text {
    text-align: center;
}
</style>