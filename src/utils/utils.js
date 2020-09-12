import { createBrowserHistory } from "history";

export function groupItems(items, n) {
  return items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
  }, []);
}

export function reloadOnURLChange() {
  let history = createBrowserHistory();

  history.listen((location, action) => {
    const url = window.location.hash;
    const localStorageName = "prev-url";

    if (
      localStorage.getItem(localStorageName) === "" ||
      !localStorage.getItem(localStorageName)
    ) {
      localStorage.setItem(localStorageName, url);
    }

    console.log(localStorage.getItem(localStorageName), url);

    if (localStorage.getItem(localStorageName) !== url) {
      console.log("reload it");
      localStorage.setItem(localStorageName, url);
      window.location.reload();
    }
  });
}
