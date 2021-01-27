import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ScreensHome from './Home/index';
import ScreensListagem from './Listagem/index';
import ScreensDetalhesLivro from './DetalhesLivro/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreensHome} />
      <Route exact path="/listagem/:search" component={ScreensListagem} />
      <Route exact path="/livros/:search/:livroId" component={ScreensDetalhesLivro} />
    </Switch>
  </BrowserRouter>
);

export default Routes;