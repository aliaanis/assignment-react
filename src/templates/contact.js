import React from 'react';
import { Button } from '../common';

class Form extends React.Component {
    render() {
        return (
            <form>
                <div className="input_grp ">
                    <input placeholder="Fullname" className="input_type"/>
                    <input placeholder="Email Address" className="input_type"/>
                    <input placeholder="Phone Number" className="input_type"/>
                </div>
                <textarea placeholder="Message in brief" className="input_type"/>
                <Button>Submit</Button>
            </form>
        )
    }
}

const Contact = () => {
    return (
        <div className="contact">
            <div className="footer_bg"></div>
            <div className="inner_container">
                <h1>Convinced To Work With Us?</h1>
                <p>Company has helped agencies keep their promises to clients since 2005.</p>
                <Form />
            </div>
        </div>
    )
}
export default Contact;