export default class Dispatcher {
  dispatch(request) {
    const appName = "site";
    const routeName = path.slice(("/" + appName).length, -1);

    console.log(routeName);
  }
}
