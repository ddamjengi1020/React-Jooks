const usePreventLeave = () => {
  const protectMsg = e => {
    e.preventDefault();
    e.returnValue = "";
  };
  const ableProtect = () => window.addEventListener("beforeunload", protectMsg);
  const disableProtect = () =>
    window.removeEventListener("beforeunload", protectMsg);

  return { ableProtect, disableProtect };
};
