<template>
    <div>
        <!-- header -->
        <div class="container">
            <div class="header">
                <h1>회원가입</h1>
            </div>
        </div>
        <!-- content -->
        <div class="container">
            <div class="content">
                <!-- signup info -->
                <div class="signup-info">
                    <!-- <div class="mb-3 row">
                        <label for="loginId" class="col-sm-2 col-form-label">이메일</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" v-model="state.form.email">
                        </div>
                    </div> -->
                    <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">아이디</label>
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
                    <!-- user sign-up button -->
                    <div class="btn-signup-group">
                        <button type="submit" class="btn btn-signup" @click="submit()">회원가입</button>
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
axios.defaults.withCredentials = true;

export default {
    name: "SignUp",
    setup() {
        const state = reactive({
            account: {
                userId: null,
                username: "",
                role: ""
            },
            form: {
                username: "",
                password: "",
                role: "USER"
            },
            error: {
                message: ""
            }
        });

        const submit = () => {
            const args = {
                username: state.form.username,
                password: state.form.password,
                role: state.form.role
            }

            axios.post("/api/users/signup", args)
                .then((res) => {
                    alert("회원가입에 성공했습니다")
                    state.account = res.data
                    router.push({path: "/"})
                })
                .catch((err) => {
                    window.alert("이미 존재하는 회원입니다")
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