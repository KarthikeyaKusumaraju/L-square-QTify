import axios from "axios";

export const BACKEND_ENPOINT = "https://qtify-backend.crio.do";

// export const fetchTopAlbums = async () => {
//   try {
//     const res = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
//     return res.data.data; // ✅ FIX
//   } catch (error) {
//     console.error("Top albums error:", error);
//     return [];
//   }
// };
export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(
      "https://qtify-backend.crio.do/albums/top"
    );
    console.log("TOP ALBUMS RAW RESPONSE 👉", res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
    return res.data.data; // ✅ FIX
  } catch (error) {
    console.error("New albums error:", error);
    return [];
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/songs`);
    return res.data.data; // ✅ FIX
  } catch (error) {
    console.error("Songs error:", error);
    return [];
  }
};
