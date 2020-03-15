import ArticleIndex from './ArticleIndex'
import ArticlePosts from './ArticlePosts'
import ArticleCustom from './ArticleCustom'

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
      },
      {
        name: 'ArticleCustom',
        path: 'custom',
        component: ArticleCustom
      }
    ]
  }
]
