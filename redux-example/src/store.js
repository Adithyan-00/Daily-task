import {createStore ,combineReducers} from 'redux'

const initialState = {
    value: 0
};

const initial ={
    value: 5
};

const last = {
    value : 9
};

function Reducer(state = initialState , action){
    switch(action.type){
        case "increament" :
            return {
                state,
                value: state.value + 1
            };
        case "decreament" :
            return{
                state,
                value: state.value - 1
            };
        default :
            return state              
    }
}

function ReducerVal(state = initial, action){
    switch(action.type){
        case "INCREAMENT" :
            return{
                state,
                value : state.value + 5
            }
        case "DECREAMENT" :
            return{
                state,
                value : state.value - 5
            }

        default :
            return state
    }
}

function ReducerLas(state = last, action){
    switch(action.type){
        case "ADD" :
            return{
                state,
                value : state.value + 9
            }
        default :
            return state
    }
}

const Allreducer = combineReducers({
    one: Reducer,
    two:ReducerVal,
    last:ReducerLas
})

const store = createStore (Allreducer)

export default store;
