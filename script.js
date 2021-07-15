const projects = [
"01-Expanding Cards",
"02-Progress step",
"03-Rotating Navigation",
"04-Hidden Search",
"05-Blurry loading",
"06-Scroll Animation",
"07-Split Landing Page",
"08-Form Wave",
"09-Sound Board",
"10-Dad Jokes",
"11-Event Keycodes",
"12-Faq Collapse",
"13-Random Choice Picker",
"14-Animated Navigation",
"15-Incrementing Counter",
"16-Drink Water",
"17-Movie App",
"18-Background Slider",
"19-Theme Clock",
"20-Button Ripple Effect",
"21-Drag N Drop",
"22-Drawing App",
"23-Kinetic Loader",
"24-Content Placeholder",
"25-Sticky Navbar",
"26-Double Vertical Slider",
"27-Toast Notification",
"28-Github Profiles",
"29-Double Click Heart",
"30-Auto Text Effect",
"31-Password Generator",
"32-Good Cheap Fast",
"33-Notes App",
"34-Animated Countdown",
"35-Image Carousel",
"36-Hoverboard",
"37-Pokedex",
"38-Mobile Tab Navigation",
"39-Password Strength Background",
"40-3d Background Boxes",
"41-Verify Account Ui",
"42-Live User Filter",
"43-Feedback Ui Design",
"44-Custom Range Slider",
"45-Netflix Mobile Navigation",
"46-Quiz App",
"47-Testimonial Box Switcher",
"48-Random Image Feed",
"49-Todo List",
"50-Insect Catch Game",
"51-Calculator",
"52-Tic Ttac Toe",
"53-Exchange Rate",
"54-Hangman",
"55-Memory Cards",
"56-Modal Menu Slider",
"57-Movie Seat Booking",
"58-Music Player",
"59-New Year Countdown",
"60-Relaxer App",
"61-Sorting Game",
"62-Typing Game",
"63-Breakout Game",
"64-Custom Video Player",
"65-Dom Array",
"66-Expense Tracker",
"67-Lightbulb Effect Project",
"68-Rock Paper Scissors",
"69-Word Count",
"70-Cube SlideShow"
];


const list = document.getElementById('list');
// <p>${formatProjectName(name)}</p>
projects.forEach((name, i) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
		<a href="./${name}/index.html">
			<img src="./${name}/Preview.png" alt="${name}" />
            <p>${formatProjectName(name)}</p>
		</a>
	`;

    list.appendChild(listItem);
});


function formatProjectName(name) {
    return name
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}
