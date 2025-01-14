import { DefaultApi, Configuration, Bulletin } from "./rest-api";

const dev = "http://localhost:3000";

const restConfig = new Configuration({
  basePath: dev,
  baseOptions: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

const restApi = new DefaultApi(restConfig);

class BulletinService {
  async getBulletins(): Promise<Bulletin> {
    const response = await restApi.getBulletins();
    return response.data;
  }

  async addBulletin(payload: Bulletin): Promise<Bulletin> {
    const response = await restApi.addBulletin(payload);
    return response.data;
  }

  async getBulletin(id: string): Promise<Bulletin> {
    console.log(id);
    const response = await restApi.getBulletin(id);
    return response.data;
  }
  async updateBulletin(id: string, payload: Bulletin): Promise<Bulletin> {
    const response = await restApi.updateBulletin(id, payload);
    return response.data;
  }
}

let bulletinService = new BulletinService();
export default bulletinService;
