/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserVideoSchema = new mongoose.Schema({
    //上传人
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //视频磁盘路径
    path:String,
    //视频获取地址
    url:String,
    //缩略图
    thumbnail:String,
    //时长
    timeLength:String,
    //备注
    remark:String,
    //上传时间
    uploadDate:{
        type: Date,
        default: Date.now()
    }

});