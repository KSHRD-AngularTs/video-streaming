import {Component, OnInit, ViewChild} from '@angular/core';
import {PlyrComponent} from 'ngx-plyr';
import * as Plyr from "plyr";
import {VideosService} from "./videos.service";
import {Source} from "plyr";
import {map} from "rxjs/operators";
import {Video} from "./video.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(PlyrComponent)
  plyrComponent!: PlyrComponent;

  player!: Plyr;

  videoSources: Plyr.Source[] = [];

  videos: Video[] = [];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  constructor(
    private videoService: VideosService
  ) {
  }

  ngOnInit() {
    // this.videoService.getAllVideos().pipe(map(video =>
    //   video.map(v => {
    //     const vs: Source = {
    //       src: v.link,
    //       provider: 'html5',
    //       type: 'video/mp4',
    //     }
    //     return vs;
    //   })
    // )).subscribe(arr => {
    //   this.videoSources = arr;
    // });
    this.videoService.getAllVideos().subscribe(videos => {
      this.videos = videos;
    })
  }

  onChangeVideo(link: string): void {
    const source: Source = {
      src: link,
      provider: 'html5',
      type: 'video/mp4',
    }
    this.videoSources = [source];
  }
}
