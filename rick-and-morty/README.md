# React + Vite

RICK AND MORTY!!!!

This web application of Rick and Morty was made by using API in React.js
Also, HTML, CSS, and JS (jsx)
![Alt text](<Screenshot 2023-12-01 174545-1.png>)

How to create a React.js App using Vite:
Open Visual Studio Code.
Make a new Directory (mkdir MOD2)
cd into the Directory (cd MOD2/)

steps:
<ul>
<li>-npm create vite@latest</li>
<li>-project-name: rick-and-morty
(go ahead and enter a name for your project)</li>
<li>-Select a framework: React
(This select a framework option allows you to select any front-end framwork in which you want Vite to run, in this case, React.)</li>
<li>-Select a variant: JavaScript
(Select a framework variant from the options, in this  case, Javascript)</li>
<li>cd into your new project name
-cd rick-and-morty</li>
<li>-npm install</li>
<li>-npm run dev
(Run your applicate to test if its working.)
This will then open up your localhost</li>

<ul>

I also installed the react-router-dom to be added into my dependencies
-npm install react-router-dom

What I struggled with the most:
UseEffect and fetching for episodes and locations because I wanted the images from characters page to display in my episodes and locations as we search for a specific episode/location.

My stretch goal:
As stated in what I struggled with the most, the dropdown with the fetching of images was my stretch goal. 

Deploy:
https://marias-rick-and-morty-mod2.netlify.app

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
