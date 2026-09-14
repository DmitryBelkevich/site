import FrontController from "./FrontController.js";

function main() {
  const frontController = new FrontController();
  
  frontController.handleRequest(window.location.pathname);
}

const app = main();
