import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  public fixedSidenav = true;
  public pBar = false;
  title = 'bsc-notes-app';
  constructor(
    public translate: TranslateService,
    private renderer: Renderer2,

  ) {
  }
  selectedLanguage() {
    // console.log(this.selectedLevel)
  }
}

