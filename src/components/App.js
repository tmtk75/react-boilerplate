/* @flow */
import React from 'react';
import { Set } from 'immutable';

type GHUser = {
  login: string;
  id: number;
  avatar_url: string;
}

export default class App extends React.Component {
  static to24px(url: string): string {
    return `${url}&s=24`;
  }
  props: {
    users: Set<GHUser>,
  };
  render(): Object {
    return (
      <div>
        {this.props.users.map(u =>
          <div className="Users--user" key={u.id}>
            <img src={App.to24px(u.avatar_url)} alt={u.login}></img> {u.id} {u.login}
          </div>)}
      </div>);
  }
}
