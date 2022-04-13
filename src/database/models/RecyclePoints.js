const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");

class RecyclePoints extends Model {}

RecyclePoints.init(
  {
    units: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "Units must be at least 1",
        },
        max: {
          args: [10],
          msg: "Units must equal or be less than 10",
        },
        isInt: {
          args: true,
          msg: "Units must be an integer number",
        },
      },
    },
    capacity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: "Capacity must be an integer number",
        },
        min: {
          args: [120],
          msg: "Capatity must be at least 120 litters",
        },
        max: {
          args: [3000],
          msg: "Capacity must equals or be less than 3000",
        },
      },
    },
    Ycoordinate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Xcoordinate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    waste_type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [
        "Papel y cartón",
        "Plástico",
        "Vidrio",
        "Residuos electrónicos",
        "Aceite",
        "Ropa y calzado",
      ],
    },
    city: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [
        "Adeje",
        "Arafo",
        "Arico",
        "Arona",
        "Buenavista del Norte",
        "Candelaria",
        "El Rosario",
        "El Sauzal",
        "El Tanque",
        "Fasnia",
        "Garachico",
        "Granadilla de Abona",
        "Guía de Isora",
        "Güímar",
        "Icod de los Vinos",
        "La Guancha",
        "La Matanza de Acentejo",
        "La Orotava",
        "La Victoria de Acentejo",
        "Los Realejos",
        "Los Silos",
        "Puerto de la Cruz",
        "San Cristóbal de La Laguna",
        "San Juan de la Rambla",
        "San Miguel de Abona",
        "Santa Cruz de Tenerife",
        "Santa Úrsula",
        "Santiago del Teide",
        "Tacoronte",
        "Tegueste",
        "Vilaflor de Chasna",
      ],
    },
  },
  {
    modelName: "RecyclePoints",
    sequelize,
  }
);

module.exports = RecyclePoints;
