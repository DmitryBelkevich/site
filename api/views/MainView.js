export default class MainView {
  constructor() {
    this.element = document.createElement("p");
    this.element.textContent = "Main";
    
    document.body.append(this.element);
  }
}
