import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials) => {
    const user = await authService.login(credentials);
    console.log(user);
    return user;
  }
);

export const profileThunk = createAsyncThunk("auth/profile", async () => {
  const response = await authService.profile();
  return response.data;
});

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    await authService.updateUser(user);
    return user;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (username, password, userType) => {
    return await authService.register(username, password, userType);
  }
);
