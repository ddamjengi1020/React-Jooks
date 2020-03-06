const useClick = fn => {
  if (typeof fn !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseover", fn);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseover", fn);
      }
    };
  }, []);

  return element;
};
