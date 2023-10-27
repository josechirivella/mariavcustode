export interface IProjects {
  id: number;
  attributes: IProjectsAttributes;
}

export interface IProjectsAttributes {
  title: string;
  description: string;
  slug: string;
  currentlyWorkingOn: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  role: string;
  duration: string;
  featureImage: FeatureImage;
}

export interface FeatureImage {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
  alternativeText: string;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  large: ImageAttributes;
  small: ImageAttributes;
  medium: ImageAttributes;
  thumbnail: ImageAttributes;
}

export interface ImageAttributes {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
