# Frontend Boilerplate
Starter frontend template for mobile apps built in react native using expo. Project is also a playground for exploring different components in the react navigation, react native elements and victory native libraries. 

## Organization
* **client**: Main directory holding frontend files
    * **App.js**: Root app file. Will be the file that is called when *yarn start* is run.
    * **src**: Contains react files for screens and components.
        * **dataViz**: Contains visualization built using victory native.
        * **event**: Contains components used to create events.
        * **library**: Contains smaller pre-built components used across the app, like buttons and modals.
        * **navigation**: Contains the tab and stack navigators created using react navigation.
        * **screens**: Contains the files to build the screens using the pieces in the src directory. Includes the *engage, explore, home, profile*, and *scanner* screens.
    * **constants**: Holds the theming files for the frontend.
    * **assets**: Various icons and images for app.
    * **node_modules**: Installed node packages.
    * **app.json, babel.config.js, package.json, yarn.lock**: Configuration files.

## Dependencies
* [React Native](https://reactnative.dev/)
* [Yarn](https://yarnpkg.com/)
* [Expo](https://expo.dev/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Elements](https://reactnativeelements.com/)
* [Victory Native](https://formidable.com/open-source/victory/docs)

## Running it locally
Install yarn, clone the repository, and then run the following commands:
```
cd boilerplate
yarn install
cd client
yarn start
```