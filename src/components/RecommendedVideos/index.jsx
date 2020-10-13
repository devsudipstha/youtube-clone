import React from 'react'
import VideoCard from '../VideoCard'

import './style.scss'

const RecommendedVideos = ({ videos }) => {
  console.log(videos? videos: '');
  return (
    <div className="recommended-videos">
      <h2>Recommended</h2>
      <section className="recommended-videos__videos">
        {videos?.map(video => (
          <VideoCard
          title={video.snippet.title}
          views="2.3M views"
          timeStamp="3 days ago"
          channelImage="https://lh3.googleusercontent.com/a-/AOh14GjuMf0BMPOIsvjsi1shlvjcrUv3-bJrN9TdLMu9Ew=s88-c-k-c0x00ffffff-no-rj-mo"
          image={video.snippet.thumbnails.medium.url}
          channel={video.snippet.channelTitle}
          />
        ))}
       
      </section>
    </div>
  )
}

export default RecommendedVideos
