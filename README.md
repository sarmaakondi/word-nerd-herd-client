# World of Words

**World of Words** is an app designed to teach the user new words. The app is built using an API that has access to over **_13,000_** words. Users are able to ask the app to read each word aloud to them as well as speaking the word back to them to check their pronunciation. Each word inlcudes a definition as well as examples of the words used in a sentence.

![an screenshot of World of Words Dashboard](/public/WoW.png)

## How it works

**World of Words** is built on 3 main sections:

-   Learn New Words
-   Explore Learned Words
-   Explore Favorited Words

**Learn New Words** displays a list of 5 cards, each containing a word and it's definition. Users are able to move through the list to view each word and it's definition. Users can click on **Learn More** to expand the card to view examples of the word used in a sentence as well as to access the _read-aloud_ and _pronunciation-checker_ features.

**Explore Learned Words** contains all the words a user has marked as _Learned_. Each time a word is marked as _Learned_, it is removed from the list of 5 words in the **Learn New Words** and replaced with a new word. **Learn New Words** will always display 5 words. Once a word is marked as _Learned_ it cannot be removed from the list or 'unlearned'.

**Explore Favorited Words** contains all the words a user has _favorited_. Users are able to add and remove words from the **Explore Favorited Words** section. A word marked as _Favorited_ will not be removed from the list of words in **Learn New Words** until a user has marked it as _Learned_.

## Installation

### Front End

1. Clone this repository:

```bash
  git clone https://github.com/sarmaakondi/word-nerd-herd-client.git
```

2. Install dependencies:

```bash
  npm install
```

## Usage

1. Start the development server:

```bash
  npm run dev
```

2. Access the application in your browser: http://localhost:5173 (or your designated port)

### Back End

1. Clone this repository:

```bash
  git clone https://github.com/sarmaakondi/word-nerd-herd-server.git
```

2. Install dependencies:

```bash
  npm install
```

## Usage

1. Start the development server:

```bash
  node server.js
```

2. Access the application in your browser: http://localhost:3000 (or your designated port)

## Build

**World of Words** was built using a combination of MongoDb/Mongoose, Express, React, Node.js and CSS.

## Features

-   User authentication.
-   Read-aloud features that reads the word a user wants to learn.
-   Pronunciation checker that allows a user to repeat the word back to the app to check if their pronunciation is correct.
-   Interactive CSS.
-   Demo feature that allows a user to interactive with the app without signing-up (some features are however restricted in this mode).
-   _Favorite_ feature that allow a user to **favorite** a word to view in their **Favorties folder**.
-   _Learned_ feature that allows a user to mark a word as **learned**. These words can be viewed in the **Learned Words folder** and will not be displayed to the user again in the **Explore Words** section of the app.

## Credits

This app was made as group project. Members include:

-   **Sarma Akondi**
-   **Ben Anwar**
-   **Charlie Jay**

Shadow and blur effects were created using custom css alongside [Glassmorphism](https://hype4.academy/tools/glassmorphism-generator).

Icons were sourced from [Font Awesome](https://fontawesome.com/search?m=free&o=r).

The _Read-Aloud_ and _Pronunciation Checker_ utilised the Browser's in-built features.

## Next Steps

There are plenty of things we would love to add to this app in the future. These include:

-   Ability for the read-aloud feature to read the meaning and examples of each word.
-   Optimisation for mobile use.
-   Additional animations that represent specific user data to replace the current raw data that is displayed.
-   Light and Dark mode.
-   Smoother transitions between different sections of the app.
-   Implement a way for users to be able to view more than 5 **Favorited Words** and **Learned Words**.
