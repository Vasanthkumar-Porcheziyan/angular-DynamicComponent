import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-hero-job-ad",
  template: `
    <div class="job-ad">
      <h4>{{ data.headline }}</h4>

      {{ data.body }}
    </div>
  `,
  styleUrls: ["./hero-job-ad.component.css"]
})
export class HeroJobAdComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
