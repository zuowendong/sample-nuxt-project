import { http } from "./http";

export interface HomeMsg {
  xid: number;
  name: string;
}

interface Online {
  count: number;
  list: string[];
}

export async function fetchHomeMsg() {
  return await http.get<HomeMsg[], HomeMsg[]>(`/home`);
}

export async function fetchAddOnline(userId: string) {
  return await http.post("/home/addOnline", { userId });
}

export async function fetchDeleteOnline(userId: string) {
  return await http.post("/home/deleteOnline", { userId });
}

export async function fetchOnlineUsers() {
  return await http.get<Online, Online>(`/home/online`);
}
