import React, {Component} from 'react';
import Naslov from "./Naslov";
import {AiFillCar} from "react-icons/ai";
import {MdPets} from "react-icons/md";
import {FaSwimmingPool, FaCocktail, FaParking, FaShuttleVan, FaAsterisk} from "react-icons/all";
class Usluge extends Component {
    state={
        usluge:[{
            slika: <FaCocktail/>,
            naslov: "Restoran",
            podaci: "Od objedovanja nadahnutog visokim društvom do suvremenog mediteranskog bogatstva okusa i posluživanja jednostavno najboljih štrukli u gradu, nagrađivani restorani hotela Esplanade Zagreb naprosto su predvodnici u svojoj klasi."
        },
            {
                slika: <MdPets/>,
                naslov: "Ljubimci",
                podaci: "Svakom psu bit će priređena VIP dobrodošlica u sobi. Uz specijalno dizajniran krevetić s udobnim jastučićem, vašeg malog ljubimca dočekat će neodoljiva kost za žvakanje te bočica najfinije vode, kako bi se ljubimac osvježio nakon dugog i napornog puta."
            },
            {
                slika: <FaShuttleVan/>,
                naslov: "Obilazak Zagreba",
                podaci: "Segway City Tour Zagreb upoznat će vas s našim gradom i pružiti iskustvo kojeg ćete se sjećati zauvijek. Nesputano ćete uživati u zagrebačkim građevinama i pročeljima, detaljima i bojama, dok brzinu kretanja - od rola do bicikla - prilagođavate trenutku. Segway će vam omogućiti užitak pokreta i upijanja najljepših gradskih vizura za sjećanje."
            },
            {
                slika: <AiFillCar/>,
                naslov: "Limuzina",
                podaci: "Hotel u svojoj raskošnoj ponudi nudi uslugu prijevoza limuzinom u partnerstvu s agencijom PERMANSIO Deluxe Getaways.Riječ je o vrhunskoj i profesionalnoj usluzi koja vam nudi diskretan, luksuzan i učinkovit prijevoz do vaše destinacije. "
            }
        ]
    }
    render() {
        return (
            <section className={"usluge"}>
                <Naslov naslov={"HOTELSKE USLUGE"}/>
                <div className={"usluge-centar"}>
                    {this.state.usluge.map((element,indeks)=>{
                        return(<article key={indeks} className={"service"}>
                            <span>
                                {element.slika}
                            </span>
                            <h6>
                                {element.naslov}
                            </h6>
                            <p>{element.podaci}</p>
                        </article>);
                    })}
                </div>
            </section>
        );
    }
}

export default Usluge;