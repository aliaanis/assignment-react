import React from 'react';
import { Button } from '../common';

const LINKS = ['About', 'Services', 'Solutions', 'Blog'];

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'About'
        }
    }
    updateActive = (e) => {
        this.setState({ active: e.target.id })
    }
    render() {
        return (
            <nav >
                <img src={require("../images/hamburger.png")} className="mobile_icons" alt="menu" />
                <img src={require("../images/company_logo.png")} alt="company logo" />
                <img src={require('../images/comment.png')} className="nav_hamburger" alt="share" />
                <ul className="nav_right_list" >
                    {
                        LINKS.map((item) => (
                            <li key={item} style={{ color: this.state.active === item && 'white' }} id={item}
                                onClick={(e) => this.updateActive(e)}
                            >{item}</li>
                        ))
                    }
                    <li>
                        <Button classname="nav_right_button">
                            <img src={require('../images/comment.png')} className="nav_button_img " alt="msg" />
                            <span>Get In Touch</span>
                        </Button>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Nav;
