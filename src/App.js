import React from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import { HashRouter, Route, Switch } from "react-router-dom";
import Kind from "@/components/Kind";
import Schedule from "@/components/Schedule";
import ScheduleDetail from "@/components/ScheduleDetail";
import Home from "@/components/Home";

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
            <Route exact path="/" component={Home}/>
            <Route path="/new/kind" component={Kind}/>
            <Route exact path="/new/schedule" component={Schedule}/>
            <Route path="/new/schedule/detail" component={ScheduleDetail}/>
          </Switch>
        </HashRouter>
      </Content>
    </div>
  )
}

export default App;