import Camposerviço from "../Camposerviço";
import { FaCheck ,FaCog, FaExclamation } from "react-icons/fa"

const Serviços = () => {

   

    return ( 
        <div className="container-serviços">
            <h3>Serviços</h3>
            <Camposerviço
              serviço ="SacDigital"
              icone={<FaCheck className="check-icon"
             />}/>
            <Camposerviço
             serviço ="Panfleto Online"
             icone={<FaCheck className="check-icon" />}
             />
            <Camposerviço
             serviço ="SMSIdeal"
             icone={<FaCheck className="check-icon" 
             />}/>
            <Camposerviço
            serviço ="Consulta Ideal"
            icone={<FaCog className="manutenção-icon"/>
            }/>
            <Camposerviço
            serviço ="WhatsApp"
            icone={<FaExclamation className="alert-icon"/>}
            />
            <Camposerviço
            serviço ="WhatsApp Business"
            icone={<FaCheck className="check-icon" />}
            />
        </div>
    
     );
}
 
export default Serviços;