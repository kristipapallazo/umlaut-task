import express from "express";
import routes from "../src/routes";
import config from "config";
import cors, { CorsOptions } from "cors";
import { AppConfig } from "./types";

const appConfig: AppConfig = config.get("app");
if (!appConfig) {
  console.log(
    `Error: app object is missing in config file => ${JSON.stringify(
      appConfig
    )}!`
  );
  process.exit(1);
}
if (!appConfig.port) {
  console.log(
    `Error: Port property is missing => ${appConfig.port}. It is derived to default one(8080)`
  );
}
if (!appConfig.origin) {
  console.log(`Error: Origin property is missing => ${appConfig.origin}`);
  process.exit(1);
}
const { port: PORT, origin } = appConfig;

const port = PORT || 8080;

const app = express();

/* enable cors with below configuration */
const corsOptions: CorsOptions = {
  origin,
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
