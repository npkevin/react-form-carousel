import React, { Component } from 'react'
import CarouselForm, { Page } from 'react-form-carousel'

export default class App extends Component {

  // Handle form submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit!");
  }

  render() {
    return (
      <CarouselForm
        onSubmit={this.onSubmit}
        resizeDelay={0}
        navkeys
        // tabscrolling
      >
        <Page>
          <button type="button" >Red</button>
          <button type="button" >Blue</button>
          <br />
          <button type="button" >Green</button>
          <button type="button" >Orange</button>
          <br />
          <button type="button" >Pink</button>
          <button type="button" >Yellow</button>
        </Page>
        <Page>
          {Wrapped}
        </Page>
        <Page>
          <textarea name="description" id="desc" cols="30" rows="10" style={{resize: "none"}} >

          </textarea><br/>
          <select name="sel" id="sel" >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </Page>
      </CarouselForm>
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