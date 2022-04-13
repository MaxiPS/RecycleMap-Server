const User = require("../database/models/Users");
const RecyclePoints = require("../database/models/RecyclePoints");

User.hasMany(RecyclePoints);
RecyclePoints.belongsTo(User);
