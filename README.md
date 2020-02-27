# react-form-carousel [WIP]

> Easy-to-use and customizable react component to create mobile-friendly carousel forms.
> Still very much a work-in-progress. Not currently published.

[![NPM](https://img.shields.io/npm/v/react-form-carousel.svg)](https://www.npmjs.com/package/react-form-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### [See Demo]()

## Install

```bash
npm install --save react-form-carousel
```

## Usage

```jsx
import React, { Component } from 'react'

import CarouselForm, { Page } from 'react-form-carousel'

class Example extends Component {

    // Handle form submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit!");
  }

  render () {
    return (
      <CarouselForm
        onSubmit={this.onSubmit}
        resizeDelay={0}
        navkeys
        tabscrolling
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

```

## License

MIT © [npkevin](https://github.com/npkevin)
