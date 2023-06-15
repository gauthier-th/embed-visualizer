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