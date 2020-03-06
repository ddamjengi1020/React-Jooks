const useFadeIn = (duration = 1, delay) => {
  if (typeof duration !== "number") {
    return;
  }
  if (typeof delay !== "number") {
    return;
  }

  const el = useRef();

  useEffect(() => {
    if (el.current) {
      const { current } = el;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: el, style: { opacity: 0 } };
};
