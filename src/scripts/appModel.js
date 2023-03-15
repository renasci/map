export class AppModel {
  constructor(consumersApi, providersApi, pingApi, animationModel, tableModel) {
    this.providers = [];
    this.consumers = [];
    this.consumersApi = consumersApi;
    this.providersApi = providersApi;
    this.pingApi = pingApi;
    this.resultData = [];
    this.animation = new animationModel(this);
    this.table = new tableModel(this);
  }

  addConsumer(id, count) {
    const consumer = this.consumersApi.get(id);
    consumer.children.length = count;
    this.consumers.push(consumer);
  }

  addProvider(id) {
    this.providers.push(this.providersApi.get(id));
  }

  calculate() {
    this.resultData = [];
    this.consumers.forEach(item => {
      item.mainProvider = this.providers[0];
      item.closestProvider = this. getClosestProvider(item, this.providers);

      item.latencyMain = this.pingApi.get(item.children[0].location, item.mainProvider.location);
      item.latencyClosest = this.pingApi.get(item.children[0].location, item.closestProvider.location);

      item.distanceMain = this.getDistance(item.position, item.mainProvider.position);
      item.distanceClosest = this.getDistance(item.position, item.closestProvider.position);

      item.animationMainDuration = 1 + Math.round(item.distanceMain / 1280 * 10) ;
      item.animationClosestDuration = 1 + Math.round(item.distanceClosest / 1280 * 10);
      
      this.resultData.push(item);
    });
  }

  getClosestProvider(consumer, providers) {
    let distances = Object.fromEntries(providers.map(item => {
      return [this.getDistance(consumer.position, item.position), item];
    }));

    let minDistance = Math.min(...Object.keys(distances));
    return distances[minDistance];
  }

  getDistance(point1, point2) {
    let sideA = Math.abs(point1.x - point2.x);
    let sideB = Math.abs(point1.y - point2.y);
    let distance = Math.round(Math.sqrt(sideA**2 + sideB**2));
    return distance;
  }

  setInitialState() {
    this.providers = [];
    this.consumers = [];
    this.resultData = [];
  }
}