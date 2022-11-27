import { useState } from "react";
import "./TodoList.css"
import ToDoForm from "../ToDoForm/ToDoForm";
import ListFormDo from "../ListFormDo/ListFormDo";
function ToDoList(){
    let [array, setArr] = useState([]); // stiamo creando un nuovo stato 

    return(
        
        <>
        
            <ToDoForm array={array} setArr={setArr}/>
            <ListFormDo array={array} setArr={setArr}/>

          

        </>
    );
}

export default ToDoList;