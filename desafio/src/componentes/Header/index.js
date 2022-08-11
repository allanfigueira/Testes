
import Status from "../Status";

const Header = () => {
    return (
    <> 
        <header>
        <Status nome="STATUS ALERTRACK"
            estado="Todo o serviço operacional"    
            ultimoIncidente="Registro"
            diaIncidente="6 dias"
        />
        </header>

        </>
     );
}
 
export default Header;