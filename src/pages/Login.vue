<template>
    <div>
        <!-- header -->
        <div class="container">
            <div class="header">
                <h1>로그인</h1>
            </div>
        </div>
        <!-- content -->
        <div class="container">
            <div class="content">
                <!-- signup info -->
                <div class="signup-info">
                    <div class="mb-3 row">
                        <label for="loginId" class="col-sm-2 col-form-label">아이디</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="username" v-model="state.form.username">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="loginPw" class="col-sm-2 col-form-label">비밀번호</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="password" v-model="state.form.password">
                        </div>
                    </div>
                </div>
                <!-- user login button -->
                <div class="btn-signup-group">
                    <button type="submit" class="btn btn-signup" @click="submit()">로그인</button>
                    <router-link to="/">
                        <button type="button" class="btn btn-cancel">뒤로가기</button>
                    </router-link>
                </div>
            </div>
        </div>
      </div>   
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/scripts/router";
import store from '@/scripts/store';
axios.defaults.withCredentials = true; 

export default {
    name: "Login",
    setup() {
        const state = reactive({
            form: {
                username: "",
                password: ""
            }
        });

        const submit = () => {
            axios.post("/api/users/login", state.form).then((res) => {
                store.commit("setAccount", res.data)
                console.log(res.data);

                window.alert("로그인하였습니다")
                router.push({path: "/"})
            }).catch(() => {
                window.alert("아이디 또는 비밀번호를 확인해주세요")
            })
        };

        return { state, submit }
    }
}
</script>

<style scoped>
    .container {
        width: 40%;
    }
    .header {
        margin: 5rem;
        text-align: center;
    }
    .header h1 {
        color: grey;
    }
    .signup-info {
        border: 1px solid grey;
        padding: 2rem;
        padding-top: 2.5rem;
    }

    .btn-signup-group {
        padding-top:2rem;
        text-align: center;
    }
    .btn-signup, .btn-cancel {
        background-color: white;
        color: grey;
    }
    .btn-signup:hover, .btn-cancel:hover {
        background-color: grey;
        color: white;
    }
</style>