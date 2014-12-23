var jade = jade || require('jade').runtime;

this["JST"] = this["JST"] || {};

this["JST"]["landing_page"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"view__landing_page\">\n  <div class=\"view__recipe_books\"></div>\n  <div class=\"view__crafter\"></div>\n</div>");;return buf.join("");
};

this["JST"]["recipe_books"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"view__recipe_books\">\n  <h1><img src=\"/images/bookshelf.png\"/>\n    <p>Recipe Books</p>\n  </h1>\n  <table class=\"books\">\n    <tr>\n      <td>&nbsp;</td>\n      <td>\n        <input placeholder=\"enter a URL to load another recipe book...\" class=\"recipe_book_url\"/>\n        <button class=\"recipe_book_load_button\">Load</button>\n      </td>\n    </tr>\n  </table>\n  <div class=\"load_error\">\n    <p></p>\n  </div>\n</div>");;return buf.join("");
};

this["JST"]["test"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<p>Hello world!</p>");;return buf.join("");
};

if (typeof exports === 'object' && exports) {module.exports = this["JST"];}