# tesla-error-handler

> 

[![NPM](https://img.shields.io/npm/v/tesla-error-handler.svg)](https://www.npmjs.com/package/tesla-error-handler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tesla-error-handler
```

## Usage

```jsx
import React, { Component } from 'react'

import withErrorHandler from 'tesla-error-handler'

class Example extends Component {
  render () {
    return (
      <h1>Team Tesla</h1>
    )
  }
}

export default withErrorHandler(Example)
```

## License

MIT © [Deschant Kounou](https://github.com/deschant)
