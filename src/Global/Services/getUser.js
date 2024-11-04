import api from "./services";

export const getUser = async () => {
  try {
    const response = await api.get("/user-data");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
