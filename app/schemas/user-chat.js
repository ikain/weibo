/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserChatSchema = new mongoose.Schema({
    //发消息用户ID
    _fk_sendUserId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //收消息用户ID
    _fk_receiveUserId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //发送内容
    content:{
        type:Schema.Types.Mixed
    },
    //发送时间
    sendDate:{
        type:Date,
        default:Date.now()
    },
    //消息状态
    status:{
        type:Number,
        enum:[1,2,3]
    }
});