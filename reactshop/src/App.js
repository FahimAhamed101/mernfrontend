import logo from './logo.svg';
import './App.css';
import Login from "./components/Users/Forms/Login";
import RegisterForm from "./components/Users/Forms/RegisterForm";
import AdminDashboard from "./components/Admin/AdminDashboard";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import AdminRoutes from "./components/AuthRoute/AdminRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ManageCategories from "./components/Admin/Categories/ManageCategories";
import UpdateProduct from "./components/Admin/Products/UpdateProduct";
import ManageStocks from "./components/Admin/Products/ManageStocks";
import CategoryToAdd from "./components/Admin/Categories/CategoryToAdd";
import AddCategory from "./components/Admin/Categories/AddCategory";
import AddBrand from "./components/Admin/Categories/AddBrand";
import AddColor from "./components/Admin/Categories/AddColor";
import UpdateCategory from "./components/Admin/Categories/UpdateCategory";
import OrdersList from "./components/Admin/Orders/OdersList";
import ManageOrders from "./components/Admin/Orders/ManageOrders";
import Customers from "./components/Admin/Orders/Customers";
import BrandsList from "./components/Admin/Categories/BrandsList";
import AddProduct from "./components/Admin/Products/AddProduct";
import ProductUpdate from "./components/Admin/Products/ProuductUpdate";
import UpdateOrders from "./components/Admin/Orders/UpdateOrders";
import ColorsList from "./components/Admin/Categories/ColorsList";
import ManageCoupons from "./components/Admin/Coupons/ManageCoupons";
import AddCoupon from "./components/Admin/Coupons/AddCoupon";
import UpdateCoupon from "./components/Admin/Coupons/UpdateCoupon";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
   
    <Routes>
        {/* admin route */}
        <Route
          path="admin"
          element={
            <AdminRoutes>
              <AdminDashboard />
            </AdminRoutes>
          }
        >
          {/* products */}
          <Route
            path=""
            element={
              <AdminRoutes>
                <OrdersList />
              </AdminRoutes>
            }
          />
          <Route
            path="add-product"
            element={
              <AdminRoutes>
                <AddProduct />
              </AdminRoutes>
            }
          />
          <Route
            path="manage-products"
            element={
              <AdminRoutes>
                <ManageStocks />
              </AdminRoutes>
            }
          />
          <Route
            path="products/edit/:id"
            element={
              <AdminRoutes>
                <ProductUpdate />
              </AdminRoutes>
            }
          />
          {/* coupons */}
          <Route
            path="add-coupon"
            element={
              <AdminRoutes>
                <AddCoupon />
              </AdminRoutes>
            }
          />
          <Route path="manage-coupon" element={<ManageCoupons />} />
          <Route
            path="manage-coupon/edit/:code"
            element={
              <AdminRoutes>
                <UpdateCoupon />
              </AdminRoutes>
            }
          />
          {/* Category */}
          <Route
            path="category-to-add"
            element={
              <AdminRoutes>
                <CategoryToAdd />
              </AdminRoutes>
            }
          />
          <Route path="add-category" element={<AddCategory />} />
          <Route
            path="manage-category"
            element={
              <AdminRoutes>
                <ManageCategories />
              </AdminRoutes>
            }
          />
          <Route
            path="edit-category/:id"
            element={
              <AdminRoutes>
                <UpdateCategory />
              </AdminRoutes>
            }
          />
          {/* brand category */}
          <Route
            path="add-brand"
            element={
              <AdminRoutes>
                <AddBrand />
              </AdminRoutes>
            }
          />
          <Route path="all-brands" element={<BrandsList />} />
          {/* color category */}
          <Route
            path="add-color"
            element={
              <AdminRoutes>
                <AddColor />
              </AdminRoutes>
            }
          />
          <Route path="all-colors" element={<ColorsList />} />
          {/* Orders */}
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route
            path="orders/:id"
            element={
              <AdminRoutes>
                <UpdateOrders />
              </AdminRoutes>
            }
          />
          <Route
            path="customers"
            element={
              <AdminRoutes>
                <Customers />
              </AdminRoutes>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
    <Route path="/" element={<HomePage />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
