export const  projects = [
    {
        path: new URL("./historica.jpg", import.meta.url).href,
        title: "Historica",
        desc: "This Website allows the user to find events that occured on a particular date in history. It fetches data from an API and presents it to the user in anorganised manner. The technologies used are javascript, ejs, jQuery, nodejs, html and css.",
        link: "https://github.com/Sipher229/Historica-app"
    },
    {
        path: new URL("./journal.jpg", import.meta.url).href,
        title: "Journal",
        desc: "Like the name says, this website serves as a journal. A user registers and can then start writing about their daily life. The users can also view, edit, and delete any of their content. The main technologies are nodejs, sql database(postgres), jQuery, javascript, html and css.",
        link: "https://github.com/Sipher229/journal.git"
    },
    {
        path: new URL("./portfolio.png", import.meta.url),
        title: "Porfolio Website",
        desc: "This is a website that showcases some of my projects, and provides information about me, such as contact details, etc. It was built using React.js"
    },
]