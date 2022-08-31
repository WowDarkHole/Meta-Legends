import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'; 
import { actions } from '../store/modules/actions'

const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        paths: ['actions']
    })],
    modules: {
        actions,
    }
})

export default store;