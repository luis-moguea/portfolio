import todoPng from "../assets/todo-png.png"
import weatherPng from "../assets/weather-png.png"
import dashboardPng from "../assets/dashboard-png.png"
import gamesPng from "../assets/games-png.png"
import langPng from "../assets/lang-png.png"

export const projectsData = [
    {
        project: "Videogames App",
        projectPng: gamesPng,
        description: "Videogames app using React, Chakra UI and the RAWG api.",
        deployment: "https://react-videogames-dashboard.vercel.app/"
    },
    {
        project: "To-do",
        projectPng: todoPng,
        description: "Todo app using React, TypeScript, Chakra UI, and React dnd.",
        deployment: "https://dnd-todo-git-main-luis-moguea.vercel.app/"

    },
    {
        project: "Weather App",
        projectPng: weatherPng,
        description: "Weather app using React, TypeScript, Chakra UI, and the OpenWeather api.",
        deployment: "https://main--silly-souffle-fd6989.netlify.app/"
    },
    {
        project: "Programming Languages",
        projectPng: langPng,
        description: "Languages interface app using React, TypeScript, Chakra UI, Dnd kit and React Router.",
        deployment: "https://languages-dnd-git-main-luis-moguea.vercel.app/"
    },
    {
        project: "Dashboard",
        projectPng: dashboardPng,
        description: "Simple dashboard interface using HTML, CSS and JavaScript.",
        deployment: "https://dashboard-one-iota.vercel.app/"
    },
]