/**
 * Created by Admin on 2016/5/17.
 */
var mongoose = require('mongoose');


var UserRelaySchema = new mongoose.Schema({
    //转发人
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //被转发的消息
    _fk_messageId:{
        type:Schema.Types.ObjectId,
        ref:'UserMessage'
    },
    //被转发消息的人
    _fk_messageUserId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //转发时间
    createDate:{
        type: Date,
        default: Date.now()
    }
});
