# SmartworkLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Installing the library
```shell
npm install smartwork-lib --save
```

Also, make sure to add the css styles to your angular.json

```json
...
"styles": [
    "node_modules/smartwork-lib/assets/styles/smartwork.theme.scss",
    "src/styles.scss"
]
...
```

### Using UIOptions
The UIOptions components allows for the personalization of certain aspects of the User Interface, such as the size of the font, the line spacing, the color scheme of the font family. It also stores the user preferences in a cookie, therefore in order to make it work you need to install ````ng-cookie-service```` in your Angular application.

```shell
npm install ng-cookie-service --save
```

After everything is installed, make sure to import the UIComponentsModule into your AppModule

```javascript
import { UIOptionsModule } from 'smartwork-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIOptionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

Then, you can add the UIOptions component to your HTML file (preferrably at the beginning of the HTML document), like this:

```html
<ui-options></ui-options>
```

