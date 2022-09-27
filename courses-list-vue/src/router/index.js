import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import NewCoursePage from '@/pages/NewCoursePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'NotFoundPage',
  },
  {
    path: '/',
    component: HomePage,
    name: 'HomePage',
  },
  {
    path: '/courses',
    component: () => import('@/pages/CoursesPage.vue'),
    name: 'CoursesPage',
    children: [
      {
        path: ':id',
        component: () => import('@/pages/CourseDetailPage.vue'),
        name: 'CourseDetailPage',
      },
    ],
  },
  {
    path: '/new-course',
    component: NewCoursePage,
    name: 'NewCoursePage',
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const isLoggedIn = true

router.beforeEach(to => {
  if (!isLoggedIn && to.meta.requiresAuth) {
    return { name: 'HomePage' }
  }
})

export default router
