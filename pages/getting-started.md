# Getting Started

## Introduction

### What is Design System

**Design systems** is a systematic approach to creating and maintaining consistent user interfaces of Business Finland which coherently communicate our brand values and empower user experience. Design system is often refered as “component library” or “pattern library”

### Why we use it

By using Business Finland Design System we're trying to tackle following issues common in web development:

* Inconsistent user interfaces and user experience
* Large costs of design
* Low-level multidisciplinary collaboration
* Non-efficient design-team work

:finland: This Design System advocates also Finnish design - This is proudly designed in Finland :finland: 

### Terminology

* **Components** are meaningful elements of a web application, for example, buttons, form inputs, dropdowns.
* **UI elements** are "elemental building blocks of an user interface" often refered also as "components". 
* **Patterns** are properties of many components, for example, paddings, spacing, colors, typography, icons, grids and motions.
* **Visual language** outlines and defines our design principles the the core value of the product and team. For instance, it explains why  patterns included in design syste should be used. It also communicates the best practices and methods to be used for achieving the team goals. It may include also other specifications for our visual presence.
* **Token/Design tokens** Visual language is expressed with design tokens - atoms of design systems. Tokens are an agnostic (Android, iOS, Web, etc…) way to store variables such as typography, color, and spacing. Design tokens are pieces of UI information to store design related information such as colors, fonts, spaces, animations, etc. that  can be transformed and formatted to meet the needs of any platform.
* **Style guide** is this stuff that you currently reading. A style guide is an internal company website which “represents the styles, patterns, practices, and principles of a design system and teaches how to use it” (Grainer, 2017).
* **Design system** is as a combination of above mentioned tools like style guide and the processes to maintain and develope it further. The process includes instructions and collaboration tool

### Process

* First, have a quick look at the structure of this design system including component and UI element inventories and clone it to your local host as instructed in following chapter.
* Second, familiarise yourself with the Business Finland Design System process described in following picture and decide whether you can re-use exiting components or if you need to create new.
* Third, get access to Business Finland Design System Teams channel for getting support for your thoughts and conversation of design topics: https://smarturl.it/BF-designSystem If you don't have access to Teams channel, please do not hesitate to request for it by sending email to *maria.singh[at]businessfinland.fi*

![Image of Design System Process](https://github.com/BusinessFinland/BF-design-system/blob/getting-started-Janne-edits/pages/BFdesignsystemprocess2.png)

## How to use it in your own project

You can use components styles as a project dependency via npm from the github repo. All you have to do is:

1. Enter the root of you project where you have your `package.json` and run

   `npm install https://github.com/BusinessFinland/BF-design-system#gh-pages`

2. Go to the index file of your application and import `tokens.css` and `styles.css`.

   `import 'bf-html-styleguide/assets/css/tokens.css';`

   `import 'bf-html-styleguide/assets/css/styles.css';`

When a new version of the styleguide deployed, re-install the package.

If you want to get more familiar with the tool itself, read the next chapter.

## Core parts

### Pages & Components

All available pages and components stored in `/pages` folder. Each folder represents a page category and files represent actual HTML pages. In the current styleguide version, categories and components sorted in alphabetic order.

To create a component documentation page, create a new `.md` file inside the `/components` folder, and add your demo description to the newly created file. When file is saved, styleguides servers will be automatically restarted, and you will see your page available in the sidebar.

### Visual Language

A visual language consists of variables. You can check all available variables on `Visual Language` page.
This page is crucial because we use it to generate `/assets/css/tokens.css` file that stores all the production-ready CSS variables which we use in our `/assets/css/styles.css` file.

### Styles

You can find all available components styles in `/assets/css/styles.css` file. This is the only file we use to document styles for all the components. Meanwhile, the styleguide has internal styles but we are going to look at them later.

### Accessibility

The styleguide provides an automatic accessibility check on page load. It uses [axe-core](https://github.com/dequelabs/axe-core) accessibility engine behind the scenes. The engine not only checks the components but a whole page.

## How to contribute

The styleguide itself is a fully functional React application. It is located in `/.styleguide`, and has a few presentational components with its own styles.

You can find all logic of generation HTML templates from `.md` files in `/.styleguide/bin`. The main idea is to loop through the pages folder, parse files and create the `pages.json` file that stored all the needed information like file name, page HTML content, etc.

### Starting the local development server

1. Clone the repository

   `git clone https://github.com/BusinessFinland/BF-design-system`

2. Install dependencies

   `npm install`

3. Run the styleguide

   `npm start`

It will start two development servers. One is watching for changes in `/.styleguide` folder, and one is responsible for generating HTML from markdown files.

### Deployment

To deploy a new version of the styleguide run `npm run deploy`. Updated styles would be also available automatically.
