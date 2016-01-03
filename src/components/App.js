/* @flow */
import React, {PropTypes} from "react"
import {Set} from "immutable"

type GHUser = {
  login: string;
  id: number;
  avatar_url: string;
}

export default class App extends React.Component {
  props: {
    users: Set<GHUser>;
  };
  static to_24px(url: string): string {
    return `${url}&s=24`
  }
  render(): Object {
    return <div>{
           this.props.users.map(u =>
             <div className="Users--user" key={u.id}>
               <img src={App.to_24px(u.avatar_url)}></img> {u.id} {u.login}
             </div>)
           }</div>
  }
}
