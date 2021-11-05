import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs/operators';

interface Response {
  time: {
    update: string;
  };
}

@Injectable()
export class VeiculoService {

  constructor() { }

}