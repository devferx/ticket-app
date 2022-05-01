export const getUserStorage = () => {
  return {
    agent: localStorage.getItem("agent"),
    desk: localStorage.getItem("desk"),
  };
};
