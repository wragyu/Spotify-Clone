import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"

function Songs() {
  // grab playlist from recoil
  // set playlistState as playlist
  const playlist = useRecoilValue(playlistState)

  return (
    <div>
      {<p></p>}
    </div>
  )
}

export default Songs
