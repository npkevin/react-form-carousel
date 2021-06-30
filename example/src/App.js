import React, { Component, Fragment } from 'react'
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

  handleClick = (event) => {
    console.log("test");
    console.log(event.target.id);
    console.log(event.target.value);
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
        autoHeight
        pageTitles={["test1", "test2", "test3", "test4"]}
        handlePrev={this.handleClick}
        handleNext={this.handleClick}
        // removeDefaultStyle
      >
        <Page>
          <label>Color:</label><br/>
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
          <label>Text:</label><br/>
          <textarea
            name="description"
            id="desc"
            cols="40"
            rows="5"
            style={{ resize: "none" }}
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </Page>
        <Page>
          <label>Number: </label><br/>
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
  <Fragment>
    <label>Size: </label><br/>
    <label>XS </label><input type="radio" name="size" id="xs"/>
    <label>SM </label><input type="radio" name="size" id="sm"/><br/>
    <label>MD </label><input type="radio" name="size" id="md"/>
    <label>LG </label><input type="radio" name="size" id="lg"/><br/>
    <label>XL </label><input type="radio" name="size" id="xl"/>
  </Fragment >