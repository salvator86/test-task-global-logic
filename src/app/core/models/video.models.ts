export interface VideoListModel {
  items: VideoItemModel[],
}

export interface VideoItemModel {
  id: { videoId: string },
  snippet: SnippetModel
}

export interface SnippetModel {
  title: string,
  thumbnails: {
    medium: {
      height: number,
      width: number,
      url: string
    }
  }
}

export interface VideoModel {
  items: {
    player: {
      embedHtml: string
    }
  }[]
}
