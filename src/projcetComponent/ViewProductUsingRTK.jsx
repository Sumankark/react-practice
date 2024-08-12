import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReadProductByIdQuery } from "./services/api/productService";

const ViewProductUsingRTK = () => {
  // let [product, setProduct] = useState("");
  let params = useParams();
  let id = params.id;

  let {
    isLoading: isLoadingReadDetail,
    isSuccess: isSuccessReadDetail,
    isError: isErrorReadDetail,
    error: errorReadDetail,
    data: dataReadDetail,
  } = useReadProductByIdQuery(id);

  console.log(dataReadDetail?.data);

  let product = dataReadDetail?.data || {};

  useEffect(()=>{
    if(isErrorReadDetail){
      console.log(errorReadDetail.error)
    }
  },[isErrorReadDetail, errorReadDetail])
  // let getProduct = async () => {
  //   try {
  //     let output = await hitApi({
  //       method: "GET",
  //       url: `/products/${id}`,
  //     });

  //     setProduct(output.data.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <div>
      {isLoadingReadDetail ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <img
            alt="product img"
            src={product.productImage}
            style={{ width: "300px", height: "150px" }}
          ></img>
          <p>Product Name : {product.name}</p>
          <p>Product quantity: {product.quantity}</p>
          <p>Company Name : {product.company}</p>
          <p>
            Manufacture Date :{" "}
            {new Date(product.manufactureDate).toLocaleDateString()}
          </p>
          <p>Is in featured: {product.featured ? "yes" : "no"}</p>
        </div>
      )}
    </div>
  );
};

export default ViewProductUsingRTK;
