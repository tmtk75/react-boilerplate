/* @flow */
import React, {PropTypes} from "react"

type GHUser = {
  login: string;
  id: number;
  avatar_url: string;
}

export default class App extends React.Component {
  props: {
    user: GHUser;
  };
  static to_24px(url: string): string {
    return `${url}&s=24`
  }
  render(): Object {
    let u = this.props.user;
    return <div>
             {u.login} <img src={App.to_24px(u.avatar_url)}></img> {u.id}
           </div>
  }
}
