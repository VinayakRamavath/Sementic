

import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DisplayService{
    

    query: string = "";
    private webUrl = 'http://localhost:8080/geturl';
    
    private headers = new Headers({'Content-Type': 'application/json',

    'Access-Control-Allow-Origin': '*'});
    constructor (private http: Http){}
    
    setQuery(value){
        this.query=value;
    }

    postquery(url:any,intent:any): Promise<void> {
        console.log("hi")
         return this.http.post('http://172.23.238.179:8051/spellcheck/query?query='+url,JSON.stringify({}))
                        .toPromise()
                        .then(
                            (res)=>res.text(),
                              (err)=>err.json())
      }

    postquery1(domain:any,concept:any): Promise<void> {
        console.log("hi")
        //  return this.http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAl4scItyrUcR2RXP_BANo4_JJaME9h1lE&cx=001526183543954148516:le1j-wjnwkg&q=java%20interface')
         return this.http.post('http://172.23.238.179:8089/domainexpert/'+domain+'/'+concept,JSON.stringify({}),{headers: this.headers})
                        .toPromise()
                        .then(
                            (res)=>res.text(),
                              (err)=>err.json())
      }

    getparser():Promise<void>{
        console.log("isnide get")
        return this.http.get('http://localhost:8096//v1.0/semantic/neo4jintentservice/getterms',{headers: this.headers})
        .toPromise()
        .then((res)=>res.text(),
              (err)=>err.json())
    }
    
    getindexer():Promise<void>{
        console.log("inside get")
        return this.http.get('http://localhost:8096//v1.0/semantic/neo4jintentservice/graphterms',{headers: this.headers})
        .toPromise()
        .then((res)=>res.text(),
              (err)=>err.json())
    }

    postintentdomain() {
        console.log("inside post");
         return this.http.post('http://172.23.238.179:8096/v1.0/semantic/neo4jintentservice/postcsvindicator?csvname=aditya',JSON.stringify({}),{headers: this.headers})
                        .toPromise()
                        .then((res)=>res.text(),
                        
                              (err)=>err.json())
      }

      postintentsearch(): Promise<void> {
          console.log("isnide post")
        return this.http.post('http://localhost:8055/postcsvsubconcept?csvname=intentofnlp',JSON.stringify({}),{headers: this.headers})
                       .toPromise()
                       .then((res)=>res.text(),
                             (err)=>err.json())
     }

}