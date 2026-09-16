import DemoView from "../views/DemoView.js";

export default class DemoController {
  init() {
    const view = new DemoView();
    view.init();
  }
}
