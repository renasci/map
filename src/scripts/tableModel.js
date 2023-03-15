export class TableModel {
  constructor(state) {
    this.state = state;
    this.ratingRange = {
      50: {stars: 5, title: '4K/2160p Ultra HD'},
      150: {stars: 4, title: '4K/2160p Ultra HD'},
      215: {stars: 3, title: '1080p Full HD'},
      240: {stars: 2, title: '720p'},
      265: {stars: 1, title: '480p'},
    };
  }

  getTableData() {
    const closetsData = {
      title: 'ByteCloud',
      tableItems: []
    };

    const mainData = {
      title: 'Object Storage',
      tableItems: []
    };

    this.state.resultData.sort((prev, next) => {
      if(prev.children.length > next.children.length) {
        return -1;
      } else {
        return 1;
      }
    });

    this.state.resultData.forEach((item) => {
      const closestRatingData = this.getRatingData(item.latencyClosest);
      closetsData.tableItems.push({
        region: item.region,
        stars: closestRatingData.stars,
        latency: `Latency\n${Math.round(item.latencyClosest)}`,
        time: `Download time\n${Math.round(item.latencyClosest / 1000 * 10 * 10) / 10} sec`,
        stream: `Video streaming\n ${closestRatingData.title}`
      });

      const mainRatingData = this.getRatingData(item.latencyMain);
      mainData.tableItems.push({
        region: item.region,
        stars: mainRatingData.stars,
        latency: `Latency\n${Math.round(item.latencyMain)}`,
        time: `Download time\n${Math.round(item.latencyMain / 1000 * 10 * 10) / 10} sec`,
        stream: `Video streaming\n ${mainRatingData.title}`
      });
    });

    return [closetsData, mainData];
  }

  getRatingData(latency) {
    for (const value in this.ratingRange) {
      if(latency < value) {
        return this.ratingRange[value];
      } 
    }
    
    return this.ratingRange[Object.keys(this.ratingRange).pop()];
  }

}