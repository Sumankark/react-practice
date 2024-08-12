import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  let params = useParams();
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");

  let getProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET",
    });
    let data = result.data.result;
    setName(data.name);
    setPrice(data.price)
    setQuantity(data.quantity)
  };
  useEffect(() => {
    getProduct();
  }, []);

  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      price: price,
      quantity: quantity,
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/products/${params.id}`,
        method: `PATCH`,
        data: data,
      });
      console.log(result);

      setName("");
      setPrice("");
      setQuantity("");
      // toast("Product create successfully.");
      toast.success(result.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Unable to create product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Product name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          placeholder="Enter price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
