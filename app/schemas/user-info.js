/**
 * Created by Admin on 2016/5/17.
 */
var mongoose = require('mongoose');


var UserInfoSchema = new mongoose.Schema({
    //用户ID
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //粉丝数
    fansSum:Number,
    //微博数
    microBlogSum:Number,
    //关注数
    attentionSum:Number,
    //等级
    level:{
        type:'String',
        default:'LV 1',
        enum:['LV 1','LV 2','LV 3','LV 4','LV 5','LV 6','LV 7']
    }
});