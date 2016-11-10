# Nativescript-Angular-Drawer-Template
A starter template to quickly create nativescript angular projects with drawer pages.

## Usage
`tns create my-project-name --template nativescript-angular-drawer-template`

## Preview
### Android
![android-preview](http://ngxp.io/wp-content/product-previews/nativescript-angular-drawer-template/ns-ng-drawer-template-android.gif)

### iOS
![ios-preview](http://ngxp.io/wp-content/product-previews/nativescript-angular-drawer-template/ns-ng-drawer-template-ios.gif)

## How To Change Menu Items
You can change the menu items of drawer from `app/modules/shared/side-drawer-page/side-drawer-page.component.ts` file as shown below:

```
navMenu: any[] = [
    { name: 'Home', commands: ['/'] },
    { name: 'About', commands: ['/about'] },
    { name: 'Contact', commands: ['/contact'] }
];
```

## How To Create New Page
You just need to wrap the content template of the new page inside `<side-drawer-page>` tag as shown below:

```
<side-drawer-page>
    <GridLayout>
        <Label text="Hello World"></Label>
    </GridLayout>
</side-drawer-page>
``` 
You can refer home, contact or about sample modules for reference.

