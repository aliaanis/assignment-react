import React from 'react';

const Button = ({ children,classname }) => {
    return (
        <div className={`theme_button ${classname}`}>
            {children}
        </div>

    )
}
export default Button;