import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
      console.log('usao u servis');
      return this.http.get<Item[]>(environment.apiURL + 'Items/');
 }

   
  
}
