cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-sqlite-2.sqlitePlugin",
    "file": "plugins/cordova-plugin-sqlite-2/dist/sqlite-plugin.js",
    "pluginId": "cordova-plugin-sqlite-2",
    "clobbers": [
      "sqlitePlugin"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-sqlite-2": "1.0.6",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-sqlite-storage": "3.2.0"
};
// BOTTOM OF METADATA
});