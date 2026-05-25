!function n(i,a,o){function u(t,e){if(!a[t]){if(!i[t]){var r="function"==typeof require&&require
if(!e&&r)return r(t,!0)
if(f)return f(t,!0)
throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=a[t]={exports:{}},i[t][0].call(r.exports,function(e){return u(i[t][1][e]||e)},r,r.exports,n,i,a,o)}return a[t].exports}for(var f="function"==typeof require&&require,e=0;e<o.length;e++)u(o[e])
return u}({1:[function(e,t,r){"use strict"
e("../../glov/client/require.js"),deps.assert=e("assert"),deps.buffer=e("buffer")},{"../../glov/client/require.js":2,assert:3,buffer:4}],2:[function(e,t,r){"use strict"
var n="undefined"==typeof window?self:window,i=n.deps=n.deps||{}
n.require=function(e){if(!i[e])throw new Error("Cannot find module '"+e+"' (add it to deps.js or equivalent)")
return i[e]}},{}],3:[function(e,t,r){"use strict"
function n(e,t){if(!e)throw t=t||(void 0===e||!1===e?"":JSON.stringify(e)),new Error("Assertion failed"+(t?": "+t:""))}t.exports=n,t.exports.ok=n,t.exports.equal=function(e,t){if(e!==t)throw new Error('Assertion failed: "'+e+'"==="'+t+'"')}},{}],4:[function(e,t,r){"use strict"
r.__esModule=!0,r.Buffer=void 0
var n={};(r.Buffer=n).isBuffer=function(e){return!1}},{}]},{},[1]);(function(){function r(f,s,u){function o(t,e){if(!s[t]){if(!f[t]){var n="function"==typeof require&&require
if(!e&&n)return n(t,!0)
if(c)return c(t,!0)
var i=new Error("Cannot find module '"+t+"'")
throw i.code="MODULE_NOT_FOUND",i}var a=s[t]={exports:{}}
f[t][0].call(a.exports,function(e){return o(f[t][1][e]||e)},a,a.exports,r,f,s,u)}return s[t].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)o(u[e])
return o}return r})()({1:[function(e,t,r){"use strict"
r.encodeRLEZeroes=encodeRLEZeroes
r.encodeRLEU2=encodeRLEU2
r.encodeRLEU3=encodeRLEU3
r.encodeRLEDict=encodeRLEDict
r.encodeDeltaPakInt=encodeDeltaPakInt
r.continentSerialize=continentSerialize
r.continentDeserialize=continentDeserialize
var s=e("assert")
var n=e("../glov/common/packet.js"),u=n.packetCreate,c=n.packetFromBuffer,l=n.PACKET_DEBUG
var h=2
var i=1
var a=2
var o=3
var f=4
var p=5
var d=["elev","water_level","humidity","river","classif"]
var v={elev:i,water_level:a,humidity:i,river:o,classif:p}
var b={elev:i,water_level:a,humidity:i,river:o,classif:f}
var g={elev:Uint16Array,water_level:Uint16Array,humidity:Uint8Array,river:Uint8Array,classif:Uint8Array}
function encodeRLEZeroes(e,t){var r=t.length
var n=0
for(var i=0;i<r;++i){var a=t[i]
if(a){if(n){e.writeInt(n)
n=0}e.writeInt(a)}else{if(!n)e.writeInt(a)
n++}}if(n)e.writeInt(n)}function decodeRLEZeroes(e,t){var r=0
while(r<e.length){var n=t.readInt()
var i=1
if(!n)i=t.readInt()
s(r+i<=e.length)
for(var a=0;a<i;++a)e[r++]=n}}function encodeRLEU2(t,e){var r=e[0]
var n=e.length
var i=0
function writecv(){var e=r<<6|i
t.writeU8(e)}for(var a=1;a<n;++a)if(e[a]!==r||63===i){writecv()
i=0
r=e[a]}else i++
writecv()}function encodeRLEU3(t,e){var r=e[0]
var n=e.length
var i=0
function writecv(){var e=r<<5|i
t.writeU8(e)}for(var a=1;a<n;++a)if(e[a]!==r||31===i){writecv()
i=0
r=e[a]}else i++
writecv()}function decodeRLEU2(e,t){var r=0
while(r<e.length){var n=t.readU8()
var i=1+(63&n)
n>>>=6
s(r+i<=e.length)
for(var a=0;a<i;++a)e[r++]=n}}function decodeRLEU3(e,t){var r=0
while(r<e.length){var n=t.readU8()
var i=1+(31&n)
n>>>=5
s(r+i<=e.length)
for(var a=0;a<i;++a)e[r++]=n}}function encodeRLEDict(t,e){var r=e[0]
var n=e.length
var i=0
var a=[]
var o=0
function writecv(){t.writeInt(i)
var e=a[r]
if(void 0!==e)t.writeInt(e)
else{e=a[r]=o++
t.writeInt(e)
t.writeInt(r)}}for(var f=1;f<n;++f)if(e[f]!==r){writecv()
i=0
r=e[f]}else i++
writecv()}function decodeRLEDict(e,t){var r=0
var n=[]
while(r<e.length){var i=t.readInt()+1
var a=t.readInt()
var o=n[a]
if(void 0===o)o=n[a]=t.readInt()
s(r+i<=e.length)
for(var f=0;f<i;++f)e[r++]=o}}function encodeDeltaPakInt(e,t){var r=124
var n=t.length
for(var i=0;i<n;++i){var a=t[i]-r+124
e.writeInt(a)
r=t[i]}}function decodeDeltaPakInt(e,t){var r=e.length
var n=124
for(var i=0;i<r;++i){n+=t.readInt()-124
e[i]=n}}function encodeToPacket(e,t,r){switch(t){case i:encodeDeltaPakInt(e,r)
break
case a:encodeRLEDict(e,r)
break
case o:encodeRLEZeroes(e,r)
break
case f:encodeRLEU2(e,r)
break
case p:encodeRLEU3(e,r)
break
default:s()}}function decodeFromPacket(e,t,r){switch(t){case i:decodeDeltaPakInt(e,r)
break
case a:decodeRLEDict(e,r)
break
case o:decodeRLEZeroes(e,r)
break
case f:decodeRLEU2(e,r)
break
case p:decodeRLEU3(e,r)
break
default:s()}}var y=227
function continentSerialize(t,e){var r=t.sea_level,n=t.max_elevation
var i=t.elev.length
var a=u(e?l:0,4*i)
a.writeFlags()
a.writeInt(h)
a.writeInt(r)
a.writeInt(n)
a.writeInt(i)
d.forEach(function(e){s(t[e]instanceof g[e])
a.writeInt(y)
a.writeInt(v[e])
encodeToPacket(a,v[e],t[e])})
a.makeReadable()
var o=a.getBufferLen()
var f=a.getBuffer().slice(0,o)
a.pool()
return f}function continentDeserialize(e){var i={}
var a=c(e,e.length,false)
a.readFlags()
var o=a.readInt()
i.sea_level=a.readInt()
i.max_elevation=a.readInt()
var f=a.readInt()
s(f<=262144)
d.forEach(function(e){var t=a.readInt()
s.equal(t,y)
var r=g[e]
var n=i[e]=new r(f)
if(o>1)decodeFromPacket(n,a.readInt(),a)
else decodeFromPacket(n,b[e],a)})
return i}},{"../glov/common/packet.js":4,assert:void 0}],2:[function(e,t,r){"use strict"
var n=e("../continent_serialize.js").continentSerialize
var i=1e3
var a=5e3
var o
var f=false
var s
var u=false
var c
var l
function pingExpire(){l=null
console.log("Messenger: ping timeout, assuming disconnected from",o)
u=false
c.postMessage({msg:"disconnect"},o)}function pingStart(){s.postMessage({msg:"ping",origin:o})
l=setTimeout(pingExpire,a)}function appMessageHandler(e){var t=e.data,r=t.msg,n=t.origin
if(n!==o&&"startup"!==r){console.log("Messenger: ignored channel message ("+r+") for "+n)
return}if("pong"!==r)console.log('Messenger: received channel message "'+r+'"')
switch(r){case"connect_ack":if(!u){u=true
c.postMessage({msg:"connect_ack"},o)
l=setTimeout(pingStart,i)}break
case"pong":if(l){clearTimeout(l)
l=setTimeout(pingStart,i)}return
case"startup":c.postMessage({msg:"new_client"},o)
return
default:console.error("Messenger: received unknown message from client:",r)}}function continentDataSet(e){var t=n(e)
s.postMessage({msg:"continent_data_set",data:t,origin:o})}var h={continentDataSet:continentDataSet}
function modMessageHandler(e){if(f)return
if(o&&e.origin!==o){console.error("Messenger: received messages two different origins ("+o+" and "+e.origin+"), disabling ModAPI")
f=true}o=e.origin
c=e.source
if("object"===typeof e.data){var t=e.data.msg
if("connect"===t){console.log("Messenger: received window message",t,"from",e.origin)
if(!s)(s=new BroadcastChannel("mod_api")).addEventListener("message",appMessageHandler)
s.postMessage({msg:"connect",origin:o})}else if(!u)console.error("Messenger: ignored window message",t,"from",e.origin)
else if("pcall"===t){var r=e.data,n=r.proc,i=r.data
if(h[n]){console.log("Messenger: running pcall "+n+" from "+e.origin)
h[n](i)}else console.error("Messenger: received unknown pcall "+n+" from "+e.origin)}else console.error("Messenger: received unknown message "+t+" from "+e.origin)}else console.error("Messenger: ignored window message",e.data,"from",e.origin)}if("undefined"!==typeof BroadcastChannel)window.addEventListener("message",modMessageHandler,false)},{"../continent_serialize.js":1}],3:[function(e,t,r){(function(a){(function(){"use strict"
var i=Math.floor
var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
var s="="
function encode(e,t,r){var n=e.u8
var i=""
var a
var o
for(a=0;a<r-2;a+=3){i+=f[n[o=t+a]>>2]
i+=f[((3&n[o])<<4)+(n[o+1]>>4)]
i+=f[((15&n[o+1])<<2)+(n[o+2]>>6)]
i+=f[63&n[o+2]]}if(r%3){i+=f[n[o=t+(a=r-r%3)]>>2]
if(r%3===2){i+=f[((3&n[o])<<4)+(n[o+1]>>4)]
i+=f[(15&n[o+1])<<2]
i+=s}else{i+=f[(3&n[o])<<4]
i+=s+s}}return i}function decodeNativeBrowser(e,t){var r=window.atob(e)
var n=r.length
var i=t(n)
var a=i.u8
for(var o=0;o<n;++o)a[o]=r.charCodeAt(o)
i.decode_size=n
return i}function encodeNativeNode(e,t,r){return a.from(e.buffer).toString("base64",t,t+r)}function decodeNativeNode(e,t){var r=t(3*(e.length>>2)+i(e.length%4/1.5))
var n=a.from(r.buffer)
r.decode_size=n.write(e,"base64")
return r}var e="undefined"!==typeof window
r.base64Decode=e?decodeNativeBrowser:decodeNativeNode
r.base64Encode=e?encode:encodeNativeNode
r.base64CharTable=f}).call(this)}).call(this,e("buffer").Buffer)},{buffer:void 0}],4:[function(I,e,A){(function(U){(function(){"use strict"
A.packetBufPoolAlloc=packetBufPoolAlloc
A.packetBufPoolFree=packetBufPoolFree
A.packetDefaultFlags=packetDefaultFlags
A.packetEnableDebug=packetEnableDebug
var i=A.PACKET_DEBUG=1
var e=A.PACKET_RESERVED1=2
var t=A.PACKET_RESERVED2=4
var s=i|e|t
var o=256
var u=I("assert")
var f=Math.max
var r=I("./util.js"),n=r.deprecate,a=r.isInteger,c=r.log2
var l=I("./base64.js"),h=l.base64Encode,p=l.base64Decode
n(A,"default_flags")
var d=[void 0,null,0,false,"",NaN]
var v=1024
var b="PKTERR_UNDERRUN"
var g=5e3
var y=5e3
var w=[0,10,10,20,20,20,20,20,20,20,5e3,20,20,20,20,20,20,10,10]
var k=[]
var m=[]
var _=w.map(function(){return[]})
function allocDataView(e){var t=c(e)
u(t)
if(t>=_.length)t=0
if(t){e=1<<t
if(_[t].length)return _[t].pop()}var r=new Uint8Array(e)
var n=new DataView(r.buffer)
n.u8=r
if(t)n.packet_pool_idx=t
return n}function wrapU8AsDataView(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength)
t.u8=e
return t}function utf8ByteLength(e){var t=e.length
var r=t
for(var n=0;n<t;++n){var i=e.charCodeAt(n)
if(i>127){++r
if(i>2047){++r
if(i>65535){++r
if(i>2097151){++r
if(i>67108863)++r}}}}}return r}function utf8WriteChar(e,t,r){if(r>1114111)r=65535
if(r<=127)e.u8[t++]=r
else if(r<=2047){e.u8[t++]=r>>6|192
e.u8[t++]=63&r|128}else if(r<=65535){e.u8[t++]=r>>12|224
e.u8[t++]=r>>6&63|128
e.u8[t++]=63&r|128}else if(r<=1114111){e.u8[t++]=r>>18|240
e.u8[t++]=r>>12&63|128
e.u8[t++]=r>>6&63|128
e.u8[t++]=63&r|128}else u(false)
return t}function poolBuf(e){u(e)
u(e.u8)
var t=e.packet_pool_idx
if(t){var r=_[t]
if(r.length<w[t])r.push(e)}}function packetBufPoolAlloc(e){return allocDataView(e)}function packetBufPoolFree(e){poolBuf(e)}var P=0
function packetDefaultFlags(){return P}function packetEnableDebug(e){if(e)P|=i}function Packet(e,t,r){this.reinit(e,t,r)}Packet.prototype.reinit=function(e,t,r){this.flags=e||0
this.has_flags=false
this.buf=null
this.buf_len=0
this.buf_offs=0
this.bufs=null
this.bsizes=null
this.readable=false
this.ref_count=1
this.pak_debug=r
if(t){this.fit(t,true)
this.buf_len=t}}
Packet.prototype.getRefCount=function(){return this.ref_count}
Packet.prototype.ref=function(){u(this.ref_count);++this.ref_count}
Packet.prototype.pool=function(){u(this.ref_count)
if(--this.ref_count)return
if(this.flags&o);else{if(this.buf)poolBuf(this.buf)
if(this.bufs)for(var e=0;e<this.bufs.length;++e)poolBuf(this.bufs[e])}if(k.length<g)k.push(this)
if(this.pak_debug)this.pak_debug.poolDebug()}
Packet.prototype.totalSize=function(){var e=0
if(this.readable)return this.buf_len
if(this.bsizes)for(var t=0;t<this.bsizes.length;++t)e+=this.bsizes[t]
return e+this.buf_offs}
Packet.prototype.setReadable=function(){u(this.buf)
u(!this.bufs)
u(!this.readable)
this.readable=true}
Packet.prototype.makeReadable=function(){u(this.buf)
u(!this.readable)
var e=this.totalSize()
this.readable=true
if(!this.bufs){this.buf_len=e
this.buf_offs=0
return}var t=allocDataView(e)
var r=t.u8
var n=0
for(var i=0;i<this.bufs.length;++i){var a=this.bsizes[i]
var o=this.bufs[i]
if(n+o.u8.length>e){u.equal(o.byteOffset,0)
r.set(new Uint8Array(o.buffer,0,a),n)}else r.set(o.u8,n)
n+=a
poolBuf(o)}u.equal(this.buf.byteOffset,0)
r.set(new Uint8Array(this.buf.buffer,this.buf.byteOffset,this.buf_offs),n)
poolBuf(this.buf)
u.equal(n+this.buf_offs,e)
this.bufs=this.bsizes=null
this.buf=t
this.buf_offs=0
this.buf_len=e}
Packet.prototype.flush=function(){var e=this.buf,t=this.buf_offs
if(!this.bufs){this.bufs=[e]
this.bsizes=[t]}else{this.bufs.push(e)
this.bsizes.push(t)}this.buf=null
this.buf_len=0
this.buf_offs=0}
Packet.prototype.fit=function(e,t){var r=this.buf,n=this.buf_len,i=this.buf_offs
var a=i+e
if(a<=n){if(!t)this.buf_offs=a
return i}u(!this.readable)
if(r)this.flush()
this.buf_len=n=f(v,e)
this.buf=allocDataView(n)
this.buf_offs=t?0:e
return 0}
Packet.prototype.advance=function(e){var t=this.buf_offs
var r=t+e
if((this.buf_offs=r)>this.buf_len)throw new Error(b)
if(r===this.buf_len)this.pool()
return t}
Packet.prototype.ended=function(){return this.buf_offs===this.buf_len}
Packet.prototype.writeU8=function(e){u(e>=0&&e<256)
var t=this.fit(1)
this.buf.u8[t]=e}
Packet.prototype.readU8=function(){return this.buf.u8[this.advance(1)]}
Packet.prototype.writeInt=function(e){u(a(e))
var t=this.fit(9,true)
var r=this.buf
var n=e<0?1:0
if(n)e=-e
if(e<248){if(n)r.u8[t++]=255
r.u8[t++]=e}else if(e<65536){r.u8[t++]=248+n
r.setUint16(t,e,true)
t+=2}else if(e<4294967296){r.u8[t++]=250+n
r.setUint32(t,e,true)
t+=4}else{r.u8[t++]=252+n
var i=e>>>0
r.setUint32(t,i,true)
r.setUint32(t+=4,(e-i)/4294967296,true)
t+=4}this.buf_offs=t}
Packet.prototype.zeroInt=function(){var e=this.buf.u8[this.buf_offs]
if(e<248){this.buf.u8[this.buf_offs++]=0
return}this.buf_offs++
var t
switch(e){case 253:case 252:t=8
break
case 251:case 250:t=4
break
case 249:case 248:t=2
break
case 255:t=1
break
default:throw new Error("PKTERR_PACKED_INT")}while(t){--t
this.buf.u8[this.buf_offs++]=0}}
Packet.prototype.readInt=function(){var e=this.buf.u8[this.advance(1)]
if(e<248)return e
var t=1
switch(e){case 249:t=-1
case 248:return t*this.buf.getUint16(this.advance(2),true)
case 251:t=-1
case 250:return t*this.buf.getUint32(this.advance(4),true)
case 253:t=-1
case 252:var r=this.buf.getUint32(this.advance(4),true)
return t*(4294967296*this.buf.getUint32(this.advance(4),true)+r)
case 255:return-this.buf.u8[this.advance(1)]
default:throw new Error("PKTERR_PACKED_INT")}}
Packet.prototype.writeFloat=function(e){u.equal(typeof e,"number")
if(!e){this.buf.u8[this.fit(1)]=0
return}var t=this.fit(5,true)
this.buf.setFloat32(t,e,true)
if(this.buf.u8[t]<=1){this.buf.u8[t++]=1
this.buf.setFloat32(t,e,true)}this.buf_offs=t+4}
Packet.prototype.readFloat=function(){var e=this.advance(1)
var t=this.buf.u8[e]
if(!t)return 0
if(1===t)return this.buf.getFloat32(this.advance(4),true)
this.advance(3)
return this.buf.getFloat32(e,true)}
Packet.prototype.writeU32=function(e){u.equal(typeof e,"number")
this.buf.setUint32(this.fit(4),e,true)}
Packet.prototype.readU32=function(){return this.buf.getUint32(this.advance(4),true)}
Packet.prototype.writeString=function(e){u.equal(typeof e,"string")
var t=utf8ByteLength(e)
this.writeInt(t)
if(!t)return
var r=this.fit(t)
var n=this.buf
for(var i=0;i<e.length;++i){var a=e.charCodeAt(i)
if(a<=127)n.u8[r++]=a
else r=utf8WriteChar(n,r,a)}}
Packet.prototype.utf8ReadChar=function(e){var t=this.buf
if(e>=192&&e<224)return(31&e)<<6|63&t.u8[this.buf_offs++]
else if(e>=224&&e<240)return(15&e)<<12|(63&t.u8[this.buf_offs++])<<6|63&t.u8[this.buf_offs++]
else if(e>=240&&e<248)return(15&e)<<18|(63&t.u8[this.buf_offs++])<<12|(63&t.u8[this.buf_offs++])<<6|63&t.u8[this.buf_offs++]
else return 65533}
var S=[]
Packet.prototype.readString=function(){var e=this.readInt()
if(!e)return""
if(this.buf_offs+e>this.buf_len)throw new Error(b)
var t=this.buf
var r=this.buf_offs+e
var n
if(e>8192){n=""
while(this.buf_offs<r){var i=t.u8[this.buf_offs++]
if(i>127)i=this.utf8ReadChar(i)
n+=String.fromCharCode(i)}}else{S.length=e
var a=0
while(this.buf_offs<r){var o=t.u8[this.buf_offs++]
if(o>127)o=this.utf8ReadChar(o)
S[a++]=o}if(S.length!==a)S.length=a
n=String.fromCharCode.apply(void 0,S)}if(this.buf_offs===this.buf_len)this.pool()
return n}
Packet.prototype.writeAnsiString=function(e){u.equal(typeof e,"string")
var t=e.length
this.writeInt(t)
var r=this.fit(t)
var n=this.buf
for(var i=0;i<t;++i)n.u8[r++]=e.charCodeAt(i)}
Packet.prototype.readAnsiString=function(){var e=this.readInt()
if(!e)return""
var t=this.advance(e)
var r=this.buf
S.length=e
for(var n=0;n<e;++n)S[n]=r.u8[t++]
return String.fromCharCode.apply(void 0,S)}
Packet.prototype.writeJSON=function(e){if(!e){var t=d.indexOf(e)
u(-1!==t)
this.writeU8(t+1)
return}this.writeU8(0)
this.writeString(JSON.stringify(e))}
Packet.prototype.readJSON=function(){var e=this.readU8()
if(e){if(e-1>=d.length)throw new Error("PKTERR_JSON_HEADER")
return d[e-1]}var t=this.readString()
return JSON.parse(t)}
Packet.prototype.writeBuffer=function(e){this.writeInt(e.length)
if(e.length){var t=this.fit(e.length)
this.buf.u8.set(e,t)}}
var E=new Uint8Array(0)
Packet.prototype.readBuffer=function(e){var t=this.readInt()
if(!t)return E
var r=this.advance(t)
if(e)return this.buf.u8.slice(r,r+t)
else{var n=this.buf
return new Uint8Array(n.buffer,n.byteOffset+r,t)}}
Packet.prototype.writeBool=function(e){this.writeU8(e?1:0)}
Packet.prototype.readBool=function(){return Boolean(this.readU8())}
Packet.prototype.append=function(e){u.equal(this.flags&s,e.flags&s)
if(e.bufs)for(var t=0;t<e.bufs.length;++t){var r=e.bufs[t]
var n=e.bsizes[t]
var i=this.fit(n)
if(n!==r.byteLength)this.buf.u8.set(new Uint8Array(r.buffer,r.byteOffset,n),i)
else this.buf.u8.set(r.u8,i)}if(e.buf){var a=e.buf
var o=e.readable?e.buf_len:e.buf_offs
var f=this.fit(o)
if(o!==a.byteLength)this.buf.u8.set(new Uint8Array(a.buffer,a.byteOffset,o),f)
else this.buf.u8.set(a.u8,f)}}
Packet.prototype.appendRemaining=function(e){u.equal(this.flags&s,e.flags&s)
u(e.readable)
u(!e.bufs)
u(e.buf)
u(e.buf_offs<=e.buf_len)
var t=e.buf_len-e.buf_offs
if(t){var r=this.fit(t)
this.buf.u8.set(new Uint8Array(e.buf.buffer,e.buf.byteOffset+e.buf_offs,t),r)}e.pool()}
Packet.prototype.toJSON=function(){var e={f:this.flags}
if(this.bufs){e.b=[]
for(var t=0;t<this.bufs.length;++t)e.b.push(h(this.bufs[t],0,this.bsizes[t]))}if(this.buf)if(this.readable)e.d=h(this.buf,0,this.buf_len)
else e.d=h(this.buf,0,this.buf_offs)
return e}
Packet.prototype.setBuffer=function(e,t){u(!this.buf)
u(!this.bufs)
u(this.flags&o)
u(e instanceof Uint8Array)
this.buf=wrapU8AsDataView(e)
this.buf_len=t
this.readable=true}
Packet.prototype.getBuffer=function(){u(this.buf)
u(!this.bufs)
return this.buf.u8}
Packet.prototype.getBufferLen=function(){u(this.buf)
u(!this.bufs)
return this.readable?this.buf_len:this.buf_offs}
Packet.prototype.getOffset=function(){if(this.readable)return this.buf_offs
return this.totalSize()}
Packet.prototype.seek=function(e){u(this.readable)
u(e>=0&&e<=this.buf_len)
this.buf_offs=e}
Packet.prototype.writeFlags=function(){u(!this.has_flags)
u.equal(this.buf_offs,0)
this.writeU8(this.flags)
this.has_flags=true}
Packet.prototype.updateFlags=function(e){u(this.has_flags)
u(!(e&s))
this.flags=this.flags&s|e;(this.bufs?this.bufs[0]:this.buf).u8[0]=this.flags}
Packet.prototype.readFlags=function(){var e=this.readU8()
u.equal(e,255&this.flags)
this.has_flags=true
return this.flags}
Packet.prototype.getFlags=function(){return this.flags}
Packet.prototype.getInternalFlags=function(){return this.flags&s}
Packet.prototype.contents=function(){return"pak("+this.totalSize()+"b)"}
function PacketDebug(e,t){this.reinit(e,t)}PacketDebug.prototype.reinit=function(e,t){var r=this
this.in_pool=false
if(k.length){this.pak=k.pop()
this.pak.reinit(e,t,this)}else this.pak=new Packet(e,t,this)
this.warned=false
this.pool_timer=setTimeout(function(){console.warn("Packet not pooled after 5s: "+r.contents())
r.warned=true},y)}
PacketDebug.prototype.poolDebug=function(){if(this.warned)console.warn("Packet pooled after timeout")
else clearTimeout(this.pool_timer)
u(!this.in_pool)
this.in_pool=true
if(m.length<g)m.push(this)}
var D=[null,"U8","U32","Int","Float","String","AnsiString","JSON","Bool","Buffer"]
D.forEach(function(r,n){if(!r)return
var e="write"+r
var t="read"+r
var i=Packet.prototype[e]
var a=Packet.prototype[t]
PacketDebug.prototype[e]=function(e){this.pak.writeU8(n)
i.call(this.pak,e)}
PacketDebug.prototype[t]=function(e){var t=this.pak.readU8()
if(t!==n)u(false,"PacketDebug error: Expected "+r+"("+n+"), found "+D[t]+"("+t+")")
return a.call(this.pak,e)}})
PacketDebug.prototype.zeroInt=function(){this.pak.writeU8(3)
this.pak.zeroInt()};["ended","getBuffer","getBufferLen","getFlags","getInternalFlags","getOffset","getRefCount","makeReadable","pool","readFlags","ref","seek","setBuffer","setReadable","toJSON","totalSize","updateFlags","writeFlags"].forEach(function(e){var t=Packet.prototype[e]
PacketDebug.prototype[e]=function(){return t.apply(this.pak,arguments)}})
PacketDebug.prototype.append=function(e){u(e instanceof PacketDebug)
this.pak.append(e.pak)}
PacketDebug.prototype.appendRemaining=function(e){u(e instanceof PacketDebug)
this.pak.appendRemaining(e.pak)}
function format(e){switch(typeof e){case"object":if(e instanceof Uint8Array)return"u8<"+e.length+">"
return JSON.stringify(e)
default:return e}}PacketDebug.prototype.contents=function(){var e=this.pak
var t=e.getOffset()
var r=t
var n=["buf:"+e.buf_offs+"/"+e.buf_len]
if(e.bufs){e.makeReadable()
n.push("bufs")}else if(e.buf){if(e.readable)r=e.buf_len
e.buf_offs=0}else{n.push("empty")
r=-1}var i=e.ref_count
e.ref_count=2
try{if(!i)n.push("!ref_count=0!")
if(e.has_flags)n.push("flags:"+e.readU8())
while(e.buf_offs<r){var a=e.readU8()
var o=D[a]
if(!o){n.push("UnknownType:"+a)
break}var f=e["read"+o]()
n.push(o+":"+format(f))}}catch(e){n.push("Error dumping packet contents: "+e)}e.ref_count=i
e.buf_offs=t
return n.join(",")}
function packetCreate(e,t){if(void 0===e)e=P
var r=e&i?m:k
if(r.length){var n=r.pop()
n.reinit(e,t)
return n}if(e&i)return new PacketDebug(e,t)
return new Packet(e,t)}A.packetCreate=packetCreate
function packetFromBuffer(e,t,r){var n=e[0]
u.equal(typeof n,"number")
if(r){u(t)
u(e.buffer instanceof ArrayBuffer)
var i=packetCreate(n,t)
if(e.byteLength!==t)e=U.from(e.buffer,0,t)
i.getBuffer().set(e)
i.setReadable()
return i}else{u(e instanceof Uint8Array)
var a=packetCreate(n|o)
a.setBuffer(e,t||e.byteLength)
return a}}A.packetFromBuffer=packetFromBuffer
function packetFromJSON(e){var t=packetCreate(e.f)
var r=t.pak||t
function decode(e){return p(e,allocDataView)}if(e.b){r.bsizes=[]
r.bufs=[]
for(var n=0;n<e.b.length;++n){var i=decode(e.b[n])
r.bufs.push(i)
r.bsizes.push(i.decode_size)
delete i.decode_size}}if(e.d){r.buf=decode(e.d)
r.buf_len=r.buf.decode_size
delete r.buf.decode_size
r.buf_offs=0}return t}A.packetFromJSON=packetFromJSON
function isPacket(e){return e instanceof Packet||e instanceof PacketDebug}A.isPacket=isPacket}).call(this)}).call(this,I("buffer").Buffer)},{"./base64.js":3,"./util.js":5,assert:void 0,buffer:void 0}],5:[function(e,t,r){"use strict"
r.nop=nop
r.identity=identity
r.once=once
r.empty=empty
r.easeInOut=easeInOut
r.easeIn=easeIn
r.easeOut=easeOut
r.clone=clone
r.merge=merge
r.has=has
r.defaults=defaults
r.defaultsDeep=defaultsDeep
r.cloneShallow=cloneShallow
r.deepEqual=deepEqual
r.deepAdd=deepAdd
r.clamp=clamp
r.lerp=lerp
r.mix=mix
r.map01=map01
r.sign=sign
r.mod=mod
r.log2=log2
r.ridx=ridx
r.round100=round100
r.round1000=round1000
r.fract=fract
r.nearSame=nearSame
r.titleCase=titleCase
r.lineCircleIntersect=lineCircleIntersect
r.lineLineIntersect=lineLineIntersect
r.inherits=inherits
r.isPowerOfTwo=isPowerOfTwo
r.nextHighestPowerOfTwo=nextHighestPowerOfTwo
r.logdata=logdata
r.isInteger=isInteger
r.toNumber=toNumber
r.randomNot=randomNot
r.toArray=toArray
r.arrayToSet=arrayToSet
r.objectToSet=objectToSet
r.matchAll=matchAll
r.callEach=callEach
r.sanitize=sanitize
r.plural=plural
r.secondsToFriendlyString=secondsToFriendlyString
r.secondsSince2020=secondsSince2020
r.dateToSafeLocaleString=dateToSafeLocaleString
r.dateToFileTimestamp=dateToFileTimestamp
r.msToTimeString=msToTimeString
r.removeSymbols=removeSymbols
r.cleanupStringArray=cleanupStringArray
r.cleanStringSplit=cleanStringSplit
r.eatPossiblePromise=eatPossiblePromise
r.errorString=errorString
r.deprecate=deprecate
r.EMAIL_REGEX=void 0
var o=e("assert")
var l=Math.abs,f=Math.floor,n=Math.min,i=Math.max,a=Math.random,s=Math.round,u=Math.pow,h=Math.sqrt
var c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
r.EMAIL_REGEX=c
function nop(){}function identity(e){return e}function once(e){var t=false
return function(){if(t)return
t=true
e.apply(void 0,arguments)}}function empty(e){for(var t in e)return false
return true}function easeInOut(e,t){var r=u(e,t)
return r/(r+u(1-e,t))}function easeIn(e,t){return 2*easeInOut(.5*e,t)}function easeOut(e,t){return 2*easeInOut(.5+.5*e,t)-1}function clone(e){if(!e)return e
return JSON.parse(JSON.stringify(e))}function merge(e,t){for(var r in t)e[r]=t[r]
return e}function has(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function defaults(e,t){for(var r in t)if(!has(e,r))e[r]=t[r]
return e}function defaultsDeep(e,t){for(var r in t)if(!has(e,r))e[r]=t[r]
else if("object"===typeof e[r])defaultsDeep(e[r],t[r])
return e}function cloneShallow(e){return merge({},e)}function deepEqual(e,t){if(Array.isArray(e)){if(!Array.isArray(t))return false
if(e.length!==t.length)return false
for(var r=0;r<e.length;++r)if(!deepEqual(e[r],t[r]))return false
return true}else if("object"===typeof e){if("object"!==typeof t)return false
if(!e||!t)return!e&&!t
for(var n in e)if(!deepEqual(e[n],t[n]))return false
for(var i in t)if(void 0!==t[i]&&void 0===e[i])return false
return true}return e===t}function deepAdd(e,t){o(e&&t)
for(var r in t){var n=t[r]
var i=e[r]
if("object"===typeof n){o(n)
var a=e[r]=i||{}
o.equal(typeof a,"object")
deepAdd(a,n)}else{if(!i)i=0
o("number"===typeof i)
o("number"===typeof n)
e[r]=(i||0)+n}}}function clamp(e,t,r){return n(i(t,e),r)}function lerp(e,t,r){return(1-e)*t+e*r}function mix(e,t,r){return(1-r)*e+r*t}function map01(e,t,r){return(e-t)/(r-t)}function sign(e){return e<0?-1:e>0?1:0}function mod(e,t){return(e%t+t)%t}function log2(e){for(var t=1,r=0;;t<<=1,++r)if(t>=e)return r}function ridx(e,t){e[t]=e[e.length-1]
e.pop()}function round100(e){return s(100*e)/100}function round1000(e){return s(1e3*e)/1e3}function fract(e){return e-f(e)}function nearSame(e,t,r){return l(t-e)<=r}function titleCase(e){return e.split(" ").map(function(e){return""+e[0].toUpperCase()+e.slice(1)}).join(" ")}var p=1e-5
function lineCircleIntersect(e,t,r,n){var i=[t[0]-e[0],t[1]-e[1]]
var a=i[0]*i[0]+i[1]*i[1]
var o=2*(i[0]*(e[0]-r[0])+i[1]*(e[1]-r[1]))
var f=r[0]*r[0]+r[1]*r[1]
f+=e[0]*e[0]+e[1]*e[1]
f-=2*(r[0]*e[0]+r[1]*e[1])
var s=o*o-4*a*(f-=n*n)
if(l(a)<p||s<0)return false
var u=(-o+h(s))/(2*a)
var c=(-o-h(s))/(2*a)
if(u>=0&&u<=1||c>=0&&c<=1)return true
return false}function lineLineIntersect(e,t,r,n){var i=(n[1]-r[1])*(t[0]-e[0])-(n[0]-r[0])*(t[1]-e[1])
var a=(n[0]-r[0])*(e[1]-r[1])-(n[1]-r[1])*(e[0]-r[0])
var o=(t[0]-e[0])*(e[1]-r[1])-(t[1]-e[1])*(e[0]-r[0])
if(0===i){if(!a&&!o)return true
return false}var f=a/i
var s=o/i
if(f<0||f>1||s<0||s>1)return false
return true}function inherits(e,t){o("function"===typeof t)
var r=e.prototype
e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
for(var n in r)e.prototype[n]=r[n]
for(var i in t)e[i]=t[i]}function isPowerOfTwo(e){return 0===(e&e-1)}function nextHighestPowerOfTwo(e){--e
for(var t=1;t<32;t<<=1)e|=e>>t
return e+1}function logdata(e){if(void 0===e)return""
var t=JSON.stringify(e)
if(t.length<120)return t
return t.slice(0,117)+"...("+t.length+")"}function isInteger(e){return"number"===typeof e&&isFinite(e)&&f(e)===e}function toNumber(e){return Number(e)}function randomNot(e,t){var r
do{r=f(a()*t)}while(r===e)
return r}function toArray(e){return Array.prototype.slice.call(e)}function arrayToSet(e){var t=Object.create(null)
for(var r=0;r<e.length;++r)t[e[r]]=true
return t}function objectToSet(e){return merge(Object.create(null),e)}function matchAll(e,t){var r=[]
var n
do{if(n=t.exec(e))r.push(n[1])}while(n)
return r}function callEach(e,t){if(e&&e.length){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i]
for(var a=0;a<e.length;++a)e[a].apply(e,n)}}var d=/[\uD800-\uDFFF\x00-\x1F\x7F\u1D54\u1D55\u2000-\u200F\u205F-\u206F\uFE00]/g
function sanitize(e){return(e||"").replace(d,"")}function plural(e,t){return t+(1===e?"":"s")}function secondsToFriendlyString(e,t){var r=f(e/86400)
var n=f((e-=60*r*60*24)/3600)
var i=f((e-=60*n*60)/60)
e-=60*i
var a=[]
if(r){var o=f(r/365.25)
if(o){r-=f(365.25*o)
a.push(o+" "+plural(o,"year"))}a.push(r+" "+plural(r,"day"))}if(n)a.push(n+" "+plural(n,"hour"))
if(i||!a.length)a.push(i+" "+plural(i,"minute"))
if(t)a.push(e+" "+plural(e,"second"))
return a.join(", ")}function secondsSince2020(){return f(Date.now()/1e3)-1577836800}function dateToSafeLocaleString(t,r){var n
try{n=r?t.toLocaleDateString():t.toLocaleString()}catch(e){console.error(e,"(Using toString as fallback)")
n=r?t.toDateString():t.toString()}return n}function dateToFileTimestamp(e){function pad(e){return""+(e<10?0:"")+e}return e.getFullYear()+"-"+pad(e.getMonth()+1)+"-"+pad(e.getDate())+" "+pad(e.getHours())+"_"+pad(e.getMinutes())+"_"+pad(e.getSeconds())}function msToTimeString(e,t){var r=e%1e3
var n
var i
var a
a=(i=(n=e-r)-(n%=6e4))-(i%=36e5)
i/=6e4
return((a/=36e5)?a+":":"")+(a&&i<10?"0":"")+i+":"+((n/=1e3)<10?"0":"")+n+((t=t||{}).hide_ms?"":"."+(r<10?"00":r<100?"0":"")+r)}function removeSymbols(e){return e.replace(/[.,/\\@#£!$%^&*;:<>{}|?=\-+_`'"~[\]()]/g,"").replace(/\s{1,}/g," ")}var v=arrayToSet(["am","an","and","as","at","be","by","el","for","in","is","la","las","los","of","on","or","the","that","this","to","with"])
function cleanupStringArray(e){return e.filter(function(e){return e.length>1&&e.length<=32&&!v[e]})}function cleanStringSplit(e,t){return cleanupStringArray(removeSymbols(sanitize(e)).toLowerCase().split(t).map(function(e){return e.trim()}))}function eatPossiblePromise(e){if(e&&e.catch)e.catch(nop)}function errorString(e){var t=String(e)
if("[object Object]"===t)try{t=JSON.stringify(e)}catch(e){}if(e&&e.stack&&e.message)t=String(e.message)
return t.slice(0,600)}function deprecate(e,t,r){Object.defineProperty(e,t,{get:function get(){o(false,t+" is deprecated, use "+r+" instead")
return}})}},{assert:void 0}]},{},[2])

//# sourceMappingURL=worlds_mod_api_messenger.bundle.js.map
