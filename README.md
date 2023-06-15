# embed-visualizer

A React Component to render Discord-like embeds.

[![NPM](https://img.shields.io/npm/v/embed-visualizer.svg)](https://www.npmjs.com/package/embed-visualizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm bundle size](https://img.shields.io/bundlephobia/min/embed-visualizer) ![npm](https://img.shields.io/npm/dt/embed-visualizer) ![GitHub](https://img.shields.io/github/license/gauthier-th/embed-visualizer)

## Install

```bash
npm install --save embed-visualizer
```

## Usage

```jsx
import React, { Component } from 'react'

import { EmbedVisualizer, parseContent, parseTitle } from 'embed-visualizer'
import 'embed-visualizer/dist/index.css'

const embed = {
  embed: {
    title: "Embed title",
    description: "👌 this supports [named links](https://discordapp.com), __**markdown**__ and `inline code`. ```\nyes, even code blocks```||you can also use spoilers||"
  }
}

export default class Example extends Component {
  render() {
    return <div className='content'>
      <div className='item'>
        <h1>Classic embed:</h1>
        <EmbedVisualizer embed={embed} onError={(e) => console.error("Error while parsing embed:", e)} />
      </div>
      <div className='item custom' style={{ maxWidth: 520 }}>
        <h1>Custom content parsing:</h1>
        <div>
          <h3 className='embed-visualizer'>{parseTitle(embed.embed.title)}</h3>
          <div className='embed-visualizer'>{parseContent(embed.embed.description)}</div>
        </div>
      </div>
    </div>
  }
}
```

## Preview

![Embed preview](https://user-images.githubusercontent.com/37781713/178846235-2bb46c81-1a24-4069-8128-a516192b7319.png)
## License

MIT © [gauthier-th](https://github.com/gauthier-th)

Created from [embed-visualizer](https://github.com/leovoel/embed-visualizer)
