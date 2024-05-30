import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            account: {
                id: "",
            }
        }
    },
    mutations: {
        setAccount(state, payload) {
            state.account.id = payload
        }
    },
    plugins: [createPersistedState()]
});

export default store;