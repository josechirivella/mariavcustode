import { ComponentType } from "./componentTypes.model";

export interface ICaseStudies {
  id: number;
  attributes: ICaseStudyAttributes;
}

export interface ICaseStudyAttributes {
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
  heading: string;
  subHeading: string;
  slug: string;
  backgroundColor: string;
  featureImage: {
    data: {
      id: number;
      attributes: IAttributes;
    };
  };
  content?: ComponentType;
}

export interface IAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: IFormat;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFormat {
  small: ISmall;
  medium: IMedium;
  thumbnail: IThumbnail;
}

export interface ISmall {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
}

export interface IMedium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
}

export interface IThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
}
