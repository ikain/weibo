/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserCommentSchema = new mongoose.Schema({
    //评论人
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //评论的消息
    _fk_messageId:{
        type:Schema.Types.ObjectId,
        ref:'UserMessage'
    },
    //评论内容
    content:String,
    //评论时间
    createDate:{
        type: Date,
        default: Date.now()
    }
});