import bent from 'bent';
import { HTTP_BASE_URL, HTTPS_BASE_URL, PATH } from "./_constants";
import { IBenchmarkModel } from "./types/benchmark-models";

const benchmarkModels: IBenchmarkModel[] = [
  {
    fn: async (defer: any) => {
      const get = bent(HTTP_BASE_URL, 'GET');
      await get(PATH);
      defer.resolve();
    },
    target: "[bent] http [GET]",
  },
  {
    fn: async (defer: any) => {
      const post = bent(HTTP_BASE_URL, 'POST');
      await post(PATH);
      defer.resolve();
    },
    target: "[bent] http [POST]",
  },
  {
    fn: async (defer: any) => {
      const get = bent(HTTPS_BASE_URL, 'GET');
      await get(PATH);
      defer.resolve();
    },
    target: "[bent] https [GET]",
  },
  {
    fn: async (defer: any) => {
      const post = bent(HTTPS_BASE_URL, 'POST');
      await post(PATH);
      defer.resolve();
    },
    target: "[bent] https [POST]",
  },
];

export default benchmarkModels;
