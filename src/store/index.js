import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import AV from 'avoscloud-sdk';
AV.initialize('al9rKGubgSvyll2UuCCTD8Dm-gzGzoHsz', 'RK2KCqXXbXq4hI62ExdQv8pQ');
let currentUser = AV.User.current();
let logined = true; 
if (!currentUser) {
    logined = false
}

Vue.use(Vuex)

const state = {
    Cloud: AV,
    login: {
        show: false
    },
    sign: {
        show: false
    },
    modal: {
        show: false,
        title: '',
        text: ''
    },
    logined: {
        value: logined,
        user:currentUser
    },
    loading:true,
    common: {
        isEmail: new RegExp("([A-Za-z0-9][-A-Za-z0-9]+\@)+([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}")
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

/*if (module.hot) {
    module.hot.accept(['./actions', './mutations'], () => {
        const newActions = require('./actions').default
        const newMutations = require('./mutations').default
        store.hotUpdate({
            actions: newActions,
            mutations: newMutations
        })
    })
}*/

export default store