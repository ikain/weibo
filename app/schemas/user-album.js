/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');


var UserAlbumSchema = new mongoose.Schema({

    _fk_userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    //相册名称
    name:String,
    //相册简介
    synopsis:String,
    //照片总数
    photoSum:Number,
    //封面照片ID
    _fk_userAlbumPhotoId:{
        type:Schema.Types.ObjectId,
        ref:'UserAlbumPhoto'
    },
    //建立时间
    createDate:{
        type: Date,
        default: Date.now()
    }
});