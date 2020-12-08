# embed-visualizer

A React Component to render Discord-like embeds.

[![NPM](https://img.shields.io/npm/v/embed-visualizer.svg)](https://www.npmjs.com/package/embed-visualizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save embed-visualizer
```

## Usage

```jsx
import React, { Component } from 'react'

import EmbedVisualizer, { parseContent, parseTitle } from 'embed-visualizer'
import 'embed-visualizer/dist/index.css'

const embed = {
  embed: {
    title: "Embed title",
    description: "👌 this supports [named links](https://discordapp.com) and __**markdown**__. ```\nyes, even code blocks```||you can also use spoilers||"
  }
}

export default class Example extends Component {
  render() {
    return <div className='content'>
      <div className='item'>
        <h1>Classic embed:</h1>
        <EmbedVisualizer embed={embed} />
      </div>
      <div className='item custom'>
        <h1>Custom content parsing:</h1>
        <div>
          <h3>{parseTitle(embed.embed.title)}</h3>
          <div>{parseContent(embed.embed.description)}</div>
        </div>
      </div>
    </div>
  }
}
```

## Preview

![Embed preview](https://user-images.githubusercontent.com/37781713/101478922-ad721080-3951-11eb-8395-06dcd334cea3.png)
## License

MIT © [gauthier-th](https://github.com/gauthier-th)

Created from [embed-visualizer](https://github.com/leovoel/embed-visualizer)
