import Vue from "vue";
import VueRouter from "vue-router";
import PDFViewer from "@/views/PDFViewer.vue";
import Index from "@/views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/pdfviewer",
    name: "pdfviewer",
    component: PDFViewer,
  },
  {
    path: "/",
    name: "index",
    component: Index,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
