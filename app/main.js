import lazy from './lazy.js'
import './main.styl'
const ColorsBeautech = lazy(() => import('./components/colors-beautech/colors-beautech.jsx').then(r => r.default))
const PunchCardsAdd = lazy(() => import('./components/punch-cards-add/punch-cards-add.jsx').then(r => r.default))
const PunchCards = lazy(() => import('./components/punch-cards/punch-cards.jsx').then(r => r.default))
const Timeline = lazy(() => import('./components/timeline/timeline.jsx').then(r => r.default))
const Home = lazy(() => import('./components/home/home.jsx').then(r => r.default))
const {BrowserRouter, Switch, Route} = ReactRouterDOM

const isPunchCards = config.plugins_list.includes('punch_cards')
const isColorsBeautech = config.plugins_list.includes('colors_beautech')

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {isPunchCards && <Route path={config.baseUrl + config.urls.punch_cards_adding} component={PunchCardsAdd} />}
      {isColorsBeautech && <Route path={config.baseUrl + config.urls.colors_beautech} component={ColorsBeautech} />}
      {isPunchCards && <Route path={config.baseUrl + config.urls.punch_cards} component={PunchCards} />}
      <Route path={config.baseUrl + config.urls.timeline} component={Timeline} />
      <Route exact path={config.baseUrl + config.urls.home} component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'))
