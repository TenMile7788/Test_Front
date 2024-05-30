<template>
  <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <h5 class="logo-style">예매 좋아</h5>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary" @click="searchConcert">콘서트</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary" @click="searchPlay">연극</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary" @click="searchMusical">뮤지컬</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary" @click="searchClassic">클래식</a></li>
        <li><a style="color: white; font-weight: bold;" href="#" class="nav-link px-2 link-event" @click="event">EVENT</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <!-- login/logout -->

            <router-link to="/login" class="text" v-if="!$store.state.account.id">
              <button type="button" class="btn btn-login">로그인</button>
            </router-link>
            <button type="button" class="btn btn-logout" @click="logout()" v-else>로그아웃</button>

          <router-link :to="{path: `/signup`}">
              <button type="button" class="btn btn-signup">회원가입</button>
          </router-link>
          <router-link to="/my/books" class="text" v-if="$store.state.account.id">
            <button type="button" class="btn btn-mypage">마이페이지</button>
          </router-link>
      </div>
    </header>
  </div>
</template>

<script>
import store from '@/scripts/store';
import router from '@/scripts/router';
import axios from "axios";

export default {
    name: "Header",
    setup() {
      const logout = () => {
        store.commit("setAccount", 0);
        router.push({path: "/"});

        axios.post("/api/users/logout")
          .then(() => {
            window.alert('로그아웃 하였습니다');
          })
      }

      // my Page
      const goToMyPage = () => {
        axios.get("/api/users/check")
          .then((res) => {
            router.push({path: "/my/books"})
          })
          .catch((err) => {
            window.alert("로그인이 필요한 서비스입니다")
            router.push({path: "/login"})
          })
      }

      // 콘서트 페이지로 이동
      const searchConcert = () => {
        router.push("/concert")
      }

      // 연극 페이지로 이동
      const searchPlay = () => {
        router.push("/play")
      }

      // 뮤지컬 페이지로 이동
      const searchMusical = () => {
        router.push("/musical")
      }

      // 클래식 페이지로 이동
      const searchClassic = () => {
        router.push("/classic")
      }

      // 이벤트 페이지
      const event = () => {
        router.push("/event")
      }

      return { logout, goToMyPage, searchConcert, searchPlay, searchMusical, searchClassic, event }
    }
}
</script>

<style scoped>
.logo-style {
    font-size: 1.2rem;
    color: gray;
    margin-top: 0.7rem;
}

.btn-login:hover {
  background-color: lightgray;
  color: white;
}

.btn-logout:hover {
  background-color: lightgray;
  color: white;
}

.btn-signup:hover {
  background-color: lightgray;
  color: white;
}

.btn-mypage {
  background-color: gray;
  color: white;
}
.btn-mypage:hover {
  background-color: white;
  color: gray;
}
    
</style>