/*global AntAdmin, Backbone*/

AntAdmin.Collections = AntAdmin.Collections || {};

(function () {
    'use strict';

    AntAdmin.Collections.Blog = Backbone.Collection.extend({

        model: AntAdmin.Models.Blog

    });

})();
