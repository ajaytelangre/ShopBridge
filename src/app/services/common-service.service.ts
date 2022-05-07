import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  itemId=0;

  constructor(private http:HttpClient) { }

  setItemData(url:any,data:any)
  {
    return this.http.post(url,data);
  }

  getAllItems(url:any)
  {
    return this.http.get(url);
  }

  deleteItem(url:any)
  {
    return this.http.delete(url);
  }

  updateItem(url:any,data:any)
  {
    return this.http.put(url,data)
  }

}
