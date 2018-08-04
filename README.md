# AngularV610

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## This project shows 3 features of Angular 6.1

### Keyvalue

New **keyvalue** pipe

```
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
```

This example renders :

```
firstname - Quentin
lastname - Monmert
```

### Scroll position restoration

Restore the scroll position when going back. Feature by default in the future

```
RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
})
```

### ShadowDOM v1 View Encapsulation

New view encapsulation : **ViewEncapsulation.ShadowDom**

```
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
  encapsulation: ViewEncapsulation.ShadowDom // ShadowDOM v1
})
export class EncapsulationComponent {}
```
