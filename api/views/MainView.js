import HtmlLoader from "../loaders/HtmlLoader.js";

export default class MainView {
  constructor() {
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");

    // loader

    const htmlLoader = new HtmlLoader();

    const header = "Header";
    this.setHeader(header);

    const main = await htmlLoader.load("./api/views/templates/main.html");
    this.setMain(main);

    const footer = await htmlLoader.load("./api/views/templates/footer.html");
    this.setFooter(footer);

    // fill body
    document.body.append(
      this.header,
      this.main,
      this.footer
    );
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
