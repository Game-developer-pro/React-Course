import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./SingleProduct.module.css";

export const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchSingleProduct = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:4001/product/${id}`);

      if (!res.ok) {
        throw new Error("Could not find product.");
      }

      const data = await res.json();

      setProduct(data.product || data);

    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSingleProduct();
  }, [fetchSingleProduct]);

  if (isLoading) return <div className={styles.loader}>Loading product details...</div>;
  if (errorMessage) return <div className={styles.error}>{errorMessage} <button onClick={() => navigate(-1)}>Go Back</button></div>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        &larr; Back to Products
      </button>

      <div className={styles.detailsCard}>
        <div className={styles.imageSection}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.infoSection}>
          <h1>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.description}>
            <h3>About this item</h3>
            <p>{product.description}</p>
          </div>
          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}


