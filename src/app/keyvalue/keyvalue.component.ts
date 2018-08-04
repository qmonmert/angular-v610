import { Component } from "@angular/core";

@Component({
  selector: "app-keyvalue",
  template: `
    <h1>Keyvalue component</h1>
    <div *ngFor="let item of person | keyvalue">
      {{ item.key }} - {{ item.value }}
    </div>
  `
})
export class KeyvalueComponent {
  person = {
    firstname: "Quentin",
    lastname: "Monmert"
  };
}
