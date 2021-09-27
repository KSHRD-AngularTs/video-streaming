import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Video} from "./video.model";

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }

  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`http://110.74.194.124:9900/videos`);
  }
}
