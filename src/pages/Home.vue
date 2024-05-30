<template>
  <main>
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
          <router-link to="/performances/18" class="text">
              <div class="carousel-item active">
                  <img src="/img/imgA.png" width="100%" height="100%" alt="">
                  <div class="container">
                  <div class="carousel-caption text-start">
                  </div>
                  </div>
              </div>
          </router-link>
        
          <router-link to="/performances/7" class="text">
              <div class="carousel-item">
                  <img src="/img/imgB.png" width="100%" height="100%" alt="">
                  <div class="container">
                  <div class="carousel-caption text-start">
                  </div>
                  </div>
              </div>
          </router-link>
          <router-link to="/performances/10" class="text">
              <div class="carousel-item">
                  <img src="/img/imgC.png" width="100%" height="100%" alt="">
                  <div class="container">
                  <div class="carousel-caption text-start">
                  </div>
                  </div>
              </div>
          </router-link>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>
  
  <h1 style="text-align: center;" class="fw-light">이번주 HOT</h1>

   <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="(performance, idx) in state.performances" :key="idx">
                <Card :performance="performance"/>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import Card from "@/components/Card.vue";
axios.defaults.withCredentials = true; 

export default {
    name: "Home",
    components: {
        Card
    },
    setup() {
        const state = reactive({
            performances: []
        })

        axios.get("/api/performances").then((res) => {
            state.performances = res.data;
        })

        return { state }
    }
}
</script>

<style scoped>
.carousel {
  margin-bottom: 4rem;
}
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

.carousel-item {
  height: 32rem;
}
.container {
  width: 70%;
}
h1 {
  margin-top: 1rem;
  margin-bottom: 4rem;
  color: gray;
  font-weight: bolder;
}

.card-text {
    text-align: center;
}
</style>