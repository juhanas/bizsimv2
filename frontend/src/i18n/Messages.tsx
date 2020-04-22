export type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description?: string | object;
}

export type Messages = {
  [key: string]: MessageDescriptor;
}

export type Translation = {
  [key: string]: string;
}

export type Translations = {
  [key: string]: Translation;
}
