/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var smsUtil = require('../util/sdk_topClient/smsUtil');
var crypto = require('crypto');
var memcacheClient = require('../util/memcacheClient');
var commonUtils = require('../util/commonUtils');


exports.sendRegisterCode = function (req, res) {
    var mobileNo = req.query.mobileNo;
    var num = smsUtil.getRandomNum(100000, 999999);
    console.log('将给' + mobileNo + '发送短信验证码：' + num);
    smsUtil.sendRegisterSms(mobileNo, num, function (error, response) {
        if (!error) {
            console.log(response);
            memcacheClient.set('regCode:' + mobileNo, {mobileNo: mobileNo, code: num}, 30 * 60);
            res.json({code: 1, message: '发送成功'});
        } else {
            console.log(error);
            res.json({code: 0, message: '发送失败'});
        }
    });

    /*crypto.randomBytes(6, function(ex, buf) {
     var code = buf.toString('hex');
     console.log(code);
     });*/
};

exports.toRegister = function (req, res) {
    res.render('user/register', {title: '注册'});
};

exports.register = function (req, res) {
    //res.render('user/pre_login', {title: '注册成功'});
    var mobileNo = req.body.mobileNo;
    var checkCode = req.body.checkCode;

    var failedJson = {
        title: '注册',
        code: 0,
        message: '注册失败',
        href: 'toRegister' + commonUtils.getParamByQ(),
        buttonName: '我要重新注册'
    };

    User.findOne({loginId: mobileNo}, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            res.render('user/pre_login', failedJson);
        } else {
            var ur = {
                nickName: '宝宝',
                headImage: '/assets/img/head/people_kid_head_64px.png',
                loginId: mobileNo,
                password: 123456,
                mobileNo: mobileNo,
                sex: 0
            };
            user = new User(ur);
            user.save(function (err, user) {
                if (err) {
                    console.log(err);
                    res.render('user/pre_login', failedJson);
                }
                res.render('user/pre_login', {
                    title: '注册',
                    code: 1,
                    message: '您已经注册成功',
                    href: '/user/toLogin' + commonUtils.getParamByQ(),
                    buttonName: '我要登录'
                });
            });
        }
    });

    /*memcacheClient.get('regCode:' + mobileNo, function (err, data) {
        if (!err && data) {
            console.log('code:' + data.code);
            console.log('mobileNo' + data.mobileNo);
            if (data.code == checkCode) {

                User.findOne({loginId: mobileNo}, function (err, user) {
                    if (err) {
                        console.log(err);
                    }
                    if (user) {
                        res.render('user/pre_login', failedJson);
                    } else {
                        var ur = {
                            nickName: '宝宝',
                            headImage: '/assets/img/head/people_kid_head_64px.png',
                            loginId: mobileNo,
                            password: 123456,
                            mobileNo: mobileNo,
                            sex: 0
                        };
                        user = new User(ur);
                        user.save(function (err, user) {
                            if (err) {
                                console.log(err);
                                res.render('user/pre_login', failedJson);
                            }
                            res.render('user/pre_login', {
                                title: '注册',
                                code: 1,
                                message: '您已经注册成功',
                                href: '/user/toLogin' + commonUtils.getParamByQ(),
                                buttonName: '我要登录'
                            });
                        });
                    }
                });

            } else {
                res.render('user/pre_login', failedJson);
            }
        } else {
            console.log(err);
            res.render('user/pre_login', failedJson);
        }
    });*/
};

exports.toLogin = function (req, res) {
    res.render('user/login', {title: '登录'});
};

exports.Login = function (req, res) {

    var _user = req.body.user;
    var loginId = _user.loginId;
    var password = _user.password;
    User.findOne({loginId: loginId}, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (!user) { //无此用户
            //res.json({code:-1,message:'账号密码错误'});
            res.render('user/login', {title: '登录',message:'账号密码错误'});
        }
        if (user.password == password) {
            //res.json({code:0,message:'登录成功'});
            res.render('home/home', {title: '首页'});
        } else {
            //res.json({code:-2,message:'密码错误'});
            res.render('user/login', {title: '登录',message:'密码错误'});
        }
    });
};

exports.loginOut = function (req, res) {
    delete req.session.user;
    res.redirect('/')
};

