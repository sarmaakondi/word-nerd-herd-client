# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Word Wizard
**Word Wizard** is an app designed to teach the user new words. The app is built using an API that has access to over ***13,000*** words. Users are able to ask the app to read each word aloud to them as well as speaking the word back to them to check their pronunciation. Each word inlcudes a definition as well as examples of the words used in a sentence.

## How it works
**Word Wizard** is built on Four main sections:
* Explore Words
* Learn More
* Learned Words
* Favorite Words

**Explore Words** displays a list of 5 cards, each containing a word and it's definition. Users are able to move through the list to view each word and it's definition.

**Learn More** is displayed on each word's card. Users can click on **Learn More** to expand the card to view examples of the word used in a sentence as well as to access the *read-aloud* and *pronunciation-checker* features.

**Learned Words** contains all the words a user has marked as *Learned*. Each time a word is marked as *Learned*, it is removed from the list of 5 words in the **Explore Words** and replaced with a new word. **Explore Words** will always display 5 words. Once a word is marked as *Learned* it cannot be removed from the list of 'unlearned'.

**Favorited Words** contains all the words a user has *favorited*. Users are able to add and remove words from the **Favorited Words** section. A word marked as *Favorited* will not be removed from the list of words in **Explore Words** until a user has marked it as *Learned*.

## Build
Word Wizard was built using a combination of MongoDb/Mongoose, Express, React, Node.js and CSS.
## Features
* User authentication.
* Read-aloud features that reads the word a user wants to learn.
* Pronunciation checker that allows a user to repeat the word back to the app to check if their pronunciation is correct.
* Interactive CSS.
* Demo feature that allows a user to interactive with the app without signing-up (some features are however restricted in this mode).
* *Favorite* feature that allow a user to **favorite** a word to view in their **Favorties folder**.
* *Learned* feature that allows a user to mark a word as **learned**. These words can be viewed in the **Learned Words folder** and will not be displayed to the user again in the **Explore Words** section of the app.


## Credits
This app was made as group project. Members include:
* **Sarma Akondi**
* **Ben Anwar**
* **Charlie Jay**

Shadow and blur effects were created using custom css alongside [Glassmorphism](https://hype4.academy/tools/glassmorphism-generator). 

Icons were sourced from [Font Awesome](https://fontawesome.com/search?m=free&o=r).

The *Read-Aloud* and *Pronunciation Checker* utilised the Browser's in-built features.

## Next Steps
There are plenty of things we would love to add to this app in the future. These include:

* Ability for the read-aloud feature to read the meaning and examples of each word.
* Optimisation for mobile use.
* Additional animations that represent specific user data to replace the current raw data that is displayed.
* Light and Dark mode.
* Smoother transitions between different sections of the app.
