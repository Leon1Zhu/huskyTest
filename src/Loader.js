/* eslint-disable import/no-mutable-exports */
/**
 * @author 奇阳、忘悠
 * @description 模块异步加载器
 */

const loaders = {
  classDemo1: null,
  async readyClassDemo1() {
    if (!loaders.classDemo1) {
      const result = await import("./ClassDemo");
      loaders.classDemo1 = result;
    }
  },
  classDemo2: null,
  async readyClassDemo2() {
    if (!loaders.classDemo2) {
      const result = await import("d3");
      loaders.classDemo2 = result;
      console.log(result.active);
    }
  }
};

const DynamicLoader = new Proxy(loaders, {
  get(target, property) {
    const mod = target[property];

    if (property === "ready") {
      return mod;
    }

    if (!mod) {
      throw new Error(
        `异步模块${property}尚未加载，请确认模块初始化时是否调用了 DynamicLoader.xxReady().then `
      );
    }

    return mod;
  }
});

export { DynamicLoader };
