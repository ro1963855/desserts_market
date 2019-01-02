import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import ProductList from "@/pages/ProductList";
import Login from "@/pages/Login";
import Cart from "@/pages/Cart";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/products",
      name: "ProductList",
      component: ProductList
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ]
});
