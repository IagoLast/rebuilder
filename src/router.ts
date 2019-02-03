import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/login/login.page.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./pages/login/login.page.vue")
    },
    {
      path: "/editor",
      component: () =>
        import(/* webpackChunkName: "editor" */ "./pages/editor/editor.page.vue"),
      children: [
        {
          path: "",
          component: () =>
            import(/* webpackChunkName: "editor/index" */ "./pages/editor/index/Index.page.vue")
        },
        {
          path: "addLayer",
          component: () =>
            import(/* webpackChunkName: "editor/addLayer" */ "./pages/editor/addLayer/AddLayer.page.vue")
        },
        {
          name: "editLayer",
          path: "editLayer/:id",
          component: () =>
            import(/* webpackChunkName: "editor/editLayer" */ "./pages/editor/editLayer/EditLayer.page.vue")
        }
      ]
    }
  ]
});
