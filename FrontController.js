import Dispatcher from "./Dispatcher.js";

export default class FrontController {
  constructor() {
    this.dispatcher = new Dispatcher();
  }

  handleRequest(request) {
    dispatcher.dispatch(request);
  }
}
