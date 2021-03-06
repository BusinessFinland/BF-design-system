# Getting Started

## How to use

You can use components styles as a project dependency via npm from the github repo. All you have to do is:

1. Enter the root of you project where you have your `package.json` and run

   `npm install https://github.com/BusinessFinland/BF-design-system#gh-pages`

2. Go to the index file of your application and import `tokens.css` and `styles.css`.

   `import 'bf-html-styleguide/assets/css/tokens.css';`

   `import 'bf-html-styleguide/assets/css/styles.css';`

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

# Limitations

- Not possible to change navigation items order
- Not possible to use another page template
- A11Y plugin checks the whole page instead of component, so if the styleguide has A11Y problems, it will show it.
- Live reload doesn't affect A11Y. You have to refresh it manually.

# Don't want to install Node? Run with docker

Build a docker image from the `Dockerfile` and the cloned context in the master branch:

```
docker build . -t bf-design-system:dev
```

Create a container from the build image and start the container:

```
docker run -p 8080:8080 -d --name bf-design-system bf-design-system:dev
```

It will start on http://localhost:8080

A running container can be stopped and started again, respectively:

```
docker stop bf-design-system
docker start bf-design-system
```

# Npm audit fix


Run `npm audit fix` to make sure that there is no potential security vulnerabilities so as to GitHub won't find any vulnerable dependencies in the repository. Then commit and push changes (most likely only package-lock.json and/or package.json files) to the master branch.
