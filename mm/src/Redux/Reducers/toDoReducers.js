// Importation 
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../Actions/ActionTypes";

//intialeState
const intialeState = {
    tasks:[
        {text :"task1",id:Math.random(),Done:false},
        {text :"task2",id:Math.random(),Done:false},
    ]
}

//PureFunction
const taskReducer =(state = intialeState,action) => {
    const { type , payload } = action
    switch (type) {
        case ADD_TASK:
            return {...state, tasks:[{...state.tasks,payload}]}
        case DELETE_TASK :
        return {...state, tasks:state.tasks.filter(el=>el.id  !==payload )}   
        case EDIT_TASK :
        return {...state,tasks:state.tasks.map((el)=>el.id == payload.id?
            {...el, text:payload.text} : el )}


        default:
            return state
    }
}
export default taskReducer;