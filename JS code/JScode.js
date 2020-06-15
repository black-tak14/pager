"use strict";

const number0Films = +prompt('Сколько фильмов вы уже посмотрели ?', '');
const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Один из поседних просмотренных фильмов ?', ''),
      b = prompt('На скоько оцените его ?', ''),
      c = prompt('Один из поседних просмотренных фильмов ?', ''),
      d = prompt('На скоько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);