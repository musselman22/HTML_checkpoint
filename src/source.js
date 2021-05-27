class Movie
{
    constructor(name, image, releaseDate, description, genres, actors)
    {
        this.name = name;
        this.image = image;
        this.releaseDate = releaseDate;
        this.description = description;
        this.genres = genres;
        this.actors = actors;
    }
}

const movies = [];
movies.push(new Movie(
    "The Avengers",
    "the-avengers.jpg",
    "April 25, 2012",
    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    [
        "Action",
        "Adventure",
        "Science Fiction"
    ],
    [
        "Robert Downey Jr.",
        "Chris Hemsworth",
        "Mark Ruffalo"
    ]
));
movies.push(new Movie(
    "Avengers: Age of Ultron",
    "avengers-age-of-ultron.jpg",
    "April 22, 2015",
    "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    [
        "Action",
        "Adventure",
        "Science Fiction"
    ],
    [
        "Robert Downey Jr.",
        "Chris Hemsworth",
        "Mark Ruffalo"
    ]
));
movies.push(new Movie(
    "Avengers: Infinity War",
    "avengers-infinity-war.jpg",
    "April 25, 2012",
    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    [
        "Action",
        "Adventure",
        "Science Fiction"
    ],
    [
        "Robert Downey Jr.",
        "Chris Hemsworth",
        "Mark Ruffalo"
    ]
));
movies.push(new Movie(
    "Avengers: Endgame",
    "avengers-end-game.jpg",
    "April 24, 2019",
    "After the grave course of events set in motion by Thanos wiped out half the universe and fractured the Avengers ranks, the remaining Avengers and their allies must reassemble to take one final stand and restore harmony to the universe.",
    [
        "Action",
        "Adventure",
        "Science Fiction"
    ],
    [
        "Robert Downey Jr.",
        "Chris Hemsworth",
        "Mark Ruffalo"
    ]
));
movies.push(new Movie(
    "Batman v Superman: Dawn of Justice",
    "batman-v-superman-dawn-of-justice.jpg",
    "March 23, 2016",
    "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
    [
        "Action",
        "Adventure",
        "Science Fiction"
    ],
    [
        "Ben Affleck",
        "Henry Cavill",
        "Jesse Eisenberg"
    ]
));
movies.push(new Movie(
    "Grave of the Fireflies",
    "grave-of-the-fireflies.jpg",
    "April 16, 1988",
    "As World War II reaches its conclusion in 1945, Japan faces widespread destruction in the form of American bombings, devastating city after city and two siblings struggle to find safety.",
    [
        "Anime",
        "Drama",
        "War"
    ],
    [
        "Tsutomu Tatsumi",
        "Ayano Shiraishi"
    ]
));
movies.push(new Movie(
    "Made in Abyss: Dawn of the Deep Soul",
    "made-in-abyss-dawn-of-the-dark-soul.jpg",
    "January 17, 2020",
    "A continuation of the epic adventure of plucky Riko and Reg who are joined by their new friend Nanachi. Together they descend into the Abyss' treacherous fifth layer, the Sea of Corpses, and encounter the mysterious Bondrewd, a legendary White Whistle whose shadow looms over Nanachi's troubled past. Bondrewd is ingratiatingly hospitable, but the brave adventurers know things are not always as they seem in the enigmatic Abyss.",
    [
        "Action",
        "Adventure",
        "Anime",
        "Drama",
        "Fantasy"
    ],
    [
        "Miyu Tomita",
        "Mariya Ise",
        "Shiori Izawa"
    ]
));
movies.push(new Movie(
    "Violet Evergarden: The Movie",
    "violet-evergarden-the-movie.jpg",
    "September 18, 2020",
    "The story is set some years after the end of the war, when the world is slowly turning into a more pacific place. One day, Violet Evergarden finds a letter.",
    [
        "Anime",
        "Drama",
        "Fantasy"
    ],
    [
        "Yui Ishikawa",
        "Daisuke Namikawa"
    ]
));

const containerClass = ".movie-list";
const movieClass = "movie-poster";
let movieContainer = null;

function updatePosters(searchString = "") {
    // Clear current posters
    while(movieContainer.lastChild)
    {
        movieContainer.removeChild(movieContainer.lastChild);
    }

    let moviesToUpdate = movies;

    if(!(searchString === ""))
    {
        moviesToUpdate = movies.filter(movie => movie.name.includes(searchString));
    }

    moviesToUpdate.forEach(movie => {
        const moviePoster = document.createElement('img');
        moviePoster.src = `assets/${movie.image}`;
        moviePoster.alt = movie.name;
        moviePoster.classList.add(movieClass);
        movieContainer.appendChild(moviePoster);
    })
}

document.addEventListener("DOMContentLoaded", function() {
    movieContainer = document.querySelector(containerClass);
    console.log(movieContainer);
    updatePosters(movies);
})

export {updatePosters};