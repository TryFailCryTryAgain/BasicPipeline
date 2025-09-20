document.addEventListener("DOMContentLoaded", function() {

    const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, ratings: [9, 8, 9, 7, 8] },
    { id: 2, title: "The Matrix", genre: "Sci-Fi", year: 1999, ratings: [9, 9, 8, 9, 8] },
    { id: 3, title: "Titanic", genre: "Romance", year: 1997, ratings: [7, 8, 6, 7, 8] },
    { id: 4, title: "Avatar", genre: "Sci-Fi", year: 2009, ratings: [8, 7, 8, 9, 7] }
    ];

    const movie_container = document.getElementById("output");


    function FetchData() {

        movies.forEach((element) => {

            const card = document.createElement("div");
            card.className = "movie_card";

            const title = document.createElement("div");
            title.className = "title";

            const genre = document.createElement("div");
            genre.className = "genre";

            const year = document.createElement("div");
            year.className = "year";

            const all_ratings = document.createElement("div");
            all_ratings.className = "all_ratings";

            const avr_rating = document.createElement("div");
            avr_rating.className = "rating";

            title.textContent = element.title;
            genre.textContent = element.genre;
            year.textContent = element.year;
            
            for (i = 0; i < element.ratings.length; i++) {
                const rating = document.createElement("div");
                rating.className = "rating";
                rating.textContent = element.ratings[i];
                all_ratings.appendChild(rating);
            }

            card.appendChild(title);
            card.appendChild(genre);
            card.appendChild(year);
            card.appendChild(all_ratings);

            movie_container.appendChild(card);

        })

    }

    FetchData();


});

