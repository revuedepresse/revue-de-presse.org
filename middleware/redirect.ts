import { Middleware } from '@nuxt/types'
import Time from '../modules/time'

const RedirectMiddleware: Middleware = ({ route, redirect }) => {
  if (
    route.name !== 'homepage' &&
    route.name !== 'daily-review' &&
    route.name !== 'legal-notice') {
    return redirect(`/${Time.today()}/`)
  }
}

export default RedirectMiddleware
