/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');

/**
 * 群名片
 * @type {mongoose.Schema}
 */
var GroupCardSchema = new mongoose.Schema({
    //名片二维码
    QRCode:Buffer,
    //名片介绍
    content:String
});