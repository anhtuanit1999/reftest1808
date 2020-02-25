const mongoose = require('mongoose');

const PORT = 3000;

const app = require('./app');

mongoose.connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));
});
