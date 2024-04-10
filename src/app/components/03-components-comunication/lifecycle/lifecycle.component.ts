import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, OnDestroy {

  @Input() value = "my Value";
  @Input() name = "My component";
  valor = 1;
  constructor() { }
  ngOnDestroy(): void {
    console.log("onDestroy")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
    console.log(this.value);
    console.log(this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }


}
