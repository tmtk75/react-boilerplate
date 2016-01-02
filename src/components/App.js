import React from "react"

export default class App extends React.Component {
  static to_24px(url) {
    return `${url}&s=24`
  }
  render() {
    let u = this.props.user;
    return <div>
             {u.login} <img src={App.to_24px(u.avatar_url)}></img> {u.id}
           </div>
  }
}
