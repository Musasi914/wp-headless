export interface SearchPost {
  id: number;
  title: string;
  url: string;
  type: string;
  subtype: string;
  _links: Links;
}

export interface Links {
  self: Self[];
  about: About[];
  collection: Collection[];
}

export interface Self {
  embeddable: boolean;
  href: string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface About {
  href: string;
}

export interface Collection {
  href: string;
}
