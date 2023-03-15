export class AppController {
  constructor(appView, appModel) {
    this.appView = appView;
    this.appModel = appModel;
    this.steps = null;
  }

  onDomContentLoaded() {
    this.appView.init(
      this.onChangeConsumersForm.bind(this), 
      this.onChangeProvidersForm.bind(this), 
      this.onNextStep.bind(this)
    );
    this.steps = this.appSteps();
    this.steps.next();
  }

  onChangeConsumersForm(event) {
    const id = event.target.parentElement.dataset.consumerid;
    const value = event.target.value;
    this.appView.consumerSelectors.get(id).hide();
    const devices = this.appView.devices.get(id);
    devices.showChilds(value);

    if(!this.appModel.consumers.length) {
      const navBar = this.appView.navComponent;
      navBar.setLinkActive();
      navBar.setLinkText(`Next`);
    }
    
    this.appModel.addConsumer(id, value);

    if(this.appModel.consumers.length === this.appView.devices.length) {
      this.steps.next();
    }
  }

  onChangeProvidersForm(event) {
    const id = event.target.dataset.providerid;
    this.appView.providerSelectors.get(id).hide();
    const server = this.appView.servers.get(id);

    if(!this.appModel.providers.length) {
      server.setMain();
    } 

    this.appModel.addProvider(id);
    server.show();
    const navBar = this.appView.navComponent;

    if(this.appModel.providers.length >= 3 && !navBar.isActive()) {
      navBar.setLinkActive();
    }

    if(this.appModel.providers.length === this.appView.servers.length) {
      this.steps.next();
    }
  }

  onNextStep() {
    this.steps.next();
  }

  *appSteps() {
    this.appView.setInitialState();
    this.appModel.setInitialState();
    yield

    this.appView.consumerSelectors.hideAll();
    this.appView.providerSelectors.showAll();
    const navBar = this.appView.navComponent;
    navBar.setLinkDisabled();
    navBar.setText(`Choose minimum two additional spots for ByteCloud and press `);
    navBar.setLinkText(`Start`);
    yield
    
    navBar.setLinkDisabled();
    navBar.setText(``);
    navBar.setLinkText(``);
    this.appView.providerSelectors.hideAll();
    this.appModel.calculate();
    const animationClosestData = this.appModel.animation.getAnimationClosestData();
    this.appView.showAnimation(animationClosestData.lines);
    
    setTimeout(() => {
      this.appView.hideAnimation();
    }, animationClosestData.totalDuration * 1000 + 2000);

    setTimeout(() => {
      this.steps.next();
    }, animationClosestData.totalDuration * 1000 + 2100);
    yield

    const animationMainData = this.appModel.animation.getAnimationMainData();
    this.appView.showAnimation(animationMainData.lines);

    setTimeout(() => {
      this.steps.next();
      this.appView.hideAnimation();
    }, animationMainData.totalDuration * 1000 + 2000);
    yield

    this.appView.servers.hideAll();
    this.appView.devices.hideAllChilds();
    navBar.setText(`Do you want to `);
    navBar.setLinkText(`start again?`);
    navBar.setLinkActive();
    this.appView.showTable(this.appModel.table.getTableData());
    yield
    
    this.steps = this.appSteps();
    this.steps.next();
    return
  }
}