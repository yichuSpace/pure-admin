import { dashboard } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/dashboard",
  name: "Dashboard",
  component: Layout,
  redirect: "/dashboard/analysis",
  meta: {
    icon: "homeFilled",
    title: "Dashboard",
    rank: dashboard
  },
  children: [
    {
      path: "/dashboard/analysis",
      name: "Analysis",
      component: () => import("@/views/dashboard/analysis/index.vue"),
      meta: {
        title: "分析页"
      }
    },
    {
      path: "/dashboard/workbench",
      name: "workbench",
      component: () => import("@/views/dashboard/workbench/index.vue"),
      meta: {
        title: "工作台"
      }
    }
  ]
} as RouteConfigsTable;
