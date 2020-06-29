# Youtube App

This is a webapp made consume the Youtube api, making some restrictions. The app let only one video to be watched a time.
You have limit time to watch videos.

## Techs

Made with React, the project could be easily adapted to a mobile app, made with React Native. This tech was chosen
by the performance and technologies that make implementation easier.

### Used Techs

- **[Axios](https://www.npmjs.com/package/axios "axios")** -> Used to do requests to API

- **[React router dom](https://www.npmjs.com/package/react-router-dom)** -> Responsable to do all the navigation

- **[Styled Components](https://styled-components.com)** -> Used to style components from react.

- **[Moment](https://www.npmjs.com/package/moment)** -> Used to convert date.

- **[History](https://www.npmjs.com/package/react-history)** -> Used to manage session history.

- **[EsLint](https://www.npmjs.com/package/eslint)** -> Used to make the code clean and standardized.

- **[RocketSeat Unform](https://www.npmjs.com/package/@rocketseat/unform)** -> Used to make form submit (search).

- **[Prop Types](https://www.npmjs.com/package/prop-types)** -> Used to document the intended types.

- **[Query String](https://www.npmjs.com/package/query-string)** -> Convert query strings

## How to Run
**Considering that the api server is runnning**
***Create .env file and put all the global variables values (I let the file in this project, to make it easier)

- Clone the project

```
yarn
```

```
yarn start
```

## Considerations
The next step is make tests, error handling and add some new features to make the user experience better, such as make pagination to search
