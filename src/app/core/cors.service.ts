import { Injectable } from '@angular/core'
import { CONFIG } from '../config'
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http'

import 'rxjs/operators'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  
  constructor(private htpclient: HttpClient) {}

  

  post(partUrl: string, dataGet: any) {
    let body = new HttpParams({ fromObject: dataGet })

   
    return this.htpclient.post(
      `${CONFIG.urlApi}${partUrl}`,
      body.toString(),
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
  }
  get(partUrl: string) {
    return this.htpclient.get(`${CONFIG.urlApi}${partUrl}`);
  }
  
}
