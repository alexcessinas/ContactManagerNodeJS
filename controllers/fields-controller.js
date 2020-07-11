

function phoneControl(req, res, next) {
    const search = req.body.search;

    if (!search || isNaN(search)) {
        next();
    } else {
        res.render('index', {
            title: 'Pokedex',
            pokemons: [],
            search,
            searchError: 'La recherche ne peut pas être faite avec un nombre.',
        });
    }
}

module.exports = {
    phoneControl
}