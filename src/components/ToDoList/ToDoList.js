import { useState } from "react";
import "./TodoList.css"

function ToDoList(){
    let [array, setArr] = useState([]); // stiamo creando un nuovo stato 


//    let array = ["lista 1", "lista 2", " lista 3"];
    let string = "";
   let submit = (event) => {
        event.preventDefault();
        // array.push(string);
        let arrAppoggio = [...array, string];
        setArr(arrAppoggio);
   };

   
   
   let change = (e) => {
        console.log(e.target.value);
        string = e.target.value;
     
        console.log(array);
   };
    let stampa = () => {
    
    };
    return(
        
        <>
            <div className="SezTo">
                <form action="" onSubmit={submit}>
                    <input type="text" name="" onChange={change}/>
                    <button type="submit" onClick={stampa}>
                        Aggiungi

                    </button>
                </form>
            </div>
            <div className="list">
                <ul>
                    {array.map((value, index) => (<li key={index}>{value}</li>))}
                    
                </ul>
            </div>

        </>
    );
}

export default ToDoList;