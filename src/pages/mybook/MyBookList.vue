<template>
    <main class="container">
        <!-- Header  -->
        <div class="container px-4 py-5" id="featured-3">
            <h2 class="pb-2 border-bottom">나의 예매 리스트</h2>
        </div>

        <!-- List -->
             <div class="row mb-2">
                <div class="col-md-6" v-for="(book, idx) in state.bookList" :key="idx">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                        <span class="badge text-bg-success">{{ book.category }}</span>
                        <h3 class="mb-4">{{ book.performanceName }}</h3>
                        <div class="mb-1 text-body-secondary">출연진: {{ book.cast }}</div>
                            <p class="card-text mb-auto">결제금액: {{ book.totalPrice }}원</p>

                            <div class="seat-box">
                                좌석
                                <div class="inline" v-for="(seatName, idx) in book.seatNameList" :key="idx">
                                    <div class="card-text mb-auto"><span class="seat-name">{{ seatName }}</span></div>
                                </div>
                            </div>
                        </div>
                        
                        <router-link :to="{path: `/my/books/${book.bookId}`}" class="icon-link gap-1 icon-link-hover stretched-link">
                            > 자세히 보기
                        </router-link>
                    </div>
            </div>
        </div>
    </main>
</template>

<script>
import { reactive } from 'vue'
import axios from "axios"
axios.defaults.withCredentials = true; 

export default {
    name: "MyBookList",
    setup() {
        const state = reactive({
            bookList: []
        })

        axios.get("/api/books")
            .then((res) => {
                state.bookList = res.data
            })
    
        return { state }
    }
}
</script>

<style scoped>
    .img {
        display: inline-block;
        width: 100%;
        height: 450px;
        background-size: cover;
        background-position: center;
    }
    .inline {
        display: inline-block;
        margin-right: 0.5rem;
    }
    .icon-link {
        margin: 1rem;
    }
    .badge {
        width: 10%;
        margin-bottom: 1rem;
    }
    .seat-name {
        font-weight: bold;
        color: #6c757d;
    }
</style>