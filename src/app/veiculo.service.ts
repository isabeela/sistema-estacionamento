import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs/operators';

interface Response {
  timestamp: Date;
}

@Injectable()
export class VeiculoService {
  constructor() {}
}
