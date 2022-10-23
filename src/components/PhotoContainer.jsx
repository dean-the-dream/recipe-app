import React from 'react'

const PhotoContainer = (pic) => {
  // console.log(pic)
  return (
    <div><img src={pic.pic} alt="" /></div>
  )
}

export default PhotoContainer