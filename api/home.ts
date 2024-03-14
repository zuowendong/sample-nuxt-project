import { http } from "./http";

export async function fetchHomeMsg() {
  return await http.get<string, string>(`/home`);
}
