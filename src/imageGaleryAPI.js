import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function getImage(queryImg, currentPage) {
  const params = {
    client_id: "GIFbwAnSfCf7IRv1Dlrlc49IYMp_y3KRvQCshSdzc1c",
    query: queryImg,
    orientation: "landscape",
    page: currentPage,
    per_page: 12,
  };

  const res = await axios.get("search/photos", { params });
  return res.data;
}
