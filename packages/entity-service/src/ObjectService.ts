import { Injectable } from '@woken/core';

@Injectable()
export class ObjectService {
  getObject(name: string): any {
    return `${name}__asd`;
  }
}
