'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user' // alias used in controller
      });
      Post.hasMany(models.Reaction, {
        foreignKey: 'post_id',
        as: 'reaction'
      });
      Post.hasMany(models.Comment, {
        foreignKey: 'post_id',
        as: 'comment'
      });
      
    }
  }
  Post.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    contant: DataTypes.STRING,
    img: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    view_count: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};