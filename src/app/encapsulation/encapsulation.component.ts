import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-encapsulation",
  template: `
    <style>
      h1 {
        color: lightcoral;
      }
    </style>
    <h1>Encapsulation component</h1>
  `,
  // encapsulation: ViewEncapsulation.Emulated // Default
  // encapsulation: ViewEncapsulation.Native // ShadowDOM v0
  encapsulation: ViewEncapsulation.ShadowDom // ShadowDOM v1
})
export class EncapsulationComponent {}
