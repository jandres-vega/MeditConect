const doctorRouter = require('./doctor.routes');

function routes(app) {
    app.use('/doctor', doctorRouter);
}

module.exports = {routes}