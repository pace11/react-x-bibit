// pages
import Home from './pages/home'
import Detail from './pages/detail'
import LogicTest from './pages/logic-test'

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/movie/:id',
    exact: true,
    component: Detail,
  },
  {
    path: '/logic-test',
    exact: true,
    component: LogicTest,
  },
]

export default Routes
