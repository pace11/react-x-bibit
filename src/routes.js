// layout
import Layout from './layout'

// pages
import Home from './pages/home'
import Detail from './pages/detail'
import LogicTest from './pages/logic-test'

const Routes = [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: Home,
  },
  {
    path: '/detail/:id',
    exact: true,
    layout: Layout,
    component: Detail,
  },
  {
    path: '/logic-test',
    exact: true,
    layout: Layout,
    component: LogicTest,
  },
]

export default Routes
