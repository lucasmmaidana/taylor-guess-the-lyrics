import React, { useContext } from "react"

import { Context } from "../Context"

function AlbumCard({ album }) {
  const { startGame } = useContext(Context)

  return (
    <button className="album-card" onClick={() => startGame(album)}>
      <img
        className="album--cover"
        src={album.strAlbumThumb}
        alt={album.strAlbum + " cover"}
      />
      <div className="album--info">
        <h3 className="album--title">{album.strAlbum}</h3>
      </div>
    </button>
  )
}

export default AlbumCard
