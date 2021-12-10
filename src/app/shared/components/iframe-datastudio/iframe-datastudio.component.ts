import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-datastudio',
  templateUrl: './iframe-datastudio.component.html',
  styleUrls: ['./iframe-datastudio.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class IframeDatastudioComponent implements OnInit {

  @Input('desktop') urlDesktop = '';
  @Input('movil') urlMovil = '';

  currentUrl: SafeUrl | undefined;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.renderIframe();
  }

  onResize(event: Event) {
    this.renderIframe();
  }

  renderIframe(){
    let movilWidth = 960;
    let currentWidthSize = document.documentElement.offsetWidth;
    if (currentWidthSize>movilWidth) {
      this.currentUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.urlDesktop);
    } else {
      this.currentUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.urlMovil);
    }
  }

}
