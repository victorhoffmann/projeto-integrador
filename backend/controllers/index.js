const controller = {
    index: (req, res, next) => {
        res.render('index', {
            title: 'Página Inicial',
            subtitle: 'Bem vindo à prática de Sequelize #02!'
        });
    }
}

module.exports = controller