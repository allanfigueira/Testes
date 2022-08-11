//atualizar o titulo de informação do ultimo componente...
//atualizar informações passadas pra descrição e datalog
//esses datalog viria dos dados que estão sendo monitorados pelo grafico/banco de dados juntamente com a descrição...

// fazer um componente para usar nas datas...

import Log from "../Log";
import {FaEye, FaInfo,FaCheck } from "react-icons/fa";
const Logssec = (props) => {
  return (
    <>
      <div className="container-logssec">

        <section className="container-log-dia">

          <h3 className="log-data">02 de Agosto</h3>
          <div className="container-log">

            <div>
              <FaCheck className="check-icon2" />
              <div className="traço"></div>
          </div>

            <Log
            titulo="Solução"
            descrição={"Gerador atenderá como backup em casos semelhantes, garantindo assim, a continuidade por períodos maiores que 23 horas."}
            datalog={"4"}
            />
          </div>
          <div className="container-log">
            <div>
              <FaEye className="eye-icon" />
              <div className="traço"></div>
            </div>
            <Log 
            titulo="Problema sendo monitorado"
            descrição={"Aquisição de nova unidade de GERADOR DE ENERGIA A DIESEL"}
            datalog={"8"}
            />
          </div>
          <div className="container-log">
            <div>
              <FaInfo className="info-icon"/>
            </div>
            <Log
            titulo={"Incidente Energético"}
            descrição={'Devido a incidentes naturais houvera a presença da falta de energia na região por tempo não previsto, fazendo com que hajam paradas do fornecimento de energia  de forma segura, o que faz com que a cada período de 23 horas seja obrigatório o reinício das atividades dos serviços prestados. Isto ocorre diante ao fato de que o gerador disponibilizado pela ALERTRACK possui coeficiência de até 20 horas de disponibilidade do fornecimento contínuo, somados à disponibilização por parte de armazenamento de energia, menos o tempo necessário para o desligamento dos servidores'}
            datalog={'10'}
            />
            
          </div>
          <p  className="regIncidente">Nenhum incidente do WhatsApp neste dia</p>
        </section>




        <section className="container-log-dia">
          <h3 className="log-data">01 de Agosto</h3>

          <div className="container-log">
            <div>
              <FaCheck className="check-icon2" />
              <div className="traço"></div>
            </div>
            <Log 
            titulo="Solução"
            descrição="WhatsApp voltou a operar normalmente."
            datalog="4"
            />
          </div>
          <div className="container-log">
            <div>
              <FaEye className="eye-icon" />
              <div className="traço"></div>
            </div>
            <Log 
            titulo="Problema sendo monitorado"
            descrição={"O serviço está sendo restaurado para alguns países."}
            datalog={"8"}
            />
          </div>
          <div className="container-log">
            <div>
            <FaInfo className="info-icon"/>
            </div>
            <Log 
            titulo="WhatsApp Interrompido"
            descrição={"O WhatsApp está passando por uma interrupção geral em todo o mundo. Não é possível usar o serviço porque o servidor está fora do ar."}
            
            datalog={"10"}
            />
          
          </div>

        </section>
        
      </div>
    </>
  );
};

export default Logssec;
