import Serviços from "./Serviços";
import Wchart from "./Wchart";
import '../css/main.scss'
import Pchart from "./Pchart";
import Tmpatv from "./Tmpatv";
import Logssect from "./Logssect";
import Slog from "./Slog";
const Main = () => {
    return (
        <main className="container">
               <Wchart/>
               <section className="grid1">
                <Pchart/>
                <Serviços/>
                </section>
                <Tmpatv/>
                <section className="container-logs">
                <h3>Últimos incidentes</h3>                    
                <Logssect/>
                </section>
                <Slog />

        </main>
      );
}
 
export default Main;
