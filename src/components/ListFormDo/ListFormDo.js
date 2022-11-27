

function ListFormDo({array, setArr}){

    let handleDelate = (e) => {
        let arrAppoggio2 = [...array];
        arrAppoggio2.splice(e.target.id, 1)
        setArr(arrAppoggio2)
    };

    let aggiorna = (e,indice) => {
        let arrAggior = [...array]
        arrAggior[indice] = e.target.value
        setArr(arrAggior)
    };

    let modifica = (e, indice) =>{
       let stato = document.getElementById("input"+indice).disabled;
       if(stato){
        document.getElementById("input"+indice).disabled=false;
       }else{
        document.getElementById("input"+indice).disabled=true;
        e.target.value="Abilita";
       }
    };

    return(

        <div className="list">
            <ul>
                {array.map((value, indice) => (<li key={indice}> 
                <input type="text"  value={value} onChange={(e)=> aggiorna ( e,indice)} disabled={true} id={"input"+indice}/>  
                <button onClick={handleDelate} id={indice}>x</button>
                
                <input type="button" value="Modifica" onClick={(e)=>modifica(e, indice)} />
                </li>
                ))}
                
            </ul>
        </div>
    );

    
}

export default ListFormDo;