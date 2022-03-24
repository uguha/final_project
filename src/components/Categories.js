import React from 'react';
import { Link } from 'react-router-dom';

import '../css/App.css';

function Categories(props) {
    return (
        <div className="product">
            <Link to={props.category} className="product-link">
                <img src={props.photo} className="product-image" alt={props.title}/>
                <p className="product-title">{props.title}</p>
            </Link>
        </div>
    );
}

export default Categories