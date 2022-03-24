import React from 'react';
import { useParams } from 'react-router-dom';

import {subCategories, products } from '../Data';
import ShortProduct from './ShortProduct';

function Products() {
    let subCategoryTemp = useParams().subcategory;
    let subCategoryId = subCategories.filter((e) => e.category === subCategoryTemp)[0].id;
    let localProducts = products.filter((e) => e.subCategoryId === subCategoryId);
    
    return (
        <div className="products">
            {localProducts.map((s) => {
                return <ShortProduct key={s.id} id={s.id} title={s.title} photo={s.photo}/>
            })}
        </div>
    );
}

export default Products