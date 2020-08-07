# WebViewer - CORS - Loading WebViewer's lib from a different domain

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com).

This repo is specifically designed for any users interested how to serve WebViewer's lib from [a different domain](https://www.pdftron.com/documentation/web/guides/config-files/#using-a-config-file-when-the-path-is-on-another-domain).

We recommend serving WebViewer lib on the same domain as the app itself for additional performance and security.

## Initial setup

Before you begin, make sure your development environment includes [Node.js](https://nodejs.org/en/).

## Install

Clone the repository

```
git clone https://github.com/PDFTron/webviewer-cors.git
```

Install WebViewer lib static server
```
cd webviewer-cors/webviewer-lib
npm i
```

Install React-TypeScript app
```
cd webviewer-cors/webviewer-app
npm i
```
After the install completed, the `postinstall` will copy over WebViewer's lib folder to the static server under `public/lib`.

## Run

Run WebViewer lib static server:
```
cd webviewer-cors/webviewer-lib
npm start
```

Run React-TypeScript app:
```
cd webviewer-cors/webviewer-app
npm start
```

## WebViewer APIs

See [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## Contributing

See [contributing](./CONTRIBUTING.md).

## License

See [license](./LICENSE).
![](https://onepixel.pdftron.com/webviewer-react-sample)
