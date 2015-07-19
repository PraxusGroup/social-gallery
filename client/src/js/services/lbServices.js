(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Person
 * @header lbServices.Person
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Person` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Person",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/people/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$__findById__accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$__updateById__accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favorites.findById() instead.
        "prototype$__findById__favorites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favorites/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.favorites.destroyById() instead.
        "prototype$__destroyById__favorites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favorites/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favorites.updateById() instead.
        "prototype$__updateById__favorites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favorites/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.social.findById() instead.
        "prototype$__findById__social": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/social/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.social.destroyById() instead.
        "prototype$__destroyById__social": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/social/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.social.updateById() instead.
        "prototype$__updateById__social": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/social/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.avatar() instead.
        "prototype$__get__avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "GET"
        },

        // INTERNAL. Use Person.avatar.create() instead.
        "prototype$__create__avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "POST"
        },

        // INTERNAL. Use Person.avatar.update() instead.
        "prototype$__update__avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "PUT"
        },

        // INTERNAL. Use Person.avatar.destroy() instead.
        "prototype$__destroy__avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "DELETE"
        },

        // INTERNAL. Use Person.media.findById() instead.
        "prototype$__findById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/media/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.media.destroyById() instead.
        "prototype$__destroyById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/media/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.media.updateById() instead.
        "prototype$__updateById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/media/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favoriteMedia.findById() instead.
        "prototype$__findById__favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.favoriteMedia.destroyById() instead.
        "prototype$__destroyById__favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favoriteMedia.updateById() instead.
        "prototype$__updateById__favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favoriteMedia.link() instead.
        "prototype$__link__favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favoriteMedia.unlink() instead.
        "prototype$__unlink__favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favoriteMedia.exists() instead.
        "prototype$__exists__favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$__get__accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries accessTokens of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/people/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$__create__accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/people/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$__delete__accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/people/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$__count__accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Counts accessTokens of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/people/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Person.favorites() instead.
        "prototype$__get__favorites": {
          isArray: true,
          url: urlBase + "/people/:id/favorites",
          method: "GET"
        },

        // INTERNAL. Use Person.favorites.create() instead.
        "prototype$__create__favorites": {
          url: urlBase + "/people/:id/favorites",
          method: "POST"
        },

        // INTERNAL. Use Person.favorites.destroyAll() instead.
        "prototype$__delete__favorites": {
          url: urlBase + "/people/:id/favorites",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favorites.count() instead.
        "prototype$__count__favorites": {
          url: urlBase + "/people/:id/favorites/count",
          method: "GET"
        },

        // INTERNAL. Use Person.social() instead.
        "prototype$__get__social": {
          isArray: true,
          url: urlBase + "/people/:id/social",
          method: "GET"
        },

        // INTERNAL. Use Person.social.create() instead.
        "prototype$__create__social": {
          url: urlBase + "/people/:id/social",
          method: "POST"
        },

        // INTERNAL. Use Person.social.destroyAll() instead.
        "prototype$__delete__social": {
          url: urlBase + "/people/:id/social",
          method: "DELETE"
        },

        // INTERNAL. Use Person.social.count() instead.
        "prototype$__count__social": {
          url: urlBase + "/people/:id/social/count",
          method: "GET"
        },

        // INTERNAL. Use Person.media() instead.
        "prototype$__get__media": {
          isArray: true,
          url: urlBase + "/people/:id/media",
          method: "GET"
        },

        // INTERNAL. Use Person.media.create() instead.
        "prototype$__create__media": {
          url: urlBase + "/people/:id/media",
          method: "POST"
        },

        // INTERNAL. Use Person.media.destroyAll() instead.
        "prototype$__delete__media": {
          url: urlBase + "/people/:id/media",
          method: "DELETE"
        },

        // INTERNAL. Use Person.media.count() instead.
        "prototype$__count__media": {
          url: urlBase + "/people/:id/media/count",
          method: "GET"
        },

        // INTERNAL. Use Person.favoriteMedia() instead.
        "prototype$__get__favoriteMedia": {
          isArray: true,
          url: urlBase + "/people/:id/favoriteMedia",
          method: "GET"
        },

        // INTERNAL. Use Person.favoriteMedia.create() instead.
        "prototype$__create__favoriteMedia": {
          url: urlBase + "/people/:id/favoriteMedia",
          method: "POST"
        },

        // INTERNAL. Use Person.favoriteMedia.destroyAll() instead.
        "prototype$__delete__favoriteMedia": {
          url: urlBase + "/people/:id/favoriteMedia",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favoriteMedia.count() instead.
        "prototype$__count__favoriteMedia": {
          url: urlBase + "/people/:id/favoriteMedia/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#create
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/people",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#createMany
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/people",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#upsert
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/people",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#exists
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/people/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#findById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/people/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#find
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/people",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#findOne
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/people/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#updateAll
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/people/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#deleteById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/people/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#count
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/people/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$updateAttributes
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/people/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#createChangeStream
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/people/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#login
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/people/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#logout
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/people/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#confirm
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/people/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#resetPassword
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/people/reset",
          method: "POST"
        },

        // INTERNAL. Use Favorite.person() instead.
        "::get::Favorite::person": {
          url: urlBase + "/favorites/:id/person",
          method: "GET"
        },

        // INTERNAL. Use Metadata.person() instead.
        "::get::Metadata::person": {
          url: urlBase + "/metadata/:id/person",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#getCurrent
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/people" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Person#updateOrCreate
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Person#update
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Person#destroyById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Person#removeById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Person#getCachedCurrent
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Person#login} or
         * {@link lbServices.Person#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Person instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Person#isAuthenticated
         * @methodOf lbServices.Person
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Person#getCurrentId
         * @methodOf lbServices.Person
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Person#modelName
    * @propertyOf lbServices.Person
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Person`.
    */
    R.modelName = "Person";

    /**
     * @ngdoc object
     * @name lbServices.Person.favorites
     * @header lbServices.Person.favorites
     * @object
     * @description
     *
     * The object `Person.favorites` groups methods
     * manipulating `Favorite` instances related to `Person`.
     *
     * Call {@link lbServices.Person#favorites Person.favorites()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#favorites
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries favorites of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        R.favorites = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::get::Person::favorites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favorites#count
         * @methodOf lbServices.Person.favorites
         *
         * @description
         *
         * Counts favorites of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.favorites.count = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::count::Person::favorites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favorites#create
         * @methodOf lbServices.Person.favorites
         *
         * @description
         *
         * Creates a new instance in favorites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        R.favorites.create = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::create::Person::favorites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favorites#createMany
         * @methodOf lbServices.Person.favorites
         *
         * @description
         *
         * Creates a new instance in favorites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        R.favorites.createMany = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::createMany::Person::favorites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favorites#destroyAll
         * @methodOf lbServices.Person.favorites
         *
         * @description
         *
         * Deletes all favorites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favorites.destroyAll = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::delete::Person::favorites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favorites#destroyById
         * @methodOf lbServices.Person.favorites
         *
         * @description
         *
         * Delete a related item by id for favorites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favorites
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favorites.destroyById = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::destroyById::Person::favorites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favorites#findById
         * @methodOf lbServices.Person.favorites
         *
         * @description
         *
         * Find a related item by id for favorites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favorites
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        R.favorites.findById = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::findById::Person::favorites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favorites#updateById
         * @methodOf lbServices.Person.favorites
         *
         * @description
         *
         * Update a related item by id for favorites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favorites
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        R.favorites.updateById = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::updateById::Person::favorites"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Person.social
     * @header lbServices.Person.social
     * @object
     * @description
     *
     * The object `Person.social` groups methods
     * manipulating `Social` instances related to `Person`.
     *
     * Call {@link lbServices.Person#social Person.social()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#social
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries social of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        R.social = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::get::Person::social"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.social#count
         * @methodOf lbServices.Person.social
         *
         * @description
         *
         * Counts social of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.social.count = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::count::Person::social"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.social#create
         * @methodOf lbServices.Person.social
         *
         * @description
         *
         * Creates a new instance in social of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        R.social.create = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::create::Person::social"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.social#createMany
         * @methodOf lbServices.Person.social
         *
         * @description
         *
         * Creates a new instance in social of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        R.social.createMany = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::createMany::Person::social"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.social#destroyAll
         * @methodOf lbServices.Person.social
         *
         * @description
         *
         * Deletes all social of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.social.destroyAll = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::delete::Person::social"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.social#destroyById
         * @methodOf lbServices.Person.social
         *
         * @description
         *
         * Delete a related item by id for social.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for social
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.social.destroyById = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::destroyById::Person::social"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.social#findById
         * @methodOf lbServices.Person.social
         *
         * @description
         *
         * Find a related item by id for social.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for social
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        R.social.findById = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::findById::Person::social"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.social#updateById
         * @methodOf lbServices.Person.social
         *
         * @description
         *
         * Update a related item by id for social.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for social
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        R.social.updateById = function() {
          var TargetResource = $injector.get("Social");
          var action = TargetResource["::updateById::Person::social"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Person.avatar
     * @header lbServices.Person.avatar
     * @object
     * @description
     *
     * The object `Person.avatar` groups methods
     * manipulating `Metadata` instances related to `Person`.
     *
     * Call {@link lbServices.Person#avatar Person.avatar()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#avatar
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Fetches hasOne relation avatar.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.avatar = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::get::Person::avatar"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.avatar#create
         * @methodOf lbServices.Person.avatar
         *
         * @description
         *
         * Creates a new instance in avatar of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.avatar.create = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::create::Person::avatar"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.avatar#createMany
         * @methodOf lbServices.Person.avatar
         *
         * @description
         *
         * Creates a new instance in avatar of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.avatar.createMany = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::createMany::Person::avatar"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.avatar#destroy
         * @methodOf lbServices.Person.avatar
         *
         * @description
         *
         * Deletes avatar of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.avatar.destroy = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::destroy::Person::avatar"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.avatar#update
         * @methodOf lbServices.Person.avatar
         *
         * @description
         *
         * Update avatar of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.avatar.update = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::update::Person::avatar"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Person.media
     * @header lbServices.Person.media
     * @object
     * @description
     *
     * The object `Person.media` groups methods
     * manipulating `Metadata` instances related to `Person`.
     *
     * Call {@link lbServices.Person#media Person.media()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#media
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries media of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.media = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::get::Person::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.media#count
         * @methodOf lbServices.Person.media
         *
         * @description
         *
         * Counts media of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.media.count = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::count::Person::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.media#create
         * @methodOf lbServices.Person.media
         *
         * @description
         *
         * Creates a new instance in media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.media.create = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::create::Person::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.media#createMany
         * @methodOf lbServices.Person.media
         *
         * @description
         *
         * Creates a new instance in media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.media.createMany = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::createMany::Person::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.media#destroyAll
         * @methodOf lbServices.Person.media
         *
         * @description
         *
         * Deletes all media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.media.destroyAll = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::delete::Person::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.media#destroyById
         * @methodOf lbServices.Person.media
         *
         * @description
         *
         * Delete a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.media.destroyById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::destroyById::Person::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.media#findById
         * @methodOf lbServices.Person.media
         *
         * @description
         *
         * Find a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.media.findById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::findById::Person::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.media#updateById
         * @methodOf lbServices.Person.media
         *
         * @description
         *
         * Update a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.media.updateById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::updateById::Person::media"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Person.favoriteMedia
     * @header lbServices.Person.favoriteMedia
     * @object
     * @description
     *
     * The object `Person.favoriteMedia` groups methods
     * manipulating `Metadata` instances related to `Person`.
     *
     * Call {@link lbServices.Person#favoriteMedia Person.favoriteMedia()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#favoriteMedia
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries favoriteMedia of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favoriteMedia = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::get::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#count
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Counts favoriteMedia of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.favoriteMedia.count = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::count::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#create
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Creates a new instance in favoriteMedia of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favoriteMedia.create = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::create::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#createMany
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Creates a new instance in favoriteMedia of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favoriteMedia.createMany = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::createMany::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#destroyAll
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Deletes all favoriteMedia of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favoriteMedia.destroyAll = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::delete::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#destroyById
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Delete a related item by id for favoriteMedia.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favoriteMedia
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favoriteMedia.destroyById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::destroyById::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#exists
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Check the existence of favoriteMedia relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favoriteMedia
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favoriteMedia.exists = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::exists::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#findById
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Find a related item by id for favoriteMedia.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favoriteMedia
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favoriteMedia.findById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::findById::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#link
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Add a related item by id for favoriteMedia.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favoriteMedia
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favoriteMedia.link = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::link::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#unlink
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Remove the favoriteMedia relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favoriteMedia
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favoriteMedia.unlink = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::unlink::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.favoriteMedia#updateById
         * @methodOf lbServices.Person.favoriteMedia
         *
         * @description
         *
         * Update a related item by id for favoriteMedia.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favoriteMedia
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favoriteMedia.updateById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::updateById::Person::favoriteMedia"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Favorite
 * @header lbServices.Favorite
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Favorite` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Favorite",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/favorites/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Favorite.person() instead.
        "prototype$__get__person": {
          url: urlBase + "/favorites/:id/person",
          method: "GET"
        },

        // INTERNAL. Use Favorite.metadata() instead.
        "prototype$__get__metadata": {
          url: urlBase + "/favorites/:id/metadata",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#create
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/favorites",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#createMany
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/favorites",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#upsert
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/favorites",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#exists
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/favorites/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#findById
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/favorites/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#find
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/favorites",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#findOne
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/favorites/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#updateAll
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/favorites/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#deleteById
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/favorites/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#count
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/favorites/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#prototype$updateAttributes
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/favorites/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favorite#createChangeStream
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/favorites/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Person.favorites.findById() instead.
        "::findById::Person::favorites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favorites/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.favorites.destroyById() instead.
        "::destroyById::Person::favorites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favorites/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favorites.updateById() instead.
        "::updateById::Person::favorites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favorites/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favorites() instead.
        "::get::Person::favorites": {
          isArray: true,
          url: urlBase + "/people/:id/favorites",
          method: "GET"
        },

        // INTERNAL. Use Person.favorites.create() instead.
        "::create::Person::favorites": {
          url: urlBase + "/people/:id/favorites",
          method: "POST"
        },

        // INTERNAL. Use Person.favorites.createMany() instead.
        "::createMany::Person::favorites": {
          isArray: true,
          url: urlBase + "/people/:id/favorites",
          method: "POST"
        },

        // INTERNAL. Use Person.favorites.destroyAll() instead.
        "::delete::Person::favorites": {
          url: urlBase + "/people/:id/favorites",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favorites.count() instead.
        "::count::Person::favorites": {
          url: urlBase + "/people/:id/favorites/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Favorite#updateOrCreate
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favorite` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Favorite#update
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Favorite#destroyById
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Favorite#removeById
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Favorite#modelName
    * @propertyOf lbServices.Favorite
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Favorite`.
    */
    R.modelName = "Favorite";


        /**
         * @ngdoc method
         * @name lbServices.Favorite#person
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Fetches belongsTo relation person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::Favorite::person"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Favorite#metadata
         * @methodOf lbServices.Favorite
         *
         * @description
         *
         * Fetches belongsTo relation metadata.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.metadata = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::get::Favorite::metadata"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Social
 * @header lbServices.Social
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Social` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Social",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/social/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Social#create
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/social",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#createMany
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/social",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#upsert
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/social",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#exists
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/social/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#findById
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/social/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#find
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/social",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#findOne
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/social/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#updateAll
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/social/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#deleteById
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/social/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#count
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/social/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#prototype$updateAttributes
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/social/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Social#createChangeStream
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/social/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Person.social.findById() instead.
        "::findById::Person::social": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/social/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.social.destroyById() instead.
        "::destroyById::Person::social": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/social/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.social.updateById() instead.
        "::updateById::Person::social": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/social/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.social() instead.
        "::get::Person::social": {
          isArray: true,
          url: urlBase + "/people/:id/social",
          method: "GET"
        },

        // INTERNAL. Use Person.social.create() instead.
        "::create::Person::social": {
          url: urlBase + "/people/:id/social",
          method: "POST"
        },

        // INTERNAL. Use Person.social.createMany() instead.
        "::createMany::Person::social": {
          isArray: true,
          url: urlBase + "/people/:id/social",
          method: "POST"
        },

        // INTERNAL. Use Person.social.destroyAll() instead.
        "::delete::Person::social": {
          url: urlBase + "/people/:id/social",
          method: "DELETE"
        },

        // INTERNAL. Use Person.social.count() instead.
        "::count::Person::social": {
          url: urlBase + "/people/:id/social/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Social#updateOrCreate
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Social` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Social#update
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Social#destroyById
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Social#removeById
         * @methodOf lbServices.Social
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Social#modelName
    * @propertyOf lbServices.Social
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Social`.
    */
    R.modelName = "Social";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Metadata
 * @header lbServices.Metadata
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Metadata` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Metadata",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/metadata/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Metadata.person() instead.
        "prototype$__get__person": {
          url: urlBase + "/metadata/:id/person",
          method: "GET"
        },

        // INTERNAL. Use Metadata.favorited.findById() instead.
        "prototype$__findById__favorited": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/metadata/:id/favorited/:fk",
          method: "GET"
        },

        // INTERNAL. Use Metadata.favorited.destroyById() instead.
        "prototype$__destroyById__favorited": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/metadata/:id/favorited/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Metadata.favorited.updateById() instead.
        "prototype$__updateById__favorited": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/metadata/:id/favorited/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Metadata.favorited() instead.
        "prototype$__get__favorited": {
          isArray: true,
          url: urlBase + "/metadata/:id/favorited",
          method: "GET"
        },

        // INTERNAL. Use Metadata.favorited.create() instead.
        "prototype$__create__favorited": {
          url: urlBase + "/metadata/:id/favorited",
          method: "POST"
        },

        // INTERNAL. Use Metadata.favorited.destroyAll() instead.
        "prototype$__delete__favorited": {
          url: urlBase + "/metadata/:id/favorited",
          method: "DELETE"
        },

        // INTERNAL. Use Metadata.favorited.count() instead.
        "prototype$__count__favorited": {
          url: urlBase + "/metadata/:id/favorited/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#create
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/metadata",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#createMany
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/metadata",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#upsert
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/metadata",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#exists
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/metadata/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#findById
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/metadata/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#find
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/metadata",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#findOne
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/metadata/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#updateAll
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/metadata/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#deleteById
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/metadata/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#count
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/metadata/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#prototype$updateAttributes
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/metadata/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Metadata#createChangeStream
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/metadata/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Person.avatar() instead.
        "::get::Person::avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "GET"
        },

        // INTERNAL. Use Person.avatar.create() instead.
        "::create::Person::avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "POST"
        },

        // INTERNAL. Use Person.avatar.createMany() instead.
        "::createMany::Person::avatar": {
          isArray: true,
          url: urlBase + "/people/:id/avatar",
          method: "POST"
        },

        // INTERNAL. Use Person.avatar.update() instead.
        "::update::Person::avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "PUT"
        },

        // INTERNAL. Use Person.avatar.destroy() instead.
        "::destroy::Person::avatar": {
          url: urlBase + "/people/:id/avatar",
          method: "DELETE"
        },

        // INTERNAL. Use Person.media.findById() instead.
        "::findById::Person::media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/media/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.media.destroyById() instead.
        "::destroyById::Person::media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/media/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.media.updateById() instead.
        "::updateById::Person::media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/media/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favoriteMedia.findById() instead.
        "::findById::Person::favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.favoriteMedia.destroyById() instead.
        "::destroyById::Person::favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favoriteMedia.updateById() instead.
        "::updateById::Person::favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favoriteMedia.link() instead.
        "::link::Person::favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.favoriteMedia.unlink() instead.
        "::unlink::Person::favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favoriteMedia.exists() instead.
        "::exists::Person::favoriteMedia": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/people/:id/favoriteMedia/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Person.media() instead.
        "::get::Person::media": {
          isArray: true,
          url: urlBase + "/people/:id/media",
          method: "GET"
        },

        // INTERNAL. Use Person.media.create() instead.
        "::create::Person::media": {
          url: urlBase + "/people/:id/media",
          method: "POST"
        },

        // INTERNAL. Use Person.media.createMany() instead.
        "::createMany::Person::media": {
          isArray: true,
          url: urlBase + "/people/:id/media",
          method: "POST"
        },

        // INTERNAL. Use Person.media.destroyAll() instead.
        "::delete::Person::media": {
          url: urlBase + "/people/:id/media",
          method: "DELETE"
        },

        // INTERNAL. Use Person.media.count() instead.
        "::count::Person::media": {
          url: urlBase + "/people/:id/media/count",
          method: "GET"
        },

        // INTERNAL. Use Person.favoriteMedia() instead.
        "::get::Person::favoriteMedia": {
          isArray: true,
          url: urlBase + "/people/:id/favoriteMedia",
          method: "GET"
        },

        // INTERNAL. Use Person.favoriteMedia.create() instead.
        "::create::Person::favoriteMedia": {
          url: urlBase + "/people/:id/favoriteMedia",
          method: "POST"
        },

        // INTERNAL. Use Person.favoriteMedia.createMany() instead.
        "::createMany::Person::favoriteMedia": {
          isArray: true,
          url: urlBase + "/people/:id/favoriteMedia",
          method: "POST"
        },

        // INTERNAL. Use Person.favoriteMedia.destroyAll() instead.
        "::delete::Person::favoriteMedia": {
          url: urlBase + "/people/:id/favoriteMedia",
          method: "DELETE"
        },

        // INTERNAL. Use Person.favoriteMedia.count() instead.
        "::count::Person::favoriteMedia": {
          url: urlBase + "/people/:id/favoriteMedia/count",
          method: "GET"
        },

        // INTERNAL. Use Favorite.metadata() instead.
        "::get::Favorite::metadata": {
          url: urlBase + "/favorites/:id/metadata",
          method: "GET"
        },

        // INTERNAL. Use Metadata.favorited.findById() instead.
        "::findById::Metadata::favorited": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/metadata/:id/favorited/:fk",
          method: "GET"
        },

        // INTERNAL. Use Metadata.favorited.destroyById() instead.
        "::destroyById::Metadata::favorited": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/metadata/:id/favorited/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Metadata.favorited.updateById() instead.
        "::updateById::Metadata::favorited": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/metadata/:id/favorited/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Metadata.favorited() instead.
        "::get::Metadata::favorited": {
          isArray: true,
          url: urlBase + "/metadata/:id/favorited",
          method: "GET"
        },

        // INTERNAL. Use Metadata.favorited.create() instead.
        "::create::Metadata::favorited": {
          url: urlBase + "/metadata/:id/favorited",
          method: "POST"
        },

        // INTERNAL. Use Metadata.favorited.createMany() instead.
        "::createMany::Metadata::favorited": {
          isArray: true,
          url: urlBase + "/metadata/:id/favorited",
          method: "POST"
        },

        // INTERNAL. Use Metadata.favorited.destroyAll() instead.
        "::delete::Metadata::favorited": {
          url: urlBase + "/metadata/:id/favorited",
          method: "DELETE"
        },

        // INTERNAL. Use Metadata.favorited.count() instead.
        "::count::Metadata::favorited": {
          url: urlBase + "/metadata/:id/favorited/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Metadata#updateOrCreate
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Metadata#update
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Metadata#destroyById
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Metadata#removeById
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Metadata#modelName
    * @propertyOf lbServices.Metadata
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Metadata`.
    */
    R.modelName = "Metadata";


        /**
         * @ngdoc method
         * @name lbServices.Metadata#person
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Fetches belongsTo relation person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::Metadata::person"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Metadata.favorited
     * @header lbServices.Metadata.favorited
     * @object
     * @description
     *
     * The object `Metadata.favorited` groups methods
     * manipulating `Metadata` instances related to `Metadata`.
     *
     * Call {@link lbServices.Metadata#favorited Metadata.favorited()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Metadata#favorited
         * @methodOf lbServices.Metadata
         *
         * @description
         *
         * Queries favorited of Metadata.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favorited = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::get::Metadata::favorited"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Metadata.favorited#count
         * @methodOf lbServices.Metadata.favorited
         *
         * @description
         *
         * Counts favorited of Metadata.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.favorited.count = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::count::Metadata::favorited"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Metadata.favorited#create
         * @methodOf lbServices.Metadata.favorited
         *
         * @description
         *
         * Creates a new instance in favorited of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favorited.create = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::create::Metadata::favorited"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Metadata.favorited#createMany
         * @methodOf lbServices.Metadata.favorited
         *
         * @description
         *
         * Creates a new instance in favorited of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favorited.createMany = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::createMany::Metadata::favorited"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Metadata.favorited#destroyAll
         * @methodOf lbServices.Metadata.favorited
         *
         * @description
         *
         * Deletes all favorited of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favorited.destroyAll = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::delete::Metadata::favorited"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Metadata.favorited#destroyById
         * @methodOf lbServices.Metadata.favorited
         *
         * @description
         *
         * Delete a related item by id for favorited.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for favorited
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favorited.destroyById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::destroyById::Metadata::favorited"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Metadata.favorited#findById
         * @methodOf lbServices.Metadata.favorited
         *
         * @description
         *
         * Find a related item by id for favorited.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for favorited
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favorited.findById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::findById::Metadata::favorited"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Metadata.favorited#updateById
         * @methodOf lbServices.Metadata.favorited
         *
         * @description
         *
         * Update a related item by id for favorited.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for favorited
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Metadata` object.)
         * </em>
         */
        R.favorited.updateById = function() {
          var TargetResource = $injector.get("Metadata");
          var action = TargetResource["::updateById::Metadata::favorited"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Media
 * @header lbServices.Media
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Media` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Media",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/media/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Media#getContainers
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/media",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#createContainer
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/media",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#destroyContainer
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/media/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#getContainer
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/media/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#getFiles
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/media/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#getFile
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/media/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#removeFile
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/media/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#upload
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/media/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Media#download
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/media/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Media#modelName
    * @propertyOf lbServices.Media
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Media`.
    */
    R.modelName = "Media";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
