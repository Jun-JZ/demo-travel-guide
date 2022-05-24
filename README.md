## Introduction

A travel guide web application to help you find your next destination.

Features:

- Explore destinations by Areas
- Check destination details

## Tech

- Next.js
- Typescript
- Bootstrap
- Responsive design
- Rest API

## API Route

- `/api/destinations`: retrieve destinations by area
- `/api/travel-details`: retrieve destination details, including attractions, expense level, etc.

## Folder Structure

```
── README.md
├── components  --common components built here
├── constants  --constants
├── hooks  --custom hooks
├── mocks  --mock data for api server consuming
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package.json
├── pages  --pages `/` and `/destinations/{country}` for this demo
├── public --static assets
├── styles
├── tsconfig.json
├── types  --typescript types
└── yarn.lock
```

## To test

1. clone the repo
2. run `yarn install` to install dependencies at root directory.
3. run `yarn dev` to start development server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo

https://user-images.githubusercontent.com/91700567/169966218-e4dbcfa0-800b-4737-84d2-9b7c79629d67.mp4
