import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './ProductCard.css';

const ProductCard = ({ product, loading }) => {
  return (
    <div className='product_card'>
      {loading ? (
        <>
          <Skeleton height={150} className='product_image' />
          <Skeleton width={80} height={20} className='mt-3 mb-1' />
          <Skeleton width="60%" height={25} />
          <Skeleton width="90%" height={15} />
          <Skeleton width={40} height={20} className='badge_placeholder' />
          <Skeleton width="50%" height={20} />
        </>
      ) : (
        <>
          <img src={product.thumbnail} alt={product.title} className='product_image' />
          <p className='text-muted mt-3 mb-0'>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
          <h6>{product.title}</h6>
          <p style={{ fontSize: "13px" }} className='mb-0'>
            {product.description.slice(0, 75) + '...'}
          </p>
          <span className="badge bg-success">{product.rating}</span>
          <p>
            <strong>₹{product.price}</strong> <span className='text-success'>{product.discountPercentage}% off</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ProductCard;
