### Project overview.
This project is highlighted by list a two shows one is recommanded and upcomming shows.
where recommended shows are scrolling in horizantal direction and upcomming shows displayed in vertical direction with a grid of three cards.
Contains Header of seperate component inside the ### Header Home(recommended) and Upcomming components heirarchically organised.
In Assests component all images will be stored.
Finally all components are rendered in App.js and viewed by browser. 
### All components are functional components. 

### Setup and local run instructions.
 Clone the repository in GitHub desktop or download and extract it.
 This project is developed by using React.js. 
 Ensure you have installed Node.js to run. 
 Install project dependencies by npm i.
 
### you can run by using command:
cd gyangrove
npm start

### Explanation of Design and Technical Decisions

-Responsive Design: The website is designed to adapt to desktop and mobile screen. Example when screen size descreased to 480px, after 480px contents are wrapped accordingly(Note: responsive on desktop and after 480px i.e mobile screen).

-Lazy Loading: Lazy loading techniques are implemented to optimize website load time by asynchronously loading resources such as images as the user scrolls down the page.

-API Integration: Axios is utilized for fetching event data from provided APIs. Axios simplifies the process of making HTTP requests and handling responses.

-Modular Functions: The codebase is structured with modular functions to improve code organization, readability, and maintainability.
