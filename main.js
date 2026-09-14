import FrontController from "./FrontController.js";

function main() {
  const frontController = new FrontController();
  
  frontController.handleRequest("/main");
}

const app = main();
