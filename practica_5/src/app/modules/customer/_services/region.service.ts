<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
>>>>>>> 0a28b4c78f8bc29c2558b2cd7462236467607c2b
import { Region } from '../_models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private url = "http://localhost:8080";
  private route = "/region";

  constructor(private http: HttpClient) { }

  createRegion(region: any) {
    return this.http.post(this.url + this.route, region);
  }

  enableRegion(id: number) {
    return this.http.put(this.url + this.route + "/" + id + "/activate", null);
  }

  disableRegion(id: number) {
    return this.http.delete(this.url + this.route + "/" + id);
  }

  getRegion(id: number) {
    return this.http.get<Region[]>(this.url + this.route + "/" + id);
  }

  getRegions() {
    return this.http.get<Region[]>(this.url + this.route);
  }

  updateRegion(region: any, id: number) {
    return this.http.put(this.url + this.route + "/" + id, region);
  }
}
<<<<<<< HEAD
=======

>>>>>>> 0a28b4c78f8bc29c2558b2cd7462236467607c2b
