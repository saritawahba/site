---
layout: page
show_meta: false
title: "Entries"
subheadline: "Travellers Entries"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/gallery/"
---

<div ng-controller="Firebase_cntrl">
    <ul ng-repeat="entry in entries">
    	{% raw %}
    	<li>{{entry.caption__text}}</li>
    	{% endraw %}
    </ul>
    <input ng-model="user.first"></input>
    <button ng-click="addTraveler(user)">Add Entry</button>
</div>
