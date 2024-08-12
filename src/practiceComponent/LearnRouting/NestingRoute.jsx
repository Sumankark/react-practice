import React, { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminRegister from "../../Register/AdminRegister";
import CreateProduct from "../Product/CreateProduct";
import ReadAllProduct from "../Product/ReadAllProduct";
import ReadSpecificProduct from "../Product/ReadSpecificProduct";
import UpdateProduct from "../Product/UpdateProduct";
import CreateStudent from "../Student/CreateStudent";
import ReadAllStudent from "../Student/ReadAllStudent";
import ReadSpecificStudent from "../Student/ReadSpecificStudent";
import UpdateStudent from "../Student/UpdateStudent";
import ReactLink from "./ReactLink";
import AdminVerify from "../../Register/AdminVerify";
import AdminLogin from "../../Register/AdminLogin";
import AdminProfile from "../../Register/AdminProfile";
import AdminProfileUpdate from "../../Register/AdminProfileUpdate";
import AdminLogout from "../../Register/AdminLogout";
import AdminUpdatePassword from "../../Register/AdminUpdatePassword";
import AdminResetPassword from "../../Register/AdminResetPassword";
import AdminForgotPassword from "../../Register/AdminForgotPassword";
import ReadAllUser from "../../Register/ReadAllUser";
import { GlobalVariableContext } from "../../MyApp";

const NestingRoute = () => {
  let { token, setToken } = useContext(GlobalVariableContext);
  return (
    <div>
      {/* <Routes>
            <Route path='/' element={<div><Outlet></Outlet></div>}>
                <Route index element={<div>Home</div>}></Route>
                <Route path='student' element={<div>student</div>}></Route>
                <Route path=':any' element={<div>404 page not found</div>}></Route>
            </Route>
        </Routes> */}

      {/* <Routes>
            <Route path='/' element={<div><Outlet></Outlet></div>}></Route>
        </Routes> */}

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ReactLink></ReactLink>
              <Outlet></Outlet>
              {/* <div>This is Footer</div> */}
            </div>
          }
        >
          <Route
            path="reset-password"
            element={<AdminResetPassword></AdminResetPassword>}
          ></Route>
          <Route index element={<div>Home Page</div>}></Route>

          <Route
            path="verify-email"
            element={<AdminVerify></AdminVerify>}
          ></Route>

          <Route
            path="products"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<ReadAllProduct></ReadAllProduct>}></Route>
            <Route
              path=":id"
              element={<ReadSpecificProduct></ReadSpecificProduct>}
            ></Route>
            <Route
              path="create"
              element={<CreateProduct></CreateProduct>}
            ></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route
                path=":id"
                element={<UpdateProduct></UpdateProduct>}
              ></Route>
            </Route>
          </Route>

          <Route
            path="students"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<ReadAllStudent></ReadAllStudent>}></Route>
            <Route
              path=":id"
              element={<ReadSpecificStudent></ReadSpecificStudent>}
            ></Route>
            <Route
              path="create"
              element={<CreateStudent></CreateStudent>}
            ></Route>

            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route
                path=":id"
                element={<UpdateStudent></UpdateStudent>}
              ></Route>
            </Route>
          </Route>

          <Route
            path="admin"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            {token ? (
              <>
                <Route
                  path="read-all-users"
                  element={<ReadAllUser></ReadAllUser>}
                ></Route>
                <Route
                  path="my-profile"
                  element={<AdminProfile></AdminProfile>}
                ></Route>
                <Route
                  path="profile-update"
                  element={<AdminProfileUpdate></AdminProfileUpdate>}
                ></Route>
                <Route
                  path="logout"
                  element={<AdminLogout></AdminLogout>}
                ></Route>

                <Route
                  path="update-password"
                  element={
                    <div>
                      <AdminUpdatePassword></AdminUpdatePassword>
                    </div>
                  }
                ></Route>
              </>
            ) : (
              <><Route
              path="register"
              element={<AdminRegister></AdminRegister>}
            ></Route>
            <Route path="login" element={<AdminLogin></AdminLogin>}></Route></>
            )}

            <Route
              path="forgot-password"
              element={<AdminForgotPassword></AdminForgotPassword>}
            ></Route>
            <Route index element={<div>admin dashboard</div>}></Route>
            <Route path="*" element={<div>404 Page not found</div>}>404 Page </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default NestingRoute;
