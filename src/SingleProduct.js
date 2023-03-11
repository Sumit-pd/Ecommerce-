import styled from "styled-components";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useProductContext } from "./context/contextProduct"
import PageNavigation from "./components/PageNavigation";
import ProductImage from "./components/ProductImage";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const url = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();


  const { id } = useParams();
  // console.log(id);
  // we need get the url of the same everytime the page is visited so we need to use the useEffect hook

  const {
    id: sumit, // we are doing this because there is already a id available
    name,
    price,
    company,
    description,
    category,
    stock,
    reviews,
    stars,
    image

  } = singleProduct


  useEffect(() => {
    getSingleProduct(`${url}?id=${id}`)
  }, [])



  if (isSingleLoading === true) {
    return <h2 style={{ color: "red" }}>Loading...</h2>;
  }
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="container" >
        <div className="grid grid-two-column">
          {/* images of the product , This will be done with the help of an image component that we will be creating */}
          <div className="product_images">
            <ProductImage img={image} />
          </div>
          {/* product description */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" size="30" />
                <p>Free Delivery </p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" size="30" />
                <p>30 days Replacement  </p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" size="30" />
                <p> 1 year warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p> available :
                <span>{stock > 0 ? "In stock" : "Out of stock"}</span>
              </p>
              <p>Id :
                <span>{id} </span>
              </p>
              <p>Brand :
                <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart details = {singleProduct} /> }
          </div>

        </div>
      </div>
    </Wrapper>
  )
}




const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
