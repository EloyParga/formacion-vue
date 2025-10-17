import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactosView from "../views/ContactosView.vue";
import ServiciosView from "../views/ServiciosView.vue";
import BlogView from "../views/BlogView.vue";
import ArticuloView from "../views/ArticuloView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/contactos",
        name: "contactos",
        component: ContactosView,
    },
    {
        path: "/servicios",
        name: "servicios",
        component: ServiciosView,
    },
    {
        path: "/blog/",
        name: "blog",
        component: BlogView,
    },
    {
        path: "/blog/:id",
        name: "articulo",
        component: ArticuloView,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;