import { nanoid } from 'nanoid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SITE_NAME, SITE_IMG, SITE_IMG_ALT } from './Config';
import { HomePage, ViewResult, ViewPlaylist, Error500, Error404 } from './views/index';
import { PublicLayout } from './components/index';

const pages = [
  {
    path: '/results',
    title: `Results | ${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: ViewResult
  },
  {
    path: '/playlist',
    title: `Playlist Videos | ${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: ViewPlaylist
  },
  {
    path: '/',
    title: `${SITE_NAME}`,
    description: '',
    image: SITE_IMG,
    image_alt: SITE_IMG_ALT,
    component: HomePage
  }
];

export default function App() {
  return (
    <div>
      <Router>
        <PublicLayout>
          <Switch>
            {/* Auth Routes */}
            {pages.map((page: PageProps) => (
              <Route key={nanoid()} {...page} />
            ))}

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />

            <Route path='*' component={Error404} />
          </Switch>
        </PublicLayout>
      </Router>
    </div>
  );
}
