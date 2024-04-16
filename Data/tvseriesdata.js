const moviedata = [
    {
      "rank": 1,
      "title": "The Shawshank Redemption",
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "9.3",
      "id": "top1",
      "year": 1994,
      "imdbid": "tt0111161",
      "imdb_link": "https://www.imdb.com/title/tt0111161"
    },
    {
      "rank": 2,
      "title": "The Godfather",
      "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "9.2",
      "id": "top2",
      "year": 1972,
      "imdbid": "tt0068646",
      "imdb_link": "https://www.imdb.com/title/tt0068646"
    },
    {
      "rank": 3,
      "title": "The Dark Knight",
      "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      "rating": "9.0",
      "id": "top3",
      "year": 2008,
      "imdbid": "tt0468569",
      "imdb_link": "https://www.imdb.com/title/tt0468569"
    },
    {
      "rank": 4,
      "title": "The Godfather Part II",
      "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "9.0",
      "id": "top4",
      "year": 1974,
      "imdbid": "tt0071562",
      "imdb_link": "https://www.imdb.com/title/tt0071562"
    },
    {
      "rank": 5,
      "title": "12 Angry Men",
      "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "9.0",
      "id": "top5",
      "year": 1957,
      "imdbid": "tt0050083",
      "imdb_link": "https://www.imdb.com/title/tt0050083"
    },
    {
      "rank": 6,
      "title": "Schindler's List",
      "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Biography",
        "Drama",
        "History"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "9.0",
      "id": "top6",
      "year": 1993,
      "imdbid": "tt0108052",
      "imdb_link": "https://www.imdb.com/title/tt0108052"
    },
    {
      "rank": 7,
      "title": "The Lord of the Rings: The Return of the King",
      "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "9.0",
      "id": "top7",
      "year": 2003,
      "imdbid": "tt0167260",
      "imdb_link": "https://www.imdb.com/title/tt0167260"
    },
    {
      "rank": 8,
      "title": "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.9",
      "id": "top8",
      "year": 1994,
      "imdbid": "tt0110912",
      "imdb_link": "https://www.imdb.com/title/tt0110912"
    },
    {
      "rank": 9,
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
      "genre": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.8",
      "id": "top9",
      "year": 2001,
      "imdbid": "tt0120737",
      "imdb_link": "https://www.imdb.com/title/tt0120737"
    },
    {
      "rank": 10,
      "title": "The Good, the Bad and the Ugly",
      "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      "image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Adventure",
        "Western"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.8",
      "id": "top10",
      "year": 1966,
      "imdbid": "tt0060196",
      "imdb_link": "https://www.imdb.com/title/tt0060196"
    },
    {
      "rank": 11,
      "title": "Forrest Gump",
      "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Romance"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.8",
      "id": "top11",
      "year": 1994,
      "imdbid": "tt0109830",
      "imdb_link": "https://www.imdb.com/title/tt0109830"
    },
    {
      "rank": 12,
      "title": "Fight Club",
      "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.8",
      "id": "top12",
      "year": 1999,
      "imdbid": "tt0137523",
      "imdb_link": "https://www.imdb.com/title/tt0137523"
    },
    {
      "rank": 13,
      "title": "The Lord of the Rings: The Two Towers",
      "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      "image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.8",
      "id": "top13",
      "year": 2002,
      "imdbid": "tt0167261",
      "imdb_link": "https://www.imdb.com/title/tt0167261"
    },
    {
      "rank": 14,
      "title": "Inception",
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.7",
      "id": "top14",
      "year": 2010,
      "imdbid": "tt1375666",
      "imdb_link": "https://www.imdb.com/title/tt1375666"
    },
    {
      "rank": 15,
      "title": "Star Wars: Episode V - The Empire Strikes Back",
      "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
      "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.7",
      "id": "top15",
      "year": 1980,
      "imdbid": "tt0080684",
      "imdb_link": "https://www.imdb.com/title/tt0080684"
    },
    {
      "rank": 16,
      "title": "The Matrix",
      "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Action",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.7",
      "id": "top16",
      "year": 1999,
      "imdbid": "tt0133093",
      "imdb_link": "https://www.imdb.com/title/tt0133093"
    },
    {
      "rank": 17,
      "title": "Goodfellas",
      "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      "genre": [
        "Biography",
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.7",
      "id": "top17",
      "year": 1990,
      "imdbid": "tt0099685",
      "imdb_link": "https://www.imdb.com/title/tt0099685"
    },
    {
      "rank": 18,
      "title": "Spider-Man: Across the Spider-Verse",
      "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
      "image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Animation",
        "Action",
        "Adventure"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.7",
      "id": "top18",
      "year": 2023,
      "imdbid": "tt9362722",
      "imdb_link": "https://www.imdb.com/title/tt9362722"
    },
    {
      "rank": 19,
      "title": "Interstellar",
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Adventure",
        "Drama",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.7",
      "id": "top19",
      "year": 2014,
      "imdbid": "tt0816692",
      "imdb_link": "https://www.imdb.com/title/tt0816692"
    },
    {
      "rank": 20,
      "title": "One Flew Over the Cuckoo's Nest",
      "description": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
      "image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top20",
      "year": 1975,
      "imdbid": "tt0073486",
      "imdb_link": "https://www.imdb.com/title/tt0073486"
    },
    {
      "rank": 21,
      "title": "Se7en",
      "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Mystery"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top21",
      "year": 1995,
      "imdbid": "tt0114369",
      "imdb_link": "https://www.imdb.com/title/tt0114369"
    },
    {
      "rank": 22,
      "title": "It's a Wonderful Life",
      "description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
      "image": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Family",
        "Fantasy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top22",
      "year": 1946,
      "imdbid": "tt0038650",
      "imdb_link": "https://www.imdb.com/title/tt0038650"
    },
    {
      "rank": 23,
      "title": "Seven Samurai",
      "description": "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. As the samurai teach the peasants how to defend themselves, the village is attacked by an army of bandits.",
      "image": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
      "genre": [
        "Action",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top23",
      "year": 1954,
      "imdbid": "tt0047478",
      "imdb_link": "https://www.imdb.com/title/tt0047478"
    },
    {
      "rank": 24,
      "title": "The Silence of the Lambs",
      "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      "image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top24",
      "year": 1991,
      "imdbid": "tt0102926",
      "imdb_link": "https://www.imdb.com/title/tt0102926"
    },
    {
      "rank": 25,
      "title": "Saving Private Ryan",
      "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      "image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "genre": [
        "Drama",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top25",
      "year": 1998,
      "imdbid": "tt0120815",
      "imdb_link": "https://www.imdb.com/title/tt0120815"
    },
    {
      "rank": 26,
      "title": "City of God",
      "description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top26",
      "year": 2002,
      "imdbid": "tt0317248",
      "imdb_link": "https://www.imdb.com/title/tt0317248"
    },
    {
      "rank": 27,
      "title": "Life Is Beautiful",
      "description": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
      "image": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "genre": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top27",
      "year": 1997,
      "imdbid": "tt0118799",
      "imdb_link": "https://www.imdb.com/title/tt0118799"
    },
    {
      "rank": 28,
      "title": "The Green Mile",
      "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Fantasy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top28",
      "year": 1999,
      "imdbid": "tt0120689",
      "imdb_link": "https://www.imdb.com/title/tt0120689"
    },
    {
      "rank": 29,
      "title": "Star Wars: Episode IV - A New Hope",
      "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top29",
      "year": 1977,
      "imdbid": "tt0076759",
      "imdb_link": "https://www.imdb.com/title/tt0076759"
    },
    {
      "rank": 30,
      "title": "Terminator 2: Judgment Day",
      "description": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
      "image": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@",
      "genre": [
        "Action",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top30",
      "year": 1991,
      "imdbid": "tt0103064",
      "imdb_link": "https://www.imdb.com/title/tt0103064"
    },
    {
      "rank": 31,
      "title": "Spirited Away",
      "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      "image": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Animation",
        "Adventure",
        "Family"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top31",
      "year": 2001,
      "imdbid": "tt0245429",
      "imdb_link": "https://www.imdb.com/title/tt0245429"
    },
    {
      "rank": 32,
      "title": "Oppenheimer",
      "description": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      "image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Biography",
        "Drama",
        "History"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top32",
      "year": 2023,
      "imdbid": "tt15398776",
      "imdb_link": "https://www.imdb.com/title/tt15398776"
    },
    {
      "rank": 33,
      "title": "Harakiri",
      "description": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
      "image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
      "genre": [
        "Action",
        "Drama",
        "Mystery"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
      "rating": "8.6",
      "id": "top33",
      "year": 1962,
      "imdbid": "tt0056058",
      "imdb_link": "https://www.imdb.com/title/tt0056058"
    },
    {
      "rank": 34,
      "title": "Back to the Future",
      "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "genre": [
        "Adventure",
        "Comedy",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top34",
      "year": 1985,
      "imdbid": "tt0088763",
      "imdb_link": "https://www.imdb.com/title/tt0088763"
    },
    {
      "rank": 35,
      "title": "The Pianist",
      "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      "image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
      "genre": [
        "Biography",
        "Drama",
        "Music"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top35",
      "year": 2002,
      "imdbid": "tt0253474",
      "imdb_link": "https://www.imdb.com/title/tt0253474"
    },
    {
      "rank": 36,
      "title": "Psycho",
      "description": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
      "image": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@",
      "genre": [
        "Horror",
        "Mystery",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top36",
      "year": 1960,
      "imdbid": "tt0054215",
      "imdb_link": "https://www.imdb.com/title/tt0054215"
    },
    {
      "rank": 37,
      "title": "Parasite",
      "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      "image": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top37",
      "year": 2019,
      "imdbid": "tt6751668",
      "imdb_link": "https://www.imdb.com/title/tt6751668"
    },
    {
      "rank": 38,
      "title": "Gladiator",
      "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top38",
      "year": 1994,
      "imdbid": "tt0172495",
      "imdb_link": "https://www.imdb.com/title/tt0172495"
    },
    {
      "rank": 39,
      "title": "The Lion King",
      "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      "image": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@",
      "genre": [
        "Animation",
        "Adventure",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top39",
      "year": 1994,
      "imdbid": "tt0110357",
      "imdb_link": "https://www.imdb.com/title/tt0110357"
    },
    {
      "rank": 40,
      "title": "Léon: The Professional",
      "description": "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "genre": [
        "Action",
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top40",
      "year": 1994,
      "imdbid": "tt0110413",
      "imdb_link": "https://www.imdb.com/title/tt0110413"
    },
    {
      "rank": 41,
      "title": "American History X",
      "description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
      "image": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@",
      "genre": [
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top41",
      "year": 2000,
      "imdbid": "tt0120586",
      "imdb_link": "https://www.imdb.com/title/tt0120586"
    },
    {
      "rank": 42,
      "title": "The Departed",
      "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top42",
      "year": 1998,
      "imdbid": "tt0407887",
      "imdb_link": "https://www.imdb.com/title/tt0407887"
    },
    {
      "rank": 43,
      "title": "Whiplash",
      "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Music"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top43",
      "year": 2014,
      "imdbid": "tt2582802",
      "imdb_link": "https://www.imdb.com/title/tt2582802"
    },
    {
      "rank": 44,
      "title": "The Prestige",
      "description": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Mystery",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top44",
      "year": 2006,
      "imdbid": "tt0482571",
      "imdb_link": "https://www.imdb.com/title/tt0482571"
    },
    {
      "rank": 45,
      "title": "The Usual Suspects",
      "description": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      "image": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Mystery"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top45",
      "year": 1995,
      "imdbid": "tt0114814",
      "imdb_link": "https://www.imdb.com/title/tt0114814"
    },
    {
      "rank": 46,
      "title": "Grave of the Fireflies",
      "description": "A young boy and his little sister struggle to survive in Japan during World War II.",
      "image": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Animation"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top46",
      "year": 1988,
      "imdbid": "tt0095327",
      "imdb_link": "https://www.imdb.com/title/tt0095327"
    },
    {
      "rank": 47,
      "title": "Casablanca",
      "description": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
      "image": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
      "genre": [
        "Drama",
        "Romance",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top47",
      "year": 1942,
      "imdbid": "tt0034583",
      "imdb_link": "https://www.imdb.com/title/tt0034583"
    },
    {
      "rank": 48,
      "title": "The Intouchables",
      "description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Biography",
        "Comedy",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top48",
      "year": 2011,
      "imdbid": "tt1675434",
      "imdb_link": "https://www.imdb.com/title/tt1675434"
    },
    {
      "rank": 49,
      "title": "Modern Times",
      "description": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
      "image": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      "genre": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top49",
      "year": 1936,
      "imdbid": "tt0027977",
      "imdb_link": "https://www.imdb.com/title/tt0027977"
    },
    {
      "rank": 50,
      "title": "Cinema Paradiso",
      "description": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
      "image": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Romance"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top50",
      "year": 1988,
      "imdbid": "tt0095765",
      "imdb_link": "https://www.imdb.com/title/tt0095765"
    },
    {
      "rank": 51,
      "title": "Once Upon a Time in the West",
      "description": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
      "image": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      "genre": [
        "Western"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top51",
      "year": 1968,
      "imdbid": "tt0064116",
      "imdb_link": "https://www.imdb.com/title/tt0064116"
    },
    {
      "rank": 52,
      "title": "Rear Window",
      "description": "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
      "image": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR2,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR2,0,380,562_.jpg",
      "genre": [
        "Mystery",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top52",
      "year": 1954,
      "imdbid": "tt0047396",
      "imdb_link": "https://www.imdb.com/title/tt0047396"
    },
    {
      "rank": 53,
      "title": "Alien",
      "description": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "image": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
      "genre": [
        "Horror",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top53",
      "year": 1979,
      "imdbid": "tt0078748",
      "imdb_link": "https://www.imdb.com/title/tt0078748"
    },
    {
      "rank": 54,
      "title": "City Lights",
      "description": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
      "image": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top54",
      "year": 1931,
      "imdbid": "tt0021749",
      "imdb_link": "https://www.imdb.com/title/tt0021749"
    },
    {
      "rank": 55,
      "title": "Django Unchained",
      "description": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
      "image": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Western"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.5",
      "id": "top55",
      "year": 2012,
      "imdbid": "tt1853728",
      "imdb_link": "https://www.imdb.com/title/tt1853728"
    },
    {
      "rank": 56,
      "title": "Apocalypse Now",
      "description": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
      "image": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
      "genre": [
        "Drama",
        "Mystery",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top56",
      "year": 1979,
      "imdbid": "tt0078788",
      "imdb_link": "https://www.imdb.com/title/tt0078788"
    },
    {
      "rank": 57,
      "title": "Memento",
      "description": "A man with short-term memory loss attempts to track down his wife's murderer.",
      "image": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
      "genre": [
        "Mystery",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top57",
      "year": 2000,
      "imdbid": "tt0209144",
      "imdb_link": "https://www.imdb.com/title/tt0209144"
    },
    {
      "rank": 58,
      "title": "Indiana Jones and the Raiders of the Lost Ark",
      "description": "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
      "image": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top58",
      "year": 1981,
      "imdbid": "tt0082971",
      "imdb_link": "https://www.imdb.com/title/tt0082971"
    },
    {
      "rank": 59,
      "title": "WALL·E",
      "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      "image": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Animation",
        "Adventure",
        "Family"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top59",
      "year": 2008,
      "imdbid": "tt0910970",
      "imdb_link": "https://www.imdb.com/title/tt0910970"
    },
    {
      "rank": 60,
      "title": "The Lives of Others",
      "description": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
      "image": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      "genre": [
        "Drama",
        "Mystery",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top60",
      "year": 2006,
      "imdbid": "tt0405094",
      "imdb_link": "https://www.imdb.com/title/tt0405094"
    },
    {
      "rank": 61,
      "title": "Sunset Blvd.",
      "description": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_QL75_UX380_CR0,5,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_QL75_UX380_CR0,5,380,562_.jpg",
      "genre": [
        "Drama",
        "Film-Noir"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top61",
      "year": 1950,
      "imdbid": "tt0043014",
      "imdb_link": "https://www.imdb.com/title/tt0043014"
    },
    {
      "rank": 62,
      "title": "Paths of Glory",
      "description": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      "genre": [
        "Drama",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top62",
      "year": 1957,
      "imdbid": "tt0050825",
      "imdb_link": "https://www.imdb.com/title/tt0050825"
    },
    {
      "rank": 63,
      "title": "Avengers: Infinity War",
      "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      "image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top63",
      "year": 2018,
      "imdbid": "tt4154756",
      "imdb_link": "https://www.imdb.com/title/tt4154756"
    },
    {
      "rank": 64,
      "title": "The Shining",
      "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      "image": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,8,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,8,380,562_.jpg",
      "genre": [
        "Drama",
        "Horror"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top64",
      "year": 1980,
      "imdbid": "tt0081505",
      "imdb_link": "https://www.imdb.com/title/tt0081505"
    },
    {
      "rank": 65,
      "title": "The Great Dictator",
      "description": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
      "image": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR0,0,380,562_.jpg",
      "genre": [
        "Comedy",
        "Drama",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top65",
      "year": 1940,
      "imdbid": "tt0032553",
      "imdb_link": "https://www.imdb.com/title/tt0032553"
    },
    {
      "rank": 66,
      "title": "Witness for the Prosecution",
      "description": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
      "image": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Mystery"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top66",
      "year": 1957,
      "imdbid": "tt0051201",
      "imdb_link": "https://www.imdb.com/title/tt0051201"
    },
    {
      "rank": 67,
      "title": "Spider-Man: Into the Spider-Verse",
      "description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      "image": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@",
      "genre": [
        "Animation",
        "Action",
        "Adventure"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top67",
      "year": 2018,
      "imdbid": "tt4633694",
      "imdb_link": "https://www.imdb.com/title/tt4633694"
    },
    {
      "rank": 68,
      "title": "Aliens",
      "description": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
      "image": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top68",
      "year": 1986,
      "imdbid": "tt0090605",
      "imdb_link": "https://www.imdb.com/title/tt0090605"
    },
    {
      "rank": 69,
      "title": "Inglourious Basterds",
      "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Adventure",
        "Drama",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top69",
      "year": 2009,
      "imdbid": "tt0361748",
      "imdb_link": "https://www.imdb.com/title/tt0361748"
    },
    {
      "rank": 70,
      "title": "The Dark Knight Rises",
      "description": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top70",
      "year": 2012,
      "imdbid": "tt1345836",
      "imdb_link": "https://www.imdb.com/title/tt1345836"
    },
    {
      "rank": 71,
      "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      "description": "An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
      "image": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      "genre": [
        "Comedy",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top71",
      "year": 1964,
      "imdbid": "tt0057012",
      "imdb_link": "https://www.imdb.com/title/tt0057012"
    },
    {
      "rank": 72,
      "title": "Oldboy",
      "description": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Drama",
        "Mystery"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top72",
      "year": 2003,
      "imdbid": "tt0364569",
      "imdb_link": "https://www.imdb.com/title/tt0364569"
    },
    {
      "rank": 73,
      "title": "Coco",
      "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      "image": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "genre": [
        "Animation",
        "Adventure",
        "Comedy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top73",
      "year": 2017,
      "imdbid": "tt2380307",
      "imdb_link": "https://www.imdb.com/title/tt2380307"
    },
    {
      "rank": 74,
      "title": "Amadeus",
      "description": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
      "image": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      "genre": [
        "Biography",
        "Drama",
        "Music"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top74",
      "year": 1984,
      "imdbid": "tt0086879",
      "imdb_link": "https://www.imdb.com/title/tt0086879"
    },
    {
      "rank": 75,
      "title": "The Boat",
      "description": "A German U-boat stalks the frigid waters of the North Atlantic as its young crew experience the sheer terror and claustrophobic world of a submariner in World War II.",
      "image": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_QL75_UX380_CR0,7,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_QL75_UX380_CR0,7,380,562_.jpg",
      "genre": [
        "Drama",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top75",
      "year": 1981,
      "imdbid": "tt0082096",
      "imdb_link": "https://www.imdb.com/title/tt0082096"
    },
    {
      "rank": 76,
      "title": "Avengers: Endgame",
      "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top76",
      "year": 2019,
      "imdbid": "tt4154796",
      "imdb_link": "https://www.imdb.com/title/tt4154796"
    },
    {
      "rank": 77,
      "title": "Joker",
      "description": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      "image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top77",
      "year": 2019,
      "imdbid": "tt7286456",
      "imdb_link": "https://www.imdb.com/title/tt7286456"
    },
    {
      "rank": 78,
      "title": "Your Name.",
      "description": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
      "image": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Animation",
        "Drama",
        "Fantasy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top78",
      "year": 2016,
      "imdbid": "tt5311514",
      "imdb_link": "https://www.imdb.com/title/tt5311514"
    },
    {
      "rank": 79,
      "title": "3 Idiots",
      "description": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
      "image": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
      "genre": [
        "Comedy",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top79",
      "year": 2009,
      "imdbid": "tt1187043",
      "imdb_link": "https://www.imdb.com/title/tt1187043"
    },
    {
      "rank": 80,
      "title": "High and Low",
      "description": "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom.",
      "image": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY562_CR9,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY562_CR9,0,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama",
        "Mystery"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top80",
      "year": 1963,
      "imdbid": "tt0057565",
      "imdb_link": "https://www.imdb.com/title/tt0057565"
    },
    {
      "rank": 81,
      "title": "Capernaum",
      "description": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
      "image": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "8.4",
      "id": "top81",
      "year": 2018,
      "imdbid": "tt8267604",
      "imdb_link": "https://www.imdb.com/title/tt8267604"
    },
    {
      "rank": 82,
      "title": "Come and See",
      "description": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
      "image": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      "genre": [
        "Drama",
        "Thriller",
        "War"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg",
      "rating": "8.4",
      "id": "top82",
      "year": 1985,
      "imdbid": "tt0091251",
      "imdb_link": "https://www.imdb.com/title/tt0091251"
    },
    {
      "rank": 83,
      "title": "Toy Story",
      "description": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      "image": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "genre": [
        "Animation",
        "Adventure",
        "Comedy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top83",
      "year": 1995,
      "imdbid": "tt0114709",
      "imdb_link": "https://www.imdb.com/title/tt0114709"
    },
    {
      "rank": 84,
      "title": "American Beauty",
      "description": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      "image": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top84",
      "year": 1999,
      "imdbid": "tt0169547",
      "imdb_link": "https://www.imdb.com/title/tt0169547"
    },
    {
      "rank": 85,
      "title": "Braveheart",
      "description": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      "image": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      "genre": [
        "Biography",
        "Drama",
        "History"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top85",
      "year": 1995,
      "imdbid": "tt0112573",
      "imdb_link": "https://www.imdb.com/title/tt0112573"
    },
    {
      "rank": 86,
      "title": "Princess Mononoke",
      "description": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
      "image": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Animation",
        "Action",
        "Adventure"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top86",
      "year": 1997,
      "imdbid": "tt0119698",
      "imdb_link": "https://www.imdb.com/title/tt0119698"
    },
    {
      "rank": 87,
      "title": "Good Will Hunting",
      "description": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,9,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,9,380,562_.jpg",
      "genre": [
        "Drama",
        "Romance"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top87",
      "year": 1997,
      "imdbid": "tt0119217",
      "imdb_link": "https://www.imdb.com/title/tt0119217"
    },
    {
      "rank": 88,
      "title": "Once Upon a Time in America",
      "description": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
      "image": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
      "genre": [
        "Crime",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top88",
      "year": 1984,
      "imdbid": "tt0087843",
      "imdb_link": "https://www.imdb.com/title/tt0087843"
    },
    {
      "rank": 89,
      "title": "Singin' in the Rain",
      "description": "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
      "image": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      "genre": [
        "Comedy",
        "Musical",
        "Romance"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top89",
      "year": 1952,
      "imdbid": "tt0045152",
      "imdb_link": "https://www.imdb.com/title/tt0045152"
    },
    {
      "rank": 90,
      "title": "Requiem for a Dream",
      "description": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
      "image": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top90",
      "year": 2000,
      "imdbid": "tt0180093",
      "imdb_link": "https://www.imdb.com/title/tt0180093"
    },
    {
      "rank": 91,
      "title": "Toy Story 3",
      "description": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
      "genre": [
        "Animation",
        "Adventure",
        "Comedy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top91",
      "year": 2010,
      "imdbid": "tt0435761",
      "imdb_link": "https://www.imdb.com/title/tt0435761"
    },
    {
      "rank": 92,
      "title": "Star Wars: Episode VI - Return of the Jedi",
      "description": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
      "image": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,13,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,13,380,562_.jpg",
      "genre": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top92",
      "year": 1983,
      "imdbid": "tt0086190",
      "imdb_link": "https://www.imdb.com/title/tt0086190"
    },
    {
      "rank": 93,
      "title": "Eternal Sunshine of the Spotless Mind",
      "description": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Drama",
        "Romance",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top93",
      "year": 2004,
      "imdbid": "tt0338013",
      "imdb_link": "https://www.imdb.com/title/tt0338013"
    },
    {
      "rank": 94,
      "title": "2001: A Space Odyssey",
      "description": "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
      "image": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      "genre": [
        "Adventure",
        "Sci-Fi"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top94",
      "year": 1968,
      "imdbid": "tt0062622",
      "imdb_link": "https://www.imdb.com/title/tt0062622"
    },
    {
      "rank": 95,
      "title": "The Hunt",
      "description": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_UY67_CR1,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top95",
      "year": 2012,
      "imdbid": "tt2106476",
      "imdb_link": "https://www.imdb.com/title/tt2106476"
    },
    {
      "rank": 96,
      "title": "Reservoir Dogs",
      "description": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      "image": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      "genre": [
        "Crime",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top96",
      "year": 1992,
      "imdbid": "tt0105236",
      "imdb_link": "https://www.imdb.com/title/tt0105236"
    },
    {
      "rank": 97,
      "title": "Ikiru",
      "description": "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
      "image": "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top97",
      "year": 1952,
      "imdbid": "tt0044741",
      "imdb_link": "https://www.imdb.com/title/tt0044741"
    },
    {
      "rank": 98,
      "title": "Lawrence of Arabia",
      "description": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
      "image": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
      "genre": [
        "Adventure",
        "Biography",
        "Drama"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY67_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top98",
      "year": 1962,
      "imdbid": "tt0056172",
      "imdb_link": "https://www.imdb.com/title/tt0056172"
    },
    {
      "rank": 99,
      "title": "Citizen Kane",
      "description": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
      "image": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Drama",
        "Mystery"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top99",
      "year": 1941,
      "imdbid": "tt0033467",
      "imdb_link": "https://www.imdb.com/title/tt0033467"
    },
    {
      "rank": 100,
      "title": "M",
      "description": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
      "image": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "big_image": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      "genre": [
        "Crime",
        "Mystery",
        "Thriller"
      ],
      "thumbnail": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_UX45_CR0,0,45,67_AL_.jpg",
      "rating": "8.3",
      "id": "top100",
      "year": 1931,
      "imdbid": "tt0022100",
      "imdb_link": "https://www.imdb.com/title/tt0022100"
    }
  ]
  
  module.exports = moviedata;