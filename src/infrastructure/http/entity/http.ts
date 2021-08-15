import axios from 'axios';

const HttpWrapper: any = () => {
  const http: any = (url: string, method: string) => {
    if (method === 'GET') {
      return axios.get(url);
    }
    return undefined;
  };

  return {
    http,
  };
};

const factory = HttpWrapper();

export const httpEntity = (): any => ({ ...factory });
