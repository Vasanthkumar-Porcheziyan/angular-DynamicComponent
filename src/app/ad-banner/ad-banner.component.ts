import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdHostDirective } from '../ad-host.directive';
import { AdComponent, AdItem } from '../ad-type';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit,OnDestroy {
@Input()ads:AdItem[];
 currentAdIndex = -1;
  @ViewChild(AdHostDirective, {static: true}) appAdHost: AdHostDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit() {
    this.loadComponents();
    this.getAds();
  }

  private loadComponents(){
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewComponentRef = this.appAdHost.viewContainerRef;
    viewComponentRef.clear();

    const containerRef = viewComponentRef.createComponent<AdComponent>(componentFactory);
    containerRef.instance.data = adItem.data;
  }

  private getAds(){
 this.interval = setInterval(() => {
      this.loadComponents();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}