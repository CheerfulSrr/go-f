import React from "react";
import Content from "@/components/Content";
import Header from "@/components/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Kind from "@/components/Kind";
import ScheduleForm from "@/container/ScheduleForm";

const App = () => {
  return (
    <div>
      <Header/>
      <Content>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={() => (<div>GO</div>)}/>
              <Route path="/new/kind" component={(props) => <Kind {...props}/>}/>
              <Route path="/new/schedule" component={(props) => <ScheduleForm {...props}/>}/>
            </Switch>
          </div>
        </Router>
      </Content>
    </div>
  )
}

export default App;