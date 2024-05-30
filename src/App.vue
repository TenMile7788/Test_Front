<template>
  <Header />
  <RouterView/>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import store from "@/scripts/store"
import axios from "axios"
import { watch } from "vue"
import { useRoute } from "vue-router"
axios.defaults.withCredentials = true; 

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const check = () => {
      axios.get("/api/users/check").then(({data}) => {
        if(data) {
          store.commit("setAccount", data);
        }else {
          store.commit("setAccount", null);
        }
      })
    }

    const route = useRoute();
    watch(route, () => {
      check();
    })
  }
}
</script>

<style scoped>

</style>
