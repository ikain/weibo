/**
 * Created by Admin on 2016/5/17.
 */
var mongoose = require('mongoose');

/**
 * 数据字典表 ->类型表
 * @type {mongoose.Schema}
 */
var SysDictionaryTypeSchema = new mongoose.Schema({
    key:{
        types:'String',
        required:true
    },
    value:String
});