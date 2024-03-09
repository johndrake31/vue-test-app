import axios from "axios";

export default {
    namespaced: true,
    state: {
        foods: [],
        pokimons: []
    },
    mutations: {
        ADD_FOOD(state, food) {
            // console.log(food);
            state.foods.push(food)
        },
        ADD_POKIMON(state, pokemons) {
            state.pokemons = pokemons
        },
    },
    getters: {
        //eslint-disable-next-line max-len
        food(state) {
            return id => state.foods.find(f => f.id === id)
        }
    },
    actions: {
        getPokemon(context) {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
                .then((res) => {
                    context.commit('ADD_POKIMON', res.data.results)
                    console.log(res.data.results);
                }
                )
                .catch(err => console.error(err))
        },
        // for when you want to return something back to the component that called the action
        // getPokemon1(context) {
        //    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
        //         .then((res) => {
        //             context.commit('ADD_POKIMON', res.data.results)
        //             console.log(res.data.results);
        //         }
        //         )
        //         .catch(err => console.error(err))
        // }
    }
}

