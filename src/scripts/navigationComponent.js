import { Component } from "./component.js";
export class NavigationComponent extends Component {
  setText(text) {
    this.element.querySelector(`.navBar__text`).innerHTML = text;
  }

  setLinkText(text) {
    this.element.querySelector(`.navBar__link`).innerHTML = text;
  }

  setLinkActive() {
    this.element.querySelector(`.navBar__link`).classList.remove(`navBar__link_disabled`);
  }

  setLinkDisabled() {
    this.element.querySelector(`.navBar__link`).classList.add(`navBar__link_disabled`);
  }

  isActive() {
    return !this.element.querySelector(`.navBar__link`).classList.contains(`navBar__link_disabled`);
  }

  setInitialState() {
    this.setLinkDisabled();
    this.setText(`Where are your users? Choose the number for every region.`);
    this.setLinkText(``);
  }
}