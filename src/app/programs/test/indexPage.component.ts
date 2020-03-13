import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormQLMode } from '@formql/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'index',
  templateUrl: './indexPage.component.html',
  styleUrls: ['./indexPage.component.less']
})
export class IndexPageComponent implements OnInit {

  constructor(
    private router: Router,
    private com: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    console.log(this.com);
  }

  openForm() {
    this.router.navigate(['/form/contactInfo/123/']);
  }

  openList() {
    this.router.navigate(['/form/register/234/']);
  }

}
