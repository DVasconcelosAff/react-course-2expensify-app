import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) =>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
            return state;
    }
});
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
//Increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(decrementCount({decrementBy:5}));
store.dispatch(decrementCount());
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 20
// });
store.dispatch({
    type: 'RESET',
});
