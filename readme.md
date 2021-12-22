# Photography API Discovery Lab

This lab is designed to give you the opportunity to look at a more complex server and introduce you to different ways of structuring your projects. It will also require you to edit existing code, which is an important part of being a new software engineer.

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
