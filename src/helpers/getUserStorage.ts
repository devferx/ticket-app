export const getUserStorage = () => {
  return {
    agent: JSON.parse(localStorage.getItem("agent")!),
    desk: JSON.parse(localStorage.getItem("desk")!),
  };
};
