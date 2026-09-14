export default class MainView {
  constructor() {
    this.header = document.createElement("header");
    
    this.main = document.createElement("main");
    this.main.textContent = "Main";

    this.footer = document.createElement("footer");
    
    document.body.append(
      this.header,
      this.main,
      this.footer
    );
  }
}
