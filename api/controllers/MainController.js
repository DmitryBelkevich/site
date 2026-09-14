import MainView from "../views/MainView.js";

export default class MainController {
  async init() {
    const mainView = new MainView();

    mainView.setHeader("Header");
    mainView.setMain("Main");
    mainView.setFooter("Footer");
  }
}
