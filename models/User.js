const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.pass);
      }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.pass= await bcrypt.hash(newUserData.pass, 10);
                return newUserData;
              },
              beforeUpdate: async (updatedUserData) => {
                updatedUserData.pass = await bcrypt.hash(updatedUserData.pass, 10);
                return updatedUserData;
              },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelname: 'user',
    }
)

module.exports = User;
// module.exports = Vitamins;