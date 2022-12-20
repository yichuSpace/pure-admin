import { components } from "@/router/enums";
export default {
  path: "/components",
  redirect: "/components/message",
  meta: {
    icon: "menu",
    title: "组件",
    rank: components
  },
  children: [
    {
      path: "/components/message",
      name: "Message",
      component: () => import("@/views/components/message/index.vue"),
      meta: {
        title: "消息提示组件"
      }
    },
    {
      path: "/components/video",
      name: "Video",
      component: () => import("@/views/components/video/index.vue"),
      meta: {
        title: "视频组件"
      }
    }
  ]
} as RouteConfigsTable;
