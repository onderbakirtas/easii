import ArticleIndex from './ArticleIndex'
import ArticlePosts from './ArticlePosts'

export default [
  {
    name: 'ArticleIndex',
    path: '/articles',
    component: ArticleIndex,
    meta: {
      title: 'Makaleler',
      requireAuth: true
    },
    children: [
      {
        name: 'ArticlePosts',
        path: 'posts',
        component: ArticlePosts
      }
    ]
  }
]
