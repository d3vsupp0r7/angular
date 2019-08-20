# Android Architecture Notes

## Components
The most basic building block of your Angular application (and this is a concept that's not new) is the component. A component consists of three primary elements:

* The HTML template
* The logic
* The styling (CSS, Sass, Stylus, etc..)
When we use the Angular CLI to start a new project, it generates a single component, which is found in /src/app/:

## Services
Services in Angular allow you to define code that's accessible and reusable throughout multiple components. A common use case for services is when you need to communicate with a backend of some sort to send and receive data.

To generate a service:

```
> **ng g s <service_name>**
CREATE src/app/<service_name>.service.spec.ts (343 bytes)
CREATE src/app/<service_name>.service.ts (137 bytes)
```

