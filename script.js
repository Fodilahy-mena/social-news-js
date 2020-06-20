// write your code here
//console.log('it works!');

let socialLinkList = [
    {
        title: "1: Auto biography blog",
        url: "(https://fodilahy-mena.github.io/blog/)",
        author: "Jerome",
    },
    {
        title: "2: Educative donation javascript",
        url: "(https://www.educative.io/learn).",
        author: "Babtist Pesquet",
    },
    {
        title: "3: Hacker News",
        url: "(https://news.ycombinator.com).",
        author: "Babtist"
    }
];

// Link list function
const linkList = () => {
	for (let i = 0; i < socialLinkList.length; i++) {
		let linkString = `${socialLinkList[i].title} ${socialLinkList[i].url} Author : ${socialLinkList[i].author}`;
		alert(linkString);
	}
};
const addNewLink = () => {
	const linkTitle = prompt('What is the title of your link?');
    const newLinkUrl = prompt('Entr the url?');
    const linkAuthor = prompt('Hwo is the author?');
    if (newLinkUrl !== newLinkUrl.startsWith("http://") || newLinkUrl !== newLinkUrl.startsWith("https://") && newLinkUrl !== newLinkUrl.endsWith(".com")) {
        commonLinkUrl = `http://${newLinkUrl}.com`;
    } else {
        commonLinkUrl = newLinkUrl;
    }
    let enterNewLink = {
		title: linkTitle,
        url: commonLinkUrl,
        author: linkAuthor
	};
	socialLinkList.push(enterNewLink);
	return;
};


const socialMenuString = `Choose an opton:
1: Shows links
2: Add a link
3: Remove a link
0: Quit the program
`;

let menuOption = Number(prompt(socialMenuString));// Ask user to choose frome the menu option

while (menuOption !== 0) {
    switch (menuOption) {
        case 1:
            linkList();
            break;
        case 2: // add a link here
            addNewLink();
            break;
        case 3:
            let indexToRemove = Number(
				prompt(`Enter the index of the link to be removed (1 to ${socialLinkList.length})`)
			);
			let removedLink = socialLinkList.splice(indexToRemove-1);
			alert(`You have just deleted ${removedLink[0].title}`);
			break;
		default:
			alert('Please enter a correct choice from 1,2,3, or 0');
    }
    menuOption = Number(prompt(socialMenuString));// reask user to choose frome the menu option
}
alert('Thank you for visiting my social news program');