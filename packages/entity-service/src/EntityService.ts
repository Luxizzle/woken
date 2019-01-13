import { Injectable } from '@woken/core';
import { ObjectService } from './ObjectService';

/**
 * @Service registers the service as a service.
 */
@Injectable()
export class EntityService {
  constructor(private readonly objectService: ObjectService) {}
}
