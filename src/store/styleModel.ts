export enum StyleModel {
  LIGHT = 'light',
  DARK = 'dark'
}

export default function useStyleModelStore() {
  return {
    getStyleModel: StyleModel.LIGHT,
    setStyleModel(model: StyleModel) {
      this.getStyleModel = model;
    }
  };
}
