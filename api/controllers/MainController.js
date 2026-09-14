import MainView from "../views/MainView.js";
import HtmlLoader from "../loaders/HtmlLoader.js";

export default class MainController {
  async init() {
    const mainView = new MainView();

    const loader = new HtmlLoader();

    mainView.setHeader("Header");
    mainView.setMain("Main");

    const data = await loader.load("../views/templates/footer.html");
    mainView.setFooter(data);
  }
}
