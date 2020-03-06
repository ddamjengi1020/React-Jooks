const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine); // navigator.onLine is Boolean

  const netChange = () => {
    // 가장 나중에 실행됨 여기서 true면 아래 컴포넌트에선 false.. 실행순서차이로 인한 값 오류

    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", netChange);
    window.addEventListener("offline", netChange);
    return () => {
      window.removeEventListener("online", netChange);
      window.removeEventListener("offline", netChange);
    };
  }, []);
  return status;
};
