import { Injectable } from "@angular/core";
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://maxi-anguular.firebaseio.com/data.json', 
    //   servers, {
    //   { headers: headers });
    return this.http.put('https://maxi-anguular.firebaseio.com/data.json', 
      servers, {
      { headers: headers });
  }

  getServers() {
    return this.http.get('https://maxi-anguular.firebaseio.com/data.json')
    pipe(map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ));
  }
}


// ....pipe(map(...))
// import { map } from 'rxjs/operators'

