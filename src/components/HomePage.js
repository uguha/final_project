import React from 'react';

import {categories} from '../Data';
import Categories from './Categories';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <h1 className="title">Solid Wood — ваш мебельный магазин</h1>
                <p className="subtitle">Мебель</p>
                <div className="products">
                    {categories.map((s) => {
                        return <Categories key={s.id} title={s.categoryName} category={s.category} photo={s.photo}/>          
                    })}
                </div>
            </>
        );
    }
}

export default HomePage;

