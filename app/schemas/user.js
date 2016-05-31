/**
 * Created by Admin on 2016/5/17.
 */
var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    //用户妮称 varchar(20)
    nickName: {
        type: 'String',
        required: true
    },
    //用户头像
    headImage: String,
    //登录ID
    loginId: String,
    //密码
    password: String,
    //邮箱
    email: String,
    //手机号码
    mobileNo: String,
    //性别 0:女 1:男
    sex: {
        type: Number,
        enum: [0, 1]
    },
    //真实姓名
    name: String,
    //皮肤
    skin: String,
    //QQ
    qq: String,
    //学校
    school: String,
    //所在地
    address: String,
    //生日
    birthday: Date,
    //职位
    job: String,
    //简介
    synopsis: String,
    //博客地址
    blog: String,
    //注册时间
    create_date: {
        type: Date,
        default: Date.now()
    },
    //更新时间
    updateDate: Date

});


UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isNew) {
        user.meta.createAt = Date.now()
    } else {
        user.meta.updateAt = Date.now()
    }
});

UserSchema.methods = {
    comparePassword: function (_password, cb) {
        bcrypt.compare(_password, this.password, function (err, isMatch) {
            if (err) return cb(err);

            cb(null, isMatch);
        })
    }
};

UserSchema.statics = {
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb);
    }
};

module.exports = UserSchema;