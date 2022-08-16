import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:1337/api/apparelpages?pagination[page]=';

  getData(now_page:number){
    return this.http.get<Products>(this.url + now_page);
  }


}
