<template>
    <main>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">예매 좋아&nbsp;&nbsp; X  &nbsp;&nbsp;SUMMER MUSICAL</h1>
                    <h2 class="lead"></h2>
                </div>
            </div>
        </section>
        <div class="box">
            <div class="col" v-for="(performance, idx) in state.performances" :key="idx">
                <div class="container col-xxl-8 px-4 py-5">
                    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div class="col-10 col-sm-8 col-lg-6">
                            <img :src="`${performance.posterPath}`" />
                        </div>
                        <div class="col-lg-6" v-if="performance.name.includes('하데스타운')">
                            <h1>{{ performance.name }}</h1>
                            <h2>전 좌석 <span style="color: red;">{{ performance.discountPer }}%</span> 할인</h2>
                            <p>수천 년 전 신화의 새로운 변주<br>지금 여기, 그리고 어디에나 존재하는 사랑에 관한 이야기<br>당신의 운명을 바꿀 노래가 있는 곳<br></p>
                            <h3>"하데스타운"</h3>
                            <router-link :to="{path: `/event/${performance.performanceId}`}">
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" class="btn btn-small btn-danger px-4 me-md-2">상세</button>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-lg-6" v-if="performance.name.includes('헤드윅')">
                            <h1>{{ performance.name }}</h1>
                            <h2>전 좌석 <span style="color: red;">{{ performance.discountPer }}%</span> 할인</h2>
                            <p>더 이상 수식어가 필요 없는 명작의 귀환!<br>독보적인 매력의 연출과 음악으로 관객과 함게 호흡하는 작품!<br>잃어버린 반쪽을 찾기 위한 여정을 따라가는 몰입도 높은 스토리!<br></p>
                            <h3>"헤드윅"</h3>
                            <router-link :to="{path: `/event/${performance.performanceId}`}">
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" class="btn btn-small btn-danger px-4 me-md-2">상세</button>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-lg-6" v-if="performance.name.includes('베어')">
                            <h1>{{ performance.name }}</h1>
                            <h2>전 좌석 <span style="color: red;">{{ performance.discountPer }}%</span> 할인</h2>
                            <p>숨길 수 밖에 없는 비밀, 말하고 싶은 이야기<br>"사랑이 왜 이리 복잡해졌지"<br>방황하는 청춘들의 엇갈린 사랑, 그리고 아물 수 없는 상처<br></p>
                            <h3>"베어 더 뮤지컬"</h3>
                            <router-link :to="{path: `/event/${performance.performanceId}`}">
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" class="btn btn-small btn-danger px-4 me-md-2">상세</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios"
import { reactive } from "vue";
axios.defaults.withCredentials = true; 

export default {
    name: "EventMain",
    setup() {
        const state = reactive({
            performances: []
        })

        axios.get("/api/event/performances").then((res) => {
            state.performances = res.data;
        })

        return { state }
    }
}
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    background: black;
}
h1{
    color: white;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
}
h2 {
    color: white;
    margin-bottom: 2rem;
    text-align: center;
}
h3 {
    color: white;
    font-weight: bold;
    text-align: center;
}
p {
    color: white;
    margin-bottom: 2rem;
    text-align: center;
}
.card-box {
    width: 50%;
    margin: 0 auto;
    padding-bottom: 10rem;
}
img {
    display: inline-block;
    width: 60%;
    height: 60%;
    background-size: cover;
    background-position: center;
}
th {
    color: grey;
}
button {
    margin-top: 0.5rem;
    margin-left: 11rem;
}
</style>