import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteProductMutation,
  useReadProductQuery,
} from "./services/api/productService";
import { hitApi } from "./services/hitApi";

const ShowAllProducts = () => {
  // let [product, setProduct] = useState([]);
  let navigate = useNavigate();

  let {
    isError: isErrorReadAll,
    isSuccess: isSuccessReadAll,
    isLoading: isLoadingReadAll,
    data: dataReadAll,
    error: errorReadAll,
  } = useReadProductQuery();

  let [
    deleteProduct,
    {
      isError: isErrorDelete,
      isSuccess: isSuccessDelete,
      isLoading: isLoadingDelete,
      data: dataDelete,
      error: errorDelete,
    },
  ] = useDeleteProductMutation();

  useEffect(() => {
    if (isErrorReadAll) {
      console.log("*****", errorReadAll?.error);
    }
  }, [isErrorReadAll, errorReadAll]);

  useEffect(() => {
    if (isErrorDelete) {
      console.log("*****", errorDelete?.error);
    }
  }, [isErrorDelete, errorDelete]);
  useEffect(()=>{
    if(isSuccessDelete){
      console.log("Product is delete Successfully")
    }
  },[isSuccessDelete])
  console.log(dataReadAll);  
  let product = dataReadAll?.data?.results;
  let handleView = (value) => {
    return () => {
      navigate(`/products/${value._id}`);
    };
  };
  let handleUpdate = (value) => {
    return () => {
      navigate(`/products/update/${value._id}`);
    };
  };
  let handleClick = () => {
    console.log("Button is clicked");
  };
 
  return (
    <div>
      {isLoadingReadAll?
      <div>
        <h1>Loading....</h1>
      </div>
      :
      <div>
        {product?.map?.((value, i) => {
          return (
            <div key={i} style={{ border: "solid red 5px", margin: "20px" }}>
              <img
                alt="product img"
                src={value.productImage}
                style={{ width: "90px", height: "90px" }}
              ></img>
              <p>Name: {value.name}</p>
              <p>Price: {value.price}</p>
              <p>Quantity: {value.quantity}</p>
              <p>Company: {value.company}</p>
              <button
                style={{ marginRight: "20px" }}
                onClick={handleView(value)}
              >
                view
              </button>
              <button
                style={{ marginRight: "20px" }}
                onClick={handleUpdate(value)}
              >
                update
              </button>
              <button
                style={{ marginRight: "20px" }}
                onClick={async(e) =>{
                  deleteProduct(value._id);
                }}
              >
                {isLoadingDelete?"Deleting...":"Delete Produt"}
              </button>

              <button onClick={handleClick}>Click be</button>
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default ShowAllProducts;
