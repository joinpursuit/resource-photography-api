# Photography API Discovery Lab

This lab is designed to give you the opportunity to look at a more complex server and introduce you to different ways of structuring your projects. It will also require you to edit existing code, which is an important part of being a new software engineer.

## Context

As a new developer, it is rare that you will be starting a project from scratch. Instead, you will most often be working within a large existing codebase written by other developers. This means that learning how to read code that is not yours is an important skill.

## Installation guide

Once you have the repository cloned, run the following commands from your command line in the project folder. In order for the following commands to work, you will need to have your PostgreSQL database up and running and will need to have access to the `createdb` command.

```
npm install
cp .env.development.sample .env.development
createdb photography_api_dev
cp .env.test.sample .env.test
createdb photography_api_test
npm run db:setup
npm run db:seed
```

After running the above commands, you should then be able to start the server with `npm start`. Alternatively, you can run the development server by running `npm run dev`.

## Instructions

To complete this lab you will need to complete two different tasks. First, you will need to answer a series of questions related to this project. Then, you will implement at least one new feature.

### Questions

Answer the following questions, replacing `"Your answer..."` with your your actual answer. Use your _own words_ to answer each question.

- In the `package.json` file, what two different scripts can be run to start the API's server? What is the difference between these two scripts?

  > Your answer...

- What does the `nodemon` package do and why is it installed under developer dependencies?

  > Your answer...

- What are the differences, if any, between the `.env.development` file and the `.env.test` file?

  > Your answer...

- What is the purpose of the `utils/loadEnvironment.js` file? How does it relate to the `.env` files?

  > Your answer...

- What is the `dotenv-expand` package and why is it being used?

  > Your answer...

- The `db:setup` ends up running the `db/schema/index.js` file but does not explicitly mention the `index.js` file. How does Node know that the `index.js` file is meant to be run?

  > Your answer...

- What does the `module-alias` package do? Where can you see it being used in the `db/schema/index.js` file?

  > Your answer...

- Take a look at the `db/schema/index.js` file. How do environment variables effect what happens when this file is required or run?

  > Your answer...

- How does the `setup()` function differ from the `reset()` function in the `db/schema/index.js` file?

  > Your answer...

- Take a look at the `db/schema/photographers.js` file and the `db/schema/photographs.js` file. What is a benefit of these files being written in similar ways?

  > Your answer...

- Take a look at the `db/seeds/index.js` file. How does this file differ from the `db/schema/index.js` file and in what ways is it the same?

  > Your answer...

- What does the function exported in the `utils/devLogger.js` file do? Where does the function get used?

  > Your answer...

- In the `db/seeds/photographs.js` file some inserted values are represented with a strange syntax.

  ```
  $<marek.id>
  ```

  What is this syntax? Where does it come from?

  > Your answer...

- Take a look at the `db/index.js` file. What is the purpose of this file?

  > Your answer...

- Take a look at the two files inside of the `models/` folder. What is the purpose of each of these files?

  > Your answer...

- Compare the two files inside of the `models/` folder. In what ways are they the same and in what way are they different?

  > Your answer...

- Where do the functions exported from the `models/` folder get used in the project?

  > Your answer...

- Take a look at the `controllers/photographers.controller.js` file. Many of the functions make use of `res.locals`. What is `res.locals` and where does it come from?

  > Your answer...

- Take a look at the `validate()` function inside of the `controllers/photographers.controller.js` file. What is the purpose of this function?

  > Your answer...

- Take a look at the `findById()` function inside of the `controllers/photographers.controller.js` file. What is the purpose of this function?

  > Your answer...

- Compare the two files inside of the `controllers/` folder. In what ways are they the same and in what way are they different?

  > Your answer...

- Take a look at the two files inside of the `routes/` folder. What is the purpose of each of these files?

  > Your answer...

- Compare the two files inside of the `routes/` folder. In what ways are they the same and in what way are they different?

  > Your answer...

- How does the `routes/` folder relate to the `controllers/` folder and the `models/` folder?

  > Your answer...

- Take a look at the `app.js` file. Keeping in mind what you saw in the `routes/` folder, what routes are available when running this application?

  > Your answer...

- What functions would be called if you were to send a request to a route that doesn't exist? Describe exactly what middleware would be called and in what order.

  > Your answer...

- What functions would be called if you were to send a `GET` request to the `/api/photographers` route? Describe exactly what middleware would be called and in what order.

  > Your answer...

- What functions would be called if you were to send a `POST` request to the `/api/photographers` route without sending any data? Describe exactly what middleware would be called and in what order.

  > Your answer...

- What is the purpose of the files in the `views/` folder?

  > Your answer...

- Imagine you wanted to change the response received by users so that instead of an object with two keys (i.e. `success` and `payload`) it included an additional key called `status` that included the status code. Which files would you need to change to make this happen?

  > Your answer...

- This project includes a lot of duplicated code. Do you think this makes the project more confusing or less confusing? Explain your answer.

  > Your answer...

- A single request from a user will touch many files in this codebase. Do you think this makes the project more confusing or less confusing? Explain your answer.

  > Your answer...

- What is one thing you like about this project that you will replicate in your own projects? Why do you like it?

  > Your answer...

- What is one thing you don't like about this project? Why don't you like it?

  > Your answer...

- Reflect on your experience of going through this codebase. What was the experience like? How will you approach complex code bases in the future?

  > Your answer...

### Additional features

Implement at least one of the features below in this project. Implementing these features may require you to touch multiple files and even dive into the tests.

1. Add a new field to the `photographs` table called `featured`. This field can either be `true` or `false` and represents a photo that will be featured on the person's page.

   For this feature to be complete, validation must be in place for all routes. For example, a new photograph could not be created without explicitly setting `featured` to `true` or `false`. Additionally, all tests must continue to pass.

1. Add a new route that allows you to create multiple photographs at once through the API. For example, the following request body might be sent which should create two new photographs.

   ```json
   [
     {
       "direct_url": "https://images.unsplash.com/photo-1639514922255-d5563344d579",
       "photographer_id": 1,
       "unsplash_url": "https://unsplash.com/photos/gWs2MEfba0s"
     },
     {
       "direct_url": "https://images.unsplash.com/photo-1639429192929-de8734be35c2",
       "photographer_id": 1,
       "unsplash_url": "https://unsplash.com/photos/Bn_Hdji2ClE"
     }
   ]
   ```

   You should decide what method will be used, what the route should be, and what changes in the code base will need to take place. Optionally, include tests for your new route.

1. Add two new `GET` routes: `/api/photographs/:id/photographers` and `/api/photographers/:id/photographs`. Each route should return the _other resource_ associated with the ID.

   For example, `GET /api/photographs/3/photographers` should return all photographers associated with the photograph with an ID of 3.

   Similarly, `GET /api/photographers/1/photographs` should return all photographs associated with the photographer with an ID of 1.

   Take into consideration what code you can use that already exists in the code base and what new code must be created.
