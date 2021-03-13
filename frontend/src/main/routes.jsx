import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Dashboard from '../Dashboard/dashboard'
import People from '../People/People'
import PeopleRegister from '../People/PeopleRegister'
import PeopleView from '../People/PeopleView'
import Schedule from '../Schedule/Schedule'
import ScheduleProcedimento from '../Schedule/ScheduleProcedimento'

const Routes = props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route exact={true} path="/people" component={People} />
      <Route exact={true} path="/people/show/:id" component={PeopleView} />
      <Route exact={true} path="/people/:id" component={PeopleRegister} />
      <Route exact={true} path="/people/register" component={PeopleRegister} />
      <Route exact={true} path="/schedule" component={Schedule} />
      <Route exact={true} path="/schedule/:pessoaId" component={ScheduleProcedimento} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
)

export default Routes