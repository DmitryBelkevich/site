import HtmlLoader from "../loaders/HtmlLoader.js";
import CssLoader from "../loaders/CssLoader.js";

export default class ContactsView {
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

    const header = await htmlLoader.load("./app/views/templates/header.html");
    cssLoader.load("./app/views/css/header.css");
    this.setHeader(header);

    const main = await htmlLoader.load("./app/views/templates/contacts/main.html");
    cssLoader.load("./app/views/css/contacts/main.css");
    this.setMain(main);

    const footer = await htmlLoader.load("./app/views/templates/footer.html");
    cssLoader.load("./app/views/css/footer.css");
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
