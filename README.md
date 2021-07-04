# react-form-carousel

<img src="https://drive.google.com/uc?id=1Y4YJTbYBFk8eHukiBAZRepeeJ-yN9dTI" alt="demo-gif">

> Easy-to-use and customizable react component to create mobile-friendly carousel forms.
> Still very much a work-in-progress.

[![NPM](https://img.shields.io/npm/v/react-form-carousel.svg)](https://www.npmjs.com/package/react-form-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-form-carousel
```

## Usage

```jsx
import React, { Component, Fragment } from 'react'
import Form, { Page } from 'react-form-carousel'

// Custom styling
import "./styles.css"

export default class App extends Component {

  // Handle form submit
  onSubmit = (e) => {
    e.preventDefault();
    // Handle submit
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} navigation autoHeight >
        <Page>
          <label>Color:</label><br/>
          <button type="button" onClick={() => this.setState({ color: "red" })}>Red</button>
          <button type="button" onClick={() => this.setState({ color: "blue" })}>Blue</button>
        </Page>
        <Page>
          {Wrapped}
        </Page>
      </Form>
    )
  }
}

let Wrapped =
  <Fragment>
    <label>Size: </label><br/>
    <label>SM </label><input type="radio" name="size" id="sm"/><br/>
    <label>MD </label><input type="radio" name="size" id="md"/>
    <label>LG </label><input type="radio" name="size" id="lg"/><br/>
  </Fragment >
```
#### Form Attributes
| Attribute                              | Description                                                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| onSubmit                               | Function to be called when form is submitted                                                                                                |
| style                                  | In-line styling for form element                                                                                                            |
| removeDefaultStyle<br>(default: false) | Setting this attribute to true will  remove the as much of the default styling as possible                                                  |
| resizeDelay<br>(default: 600)          | Delay in milliseconds to wait before resizing (height) of the form                                                                          |
| autoHeight<br>(default: false)         | Setting autoHeight to true will resize (height) of the form when browsing through Pages, otherwise it will fit to the largest (height) Page |
| navigation<br>(default: true)          | false removes the 'prev' and 'next/submit' buttons                                                                                          |
| handlePrev                             | onClick event from the "previous" button                                                                                                   |
| handleNext                                       | onClick event from the "next" button                                                                                                                            |

#### Page Attributes
| Attribute                              | Description                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------ |
| style                                  | In-line styling for form                                                                   |
| removeDefaultStyle<br>(default: false) | Setting this attribute to true will  remove the as much of the default styling as possible |
| pageTitle                              | Controls the title of the page, updates as the user goes through form                      |

### Styling

This is the default styling (in comments). Edit this stylesheet or use the attribute **_style_** for inline styling and/or **_removeDefaultStyle_** to remove the default style.
```css

/* style.css
<div.form-carousel__container>
    <div.form-carousel>
        <div.form-carousel__page>
            Content
        </div.form-carousel__page>
        ...
        <div.form-carousel__page>
            Content
        </div.form-carousel__page>
    </div.form-carousel>
    <div.form-carousel__nav-container>
        <button(.hide)>Prev</button>
        <button>Next<button/>
    </div.form-carousel__nav-container>
</div.form-carousel__container>
 */


.form-carousel__container {
  /*
  border: 1px solid black;
  */
}

.form-carousel {
  /*
  transition: height 0.6s;
  */
}

.form-carousel__page {
  /*
  padding: 10px;
  text-align: center;
  */
}

.form-carousel__nav-container {
  /* 
  padding: 10px;
  padding-top: 0;
  text-align: center;
  */
}

.form-carousel__nav-container button {
  /*
  padding: 2px 5px;
  margin: 0 5px;
  width: 100px;
} */
}

.form-carousel__nav-container button.hide {
}

```


## License

MIT © [npkevin](https://github.com/npkevin)


<!-- TODO: Update README, with new properties added to Page component and handlePrev/handleNext -->