import React, {Component} from 'react';
import slika from '../images/logo.png';
import {FaAlignJustify} from 'react-icons/fa';
import {Link} from 'react-router-dom';
class NavigacionaTraka extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen});
}
    render() {
        return (
            <nav className={"navbar"}>
                <div className={"nav-center"}>
                    <div className={"nav-header"}>
                        <Link to="/">
                            <img src={slika
                            } alt={"Esplanade hotel logo"} className={"logo"}/>
                        </Link>
                        <button type={"button"} className={"nav-btn"} onClick={this.handleToggle}>
                            <FaAlignJustify className={"nav-icon"}/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links-show-nav":"nav-links"}>
                        <li><b>
                            <Link to="/">
                                NASLOVNICA
                            </Link></b>
                        </li>
                        <li><b>
                        <Link to="/sobe">
                            SOBE
                        </Link></b>
                        </li>
                        <li><b>
                        <Link to="/kontakt">
                            KONTAKT
                        </Link></b>
                    </li>
                        <li><b>
                            <Link to="/login">
                                LOGIN
                            </Link></b>
                        </li>
                        <li><b>
                            <Link to="/admin">
                                ADMIN
                            </Link></b>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigacionaTraka;