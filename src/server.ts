import { nextApp, nextHandelr } from "./next-utils";
import { getPayloadClient } from "./get-payoad";
import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandelr(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info("Nextjs started");
    app.listen(PORT, async () => {
      payload.logger.info(
        `Nextjs App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`,
      );
    });
  });
};

start();
