import React, { Component } from 'react'
import Form, { Page } from 'react-form-carousel'

import "./styles.css"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      text: "",
      number: 2,
    }
  }

  // Handle form submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        resizeDelay={200}
        navigation
        autoHeight
        // removeDefaultStyle
      >
        <Page>
          <button type="button" onClick={() => this.setState({ color: "red" })}>Red</button>
          <button type="button" onClick={() => this.setState({ color: "blue" })}>Blue</button>
          <br />
          <button type="button" onClick={() => this.setState({ color: "green" })}>Green</button>
          <button type="button" onClick={() => this.setState({ color: "orange" })}>Orange</button>
          <br />
          <button type="button" onClick={() => this.setState({ color: "pink" })}>Pink</button>
          <button type="button" onClick={() => this.setState({ color: "yellow" })}>Yellow</button>
        </Page>
        <Page>
          {Wrapped}
        </Page>
        <Page>
          <textarea
            name="description"
            id="desc"
            cols="30"
            rows="10"
            style={{ resize: "none" }}
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </Page>
        <Page>
          <select defaultValue={this.state.number} onChange={e => this.setState({ number: e.target.value })}>
            <option value="0">Zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </Page>
      </Form>
    )
  }
}

let Wrapped =
  <div style={{ textAlign: "center" }}>
    <div>
      <label htmlFor="firstname">First Name</label><br />
      <input type="text" id="firstname" />
    </div>
    <div>
      <label htmlFor="lastname">Last Name</label><br />
      <input type="text" id="lastname" />
    </div>
    <div>
      <label htmlFor="email">Email</label><br />
      <input type="email" id="email" />
    </div>
  </div >