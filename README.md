## Chat App

This app is a proof of concept meant to facilitate communication between current and potential clients, and business team members.

## Stack

This app uses [React](https://reactjs.org/), [GraphQL](https://graphql.org/) with [Apollo 3.0](https://www.apollographql.com/docs/) and [Hasura](https://hasura.io/), as well as a Postgres database.

## GraphQL Engine over Postgres DB

Using [Hasura](https://hasura.io/) and [Heroku](heroku.com) this app is currently running a GraphQL Engine over Postgres DB. The console can be found [here](https://secfi-chat-api.herokuapp.com/console).

If you'd like to work locally and try out something yourself, you can use [Docker](https://www.docker.com/). You can find the configuration in the `docker-compose.yml` file. Just run the `yarn start:local-api` script and a detached docker container will launch. Once running, you can view the the UI console at [http://localhost:8080/console](http://localhost:8080/console). On initial startup, you will have to create the `User` and `Message` tables.

### TODO:

- Set up routing
- Set up user authorization and roles
- Set up a production-ready Hasura deployment

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

As mentioned above, it will also launch the Hasura docker container.

### `yarn start:local-api`

Runs the local detached docker container with Hasura GraphQL Engine over Postgres DB. Once running, you can view the the UI console at [http://localhost:8080/console](http://localhost:8080/console). On initial startup, you will have to create the `User` and `Message` tables.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn generate`

Generates the facadeClient code from the Hasura GraphQL Schema. Learn more at [graphql-code-generator](https://graphql-code-generator.com/). The configuration is found in `codegen.yml` file.

### `yarn generateGraphqlSchema`

Generates the GraphQL `schema.json` file from Hasura in the root directory.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
