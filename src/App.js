import React, { useEffect, useState } from "react";
import { FaInbox } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./components/product/ProductCard";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

import axios from "axios";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, page]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search`,
        {
          params: {
            q: searchTerm,
            limit: 10,
            skip: (page - 1) * 10,
          },
        }
      );
      const data = response.data;
      if (page === 1) {
        setProducts(data.products);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }
      setHasMore(data.products.length > 0);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  return (
    <>
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />

      <div style={{ padding: "20px" }} className="product_card_list">
        <InfiniteScroll
          dataLength={products.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={hasMore}
          loader={<p className="text-center">Loading...</p>}
          scrollThreshold={0.95}
        >
          <div className="container">
            <div className="row">
              {loading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <div className="col-lg-3 mb-4" key={index}>
                    <ProductCard loading={loading} />
                  </div>
                ))
              ) : products.length > 0 ? (
                products.map((product) => (
                  <div
                    className="col-lg-3 d-flex align-items-stretch mb-4"
                    key={product.id}
                  >
                    <ProductCard product={product} loading={loading} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <FaInbox className="fs-1 mt-5" />
                  <p>No product found</p>
                </div>
              )}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      <Footer />
    </>
  );
};

export default App;
