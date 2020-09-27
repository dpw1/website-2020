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

export const servicesItems = [
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-countdown.mp4"),
    price: "19",
    image: require("../copy/img/thumbnail/thumbnail-section-countdown.gif"),
    preview: "https://acid-tests.myshopify.com/",
    title: `Animated Countdown`,
    paypalForm: () => (
      <React.Fragment>
        {" "}
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top">
          <input type="hidden" name="cmd" defaultValue="_s-xclick" />
          <input
            type="hidden"
            name="hosted_button_id"
            defaultValue="YV4CYUCEEL7VQ"
          />
          <input type="hidden" border={0} name="send" />
        </form>
      </React.Fragment>
    ),
    subtitle: () => (
      <ul>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Customize colors, text, expiration date and more</span>
        </li>

        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Works with any theme (without usage of apps)</span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>
            It's a Shopify section: move it around, hide it, have full control
            and freedom
          </span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Super lightweight: won't slow down your website</span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>
            Perfect to boost conversions for festive dates & sale seasons
          </span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Free installation included</span>
        </li>

        <li>
          <div style={{ marginTop: 10 }}>
            <TrustBadge></TrustBadge>
          </div>
        </li>
      </ul>
    ),
  },
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-banner.mp4"),
    price: "49",
    image: require("../copy/img/thumbnail/thumbnail-section-banner.gif"),
    preview: "https://acid-tests.myshopify.com/",
    title: `Premium Banner`,
    paypalForm: () => (
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top">
        <input type="hidden" name="cmd" defaultValue="_s-xclick" />
        <input
          type="hidden"
          name="hosted_button_id"
          defaultValue="ZUB26QUB5QHM2"
        />
        <input border={0} name="send" type="hidden" />
      </form>
    ),
    subtitle: () => (
      <React.Fragment>
        <ul>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Control text, sizing, words to animate, colors and more</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Freedom to add a an image to mobile and a different one to desktop
            </span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Optimized images to not affect your website's speed</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Works with any theme (without usage of apps)</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              It's a Shopify section: move it around, hide it, have full control
              and freedom
            </span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Free installation included</span>
          </li>
          <li>
            <div style={{ marginTop: 10 }}>
              <TrustBadge></TrustBadge>
            </div>
          </li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-countdown.mp4"),
    price: "49",
    image: require("../copy/img/thumbnail/thumbnail-section-countdown.gif"),
    preview: "https://acid-tests.myshopify.com/",
    title: `TEST`,
    paypalForm: () => (
      <React.Fragment>
        {" "}
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top">
          <input type="hidden" name="cmd" defaultValue="_s-xclick" />
          <input
            type="hidden"
            name="hosted_button_id"
            defaultValue="YV4CYUCEEL7VQ"
          />
          <input type="hidden" border={0} name="send" />
        </form>
      </React.Fragment>
    ),
    subtitle: () => (
      <ul>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Customize colors, text, expiration date and more</span>
        </li>

        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Works with any theme (without usage of apps)</span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>
            It's a Shopify section: move it around, hide it, have full control
            and freedom
          </span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Super lightweight: won't slow down your website</span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>
            Perfect to boost conversions for festive dates & sale seasons
          </span>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Free installation included</span>
        </li>

        <li>
          <small>You'll be redirected to PayPal for secure checkout.</small>
          <div style={{ marginTop: 10 }}>
            <TrustBadge></TrustBadge>
          </div>
        </li>
      </ul>
    ),
  },
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-banner.mp4"),
    price: "49",
    image: require("../copy/img/thumbnail/thumbnail-section-banner.gif"),
    preview: "https://acid-tests.myshopify.com/",
    title: `321 Banner`,
    paypalForm: () => (
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top">
        <input type="hidden" name="cmd" defaultValue="_s-xclick" />
        <input
          type="hidden"
          name="hosted_button_id"
          defaultValue="ZUB26QUB5QHM2"
        />
        <input border={0} name="send" type="hidden" />
      </form>
    ),
    subtitle: () => (
      <React.Fragment>
        <ul>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Control text, sizing, words to animate, colors and more</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Freedom to add a an image to mobile and a different one to desktop
            </span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Optimized images to not affect your website's speed</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Works with any theme (without usage of apps)</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              It's a Shopify section: move it around, hide it, have full control
              and freedom
            </span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Free installation included</span>
          </li>
          <li>
            <small>You'll be redirected to PayPal for secure checkout.</small>
            <div style={{ marginTop: 10 }}>
              <TrustBadge></TrustBadge>
            </div>
          </li>
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
