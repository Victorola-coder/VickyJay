import { useState, useEffect } from "react";

function Track({ name, artists }) {
  return (
    <div className="bg-[#0A1C20] rounded-[10px] flex flex-col p-[16px] gap-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-[#FFFFFF99]">by {artists.join(", ")}</p>
    </div>
  );
}

const Spotify = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [error, setError] = useState(null);

  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
  const token =
    "BQD46df3sMJUNXf5-LZ0V73TkbpD5fyHrSFX2QU0B0DiXYe61s6mR8U5xXa-60C2k5KtzUPa3vx3JlgJjD-QA0OBpWhm92iQbTbXZkODsFaInmspOyPFoopXq9Qvuqf27Qn51H3__pyouV5DD7Xweb9dnIY1nBrNaxv8CiJVcgd86I8k75yNKhrkGHalBFLLZQ7B2T6kPPZcHKUGCYpqUWgUj_NVBmABXxgq2ESjLOcUyH9p6z7iQ0j9O3f8Egq6S82QaqIx3NGH4ph6VUIWQv99uU-GdPstP2Ql";

  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (
      await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5", "GET")
    ).items;
  }

  const fetchTopTracks = async () => {
    try {
      const tracks = await getTopTracks();
      setTopTracks(tracks);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTopTracks();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Spotify Top Tracks
      </h1>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <ul>
          {topTracks.map((track) => (
            <li key={track.id}>
              <Track
                name={track.name}
                artists={track.artists.map((artist) => artist.name)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Spotify;
