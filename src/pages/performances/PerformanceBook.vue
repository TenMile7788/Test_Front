<!-- 예매 상세 페이지  -->
<template>
    <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">좌석 선택</h1>
        <div class="col-lg-6 mx-auto">
            <div class="stage-box">
                STAGE
            </div>
            <div class="book-box">
                A 
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'A'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div>{{ state.seatPrice["A"] }}원
                <br>
                B 
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'B'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div> {{ state.seatPrice["B"] }}원
                <br>
                C 
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'C'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div> {{ state.seatPrice["C"] }}원
                <br>
                D 
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'D'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div> {{ state.seatPrice["D"] }}원
                <br> 
                E 
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'E'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div> {{ state.seatPrice["E"] }}원
                <br>
                F
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'F'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div> {{ state.seatPrice["F"] }}원
            </div>

            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-secondary btn-lg px-4 gap-3" @click="book">예매하기</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="goback">뒤로가기</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import router from "@/scripts/router";
axios.defaults.withCredentials = true; 

export default {
    name: "PerformanceBook",
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            seats: {},
            seatIdList: [],
            seatPrice: {}
        })

        // 좌석 정보 초기화
        axios.get("/api/performances/" + id)
        .then((res) => {
            state.seats = res.data.seats
            for(let i = 0; i < res.data.seats.length; i += 5) {
                state.seatPrice[res.data.seats[i].seatRow] = res.data.seats[i].price
            }
        })

        // 예매하기
        const book = () => {
            console.log(state.seatIdList);
            axios.post("/api/books", state.seatIdList)
            .then(res => {
                window.alert("예매가 완료되었습니다");
                router.push("/my/books")
            })
            .catch((err) => {
                alert("로그인이 필요한 서비스입니다")
                router.push("/login")
            })
        }

        // 뒤로가기
        const goback = () => {
            router.go(-1)
        }

    
        return { route, id, state, goback, book}
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 2rem;
}
.stage-box {
    text-align: center;
    width: 80%;
    height: 200px;
    background-color: lightgray;
    margin: 0 auto;
    color: white;
}

.inline{
    display: inline-block;
}

@media (min-width: 992px) {
  .rounded-lg-3 { border-radius: .3rem; }
}

.book-box {
    margin-top: 5rem;
    margin-bottom: 5rem;
}

</style>