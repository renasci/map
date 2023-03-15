import { DefaultConteiner } from "./defaultConteiner.js";
export class ConsumerSelectorsConteiner extends DefaultConteiner {
  
  get(id) {
    return this.elements.find(el => el.element.dataset.consumerid == id);
  }
}