export class AppView {
  constructor(componentsFactory) {
    this.componentsFactory = componentsFactory;
    this.tableComponent = this.componentsFactory.create(`TableComponent`);
    this.blur = null;
    this.devices = null;
    this.servers = null;
    this.consumerSelectors = null;
    this.providerSelectors = null;
    this.lines = null;
    this.outputs = null;
    this.consumersForm = null;
    this.providersForm = null;
    this.navComponent = null;
    this.tableConteiner = null;
  }

  init(onChangeConsumersForm, onChangeProvidersForm, onNextStep) {
    const defaultComponent = this.componentsFactory.create(`DefaulComponent`);
    this.blur = new defaultComponent(document.querySelector(`.blur`));

    const navComponent = this.componentsFactory.create(`NavConponent`);
    this.navComponent = new navComponent(document.querySelector(`.navBar`));
    
    this.consumersForm = document.forms[`select-consumers`];
    this.providersForm = document.forms[`select-providers`];
    
    this.providerSelectors = this.componentsFactory.create(`ProviderSelectorsConteiner`);
    this.providerSelectors.add([...document.querySelectorAll(`div.provider`)]);

    this.servers = this.componentsFactory.create(`ServersConteiner`);
    this.servers.add([...document.querySelectorAll(`div.server`)])

    this.consumerSelectors = this.componentsFactory.create(`ConsumerSelectorsConteiner`);
    this.consumerSelectors.add([...document.querySelectorAll(`div.comsumers-volume`)]);

    this.devices = this.componentsFactory.create(`DevicesConteiner`);
    this.devices.add([...document.querySelectorAll(`div.device-conteiner`)]);

    this.lines = this.componentsFactory.create(`LinesConteiner`);
    this.lines.add([...document.querySelectorAll(`img.line`)]);

    this.outputs = this.componentsFactory.create(`OutputConteiner`);
    this.outputs.add([...document.querySelectorAll(`div.output`)]);    
    
    this.tableConteiner = document.querySelector(`.table-conteiner`);
    
    this.consumersForm.addEventListener(`change`, onChangeConsumersForm);
    this.providersForm.addEventListener(`change`, onChangeProvidersForm);
    this.navComponent.element.querySelector(`.navBar__link`).addEventListener(`click`, onNextStep);
  }

  showTable(data) {
    this.blur.show();

    data.forEach((item) => {
      this.tableConteiner.append(this.tableComponent.create(item));
    }); 
  }

  showAnimation(data) {
    data.forEach((item) => {
      for (let i = 1; i <= item.childrenCount; i++) {
        this.lines.get(item.providerId, item.consumerId, i).show();
      }

      const output = this.outputs.get(item.consumerId);
      output.show();
      output.setText(`latency: ${item.latency}`);

      setTimeout(() => {
        output.setText(`time: ${item.time} sec`);
      }, item.animationDuration * 1000);

      this.devices.get(item.consumerId).playAnimation(item.animationDuration);
    });
  }

  hideAnimation() {
    this.lines.hideAll();
    this.devices.hideAnimations();
    this.outputs.setInitialState();
  }

  setInitialState() {
    this.devices.setInitialState();
    this.servers.setInitialState();
    this.consumerSelectors.setInitialState();
    this.providerSelectors.setInitialState();
    this.lines.setInitialState();
    this.outputs.setInitialState();
    this.consumersForm.reset();
    this.providersForm.reset();
    this.navComponent.setInitialState();
    this.blur.hide();
    this.tableConteiner.innerHTML = ``;
  }
}