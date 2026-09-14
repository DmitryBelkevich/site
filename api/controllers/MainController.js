import MainView from "../views/MainView.js";
import HtmlLoader from "../loaders/HtmlLoader.js";

export default class MainController {
  async init() {
    const mainView = new MainView();

    const htmlLoader = new HtmlLoader();

    mainView.setHeader("Header");

    const main = await htmlLoader.load("./api/views/templates/main.htmls");
    mainView.setMain(main);

    const footer = await htmlLoader.load("./api/views/templates/footer.html");
    mainView.setFooter(data);
  }
}
