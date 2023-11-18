"use client";

import Rating from "@mui/material/Rating";

interface ProductDetailsProps {
     product: any;   
    }


const ProductDetails: React.FC<ProductDetailsProps> = 
({product}) => {
    const productRating = 
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0 ) / 
    product.reviews.length;
    return ( 
    <div>
    <div>Images</div>
    <div>
        <h2>{product.name}</h2>
        <div>
            <Rating value={productRating} readOnly />
            <div>{product.reviews.length} reviews</div>
        </div>
    </div>
    </div> 
    );
};
 
export default ProductDetails;