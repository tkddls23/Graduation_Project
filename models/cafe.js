const Sequelize = require('sequelize');

module.exports = class Cafe extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            cafe_img: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            cafe_info: {
                type: Sequelize.STRING(1000),
                allowNull: false,
            },
            operation: {
                type: Sequelize.TINYINT,
                allowNull: false,
            },
            location: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            seat_empty: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            seat_all: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Cafe',
            tableName: 'cafes',
            paranoid: true,
            charset: 'utf8', // 한글 지원
            collate: 'utf8_general_ci', // 한글 지원
        });
    }

    // static associate(db) {
    //     db.User.hasMany(db.Post);
    //     db.User.belongsToMany(db.User, {
    //         foreignKey: 'followingId',
    //         as: 'Followers',
    //         through: 'Follow',
    //     });
    //     db.User.belongsToMany(db.User, {
    //         foreignKey: 'followerId',
    //         as: 'Followings',
    //         through: 'Follow',
    //     });
    // }
};