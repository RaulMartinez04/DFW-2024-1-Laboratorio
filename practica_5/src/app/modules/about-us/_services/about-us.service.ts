import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private url = "http://localhost:8080";
  private route = "/aboutUs";

  constructor(private http: HttpClient) { }

  
}
