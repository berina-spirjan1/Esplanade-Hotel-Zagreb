import React from "react";
import './App.css';
import Naslovnica from "./pages/Naslovnica";
import PojedinacneSobe from "./pages/PojedinacneSobe";
import Sobe from "./pages/Sobe";
import {Route, Switch} from "react-router-dom";
import Greška from "./pages/Greška";
import NavigacionaTraka from "./components/NavigacionaTraka";
import Kontakt from "./pages/Kontakt";
import PodaciOKorisnicima from "./pages/PodaciOKorisnicima";
import MainCrud from "./components/MainCrud";
import RoomCrud from "./components/RoomCrud";
function App() {
  return (<>
          {/*U ovom dijelu koda između dva Switcha postavljamo rute u Browseru, kako bismo mogli obezbijediti
          otvaranje neke nove stranice koja ce imati svoju putanju, npr. kod navigacione trake ili
           nekih drugih komponenti*/}
           <NavigacionaTraka/>
               <Switch>
                   {/*oznaku exact koristimo kako bismo omogucili kreiranje putanje koja ce se nakačiti na
              trenutnu npr. localhost:3000/sobe/pojedinacna-soba*/}
                   <Route exact path={"/"} component={Naslovnica}/>
                   <Route exact path={"/sobe/"} component={Sobe}/>
                   <Route exact path={"/sobe/:slug"} component={PojedinacneSobe}/>
                   <Route exact path={"/kontakt"} component={Kontakt}/>
                   <Route exact path={"/login"} component={MainCrud}/>
                   <Route exact path={"/admin"} component={RoomCrud}/>
                   <Route exact path={"/podaci_o_korisnicima"} component={PodaciOKorisnicima}/>
                   <Route component={Greška}/>

                   <NavigacionaTraka/>
               </Switch>

      </>

  );
}

export default App;
