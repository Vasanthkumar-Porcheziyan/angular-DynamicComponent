import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdService } from './ad.service';
import { AdHostDirective } from './ad-host.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeroJobAdComponent, HeroProfileComponent, AdBannerComponent, AdHostDirective ],
  bootstrap:    [ AppComponent ],
  providers: [AdService]
})
export class AppModule { }
