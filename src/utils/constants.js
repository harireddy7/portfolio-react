export const MOBILE_DEVICES = ['base', 'sm'];

export const ROUTES = [
	{ to: '/', label: 'HOME' },
	{ to: '/skills', label: 'SKILLS' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/contact', label: 'CONTACT' },
];

export const PAGE_TITLES = {
	about: 'About | Hari Kotha',
	skills: 'Skills | Hari Kotha',
	projects: 'Projects | Hari Kotha',
	contact: 'Contact | Hari Kotha',
};

export const SKILLS = [
	{ label: 'HTML 5', icon: 'html.svg' },
	{ label: 'CSS', icon: 'css.svg' },
	{ label: 'JavaScript', icon: 'javascript.svg' },
	{ label: 'Bootstrap', icon: 'bootstrap.svg' },
	{ label: 'React.js', icon: 'reactjs.svg' },
	{ label: 'Redux', icon: 'redux.svg' },
	{ label: 'Node.js', icon: 'nodejs.svg' },
	{ label: 'Express', icon: 'express.svg' },
	{ label: 'MongoDb', icon: 'mongodb.svg' },
];

export const PROJECTS = [
	{
		title: 'Tic-Tac-Toe',
		stack: ['HTML5', 'CSS3', 'Javascript'],
		thumbnail: 'tictactoejs.png',
		github: 'https://github.com/harireddy7/TicTacToe',
		live: 'https://tictactoejs-dev.netlify.app/',
	},
	{
		title: 'CricWise',
		stack: ['React.js', 'Chakra UI'],
		thumbnail: 'cricwise.png',
		github: 'https://github.com/harireddy7/CricWise',
		live: 'https://cricwise.netlify.app/',
	},
	{
		title: 'Key User Solutions',
		stack: ['Javascript', 'React.js', 'Material UI'],
		thumbnail: 'keyusersolutions.jpg',
		github: 'https://github.com/harireddy7/KeyUserSolutions',
		live: 'https://keyusersolutions.netlify.app/',
	},
	{
		title: 'WeatherJs',
		stack: ['HTML5', 'CSS3', 'Bootstrap', 'Javascript'],
		thumbnail: 'weatherjs.png',
		github: 'https://github.com/harireddy7/WeatherJs',
		live: 'https://weatherjs-dev.netlify.app/',
	},
	{
		title: 'More under development...',
		thumbnail: 'under-dev.svg',
		github: '#',
		live: '#',
		underdev: true,
	},
];

export const SOCIAL_LINKS = [
	{
		username: '/harikotha13',
		link: 'https://www.linkedin.com/in/harikotha13/',
		icon: 'linkedin.svg',
	},
	{
		username: '/harikotha07',
		link: 'https://twitter.com/harikotha07',
		icon: 'twitter.svg',
	},
	{
		username: '/harireddy7',
		link: 'https://github.com/harireddy7',
		icon: 'github.svg',
	},
	{
		username: '/harireddy7',
		link: 'https://dev.to/harireddy7',
		icon: 'devto.png',
	},
];

export const PAGE_LINKS = ['/about', '/skills', '/projects', '/contact'];
