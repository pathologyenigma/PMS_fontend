import {createStore} from "vuex"

const store = createStore({
    state(){
        return {
            title: ""
        }
    },
    mutations: {
        setTitle(State,playload){
            State.title = playload
        }
    }
})

export default store