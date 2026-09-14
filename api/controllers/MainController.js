import MainView from "../views/MainView.js";
import MainView from "../loaders/HtmlLoader.js";

export default class MainController {
  async init() {
    const mainView = new MainView();

    const loader = HtmlLoader();

    mainView.setHeader("Header");
    mainView.setMain("Main");

    const data = await loader.load("../views/templates/footer.html");
    mainView.setFooter("Footer");
  }
}
