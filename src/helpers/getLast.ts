import { Ticket } from "../interface/ticket";

interface getLastResponse {
  ok: boolean;
  last: Ticket[];
}

export const getLast = async () => {
  const resp = await window.fetch("http://localhost:8082/last");
  const { last }: getLastResponse = await resp.json();

  return last;
};
