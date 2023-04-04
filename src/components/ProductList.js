import React from 'react'
import { useFilterContext } from '../context/filterContex';
import GridView from './GridView';


const ProductList = () => {
  const { filter_products, gridView } = useFilterContext();
  // console.log(filter_products)
  if (gridView === true) {
     return <GridView products={filter_products} />
  }
  // if(gridview === false ){
  //   return <ListView products = {filter_products} />
  // }
}


export default ProductList
