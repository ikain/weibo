/**
 * Created by Admin on 2016/5/17.
 */
var mongoose = require('mongoose');


var UserAttentionSchema = new mongoose.Schema({

    //关注人ID
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //被关注人ID
    _fk_attentionUserId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //关注时间
    createDate:{
        type: Date,
        default: Date.now()
    }

});
