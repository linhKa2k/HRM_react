import { ReactNode } from "react"
import { Route } from "react-router-dom"

interface IRoute {
    path: string,
    element: ReactNode
    child?: IRoute[]
}

export const transformRoute = (appRoutes: IRoute[]) => {
    const arrChild: IRoute[] = []
    const arrParent: IRoute[] = []
    appRoutes.map((i) => {
        if (i.child) {
            i.child.map((iC) => {
                arrChild.push({ element:iC.element, path: `${i.path}/${iC.path}` })
            })
        }
        arrParent.push({ element:i.element, path:i.path})
    })

    const arrRoute = arrChild.concat(arrParent)
    return arrRoute.map((i) => (<Route path={i.path} element={i.element} key={i.path} />))
}
