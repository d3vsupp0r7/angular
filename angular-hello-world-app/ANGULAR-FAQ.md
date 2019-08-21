# Angular Architecture Notes

## Components
The most basic building block of your Angular application (and this is a concept that's not new) is the component. A component consists of three primary elements:

* The HTML template
* The logic
* The styling (CSS, Sass, Stylus, etc..)
When we use the Angular CLI to start a new project, it generates a single component, which is found in /src/app/:

For this example project we have create the following components:

* create-employee : 
* employee-list   :

### Create a component

```
ng g c create-employee
CREATE src/app/create-employee/create-employee.component.html (30 bytes)
CREATE src/app/create-employee/create-employee.component.spec.ts (685 bytes)
CREATE src/app/create-employee/create-employee.component.ts (304 bytes)
CREATE src/app/create-employee/create-employee.component.css (0 bytes)
UPDATE src/app/app.module.ts (528 bytes)
```

## Services
Services in Angular allow you to define code that's accessible and reusable throughout multiple components. A common use case for services is when you need to communicate with a backend of some sort to send and receive data.

To generate a service:

```
> **ng g s <service_name>**
CREATE src/app/<service_name>.service.spec.ts (343 bytes)
CREATE src/app/<service_name>.service.ts (137 bytes)
```

## Angular Forms

### Template Driven Forms
With this type of form

### Reactive Forms (or Model Driven)
With this type of form


# Angular projects -  important files
## Routing
File: **app-routing.module.ts**  

## app.component.ts
The app component is the root component of the application, it defines the root tag of the app as with the selector property of the @Component decorator.

## app.module.ts
Defines the root module, named AppModule, that tells Angular how to assemble the application. Initially declares only the AppComponent. As you add more components to the app, they must be declared here.

## /src/index.html
The main index.html file is the initial page loaded by the browser. Webpack bundles all of the javascript files together and injects them into the body of the index.html page so the scripts get loaded and executed by the browser.

## /src/main.ts
The main file is the entry point used by angular to launch and bootstrap the application.

## Typescript

### /tsconfig.json
The tsconfig.json file configures how the TypeScript compiler will convert TypeScript into JavaScript that is understood by the browser. 

# Commands

## npm

### Install a specific angular cli version

```
npm install -g @angular/cli@<version.name>
```

## yarn

### Install node_modules dependencies

On application root, execute the following command:

```
yarn install
```

## ng

### Build

```
ng build
```

### Run the angular app

Runs on a default port (4200)

```
ng serve
```

Run server on a specific port

```
ng serve --port xxxx
```

# Useful resources

## NVM tool: manage diffrent node versions

Url: https://github.com/coreybutler/nvm-windows/releases  

Tips:   
* Install the .exe as administrator
* Prove to install node versions using the powershell.