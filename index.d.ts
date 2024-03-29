import { Component, ReactElement } from 'react'

export interface DiscordEmbed {
  embed: {
    title?: string;
    url?: string;
    description?: string;
    timestamp?: string;
    color?: number;
    footer?: {
      text?: string;
      icon_url?: string;
      proxy_icon_url?: unknown;
    };
    image?: {
      url?: string;
      proxy_url?: unknown;
      width?: unknown;
      height?: unknown;
    };
    thumbnail?: {
      url?: string;
      proxy_url?: unknown;
      width?: unknown;
      height?: unknown;
    };
    author?: {
      name: string;
      url?: string;
      icon_url?: string;
      proxy_icon_url?: unknown;
    };
    fields?: {
      name: string;
      value: string;
      inline?: boolean;
    }[];
    provider?: unknown;
    video?: unknown;
    type?: unknown;
  }
}

export interface EmbedVisualizerProps {
  embed: DiscordEmbed;
  onError?: (error: string) => void;
}

export declare class EmbedVisualizer extends Component<EmbedVisualizerProps> {}

export declare function parseTitle(input: string): ReactElement;
export declare function parseContent(input: string): ReactElement;