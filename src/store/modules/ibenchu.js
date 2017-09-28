
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import axios from 'axios'

const state = {
  movieList: []
};

const mutations = {
    SET_MOVIES(state,{ list }) {
        state.movieList = list
    }
};

// 交互
const actions = {
    GET_MOVIES({ commit }) {
        axios.get('https://mobapi.ibenchu.pw/boxoffice/day/query?key=1eae6b9688738&area=CN')
        .then(res=>{
            if(res.data.msg === 'success'){
                commit('SET_MOVIES',{ list:res.data.result })
            }
        }).catch(err=>{
            console.log(err)
        })
    }
};

export default {
    state,
    mutations,
    actions
}