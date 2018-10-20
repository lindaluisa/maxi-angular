import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})

export class ServerElementComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: String;
  @ViewChild('heading') header: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content ' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text Content ' + this.header.nativeElement.textContent);
  }

}
