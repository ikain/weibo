/**
 * Created by Admin on 2016/6/30.
 */
var Memcached = require('memcached');

dummy: function dummy(error, ok) { }

module.exports = {

    init: function ctor(server, opt) {
        console.log("memcached is initialized");
        memcached = new Memcached(server, opt);

        //memcached.on("failure", function (detail) {})
        //         .on('connect', function (detail) {})
        //         .on('reconnect', function (detail) {})
        //         .on('reconnecting', function (detail) {})
        //         .on('remove', function (detail) {})
        //         .on('issue', function (detail) {});
    },

    set: function addToCache(key, val, expire, callback) {
        if (!expire) expire = 5 * 60; //sec
        if (!callback) callback = dummy;
        memcached.set(key, val, expire, callback);
    },

    get: function getFromCache(key, callback) {
        if (!callback) callback = dummy;
        memcached.get(key, callback);
    }
};