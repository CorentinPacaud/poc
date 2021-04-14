import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})




export class AppComponent {
  title = 'My Poc';

  public items: MenuItem[];

  values: string[] = [];

  currentValue = "";
  touch = "";

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Open', icon: 'pi pi-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-repeat' }
      ]
    }];
  }

  onKey(event: KeyboardEvent) {
    console.log(event)
    if (event.key == "Enter") {
      this.values.push(this.currentValue);
      this.currentValue = "";
    }
  }

  filters = ["toto:", "coco:", "tutu:", "pipi:"]
  results: string[] = [];
  search(event) {
    this.results = this.filters.filter(ele => ele.startsWith(event.query))
  }

  getClass(text) {
    if (text.startsWith('coco')) {
      return "startWithCoco"
    } else if (text.startsWith('pipi')) {
      return 'startWithPipi'
    } else if (text.startsWith('toto')) {
      return 'startWithToto'
    }
  }

}
