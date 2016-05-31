/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserGoodSchema = new mongoose.Schema({

    //用户ID
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //被赞的消息
    _fk_messageId:{
        type:Schema.Types.ObjectId,
        ref:'UserMessage'
    },
    //时间
    createDate:{
        type: Date,
        default: Date.now()
    }
});