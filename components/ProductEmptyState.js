import { EmptyState } from "@shopify/polaris";
import React from "react";

function ProductEmptyState({ setIsOpen }){
    return(

        <EmptyState
            heading='Manage the products you want to display'
            action={{
                content: 'Select products',
                onAction: ()=> setIsOpen(true)
            }}
        >
            <p>Select the products you want to use on your banner</p>
        </EmptyState>

    );
};

export default ProductEmptyState;