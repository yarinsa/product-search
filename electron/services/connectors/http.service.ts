import { net } from 'electron';
import { Connector } from './connector';

export class HttpService implements Connector {
  fetch = async (url: string) => {
    return new Promise<any>((resolve, reject) => {
      const request = net
        .request(url)
        .on('response', (response) => {
          response.on('data', (chunk) => {
            resolve(JSON.parse(chunk.toString()));
          });
        })
        .on('error', (error) =>
          reject('There was problem fetching data ' + error)
        );
      request.end();
    });
  };
}
