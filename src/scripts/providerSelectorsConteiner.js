import { DefaultConteiner } from "./defaultConteiner.js";
export class ProviderSelectorsConteiner extends DefaultConteiner {
  
  showAll() {
    this.elements.forEach((element) => {
      element.show();
    })
  }

  get(id) {
    return this.elements.find(el => el.element.dataset.providerid == id);
  }
}