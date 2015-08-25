/*global AntAdmin, Backbone*/

AntAdmin.Models = AntAdmin.Models || {};

(function () {
    'use strict';

    AntAdmin.Models.Blog = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
