import React from "react";
import styles from "./Admin.module.scss";
import AdminHome from "../../components/admin/AdminHome/AdminHome";
import Navbar from "../../components/admin/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Category from "../../components/admin/category/Category";
import Brand from "../../components/admin/brand/Brand";
import EditProduct from "../../components/admin/editProduct/EditProduct";
import AddProduct from "../../components/admin/addProduct/AddProduct";
import ViewProducts from "../../components/admin/viewProducts/ViewProducts";
import Coupon from "../../components/admin/coupon/Coupon";
import Orders from "../../components/admin/orders/Orders";
import AdminOrderDetails from "../../components/admin/orders/AdminOrderDetails";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<AdminHome />} />
          <Route path="category" element={<Category />} />
          <Route path="brand" element={<Brand />}></Route>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="all-product" element={<ViewProducts />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order-details/:id" element={<AdminOrderDetails />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
