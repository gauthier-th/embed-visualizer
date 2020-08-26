import React, { Component } from 'react'

import EmbedVisualizer from 'embed-visualizer'
import 'embed-visualizer/dist/index.css'

const embed = {
  embed: {
    title: "Embed title",
    description: "👌 this supports [named links](https://discordapp.com) and __**markdown**__. ```\nyes, even code blocks```||you can also use spoilers||"
  }
}

export default class Example extends Component {
  render() {
    return <EmbedVisualizer embed={embed} />
  }
}