/**
 * Created by Admin on 2016/5/17.
 */
var mongoose = require('mongoose');


var SysDictionarySchema = new mongoose.Schema({
    //字典类型
    _fk_dictionaryTypeId:{
        type:Schema.Types.ObjectId,
        ref:'SysDictionaryType'
    },
    key:String,
    value:String
});