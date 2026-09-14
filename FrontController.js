import Dispatcher from "./Dispatcher.js";

export default class FrontController {
  constructor() {
    this.dispatcher = new Dispatcher();
  }

  isAuthenticUser() {
    return true;
  }

  handleRequest(request) {
    if (this.isAuthenticUser())
      this.dispatcher.dispatch(request);
  }
}
