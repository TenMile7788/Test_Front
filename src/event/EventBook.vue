<template>
    <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">좌석 선택</h1>
        <div class="col-lg-6 mx-auto">
            <div class="stage-box">
                STAGE
            </div>
            <div class="book-box">
                VIP
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'V'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div><span style="color: red; text-decoration: line-through;">{{ state.seatPrice["V"]}}</span>원
                <span>{{ state.seatPrice["V"] * state.performance.discountPer / 100 }}원</span>
                <br>
                R 
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'R'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div> <span style="color: red; text-decoration: line-through;">{{ state.seatPrice["R"]}}</span>원
                <span>{{ state.seatPrice["R"] * state.performance.discountPer / 100 }}원</span>
                <br>
                S 
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="(seat, idx) in state.seats" :key="idx">
                    <div v-if="seat.seatRow == 'S'">
                        <div v-if="!seat.isBook">
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="state.seatIdList" v-bind:value="seat.seatId">
                            <label class="btn btn-outline-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="btn-check" autocomplete="off" v-bind:id="seat.seatId" v-model="seat.seatIdList" disabled>
                            <label class="btn btn-secondary" v-bind:for="seat.seatId">{{ seat.seatRow }}{{ seat.seatCol }}</label><p></p>
                        </div>
                    </div>
                </div> <span style="color: red; text-decoration: line-through;">{{ state.seatPrice["S"]}}</span>원
                <span>{{ state.seatPrice["S"] * state.performance.discountPer / 100 }}원</span>
                <br>
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
                </div> <span style="color: red; text-decoration: line-through;">{{ state.seatPrice["A"]}}</span>원
                <span>{{ state.seatPrice["A"] * state.performance.discountPer / 100 }}원</span>
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
    name: "EventBook",
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            seats: {},
            seatIdList: [],
            seatPrice: {},
            performance: ""
        })

        // 좌석 정보 초기화
        axios.get("/api/event/performances/" + id)
        .then((res) => {
            state.seats = res.data.seats
            state.performance = res.data
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