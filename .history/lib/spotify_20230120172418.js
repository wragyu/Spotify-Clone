import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import SpotifyWebApi from "spotify-web-api-node";

// permissions
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  // "user-library-modify",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(',');

//
const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const SpotifyApi = new SpotifyWebApi({
  clientId: process
})
