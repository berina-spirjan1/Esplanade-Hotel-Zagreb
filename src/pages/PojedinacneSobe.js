import React, {Component, useEffect} from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import {Link} from 'react-router-dom';
import {RoomContext} from "../Context";
import Glavna from "../components/glavna";
import Naslovi from "../components/Naslovi";
import Naslov from "../components/Naslov";
import StyledHero from "../components/StilGlavna";
class PojedinacneSobe extends Component{
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state={
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
        //console.log(this.state)
    }
    static contextType=RoomContext;
    //componentDidMount() {}

    render(){
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug);
        console.log(room)
        if (!room) {
            return (
                <div className="error">
                    <h4>Nije pronađena soba koju tražite...</h4>
                    <Link to="/sobe" className="btn-primary">
                        Natrag na sobe
                    </Link>
                </div>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images}=room
        const [glavnaSlika,...defaultImg]=images;
        return(
            <>
                <StyledHero img={glavnaSlika || this.state.defaultBcg}>
                    <Naslovi naslov={`${name} soba`}>
                        <Link to="/sobe" className={"btn-primary"}>NAZAD NA SOBE</Link>
                    </Naslovi>
                </StyledHero>
                <section className={"pojedinacna-soba"}>
                    <div className={"pojedinacna-soba-slike"}>
                        {defaultImg.map((item,indeks)=>{
                            return <img key={indeks} src={item} alt={name}/>
                        })}
                    </div>
                    <div className={"pojedinacna-soba-informacije"}>
                        <article className={"desc"}>
                            <h3><b>DETALJI</b></h3>
                            <p>{description}</p>
                        </article>
                        <article className={"info"}>
                            <h3><b>INFORMACIJE</b></h3>
                            <p><b>Cijena:</b> {price} kuna</p>
                            <p><b>Veličina sobe:</b> {size}</p>
                            <p><b>Broj osoba:</b> {capacity} osoba</p>
                            <p><b>Životinje:</b> {pets ? "ljubimci su dozvoljeni":"ljubimci nisu dozvoljeni"}</p>
                            <p><b>Doručak:</b> {breakfast ? "uključen u cijenu sobe":"nije uključen u cijenu sobe"}</p>
                        </article>
                    </div>
                </section>
                <section className={"room-extras"}>
                    <h3><b>DODACI U SOBI: </b></h3>
                    <ul className={"extras"}>
                        {extras.map((item,indeks)=>{
                            return <li key={indeks}>-{item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }

}
export default PojedinacneSobe;