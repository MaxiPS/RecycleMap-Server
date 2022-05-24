const user = require("../database/models/Users");
const RecyclePoints = require("../database/models/RecyclePoints");

user.hasMany(RecyclePoints);
RecyclePoints.belongsTo(user);
