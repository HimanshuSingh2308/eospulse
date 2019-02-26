import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {
  video_id ='n70paGIJN4c';
  showYoutube = false;
  ladda = false;
  isMobile :Boolean;
  innerWidth : any;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(parseInt(this.innerWidth) <= 600) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    console.log(this.innerWidth,"resize");
  }

  ngOnInit() {
    if( window.innerWidth <= 600 ) {
      this.isMobile = true;
    } else {
      this.isMobile =false;
    }
  }

  goToUrl(url){
    window.open(url,"_blank");
  }

  savePlayer(event){
    this.ladda= false;
    event.playVideo();
  }

  playYoutubeVideo(){
    this.ladda = true;
    this.showYoutube = true;
  }

  onStateChange(event){
    if(event.data == 0) {
      event.target.stopVideo();
      this.showYoutube = false;
    }
  }

}
