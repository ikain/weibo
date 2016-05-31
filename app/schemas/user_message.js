/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserMessageSchema = new mongoose.Schema({
    //发送人ID
    _fk_userId:Schema.Types.ObjectId,
    //消息内容
    content:String,
    //可见性 1:公开（所有人可见）2:好友圈（相互关注可见）3.仅自己可见
    visibility:{
        type:'Number',
        default:1,
        enum:[1,2,3]
    },
    //收藏次数
    favSum:Number,
    //评论次数
    commentSum:Number,
    //转发次数
    relaySum:Number,
    //转发次数
    goodSum:Number,
    //发表时间
    createDate:{
        type: Date,
        default: Date.now()
    }

});