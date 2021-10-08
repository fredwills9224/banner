import { Thumbnail } from "@shopify/polaris";
import React from "react";
import {
    HideMinor
} from '@shopify/polaris-icons';

function ProductItem({product}){

    console.log(product);
    const image = 
        product.images[0] ? product.images[0]?.originalSrc : HideMinor
    ;
    return(
        <>
            <Thumbnail
                source={image}
            />
            {product.title}
        </>
    );

};

export default ProductItem;