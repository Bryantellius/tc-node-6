# Basic Mern Template

## Getting Started

To get started, select the "Use this template" option from this github page.

Once you create a repository on your account from this template, clone the project.

After cloning, `cd` into the project folder and run `npm install` to install the dependencies.

You're all set. Use `npm run dev` to run you app in development. Happy Hacking!

## ENV Variables

There is a `.env.template` file in the root directory with the server port and mysql configuration values.

Create a new file, `.env`, and add the variables and their appropriate values to be loading in the node environment.

## Structure

The project is seperated into `server/` and `client/` code bases within the `src/` folder.

Within `server/`, you will find a few folders for database queries (`db/`), server routes (`routes/`), and configuration (`config/`).

Within `client/`, you will find the `App.jsx` to start, along with a `scss/` folder for `scss` stylesheets.

```txt
src
    client
        scss
        ...
    server
        db
            models
            queries
        routes
            ...
        config
            ...
```

## Issues

If you come across any bugs, please submit an [issue on the repo github page](https://github.com/Bryantellius/basic-mern-template/issues).

You can also contact any contributors with details.

## Contributors

[Ben Bryant](https://github.com/Bryantellius)
