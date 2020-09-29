import { createBrowserHistory } from "history";
import React from "react";
import TrustBadge from "../components/TrustBadge";

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
      localStorage.setItem(localStorageName, url);
      // window.ezfy.init();
      window.location.reload();
    }
  });
}

export const defaultServiceItemsList = () => {
  return (
    <React.Fragment>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Free installation included</span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Works with any theme, no apps required</span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>
          It's a Shopify section: move it around, hide it, have full control and
          freedom
        </span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Super lightweight: does not slow down your website</span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Fully responsive: works on all devices and modern browsers</span>
      </li>
      <li>
        <div style={{ marginTop: 10 }}>
          <TrustBadge></TrustBadge>
        </div>
      </li>
    </React.Fragment>
  );
};

export const servicesItems = [
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-countdown.mp4"),
    price: "19",
    image: require("../copy/img/thumbnail/section-countdown.gif"),
    preview: "https://acid-tests.myshopify.com/#shopify-section-1599883670936",
    title: `Animated Countdown Section`,
    paymentLink: `https://gumroad.com/l/zoDQl`,
    descriptionList: () => (
      <React.Fragment>
        <ul className="services-list">
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Quickly and easily add a real-time countdown clock to create
              urgency and increase sales
            </span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Customize colors, text, expiration date and more</span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Perfect to boost conversions for festive dates & sale seasons
            </span>
          </li>
          {defaultServiceItemsList()}
        </ul>
      </React.Fragment>
    ),
  },
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-freetobekids.mp4"),
    price: "29",
    image: require("../copy/img/thumbnail/section-freetobekids-gif.gif"),
    preview: "http://blankrefer.com/?https://free-to-be-kids.myshopify.com/",
    title: `Image Slider Section`,
    paymentLink: "https://gum.co/ZgRVo",
    descriptionList: () => (
      <React.Fragment>
        <ul>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Draw your customers’ attention to your bestsellers and promotions
              with a modern image slider
            </span>
          </li>
          {defaultServiceItemsList()}
        </ul>
      </React.Fragment>
    ),
  },
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-banner.mp4"),
    price: "29",
    image: require("../copy/img/thumbnail/section-banner.gif"),
    preview: "https://acid-tests.myshopify.com/",
    title: `Self-Typing Banner Section`,
    paymentLink: "https://gum.co/CxPFC",
    subtitle: () => (
      <p>
        Quickly and easily add a real-time countdown bar to create actual
        urgency and increase your sales.
      </p>
    ),
    descriptionList: () => (
      <React.Fragment>
        <ul>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Engage your customer with a self-typing banner to make your
              product feel personal
            </span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Control text, sizing, words to animate, colors and more</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Freedom to add an image to mobile and a different one to desktop
            </span>
          </li>
          {defaultServiceItemsList()}
        </ul>
      </React.Fragment>
    ),
  },
];

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
    url: "/portfolio",
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
