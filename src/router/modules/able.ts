import { able } from "@/router/enums";
export default {
  path: "/able",
  redirect: "/able/watermark",
  meta: {
    icon: "menu",
    title: "功能",
    rank: able
  },
  children: [
    {
      path: "/able/watermark",
      name: "Watermark",
      component: () => import("@/views/able/watermark/index.vue"),
      meta: {
        title: "水印",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/able/print",
      name: "Print",
      component: () => import("@/views/able/print/index.vue"),
      meta: {
        title: "打印",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/able/download",
      name: "Download",
      component: () => import("@/views/able/download/index.vue"),
      meta: {
        title: "下载"
      }
    }
  ]
};
