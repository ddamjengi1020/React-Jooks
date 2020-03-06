const useClick = fn => {
  if (typeof fn !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", fn);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", fn);
      }
    };
  }, []);

  return element;
};
