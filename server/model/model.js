const mongoose = require('mongoose');
var schema = new mongoose.Schema({
                    name: {
                                        type: String,
                                        require: true

                    },
                    email: {
                                        type: String,
                                        required: true,
                                        unique:true
                    },
                    company: String,
                    status: String
})
const Userdb = mongoose.model('userdb', schema)
module.exports =Userdb