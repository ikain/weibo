/**
 * Created by Admin on 2016/5/18.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.toRegister = function (req, res) {
    res.render('user/register', {title: '注册'});
};

exports.register = function (req, res) {
    res.render('user/pre_login', {title: '注册成功'});
    /*var _user = req.body.user;

    User.findOne({name: _user.name}, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            return res.redirect('/toRegister');
        } else {
            user = new User(_user);
            user.save(function (err, user) {
                if (err) {
                    console.log(err);
                }
                res.redirect('/');
            })
        }
    })*/
};

exports.toLogin = function (req, res) {
    res.render('user/login', {title: '登录'});
};

exports.Login = function (req, res) {

    return res.redirect('/toLogin');
    /*var _user = req.body.user;
    var name = _user.name;
    var password = _user.password;

    User.findOne({name: name}, function (err, user) {
        if (err) {
            console.log(err);
        }

        if (!user) {
            return res.redirect('/toLogin');
        }

        user.comparePassword(password, function (err, isMatch) {
            if (err) {
                console.log(err);
            }
            if (isMatch) {
                req.session.user = user;

                return res.redirect('/');
            } else {
                return res.redirect('/toLogin');
            }
        })
    })*/
};

exports.loginOut = function (req, res) {
    delete req.session.user;
    res.redirect('/')
};

