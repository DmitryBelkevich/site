import MainController from "../controllers/MainController.js";

export default class Dispatcher {
  #routes[];

  constructor() {
    this.#routes[""] = new MainController();
  }
  
  dispatch(request) {
    const appName = "site";
    const routeName = request.slice(("/" + appName).length, -1);

    console.log("request: " + routeName);
  }
}
