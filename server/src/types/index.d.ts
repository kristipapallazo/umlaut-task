export interface AppConfig {
  baseUrl: string;
  port: number;
  origin: string;
}

interface ConfigObj {
  app: AppConfig;
}

interface NameConversion {
  original: string;
  umlaut: string;
}

type Name = string;
type Names = Name[];
type Variations = Name[];

type Result = {
  umlautConversion?: Name;
  variations?: Variations;
  sqlQuery?: string;
};
type Results = {
  [name: string]: Result;
};
