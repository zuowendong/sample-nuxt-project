import { http } from "./http";

export interface HomeMsg {
  xid: number;
  name: string;
}

export async function fetchHomeMsg() {
  return await http.get<HomeMsg[], HomeMsg[]>(`/home`);
}
