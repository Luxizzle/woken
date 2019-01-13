import { ServiceManager } from './services/ServiceManager';
import { Provider } from 'injection-js';

interface CoreOptions {
  services?: Provider[];
}

export class Core {
  readonly serviceManager: ServiceManager;

  constructor({ services = [] }: CoreOptions) {
    this.serviceManager = new ServiceManager(services);
  }

  readonly getService = this.serviceManager.get;
}
