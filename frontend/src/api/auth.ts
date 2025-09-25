import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change if deployed
});

// For signup
export const signupUser = async (data: any, category: string) => {
  return API.post(`/auth/signup`, { ...data, category });
};

// For login
export const loginUser = async (data: any, category: string) => {
  return API.post(`/auth/login`, { ...data, category });
};
