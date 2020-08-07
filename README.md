# WebViewer - CORS - Loading WebViewer's lib from a different domain

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com).

This repo is specifically designed for any users interested how to serve WebViewer's lib from [a different domain](https://www.pdftron.com/documentation/web/guides/config-files/#using-a-config-file-when-the-path-is-on-another-domain).

We recommend serving WebViewer lib on the same domain as the app itself for additional performance and security.

## Initial setup

Before you begin, make sure your development environment includes [Node.js](https://nodejs.org/en/).

## Install

```
git clone https://github.com/PDFTron/webviewer-cors.git
```
```
cd webviewer-cors/webviewer-app
npm i
```
```
cd webviewer-cors/webviewer-lib
npm i
```

## Run

```
npm start
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

To test the build directory locally you can use [serve](https://www.npmjs.com/package/serve) or [http-server](https://www.npmjs.com/package/http-server). In case of serve, by default it strips the .html extension stripped from paths. We added serve.json configuration to disable cleanUrls option. 

## WebViewer APIs

See [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## Contributing

See [contributing](./CONTRIBUTING.md).

## License

See [license](./LICENSE).
![](https://onepixel.pdftron.com/webviewer-react-sample)
