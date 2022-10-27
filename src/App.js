import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Componentes/ComponenteMenu/ComponenteMenu";



/*npm install react-router-dom@5.3.0*/

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" render={() => <Menu />} />
        
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;

