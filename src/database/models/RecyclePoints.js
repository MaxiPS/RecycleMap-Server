const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");

class RecyclePoints extends Model {}

RecyclePoints.init(
  {
    coordinateY: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    coordinateX: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    wasteType: {
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
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
