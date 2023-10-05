export enum ComponentType {
  RICH_TEXT = "case-study-content.content-component",
  CAROUSEL = "case-study-content.carousel",
  TEXT = "case-study-content.text",
}

export interface IComponentObject {
  id: Number;
  __component: ComponentType;
  richText?: String;
  text: String;
}
