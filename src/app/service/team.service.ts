import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';


@Injectable()
export class TeamService {
  public  url = "http://localhost:3000/teamInfo";
    constructor( public http: Http) {
  }

  //login serivce
  getTeamInfo(): Observable<any> {
    return this.http.get(this.url)
    .map(this.extractData)
    .catch(this.handleError)
    .finally(() => {
    });
  }

  updateTeam(teamObject): Observable<any> {
    return this.http.post("http://localhost:3000/updateTeam",teamObject)
    .map(this.extractData)
    .catch(this.handleError)
    .finally(() => {
    });
  } 

  private extractData(res: Response) {
    let body = res.json();  
    if (body) {
        return body || body;
     } else {
        return {};
     }
  }
 
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}