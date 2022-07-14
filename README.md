# Werners typescript template

Project to help me learn more about MobX and Lit

Stack:

-   TypesScript
-   Bootstrapped with Create Snowpack App (CSA).
-   MobX (instead of Redux)
-   Lit 2.0 (LitElement update, instead of React)
-   Jest for testing
-   Prettier for code formatting
-   Sass CSS extension

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

## Lit examples

```
<!-- Child nodes -->
<h1>${this.pageTitle}</h1>

<!-- Attribute -->
<div class=${this.myTheme}></div>

<!-- Boolean attribute -->
<p ?hidden=${this.isHidden}>I may be in hiding.</p>

<!-- Property -->
<input .value=${this.value}>

<!-- Event listener -->
<button @click=${() => {console.log("You clicked a button.")}}>...</button>
```

## Publishing to azure

run snowpack build
then upload the build folder using this guide:
https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode
