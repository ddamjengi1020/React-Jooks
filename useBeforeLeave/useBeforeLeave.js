const useBeforeLeave = onLeave => {
  if (!onLeave || typeof onLeave !== "function") {
    return;
  }
  const leaveEvent = e => {
    // Add condition
    const { clientY: y } = e;
    if (y <= 0) {
      onLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", leaveEvent);
    return () => document.removeEventListener("mouseleave", leaveEvent);
  }, []); // [] 는 단 한번만 실행할 것을 나타냄.
};
