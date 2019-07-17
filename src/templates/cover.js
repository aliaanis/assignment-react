import React from 'react';

const Cover = () => {
    return (
        <div className="cover_container">
            <div className="cover_bg_img"></div>
            <div className="cover_inner_container">
                <h1 className="cover_heading">Integer bibendum sit amet arcu vel egestas</h1>
                <div className="cover_icons">
                    <div className="cover_boxes">
                        <img src={require('../images/staff.png')} className="cover_img" alt="staff"/>
                        <p className="cover_icon_text">Service Name</p>
                    </div>
                    <div className="cover_boxes">
                        <img src={require('../images/newteam.png')} className="cover_img" alt="folder"/>
                        <p className="cover_icon_text">Service Name</p>
                    </div>
                    <div className="cover_boxes">
                        <img src={require('../images/folder.png')} className="cover_img" alt="work-force"/>
                        <p className="cover_icon_text">Service Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cover;