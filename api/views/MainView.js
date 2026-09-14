export default class MainView {
  constructor() {
    this.header = document.createElement("header");
    this.header.textContent = "Header";
    
    this.main = document.createElement("main");
    this.main.textContent = "Main";

    this.footer = document.createElement("footer");
    this.footer.textContent = "Footer";
    
    document.body.append(
      this.header,
      this.main,
      this.footer
    );
  }
}
