const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/', router);

// 🔹 Add a route for "/"
app.get('/', (req, res) => {
    res.send('Welcome to my API! 🚀');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});











// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const router = require('./routes/router');
// const { sequelize } = require('./models/schemas');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors({ origin: '*', credentials: true }));

// // Routes
// app.use('/', router);

// // Test DB Connection
// sequelize.authenticate()
//   .then(() => console.log('✅ PostgreSQL connected successfully'))
//   .catch(err => console.error('❌ DB Connection Error:', err));

// // Start server
// app.listen(port, () => {
//   console.log(`🚀 Server is running on port ${port}`);
// });


// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const router = require('./routes/router')
// const mongoose = require('mongoose')
// require('dotenv/config')

// const app =  express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200
// }

// app.use(cors(corsOptions))
// app.use('/', router)

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('✅ MongoDB connected successfully'))
//     .catch(err => console.error('❌ DB Connection Error:', err));

// const port = process.env.PORT || 4000
// const server = app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })
