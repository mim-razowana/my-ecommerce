import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const collection = () => {
  const { products ,search ,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts = () => {
    let filterProductCopy = filterProducts.slice(); // Create a shallow copy of the products array
    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory ,search,showSearch ,products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  // useEffect(() => {
  //   console.log(subCategory);
  // }, [subCategory]);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2" >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Filter Icon"
          />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Jamdani'} onChange={toggleCategory} />
              Jamdani
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Benaroshi'} onChange={toggleCategory} />
              Benaroshi
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Silk'} onChange={toggleCategory} />
              Silk
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Green'} onChange={toggleSubCategory} />
              Green
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Yellow'} onChange={toggleSubCategory} />
              Yellow
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Red'} onChange={toggleSubCategory} />
              Red
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Black'} onChange={toggleSubCategory} />
              Black
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Blue'} onChange={toggleSubCategory} />
              Blue
            </p>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />

          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2 ">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default collection