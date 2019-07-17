import React from 'react';
const Footer = () => {
    return (
        <div className="footer">
            <p>&#169; 2017 Company. All Rights Reserved.</p>
            <div>
                <p>Follow us on:</p>
                <img src={require('../images/fb_icon.png')} alt="facebook share" />
                <img src={require('../images/linkedin_icon.png')} alt="linkedin share" />
                <img src={require('../images/twitter_icon.png')} alt="twitter share" />
            </div>
        </div>
    )
}
export default Footer;