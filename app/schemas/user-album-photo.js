/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserAlbumPhotoSchema = new mongoose.Schema({
    //上传人
    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //图片磁盘相对路径
    path:String,
    //下载图片地址src属性
    url:String,
    //拍摄地点
    address:String,
    //拍摄时间
    takeDate:{
        type: Date,
        default: Date.now()
    },
    //上传时间
    uploadDate:{
        type: Date,
        default: Date.now()
    }

});