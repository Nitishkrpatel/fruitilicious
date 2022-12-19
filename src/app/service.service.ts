import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl = "https://anand9767.pythonanywhere.com/webapi/"
  constructor(private http: HttpClient) {}

  getMenuItems():Observable<any> {
    // const httpTokenHeader = {
    //   headers: new HttpHeaders({
    //     Authorization: 'token 39d6f84a5cb12f58f7fa86476ff92ec7be09a5ca'
    //   }),
    // };
    // return this.http.get(
    //   this.baseUrl + "menuitem/",httpTokenHeader
    // );
    const url = this.baseUrl + "menuitem/"
    return this.http.get(url);
  }

  getMenuItemsData(id:number){
    const url = this.baseUrl + "item/?menuItem=" + id;
    return this.http.get(url);
  }

  getBlogs(){
    const url = this.baseUrl + "blogs/"
    return this.http.get(url);
  }

  blogDetailsData(id:number){
    const url = this.baseUrl + "blogs/" + id +"/";
    return this.http.get(url);
  }

  getDetoxDrinkData(){
    const url = this.baseUrl + "item/?menuItem=12"
    return this.http.get(url);
  }

  getCoolingDrinkData(){
    const url = this.baseUrl + "item/?menuItem=13"
    return this.http.get(url);
  }

  
  sendFeedback(reqData:any){
  //   const headers ={
  //     header: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //     })
  // }
    // const data:any =  JSON.stringify(reqData);
    const url = this.baseUrl + "feedback/"
    return this.http.post(url,reqData)
  }
}
