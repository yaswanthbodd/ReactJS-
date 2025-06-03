import { useReducer } from "react";

const intialstate = {
    showTextFlag : false,
    changeTextColor : false,
}

const SHOW_TEXT = 'SHOW_TEXT';
const HIDE_TEXT = 'HIDE_TEXT';
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE';

function reducer(state, action){
    switch(action.type){
        case SHOW_TEXT :
            return {
                ...state,
                showTextFlag : true
            };
        case HIDE_TEXT : 
            return {
                ...state,
                showTextFlag : false
            };
        case CHANGE_TEXT_STYLE :
            return {
                ...state,
                changeTextColor : !state.changeTextColor
            }
    }
}

function UseReducerExam (){

    const [state,dispatch] = useReducer(reducer,intialstate);

    return(
        <div>
            { state?.showTextFlag ? <h2 style={{backgroundColor : state.changeTextColor ? 'yellowgreen' : 'blue'}}>This is the UseReducerExample</h2> : null}
            
            <button onClick={()=>dispatch({type : HIDE_TEXT})}>Hide Text</button>
            <button onClick={()=>dispatch({type : SHOW_TEXT})}>Show Text</button>
            <button onClick={()=>dispatch({type : CHANGE_TEXT_STYLE})}>Change Background Text</button>
        </div>
    )
}

export default UseReducerExam;