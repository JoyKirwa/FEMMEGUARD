## Pre Requisities


1. NodejJS (LTS)
2. Yarn package manager
3. Android SDK
4. JDK



## Installation

If you don't have yarn, run `npm i -g yarn`

```bash
# install project dependencies
yarn install 
```


## Building the project

This is required to install firebase SDK natively on your phone

```
# generate the android project
yarn expo prebuild --platform android

# build the project
yarn expo run:android


```

## Running the project

You need Expo go on your Android phone.


```
yarn start

# click a for android or scan the QR code
```

