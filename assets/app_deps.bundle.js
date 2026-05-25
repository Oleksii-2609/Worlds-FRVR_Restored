!function r(o,i,a){function u(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require
if(!e&&n)return n(t,!0)
if(s)return s(t,!0)
throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return u(o[t][1][e]||e)},n,n.exports,r,o,i,a)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e])
return u}({1:[function(n,r,d){!function(o){!function(){"use strict"
!function(){function e(){this.init()}e.prototype={init:function(){var e=this||w
return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.safeToPlay=!1,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||w
if(e=parseFloat(e),t.ctx||f(),void 0!==e&&0<=e&&e<=1){if(t._volume=e,t._muted)return t
t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,w.ctx.currentTime)
for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var r=t._howls[n]._getSoundIds(),o=0;o<r.length;o++){var i=t._howls[n]._soundById(r[o])
i&&i._node&&(i._node.volume=i._volume*e)}return t}return t._volume},mute:function(e){var t=this||w
t.ctx||f(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,w.ctx.currentTime)
for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var r=t._howls[n]._getSoundIds(),o=0;o<r.length;o++){var i=t._howls[n]._soundById(r[o])
i&&i._node&&(i._node.muted=!!e||i._muted)}return t},stop:function(){for(var e=this||w,t=0;t<e._howls.length;t++)e._howls[t].stop()
return e},unload:function(){for(var e=this||w,t=e._howls.length-1;0<=t;t--)e._howls[t].unload()
return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,f()),e},codecs:function(e){return(this||w)._codecs[e.replace(/^x-/,"")]},_setup:function(){var t=this||w
if(t.state=t.ctx&&t.ctx.state||"suspended","running"===t.state&&(t.safeToPlay=!0),t._autoSuspend(),!t.usingWebAudio)if("undefined"!=typeof Audio)try{void 0===(new Audio).oncanplaythrough&&(t._canPlayEvent="canplay")}catch(e){t.noAudio=!0}else t.noAudio=!0
try{(new Audio).muted&&(t.noAudio=!0)}catch(e){}return t.noAudio||t._setupCodecs(),t},_setupCodecs:function(){var e=this||w,t=null
try{t="undefined"!=typeof Audio?new Audio:null}catch(t){return e}if(!t||"function"!=typeof t.canPlayType)return e
var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r=(r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g))&&parseInt(r[0].split("/")[1],10)<33
return e._codecs={mp3:!(r||!n&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},manualUnlock:function(){var e=this||w
!e.noAudio&&e.unlockFunction&&e.unlockFunction()},_unlockAudio:function(){var s=this||w
s._audioUnlocked=!1,s.autoUnlock=!1,s.ctx&&(s._mobileUnloaded||44100===s.ctx.sampleRate||(s._mobileUnloaded=!0,s.unload())),s.ctx&&(s._scratchBuffer=s.ctx.createBuffer(1,1,22050))
var c=s.unlockFunction=function(e){for(;s._html5AudioPool.length<s.html5PoolSize;)try{var t=new Audio
t._unlocked=!0,s._releaseHtml5Audio(t)}catch(e){s.noAudio=!0
break}for(var n,r=0;r<s._howls.length;r++)if(!s._howls[r]._webAudio)for(var o=s._howls[r]._getSoundIds(),i=0;i<o.length;i++){var a=s._howls[r]._soundById(o[i])
a&&a._node&&!a._node._unlocked&&(a._node._unlocked=!0,a._node.load())}function u(){s._audioUnlocked=!0,s.safeToPlay=!0,s.unlockFunction=null,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",c,!0)
for(var e=0;e<s._howls.length;e++)s._howls[e]._emit("unlock")}s._autoResume(),s.ctx?((n=s.ctx.createBufferSource()).buffer=s._scratchBuffer,n.connect(s.ctx.destination),void 0===n.start?n.noteOn(0):n.start(0),"function"==typeof s.ctx.resume&&s.ctx.resume(),n.onended=function(){n.disconnect(0),u()}):u()}
return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",c,!0),s},_obtainHtml5Audio:function(){var e=this||w
return e._html5AudioPool.length?e._html5AudioPool.pop():new Audio},_releaseHtml5Audio:function(e){var t=this||w
return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this
if(!e.autoSuspend||!e.ctx||void 0===e.ctx.suspend||!w.usingWebAudio)return e
for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e
return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e},_autoResume:function(){var t=this
return t.ctx&&void 0!==t.ctx.resume&&w.usingWebAudio&&("running"===t.state&&t._suspendTimer?(clearTimeout(t._suspendTimer),t._suspendTimer=null):"suspended"===t.state?(t.ctx.resume().then(function(){t.state="running"
for(var e=0;e<t._howls.length;e++)t._howls[e]._emit("resume")}),t._suspendTimer&&(clearTimeout(t._suspendTimer),t._suspendTimer=null)):"suspending"===t.state&&(t._resumeAfterSuspend=!0)),t}}
function t(e){e.src&&0!==e.src.length?this.init(e):console.error("An array of source files must be passed with any new Howl.")}var w=new e
t.prototype={init:function(e){var t=this
return w.ctx||f(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhrWithCredentials=e.xhrWithCredentials||!1,t._xhrHeaders=e.xhrHeaders||null,t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=w.usingWebAudio&&!t._html5,w.autoUnlock&&w._unlockAudio(),w._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t.load(),t},load:function(){var e=this,t=null
if(w.noAudio)return e._emit("loaderror",null,"No audio support."),e
"string"==typeof e._src&&(e._src=[e._src])
for(var n,r,o=0;o<e._src.length;o++){if(e._format&&e._format[o])n=e._format[o]
else{if("string"!=typeof(r=e._src[o])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.")
continue}n=(n=(n=/^data:audio\/([^;,]+);/i.exec(r))||/\.([^.]+)$/.exec(r.split("?",1)[0]))&&n[1].toLowerCase()}if(n||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),n&&w.codecs(n)){t=e._src[o]
break}}return t?(e._src=t,e._state="loading","https:"===window.location.protocol&&"http:"===t.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new i(e),e._webAudio&&u(e)):e._emit("loaderror",null,"No codec support for selected audio sources."),e},play:function(t,n,r){var o=this,i=null
if("number"==typeof t)i=t,t=null
else{if("string"==typeof t&&"loaded"===o._state&&!o._sprite[t])return null
if(void 0===t&&(t="__default",!o._playLock)){for(var a=0,u=0;u<o._sounds.length;u++)o._sounds[u]._paused&&!o._sounds[u]._ended&&(a++,i=o._sounds[u]._id)
1===a?t=null:i=null}}var s=i?o._soundById(i):o._inactiveSound()
if(!s)return null
if(i&&!t&&(t=s._sprite||"__default"),"loaded"!==o._state){s._sprite=t,s._ended=!1
var c=s._id
return o._queue.push({event:"play",action:function(){o.play(c)}}),c}if(i&&!s._paused)return r||o._loadQueue("play"),s._id
o._webAudio&&w._autoResume()
var l=Math.max(0,0<s._seek?s._seek:o._sprite[t][0]/1e3),f=Math.max(0,(o._sprite[t][0]+o._sprite[t][1])/1e3-l),d=1e3*f/Math.abs(s._rate)
d+=500
var h=o._sprite[t][0]/1e3,p=(o._sprite[t][0]+o._sprite[t][1])/1e3
s._sprite=t,s._ended=!1
var m=function(){s._paused=!1,s._seek=l,s._start=h,s._stop=p,s._loop=!(!s._loop&&!o._sprite[t][2])}
if(p<=l)return o._ended(s),null
var y,g,v="number"==typeof n?n:s._volume,_=s._node
return o._webAudio?(g=function(){o._playLock=!1,m(),o._refreshBuffer(s)
var e=s._muted||o._muted?0:v
_.gain.setValueAtTime(e,w.ctx.currentTime),s._playStart=w.ctx.currentTime,void 0===_.bufferSource.start?s._loop?_.bufferSource.noteGrainOn(0,l,86400):_.bufferSource.noteGrainOn(0,l,f):s._loop?_.bufferSource.start(0,l,86400):_.bufferSource.start(0,l,f),d!==1/0&&(o._endTimers[s._id]=setTimeout(o._ended.bind(o,s),d)),r||setTimeout(function(){o._emit("play",s._id),o._loadQueue()},0)},"running"===w.state?g():(o._playLock=!0,o.once("resume",g),o._clearTimer(s._id))):(y=function(){_.currentTime=l,_.muted=s._muted||o._muted||w._muted||_.muted,_.volume=v*w.volume(),_.playbackRate=s._rate
try{var e=_.play()
if(e&&"undefined"!=typeof Promise&&(e instanceof Promise||"function"==typeof e.then)?(o._playLock=!0,m(),e.then(function(){o._playLock=!1,_._unlocked=!0,r||(o._emit("play",s._id),o._loadQueue())}).catch(function(){o._playLock=!1,o._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),s._ended=!0,s._paused=!0})):r||(o._playLock=!1,m(),o._emit("play",s._id),o._loadQueue()),_.playbackRate=s._rate,_.paused)return void o._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.")
"__default"!==t||s._loop?o._endTimers[s._id]=setTimeout(o._ended.bind(o,s),d):(o._endTimers[s._id]=function(){o._ended(s),_.removeEventListener("ended",o._endTimers[s._id],!1)},_.addEventListener("ended",o._endTimers[s._id],!1))}catch(e){o._emit("playerror",s._id,e)}},"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===_.src&&(_.src=o._src,_.load()),g=window&&window.ejecta||!_.readyState&&w._navigator.isCocoonJS,3<=_.readyState||g?y():(o._playLock=!0,g=function e(){y(),_.removeEventListener(w._canPlayEvent,e,!1)},_.addEventListener(w._canPlayEvent,g,!1),o._clearTimer(s._id))),s._id},pause:function(e){var t=this
if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t
for(var n=t._getSoundIds(e),r=0;r<n.length;r++){t._clearTimer(n[r])
var o=t._soundById(n[r])
if(o&&!o._paused&&(o._seek=t.seek(n[r]),o._rateSeek=0,o._paused=!0,t._stopFade(n[r]),o._node))if(t._webAudio){if(!o._node.bufferSource)continue
void 0===o._node.bufferSource.stop?o._node.bufferSource.noteOff(0):o._node.bufferSource.stop(0),t._cleanBuffer(o._node)}else isNaN(o._node.duration)&&o._node.duration!==1/0||o._node.pause()
arguments[1]||t._emit("pause",o?o._id:null)}return t},stop:function(e,t){var n=this
if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n
for(var r=n._getSoundIds(e),o=0;o<r.length;o++){n._clearTimer(r[o])
var i=n._soundById(r[o])
i&&(i._seek=i._start||0,i._rateSeek=0,i._paused=!0,i._ended=!0,n._stopFade(r[o]),i._node&&(n._webAudio?i._node.bufferSource&&(void 0===i._node.bufferSource.stop?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),n._cleanBuffer(i._node)):isNaN(i._node.duration)&&i._node.duration!==1/0||(i._node.currentTime=i._start||0,i._node.pause(),i._node.duration===1/0&&n._clearSound(i._node))),t||n._emit("stop",i._id))}return n},mute:function(e,t){var n=this
if("loaded"!==n._state||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n
if(void 0===t){if("boolean"!=typeof e)return n._muted
n._muted=e}for(var r=n._getSoundIds(t),o=0;o<r.length;o++){var i=n._soundById(r[o])
i&&(i._muted=e,i._interval&&n._stopFade(i._id),n._webAudio&&i._node?i._node.gain.setValueAtTime(e?0:i._volume,w.ctx.currentTime):i._node&&(i._node.muted=!!w._muted||e),n._emit("mute",i._id))}return n},volume:function(){var e,t,n=this,r=arguments
if(0===r.length)return n._volume
if(1===r.length||2===r.length&&void 0===r[1]?0<=n._getSoundIds().indexOf(r[0])?o=parseInt(r[0],10):e=parseFloat(r[0]):2<=r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10)),!(void 0!==e&&0<=e&&e<=1))return(t=o?n._soundById(o):n._sounds[0])?t._volume:0
if("loaded"!==n._state||n._playLock)return n._queue.push({event:"volume",action:function(){n.volume.apply(n,r)}}),n
void 0===o&&(n._volume=e)
for(var o=n._getSoundIds(o),i=0;i<o.length;i++)(t=n._soundById(o[i]))&&(t._volume=e,r[2]||n._stopFade(o[i]),n._webAudio&&t._node&&!t._muted?t._node.gain.setValueAtTime(e,w.ctx.currentTime):t._node&&!t._muted&&(t._node.volume=e*w.volume()),n._emit("volume",t._id))
return n},fade:function(e,t,n,r){var o=this
if("loaded"!==o._state||o._playLock)return o._queue.push({event:"fade",action:function(){o.fade(e,t,n,r)}}),o
e=parseFloat(e),t=parseFloat(t),n=parseFloat(n),o.volume(e,r)
for(var i=o._getSoundIds(r),a=0;a<i.length;a++){var u,s,c=o._soundById(i[a])
c&&(r||o._stopFade(i[a]),o._webAudio&&!c._muted&&(s=(u=w.ctx.currentTime)+n/1e3,c._volume=e,c._node.gain.setValueAtTime(e,u),c._node.gain.linearRampToValueAtTime(t,s)),o._startFadeInterval(c,e,t,n,i[a],void 0===r))}return o},_startFadeInterval:function(t,n,r,o,e,i){var a=this,u=n,s=r-n,c=Math.abs(s/.01),c=Math.max(4,0<c?o/c:o),l=Date.now()
t._fadeTo=r,t._interval=setInterval(function(){var e=(Date.now()-l)/o
l=Date.now(),u+=s*e,u=Math.max(0,u),u=Math.min(1,u),u=Math.round(100*u)/100,a._webAudio?t._volume=u:a.volume(u,t._id,!0),i&&(a._volume=u),(r<n&&u<=r||n<r&&r<=u)&&(clearInterval(t._interval),t._interval=null,t._fadeTo=null,a.volume(r,t._id),a._emit("fade",t._id))},c)},_stopFade:function(e){var t=this,n=t._soundById(e)
return n&&n._interval&&(t._webAudio&&n._node.gain.cancelScheduledValues(w.ctx.currentTime),clearInterval(n._interval),n._interval=null,t.volume(n._fadeTo,e),n._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e,t,n,r=this,o=arguments
if(0===o.length)return r._loop
if(1===o.length){if("boolean"!=typeof o[0])return!!(n=r._soundById(parseInt(o[0],10)))&&n._loop
r._loop=e=o[0]}else 2===o.length&&(e=o[0],t=parseInt(o[1],10))
for(var i=r._getSoundIds(t),a=0;a<i.length;a++)(n=r._soundById(i[a]))&&(n._loop=e,r._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e)&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop))
return r},rate:function(){var e,t=this,n=arguments
if(0===n.length?i=t._sounds[0]._id:1===n.length?0<=t._getSoundIds().indexOf(n[0])?i=parseInt(n[0],10):e=parseFloat(n[0]):2===n.length&&(e=parseFloat(n[0]),i=parseInt(n[1],10)),"number"!=typeof e)return((o=t._soundById(i))||t)._rate
if("loaded"!==t._state||t._playLock)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,n)}}),t
void 0===i&&(t._rate=e)
for(var r,o,i=t._getSoundIds(i),a=0;a<i.length;a++)(o=t._soundById(i[a]))&&(t.playing(i[a])&&(o._rateSeek=t.seek(i[a]),o._playStart=t._webAudio?w.ctx.currentTime:o._playStart),o._rate=e,t._webAudio&&o._node&&o._node.bufferSource?o._node.bufferSource.playbackRate.setValueAtTime(e,w.ctx.currentTime):o._node&&(o._node.playbackRate=e),r=t.seek(i[a]),r=1e3*((t._sprite[o._sprite][0]+t._sprite[o._sprite][1])/1e3-r)/Math.abs(o._rate),!t._endTimers[i[a]]&&o._paused||(t._clearTimer(i[a]),t._endTimers[i[a]]=setTimeout(t._ended.bind(t,o),r)),t._emit("rate",o._id))
return t},seek:function(){var t,n,r=this,o=arguments
if(0===o.length?n=r._sounds[0]._id:1===o.length?0<=r._getSoundIds().indexOf(o[0])?n=parseInt(o[0],10):r._sounds.length&&(n=r._sounds[0]._id,t=parseFloat(o[0])):2===o.length&&(t=parseFloat(o[0]),n=parseInt(o[1],10)),void 0===n)return r
if("loaded"!==r._state||r._playLock)return r._queue.push({event:"seek",action:function(){r.seek.apply(r,o)}}),r
var i=r._soundById(n)
if(i){if(!("number"==typeof t&&0<=t)){if(r._webAudio){var a=r.playing(n)?w.ctx.currentTime-i._playStart:0,u=i._rateSeek?i._rateSeek-i._seek:0
return i._seek+(u+a*Math.abs(i._rate))}return i._node.currentTime}var s=r.playing(n)
s&&r.pause(n,!0),i._seek=t,i._ended=!1,r._clearTimer(n),r._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=t)
var c=function(){r._emit("seek",n),s&&r.play(n,void 0,!0)}
s&&!r._webAudio?(i=function e(){r._playLock?setTimeout(e,0):c()},setTimeout(i,0)):c()}return r},playing:function(e){if("number"==typeof e)return!!(e=this._soundById(e))&&!e._paused
for(var t=0;t<this._sounds.length;t++)if(!this._sounds[t]._paused)return!0
return!1},duration:function(e){var t=this._duration
return(e=this._soundById(e))?this._sprite[e._sprite][1]/1e3:t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(w._canPlayEvent,t[n]._loadFn,!1),w._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id)
var r=w._howls.indexOf(e)
0<=r&&w._howls.splice(r,1)
for(var o=!0,n=0;n<w._howls.length;n++)if(w._howls[n]._src===e._src||0<=e._src.indexOf(w._howls[n]._src)){o=!1
break}return a&&o&&delete a[e._src],w.noAudio=!1,e._state="unloaded",e._sounds=[],null},on:function(e,t,n,r){e=this["_on"+e]
return"function"==typeof t&&e.push(r?{id:n,fn:t,once:r}:{id:n,fn:t}),this},off:function(e,t,n){var r=this,o=r["_on"+e],i=0
if("number"==typeof t&&(n=t,t=null),t||n)for(i=0;i<o.length;i++){var a=n===o[i].id
if(t===o[i].fn&&a||!t&&a){o.splice(i,1)
break}}else if(e)r["_on"+e]=[]
else for(var u=Object.keys(r),i=0;i<u.length;i++)0===u[i].indexOf("_on")&&Array.isArray(r[u[i]])&&(r[u[i]]=[])
return r},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var r=this,o=r["_on"+e],i=o.length-1;0<=i;i--)o[i].id&&o[i].id!==t&&"load"!==e||(setTimeout(function(e){e.call(this,t,n)}.bind(r,o[i].fn),0),o[i].once&&r.off(e,o[i].fn,o[i].id))
return r._loadQueue(e),r},_loadQueue:function(e){var t,n=this
return 0<n._queue.length&&((t=n._queue[0]).event===e&&(n._queue.shift(),n._loadQueue()),e||t.action()),n},_ended:function(e){var t=this,n=e._sprite
if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t
var r=!(!e._loop&&!t._sprite[n][2])
return t._emit("end",e._id),!t._webAudio&&r&&t.stop(e._id,!0).play(e._id),t._webAudio&&r&&(t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=w.ctx.currentTime,n=1e3*(e._stop-e._start)/Math.abs(e._rate),t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),n)),t._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),w._autoSuspend()),t._webAudio||r||t.stop(e._id,!0),t},_clearTimer:function(e){var t,n=this
return n._endTimers[e]&&("function"!=typeof n._endTimers[e]?clearTimeout(n._endTimers[e]):(t=n._soundById(e))&&t._node&&t._node.removeEventListener("ended",n._endTimers[e],!1),delete n._endTimers[e]),n},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t]
return null},_inactiveSound:function(){var e=this
e._drain()
for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset()
return new i(e)},_drain:function(){var e=this,t=e._pool,n=0,r=0
if(!(e._sounds.length<t)){for(r=0;r<e._sounds.length;r++)e._sounds[r]._ended&&n++
for(r=e._sounds.length-1;0<=r;r--){if(n<=t)return
e._sounds[r]._ended&&(e._webAudio&&e._sounds[r]._node&&e._sounds[r]._node.disconnect(0),e._sounds.splice(r,1),n--)}}},_getSoundIds:function(e){if(void 0!==e)return[e]
for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id)
return t},_refreshBuffer:function(e){return e._node.bufferSource=w.ctx.createBufferSource(),e._node.bufferSource.buffer=a[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,w.ctx.currentTime),this},_cleanBuffer:function(e){var t=w._navigator&&0<=w._navigator.vendor.indexOf("Apple")
if(w._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=w._scratchBuffer}catch(e){}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(w._navigator&&w._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}}
var i=function(e){this._parent=e,this.init()}
i.prototype={init:function(){var e=this,t=e._parent
return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++w._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,n=w._muted||e._muted||e._parent._muted?0:e._volume
return t._webAudio?(e._node=void 0===w.ctx.createGain?w.ctx.createGainNode():w.ctx.createGain(),e._node.gain.setValueAtTime(n,w.ctx.currentTime),e._node.paused=!0,e._node.connect(w.masterGain)):w.noAudio||(e._node=w._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(w._canPlayEvent,e._loadFn,!1),e._node.src=t._src,e._node.preload=t._html5?"metadata":"auto",e._node.volume=n*w.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent
return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++w._counter,e},_errorListener:function(){var e=this
e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this._parent
e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(w._canPlayEvent,this._loadFn,!1)}}
var a={},u=function(t){var e=t._src
if(a[e])return t._duration=a[e].duration,void l(t)
if(/^data:[^;]+;base64,/.test(e)){for(var n=atob(e.split(",")[1]),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o)
c(r.buffer,t)}else{var i=new XMLHttpRequest
i.open("GET",e,!0),i.withCredentials=t._xhrWithCredentials,i.responseType="arraybuffer",t._xhrHeaders&&Object.keys(t._xhrHeaders).forEach(function(e){i.setRequestHeader(e,t._xhrHeaders[e])}),i.onload=function(){var e=(i.status+"")[0]
"0"===e||"2"===e||"3"===e?c(i.response,t):t._emit("loaderror",null,"Failed loading audio file with status: "+i.status+".")},i.onerror=function(){t._webAudio&&(t._html5=!0,t._webAudio=!1,t._sounds=[],delete a[e],t.load())},s(i)}},s=function(t){try{t.send()}catch(e){t.onerror()}},c=function(e,t){function n(){t._emit("loaderror",null,"Decoding audio data failed.")}function r(e){e&&0<t._sounds.length?(a[t._src]=e,l(t,e)):n()}"undefined"!=typeof Promise&&1===w.ctx.decodeAudioData.length?w.ctx.decodeAudioData(e).then(r).catch(n):w.ctx.decodeAudioData(e,r,n)},l=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},f=function(){if(w.usingWebAudio){try{"undefined"!=typeof AudioContext?w.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?w.ctx=new webkitAudioContext:w.usingWebAudio=!1}catch(e){w.usingWebAudio=!1}w.ctx||(w.usingWebAudio=!1)
var e=/iP(hone|od|ad)/.test(w._navigator&&w._navigator.platform),t=(t=w._navigator&&w._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))?parseInt(t[1],10):null
e&&t&&t<9&&(t=/safari/.test(w._navigator&&w._navigator.userAgent.toLowerCase()),w._navigator&&!t&&(w.usingWebAudio=!1)),w.usingWebAudio&&(w.masterGain=void 0===w.ctx.createGain?w.ctx.createGainNode():w.ctx.createGain(),w.masterGain||(w.usingWebAudio=!1),w.masterGain.gain.setValueAtTime(w._muted?0:w._volume,w.ctx.currentTime),w.masterGain.connect(w.ctx.destination)),w._setup()}}
"function"==typeof define&&define.amd&&define([],function(){return{Howler:w,Howl:t}}),void 0!==d&&(d.Howler=w,d.Howl=t),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=w,window.Howl=t,window.Sound=i):void 0!==o&&(o.HowlerGlobal=e,o.Howler=w,o.Howl=t,o.Sound=i)}()}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,y,x){!function(We){!function(){"use strict"
var e,t
e=void 0,t=function(){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function e(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function s(e,t,n){return(s=u()?Reflect.construct:function(e,t,n){var r=[null]
r.push.apply(r,t)
r=new(Function.bind.apply(e,r))
return n&&a(r,n.prototype),r}).apply(null,arguments)}function c(e){var n="function"==typeof Map?new Map:void 0
return(c=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==n){if(n.has(e))return n.get(e)
n.set(e,t)}function t(){return s(e,arguments,o(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),a(t,e)})(e)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function f(n){var r=u()
return function(){var e,t=o(n)
return l(this,r?(e=o(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,o,i=[],a=!0,u=!1
try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return p(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0
return{s:t=function(){},n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}var y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function b(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&r>=e.length?void 0:e)&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,o,i=n.call(e),a=[]
try{for(;(void 0===t||0<t--)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function v(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o])
return e.concat(r||Array.prototype.slice.call(t))}function _(e){return e<4?"short":4===e?"long":"narrow"}function w(e){return e%2==0?"2-digit":"numeric"}var x=function(){t(o,c(Error))
var r=f(o)
function o(e,t,n){return i(this,o),(e=r.call(this,e)).token=t,e.type=n||"error",e}return e(o)}()
function k(e,t){switch(e.field){case"era":return{era:_(e.width)}
case"year":return function(e,t){switch(e.char){case"y":return{year:w(e.width)}
case"r":return{calendar:"gregory",year:"numeric"}
default:return t("".concat(e.desc," is not supported; falling back to year:numeric"),x.WARNING),{year:"numeric"}}}(e,t)
case"month":return{month:function(e,t){switch(e.width){case 1:return"numeric"
case 2:return"2-digit"
case 3:return"short"
case 4:return"long"
case 5:return"narrow"
default:return void t("".concat(e.desc," is not supported with width ").concat(e.width))}}(e,t)}
case"day":return{day:function(e,t){var n=e.char,r=e.desc,e=e.width
if("d"===n)return w(e)
t("".concat(r," is not supported"))}(e,t)}
case"weekday":return{weekday:(r=t,o=(n=e).char,i=n.desc,n=n.width,("c"===o||"e"===o)&&n<3&&r("Numeric value is not supported for ".concat(i,"; falling back to weekday:short"),x.WARNING),_(n))}
case"period":return
case"hour":return function(e){var t,n=w(e.width)
switch(e.char){case"h":t="h12"
break
case"H":t="h23"
break
case"k":t="h24"
break
case"K":t="h11"}return t?{hour:n,hourCycle:t}:{hour:n}}(e)
case"min":return{minute:w(e.width)}
case"sec":return{second:w(e.width)}
case"tz":return{timeZoneName:function(e,t){var n=e.char,r=e.desc,o=e.width
switch(n){case"v":case"z":return 4===o?"long":"short"
case"V":return 4===o?"long":void t("".concat(r," is not supported with width ").concat(o))
case"X":return void t("".concat(r," is not supported"))}return"short"}(e,t)}
case"quarter":case"week":case"sec-frac":case"ms":t("".concat(e.desc," is not supported"))}var n,r,o,i}function S(e,t){var i,a=1<arguments.length&&void 0!==t?t:function(e){throw e},u={},s=[],n=m(e)
try{for(n.s();!(i=n.n()).done;)!function(){var e,n=i.value,t=n.error,r=n.field,o=n.str
t&&((e=new x(t.message,n)).stack=t.stack,a(e)),o&&(o="Ignoring string part: ".concat(o),a(new x(o,n,x.WARNING))),r&&(-1===s.indexOf(r)?s.push(r):a(new x("Duplicate ".concat(r," token"),n)));(r=k(n,function(e,t){return a(new x(e,n,t))}))&&Object.assign(u,r)}()}catch(e){n.e(e)}finally{n.f()}return u}function A(e){return"A"<=e&&e<="Z"||"a"<=e&&e<="z"}var F={G:{field:"era",desc:"Era"},y:{field:"year",desc:"Year"},Y:{field:"year",desc:'Year of "Week of Year"'},u:{field:"year",desc:"Extended year"},U:{field:"year",desc:"Cyclic year name"},r:{field:"year",desc:"Related Gregorian year"},Q:{field:"quarter",desc:"Quarter"},q:{field:"quarter",desc:"Stand-alone quarter"},M:{field:"month",desc:"Month in year"},L:{field:"month",desc:"Stand-alone month in year"},w:{field:"week",desc:"Week of year"},W:{field:"week",desc:"Week of month"},d:{field:"day",desc:"Day in month"},D:{field:"day",desc:"Day of year"},F:{field:"day",desc:"Day of week in month"},g:{field:"day",desc:"Modified julian day"},E:{field:"weekday",desc:"Day of week"},e:{field:"weekday",desc:"Local day of week"},c:{field:"weekday",desc:"Stand-alone local day of week"},a:{field:"period",desc:"AM/PM marker"},b:{field:"period",desc:"AM/PM/noon/midnight marker"},B:{field:"period",desc:"Flexible day period"},h:{field:"hour",desc:"Hour in AM/PM (1~12)"},H:{field:"hour",desc:"Hour in day (0~23)"},k:{field:"hour",desc:"Hour in day (1~24)"},K:{field:"hour",desc:"Hour in AM/PM (0~11)"},j:{field:"hour",desc:"Hour in preferred cycle"},J:{field:"hour",desc:"Hour in preferred cycle without marker"},C:{field:"hour",desc:"Hour in preferred cycle with flexible marker"},m:{field:"min",desc:"Minute in hour"},s:{field:"sec",desc:"Second in minute"},S:{field:"sec-frac",desc:"Fractional second"},A:{field:"ms",desc:"Milliseconds in day"},z:{field:"tz",desc:"Time Zone: specific non-location"},Z:{field:"tz",desc:"Time Zone"},O:{field:"tz",desc:"Time Zone: localized"},v:{field:"tz",desc:"Time Zone: generic non-location"},V:{field:"tz",desc:"Time Zone: ID"},X:{field:"tz",desc:"Time Zone: ISO8601 with Z"},x:{field:"tz",desc:"Time Zone: ISO8601"}}
function E(e,t){var n=e[t]
if(!n)return null
if(A(n))return function(e,t){for(var n=e[t],r=1;e[++t]===n;)++r
var o=F[n]
return o?{char:n,field:o.field,desc:o.desc,width:r}:(o="The letter ".concat(n," is not a valid field identifier"),{char:n,error:new Error(o),width:r})}(e,t)
if("'"===n)return function(e,t){var n=e[++t],r=2
if("'"===n)return{char:"'",str:n,width:r}
for(;;){var o=e[++t]
if(++r,void 0===o){var i="Unterminated quoted literal in pattern: ".concat(n||e)
return{char:"'",error:new Error(i),str:n,width:r}}if("'"===o){if("'"!==e[++t])return{char:"'",str:n,width:r};++r}n+=o}}(e,t)
for(var r=n,o=1;;){var i=e[++t]
if(!i||A(i)||"'"===i)return{char:n,str:r,width:o}
r+=i,o+=1}}function T(e){for(var t=[],n=0;;){var r=E(e,n)
if(!r)return t
t.push(r),n+=r.width}}var O=function(){t(r,c(Error))
var n=f(r)
function r(e,t){return i(this,r),(t=n.call(this,t)).code=e,t}return e(r)}(),N=function(){t(o,O)
var r=f(o)
function o(e,t){var n
return i(this,o),(n=r.call(this,"BAD_OPTION","Unknown ".concat(e," option: ").concat(t))).stem=e,n.option=t,n}return e(o)}(),j=function(){t(r,O)
var n=f(r)
function r(e){var t
return i(this,r),(t=n.call(this,"BAD_STEM","Unknown stem: ".concat(e))).stem=e,t}return e(r)}(),B=function(){t(o,O)
var r=f(o)
function o(e,t){var n
return i(this,o),(n=r.call(this,"MASKED_VALUE","Value for ".concat(e," is set multiple times"))).type=e,n.prev=t,n}return e(o)}(),I=function(){t(r,O)
var n=f(r)
function r(e){var t
return i(this,r),(t=n.call(this,"MISSING_OPTION","Required option missing for ".concat(e))).stem=e,t}return e(r)}(),D=function(){t(r,O)
var n=f(r)
function r(e,t){return i(this,r),(t=n.call(this,"BAD_PATTERN",t)).char=e,t}return e(r)}(),P=function(){t(o,O)
var r=f(o)
function o(e,t,n){i(this,o)
n=1<n?"".concat(n," options"):"one option"
return(n=r.call(this,"TOO_MANY_OPTIONS","Token ".concat(e," only supports ").concat(n," (got ").concat(t.length,")"))).stem=e,n.options=t,n}return e(o)}(),M=function(){t(o,O)
var r=f(o)
function o(e,t){var n
return i(this,o),(n=r.call(this,"UNSUPPORTED","The stem ".concat(e," is not supported"))).stem=e,t&&(n.message+=" with value ".concat(t),n.source=t),n}return e(o)}()
function q(e,t){var n=t.numberingSystem
return Array.isArray(e)||(e=[e]),n?e.map(function(e){var t=-1===e.indexOf("-u-")?"u-nu":"nu"
return"".concat(e,"-").concat(t,"-").concat(n)}).concat(e):e}function z(e){var t="number"==typeof(t=e.scale)&&0<=t?t:1
return(e=e.unit)&&"percent"===e.style&&(t*=.01),t}function L(e){var n=z(e),r=e.precision
return r&&"precision-increment"===r.style?function(e){return((t=+(t=e)+(e=r.increment)/2)-t%+e)*n
var t}:function(e){return e*n}}function R(e,n){function t(e,t){n&&n(new M(e,t))}var r,o=e.decimal,i=e.group,a=e.integerWidth,u=e.notation,s=e.precision,c=e.roundingMode,l=e.sign,f=e.unit,d=e.unitPer,h=e.unitWidth,p={}
if(f)switch(f.style){case"base-unit":p.style="decimal"
break
case"currency":p.style="currency",p.currency=f.currency
break
case"measure-unit":p.style="unit",p.unit=f.unit.replace(/.*-/,""),d&&(p.unit+="-per-"+d.replace(/.*-/,""))
break
case"percent":p.style="percent"
break
case"permille":t("permille")}switch(h){case"unit-width-full-name":p.currencyDisplay="name",p.unitDisplay="long"
break
case"unit-width-hidden":t(h)
break
case"unit-width-iso-code":p.currencyDisplay="code"
break
case"unit-width-narrow":p.currencyDisplay="narrowSymbol",p.unitDisplay="narrow"
break
case"unit-width-short":p.currencyDisplay="symbol",p.unitDisplay="short"}switch(i){case"group-off":p.useGrouping=!1
break
case"group-auto":p.useGrouping=!0
break
case"group-min2":case"group-on-aligned":case"group-thousands":t(i),p.useGrouping=!0}if(s)switch(s.style){case"precision-fraction":var m=s.minFraction,y=s.maxFraction,g=s.minSignificant,v=s.maxSignificant,_=s.source
"number"==typeof m&&(p.minimumFractionDigits=m,"number"==typeof g&&t("precision-fraction",_)),"number"==typeof y&&(p.maximumFractionDigits=y),"number"==typeof g&&(p.minimumSignificantDigits=g),"number"==typeof v&&(p.maximumSignificantDigits=v)
break
case"precision-integer":p.maximumFractionDigits=0
break
case"precision-unlimited":p.maximumFractionDigits=20
break
case"precision-increment":case"precision-currency-standard":break
case"precision-currency-cash":t(s.style)}if(u)switch(u.style){case"compact-short":p.notation="compact",p.compactDisplay="short"
break
case"compact-long":p.notation="compact",p.compactDisplay="long"
break
case"notation-simple":p.notation="standard"
break
case"scientific":case"engineering":var w=u.expDigits,b=u.expSign,x=u.source,k=u.style
p.notation=k,(w&&1<w||b&&"sign-auto"!==b)&&t(k,x)}switch(a&&(r=a.min,e=a.max,a=a.source,0<r&&(p.minimumIntegerDigits=r),0<Number(e)&&(r="engineering"===p.notation||"scientific"===p.notation,3===e&&r?p.notation="engineering":t("integer-width",a))),l){case"sign-auto":p.signDisplay="auto"
break
case"sign-always":p.signDisplay="always"
break
case"sign-except-zero":p.signDisplay="exceptZero"
break
case"sign-never":p.signDisplay="never"
break
case"sign-accounting":p.currencySign="accounting"
break
case"sign-accounting-always":p.currencySign="accounting",p.signDisplay="always"
break
case"sign-accounting-except-zero":p.currencySign="accounting",p.signDisplay="exceptZero"}return"decimal-always"===o&&t(o),c&&t(c),p}function U(e,t,n){var r=e[t]
switch(r){case"%":return{char:"%",style:"percent",width:1}
case"‰":return{char:"%",style:"permille",width:1}
case"¤":for(var o=1;"¤"===e[++t];)++o
switch(o){case 1:return{char:r,currency:"default",width:o}
case 2:return{char:r,currency:"iso-code",width:o}
case 3:return{char:r,currency:"full-name",width:o}
case 5:return{char:r,currency:"narrow",width:o}
default:var i="Invalid number (".concat(o,") of ¤ chars in pattern")
return n(new D("¤",i)),null}case"*":var a=e[t+1]
if(a)return{char:r,pad:a,width:2}
break
case"+":case"-":return{char:r,width:1}
case"'":var u=e[++t],s=2
if("'"===u)return{char:r,str:u,width:s}
for(;;){var c=e[++t]
if(++s,void 0===c){var l="Unterminated quoted literal in pattern: ".concat(u)
return n(new D("'",l)),{char:r,str:u,width:s}}if("'"===c){if("'"!==e[++t])return{char:r,str:u,width:s};++s}u+=c}}return null}function C(e){return"0"<=e&&e<="9"}function W(e,t){var n=e[t]
if(C(n))for(var r=n;;){var o=e[++t]
if(!C(o))return{char:"0",digits:r,width:r.length}
r+=o}switch(n){case"#":for(var i=1;"#"===e[++t];)++i
return{char:n,width:i}
case"@":for(var a=1;"@"===e[++t];)++a
var u=a
for(--t;"#"===e[++t];)++u
return{char:n,min:a,width:u}
case"E":var s="+"===e[t+1]
s&&++t
for(var c=0;"0"===e[++t];)++c
if(c)return{char:n,expDigits:c,plus:s,width:(s?2:1)+c}
break
case".":case",":return{char:n,width:1}}return null}function G(e,t,n){var r,o;(o=r=r||{})[o.Prefix=0]="Prefix",o[o.Number=1]="Number",o[o.Suffix=2]="Suffix"
for(var i=[],a=[],u=[],s=r.Prefix,c="";t<e.length;){var l=e[t]
if(";"===l){t+=1
break}switch(s){case r.Prefix:var f=U(e,t,n)
f?(c&&(i.push({char:"'",str:c,width:c.length}),c=""),i.push(f),t+=f.width):(f=W(e,t))?(c&&(i.push({char:"'",str:c,width:c.length}),c=""),s=r.Number,a.push(f),t+=f.width):(c+=l,t+=1)
break
case r.Number:var d=W(e,t)
d?(a.push(d),t+=d.width):s=r.Suffix
break
case r.Suffix:(d=U(e,t,n))?(c&&(u.push({char:"'",str:c,width:c.length}),c=""),u.push(d),t+=d.width):(c+=l,t+=1)}}return c&&u.push({char:"'",str:c,width:c.length}),{pattern:{prefix:i,number:a,suffix:u},pos:t}}function H(e,t,n,r,o){var i,a=!1,u="",s=m(e)
try{for(s.s();!(i=s.n()).done;){var c=i.value
switch(c.char){case"%":t.unit={style:c.style},o?a=!0:u=""
break
case"¤":if(!n){r(new D("¤","The ¤ pattern requires a currency"))
break}switch(t.unit={style:"currency",currency:n},c.currency){case"iso-code":t.unitWidth="unit-width-iso-code"
break
case"full-name":t.unitWidth="unit-width-full-name"
break
case"narrow":t.unitWidth="unit-width-narrow"}o?a=!0:u=""
break
case"*":break
case"+":a||(u+="+")
break
case"'":a||(u+=c.str)}}}catch(e){s.e(e)}finally{s.f()}return u}function $(e,t){var n,r=!1,o="",i=m(e)
try{for(i.s();!(n=i.n()).done;){var a=n.value
switch(a.char){case"%":case"¤":t?r=!0:o=""
break
case"-":r||(o+="-")
break
case"'":r||(o+=a.str)}}}catch(e){i.e(e)}finally{i.f()}return o}function J(e,t,n){var r=2<arguments.length&&void 0!==n?n:function(e){throw e},n=(i=(e=(n=G(i=e,0,o=r)).pattern,(n=n.pos)<i.length?{tokens:e,negative:G(i,n,o).pattern}:{tokens:e})).tokens,o=i.negative,e=function(e,t){for(var n={},r=!1,o=!1,i=0,a="",u=-1,s="",c=0,l=0;l<e.length;++l){var f=e[l]
switch(f.char){case"#":-1===u?(a&&t(new D("#","Pattern has # after integer digits")),i+=f.width):c+=f.width
break
case"0":-1===u?a+=f.digits:(c&&t(new D("0","Pattern has digits after # in fraction")),s+=f.digits)
break
case"@":n.precision&&t(new B("precision",n.precision)),n.precision={style:"precision-fraction",minSignificant:f.min,maxSignificant:f.width}
break
case",":r=!0
break
case".":1===u&&t(new D(".","Pattern has more than one decimal separator")),u=l
break
case"E":o&&t(new B("exponent",n.notation)),r&&t(new D("E","Exponential patterns may not contain grouping separators")),n.notation={style:"scientific"},1<f.expDigits&&(n.notation.expDigits=f.expDigits),f.plus&&(n.notation.expSign="sign-always"),o=!0}}r?n.group="group-auto":3<i+a.length&&(n.group="group-off")
var d=Number("".concat(a||"0",".").concat(s))
return d&&(n.precision={style:"precision-increment",increment:d}),o?(n.precision&&!d||(n.integerWidth=i?{min:1,max:i+a.length}:{min:Math.max(1,a.length)}),n.precision?d||(n.integerWidth={min:1,max:1}):(d=a.length+s.length,-1===u?0<d&&(n.precision={style:"precision-fraction",maxSignificant:d}):(n.precision={style:"precision-fraction",maxSignificant:Math.max(1,d)+c},1<d&&(n.precision.minSignificant=d)))):(1<a.length&&(n.integerWidth={min:a.length}),n.precision||!s.length&&!c||(n.precision={style:"precision-fraction",minFraction:s.length,maxFraction:s.length+c})),n}(n.number,r),i=H(n.prefix,e,t,r,!0),t=H(n.suffix,e,t,r,!1)
return o?(r=$(o.prefix,!0),o=$(o.suffix,!1),e.affix={pos:[i,t],neg:[r,o]},e.sign="sign-never"):(i||t)&&(e.affix={pos:[i,t]}),e}function Z(e){e=d(e.split("-",1),1)[0]
return-1!==["acceleration","angle","area","concentr","consumption","digital","duration","electric","energy","force","frequency","graphics","length","light","mass","power","pressure","speed","temperature","torque","volume"].indexOf(e)}var V={"compact-short":0,"compact-long":0,"notation-simple":0,scientific:2,engineering:2,percent:0,permille:0,"base-unit":0,currency:1,"measure-unit":1,"per-measure-unit":1,"unit-width-narrow":0,"unit-width-short":0,"unit-width-full-name":0,"unit-width-iso-code":0,"unit-width-hidden":0,"precision-integer":0,"precision-unlimited":0,"precision-currency-standard":0,"precision-currency-cash":0,"precision-increment":1,"rounding-mode-ceiling":0,"rounding-mode-floor":0,"rounding-mode-down":0,"rounding-mode-up":0,"rounding-mode-half-even":0,"rounding-mode-half-down":0,"rounding-mode-half-up":0,"rounding-mode-unnecessary":0,"integer-width":1,scale:1,"group-off":0,"group-min2":0,"group-auto":0,"group-on-aligned":0,"group-thousands":0,latin:0,"numbering-system":1,"sign-auto":0,"sign-always":0,"sign-never":0,"sign-accounting":0,"sign-accounting-always":0,"sign-except-zero":0,"sign-accounting-except-zero":0,"decimal-auto":0,"decimal-always":0},Q={currency:1,"integer-width":1,"measure-unit":1,"numbering-system":1,"per-measure-unit":1,"precision-increment":1,scale:1}
function K(e,t,n){if(e in V){var r=V[e]
if(t.length>r){if(0===r){var o,i=m(t)
try{for(i.s();!(o=i.n()).done;){var a=o.value
n(new N(e,a))}}catch(e){i.e(e)}finally{i.f()}}else n(new P(e,t,r))
return}if(e in Q&&t.length<Q[e])return void n(new I(e))}return 1}function Y(e,t){var n=e&&e.match("fraction"===t?/^\.(0*)(\+|#*)$/:/^(@+)(\+|#*)$/)
if(n){var r=n[1].length
switch(n[2].charAt(0)){case"":return{min:r,max:r}
case"+":return{min:r,max:null}
case"#":return{min:r,max:r+n[2].length}}}return null}var X=function(){function t(e){i(this,t),this.skeleton={},this.onError=e}return e(t,[{key:"badOption",value:function(e,t){this.onError(new N(e,t))}},{key:"assertEmpty",value:function(e){var t=this.skeleton[e]
t&&this.onError(new B(e,t))}},{key:"parseToken",value:function(e,t){if(K(e,t,this.onError)){var n=t[0],r=this.skeleton
switch(e){case"compact-short":case"compact-long":case"notation-simple":this.assertEmpty("notation"),r.notation={style:e}
break
case"scientific":case"engineering":var o,i=null,a=void 0,u=m(t)
try{for(u.s();!(o=u.n()).done;){var s=o.value
switch(s){case"sign-auto":case"sign-always":case"sign-never":case"sign-accounting":case"sign-accounting-always":case"sign-except-zero":case"sign-accounting-except-zero":a=s
break
default:/^\+e+$/.test(s)?i=s.length-1:this.badOption(e,s)}}}catch(e){u.e(e)}finally{u.f()}this.assertEmpty("notation")
var c=t.join("/")
r.notation=i&&a?{style:e,source:c,expDigits:i,expSign:a}:i?{style:e,source:c,expDigits:i}:a?{style:e,source:c,expSign:a}:{style:e,source:c}
break
case"percent":case"permille":case"base-unit":this.assertEmpty("unit"),r.unit={style:e}
break
case"currency":/^[A-Z]{3}$/.test(n)?(this.assertEmpty("unit"),r.unit={style:e,currency:n}):this.badOption(e,n)
break
case"measure-unit":Z(n)?(this.assertEmpty("unit"),r.unit={style:e,unit:n}):this.badOption(e,n)
break
case"per-measure-unit":Z(n)?(this.assertEmpty("unitPer"),r.unitPer=n):this.badOption(e,n)
break
case"unit-width-narrow":case"unit-width-short":case"unit-width-full-name":case"unit-width-iso-code":case"unit-width-hidden":this.assertEmpty("unitWidth"),r.unitWidth=e
break
case"precision-integer":case"precision-unlimited":case"precision-currency-standard":case"precision-currency-cash":this.assertEmpty("precision"),r.precision={style:e}
break
case"precision-increment":var l=Number(n)
0<l?(this.assertEmpty("precision"),r.precision={style:e,increment:l}):this.badOption(e,n)
break
case"rounding-mode-ceiling":case"rounding-mode-floor":case"rounding-mode-down":case"rounding-mode-up":case"rounding-mode-half-even":case"rounding-mode-half-down":case"rounding-mode-half-up":case"rounding-mode-unnecessary":this.assertEmpty("roundingMode"),r.roundingMode=e
break
case"integer-width":/^\+0*$/.test(n)?(this.assertEmpty("integerWidth"),r.integerWidth={source:n,min:n.length-1}):(l=n.match(/^#*(0*)$/))?(this.assertEmpty("integerWidth"),r.integerWidth={source:n,min:l[1].length,max:l[0].length}):this.badOption(e,n)
break
case"scale":var f=Number(n)
0<f?(this.assertEmpty("scale"),r.scale=f):this.badOption(e,n)
break
case"group-off":case"group-min2":case"group-auto":case"group-on-aligned":case"group-thousands":this.assertEmpty("group"),r.group=e
break
case"latin":this.assertEmpty("numberingSystem"),r.numberingSystem="latn"
break
case"numbering-system":-1!==["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"].indexOf(n)?(this.assertEmpty("numberingSystem"),r.numberingSystem=n):this.badOption(e,n)
break
case"sign-auto":case"sign-always":case"sign-never":case"sign-accounting":case"sign-accounting-always":case"sign-except-zero":case"sign-accounting-except-zero":this.assertEmpty("sign"),r.sign=e
break
case"decimal-auto":case"decimal-always":this.assertEmpty("decimal"),r.decimal=e
break
default:(f=function(e,t,n){if(i=Y(e,"fraction")){1<t.length&&n(new P(e,t,1))
var r={style:"precision-fraction",source:e,minFraction:i.min}
null!=i.max&&(r.maxFraction=i.max)
var o=t[0],i=Y(o,"significant")
return i?(r.source="".concat(e,"/").concat(o),r.minSignificant=i.min,null!=i.max&&(r.maxSignificant=i.max)):o&&n(new N(e,o)),r}if(r=Y(e,"significant")){var a,u=m(t)
try{for(u.s();!(a=u.n()).done;){var s=a.value
n(new N(e,s))}}catch(e){u.e(e)}finally{u.f()}t={style:"precision-fraction",source:e,minSignificant:r.min}
return null!=r.max&&(t.maxSignificant=r.max),t}return null}(e,t,this.onError))?(this.assertEmpty("precision"),r.precision=f):this.onError(new j(e))}}}}]),t}()
function ee(e,t){var n,t=1<arguments.length&&void 0!==t?t:function(e){throw e},r=[],o=m(e.split(" "))
try{for(o.s();!(n=o.n()).done;){var i,a,u=n.value
u&&(a=(i=u.split("/")).shift()||"",r.push({stem:a,options:i}))}}catch(e){o.e(e)}finally{o.f()}for(var s=new X(t),c=0,l=r;c<l.length;c++){var f=(d=l[c]).stem,d=d.options
s.parseToken(f,d)}return s.skeleton}function te(e,t,n,r){var o=q(e,t="string"==typeof t?0===t.indexOf("::")?ee(t.slice(2),r):J(t,n,r):t),i=R(t,r),e=function(e){var t=z(e),n=e.precision
if(n&&"precision-increment"===n.style){e="+n + ".concat(n.increment/2),n="x - (x % +".concat(n.increment,")")
return 1!==t&&(n="(".concat(n,") * ").concat(t)),"function(n) { var x = ".concat(e,"; return ").concat(n,"; }")}return 1!==t?"function(n) { return n * ".concat(t,"; }"):null}(t),n=["(function() {","var opt = ".concat(JSON.stringify(i),";"),"var nf = new Intl.NumberFormat(".concat(JSON.stringify(o),", opt);")],r="nf.format(value)"
return e&&(n.push("var mod = ".concat(e,";")),r="nf.format(mod(value))"),t.affix&&(o=(i=d(t.affix.pos.map(function(e){return JSON.stringify(e)}),2))[0],e=i[1],r=t.affix.neg?(t=(i=d(t.affix.neg.map(function(e){return JSON.stringify(e)}),2))[0],i=i[1],"value < 0 ? ".concat(t," + ").concat(r," + ").concat(i," : ").concat(o," + ").concat(r," + ").concat(e)):"".concat(o," + ").concat(r," + ").concat(e)),n.push("return function(value) { return ".concat(r,"; }")),n.join("\n  ")+"\n})()"}var ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==We?We:"undefined"!=typeof self?self:{},re={},oe={},ie={exports:{}}
qe=ne,Pe=function(){var o=Object.prototype.hasOwnProperty,t=Object.prototype.toString,g="boolean"==typeof(new RegExp).sticky
function v(e){return e&&"[object RegExp]"===t.call(e)}function c(e){return e&&"object"===n(e)&&!v(e)&&!Array.isArray(e)}function _(e){return e.length?"(?:"+e.map(function(e){return"(?:"+e+")"}).join("|")+")":"(?!)"}function w(e){if("string"==typeof e)return"(?:"+e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+")"
if(v(e)){if(e.ignoreCase)throw new Error("RegExp /i flag not allowed")
if(e.global)throw new Error("RegExp /g flag is implied")
if(e.sticky)throw new Error("RegExp /y flag is implied")
if(e.multiline)throw new Error("RegExp /m flag is implied")
return e.source}throw new Error("Not a pattern: "+e)}function l(e,t){if((t=!c(t)?{match:t}:t).include)throw new Error("Matching rules cannot also include states")
var n,r={defaultType:e,lineBreaks:!!t.error||!!t.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1}
for(n in t)o.call(t,n)&&(r[n]=t[n])
if("string"==typeof r.type&&e!==r.type)throw new Error("Type transform cannot be a string (type '"+r.type+"' for token '"+e+"')")
e=r.match
return r.match=Array.isArray(e)?e:e?[e]:[],r.match.sort(function(e,t){return v(e)&&v(t)?0:v(t)?-1:v(e)?1:t.length-e.length}),r}function b(e){return(Array.isArray(e)?function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n]
if(r.include)for(var o=[].concat(r.include),i=0;i<o.length;i++)t.push({include:o[i]})
else{if(!r.type)throw new Error("Rule has no type: "+JSON.stringify(r))
t.push(l(r.type,r))}}return t}:function(e){for(var t=Object.getOwnPropertyNames(e),n=[],r=0;r<t.length;r++){var o=t[r],i=e[o],a=[].concat(i)
if("include"!==o){var u=[]
a.forEach(function(e){c(e)?(u.length&&n.push(l(o,u)),n.push(l(o,e)),u=[]):u.push(e)}),u.length&&n.push(l(o,u))}else for(var s=0;s<a.length;s++)n.push({include:a[s]})}return n})(e)}var x=l("error",{lineBreaks:!0,shouldThrow:!0})
function k(e,t){for(var n=null,r=Object.create(null),o=!0,i=null,a=[],u=[],s=0;s<e.length;s++)e[s].fallback&&(o=!1)
for(s=0;s<e.length;s++){var c=e[s]
if(c.include)throw new Error("Inheritance is not allowed in stateless lexers")
if(c.error||c.fallback){if(n)throw!c.fallback==!n.fallback?new Error("Multiple "+(c.fallback?"fallback":"error")+" rules not allowed (for token '"+c.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+c.defaultType+"')")
n=c}var l=c.match.slice()
if(o)for(;l.length&&"string"==typeof l[0]&&1===l[0].length;)r[l.shift().charCodeAt(0)]=c
if(c.pop||c.push||c.next){if(!t)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+c.defaultType+"')")
if(c.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+c.defaultType+"')")}if(0!==l.length){o=!1,a.push(c)
for(var f=0;f<l.length;f++){var d=l[f]
if(v(d))if(null===i)i=d.unicode
else if(i!==d.unicode&&!1===c.fallback)throw new Error("If one rule is /u then all must be")}var h=_(l.map(w)),p=new RegExp(h)
if(p.test(""))throw new Error("RegExp matches empty string: "+p)
if(0<new RegExp("|"+h).exec("").length-1)throw new Error("RegExp has capture groups: "+p+"\nUse (?: … ) instead")
if(!c.lineBreaks&&p.test("\n"))throw new Error("Rule should declare lineBreaks: "+p)
u.push("("+h+")")}}var m=n&&n.fallback,y=g&&!m?"ym":"gm",m=g||m?"":"|"
return!0===i&&(y+="u"),{regexp:new RegExp(_(u)+m,y),groups:a,fast:r,error:n||x}}function S(e,t,n){var r=e&&(e.push||e.next)
if(r&&!n[r])throw new Error("Missing state '"+r+"' (in token '"+e.defaultType+"' of state '"+t+"')")
if(e&&e.pop&&1!=+e.pop)throw new Error("pop must be 1 (in token '"+e.defaultType+"' of state '"+t+"')")}function A(e,t){this.startState=t,this.states=e,this.buffer="",this.stack=[],this.reset()}A.prototype.reset=function(e,t){return this.buffer=e||"",this.index=0,this.line=t?t.line:1,this.col=t?t.col:1,this.queuedToken=t?t.queuedToken:null,this.queuedThrow=t?t.queuedThrow:null,this.setState(t?t.state:this.startState),this.stack=t&&t.stack?t.stack.slice():[],this},A.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},A.prototype.setState=function(e){e&&this.state!==e&&(this.state=e,e=this.states[e],this.groups=e.groups,this.error=e.error,this.re=e.regexp,this.fast=e.fast)},A.prototype.popState=function(){this.setState(this.stack.pop())},A.prototype.pushState=function(e){this.stack.push(this.state),this.setState(e)}
var e,a=g?function(e,t){return e.exec(t)}:function(e,t){return 0===(t=e.exec(t))[0].length?null:t}
function u(){return this.value}return A.prototype._getGroup=function(e){for(var t=this.groups.length,n=0;n<t;n++)if(void 0!==e[n+1])return this.groups[n]
throw new Error("Cannot find token type for matched text")},A.prototype.next=function(){var e=this.index
if(this.queuedGroup){var t=this._token(this.queuedGroup,this.queuedText,e)
return this.queuedGroup=null,this.queuedText="",t}var n=this.buffer
if(e!==n.length){if(o=this.fast[n.charCodeAt(e)])return this._token(o,n.charAt(e),e);(i=this.re).lastIndex=e
var r=a(i,n),t=this.error
if(null==r)return this._token(t,n.slice(e,n.length),e)
var o=this._getGroup(r),i=r[0]
return t.fallback&&r.index!==e?(this.queuedGroup=o,this.queuedText=i,this._token(t,n.slice(e,r.index),e)):this._token(o,i,e)}},A.prototype._token=function(e,t,n){var r=0
if(e.lineBreaks){var o=/\n/g,i=1
if("\n"===t)r=1
else for(;o.exec(t);)r++,i=o.lastIndex}var a={type:"function"==typeof e.type&&e.type(t)||e.defaultType,value:"function"==typeof e.value?e.value(t):t,text:t,toString:u,offset:n,lineBreaks:r,line:this.line,col:this.col},n=t.length
if(this.index+=n,this.line+=r,0!==r?this.col=n-i+1:this.col+=n,e.shouldThrow)throw new Error(this.formatError(a,"invalid syntax"))
return e.pop?this.popState():e.push?this.pushState(e.push):e.next&&this.setState(e.next),a},"undefined"!=typeof Symbol&&Symbol.iterator&&((e=function(e){this.lexer=e}).prototype.next=function(){var e=this.lexer.next()
return{value:e,done:!e}},e.prototype[Symbol.iterator]=function(){return this},A.prototype[Symbol.iterator]=function(){return new e(this)}),A.prototype.formatError=function(e,t){null==e&&(e={text:r=this.buffer.slice(this.index),offset:this.index,lineBreaks:-1===r.indexOf("\n")?0:1,line:this.line,col:this.col})
var n=Math.max(0,e.offset-e.col+1),r=e.lineBreaks?e.text.indexOf("\n"):e.text.length,r=this.buffer.substring(n,e.offset+r)
return t+=" at line "+e.line+" col "+e.col+":\n\n",(t+="  "+r+"\n")+("  "+Array(e.col).join(" "))+"^"},A.prototype.clone=function(){return new A(this.states,this.state)},A.prototype.has=function(e){return!0},{compile:function(e){return new A({start:e=k(b(e))},"start")},states:function(e,t){var n=e.$all?b(e.$all):[]
delete e.$all
var r=Object.getOwnPropertyNames(e)
t=t||r[0]
for(var o=Object.create(null),i=0;i<r.length;i++)o[p=r[i]]=b(e[p]).concat(n)
for(i=0;i<r.length;i++)for(var a=o[p=r[i]],u=Object.create(null),s=0;s<a.length;s++){var c=a[s]
if(c.include){var l=[s,1]
if(c.include!==p&&!u[c.include]){u[c.include]=!0
var f=o[c.include]
if(!f)throw new Error("Cannot include nonexistent state '"+c.include+"' (in state '"+p+"')")
for(var d=0;d<f.length;d++){var h=f[d];-1===a.indexOf(h)&&l.push(h)}}a.splice.apply(a,l),s--}}for(var p,m=Object.create(null),i=0;i<r.length;i++)m[p=r[i]]=k(o[p],!0)
for(i=0;i<r.length;i++){for(var y=r[i],g=m[y],v=g.groups,s=0;s<v.length;s++)S(v[s],y,m)
for(var _=Object.getOwnPropertyNames(g.fast),s=0;s<_.length;s++)S(g.fast[_[s]],y,m)}return new A(m,t)},error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:function(e){for(var n=Object.create(null),t=Object.create(null),r=Object.getOwnPropertyNames(e),o=0;o<r.length;o++){var i=r[o],a=e[i];(Array.isArray(a)?a:[a]).forEach(function(e){if((t[e.length]=t[e.length]||[]).push(e),"string"!=typeof e)throw new Error("keyword must be string (in keyword '"+i+"')")
n[e]=i})}function u(e){return JSON.stringify(e)}var s,c=""
for(s in c+="switch (value.length) {\n",t){var l=t[s]
c+="case "+s+":\n",c+="switch (value) {\n",l.forEach(function(e){var t=n[e]
c+="case "+u(e)+": return "+u(t)+"\n"}),c+="}\n"}return c+="}\n",Function("value",c)}}},(De=ie).exports?De.exports=Pe():qe.moo=Pe(),function(e){var t=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(e,"__esModule",{value:!0}),e.lexer=e.states=void 0
t=t(ie.exports)
e.states={body:{doubleapos:{match:"''",value:function(){return"'"}},quoted:{lineBreaks:!0,match:/'[#\{\}](?:(?:(?![])[\s\S])*?(?:(?!')[\s\S]))?'(?!')/,value:function(e){return e.slice(1,-1).replace(/''/g,"'")}},argument:{lineBreaks:!0,match:/\{[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,push:"arg",value:function(e){return e.substring(1).trim()}},octothorpe:"#",end:{match:"}",pop:1},content:{lineBreaks:!0,match:/(?:(?![])[\s\S])(?:(?![#'\{\}])[\s\S])*/}},arg:{select:{lineBreaks:!0,match:/,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:plural|select|selectordinal)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,next:"select",value:function(e){return e.split(",")[1].trim()}},"func-args":{lineBreaks:!0,match:/,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,/,next:"body",value:function(e){return e.split(",")[1].trim()}},"func-simple":{lineBreaks:!0,match:/,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,value:function(e){return e.substring(1).trim()}},end:{match:"}",pop:1}},select:{offset:{lineBreaks:!0,match:/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*offset[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*[0-9]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,value:function(e){return e.split(":")[1].trim()}},case:{lineBreaks:!0,match:/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:=[0-9]+|(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\{/,push:"body",value:function(e){return e.substring(0,e.indexOf("{")).trim()}},end:{match:/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\}/,pop:1}}},e.lexer=t.default.states(e.states)}(oe),Object.defineProperty(re,"__esModule",{value:!0})
function ae(e){return{offset:e.offset,line:e.line,col:e.col,text:e.text,lineBreaks:e.lineBreaks}}function ue(e){return"plural"===e||"select"===e||"selectordinal"===e}var se=re.parse=re.ParseError=void 0,ce=oe
var le=["number","date","time","spellout","ordinal","duration"],fe=["zero","one","two","few","many","other"],de=function(){t(r,c(Error))
var n=f(r)
function r(e,t){return i(this,r),n.call(this,ce.lexer.formatError(e,t))}return e(r)}()
re.ParseError=de
var he=function(){function n(e,t){i(this,n),this.lexer=ce.lexer.reset(e),this.cardinalKeys=t&&t.cardinal||fe,this.ordinalKeys=t&&t.ordinal||fe,this.strict=t&&t.strict||!1}return e(n,[{key:"parse",value:function(){return this.parseBody(!1,!0)}},{key:"checkSelectKey",value:function(e,t,n){if("="===n[0]){if("select"===t)throw new de(e,"The case ".concat(n," is not valid with select"))}else if("select"!==t){var r="plural"===t?this.cardinalKeys:this.ordinalKeys
if(0<r.length&&!r.includes(n)){n="The ".concat(t," case ").concat(n," is not valid in this locale")
throw new de(e,n)}}}},{key:"parseSelect",value:function(e,t,n,r){var o={type:r,arg:e.value,cases:[],ctx:n}
"plural"===r||"selectordinal"===r?t=!0:this.strict&&(t=!1)
var i,a=m(this.lexer)
try{for(a.s();!(i=a.n()).done;){var u=i.value
switch(u.type){case"offset":if("select"===r)throw new de(u,"Unexpected plural offset for select")
if(0<o.cases.length)throw new de(u,"Plural offset must be set before cases")
o.pluralOffset=Number(u.value),n.text+=u.text,n.lineBreaks+=u.lineBreaks
break
case"case":this.checkSelectKey(u,r,u.value),o.cases.push({key:u.value,tokens:this.parseBody(t),ctx:ae(u)})
break
case"end":return o
default:throw new de(u,"Unexpected lexer token: ".concat(u.type))}}}catch(e){a.e(e)}finally{a.f()}throw new de(null,"Unexpected message end")}},{key:"parseArgToken",value:function(e,t){var n=ae(e),r=this.lexer.next()
if(!r)throw new de(null,"Unexpected message end")
if(n.text+=r.text,n.lineBreaks+=r.lineBreaks,this.strict&&("func-simple"===r.type||"func-args"===r.type)&&!le.includes(r.value)){var o="Invalid strict mode function arg type: ".concat(r.value)
throw new de(e,o)}switch(r.type){case"end":return{type:"argument",arg:e.value,ctx:n}
case"func-simple":var i=this.lexer.next()
if(!i)throw new de(null,"Unexpected message end")
if("end"!==i.type)throw new de(i,"Unexpected lexer token: ".concat(i.type))
if(n.text+=i.text,ue(r.value.toLowerCase()))throw new de(r,"Invalid type identifier: ".concat(r.value))
return{type:"function",arg:e.value,key:r.value,ctx:n}
case"func-args":if(ue(r.value.toLowerCase())){var a="Invalid type identifier: ".concat(r.value)
throw new de(r,a)}a=this.parseBody(!this.strict&&t)
return this.strict&&0<a.length&&(a=function(e,t){var n,r="",o="",i=m(t)
try{for(i.s();!(n=i.n()).done;){var a=n.value,u=a.ctx.text
switch(o+=u,a.type){case"content":r+=a.value
break
case"argument":case"function":case"octothorpe":r+=u
break
default:throw new de(e,"Unsupported part in strict mode function arg style: ".concat(u))}}}catch(e){i.e(e)}finally{i.f()}return[{type:"content",value:r.trim(),ctx:Object.assign({},t[0].ctx,{text:o})}]}(e,a)),{type:"function",arg:e.value,key:r.value,param:a,ctx:n}
case"select":if(ue(r.value))return this.parseSelect(e,t,n,r.value)
throw new de(r,"Unexpected select type ".concat(r.value))
default:throw new de(r,"Unexpected lexer token: ".concat(r.type))}}},{key:"parseBody",value:function(e,t){var n,r=[],o=null,i=m(this.lexer)
try{for(i.s();!(n=i.n()).done;){var a=n.value
if("argument"===a.type)o=o&&null,r.push(this.parseArgToken(a,e))
else if("octothorpe"===a.type&&e)o=o&&null,r.push({type:"octothorpe",ctx:ae(a)})
else{if("end"===a.type&&!t)return r
var u=a.value
if(!e&&"quoted"===a.type&&"#"===u[0]){if(u.includes("{")){var s="Unsupported escape pattern: ".concat(u)
throw new de(a,s)}u=a.text}o?(o.value+=u,o.ctx.text+=a.text,o.ctx.lineBreaks+=a.lineBreaks):(o={type:"content",value:u,ctx:ae(a)},r.push(o))}}}catch(e){i.e(e)}finally{i.f()}if(t)return r
throw new de(null,"Unexpected message end")}}]),n}()
function pe(e){return pe[e]||(pe[e]=new Intl.NumberFormat(e))}var se=re.parse=function(e){return new he(e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).parse()},me=Object.freeze({__proto__:null,_nf:pe,number:function(e,t,n){return pe(e).format(t-n)},strictNumber:function(e,t,n,r){if(n=t-n,isNaN(n))throw new Error("`"+r+"` or its offset is not a number")
return pe(e).format(n)},plural:function(e,t,n,r,o){return{}.hasOwnProperty.call(r,e)?r[e]:(t&&(e-=t),(o=n(e,o))in r?r[o]:r.other)},select:function(e,t){return{}.hasOwnProperty.call(t,e)?t[e]:t.other},reqArgs:function(e,t){for(var n=0;n<e.length;++n)if(!t||void 0===t[e[n]])throw new Error("Message requires argument '".concat(e[n],"'"))}})
var ye={}
function ge(e,t){var n=String(e)+JSON.stringify(t)
return ye[n]||(ye[n]=new Intl.NumberFormat(e,t)),ye[n]}var ve=Object.freeze({__proto__:null,date:function(e,t,n){var r={day:"numeric",month:"short",year:"numeric"}
switch(n){case"full":r.weekday="long"
case"long":r.month="long"
break
case"short":r.month="numeric"}return new Date(e).toLocaleDateString(t,r)},duration:function(e){if("number"!=typeof e&&(e=Number(e)),!isFinite(e))return String(e)
var t="",n=(e=e<0?(t="-",Math.abs(e)):Number(e))%60,n=[Math.round(n)===n?n:n.toFixed(3)]
return e<60?n.unshift(0):(e=Math.round((e-Number(n[0]))/60),n.unshift(e%60),60<=e&&(e=Math.round((e-Number(n[0]))/60),n.unshift(e))),t+n.shift()+":"+n.map(function(e){return e<10?"0"+String(e):String(e)}).join(":")},numberCurrency:function(e,t,n){return ge(t,{style:"currency",currency:n,minimumFractionDigits:2,maximumFractionDigits:2}).format(e)},numberFmt:function(e,t,n,r){var n=(o=n&&n.split(":")||[])[0],o=o[1]
return ge(t,{integer:{maximumFractionDigits:0},percent:{style:"percent"},currency:{style:"currency",currency:o&&o.trim()||r,minimumFractionDigits:2,maximumFractionDigits:2}}[n]||{}).format(e)},numberInteger:function(e,t){return ge(t,{maximumFractionDigits:0}).format(e)},numberPercent:function(e,t){return ge(t,{style:"percent"}).format(e)},time:function(e,t,n){var r={second:"numeric",minute:"numeric",hour:"numeric"}
switch(n){case"full":case"long":r.timeZoneName="short"
break
case"short":delete r.second}return new Date(e).toLocaleTimeString(t,r)}}),_e={ES3:{break:!0,continue:!0,delete:!0,else:!0,for:!0,function:!0,if:!0,in:!0,new:!0,return:!0,this:!0,typeof:!0,var:!0,void:!0,while:!0,with:!0,case:!0,catch:!0,default:!0,do:!0,finally:!0,instanceof:!0,switch:!0,throw:!0,try:!0},ESnext:{await:!0,debugger:!0,class:!0,enum:!0,extends:!0,super:!0,const:!0,export:!0,import:!0,null:!0,true:!0,false:!0,implements:!0,let:!0,private:!0,public:!0,yield:!0,interface:!0,package:!0,protected:!0,static:!0}}
function we(e,t){t&&(e+=" "+function(e){for(var t=0,n=0;n<e.length;++n){t=(t<<5)-t+e.charCodeAt(n)
t|=0}return t}(e).toString(36))
e=e.trim().replace(/\W+/g,"_")
return _e.ES3[e]||_e.ESnext[e]||/^\d/.test(e)?"_"+e:e}function be(e,t){if(/^[A-Z_$][0-9A-Z_$]*$/i.test(t)&&!_e.ES3[t])return e?e+"."+t:t
t=JSON.stringify(t)
return e?e+"["+t+"]":t}var xe=new RegExp("^"+["ar","ckb","fa","he","ks($|[^bfh])","lrc","mzn","pa-Arab","ps","ug","ur","uz-Arab","yi"].join("|^"))
var ke="@messageformat/runtime/lib/plurals",Se=(Ae.prototype.compile=function(e,t,n){var r=this
if("object"==typeof e){var o={}
try{for(var i=b(Object.keys(e)),a=i.next();!a.done;a=i.next()){var u=a.value,s=n&&n[u]||t
o[u]=this.compile(e[u],s,n)}}catch(e){f={error:e}}finally{try{a&&!a.done&&(l=i.return)&&l.call(i)}finally{if(f)throw f.error}}return o}var c={cardinal:(this.plural=t).cardinals,ordinal:t.ordinals,strict:this.options.strict}
this.arguments=[]
var l=se(e,c).map(function(e){return r.token(e,null)}),f=0<this.arguments.length,c=this.concatenate(l,!0)
if(this.options.requireAllArguments&&f){this.setRuntimeFn("reqArgs")
l=JSON.stringify(this.arguments)
return"(d) => { reqArgs(".concat(l,", d); return ").concat(c,"; }")}return"(".concat(f?"d":"",") => ").concat(c)},Ae.prototype.cases=function(e,n){var r=this,o=!0,t=e.cases.map(function(e){var t=e.key,e=e.tokens
"other"===t&&(o=!1)
e=e.map(function(e){return r.token(e,n)})
return"".concat(be(null,t.replace(/^=/,"")),": ").concat(r.concatenate(e,!1))})
if(o){var i=e.type,a=(u=this.plural).cardinals,u=u.ordinals
if("select"===i||"plural"===i&&a.includes("other")||"selectordinal"===i&&u.includes("other"))throw new Error("No 'other' form found in ".concat(JSON.stringify(e)))}return"{ ".concat(t.join(", ")," }")},Ae.prototype.concatenate=function(e,t){return"values"===this.options.returnType&&(t||1<e.length)?"["+e.join(", ")+"]":e.join(" + ")||'""'},Ae.prototype.token=function(e,t){if("content"===e.type)return JSON.stringify(e.value)
var n,r,o,i=this.plural,a=i.id,u=i.lc,s="arg"in e?(this.arguments.push(e.arg),[be("d",e.arg)]):[]
switch(e.type){case"argument":return this.options.biDiSupport?(r=String(s[0]),o=u,o=xe.test(o),o=JSON.stringify(o?"‏":"‎"),"".concat(o," + ").concat(r," + ").concat(o)):String(s[0])
case"select":n="select",t&&this.options.strict&&(t=null),s.push(this.cases(e,t)),this.setRuntimeFn("select")
break
case"selectordinal":n="plural",s.push(e.pluralOffset||0,a,this.cases(e,e),1),this.setLocale(a,!0),this.setRuntimeFn("plural")
break
case"plural":n="plural",s.push(e.pluralOffset||0,a,this.cases(e,e)),this.setLocale(a,!1),this.setRuntimeFn("plural")
break
case"function":if(!this.options.customFormatters[e.key]){if("date"===e.key){n=this.setDateFormatter(e,s,t)
break}if("number"===e.key){n=this.setNumberFormatter(e,s,t)
break}}s.push(JSON.stringify(this.plural.locale)),e.param&&(t&&this.options.strict&&(t=null),(o=this.getFormatterArg(e,t))&&s.push(o)),n=e.key,this.setFormatter(n)
break
case"octothorpe":if(!t)return'"#"'
s=[JSON.stringify(this.plural.locale),be("d",t.arg),t.pluralOffset||0],this.options.strict?(n="strictNumber",s.push(JSON.stringify(t.arg)),this.setRuntimeFn("strictNumber")):this.setRuntimeFn(n="number")}if(!n)throw new Error("Parser error for token "+JSON.stringify(e))
return"".concat(n,"(").concat(s.join(", "),")")},Ae.prototype.runtimeIncludes=function(e,t){if(we(e)!==e)throw new SyntaxError("Reserved word used as ".concat(t," identifier: ").concat(e))
var n=this.runtime[e]
if(!n||n.type===t)return n
throw new TypeError("Cannot override ".concat(n.type," runtime function as ").concat(t,": ").concat(e))},Ae.prototype.setLocale=function(e,t){var n,r,o,i=this.runtimeIncludes(e,"locale"),a=(s=this.plural).getCardinal,u=s.getPlural,s=s.isDefault
if(!t&&s&&a){if(i)return
n=function(e){return a(e)},r="@messageformat/runtime/lib/cardinals",o=function(){return String(a)}}else{if(i&&(!s||i.module===ke))return
n=function(e,t){return u(e,t)},r=s?ke:u.module||null,o=function(){return String(u)}}this.runtime[e]=Object.assign(n,{id:e,module:r,toString:o,type:"locale"})},Ae.prototype.setRuntimeFn=function(e){this.runtimeIncludes(e,"runtime")||(this.runtime[e]=Object.assign(me[e],{id:e,module:"@messageformat/runtime",type:"runtime"}))},Ae.prototype.getFormatterArg=function(e,t){var n,r,o,i,a=this,u=e.key,s=e.param
if(!(e=this.options.customFormatters[u]||Fe(u)&&ve[u])||!s)return null
if("options"===(e="arg"in e&&e.arg||"string")){var c=""
try{for(var l=b(s),f=l.next();!f.done;f=l.next()){var d=f.value
if("content"!==d.type)throw new SyntaxError("Expected literal options for ".concat(u," formatter"))
c+=d.value}}catch(e){n={error:e}}finally{try{f&&!f.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}var h={}
try{for(var p=b(c.split(",")),m=p.next();!m.done;m=p.next()){var y,g,v,_=m.value,w=_.indexOf(":");-1===w?h[_.trim()]=null:(y=_.substring(0,w).trim(),"true"===(g=_.substring(w+1).trim())?h[y]=!0:"false"===g?h[y]=!1:"null"===g?h[y]=null:(v=Number(g),h[y]=Number.isFinite(v)?v:g))}}catch(e){o={error:e}}finally{try{m&&!m.done&&(i=p.return)&&i.call(p)}finally{if(o)throw o.error}}return JSON.stringify(h)}s=s.map(function(e){return a.token(e,t)})
if("raw"===e)return"[".concat(s.join(", "),"]")
return(s=s.join(" + "))?"(".concat(s,").trim()"):'""'},Ae.prototype.setFormatter=function(e){if(!this.runtimeIncludes(e,"formatter")){var t=this.options.customFormatters[e]
if(t)"function"==typeof t&&(t={formatter:t}),this.runtime[e]=Object.assign(t.formatter,{type:"formatter"},"module"in t&&t.module&&t.id?{id:we(t.id),module:t.module}:{id:null,module:null})
else{if(!Fe(e))throw new Error("Formatting function not found: ".concat(e))
this.runtime[e]=Object.assign(ve[e],{type:"formatter"},{id:e,module:"@messageformat/runtime/lib/formatters"})}}},Ae.prototype.setDateFormatter=function(e,t,n){var r,o,i=this,a=e.param,u=this.plural.locale,s=a&&1===a.length&&a[0]
if(s&&"content"===s.type&&/^\s*::/.test(s.value)){var c=s.value.trim().substr(2),l=we("date_".concat(u,"_").concat(c),!0)
return this.runtimeIncludes(l,"formatter")||(e=u,r=S(s="string"==typeof(s=c)?T(s):s,r),o=new Intl.DateTimeFormat(e,r),this.runtime[l]=Object.assign(function(e){return o.format(e)},{id:l,module:null,toString:function(){return e=u,n=S(t="string"==typeof(t=c)?T(t):t,n),["(function() {","var opt = ".concat(JSON.stringify(n),";"),"var dtf = new Intl.DateTimeFormat(".concat(JSON.stringify(e),", opt);"),"return function(value) { return dtf.format(value); }"].join("\n  ")+"\n})()"
var e,t,n},type:"formatter"})),l}return t.push(JSON.stringify(u)),a&&0<a.length&&(n&&this.options.strict&&(n=null),a=a.map(function(e){return i.token(e,n)}),t.push("("+(a.join(" + ")||'""')+").trim()")),this.setFormatter("date"),"date"},Ae.prototype.setNumberFormatter=function(e,t,n){var r=this,o=e.param,c=this.plural.locale
if(!o||0===o.length)return t.unshift(JSON.stringify(c)),t.push("0"),this.setRuntimeFn("number"),"number"
if(t.push(JSON.stringify(c)),1===o.length&&"content"===o[0].type){var i=o[0].value.trim()
switch(i){case"currency":return t.push(JSON.stringify(this.options.currency)),this.setFormatter("numberCurrency"),"numberCurrency"
case"integer":return this.setFormatter("numberInteger"),"numberInteger"
case"percent":return this.setFormatter("numberPercent"),"numberPercent"}var a=i.match(/^currency:([A-Z]+)$/)
if(a)return t.push(JSON.stringify(a[1])),this.setFormatter("numberCurrency"),"numberCurrency"
var u,e=we("number_".concat(c,"_").concat(i),!0)
return this.runtimeIncludes(e,"formatter")||(u=this.options.currency,a=function(e,t,n){var t=q(c,e="string"==typeof e?0===e.indexOf("::")?ee(e.slice(2),n):J(e,t,n):e),n=R(e,n),r=L(e),o=new Intl.NumberFormat(t,n)
if(e.affix){var i=(n=d(e.affix.pos,2))[0],a=n[1],u=(e=d(e.affix.neg||["",""],2))[0],s=e[1]
return function(e){var t=o.format(r(e))
return e<0?"".concat(u).concat(t).concat(s):"".concat(i).concat(t).concat(a)}}return function(e){return o.format(r(e))}}(i,u),this.runtime[e]=Object.assign(a,{id:null,module:null,toString:function(){return te(c,i,u)},type:"formatter"})),e}n&&this.options.strict&&(n=null)
o=o.map(function(e){return r.token(e,n)})
return t.push("("+(o.join(" + ")||'""')+").trim()"),t.push(JSON.stringify(this.options.currency)),this.setFormatter("numberFmt"),"numberFmt"},Ae)
function Ae(e){this.arguments=[],this.runtime={},this.options=e}function Fe(e){return e in ve}var Ee=function(e){return 1==e?"one":"other"},Te=function(e){return 0==e||1==e?"one":"other"},Oe=function(e){return 0<=e&&e<=1?"one":"other"},Ne=function(e){var t=!String(e).split(".")[1]
return 1==e&&t?"one":"other"},je=function(e){return"other"},Be=function(e){return 1==e?"one":2==e?"two":"other"},Ie=Object.freeze({__proto__:null,af:Ee,ak:Te,am:Oe,an:Ee,ar:function(e){var t=String(e).split("."),t=Number(t[0])==e&&t[0].slice(-2)
return 0==e?"zero":1==e?"one":2==e?"two":3<=t&&t<=10?"few":11<=t&&t<=99?"many":"other"},ars:function(e){var t=String(e).split("."),t=Number(t[0])==e&&t[0].slice(-2)
return 0==e?"zero":1==e?"one":2==e?"two":3<=t&&t<=10?"few":11<=t&&t<=99?"many":"other"},as:Oe,asa:Ee,ast:Ne,az:Ee,bal:Ee,be:function(e){var t=String(e).split("."),n=Number(t[0])==e,e=n&&t[0].slice(-1),t=n&&t[0].slice(-2)
return 1==e&&11!=t?"one":2<=e&&e<=4&&(t<12||14<t)?"few":n&&0==e||5<=e&&e<=9||11<=t&&t<=14?"many":"other"},bem:Ee,bez:Ee,bg:Ee,bho:Te,bm:je,bn:Oe,bo:je,br:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),o=n&&t[0].slice(-2),t=n&&t[0].slice(-6)
return 1==r&&11!=o&&71!=o&&91!=o?"one":2==r&&12!=o&&72!=o&&92!=o?"two":(3==r||4==r||9==r)&&(o<10||19<o)&&(o<70||79<o)&&(o<90||99<o)?"few":0!=e&&n&&0==t?"many":"other"},brx:Ee,bs:function(e){var t=(o=String(e).split("."))[0],n=o[1]||"",r=!o[1],e=t.slice(-1),o=t.slice(-2),t=n.slice(-1),n=n.slice(-2)
return r&&1==e&&11!=o||1==t&&11!=n?"one":r&&2<=e&&e<=4&&(o<12||14<o)||2<=t&&t<=4&&(n<12||14<n)?"few":"other"},ca:Ne,ce:Ee,ceb:function(e){var t=(r=String(e).split("."))[0],n=r[1]||"",e=!r[1],r=t.slice(-1),n=n.slice(-1)
return e&&(1==t||2==t||3==t)||e&&4!=r&&6!=r&&9!=r||!e&&4!=n&&6!=n&&9!=n?"one":"other"},cgg:Ee,chr:Ee,ckb:Ee,cs:function(e){var t=(n=String(e).split("."))[0],n=!n[1]
return 1==e&&n?"one":2<=t&&t<=4&&n?"few":n?"other":"many"},cy:function(e){return 0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},da:function(e){var t=(n=String(e).split("."))[0],n=Number(n[0])==e
return 1!=e&&(n||0!=t&&1!=t)?"other":"one"},de:Ne,doi:Oe,dsb:function(e){var t=(n=String(e).split("."))[0],e=n[1]||"",n=!n[1],t=t.slice(-2),e=e.slice(-2)
return n&&1==t||1==e?"one":n&&2==t||2==e?"two":n&&(3==t||4==t)||3==e||4==e?"few":"other"},dv:Ee,dz:je,ee:Ee,el:Ee,en:Ne,eo:Ee,es:function(e){var t=(r=String(e).split("."))[0],n=!r[1],r=t.slice(-6)
return 1==e?"one":0!=t&&0==r&&n?"many":"other"},et:Ne,eu:Ee,fa:Oe,ff:function(e){return 0<=e&&e<2?"one":"other"},fi:Ne,fil:function(e){var t=(r=String(e).split("."))[0],n=r[1]||"",e=!r[1],r=t.slice(-1),n=n.slice(-1)
return e&&(1==t||2==t||3==t)||e&&4!=r&&6!=r&&9!=r||!e&&4!=n&&6!=n&&9!=n?"one":"other"},fo:Ee,fr:function(e){var t=(r=String(e).split("."))[0],n=!r[1],r=t.slice(-6)
return 0<=e&&e<2?"one":0!=t&&0==r&&n?"many":"other"},fur:Ee,fy:Ne,ga:function(e){var t=String(e).split("."),t=Number(t[0])==e
return 1==e?"one":2==e?"two":t&&3<=e&&e<=6?"few":t&&7<=e&&e<=10?"many":"other"},gd:function(e){var t=String(e).split("."),t=Number(t[0])==e
return 1==e||11==e?"one":2==e||12==e?"two":t&&3<=e&&e<=10||t&&13<=e&&e<=19?"few":"other"},gl:Ne,gsw:Ee,gu:Oe,guw:Te,gv:function(e){var t=(n=String(e).split("."))[0],e=!n[1],n=t.slice(-1),t=t.slice(-2)
return e&&1==n?"one":e&&2==n?"two":!e||0!=t&&20!=t&&40!=t&&60!=t&&80!=t?e?"other":"many":"few"},ha:Ee,haw:Ee,he:function(e){var t=(o=String(e).split("."))[0],n=!o[1],r=Number(o[0])==e,o=r&&o[0].slice(-1)
return 1==e&&n?"one":2==t&&n?"two":n&&(e<0||10<e)&&r&&0==o?"many":"other"},hi:Oe,hnj:je,hr:function(e){var t=(o=String(e).split("."))[0],n=o[1]||"",r=!o[1],e=t.slice(-1),o=t.slice(-2),t=n.slice(-1),n=n.slice(-2)
return r&&1==e&&11!=o||1==t&&11!=n?"one":r&&2<=e&&e<=4&&(o<12||14<o)||2<=t&&t<=4&&(n<12||14<n)?"few":"other"},hsb:function(e){var t=(n=String(e).split("."))[0],e=n[1]||"",n=!n[1],t=t.slice(-2),e=e.slice(-2)
return n&&1==t||1==e?"one":n&&2==t||2==e?"two":n&&(3==t||4==t)||3==e||4==e?"few":"other"},hu:Ee,hy:function(e){return 0<=e&&e<2?"one":"other"},ia:Ne,id:je,ig:je,ii:je,io:Ne,is:function(e){var t=(n=String(e).split("."))[0],n=Number(n[0])==e,e=t.slice(-1),t=t.slice(-2)
return n&&1==e&&11!=t||!n?"one":"other"},it:function(e){var t=(r=String(e).split("."))[0],n=!r[1],r=t.slice(-6)
return 1==e&&n?"one":0!=t&&0==r&&n?"many":"other"},iu:Be,ja:je,jbo:je,jgo:Ee,jmc:Ee,jv:je,jw:je,ka:Ee,kab:function(e){return 0<=e&&e<2?"one":"other"},kaj:Ee,kcg:Ee,kde:je,kea:je,kk:Ee,kkj:Ee,kl:Ee,km:je,kn:Oe,ko:je,ks:Ee,ksb:Ee,ksh:function(e){return 0==e?"zero":1==e?"one":"other"},ku:Ee,kw:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-2),o=n&&t[0].slice(-3),i=n&&t[0].slice(-5),t=n&&t[0].slice(-6)
return 0==e?"zero":1==e?"one":2==r||22==r||42==r||62==r||82==r||n&&0==o&&(1e3<=i&&i<=2e4||4e4==i||6e4==i||8e4==i)||0!=e&&1e5==t?"two":3==r||23==r||43==r||63==r||83==r?"few":1==e||1!=r&&21!=r&&41!=r&&61!=r&&81!=r?"other":"many"},ky:Ee,lag:function(e){var t=String(e).split(".")[0]
return 0==e?"zero":0!=t&&1!=t||0==e?"other":"one"},lb:Ee,lg:Ee,lij:Ne,lkt:je,ln:Te,lo:je,lt:function(e){var t=(r=String(e).split("."))[1]||"",n=Number(r[0])==e,e=n&&r[0].slice(-1),r=n&&r[0].slice(-2)
return 1==e&&(r<11||19<r)?"one":2<=e&&e<=9&&(r<11||19<r)?"few":0!=t?"many":"other"},lv:function(e){var t=(i=(o=String(e).split("."))[1]||"").length,n=Number(o[0])==e,r=n&&o[0].slice(-1),e=n&&o[0].slice(-2),o=i.slice(-2),i=i.slice(-1)
return n&&0==r||11<=e&&e<=19||2==t&&11<=o&&o<=19?"zero":1==r&&11!=e||2==t&&1==i&&11!=o||2!=t&&1==i?"one":"other"},mas:Ee,mg:Te,mgo:Ee,mk:function(e){var t=(o=String(e).split("."))[0],n=o[1]||"",r=!o[1],e=t.slice(-1),o=t.slice(-2),t=n.slice(-1),n=n.slice(-2)
return r&&1==e&&11!=o||1==t&&11!=n?"one":"other"},ml:Ee,mn:Ee,mo:function(e){var t=!(n=String(e).split("."))[1],n=Number(n[0])==e&&n[0].slice(-2)
return 1==e&&t?"one":!t||0==e||2<=n&&n<=19?"few":"other"},mr:Ee,ms:je,mt:function(e){var t=String(e).split("."),t=Number(t[0])==e&&t[0].slice(-2)
return 1==e?"one":0==e||2<=t&&t<=10?"few":11<=t&&t<=19?"many":"other"},my:je,nah:Ee,naq:Be,nb:Ee,nd:Ee,ne:Ee,nl:Ne,nn:Ee,nnh:Ee,no:Ee,nqo:je,nr:Ee,nso:Te,ny:Ee,nyn:Ee,om:Ee,or:Ee,os:Ee,osa:je,pa:Te,pap:Ee,pcm:Oe,pl:function(e){var t=(o=String(e).split("."))[0],n=!o[1],r=t.slice(-1),o=t.slice(-2)
return 1==e&&n?"one":n&&2<=r&&r<=4&&(o<12||14<o)?"few":n&&1!=t&&(0==r||1==r)||n&&5<=r&&r<=9||n&&12<=o&&o<=14?"many":"other"},prg:function(e){var t=(i=(o=String(e).split("."))[1]||"").length,n=Number(o[0])==e,r=n&&o[0].slice(-1),e=n&&o[0].slice(-2),o=i.slice(-2),i=i.slice(-1)
return n&&0==r||11<=e&&e<=19||2==t&&11<=o&&o<=19?"zero":1==r&&11!=e||2==t&&1==i&&11!=o||2!=t&&1==i?"one":"other"},ps:Ee,pt:function(e){var t=(n=String(e).split("."))[0],e=!n[1],n=t.slice(-6)
return 0==t||1==t?"one":0!=t&&0==n&&e?"many":"other"},pt_PT:function(e){var t=(r=String(e).split("."))[0],n=!r[1],r=t.slice(-6)
return 1==e&&n?"one":0!=t&&0==r&&n?"many":"other"},rm:Ee,ro:function(e){var t=!(n=String(e).split("."))[1],n=Number(n[0])==e&&n[0].slice(-2)
return 1==e&&t?"one":!t||0==e||2<=n&&n<=19?"few":"other"},rof:Ee,ru:function(e){var t=(n=String(e).split("."))[0],e=!n[1],n=t.slice(-1),t=t.slice(-2)
return e&&1==n&&11!=t?"one":e&&2<=n&&n<=4&&(t<12||14<t)?"few":e&&0==n||e&&5<=n&&n<=9||e&&11<=t&&t<=14?"many":"other"},rwk:Ee,sah:je,saq:Ee,sat:Be,sc:Ne,scn:Ne,sd:Ee,sdh:Ee,se:Be,seh:Ee,ses:je,sg:je,sh:function(e){var t=(o=String(e).split("."))[0],n=o[1]||"",r=!o[1],e=t.slice(-1),o=t.slice(-2),t=n.slice(-1),n=n.slice(-2)
return r&&1==e&&11!=o||1==t&&11!=n?"one":r&&2<=e&&e<=4&&(o<12||14<o)||2<=t&&t<=4&&(n<12||14<n)?"few":"other"},shi:function(e){var t=String(e).split("."),t=Number(t[0])==e
return 0<=e&&e<=1?"one":t&&2<=e&&e<=10?"few":"other"},si:function(e){var t=(n=String(e).split("."))[0],n=n[1]||""
return 0==e||1==e||0==t&&1==n?"one":"other"},sk:function(e){var t=(n=String(e).split("."))[0],n=!n[1]
return 1==e&&n?"one":2<=t&&t<=4&&n?"few":n?"other":"many"},sl:function(e){var e=(t=String(e).split("."))[0],t=!t[1],e=e.slice(-2)
return t&&1==e?"one":t&&2==e?"two":t&&(3==e||4==e)||!t?"few":"other"},sma:Be,smi:Be,smj:Be,smn:Be,sms:Be,sn:Ee,so:Ee,sq:Ee,sr:function(e){var t=(o=String(e).split("."))[0],n=o[1]||"",r=!o[1],e=t.slice(-1),o=t.slice(-2),t=n.slice(-1),n=n.slice(-2)
return r&&1==e&&11!=o||1==t&&11!=n?"one":r&&2<=e&&e<=4&&(o<12||14<o)||2<=t&&t<=4&&(n<12||14<n)?"few":"other"},ss:Ee,ssy:Ee,st:Ee,su:je,sv:Ne,sw:Ne,syr:Ee,ta:Ee,te:Ee,teo:Ee,th:je,ti:Te,tig:Ee,tk:Ee,tl:function(e){var t=(r=String(e).split("."))[0],n=r[1]||"",e=!r[1],r=t.slice(-1),n=n.slice(-1)
return e&&(1==t||2==t||3==t)||e&&4!=r&&6!=r&&9!=r||!e&&4!=n&&6!=n&&9!=n?"one":"other"},tn:Ee,to:je,tpi:je,tr:Ee,ts:Ee,tzm:function(e){var t=String(e).split("."),t=Number(t[0])==e
return 0==e||1==e||t&&11<=e&&e<=99?"one":"other"},ug:Ee,uk:function(e){var t=(n=String(e).split("."))[0],e=!n[1],n=t.slice(-1),t=t.slice(-2)
return e&&1==n&&11!=t?"one":e&&2<=n&&n<=4&&(t<12||14<t)?"few":e&&0==n||e&&5<=n&&n<=9||e&&11<=t&&t<=14?"many":"other"},und:je,ur:Ne,uz:Ee,ve:Ee,vi:je,vo:Ee,vun:Ee,wa:Te,wae:Ee,wo:je,xh:Ee,xog:Ee,yi:Ne,yo:je,yue:je,zh:je,zu:Oe}),De="zero",Pe="two",Te={cardinal:[qe="one",Be="other"],ordinal:[Be]},Ee={cardinal:[qe,Be],ordinal:[qe,Be]},Ne={cardinal:[Be],ordinal:[Be]},je={cardinal:[qe,oe="few",re="many",Be],ordinal:[Be]},Oe={cardinal:[qe,Pe,Be],ordinal:[Be]},Me=Object.freeze({__proto__:null,af:Te,ak:Te,am:Te,an:Te,ar:{cardinal:[De,qe,Pe,oe,re,Be],ordinal:[Be]},ars:{cardinal:[De,qe,Pe,oe,re,Be],ordinal:[Be]},as:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,re,Be]},asa:Te,ast:Te,az:{cardinal:[qe,Be],ordinal:[qe,oe,re,Be]},bal:Ee,be:{cardinal:[qe,oe,re,Be],ordinal:[oe,Be]},bem:Te,bez:Te,bg:Te,bho:Te,bm:Ne,bn:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,re,Be]},bo:Ne,br:{cardinal:[qe,Pe,oe,re,Be],ordinal:[Be]},brx:Te,bs:{cardinal:[qe,oe,Be],ordinal:[Be]},ca:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,Be]},ce:Te,ceb:Te,cgg:Te,chr:Te,ckb:Te,cs:je,cy:{cardinal:[De,qe,Pe,oe,re,Be],ordinal:[De,qe,Pe,oe,re,Be]},da:Te,de:Te,doi:Te,dsb:{cardinal:[qe,Pe,oe,Be],ordinal:[Be]},dv:Te,dz:Ne,ee:Te,el:Te,en:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,Be]},eo:Te,es:{cardinal:[qe,re,Be],ordinal:[Be]},et:Te,eu:Te,fa:Te,ff:Te,fi:Te,fil:Ee,fo:Te,fr:{cardinal:[qe,re,Be],ordinal:[qe,Be]},fur:Te,fy:Te,ga:{cardinal:[qe,Pe,oe,re,Be],ordinal:[qe,Be]},gd:{cardinal:[qe,Pe,oe,Be],ordinal:[qe,Pe,oe,Be]},gl:Te,gsw:Te,gu:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,re,Be]},guw:Te,gv:{cardinal:[qe,Pe,oe,re,Be],ordinal:[Be]},ha:Te,haw:Te,he:{cardinal:[qe,Pe,re,Be],ordinal:[Be]},hi:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,re,Be]},hnj:Ne,hr:{cardinal:[qe,oe,Be],ordinal:[Be]},hsb:{cardinal:[qe,Pe,oe,Be],ordinal:[Be]},hu:Ee,hy:Ee,ia:Te,id:Ne,ig:Ne,ii:Ne,io:Te,is:Te,it:{cardinal:[qe,re,Be],ordinal:[re,Be]},iu:Oe,ja:Ne,jbo:Ne,jgo:Te,jmc:Te,jv:Ne,jw:Ne,ka:{cardinal:[qe,Be],ordinal:[qe,re,Be]},kab:Te,kaj:Te,kcg:Te,kde:Ne,kea:Ne,kk:{cardinal:[qe,Be],ordinal:[re,Be]},kkj:Te,kl:Te,km:Ne,kn:Te,ko:Ne,ks:Te,ksb:Te,ksh:{cardinal:[De,qe,Be],ordinal:[Be]},ku:Te,kw:{cardinal:[De,qe,Pe,oe,re,Be],ordinal:[qe,re,Be]},ky:Te,lag:{cardinal:[De,qe,Be],ordinal:[Be]},lb:Te,lg:Te,lij:{cardinal:[qe,Be],ordinal:[re,Be]},lkt:Ne,ln:Te,lo:{cardinal:[Be],ordinal:[qe,Be]},lt:je,lv:{cardinal:[De,qe,Be],ordinal:[Be]},mas:Te,mg:Te,mgo:Te,mk:{cardinal:[qe,Be],ordinal:[qe,Pe,re,Be]},ml:Te,mn:Te,mo:{cardinal:[qe,oe,Be],ordinal:[qe,Be]},mr:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,Be]},ms:{cardinal:[Be],ordinal:[qe,Be]},mt:je,my:Ne,nah:Te,naq:Oe,nb:Te,nd:Te,ne:Ee,nl:Te,nn:Te,nnh:Te,no:Te,nqo:Ne,nr:Te,nso:Te,ny:Te,nyn:Te,om:Te,or:{cardinal:[qe,Be],ordinal:[qe,Pe,oe,re,Be]},os:Te,osa:Ne,pa:Te,pap:Te,pcm:Te,pl:je,prg:{cardinal:[De,qe,Be],ordinal:[Be]},ps:Te,pt:{cardinal:[qe,re,Be],ordinal:[Be]},pt_PT:{cardinal:[qe,re,Be],ordinal:[Be]},rm:Te,ro:{cardinal:[qe,oe,Be],ordinal:[qe,Be]},rof:Te,ru:je,rwk:Te,sah:Ne,saq:Te,sat:Oe,sc:{cardinal:[qe,Be],ordinal:[re,Be]},scn:{cardinal:[qe,Be],ordinal:[re,Be]},sd:Te,sdh:Te,se:Oe,seh:Te,ses:Ne,sg:Ne,sh:{cardinal:[qe,oe,Be],ordinal:[Be]},shi:{cardinal:[qe,oe,Be],ordinal:[Be]},si:Te,sk:je,sl:{cardinal:[qe,Pe,oe,Be],ordinal:[Be]},sma:Oe,smi:Oe,smj:Oe,smn:Oe,sms:Oe,sn:Te,so:Te,sq:{cardinal:[qe,Be],ordinal:[qe,re,Be]},sr:{cardinal:[qe,oe,Be],ordinal:[Be]},ss:Te,ssy:Te,st:Te,su:Ne,sv:Ee,sw:Te,syr:Te,ta:Te,te:Te,teo:Te,th:Ne,ti:Te,tig:Te,tk:{cardinal:[qe,Be],ordinal:[oe,Be]},tl:Ee,tn:Te,to:Ne,tpi:Ne,tr:Te,ts:Te,tzm:Te,ug:Te,uk:{cardinal:[qe,oe,re,Be],ordinal:[oe,Be]},und:Ne,ur:Te,uz:Te,ve:Te,vi:{cardinal:[Be],ordinal:[qe,Be]},vo:Te,vun:Te,wa:Te,wae:Te,wo:Ne,xh:Te,xog:Te,yi:Te,yo:Ne,yue:Ne,zh:Ne,zu:Te}),re=function(e,t){return!t&&1==e?"one":"other"},oe=function(e,t){return!t&&(0==e||1==e)?"one":"other"},qe=function(e,t){return!t&&0<=e&&e<=1?"one":"other"},Be=function(e,t){var n=!String(e).split(".")[1]
return!t&&1==e&&n?"one":"other"},Ne=function(e,t){return"other"},Te=function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},ze=Object.freeze({__proto__:null,af:re,ak:oe,am:qe,an:re,ar:function(e,t){var n=String(e).split("."),n=Number(n[0])==e&&n[0].slice(-2)
return t?"other":0==e?"zero":1==e?"one":2==e?"two":3<=n&&n<=10?"few":11<=n&&n<=99?"many":"other"},ars:function(e,t){var n=String(e).split("."),n=Number(n[0])==e&&n[0].slice(-2)
return t?"other":0==e?"zero":1==e?"one":2==e?"two":3<=n&&n<=10?"few":11<=n&&n<=99?"many":"other"},as:function(e,t){return t?1==e||5==e||7==e||8==e||9==e||10==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":0<=e&&e<=1?"one":"other"},asa:re,ast:Be,az:function(e,t){var n=String(e).split(".")[0],r=n.slice(-1),o=n.slice(-2),i=n.slice(-3)
return t?1==r||2==r||5==r||7==r||8==r||20==o||50==o||70==o||80==o?"one":3==r||4==r||100==i||200==i||300==i||400==i||500==i||600==i||700==i||800==i||900==i?"few":0==n||6==r||40==o||60==o||90==o?"many":"other":1==e?"one":"other"},bal:function(e,t){return 1==e?"one":"other"},be:function(e,t){var n=String(e).split("."),r=Number(n[0])==e,e=r&&n[0].slice(-1),n=r&&n[0].slice(-2)
return t?2!=e&&3!=e||12==n||13==n?"other":"few":1==e&&11!=n?"one":2<=e&&e<=4&&(n<12||14<n)?"few":r&&0==e||5<=e&&e<=9||11<=n&&n<=14?"many":"other"},bem:re,bez:re,bg:re,bho:oe,bm:Ne,bn:function(e,t){return t?1==e||5==e||7==e||8==e||9==e||10==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":0<=e&&e<=1?"one":"other"},bo:Ne,br:function(e,t){var n=String(e).split("."),r=Number(n[0])==e,o=r&&n[0].slice(-1),i=r&&n[0].slice(-2),n=r&&n[0].slice(-6)
return t?"other":1==o&&11!=i&&71!=i&&91!=i?"one":2==o&&12!=i&&72!=i&&92!=i?"two":(3==o||4==o||9==o)&&(i<10||19<i)&&(i<70||79<i)&&(i<90||99<i)?"few":0!=e&&r&&0==n?"many":"other"},brx:re,bs:function(e,t){var n=(i=String(e).split("."))[0],r=i[1]||"",o=!i[1],e=n.slice(-1),i=n.slice(-2),n=r.slice(-1),r=r.slice(-2)
return t?"other":o&&1==e&&11!=i||1==n&&11!=r?"one":o&&2<=e&&e<=4&&(i<12||14<i)||2<=n&&n<=4&&(r<12||14<r)?"few":"other"},ca:function(e,t){var n=!String(e).split(".")[1]
return t?1==e||3==e?"one":2==e?"two":4==e?"few":"other":1==e&&n?"one":"other"},ce:re,ceb:function(e,t){var n=(o=String(e).split("."))[0],r=o[1]||"",e=!o[1],o=n.slice(-1),r=r.slice(-1)
return!t&&(e&&(1==n||2==n||3==n)||e&&4!=o&&6!=o&&9!=o||!e&&4!=r&&6!=r&&9!=r)?"one":"other"},cgg:re,chr:re,ckb:re,cs:function(e,t){var n=(r=String(e).split("."))[0],r=!r[1]
return t?"other":1==e&&r?"one":2<=n&&n<=4&&r?"few":r?"other":"many"},cy:function(e,t){return t?0==e||7==e||8==e||9==e?"zero":1==e?"one":2==e?"two":3==e||4==e?"few":5==e||6==e?"many":"other":0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},da:function(e,t){var n=(r=String(e).split("."))[0],r=Number(r[0])==e
return t||1!=e&&(r||0!=n&&1!=n)?"other":"one"},de:Be,doi:qe,dsb:function(e,t){var n=(r=String(e).split("."))[0],e=r[1]||"",r=!r[1],n=n.slice(-2),e=e.slice(-2)
return t?"other":r&&1==n||1==e?"one":r&&2==n||2==e?"two":r&&(3==n||4==n)||3==e||4==e?"few":"other"},dv:re,dz:Ne,ee:re,el:re,en:function(e,t){var n=!(i=String(e).split("."))[1],r=Number(i[0])==e,o=r&&i[0].slice(-1),i=r&&i[0].slice(-2)
return t?1==o&&11!=i?"one":2==o&&12!=i?"two":3==o&&13!=i?"few":"other":1==e&&n?"one":"other"},eo:re,es:function(e,t){var n=(o=String(e).split("."))[0],r=!o[1],o=n.slice(-6)
return t?"other":1==e?"one":0!=n&&0==o&&r?"many":"other"},et:Be,eu:re,fa:qe,ff:function(e,t){return!t&&0<=e&&e<2?"one":"other"},fi:Be,fil:function(e,t){var n=(i=String(e).split("."))[0],r=i[1]||"",o=!i[1],i=n.slice(-1),r=r.slice(-1)
return t?1==e?"one":"other":o&&(1==n||2==n||3==n)||o&&4!=i&&6!=i&&9!=i||!o&&4!=r&&6!=r&&9!=r?"one":"other"},fo:re,fr:function(e,t){var n=(o=String(e).split("."))[0],r=!o[1],o=n.slice(-6)
return t?1==e?"one":"other":0<=e&&e<2?"one":0!=n&&0==o&&r?"many":"other"},fur:re,fy:Be,ga:function(e,t){var n=String(e).split("."),n=Number(n[0])==e
return t?1==e?"one":"other":1==e?"one":2==e?"two":n&&3<=e&&e<=6?"few":n&&7<=e&&e<=10?"many":"other"},gd:function(e,t){var n=String(e).split("."),n=Number(n[0])==e
return t?1==e||11==e?"one":2==e||12==e?"two":3==e||13==e?"few":"other":1==e||11==e?"one":2==e||12==e?"two":n&&3<=e&&e<=10||n&&13<=e&&e<=19?"few":"other"},gl:Be,gsw:re,gu:function(e,t){return t?1==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":0<=e&&e<=1?"one":"other"},guw:oe,gv:function(e,t){var n=(r=String(e).split("."))[0],e=!r[1],r=n.slice(-1),n=n.slice(-2)
return t?"other":e&&1==r?"one":e&&2==r?"two":!e||0!=n&&20!=n&&40!=n&&60!=n&&80!=n?e?"other":"many":"few"},ha:re,haw:re,he:function(e,t){var n=(i=String(e).split("."))[0],r=!i[1],o=Number(i[0])==e,i=o&&i[0].slice(-1)
return t?"other":1==e&&r?"one":2==n&&r?"two":r&&(e<0||10<e)&&o&&0==i?"many":"other"},hi:function(e,t){return t?1==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":0<=e&&e<=1?"one":"other"},hnj:Ne,hr:function(e,t){var n=(i=String(e).split("."))[0],r=i[1]||"",o=!i[1],e=n.slice(-1),i=n.slice(-2),n=r.slice(-1),r=r.slice(-2)
return t?"other":o&&1==e&&11!=i||1==n&&11!=r?"one":o&&2<=e&&e<=4&&(i<12||14<i)||2<=n&&n<=4&&(r<12||14<r)?"few":"other"},hsb:function(e,t){var n=(r=String(e).split("."))[0],e=r[1]||"",r=!r[1],n=n.slice(-2),e=e.slice(-2)
return t?"other":r&&1==n||1==e?"one":r&&2==n||2==e?"two":r&&(3==n||4==n)||3==e||4==e?"few":"other"},hu:function(e,t){return t?1==e||5==e?"one":"other":1==e?"one":"other"},hy:function(e,t){return t?1==e?"one":"other":0<=e&&e<2?"one":"other"},ia:Be,id:Ne,ig:Ne,ii:Ne,io:Be,is:function(e,t){var n=(r=String(e).split("."))[0],r=Number(r[0])==e,e=n.slice(-1),n=n.slice(-2)
return!t&&(r&&1==e&&11!=n||!r)?"one":"other"},it:function(e,t){var n=(o=String(e).split("."))[0],r=!o[1],o=n.slice(-6)
return t?11==e||8==e||80==e||800==e?"many":"other":1==e&&r?"one":0!=n&&0==o&&r?"many":"other"},iu:Te,ja:Ne,jbo:Ne,jgo:re,jmc:re,jv:Ne,jw:Ne,ka:function(e,t){var n=String(e).split(".")[0],r=n.slice(-2)
return t?1==n?"one":0==n||2<=r&&r<=20||40==r||60==r||80==r?"many":"other":1==e?"one":"other"},kab:function(e,t){return!t&&0<=e&&e<2?"one":"other"},kaj:re,kcg:re,kde:Ne,kea:Ne,kk:function(e,t){var n=String(e).split("."),r=Number(n[0])==e,n=r&&n[0].slice(-1)
return t?6==n||9==n||r&&0==n&&0!=e?"many":"other":1==e?"one":"other"},kkj:re,kl:re,km:Ne,kn:qe,ko:Ne,ks:re,ksb:re,ksh:function(e,t){return t?"other":0==e?"zero":1==e?"one":"other"},ku:re,kw:function(e,t){var n=String(e).split("."),r=Number(n[0])==e,o=r&&n[0].slice(-2),i=r&&n[0].slice(-3),a=r&&n[0].slice(-5),n=r&&n[0].slice(-6)
return t?r&&1<=e&&e<=4||1<=o&&o<=4||21<=o&&o<=24||41<=o&&o<=44||61<=o&&o<=64||81<=o&&o<=84?"one":5==e||5==o?"many":"other":0==e?"zero":1==e?"one":2==o||22==o||42==o||62==o||82==o||r&&0==i&&(1e3<=a&&a<=2e4||4e4==a||6e4==a||8e4==a)||0!=e&&1e5==n?"two":3==o||23==o||43==o||63==o||83==o?"few":1==e||1!=o&&21!=o&&41!=o&&61!=o&&81!=o?"other":"many"},ky:re,lag:function(e,t){var n=String(e).split(".")[0]
return t?"other":0==e?"zero":0!=n&&1!=n||0==e?"other":"one"},lb:re,lg:re,lij:function(e,t){var n=!(r=String(e).split("."))[1],r=Number(r[0])==e
return t?11==e||8==e||r&&80<=e&&e<=89||r&&800<=e&&e<=899?"many":"other":1==e&&n?"one":"other"},lkt:Ne,ln:oe,lo:function(e,t){return t&&1==e?"one":"other"},lt:function(e,t){var n=(o=String(e).split("."))[1]||"",r=Number(o[0])==e,e=r&&o[0].slice(-1),o=r&&o[0].slice(-2)
return t?"other":1==e&&(o<11||19<o)?"one":2<=e&&e<=9&&(o<11||19<o)?"few":0!=n?"many":"other"},lv:function(e,t){var n=(a=(i=String(e).split("."))[1]||"").length,r=Number(i[0])==e,o=r&&i[0].slice(-1),e=r&&i[0].slice(-2),i=a.slice(-2),a=a.slice(-1)
return t?"other":r&&0==o||11<=e&&e<=19||2==n&&11<=i&&i<=19?"zero":1==o&&11!=e||2==n&&1==a&&11!=i||2!=n&&1==a?"one":"other"},mas:re,mg:oe,mgo:re,mk:function(e,t){var n=(i=String(e).split("."))[0],r=i[1]||"",o=!i[1],e=n.slice(-1),i=n.slice(-2),n=r.slice(-1),r=r.slice(-2)
return t?1==e&&11!=i?"one":2==e&&12!=i?"two":7!=e&&8!=e||17==i||18==i?"other":"many":o&&1==e&&11!=i||1==n&&11!=r?"one":"other"},ml:re,mn:re,mo:function(e,t){var n=!(r=String(e).split("."))[1],r=Number(r[0])==e&&r[0].slice(-2)
return t?1==e?"one":"other":1==e&&n?"one":!n||0==e||2<=r&&r<=19?"few":"other"},mr:function(e,t){return t?1==e?"one":2==e||3==e?"two":4==e?"few":"other":1==e?"one":"other"},ms:function(e,t){return t&&1==e?"one":"other"},mt:function(e,t){var n=String(e).split("."),n=Number(n[0])==e&&n[0].slice(-2)
return t?"other":1==e?"one":0==e||2<=n&&n<=10?"few":11<=n&&n<=19?"many":"other"},my:Ne,nah:re,naq:Te,nb:re,nd:re,ne:function(e,t){var n=String(e).split("."),n=Number(n[0])==e
return t?n&&1<=e&&e<=4?"one":"other":1==e?"one":"other"},nl:Be,nn:re,nnh:re,no:re,nqo:Ne,nr:re,nso:oe,ny:re,nyn:re,om:re,or:function(e,t){var n=String(e).split("."),n=Number(n[0])==e
return t?1==e||5==e||n&&7<=e&&e<=9?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":1==e?"one":"other"},os:re,osa:Ne,pa:oe,pap:re,pcm:qe,pl:function(e,t){var n=(i=String(e).split("."))[0],r=!i[1],o=n.slice(-1),i=n.slice(-2)
return t?"other":1==e&&r?"one":r&&2<=o&&o<=4&&(i<12||14<i)?"few":r&&1!=n&&(0==o||1==o)||r&&5<=o&&o<=9||r&&12<=i&&i<=14?"many":"other"},prg:function(e,t){var n=(a=(i=String(e).split("."))[1]||"").length,r=Number(i[0])==e,o=r&&i[0].slice(-1),e=r&&i[0].slice(-2),i=a.slice(-2),a=a.slice(-1)
return t?"other":r&&0==o||11<=e&&e<=19||2==n&&11<=i&&i<=19?"zero":1==o&&11!=e||2==n&&1==a&&11!=i||2!=n&&1==a?"one":"other"},ps:re,pt:function(e,t){var n=(r=String(e).split("."))[0],e=!r[1],r=n.slice(-6)
return t?"other":0==n||1==n?"one":0!=n&&0==r&&e?"many":"other"},pt_PT:function(e,t){var n=(o=String(e).split("."))[0],r=!o[1],o=n.slice(-6)
return t?"other":1==e&&r?"one":0!=n&&0==o&&r?"many":"other"},rm:re,ro:function(e,t){var n=!(r=String(e).split("."))[1],r=Number(r[0])==e&&r[0].slice(-2)
return t?1==e?"one":"other":1==e&&n?"one":!n||0==e||2<=r&&r<=19?"few":"other"},rof:re,ru:function(e,t){var n=(r=String(e).split("."))[0],e=!r[1],r=n.slice(-1),n=n.slice(-2)
return t?"other":e&&1==r&&11!=n?"one":e&&2<=r&&r<=4&&(n<12||14<n)?"few":e&&0==r||e&&5<=r&&r<=9||e&&11<=n&&n<=14?"many":"other"},rwk:re,sah:Ne,saq:re,sat:Te,sc:function(e,t){var n=!String(e).split(".")[1]
return t?11==e||8==e||80==e||800==e?"many":"other":1==e&&n?"one":"other"},scn:function(e,t){var n=!String(e).split(".")[1]
return t?11==e||8==e||80==e||800==e?"many":"other":1==e&&n?"one":"other"},sd:re,sdh:re,se:Te,seh:re,ses:Ne,sg:Ne,sh:function(e,t){var n=(i=String(e).split("."))[0],r=i[1]||"",o=!i[1],e=n.slice(-1),i=n.slice(-2),n=r.slice(-1),r=r.slice(-2)
return t?"other":o&&1==e&&11!=i||1==n&&11!=r?"one":o&&2<=e&&e<=4&&(i<12||14<i)||2<=n&&n<=4&&(r<12||14<r)?"few":"other"},shi:function(e,t){var n=String(e).split("."),n=Number(n[0])==e
return t?"other":0<=e&&e<=1?"one":n&&2<=e&&e<=10?"few":"other"},si:function(e,t){var n=(r=String(e).split("."))[0],r=r[1]||""
return!t&&(0==e||1==e||0==n&&1==r)?"one":"other"},sk:function(e,t){var n=(r=String(e).split("."))[0],r=!r[1]
return t?"other":1==e&&r?"one":2<=n&&n<=4&&r?"few":r?"other":"many"},sl:function(e,t){var e=(n=String(e).split("."))[0],n=!n[1],e=e.slice(-2)
return t?"other":n&&1==e?"one":n&&2==e?"two":n&&(3==e||4==e)||!n?"few":"other"},sma:Te,smi:Te,smj:Te,smn:Te,sms:Te,sn:re,so:re,sq:function(e,t){var n=String(e).split("."),r=Number(n[0])==e,o=r&&n[0].slice(-1),n=r&&n[0].slice(-2)
return t?1==e?"one":4==o&&14!=n?"many":"other":1==e?"one":"other"},sr:function(e,t){var n=(i=String(e).split("."))[0],r=i[1]||"",o=!i[1],e=n.slice(-1),i=n.slice(-2),n=r.slice(-1),r=r.slice(-2)
return t?"other":o&&1==e&&11!=i||1==n&&11!=r?"one":o&&2<=e&&e<=4&&(i<12||14<i)||2<=n&&n<=4&&(r<12||14<r)?"few":"other"},ss:re,ssy:re,st:re,su:Ne,sv:function(e,t){var n=!(i=String(e).split("."))[1],r=Number(i[0])==e,o=r&&i[0].slice(-1),i=r&&i[0].slice(-2)
return t?1!=o&&2!=o||11==i||12==i?"other":"one":1==e&&n?"one":"other"},sw:Be,syr:re,ta:re,te:re,teo:re,th:Ne,ti:oe,tig:re,tk:function(e,t){var n=String(e).split("."),n=Number(n[0])==e&&n[0].slice(-1)
return t?6==n||9==n||10==e?"few":"other":1==e?"one":"other"},tl:function(e,t){var n=(i=String(e).split("."))[0],r=i[1]||"",o=!i[1],i=n.slice(-1),r=r.slice(-1)
return t?1==e?"one":"other":o&&(1==n||2==n||3==n)||o&&4!=i&&6!=i&&9!=i||!o&&4!=r&&6!=r&&9!=r?"one":"other"},tn:re,to:Ne,tpi:Ne,tr:re,ts:re,tzm:function(e,t){var n=String(e).split("."),n=Number(n[0])==e
return!t&&(0==e||1==e||n&&11<=e&&e<=99)?"one":"other"},ug:re,uk:function(e,t){var n=(i=String(e).split("."))[0],r=!i[1],e=(o=Number(i[0])==e)&&i[0].slice(-1),o=o&&i[0].slice(-2),i=n.slice(-1),n=n.slice(-2)
return t?3==e&&13!=o?"few":"other":r&&1==i&&11!=n?"one":r&&2<=i&&i<=4&&(n<12||14<n)?"few":r&&0==i||r&&5<=i&&i<=9||r&&11<=n&&n<=14?"many":"other"},und:Ne,ur:Be,uz:re,ve:re,vi:function(e,t){return t&&1==e?"one":"other"},vo:re,vun:re,wa:oe,wae:re,wo:Ne,xh:re,xog:re,yi:Be,yo:Ne,yue:Ne,zh:Ne,zu:qe})
function Le(e){if("string"!=typeof e||e.length<2)throw new RangeError("Invalid language tag: ".concat(e))
if(e.startsWith("pt-PT"))return"pt-PT"
var t=e.match(/.+?(?=[-_])/)
return t?t[0]:e}function Re(e){if("function"==typeof e)return{isDefault:!1,id:we(t=Le(e.name)),lc:t,locale:e.name,getPlural:e,cardinals:e.cardinals||[],ordinals:e.ordinals||[]}
var t,n=Le(e)
return(t=we(n))in ze?{isDefault:!0,id:t,lc:n,locale:e,getCardinal:Ie[t],getPlural:ze[t],cardinals:Me[t].cardinal,ordinals:Me[t].ordinal}:null}function Ue(e){return we(Le(e))in ze}function Ce(e,t){var n,r
this.plurals=[],this.options=Object.assign({biDiSupport:!1,currency:"USD",customFormatters:{},requireAllArguments:!1,returnType:"string",strict:t&&t.strictNumberSign||!1},t),"*"===e?this.plurals=(n=Ce.defaultLocale,(t=Object.keys(ze).filter(function(e){return e!==n})).unshift(n),t.map(Re)):Array.isArray(e)?this.plurals=e.map(Re).filter(Boolean):e&&(r=Re(e))&&(this.plurals=[r]),0===this.plurals.length&&(r=Re(Ce.defaultLocale),this.plurals=[r])}return Ce.escape=function(e,t){t=t?/[#{}]/g:/[{}]/g
return String(e).replace(t,"'$&'")},Ce.supportedLocalesOf=function(e){return(Array.isArray(e)?e:[e]).filter(Ue)},Ce.prototype.resolvedOptions=function(){return y(y({},this.options),{locale:this.plurals[0].locale,plurals:this.plurals})},Ce.prototype.compile=function(e){var t,n,r=new Se(this.options),e="return "+r.compile(e,this.plurals[0]),o=[],i=[]
try{for(var a=b(Object.entries(r.runtime)),u=a.next();!u.done;u=a.next()){var s=g(u.value,2),c=s[0],l=s[1]
o.push(c),i.push(l)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return(new(Function.bind.apply(Function,v(v([void 0],g(o),!1),[e],!1)))).apply(void 0,v([],g(i),!1))},Ce.defaultLocale="en",Ce},"object"==typeof x&&void 0!==y?y.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).MessageFormat=t()}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,n){"use strict"
var r=function(u){if(!(void 0===u||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=u.document,s=function(){return u.URL||u.webkitURL||u},c=e.createElementNS("http://www.w3.org/1999/xhtml","a"),l="download"in c,f=/constructor/i.test(u.HTMLElement)||u.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent),h=function(e){(u.setImmediate||u.setTimeout)(function(){throw e},0)},t=4e4,p=function(e){setTimeout(function(){"string"==typeof e?s().revokeObjectURL(e):e.remove()},t)},m=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},r=function(e,n,t){t||(e=m(e))
var r,o=this,i="application/octet-stream"===e.type,a=function(){!function(e,t,n){for(var r=(t=[].concat(t)).length;r--;){var o=e["on"+t[r]]
if("function"==typeof o)try{o.call(e,n||e)}catch(e){h(e)}}}(o,"writestart progress write writeend".split(" "))}
if(o.readyState=o.INIT,l)return r=s().createObjectURL(e),void setTimeout(function(){var e,t
c.href=r,c.download=n,e=c,t=new MouseEvent("click"),e.dispatchEvent(t),a(),p(r),o.readyState=o.DONE})
!function(){if((d||i&&f)&&u.FileReader){var t=new FileReader
return t.onloadend=function(){var e=d?t.result:t.result.replace(/^data:[^;]*;/,"data:attachment/file;")
u.open(e,"_blank")||(u.location.href=e),e=void 0,o.readyState=o.DONE,a()},t.readAsDataURL(e),o.readyState=o.INIT}r=r||s().createObjectURL(e),!i&&u.open(r,"_blank")||(u.location.href=r),o.readyState=o.DONE,a(),p(r)}()},e=r.prototype
return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=m(e)),navigator.msSaveOrOpenBlob(e,t)}:(e.abort=function(){},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(e,t,n){return new r(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content)
void 0!==t&&t.exports?t.exports.saveAs=r:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define("FileSaver.js",function(){return r})},{}],4:[function(e,t,n){"use strict"
t.exports=function(){var e=new Float32Array(9)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}},{}],5:[function(e,t,n){"use strict"
t.exports=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}},{}],6:[function(e,t,n){"use strict"
t.exports=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}},{}],7:[function(e,t,n){"use strict"
t.exports=function(){var e=new Float32Array(16)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}},{}],8:[function(e,t,n){"use strict"
t.exports=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}},{}],9:[function(e,t,n){"use strict"
t.exports=function(e,t){var n=t[0],r=t[1],o=t[2],i=t[3],a=t[4],u=t[5],s=t[6],c=t[7],l=t[8],f=t[9],d=t[10],h=t[11],p=t[12],m=t[13],y=t[14],g=t[15],v=n*u-r*a,_=n*s-o*a,w=n*c-i*a,b=r*s-o*u,x=r*c-i*u,k=o*c-i*s,S=l*m-f*p,A=l*y-d*p,F=l*g-h*p,E=f*y-d*m,T=f*g-h*m,O=d*g-h*y
return(t=v*O-_*T+w*E+b*F-x*A+k*S)?(e[0]=(u*O-s*T+c*E)*(t=1/t),e[1]=(o*T-r*O-i*E)*t,e[2]=(m*k-y*x+g*b)*t,e[3]=(d*x-f*k-h*b)*t,e[4]=(s*F-a*O-c*A)*t,e[5]=(n*O-o*F+i*A)*t,e[6]=(y*w-p*k-g*_)*t,e[7]=(l*k-d*w+h*_)*t,e[8]=(a*T-u*F+c*S)*t,e[9]=(r*F-n*T-i*S)*t,e[10]=(p*x-m*w+g*v)*t,e[11]=(f*w-l*x-h*v)*t,e[12]=(u*A-a*E-s*S)*t,e[13]=(n*E-r*A+o*S)*t,e[14]=(m*_-p*b-y*v)*t,e[15]=(l*b-f*_+d*v)*t,e):null}},{}],10:[function(e,t,n){"use strict"
var p=e("./identity")
t.exports=function(e,t,n,r){var o,i=t[0],a=t[1],u=t[2],s=r[0],c=r[1],l=r[2],f=n[0],d=n[1],h=n[2]
if(Math.abs(i-f)<1e-6&&Math.abs(a-d)<1e-6&&Math.abs(u-h)<1e-6)return p(e)
o=i-f,t=a-d,r=u-h,f=c*(r*=n=1/Math.sqrt(o*o+t*t+r*r))-l*(t*=n),d=l*(o*=n)-s*r,h=s*t-c*o,(n=Math.sqrt(f*f+d*d+h*h))?(f*=n=1/n,d*=n,h*=n):h=d=f=0
l=t*h-r*d,s=r*f-o*h,c=o*d-t*f,(n=Math.sqrt(l*l+s*s+c*c))?(l*=n=1/n,s*=n,c*=n):c=s=l=0
return e[0]=f,e[1]=l,e[2]=o,e[3]=0,e[4]=d,e[5]=s,e[6]=t,e[7]=0,e[8]=h,e[9]=c,e[10]=r,e[11]=0,e[12]=-(f*i+d*a+h*u),e[13]=-(l*i+s*a+c*u),e[14]=-(o*i+t*a+r*u),e[15]=1,e}},{"./identity":8}],11:[function(e,t,n){"use strict"
t.exports=function(e,t,n){var r=t[0],o=t[1],i=t[2],a=t[3],u=t[4],s=t[5],c=t[6],l=t[7],f=t[8],d=t[9],h=t[10],p=t[11],m=t[12],y=t[13],g=t[14],v=t[15],_=n[0],w=n[1],b=n[2],t=n[3]
return e[0]=_*r+w*u+b*f+t*m,e[1]=_*o+w*s+b*d+t*y,e[2]=_*i+w*c+b*h+t*g,e[3]=_*a+w*l+b*p+t*v,_=n[4],w=n[5],b=n[6],t=n[7],e[4]=_*r+w*u+b*f+t*m,e[5]=_*o+w*s+b*d+t*y,e[6]=_*i+w*c+b*h+t*g,e[7]=_*a+w*l+b*p+t*v,_=n[8],w=n[9],b=n[10],t=n[11],e[8]=_*r+w*u+b*f+t*m,e[9]=_*o+w*s+b*d+t*y,e[10]=_*i+w*c+b*h+t*g,e[11]=_*a+w*l+b*p+t*v,_=n[12],w=n[13],b=n[14],t=n[15],e[12]=_*r+w*u+b*f+t*m,e[13]=_*o+w*s+b*d+t*y,e[14]=_*i+w*c+b*h+t*g,e[15]=_*a+w*l+b*p+t*v,e}},{}],12:[function(e,t,n){"use strict"
t.exports=function(e,t,n,r,o){var i=1/Math.tan(t/2),t=1/(r-o)
return e[0]=i/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+r)*t,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*r*t,e[15]=0,e}},{}],13:[function(e,t,n){"use strict"
t.exports=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,h,p=n[0],m=n[1],y=n[2]
t===e?(e[12]=t[0]*p+t[4]*m+t[8]*y+t[12],e[13]=t[1]*p+t[5]*m+t[9]*y+t[13],e[14]=t[2]*p+t[6]*m+t[10]*y+t[14],e[15]=t[3]*p+t[7]*m+t[11]*y+t[15]):(r=t[0],o=t[1],i=t[2],a=t[3],u=t[4],s=t[5],c=t[6],l=t[7],f=t[8],d=t[9],h=t[10],n=t[11],e[0]=r,e[1]=o,e[2]=i,e[3]=a,e[4]=u,e[5]=s,e[6]=c,e[7]=l,e[8]=f,e[9]=d,e[10]=h,e[11]=n,e[12]=r*p+u*m+f*y+t[12],e[13]=o*p+s*m+d*y+t[13],e[14]=i*p+c*m+h*y+t[14],e[15]=a*p+l*m+n*y+t[15])
return e}},{}],14:[function(e,t,n){"use strict"
t.exports=function(e,t){var n,r,o,i,a,u
e===t?(n=t[1],r=t[2],o=t[3],i=t[6],a=t[7],u=t[11],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=i,e[11]=t[14],e[12]=o,e[13]=a,e[14]=u):(e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15])
return e}},{}],15:[function(e,t,n){"use strict"
var p=e("assert")
function r(t,n,r,o){p.equal(typeof n,"number"),p(Array.isArray(t)),p.equal(typeof r,"function"),p.equal(typeof o,"function")
var i=t.length,a=i,u=0,s=0,c=[],l=null,f=!1
function d(){for(f=!0;s!==i&&u<n;){var e=s++;++u,r(t[e],h.bind(null,e),e)}a||o(l,c),f=!1}function h(e,t,n){p.equal(c[e],void 0),c[e]=n,t&&(l=l||t),--u,--a,f||d()}d()}function o(e,t,n){r(e,t,function(e,t){e(t)},n)}n.series=function(e,r){var o=e.length
o?function t(n){e[n](function(e){return e?r(e):n<o-1?t(n+1):r()})}(0):r()},n.eachLimit=r,n.each=function(e,t,n){r(e,1/0,t,n)},n.eachSeries=function(e,t,n){r(e,1,t,n)},n.parallelLimit=o,n.parallel=function(e,t){o(e,1/0,t)},n.limiter=function(e){var n=e,r=null,o=null
function t(){var e
r?((r=(e=r).next)||(o=null),i(e)):++n}function i(e){e.cb?e.exec(function(){e.cb.apply(e,arguments),t()}):e.exec(t)}return function(e,t){t={exec:e,cb:t}
n?(--n,i(t)):r?(o.next=t,o=t):r=o=t}},Object.keys(n).forEach(function(e){n["async"+e[0].toUpperCase()+e.slice(1)]=n[e]})},{assert:24}],16:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.makeNoise2D=void 0
var l=e("./shuffle_seed"),_=(Math.sqrt(3)-1)/2,w=(1/Math.sqrt(3)-1)/2
function f(e,t,n){return{dx:-t-e*_,dy:-n-e*_,xsb:t,ysb:n}}n.makeNoise2D=function(e){for(var t=[],n=0;n<p.length;n+=4){for(var r=d[p[n]],o=null,i=null,a=0;a<r.length;a+=3)i=f(r[a],r[a+1],r[a+2]),null===o?t[n/4]=i:o.next=i,o=i
i.next=f(p[n+1],p[n+2],p[n+3])}for(var y=[],n=0;n<h.length;n+=2)y[h[n]]=t[h[n+1]]
for(var g=new Uint8Array(256),v=new Uint8Array(256),u=new Uint8Array(256),n=0;n<256;n++)u[n]=n
for((s=new Uint32Array(1))[0]=e,s=l.default(l.default(l.default(s))),n=255;0<=n;n--){var s=l.default(s),c=new Uint32Array(1)
c[0]=(s[0]+31)%(n+1),c[0]<0&&(c[0]+=n+1),g[n]=u[c[0]],v[n]=14&g[n],u[c[0]]=u[n]}return function(e,t){for(var n=(e+t)*w,r=e+n,o=t+n,i=Math.floor(r),a=Math.floor(o),u=e-(i+(n=(i+a)*_)),s=t-(a+n),c=0,l=y[(n=r-i)-(r=o-a)+1|(o=n+r)<<1|o+r<<2|o+n<<4];void 0!==l;l=l.next){var f,d,h=u+l.dx,p=s+l.dy,m=2-h*h-p*p
0<m&&(f=i+l.xsb,d=a+l.ysb,f=g[255&f],d=v[f+d&255],c+=m*m*m*m*(b[d]*h+b[d+1]*p))}return c*(1/47)}}
var d=[[1,1,0,1,0,1,0,0,0],[1,1,0,1,0,1,2,1,1]],b=[5,2,2,5,-5,2,-2,5,5,-2,2,-5,-5,-2,-2,-5],h=[0,1,1,0,4,1,17,0,20,2,21,2,22,5,23,5,26,4,39,3,42,4,43,3],p=[0,0,1,-1,0,0,-1,1,0,2,1,1,1,2,2,0,1,2,0,2,1,0,0,0]},{"./shuffle_seed":20}],17:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.makeNoise3D=void 0
var l=e("./shuffle_seed"),A=(Math.sqrt(4)-1)/3,F=(1/Math.sqrt(4)-1)/3
function f(e,t,n,r){return{dx:-t-e*A,dy:-n-e*A,dz:-r-e*A,xsb:t,ysb:n,zsb:r}}n.makeNoise3D=function(e){for(var t=[],n=0;n<p.length;n+=9){for(var r=d[p[n]],o=null,i=null,a=0;a<r.length;a+=4)i=f(r[a],r[a+1],r[a+2],r[a+3]),null===o?t[n/9]=i:o.next=i,o=i
i.next=f(p[n+1],p[n+2],p[n+3],p[n+4]),i.next.next=f(p[n+5],p[n+6],p[n+7],p[n+8])}for(var x=[],n=0;n<h.length;n+=2)x[h[n]]=t[h[n+1]]
for(var k=new Uint8Array(256),S=new Uint8Array(256),u=new Uint8Array(256),n=0;n<256;n++)u[n]=n
for((s=new Uint32Array(1))[0]=e,s=l.default(l.default(l.default(s))),n=255;0<=n;n--){var s=l.default(s),c=new Uint32Array(1)
c[0]=(s[0]+31)%(n+1),c[0]<0&&(c[0]+=n+1),k[n]=u[c[0]],S[n]=k[n]%24*3,u[c[0]]=u[n]}return function(e,t,n){for(var r=e+(d=(e+t+n)*F),o=t+d,i=n+d,a=Math.floor(r),u=Math.floor(o),s=Math.floor(i),c=e-(a+(d=(a+u+s)*A)),l=t-(u+d),f=n-(s+d),d=r-a,h=0,p=x[(r=o-u)-(o=i-s)+1|d-r+1<<1|d-o+1<<2|(i=d+r+o)<<3|i+o<<5|i+r<<7|i+d<<9];void 0!==p;p=p.next){var m,y,g,v=c+p.dx,_=l+p.dy,w=f+p.dz,b=2-v*v-_*_-w*w
0<b&&(m=a+p.xsb,y=u+p.ysb,g=s+p.zsb,m=k[255&m],y=k[m+y&255],g=S[y+g&255],h+=b*b*b*b*(E[g]*v+E[g+1]*_+E[g+2]*w))}return h*(1/103)}}
var d=[[0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1],[2,1,1,0,2,1,0,1,2,0,1,1,3,1,1,1],[1,1,0,0,1,0,1,0,1,0,0,1,2,1,1,0,2,1,0,1,2,0,1,1]],E=[-11,4,4,-4,11,4,-4,4,11,11,4,4,4,11,4,4,4,11,-11,-4,4,-4,-11,4,-4,-4,11,11,-4,4,4,-11,4,4,-4,11,-11,4,-4,-4,11,-4,-4,4,-11,11,4,-4,4,11,-4,4,4,-11,-11,-4,-4,-4,-11,-4,-4,-4,-11,11,-4,-4,4,-11,-4,4,-4,-11],h=[0,2,1,1,2,2,5,1,6,0,7,0,32,2,34,2,129,1,133,1,160,5,161,5,518,0,519,0,546,4,550,4,645,3,647,3,672,5,673,5,674,4,677,3,678,4,679,3,680,13,681,13,682,12,685,14,686,12,687,14,712,20,714,18,809,21,813,23,840,20,841,21,1198,19,1199,22,1226,18,1230,19,1325,23,1327,22,1352,15,1353,17,1354,15,1357,17,1358,16,1359,16,1360,11,1361,10,1362,11,1365,10,1366,9,1367,9,1392,11,1394,11,1489,10,1493,10,1520,8,1521,8,1878,9,1879,9,1906,7,1910,7,2005,6,2007,6,2032,8,2033,8,2034,7,2037,6,2038,7,2039,6],p=[0,0,1,-1,0,0,1,0,-1,0,0,-1,1,0,0,0,1,-1,0,0,-1,0,1,0,0,-1,1,0,2,1,1,0,1,1,1,-1,0,2,1,0,1,1,1,-1,1,0,2,0,1,1,1,-1,1,1,1,3,2,1,0,3,1,2,0,1,3,2,0,1,3,1,0,2,1,3,0,2,1,3,0,1,2,1,1,1,0,0,2,2,0,0,1,1,0,1,0,2,0,2,0,1,1,0,0,1,2,0,0,2,2,0,0,0,0,1,1,-1,1,2,0,0,0,0,1,-1,1,1,2,0,0,0,0,1,1,1,-1,2,3,1,1,1,2,0,0,2,2,3,1,1,1,2,2,0,0,2,3,1,1,1,2,0,2,0,2,1,1,-1,1,2,0,0,2,2,1,1,-1,1,2,2,0,0,2,1,-1,1,1,2,0,0,2,2,1,-1,1,1,2,0,2,0,2,1,1,1,-1,2,2,0,0,2,1,1,1,-1,2,0,2,0]},{"./shuffle_seed":20}],18:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.makeNoise4D=void 0
var l=e("./shuffle_seed"),j=(Math.sqrt(5)-1)/4,B=(1/Math.sqrt(5)-1)/4
function f(e,t,n,r,o){return{dx:-t-e*j,dy:-n-e*j,dz:-r-e*j,dw:-o-e*j,xsb:t,ysb:n,zsb:r,wsb:o}}n.makeNoise4D=function(e){for(var t=[],n=0;n<p.length;n+=16){for(var r=d[p[n]],o=null,i=null,a=0;a<r.length;a+=5)i=f(r[a],r[a+1],r[a+2],r[a+3],r[a+4]),null===o?t[n/16]=i:o.next=i,o=i
i.next=f(p[n+1],p[n+2],p[n+3],p[n+4],p[n+5]),i.next.next=f(p[n+6],p[n+7],p[n+8],p[n+9],p[n+10]),i.next.next.next=f(p[n+11],p[n+12],p[n+13],p[n+14],p[n+15])}for(var T=[],n=0;n<h.length;n+=2)T[h[n]]=t[h[n+1]]
for(var O=new Uint8Array(256),N=new Uint8Array(256),u=new Uint8Array(256),n=0;n<256;n++)u[n]=n
for((s=new Uint32Array(1))[0]=e,s=l.default(l.default(l.default(s))),n=255;0<=n;n--){var s=l.default(s),c=new Uint32Array(1)
c[0]=(s[0]+31)%(n+1),c[0]<0&&(c[0]+=n+1),O[n]=u[c[0]],N[n]=252&O[n],u[c[0]]=u[n]}return function(e,t,n,r){for(var o=e+(y=(e+t+n+r)*B),i=t+y,a=n+y,u=r+y,s=Math.floor(o),c=Math.floor(i),l=Math.floor(a),f=Math.floor(u),d=e-(s+(y=(s+c+l+f)*j)),h=t-(c+y),p=n-(l+y),m=r-(f+y),y=o-s,o=i-c,g=0,v=T[(i=a-l)-(a=u-f)+1|o-i+1<<1|o-a+1<<2|y-o+1<<3|y-i+1<<4|y-a+1<<5|(u=y+o+i+a)<<6|u+a<<8|u+i<<11|u+o<<14|u+y<<17];void 0!==v;v=v.next){var _,w,b,x,k=d+v.dx,S=h+v.dy,A=p+v.dz,F=m+v.dw,E=2-k*k-S*S-A*A-F*F
0<E&&(_=s+v.xsb,w=c+v.ysb,b=l+v.zsb,x=f+v.wsb,_=O[255&_],w=O[_+w&255],b=O[w+b&255],x=N[b+x&255],g+=E*E*E*E*(I[x]*k+I[x+1]*S+I[x+2]*A+I[x+3]*F))}return g*(1/30)}}
var d=[[0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1],[3,1,1,1,0,3,1,1,0,1,3,1,0,1,1,3,0,1,1,1,4,1,1,1,1],[1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,2,1,1,0,0,2,1,0,1,0,2,1,0,0,1,2,0,1,1,0,2,0,1,0,1,2,0,0,1,1],[3,1,1,1,0,3,1,1,0,1,3,1,0,1,1,3,0,1,1,1,2,1,1,0,0,2,1,0,1,0,2,1,0,0,1,2,0,1,1,0,2,0,1,0,1,2,0,0,1,1]],I=[3,1,1,1,1,3,1,1,1,1,3,1,1,1,1,3,-3,1,1,1,-1,3,1,1,-1,1,3,1,-1,1,1,3,3,-1,1,1,1,-3,1,1,1,-1,3,1,1,-1,1,3,-3,-1,1,1,-1,-3,1,1,-1,-1,3,1,-1,-1,1,3,3,1,-1,1,1,3,-1,1,1,1,-3,1,1,1,-1,3,-3,1,-1,1,-1,3,-1,1,-1,1,-3,1,-1,1,-1,3,3,-1,-1,1,1,-3,-1,1,1,-1,-3,1,1,-1,-1,3,-3,-1,-1,1,-1,-3,-1,1,-1,-1,-3,1,-1,-1,-1,3,3,1,1,-1,1,3,1,-1,1,1,3,-1,1,1,1,-3,-3,1,1,-1,-1,3,1,-1,-1,1,3,-1,-1,1,1,-3,3,-1,1,-1,1,-3,1,-1,1,-1,3,-1,1,-1,1,-3,-3,-1,1,-1,-1,-3,1,-1,-1,-1,3,-1,-1,-1,1,-3,3,1,-1,-1,1,3,-1,-1,1,1,-3,-1,1,1,-1,-3,-3,1,-1,-1,-1,3,-1,-1,-1,1,-3,-1,-1,1,-1,-3,3,-1,-1,-1,1,-3,-1,-1,1,-1,-3,-1,1,-1,-1,-3,-3,-1,-1,-1,-1,-3,-1,-1,-1,-1,-3,-1,-1,-1,-1,-3],h=[0,3,1,2,2,3,5,2,6,1,7,1,8,3,9,2,10,3,13,2,16,3,18,3,22,1,23,1,24,3,26,3,33,2,37,2,38,1,39,1,41,2,45,2,54,1,55,1,56,0,57,0,58,0,59,0,60,0,61,0,62,0,63,0,256,3,258,3,264,3,266,3,272,3,274,3,280,3,282,3,2049,2,2053,2,2057,2,2061,2,2081,2,2085,2,2089,2,2093,2,2304,9,2305,9,2312,9,2313,9,16390,1,16391,1,16406,1,16407,1,16422,1,16423,1,16438,1,16439,1,16642,8,16646,8,16658,8,16662,8,18437,6,18439,6,18469,6,18471,6,18688,9,18689,9,18690,8,18693,6,18694,8,18695,6,18696,9,18697,9,18706,8,18710,8,18725,6,18727,6,131128,0,131129,0,131130,0,131131,0,131132,0,131133,0,131134,0,131135,0,131352,7,131354,7,131384,7,131386,7,133161,5,133165,5,133177,5,133181,5,133376,9,133377,9,133384,9,133385,9,133400,7,133402,7,133417,5,133421,5,133432,7,133433,5,133434,7,133437,5,147510,4,147511,4,147518,4,147519,4,147714,8,147718,8,147730,8,147734,8,147736,7,147738,7,147766,4,147767,4,147768,7,147770,7,147774,4,147775,4,149509,6,149511,6,149541,6,149543,6,149545,5,149549,5,149558,4,149559,4,149561,5,149565,5,149566,4,149567,4,149760,9,149761,9,149762,8,149765,6,149766,8,149767,6,149768,9,149769,9,149778,8,149782,8,149784,7,149786,7,149797,6,149799,6,149801,5,149805,5,149814,4,149815,4,149816,7,149817,5,149818,7,149821,5,149822,4,149823,4,149824,37,149825,37,149826,36,149829,34,149830,36,149831,34,149832,37,149833,37,149842,36,149846,36,149848,35,149850,35,149861,34,149863,34,149865,33,149869,33,149878,32,149879,32,149880,35,149881,33,149882,35,149885,33,149886,32,149887,32,150080,49,150082,48,150088,49,150098,48,150104,47,150106,47,151873,46,151877,45,151881,46,151909,45,151913,44,151917,44,152128,49,152129,46,152136,49,152137,46,166214,43,166215,42,166230,43,166247,42,166262,41,166263,41,166466,48,166470,43,166482,48,166486,43,168261,45,168263,42,168293,45,168295,42,168512,31,168513,28,168514,31,168517,28,168518,25,168519,25,280952,40,280953,39,280954,40,280957,39,280958,38,280959,38,281176,47,281178,47,281208,40,281210,40,282985,44,282989,44,283001,39,283005,39,283208,30,283209,27,283224,30,283241,27,283256,22,283257,22,297334,41,297335,41,297342,38,297343,38,297554,29,297558,24,297562,29,297590,24,297594,21,297598,21,299365,26,299367,23,299373,26,299383,23,299389,20,299391,20,299584,31,299585,28,299586,31,299589,28,299590,25,299591,25,299592,30,299593,27,299602,29,299606,24,299608,30,299610,29,299621,26,299623,23,299625,27,299629,26,299638,24,299639,23,299640,22,299641,22,299642,21,299645,20,299646,21,299647,20,299648,61,299649,60,299650,61,299653,60,299654,59,299655,59,299656,58,299657,57,299666,55,299670,54,299672,58,299674,55,299685,52,299687,51,299689,57,299693,52,299702,54,299703,51,299704,56,299705,56,299706,53,299709,50,299710,53,299711,50,299904,61,299906,61,299912,58,299922,55,299928,58,299930,55,301697,60,301701,60,301705,57,301733,52,301737,57,301741,52,301952,79,301953,79,301960,76,301961,76,316038,59,316039,59,316054,54,316071,51,316086,54,316087,51,316290,78,316294,78,316306,73,316310,73,318085,77,318087,77,318117,70,318119,70,318336,79,318337,79,318338,78,318341,77,318342,78,318343,77,430776,56,430777,56,430778,53,430781,50,430782,53,430783,50,431e3,75,431002,72,431032,75,431034,72,432809,74,432813,69,432825,74,432829,69,433032,76,433033,76,433048,75,433065,74,433080,75,433081,74,447158,71,447159,68,447166,71,447167,68,447378,73,447382,73,447386,72,447414,71,447418,72,447422,71,449189,70,449191,70,449197,69,449207,68,449213,69,449215,68,449408,67,449409,67,449410,66,449413,64,449414,66,449415,64,449416,67,449417,67,449426,66,449430,66,449432,65,449434,65,449445,64,449447,64,449449,63,449453,63,449462,62,449463,62,449464,65,449465,63,449466,65,449469,63,449470,62,449471,62,449472,19,449473,19,449474,18,449477,16,449478,18,449479,16,449480,19,449481,19,449490,18,449494,18,449496,17,449498,17,449509,16,449511,16,449513,15,449517,15,449526,14,449527,14,449528,17,449529,15,449530,17,449533,15,449534,14,449535,14,449728,19,449729,19,449730,18,449734,18,449736,19,449737,19,449746,18,449750,18,449752,17,449754,17,449784,17,449786,17,451520,19,451521,19,451525,16,451527,16,451528,19,451529,19,451557,16,451559,16,451561,15,451565,15,451577,15,451581,15,451776,19,451777,19,451784,19,451785,19,465858,18,465861,16,465862,18,465863,16,465874,18,465878,18,465893,16,465895,16,465910,14,465911,14,465918,14,465919,14,466114,18,466118,18,466130,18,466134,18,467909,16,467911,16,467941,16,467943,16,468160,13,468161,13,468162,13,468163,13,468164,13,468165,13,468166,13,468167,13,580568,17,580570,17,580585,15,580589,15,580598,14,580599,14,580600,17,580601,15,580602,17,580605,15,580606,14,580607,14,580824,17,580826,17,580856,17,580858,17,582633,15,582637,15,582649,15,582653,15,582856,12,582857,12,582872,12,582873,12,582888,12,582889,12,582904,12,582905,12,596982,14,596983,14,596990,14,596991,14,597202,11,597206,11,597210,11,597214,11,597234,11,597238,11,597242,11,597246,11,599013,10,599015,10,599021,10,599023,10,599029,10,599031,10,599037,10,599039,10,599232,13,599233,13,599234,13,599235,13,599236,13,599237,13,599238,13,599239,13,599240,12,599241,12,599250,11,599254,11,599256,12,599257,12,599258,11,599262,11,599269,10,599271,10,599272,12,599273,12,599277,10,599279,10,599282,11,599285,10,599286,11,599287,10,599288,12,599289,12,599290,11,599293,10,599294,11,599295,10],p=[0,0,1,-1,0,0,0,1,0,-1,0,0,1,0,0,-1,0,0,-1,1,0,0,0,0,1,-1,0,0,0,1,0,-1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,-1,0,0,-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,2,1,1,0,0,1,1,1,-1,0,1,1,1,0,-1,0,2,1,0,1,0,1,1,-1,1,0,1,1,0,1,-1,0,2,0,1,1,0,1,-1,1,1,0,1,0,1,1,-1,0,2,1,0,0,1,1,1,-1,0,1,1,1,0,-1,1,0,2,0,1,0,1,1,-1,1,0,1,1,0,1,-1,1,0,2,0,0,1,1,1,-1,0,1,1,1,0,-1,1,1,1,4,2,1,1,0,4,1,2,1,0,4,1,1,2,0,1,4,2,1,0,1,4,1,2,0,1,4,1,1,0,2,1,4,2,0,1,1,4,1,0,2,1,4,1,0,1,2,1,4,0,2,1,1,4,0,1,2,1,4,0,1,1,2,1,2,1,1,0,0,3,2,1,0,0,3,1,2,0,0,1,2,1,0,1,0,3,2,0,1,0,3,1,0,2,0,1,2,0,1,1,0,3,0,2,1,0,3,0,1,2,0,1,2,1,0,0,1,3,2,0,0,1,3,1,0,0,2,1,2,0,1,0,1,3,0,2,0,1,3,0,1,0,2,1,2,0,0,1,1,3,0,0,2,1,3,0,0,1,2,2,3,1,1,1,0,2,1,1,1,-1,2,2,0,0,0,2,3,1,1,0,1,2,1,1,-1,1,2,2,0,0,0,2,3,1,0,1,1,2,1,-1,1,1,2,2,0,0,0,2,3,1,1,1,0,2,1,1,1,-1,2,0,2,0,0,2,3,1,1,0,1,2,1,1,-1,1,2,0,2,0,0,2,3,0,1,1,1,2,-1,1,1,1,2,0,2,0,0,2,3,1,1,1,0,2,1,1,1,-1,2,0,0,2,0,2,3,1,0,1,1,2,1,-1,1,1,2,0,0,2,0,2,3,0,1,1,1,2,-1,1,1,1,2,0,0,2,0,2,3,1,1,0,1,2,1,1,-1,1,2,0,0,0,2,2,3,1,0,1,1,2,1,-1,1,1,2,0,0,0,2,2,3,0,1,1,1,2,-1,1,1,1,2,0,0,0,2,2,1,1,1,-1,0,1,1,1,0,-1,0,0,0,0,0,2,1,1,-1,1,0,1,1,0,1,-1,0,0,0,0,0,2,1,-1,1,1,0,1,0,1,1,-1,0,0,0,0,0,2,1,1,-1,0,1,1,1,0,-1,1,0,0,0,0,0,2,1,-1,1,0,1,1,0,1,-1,1,0,0,0,0,0,2,1,-1,0,1,1,1,0,-1,1,1,0,0,0,0,0,2,1,1,1,-1,0,1,1,1,0,-1,2,2,0,0,0,2,1,1,-1,1,0,1,1,0,1,-1,2,2,0,0,0,2,1,1,-1,0,1,1,1,0,-1,1,2,2,0,0,0,2,1,1,1,-1,0,1,1,1,0,-1,2,0,2,0,0,2,1,-1,1,1,0,1,0,1,1,-1,2,0,2,0,0,2,1,-1,1,0,1,1,0,1,-1,1,2,0,2,0,0,2,1,1,-1,1,0,1,1,0,1,-1,2,0,0,2,0,2,1,-1,1,1,0,1,0,1,1,-1,2,0,0,2,0,2,1,-1,0,1,1,1,0,-1,1,1,2,0,0,2,0,2,1,1,-1,0,1,1,1,0,-1,1,2,0,0,0,2,2,1,-1,1,0,1,1,0,1,-1,1,2,0,0,0,2,2,1,-1,0,1,1,1,0,-1,1,1,2,0,0,0,2,3,1,1,0,0,0,2,2,0,0,0,2,1,1,1,-1,3,1,0,1,0,0,2,0,2,0,0,2,1,1,1,-1,3,1,0,0,1,0,2,0,0,2,0,2,1,1,1,-1,3,1,1,0,0,0,2,2,0,0,0,2,1,1,-1,1,3,1,0,1,0,0,2,0,2,0,0,2,1,1,-1,1,3,1,0,0,0,1,2,0,0,0,2,2,1,1,-1,1,3,1,1,0,0,0,2,2,0,0,0,2,1,-1,1,1,3,1,0,0,1,0,2,0,0,2,0,2,1,-1,1,1,3,1,0,0,0,1,2,0,0,0,2,2,1,-1,1,1,3,1,0,1,0,0,2,0,2,0,0,2,-1,1,1,1,3,1,0,0,1,0,2,0,0,2,0,2,-1,1,1,1,3,1,0,0,0,1,2,0,0,0,2,2,-1,1,1,1,3,3,2,1,0,0,3,1,2,0,0,4,1,1,1,1,3,3,2,0,1,0,3,1,0,2,0,4,1,1,1,1,3,3,0,2,1,0,3,0,1,2,0,4,1,1,1,1,3,3,2,0,0,1,3,1,0,0,2,4,1,1,1,1,3,3,0,2,0,1,3,0,1,0,2,4,1,1,1,1,3,3,0,0,2,1,3,0,0,1,2,4,1,1,1,1,3,3,2,1,0,0,3,1,2,0,0,2,1,1,1,-1,3,3,2,0,1,0,3,1,0,2,0,2,1,1,1,-1,3,3,0,2,1,0,3,0,1,2,0,2,1,1,1,-1,3,3,2,1,0,0,3,1,2,0,0,2,1,1,-1,1,3,3,2,0,0,1,3,1,0,0,2,2,1,1,-1,1,3,3,0,2,0,1,3,0,1,0,2,2,1,1,-1,1,3,3,2,0,1,0,3,1,0,2,0,2,1,-1,1,1,3,3,2,0,0,1,3,1,0,0,2,2,1,-1,1,1,3,3,0,0,2,1,3,0,0,1,2,2,1,-1,1,1,3,3,0,2,1,0,3,0,1,2,0,2,-1,1,1,1,3,3,0,2,0,1,3,0,1,0,2,2,-1,1,1,1,3,3,0,0,2,1,3,0,0,1,2,2,-1,1,1,1]},{"./shuffle_seed":20}],19:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.makeNoise4D=n.makeNoise3D=n.makeNoise2D=void 0
var r=e("./2d")
Object.defineProperty(n,"makeNoise2D",{enumerable:!0,get:function(){return r.makeNoise2D}})
var o=e("./3d")
Object.defineProperty(n,"makeNoise3D",{enumerable:!0,get:function(){return o.makeNoise3D}})
var i=e("./4d")
Object.defineProperty(n,"makeNoise4D",{enumerable:!0,get:function(){return i.makeNoise4D}})},{"./2d":16,"./3d":17,"./4d":18}],20:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var t=new Uint32Array(1)
return t[0]=1664525*e[0]+1013904223,t}},{}],21:[function(e,t,n){"use strict"
function r(e){e="function"==typeof e?e:e?function(){var t=0,n=0,r=0,o=1,e=function(){var r=4022871197
return function(e){e=e.toString()
for(var t=0;t<e.length;t++){var n=.02519603282416938*(r+=e.charCodeAt(t))
n-=r=n>>>0,r=(n*=r)>>>0,r+=4294967296*(n-=r)}return 2.3283064365386963e-10*(r>>>0)}}()
t=e(" "),n=e(" "),r=e(" ")
for(var i=0;i<arguments.length;i++)(t-=e(arguments[i]))<0&&(t+=1),(n-=e(arguments[i]))<0&&(n+=1),(r-=e(arguments[i]))<0&&(r+=1)
return function(){var e=2091639*t+2.3283064365386963e-10*o
return t=n,n=r,r=e-(o=0|e)}}(e):Math.random
this.p=o(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512)
for(var t=0;t<512;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}function o(e){for(var t=new Uint8Array(256),n=0;n<256;n++)t[n]=n
for(n=0;n<255;n++){var r=n+~~(e()*(256-n)),o=t[n]
t[n]=t[r],t[r]=o}return t}var _,w,T,W,G
_=.5*(Math.sqrt(3)-1),w=(3-Math.sqrt(3))/6,T=1/6,W=(Math.sqrt(5)-1)/4,G=(5-Math.sqrt(5))/20,r.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var n,r=this.permMod12,o=this.perm,i=this.grad3,a=0,u=0,s=0,c=(e+t)*_,l=((g=Math.floor(e+c))+(v=Math.floor(t+c)))*w,f=e-(g-l),d=t-(v-l),h=d<f?(n=1,0):(n=0,1),p=f-n+w,m=d-h+w,y=f-1+2*w,e=255&g,t=255&v,g=.5-p*p-m*m,v=.5-y*y-(c=d-1+2*w)*c
return 70*((a=0<=(l=.5-f*f-d*d)?(l*=l)*l*(i[l=3*r[e+o[t]]]*f+i[1+l]*d):a)+(u=0<=g?(g*=g)*g*(i[h=3*r[e+n+o[t+h]]]*p+i[1+h]*m):u)+(0<=v?(v*=v)*v*(i[t=3*r[1+e+o[1+t]]]*y+i[1+t]*c):s))},noise3D:function(e,t,n){var r,o,i,a,u,s=this.permMod12,c=this.perm,l=this.grad3,f=(e+t+n)*(1/3),d=((A=Math.floor(e+f))+(F=Math.floor(t+f))+(E=Math.floor(n+f)))*T,h=e-(A-d),p=t-(F-d),m=n-(E-d),y=p<=h?m<=p?(a=i=r=1,u=o=0):i=m<=h?(a=u=o=0,r=1):(a=o=r=0,u=1):p<m?(i=o=r=0,a=u=1):h<m?(i=u=r=0,a=o=1):(a=i=o=1,u=r=0),g=h-r+T,v=p-o+T,_=m-u+T,w=h-i+2*T,b=p-a+2*T,x=m-y+2*T,k=h-1+.5,S=p-1+.5,e=255&A,t=255&F,n=255&E,A=.6-g*g-v*v-_*_,F=.6-w*w-b*b-x*x,E=.6-k*k-S*S-(f=m-1+.5)*f
return 32*(((d=.6-h*h-p*p-m*m)<0?0:(d*=d)*d*(l[d=3*s[e+c[t+c[n]]]]*h+l[1+d]*p+l[2+d]*m))+(A<0?0:(A*=A)*A*(l[u=3*s[e+r+c[t+o+c[n+u]]]]*g+l[1+u]*v+l[2+u]*_))+(F<0?0:(F*=F)*F*(l[y=3*s[e+i+c[t+a+c[n+y]]]]*w+l[1+y]*b+l[2+y]*x))+(E<0?0:(E*=E)*E*(l[n=3*s[1+e+c[1+t+c[1+n]]]]*k+l[1+n]*S+l[2+n]*f)))},noise4D:function(e,t,n,r){var o=this.perm,i=this.grad4,a=(e+t+n+r)*W,u=e-((L=Math.floor(e+a))-(z=(L+(R=Math.floor(t+a))+(U=Math.floor(n+a))+(C=Math.floor(r+a)))*G)),s=t-(R-z),c=n-(U-z),l=r-(C-z),f=0,d=0,h=0,p=0
s<u?f++:d++,c<u?f++:h++,l<u?f++:p++,c<s?d++:h++,l<s?d++:p++,l<c?h++:p++
var m,y,g,v,_,w,b,x,k,S,A,F,E=u-(m=3<=f?1:0)+G,T=s-(y=3<=d?1:0)+G,O=c-(g=3<=h?1:0)+G,N=l-(S=3<=p?1:0)+G,j=u-(v=2<=f?1:0)+2*G,B=s-(_=2<=d?1:0)+2*G,I=c-(w=2<=h?1:0)+2*G,D=l-(A=2<=p?1:0)+2*G,P=u-(b=1<=f?1:0)+3*G,M=s-(x=1<=d?1:0)+3*G,q=c-(k=1<=h?1:0)+3*G,z=255&L,f=255&R,d=255&U,h=255&C,L=.6-E*E-T*T-O*O-N*N,R=.6-j*j-B*B-I*I-D*D,U=.6-P*P-M*M-q*q-(a=l-(F=1<=p?1:0)+3*G)*a,C=.6-(e=u-1+4*G)*e-(t=s-1+4*G)*t-(n=c-1+4*G)*n-(r=l-1+4*G)*r
return 27*(((p=.6-u*u-s*s-c*c-l*l)<0?0:(p*=p)*p*(i[p=o[z+o[f+o[d+o[h]]]]%32*4]*u+i[1+p]*s+i[2+p]*c+i[3+p]*l))+(L<0?0:(L*=L)*L*(i[S=o[z+m+o[f+y+o[d+g+o[h+S]]]]%32*4]*E+i[1+S]*T+i[2+S]*O+i[3+S]*N))+(R<0?0:(R*=R)*R*(i[A=o[z+v+o[f+_+o[d+w+o[h+A]]]]%32*4]*j+i[1+A]*B+i[2+A]*I+i[3+A]*D))+(U<0?0:(U*=U)*U*(i[F=o[z+b+o[f+x+o[d+k+o[h+F]]]]%32*4]*P+i[1+F]*M+i[2+F]*q+i[3+F]*a))+(C<0?0:(C*=C)*C*(i[h=o[1+z+o[1+f+o[1+d+o[1+h]]]]%32*4]*e+i[1+h]*t+i[2+h]*n+i[3+h]*r)))}},r._buildPermutationTable=o,"undefined"!=typeof define&&define.amd&&define(function(){return r}),void 0!==n?n.SimplexNoise=r:"undefined"!=typeof window&&(window.SimplexNoise=r),void 0!==t&&(t.exports=r)},{}],22:[function(e,t,n){"use strict"
e("../glov/client/require.js"),deps.assert=e("assert"),deps.buffer=e("buffer"),deps["file-saver"]=e("file-saver"),deps["glov-async"]=e("glov-async"),deps["gl-mat3/create"]=e("gl-mat3/create"),deps["gl-mat3/fromMat4"]=e("gl-mat3/fromMat4"),deps["gl-mat4/copy"]=e("gl-mat4/copy"),deps["gl-mat4/create"]=e("gl-mat4/create"),deps["gl-mat4/invert"]=e("gl-mat4/invert"),deps["gl-mat4/lookAt"]=e("gl-mat4/lookAt"),deps["gl-mat4/multiply"]=e("gl-mat4/multiply"),deps["gl-mat4/perspective"]=e("gl-mat4/perspective"),deps["gl-mat4/translate"]=e("gl-mat4/translate"),deps["gl-mat4/transpose"]=e("gl-mat4/transpose"),deps["@jimbly/howler/src/howler.core.js"]=e("@jimbly/howler/src/howler.core.js"),deps["simplex-noise"]=e("simplex-noise"),deps["open-simplex-noise"]=e("open-simplex-noise"),deps["@messageformat/core"]=e("@messageformat/core")},{"../glov/client/require.js":23,"@jimbly/howler/src/howler.core.js":1,"@messageformat/core":2,assert:24,buffer:25,"file-saver":3,"gl-mat3/create":4,"gl-mat3/fromMat4":5,"gl-mat4/copy":6,"gl-mat4/create":7,"gl-mat4/invert":9,"gl-mat4/lookAt":10,"gl-mat4/multiply":11,"gl-mat4/perspective":12,"gl-mat4/translate":13,"gl-mat4/transpose":14,"glov-async":15,"open-simplex-noise":19,"simplex-noise":21}],23:[function(e,t,n){"use strict"
var r="undefined"==typeof window?self:window,o=r.deps=r.deps||{}
r.require=function(e){if(!o[e])throw new Error("Cannot find module '"+e+"' (add it to deps.js or equivalent)")
return o[e]}},{}],24:[function(e,t,n){"use strict"
function r(e,t){if(!e)throw t=t||(void 0===e||!1===e?"":JSON.stringify(e)),new Error("Assertion failed"+(t?": "+t:""))}t.exports=r,t.exports.ok=r,t.exports.equal=function(e,t){if(e!==t)throw new Error('Assertion failed: "'+e+'"==="'+t+'"')}},{}],25:[function(e,t,n){"use strict"
n.__esModule=!0,n.Buffer=void 0
var r={};(n.Buffer=r).isBuffer=function(e){return!1}},{}]},{},[22])

//# sourceMappingURL=app_deps.bundle.js.map
