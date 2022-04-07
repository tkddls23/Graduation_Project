const Sequelize = require('sequelize');

module.exports = class Payment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            order_time: {
                type: 'TIMESTAMP',
                allowNull: false,
            },
            amount: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8', // 한글 지원
            collate: 'utf8_general_ci', // 한글 지원
        });
    }

    static associate(db) {
        db.Payment.belongsTo(db.Order);
        db.Payment.belongsTo(db.Cafe);
    }
};
