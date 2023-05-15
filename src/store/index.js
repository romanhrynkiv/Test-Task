import {createStore } from 'redux'

const currencyReducer = (state = {current:"USD", multiplier: 20}, action) =>{
    if (action.type === 'change'){
        return{
            current: action.value,
            multiplier: action.multiplier
        }
    }
    return state
}

const store = createStore(currencyReducer);

export default store