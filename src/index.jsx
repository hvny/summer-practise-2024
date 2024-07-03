import { render } from 'solid-js/web';

import './index.css';

import { Route, Router } from '@solidjs/router';

import App from './components/App/App';
import Building from './components/Building/Building';
import Home from './components/Home/Home';
import Disciplines from './components/Disciplines/Disciplines';
import Employees from './components/Employees/Employees';
import Request from './components/Request/Request';
import Software from './components/Software/Software';
import TechnicalMeans from './components/TechnicalMeans/TechnicalMeans';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router root={App} base={process.env.NODE_ENV === 'production' ? '/summer-practise-2024/' : '/'}>
    <Route path="/" component={Home} />
    <Route path="/building" component={Building} />
    <Route path="/disciplines" component={Disciplines} />
    <Route path="/employees" component={Employees} />
    <Route path="/request" component={Request} />
    <Route path="/software" component={Software} />
    <Route path="/technical-means" component={TechnicalMeans} />
    <Route path="/*" component={NotFoundPage} />
  </Router>
), document.getElementById('root'));
