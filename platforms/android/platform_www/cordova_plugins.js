cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "ru.apps-m.curl.curl",
    "file": "plugins/ru.apps-m.curl/www/curl.js",
    "pluginId": "ru.apps-m.curl",
    "clobbers": [
      "curl"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "ru.apps-m.curl": "0.2.0"
};
// BOTTOM OF METADATA
});