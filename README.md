![Screenshot 2021-06-18 at 14 44 00](https://user-images.githubusercontent.com/16503306/122562686-a5530600-d043-11eb-87e7-679d074243c4.png)

## Getting Started

First, install the project dependencies with `yarn` ([yarn installation guide](https://classic.yarnpkg.com/en/docs/install/#mac-stable))

```bash
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3030](http://localhost:3030) with your browser to see the result.

## Running the Products and Review API locally

Also make sure you have the API up and running, clone it [here](https://bitbucket.org/adichallenge/product-reviews-docker-composer/src/master/) and run:

```bash
docker-compose up
```

## How to run the tests

In open mode: `yarn cypress:open`

> this opens a chrome window in your computer and shows to you step by step, it takes more time but is valuable do debug and watch your art

Headless mode: `yarn cypress:run`

> this runs only on terminal, very fast and the proper way to add to CI in the future

## Troubleshooting

If you had any problem trying to run the application or the tests make sure that you have met the following requirements:

```
Node version: v14.15.1
Npm version: 6.14.8
Yarn version: v1.22.10
```
