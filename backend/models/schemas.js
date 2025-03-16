const users = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", website: "hildegard.org" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", website: "anastasia.net" },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", website: "ramiro.info" }
];

const contacts = [];

module.exports = { users, contacts };

























// const { Sequelize, DataTypes } = require('sequelize');
// require('dotenv').config();

// // Connect to PostgreSQL
// const sequelize = new Sequelize(process.env.DB_URI, {
//   dialect: 'postgres',
//   logging: console.log, // Enable logging for debugging
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false // Required for Supabase
//     }
//   }
// });

// // Define Users model
// const Users = sequelize.define('Users', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   website: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   entryDate: {
//     type: DataTypes.DATE,
//     defaultValue: Sequelize.NOW
//   }
// }, { tableName: 'users', timestamps: false });

// // Define Contact model
// const Contact = sequelize.define('Contact', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   website: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   message: {
//     type: DataTypes.TEXT,
//     allowNull: false
//   },
//   entryDate: {
//     type: DataTypes.DATE,
//     defaultValue: Sequelize.NOW
//   }
// }, { tableName: 'contact_form', timestamps: false });

// // Sync models with the database
// sequelize.sync({ alter: true })
//   .then(() => console.log('✅ PostgreSQL tables synchronized'))
//   .catch(error => console.error('❌ Error syncing tables:', error));

// module.exports = { sequelize, Users, Contact };



// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const userSchema = new Schema({
//     name: {type:String},
//     email: {type:String},
//     website: {type:String},
//     entryDate: {type:Date, default:Date.now}
// })

// const contactSchema = new Schema({
//     email: {type:String, required:true},
//     website: {type:String, required:true},
//     message: {type:String, required:true},
//     entryDate: {type:Date, default:Date.now}
// })

// const Users = mongoose.model('Users', userSchema, 'users')
// const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
// const mySchemas = {'Users':Users, 'Contact':Contact}

// module.exports = mySchemas