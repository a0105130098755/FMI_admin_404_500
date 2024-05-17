import api from "./api";

export const getAllAdmins = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAdminById = async (adminId) => {
  try {
    const response = await api.get(`/${adminId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAdmin = async (adminData) => {
  try {
    const response = await api.post("/", adminData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAdmin = async (adminId, adminData) => {
  try {
    const response = await api.put(`/${adminId}`, adminData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAdmin = async (adminId) => {
  try {
    const response = await api.delete(`/${adminId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
