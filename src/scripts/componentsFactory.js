export class ComponentsFactory {
  constructor(
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
    ) {
    this.DevicesConteiner = DevicesConteiner;
    this.DeviceComponent = DeviceComponent;
    this.ConsumerSelectorsConteiner = ConsumerSelectorsConteiner;
    this.SelectorComponent = SelectorComponent;
    this.ProviderSelectorsConteiner = ProviderSelectorsConteiner;
    this.DefaulComponent = DefaulComponent;
    this.ServersConteiner = ServersConteiner;
    this.ServerComponent = ServerComponent;
    this.LinesConteiner = LinesConteiner;
    this.OutputConteiner = OutputConteiner;
    this.OutputComponent = OutputComponent;
    this.NavigationComponent = NavigationComponent;
    this.TableComponent = TableComponent;
    this.RatingComponent = RatingComponent;
  }

  create(type) {
    if(type === `DevicesConteiner`) {
      return new this.DevicesConteiner(this.DeviceComponent); 
    } else if(type === `ConsumerSelectorsConteiner`) {
      return new this.ConsumerSelectorsConteiner(this.SelectorComponent); 
    } else if(type === `ProviderSelectorsConteiner`) {
      return new this.ProviderSelectorsConteiner(this.DefaulComponent); 
    } else if(type === `ServersConteiner`) {
      return new this.ServersConteiner(this.ServerComponent); 
    } else if(type === `LinesConteiner`) {
      return new this.LinesConteiner(this.DefaulComponent); 
    } else if(type === `OutputConteiner`) {
      return new this.OutputConteiner(this.OutputComponent); 
    } else if(type === `NavConponent`) {
      return this.NavigationComponent; 
    } else if(type === `DefaulComponent`) {
      return this.DefaulComponent; 
    } else if(type === `TableComponent`) {
      return new this.TableComponent(this.RatingComponent); 
    }
  }
}