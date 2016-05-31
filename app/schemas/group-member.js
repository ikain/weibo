/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var GroupMemberSchema = new mongoose.Schema({
    //成员用户
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //群组ID
    _fk_groupId:{
        type:Schema.Types.ObjectId,
        ref:'Group'
    },
    //加入时间
    joinDate:{
        type: Date,
        default: Date.now()
    },
    //是否是管理员
    isAdmin:Boolean

});