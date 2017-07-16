cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-spinner.SpinnerPlugin",
        "file": "plugins/cordova-plugin-spinner/www/spinner-plugin.js",
        "pluginId": "cordova-plugin-spinner",
        "clobbers": [
            "SpinnerPlugin"
        ]
    },
    {
        "id": "com.greybax.spinnerdialog.SpinnerDialog",
        "file": "plugins/com.greybax.spinnerdialog/www/SpinnerDialog.js",
        "pluginId": "com.greybax.spinnerdialog",
        "clobbers": [
            "SpinnerDialog"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-spinner": "1.1.0",
    "com.greybax.spinnerdialog": "1.0.8",
    "cordova-plugin-dialogs": "1.3.3",
    "cordova-plugin-fullscreen": "1.1.0",
    "cordova-plugin-statusbar": "2.2.3"
};
// BOTTOM OF METADATA
});