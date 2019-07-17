import React from 'react';
const LESS_TEXT = ' Eiusmod proident reprehenderit incididunt veniam elit aute commodo fugiat elit. Ipsum aliqua in qui occaecat ullamco.Et est elit tempor deserunt.';
const MORE_TEXT='Exercitation quis ex et ad est et Lorem in. Ullamco proident commodo dolore est minim aliqua nostrud dolor consectetur est. Pariatur occaecat proident veniam id consectetur ipsum adipisicing dolore nulla.'
const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="comment_container">
                {
                    [1, 2, 3].map((item) => {
                        return (
                            <div className="testimonial_inner_container" key={item}>
                                <div className="bubble">
                                    <div></div>
                                    <img src={require('../images/apos.png')} alt="apostrophe commas" />
                                    {item % 2 !== 0 ? LESS_TEXT : MORE_TEXT}
                                </div>
                                <div className="desgination_box">
                                    <img src={require('../images/face.png')} alt="Client icon" />
                                    <div>
                                        <p style={{ color: '#484340' }}>CLIENT NAME</p>
                                        <p>position, ORG</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Testimonials;