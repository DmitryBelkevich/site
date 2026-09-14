import HtmlLoader from "../loaders/HtmlLoader.js";
import CssLoader from "../loaders/CssLoader.js";

export default class MainView {
  constructor() {
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");
    
    document.body.append(
      this.header,
      this.main,
      this.footer
    );
  }

  async init() {
    const htmlLoader = new HtmlLoader();
    const cssLoader = new CssLoader();

    const header = await htmlLoader.load("../api/views/templates/header.html");
    this.setHeader(header);

    const main = await htmlLoader.load("../api/views/templates/main.html");
    this.setMain(main);

    const footer = await htmlLoader.load("../api/views/templates/footer.html");
    this.setFooter(footer);
  }

  // *** setters ***

  setHeader(html) {
    this.header.innerHTML = html;
  }

  setMain(html) {
    this.main.innerHTML = html;
  }

  setFooter(html) {
    this.footer.innerHTML = html;
  }
}
