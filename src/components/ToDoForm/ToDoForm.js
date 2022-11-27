import { useState } from "react";
function ToDoForm({array, setArr}) {
    let [string, setString] = useState("");
    
    let handleSubmit = (event) => {
        event.preventDefault();
        setArr([...array, string])
        setString("");
    };

    let handleChange = (e) => {
        
        setString(e.target.value);  
    };
   
   
   
    return(
        
        <div className="SezTo">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" onChange={handleChange} value={string}/>
                <button className="btn" type="submit">
                    Aggiungi

                </button>
            </form>

                
        </div>
    );
}

export default ToDoForm;