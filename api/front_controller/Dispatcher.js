export default class Dispatcher {
  dispatch(request) {
    const appName = "site";
    const routeName = request.slice(("/" + appName).length, -1);

    console.log("request: " + routeName);
  }
}
