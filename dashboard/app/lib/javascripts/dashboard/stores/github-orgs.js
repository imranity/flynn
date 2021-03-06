//= require ../store

(function () {
"use strict";

Dashboard.Stores.GithubOrgs = Dashboard.Store.createClass({
	displayName: "Stores.GithubOrgs",

	getState: function () {
		return this.state;
	},

	getInitialState: function () {
		return {
			orgs: []
		};
	},

	didBecomeActive: function () {
		this.__fetchOrgs();
	},

	__fetchOrgs: function () {
		Dashboard.githubClient.getOrgs().then(function (args) {
			var res = args[0];
			this.setState({
				orgs: res.map(this.__rewriteJSON)
			});
		}.bind(this));
	},

	__rewriteJSON: function (orgJSON) {
		return {
			id: orgJSON.id,
			avatarURL: orgJSON.avatar_url,
			login: orgJSON.login
		};
	}
});

})();
