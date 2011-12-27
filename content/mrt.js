/*
 content/settings.js
 Copyright © 2009, 2010, 2011  WOT Services Oy <info@mywot.com>

 This file is part of WOT.

 WOT is free software: you can redistribute it and/or modify it
 under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 WOT is distributed in the hope that it will be useful, but WITHOUT
 ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
 License for more details.

 You should have received a copy of the GNU General Public License
 along with WOT. If not, see <http://www.gnu.org/licenses/>.
 */

wot.mrt = {

	mrt_url_re : /^https?:\/\/www\.mywot\.com\/(\w+)\/user\/(\d+)\/massrate$/,

	inject : function(port, data) {

		console.log(arguments);

		var textareas = document.getElementsByName("websites");

		if(textareas.length < 1) return;

		var textarea = textareas[0];

		console.log(textarea);

		//console.log(wot.mrt.selection);


	},

	onload : function(_this) {

		// check if user on MRT page
		if(_this.mrt_url_re.test(window.location.href)) {
			console.log("We are on MRT Page");

			//document.addEventListener("DOMContentLoaded", _this.inject, false);

			wot.bind("mrt", "fill", _this.inject);
			wot.listen("mrt");

		}


	}
};

wot.mrt.onload(wot.mrt);