import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '首页' },
            children:[
                {
                    path: '/page1',
                    component: resolve => require(['../components/page/page1.vue'], resolve),
                    meta: { title: '子页面1' }
                },
				{
					path: '/page2',
					component: resolve => require(['../components/page/page2.vue'], resolve),
					meta: { title: '子页面2' }
				},
				{
					path: '/page3',
					component: resolve => require(['../components/page/page3.vue'], resolve),
					meta: { title: '子页面3' }
				},
				{
					path: '/404',
					component: resolve => require(['../components/page/404.vue'], resolve),
					meta: { title: '子页面404' }
				},
				{
					path: '/403',
					component: resolve => require(['../components/page/403.vue'], resolve),
					meta: { title: '子页面403' }
				},
				{
					path: '/markdown',
					component: resolve => require(['../components/page/Markdown.vue'], resolve),
					meta: { title: 'Markdown编辑器' }
				},
				{
					path: '/permission',
					component: resolve => require(['../components/page/Permission.vue'], resolve),
					meta: { title: '权限测试页面', permission: true}
				},
				{
					path: '/vueEditor',
					component: resolve => require(['../components/page/VueEditor.vue'], resolve),
					meta: { title: '富文本编辑器' }
				}
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
