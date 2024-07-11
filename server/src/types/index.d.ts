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

interface ServerResp<D = any> {
  error?: boolean;
  message?: string;
  data?: D;
}

type ConvertData = { converted: string };
type GenerateVariationsData = { variations: Variations };
type GenerateQueryData = { query: string };

type Result = {
  umlautConvertion?: Name;
  variations?: Variations;
  sqlQuery?: string;
};
type Results = {
  [name: string]: Result;
};
