import axios from "axios";

const SEKOLAH_API_URL = "https://dayoffapi.vercel.app/api";

export const searchWithSekolah = async () => {
  try {
    const response = await axios.get(SEKOLAH_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error while searching with Sekolah:", error);
    throw error;
  }
};
