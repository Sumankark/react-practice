import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateProduct from "./Product/CreateProduct";
import ReadAllProduct from "./Product/ReadAllProduct";
import CreateStudent from "./Student/CreateStudent";
import ReadAllStudent from "./Student/ReadAllStudent";
import ReadSpecificProduct from "./Product/ReadSpecificProduct";
import ReadSpecificStudent from "./Student/ReadSpecificStudent";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>This is home page</div>}></Route>
      </Routes>
      <Routes>
        <Route
          path="/products/create"
          element={<CreateProduct></CreateProduct>}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/products"
          element={<ReadAllProduct></ReadAllProduct>}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/products/:id"
          element={<ReadSpecificProduct></ReadSpecificProduct>}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/students/create"
          element={<CreateStudent></CreateStudent>}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/students"
          element={<ReadAllStudent></ReadAllStudent>}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/students/:id"
          element={<ReadSpecificStudent></ReadSpecificStudent>}
        ></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<div>404 page not found</div>}></Route>
      </Routes>

      <Routes>
        <Route path="/a" element={<div><Outlet></Outlet></div>}>
            <Route path="a1" element={<div>a a1 <Outlet></Outlet></div>}>
                <Route path="a2" element={<div>a a1 a2</div>}></Route>
            </Route>
            <Route path=":any" element={<div>a any</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
