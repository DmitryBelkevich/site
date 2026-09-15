import MainController from "../controllers/MainController.js";
import ContactsController from "../controllers/ContactsController.js";

export default class Dispatcher {
  #routes = [];

  constructor() {
    this.#routes[""] = new MainController();
    this.#routes["contacts"] = new ContactsController();
  }
  
  dispatch(request) {console.log(request);
    const appName = "site";
    const routeName = request.slice(("/" + appName).length, -1);

    const controller = this.#routes[routeName];
    controller.init();
  }
}
