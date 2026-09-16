import ContactsView from "../views/ContactsView.js";

export default class ContactsController {
  init() {
    const view = new ContactsView();
    view.init();
  }
}
