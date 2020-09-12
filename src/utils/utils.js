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

export const homepageNavbarLinks = [
  {
    name: "About Us",
    url: "#about",
    offset: -60,
    scroll: true,
  },
  {
    name: "Reviews",
    url: "#reviews",
    offset: -40,
    scroll: true,
  },
  {
    name: "Services",
    url: "#services",
    offset: -40,
    scroll: true,
  },
  {
    name: "Portfolio",
    url: "#portfolio",
    offset: -40,
    scroll: false,
  },
  {
    name: "FAQ",
    url: "#faq",
    offset: -60,
    scroll: true,
  },
  {
    name: "Contact",
    url: "#contact",
    offset: -60,
    scroll: true,
  },
];

export const portfolioNavbarLinks = [
  {
    name: "Home",
    url: window.location.origin,
    offset: 0,
    scroll: false,
  },
  {
    name: "Portfolio",
    url: "#portfolio",
    offset: -40,
    scroll: true,
  },
  {
    name: "Contact",
    url: "#contact",
    offset: -60,
    scroll: true,
  },
];

export function renderNav(page, navItem) {
  switch (page) {
    case "home":
      return [...homepageNavbarLinks].map((e) => navItem(e));
    case "portfolio":
      return [...portfolioNavbarLinks].map((e) => navItem(e));
    default:
      return [...homepageNavbarLinks].map((e) => navItem(e));
  }
}
