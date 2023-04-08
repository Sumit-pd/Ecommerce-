import styled from "styled-components";
import { useFilterContext } from "../context/filterContex";
const FilterSection = () => {
  const { filter: { text, category }
    , useFilterValue, all_products } = useFilterContext();
  // we are using type argument so that we can this code for multiple filteration like companies , color
  // else we can also do .category that will also work
  const getUniqueData = (data, type) => {
    let newData = data.map((curElement) => {
      return curElement[type]
    })
    if(type === "colors"){
      return [newData = "all" , ...new Set([].concat(...newData))]
    }

    else{
      return ["all", ...new Set(newData)];
    }
  }
  const categoryOnlyData = getUniqueData(all_products, "category");
  


  const companyOnlyData = getUniqueData(all_products, "company");


  const colorOnlyData = getUniqueData(all_products , "colors") ;
 

  // this will contain all the values that according to which the user 
  //will be able to filter the product section , ie , all the categories will be in the above variable




  return (
    <Wrapper>
      <div className="filter-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <input name="text"
            type="text"
            placeholder="search"
            autocomplete="off"
            value={text}
            onChange={useFilterValue}
          />
        </form>
        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {
              categoryOnlyData.map((curElement) => {
                return (
                  <button
                    name="category"
                    type="button"
                    onClick={useFilterValue}
                    value={curElement}
                  >
                    {curElement}

                  </button>
                )
              })
            }
          </div>

        </div>
        <div className="filter-company">
          <h3>Company</h3>
          <form>
            <select
              className="filter-company--select"
              name="company"
              onClick={useFilterValue}>
              {
                companyOnlyData.map((curElement, i) => {
                  return (
                    <option
                      key={i}
                      value={curElement}>
                      {curElement}
                    </option>
                  )
                })
              }

            </select>
          </form>

        </div>
        <div>
            <h3>Colors</h3>
        </div>

      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection
