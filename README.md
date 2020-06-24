# Propose   

I had a page where I had a series of mat-expansion-panels that had links inside. 
When I clicked on the link to go to another page and then hit the back button, it wouldn't remember the scroll position.

This solution fixes it by
- creating a service to keep state
- when clicked it would set the open expansion panel as well as the scroll position of the link
- when i click the back button, it would go back to the page and check the service for the state data
- it would open the expansion open that was last opened and then navigate to the link position


note - i had to save the link position because scrollIntoView didn't quite work with expansion-panels.









# TestRoutingBackNav

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
