import React from 'react';
import circlesImg from '../images/circles.png';
const Card = ({ title, description, img, leftColor, rightColor, _id, onClickUpdate, onClickDelete, Del, update}) => (
    <div 
        id={_id}
        className="fitness-card" 
        style={{
                    backgroundImage: `url(${circlesImg}), 
                    linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})` 
               }}
    >
        <div className="fitness-card-info">
            <div className="info-image">
                <img src={img} alt="Exercise img"/>
            </div>
            <div className="info-exercise">
                <h1>{title}</h1>
                <p>{description}</p>
                <button className="btn-trans" onClick={() => onClickUpdate(_id)}>{update}</button>
                <button className="btn-trans" onClick={() => onClickDelete(_id)}>{Del}</button>
            </div>
        </div>
    </div>      
)

export default Card