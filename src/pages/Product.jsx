import React, { useEffect, useState, useCallback } from 'react';
import productStyles from './Product.module.css';
import { useNavigate } from 'react-router-dom';

import { publicInstance } from '../api/api';


export const Product = () => {
  const [product, setProduct] = useState(null);
  const [monitor, setMonitor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await publicInstance.get("/product");

      if (response.data && response.data.product) {
        setProduct(response.data.product);
      } else {
        setProduct([]);
      }
    } catch (error) {
      setProduct(null);
      setErrorMessage("Failed to fetch product.");
      console.error("Fetch error:", error);
      setProduct(null);
      setErrorMessage("Failed to fetch product.");
      console.error("Fetch error:", error);
    } finally {
      // 
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct, monitor]);

  return (
    <div className={productStyles.container}>
      <h1>This is our Product page</h1>
      <button onClick={() => setMonitor(!monitor)} disabled={isLoading}>
        {isLoading ? "Loading..." : "Refetch Product"}
      </button>

      <hr />

      {/* Conditional Rendering for States */}
      {isLoading && <p>Loading products...</p>}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {!isLoading && product && product.length > 0 ? (
        <div className={productStyles.productGrid}>
          {product.map((item, i) => (
            <div className={productStyles.productItem} key={item.id || i}>
              <div className={productStyles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className={productStyles.title}>{item.title}</h3>
              <p className={productStyles.description}>{item.description}</p>
              <p className={productStyles.price}>${item.price}</p>
              <button className={productStyles.showDetails} onClick={() => navigate(`./SingleProduct/${item._id}`)}>Show details</button>

            </div>
          ))}
        </div>
      ) : (
        !isLoading && !errorMessage && <p>No products found.</p>
      )}
    </div>
  );
};