import { Injectable } from "@angular/core";
import { Http } from '@angular/http';


@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    this.http.post('https://maxi-anguular.firebaseio.com/')
  }
  }




