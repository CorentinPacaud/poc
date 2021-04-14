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


  countDown = -1;

  onKey(event: KeyboardEvent) {
    if (event.key == "Enter") {
      if (this.countDown == -1) {
        this.values.push(this.currentValue);
        this.currentValue = "";
        this.countDown = -1;
        return
      }
      else {
        this.currentValue = this.results[this.countDown];
        this.countDown = -1;
        return
      }
    }
    if (event.key == "ArrowDown") this.countDown < this.results.length - 1 ? this.countDown++ : this.countDown = this.results.length - 1;
    if (event.key == "ArrowUp") this.countDown > -1 ? this.countDown-- : this.countDown = -1;
    console.log(this.countDown)
  }


  filters = ["toto:", "coco:", "tutu:", "pipi:"]
  totos = ["toto:co", "toto:pi", "toto:tutu"]

  results: string[] = [];
  search(event) {
    if (!event.query.startsWith("toto:"))
      this.results = this.filters.filter(ele => ele.startsWith(event.query))
    else {
      this.results = this.totos.filter(ele => ele.startsWith(event.query))
    }
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
