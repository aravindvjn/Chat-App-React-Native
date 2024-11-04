import api from "./services";

export const getUser = async () => {
  try {
    const response = await api.get("/user-data");
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
