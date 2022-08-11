// montar a condição pra alteração do icone junto do status atual na tooltip
//

const Camposerviço = (props) => {
    return ( 
        <div className="camposerviço-container">
            <p>{props.serviço}</p>
            <div className="tooltip-serviços"><span className="tooltiptext">teste</span>{props.icone}</div>
        </div>
 
        
     );
}
 
export default Camposerviço;