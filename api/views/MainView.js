import HtmlLoader from "../loaders/HtmlLoader.js";

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

  // *** setters ***

  setHeader(html) {
    this.header.textContent = html;
  }

  setMain(html) {
    this.main.textContent = html;
  }

  setFooter(html) {
    this.footer.textContent = html;
  }
}
