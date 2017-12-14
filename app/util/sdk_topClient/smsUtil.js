/**
 * Created by Admin on 2016/6/30.
 */

var TopClient = require('./topClient').TopClient;

var client = new TopClient({
    'appkey': '23380277',
    'appsecret': '0d65a9b34956b9fac1c2e3e55d3b928a',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

exports.sendRegisterSms = function (mobileNo, num,callback) {
    if (!mobileNo) return {code: 1, message: '手机号为空'};
    if (!num) return {code: 1, message: '验证码为空'};

    client.execute('alibaba.aliqin.fc.sms.num.send', {
        'extend': '123456',
        'sms_type': 'normal',
        'sms_free_sign_name': 'kai微博',
        'sms_param': '{\"code\":\"' + num + '\",\"product\":\"ikain微博\"}',
        'rec_num': mobileNo,
        'sms_template_code': 'SMS_10280732'
    }, function(error, response){callback(error,response)});
};

exports.getRandomNum = function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
};