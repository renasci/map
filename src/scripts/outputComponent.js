import { Component } from "./component.js";
export class OutputComponent extends Component {
  setText(text) {
    this.element.innerHTML = text;
  }

  setInitialState() {
    this.element.innerHTML = ``;
    this.hide();
  }
}