import { useEffect } from "react";

export function useWebSocket({ config, onOpen, onMessage, onClose }) {
  const { url } = config;

  useEffect(() => {
    if (!url) throw "missing config object.";

    const ws = new WebSocket(url);

    ws.addEventListener("open", () => onOpen(ws));

    ws.addEventListener("close", onClose);

    ws.addEventListener("message", (evt) => onMessage(evt, ws));

    return () => {
      window.removeEventListener("open", onOpen);
      window.removeEventListener("message", onClose);
      window.removeEventListener("close", onMessage(null, ws));
    };
  }, []);

  return null;
}
