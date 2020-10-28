export const movieValidationSchema = (movie) => {
    const errors = {};

    if (!movie.title)
        errors.title = 'Required';

    if(!movie.release_date || Object.prototype.toString.call(movie.release_date) !== "[object Date]" || isNaN(movie.release_date))
        errors.release_date = 'Required';

    if (!movie.overview)
        errors.overview = 'Required';

    if (isNaN(movie.runtime) || !movie.runtime) {
        errors.runtime = 'Should be number';
    } else if (movie.runtime < 0) {
        errors.runtime = 'Should be positive';
    }

    if (!movie.poster_path) {
        errors.poster_path = 'Required';
    } else if (!movie.poster_path.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi)) {
        errors.poster_path = 'Should be Url';
    }

    if (!movie.genres.length)
        errors.genres = 'Should be at least one';

    return errors;
}

