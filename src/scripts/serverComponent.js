import { Component } from "./component.js";
export class ServerComponent extends Component {
  setMain() {
    this.element.classList.add(`server__main`);
  }

  setInitialState() {
    this.hide();
    this.element.classList.remove(`server__main`);
  }
}