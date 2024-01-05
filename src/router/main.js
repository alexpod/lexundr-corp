import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/views/AboutUs.vue'
import NewsPosts from '@/views/NewsPosts.vue'
import NewsPostsArticle from '@/views/NewsPostsArticle.vue'


export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    // redirect: { name: 'posts' },
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutUs,
  },
  {
    path: '/posts',
    name: 'posts',
    component: NewsPosts,
    children: [
      {
        path: '/:id?',
        name: 'article',
        component: NewsPostsArticle,
      },
    ]
  }
]