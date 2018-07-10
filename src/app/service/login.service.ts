import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';


@Injectable()
export class LoginService {
  public  url = "http://localhost:3000/auth";
    constructor( public http: Http) {
  }

  //login serivce
  login(postBody: any): Observable<any> {
    // "appApiResources.login" is the constant string containing login api url 
    return this.http.post(this.url, postBody)
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