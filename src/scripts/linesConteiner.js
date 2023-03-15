import { DefaultConteiner } from "./defaultConteiner.js";
export class LinesConteiner extends DefaultConteiner {

  get(providerId, consumerId, volume) {
    return this.elements.find(el => {
      return el.element.dataset.providerid == providerId 
        && el.element.dataset.consumerid == consumerId
        && el.element.dataset.volume == volume
    });
  }
}