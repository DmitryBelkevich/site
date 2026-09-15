import MainController from "../controllers/MainController.js";
import ListController from "../controllers/ListController.js";
import ContactsController from "../controllers/ContactsController.js";

export default class Dispatcher {
  #routes = [];

  constructor() {
    this.#routes[""] = new MainController();
    this.#routes["list"] = new ListController();
    this.#routes["contacts"] = new ContactsController();
  }
  
  dispatch(request) {
    const appName = "site";
    const routeName = request.slice(("/" + appName + "/").length);

    const controller = this.#routes[routeName];
    controller.init();
  }
}
