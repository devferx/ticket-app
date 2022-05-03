import { useEffect, useMemo, useState } from "react";
import { connect } from "socket.io-client";

export const useSocket = (serverPath: string) => {
  const socket = useMemo(
    () =>
      connect(serverPath, {
        transports: ["websocket"],
      }),
    [serverPath]
  );
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
  };
};
