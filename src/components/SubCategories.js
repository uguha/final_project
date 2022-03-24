import React from 'react';
import { useParams } from 'react-router-dom';

import Categories from './Categories';
import { subCategories, categories } from '../Data';

function SubCategories() {
    let categoryName = useParams().category;
    let categoryId = categories.filter((e) => e.category === categoryName)[0].id;
    let localSubCategories = subCategories.filter((e) => e.parentCategoryId === categoryId);
    
    return (
        <div className="products">
            {localSubCategories.map((s) => {
                return <Categories key={s.id} title={s.categoryName} category={s.category} photo={s.photo}/>    
            })}
        </div>
    );
}

export default SubCategories;
