import React from "react";
import NavBar from "./NavBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import CreateProduct from "./CreateProduct";
import ShowAllProducts from "./ShowAllProducts";
import ViewProduct from "./ViewProduct";
import UpdateProduct from "./UpdateProduct";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeName } from "./features/infoSlice";
import { changeCity, changeProvince } from "./features/addressSlice";
import { changeP_Name, changePrice, changeQuantity } from "./features/productSlice";
import ShowAllProductUsingRTK from "./ShowAllProductUsingRTK";
import ViewProductUsingRTK from "./ViewProductUsingRTK";
import CreateProductUsingRTK from "./CreateProductUsingRTK";
import UpdateProductUsingRTK from "./UpdateProductUsingRTK";

const Project = () => {
  let dispatch = useDispatch();
  let infoData = useSelector((store) => {
    return store.info;
  });
  let addressData = useSelector((store) =>{
    return store.address
  })
  let productData = useSelector((store) =>{
    return store.product
  })
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar></NavBar>
              <Outlet></Outlet>
              <Footer></Footer>
            </div>
          }
        >
          <Route index element={<div> Home Page</div>}></Route>
          <Route
            path="products"
            element={
              <div>
                {" "}
                <Outlet></Outlet>
              </div>
            }
          >
            {/* <Route
              index
              element={
                <div>
                  <ShowAllProducts></ShowAllProducts>
                </div>
              }
            ></Route> */}
            
            <Route
              index
              element={
                <div>
                  <ShowAllProductUsingRTK></ShowAllProductUsingRTK>
                </div>
              }
            ></Route>
            <Route
              path=":id"
              element={
                <div>
                  {/* <ViewProduct></ViewProduct> */}
                  <ViewProductUsingRTK></ViewProductUsingRTK>
                </div>
              }
            ></Route>
            <Route
              path="create"
              element={
                <div>
                  {/* <CreateProduct></CreateProduct> */}
                  <CreateProductUsingRTK></CreateProductUsingRTK>
                </div>
              }
            ></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route index element={<div>Update product</div>}></Route>
              <Route
                path=":id"
                element={
                  <div>
                    {/* <UpdateProduct></UpdateProduct> */}
                    <UpdateProductUsingRTK></UpdateProductUsingRTK>
                  </div>
                }
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>

      <div>Name: {infoData.name}</div>
      <div>Age: {infoData.age}</div>
      <div>City: {addressData.city}</div>
      <div>Province: {addressData.province}</div>

      <br /><br />
      <div>Product Name: {productData.name}</div>
      <div>Product Quantity: {productData.quantity}</div>
      <div>Product Price: {productData.price}</div>


      <button
        onClick={() => {
          dispatch(changeName("Hari"));
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          dispatch(changeAge(30));
        }}
      >
        Change age
      </button>
      <button onClick={()=>{
        dispatch(changeCity("Bhaktapur"))
      }}>Change City</button>
      <button onClick={()=>{
        dispatch(changeProvince(2))
      }}>Change Province</button>
    <br /><br />
      <button onClick={()=>{
        dispatch(changeP_Name("Orange"))
      }}>Change Product</button>
      <button onClick={()=>{
        dispatch(changeQuantity(1))
      }}>Change Product</button>
      <button onClick={()=>{
        dispatch(changePrice(120))
      }}>Change Product</button>
    </div>
  );
};

export default Project;
