(function(){function r(c,d,l){function o(e,n){if(!d[e]){if(!c[e]){var t="function"==typeof require&&require
if(!n&&t)return t(e,!0)
if(a)return a(e,!0)
var i=new Error("Cannot find module '"+e+"'")
throw i.code="MODULE_NOT_FOUND",i}var s=d[e]={exports:{}}
c[e][0].call(s.exports,function(n){return o(c[e][1][n]||n)},s,s.exports,r,c,d,l)}return d[e].exports}for(var a="function"==typeof require&&require,n=0;n<l.length;n++)o(l[n])
return o}return r})()({1:[function(o,n,e){"use strict"
var i=["continentDataSet"]
function initChannel(o,e){var n=e.url
var t=document.createElement("iframe")
e.loading=[]
t.addEventListener("load",function(){e.win=t.contentWindow
var o=e.loading
e.loading=null
for(var n=0;n<o.length;++n)o[n]()})
t.setAttribute("src",""+n+o.container)
t.setAttribute("style","visibility:hidden; position:absolute; left:0; top:0; height:0; width:0; border:none;")
document.body.appendChild(t)}function tryConnect(o,n){if(n.loading)n.loading.push(function(){n.win.postMessage({msg:"connect"},n.url)})
else n.win.postMessage({msg:"connect"},n.url)}function ModAPI(o){var t=this
t.container=(o=o||{}).container||"modapi/worlds_mod_api_messenger.html"
t.hosts=o.hosts||{"Worlds FRVR":"https://worlds.frvr.com/","Worlds FRVR (Staging)":"https://worlds.staging.frvr.com/","Worlds FRVR (Facebook)":"https://apps-649638655530792.apps.fbsbx.com/instant-bundle/3035771783141389/2964705566971715/"}
if("undefined"===typeof BroadcastChannel){console.error("WorldsModAPI: BroadcastChannel support required")
t.err="ModAPI requires BroadcastChannel support"
return}t.events={}
t.is_connected=null;(i=o.pcalls||i).forEach(function(n){t[n]=function(o){return t.call(n,o)}})
window.addEventListener("message",function(o){var n=t.hosts_by_origin[o.origin]
if(!n);else{var e=o.data.msg
if("connect_ack"===e)if(t.is_connected)console.log("WorldsModAPI: ignored connection from",o.origin,"(already connected)")
else{t.is_connected=n.name
n.connected=true
console.log("WorldsModAPI: connected to",n.name,"("+n.url+")")
t.emit("connected",n.name)}else if("new_client"===e)if(t.is_connected)console.log("WorldsModAPI: ignored message",e,"from",o.origin,"(already connected)")
else{console.log("WorldsModAPI: received message",e,"from",o.origin,"attempting to connect")
tryConnect(t,n)}else if(!n.connected)console.log("WorldsModAPI: ignored message",e,"from",o.origin,"(not connected)")
else{console.log("WorldsModAPI: received message",e,"from",o.origin)
switch(e){case"disconnect":t.is_connected=null
n.connected=false
console.log("WorldsModAPI: disconnected from",n.name)
t.emit("disconnected",n.name)
setTimeout(function(){if(!t.is_connected){console.log("WorldsModAPI: attempting to reconnect to",o.origin)
tryConnect(t,n)}},1e3)
break
default:console.log("WorldsModAPI: ignored unknown message",e,"from",o.origin)}}}})
t.hosts_by_origin={}
for(var n in t.hosts)if(t.hosts.hasOwnProperty(n)){var e={name:n,url:t.hosts[n]}
var r=(t.hosts[n]=e).url
if(r.endsWith("/"))r=r.slice(0,-1)
t.hosts_by_origin[r]=e
initChannel(t,e)
tryConnect(t,e)}}ModAPI.prototype.connected=function(){return this.is_connected}
ModAPI.prototype.on=function(o,n){this.events[o]=this.events[o]||[]
this.events[o].push(n)}
ModAPI.prototype.emit=function(o,n){var e=this.events[o]
if(e)for(var t=0;t<e.length;++t)e[t](n)}
ModAPI.prototype.call=function(o,n){var e=this.hosts[this.is_connected]
if(!e)throw new Error("ModAPI not connected")
e.win.postMessage({msg:"pcall",proc:o,data:n},e.url)}
ModAPI.prototype.getError=function(){return this.err}
window.worldsModAPI=function(o){return new ModAPI(o)}},{}]},{},[1])

//# sourceMappingURL=worlds_mod_api.bundle.js.map
