import { BACKEND_BASENAME } from "src/constants";

class Api {
  async fetchAndReadJson(uri: string) {
    const response = await fetch(uri);
    if (!response.ok) {
      throw Error(response.status.toString());
    }
    return await response.json();
  }

  async getProjectCodes(): Promise<string[]> {
    const uri = `${BACKEND_BASENAME}/api/v1/project_codes`;
    return await this.fetchAndReadJson(uri);
  }
}

export default new Api();
