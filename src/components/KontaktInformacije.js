import React, {Component} from 'react';
import Naslov from "./Naslov";
import {AiFillCar} from "react-icons/ai";
import {RiContactsFill} from "react-icons/ri"
import {MdPublic} from "react-icons/md";
import {FaInfoCircle} from "react-icons/all";
class Usluge extends Component {
    state={
        usluge:[{
            slika: <FaInfoCircle/>,
            naslov: "Adresa",
            podaci: "Esplanade Zagreb Hotel",
            podaci1: "T. +385 1 4566 666",
            podaci2: "F. +385 1 4566 050",
            podaci3: <p>E: <a href="mailto:name@email.com">info@esplanade.hr</a></p>
        },
            {
                slika: <RiContactsFill/>,
                naslov: "Drugi kontakti",
                podaci: "Rezervacije",
                podaci1: "T. +385 1 4566 600",
                podaci2: "F. +385 1 4566 020",
                podaci3: <p>E: <a href="mailto:name@email.com">reservations@esplanade.hr</a></p>
            },
            {
                slika: <MdPublic/>,
                naslov: "Marketing, finansije, odnosi sa ljudskom javnošću",
                podaci: "T. +385 1 4563 888",
                podaci1: "T. +385 1 4566 011",
                podaci2: "T. +385 1 4566 061",
                podaci3: <p>E: <a href="mailto:name@email.com"> mario.situm@esplanade.hr</a></p>
            },
        ]
    }
    render() {
        return (
            <section className={"usluge"}>
                <Naslov naslov={"INFORMACIJE"}/>
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
                            <p>{element.podaci1}</p>
                            <p>{element.podaci2}</p>
                            <p>{element.podaci3}</p>
                        </article>);
                    })}
                </div>
            </section>
        );
    }
}

export default Usluge;