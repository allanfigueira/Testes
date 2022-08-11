
import { FaCheckCircle } from "react-icons/fa"



const Status = (props) => {
    return (
    <>
        <div className="status-container">
            <label>{props.nome}</label>
            <div className="divstatus-container">
                <div className="icone"><FaCheckCircle/></div>
                <div className="notificação">
                    <h3>{props.estado}</h3>
                    <p> <abbr title={props.ultimoIncidente}>Último incidente</abbr> {props.diaIncidente} atrás</p>
                </div>
            </div>
        </div>
    </>
     );
}
 
export default Status;