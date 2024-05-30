<template>
  <div>
     <div class="container">
        <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <img :src="`${state.book.posterPath}`" />
            <div class="col-lg-6">
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th class="seat-info">[공연 정보]</th>
                        </tr>
                        <tr>
                            <th scope="row">공연이름</th>
                            <td>{{ state.book.performanceName }}</td>
                        </tr>
                        <tr>
                            <th scope="row">공연시간</th>
                            <td>총{{ state.book.viewingHours }}분</td>
                        </tr>
                        <tr>
                            <th scope="row">공연날짜</th>
                            <td>{{ state.date[0] }}년 {{ state.date[1] }}월 {{ state.date[2] }}일</td>
                        </tr>
                        <tr>
                            <th scope="row">출연진</th>
                            <td>{{ state.book.cast }}</td>
                        </tr>
                        <tr>
                            <th scope="row">장소</th>
                            <td>{{ state.book.location}}</td>
                        </tr>

                         <!-- 좌석 정보 -->
                        <tr>
                            <th class="seat-info">[예매한 좌석]</th>
                        </tr>
                        
                        <tr v-for="(seat, idx) in state.book.seats" :key="idx">
                            <th>좌석 <span class="seat-title">{{ seat.seatRow }}{{ seat.seatCol }}</span></th>
                            <td><span class="seat-price">{{ seat.price }}</span>원</td>
                        </tr>
                       
                         <tr>
                            <th scope="row">총 결제 가격</th>
                            <td><span class="seat-price">{{ state.book.totalPrice }}</span>원</td>
                        </tr>
                         <tr>
                            <th scope="row">결제 상태</th>
                            <td>결제 대기중</td>
                        </tr>
                    </tbody>
                    </table>
                <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                </div> -->


            </div>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
             <router-link :to="{path: `/my/books`}">
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">리스트로 돌아가기</button>
             </router-link>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from "axios"
import { useRoute } from "vue-router";
axios.defaults.withCredentials = true; 

export default {
    name: "MyBookDetail",
    setup() {
        const route = useRoute();
        const id = route.params.id;

        const state = reactive({
            book: "",
            date: []
        })

        const getBooks = () => {
            axios.get("/api/books/" + id)
            .then((res) => {
                state.book = res.data
                state.date = res.data.date
            })
        }
        getBooks()

        return { route, id, state }
    }
}
</script>

<style scoped>
img {
    display: inline-block;
    width: 50%;
    height: 50%;
    background-size: cover;
    background-position: center;
}
.seat-info {
    padding-top: 3rem;
    color: #6c757d;
    font-size: 1.2rem;
}

th {
    color: #6c757d;
}

.seat-title {
    color: #6c757d;
}
.seat-price {
    color: #db3545;
}
</style>