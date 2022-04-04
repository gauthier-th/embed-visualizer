import React, { Component } from 'react'

import { EmbedVisualizer, parseContent, parseTitle } from 'embed-visualizer'
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