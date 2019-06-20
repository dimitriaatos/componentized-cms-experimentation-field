import { lazy } from 'react'
import { makeTitle } from './../helper'

const pageRoutes = [
  'about', 'portfolio/:work', 'contact'
]

const pages = pageRoutes.map(route => {
  const [path] = route.split('/'),
  name = makeTitle(path)
  return {path, name}
}),
routes = [
  ...pageRoutes.map(route => {
    const [path, param] = route.split('/'),
    name = makeTitle(path),
    render = lazy(() => import(`./${name}`))
    return {path, render, exact: param ? true : false}
  }),
  ...pageRoutes.reduce((accum, route) => {
    const [path, param] = route.split('/')
    if (param) {
      const name = makeTitle(path),
      render = lazy(() => import(`./${name}`))
      accum.push({path: route, render})
    }
    return accum
  }, [])]

 export { pages, routes }