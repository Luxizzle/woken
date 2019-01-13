import 'reflect-metadata';
import { ReflectiveInjector, Provider } from 'injection-js';

export class ServiceManager {
  private readonly injector: ReflectiveInjector;

  constructor(services: Provider[]) {
    this.injector = ReflectiveInjector.resolveAndCreate(services);
  }

  get<T extends Provider>(service: T): T {
    return this.injector.get(service);
  }
}
