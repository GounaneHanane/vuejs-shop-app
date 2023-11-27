import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Category = () => import(/* webpackChunkName: "common" */ "@/pages/Category/CategoryTemplate.vue");
const Product = () => import(/* webpackChunkName: "common" */ "@/pages/Product/ProductTemplate.vue");
const CategoryDetail = () => import(/* webpackChunkName: "common" */ "@/pages/Category/Details/CategoryDetail.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "category",
        name: "category",
        component: Category
      },
      { 
        path: '/category/:id',
        name: "category-detail",
        component: CategoryDetail 
      },
      {
        path: "product",
        name: "product",
        component: Product
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
