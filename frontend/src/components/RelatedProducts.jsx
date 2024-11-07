import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        console.log('Category:', category);  // Log the passed category
        console.log('SubCategory:', subCategory);  // Log the passed subCategory
        console.log('Products:', products);  // Log the current products in context

        if (products.length > 0 && (category || subCategory)) {
            // Filter related products based on category OR subCategory match
            const relatedProducts = products.filter(
                (item) =>
                    item.category.toLowerCase().trim() === category.toLowerCase().trim() || 
                    item.subCategory.toLowerCase().trim() === subCategory.toLowerCase().trim()
            );

            console.log('Related Products:', relatedProducts);  // Log filtered products

            setRelated(relatedProducts.slice(0, 5));  // Show first 5 related items
        }
    }, [products, category, subCategory]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.length > 0 ? (
                    related.map((item, index) => (
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))
                ) : (
                    <p>No related products found.</p> 
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
