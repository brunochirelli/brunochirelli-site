import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "10s", target: 100 }, // Aumenta para 1000 usuários em 30 segundos
    { duration: "1m", target: 100 }, // Mantém 1000 usuários por 1 minuto
    { duration: "10s", target: 0 }, // Reduz o número de usuários
  ],
};

export default function loadTest() {
  http.get("https://venturesportsusa-rkfqyy12l-brunochirelli.vercel.app/");
  sleep(1);
}
