import TCF from '../assets/TCF.png'
import Cheesecakes from '../assets/Cheesecakes-valentines-day.png'
import Bridgeport from '../assets/bridgeport.png'
import BB from '../assets/b&b.png'
import DSC from '../assets/dogcart1.png'
import ChromeExt from '../assets/chrome_ext.png'
import windowsForm from '../assets/WindowsFormCS.png'
import inventoryForm from '../assets/InventoryCS.png'
import Ranking from '../assets/Ranking.png'


export default[
    {
        id: 1,
        title: "The Connectivity Firm",
        coverImg:  TCF,
        website: 'https://theconnectivityfirm.com/',
        description: "TCF is my father's company. This is the live site up right now. It was created with ReactJS. Bootstrap is used for the Navigation menu",
    },
    {
        id: 5,
        title: "Cheesecakes by Dre",
        coverImg:  Cheesecakes,
        website: 'https://cheesecake-react-project-mike-walsh.netlify.app/',
        description: 'This is an eCommerce React site that has been created for my friend\'s Cheesecake company. There is a fully functioning shopping cart. The only thing missing is a payment processing to actually submit the order',
    },
    {
        id: 2,
        title: "Dog Shopping Cart",
        coverImg:  DSC,
        website: 'https://dogshoppingcart.netlify.app/',
        description: 'This is a shopping cart app. It is made with vanilla JavaScript, and has a live database powered with Firebase',
    },
    {
        id: 3,
        title: "Chrome Extension",
        coverImg:  ChromeExt,
        website: null,
        description: 'This is a Chrome browser extension used like a favorites bar. It is made with vanilla JavaScript. I can save tabs as well as input my own links to save. Currently, this is only a local extension',
    },
    {
        id: 8,
        title: ".Net Windows Form App",
        coverImg:  windowsForm,
        website: null,
        description: 'It is a .Net Windows form app made for taking notes with C#. Currently, this is only a front end application, there is no backend database as of yet. You can see the code on my GitHub which can be found on my resume',
    },
    {
        id: 9,
        title: ".Net Inventory Manager App",
        coverImg:  inventoryForm,
        website: null,
        description: 'It is a .Net Windows form app made for Inventory Management with C#. Currently, this is only a front end application, there is no backend database as of yet. You can see the code on my GitHub which can be found on my resume',
    },
    {
        id: 10,
        title: "ASP.Net with React Movies and Music Ranking App",
        coverImg:  Ranking,
        website: 'https://github.com/mswalsh68/RankingAppDotNetReact',
        description: 'This is a full stack application with an ASP.Net backend and a React JS frontend. There is only a link to GitHub repository due to hosting costs',

    },
    {
        id: 6,
        title: "Bridgeport Screening Services",
        coverImg:  Bridgeport,
        website: 'https://bridgeporttest.netlify.app/',
        description: 'This is another site that is only HTML, CSS, Bootstrap, and JavaScript. It is for a client and is not ready to be launched',
    },
    {
        id: 7,
        title: "Bodhi & Birch",
        coverImg:  BB,
        website: 'https://eat-bodhi-and-birch.netlify.app/',
        description: 'This is another site that is only HTML, CSS, and JavaScript. It is for a friend\'s restaurant idea and is not ready to be launched',
    }
]