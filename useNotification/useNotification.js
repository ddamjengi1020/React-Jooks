const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }

  const callback = (notification, timer) =>
    setTimeout(notification.close.bind(notification), timer);

  const fireNotif = () => {
    if (Notification.permission === "granted") {
      const Notif = new Notification(title, option);
      callback(Notif, 4000);
    } else if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          const Notif = new Notification(title, option);
          callback(Notif, 4000);
        } else {
          return;
        }
      });
    }
  };

  return fireNotif;
};
