import React from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import { HashRouter, Route, Switch } from "react-router-dom";
import Kind from "@/components/Kind";

const App = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Header/>
        </div>
      </nav>
      <Content>
        <HashRouter>
          <Switch>
            <Route exact path="/" children={() => <div>Go</div>}/>
            <Route path="/new/kind" children={Kind}/>
            <Route path="/new/schedule" children={() => <div>S</div>}/>
          </Switch>
        </HashRouter>
      </Content>
    </div>
  )
}

export default App;