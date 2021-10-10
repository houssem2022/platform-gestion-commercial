import { createStore } from 'redux';


export default ()=>{
const store=createStore((state={counter:0},action)=>{
switch (action.type){
    case 'INCREMENT':
        return {
            counter:state.counter+1
        }
    default:
        return state
}

});
return store

}