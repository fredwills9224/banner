import { ResourcePicker } from "@shopify/app-bridge-react";
import { EmptyState, Page } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function index(){
   
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState([]); 

  useEffect(()=>{

    const ids = products.map(product => {
      
      return{
        id: product.id
      }

    });
    setProductsId(ids);

  }, [products]);

  function handleProductSelection(payload){
    setIsOpen(false);
    setProducts(payload.selection);
  };

  return(
    <>

      <ResourcePicker 
        resourceType="Product"
        open={isOpen}
        onCancle={()=> setIsOpen(false)}
        onSelection={handleProductSelection}
        initialSelectionIds={productsId}
      />
      {products.length > 0 ? (

        <Page 
          title='Product Selector'
          primaryAction={{
            content:'Select product',
            onAction: ()=> setIsOpen(true)
          }}
        >
           
          <ProductList
            products={products}
          />
          {/* {products.map(product =>(
            <div key={product.id}>
              {product.title}
            </div>  
          ))} */}
         
        </Page>
        ) : (
        <EmptyState
          heading='Manage the products you want to display'
          action={{
            content: 'Select products',
            onAction: ()=> setIsOpen(true)
          }}
          image='https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'
        >
           
          <p>Select the products you want to use on your banner</p>
         
        </EmptyState>
        
      )}

    </>
  );

};

export default index;