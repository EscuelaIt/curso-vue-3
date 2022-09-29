import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import NewCoursePage from '@/pages/NewCoursePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { useAuthStore } from '../stores/auth'

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
    path: '/login',
    component: () => import('@/pages/LoginPage.vue'),
    name: 'LoginPage',
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

router.beforeEach(to => {
  const store = useAuthStore()

  if (!store.isLoggedIn && to.meta.requiresAuth) {
    return { name: 'LoginPage' }
  }
})

export default router
