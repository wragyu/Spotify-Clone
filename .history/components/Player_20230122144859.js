import { useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";


function Player() {
  // need to use spotify
  //
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const


  return (
    <div>
      {/* left */}
      <div>
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default Player
