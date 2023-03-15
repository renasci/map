import { ConsumersApi } from "./src/scripts/comsumersApi.js";
import { ProvidersApi } from "./src/scripts/providersApi.js";
import { PingApi } from "./src/scripts/pingApi.js";
import { RatingComponent } from "./src/scripts/ratingComponent.js";
import { TableComponent } from "./src/scripts/tableComponent.js";
import { DeviceComponent } from "./src/scripts/deviceComponent.js";
import { DefaulComponent } from "./src/scripts/defaulComponent.js";
import { SelectorComponent } from "./src/scripts/selectorComponent.js";
import { ServerComponent } from "./src/scripts/serverComponent.js";
import { NavigationComponent } from "./src/scripts/navigationComponent.js";
import { OutputComponent } from "./src/scripts/outputComponent.js";
import { DevicesConteiner } from "./src/scripts/devicesConteiner.js";
import { ConsumerSelectorsConteiner } from "./src/scripts/consumerSelectorsConteiner.js";
import { ProviderSelectorsConteiner } from "./src/scripts/providerSelectorsConteiner.js";
import { ServersConteiner } from "./src/scripts/serversConteiner.js";
import { LinesConteiner } from "./src/scripts/linesConteiner.js";
import { OutputConteiner } from "./src/scripts/outputConteiner.js";
import { ComponentsFactory } from "./src/scripts/componentsFactory.js";
import { AnimationModel } from "./src/scripts/animationModel.js";
import { TableModel } from "./src/scripts/tableModel.js";
import { AppView } from "./src/scripts/appView.js";
import { AppController } from "./src/scripts/appController.js";
import { AppModel } from "./src/scripts/appModel.js";

const componentsFactory = new ComponentsFactory(
    DevicesConteiner, 
    DeviceComponent, 
    ConsumerSelectorsConteiner, 
    SelectorComponent, 
    ProviderSelectorsConteiner, 
    DefaulComponent, 
    ServersConteiner, 
    ServerComponent, 
    LinesConteiner, 
    OutputConteiner, 
    OutputComponent, 
    NavigationComponent, 
    TableComponent, 
    RatingComponent
  ); 

const appModel = new AppModel(
    new ConsumersApi(), 
    new ProvidersApi(), 
    new PingApi(), 
    AnimationModel, 
    TableModel
  );

const appView = new AppView(componentsFactory);
const appController = new AppController(appView, appModel);

document.addEventListener(`DOMContentLoaded`, appController.onDomContentLoaded.bind(appController));












