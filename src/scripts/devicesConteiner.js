import { DefaultConteiner } from "./defaultConteiner.js";
export class DevicesConteiner extends DefaultConteiner {

  get(id) {
    return this.elements.find(el => el.element.dataset.consumerid == id);
  }

  get length() {
    return this.elements.length;
  }

  hideAnimations() {
    this.elements.forEach(item => item.hideAnimation());
  }

  hideAllChilds() {
    this.elements.forEach(item => item.hideAllChilds());
  }
}