//preciso passar as informações de forma individual para cada componente e atualizar setando essas informações para (descrição,datalog)

const Log = (props) => {
    return ( 
    <>
            <div>
                <h3 className="title-log">{props.titulo}</h3>
                <p>{props.descrição}</p>
                <p className="datalog">{props.datalog} horas atrás</p>
            </div>
    </>
     );
}
 
export default Log;