const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "dashboard",
  component: Layout,
  redirect: "/dashboard/analysis",
  meta: {
    icon: "homeFilled",
    title: "dashboard",
    rank: 0
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
