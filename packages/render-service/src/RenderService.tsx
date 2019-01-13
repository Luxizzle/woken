import { Injectable } from '@woken/core';
import { GameRoot } from './components/GameRoot';

@Injectable()
export class RenderService {
  render() {
    return GameRoot;
  }
}
