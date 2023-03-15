export class AnimationModel {
  constructor(state) {
    this.state = state;
  }

  getAnimationClosestData() {
    const animationData = {
      totalDuration: 0,
      lines: []
    };

    this.state.resultData.forEach(item => {
      if(item.animationClosestDuration > animationData.totalDuration) {
        animationData.totalDuration = item.animationClosestDuration;
      }

      animationData.lines.push({
        consumerId: item.id,
        providerId: item.closestProvider.id,
        childrenCount: item.children.length,
        animationDuration: item.animationClosestDuration,
        latency: Math.round(item.latencyClosest),
        time: Math.round(item.latencyClosest / 1000 * 10 * 10) / 10
      });
    });

    return animationData;
  }

  getAnimationMainData() {
    const animationData = {
      totalDuration: 0,
      lines: []

    };

    this.state.resultData.forEach(item => {
      if(item.animationMainDuration > animationData.totalDuration) {
        animationData.totalDuration = item.animationMainDuration;
      }

      animationData.lines.push({
        consumerId: item.id,
        providerId: item.mainProvider.id,
        childrenCount: item.children.length,
        animationDuration: item.animationMainDuration,
        latency: Math.round(item.latencyMain),
        time: Math.round(item.latencyMain / 1000 * 10 * 10) / 10
      });
    });

    return animationData;
  }
}