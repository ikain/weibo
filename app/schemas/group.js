/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var GroupSchema = new mongoose.Schema({
    //创建人
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //群名称
    name:String,
    //群地点
    address:String,
    //简介
    synopsis:String,
    //群最大人数
    maxNum:Number,
    //现有人数
    currentNum:Number,
    //是否置顶
    isTop:Boolean,
    //管理员最多人数
    maxAdminNum:Number,
    //当前管理员数
    currentAdminNum:{
        type:'Number',
        default:0
    },
    //群名片
    _fk_groupCardId:{
        type:Schema.Types.ObjectId,
        ref:'GroupCard'
    },
    //创建时间
    createDate:{
        type: Date,
        default: Date.now()
    }
});