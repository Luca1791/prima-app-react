import Navbar from "../Navbar/Navbar";


function Header(){
    return(
        <header> 
            <Navbar/> {/* é il nostro camponente Navbar non una qualsiasi navbar */}
           <h2>Header</h2> 

        </header>
    )
}

export default Header;