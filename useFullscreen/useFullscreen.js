const useFullScreen = cb => {
  const checkBoolean = bool => {
    if (cb && typeof cb === "function") {
      cb(bool);
    }
  };
  const el = useRef();
  const changeFull = () => {
    if (el.current) {
      if (el.current.requestFullscreen) {
        el.current.requestFullscreen();
      } else if (el.current.webkitRequestFullscreen) {
        el.current.webkitRequestFullscreen();
      } else if (el.current.mozRequestFullScreen) {
        el.current.mozRequestFullScreen();
      } else if (el.current.msRequestFullscreen) {
        el.current.msRequestFullscreen();
      }
      checkBoolean(true);
    }
  };

  const exitFull = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
      checkBoolean(false);
    }
  };
  return { el, changeFull, exitFull };
};
