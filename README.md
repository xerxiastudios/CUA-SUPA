
# CUA-SUPA

This repo is update version of original create-universal-app (CUA) with Supabase


https://github.com/chen-rn/CUA
## Tech Stack

**Client and Server** 

Next 13 (pages),
Expo 49,
Solito 4,
TRPC,
Prisma,
Tamagui



## Run Locally

Clone the project

```bash
  clone the project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

To push DB schema

```bash
  yarn db-push
```

Make a copy of .env.example and remove .example

Enter your supabase url keys in the .env file

Always run web first from root directory, it will start the trpc server.

```bash
  yarn web
```

Then you can start native(mobile) from root directory, it will start the metro server. It will first open a development build by default. If you want to use Expo-go press S in the terminal to switch to go build. Then you can use camera to open the app.

```bash
  yarn native
```

To start Prisma studio.

```bash
  yarn studio
```
## Acknowledgements

 - [create-universal-app (CUA)](https://github.com/chen-rn/CUA)
 - [Tamagui](https://github.com/tamagui/tamagui)
 - [t4-app](https://github.com/timothymiller/t4-app)
 - [solito](https://github.com/nandorojo/solito)
