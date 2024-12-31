'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
   
    static associate(models) {
     
    }
  }

  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    synopsis: {
      type: DataTypes.TEXT, 
    },
    cast: {
      type: DataTypes.TEXT,
      allowNull: false, 
      get() {
       
        const value = this.getDataValue('cast');
        return value ? JSON.parse(value) : []; 
      },
      set(value) {
        
        this.setDataValue('cast', JSON.stringify(value));
      },
    },
    image: {
      type: DataTypes.STRING,
      // validate: {
      //   isUrl: true, // Valida que el valor sea una URL válida
      // },
    },
  }, {
    sequelize,
    modelName: 'Movie', 
  });

  return Movie;
};
