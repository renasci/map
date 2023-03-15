import { DefaultConteiner } from "./defaultConteiner.js";
export class ServersConteiner extends DefaultConteiner {

  get(id) {
    return this.elements.find(el => el.element.dataset.providerid == id);
  }

  get length() {
    return this.elements.length;
  }
}