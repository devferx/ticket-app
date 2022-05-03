import { createContext } from "react";
import type { ReactNode } from "react";
import type { Socket } from "socket.io-client";

import { useSocket } from "../hooks/useSocket";

interface SocketContextProps {
  socket: Socket;
  online: boolean;
}

export const SocketContext = createContext({} as SocketContextProps);

interface SocketProviderProps {
  children: ReactNode;
}
export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { socket, online } = useSocket("http://localhost:8082");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
