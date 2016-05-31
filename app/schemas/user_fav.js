/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserFavSchema = new mongoose.Schema({

    //收藏人
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //被收藏的消息
    _fk_messageId:{
        type:Schema.Types.ObjectId,
        ref:'UserMessage'
    },
    //被收藏消息的人
    _fk_messageUserId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //收藏时间
    createDate:{
        type: Date,
        default: Date.now()
    }

});