import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
       
        const bestProduct = products.filter((item) => item.bestSeller);
        setBestSeller(bestProduct.slice(0, 5)); 
    }, [products]);

   
    if (!products || products.length === 0) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <div className="my-10">
                <div className="text-center py-8 text-3xl">
                    <Title text1={'BEST'} text2={'SELLER'} />
                    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, eligendi?
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {bestSeller.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image} // Use the first image if image is an array
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
