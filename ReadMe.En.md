## Second step with React => Components, UseState, UseEffect and Routing

First, clone the *repo* and run npm install.
On the repo you can see a fix branch. On the correction branch, each commit (cf history => ) corresponds to a stage of the project. You can therefore compare your code to the correction, at each stage of the project.

## A brief overview
You will find in the src folder, the file *app.jsx* (Application entry point) with only a title in h1.

## Let's create our roads
- 1/ Start by adding the route management module on React (*npm install react-router*)
- 2/ In *app.js*, add the routes to your 2 pages ('/' to the `Home` page and '/beers' to the `Beers` page)
- 3/ Create the React components corresponding to your pages in a *./pages* subfolder in src with an h1 title on each. Play with your url to check that everything works
- 4/ Create a `Nav` component in a *./components* subfolder. You will place a logo and your 2 navigation links to your pages.
- 5/ Integrate your navigation component in your *app.jsx*

## Let's take care of the homepage
- 1/ You will find in the support folder the screen shot of the home page (https://github.com/jujuck/React-Beers-Shop/blob/main/Support/home_beershop.png). The style is mostly done on Bootstrap but you can do your own to practice. The goal is not to reproduce this one, but to use it as a guide for building the page.
- 2/ In the *Home.jsx* page, import the provided *home.js* data file. Look at this one, it's our data source to build the home page.
- 3/ Start by creating a *Hero.jsx* component and integrate it into *home.jsx*. Pass him the props necessary for his construction (hero) only.
- 4/ In the *hero.jsx* component, set up your `JSX` structure for this area and inject the data from the props. For styling, create a *Hero.css* file alongside and import it directly into *Hero.jsx*.
- 5/ Perform the same operations for the `phylosophy` part.
- 6/ Perform the same operations again for the `discovery` part. Attention, our component this time has a repetitive part that you can reproduce with a `.map()`. The ideal would then be to create a new *Malt.jsx* sub-component and transfer the props to it.
- 7/ Perform the same operations as before with the `customers` part and its sub-component *Avatar.jsx*
- 8/ For the contact form, we will again create a *Footer.jsx* sub-component. However, we want it in all our pages. We will therefore integrate it directly into *App.jsx*, between the `</Routes >` and `</BrowserRouter >`

## So get our products, the beer page
- 1/ For this page, we are going to fetch the API, (see link <a href="https://punkapi.com/documentation/v2">My API</a>). Don't hesitate to test it and get the first object to do your layout tests. Store it in a constant in your *Beers.jsx* file outside of your React component.
- 2/ From the properties of this object, create a map of your style with the elements you want (In the return). This will serve as a template later with our dynamic data.
- 3/ Create a sub-component with your template and import it into your *Beers.jsx* page. Pass it to props, the object.
- 4/ Create a state to memorize your data (Empty array by default) then add the useEffect with your fetch to retrieve your data from the API, then update your state.
- 5/ In your return, use the `.map()` method to loop over your data and render your template for each stored object. Remember to put a condition on the length of your array so as not to launch the loop if your data is not loaded.
- 6/ Improve your style to get a nice layout

## Let's see the details of our beers.
- 1/ Let's add a button on our cards by adding the id of our beer to the url. Let's add some flair
- 2/ Add our route in *App.jsx* and create our new page.
- 3/ Let's get the param from ulr with useParam and build our query to get our beer. We will then store it in a state4
- 4/ Adding the desired elements to the page with a little style

## Congratulations, your first product site on React
