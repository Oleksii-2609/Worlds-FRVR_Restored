!function n(t,i,o){function f(r,e){if(!i[r]){if(!t[r]){var a="function"==typeof require&&require
if(!e&&a)return a(r,!0)
if(s)return s(r,!0)
throw(a=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",a}a=i[r]={exports:{}},t[r][0].call(a.exports,function(e){return f(t[r][1][e]||e)},a,a.exports,n,t,i,o)}return i[r].exports}for(var s="function"==typeof require&&require,e=0;e<o.length;e++)f(o[e])
return f}({1:[function(e,r,a){"use strict"
r.exports=function(){var e=new Float32Array(9)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}},{}],2:[function(e,r,a){"use strict"
r.exports=function(){var e=new Float32Array(16)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}},{}],3:[function(e,r,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.makeNoise2D=void 0
var f=e("./shuffle_seed"),E=(Math.sqrt(3)-1)/2,T=(1/Math.sqrt(3)-1)/2
function d(e,r,a){return{dx:-r-e*E,dy:-a-e*E,xsb:r,ysb:a}}a.makeNoise2D=function(e){for(var r=[],a=0;a<_.length;a+=4){for(var t=u[_[a]],i=null,n=null,o=0;o<t.length;o+=3)n=d(t[o],t[o+1],t[o+2]),null===i?r[a/4]=n:i.next=n,i=n
n.next=d(_[a+1],_[a+2],_[a+3])}for(var p=[],a=0;a<c.length;a+=2)p[c[a]]=r[c[a+1]]
for(var g=new Uint8Array(256),m=new Uint8Array(256),s=new Uint8Array(256),a=0;a<256;a++)s[a]=a
for((v=new Uint32Array(1))[0]=e,v=f.default(f.default(f.default(v))),a=255;0<=a;a--){var v=f.default(v),l=new Uint32Array(1)
l[0]=(v[0]+31)%(a+1),l[0]<0&&(l[0]+=a+1),g[a]=s[l[0]],m[a]=14&g[a],s[l[0]]=s[a]}return function(e,r){for(var a=(e+r)*T,t=e+a,i=r+a,n=Math.floor(t),o=Math.floor(i),s=e-(n+(a=(n+o)*E)),v=r-(o+a),l=0,f=p[(a=t-n)-(t=i-o)+1|(i=a+t)<<1|i+t<<2|i+a<<4];void 0!==f;f=f.next){var u,c,_=s+f.dx,d=v+f.dy,h=2-_*_-d*d
0<h&&(u=n+f.xsb,c=o+f.ysb,u=g[255&u],c=m[u+c&255],l+=h*h*h*h*(S[c]*_+S[c+1]*d))}return l*(1/47)}}
var u=[[1,1,0,1,0,1,0,0,0],[1,1,0,1,0,1,2,1,1]],S=[5,2,2,5,-5,2,-2,5,5,-2,2,-5,-5,-2,-2,-5],c=[0,1,1,0,4,1,17,0,20,2,21,2,22,5,23,5,26,4,39,3,42,4,43,3],_=[0,0,1,-1,0,0,-1,1,0,2,1,1,1,2,2,0,1,2,0,2,1,0,0,0]},{"./shuffle_seed":7}],4:[function(e,r,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.makeNoise3D=void 0
var f=e("./shuffle_seed"),I=(Math.sqrt(4)-1)/3,y=(1/Math.sqrt(4)-1)/3
function d(e,r,a,t){return{dx:-r-e*I,dy:-a-e*I,dz:-t-e*I,xsb:r,ysb:a,zsb:t}}a.makeNoise3D=function(e){for(var r=[],a=0;a<_.length;a+=9){for(var t=u[_[a]],i=null,n=null,o=0;o<t.length;o+=4)n=d(t[o],t[o+1],t[o+2],t[o+3]),null===i?r[a/9]=n:i.next=n,i=n
n.next=d(_[a+1],_[a+2],_[a+3],_[a+4]),n.next.next=d(_[a+5],_[a+6],_[a+7],_[a+8])}for(var A=[],a=0;a<c.length;a+=2)A[c[a]]=r[c[a+1]]
for(var R=new Uint8Array(256),O=new Uint8Array(256),s=new Uint8Array(256),a=0;a<256;a++)s[a]=a
for((v=new Uint32Array(1))[0]=e,v=f.default(f.default(f.default(v))),a=255;0<=a;a--){var v=f.default(v),l=new Uint32Array(1)
l[0]=(v[0]+31)%(a+1),l[0]<0&&(l[0]+=a+1),R[a]=s[l[0]],O[a]=R[a]%24*3,s[l[0]]=s[a]}return function(e,r,a){for(var t=e+(c=(e+r+a)*y),i=r+c,n=a+c,o=Math.floor(t),s=Math.floor(i),v=Math.floor(n),l=e-(o+(c=(o+s+v)*I)),f=r-(s+c),u=a-(v+c),c=t-o,_=0,d=A[(t=i-s)-(i=n-v)+1|c-t+1<<1|c-i+1<<2|(n=c+t+i)<<3|n+i<<5|n+t<<7|n+c<<9];void 0!==d;d=d.next){var h,p,g,m=l+d.dx,E=f+d.dy,T=u+d.dz,S=2-m*m-E*E-T*T
0<S&&(h=o+d.xsb,p=s+d.ysb,g=v+d.zsb,h=R[255&h],p=R[h+p&255],g=O[p+g&255],_+=S*S*S*S*(b[g]*m+b[g+1]*E+b[g+2]*T))}return _*(1/103)}}
var u=[[0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1],[2,1,1,0,2,1,0,1,2,0,1,1,3,1,1,1],[1,1,0,0,1,0,1,0,1,0,0,1,2,1,1,0,2,1,0,1,2,0,1,1]],b=[-11,4,4,-4,11,4,-4,4,11,11,4,4,4,11,4,4,4,11,-11,-4,4,-4,-11,4,-4,-4,11,11,-4,4,4,-11,4,4,-4,11,-11,4,-4,-4,11,-4,-4,4,-11,11,4,-4,4,11,-4,4,4,-11,-11,-4,-4,-4,-11,-4,-4,-4,-11,11,-4,-4,4,-11,-4,4,-4,-11],c=[0,2,1,1,2,2,5,1,6,0,7,0,32,2,34,2,129,1,133,1,160,5,161,5,518,0,519,0,546,4,550,4,645,3,647,3,672,5,673,5,674,4,677,3,678,4,679,3,680,13,681,13,682,12,685,14,686,12,687,14,712,20,714,18,809,21,813,23,840,20,841,21,1198,19,1199,22,1226,18,1230,19,1325,23,1327,22,1352,15,1353,17,1354,15,1357,17,1358,16,1359,16,1360,11,1361,10,1362,11,1365,10,1366,9,1367,9,1392,11,1394,11,1489,10,1493,10,1520,8,1521,8,1878,9,1879,9,1906,7,1910,7,2005,6,2007,6,2032,8,2033,8,2034,7,2037,6,2038,7,2039,6],_=[0,0,1,-1,0,0,1,0,-1,0,0,-1,1,0,0,0,1,-1,0,0,-1,0,1,0,0,-1,1,0,2,1,1,0,1,1,1,-1,0,2,1,0,1,1,1,-1,1,0,2,0,1,1,1,-1,1,1,1,3,2,1,0,3,1,2,0,1,3,2,0,1,3,1,0,2,1,3,0,2,1,3,0,1,2,1,1,1,0,0,2,2,0,0,1,1,0,1,0,2,0,2,0,1,1,0,0,1,2,0,0,2,2,0,0,0,0,1,1,-1,1,2,0,0,0,0,1,-1,1,1,2,0,0,0,0,1,1,1,-1,2,3,1,1,1,2,0,0,2,2,3,1,1,1,2,2,0,0,2,3,1,1,1,2,0,2,0,2,1,1,-1,1,2,0,0,2,2,1,1,-1,1,2,2,0,0,2,1,-1,1,1,2,0,0,2,2,1,-1,1,1,2,0,2,0,2,1,1,1,-1,2,2,0,0,2,1,1,1,-1,2,0,2,0]},{"./shuffle_seed":7}],5:[function(e,r,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.makeNoise4D=void 0
var f=e("./shuffle_seed"),L=(Math.sqrt(5)-1)/4,M=(1/Math.sqrt(5)-1)/4
function d(e,r,a,t,i){return{dx:-r-e*L,dy:-a-e*L,dz:-t-e*L,dw:-i-e*L,xsb:r,ysb:a,zsb:t,wsb:i}}a.makeNoise4D=function(e){for(var r=[],a=0;a<_.length;a+=16){for(var t=u[_[a]],i=null,n=null,o=0;o<t.length;o+=5)n=d(t[o],t[o+1],t[o+2],t[o+3],t[o+4]),null===i?r[a/16]=n:i.next=n,i=n
n.next=d(_[a+1],_[a+2],_[a+3],_[a+4],_[a+5]),n.next.next=d(_[a+6],_[a+7],_[a+8],_[a+9],_[a+10]),n.next.next.next=d(_[a+11],_[a+12],_[a+13],_[a+14],_[a+15])}for(var w=[],a=0;a<c.length;a+=2)w[c[a]]=r[c[a+1]]
for(var D=new Uint8Array(256),N=new Uint8Array(256),s=new Uint8Array(256),a=0;a<256;a++)s[a]=a
for((v=new Uint32Array(1))[0]=e,v=f.default(f.default(f.default(v))),a=255;0<=a;a--){var v=f.default(v),l=new Uint32Array(1)
l[0]=(v[0]+31)%(a+1),l[0]<0&&(l[0]+=a+1),D[a]=s[l[0]],N[a]=252&D[a],s[l[0]]=s[a]}return function(e,r,a,t){for(var i=e+(p=(e+r+a+t)*M),n=r+p,o=a+p,s=t+p,v=Math.floor(i),l=Math.floor(n),f=Math.floor(o),u=Math.floor(s),c=e-(v+(p=(v+l+f+u)*L)),_=r-(l+p),d=a-(f+p),h=t-(u+p),p=i-v,i=n-l,g=0,m=w[(n=o-f)-(o=s-u)+1|i-n+1<<1|i-o+1<<2|p-i+1<<3|p-n+1<<4|p-o+1<<5|(s=p+i+n+o)<<6|s+o<<8|s+n<<11|s+i<<14|s+p<<17];void 0!==m;m=m.next){var E,T,S,A,R=c+m.dx,O=_+m.dy,I=d+m.dz,y=h+m.dw,b=2-R*R-O*O-I*I-y*y
0<b&&(E=v+m.xsb,T=l+m.ysb,S=f+m.zsb,A=u+m.wsb,E=D[255&E],T=D[E+T&255],S=D[T+S&255],A=N[S+A&255],g+=b*b*b*b*(P[A]*R+P[A+1]*O+P[A+2]*I+P[A+3]*y))}return g*(1/30)}}
var u=[[0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1],[3,1,1,1,0,3,1,1,0,1,3,1,0,1,1,3,0,1,1,1,4,1,1,1,1],[1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,2,1,1,0,0,2,1,0,1,0,2,1,0,0,1,2,0,1,1,0,2,0,1,0,1,2,0,0,1,1],[3,1,1,1,0,3,1,1,0,1,3,1,0,1,1,3,0,1,1,1,2,1,1,0,0,2,1,0,1,0,2,1,0,0,1,2,0,1,1,0,2,0,1,0,1,2,0,0,1,1]],P=[3,1,1,1,1,3,1,1,1,1,3,1,1,1,1,3,-3,1,1,1,-1,3,1,1,-1,1,3,1,-1,1,1,3,3,-1,1,1,1,-3,1,1,1,-1,3,1,1,-1,1,3,-3,-1,1,1,-1,-3,1,1,-1,-1,3,1,-1,-1,1,3,3,1,-1,1,1,3,-1,1,1,1,-3,1,1,1,-1,3,-3,1,-1,1,-1,3,-1,1,-1,1,-3,1,-1,1,-1,3,3,-1,-1,1,1,-3,-1,1,1,-1,-3,1,1,-1,-1,3,-3,-1,-1,1,-1,-3,-1,1,-1,-1,-3,1,-1,-1,-1,3,3,1,1,-1,1,3,1,-1,1,1,3,-1,1,1,1,-3,-3,1,1,-1,-1,3,1,-1,-1,1,3,-1,-1,1,1,-3,3,-1,1,-1,1,-3,1,-1,1,-1,3,-1,1,-1,1,-3,-3,-1,1,-1,-1,-3,1,-1,-1,-1,3,-1,-1,-1,1,-3,3,1,-1,-1,1,3,-1,-1,1,1,-3,-1,1,1,-1,-3,-3,1,-1,-1,-1,3,-1,-1,-1,1,-3,-1,-1,1,-1,-3,3,-1,-1,-1,1,-3,-1,-1,1,-1,-3,-1,1,-1,-1,-3,-3,-1,-1,-1,-1,-3,-1,-1,-1,-1,-3,-1,-1,-1,-1,-3],c=[0,3,1,2,2,3,5,2,6,1,7,1,8,3,9,2,10,3,13,2,16,3,18,3,22,1,23,1,24,3,26,3,33,2,37,2,38,1,39,1,41,2,45,2,54,1,55,1,56,0,57,0,58,0,59,0,60,0,61,0,62,0,63,0,256,3,258,3,264,3,266,3,272,3,274,3,280,3,282,3,2049,2,2053,2,2057,2,2061,2,2081,2,2085,2,2089,2,2093,2,2304,9,2305,9,2312,9,2313,9,16390,1,16391,1,16406,1,16407,1,16422,1,16423,1,16438,1,16439,1,16642,8,16646,8,16658,8,16662,8,18437,6,18439,6,18469,6,18471,6,18688,9,18689,9,18690,8,18693,6,18694,8,18695,6,18696,9,18697,9,18706,8,18710,8,18725,6,18727,6,131128,0,131129,0,131130,0,131131,0,131132,0,131133,0,131134,0,131135,0,131352,7,131354,7,131384,7,131386,7,133161,5,133165,5,133177,5,133181,5,133376,9,133377,9,133384,9,133385,9,133400,7,133402,7,133417,5,133421,5,133432,7,133433,5,133434,7,133437,5,147510,4,147511,4,147518,4,147519,4,147714,8,147718,8,147730,8,147734,8,147736,7,147738,7,147766,4,147767,4,147768,7,147770,7,147774,4,147775,4,149509,6,149511,6,149541,6,149543,6,149545,5,149549,5,149558,4,149559,4,149561,5,149565,5,149566,4,149567,4,149760,9,149761,9,149762,8,149765,6,149766,8,149767,6,149768,9,149769,9,149778,8,149782,8,149784,7,149786,7,149797,6,149799,6,149801,5,149805,5,149814,4,149815,4,149816,7,149817,5,149818,7,149821,5,149822,4,149823,4,149824,37,149825,37,149826,36,149829,34,149830,36,149831,34,149832,37,149833,37,149842,36,149846,36,149848,35,149850,35,149861,34,149863,34,149865,33,149869,33,149878,32,149879,32,149880,35,149881,33,149882,35,149885,33,149886,32,149887,32,150080,49,150082,48,150088,49,150098,48,150104,47,150106,47,151873,46,151877,45,151881,46,151909,45,151913,44,151917,44,152128,49,152129,46,152136,49,152137,46,166214,43,166215,42,166230,43,166247,42,166262,41,166263,41,166466,48,166470,43,166482,48,166486,43,168261,45,168263,42,168293,45,168295,42,168512,31,168513,28,168514,31,168517,28,168518,25,168519,25,280952,40,280953,39,280954,40,280957,39,280958,38,280959,38,281176,47,281178,47,281208,40,281210,40,282985,44,282989,44,283001,39,283005,39,283208,30,283209,27,283224,30,283241,27,283256,22,283257,22,297334,41,297335,41,297342,38,297343,38,297554,29,297558,24,297562,29,297590,24,297594,21,297598,21,299365,26,299367,23,299373,26,299383,23,299389,20,299391,20,299584,31,299585,28,299586,31,299589,28,299590,25,299591,25,299592,30,299593,27,299602,29,299606,24,299608,30,299610,29,299621,26,299623,23,299625,27,299629,26,299638,24,299639,23,299640,22,299641,22,299642,21,299645,20,299646,21,299647,20,299648,61,299649,60,299650,61,299653,60,299654,59,299655,59,299656,58,299657,57,299666,55,299670,54,299672,58,299674,55,299685,52,299687,51,299689,57,299693,52,299702,54,299703,51,299704,56,299705,56,299706,53,299709,50,299710,53,299711,50,299904,61,299906,61,299912,58,299922,55,299928,58,299930,55,301697,60,301701,60,301705,57,301733,52,301737,57,301741,52,301952,79,301953,79,301960,76,301961,76,316038,59,316039,59,316054,54,316071,51,316086,54,316087,51,316290,78,316294,78,316306,73,316310,73,318085,77,318087,77,318117,70,318119,70,318336,79,318337,79,318338,78,318341,77,318342,78,318343,77,430776,56,430777,56,430778,53,430781,50,430782,53,430783,50,431e3,75,431002,72,431032,75,431034,72,432809,74,432813,69,432825,74,432829,69,433032,76,433033,76,433048,75,433065,74,433080,75,433081,74,447158,71,447159,68,447166,71,447167,68,447378,73,447382,73,447386,72,447414,71,447418,72,447422,71,449189,70,449191,70,449197,69,449207,68,449213,69,449215,68,449408,67,449409,67,449410,66,449413,64,449414,66,449415,64,449416,67,449417,67,449426,66,449430,66,449432,65,449434,65,449445,64,449447,64,449449,63,449453,63,449462,62,449463,62,449464,65,449465,63,449466,65,449469,63,449470,62,449471,62,449472,19,449473,19,449474,18,449477,16,449478,18,449479,16,449480,19,449481,19,449490,18,449494,18,449496,17,449498,17,449509,16,449511,16,449513,15,449517,15,449526,14,449527,14,449528,17,449529,15,449530,17,449533,15,449534,14,449535,14,449728,19,449729,19,449730,18,449734,18,449736,19,449737,19,449746,18,449750,18,449752,17,449754,17,449784,17,449786,17,451520,19,451521,19,451525,16,451527,16,451528,19,451529,19,451557,16,451559,16,451561,15,451565,15,451577,15,451581,15,451776,19,451777,19,451784,19,451785,19,465858,18,465861,16,465862,18,465863,16,465874,18,465878,18,465893,16,465895,16,465910,14,465911,14,465918,14,465919,14,466114,18,466118,18,466130,18,466134,18,467909,16,467911,16,467941,16,467943,16,468160,13,468161,13,468162,13,468163,13,468164,13,468165,13,468166,13,468167,13,580568,17,580570,17,580585,15,580589,15,580598,14,580599,14,580600,17,580601,15,580602,17,580605,15,580606,14,580607,14,580824,17,580826,17,580856,17,580858,17,582633,15,582637,15,582649,15,582653,15,582856,12,582857,12,582872,12,582873,12,582888,12,582889,12,582904,12,582905,12,596982,14,596983,14,596990,14,596991,14,597202,11,597206,11,597210,11,597214,11,597234,11,597238,11,597242,11,597246,11,599013,10,599015,10,599021,10,599023,10,599029,10,599031,10,599037,10,599039,10,599232,13,599233,13,599234,13,599235,13,599236,13,599237,13,599238,13,599239,13,599240,12,599241,12,599250,11,599254,11,599256,12,599257,12,599258,11,599262,11,599269,10,599271,10,599272,12,599273,12,599277,10,599279,10,599282,11,599285,10,599286,11,599287,10,599288,12,599289,12,599290,11,599293,10,599294,11,599295,10],_=[0,0,1,-1,0,0,0,1,0,-1,0,0,1,0,0,-1,0,0,-1,1,0,0,0,0,1,-1,0,0,0,1,0,-1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,-1,0,0,-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,2,1,1,0,0,1,1,1,-1,0,1,1,1,0,-1,0,2,1,0,1,0,1,1,-1,1,0,1,1,0,1,-1,0,2,0,1,1,0,1,-1,1,1,0,1,0,1,1,-1,0,2,1,0,0,1,1,1,-1,0,1,1,1,0,-1,1,0,2,0,1,0,1,1,-1,1,0,1,1,0,1,-1,1,0,2,0,0,1,1,1,-1,0,1,1,1,0,-1,1,1,1,4,2,1,1,0,4,1,2,1,0,4,1,1,2,0,1,4,2,1,0,1,4,1,2,0,1,4,1,1,0,2,1,4,2,0,1,1,4,1,0,2,1,4,1,0,1,2,1,4,0,2,1,1,4,0,1,2,1,4,0,1,1,2,1,2,1,1,0,0,3,2,1,0,0,3,1,2,0,0,1,2,1,0,1,0,3,2,0,1,0,3,1,0,2,0,1,2,0,1,1,0,3,0,2,1,0,3,0,1,2,0,1,2,1,0,0,1,3,2,0,0,1,3,1,0,0,2,1,2,0,1,0,1,3,0,2,0,1,3,0,1,0,2,1,2,0,0,1,1,3,0,0,2,1,3,0,0,1,2,2,3,1,1,1,0,2,1,1,1,-1,2,2,0,0,0,2,3,1,1,0,1,2,1,1,-1,1,2,2,0,0,0,2,3,1,0,1,1,2,1,-1,1,1,2,2,0,0,0,2,3,1,1,1,0,2,1,1,1,-1,2,0,2,0,0,2,3,1,1,0,1,2,1,1,-1,1,2,0,2,0,0,2,3,0,1,1,1,2,-1,1,1,1,2,0,2,0,0,2,3,1,1,1,0,2,1,1,1,-1,2,0,0,2,0,2,3,1,0,1,1,2,1,-1,1,1,2,0,0,2,0,2,3,0,1,1,1,2,-1,1,1,1,2,0,0,2,0,2,3,1,1,0,1,2,1,1,-1,1,2,0,0,0,2,2,3,1,0,1,1,2,1,-1,1,1,2,0,0,0,2,2,3,0,1,1,1,2,-1,1,1,1,2,0,0,0,2,2,1,1,1,-1,0,1,1,1,0,-1,0,0,0,0,0,2,1,1,-1,1,0,1,1,0,1,-1,0,0,0,0,0,2,1,-1,1,1,0,1,0,1,1,-1,0,0,0,0,0,2,1,1,-1,0,1,1,1,0,-1,1,0,0,0,0,0,2,1,-1,1,0,1,1,0,1,-1,1,0,0,0,0,0,2,1,-1,0,1,1,1,0,-1,1,1,0,0,0,0,0,2,1,1,1,-1,0,1,1,1,0,-1,2,2,0,0,0,2,1,1,-1,1,0,1,1,0,1,-1,2,2,0,0,0,2,1,1,-1,0,1,1,1,0,-1,1,2,2,0,0,0,2,1,1,1,-1,0,1,1,1,0,-1,2,0,2,0,0,2,1,-1,1,1,0,1,0,1,1,-1,2,0,2,0,0,2,1,-1,1,0,1,1,0,1,-1,1,2,0,2,0,0,2,1,1,-1,1,0,1,1,0,1,-1,2,0,0,2,0,2,1,-1,1,1,0,1,0,1,1,-1,2,0,0,2,0,2,1,-1,0,1,1,1,0,-1,1,1,2,0,0,2,0,2,1,1,-1,0,1,1,1,0,-1,1,2,0,0,0,2,2,1,-1,1,0,1,1,0,1,-1,1,2,0,0,0,2,2,1,-1,0,1,1,1,0,-1,1,1,2,0,0,0,2,3,1,1,0,0,0,2,2,0,0,0,2,1,1,1,-1,3,1,0,1,0,0,2,0,2,0,0,2,1,1,1,-1,3,1,0,0,1,0,2,0,0,2,0,2,1,1,1,-1,3,1,1,0,0,0,2,2,0,0,0,2,1,1,-1,1,3,1,0,1,0,0,2,0,2,0,0,2,1,1,-1,1,3,1,0,0,0,1,2,0,0,0,2,2,1,1,-1,1,3,1,1,0,0,0,2,2,0,0,0,2,1,-1,1,1,3,1,0,0,1,0,2,0,0,2,0,2,1,-1,1,1,3,1,0,0,0,1,2,0,0,0,2,2,1,-1,1,1,3,1,0,1,0,0,2,0,2,0,0,2,-1,1,1,1,3,1,0,0,1,0,2,0,0,2,0,2,-1,1,1,1,3,1,0,0,0,1,2,0,0,0,2,2,-1,1,1,1,3,3,2,1,0,0,3,1,2,0,0,4,1,1,1,1,3,3,2,0,1,0,3,1,0,2,0,4,1,1,1,1,3,3,0,2,1,0,3,0,1,2,0,4,1,1,1,1,3,3,2,0,0,1,3,1,0,0,2,4,1,1,1,1,3,3,0,2,0,1,3,0,1,0,2,4,1,1,1,1,3,3,0,0,2,1,3,0,0,1,2,4,1,1,1,1,3,3,2,1,0,0,3,1,2,0,0,2,1,1,1,-1,3,3,2,0,1,0,3,1,0,2,0,2,1,1,1,-1,3,3,0,2,1,0,3,0,1,2,0,2,1,1,1,-1,3,3,2,1,0,0,3,1,2,0,0,2,1,1,-1,1,3,3,2,0,0,1,3,1,0,0,2,2,1,1,-1,1,3,3,0,2,0,1,3,0,1,0,2,2,1,1,-1,1,3,3,2,0,1,0,3,1,0,2,0,2,1,-1,1,1,3,3,2,0,0,1,3,1,0,0,2,2,1,-1,1,1,3,3,0,0,2,1,3,0,0,1,2,2,1,-1,1,1,3,3,0,2,1,0,3,0,1,2,0,2,-1,1,1,1,3,3,0,2,0,1,3,0,1,0,2,2,-1,1,1,1,3,3,0,0,2,1,3,0,0,1,2,2,-1,1,1,1]},{"./shuffle_seed":7}],6:[function(e,r,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.makeNoise4D=a.makeNoise3D=a.makeNoise2D=void 0
var t=e("./2d")
Object.defineProperty(a,"makeNoise2D",{enumerable:!0,get:function(){return t.makeNoise2D}})
var i=e("./3d")
Object.defineProperty(a,"makeNoise3D",{enumerable:!0,get:function(){return i.makeNoise3D}})
var n=e("./4d")
Object.defineProperty(a,"makeNoise4D",{enumerable:!0,get:function(){return n.makeNoise4D}})},{"./2d":3,"./3d":4,"./4d":5}],7:[function(e,r,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var r=new Uint32Array(1)
return r[0]=1664525*e[0]+1013904223,r}},{}],8:[function(e,r,a){"use strict"
function n(e){e="function"==typeof e?e:e?function(){var r=0,a=0,t=0,i=1,e=function(){var t=4022871197
return function(e){e=e.toString()
for(var r=0;r<e.length;r++){var a=.02519603282416938*(t+=e.charCodeAt(r))
a-=t=a>>>0,t=(a*=t)>>>0,t+=4294967296*(a-=t)}return 2.3283064365386963e-10*(t>>>0)}}()
r=e(" "),a=e(" "),t=e(" ")
for(var n=0;n<arguments.length;n++)(r-=e(arguments[n]))<0&&(r+=1),(a-=e(arguments[n]))<0&&(a+=1),(t-=e(arguments[n]))<0&&(t+=1)
return function(){var e=2091639*r+2.3283064365386963e-10*i
return r=a,a=t,t=e-(i=0|e)}}(e):Math.random
this.p=o(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512)
for(var r=0;r<512;r++)this.perm[r]=this.p[255&r],this.permMod12[r]=this.perm[r]%12}function o(e){for(var r=new Uint8Array(256),a=0;a<256;a++)r[a]=a
for(a=0;a<255;a++){var t=a+~~(e()*(256-a)),i=r[a]
r[a]=r[t],r[t]=i}return r}var E,T,w,V,q
E=.5*(Math.sqrt(3)-1),T=(3-Math.sqrt(3))/6,w=1/6,V=(Math.sqrt(5)-1)/4,q=(5-Math.sqrt(5))/20,n.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,r){var a,t=this.permMod12,i=this.perm,n=this.grad3,o=0,s=0,v=0,l=(e+r)*E,f=((g=Math.floor(e+l))+(m=Math.floor(r+l)))*T,u=e-(g-f),c=r-(m-f),_=c<u?(a=1,0):(a=0,1),d=u-a+T,h=c-_+T,p=u-1+2*T,e=255&g,r=255&m,g=.5-d*d-h*h,m=.5-p*p-(l=c-1+2*T)*l
return 70*((o=0<=(f=.5-u*u-c*c)?(f*=f)*f*(n[f=3*t[e+i[r]]]*u+n[1+f]*c):o)+(s=0<=g?(g*=g)*g*(n[_=3*t[e+a+i[r+_]]]*d+n[1+_]*h):s)+(0<=m?(m*=m)*m*(n[r=3*t[1+e+i[1+r]]]*p+n[1+r]*l):v))},noise3D:function(e,r,a){var t,i,n,o,s,v=this.permMod12,l=this.perm,f=this.grad3,u=(e+r+a)*(1/3),c=((I=Math.floor(e+u))+(y=Math.floor(r+u))+(b=Math.floor(a+u)))*w,_=e-(I-c),d=r-(y-c),h=a-(b-c),p=d<=_?h<=d?(o=n=t=1,s=i=0):n=h<=_?(o=s=i=0,t=1):(o=i=t=0,s=1):d<h?(n=i=t=0,o=s=1):_<h?(n=s=t=0,o=i=1):(o=n=i=1,s=t=0),g=_-t+w,m=d-i+w,E=h-s+w,T=_-n+2*w,S=d-o+2*w,A=h-p+2*w,R=_-1+.5,O=d-1+.5,e=255&I,r=255&y,a=255&b,I=.6-g*g-m*m-E*E,y=.6-T*T-S*S-A*A,b=.6-R*R-O*O-(u=h-1+.5)*u
return 32*(((c=.6-_*_-d*d-h*h)<0?0:(c*=c)*c*(f[c=3*v[e+l[r+l[a]]]]*_+f[1+c]*d+f[2+c]*h))+(I<0?0:(I*=I)*I*(f[s=3*v[e+t+l[r+i+l[a+s]]]]*g+f[1+s]*m+f[2+s]*E))+(y<0?0:(y*=y)*y*(f[p=3*v[e+n+l[r+o+l[a+p]]]]*T+f[1+p]*S+f[2+p]*A))+(b<0?0:(b*=b)*b*(f[a=3*v[1+e+l[1+r+l[1+a]]]]*R+f[1+a]*O+f[2+a]*u)))},noise4D:function(e,r,a,t){var i=this.perm,n=this.grad4,o=(e+r+a+t)*V,s=e-((G=Math.floor(e+o))-(F=(G+(B=Math.floor(r+o))+(H=Math.floor(a+o))+(W=Math.floor(t+o)))*q)),v=r-(B-F),l=a-(H-F),f=t-(W-F),u=0,c=0,_=0,d=0
v<s?u++:c++,l<s?u++:_++,f<s?u++:d++,l<v?c++:_++,f<v?c++:d++,f<l?_++:d++
var h,p,g,m,E,T,S,A,R,O,I,y,b=s-(h=3<=u?1:0)+q,w=v-(p=3<=c?1:0)+q,D=l-(g=3<=_?1:0)+q,N=f-(O=3<=d?1:0)+q,L=s-(m=2<=u?1:0)+2*q,M=v-(E=2<=c?1:0)+2*q,P=l-(T=2<=_?1:0)+2*q,C=f-(I=2<=d?1:0)+2*q,k=s-(S=1<=u?1:0)+3*q,x=v-(A=1<=c?1:0)+3*q,U=l-(R=1<=_?1:0)+3*q,F=255&G,u=255&B,c=255&H,_=255&W,G=.6-b*b-w*w-D*D-N*N,B=.6-L*L-M*M-P*P-C*C,H=.6-k*k-x*x-U*U-(o=f-(y=1<=d?1:0)+3*q)*o,W=.6-(e=s-1+4*q)*e-(r=v-1+4*q)*r-(a=l-1+4*q)*a-(t=f-1+4*q)*t
return 27*(((d=.6-s*s-v*v-l*l-f*f)<0?0:(d*=d)*d*(n[d=i[F+i[u+i[c+i[_]]]]%32*4]*s+n[1+d]*v+n[2+d]*l+n[3+d]*f))+(G<0?0:(G*=G)*G*(n[O=i[F+h+i[u+p+i[c+g+i[_+O]]]]%32*4]*b+n[1+O]*w+n[2+O]*D+n[3+O]*N))+(B<0?0:(B*=B)*B*(n[I=i[F+m+i[u+E+i[c+T+i[_+I]]]]%32*4]*L+n[1+I]*M+n[2+I]*P+n[3+I]*C))+(H<0?0:(H*=H)*H*(n[y=i[F+S+i[u+A+i[c+R+i[_+y]]]]%32*4]*k+n[1+y]*x+n[2+y]*U+n[3+y]*o))+(W<0?0:(W*=W)*W*(n[_=i[1+F+i[1+u+i[1+c+i[1+_]]]]%32*4]*e+n[1+_]*r+n[2+_]*a+n[3+_]*t)))}},n._buildPermutationTable=o,"undefined"!=typeof define&&define.amd&&define(function(){return n}),void 0!==a?a.SimplexNoise=n:"undefined"!=typeof window&&(window.SimplexNoise=n),void 0!==r&&(r.exports=n)},{}],9:[function(e,r,a){"use strict"
e("../glov/client/require.js"),deps.assert=e("assert"),deps.buffer=e("buffer"),deps["gl-mat3/create"]=e("gl-mat3/create"),deps["gl-mat4/create"]=e("gl-mat4/create"),deps["simplex-noise"]=e("simplex-noise"),deps["open-simplex-noise"]=e("open-simplex-noise")},{"../glov/client/require.js":10,assert:11,buffer:12,"gl-mat3/create":1,"gl-mat4/create":2,"open-simplex-noise":6,"simplex-noise":8}],10:[function(e,r,a){"use strict"
var t="undefined"==typeof window?self:window,i=t.deps=t.deps||{}
t.require=function(e){if(!i[e])throw new Error("Cannot find module '"+e+"' (add it to deps.js or equivalent)")
return i[e]}},{}],11:[function(e,r,a){"use strict"
function n(e,r){if(!e)throw r=r||(void 0===e||!1===e?"":JSON.stringify(e)),new Error("Assertion failed"+(r?": "+r:""))}r.exports=n,r.exports.ok=n,r.exports.equal=function(e,r){if(e!==r)throw new Error('Assertion failed: "'+e+'"==="'+r+'"')}},{}],12:[function(e,r,a){"use strict"
a.__esModule=!0,a.Buffer=void 0
var t={};(a.Buffer=t).isBuffer=function(e){return!1}},{}]},{},[9]);(function(){function r(s,v,l){function o(a,e){if(!v[a]){if(!s[a]){var t="function"==typeof require&&require
if(!e&&t)return t(a,!0)
if(f)return f(a,!0)
var i=new Error("Cannot find module '"+a+"'")
throw i.code="MODULE_NOT_FOUND",i}var n=v[a]={exports:{}}
s[a][0].call(n.exports,function(e){return o(s[a][1][e]||e)},n,n.exports,r,s,v,l)}return v[a].exports}for(var f="function"==typeof require&&require,e=0;e<l.length;e++)o(l[e])
return o}return r})()({1:[function(e,r,a){r.exports={primary:{fn:"voxels",tiles_per_row:8,tile_res:224,pad:4,tex_res:2048,nudge:[56,60],tile_map:"default"},primary_mask:{fn:"voxels_mask",tiles_per_row:8,tile_res:224,pad:4,tex_res:2048,nudge:[56,60],tile_map:"default"},primary_normal:{fn:"voxels_normal",tiles_per_row:8,tile_res:224,pad:4,tex_res:2048,nudge:[56,60],tile_map:"default"},util:{fn:"voxel_util",tiles_per_row:4,tile_res:124,pad:2,tex_res:512}}},{}],2:[function(e,r,a){"use strict"
var t
e("../../glov/client/hsv").hsvToRGB
e("../../glov/common/vmath").vec3
e("../../common/ids")
e("../../common/ids").TYPE_ITEM
var i=e("../../common/materials_common")
i.CraftClass
i.Mat
var n=e("../tiles_const")
var o=n.LIQUID_TILES
n.TILES
n.FuelRate
n.Tint
r.exports=((t={})[o.WATER]={tile_code:"WATER",def:24,inv:[],name:"Water"},t[o.WATER_FLOW]={tile_code:"WATER_FLOW",def:34,inv:[],name:"Water"},t)},{"../../common/ids":42,"../../common/materials_common":43,"../../glov/client/hsv":49,"../../glov/common/vmath":60,"../tiles_const":38}],3:[function(e,r,a){"use strict"
var t,i,n,o,s
var v=e("../../glov/client/hsv").hsvToRGB
var l=e("../../glov/common/vmath").vec3
var f=e("../../common/ids")
var u=e("../../common/ids").TYPE_ITEM
var c=e("../../common/materials_common")
var _=c.CraftClass
var d=c.Mat
var h=e("../tiles_const")
h.LIQUID_TILES
var p=h.TILES
var g=h.FuelRate
var m=h.Tint
r.exports=((s={})[p.AETHERSTONE]={tile_code:"AETHERSTONE",mat:d.AETHERSTONE,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Aetherstone",unplaceable:true},s[p.BRICK_CLAY]={tile_code:"BRICK_CLAY",mat:d.STONE,craft_class:_.BRICK,def:28,not_material_source:true,crafted:true},s[p.BRICK_STONE]={tile_code:"BRICK_STONE",mat:d.FANCY_STONE,craft_class:_.BRICK,def:36,crafted:true},s[p.COAL]={tile_code:"COAL",mat:d.COAL,def:4,inv:[{type:u,id:f.ITEM_COAL}],not_material_source:true},s[p.COBALT]={tile_code:"COBALT",mat:d.COBALT,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Cobalt",unplaceable:true},s[p.COLORED_HUE0]={tile_code:"COLORED_HUE0",tint_color:v(l(),342,1,1),mat:d.WOOD,def:10,not_material_source:true,crafted:true},s[p.COLORED_HUE1]={tile_code:"COLORED_HUE1",tint_color:v(l(),38,1,1),mat:d.WOOD,def:10,not_material_source:true,crafted:true},s[p.COLORED_HUE2]={tile_code:"COLORED_HUE2",tint_color:v(l(),55,.85,1),mat:d.WOOD,def:10,not_material_source:true,crafted:true},s[p.COLORED_HUE3]={tile_code:"COLORED_HUE3",tint_color:v(l(),134,1,.89),mat:d.WOOD,def:10,not_material_source:true,crafted:true},s[p.COLORED_HUE4]={tile_code:"COLORED_HUE4",tint_color:v(l(),195,.67,1),mat:d.WOOD,def:10,not_material_source:true,crafted:true},s[p.COLORED_HUE5]={tile_code:"COLORED_HUE5",tint_color:v(l(),260,.63,.86),mat:d.WOOD,def:10,not_material_source:true,crafted:true},s[p.COPPER]={tile_code:"COPPER",mat:d.COPPER,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Copper",unplaceable:true},s[p.CORAL]={tile_code:"CORAL",mat:d.CORAL,def:3,next_release:true},s[p.DIRT]={tile_code:"DIRT",below:((t={})[p.STONE]=57,t),mat:d.DIRT,def:8,face:[9,9]},s[p.DIRT_WITH_FLINT]={tile_code:"DIRT_WITH_FLINT",mat:d.DIRT,blueprint:p.DIRT,def:33,inv:[p.DIRT,{type:u,id:f.ITEM_HATCHET,attr1:d.FLINT}],name:"Dirt (+Flint)",unplaceable:true},s[p.EMBERYLLIUM]={tile_code:"EMBERYLLIUM",mat:d.EMBERYLLIUM,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Emberyllium",unplaceable:true},s[p.GLASS]={tile_code:"GLASS",mat:d.SAND,def:35,tile1:true,no_self:true,alpha_cutout:true,crafted:true},s[p.GOLD]={tile_code:"GOLD",mat:d.GOLD,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Gold",unplaceable:true},s[p.GRASS]={tile_code:"GRASS",below:((i={})[p.GRASS]=1,i[p.STONE]=58,i),tint:m.GRASS,mat:d.DIRT,def:56,face:[1,9],inv:p.DIRT,not_material_source:true},s[p.IRON]={tile_code:"IRON",mat:d.IRON,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Iron",unplaceable:true},s[p.LEAVES1]={tile_code:"LEAVES1",tint_color:v(l(),70,1,.76),mat:d.LEAF,def:20,inv:p.LEAVES3,not_material_source:true},s[p.LEAVES2]={tile_code:"LEAVES2",tint_color:v(l(),90,1,.76),mat:d.LEAF,def:20,inv:p.LEAVES3,not_material_source:true},s[p.LEAVES3]={tile_code:"LEAVES3",tint_color:v(l(),105,1,.76),mat:d.LEAF,fuel_rate:g.LEAVES,def:20,inv:p.LEAVES3},s[p.LEAVES4]={tile_code:"LEAVES4",tint_color:v(l(),120,1,.76),mat:d.LEAF,def:20,inv:p.LEAVES3,not_material_source:true},s[p.LEAVES5]={tile_code:"LEAVES5",tint_color:v(l(),140,1,.76),mat:d.LEAF,def:20,inv:p.LEAVES3,not_material_source:true},s[p.MYTHRIL]={tile_code:"MYTHRIL",mat:d.MYTHRIL,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Mythril",unplaceable:true},s[p.ORE_IN_STONE]={tile_code:"ORE_IN_STONE",tint:m.ORE,mat:d.STONE,limited_blueprint:p.STONE,def:5,not_material_source:true,is_stone:true,unlimited_only:true,variable_yield:true},s[p.ORE_IN_STONE_DARK]={tile_code:"ORE_IN_STONE_DARK",tint:m.ORE,mat:d.STONE,limited_blueprint:p.STONE_DARK,def:13,not_material_source:true,is_stone:true,unlimited_only:true,variable_yield:true},s[p.ORE_IN_STONE_LIGHT]={tile_code:"ORE_IN_STONE_LIGHT",tint:m.ORE,mat:d.STONE,limited_blueprint:p.STONE_LIGHT,def:21,not_material_source:true,is_stone:true,unlimited_only:true,variable_yield:true},s[p.ORE_IN_STONE_RED]={tile_code:"ORE_IN_STONE_RED",tint:m.ORE,mat:d.STONE,limited_blueprint:p.STONE_RED,def:22,not_material_source:true,is_stone:true,unlimited_only:true,variable_yield:true},s[p.ORE_IN_VEINIUM]={tile_code:"ORE_IN_VEINIUM",tint:m.ORE,mat:d.STONE,limited_blueprint:p.VEINIUM,def:11,not_material_source:true,is_stone:true,unlimited_only:true,variable_yield:true},s[p.PASSABLE_LEAVES]={tile_code:"PASSABLE_LEAVES",tint_color:v(l(),90,1,.76),mat:d.LEAF,debug_as:p.LEAVES2,def:20,no_self:true,doublesided:true,draw_passable_overlay:true,inv:p.LEAVES3,not_material_source:true},s[p.PLANKS_WOOD]={tile_code:"PLANKS_WOOD",mat:d.WOOD,craft_class:_.WOOD_PLANK,fuel_rate:g.PLANKS,def:31,crafted:true},s[p.PLANKS_WOOD_DARK]={tile_code:"PLANKS_WOOD_DARK",mat:d.DARK_WOOD,craft_class:_.WOOD_PLANK,fuel_rate:g.PLANKS,def:47,crafted:true},s[p.PLANKS_WOOD_LIGHT]={tile_code:"PLANKS_WOOD_LIGHT",mat:d.LIGHT_WOOD,craft_class:_.WOOD_PLANK,fuel_rate:g.PLANKS,def:39,crafted:true},s[p.PLANKS_WOOD_RED]={tile_code:"PLANKS_WOOD_RED",mat:d.RED_WOOD,craft_class:_.WOOD_PLANK,fuel_rate:g.PLANKS,def:55,crafted:true},s.prop={def:52,tile1:true,unplaceable:true},s[p.SAND]={tile_code:"SAND",mat:d.SAND,def:18,face:[19,19]},s[p.SILVER]={tile_code:"SILVER",mat:d.SILVER,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Silver",unplaceable:true},s[p.SNOW]={tile_code:"SNOW",mat:d.DIRT,def:26,face:[27,27],not_material_source:true},s[p.STONE]={tile_code:"STONE",mat:d.STONE,craft_class:_.STONE_RAW,def:16,face:[17,17],is_stone:true},s[p.STONE_DARK]={tile_code:"STONE_DARK",mat:d.STONE,craft_class:_.STONE_RAW,def:14,not_material_source:true,is_stone:true},s[p.STONE_LIGHT]={tile_code:"STONE_LIGHT",mat:d.STONE,craft_class:_.STONE_RAW,def:15,not_material_source:true,is_stone:true},s[p.STONE_RED]={tile_code:"STONE_RED",mat:d.STONE,craft_class:_.STONE_RAW,def:23,not_material_source:true,is_stone:true},s[p.TILLED]={tile_code:"TILLED",above:((n={})[p.TILLED]=8,n[p.TILLED_WATERED]=8,n[p.DIRT]=8,n[p.GRASS]=8,n),mat:d.DIRT,limited_blueprint:p.DIRT,def:59,face:[6,8],inv:p.DIRT,not_material_source:true,unlimited_only:true},s[p.TILLED_WATERED]={tile_code:"TILLED_WATERED",above:((o={})[p.TILLED]=8,o[p.TILLED_WATERED]=8,o[p.DIRT]=8,o[p.GRASS]=8,o),mat:d.DIRT,limited_blueprint:p.DIRT,def:60,face:[7,8],inv:p.DIRT,not_material_source:true,unlimited_only:true},s[p.TIN]={tile_code:"TIN",mat:d.TIN,def:4,not_material_source:true,variable_yield:true,name:"Drop Debug: Tin",unplaceable:true},s.unknown={mat:d.DIRT,def:52,tile1:true,inv:[],not_material_source:true,unknown:true,unplaceable:true},s[p.VEINIUM]={tile_code:"VEINIUM",mat:d.STONE,craft_class:_.STONE_RAW,def:12,not_material_source:true,is_stone:true},s[p.WOOD]={tile_code:"WOOD",mat:d.WOOD,craft_class:_.WOOD_RAW,fuel_rate:g.WOOD,def:29,face:[30,30]},s[p.WOOD_BARK]={tile_code:"WOOD_BARK",mat:d.WOOD,blueprint:p.WOOD,def:29,face:[30,30],inv:[p.WOOD,{type:u,id:f.ITEM_FIBER}],name:"Wood",name2:"Old Wood w/ Bark",unplaceable:true},s[p.WOOD_DARK]={tile_code:"WOOD_DARK",mat:d.DARK_WOOD,craft_class:_.WOOD_RAW,fuel_rate:g.WOOD,def:45,face:[46,46]},s[p.WOOD_DARK_BARK]={tile_code:"WOOD_DARK_BARK",mat:d.DARK_WOOD,blueprint:p.WOOD_DARK,def:45,face:[46,46],inv:[p.WOOD_DARK,{type:u,id:f.ITEM_FIBER}],name:"Dark Wood",name2:"Old Dark Wood w/ Bark",unplaceable:true},s[p.WOOD_LIGHT]={tile_code:"WOOD_LIGHT",mat:d.LIGHT_WOOD,craft_class:_.WOOD_RAW,fuel_rate:g.WOOD,def:37,face:[38,38]},s[p.WOOD_LIGHT_BARK]={tile_code:"WOOD_LIGHT_BARK",mat:d.LIGHT_WOOD,blueprint:p.WOOD_LIGHT,def:37,face:[38,38],inv:[p.WOOD_LIGHT,{type:u,id:f.ITEM_FIBER}],name:"Light Wood",name2:"Old Light Wood w/ Bark",unplaceable:true},s[p.WOOD_RED]={tile_code:"WOOD_RED",mat:d.RED_WOOD,craft_class:_.WOOD_RAW,fuel_rate:g.WOOD,def:53,face:[54,54]},s[p.WOOD_RED_BARK]={tile_code:"WOOD_RED_BARK",mat:d.RED_WOOD,blueprint:p.WOOD_RED,def:53,face:[54,54],inv:[p.WOOD_RED,{type:u,id:f.ITEM_FIBER}],name:"Red Wood",name2:"Old Red Wood w/ Bark",unplaceable:true},s)},{"../../common/ids":42,"../../common/materials_common":43,"../../glov/client/hsv":49,"../../glov/common/vmath":60,"../tiles_const":38}],4:[function(e,r,t){"use strict"
t.seedWorld=seedWorld
t.providerSpring=providerSpring
t.providerMegaTree=providerMegaTree
t.providerFloatyRocks=providerFloatyRocks
t.SPRING_3x3=t.MARKER=t.ROCK=t.STUMP=t.BOULDER=t.MEGA_TREE=t.SNOW_PINE_FOREST=t.FOREST_MEDIUM=void 0
var I=e("assert")
var i=e("./detail_generators.js")
var n=e("../common/globals.js").CHUNK_SIZE
var y=Math.abs,s=Math.cos,ee=Math.floor,b=Math.max,O=Math.min,w=Math.PI,h=Math.round,v=Math.sin,D=Math.sqrt
var re=e("./proc_gen.js")
var a=e("./proc_gen_biomes.js"),c=a.NOISE_DETAIL_IDX,_=a.world_noise,o=a.getVerticalSliceById
var l=e("./detail_gen_base.js").DETAIL_Z0
var f=e("../glov/common/rand_alea.js").mashString
var ae=e("./rand_seed.js").createFast
var u=e("open-simplex-noise").makeNoise3D
var N=e("./proc_gen_constants.js").SNOW_ELEVATION
var d=e("./tiles.js"),p=d.TILE_COLORED_HUE0,L=d.TILE_SNOW,te=d.TILE_WOOD,S=d.TILE_WOOD_LIGHT,M=d.TILE_WOOD_DARK,E=d.TILE_WOOD_RED,P=d.TILE_LEAVES1,C=d.TILE_LEAVES2,k=d.TILE_LEAVES3,x=d.TILE_LEAVES4,U=d.TILE_LEAVES5,ie=d.TILE_GRASS,F=d.TILE_STONE,g=d.TILE_STONE_DARK,m=d.TILE_STONE_LIGHT,T=d.TILE_STONE_RED,A=d.TILE_ORE_IN_STONE_LIGHT,R=d.TILE_ORE_IN_STONE_DARK,G=d.TILE_ORE_IN_STONE_RED,B=d.TILE_ORE_IN_STONE,H=d.TILE_AIR,W=d.TILE_WATER
var V=e("../glov/common/util.js").sign
var q=e("../glov/common/vmath.js"),z=q.vec2,j=q.v2add,Y=q.v2distSq,ne=q.vec3,oe=q.v3distSq,se=q.v3set,K=q.v3sub,Z=q.unit_vec,X=q.v3copy,Q=q.v3iAdd,ve=q.v2set
var le=e("../common/voxel_data_common.js").createUtilVD
var J=1
var $=2
var fe=3
var ue=new Array(1)
function seedWorld(e){var r="bd"+e.seed
for(var a=0;a<ue.length;++a)ue[a]=u(f(""+r+a))}var ce=12
var _e=4
var de=100
var he=15
var pe=36
var ge=ce+2*he
var me=4*ge
var Ee=ge/2
var Te=70
var Se=120
var Ae=12
var Re=15
var Oe=Ae+2*Re
var Ie=70
var ye=100
var be=45
var we=40
var De=14
var Ne=4
var Le=[[0,1,te],[0,2,te],[1,0,te],[1,1,te],[1,2,te],[1,3,te],[2,0,te],[2,1,te],[2,2,te],[2,3,te],[3,1,te],[3,2,te]]
var Me=[[1,1,te],[1,2,te],[2,1,te],[2,2,te]]
var Pe=[[0,1,-1],[0,2,-1],[1,0,-2],[1,3,2],[2,0,-2],[2,3,2],[3,1,1],[3,2,1]]
var Ce=[[-1,1,-1],[-1,2,-1],[1,-1,-2],[2,-1,-2],[1,4,2],[2,4,2],[4,1,1],[4,2,1]]
var ke={}
ke[te]=te
var xe={}
xe[te]=S
var Ue={}
Ue[te]=M
var Fe={}
Fe[te]=E
var Ge=[g,F,T,m]
function rotate(e,r,a,t,i){var n=ee(r*s(e)+a[0])
var o=ee(r*v(e)+a[1])
return se(i,n,o,a[2]+1+t.range(3))}function randomWalk(e,r,a,t,i,n,o){var s=ne()
K(s,e,r)
var v=ne()
v[0]=y(s[0]+t.range(2))
v[1]=y(s[1]+t.range(2))
v[2]=y(s[2])
var l=v[0]+v[1]+v[2]
a.set(e,n)
var f=l
for(var u=0;u<f;u++){var c=t.range(l)
if(c<v[0]){v[0]--
e[0]+=-1*V(s[0])}else if(c<v[0]+v[1]){v[1]--
e[1]+=-1*V(s[1])}else if(c<l){v[2]--
e[2]+=-1*V(s[2])}a.set(e,n)
for(var _=1;_<15;_++){se(o,e[0],e[1],e[2]-_)
if(a.get(o)!==i)break
a.set(o,null)}l--}}function placeFoot(i,n,e,o,s,v,l,f,u,c){function extendFootRecursive(e,r,a){if(r<a)if(1===v.range(2)){r++
l[y(n[e][2])-1]+=V(n[e][2])
c[0]=s.pos_world[0]+l[0]
c[1]=s.pos_world[1]+l[1]
var t=re.getVerticalSliceMapData(c).h-(u-1)
if(l[2]>t&&l[2]>=0){o.set(l,i)
l[2]=t}if(l[2]>=0)o.set(l,i)
extendFootRecursive(e,r,a)
return}if(r>0){l[0]=f+n[e][0]
l[1]=f+n[e][1]
l[2]++
a=r-1
if(l[2]>=0)o.set(l,i)
extendFootRecursive(e,0,a)}}for(var r=0;r<n.length;++r){l[0]=f+n[r][0]
l[1]=f+n[r][1]
j(c,s.pos_world,l)
var a=re.getVerticalSliceMapData(c)
l[2]=a.h-u+1
if(l[2]>=0&&l[2]<o.size[2]&&v.range(5)>1){o.set(l,i)
extendFootRecursive(r,0,e)}}}function placeTrunk(e,r,a,t,i,n,o,s){var v=ne()
for(var l=t;l<i;++l){v[2]=l
for(var f=0;f<r.length;++f){if(!s&&!n.range(16))continue
v[0]=e+r[f][0]
v[1]=e+r[f][1]
o.set(v,a)}}}var Be=function(){var R=ne()
var O=ne(ge/2,ge/2,0)
var I=z()
var y=[x,U,k]
return function genOakFn(e,r,a){var i=le(ne(ge,ge,Te))
var n=ae(e.seed)
var t=a?7:n.range(8)
var o=ee(t/3)
var s=6+t
var v=y[n.range(3)]
se(e.pos_world,e.origin[0]-he,e.origin[1]-he,r)
var l=(ge-4)/2
var f=ee(1.8*s)
if(a)f=11+(s=50)
placeTrunk(l,Le,M,0,s,n,i)
placeTrunk(l,Me,M,s,f,n,i)
var u=6+n.range(8)
var c=new Array(u)
O[2]=s
var _=2*w/u
for(var d=0;d<u;d++){c[d]=ne()
c[d]=rotate(d*_,8+t,O,n,c[d])}O[2]=f
var h=4+n.range(4)
var p=new Array(u)
_=2*w/h
for(var g=0;g<h;g++){p[g]=ne()
p[g]=rotate(g*_,5+o,O,n,p[g])}function branching(e,r,a){for(var t=0;t<e;t++){if(a)O[2]=b(s,O[2]-n.range(f-s-2))
randomWalk(r[t],O,i,n,v,M,R)}}O[2]=s-4
var m=500
var E=3.5
_=2*w/m
t-=4
for(var T=s-4;T<f+5;T++){O[2]++
if(O[2]<s)t+=2
else t--
if(T>f)E=b(0,--E)
for(var S=0;S<m;S++){R=rotate(S*_,8+t,O,n,R)
var A=E*ue[0](e.origin[0]+.25*R[0],e.origin[1]+.25*R[1],r+.25*R[2])
if((R=rotate(S*_,8+t+A,O,n,R))[2]<f+8)i.set(R,v)}}O[2]=s
branching(u,c,false)
O[2]=f
branching(h,p,true)
placeFoot(M,Ce,2,i,e,n,R,l,r,I)
return i}}()
var He=function(){var g=z()
var m=ne()
var E=ne(ge/2,ge/2,0)
var T=[C,k,P]
return function genWillowFn(l,f){var u=le(ne(ge,ge,Te))
var c=ae(l.seed)
var e=c.range(12)
var _=12+e
var d=ee(e/3)
se(l.pos_world,l.origin[0]-he,l.origin[1]-he,f)
var r=(ge-4)/2
placeTrunk(r,Me,S,0,_/2,c,u)
var h=T[c.range(3)]
function placeDropDown(e,r,a){var t=3+c.range(7+d)
for(var i=0;i<t;i++){se(m,e,r,a-i)
u.set(m,h)}}function placeCrown(e,r,a){var t=(.12+.06*c.range(8+d))*Ee
for(var i=0;i<ge;++i)for(var n=0;n<ge;++n)for(var o=_-8;o<_+25;++o){var s=D(oe([i,n,o],[E[0]+e,E[1]+r,E[2]+a]))/t
se(m,i,n,o-ee(t/2))
var v=.1*ue[0](l.origin[0]+.25*m[0],l.origin[1]+.25*m[1],f+.25*m[2])
if(s<1+v&&s>.75-y(v)&&E[2]+a+ee(t/2)<o){u.set(m,h)
if(E[2]+a+ee(t/2)===o-1&&1===c.range(5))placeDropDown(i,n,o-ee(t/2))}}}var a=3+c.range(d)
var t=new Array(a)
var i=ne()
E[2]=_
for(var n=0;n<a;n++){i[0]=-7+c.range(14+d)
i[1]=-7+c.range(14+d)
i[2]=-4+c.range(6+d)
t[n]=ne(i[0]+E[0],i[1]+E[1],i[2]+E[2])
placeCrown(i[0],i[1],i[2])}E[2]=_/2
for(var o=0;o<a;o++){t[o][2]--
for(var s=0;s<5;s++)if(u.get(t[o])!==h){t[o][2]++
continue}else{t[o][2]--
break}randomWalk(t[o],E,u,c,h,S,m)}for(var v=0;v<Pe.length;++v){m[0]=r+Pe[v][0]
m[1]=r+Pe[v][1]
j(g,l.pos_world,m)
var p=re.getVerticalSliceMapData(g)
m[2]=p.h-f
if(m[2]>=0&&m[2]<u.size[2])u.set(m,ie)}placeFoot(S,Pe,0,u,l,c,m,r,f,g)
return u}}()
var We=function(){var h=ne()
var p=ne(ge/2,ge/2,0)
var g=z()
var m=[x,U,k]
return function genPineFn(a,t,e){var l=le(ne(ge,ge,Te))
var f=ae(a.seed)
var r=f.range(12)
var i=9+r
se(a.pos_world,a.origin[0]-he,a.origin[1]-he,t)
var u=e?L:m[f.range(3)]
function checkHeight(e){j(g,a.pos_world,e)
var r=re.getVerticalSliceMapData(g)
if(e[2]<=r.h-t)return false
return true}function branch(e,r,a){var t=ne()
se(h,p[0],p[1],a)
if(e<=1){h[y(r)-1]+=V(r)
l.set(h,u)
return}var i=0
for(var n=0;n<e;n++){if(n%3===1&&f.range(10)>1){if(n>e-2){h[y(r)-1]+=V(r)
l.set(h,u)
h[y(r)-1]-=V(r)}h[2]--
h[y(r)-1]+=2*V(r)
l.set(h,u)
h[y(r)-1]-=2*V(r)
se(t,h[0],h[1],h[2])
t[1-(y(r)-1)]--
for(var o=0;o<3;o++){l.set(t,u)
t[1-(y(r)-1)]++}l.set(h,u)}se(t,h[0],h[1],h[2])
if(n<ee(e/2))i=2*n
else i=2+e-n
i=b(1,i-f.range(3))
if(n>e-1)i=1
t[y(r)-1]+=V(r)
if(1!==i)t[1-(y(r)-1)]-=ee(i/2)
for(var s=0;s<i;s++){if(!checkHeight(t))return
l.set(t,u)
t[1-(y(r)-1)]++}h[y(r)-1]+=V(r)
if(e-2>=n){l.set(h,u)
se(t,h[0],h[1],h[2]+1)
l.set(t,u)
i-=2
i-=f.range(3)
t[1-(y(r)-1)]-=ee(i/2)
for(var v=0;v<i;v++){l.set(t,u)
t[1-(y(r)-1)]++}}}}var n=(ge-4)/2
placeTrunk(n,Me,E,0,i,f,l)
p[2]=ee(2*i)
se(h,p[0],p[1],p[2])
var o=f.range(8)
for(var s=i;s<2*i;s++){se(h,p[0],p[1],s)
if(s>2*i-o){l.set(h,u)
continue}l.set(h,E)}for(var v=3+f.range(r/2);v<ee(1.8*i);v+=2){branch(b(1,i/2-v/2.5+4+(-2+f.range(5))),1,2+v)
v+=f.range(4)}for(var c=3+f.range(r/2);c<ee(1.8*i);c+=2){branch(b(1,i/2-c/2.5+4+(-2+f.range(5))),-1,2+c)
c+=f.range(4)}for(var _=3+f.range(r/2);_<ee(1.8*i);_+=2){branch(b(1,i/2-_/2.5+4+(-2+f.range(5))),-2,2+_)
_+=f.range(4)}for(var d=3+f.range(r/2);d<ee(1.8*i);d+=2){branch(b(1,i/2-d/2.5+4+(-2+f.range(5))),2,2+d)
d+=f.range(4)}se(h,p[0],p[1],p[2])
placeFoot(E,Pe,1,l,a,f,h,n,t,g)
return l}}()
var Ve=function(){var _=ne()
var d=z()
var h=ne(ge/2,ge/2,0)
var p=[U,x,P]
return function genPoplarFn(e,r){var a=le(ne(ge,ge,Te))
var t=ae(e.seed)
var i=30+t.range(12)
se(e.pos_world,e.origin[0]-he,e.origin[1]-he,r)
var n=p[t.range(3)]
var o=.4*(2+t.range(3))*Ee
h[2]=i
for(var s=0;s<ge;++s)for(var v=0;v<ge;++v)for(var l=i-25;l<i+15;++l){var f=b(i-25+3,O(l,i+5-5))
var u=D(oe([s,v,l],[h[0],h[1],f])/o)
if(u<1)if(t.range(7)*u<2){se(_,s,v,l)
a.set(_,n)}}var c=(ge-4)/2
placeTrunk(c,Me,te,0,i,t,a)
placeFoot(te,Pe,1,a,e,t,_,c,r,d)
return a}}()
function sampleNoise(e,r,a,t){return _[e].noise2D(a*r,t*r)}function spikyRockNoise(e,r){var a
var t
a=sampleNoise(1,.05,e,r)
t=sampleNoise(2,.05,e,r)
return sampleNoise(2,.05,e+=a,r+=t)}var qe=ne()
function dropLiana(e,r,a,t,i){X(qe,e)
var n=2+t.range(r)
for(var o=0;o<n;++o){qe[2]--
if(qe[2]<0||i.get(qe))return
i.set(qe,a)}}var ze=function(){var S=ne()
var A=ne()
var R=ne(Oe/2,Oe/2,0)
var O=[U,x,P,C,k]
return function genFloatyRockFn(e){var u=le(ne(Oe,Oe,Ie))
var c=ae(e.seed)
var r=e.provider_data.height
var a=c.uint32()
var _=O[c.range(5)]
var t=re.getVerticalSliceMapData(e.origin).h
se(e.pos_world,e.origin[0],e.origin[1],t)
var i=Ge[ee(a/3)%Ge.length]
var n=ie
if(t>=N)_=n=L
function smallTree(e){var r=3+c.range(3)
var a=5
var t=3+c.range(3)
if(e[0]-r<0||e[1]-r<0||e[2]-1<0||e[0]+r>Oe||e[1]+r>Oe||e[2]+a+t>Ie)return
X(A,e)
A[2]++
var i=3
var n=c.range(2)
for(var o=-ee(r/2);o<ee(r/2)+1;++o){A[n]=e[n]+o
if(u.get(A)){u.set(A,te)
A[2]++}else{u.set(A,te)
A[2]--
if(u.get(A))A[2]++}if(1===c.range(i)){i++
u.set(A,te)
A[y(n-1)]+=1===c.range(2)?-1:1}u.set(A,te)}X(A,e)
for(var s=0;s<t;++s){A[2]++
if(1===c.range(3)){u.set(A,te)
A[c.range(2)]+=1===c.range(2)?-1:1}u.set(A,te)}if(A[0]-r<0||A[1]-r<0||A[2]-1<0||A[0]+r>Oe||A[1]+r>Oe)return
for(var v=-r;v<r+1;++v)for(var l=-r;l<r+1;++l)for(var f=0;f<a;++f)if(.5*(v*v+l*l)<r-f+c.range(2)){se(A,e[0]+v,e[1]+l,e[2]+f+t)
u.set(A,_)
if(0===f&&1===c.range(10))dropLiana(A,2,_,c,u)}}var o=e.provider_data.radius
R[2]=r
for(var s=0;s<Oe;++s)for(var v=0;v<Oe;++v)for(var l=0;l<Ie;++l){se(A,s,v,l)
var f=D(Y(A,R)/o)
var d=Ie-l
if(y(spikyRockNoise(s+e.origin[0],v+e.origin[1]))*(3+f*f*-1)/2>d/35&&f<2+c.range(2)&&5*y(sampleNoise(2,.02,s+e.origin[0],v+e.origin[1]))<d){se(S,s,v,l-r)
if(l-r>0)u.set(S,i)}}for(var h=0;h<ge;h++)for(var p=0;p<ge;p++)for(var g=Ie;g>0;g--){se(S,h,p,g)
if(u.get(S)===i){se(S,h,p,g)
u.set(S,n)
if(1===c.range(80))smallTree(S)
break}}for(var m=0;m<Oe;m++)for(var E=0;E<Oe;E++)for(var T=0;T<Ie;T++){se(S,m,E,T)
if(u.get(S)===i){if(1===c.range(20))dropLiana(S,15,_,c,u)
break}}return u}}()
var je=function(){var p=ne()
var g=ne()
var m=ne()
var E=ne()
var T=ne()
var S=ne()
var A=[U,x,P,C,k]
var R=[]
return function genLianafn(e){var r=ae(e.seed)
var a=A[r.range(5)]
X(g,e.provider_data.start_pos)
X(m,e.provider_data.end_pos)
var t=re.getVerticalSliceMapData(g).h
var i=re.getVerticalSliceMapData(m).h
g[2]=Ie+t-g[2]
m[2]=Ie+i-m[2]
if(t>=N||i>=N)a=L
if(y(g[0])-y(m[0])>40||y(g[1])-y(m[1])>40||y(g[2])-y(m[2])>40){se(E,0,0,0)
return le(E)}se(e.pos_world,Oe/2+O(g[0],m[0]),Oe/2+O(g[1],m[1]),O(g[2]-6,m[2])-6)
K(E,g,m)
se(S,V(E[0]),V(E[1]),V(E[2]))
E[0]=y(E[0])
E[1]=y(E[1])
E[2]=y(E[2])
var n=3
se(T,E[0]+1,E[1]+1,E[2]+1+n)
var o=le(T)
var s=S[2]>0?0:E[2]
var v
var l=E[0]+E[1]+E[2]
if(0===l)return o
var f=l/E[0]
var u=l/E[1]
var c=l/E[2]
R=[]
for(var _=0;_<l;++_){v=s/E[2]*2
var d=false
if(_%f<1){R.push(0)
d=true}if(_%u<1){R.push(1)
d=true}if(_%c*(2-v)<1){R.push(2)
s+=S[2]
d=true}if(!d)l++}se(p,S[0]>0?0:E[0],S[1]>0?0:E[1],S[2]>0?n:E[2]+n)
o.set(p,a)
for(var h=0;h<R.length;++h){p[R[h]]+=S[R[h]]
if(p[0]<0||p[0]>E[0]||p[1]<0||p[1]>E[1]||p[2]<0||p[2]>E[2]+n){p[R[h]]-=S[R[h]]
continue}if(1===r.range(25))dropLiana(p,5,a,r,o)
o.set(p,a)}return o}}()
var Ye=30
var Ke=function(){var h=ne()
var p=z()
return function genStumpFn(e,r,a){var t=le(ne(De,De,Ye))
var i=ae(e.seed)
var n=3+i.range(3)
var o
var s
var v
var l
var f=[]
if(i.range(100)<1)n+=i.range(15)
if(a===ke){o=Me
s=Pe
v=te
l=1}else if(a===Fe){o=Me
s=Pe
v=E
l=1}else if(a===xe){o=Me
s=Pe
v=S
l=1}else{o=Le
s=Ce
v=M
l=2}se(e.pos_world,e.origin[0],e.origin[1],r)
var u=(De-4)/2
for(var c=0;c<o.length;++c)f[c]=n+i.range(3)
for(var _=0;_<n+3;++_){h[2]=_
for(var d=0;d<o.length;++d){h[0]=u+o[d][0]
h[1]=u+o[d][1]
if(f[d]<_)continue
t.set(h,v)}}placeFoot(v,s,l,t,e,i,h,u,r,p)
return t}}()
var Ze=function(){var u=ne()
var h=ne()
var c=[P,C,k,x,U]
return function genMegaMapleFn(v,l){var _=ae(v.seed)
var d=le(ne(me,me,Se))
var f=c[_.range(5)]
se(v.pos_world,v.origin[0]-pe,v.origin[1]-pe,l-10)
se(u,me/2,me/2,10)
function randomBranch(e,r){var a=ne()
K(a,e,r)
var t=ne()
t[0]=y(a[0]+_.range(2))
t[1]=y(a[1]+_.range(2))
t[2]=y(a[2])
var i=t[0]+t[1]+t[2]
var n=i
for(var o=0;o<n;o++){var s=_.range(i)
if(s<t[0]){t[0]--
e[0]+=-1*V(a[0])}else if(s<t[0]+t[1]){t[1]--
e[1]+=-1*V(a[1])}else if(s<i){t[2]--
e[2]+=-1*V(a[2])}i--
var v=5
for(var l=e[0]-v;l<e[0]+v;l++)for(var f=e[1]-v;f<e[1]+v;f++)for(var u=e[2]-v;u<e[2]+v;u++){se(h,l,f,u)
var c=D(oe([l,f,u],e))
if(h[2]>=0&&c<3-O(2,i/20))d.set(h,te)}}}function placeCrown(e){var r=15+_.range(15)
e[2]-=r-3
for(var a=e[0]-r;a<e[0]+r;++a)for(var t=e[1]-r;t<e[1]+r;++t)for(var i=e[2]-r;i<e[2]+r;++i){var n=D(oe([a,t,i],[e[0],e[1],e[2]]))
se(h,a,t,i)
var o=2*ue[0](v.origin[0]+.2*h[0],v.origin[1]+.2*h[1],l+.2*h[2])
var s=4*ue[0](v.origin[0]+.04*h[0],v.origin[1]+.04*h[1],l+.04*h[2])
if(n<r-o&&n>r-(o+3)&&n>.75-y(o)&&e[2]+r/1.5+s<i)if(h[2]>=0&&h[2]<Se&&h[0]>=0&&h[0]<me&&h[1]>=0&&h[1]<me)d.set(h,f)}e[2]+=r}function branch(e,r,a,t){var i=a+_.range(5)
var n=new Array(i)
var o=_.range(60)
var s=2*w/(i+o)
for(var v=0;v<i;v++){n[v]=ne()
n[v]=rotate(_.range(o)*s,e,h,_,n[v])
Q(n[v],[0,0,r-10])
if(t)placeCrown(n[v])
X(h,u)
randomBranch(n[v],h,t)}}var e=0
var r=0
for(var a=0;a<70;a++){switch(a){case 10:X(h,u)
branch(30,-(15+_.range(5)),10,false)
break
case 30:X(h,u)
branch(35,_.range(20),1,true)
break
case 35:X(h,u)
branch(25,_.range(20),1,true)
break
case 40:X(h,u)
branch(20,_.range(20),1,true)
break
case 55:X(h,u)
branch(15,_.range(20),1,true)
break
case 65:X(h,u)
branch(10,_.range(20),1,true)}var t=ue[0](v.origin[0]+.1*u[0],v.origin[1]+.1*u[1],l+.1*u[2])
if(t>.15)u[0]++
else if(t<-.15)u[0]--
var i=ue[0](v.origin[0]+.1*(u[0]+10),v.origin[1]+.1*(u[1]+10),l+.1*(u[2]+10))
if(i>.15)u[1]++
else if(i<-.15)u[1]--
if(ue[0](v.origin[0]+.1*(u[0]+20),v.origin[1]+.1*(u[1]+20),l+.1*(u[2]+20))>-.8)u[2]++
if(10===++e){if(r>=u[2])u[2]++
r=u[2]
e=0}for(var n=u[0]-7;n<u[0]+7;n++)for(var o=u[1]-7;o<u[1]+7;o++)for(var s=u[2];s<u[2]+7;s++){se(h,n,o,s)
if(D(oe([n,o,s],u))<7-O(7,a/14))d.set(h,te)}}placeCrown(u)
return d}}()
var Xe=[]
Xe[m]=A
Xe[F]=B
Xe[g]=R
Xe[T]=G
var Qe=function(){var X=ne()
var Q=ne()
var J=z()
var $=[k,x,U]
return function genBoulderfn(l,f){var u=ae(l.seed)
var e=u.uint32()
var c=$[e%3]
var _=Ge[ee(e/3)%Ge.length]
var n=1
var o=new Array(u.range(10)+25)
for(var r=0;r<o.length;r++){o[r]=ne()
se(o[r],u.range(we),u.range(we),u.range(be))}se(o[0],we/2,we/2,10)
var s=[]
s.push(0)
var a=[]
var v=[]
for(var t=0;t<we;t++)for(var i=0;i<we;i++)for(var d=be;d>0;d--){var h=Infinity
var p=Infinity
se(X,t,i,d)
for(var g=0;g<o.length;g++){var m=oe(o[g],X)
if(h>m){p=g
h=m}}if(0===t||0===i||0===d||t===we-1||i===we-1||i===be-1){if(void 0===v[p])v[p]=1
v[p]++}a.push(p)}function addRandomCell(){var e=u.range(n)
var r=Infinity
var a=Infinity
for(var t=0;t<o.length;t++){if(-1!==s.indexOf(t))continue
if(v[t]>225)continue
var i=oe(o[t],o[s[e]])
if(r>i){a=t
r=i}}n++
s.push(a)}var E=u.range(5)
for(var T=0;T<E;T++)addRandomCell()
var S=-Infinity
var A=-Infinity
var R=-Infinity
var O=Infinity
var I=Infinity
var y=Infinity
var b=0
for(var w=0;w<we;w++)for(var D=0;D<we;D++)for(var N=be;N>0;N--){if(-1!==s.indexOf(a[b])){if(w<O)O=w
if(w>S)S=w
if(D<I)I=D
if(D>A)A=D
if(N<y)y=N
if(N>R)R=N}b++}var L=S-O
var M=A-I
var P=R-y
var C=le(ne(L+1,M+1,P+20))
function destroyUpwards(e){for(var r=0;r<e;r++){if(X[2]===be-1)return
C.set(X,0)
X[2]++}}se(l.pos_world,l.origin[0]+O,l.origin[1]+I,f+y-5)
for(var k=b=0;k<we;k++)for(var x=0;x<we;x++)for(var U=be;U>0;U--){if(-1!==s.indexOf(a[b])){se(X,k-O,x-I,U-y)
var F=false
ve(J,l.pos_world[0]+X[0],l.pos_world[1]+X[1])
var G=re.getVerticalSliceMapData(J)
if(l.pos_world[2]+X[2]-1<G.water_level)F=true
if((0===k||0===x||k===we-1||x===we-1)&&u.range(20)<1)destroyUpwards(20)
else if(!F){C.set(X,_)
var B=oe(X,o[0])
if(u.range(B)<1)C.set(X,Xe[_])}else{C.set(X,0)
X[2]++
C.set(X,0)
X[2]++
C.set(X,0)
X[2]++
if(u.range(3)>0)destroyUpwards(u.range(4))}}b++}function smallPine(e){var r=u.range(10)
var a=5+r
var t=3+u.range(3)
var i=1+u.range(r/2)
if(e[0]<=i||e[0]>=L-i||e[1]<=i||e[1]>=M-i)return
e[2]++
C.set(e,te)
for(var n=0;n<a;n++){e[2]++
for(var o=e[0]-10;o<e[0]+10;o++)for(var s=e[1]-10;s<e[1]+10;s++){se(Q,o,s,e[2])
var v=2*ue[0](l.origin[0]+4*Q[0],l.origin[1]+4*Q[1],f+4*Q[2])
if(oe(e,Q)+v<i*(1-n/a)*(t-n%t))if(C.get(Q)!==_)C.set(Q,c)}if(C.get(e)!==_)C.set(e,te)}e[2]++
C.set(e,c)}var H=5+u.range(20)
var W=600
function checkNeighbours(){--X[0]
if(C.get(X))return false
X[0]+=2
if(C.get(X))return false;--X[0];--X[1]
if(C.get(X))return false
X[1]+=2
if(C.get(X))return false;--X[1]
C.set(X,0)
return true}function checkKernel(e){if(C.data[e+1]&&C.data[e-1]&&C.data[e-L]&&C.data[e+L]&&C.data[e-L*M]&&C.data[e-L*M])return
C.data[e]=0}var V=L*M*P
var q=.04*V+u.range(.04*V)
for(var z=0;z<q;z++)checkKernel(u.range(V))
for(var j=0;j<L+1;j++)for(var Y=0;Y<M+1;Y++)for(var K=P;K>0;K--){se(X,j,Y,K)
if(C.get(X)===_){ve(J,l.pos_world[0]+X[0],l.pos_world[1]+X[1])
var Z=re.getVerticalSliceMapData(J)
if(checkNeighbours())continue
se(X,j,Y,K)
if(u.range(H)>1&&X[2]+l.pos_world[2]>Z.h){C.set(X,ie)
if(u.range(W)<1)smallPine(X)}break}}return C}}()
var Je=6
var $e=function(){var E=Ne
var T=Ne
var S=E*T
var A=[0,E-1,S-1,S-E]
var R=[1,E,-1,-E]
var O=[E,-1,-E,1]
return function genRockFn(e,r){var a=ae(e.seed)
var t=3+a.range(4)
I(t<=Je)
var i=le(ne(E,T,t))
var n=i.data
for(var o=0;o<S;++o)n[o]=F
for(var s=1;s<t;++s){var v=s*S
for(var l=0;l<S;++l)n[v+l]=n[v+l-S]
if(s===T/2)for(var f=0;f<4;++f)if(n[v+A[f]])n[v+A[f]]=0
var u=a.range(4)
var c=v+A[u]
var _=R[u]
var d=O[u]
var h=1&u?T:E
var p=1&u?E:T
if(n[c]&&n[c+_*(h-1)])n[c]=n[c+_*(h-1)]=0
else for(var g=0;g<h;++g)for(var m=0;m<p;++m)if(n[c+g*_+m*d]){n[c+g*_+m*d]=0
break}}se(e.pos_world,e.origin[0]+4,e.origin[1]+4,r)
return i}}()
var er=[z(4,4),z(4,8),z(8,8),z(8,4),z(6,6)]
var rr=[z(1,1),z(1,16),z(16,16),z(16,1),z(8,8),z(0,8),z(8,0)]
var ar=z()
function genForestMedium(e){var r=-Infinity
var a=Infinity
var t=false
for(var i=0;i<er.length;++i){j(ar,e.origin,er[i])
var n=re.getVerticalSliceMapData(ar)
r=b(r,n.h)
a=O(a,n.h)
if(n.h<n.water_level)t=true}if(r-a>2||t)return $e(e,a)
else{var o=this.tree_types
var s=0
var v=-1
for(var l=0;l<o.length;++l){var f=_[c].noise2D(100*l+.001*e.pos_world[0],.001*e.pos_world[1])
if(f>v){v=f
s=l}}var u=o[s]
if(ae(e.seed).range(100)>1)if(u===Fe)return We(e,a)
else if(u===ke)return Ve(e,a)
else if(u===xe)return He(e,a)
else return Be(e,a)
else return Ke(e,a,u)}}function genSnowPineForest(e){var r=-Infinity
var a=Infinity
var t=false
var i=0
var n=0
for(var o=0;o<er.length;++o){j(ar,e.origin,er[o])
var s=re.getVerticalSliceMapData(ar)
i+=s.surface===L?1:0
n+=s.surface===ie?1:0
r=b(r,s.h)
a=O(a,s.h)
if(s.h<s.water_level)t=true}if(r-a>4||t)return $e(e,a)
else{if(i>4)return We(e,a,true)
if(n>1)return We(e,a,false)
return $e(e,a)}}var tr=.8*we
var ir=.2*we
var nr=[z(ir,ir),z(ir,tr),z(tr,ir),z(tr,tr)]
function genBoulders(e){var r=-Infinity
var a=Infinity
for(var t=0;t<nr.length;++t){j(ar,e.origin,nr[t])
var i=re.getVerticalSliceMapData(ar)
r=b(r,i.h)
a=O(a,i.h)}if(r-a>50)return $e(e,a)
else return Qe(e,a)}function genStumps(e){var r=-Infinity
var a=Infinity
for(var t=0;t<er.length;++t){j(ar,e.origin,er[t])
var i=re.getVerticalSliceMapData(ar)
r=b(r,i.h)
a=O(a,i.h)}return Ke(e,a)}function genMegaTree(e){var r=Infinity
for(var a=0;a<rr.length;++a){j(ar,e.origin,rr[a])
ar[0]+=pe
ar[1]+=pe
var t=re.getVerticalSliceMapData(ar)
r=O(r,t.h)}return Ze(e,r)}function genRockOnly(e){var r=Infinity
for(var a=0;a<er.length;++a){j(ar,e.origin,er[a])
var t=re.getVerticalSliceMapData(ar)
r=O(r,t.h)}return $e(e,r)}var or
function genMarker(e){var r=re.getVerticalSliceMapData(e.origin).h+1
if(!or){var a=(or=le(ne(3,1,5))).data
for(var t=0;t<5;++t)a[1+3*t]=p+t
a[3]=p
a[5]=p}se(e.pos_world,e.origin[0]-1,e.origin[1],r)
return or}var sr=[z(0,-1),z(-1,0),z(1,0),z(0,1)]
var vr=5
var lr=vr+2
function genSpring3x3(e){var r
var a=1
var t
do{var i=0
r=[]
for(var n=0;n<sr.length;++n){ar[0]=e.origin[0]+1+sr[n][0]*a
ar[1]=e.origin[1]+1+sr[n][1]*a
var o=re.getVerticalSliceMapData(ar)
var s=o.h<o.water_level
r.push(s)
if(s)++i}if(!i){if(!t)return le(ne(1,1,1))
r=t
break}else if(i<3)break;++a
t=r}while(true)
j(ar,e.origin,Z)
var v=re.getVerticalSliceMapData(ar).water_level-vr+1
var l=le(ne(3,3,lr))
l.alloc(true)
var f=l.data
var u=l.liquid
var c=ae(e.seed)
for(var _=0;_<vr;++_){var d=3*_*3
f[d+0]=c.range(3)?F:0
f[d+1]=F
f[d+2]=c.range(3)?F:0
f[d+3]=F
f[d+4]=H
u[d+4]=W
f[d+5]=F
f[d+6]=c.range(3)?F:0
f[d+7]=F
f[d+8]=c.range(3)?F:0}var h=3*vr*3
f[h+0]=c.range(3)?F:0
f[h+1]=r[0]?H:F
u[h+1]=r[0]?W:0
f[h+2]=c.range(3)?F:0
f[h+3]=r[1]?H:F
u[h+3]=r[1]?W:0
f[h+4]=H
u[h+4]=W
f[h+5]=r[2]?H:F
u[h+5]=r[2]?W:0
f[h+6]=c.range(3)?F:0
f[h+7]=r[3]?H:F
u[h+7]=r[3]?W:0
f[h+8]=c.range(3)?F:0
f[(h+=9)+4]=F
se(e.pos_world,e.origin[0],e.origin[1],v)
return l}var fr={exclusion:ne(ce,ce,_e),bounds:[ne(-he,-he,l),ne(ce+he,ce+he,Te)],gen:genForestMedium,priority:J,tree_types:[ke,xe,Ue,Fe]}
t.FOREST_MEDIUM=fr
var ur={exclusion:ne(0,0,0),bounds:[ne(0,0,l),ne(Ae+2*Re,Ae+2*Re,Ie)],gen:ze,priority:$}
var cr={exclusion:ne(0,0,0),bounds:[ne(0,0,l),ne(ye,ye,ye)],gen:je,priority:J}
var _r={exclusion:ne(ce,ce,_e),bounds:[ne(-he,-he,l),ne(ce+he,ce+he,Te)],gen:genSnowPineForest,priority:J}
t.SNOW_PINE_FOREST=_r
var dr={exclusion:ne(de,de,_e),bounds:[ne(-pe,-pe,l),ne(pe+de,pe+de,Se)],gen:genMegaTree,priority:fe,tree_types:[ke,xe,Ue,Fe],unblockable:true}
t.MEGA_TREE=dr
var hr={exclusion:ne(we+1,we+1,1),bounds:[ne(0,0,l),ne(we+1,we+1,be)],gen:genBoulders,priority:J}
t.BOULDER=hr
var pr={exclusion:ne(De,De,1),bounds:[ne(0,0,l),ne(De,De,Ye)],gen:genStumps,priority:J}
t.STUMP=pr
var gr={exclusion:ne(Ne+1,Ne+1,1),bounds:[ne(0,0,l),ne(Ne+1,Ne+1,Je)],gen:genRockOnly,priority:J}
t.ROCK=gr
var mr={exclusion:ne(1,1,1),bounds:[ne(-1,0,l),ne(2,1,5)],gen:genMarker,priority:fe}
t.MARKER=mr
var Er={exclusion:ne(3,3,1),bounds:[ne(0,0,l),ne(3,3,lr)],gen:genSpring3x3,priority:fe}
t.SPRING_3x3=Er
function providerSpring(e){I(null!==e.hydro_source_vsid)
var r=o(e.hydro_source_vsid)
re.initPhase40(r)
I(isFinite(r.hydro_jitter_x))
I(isFinite(r.hydro_jitter_y))
var a=r.pos_world[0]+n/2+r.hydro_jitter_x
var t=r.pos_world[1]+n/2+r.hydro_jitter_y
return[{pos:ne(a-1,t-1,0),type:Er}]}function providerMegaTree(e){var r=h(e.pos_world[0])
var a=h(e.pos_world[1])
return[{pos:ne(r-he,a-he,0),type:dr}]}function providerFloatyRocks(e){var r=[]
var a=[]
var t=ae(e.seed)
var i=0
var n=h(e.pos_world[0])
var o=h(e.pos_world[1])
var s=2+t.range(4)
for(var v=0;v<s;v++){i=20+t.range(50)
var l=t.range(50)
var f=ne(n+(t.range(60)-30),o+(t.range(60)-30),l)
a.push(f)
r.push({pos:f,type:ur,provider_data:{radius:i,height:l}})}for(var u=0;u<3*s;u++){var c=t.range(s)
var _=a[c]
var d=a[c+1===a.length?c-1:c+1]
r.push({pos:_,type:cr,provider_data:{start_pos:_,end_pos:d}})}return r}(function(){for(var e in t){var r=t[e]
if(r.gen){I.equal(r.exclusion.length,3)
I.equal(r.bounds[0].length,3)
I.equal(r.bounds[1].length,3)
I.equal(typeof r.priority,"number")
r.name=e}}for(var a in i){I(!t[a])
t[a]=i[a]}})()},{"../common/globals.js":41,"../common/voxel_data_common.js":45,"../glov/common/rand_alea.js":57,"../glov/common/util.js":58,"../glov/common/vmath.js":60,"./detail_gen_base.js":11,"./detail_generators.js":13,"./proc_gen.js":27,"./proc_gen_biomes.js":28,"./proc_gen_constants.js":29,"./rand_seed.js":34,"./tiles.js":37,assert:void 0,"open-simplex-noise":void 0}],5:[function(e,r,a){"use strict"
a.setupFlat=setupFlat
a.BIOME_PARAM_TYPE=a.TYPE_NON_INTERP=a.TYPE_ARR=a.BIOME_BY_ID=a.BIOMES=a.TYPE_IDS=void 0
var i=e("assert")
var t=e("../common/globals").SAFE_DIST_Z
var n=e("../common/ids")
var o=n.ITEM_BERRY_BUSH_BLUE
var s=n.ITEM_BERRY_BUSH_RED
var v=n.ITEM_BERRY_BUSH_YELLOW
var l=n.ITEM_PLANT
var f=n.ITEM_SPICE_PLANT
var u=n.ITEM_WILD_CROP
var c=e("../common/materials_common").Mat
var _=e("../common/waygate_common")
var d=_.FLAT_SEED_EMPTY
var h=_.FLAT_SEED_GRASS_ON_STONE
var p=_.FLAT_SEED_WATER
var g=e("./flora_constants")
var m=g.ALL_FLOWERS
var E=g.BLUE_FLOWERS
var T=g.RED_FLOWERS
var S=g.WILD_CARROT
var A=g.WILD_CORN
var R=g.WILD_PUMPKIN
var O=g.WILD_SUGAR_CANE
var I=g.WILD_TOMATO
var y=g.WILD_WHEAT
var b=g.YELLOW_FLOWERS
var w=e("./proc_gen_constants")
var D=w.PROP_1x1x1
var N=w.PROP_2x2x1
var L=w.PROP_2x2x2
var M=e("./tiles")
var P=M.TILE_DIRT
var C=M.TILE_GRASS
var k=M.TILE_SAND
var x=M.TILE_SNOW
var U=M.TILE_STONE
var F=M.TILE_STONE_DARK
var G=M.TILE_STONE_LIGHT
var B=M.TILE_STONE_RED
function avgTint(e){var r=[]
for(var a=0;a<3;++a){var t=e[a]
if(t.length)t=(t[0]+t[1])/2
r.push(t)}return r}var H=[[75,125,.005,0],.65,.8]
var W=[[70,110,.01,0],[.6,.9,.005,0],.9]
var V=[[100,130,.005,0],.7,[.9,.5,.005,0,0]]
var q=V
var z=q
var j=[[60,155,.005,0],.55,.6]
var Y=avgTint(H)
var K=[[120,145,.005,0],.65,.9]
var Z=[[120,145,.005,0],.65,.9]
var X=[[55,70,.005,0],.65,.9]
var Q=[[55,70,.005,0],.65,.9]
var J={FLAT:1,HILLS:2,HILLS_FOREST:3,TUNDRA:4,PLAINS:5,PLAINS_BLUE:6,PLAINS_RED:7,PLAINS_FOREST:8,DENSE_FOREST:9,DESERT:10,OCEAN:11,MOUNTAINS:12,CLIFFS:13,PLAINS_SPRING:14,HILLS_SPRING:15,MOUNTAINS_SPRING:16,FOREST_MEGA_TREE:17,SNOW_PINE_MOUNTAINS:18,FOREST_RUIN:19,RIVER_DELTA:20,SHALLOWS_SPIKY:21,PLAINS_FOREST_SPIKY:22,PLAINS_YELLOW:23,PLAINS_RED_V2:24,PLAINS_BLUE_V2:25,PLAINS_WITH_BERRIES:26,PLAINS_BLUE_V3:27,MOUNTAINS_FLOATY_ROCKS:28}
a.TYPE_IDS=J
var $={BASE:{name:"BASE",surface:C,surface_depth:[1],ground:P,ground_depth:[10,20],noise_periods:[],noise_weights:[],height_func:null,blend:[.5,.5],details:[],plants:[],min_erosion:0,spawn_weight:0,debug_color_hsv:[[0,360],1,1],tint_grass_hsv:H},FLAT:{name:"Flat",surface:U,surface_depth:[Infinity],ground:U,ground_depth:[0,0],details:[],plants:[],spawn_weight:1,debug_color_hsv:[0,0,[0,1]],tint_grass_hsv:Y},HILLS:{name:"Hills",noise_periods:[.005,.025],noise_weights:[32,4],height_func:"genericHeight",details:[{type_name:"BOULDER",min:-10,max:1,freq:.005,chance:.02,offs:10}],plants:[{id:l,size:D,over:C,min:-2,max:6,freq:.005,chance:1,offs:100,attr3_list:m},{id:u,over:C,min:-2,max:2,freq:.007,chance:.3,offs:450,attr3_list:[A]}],spawn_weight:0,debug_color_hsv:[[100,140],.75,1],tint_grass_hsv:W},HILLS_FOREST:{name:"ForestedHills",inherit:"HILLS",debug_color_hsv:[[100,140],.75,.5],details:[{type_name:"BOULDER",min:-10,max:1,freq:.005,chance:.2,offs:10},{type_name:"FOREST_MEDIUM",min:0,max:4,freq:.005,chance:.66,offs:0}],plants:[{id:l,size:D,over:C,min:-2,max:1,freq:.005,chance:1,offs:100,attr3_list:m},{id:u,over:C,min:-2,max:1,freq:.005,chance:.2,offs:270,attr3_list:[R]},{id:f,over:C,min:-2,max:1,freq:.005,chance:.5,offs:200,attr3_list:[c.HOT]},{id:u,over:C,min:-2,max:2,freq:.005,chance:.2,offs:150,attr3_list:[O]}],spawn_weight:.5,tint_grass_hsv:V,tint_lod_hsv:q},TUNDRA:{name:"Tundra",surface:x,surface_depth:[3],noise_periods:[1/80],noise_weights:[4],height_func:"genericHeight",details:[],plants:[],debug_color_hsv:[[195,285],.125,2]},PLAINS:{name:"Plains",noise_periods:[.025],noise_weights:[2],height_func:"genericHeight",details:[{type_name:"BOULDER",min:-10,max:1,freq:.005,chance:.2,offs:10},{type_name:"FOREST_MEDIUM",min:-16,max:4,freq:.004,chance:.125,offs:0}],plants:[{id:l,size:D,over:C,min:-2,max:6,freq:.005,chance:1,offs:100,attr3_list:m},{id:u,over:C,min:-2,max:2,freq:.007,chance:.2,offs:150,attr3_list:[y]}],spawn_weight:1,debug_color_hsv:[[40,80],.75,1]},PLAINS_WITH_BERRIES:{inherit:"PLAINS",spawn_weight:.2,plants:[{id:l,size:D,over:C,min:-2,max:6,freq:.005,chance:1,offs:100,attr3_list:m},{id:u,over:C,min:-2,max:2,freq:.007,chance:.2,offs:150,attr3_list:[y]},{id:s,over:C,size:N,min:-30,max:10,freq:.003,chance:.03,offs:100},{id:v,over:C,size:L,min:-30,max:10,freq:.003,chance:.03,offs:100},{id:o,over:C,size:N,min:-30,max:10,freq:.003,chance:.03,offs:100}]},PLAINS_BLUE:{name:"Blue Flower Plains",inherit:"PLAINS",spawn_weight:.2,debug_color_hsv:[[150,190],.75,1],plants:[{id:l,over:C,min:-30,max:25,freq:.003,chance:1,offs:100,attr3_list:E.weighted}],tint_grass_hsv:K,tint_lod_hsv:Z},PLAINS_BLUE_V2:{inherit:"PLAINS_BLUE",plants:[{id:l,over:C,min:-30,max:25,freq:.003,chance:1,offs:100,attr3_list:E.weighted},{id:o,over:C,size:N,min:-30,max:25,freq:.003,chance:.2,offs:100}]},PLAINS_BLUE_V3:{inherit:"PLAINS_BLUE",plants:[{id:l,over:C,min:-30,max:27,freq:.003,chance:1,offs:100,attr3_list:E.weighted},{id:o,over:C,size:N,min:-30,max:10,freq:.003,chance:.2,offs:100}]},PLAINS_RED:{name:"Red Flower Plains",inherit:"PLAINS",spawn_weight:.2,tint_grass_hsv:X,tint_lod_hsv:Q,debug_color_hsv:[[0,40],.75,1],plants:[{id:l,over:C,min:-30,max:30,freq:.003,chance:1,offs:100,attr3_list:T.key}]},PLAINS_RED_V2:{inherit:"PLAINS_RED",plants:[{id:l,over:C,min:-30,max:30,freq:.003,chance:1,offs:100,attr3_list:T.key},{id:s,over:C,size:N,min:-30,max:10,freq:.003,chance:.2,offs:100}]},PLAINS_YELLOW:{name:"Yellow Flower Plains",inherit:"PLAINS",spawn_weight:.2,debug_color_hsv:[[45,60],.75,1],plants:[{id:l,over:C,min:-30,max:25,freq:.003,chance:1,offs:100,attr3_list:b.key},{id:v,over:C,size:L,min:-30,max:10,freq:.003,chance:.2,offs:100}],tint_grass_hsv:X,tint_lod_hsv:Q},PLAINS_FOREST:{name:"ForestedPlains",inherit:"PLAINS",spawn_weight:1,debug_color_hsv:[[40,80],.75,.5],details:[{type_name:"BOULDER",min:-10,max:1,freq:.005,chance:.2,offs:10},{type_name:"FOREST_MEDIUM",min:-1,max:4,freq:.005,chance:.66,offs:0}],plants:[{id:l,size:D,over:C,min:-2,max:1,freq:.005,chance:1,offs:100,attr3_list:m},{id:u,over:C,min:-2,max:1,freq:.005,chance:.2,offs:100,attr3_list:[R]},{id:f,over:C,min:-2,max:1,freq:.005,chance:.5,offs:100,attr3_list:[c.HOT]}],tint_grass_hsv:V,tint_lod_hsv:q},PLAINS_FOREST_SPIKY:{name:"ForestedPlainsSpiky",inherit:"PLAINS_FOREST",height_func:"spikyHeight",local_func:"shallowsSpikyReef",spawn_weight:.1,debug_color_hsv:[[270,300],.48,.91],ground_depth:[0,0],surface_depth:[1],plants:[{id:u,over:C,min:-2,max:2,freq:.005,chance:1,offs:100,attr3_list:[S]}]},DENSE_FOREST:{name:"DenseForest",inherit:"PLAINS",noise_periods:[.005,.025],noise_weights:[16,3],spawn_weight:.5,debug_color_hsv:[[0,40],.75,.5],details:[{type_name:"BOULDER",min:-10,max:1,freq:.005,chance:.2,offs:10},{type_name:"FOREST_MEDIUM",min:1,max:4,freq:.005,chance:.75,offs:0}],plants:[{id:l,over:C,min:-2,max:10,freq:.005,chance:1,offs:100,attr3_list:m},{id:f,over:C,min:-2,max:1,freq:.005,chance:.5,offs:200,attr3_list:[c.HOT]},{id:u,over:C,min:-2,max:2,freq:.005,chance:.2,offs:150,attr3_list:[O]}],tint_grass_hsv:V,tint_lod_hsv:z},FOREST_RUIN:{name:"ForestRuin",inherit:"DENSE_FOREST",spawn_weight:0,debug_color_hsv:[[0,10],1,.75],details:[{type_name:"FOREST_MEDIUM",min:2,max:6,freq:.005,chance:.75,offs:0}],detail_provider:"providerForestedRuin"},DESERT:{name:"Desert",surface:k,surface_depth:[9],noise_periods:[.005,.025],noise_weights:[10,6],height_func:"genericHeight",details:[],plants:[{id:f,over:k,min:-2,max:1,freq:.005,chance:1,offs:100,attr3_list:[c.SAVORY]}],debug_color_hsv:[[40,80],.25,1],spawn_weight:-1},OCEAN:{name:"Ocean",surface:k,surface_depth:[3],noise_periods:[.005,.025],noise_weights:[-6,-2],height_func:"genericHeight",details:[],plants:[],spawn_weight:-100,debug_color_hsv:[[195,285],.75,1]},MOUNTAINS:{name:"Mountains",surface:P,surface_depth:[0],ground_depth:[-100,0],height_func:"mountainsHeight",local_func:"grassyMountain",blend:[0,0],plants:[{id:f,over:C,min:-2,max:2,freq:.005,chance:1,offs:100,attr3_list:[c.PUNGENT]},{id:u,over:C,min:-2,max:2,freq:.003,chance:1,offs:230,attr3_list:[I]}],spawn_weight:-1,debug_color_hsv:[[0,360],.125,.75],min_erosion:7,tint_grass_hsv:j},MOUNTAINS_FLOATY_ROCKS:{name:"Mountains Floaty Rocks",inherit:"MOUNTAINS",detail_provider:"providerFloatyRocks",debug_color_hsv:[270,1,.8]},RIVER_DELTA:{name:"RiverDelta",inherit:"OCEAN",height_func:"riverDeltaHeight",debug_color_hsv:[[195,285],.25,.5]},SHALLOWS_SPIKY:{name:"shallows_spiky",inherit:"OCEAN",ground_depth:[0,0],surface_depth:[0],debug_color_hsv:[[270,300],.48,[.2,.3]],height_func:"shallowsSpikyHeight",local_func:"shallowsSpikyReef"},CLIFFS:{name:"Cliffs",surface:F,surface_depth:[3],ground_depth:[-100,0],height_func:"cliffsHeight",blend:[0,0],details:[],plants:[],spawn_weight:-1,debug_color_hsv:[[0,360],.125,.25],min_erosion:7,tint_grass_hsv:j},HILLS_SPRING:{name:"HillsSpring",inherit:"HILLS",detail_provider:"providerSpring"},PLAINS_SPRING:{name:"PlainsSpring",inherit:"PLAINS",detail_provider:"providerSpring"},MOUNTAINS_SPRING:{name:"MountainsSpring",inherit:"MOUNTAINS",detail_provider:"providerSpring"},FOREST_MEGA_TREE:{name:"MegaTree",inherit:"DENSE_FOREST",detail_provider:"providerMegaTree",spawn_weight:.2,plants:[{id:l,over:C,min:-2,max:6,freq:.03,chance:1,offs:100,attr3_list:m}],debug_color_hsv:[300,1,1]},SNOW_PINE_MOUNTAINS:{name:"SnowPineMountain",inherit:"MOUNTAINS",details:[{type_name:"SNOW_PINE_FOREST",min:1,max:4,freq:.005,chance:.75,offs:0}]}}
a.BIOMES=$
var ee=function(){var e=[]
for(var r in $)if("BASE"!==r){var a=J[r]
i(a)
e[$[r].id=a]=$[r]}return e}()
a.BIOME_BY_ID=ee
var re=1
a.TYPE_ARR=re
var ae=2
a.TYPE_NON_INTERP=ae
var te=function(){var e={}
var r=$.BASE
for(var a in r){var t=r[a]
i(t||0===t||null===t)
e[a]=t&&t.length?re:ae}return e}();(a.BIOME_PARAM_TYPE=te).debug_color=re
function doInherit(e,r){if(r){var a=$[r]
i(a)
i(!a.inherit)
for(var t in a)if(void 0===e[t])e[t]=a[t]}}(function(){for(var e in $){var r=$[e]
var a=r.inherit
if("BASE"!==e&&void 0===a)a="BASE"
doInherit($[e],a)
i.equal($[e].ground_depth.length,2)
delete r.inherit}})()
var ie=[C,U,x,k,F,G,B]
function setupFlat(e){var r=$.FLAT
r.fixed_elev=-1
switch(e){case p:r.surface=k
r.surface_depth=[1]
r.ground=P
r.ground_depth=[15,15]
r.fixed_elev=-16
break
case h:r.surface=C
r.surface_depth=[1]
r.ground=P
r.ground_depth=[15,15]
break
case d:r.surface=F
r.surface_depth=[Infinity]
r.ground=F
r.ground_depth=[0,0]
r.fixed_elev=2*-t
break
default:var a=e
if(-1===ie.indexOf(e))a=U
r.surface=a
r.surface_depth=[Infinity]
r.ground=a
r.ground_depth=[0,0]}}},{"../common/globals":41,"../common/ids":42,"../common/materials_common":43,"../common/waygate_common":46,"./flora_constants":14,"./proc_gen_constants":29,"./tiles":37,assert:void 0}],6:[function(e,r,a){"use strict"
a.caveGenSphere=caveGenSphere
a.caveGenBoring=caveGenBoring
a.oreVeinGen=oreVeinGen
a.caveGenMaze=caveGenMaze
var A=e("assert")
var t=e("../glov/client/quat")
var S=t.qFromYPR
var R=t.qMult
var O=t.qTransformVec3
var i=t.quat
var n=e("../glov/client/rand_fast")
var o=n.randFastCreate
var Q=n.randSimpleSpatial
var s=e("../glov/common/util")
var I=s.easeIn
var v=s.inherits
var K=s.lerp
var l=e("../glov/common/vmath")
var c=l.ivec3
var y=l.v3copy
var Z=l.v3distSq
var X=l.v3iAdd
var b=l.v3iMax
var w=l.v3iMin
var D=l.v3iMul
var J=l.v3iNormalize
var $=l.v3scale
var N=l.v3set
var ee=l.v3sub
var L=l.vec2
var f=l.vec3
var u=l.vec4
var _=e("../common/globals")
var re=_.CHUNK_SIZE
var ae=_.CS2
var d=e("../common/ids")
var te=d.ITEM_CHEST_MEDIUM
var ie=d.ITEM_DOOR
var ne=d.ITEM_DOOR_DOUBLE
var oe=d.ITEM_INGOT
var se=d.ITEM_PLANT
var ve=d.ITEM_TORCH
var le=d.TYPE_ITEM
var fe=e("../common/materials_common").Mat
var h=e("./detail_gen_base")
var M=h.DetailGenBase
var p=h.blocksAlways
var g=h.blocksNever
var ue=h.bounds_z
var ce=h.maxSurfaceClear
var _e=h.step_pos
var de=h.surfaceCheckSetParams
var he=h.tryDeleteProp
var pe=h.tryPlaceProp
var m=e("./flora_constants")
var ge=m.BROWN_MUSHROOMS
var me=m.LUMINESCENT_MUSHROOMS
var Ee=m.RED_MUSHROOMS
var Te=e("./line2d").ptLineDistSqBBV
var E=e("./line3d")
var q=E.ptLineDist3DSqBBV
var Se=E.ptLineNearestBBV
var z=E.v3distSqBV
var T=e("./maze_gen")
var Ae=T.M_DOOR
var Re=T.M_INTERIOR
var P=T.M_LEAF
var Oe=T.M_TORCH
var Ie=T.M_TREASURE
var ye=T.M_WALL
var C=T.mazeGen
var be=e("./proc_gen_biomes").world_noise3D
var k=e("./proc_gen_constants")
var we=k.PROP_1x1x1
var De=k.PROP_1x2x4
var Ne=k.PROP_1x4x4
var Le=k.PROP_2x1x4
var Me=k.PROP_2x2x2
var Pe=k.PROP_4x1x4
var x=e("./proc_gen_details")
var U=x.MAX_DETAIL_REACH
var F=x.f32Alloc
var G=e("./tiles")
var Ce=G.TILE_BRICK_STONE
var ke=G.TILE_COAL
var j=G.TILE_DIRT
var Y=G.TILE_GRASS
var B=G.TILE_ORE_IN_STONE
var H=G.TILE_ORE_IN_STONE_DARK
var W=G.TILE_ORE_IN_STONE_LIGHT
var V=G.TILE_ORE_IN_STONE_RED
var xe=G.TILE_ORE_IN_VEINIUM
var Ue=G.TILE_PROP_BASE
var Fe=G.TILE_STONE
var Ge=G.TILE_STONE_DARK
var Be=G.TILE_STONE_LIGHT
var He=G.TILE_STONE_RED
var We=G.TILE_VEINIUM
var Ve=G.TILE_WATER
var qe=Math.abs,ze=Math.acos,je=Math.cos,Ye=Math.ceil,Ke=Math.floor,Ze=Math.max,Xe=Math.min,Qe=Math.round,Je=Math.sin,$e=Math.sqrt,er=Math.PI
var rr=false
var ar=o()
function CaveGenSphere(e,r,a){M.call(this)
ar.reseed(e)
this.origin=r.slice(0)
var t=this.r=ar.floatBetween(5,16)
this.boundsAlloc(1)
this.boundsPush(this.bounds_idx,r[0]-t,r[1]-t,r[2]-t,r[0]+t,r[1]+t,r[2]+t)}v(CaveGenSphere,M)
CaveGenSphere.prototype.type="CaveGenSphere"
CaveGenSphere.prototype.priority=100
CaveGenSphere.prototype.blocksOther=p
var tr=[fe.WOOD,fe.LIGHT_WOOD,fe.DARK_WOOD,fe.RED_WOOD]
CaveGenSphere.prototype.genLocal=function(e){var r=e.vd,a=e.vs,t=e.non_spatial_rand
var i=r.data
if(!i)return
var n=a.map
var o=r.pos_world,s=r.props
var v=this.origin,l=this.r
var f=l*l
var u=a.owner_hexome.water_level
de(n,u,o[2])
var c=v[2]-Qe(.25*l)
this.stepInit(o)
for(var _=0;_<re;++_){if(!this.stepY(_))continue
var d=n[_]
for(var h=0;h<re;++h){if(!this.stepX(h))continue
var p=_*re+h
var g=ce(d,h,_)
var m=Xe(re,g-o[2]+1)
var E=_e[0]===v[0]&&_e[1]===v[1]
for(var T=0;T<m;++T,p+=ae){var S=o[2]+T
_e[2]=S
if(!i[p])continue
if(Z(_e,v)>f)continue
var A=v[2]-_e[2]
var R=0
var O=null
if(E&&_e[2]===c&&_e[2]<g-10)O={id:ve,attr1:tr[t.range(tr.length)],size:we}
else if(A>0){_e[2]-=A/2
if(Z(_e,v)>f)if(qe(_e[0]-v[0])+qe(_e[1]-v[1])<1.99&&S<v[2]-l+1)R=xe
else if(E)R=t.random()>.8?xe:We
else if(A<3||t.random()>.75)continue
else R=j
else if(E&&_e[2]<c)R=t.random()>.8?xe:We}var I=i[p]
if(I>=Ue)if(!he(r,I,h,_,T))continue
if(O){i[p]=Ue
if(!s)s=r.props={}
s[p]=O}else i[p]=R
r.full=false}}}}
function caveGenSphere(e,r,a){return new CaveGenSphere(e,r,a)}function randFloatExp(e,r){var a=ar.random()
return e+a*a*(r-e)}function randomQuatAngle(e){var r=ar.floatBetween(0,2*er)
var a=ze(ar.floatBetween(-1,1))
S(e,r,a,0)}var ir=f()
var nr=f()
var or=f()
var sr=i()
var vr=i()
var lr=f()
var fr=10
var ur=20
var cr=16
A(fr*ur+cr<U)
var _r=f()
var dr=6
function CaveGenBoring(e,r,a){M.call(this)
ar.reseed(e)
var t=ar.random()
var i=ar.random()
var n=0
if(t<.05)N(_r,.2,1,1)
else if(t<.1)N(_r,1,.2,1)
else if(t<.15)N(_r,1/3,1/3,1)
else if(t<.3)N(_r,1,1,.2)
else{N(_r,1,1,1)
if(i<.1)n=1}var o=randFloatExp(2,cr/2)
var s=randFloatExp(1,cr/2)
var v=ar.floatBetween(o,s)
var l=8+ar.range(fr+1-8)
randomQuatAngle(sr)
var f=ar.floatBetween(.75*ur,ur)
var u=ar.floatBetween(er/4,er/2)
var c=ar.floatBetween(0,1)
this.boundsAlloc(l)
var _=this.bounds_idx
var d=dr+4*(l+1)
var h=F(d),p=h[0],g=h[1]
this.f32buf=p
var m=g
this.header_idx=g
p[g++]=_r[0]
p[g++]=_r[1]
p[g++]=_r[2]
p[g++]=c
p[g++]=n
p[g++]=i
this.origin_idx=g
function addPoint(){p[g++]=or[0]*_r[0]
p[g++]=or[1]*_r[1]
p[g++]=or[2]*_r[2]
p[g++]=v}var E=this
function addLeg(e){y(ir,or)
y(nr,or)
N(lr,0,0,f)
O(lr,lr,sr)
D(lr,_r)
if(n)lr[2]=-qe(lr[2])
X(or,lr)
S(vr,ar.floatBetween(-u,u),ar.floatBetween(-u,u),0)
R(sr,sr,vr)
var r=v
v=ar.floatBetween(o,s)
r=Ze(r,v)+1
w(ir,or)
b(nr,or)
_=E.boundsPush(_,ir[0]-r/_r[0],ir[1]-r/_r[1],ir[2]-r/_r[2],nr[0]+r/_r[0],nr[1]+r/_r[1],nr[2]+r/_r[2])
addPoint()}y(or,r)
addPoint()
for(var T=0;T<l;++T)addLeg(T)
A.equal(_,this.bounds_idx+6*this.bounds_len)
A.equal(g,m+d)}v(CaveGenBoring,M)
CaveGenBoring.prototype.type="CaveGenBoring"
CaveGenBoring.prototype.priority=100
CaveGenBoring.prototype.getDebugLines=function(){var e=this.origin_idx,r=this.f32buf,a=this.header_idx
var t=[]
for(var i=0;i<this.bounds_len;++i){var n=e+4*i
t.push([[r[n]/r[a],r[n+1]/r[a+1],r[n+2]/r[a+2]],[r[n+4]/r[a],r[n+5]/r[a+1],r[n+6]/r[a+2]]])}return t}
var hr=u()
var pr=u()
var gr=f()
CaveGenBoring.prototype.blocksOther=function(e,r,a,t){var i=e.blocked_r
var n=this.origin_idx,o=this.f32buf,s=this.header_idx
gr[0]=r[0]*o[s]
gr[1]=r[1]*o[s+1]
for(var v=0;v<this.bounds_len;++v)if(t&1<<v){var l=n+4*v
var f=(o[l+2]+o[l+6])/(2*o[s+2])
if(r[2]>f)gr[2]=r[2]
else if(r[2]+a<f)gr[2]=r[2]+a
else gr[2]=f
gr[2]*=o[s+2]
q(hr,o,l,l+4,gr)
var u=hr[1]
var c=K(hr[0],o[l+3],o[l+7])+.25
if(u<(c+=i)*c)return true}return false}
var mr=[]
mr[Be]=W
mr[Fe]=B
mr[Ge]=H
mr[He]=V
var Er=.5
var Tr=2.5
var Sr=.1
var Ar=.87
var Rr=.25
var Or=new Array(32)
var Ir=f()
var yr=f()
CaveGenBoring.prototype.genLocal=function(e){var r=e.vd,a=e.vs,t=e.non_spatial_rand
var i=r.data
if(!i)return
var n=r.liquid
var o=a.map
var s=a.owner_hexome.water_level
var v=r.pos_world,l=r.props
var f=this.origin_idx,u=this.f32buf,c=this.header_idx
var _=u[c+3]
var d=u[c+4]
var h=u[c+5]
var p=!(Ke(1001*h)%4)
var g=!(Ke(10001*h)%3)
this.stepInit(v)
de(o,s,v[2])
for(var m=0;m<re;++m){if(!this.stepY(m))continue
Ir[1]=_e[1]*u[c+1]
var E=o[m]
for(var T=0;T<re;++T){var S=this.stepX(T)
if(!S)continue
Ir[0]=_e[0]*u[c]
for(var A=0;A<S;++A)Or[A]=f+4*ue[A]
var R=m*re+T
var O=ce(E,T,m)
var I=false
var y=Xe(re,O-v[2]+1)
var b=false
for(var w=0;w<y;++w,R+=ae){var D=v[2]+w
var N=false
var L=false
var M=false
var P=null
if(I&&i[R]>=Ue)N=true
else{_e[2]=D
I=false
for(var C=0;C<S;++C){var k=Or[C]
Ir[2]=D*u[c+2]
Se(hr,u,k,k+4,Ir)
var x=Z(hr,Ir)
var U=Ir[2]-hr[2]
var F=x?U*U/x:1
if(U>0)F*=_
var G=(2*be[0](Ir[0]*Er,Ir[1]*Er,.1*Ir[2])-1)*(1-F)*3
Ir[2]+=G
Se(hr,u,k,k+4,Ir)
x=Z(hr,Ir)
var B=hr[3]
var H=K(B,u[k+3],u[k+7])
if(x<H*H){N=true
break}var W=$e(x)
if(d)if(D<O-5&&U<0&&W<H+d+.5){Te(pr,u,k,k+4,Ir)
if(pr[1]<1.5)L=true}if(!L)if(W<H+Tr)if(be[0](_e[0]*Sr,_e[1]*Sr,_e[2]*Sr)>Ar&&t.random()<Rr){ee(yr,Ir,hr)
J(yr)
$(yr,yr,H)
X(yr,hr)
yr[0]/=u[c]
yr[1]/=u[c+1]
yr[2]=(yr[2]-G)/u[c+2]
if(Z(yr,_e)<Tr*Tr)M=true}}if(N&&p&&D<O-30&&!b&&i[R-ae]&&!L){b=true
var V=be[0](.05*_e[0],.05*_e[1],.05*_e[2])
var q=t.range(100)
if(V>.5&&q>85)P={id:se,size:we,attr3:ge.key[t.range(ge.key.length)]}
var z=500
if((V=be[0](.05*_e[0]+z,.05*_e[1]+z,.05*_e[2]))>.7&&q>90)P={id:se,size:we,attr3:Ee.key[t.range(Ee.key.length)]}
if(t.range(1e3)<1&&D<O-50)P={id:se,size:we,attr3:me.key[t.range(me.key.length)]}}}if(L)if(!N)N=true
else L=false
if(N)M=false
if(!N&&!M)continue
var j=i[R]
if(j>=Ue)if(!he(r,j,T,m,w))continue
if(L){if(!n){r.alloc(true)
n=r.liquid}r.liquid_stable=false
n[R]=Ve}if(M){var Y=mr[j]
if(Y)i[R]=g?ke:Y}else if(P){if(!l)l=r.props={}
l[R]=P
i[R]=Ue
r.full=false}else if(N){i[R]=0
I=true
r.full=false}}}}}
function caveGenBoring(e,r,a){return new CaveGenBoring(e,r,a)}var br=[[ke,null],[xe,We],[xe,We],[xe,We]]
function OreVeinGen(e,r,a){M.call(this,e,r,a)
ar.reseed(e)
var t=br[ar.range(br.length)]
this.ore_type=t[0]
this.stone_type=rr?0:t[1]
this.surface_offs=randFloatExp(-.66,1)
this.ore_r=randFloatExp(1,1.5)
var i=this.vein_r=this.ore_r+ar.floatBetween(1,3)
var n=ar.floatBetween(30,80)
var o=5+Ke((n-30)/50*4)
var s=n/(this.num_legs=o)
var v=randFloatExp(er/4,er/2)
this.center_factor=this.ore_type===ke?1:.5
this.center_chance=this.ore_type===ke?.9:.6
var l=L(ar.floatBetween(0,2*er),ar.floatBetween(0,2*er))
var f=l.slice(0)
this.boundsAlloc(2*o+1)
var u=this.bounds_idx
var c=2*(o+1)*4
var _=F(c),d=_[0],h=_[1]
this.f32buf=d
var p=h
this.origin_idx=h
var g=Ye(this.ore_r+1)
u=this.boundsPush(u,r[0]-g,r[1]-g,r[2]-g,r[0]+g,r[1]+g,r[2]+g)
var m=1
function addPoint(){d[h++]=or[0]
d[h++]=or[1]
d[h++]=or[2]
d[h++]=m}var E=this
function addLeg(e){y(ir,or)
y(nr,or)
or[0]+=Je(f[0])*s
or[1]+=je(f[0])*s
or[2]+=je(f[1])*s
f[0]+=ar.floatBetween(-v,v)
f[1]+=ar.floatBetween(-v,v)
w(ir,or)
b(nr,or)
var r=m*i
u=E.boundsPush(u,ir[0]-r,ir[1]-r,ir[2]-r,nr[0]+r,nr[1]+r,nr[2]+r)
m=I(1-(e+1)/o,2)
addPoint()}y(or,r)
addPoint()
for(var T=0;T<o;++T)addLeg(T);(f=l)[0]+=er
f[1]+=er
m=1
y(or,r)
addPoint()
for(var S=0;S<o;++S)addLeg(S)
A.equal(h,p+c)
A.equal(u,this.bounds_idx+6*this.bounds_len)}v(OreVeinGen,M)
OreVeinGen.prototype.type="OreVeinGen"
OreVeinGen.prototype.priority=10
OreVeinGen.prototype.blocksOther=g
OreVeinGen.prototype.checkBounds=function(e){e=this.bounds_idx+6*e
if(_e[0]<this.bounds_buf[e++]||_e[0]>=this.bounds_buf[e++]||_e[1]<this.bounds_buf[e++]||_e[1]>=this.bounds_buf[e++])return false
return true}
OreVeinGen.prototype.genLocal=function(e){var r=e.vd,a=e.vs,t=e.non_spatial_rand
var i=r.data
if(!i)return
var n=r.liquid
var o=a.map
var s=r.pos_world
var v=this.origin_idx,l=this.stone_type,f=this.ore_type,u=this.ore_r,c=this.vein_r,_=this.surface_offs,d=this.f32buf,h=this.num_legs,p=this.center_factor,g=this.center_chance
var m=h+1
var E
this.stepInit(s)
var T
for(var S=0;S<re;++S){if(!this.stepY(S))continue
var A=o[S]
for(var R=0;R<re;++R){var O=this.stepX(R)
if(!O)continue
for(var I=0;I<O;++I){var y=ue[I]
if(y)Or[I]=v+4*(y-1)+(y>=m?4:0)
else Or[I]=0}var b=S*re+R
var w=A[R].h
var D=w+Ke(_+.66*t.random())
var N=-1
for(var L=0;L<re;++L,b+=ae){_e[2]=s[2]+L
var M=t.random()
if(_e[2]>D){var P=_e[2]-D
if(P>4)break
var C=L&&i[b-ae]
if(!C||C>=Ue)break
M-=.25*P}var k=false
for(var x=0;x<O;++x){var U=Or[x]
if(!U){var F=Ze(0,u+2*M-1)
if(z(d,v,_e)>F*F)continue
E=f}else{q(hr,d,U,U+4,_e)
var G=hr[1]
var B=K(hr[0],d[U+3],d[U+7])
var H=Ze(0,B*c+2*M)
if(G>H*H)continue
if(G<p*B&&t.random()<g)E=f
else{if(null===l)continue
E=l}}k=true
break}if(!k)continue
var W=i[b]
if(W>=Ue)if(!he(r,W,R,S,L))continue
i[b]=E
if(n)n[b]=0
if(_e[2]>w){var V=b-ae
_e[2]--
while(V>=0&&_e[2]>=w&&(!i[V]||i[V]===Y||i[V]===j)){if(n)n[V]=0
i[V]=l
V-=ae
_e[2]--}N=b}if(rr)r.full=false}if(-1!==N){if(!T)T=[]
T.push(N)}}}if(T&&t.random()<.75)i[T[t.range(T.length)]]=f}
function oreVeinGen(e,r,a){return new OreVeinGen(e,r,a)}var wr=16
function CaveGenMaze(e,r,a){M.call(this)
ar.reseed(e)
var t=this.size=Qe(randFloatExp(37,60))
this.origin=c(r[0]-t/2,r[1]-t/2,r[2])
var i=this.door_w=2+Ze(0,ar.range(5)-2)
var n={seed:e,w:t,h:t,min_dim:2+ar.range(2),door_w:i,r1:2+ar.range(7),treasure:4e-4,treasure_size:2}
var o=this.maze=C(n)
this.room_h=8
this.wood=tr[ar.range(tr.length)]
this.boundsAlloc(1)
this.boundsPush(this.bounds_idx,this.origin[0],this.origin[1],this.origin[2],this.origin[0]+t-1,this.origin[1]+t-1,this.origin[2]+this.room_h+wr-1)
var s=t*t-1
for(var v=t-1;v>=0;--v)for(var l=t-1;l>=0;--l,--s){var f=o[s]
if((15&f)===Ie)if((15&o[s-1])===Ie||(15&o[s-t])===Ie)o[s]=-16&f|P
else{var u=s
if((this.origin[0]+l)%re===re-1)--u
if((this.origin[1]+v)%re===re-1)u-=t
if(s!==u){o[u]=Ie|-16&o[u]
o[s]=-16&f|P}}}}v(CaveGenMaze,M)
CaveGenMaze.prototype.type="CaveGenMaze"
CaveGenMaze.prototype.priority=50
CaveGenMaze.prototype.dispose=function(){this.maze=null}
var Dr=c()
CaveGenMaze.prototype.genLocal=function(e){var r=e.vd,a=e.vs,t=e.non_spatial_rand
var i=r.data
if(!i)return
var n=r.liquid
var o=this.room_h,s=this.maze,v=this.size,l=this.door_w,f=this.seed,u=this.origin
var c=a.map
var _=a.owner_hexome.water_level
var d=r.pos_world,h=r.props
de(c,_,d[2])
ee(Dr,d,u)
var p=Ze(-Dr[0],0)
var g=Xe(v-Dr[0],re)
var m=Ze(-Dr[1],0)
var E=Xe(v-Dr[1],re)
var T=[]
var S=[]
var A=0
for(var R=m;R<E;++R){var O=d[1]+R
var I=O-u[1]
var y=c[R]
for(var b=p;b<g;++b){var w=d[0]+b
var D=w-u[0]+I*v
var N=s[D]
var L=15&N
if(L===ye)continue
var M=N>>4
var P=ce(y,b,R)
var C=Dr[2]-M
var k=Ze(-C,0)
var x=Xe(Xe(o-C,re),P-d[2])
var U=R*re+b+k*ae
var F=u[2]-d[2]+M+1
if(F>=-4&&F<re){if(L===Ae&&(2===l||4===l)&&Q(f,w,O,u[2])<.25){var G=false
if((15&s[D-1])===Ae||(15&s[D-v])===Ae);else if((15&s[D+1])===Ae){if(b<=re-l){G=true
A=0}}else if((15&s[D+v])===Ae)if(R<=re-l){G=true
A=1}if(G)S.push([b,R,F,A])}if(L===Ie){var B=b<=re-2?b:b-1
var H=R<=re-2?R:R-1
T.push([B,H,F])}}for(var W=k;W<x;++W,U+=ae){var V=d[2]+W-u[2]-M
var q=i[U]
if(!q)continue
if(q>=Ue)if(!he(r,q,b,R,W))continue
var z=0
if(L===Ae&&V>=5)z=5===V?Fe:Ce
else if(0===V||V===o-1)z=L===Re?Fe:Ce
else if(L===Oe&&4===V){z=Ue
if(!h)h=r.props={}
h[U]={id:ve,attr1:this.wood,size:we}}if(!(i[U]=z))r.full=false
if(n)n[U]=0}}}for(var j=0;j<T.length;++j){var Y=T[j]
pe(r,Y,{id:te,size:Me,attr1:this.wood,rot:t.range(4),contents:[{type:le,id:oe,attr1:fe.GOLD,count:3+t.range(4)}]})}for(var K=0;K<S.length;++K){var Z=S[K]
var X=Z[3]
pe(r,Z,{id:4===l?ne:ie,size:4===l?X?Ne:Pe:X?De:Le,attr1:this.wood,rot:X})}}
function caveGenMaze(e,r,a){return new CaveGenMaze(e,r,a)}},{"../common/globals":41,"../common/ids":42,"../common/materials_common":43,"../glov/client/quat":51,"../glov/client/rand_fast":52,"../glov/common/util":58,"../glov/common/vmath":60,"./detail_gen_base":11,"./flora_constants":14,"./line2d":16,"./line3d":17,"./maze_gen":21,"./proc_gen_biomes":28,"./proc_gen_constants":29,"./proc_gen_details":30,"./tiles":37,assert:void 0}],7:[function(e,r,a){"use strict"
a.contextSetThreadName=contextSetThreadName
a.contextThreadName=contextThreadName
a.contextSetDebug=contextSetDebug
a.contextDebug=contextDebug
var t="main"
function contextSetThreadName(e){t=e}function contextThreadName(){return t}var i=false
function contextSetDebug(e){i=e}function contextDebug(){return i}},{}],8:[function(e,r,a){"use strict"
a.continentSeed=continentSeed
a.continentHandleData=continentHandleData
a.continentGetIDs=continentGetIDs
a.continentGetID=continentGetID
a.continentGet=continentGet
a.continentReady=continentReady
var c=e("assert")
var t=e("./continent_serialize.js").continentDeserialize
var i=e("../common/globals.js").ID_FACTOR
var h=Math.abs,n=Math.floor,_=Math.max,p=Math.min,o=Math.round
var s=e("./proc_gen_biomes.js").getContinentIDsForPos
var v=e("./proc_gen_constants.js").HEX_HEIGHT
var l=e("../glov/common/vmath.js").v2set
var f=256
var g=.25
var u
var m=new Uint8Array(f*f)
var E=[[f,1,1-f,-f,-1-f,-1],[f,1+f,1,-f,-1,-1+f]]
function Continent(e,r){this.cid=e
var a=o(e/i)
var t=e-a*i
this.width=f
this.height=f
this.hx=t*f
this.hy=a*f
this.init(r)}Continent.prototype.init=function(e){var r=e.elev,a=e.humidity,t=e.river,i=e.max_elevation,n=e.sea_level,o=e.water_level,s=e.classif
c(r instanceof Uint16Array)
c(a instanceof Uint8Array)
c(t instanceof Uint8Array)
c(s instanceof Uint8Array)
var v=this.total_size=f*f
this.land_range=i-n
this.max_elevation=(i-n)*g
this.water_level_source=o
this.water_level=new Uint16Array(v)
this.elev_source=r
this.elev=new Float32Array(v)
this.humidity=a
this.river=t
this.classif=s
c.equal(v,this.elev.length)
c.equal(v,this.humidity.length)
c.equal(v,this.river.length)
this.coast_distance=new Uint8Array(v)
this.flow=new Uint8Array(v)
this.default_water_level=0
this.calcElevation(n)
this.findCoast()
this.generateDF()
this.calcSlopes()
this.calcFlow()}
Continent.prototype.calcFlow=function(){var e=this.total_size,l=this.flow,f=this.river
function fillStrahler(e,r){var a=f[e]
var t=[]
for(var i=0;i<6;++i)if(i!==r&&a&1<<i)t.push(i)
var n
if(!t.length)n=1
else{var o=E[1&e]
if(1===t.length)n=fillStrahler(e+o[t[0]],(t[0]+3)%6)
else{c.equal(t.length,2)
var s=fillStrahler(e+o[t[0]],(t[0]+3)%6)
var v=fillStrahler(e+o[t[1]],(t[1]+3)%6)
if(s===v)n=s+1
else n=_(s,v)}}l[e]=p(n,31)<<3|r
return n}var r=[]
for(var a=0;a<e;++a){var t=f[a]
if(!t)continue
var i=E[1&a]
var n=false
for(var o=0;o<i.length;++o)if(t&1<<o){var s=a+i[o]
if(!f[s]){c(!n)
n=true
var v=fillStrahler(a,o)
l[s]=v<<3|7}}}for(var u=0;u<r.length;++u)l[r[u]]=7}
Continent.prototype.calcElevation=function(e){var r=this.total_size,a=this.elev_source,t=this.elev,i=this.water_level,n=this.water_level_source
for(var o=0;o<r;++o){t[o]=(a[o]-e)*g+this.default_water_level
var s=n[o]
i[o]=(s?(s-e)*g:0)+this.default_water_level}}
Continent.prototype.findCoast=function(){var e=this.total_size,r=this.elev,a=this.default_water_level
var t=this.coast=[]
for(var i=0;i<e;++i)if(r[i]>=a){var n=E[1&i]
var o=false
for(var s=0;s<n.length;++s)if(r[i+n[s]]<a){o=true
break}if(o)t.push(i)}}
Continent.prototype.generateDF=function(){m.fill(0)
var e=this.coast,r=this.coast_distance,a=this.width,t=this.height
var i=e
var n=0
for(var o=0;o<i.length;++o){var s=i[o]
r[s]=n
m[s]=1}while(i.length){n=p(n+1,255)
var v=[]
for(var l=0;l<i.length;++l){var f=i[l]
var u=E[1&f]
for(var c=0;c<u.length;++c){var _=f+u[c]
if(!m[_]){m[_]=1
r[_]=n
var d=f%a
var h=(f-d)/a
if(!d||!h||d===a-1||h===t-1);else v.push(_)}}}i=v}r[0]=p(r[1]+1,255)
r[this.total_size-1]=p(r[this.total_size-2]+1,255)}
function calcSlope(e,r,a){if(r-e<0&&a-r>0)return 0
return(a-e)/(2*v)}Continent.prototype.calcSlopes=function(){var e=this.total_size,r=this.elev,a=this.width,t=this.height
var i=this.slopes=new Float32Array(4*e)
var n=4/g/this.land_range
for(var o=1;o<t-1;++o)for(var s=1;s<a-1;++s){var v=o*a+s
var l=r[v]
var f=E[1&v]
var u=0
for(var c=0;c<3;++c){var _=r[v+f[c+3]]
var d=r[v+f[c]]
u+=h(_-l)
u+=h(d-l)
i[4*v+c]=calcSlope(_,l,d)}i[4*v+3]=u*n}}
Continent.prototype.getHumidity=function(e){return this.humidity[e]/255}
Continent.prototype.getElevation=function(e){return this.elev[e]}
Continent.prototype.getClassif=function(e){return this.classif[e]}
Continent.prototype.getRiver=function(e){return this.river[e]}
Continent.prototype.getFlowDir=function(e){return 7&this.flow[e]}
Continent.prototype.getFlowAmount=function(e){return this.flow[e]>>3}
Continent.prototype.getWaterLevel=function(e){return this.water_level[e]-1}
Continent.prototype.getCoastDistance=function(e){return this.coast_distance[e]/(this.width+this.height)}
Continent.prototype.getSlopes=function(e){return this.slopes.slice(4*e,4*e+4)}
Continent.prototype.getMinElev=function(e){var r=E[1&e]
var a=this.elev
var t=a[e]
for(var i=0;i<r.length;++i)t=p(a[e+r[i]],t)
return t}
function continentSeed(e){u={}}function continentHandleData(e){for(var r=0;r<e.length;++r){var a=e[r]
c.equal(typeof a.cid,"number")
c(!u[a.cid])
c(a.buffer instanceof Uint8Array)
u[a.cid]=new Continent(a.cid,t(a.buffer))}}Continent.prototype.getMidpointHexomePos=function(e){var r=n(this.width/2)
var a=this.hx+r
var t=n(this.hy+this.height/2+r/2)
return l(e,a,t)}
function continentGetIDs(e,r){r-=n((e+1)/2)
var a=n(e/f)
var t=n(r/f)
return{cid:a+t*i,idx:e-a*f+(r-t*f)*f}}function continentGetID(e,r){r-=n((e+1)/2)
return n(e/f)+n(r/f)*i}function continentGet(e){var r=u[e]
c(r)
return r}var d=[]
function continentReady(e,r){var a=s(d,e,r)
for(var t=0;t<a;++t){var i=d[t]
if(!u[i])return false}return true}},{"../common/globals.js":41,"../glov/common/vmath.js":60,"./continent_serialize.js":10,"./proc_gen_biomes.js":28,"./proc_gen_constants.js":29,assert:void 0}],9:[function(e,r,a){"use strict"
a.continentGen=continentGen
a.default_opts=a.D_LAKE=a.D_COASTLINE=a.D_INLAND_SEA=a.D_SEA2=a.D_SEA=a.D_BORDER=a.D_OPEN=void 0
var L=e("assert")
var V=Math.abs,q=Math.atan2,z=Math.ceil,v=Math.cos,j=Math.max,M=Math.min,P=Math.floor,Y=Math.round,K=Math.pow,l=Math.sin,Z=Math.sqrt,X=Math.PI
var t=e("./proc_gen_constants.js"),s=t.C_WATER,f=t.C_PLAINS,u=t.C_HILLS,c=t.C_MOUNTAINS,Q=t.SKEW_X,d=t.C_RIVER_DELTA
var i=e("../glov/common/rand_alea.js"),n=i.randCreate,m=i.shuffleArray
var _=e("simplex-noise")
var o=e("../glov/common/util.js"),J=o.clamp,$=o.lerp,C=o.ridx
var h=e("../glov/common/vmath.js"),p=h.vec2,g=h.v2copy,E=h.v2lengthSq
var T=256
var ee=2*X
var S=0
a.D_OPEN=S
var A=1
a.D_BORDER=A
var R=2
a.D_SEA=R
var O=3
a.D_SEA2=O
var I=4
a.D_INLAND_SEA=I
var y=5
a.D_COASTLINE=y
var b=6
a.D_LAKE=b
var w={hex_tex_size:T,seed:1,coast:{key:"",frequency:2,amplitude:1,persistence:.5,lacunarity:{min:1.6,max:2.8,freq:.3},octaves:6,cutoff:.5,domain_warp:0,warp_freq:1,warp_amp:.1,fill_seas:true,channels:true},tslope:{key:"ts",frequency:3.5,amplitude:1,min:0,range:8,persistence:.5,lacunarity:1.33,octaves:1,domain_warp:1,warp_freq:1,warp_amp:.1},rslope:{key:"rs",frequency:1.2,amplitude:1,persistence:.5,lacunarity:1.33,octaves:1,domain_warp:1,warp_freq:1,warp_amp:.1,steps:4},river:{weight_bend:2,weight_afork:2,weight_sfork:1,max_tslope:48,tuning_h:32,show_elev:true,prune:true,mtify_prune_grace:100,mtify_prune:true},ocean:{frequency:3,amplitude:1,persistence:.5,lacunarity:2.4,octaves:3,domain_warp:1,warp_freq:1,warp_amp:1},ocean_trenches:{frequency:4,amplitude:1,persistence:.5,lacunarity:.1,octaves:2,domain_warp:1,warp_freq:1,warp_amp:1},lakes:{lake_search_radius:Y(10*T/256),lake_percent:.1,lake_k:5,min_sep:Y(40*T/256)},blur:{threshold:500,weight:1},mountainify:{peak_radius:Y(10*T/256),peak_percent:.8,peak_k:5,height_scale:3,blend_radius:Y(10*T/256),weight_local:.25,power_min:1,power_max:4,power_blend:.25,cdist_ramp:2},humidity:{frequency:3.1,amplitude:1,persistence:.4,lacunarity:4,octaves:3,domain_warp:1,warp_freq:.7,warp_amp:2,rainshadow:.5,show_relief:false},classif:{cut1:.033,cut2:.666,blur_scale:680,blur_w:10,show_rivers:false},output:{sea_range_exp:13,land_range_exp:14,sea_range:8192,land_range:16384,debug:false},early_out:null}
a.default_opts=w
var re
var D
var k
var ae
var x
var U
var F
var te
var G
var N
var ie
var B
var H
var W
var ne
var oe
var se
var ve
var le
var fe
var ue
var ce
var _e
var de
var he
function setupWorkBuffers(e){ue=e*e
ce=_e=e
re=new Uint8Array(ue)
D=new Uint8Array(ue)
k=new Uint8Array(ue)
ae=new Uint32Array(ue)
x=new Uint8Array(ue)
U=new Uint8Array(ue)
F=new Uint8Array(ue)
te=new Uint16Array(ue)
G=new Uint8Array(ue)
N=new Uint16Array(ue)
ie=new Uint8Array(ue)
B=new Uint8Array(ue)
H=new Uint8Array(ue)
W=new Uint8Array(ue)
ne=new Uint8Array(ue)
oe=new Uint8Array(ue)
se=new Uint8Array(ue)
ve=new Uint32Array(ue)
le=new Uint32Array(ue)
de=[[ce,1,1-ce,-ce,-1-ce,-1],[ce,1+ce,1,-ce,-1,-1+ce]]}var pe=-1
var ge=p()
var me=p()
var Ee
var Te
var Se
function step(e,r){return e>=r}var Ae
var Re
var Oe
var Ie
function initNoise(e){Te=e
Ae=new Array(Te.octaves)
for(var r=0;r<Ae.length;++r)Ae[r]=new _(Ee.seed+"n"+Te.key+r)
Re=new Array(Te.domain_warp)
for(var a=0;a<Re.length;++a)Re[a]=new _(Ee.seed+"w"+Te.key+a)
Oe=0
var t=Te.amplitude
var i=Te.persistence&&Te.persistence.max||Te.persistence
for(var n=0;n<Te.octaves;n++){Oe+=t
t*=i}Ie={}
for(var o in Te){var s=Te[o]
if("object"===typeof s){Ie[o]=new _(Ee.seed+"f"+Te.key+o)
s.mul=.5*(s.max-s.min)
s.add=s.min+s.mul}}}var ye=p()
function get(e){var r=Te[e]
if("object"!==typeof r)return r
return r.add+r.mul*Ie[e].noise2D(ye[0]*r.freq,ye[1]*r.freq)}function sample(){g(ye,ge)
var e=Te.warp_freq
var r=Te.warp_amp
for(var a=0;a<Te.domain_warp;++a){var t=Re[a].noise2D(ye[0]*e,ye[1]*e)
var i=Re[a].noise2D((ye[0]+7)*e,ye[1]*e)
ye[0]+=t*r
ye[1]+=i*r}var n=0
var o=Te.amplitude
var s=get("frequency")
var v=get("persistence")
var l=get("lacunarity")
for(var f=0;f<Te.octaves;f++){n+=(.5+.5*Ae[f].noise2D(ye[0]*s,ye[1]*s))*o
o*=v
s*=l}return n/Oe}var be=1
var we=1.5*(be/Z(3))
function hexPosToUnifPos(e,r){me[0]=e*we
me[1]=r*be-.5*be
if(1&e)me[1]+=.5*be
ge[0]=me[0]/((ce-1)*we)*2-1
ge[1]=me[1]/((_e-1.5)*be)*2-1}var De
function generateCoastlines(){initNoise(Ee.coast)
if(!De)De=new Array(256)
for(var e=0;e<256;++e)De[e]=0
for(var r=0,a=0;a<_e;++a)for(var t=0;t<ce;++t,++r){hexPosToUnifPos(t,a)
var i=sample()
i*=1-E(ge)
i=J(P(255*i),0,255)
De[i]++
re[r]=i}var n=get("cutoff")
var o=ue*(n=1-(1-n)*(1-n))
var s=0
for(s=0;o>0&&s<256;++s)o-=De[s]
for(var v=0;v<ue;++v){var l=re[v]
re[v]=l>s?255:0
D[v]=S}}function fillSeas(){var g=he.unfilled_seas=[]
var i=[]
var a=[]
function fillBorders(){for(var e=0;e<ce;++e){D[e]=A
D[(_e-1)*ce+e]=A}for(var r=0;r<_e;++r){D[ce*r]=A
D[ce*r+ce-1]=A}}fillBorders()
function tryMark(e,r){if(re[e]||D[e])return
D[e]=r
i.push(e)
a.push(e)}function spreadSeas(e){while(i.length){var r=i.pop()
var a=de[1&r]
for(var t=0;t<a.length;++t)tryMark(r+a[t],e)}}tryMark(ce+1,R)
spreadSeas(R)
var e=[]
for(var r=0;r<ce*_e;++r)if(!re[r]&&!D[r]){a=[]
tryMark(r,I)
spreadSeas(I)
e.push(a)}m(Se,e)
e.forEach(function(e){var r=false
if(Te.channels){var a=[]
for(var t=0;t<e.length;++t)a[e[t]]=1
var i=[]
for(var n=0;n<e.length;++n){var o=e[n]
var s=de[1&o]
for(var v=0;v<s.length;++v){var l=o+s[v]
if(!a[l]){i.push(l)
a[l]=1}}}m(Se,i)
e:for(var f=0;f<i.length;++f){var u=i[f]
var c=de[1&u]
for(var _=0;_<c.length;++_){var d=u+c[_]
if(!a[d]&&!re[d]&&D[d]===R){re[u]=0
e.push(u)
re[d]=0
e.push(d)
for(var h=0;h<e.length;++h)D[e[h]]=R
r=true
break e}}}}if(!r)if(Te.fill_seas)for(var p=0;p<e.length;++p){re[e[p]]=255
D[e[p]]=S}else g.push(e)})}function poissonSample(e,r){var _=[]
var d=e*e
var h=e/Z(2)
var p=z(ce/h)
var g=z(_e/h)
var m=new Int16Array(p*g)
var t=[]
function emitSample(e){var r=e%ce
var a=(r/h|0)+((e-r)/ce/h|0)*p
_.push(e)
m[a]=_.length
t.push(e)}emitSample(Se.range(ue))
var E
var T
function generateAround(e,r){var a=2*Se.random()*X
var t=Z(3*Se.random()*d+d)
E=e+t*v(a)|0
T=r+t*l(a)|0}function near(){var e=2
var r=E/h|0
var a=T/h|0
var t=j(r-e,0)
var i=j(a-e,0)
var n=M(r+e+1,p)
var o=M(a+e+1,g)
for(var s=i;s<o;++s){var v=s*p
for(var l=t;l<n;++l){var f=m[v+l]
if(!f)continue
var u=(f=_[f-1])%ce
var c=(f-u)/ce
if((E-u)*(E-u)+(T-c)*(T-c)<d)return true}}return false}while(t.length){var a=Se.range(t.length)
var i=t[a]
C(t,a)
var n=i%ce
var o=(i-n)/ce
for(var s=0;s<r;++s){generateAround(n,o)
if(E<0||E>=ce||T<0||T>=_e||near())continue
emitSample(E+T*ce)}}return _}function findMaxPerRegion(e,r,a){var t=[]
var i={}
for(var n=0;n<e.length;++n){var o=e[n]
var s=o%ce
var v=(o-s)/ce
var l=j(0,s-a)
var f=M(ce-1,s+a)
var u=j(0,v-a)
var c=M(_e-1,v+a)
var _=r[o]
var d=o
for(var h=u;h<=c;++h)for(var p=l;p<=f;++p){var g=p+h*ce
var m=r[g]
if(m>_){_=m
d=g}}if(!i[d]){i[d]=true
t.push([_,d])}}t.sort(function(e,r){var a=r[0]-e[0]
if(a)return a
L(r[1]!==e[1])
return r[1]-e[1]})
return t}function generateLakes(){Te=Ee.lakes
var t=he.lakes=[]
var i=he.lake_seeds=[]
function generateInlandDF(){k.fill(0)
var e=[]
var r=0
for(var a=0;a<ue;++a){if(!re[a]){k[a]=1
ie[a]=0
continue}var t=de[1&a]
for(var i=0;i<t.length;++i){var n=a+t[i]
if(!re[n]){e.push(a)
ie[a]=r
k[a]=1
break}}}while(e.length){r=M(r+1,255)
var o=[]
for(var s=0;s<e.length;++s){var v=e[s]
var l=de[1&v]
for(var f=0;f<l.length;++f){var u=v+l[f]
if(!k[u]){k[u]=1
ie[u]=r
if(D[u]!==A)o.push(u)}}}e=o}}generateInlandDF()
var e=Te,r=e.lake_search_radius,a=e.lake_k,n=e.lake_percent,o=e.min_sep
var s=findMaxPerRegion(poissonSample(r,a),ie,P(r/2))
s=s.filter(function(e){return e[0]>2})
var v=P(s.length*n)
var l=[]
var f=o*o
for(var u=0;u<s.length&&l.length<v;++u){var c=s[u][1]
var _=c%ce
var d=(c-_)/ce
var h=false
for(var p=0;p<l.length;++p){var g=l[p]
var m=_-g[0]
var E=d-g[1]
if(m*m+E*E<f){h=true
break}}if(h)continue
l.push([_,d])}function placeLake(e,r){var a=e+r*ce
D[a]=I
re[a]=0
i.push(a)
t.push(a)}for(var T=0;T<l.length;++T)placeLake(l[T][0],l[T][1])}function generateTerrainSlope(){initNoise(Ee.tslope)
for(var e=0;e<_e;++e)for(var r=0;r<ce;++r){hexPosToUnifPos(r,e)
var a=sample()
var t=get("min")
var i=get("range")
a=J(t+P(a*i),0,255)
x[e*ce+r]=a}}function generateRiverSlope(){initNoise(Ee.rslope)
for(var e=0;e<_e;++e)for(var r=0;r<ce;++r){hexPosToUnifPos(r,e)
var a=sample()
a=J(P(a*Ee.rslope.steps),0,Ee.rslope.steps-1)
U[e*ce+r]=a+1}}function growRivers(){Te=Ee.river
F.fill(0)
te.fill(0)
var N=[]
var l=[]
function findCandidates(){var e=he,r=e.unfilled_seas,a=e.lake_seeds
var n=[]
function tryMark(e,r,a){var t=D[e]
if(t!==R&&t!==I){if(t===S){D[e]=y
var i=(a+3)%6
F[e]=1<<i
te[e]=U[e]
N.push(e)
l.push(i)}return}D[e]=r
n.push(e)}function spreadSeas(e){while(n.length){var r=Se.range(n.length)
var a=n[r]
C(n,r)
var t=de[1&a]
for(var i=0;i<t.length;++i)tryMark(a+t[i],e,i)}}function tryMarkXY(e,r,a){tryMark(r*ce+e,a||O)}tryMarkXY(1,1)
tryMarkXY(ce-2,1)
tryMarkXY(ce-2,_e-2)
tryMarkXY(1,_e-2)
for(var t=0;t<r.length;++t){var i=r[t]
var o=i[Se.range(i.length)]
tryMarkXY(o%ce,P(o/ce))}spreadSeas(O)
he.ocean_coastlines=N.slice(0)
for(var s=0;s<a.length;++s){var v=a[s]
tryMarkXY(v%ce,P(v/ce),b)}spreadSeas(b)}findCandidates()
function findBorderMinDist(){k.fill(0)
var e=N
var r=0
for(var a=0;a<e.length;++a){var t=e[a]
k[t]=1}while(e.length){r=M(r+1,255)
var i=[]
for(var n=0;n<e.length;++n){var o=e[n]
var s=de[1&o]
for(var v=0;v<s.length;++v){var l=o+s[v]
if(!k[l]&&!re[l]){k[l]=1
if(D[l]===A){he.border_min_dist=r
return}else i.push(l)}}}e=i}L(false)
he.border_min_dist=0}findBorderMinDist()
if("river"===Ee.early_out)return
var r=N
function filterCoastalRivers(){var v=[[],[],[]]
N.forEach(function(e){var r=de[1&e]
var a=0
var t=0
for(var i=0;i<r.length;++i){var n=e+r[i]
if(!re[n]){t|=1<<i;++a}}if(a>=4)return
L(a)
if(1===a){v[0].push(e)
return}t|=t<<6
var o=0
while(t&1<<o)o++
while(!(t&1<<o))o++
var s=0
while(t&1<<o){o++;++s}if(s!==a)return
if(!Se.range(2===a?4:2))v[a-1].push(e)})
var e=[]
N=[]
for(var r=0;r<v.length;++r){var a=v[r]
for(var t=0;t<a.length;++t){var i=a[t]
if(e[i])continue
N.push(i)
var n=de[1&i]
for(var o=0;o<n.length;++o)e[i+n[o]]=true}}}filterCoastalRivers()
function grow(){var f=10
var e=Te.weight_bend+Te.weight_sfork+Te.weight_afork
var u=[]
var c=[]
var _=Ee.river.tuning_h
for(var r=0;r<=f;++r){u[r]=[[]]
c[r]=0}for(var a=0;a<N.length;++a){var t=N[a]
var i=Se.random()
i=1+P(i*i*i*f)
fe[t]=i
u[i][0].push(t)}var d
function chooseNode(){var e=Infinity
for(var r=f;r>=0;--r)e=M(e,c[r])
for(var a=f;a>=0;--a){var t=u[a]
for(var i=0;i<_;++i){var n=e+i
var o=t[n]
if(o){var s=Se.range(o.length)
var v=o[s]
C(o,s)
if(!o.length){delete t[n]
var l=c[a]
L.equal(l,n)
while(!t[l]&&l<t.length)++l
if(l===t.length)l=Infinity
c[a]=l}d=a
return v}}}return-1}function validGrowth(e,r){var a=te[e]+U[r]
var t=de[1&r]
for(var i=0;i<t.length;++i){var n=r+t[i]
if(F[n]){var o=a-te[n]
if(V(o)>Ee.river.max_tslope)return false}}return true}while(true){var n=chooseNode()
if(-1===n)break
var o=de[1&n]
var s=[]
var v=F[n]
var l=v|v<<1|v>>1|v>>5|v<<5
for(var h=0;h<o.length;++h){if(1<<h&l)continue
var p=n+o[h]
if(!re[p]||F[p])continue
if(validGrowth(n,p))s.push([p,h])}if(!s.length)continue
var g=false
if(s.length>1){var m=1
var E=Se.range(e)
if(E>=Te.weight_bend){m=2
if(E-Te.weight_bend>=Te.weight_sfork)g=true}for(var T=0;T<m;++T){var S=s[T]
var A=T+Se.range(s.length-T)
s[T]=s[A]
s[A]=S}s.length=m}for(var R=0;R<s.length;++R){var O=s[R][0]
var I=s[R][1]
var y=te[n]+U[O]
var b=g?1===R?d-1:d:s.length>1?d-1:d
b=j(0,b)
fe[O]=b
te[O]=y
F[O]=1<<(I+3)%6
F[n]|=1<<I
c[b]=M(c[b],y)
var w=u[b]
var D=w[y]
if(!D)D=w[y]=[]
D.push(O)}}}grow()
function computeStrahler(){function fillStrahler(e,r){var a=F[e]
var t=[]
for(var i=0;i<6;++i)if(i!==r&&a&1<<i)t.push(i)
var n
if(!t.length)n=1
else{var o=de[1&e]
if(1===t.length)n=fillStrahler(e+o[t[0]],(t[0]+3)%6)
else{L.equal(t.length,2)
var s=fillStrahler(e+o[t[0]],(t[0]+3)%6)
var v=fillStrahler(e+o[t[1]],(t[1]+3)%6)
if(s===v)n=s+1
else n=j(s,v)}}return G[e]=n}for(var e=0;e<r.length;++e)fillStrahler(r[e],l[e])}computeStrahler()
function pruneRivers(){for(var e=0;e<ue;++e)if(1===G[e]){var r=F[e]
F[e]=0
G[e]=0
te[e]=0
var a=de[1&e]
for(var t=0;t<6;++t)if(r&1<<t){var i=e+a[t]
F[i]&=~(1<<(t+3)%6)}}}if(Te.prune){pruneRivers()
computeStrahler()}function buildUpHeight(){k.fill(0)
var e=[]
for(var r=0;r<ue;++r)if(F[r])e.push(r)
while(e.length){var a=[]
for(var t=0;t<e.length;++t){var i=e[t]
var n=de[1&i]
var o=te[i]+x[i]
for(var s=0;s<n.length;++s){var v=i+n[s]
if(!F[v]&&re[v]&&255!==k[v]){if(!k[v]){te[v]=0
a.push(v)}te[v]+=o
k[v]++}}}for(var l=0;l<a.length;++l){var f=a[l]
te[f]/=k[f]
k[f]=255}e=a}}buildUpHeight()}function generateOceanDistanceField(){k.fill(0)
var e=he.ocean_coastlines
var r=0
for(var a=0;a<e.length;++a){var t=e[a]
H[t]=r
k[t]=1}while(e.length){r=M(r+1,255)
var i=[]
for(var n=0;n<e.length;++n){var o=e[n]
var s=de[1&o]
for(var v=0;v<s.length;++v){var l=o+s[v]
if(!k[l]){k[l]=1
H[l]=r
if(D[l]!==A)i.push(l)}}}e=i}H[0]=M(H[1]+1,255)
H[ue-1]=M(H[ue-2]+1,255)}function generateOceanTrenches(e,r){initNoise(Ee.ocean_trenches)
hexPosToUnifPos(e,r)
var a=step(sample(),.8)
if(a){hexPosToUnifPos(.5*e,.5*r)
a=30*sample()}else a=10*sample()
return a}function generateShallows(e,r){initNoise(Ee.ocean_trenches)
hexPosToUnifPos(.8*e,20+.8*r)
return step(sample(),.65)}function generateOcean(){var e=he.border_min_dist
initNoise(Ee.ocean)
ne.fill(0)
for(var r=0;r<_e;++r)for(var a=0;a<ce;++a){var t=r*ce+a
if(D[t]===O||D[t]===A){hexPosToUnifPos(a,r)
var i=sample()
var n=J(H[t]/e,0,1)
n-=i*(.5-V(n-.5))
if(B[t]<W[t])te[t]=B[t]*B[t]
else{n=D[t]===A?1:n
te[t]=J(70*n+generateOceanTrenches(r,a),0,255)
if(n<.05)ne[t]=generateShallows(a,r)}}}}function generateOutputElevation(){var e=50*Ee.rslope.steps+80
var r=he.voxel_scale=1/e*Ee.output.land_range/2
var a=Ee.output.sea_range
for(var t=0;t<ue;++t){var i=te[t]
if(re[t])i=a+i*r
else if(ne[t])i=a
else i=a-1-i/255*a
te[t]=j(0,Y(i))}N.fill(0)}function fixupCoastalWaters(){var e=Ee.output.sea_range
for(var r=0;r<ue;++r)if(D[r]===O){var a=0
var t=Infinity
var i=de[1&r]
for(var n=0;n<i.length;++n){var o=r+i[n]
if(re[o]){++a
var s=te[o]-e
t=M(t,s)}}if(a&&B[r]>=W[r]&&!ne[r])te[r]=j(te[r],e-j(t,1))}var v=he.voxel_scale
for(var l=0;l<ue;++l)if(te[l]===e&&!F[l])te[l]=e+M(U[l],x[l])*v*.5}function blurExtremeSlopes(){var e=Te=Ee.blur,r=e.threshold,a=e.weight
var t=[]
for(var i=0;i<ue;++i){if(!re[i]||F[i])continue
var n=te[i]
var o=de[1&i]
var s=false
for(var v=0;v<o.length;++v){var l=i+o[v]
if(te[l]-n>r)s=true}if(s){var f=n
for(var u=0;u<o.length;++u){var c=i+o[u]
var _=te[c]
f+=j(Ee.output.sea_range,_)}t.push([i,$(a,n,Y(f/7))])}}for(var d=0;d<t.length;++d){var h=t[d]
te[h[0]]=h[1]}}function fillLakes(){var e=he.lakes
k.fill(0)
function fillLake(e){W[e]=0
var r=te[e]
k[e]=1
var l=[]
var f={}
var u=[]
var c=r
var a=[]
function addPos(e){u.push(e)
var r=de[1&e]
for(var a=0;a<r.length;++a){var t=e+r[a]
if(!k[t]){var i=te[t]
if(i<c)return false
var n=l[i]
if(!n)n=l[i]=[]
n.push(t)
k[t]=1
delete f[t]
var o=de[1&t]
for(var s=0;s<o.length;++s){var v=t+o[s]
if(!k[v]&&!f[v])f[v]=te[v]}}}return true}if(!addPos(e))return
e:do{var t=l[++c]
var i=u.length
if(t){for(var n=0;n<t.length;++n)if(!addPos(t[n])){u.length=i
break e}var o=true
for(var s in f)if(f[s]<=c){o=false
break}if(o){r=c
a.push([r,u.length])}}}while(true)
if(!a.length)return
var v=P(.5*a.length)
v=a[v]
u.length=v[1]
r=v[0]+1
for(var _=0;_<u.length;++_){var d=u[_]
N[d]=r
re[d]=0}for(var h in l){var p=Number(h)
if(p>r){var g=l[p]
for(var m=0;m<g.length;++m)N[g[m]]=r}}}for(var r=0;r<e.length;++r)fillLake(e[r])}function pruneFloodedRivers(){for(var e=0;e<ue;++e){if(!F[e])continue
var r=N[e]
if(r&&te[e]<r)F[e]=0}}function generateCoastDistanceField(){k.fill(0)
function findCoast(){var e=Ee.output.sea_range
var r=[]
for(var a=0;a<ue;++a)if(te[a]>=(N[a]||e)){var t=de[1&a]
var i=false
for(var n=0;n<t.length;++n){var o=a+t[n]
if(te[o]<(N[o]||e)){i=true
break}}if(i)r.push(a)}return r}var e=findCoast()
var r=0
for(var a=0;a<e.length;++a){var t=e[a]
ie[t]=r
k[t]=1}while(e.length){r=M(r+1,255)
var i=[]
for(var n=0;n<e.length;++n){var o=e[n]
var s=de[1&o]
for(var v=0;v<s.length;++v){var l=o+s[v]
if(!k[l]){k[l]=1
ie[l]=r
if(D[l]!==A)i.push(l)}}}e=i}ie[0]=M(ie[1]+1,255)
ie[ue-1]=M(ie[ue-2]+1,255)}function generateRiverMouthDistanceField(){k.fill(0)
B.fill(255)
W.fill(0)
var e=[]
var r=0
var a=0
for(var t=0;t<F.length;++t)if(F[t]&&re[t]){W[t]=G[t]
var i=de[1&t]
for(var n=0;n<i.length;++n){var o=t+i[n]
if(!re[o]){e.push(o)
W[o]=W[t]}}}for(var s=0;s<e.length;++s){var v=e[s]
B[v]=0
k[v]=1}while(e.length){r=M(r+1,255)
var l=[]
for(var f=0;f<e.length;++f){var u=e[f]
a=W[u]
var c=de[1&u]
for(var _=0;_<c.length;++_){var d=u+c[_]
if(!k[d]){k[d]=1
B[d]=r
W[d]=a
if(D[d]!==A)l.push(d)}}}e=l}B[0]=M(B[1]+1,255)
B[ue-1]=M(B[ue-2]+1,255)}function mountainify(){var e=Te=Ee.mountainify,x=e.cdist_ramp,a=e.peak_radius,t=e.peak_percent,r=e.peak_k
var i
i=poissonSample(a,r).filter(function(e){return re[e]})
function choosePeaks(){var e=findMaxPerRegion(i,te,a/2|0)
var r=j(1,z(t*e.length))
return(e=e.slice(0,r)).map(function(e){return e[1]})}var n=choosePeaks()
var o=Te,U=o.blend_radius,F=o.height_scale,G=o.weight_local,B=o.power_max,H=o.power_min,W=o.power_blend
function growMountain(e){var r=U*U
var a=z(U*Q)
var t=1-G
var i=0
var n=0
var o=e%ce
var s=(e-o)/ce
for(var v=-a;v<=a;++v)for(var l=-U;l<=U;++l){var f=v*v+l*l
if(f>=r)continue
var u=o+v
var c=s+l
if(u<0||u>=ce||c<0||c>=_e)continue
if(!re[c*ce+u])continue
var _=f/r
i+=te[c*ce+u]*_
n+=_}var d=te[e]-(i/=n)
if(d<10)return
var h=X/6
var p=0
var g=[[-.5,Z(.75),X/6],[-1,0,3*X/6],[-.5,-Z(.75),5*X/6],[.5,-Z(.75),7*X/6],[1,0,9*X/6],[.5,Z(.75),11*X/6]]
for(var m=0;m<g.length;++m){var E=Y(o+g[m][0]*U/2/Q)
var T=Y(s+g[m][1]*U/2)
E=J(E,0,ce-1)
T=J(T,0,_e-1)
var S=te[E+T*ce]
if(S>p){p=S
h=g[m][2]}}for(var A=-a;A<=a;++A)for(var R=-U;R<=U;++R){var O=o+A
var I=s+R
var y=(O-o)/Q
var b=I-s
if((1&o)!==(1&O))if(1&o)b-=.5
else b+=.5
var w=y*y+b*b
if(w>=r)continue
if(O<0||O>=ce||I<0||I>=_e)continue
var D=I*ce+O
if(!re[D])continue
var N=te[D]-i
var L=1-Z(w)/U
var M=q(y,b)
M=V(M=(M+h+X)%ee-X)/X
M=J((M-(1-W)/2)/W,0,1)
var P=$(M,H,B)
L=K(L,P)
var C=ie[D]
if(x)L*=J(C/x,0,1)
var k=(G*j(0,N)+t*d)*F*L
ae[D]=j(ae[D],k)}}function applyGrowth(){for(var e=0;e<ue;++e)te[e]+=ae[e]}ae.fill(0)
for(var s=0;s<n.length;++s)growMountain(n[s])
applyGrowth()}function pruneUphillRivers(){if(!(Te=Ee.river).mtify_prune)return
var u=Te.mtify_prune_grace
function clearRiver(e,r){var a=F[e]
var t=de[1&e]
for(var i=0;i<6;++i)if(i!==r&&a&1<<i)clearRiver(e+t[i],(i+3)%6)
G[e]=0
F[e]=0}function fillStrahler(e,r){var a=te[e]
var t=F[e]
var i=[]
var n=de[1&e]
for(var o=0;o<6;++o)if(o!==r&&t&1<<o){var s=e+n[o]
if(te[s]<a)if(te[s]<a-u){F[e]&=~(1<<o)
clearRiver(s,(o+3)%6)}else{te[s]=a
i.push(o)}else i.push(o)}var v
if(!i.length)v=1
else if(1===i.length)v=fillStrahler(e+n[i[0]],(i[0]+3)%6)
else{L.equal(i.length,2)
var l=fillStrahler(e+n[i[0]],(i[0]+3)%6)
var f=fillStrahler(e+n[i[1]],(i[1]+3)%6)
if(l===f)v=l+1
else v=j(l,f)}return G[e]=v}for(var e=0;e<ue;++e){var r=F[e]
if(!r)continue
var a=de[1&e]
var t=false
for(var i=0;i<a.length;++i)if(r&1<<i){var n=e+a[i]
if(!F[n]){L(!t)
t=true
fillStrahler(e,i)}}}}function generateHumidity(){var l=4096/Ee.output.land_range
function generateSlope(){for(var e=0;e<_e;++e)for(var r=0;r<ce;++r){var a=e*ce+r
if(re[a]){var t=te[a]
var i=0
var n=de[1&r]
for(var o=1;o<6;++o){if(3===o)continue
var s=a+n[o]
var v=te[s]
if(o<3)i+=t-v
else i+=v-t}oe[a]=J(128+i*l,0,255)}else oe[a]=128}}generateSlope()
if(Ee.humidity.show_relief)return
function blurSlope(){for(var e=0;e<_e;++e)for(var r=0;r<ce;++r){var a=e*ce+r
if(re[a]){var t=de[1&r]
var i=oe[a]
var n=1
for(var o=1;o<6;++o){var s=a+t[o]
if(re[s]){i+=oe[s]
n++}}oe[a]=Y(i/n)}}}blurSlope()
function addToNoise(){initNoise(Ee.humidity)
for(var e=0;e<_e;++e)for(var r=0;r<ce;++r){var a=e*ce+r
hexPosToUnifPos(r,e)
var t=sample()
var i=(oe[a]-128)/127
i=(i>=0?.25:-.25)+.75*i
var n=get("rainshadow")
i*=n
oe[a]=J(255*(t=(t+i+n)/(1+2*n)),0,255)}}addToNoise()}function determineClassification(){var e=Te=Ee.classif,i=e.cut1,n=e.cut2,o=e.blur_scale,_=e.blur_w
function blurHeight(){var e=2*_+1
var r=1/e
var a=Ee.output.sea_range
for(var t=0;t<_e;++t)for(var i=0;i<=ce-e;++i){var n=i+t*ce
var o=0
for(var s=0;s<e;++s)o+=j(a,te[n+s])
ve[n+_]=Y(o*r)}for(var v=0;v<_e-e;++v)for(var l=_;l<=ce-_;++l){var f=l+v*ce
var u=0
for(var c=0;c<e;++c)u+=ve[f+c*ce]
le[f+_*ce]=Y(u*r)}}function classifFromDiff(){for(var e=0;e<ue;++e){var r=void 0
if(!re[e])if(0===B[e]&&W[e]>1)r=d
else r=s
else{var a=te[e]
var t=(a-(le[e]||a))/o
r=t>n?c:t>i?u:f}se[e]=r}}blurHeight()
classifFromDiff()}function continentGen(e){var r=Date.now()
if("number"===typeof e)(Ee=w).seed=e
else{Ee=e
L.equal(typeof Ee.seed,"number")}var a=Ee.hex_tex_size
var t=Ee.output.debug
if(a!==pe)setupWorkBuffers(a)
fe=[]
he={}
Se=n(Ee.seed)
D.fill(0)
generateCoastlines()
fillSeas()
generateLakes()
generateTerrainSlope()
generateRiverSlope()
growRivers()
pruneFloodedRivers()
generateOceanDistanceField()
generateRiverMouthDistanceField()
generateOcean()
generateOutputElevation()
fixupCoastalWaters()
blurExtremeSlopes()
fillLakes()
pruneFloodedRivers()
generateCoastDistanceField()
generateRiverMouthDistanceField()
mountainify()
pruneUphillRivers()
if("river"!==Ee.early_out)generateHumidity()
determineClassification()
var i={sea_level:Ee.output.sea_range,max_elevation:Ee.output.sea_range+Ee.output.land_range}
if(t){i.land=re
i.fill=D
i.tslope=x
i.rslope=U
i.river=F
i.elev=te
i.water_level=N
i.rstrahler=G
i.humidity=oe
i.classif=se
i.coast_distance=ie
i.ocean_distance=H
i.debug_priority=fe
i.blur_temp1=ve
i.blur_temp2=le}else{i.elev=te.slice(0)
i.humidity=oe.slice(0)
i.river=F.slice(0)
i.water_level=N.slice(0)
i.classif=se.slice(0)}i.time=Date.now()-r
return i}},{"../glov/common/rand_alea.js":57,"../glov/common/util.js":58,"../glov/common/vmath.js":60,"./proc_gen_constants.js":29,assert:void 0,"simplex-noise":void 0}],10:[function(e,r,a){"use strict"
a.encodeRLEZeroes=encodeRLEZeroes
a.encodeRLEU2=encodeRLEU2
a.encodeRLEU3=encodeRLEU3
a.encodeRLEDict=encodeRLEDict
a.encodeDeltaPakInt=encodeDeltaPakInt
a.continentSerialize=continentSerialize
a.continentDeserialize=continentDeserialize
var v=e("assert")
var t=e("../glov/common/packet.js"),l=t.packetCreate,f=t.packetFromBuffer,u=t.PACKET_DEBUG
var c=2
var i=1
var n=2
var o=3
var s=4
var _=5
var d=["elev","water_level","humidity","river","classif"]
var h={elev:i,water_level:n,humidity:i,river:o,classif:_}
var p={elev:i,water_level:n,humidity:i,river:o,classif:s}
var g={elev:Uint16Array,water_level:Uint16Array,humidity:Uint8Array,river:Uint8Array,classif:Uint8Array}
function encodeRLEZeroes(e,r){var a=r.length
var t=0
for(var i=0;i<a;++i){var n=r[i]
if(n){if(t){e.writeInt(t)
t=0}e.writeInt(n)}else{if(!t)e.writeInt(n)
t++}}if(t)e.writeInt(t)}function decodeRLEZeroes(e,r){var a=0
while(a<e.length){var t=r.readInt()
var i=1
if(!t)i=r.readInt()
v(a+i<=e.length)
for(var n=0;n<i;++n)e[a++]=t}}function encodeRLEU2(r,e){var a=e[0]
var t=e.length
var i=0
function writecv(){var e=a<<6|i
r.writeU8(e)}for(var n=1;n<t;++n)if(e[n]!==a||63===i){writecv()
i=0
a=e[n]}else i++
writecv()}function encodeRLEU3(r,e){var a=e[0]
var t=e.length
var i=0
function writecv(){var e=a<<5|i
r.writeU8(e)}for(var n=1;n<t;++n)if(e[n]!==a||31===i){writecv()
i=0
a=e[n]}else i++
writecv()}function decodeRLEU2(e,r){var a=0
while(a<e.length){var t=r.readU8()
var i=1+(63&t)
t>>>=6
v(a+i<=e.length)
for(var n=0;n<i;++n)e[a++]=t}}function decodeRLEU3(e,r){var a=0
while(a<e.length){var t=r.readU8()
var i=1+(31&t)
t>>>=5
v(a+i<=e.length)
for(var n=0;n<i;++n)e[a++]=t}}function encodeRLEDict(r,e){var a=e[0]
var t=e.length
var i=0
var n=[]
var o=0
function writecv(){r.writeInt(i)
var e=n[a]
if(void 0!==e)r.writeInt(e)
else{e=n[a]=o++
r.writeInt(e)
r.writeInt(a)}}for(var s=1;s<t;++s)if(e[s]!==a){writecv()
i=0
a=e[s]}else i++
writecv()}function decodeRLEDict(e,r){var a=0
var t=[]
while(a<e.length){var i=r.readInt()+1
var n=r.readInt()
var o=t[n]
if(void 0===o)o=t[n]=r.readInt()
v(a+i<=e.length)
for(var s=0;s<i;++s)e[a++]=o}}function encodeDeltaPakInt(e,r){var a=124
var t=r.length
for(var i=0;i<t;++i){var n=r[i]-a+124
e.writeInt(n)
a=r[i]}}function decodeDeltaPakInt(e,r){var a=e.length
var t=124
for(var i=0;i<a;++i){t+=r.readInt()-124
e[i]=t}}function encodeToPacket(e,r,a){switch(r){case i:encodeDeltaPakInt(e,a)
break
case n:encodeRLEDict(e,a)
break
case o:encodeRLEZeroes(e,a)
break
case s:encodeRLEU2(e,a)
break
case _:encodeRLEU3(e,a)
break
default:v()}}function decodeFromPacket(e,r,a){switch(r){case i:decodeDeltaPakInt(e,a)
break
case n:decodeRLEDict(e,a)
break
case o:decodeRLEZeroes(e,a)
break
case s:decodeRLEU2(e,a)
break
case _:decodeRLEU3(e,a)
break
default:v()}}var m=227
function continentSerialize(r,e){var a=r.sea_level,t=r.max_elevation
var i=r.elev.length
var n=l(e?u:0,4*i)
n.writeFlags()
n.writeInt(c)
n.writeInt(a)
n.writeInt(t)
n.writeInt(i)
d.forEach(function(e){v(r[e]instanceof g[e])
n.writeInt(m)
n.writeInt(h[e])
encodeToPacket(n,h[e],r[e])})
n.makeReadable()
var o=n.getBufferLen()
var s=n.getBuffer().slice(0,o)
n.pool()
return s}function continentDeserialize(e){var i={}
var n=f(e,e.length,false)
n.readFlags()
var o=n.readInt()
i.sea_level=n.readInt()
i.max_elevation=n.readInt()
var s=n.readInt()
v(s<=262144)
d.forEach(function(e){var r=n.readInt()
v.equal(r,m)
var a=g[e]
var t=i[e]=new a(s)
if(o>1)decodeFromPacket(t,n.readInt(),n)
else decodeFromPacket(t,p[e],n)})
return i}},{"../glov/common/packet.js":56,assert:void 0}],11:[function(e,r,a){"use strict"
a.blocksNever=blocksNever
a.blocksAlways=blocksAlways
a.surfaceCheckSetParams=surfaceCheckSetParams
a.maxSurfaceClear=maxSurfaceClear
a.tryDeleteProp=tryDeleteProp
a.tryPlaceProp=tryPlaceProp
a.DetailGenBase=DetailGenBase
a.DETAIL_Z0=a.DETAIL_ZOFFS=a.step_pos=a.bounds_z=void 0
var o=new Array(32)
a.bounds_z=o
var s=new Int32Array(3)
a.step_pos=s
var t=16
var i=-(a.DETAIL_ZOFFS=t)
a.DETAIL_Z0=i
var A=e("assert")
var n=e("../common/globals.js"),R=n.CHUNK_SIZE,l=n.CS2
var f=Math.abs,u=Math.ceil,v=Math.floor,O=Math.max,I=Math.min
var c=e("./proc_gen_details.js").i32Alloc
var _=e("./tiles.js"),y=_.TILE_PROP_BASE,d=_.TILE_PROP_MAX
function blocksNever(){return false}function blocksAlways(){return true}var h
var p
var g
function surfaceCheckSetParams(e,r,a){h=r
p=e
g=a}function maxSurfaceClear(e,r,a){var t=e[r]
var i=t.h
if(f(g-i)>3*R)return i
var n=1
if(t.hydro_pen>-4)n=-u(t.hydro_pen+5)
if(i<=h+10){var o=0
var s=e[r-1]
if(s)o=O(o,f(i-s.h))
if(s=e[r+1])o=O(o,f(i-s.h))
if(s=a>0&&p[a-1][r])o=O(o,f(i-s.h))
if(s=a<R-1&&p[a+1][r])o=O(o,f(i-s.h))
var v=O(o,1)+2
if(i<=h+v)n=I(n,-v)}return i+n}var m=new Int32Array(3)
var b
function findProp(e,r,a,t,i){A(r>=y)
if(r>d)return null
if(!e.props)return null
var n=r-y
for(var o=n;o>=0;--o){m[2]=i-o
if(m[2]<0)continue
for(var s=n-o;s>=0;--s){m[1]=t-s
if(m[1]<0)continue
var v=n-o-s
m[0]=a-v
if(m[0]<0)continue
b=(m[2]*R+m[1])*R+m[0]
var l=e.props[b]
if(l&&l.size[0]>v&&l.size[1]>s&&l.size[2]>o)return l}}return null}function findDeletableProp(e,r,a,t,i){var n=findProp(e,r,a,t,i)
if(!n)return null
if(m[0]+n.size[0]>R||m[1]+n.size[1]>R||m[2]+n.size[2]>R)return null
return n}function deleteProp(e,r,a){var t=a.size
delete e.props[r]
for(var i=0;i<t[2];++i)for(var n=0;n<t[1];++n){var o=r+i*l+n*R
for(var s=0;s<t[0];++s,++o){var v=e.data[o]
A.equal(v,y+s+n+i)
e.data[o]=0}}}function tryDeleteProp(e,r,a,t,i){var n=findDeletableProp(e,r,a,t,i)
if(!n)return false
deleteProp(e,b,n)
return true}function tryPlaceProp(e,r,a){if(r[0]<0||r[1]<0||r[0]+a.size[0]>R||r[1]+a.size[1]>R)A(false,"Prop must not cross XY chunk boundaries")
A(r[2]>=-R&&r[2]<R)
var t=e.data
A(t)
var i=O(0,r[2])
var n=I(R,r[2]+a.size[2])
var o=O(0,r[1])
var s=I(R,r[1]+a.size[1])
var v=O(0,r[0])
var l=I(R,r[0]+a.size[0])
var f=[]
for(var u=i;u<n;++u)for(var c=o;c<s;++c)for(var _=v;_<l;++_){var d=t[(u*R+c)*R+_]
if(d>=y){var h=findDeletableProp(e,d,_,c,u)
if(!h)return false
f.push([b,h])}}for(var p=0;p<f.length;++p){var g=f[p]
deleteProp(e,g[0],g[1])}if(r[2]>=0&&r[2]<R){if(!e.props)e.props={}
var m=(r[2]*R+r[1])*R+r[0]
e.props[m]=a}for(var E=i;E<n;++E)for(var T=o;T<s;++T)for(var S=v;S<l;++S)t[(E*R+T)*R+S]=y+(E-r[2])+(T-r[1])+(S-r[0])
return true}var E={bounds_buf:1,bounds_len:1,f32buf:1,bounds_idx:1,last_bits:1,last_use_time:1,cleanup:1,origin_idx:1}
function preserveArrays(e){if(!e||"string"===typeof e)return e
else if(e.length){var r=[]
for(var a=0;a<e.length;++a)r.push(preserveArrays(e[a]))
return r}else if("object"===typeof e){var t={}
for(var i in e)t[i]=preserveArrays(e[i])
return t}return e}function DetailGenBase(e,r,a){}DetailGenBase.prototype.type="DetailGenBase"
DetailGenBase.prototype.priority=100
DetailGenBase.prototype.toJSON=function(){var e={}
var r=this
for(var a in r){var t=r[a]
if(E[a]||"function"===typeof t);else if(t&&t.length>64)e[a]="(length="+t.length+")"
else e[a]=preserveArrays(t)}var i=this.bounds_idx,n=this.bounds_buf,o=this.bounds_len
if(o&&!e.bounds){var s=[]
for(var v=0;v<o;++v){var l=i+6*v
s.push("["+n[l]+","+n[l+2]+","+n[l+4]+"]-["+n[l+1]+","+n[l+3]+","+n[l+5]+"]")}e.bounds=s.join(", ")}if(this.getDebugLines)e.lines=this.getDebugLines()
return e}
DetailGenBase.prototype.cleanup=null
DetailGenBase.prototype.dispose=function(){}
DetailGenBase.prototype.blockable=false
DetailGenBase.prototype.blocked_check=false
DetailGenBase.prototype.blocked=false
DetailGenBase.prototype.blocksOther=blocksNever
DetailGenBase.prototype.boundsAlloc=function(e){var r=c(6*e),a=r[0],t=r[1]
this.bounds_buf=a
this.bounds_idx=t
this.bounds_len=e}
DetailGenBase.prototype.boundsPush=function(e,r,a,t,i,n,o){this.bounds_buf[e++]=v(r)
this.bounds_buf[e++]=v(i+1)
this.bounds_buf[e++]=v(a)
this.bounds_buf[e++]=v(n+1)
this.bounds_buf[e++]=v(t)
this.bounds_buf[e++]=v(o+1)
return e}
var T=new Array(32)
var S=new Array(32)
var w
var D
var N
var L
var M
DetailGenBase.prototype.stepInit=function(e){var r=this.last_bits
M=this.bounds_buf
L=this.bounds_idx
for(var a=D=0;a<this.bounds_len;++a)if(r&1<<a)T[D++]=a
w=e}
DetailGenBase.prototype.stepY=function(e){var r=w[1]+e
for(var a=N=0;a<D;++a){var t=T[a]
var i=L+6*t+2
if(r>=M[i++]&&r<M[i])S[N++]=t}if(!N)return false
s[1]=r
return true}
DetailGenBase.prototype.stepX=function(e){var r=w[0]+e
var a=0
for(var t=0;t<N;++t){var i=S[t]
var n=L+6*i
if(r>=M[n++]&&r<M[n])o[a++]=i}s[0]=r
return a}},{"../common/globals.js":41,"./proc_gen_details.js":30,"./tiles.js":37,assert:void 0}],12:[function(e,r,a){"use strict"
a.renderedDetailGen=renderedDetailGen
var w=e("assert")
var t=e("./detail_gen_base.js"),n=t.DetailGenBase,i=t.blocksNever,o=t.DETAIL_ZOFFS,D=t.tryDeleteProp
var s=e("../common/globals.js"),N=s.CHUNK_SIZE,L=s.CS2
var M=Math.max,P=Math.min
var C=e("./proc_gen.js").renderDetail
var v=e("./tiles.js"),k=v.TILE_AIR,x=v.TILE_PROP_BASE
var l=e("../glov/common/util.js").inherits
var f=e("../glov/common/vmath.js").vec3
function RenderedDetailGen(e){n.call(this)
for(var r in e)switch(r){case"priority":this.priority+=e.priority
break
default:w(!this[r])
this[r]=e[r]}this.rendered=false
this.vd=null
this.boundsAlloc(1)
var a=this.pos_world,t=this.size
this.boundsPush(this.bounds_idx,a[0],a[1],a[2],a[0]+t[0]-1,a[1]+t[1]-1,a[2]+t[2]-1)
if(this.detail_type.unblockable)this.blockable=false
else{this.blocked_origin=f(this.origin[0],this.origin[1],this.origin[2]-o)
var i=this.detail_type.exclusion_calced
if(!i){i=this.detail_type.exclusion
i=this.detail_type.exclusion_calced=f(i[0],i[1],i[2]+o)}this.blocked_size=i
this.blocked_r=-1}}l(RenderedDetailGen,n)
RenderedDetailGen.prototype.type="RenderedDetailGen"
RenderedDetailGen.prototype.priority=150
RenderedDetailGen.prototype.blockable=true
RenderedDetailGen.prototype.blocksOther=i
var u={rendered:1,origin:1,pos_world:1,size:1,detail_type:1,seed:1,hexome:1,owner_mcid:1,vd:1}
RenderedDetailGen.prototype.toJSON=function(){var e={}
for(var r in this)if(!u[r])e[r]=this[r]
e.seed=this.detail_type.name
if(this.vd)e.vd=this.vd.data.length+" bytes"
return n.prototype.toJSON.call(e)}
RenderedDetailGen.prototype.dispose=function(){if(this.rendered){this.vd=null
this.rendered=false}}
RenderedDetailGen.prototype.cleanup=function(){if(this.rendered){this.vd=null
this.rendered=false}}
RenderedDetailGen.prototype.genLocal=function(e){var r=e.vd
if(!this.rendered)C(this)
else w(this.vd)
var a=this.pos_world,t=this.size
var i=r.pos_world
var n=i[2]
var o=n+N
var s=M(n,a[2])
var v=P(o,a[2]+t[2])
if(s>=v)return
var l=M(i[0],a[0])
var f=P(i[0]+N,a[0]+t[0])
if(l>=f)return
var u=M(i[1],a[1])
var c=P(i[1]+N,a[1]+t[1])
if(u>=c)return
var _=this.vd.data
var d=r.data
var h=l-i[0]
for(var p=s;p<v;++p){var g=p-i[2]
var m=g*L
var E=(p-a[2])*this.vd.stride2
for(var T=u;T<c;++T){var S=T-i[1]
var A=m+S*N+h
var R=E+(T-a[1])*this.vd.stride1+l-a[0]
for(var O=l;O<f;++O){var I=_[R]
var y=false
if(I){if(I===k){I=0
r.full=false}if(!d){r.alloc(false)
d=r.data}var b=d[A]
if(b>=x)if(!D(r,b,O-i[0],S,g))y=true
if(!y){d[A]=I
if(r.liquid)r.liquid[A]=0}}if(this.vd.liquid&&!y)if(I=this.vd.liquid[R]){w(_[R])
if(I===k)I=0
if(!r.liquid)r.alloc(true)
r.liquid[A]=I}A++
R++}}}}
function renderedDetailGen(e){return new RenderedDetailGen(e)}},{"../common/globals.js":41,"../glov/common/util.js":58,"../glov/common/vmath.js":60,"./detail_gen_base.js":11,"./proc_gen.js":27,"./tiles.js":37,assert:void 0}],13:[function(e,r,a){"use strict"
a.providerForestedRuin=providerForestedRuin
a.RUIN_SIMPLE=void 0
var t=e("./detail_gen_base.js"),n=t.DetailGenBase,N=t.tryDeleteProp,i=t.DETAIL_Z0
var o=e("../common/globals.js"),L=o.CHUNK_SIZE,M=o.CS2,P=o.TILE_PROP_BASE
var C=Math.floor,k=Math.max,x=Math.min,s=Math.round
var v=e("../glov/client/rand_fast.js"),l=v.randFastCreate,U=v.randSimpleSpatial
var f=e("./tiles.js"),F=f.TILE_BRICK_STONE,G=f.TILE_STONE
var u=e("../glov/common/util.js").inherits
var c=e("../glov/common/vmath.js"),_=c.ivec3,d=c.vec3,B=c.v3sub
var h=l()
var p=30
var g=16
function DetailGenRuin(e,r,a){n.call(this)
h.reseed(e)
var t=this.size_x=8+h.range(p-8)
var i=this.size_y=8+h.range(p-8)
this.origin=r.slice(0)
this.boundsAlloc(1)
this.boundsPush(this.bounds_idx,this.origin[0],this.origin[1],this.origin[2],this.origin[0]+t-1,this.origin[1]+i-1,this.origin[2]+g-1)}u(DetailGenRuin,n)
DetailGenRuin.prototype.type="DetailGenRuin"
DetailGenRuin.prototype.priority=90
DetailGenRuin.prototype.blockable=false
var H=_()
DetailGenRuin.prototype.genLocal=function(e){var r=e.vd,a=e.vs
var t=r.data
var i=r.liquid
var n=this.size_x,o=this.size_y,s=this.origin,v=this.seed
var l=a.map
var f=r.pos_world
B(H,f,s)
var u=k(-H[0],0)
var c=x(n-H[0],L)
var _=k(-H[1],0)
var d=x(o-H[1],L)
for(var h=_;h<d;++h){var p=f[1]+h
var g=l[h]
var m=p===s[1]||p===s[1]+o-1
for(var E=u;E<c;++E){var T=f[0]+E
var S=g[E].h
if(!(m||T===s[0]||T===s[0]+n-1))continue
var A=C(3*U(v,T,p,0))
var R=k(S-f[2],0)
var O=x(S+A-f[2],L)
var I=h*L+E+R*M
if(O>R)if(!t){r.alloc()
t=r.data}for(var y=R;y<O;++y,I+=M){var b=f[2]+y-S
var w=t[I]
if(w>=P)if(!N(r,w,E,h,y))continue
var D=G
if(0===b)D=F
t[I]=D
if(i)i[I]=0}}}}
function detailGenRuin(e,r,a){return new DetailGenRuin(e,r,a)}var m={exclusion:null,bounds:[d(0,0,i),d(p,p,g)],factory:detailGenRuin}
a.RUIN_SIMPLE=m
function providerForestedRuin(e){var r=s(e.pos_world[0])
var a=s(e.pos_world[1])
return[{pos:d(r-p/2,a-p/2,0),type:m}]}},{"../common/globals.js":41,"../glov/client/rand_fast.js":52,"../glov/common/util.js":58,"../glov/common/vmath.js":60,"./detail_gen_base.js":11,"./tiles.js":37}],14:[function(e,r,a){"use strict"
a.ALL_FLOWERS=a.WILD_SUGAR_CANE=a.WILD_CARROT=a.WILD_WHEAT=a.WILD_PUMPKIN=a.WILD_CORN=a.WILD_TOMATO=a.DEBUG_FLOWERS=a.FLOWERS=a.CORAL_MUSHROOMS=a.LUMINESCENT_MUSHROOMS=a.BROWN_MUSHROOMS=a.RED_MUSHROOMS=a.ORANGE_FLOWERS=a.RED_FLOWERS=a.PURPLE_FLOWERS=a.YELLOW_FLOWERS=a.BLUE_FLOWERS=void 0
var t=e("../common/materials_common").Mat
function generateSimpleWeighted(e,r){var a=[]
for(var t=0;t<e.length;t++)for(var i=0;i<r[t];i++)a.push(e[t])
return a}var i=[4,6,25,26,27]
var n={name_key:"FLOWERS_BLUE",key:i,weighted:generateSimpleWeighted(i,[3,3,1,1,1])}
a.BLUE_FLOWERS=n
var o={name_key:"FLOWERS_YELLOW",key:[1,7]}
a.YELLOW_FLOWERS=o
var s=[2,3,19,20,21,22,23,24]
var v={name_key:"FLOWERS_PURPLE",key:s,weighted:generateSimpleWeighted(s,[6,6,1,1,1,1,1,1])}
a.PURPLE_FLOWERS=v
var l={name_key:"FLOWERS_RED",key:[5,8]}
a.RED_FLOWERS=l
var f={name_key:"FLOWERS_ORANGE",key:[13,14,15,16,17,18]}
a.ORANGE_FLOWERS=f
var u={name_key:"MUSHROOMS_RED",key:[28,29],attr1:t.RED_MUSHROOM}
a.RED_MUSHROOMS=u
var c={name_key:"MUSHROOMS_BROWN",key:[30,31,32,33],attr1:t.BROWN_MUSHROOM}
a.BROWN_MUSHROOMS=c
var _={name_key:"MUSHROOMS_LUMINESCENT",key:[34,35,36],attr1:t.LUMINESCENT_MUSHROOM}
a.LUMINESCENT_MUSHROOMS=_
var d={name_key:"MUSHROOMS_CORAL",key:[37,38],attr1:t.CORAL_MUSHROOM}
a.CORAL_MUSHROOMS=d
var h=[n,o,v,l,f,u,c,_]
a.FLOWERS=h
var p=[d]
a.DEBUG_FLOWERS=p
var g=0
a.WILD_TOMATO=g
var m=1
a.WILD_CORN=m
var E=2
a.WILD_PUMPKIN=E
var T=3
a.WILD_WHEAT=T
var S=4
a.WILD_CARROT=S
var A=5
a.WILD_SUGAR_CANE=A
function getPlantArrayFromTypes(e){var r=[]
for(var a=0;a<e.length;a++){var t=e.weighted||e[a].key
for(var i=0;i<t.length;i++)r.push(t[i])}return r}var R=getPlantArrayFromTypes([n,o,v,l,f])
a.ALL_FLOWERS=R},{"../common/materials_common":43}],15:[function(e,r,c){"use strict"
c.lightCalcReset=lightCalcReset
c.lightCalcBakeRules=lightCalcBakeRules
c.lightCalc=lightCalc
c.torch_table=c.sun_table=c.clear_version=c.LIGHT_TORCH=c.LIGHT_SUN=c.LIGHT_FADE_HORIZ=void 0
var K=e("assert")
var a=e("../common/globals.js"),Z=a.CS2,t=a.CS3,o=a.ID_FACTOR,i=a.ID2
var X=Math.max,f=Math.min,u=Math.round,_=Math.sqrt
var U=e("./tiles.js").TILE_NON_OPAQUE
var n=e("../common/voxel_data_common.js").ZMAP_UNKNOWN
var d=_(2)
var s=1+o+i
var F=16
var G=23-(c.LIGHT_FADE_HORIZ=F)
var Q=1
c.LIGHT_SUN=Q
var P=2
c.LIGHT_TORCH=P
var J=255
var h=3
var $=0
c.clear_version=$
function emitScaled(e){return J-u((1-e)*J/F)*F}var v
var ee
function lightCalcReset(e,r){v=e
ee=r}var C
function lightCalcBakeRules(e){C=e}function lightAlloc(e,r){K(r)
K(e)
if(!e[r])e[r]=new Uint8Array(t)
return e[r]}var re=new Array(64)
var B=new Array(64)
var l={}
var H=new Array(64)
var W=new Array(64)
var V=[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]
var q=[[[-1,-1,0],[-1,1,0],[-1,0,-1],[-1,0,1]],[[1,-1,0],[1,1,0],[1,0,-1],[1,0,1]],[[-1,-1,0],[1,-1,0],[0,-1,-1],[0,-1,1]],[[-1,1,0],[1,1,0],[0,1,-1],[0,1,1]],[[-1,0,-1],[1,0,-1],[0,-1,-1],[0,1,-1]],[[-1,0,1],[1,0,1],[0,-1,1],[0,1,1]]]
function isBorder(e){var r=12303&e
var a=49392&e
var t=200448&e
return!r||!a||!t||8207===r||33008===a||134912===t}function spreadLight(e,r){for(var a=255;a>0;--a){var t=e[a]
if(!t)continue
var i=a-F
var n=a-G
for(var o=0;o<t.length;++o){var s=t[o]
var v=s>>12
var l=4095&s
if(H[v][l]>a)continue
var f=15&l
var u=(240&l)>>4
var c=l>>8
for(var _=0;_<V.length;++_){var d=V[_]
var h=v
var p=f
var g=u
var m=c
if(d[0]){if(16&(p+=d[0])){h+=p>>4
p&=15}}else if(d[1]){if(16&(g+=d[1])){h+=g<0?-4:4
g&=15}}else if(16&(m+=d[2])){h+=m<0?-16:16
m&=15}var E=256*m+16*g+p
var T=B[h][E]
if(T&&T<U)continue
var S=H[h]
if(!S)S=H[h]=lightAlloc(re[h],r)
var A=S[E]
if(i>=A){var R=void 0
if(i===A){var O=q[_]
for(var I=R=0;I<O.length;++I){var y=O[I]
var b=v
var w=f
if(y[0])if(16&(w+=y[0])){b+=w>>4
w&=15}var D=u
if(y[1])if(16&(D+=y[1])){b+=D<0?-4:4
D&=15}var N=c
if(y[2])if(16&(N+=y[2])){b+=N<0?-16:16
N&=15}var L=256*N+16*D+w
var M=H[b]
if(M&&M[L]===a){R=n
break}}}else R=i
if(R)if((S[E]=R)>F){var P=4096*h+E
if(!isBorder(P)){var C=e[R]
if(!C)C=e[R]=[]
C.push(P)}else{var k=W[h]
var x=k[R]
if(!x)x=k[R]=[]
x.push(E)}}}}}}}function sunAttenuationTable(){var e=1/16
var r=[]
for(var a=0;a<16;++a)for(var t=0;t<16;++t){var i=X(0,J-(t*G+a*F))
if(!i||r[i])continue
var n=i
var o=2/(e*(t*(d-1)+a)+1)-1
o=f(X(o,0),1)
i=u(255*o)
r[n]=i}r[0]=0
return r}var p=sunAttenuationTable()
c.sun_table=p
function torchAttenuationTable(e){var r=new Uint8Array(256)
for(var a=0;a<16;++a)for(var t=0;t<16;++t){var i=X(0,J-(t*G+a*F))
if(!i||r[i])continue
var n=i
var o=t*(d-1)+a
var s=o?1/(_(e)*o):1
var v=.05
var l=(s*s-v)/(1-v)
s=l>0?_(l):0
s=f(X(s,0),1)
i=u(255*s)
r[n]=i}r[0]=0
return r}var g=torchAttenuationTable(.075)
c.torch_table=g
var ae=function(){var e=[]
for(var r=-1;r<=1;++r)for(var a=-1;a<=1;++a)for(var t=-1;t<=1;++t){var i=t+1+4*(a+1)+16*(r+1)
var n=[]
if(t>=0)n.push(0)
if(t<=0)n.push(1)
if(a>=0)n.push(2)
if(a<=0)n.push(3)
if(r>=0)n.push(4)
if(r<=0)n.push(5)
e[i]=n}return e}()
var te=[-1,1,-4,4,-16,16]
var I=[[0,1,0,16,0,16],[15,16,0,16,0,16],[0,16,0,1,0,16],[0,16,15,16,0,16],[0,16,0,16,0,1],[0,16,0,16,15,16]]
var ie=new Int16Array(Z)
ie.fill(n)
function reinitEmitters(e,r,a,t,i,n,o,s){var v=I[e]
var l=v[0]
var f=v[1]
var u=v[2]
var c=v[3]
var _=v[4]
var d=v[5]
for(var h=_;h<d;++h){var p=!t&&!h||2===t&&15===h
for(var g=u;g<c;++g){var m=h*Z+16*g+l
var E=p||!a&&!g||2===a&&15===g
for(var T=l;T<f;++T,++m){var S=n[m]
if(S>G)if(E||!r&&!T||2===r&&15===T){var A=s[S]
if(!A)A=s[S]=[]
if(-1===A.indexOf(m))A.push(m)}else{var R=i+m
var O=o[S]
if(!O)O=o[S]=[]
if(-1===O.indexOf(R))O.push(R)}}}}}function lightSunInit(e,r,a,t,i,n){var o=i.light_sun
var s=4096*t
if(i.light_need_init&Q){if(o)o.fill(0)
i.sun_clear_version=$
i.light_need_init&=~Q
i.light_sent=false
var v=n[J]
if(!v)v=n[J]=[]
var l=[]
var f=ee[i.vsid]
f=f&&f.data||ie
var u=i.worldZ()
var c=u+15
var _=0
var d
for(var h=0;h<16;++h){var p=16*h+3840
var g=!h&&!r||15===h&&2===r
var m=h&&h<15
for(var E=0;E<16;++E,++_){var T=f[_]
var S=g||!E&&!e||15===E&&2===e
var A=m&&E&&E<15
K(void 0!==T)
if(T>=c)continue
if(A){var R=f[_-16]
var O=f[_-1]
var I=f[_+1]
var y=f[_+16]
d=X(R,O,I,y)-1}else d=Infinity
if(!o)o=lightAlloc(i,"light_sun")
var b=X(u-1,T)
var w=E+p
for(var D=c;D>b;w-=Z,--D){o[w]=J
if(D>d)continue
if(!(S||!a&&w<Z||2===a&&w>=3840)){var N=s+w
v.push(N)}else l.push(w)}}}if(l.length)i.emitters_sun[J]=l
for(var L=0;L<i.sun_emit_version.length;++L)i.sun_emit_version[L]=$
return}if(!o){for(var M=0;M<i.sun_emit_version.length;++M)i.sun_emit_version[M]=$
return}var P=i.emitters_sun
var C=false
for(var k in P){C=true
break}if(C){var x={}
for(var U in P){var F=P[U]
var G=n[U=Number(U)]
if(!G)G=n[U]=[]
var B=[]
for(var H=0;H<F.length;++H){var W=s+F[H]
if(isBorder(W))B.push(F[H])
else G.push(W)}if(B.length)x[U]=B}P=i.emitters_sun=x}var V=ae[t]
for(var q=0;q<V.length;++q){var z=V[q]
var j=t+te[z]
var Y=re[j]
K(Y)
if(Y.light_need_init&Q||Y.sun_clear_version>i.sun_emit_version[z]){reinitEmitters(z,e,r,a,s,o,n,P)
i.sun_emit_version[z]=$
i.light_sent=false}}}function lightTorchInit(e,r,a,t,i,n){var o=i.light_torch
var s=i.baked_props
var v=4096*t
if(i.light_need_init&P){if(o)o.fill(0)
i.torch_clear_version=$
i.light_need_init&=~P
i.light_sent=false
if(s)for(var l in s){var f=s[l].key
if(!f)continue
if(!C[f])K(0,"lightTorchInit got prop with unknown baked key "+f)
var u=C[f].emit
if(u){var c=emitScaled(u)
l=Number(l)
if(!o)o=lightAlloc(i,"light_torch")
o[l]=c
var _=v+l
if(!isBorder(_)){var d=n[c]
if(!d)d=n[c]=[]
d.push(_)}else{var h=i.emitters_torch[c]
if(!h)h=i.emitters_torch[c]=[]
h.push(l)}}}for(var p=0;p<i.torch_emit_version.length;++p)i.torch_emit_version[p]=$
return}if(!o){for(var g=0;g<i.torch_emit_version.length;++g)i.torch_emit_version[g]=$
return}var m=i.emitters_torch
var E=false
for(var T in m){E=true
break}if(E){var S={}
for(var A in m){var R=m[A]
var O=n[A=Number(A)]
if(!O)O=n[A]=[]
var I=[]
for(var y=0;y<R.length;++y){var b=v+R[y]
if(isBorder(b))I.push(R[y])
else O.push(b)}if(I.length)S[A]=I}m=i.emitters_torch=S}var w=ae[t]
for(var D=0;D<w.length;++D){var N=w[D]
var L=t+te[N]
var M=re[L]
K(M)
if(M.light_need_init&P||M.torch_clear_version>i.torch_emit_version[N]){reinitEmitters(N,e,r,a,v,o,n,m)
i.torch_emit_version[N]=$
i.light_sent=false}}}function getNeighbors(e){for(var r=0;r<h;++r)for(var a=0;a<h;++a){var t=4*(4*r+a)
for(var i=0;i<h;++i,++t){var n=v[e+(r*o+a)*o+i-s]
K(n)
re[t]=n
B[t]=n.data||l}}}function lightCalc(e){if(e.full)return
c.clear_version=$+=1
getNeighbors(e.chunk_id)
var r=[]
for(var a=0;a<h;++a)for(var t=0;t<h;++t){var i=4*(4*a+t)
for(var n=0;n<h;++n,++i){var o=re[i]
lightSunInit(n,t,a,i,o,r)
H[i]=o.light_sun
W[i]=o.emitters_sun}}if(r.length)spreadLight(r,"light_sun")
r=[]
for(var s=0;s<h;++s)for(var v=0;v<h;++v){var l=4*(4*s+v)
for(var f=0;f<h;++f,++l){var u=re[l]
lightTorchInit(f,v,s,l,u,r)
H[l]=u.light_torch
W[l]=u.emitters_torch}}if(r.length)spreadLight(r,"light_torch")}},{"../common/globals.js":41,"../common/voxel_data_common.js":45,"./tiles.js":37,assert:void 0}],16:[function(e,r,a){"use strict"
a.ptLineDistSq=ptLineDistSq
a.v2distSqBV=v2distSqBV
a.ptLineDistSqBBV=ptLineDistSqBBV
var s=e("assert")
var t=e("../glov/common/vmath.js"),i=t.vec2,o=t.v2addScale,v=t.v2distSq,l=t.v2lengthSq,f=t.v2set,u=t.v2sub
var c=i()
function ptLineDistSq(e,r,a,t){u(c,a,r)
var i=l(c)
s(i>0)
var n=((t[0]-r[0])*c[0]+(t[1]-r[1])*c[1])/i
if(n<0)f(e,0,v(t,r))
else if(n>1)f(e,1,v(t,a))
else{o(c,r,c,n)
f(e,n,v(t,c))}return e}function v2distSqBV(e,r,a){return(e[r+0]-a[0])*(e[r+0]-a[0])+(e[r+1]-a[1])*(e[r+1]-a[1])}function ptLineDistSqBBV(e,r,a,t,i){c[0]=r[t]-r[a]
c[1]=r[t+1]-r[a+1]
var n=l(c)
s(n>0)
var o=((i[0]-r[a])*c[0]+(i[1]-r[a+1])*c[1])/n
if(o<0)f(e,0,v2distSqBV(r,a,i))
else if(o>1)f(e,1,v2distSqBV(r,t,i))
else{c[0]=r[a]+c[0]*o
c[1]=r[a+1]+c[1]*o
f(e,o,v(i,c))}return e}},{"../glov/common/vmath.js":60,assert:void 0}],17:[function(e,r,a){"use strict"
a.lineLineDist=lineLineDist
a.pointLineDist=pointLineDist
a.intersect=intersect
a.ptLineDist3DSq=ptLineDist3DSq
a.v3distSqBV=v3distSqBV
a.ptLineDist3DSqBBV=ptLineDist3DSqBBV
a.ptLineNearestBBV=ptLineNearestBBV
var s=e("assert")
var v=Math.sqrt
var t=e("../glov/common/vmath.js"),c=t.vec3,l=t.v2set,f=t.v3addScale,u=t.v3copy,_=t.v3cross,d=t.v3determinant,h=t.v3distSq,p=t.v3lengthSq,g=t.v3sub,m=t.v3div,E=t.v4set,T=t.unit_vec
var S=1e-7
var A=c()
var R=c()
var O=c()
var I=c()
var y=c()
function lineLineDist(e,r,a,t,i){_(A,a,i)
var n=p(A)
if(n<S)return 0
g(R,t,r)
var o=d(R,i,A)
var s=d(R,a,A)/n
f(O,r,a,o/n)
f(I,t,i,s)
g(y,I,O)
u(e,O)
return v(p(y))}var i=c()
function pointLineDist(e,r,a){return v(p(_(A,r,g(i,e,a))))}function intersect(e,r,a){var t
var i
var n
var o
var s=c()
n=c(a[0],a[1],a[2])
o=c(a[0]+1,a[1]+1,a[2]+1)
t=(n[0]-e[0])/r[0]
i=(o[0]-e[0])/r[0]
m(s,T,r)
if(t>i)if(s[0]>=0){t=(n[0]-e[0])*s[0]
i=(o[0]-e[0])*s[0]}else{t=(o[0]-e[0])*s[0]
i=(n[0]-e[0])*s[0]}var v=(n[1]-e[1])/r[1]
var l=(o[1]-e[1])/r[1]
if(v>l)if(s[1]>=0){v=(n[1]-e[1])*s[1]
l=(o[1]-e[1])*s[1]}else{v=(o[1]-e[1])*s[1]
l=(n[1]-e[1])*s[1]}if(t>l||v>i)return false
if(v>t)t=v
if(l<i)i=l
var f=(n[2]-e[2])/r[2]
var u=(o[2]-e[2])/r[2]
if(f>u)if(s[2]>=0){f=(n[2]-e[2])*s[2]
u=(o[2]-e[2])*s[2]}else{f=(o[2]-e[2])*s[2]
u=(n[2]-e[2])*s[2]}if(t>u||f>i)return false
if(f>t)t=f
if(u<i)i=u
return i}var b=c()
function ptLineDist3DSq(e,r,a,t){g(b,a,r)
var i=p(b)
s(i>0)
var n=((t[0]-r[0])*b[0]+(t[1]-r[1])*b[1]+(t[2]-r[2])*b[2])/i
if(n<0)l(e,0,h(t,r))
else if(n>1)l(e,1,h(t,a))
else{f(b,r,b,n)
l(e,n,h(t,b))}return e}function v3distSqBV(e,r,a){return(e[r+0]-a[0])*(e[r+0]-a[0])+(e[r+1]-a[1])*(e[r+1]-a[1])+(e[r+2]-a[2])*(e[r+2]-a[2])}function ptLineDist3DSqBBV(e,r,a,t,i){b[0]=r[t+0]-r[a+0]
b[1]=r[t+1]-r[a+1]
b[2]=r[t+2]-r[a+2]
var n=p(b)
s(n>0)
var o=((i[0]-r[a+0])*b[0]+(i[1]-r[a+1])*b[1]+(i[2]-r[a+2])*b[2])/n
if(o<0)l(e,0,v3distSqBV(r,a,i))
else if(o>1)l(e,1,v3distSqBV(r,t,i))
else{b[0]=r[a+0]+b[0]*o
b[1]=r[a+1]+b[1]*o
b[2]=r[a+2]+b[2]*o
l(e,o,h(i,b))}return e}function ptLineNearestBBV(e,r,a,t,i){b[0]=r[t+0]-r[a+0]
b[1]=r[t+1]-r[a+1]
b[2]=r[t+2]-r[a+2]
var n=p(b)
s(n>0)
var o=((i[0]-r[a+0])*b[0]+(i[1]-r[a+1])*b[1]+(i[2]-r[a+2])*b[2])/n
if(o<0)E(e,r[a],r[a+1],r[a+2],0)
else if(o>1)E(e,r[t],r[t+1],r[t+2],1)
else{e[0]=r[a+0]+b[0]*o
e[1]=r[a+1]+b[1]*o
e[2]=r[a+2]+b[2]*o
e[3]=o}return e}},{"../glov/common/vmath.js":60,assert:void 0}],18:[function(e,r,a){"use strict"
a.lodGen=lodGen
a.VERT_SIZE=void 0
var A=12
a.VERT_SIZE=A
var R=e("assert")
var O=e("../glov/common/util").lerp
var t=e("../glov/common/vmath")
var I=t.v2set
var y=t.v3cross
var b=t.v3iAdd
var w=t.v3iNormalize
var i=t.vec2
var n=t.vec3
var o=e("../common/globals")
var D=o.CHUNK_SIZE
var N=o.ID_FACTOR
var s=e("./proc_gen_biomes")
var L=s.RFLOW_UNDERWATER
var M=s.getVSElevAndTile
var P=e("./proc_gen_hydro").hydroChunkInitRange
var v=e("./tiles")
var C=v.liquid_colors
var k=v.tile_colors
var x=Math.ceil,U=Math.floor,F=Math.min
var G=64
var B=(G+1)*(G+1)
var H=16
var W=G+3
var V=new Float32Array(W*W)
var q=new Array(W*W)
var z=new Uint8Array(W*W*3)
var j=n()
var Y=n()
var K=i()
var Z=[n(D,0,0),n(0,D,0),n(-D,0,0),n(0,-D,0)]
function lodGen(e,r){var a=new Uint8Array(B*A)
var t=new Uint32Array(x(B/32))
var i=e[1]*G*N+e[0]*G
var n=e[0]*G*D
var o=e[1]*G*D
I(K,n,o)
P(K,G*D)
var s=0
var v=Infinity
for(var l=-1;l<=G+1;++l){K[1]=o+l*D+D/2
for(var f=-1;f<=G+1;++f){K[0]=n+f*D+D/2
var u=M(i+f+l*N,K)
if(u.tint){z[3*s]=255*u.tint[0]
z[3*s+1]=255*u.tint[1]
z[3*s+2]=255*u.tint[2]}q[s]=u
var c=U(u.elev)
v=F(v,c)
V[s++]=c}}R.equal(s,V.length)
v-=H
function calcNormal(e){var r=V[e]
Z[0][2]=V[e+1]-r
Z[1][2]=V[e+W]-r
Z[2][2]=V[e-1]-r
Z[3][2]=V[e-W]-r
y(j,Z[0],Z[1])
b(j,y(Y,Z[1],Z[2]))
b(j,y(Y,Z[2],Z[3]))
b(j,y(Y,Z[3],Z[0]))
w(j)}var _=s=0
for(var d=0;d<=G;++d){var h=(d+1)*W+1
for(var p=0;p<=G;++p){a[s++]=p
a[s++]=d
var g=V[h]-v
a[s++]=255&g
a[s++]=g>>8
var m=q[h]
if(m.tint){a[s++]=z[3*h]
a[s++]=z[3*h+1]
a[s++]=z[3*h+2]}else{var E=k[m.tile]||k.def
a[s++]=E[0]
a[s++]=E[1]
a[s++]=E[2]}var T=C[m.liquid]
if(T){var S=F(m.rflow_amt/4,1)
a[s-3]=O(S,a[s-3],T[0])
a[s-2]=O(S,a[s-2],T[1])
a[s-1]=O(S,a[s-1],T[2])}a[s++]=255
calcNormal(h)
a[s++]=127.5*j[0]+127.5
a[s++]=127.5*j[1]+127.5
a[s++]=127.5*j[2]+127.5
a[s++]=0;++h
if(m.rflow_amt===L)t[_>>5]|=1<<(31&_);++_}}R.equal(s,a.length)
return{pos:e,min_elev:v,generation:r,verts:a,is_water:t}}},{"../common/globals":41,"../glov/common/util":58,"../glov/common/vmath":60,"./proc_gen_biomes":28,"./proc_gen_hydro":31,"./tiles":37,assert:void 0}],19:[function(e,r,a){"use strict"
a.startup=startup
var l=e("./continent").continentHandleData
var f=e("./lods_shared").lodGen
var u=e("./proc_gen").handleHexomeChoices
var c=e("./proc_gen_hydro").setLODMode
var t=e("./task_sched_worker").addHandler
function handleLodGen(e,r){c()
var a=e.pos,t=e.generation,i=e.hexome_choices,n=e.continents
if(i)u(i)
if(n)l(n)
var o=f(a,t)
var s=o.verts,v=o.is_water
r(o,[s.buffer,v.buffer])}function startup(){t("lod_gen",handleLodGen)}},{"./continent":8,"./lods_shared":18,"./proc_gen":27,"./proc_gen_hydro":31,"./task_sched_worker":36}],20:[function(e,r,a){"use strict"
a.STAMINA_BY_MATERIAL=a.STAMINA_BY_MATERIAL_CLASS=a.MATERIAL_UNLIMITED_SPECIAL=a.MATERIAL_INGOT_SCALE=a.MATERIAL2_STAMINA_FACTOR=a.MATERIAL2_DURABILITY_FACTOR=a.MATERIAL_DURABILITY_FACTOR=a.MATERIAL_TOOL_DIG_RATE=a.MATERIAL_TO_MINE_MATERIAL=a.METAL_TIERS=a.MATERIAL_TO_MINE_STONE_TIER=a.MATERIAL_MAX_STONE_TIER=a.MATERIAL_DIG_RATE=a.IS_ALLOY=a.ALLOYS=a.MATERIAL_NAME=a.MATERIAL_CODE_NAME=a.INV_MATERIAL_NAME=a.MATERIAL_DURABILITY_COST=a.INV_MATERIAL_TIER=a.MATERIAL_TIER=a.MATERIAL_CLASS=a.CRAFT_CLASS_TO_MATERIAL_CLASS=a.CRAFT_CLASS_DESC=a.CRAFT_CLASS_NAME=a.MATERIAL_CLASS_SOUND=a.MATERIAL_SOUND=a.MATERIAL_CLASS_NAME=a.LAST_LOCALIZED_MATERIAL_CLASS=a.MaterialClass=void 0
var t,i,n,o,s,v,l,f,u,c,_,d,h
var p=e("assert")
var g=e("../common/materials_common")
var m=g.CraftClass
var E=g.Mat
var T;(function(e){e[e["NONE"]=0]="NONE"
e[e["WOOD"]=1]="WOOD"
e[e["STONE"]=2]="STONE"
e[e["DIRT"]=3]="DIRT"
e[e["METAL"]=4]="METAL"
e[e["INGREDIENT"]=5]="INGREDIENT"
e[e["COLOR"]=6]="COLOR"})((a.MaterialClass=T)||(a.MaterialClass=T={}))
var S=T.METAL
a.LAST_LOCALIZED_MATERIAL_CLASS=S
var A=[]
a.MATERIAL_CLASS_NAME=A
var R=((t={})[E.COAL]="_coal",t)
a.MATERIAL_SOUND=R
var O=((i={})[T.NONE]="_dirt",i[T.WOOD]="_wood",i[T.STONE]="_stone",i[T.DIRT]="_dirt",i[T.METAL]="_metal",i)
a.MATERIAL_CLASS_SOUND=O
var I=[]
a.CRAFT_CLASS_NAME=I
var y=[]
a.CRAFT_CLASS_DESC=y
var b={};(a.CRAFT_CLASS_TO_MATERIAL_CLASS=b)[m.WOOD_RAW]=T.WOOD
b[m.STONE_RAW]=T.STONE
var w=((n={})[E.NONE]={tier:0,dur:0,mc:T.NONE},n[E.ANY]={tier:1,dur:0,mc:T.NONE},n[E.LEAF]={tier:1,dur:1,mc:T.WOOD},n[E.LIGHT_WOOD]={tier:2,dur:2,mc:T.WOOD},n[E.WOOD]={tier:3,dur:3,mc:T.WOOD},n[E.RED_WOOD]={tier:4,dur:3,mc:T.WOOD},n[E.DARK_WOOD]={tier:5,dur:4,mc:T.WOOD},n[E.FLINT]={tier:1,dur:1,mc:T.STONE},n[E.ROCK]={tier:2,dur:1,mc:T.STONE},n[E.STONE]={tier:3,dur:1,mc:T.STONE},n[E.CORAL]={tier:4,dur:1,mc:T.STONE},n[E.FANCY_STONE]={tier:5,dur:1,mc:T.STONE},n[E.UNUSED_STONE]={tier:6,dur:1,mc:T.STONE},n[E.SAND]={tier:1,dur:1,mc:T.DIRT},n[E.DIRT]={tier:2,dur:1,mc:T.DIRT},n[E.MUTTAL]={tier:1,dur:1,mc:T.METAL},n[E.COAL]={tier:2,dur:5,mc:T.METAL},n[E.COPPER]={tier:3,dur:10,mc:T.METAL},n[E.TIN]={tier:4,dur:5,mc:T.METAL},n[E.BRONZE]={tier:5,dur:15,mc:T.METAL},n[E.IRON]={tier:6,dur:10,mc:T.METAL},n[E.SILVER]={tier:7,dur:5,mc:T.METAL},n[E.EMBERYLLIUM]={tier:8,dur:10,mc:T.METAL},n[E.GOLD]={tier:9,dur:5,mc:T.METAL},n[E.BRIGHTSTEEL]={tier:10,dur:15,mc:T.METAL},n[E.COBALT]={tier:11,dur:10,mc:T.METAL},n[E.MYTHRIL]={tier:12,dur:10,mc:T.METAL},n[E.AETHERSTONE]={tier:13,dur:15,mc:T.METAL},n[E.AETHERSTEEL]={tier:14,dur:15,mc:T.METAL},n[E.REGULAR]={tier:15,dur:1,mc:T.METAL},n[E.FAST]={tier:16,dur:1,mc:T.METAL},n[E.SUPER]={tier:17,dur:1,mc:T.METAL},n[E.ANY_INGREDIENT]={tier:1,dur:1,mc:T.INGREDIENT},n[E.TOMATO]={tier:2,dur:1,mc:T.INGREDIENT},n[E.PUMPKIN]={tier:3,dur:1,mc:T.INGREDIENT},n[E.CARROT]={tier:4,dur:1,mc:T.INGREDIENT},n[E.RED_BERRY]={tier:5,dur:1,mc:T.INGREDIENT},n[E.BLUE_BERRY]={tier:6,dur:1,mc:T.INGREDIENT},n[E.YELLOW_BERRY]={tier:7,dur:1,mc:T.INGREDIENT},n[E.LABEL]={tier:8,dur:1,mc:T.INGREDIENT},n[E.HOT]={tier:9,dur:1,mc:T.INGREDIENT},n[E.PUNGENT]={tier:10,dur:1,mc:T.INGREDIENT},n[E.SAVORY]={tier:11,dur:1,mc:T.INGREDIENT},n[E.BREAD]={tier:12,dur:1,mc:T.INGREDIENT},n[E.BROWN_MUSHROOM]={tier:13,dur:1,mc:T.INGREDIENT},n[E.LUMINESCENT_MUSHROOM]={tier:14,dur:1,mc:T.INGREDIENT},n[E.RED_MUSHROOM]={tier:15,dur:1,mc:T.INGREDIENT},n[E.CORN]={tier:16,dur:1,mc:T.INGREDIENT},n[E.CORAL_MUSHROOM]={tier:17,dur:1,mc:T.INGREDIENT},n[E.STARFISH]={tier:18,dur:1,mc:T.INGREDIENT},n[E.ANEMONE]={tier:19,dur:1,mc:T.INGREDIENT},n[E.RED]={tier:1,dur:1,mc:T.COLOR},n[E.ORANGE]={tier:2,dur:1,mc:T.COLOR},n[E.YELLOW]={tier:3,dur:1,mc:T.COLOR},n[E.GREEN]={tier:4,dur:1,mc:T.COLOR},n[E.BLUE]={tier:5,dur:1,mc:T.COLOR},n[E.PURPLE]={tier:6,dur:1,mc:T.COLOR},n)
var D={}
a.MATERIAL_CLASS=D
var N={}
a.MATERIAL_TIER=N
var L={}
a.INV_MATERIAL_TIER=L
var M={}
a.MATERIAL_DURABILITY_COST=M
var P={}
a.INV_MATERIAL_NAME=P
var C={}
a.MATERIAL_CODE_NAME=C
var k={}
a.MATERIAL_NAME=k;(function(){var e=0
var r=T[e]
var a={}
while("string"===typeof r){L[e]={}
a[e]={}
r=T[++e]}for(var t in w){var i=Number(t)
var n=w[i],o=n.mc,s=n.tier,v=n.dur
if(a[D[i]=o][s])p(false,"Duplicate Material tier for same MaterialClass")
a[o][s]=true
N[i]=s
L[o][s]=i
M[i]=v
P[E[i]]=i
C[i]=E[i]}})()
var x=((l={})[E.COPPER]=((o={})[E.TIN]=E.BRONZE,o),l[E.IRON]=((s={})[E.GOLD]=E.BRIGHTSTEEL,s),l[E.MYTHRIL]=((v={})[E.AETHERSTONE]=E.AETHERSTEEL,v),l)
a.ALLOYS=x
var U=((f={})[E.BRONZE]=true,f[E.BRIGHTSTEEL]=true,f[E.AETHERSTEEL]=true,f[E.MUTTAL]=true,f)
a.IS_ALLOY=U
var F=((u={})[E.LEAF]=.25,u[E.LIGHT_WOOD]=1.8,u[E.WOOD]=2,u[E.RED_WOOD]=2,u[E.DARK_WOOD]=2.5,u)
var G={}
a.MATERIAL_DIG_RATE=G;(function(){for(var e in F){var r=e
G[r]=1/F[r]}})()
var B=((c={})[E.LIGHT_WOOD]={st:0,mt:0,dr:0,td:0,td2:.9,ts2:.7,it:0},c[E.WOOD]={st:0,mt:0,dr:0,td:0,td2:1,ts2:1,it:0},c[E.RED_WOOD]={st:0,mt:0,dr:0,td:0,td2:1.1,ts2:1,it:0},c[E.DARK_WOOD]={st:0,mt:0,dr:0,td:0,td2:1.2,ts2:1.1,it:0},c[E.MUTTAL]={st:0,mt:0,dr:.25,td:.1,td2:.1,ts2:1,it:1},c[E.FLINT]={st:0,mt:E.COAL,dr:.25,td:.5,td2:0,ts2:1,it:0},c[E.STONE]={st:0,mt:E.COPPER,dr:.4,td:.3,td2:0,ts2:1,it:0},c[E.COPPER]={st:1,mt:E.TIN,dr:.7,td:.6,td2:1,ts2:1.2,it:1},c[E.TIN]={st:1,mt:E.TIN,dr:.33,td:.1,td2:1,ts2:1,it:1},c[E.BRONZE]={st:2,mt:E.IRON,dr:1,td:1.4,td2:1.3,ts2:1.2,it:1},c[E.IRON]={st:3,mt:E.EMBERYLLIUM,dr:1.25,td:1,td2:1.32,ts2:1.2,it:2},c[E.SILVER]={st:4,mt:E.EMBERYLLIUM,dr:.5,td:.2,td2:1,ts2:1.1,it:2},c[E.EMBERYLLIUM]={st:4,mt:E.GOLD,dr:1.5,td:1.7,td2:1.34,ts2:1.2,it:4},c[E.GOLD]={st:2,mt:E.GOLD,dr:.5,td:.2,td2:1,ts2:1.1,it:4},c[E.BRIGHTSTEEL]={st:5,mt:E.COBALT,dr:2,td:2.2,td2:1.36,ts2:1.1,it:4},c[E.COBALT]={st:6,mt:E.MYTHRIL,dr:3,td:1.9,td2:1,ts2:1.1,it:8},c[E.MYTHRIL]={st:7,mt:E.AETHERSTEEL,dr:4,td:2,td2:1.2,ts2:1,it:16},c[E.AETHERSTONE]={st:4,mt:E.AETHERSTONE,dr:.5,td:.2,td2:1,ts2:1.2,it:16},c[E.AETHERSTEEL]={st:8,mt:E.AETHERSTEEL,dr:5,td:2.5,td2:1.4,ts2:1,it:16},c[E.REGULAR]={st:8,mt:E.AETHERSTEEL,dr:1,td:1,td2:0,ts2:1,it:0},c[E.FAST]={st:8,mt:E.AETHERSTEEL,dr:4,td:1,td2:0,ts2:1,it:0},c[E.SUPER]={st:8,mt:E.AETHERSTEEL,dr:10,td:1,td2:0,ts2:1,it:0},c)
var H={}
a.MATERIAL_MAX_STONE_TIER=H
var W={}
a.MATERIAL_TO_MINE_STONE_TIER=W
var V={}
a.METAL_TIERS=V
var q={}
a.MATERIAL_TO_MINE_MATERIAL=q
var z=[]
a.MATERIAL_TOOL_DIG_RATE=z
var j={}
a.MATERIAL_DURABILITY_FACTOR=j
var Y={}
a.MATERIAL2_DURABILITY_FACTOR=Y
var K={}
a.MATERIAL2_STAMINA_FACTOR=K
var Z={}
a.MATERIAL_INGOT_SCALE=Z
var X=((_={})[E.REGULAR]=true,_[E.FAST]=true,_[E.SUPER]=true,_)
a.MATERIAL_UNLIMITED_SPECIAL=X;(function(){for(var e in B){var r=Number(e)
var a=B[r],t=a.st,i=a.mt,n=a.dr,o=a.td,s=a.td2,v=a.ts2,l=a.it
H[r]=t
if(!W[t]||W[t]>r)W[t]=r
if(i){var f=N[i]
V[r]=f
for(var u=1;u<=f;++u){var c=L[T.METAL][u]
if(c&&(!q[c]||f<V[q[c]]))q[c]=r}}else V[r]=-1
z[r]=n
j[r]=o
Y[r]=s
K[r]=v
Z[r]=l}})()
var Q=((d={})[T.WOOD]=100,d[T.STONE]=20,d[T.DIRT]=40,d[T.METAL]=120,d[T.INGREDIENT]=20,d[T.COLOR]=20,d)
a.STAMINA_BY_MATERIAL_CLASS=Q
var J=((h={})[E.LEAF]=20,h)
a.STAMINA_BY_MATERIAL=J},{"../common/materials_common":43,assert:void 0}],21:[function(e,r,a){"use strict"
a.mazeGen=mazeGen
a.M_DOOR=a.M_TORCH=a.M_INTERIOR=a.M_TREASURE=a.M_LEAF=a.M_WALL=a.M_OPEN=void 0
var w=e("assert")
var h=Math.abs,D=Math.max,N=Math.min,L=Math.round
var t=e("../glov/common/rand_alea.js").randCreate
var i=e("../glov/common/util.js"),M=i.clamp,p=i.ridx,g=i.sign
var n=0
a.M_OPEN=n
var P=1
a.M_WALL=P
var C=2
a.M_LEAF=C
var m=3
a.M_TREASURE=m
var k=4
a.M_INTERIOR=k
var x=5
a.M_TORCH=x
var U=6
a.M_DOOR=U
var F=t(1)
function mazeGen(e){var R=e.w,r=e.h,S=e.min_dim,O=e.door_w,A=e.r1,a=e.treasure,t=e.treasure_size,i=e.seed
var I=new Uint8Array(R*r)
var n=0
F.reseed(i)
function paintDepth(e,r,a){var t=r<<4
var i=a.rooms,n=a.x,o=a.y
w(i)
for(var s=0;s<O;++s)for(var v=0;v<O;++v){var l=n+s+(o+v)*R
if(I[l]===U)I[l]|=t}t=e<<4
var f=[]
for(var u=0;u<i.length;++u){var c=i[u]
if(void 0!==c.depth)continue
c.depth=e
var _=c.x0,d=c.y0,h=c.x1,p=c.y1,g=c.doors
for(var m=0;m<g.length;++m)f.push(g[m])
for(var E=_;E<=h;++E)for(var T=d;T<=p;++T)I[E+T*R]|=t}for(var S=0;S<f.length;++S){var A=M(e+F.range(3)-1,0,15)
paintDepth(A,D(A,e),f[S])}}function line(e,r,a,t,i){w(i)
var n=g(a-e)
var o=g(t-r)
w(h(n)+h(o)<=1)
I[e+r*R]=i
while(e!==a||r!==t)I[(e+=n)+(r+=o)*R]=i}function drawRect(e,r,a,t,i){for(var n=e;n<=a;++n)for(var o=r;o<=t;++o)I[n+o*R]=i}var y=[]
function doorAt(e,r,a){n=D(n,e)
for(var t=0;t<e;++t)if(r>=y[t].x&&r<y[t].x+O&&a>=y[t].y&&a<y[t].y+O)return true
return false}var b=[]
function divide(e,r,a,t,i){var n=t-r
var o=i-a
var s=.25+A
do{if(D(n,o)<2*S+1)break
if(N(n,o)<=S)break
var v=(2*F.range(2)-1)*s
s++
if(n>o){var l=r+L((n-O)/2+v)
if(l<r+S||l>t-S)break
if(doorAt(e,l,a-1)||doorAt(e,l,i+1))continue
var f=a+F.range(o-O)
if(f>a)line(l,a,l,f-1,P)
if(f<=i-O)line(l,f+O,l,i,P)
y[e]={x:l,y:f}
line(l,f,l,f+O-1,U)
divide(e+1,r,a,l-1,i)
divide(e+1,l+1,a,t,i)}else{var u=a+L((o-1)/2+v)
if(u<a+S||u>i-S)break
if(doorAt(e,r-1,u)||doorAt(e,t+1,u))continue
var c=r+F.range(n-O)
if(c>r)line(r,u,c-1,u,P)
if(c<=t-O)line(c+O,u,t,u,P)
y[e]={x:c,y:u}
line(c,u,c+O-1,u,U)
divide(e+1,r,a,t,u-1)
divide(e+1,r,u+1,t,i)}return}while(true)
var _={x0:r,x1:t,y0:a,y1:i,doors:[]}
var d=0
for(var h=0;h<e;++h){var p=y[h]
if((p.x===r-1||p.x===t+1)&&p.y>=a&&p.y<=i||(p.y===a-1||p.y===i+1)&&p.x>=r&&p.x<=t){d++
_.doors.push(p)
p.rooms=p.rooms||[]
p.rooms.push(_)}}if(1===d){drawRect(r,a,t,i,C)
b.push(_)}else{var g=null
var m=0
for(var E=r;E<=t;++E)for(var T=a;T<=i;++T)if(E===r||E===t||T===a||T===i)if(E===r&&doorAt(e,E-1,T)||E===t&&doorAt(e,E+1,T)||T===a&&doorAt(e,E,T-1)||T===i&&doorAt(e,E,T+1));else{++m
if(!F.range(m))g=E+T*R}else I[E+T*R]=k
if(g)I[g]=x}}line(0,0,R-1,0,P)
line(R-1,0,R-1,r-1,P)
line(R-1,r-1,0,r-1,P)
line(0,r-1,0,0,P)
divide(0,1,1,R-2,r-2)
var o=L(a*R*r)
while(o&&b.length){var s=F.range(b.length)
var v=b[s]
p(b,s)
var l=v.x1-v.x0+1
var f=v.y1-v.y0+1
if(l<t+2||f<t+2)continue;--o
var u=1+F.range(l-t-2)
var c=1+F.range(f-t-2)
var _=v.x0+u
var d=v.y0+c
drawRect(_,d,_+t-1,d+t-1,m)}if(y[0])paintDepth(7,7,y[0])
I.max_depth=n
return I}},{"../glov/common/rand_alea.js":57,"../glov/common/util.js":58,assert:void 0}],22:[function(e,r,a){"use strict"
a.meshCalcReset=meshCalcReset
a.meshCalcBakeRules=meshCalcBakeRules
a.meshCalcMaxPropsPerChunk=meshCalcMaxPropsPerChunk
a.meshCalcSetBakingMeshGetter=meshCalcSetBakingMeshGetter
a.meshCalc=meshCalc
a.BYTES_PER_VERT=void 0
var ht=e("assert")
var t=e("../common/globals.js"),i=t.CHUNK_SIZE,pt=t.ID_FACTOR,n=t.ID2
var o=e("./light_calc.js"),s=o.lightCalcReset,gt=o.lightCalc,v=o.lightCalcBakeRules,mt=o.sun_table,Et=o.torch_table
ht(mt&&Et)
var _=Math.abs,l=Math.ceil,Tt=Math.max,St=Math.min,m=Math.sqrt
var At=e("./tiles.js")
var f=e("../glov/common/vmath.js"),E=f.vec3,d=f.v3addScale,T=f.v3dot,Rt=f.v3lerp,S=f.v3iNormalize,h=f.v3scale,Ot=f.v3set,It=f.v4copy,yt=f.v4set
var bt=At.TILE_INTANGIBLE,wt=At.TILE_PROP_BASE,Dt=At.TILE_PROP_MAX,Nt=At.TILE_TINT_ORE
var Lt
var Mt
var Pt=1+pt+n
var Ct=16
var kt=4*(a.BYTES_PER_VERT=Ct)
var xt
function meshCalcReset(e,r){s(xt=e,r)}var Ut={}
var u={}
function meshCalcBakeRules(e){var r=e.show_unreleased,a=e.rules
At.setUnreleasedTiles(r)
for(var t in a){Ut[t]=a[t]
u[t]=false}v(Ut)}var Ft
function meshCalcMaxPropsPerChunk(e){Ft=e}var Gt=null
var Bt=0
var c=0
function geomBufAddQuad(e){var r=Bt+e*kt
if(r>c){var a=Tt(r,l(1.5*c),1024)
var t=new Uint8Array(a)
for(var i=0;i<Bt;++i)t[i]=Gt[i]
Gt=t
c=a}return Gt}var Ht=null
var Wt=0
var p=0
function geomBufAlphaAddQuad(e){var r=Wt+e*kt
if(r>p){var a=Tt(r,l(1.5*p),1024)
var t=new Uint8Array(a)
for(var i=0;i<Wt;++i)t[i]=Ht[i]
Ht=t
p=a}return Ht}var A=Int8Array
var R=[new A([0,0,1]),new A([0,0,-1]),new A([0,1,0]),new A([0,-1,0]),new A([1,0,0]),new A([-1,0,0])]
var Vt=new A([1,-1,1,-1,1,-1])
var qt=[new A([2,0,1]),new A([2,0,1]),new A([1,0,2]),new A([1,0,2]),new A([0,1,2]),new A([0,1,2])]
var zt=new A([0,1,1,0,0,0,1,8,1,0,1,16,1,1,1,24,1,1,0,1,1,0,0,9,0,0,0,17,0,1,0,25,1,1,1,2,1,1,0,10,0,1,0,18,0,1,1,26,0,0,1,3,0,0,0,11,1,0,0,19,1,0,1,27,1,0,1,4,1,0,0,12,1,1,0,20,1,1,1,28,0,1,1,5,0,1,0,13,0,0,0,21,0,0,1,29])
var jt=new A([0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1])
var Yt=function(){var e=function(){var e=0
var r=[]
for(var a=0;a<6;++a){var t=new A(3)
t[0]=zt[e+4]-zt[e++]
t[1]=zt[e+4]-zt[e++]
t[2]=zt[e+4]-zt[e++]
e++
var i=new A(3)
i[0]=zt[e+4]-zt[e++]
i[1]=zt[e+4]-zt[e++]
i[2]=zt[e+4]-zt[e++]
e+=9
r.push([t,i])}return r}()
var r=new A([-1,-1,1,-1,1,1,-1,1])
var a=new A(3)
function deltaToIdx(e){ht(e[0]>=-1&&e[0]<=1)
ht(e[1]>=-1&&e[1]<=1)
ht(e[2]>=-1&&e[2]<=1)
return e[0]+1+3*(e[1]+1)+9*(e[2]+1)}function deltaToFace(e){ht(_(e[0])+_(e[1])+_(e[2])===1)
if(e[2])return e[2]>0?0:1
if(e[1])return e[1]>0?2:3
return e[0]>0?4:5}var t=new A(216)
var i=0
for(var n=0;n<6;++n){var o=R[n]
var s=e[n]
var v=s[0]
var l=s[1]
for(var f=0;f<4;++f){var u=r[2*f]
var c=r[2*f+1]
t[i++]=deltaToFace(h(a,v,u))
t[i++]=deltaToFace(h(a,l,c))
t[i++]=deltaToIdx(o)
t[i++]=deltaToIdx(d(a,o,v,u))
t[i++]=deltaToIdx(d(a,o,l,c))
t[i++]=deltaToIdx(d(a,d(a,o,l,c),v,u))
t[i++]=deltaToIdx(h(a,v,u))
t[i++]=deltaToIdx(h(a,l,c))
t[i++]=deltaToIdx(d(a,h(a,l,c),v,u))}}ht.equal(i,t.length)
return t}()
var Kt=[145,50,100,200]
var Zt=[19,137,76,38]
var Xt=new A([12,16,14,10,14,16,12,10,14,22,12,4,12,22,14,4,10,22,16,4,16,22,10,4])
var Qt=new A([21,25,23,19,5,7,3,1,17,25,15,7,9,19,11,1,11,23,17,5,15,21,9,3])
var Jt=new A([15,17,11,9,17,15,9,11,23,21,3,5,21,23,5,3,19,25,7,1,25,19,1,7])
var $t=new A([24,26,20,18,8,6,0,2,26,24,6,8,18,20,2,0,20,26,8,2,24,18,0,6])
var ei=[new A([-1,-1,-1]),new A([0,-1,-1]),new A([1,-1,-1]),new A([-1,0,-1]),new A([0,0,-1]),new A([1,0,-1]),new A([-1,1,-1]),new A([0,1,-1]),new A([1,1,-1]),new A([-1,-1,0]),new A([0,-1,0]),new A([1,-1,0]),new A([-1,0,0]),new A([0,0,0]),new A([1,0,0]),new A([-1,1,0]),new A([0,1,0]),new A([1,1,0]),new A([-1,-1,1]),new A([0,-1,1]),new A([1,-1,1]),new A([-1,0,1]),new A([0,0,1]),new A([1,0,1]),new A([-1,1,1]),new A([0,1,1]),new A([1,1,1])]
var O=[new A([-1,-1,-1]),new A([1,-1,-1]),new A([-1,1,-1]),new A([1,1,-1]),new A([-1,-1,1]),new A([1,-1,1]),new A([-1,1,1]),new A([1,1,1])]
var ri=[new A([-1,-1,-1]),new A([0,-1,-1]),new A([-1,0,-1]),new A([0,0,-1]),new A([-1,-1,0]),new A([0,-1,0]),new A([-1,0,0]),new A([0,0,0])]
var g=.25
var ai=[new Float32Array([0,0,g,.9]),new Float32Array([0,0,-g,.9]),new Float32Array([0,g,0,1]),new Float32Array([0,-g,0,1]),new Float32Array([g,0,0,.95]),new Float32Array([-g,0,0,.95])]
var I=new A([4,7,5,6,0,3,1,2,2,7,3,6,0,5,1,4,1,7,3,5,0,6,2,4])
var ti=new A(3)
var ii=new A(3)
var ni=new Uint8Array(4)
var oi=new Uint8Array(4)
var si=new Uint8Array(4)
var vi=new Uint8Array(4)
var li=new Uint8Array(4)
var fi=new Uint8Array(4)
var ui=new Array(3)
var ci=new Array(3)
var _i=new Array(3)
var di=new Array(3)
var hi=new Array(3)
var pi=new Array(3)
var gi
var mi
var Ei
var Ti
for(var y=0;y<=2;++y){ui[y]=new Array(3)
ci[y]=new Array(3)
_i[y]=new Array(3)
di[y]=new Array(3)
hi[y]=new Array(3)
pi[y]=new Array(3)
for(var b=0;b<=2;++b){ui[y][b]=new Array(3)
ci[y][b]=new Array(3)
_i[y][b]=new Array(3)
di[y][b]=new Array(3)
hi[y][b]=new Array(3)
pi[y][b]=new Array(3)}}function neighborGet(e){if(!(240&(e[0]|e[1]|e[2])))return mi[256*e[2]+16*e[1]+e[0]]
var r=e[0]
var a=e[1]
var t=e[2]
var i=ui[1]
if(t<0){i=ui[0]
t+=16}else if(t>=16){i=ui[2]
t-=16}var n=i[1]
if(a<0){n=i[0]
a+=16}else if(a>=16){n=i[2]
a-=16}var o=n[1]
if(r<0){o=n[0]
r+=16}else if(r>=16){o=n[2]
r-=16}if(!o)return 0
return o[256*t+16*a+r]}function neighborGetLiquidFirst(e){var r=e[0]
var a=e[1]
var t=e[2]
var i=256*t+16*a+r
if(!(240&(r|a|t)))return Ei[i]||(void 0===mi?0:mi&&mi[i])
var n=t<0?0:t<16?1:2
var o=a<0?0:a<16?1:2
var s=r<0?0:r<16?1:2
ht((i-=4096*(n-1)+256*(o-1)+16*(s-1))>=0&&i<4096)
var v=ui[n][o][s]
var l=ci[n][o][s]
if(void 0===v)return 0
return l&&l[i]||v&&v[i]}function neighborGetLight(e,r){if(!(240&(r[0]|r[1]|r[2])))return e.default?e.default[256*r[2]+16*r[1]+r[0]]:0
var a=r[0]
var t=r[1]
var i=r[2]
var n
if(i<0){n=0
i+=16}else if(i>=16){n=2
i-=16}else n=1
var o=e[n]
var s=pi[n]
n=1
if(t<0){n=0
t+=16}else if(t>=16){n=2
t-=16}else n=1
var v=o[n]
var l=s[n]
if(a<0){n=0
a+=16}else if(a>=16){n=2
a-=16}else n=1
var f=v[n]
if(!f)return 0
l[n]=1
return f[256*i+16*t+a]}var Si=[0,0,0,0,257,0]
var Ai=[0,0,0,0,0,0]
var Ri
function neighborGetUnchunked(e){var r
if(e[0]<0)r=r||Ri[0]
if(e[0]>=gi.size[0])r=r||Ri[1]
if(e[1]<0)r=r||Ri[2]
if(e[1]>=gi.size[1])r=r||Ri[3]
if(e[2]<0)r=r||Ri[4]
if(e[2]>=gi.size[2])r=r||Ri[5]
if(void 0!==r)return r
return gi.data[e[2]*gi.stride2+e[1]*gi.stride1+e[0]]}function neighborGetUnchunkedLiquidFirst(e){if(e[0]<0||e[0]>=gi.size[0]||e[1]<0||e[1]>=gi.size[1]||e[2]<0||e[2]>=gi.size[2])return 0
return gi.liquid[e[2]*gi.stride2+e[1]*gi.stride1+e[0]]||gi.data&&neighborGetUnchunked(e)||0}var Oi
var w=new A(3)
function neighborGetDelta(e){w[0]=ti[0]+e[0]
w[1]=ti[1]+e[1]
w[2]=ti[2]+e[2]
return Oi(w)}function neighborGetDeltaVisible(e){var r=neighborGetDelta(e)
return r&&r<Mt}function neighborGetLightDelta(e,r){w[0]=ti[0]+r[0]
w[1]=ti[1]+r[1]
w[2]=ti[2]+r[2]
return neighborGetLight(e,w)}function neighborGetProp(e){if(!(240&(e[0]|e[1]|e[2])))return Ti[256*e[2]+16*e[1]+e[0]]
var r=e[0]
var a=e[1]
var t=e[2]
var i=_i[1]
if(t<0){i=_i[0]
t+=16}else if(t>=16){i=_i[2]
t-=16}var n=i[1]
if(a<0){n=i[0]
a+=16}else if(a>=16){n=i[2]
a-=16}var o=n[1]
if(r<0){o=n[0]
r+=16}else if(r>=16){o=n[2]
r-=16}ht(o)
return o[256*t+16*a+r]}var D=new A(3)
function neighborAndGetProp(e){var r=e-wt
for(var a=r;a>=0;--a){D[2]=w[2]-a
for(var t=r-a;t>=0;--t){D[1]=w[1]-t
var i=r-a-t
D[0]=w[0]-i
var n=neighborGetProp(D)
if(n&&n.size[0]>i&&n.size[1]>t&&n.size[2]>a)return n}}return null}var Ii=function(){var e=[[0,0,1],[0,1,0],[1,0,0]]
var o=[]
var r=new A(3)
for(var a=0;a<O.length;++a){var t=O[a]
var i=o[a]=[]
for(var n=0;n<R.length;++n){var s=R[n]
var v=[]
w[0]=t[0]>0?0:-1
w[1]=t[1]>0?0:-1
w[2]=t[2]>0?0:-1
v.push(w.slice(0))
for(var l=0;l<e.length;++l){var f=e[l]
r[0]=w[0]+t[0]*f[0]
r[1]=w[1]+t[1]*f[1]
r[2]=w[2]+t[2]*f[2]
var u=r.slice(0)
u.wt=.5
if(s[0]&&f[0]||s[1]&&f[1]||s[2]&&f[2])u.wt=3
v.push(u)}v.sort(function(e,r){return e.wt-r.wt})
var c=new Array(3*v.length)
var _=0
c[_++]=v[0][0]
c[_++]=v[0][1]
c[_++]=v[0][2]
var d=v[0]
for(var h=1;h<v.length;++h){c[_++]=v[h][0]-d[0]
c[_++]=v[h][1]-d[1]
c[_++]=v[h][2]-d[2]
d=v[h]}i[n]=c}}return function getAOOctantSum2Fn(e,r,a){var t=o[r][a]
w[0]=e[0]+t[0]
w[1]=e[1]+t[1]
w[2]=e[2]+t[2]
var i=0
var n=Oi(w)
if(n){if(n<Lt)return 1
i+=.2}w[0]+=t[3]
w[1]+=t[4]
w[2]+=t[5]
if(n=Oi(w))i+=n>=Lt?.05:.1
w[0]+=t[6]
w[1]+=t[7]
w[2]+=t[8]
if(n=Oi(w))i+=n>=Lt?.05:.1
w[0]+=t[9]
w[1]+=t[10]
w[2]+=t[11]
if(n=Oi(w))i+=n>=Lt?.3:.6
return i}}()
var yi=function(){var h=[]
function init(l){var f=new Int32Array(3)
var u=new Int32Array(3)
var c=E()
var _=E()
var d=E()
function calcRay(e,r,a){Ot(d,e,r,a)
S(d)
var t=[]
t.dir=d.slice(0)
var i=l
Ot(f,0,0,0)
for(var n=0;n<3;++n)if(!d[n]){u[n]=0
c[n]=i+1}else if(d[n]<0){u[n]=-1
c[n]=f[n]/d[n]
_[n]=-1/d[n]}else{c[n]=(f[n]+1)/d[n]
u[n]=1
_[n]=1/d[n]}var o=0
do{var s=c[0]<c[1]?0:1
if(c[2]<c[s])s=2
if(c[s]>i)break
o=c[s]
f[s]+=u[s]
c[s]+=_[s]
var v=1-o/i
t.push([f[0],f[1],f[2],1-(1-v)*(1-v)])}while(true)
return t}function pointsOnSphere(e){var r=[]
var a=Math.PI*(3-m(5))
var t=2/e
for(var i=0;i<e;++i){var n=i*t-1+t/2
var o=m(1-n*n)
var s=i*a
r.push(E(Math.cos(s)*o,n,Math.sin(s)*o))}return r}h=pointsOnSphere(80).filter(function(e){return e[0]>=0&&e[1]>=0&&e[2]>=0}).map(function(e){return calcRay(e[0],e[1],e[2])})}init(3)
function findChild(e,r){for(var a=0;a<e.children.length;++a){var t=e.children[a].pos
if(t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2])return e.children[a]}var i={pos:new A(r),value:0,children:[]}
e.children.push(i)
return i}var d=new A(3)
var p=new A(3)
function buildTree(e,r){var a=R[r]
var t=O[e]
p[0]=t[0]>0?0:-1
p[1]=t[1]>0?0:-1
p[2]=t[2]>0?0:-1
var i=0
for(var n=0;n<h.length;++n){var o=h[n]
i+=Math.abs(T(o.dir,a))}var s={pos:new A(p),value:0,children:[]}
for(var v=0;v<h.length;++v){var l=h[v]
var f=1/(l.length+1)*Math.abs(T(l.dir,a))/i
var u=s
u.value+=f
for(var c=0;c<l.length;++c){var _=l[c]
d[0]=p[0]+t[0]*_[0]
d[1]=p[1]+t[1]*_[1]
d[2]=p[2]+t[2]*_[2];(u=findChild(u,d)).value+=f}}return s}var t=[]
for(var e=0;e<R.length;++e){t[e]=[]
for(var r=0;r<O.length;++r)t[e][r]=buildTree(r,e)}var i
function traverse(e,r){d[0]=r[0]+e.pos[0]
d[1]=r[1]+e.pos[1]
d[2]=r[2]+e.pos[2]
var a=Oi(d)
if(a){if(a<Lt)return}else i+=e.value
for(var t=0;t<e.children.length;++t)traverse(e.children[t],r)}return function getAOOctantRayCast3Fn(e,r,a){i=0
traverse(t[a][r],e)
return 1-i}}()
var bi=function(){var p=[]
var e=0
function init(l){if(l===e)return
e=l
var f=new Int32Array(3)
var u=new Int32Array(3)
var c=E()
var _=E()
var d=E()
function calcRay(e,r,a){Ot(d,e,r,a)
S(d)
var t=[]
t.dir=d.slice(0)
var i=l
Ot(f,0,0,0)
for(var n=0;n<3;++n)if(!d[n]){u[n]=0
c[n]=i+1}else if(d[n]<0){u[n]=-1
c[n]=f[n]/d[n]
_[n]=-1/d[n]}else{c[n]=(f[n]+1)/d[n]
u[n]=1
_[n]=1/d[n]}var o=0
do{var s=c[0]<c[1]?0:1
if(c[2]<c[s])s=2
if(c[s]>i)break
o=c[s]
f[s]+=u[s]
c[s]+=_[s]
var v=1-o/i
t.push([f[0],f[1],f[2],1-(1-v)*(1-v)])}while(true)
return t}function pointsOnSphere(e){var r=[]
var a=Math.PI*(3-m(5))
var t=2/e
for(var i=0;i<e;++i){var n=i*t-1+t/2
var o=m(1-n*n)
var s=i*a
r.push(E(Math.cos(s)*o,n,Math.sin(s)*o))}return r}p=pointsOnSphere(80).filter(function(e){return e[0]>=0&&e[1]>=0&&e[2]>=0}).map(function(e){return calcRay(e[0],e[1],e[2])})}var g=new A(3)
return function getAOOctantRayCastFn(e,r,a,t){init(Tt(e,3))
var i=R[t]
var n=O[a]
w[0]=r[0]+(n[0]>0?0:-1)
w[1]=r[1]+(n[1]>0?0:-1)
w[2]=r[2]+(n[2]>0?0:-1)
var o=Oi(w)
var s=1
if(o){if(o<Lt)return 1
s=0}var v=0
var l=0
for(var f=0;f<p.length;++f){var u=p[f]
var c=Math.abs(T(u.dir,i))
l+=c
var _=s
for(var d=0;d<u.length;++d){var h=u[d]
g[0]=w[0]+n[0]*h[0]
g[1]=w[1]+n[1]*h[1]
g[2]=w[2]+n[2]*h[2]
if(o=Oi(g)){if(o<Lt)break}else++_}if(0){if(_===u.length)v+=c}else v+=_/(u.length+1)*c}return 1-v/l}}()
var wi=[[[0,0,1,0],[0,0,0,1],[0,1,2,3,4,5],[0,1,2,3]],[[0,1,0,-1],[0,0,1,0],[0,1,5,4,2,3],[1,2,3,0]],[[1,0,-1,0],[0,1,0,-1],[0,1,3,2,5,4],[2,3,0,1]],[[0,0,0,1],[1,0,-1,0],[0,1,4,5,3,2],[3,0,1,2]]]
for(var N=0;N<wi.length;++N){var L=wi[N][3]
for(var M=0;M<4;++M)L[M<<3]=L[M]<<3}var P
function meshCalcSetBakingMeshGetter(e){P=e}var Di=new A(3)
var Ni=7
var Li=new Uint32Array(i*i*8*Ni)
var Mi=new Uint8Array(Li.buffer)
var Pi=E()
var Ci=E()
var ki=new A(3)
var xi=new Uint8Array(i*i*i)
var Ui=new Uint8Array(i*i*i)
Ui.fill(255)
var Fi=new Array(8)
var Gi=[0,0,0,0,0,0,0]
var Bi=[0,0,0,0,0,0,0]
var Hi=[true,true,true,false,false,false,false]
var Wi=new Array(7)
var Vi={}
var qi=new Uint8Array(84216)
var zi
var ji
var Yi
function aoFromCache(e){var r=ji+e*Yi
var a=qi[r]
if(1!==a)return a
var t=4*e
var i=zi(ki,I[t++],e)
var n=zi(ki,I[t++],e)
var o=zi(ki,I[t++],e)
var s=zi(ki,I[t++],e)
var v=St(i,n)
var l=St(o,s)
i=Tt(i,l)
n=Tt(n,l)
o=Tt(o,v)
s=Tt(s,v)
var f=Tt(0,4-(i+o+n+s))/4*255|0
if(1===f)f=0
return qi[r]=f}function meshCalcInternal(e,r,a){profilerStart("meshCalcInternal")
r.ver_meshing=e.ver_meshing
var t=(a=a||{}).ao||0
var i=a.lighting||0
var n=Et
var o=mt
var s=false
if(2===i){t=0
s=true}var v=a,l=v.not_world,f=v.skip_greedy_meshing,u=v.need_offs
if(!i){if(l)yt(si,255,255,255,255)
else yt(si,0,0,0,0)
yt(oi,255,255,255,255)
It(fi,si)
It(li,oi)}if(!t){yt(ni,255,255,255,255)
It(vi,ni)}var c=a.liquid
var _=c?At.tile_map_liquids:e.tile_map
var d=_.alpha_map||Vi
var h=_.doublesided_map||Vi
var p=_.tile_rate||Vi
var g=_.tint_map||Vi
var m=a.tint_colors||_.tint_colors||Vi
var E=[]
var T=[]
var S=_.tile_override||null
Mt=_.tile_invisible
Lt=_.tile_non_opaque
ht(Mt&&Lt)
if(l){Ti=(gi=e).baked_props||Vi
if(c)Oi=neighborGetUnchunkedLiquidFirst
else Oi=neighborGetUnchunked
if(a.over_tile)Ri=a.over_tile
else if(a.ground)Ri=Si
else Ri=Ai}else{mi=e.data
if(c){Ei=e.liquid
Oi=neighborGetLiquidFirst}else{Ti=e.baked_props||Vi
Oi=neighborGet}var A=e.full
var R=e.chunk_id-Pt
for(var O=0;O<=2;++O)for(var I=0;I<=2;++I){var y=R+(O*pt+I)*pt
for(var b=0;b<=2;++b,++y){var w=xt[y]
if(w){A=A&&w.full
ui[O][I][b]=w.data
if(c)ci[O][I][b]=w.liquid
else _i[O][I][b]=w.baked_props||Vi}else{ui[O][I][b]=void 0
if(c)ci[O][I][b]=void 0
else _i[O][I][b]=Vi}}}if(A)return void profilerStop("meshCalcInternal")
if(i){if(!a.did_lighting){a.did_lighting=true
gt(e)}di.default=e.light_sun
hi.default=e.light_torch
for(var D=0;D<=2;++D)for(var N=0;N<=2;++N)for(var L=0;L<=2;++L){var M=xt[e.chunk_id+(D*pt+N)*pt+L-Pt]
di[D][N][L]=M&&M.light_sun
hi[D][N][L]=M&&M.light_torch
pi[D][N][L]=0}}}Wt=Bt=0
var P=e.size
var C=Tt(P[0]*P[1],Tt(P[1]*P[2],P[0]*P[2]))
ht(Li.length>=C*Ni)
var k=Mi
var x=Li
x.fill(0)
var U
zi=t<=2?Ii:3===t?yi:bi.bind(null,t)
var F=P[0]+1
var G=F*(P[1]+1)
Yi=G*(P[2]+1)
if(t){var B=6*Yi
if(qi.length<B){console.warn("Resizing ao_cache to "+B+", update initial size")
qi=new Uint8Array(B)}qi.fill(1)}var H=a.for_baking||a.noscale?1:7
var W=a.sway
var V=u?7:0
var q
var z=[]
if(!c)if(e.baked_props){var j=i?e.light_sun||xi:Ui
ht(void 0!==Ft)
var Y=Ft
for(var K in e.baked_props){var Z=e.baked_props[K]
if(!Z.key)continue
K=Number(K)
var X=Ut[Z.key]
if(!X)ht(X,'Missing baked ruleset for "'+Z.key+'" ('+Object.keys(Ut).length+" found)")
var Q=15&K
var J=(240&K)>>4
var $=K>>8
Ot(ti,Q,J,$)
var ee=void 0
var re=X.rules
for(var ae=0;ae<re.length;++ae){var te=true
if((ee=re[ae]).same)for(var ie=0;te&&ie<ee.same.length;++ie){var ne=neighborGetDelta(ee.same[ie])
if(ne&&ne>=wt&&ne<=Dt){var oe=neighborAndGetProp(ne)
if(!oe||oe.key!==Z.key)te=false}else te=false}if(ee.tangible)for(var se=0;te&&se<ee.tangible.length;++se){var ve=neighborGetDelta(ee.tangible[se])
if(!ve)te=false
else if(ve>=bt)if(ve>=wt&&ve<=Dt){var le=neighborAndGetProp(ve)
if(!le||!le.tangible)te=false}else te=false}if(ee.intangible)for(var fe=0;te&&fe<ee.intangible.length;++fe){var ue=neighborGetDelta(ee.intangible[fe])
if(ue)if(ue>=bt){if(ue>=wt&&ue<=Dt){var ce=neighborAndGetProp(ue)
if(ce&&ce.tangible)te=false}}else te=false}if(ee.empty)for(var _e=0;te&&_e<ee.empty.length;++_e)if(neighborGetDelta(ee.empty[_e]))te=false
if(ee.period)if(Q%ee.period[0]^J%ee.period[1]^$%ee.period[2])te=false
if(te)break}if(!ee)continue
var de=ee.data.meshing
ht(de)
if(--Y<0){var he=St(Q+Z.size[0],P[0])
var pe=St(J+Z.size[1],P[1])
var ge=St($+Z.size[2],P[2])
for(var me=$;me<ge;++me)for(var Ee=J;Ee<pe;++Ee)for(var Te=Q;Te<he;++Te){var Se=(me*P[1]+Ee)*P[0]+Te
z.push(Se,e.data[Se])
e.data[Se]=Z.tangible?At.STONE:At.PASSABLE_LEAVES}continue}var Ae=o[j[K]]
var Re=de.data
var Oe=de.bake_offset
var Ie=X.size
var ye=Z.rot||ee.rot||0
var be=wi[ye]
var we=be[0]
var De=be[1]
var Ne=be[2]
var Le=be[3]
var Me=7*(Q+we[0]*Ie[0]+we[1]*Ie[1])
var Pe=7*(J+De[0]*Ie[0]+De[1]*Ie[1])
var Ce=7*$
for(var ke=0;ke<8;++ke){Ot(ti,Q+(1&ke?Z.size[0]:0),J+(2&ke?Z.size[1]:0),$+(4&ke?Z.size[2]:0))
var xe=q=0
for(var Ue=0;Ue<8;++Ue){var Fe=ri[Ue]
var Ge=neighborGetDelta(Fe)
if(!Ge||Ge>=Lt){q+=n[neighborGetLightDelta(hi,Fe)]
xe++}}if(!xe)xe=1
Fi[ke]=q/xe}if(Re){var Be=Re.length/kt
var He=geomBufAddQuad(Be)
var We=0
var Ve=Bt
for(var qe=0;qe<Be;++qe)for(var ze=0;ze<4;++ze){var je=Re[We++]+Oe[0]
var Ye=Re[We++]+Oe[1]
var Ke=Re[We++]+Oe[2]
var Ze=Me+we[2]*je+we[3]*Ye
var Xe=Pe+De[2]*je+De[3]*Ye
He[Ve++]=Ze+V
He[Ve++]=Xe+V
He[Ve++]=Ce+Ke+V
var Qe=Re[We++]
var Je=Re[We++]
var $e=Ne[7&Je]
if($e<2){var er=240&Qe
Qe=15&(Qe<<4-ye|(15&Qe)>>ye)
Qe|=240&((240&er)<<4-ye|er>>ye)}He[Ve++]=Qe
Je=-8&Je|$e
if($e<2)Je=-25&Je|Le[24&Je]
He[Ve++]=Je
He[Ve++]=Re[We++]
He[Ve++]=Re[We++]
var rr=ai[$e]
var ar=(Ze-7*Q)/(7*Z.size[0])
var tr=(Xe-7*J)/(7*Z.size[1])
var ir=Ke/(7*Z.size[2])
var nr=St(1,Tt(0,rr[0]+ar))
var or=St(1,Tt(0,rr[1]+tr))
var sr=St(1,Tt(0,rr[2]+ir))
var vr=(1-or)*((1-nr)*Fi[0]+nr*Fi[1])+or*((1-nr)*Fi[2]+nr*Fi[3])
var lr=(1-or)*((1-nr)*Fi[4]+nr*Fi[5])+or*((1-nr)*Fi[6]+nr*Fi[7])
He[Ve++]=((1-sr)*vr+sr*lr)*rr[3]
We++
He[Ve++]=Re[We++]
He[Ve++]=Re[We++]
He[Ve++]=Re[We++]
He[Ve++]=Ae
We++
He[Ve++]=Re[We++]
He[Ve++]=Ae
We++
var fr=St(1,Tt(0,ar))
var ur=St(1,Tt(0,tr))
var cr=St(1,Tt(0,ir))
var _r=(1-ur)*((1-fr)*Fi[0]+fr*Fi[1])+ur*((1-fr)*Fi[2]+fr*Fi[3])
var dr=(1-ur)*((1-fr)*Fi[4]+fr*Fi[5])+ur*((1-fr)*Fi[6]+fr*Fi[7])
He[Ve++]=(1-cr)*_r+cr*dr
We++
He[Ve++]=Re[We++]}ht.equal(We,Re.length)
Bt=Ve}ht(!de.alpha)}}var hr
var pr
var gr
var mr
var Er
for(var Tr=0;Tr<6;++Tr){var Sr=(U=qt[Tr])[0]
var Ar=U[1]
var Rr=U[2]
var Or=P[U[0]]
var Ir=P[U[1]]
var yr=P[U[2]]
var br=Vt[Tr]
var wr=br
var Dr=wr>0?0:Or-1
var Nr=wr>0?Or:-1
Di[Sr]=1
for(ti[Sr]=Dr;ti[Sr]!==Nr;ti[Sr]+=wr){var Lr=-1
ii[Sr]=ti[Sr]+br
for(var Mr=0,Pr=0;Pr<Ir;++Pr){ii[Ar]=ti[Ar]=Pr
for(var Cr=0;Cr<yr;++Cr,Mr+=Ni){ti[Rr]=Cr
var kr=e.get(ti,c)
if(!kr||kr>=Mt){x[Mr]=0
continue}ii[Rr]=Cr
var xr=Oi(ii)
if(xr)if(xr>=Lt);else{x[Mr]=0
continue}var Ur=_[kr]
ht(Ur)
if(xr===kr&&Ur.no_self){x[Mr]=0
continue}var Fr=Ur.def
if(Ur.face)Fr=Ur.face[Tr]||Fr
Lr=Mr/7
if(Tr>=2){if(Ur.above){ti[2]++
xr=Oi(ti)
ti[2]--
if(Ur.above[xr])Fr=Ur.above[xr]}if(Ur.below){ti[2]--
xr=Oi(ti)
ti[2]++
if(Ur.below[xr])Fr=Ur.below[xr]}}var Gr=4*Mr
k[Gr++]=Fr
var Br=4*Tr
var Hr=0
for(var Wr=0;Wr<4;++Wr)if(!neighborGetDeltaVisible(ei[Xt[Br+Wr]]))if(!neighborGetDeltaVisible(ei[Qt[Br+Wr]]))Hr|=Kt[Wr]
var Vr=240&Hr
Hr&=-241
for(var qr=0;qr<4;++qr){var zr=16<<qr
if(Vr&zr)continue
if(!neighborGetDeltaVisible(ei[$t[Br+qr]]))if(!neighborGetDeltaVisible(ei[Jt[Br+qr]]))Hr|=zr}k[Gr++]=Hr
if(t||i){var jr=4*Tr*3
for(var Yr=0;Yr<4;++Yr){if(t){ki[0]=ti[0]+jt[jr++]
ki[1]=ti[1]+jt[jr++]
ki[2]=ti[2]+jt[jr++]
ji=ki[0]+ki[1]*F+ki[2]*G
hr=aoFromCache(Tr)
k[Gr++]=hr}var Kr=Hr&Zt[Yr]
var Zr=Kr?7:i?4:0
var Xr=9*(4*Tr+Yr)
var Qr=Yt[Xr++]
var Jr=Yt[Xr++]
for(var $r=0;$r<Zr;++$r){if($r>=3)Hi[$r]=false
var ea=ei[Yt[Xr++]]
var ra=neighborGetDelta(ea)
if(!ra){Bi[$r]=Gi[$r]=1
Wi[$r]=ea}else if(ra>=Lt)if(ra>=wt){Bi[$r]=Gi[$r]=.5
Wi[$r]=ea}else if(ra>=Mt){Bi[$r]=Gi[$r]=1
Wi[$r]=ea}else{Bi[$r]=0
Gi[$r]=1
Wi[$r]=ea}else Bi[$r]=Gi[$r]=0}if(i){for(var aa=Er=q=mr=0;aa<4;++aa)if(3!==aa||Er>1){var ta=Gi[aa]
if(ta){var ia=Wi[aa]
mr+=ta*o[neighborGetLightDelta(di,ia)]
q+=ta*n[neighborGetLightDelta(hi,ia)]
Er++}}if(!Er)ht(false)
if(s)Er=4
gr=q/Er
k[Gr++]=pr=mr/Er
k[Gr++]=gr}if(Kr){var na=Bi
if(na[1]){Hi[3]=true
Hi[4]=true
if(na[4])Hi[6]=true}if(na[2]){Hi[3]=true
Hi[5]=true
if(na[5])Hi[6]=true}if(Hi[3]){if(na[3])Hi[6]=true
if(Hi[6]&&na[6])Hi[4]=Hi[5]=true}if(t){var oa=hr
var sa=1
if(na[4]&&(na[1]||na[2]&&na[5]&&na[6])||!na[5]&&na[6]&&na[2]&&na[3]){oa+=aoFromCache(Qr)
sa++}if(na[5]&&(na[2]||na[1]&&na[4]&&na[6])||!na[4]&&na[6]&&na[1]&&na[3]){oa+=aoFromCache(Jr)
sa++}if(na[5]&&na[2]&&na[3]&&(!na[6]&&na[1]||!na[1]&&na[6])){oa+=aoFromCache(1^Qr)
sa++}if(na[4]&&na[1]&&na[3]&&(!na[6]&&na[2]||!na[2]&&na[6])){oa+=aoFromCache(1^Jr)
sa++}k[Gr++]=Tt(0,St(255,oa/sa|0))}if(i){if(Hi[3])for(var va=4;va<7;++va)if(Hi[va]){var la=Gi[va]
if(la){var fa=Wi[va]
mr+=la*o[neighborGetLightDelta(di,fa)]
q+=la*n[neighborGetLightDelta(hi,fa)]
Er++}}k[Gr++]=mr/Er
k[Gr++]=q/Er}}else{if(t)k[Gr++]=hr
if(i){k[Gr++]=pr
k[Gr++]=gr}}}}}}for(var ua=0;ua<=Lr;++ua){var ca=7*ua
var _a=x[ca]
if(!_a)continue
var da=x[ca+1]
var ha=x[ca+2]
var pa=x[ca+3]
var ga=x[ca+4]
var ma=x[ca+5]
var Ea=x[ca+6]
ti[Ar]=ua/yr
ti[Rr]=ua%yr
var Ta=1
var Sa=1
var Aa=yr
var Ra=yr-ti[Rr]
var Oa=Ir-ti[Ar]
for(var Ia=0;Ia<Oa;++Ia){var ya=ua+Ia*yr
var ba=7*ya
var wa=ba+7*St(Ra,Aa)
while(ba<wa&&x[ba]===_a&&x[ba+1]===da&&x[ba+2]===ha&&x[ba+3]===pa&&x[ba+4]===ga&&x[ba+5]===ma&&x[ba+6]===Ea)ba+=7
var Da=ba/7-ya
if(!Da)break
if((Ia+1)*Da>Ta*Sa){Ta=Da
Sa=Ia+1}Aa=Da}if(f)Ta=Sa=1
for(var Na=0;Na<Sa;++Na){var La=7*(ua+Na*yr)
for(var Ma=0;Ma<Ta;++Ma,La+=7)if(Na||Ma)x[La]=0}Di[Ar]=Sa
Di[Rr]=Ta
var Pa=4*ca
var Ca=k[Pa++]
var ka=k[Pa++]
if(t&&i)for(var xa=0;xa<4;++xa){ni[xa]=k[Pa++]
oi[xa]=k[Pa++]
si[xa]=k[Pa++]
vi[xa]=k[Pa++]
li[xa]=k[Pa++]
fi[xa]=k[Pa++]}else if(t)for(var Ua=0;Ua<4;++Ua){ni[Ua]=k[Pa++]
vi[Ua]=k[Pa++]}else if(i)for(var Fa=0;Fa<4;++Fa){oi[Fa]=k[Pa++]
si[Fa]=k[Pa++]
li[Fa]=k[Pa++]
fi[Fa]=k[Pa++]}var Ga=S&&S[Ca]||Ca
var Ba=Boolean(d[Ca])
var Ha=Boolean(h[Ca])
var Wa=p[Ca]||0
var Va=g[Ca]||0
var qa=m[Ca]||null
var za=void 0
if(Va){ht(!qa)
if(Va===Nt){qa=T[Va]
if(!T[Va])qa=T[Va]=e.tintGenSingle(Va)}else if(!(za=E[Va]))za=E[Va]=e.tintGen(Va)}var ja=4*Tr*4
var Ya=void 0
var Ka=void 0
if(Ba){Ka=geomBufAlphaAddQuad(1)
Ya=Wt}else{Ka=geomBufAddQuad(1)
Ya=Bt}var Za=Ya
for(var Xa=0;Xa<4;++Xa){var Qa=ti[0]+zt[ja++]*Di[0]
var Ja=ti[1]+zt[ja++]*Di[1]
var $a=ti[2]+zt[ja++]*Di[2]
Ka[Za++]=Qa*H+V
Ka[Za++]=Ja*H+V
Ka[Za++]=$a*H+V
Ka[Za++]=ka
Ka[Za++]=zt[ja++]|Wa
Ka[Za++]=Ga
Ka[Za++]=ni[Xa]
Ka[Za++]=si[Xa]
if(qa){Ka[Za++]=255*qa[0]
Ka[Za++]=255*qa[1]
Ka[Za++]=255*qa[2]}else if(Va){var et=.0625*Qa
var rt=.0625*Ja
Rt(Pi,et,za[0],za[1])
Rt(Ci,et,za[3],za[2])
Rt(Ci,rt,Pi,Ci)
Ka[Za++]=255*Ci[0]
Ka[Za++]=255*Ci[1]
Ka[Za++]=255*Ci[2]}else{Ka[Za++]=255
Ka[Za++]=255
Ka[Za++]=255}Ka[Za++]=oi[Xa]
Ka[Za++]=vi[Xa]
Ka[Za++]=li[Xa]
Ka[Za++]=fi[Xa]
if(W){var at=7*W
var tt=255/(at*at)
Ka[Za++]=$a*$a*tt}else Ka[Za++]=0}if(Ba)Wt=Za
else Bt=Za
if(t||i)if(ni[0]*Tt(si[0],oi[0])+ni[2]*Tt(si[2],oi[2])>ni[1]*Tt(si[1],oi[1])+ni[3]*Tt(si[3],oi[3]))for(var it=0;it<Ct;++it){var nt=Ka[Ya+it]
Ka[Ya+it]=Ka[Ya+it+Ct]
Ka[Ya+it+Ct]=Ka[Ya+it+2*Ct]
Ka[Ya+it+2*Ct]=Ka[Ya+it+3*Ct]
Ka[Ya+it+3*Ct]=nt}if(Ha){if(Ba){Ka=geomBufAlphaAddQuad(1)
Wt+=kt}else{Ka=geomBufAddQuad(1)
Bt+=kt}var ot=Ya+kt
for(var st=0;st<Ct;++st){Ka[ot+st]=Ka[Ya+st+3*Ct]
Ka[ot+st+Ct]=Ka[Ya+st+2*Ct]
Ka[ot+st+2*Ct]=Ka[Ya+st+Ct]
Ka[ot+st+3*Ct]=Ka[Ya+st]}}}}}if(c){if(Bt)r.liquid=Gt.slice(0,Bt)
ht(!Wt)}else{if(Bt)r.data=Gt.slice(0,Bt)
if(Wt)r.alpha=Ht.slice(0,Wt)}if(i&&a.used_lighting)for(var vt=0;vt<=2;++vt)for(var lt=0;lt<=2;++lt)for(var ft=0;ft<=2;++ft)if(pi[vt][lt][ft]){var ut=e.chunk_id+(vt*pt+lt)*pt+ft-Pt
a.used_lighting[ut]=1}for(var ct=0;ct<z.length;){var _t=z[ct++]
var dt=z[ct++]
e.data[_t]=dt}profilerStop("meshCalcInternal")}function meshCalcPrep(e,r){profilerStart("meshCalcPrep")
if(!(r=r||{}).liquid&&e.baked_props)for(var a in e.baked_props){var t=e.baked_props[a]
if(!t.key)continue
var i=Ut[t.key]
if(!i)ht(i,'Missing baked ruleset for "'+t.key+'" ('+Object.keys(Ut).length+" found)")
if(!u[t.key]){u[t.key]=true
var n=i.rules
for(var o=0;o<n.length;++o)P(n[o].data)}}profilerStop("meshCalcPrep")}function meshCalc(e,r,a){meshCalcPrep(e,a)
meshCalcInternal(e,r,a)}},{"../common/globals.js":41,"../glov/common/vmath.js":60,"./light_calc.js":15,"./tiles.js":37,assert:void 0}],23:[function(e,r,a){"use strict"
a.meshReset=meshReset
a.meshResetPre=meshResetPre
a.meshPre=meshPre
a.mesh=mesh
a.startup=startup
var W=e("assert")
var t=e("../glov/client/webfs").webFSOnReady
var i=e("../glov/common/util")
var V=i.clamp
var n=i.defaults
var o=i.empty
var R=e("../glov/common/verify")
var s=e("../glov/common/vmath").vec3
var v=e("../common/globals")
var q=v.CHUNK_SIZE
var z=v.CS2
var j=v.ID2
var h=v.ID_FACTOR
var p=v.MEGACHUNK_SIZE
var l=e("../common/voxel_data_common.js")
var Y=l.SUN_DECREASE
var K=l.SUN_INCREASE
var O=l.TORCH_DECREASE
var I=l.TORCH_INCREASE
var f=l.UNCHUNKED_ID
var Z=l.ZMAP_MAX
var y=l.ZMAP_UNDERGROUND
var X=l.ZMAP_UNKNOWN
var Q=l.ZMap
var g=e("./continent").continentHandleData
var u=e("./light_calc")
var c=e("./light_calc")
var J=c.LIGHT_SUN
var b=c.LIGHT_TORCH
var _=e("./mesh_calc")
var d=_.meshCalc
var m=_.meshCalcBakeRules
var E=_.meshCalcMaxPropsPerChunk
var T=_.meshCalcReset
var S=_.meshCalcSetBakingMeshGetter
var A=e("./palette")
var w=A.paletteSetMeshReloadCallback
var D=A.paletteStartup
var N=e("./proc_gen").handleHexomeChoices
var L=e("./proc_gen_biomes")
var M=L.getChunkTintColor
var P=L.getVSTintColors
var $=e("./task_sched_worker")
var C=e("./tiles")
var ee=C.TILE_NON_OPAQUE
var k=C.TILE_TINT_MAX
var x=C.tile_map_default
var U=e("./voxel_data_xraw")
var F=U.loadXRAW
var G=U.reloadXRAW
var B=U.voxelDataXRAWStartup
var re=Math.floor,ae=Math.max,te=Math.min,H=Math.round
var ie=0
var ne=1
var oe=2
var se
var ve
function VoxelDataWorker(e){this.chunk_id=e
this.data=null
this.liquid=null
this.baked_props=null
this.ver_data=0
this.ver_meshing=0
this.tile_map=x
this.world_pos=null
this.chunk_pos=null
var r=H(e/j)
this.vsid=e-r*j
this.chunk_z=r
this.world_z1=(r+1)*q-1
this.light_sun=null
this.light_torch=null
this.light_need_init=b|J
this.light_sent=false
this.sun_clear_version=u.clear_version
this.sun_emit_version=new Array(6)
this.torch_clear_version=u.clear_version
this.torch_emit_version=new Array(6)
this.emitters_sun={}
this.emitters_torch={}
var a=ve[this.vsid]
if(!a)a=ve[this.vsid]={}
a[e]=this}VoxelDataWorker.prototype.full=false
VoxelDataWorker.prototype.size=new Int8Array([q,q,q])
VoxelDataWorker.prototype.unload=function(){delete se[this.chunk_id]
delete ve[this.vsid][this.chunk_id]}
VoxelDataWorker.prototype.get=function(e,r){var a=e[0]+16*e[1]+256*e[2]
if(r)return this.liquid[a]
else return this.data[a]}
VoxelDataWorker.prototype.worldPos=function(){var e=this.world_pos
if(!e){e=this.world_pos=s()
var r=this.chunk_id
var a=H(r/j)
var t=H((r-=a*j)/h)
r-=t*h
e[2]=a*q
e[1]=t*q
e[0]=r*q}return e}
VoxelDataWorker.prototype.chunkPos=function(){var e=this.chunk_pos
if(!e){e=this.chunk_pos=s()
var r=this.chunk_id
var a=H(r/j)
var t=H((r-=a*j)/h)
r-=t*h
e[2]=a
e[1]=t
e[0]=r}return e}
VoxelDataWorker.prototype.worldZ=function(){var e=this.world_z1-q+1
W.equal(this.worldPos()[2],e)
return e}
var le=[]
for(var fe=0;fe<k;++fe)le.push(new Array(4))
VoxelDataWorker.prototype.tintGen=function tintGen(e){W(this.chunk_id!==f)
var r=this.world_pos||this.worldPos()
var a=le[e]
a[0]=P(this.vsid,r,e)
r[0]+=q
a[1]=P(this.vsid+1,r,e)
r[1]+=q
a[2]=P(this.vsid+h+1,r,e)
r[0]-=q
a[3]=P(this.vsid+h,r,e)
r[1]-=q
return a}
VoxelDataWorker.prototype.tintGenSingle=function tintGenSingle(e){return M(this.chunkPos(),e)}
function VoxelDataWorkerUtil(e){this.size=e
this.byte_size=this.size[0]*this.size[1]*this.size[2]
this.stride1=this.size[0]
this.stride2=this.size[0]*this.size[1]
this.data=new Uint8Array(this.byte_size)
this.baked_mesh_data=null}VoxelDataWorkerUtil.prototype.setUnchecked=function(e,r){this.data[e[2]*this.stride2+e[1]*this.stride1+e[0]]=r}
VoxelDataWorkerUtil.prototype.get=function(e){var r=e[0]+e[1]*this.stride1+e[2]*this.stride2
return this.data[r]}
VoxelDataWorkerUtil.prototype.updateGeometrySimple=function(e){if(false!==e.ao)e.ao=3
e.not_world=true
var r={data:null}
if(this.data){e.liquid=false
d(this,r,e)}this.baked_mesh_data=r.data}
var ue={}
var ce={}
var _e=[]
var de=false
var he=false
function meshReset(e,r){he=false
r()}function meshResetPre(e){he=true
ce={}
de=false
ve=[]
ue={}
T(se=[],_e=[])}var pe=[-j-h-1,-j-h,-j-h+1,-j-1,-j,1-j,-j+h-1,-j+h,-j+h+1,-h-1,-h,1-h,-1,1,h-1,h,h+1,j-h-1,j-h,j-h+1,j-1,j,j+1,j+h-1,j+h,j+h+1]
W.equal(pe.length,26)
var ge=new Q
for(var me=0;me<ge.data.length;++me)ge.data[me]=Z
var Ee
function meshPre(e){var r=e.chunks,a=e.unloads,t=e.zmap_updates
if(Ee)Ee.is_last=false
e.is_last=true
Ee=e
if(t)for(var i=0;i<t.length;++i){var n=t[i]
if(!_e[n.vsid]||_e[n.vsid]===ge)_e[n.vsid]=n.data===y?ge:new Q(n.data)
else if("server"===n.from){var o=ce[n.vsid]
if(!o)o=ce[n.vsid]=[]
o.from_server=n.data}else if("procgen"!==n.from);}if(a)for(var s=0;s<a.length;++s){var v=a[s]
var l=se[v]
if(l)l.unload()}if(r)for(var f=0;f<r.length;++f){var u=r[f]
var c=u.type,_=u.chunk_id,d=u.ver_data,h=u.data,p=u.light_dirty
var g=se[_]
if(!g)g=se[_]=new VoxelDataWorker(_)
if(p){var m=0
if(p&K)g.light_need_init|=J
if(p&Y&&g.light_sun){g.light_need_init|=J
m|=J}if(p&I)g.light_need_init|=b
if(p&O&&g.light_torch){g.light_need_init|=b
m|=b}if(m)for(var E=0;E<26;++E){var T=_+pe[E]
var S=se[T]
if(S)S.light_need_init|=m}}var A=ce[g.vsid]
if(!A)A=ce[g.vsid]=[]
if(-1===A.indexOf(_)){A.push(_)
de=true}if(!d)if(c===ie)g.data=null
else if(c===ne)g.liquid=null
else g.baked_props=null
else{W(h)
if(c===oe){g.ver_props=d
g.baked_props=h}else{g.ver_data=d
if(!R(h instanceof Uint8Array))h=new Uint8Array(h)
if(c===ie)g.data=h
else g.liquid=h}}}}function findNewZ(e,r,a){var t=64;--a
while(t){--t
var i=se[e-=j]
if(!i||!i.data)a-=q
else{var n=i.data
for(var o=15;o>=0;--o,--a){var s=n[r+o*z]
if(s&&s<ee)return V(a,X,Z)}}}return X}function chunkIdFromVSZ(e,r){return e+re(r/q)*j}var Te=[-h-1,-1,h-1,-h,0,h,1-h,1,h+1]
function zmapUpdate(e){var n
function dirty(e,r,a,t){r=re(r/q)
a=re(a/q)
if(!n)n={}
var i=n[e]
if(i){i[0]=te(i[0],r)
i[1]=ae(i[1],a)
i[2]|=t}else n[e]=[r,a,t]}for(var r in ce){var a=ce[r]
var t=a.from_server
r=Number(r)
var i=_e[r]
if(!i)(i=_e[r]=new Q).data.fill(X)
var o=false
for(var s=0;s<a.length;++s){var v=a[s]
var l=se[v]
var f=l.world_z1
for(var u=0;u<z;++u){var c=i.data[u]
if(c<=f){var _=f-q+1
var d=X
var h=u+(q-1)*z
var p=-1
var g=l.data
if(g)for(p=q-1;p>=0;--p,h-=z){var m=g[h]
if(m&&m<ee){d=_+p
break}}var E=void 0
if(-1===p){if(c>=_)dirty(r,E=findNewZ(v,u,_),c,K)}else if((d=V(d,X,Z))!==c){dirty(r,te(d,c),ae(d,c),d>c?Y:K)
E=d}if(void 0!==E)if(t&&t[u]===E)i.data[u]=E
else{i.data[u]=E
o=true}}}}if(t)for(var T=0;T<z;++T){var S=i.data[T]
var A=t[T]
if(S===A)continue
var R=chunkIdFromVSZ(r,S)
var O=Boolean(se[R])
var I=chunkIdFromVSZ(r,A)
var y=Boolean(se[I])
if(O&&y)continue
if(!y&&A>S||!O&&y&&A<S){i.data[T]=A
dirty(r,te(A,S),ae(A,S),A>S?Y:K)}else if(O&&!y&&A<S);else if(!O&&y&&A>S);else{W(!O&&!y&&A<S)
var b=findNewZ(R+j,T,(re(S/q)+1)*q)
if(b>A){A=b
i.data[T]=A
o=true}i.data[T]=A
dirty(r,te(A,S),ae(A,S),A>S?Y:K)}}if(o){if(!e.zmap_data)e.zmap_data={}
e.zmap_data[r]=i.data}}ce={}
var w
function dirty2(e,r,a,t){var i=e[r]
if(i){i[0]=te(i[0],a)
i[1]=ae(i[1],t)}else e[r]=[a,t]}if(n){var D=n
w={}
n=e.lighting_dirty={}
e.lighting_batch_id=$.batch_id
for(var N in D){var L=D[N]
N=Number(N)
var M=L[0]
var P=L[1]
var C=L[2]!==K
if(!C)dirty2(w,N,M,P)
if(M!==X)M--
P++
for(var k=0;k<Te.length;++k){var x=N+Te[k]
dirty2(n,x,M,P)
if(C)dirty2(w,x,M,P)}}for(var U in w){var F=ve[U]
var G=w[U]
for(var B in F){var H=F[B]
if(H.chunk_z>=G[0]&&H.chunk_z<=G[1])H.light_need_init|=J}}}}function meshWorkerHandleIncoming(e,r){if(de){zmapUpdate(e)
de=false}var a=r.zmap_requests,t=r.mc2d_unsubs,i=r.hexome_choices,n=r.continents
if(i)N(i)
if(n)g(n)
if(a){if(!e.zmap_data)e.zmap_data={}
for(var o=0;o<a.length;++o){var s=a[o]
if(!e.zmap_data[s])if(!_e[s]);else if(_e[s]===ge);else e.zmap_data[s]=_e[s].data}}if(t)for(var v=0;v<t.length;++v){var l=t[v]
var f=H(l/h)
var u=(l-f*h)*p+f*p*h
for(var c=0;c<p;++c)for(var _=0;_<p;++_){var d=u+_+c*h
if(_e[d])delete _e[d]}}}function meshWorkerDoMeshing(e,r){var a=r.chunk_id,t=r.ver_meshing,i=r.opts
if(a!==f){var n=se[a]
W(n&&n.ver_data)
n.ver_meshing=t
i.used_lighting=ue
i.need_offs=true
var o=Date.now()
if(n.data){i.liquid=false
d(n,e,i)}if(n.liquid){i.liquid=true
d(n,e,i)}if(i.lighting){e.lighting=true
e.light_torch=n.light_torch
e.light_sun=n.light_sun}e.mesh_time=Date.now()-o}}function meshWorkerSendBackLighting(e,r){if(r.is_last)if(!o(ue)){e.extra_lighting={}
for(var a in ue){var t=se[a]
W(t)
if(!t.light_sent&&!t.data&&!t.liquid&&!t.full&&(t.light_torch||t.light_sun)){t.light_sent=true
e.extra_lighting[a]={light_torch:t.light_torch,light_sun:t.light_sun}}}ue={}}}function mesh(e,r){if(he)return r(null)
Ee=null
var a={}
meshWorkerHandleIncoming(a,e)
meshWorkerDoMeshing(a,e)
meshWorkerSendBackLighting(a,e)
return r(a)}function meshBakeRules(e,r){m(e)
r()}function zmapGetDebugData(e,r){var a=e.vsid,t=e.idx
var i=_e[a]
var n=i&&i.data[t]
if(i===ge)n+=" (underground)"
r(n)}function handleMaxPropsPerChunk(e,r){E(e)
r()}function meshWorkerBackingMeshFromRuleData(e){if(null===e.meshing){var r=e.filename,a=e.opts
var t=F(r,n({for_baking:true},a)).baked
W(t)
e.meshing=t}return e.meshing}function meshReload(){G(null)
G(null,true)}function startup(){$.addPreHandler("mesh_reset",meshResetPre)
$.addPreHandler("mesh",meshPre)
$.addHandler("mesh_reset",meshReset)
$.addHandler("mesh",mesh)
$.addHandler("mesh_bake_rules",meshBakeRules)
$.addHandler("zmap_debug",zmapGetDebugData)
$.addHandler("max_props_per_chunk",handleMaxPropsPerChunk)
D()
w(meshReload)
S(meshWorkerBackingMeshFromRuleData)
t(function(){B({url_base:"",on_reload_cb:function on_reload_cb(){},create_vd_cb:function create_vd_cb(e){return new VoxelDataWorkerUtil(e)},net_disconnected_cb:function net_disconnected_cb(){return false}})})}},{"../common/globals":41,"../common/voxel_data_common.js":45,"../glov/client/webfs":53,"../glov/common/util":58,"../glov/common/verify":59,"../glov/common/vmath":60,"./continent":8,"./light_calc":15,"./mesh_calc":22,"./palette":24,"./proc_gen":27,"./proc_gen_biomes":28,"./task_sched_worker":36,"./tiles":37,"./voxel_data_xraw":39,assert:void 0}],24:[function(e,r,a){"use strict"
a.paletteGet=paletteGet
a.paletteRange=paletteRange
a.generateSwapKey=generateSwapKey
a.paletteSwap=paletteSwap
a.paletteGetOrLoad=paletteGetOrLoad
a.paletteSetMeshReloadCallback=paletteSetMeshReloadCallback
a.paletteStartup=paletteStartup
var l=e("assert")
var t=e("../glov/client/filewatch").filewatchOn
var i=e("../glov/client/webfs")
var v=i.webFSExists
var _=i.webFSGetFile
var n=i.webFSOnReady
var f=e("../glov/common/util").clone
var s=e("../glov/common/verify")
var o=e("../glov/common/vmath").vec4
var u=e("./context").contextDebug
var c=e("./materials")
var d=c.INV_MATERIAL_NAME
var h=c.MATERIAL_CLASS
var p=c.MaterialClass
var g=e("./palette/ranges.json")
var m=e("./tiles")
var E=m.setMetalTints
var T=m.tileMapIdentityTinted
var S={}
function paletteGet(e){return S[e]}function swapKeyToNameAndSwaps(e){var r=e.split(";")
if(r.length>1){var i={}
r.slice(1).forEach(function(e){var r=e.split(","),a=r[0],t=r[1]
i[a]=t})
return[r[0],i]}return[e,null]}var A=o(1,0,1,1)
function paletteLoad(e){var r=_(e+".pal")
var a=r.length/3
var t=new ArrayBuffer(3*a*4)
var i=[A]
for(var n=0;n<a;++n){var o=new Float32Array(t,12*n,3)
for(var s=0;s<3;++s)o[s]=r[3*n+s]/255
i.push(o)}var v=g[e]||g.by_prefix[e.split("_")[0]]
if(v){i.tile_map=T(v.unlit||256,a)
var l=v.shiny
for(var f=0;f<l.length;++f){var u=l[f]
for(var c=u[0];c<=u[1];++c)i.tile_map.tile_override[c]=61}}S[e]=i}function paletteRange(e,r,a){if(!r)return null
var t=g[r]
if(t)return[S[t[0]],t[1],t[2]]
if("string"===typeof r){if(!(e=S[r])&&v(r+".pal")){paletteLoad(r)
e=S[r]}if(!e&&a&&v("generic_"+a+".pal"))if(!(e=S[r="generic_"+a])){paletteLoad(r)
e=S[r]}if(e)return[e,1,255]}if(u())l(false,"Missing palette range for "+JSON.stringify(r))
return null}function doSwap(e,r,a){if(s(r&&a)){var t=a[0]
var i=a[1]
for(var n=r[1];n<=r[2];++n){var o=i+n-r[1]
e[n]=t[o]
if(t.tile_map)e.tile_map.tile_override[n]=t.tile_map.tile_override[o]}}}function generateSwapKey(e,r){var a=e
var t=[]
for(var i in r)t.push(i+","+r[i])
t.sort()
if(t.length)a+=";"+t.join(";")
return a}function paletteSwap(e,r){var a=generateSwapKey(e,r)
if(S[a])return a
l(e)
var t=S[e]
l(t)
var i=t.slice(0)
i.tile_map=f(t.tile_map)
for(var n in r){var o=r[n]
var s=paletteRange(t,n)
var v=void 0
if(g[o])v=paletteRange(t,o)
else v=paletteRange(t,n+"_"+o,o)
doSwap(i,s,v)}S[a]=i
return a}function paletteGetOrLoad(e){var r=S[e]
if(r)return r
var a=swapKeyToNameAndSwaps(e),t=a[0],i=a[1]
if(i)paletteSwap(t,i)
else paletteLoad(e)
r=S[e]
l(r)
return r}var R
function paletteSetMeshReloadCallback(e){R=e}function paletteReload(){for(var e in S)if(!e.includes(";"))paletteLoad(e)
for(var r in S){var a=swapKeyToNameAndSwaps(r),t=a[0],i=a[1]
if(i){delete S[r]
paletteSwap(t,i)}}E(paletteGet("metal_tints"))
if(R)R()}function preprocessRanges(){for(var e in g)if(e.startsWith("MAT_")){var r=e.slice(4)
if(d[r])g[d[r]]=g[e]}for(var a in d){var t=d[a]
var i=h[t]
var n=p[i]
if(!i||!n)continue
n=n.toLowerCase()
var o=g[n]
if(!o)continue
var s=n+"_"+a.toLowerCase()
if(!v(s+".pal"))continue
if(!S[s])paletteLoad(s)
g[t]=[s,o[1],o[2]]}}function paletteStartup(){t(".pal",paletteReload)
n(function(){preprocessRanges()
paletteLoad("material")
paletteLoad("plant")
paletteLoad("character")
paletteLoad("metal_tints")
E(paletteGet("metal_tints"))})}},{"../glov/client/filewatch":48,"../glov/client/webfs":53,"../glov/common/util":58,"../glov/common/verify":59,"../glov/common/vmath":60,"./context":7,"./materials":20,"./palette/ranges.json":25,"./tiles":37,assert:void 0}],25:[function(e,r,a){r.exports={skin:["character",233,240],hair:["character",241,244],eyes:["character",246,248],armor:["character",224,232],leather:["character",189,192],bones:["character",169,172],hollow:["character",165,168],detail:["character",161,164],metal:["material",1,8],generic:["character",185,188],metal_secondary:["character",229,232],metal_primary:["character",225,228],metal_detail:["character",221,224],torso_secondary:["character",213,216],torso_primary:["character",209,212],arms_secondary:["character",205,208],arms_primary:["character",201,204],legs_secondary:["character",197,200],legs_primary:["character",193,196],detail_secondary:["character",189,192],detail_primary:["character",185,188],MAT_LIGHT_WOOD:["material",89,96],MAT_RED_WOOD:["material",97,104],MAT_DARK_WOOD:["material",105,112],MAT_WOOD:["material",81,88],MAT_ANY:["material",81,88],MAT_FLINT:["material",57,64],MAT_ROCK:["material",57,64],MAT_STONE:["material",73,80],MAT_FANCY_STONE:["material",65,72],MAT_GOLD:["material",1,8],MAT_IRON:["material",9,16],MAT_REGULAR:["material",9,16],MAT_AETHERSTEEL:["material",17,24],MAT_SUPER:["material",17,24],dry:["plant",0,250],MAT_ANY_INGREDIENT:["plant",7,8],MAT_BREAD:["material",86,87],MAT_RED_BERRY:["plant",51,52],MAT_BLUE_BERRY:["plant",55,56],MAT_YELLOW_BERRY:["plant",64,65],MAT_BROWN_MUSHROOM:["plant",3,4],MAT_LUMINESCENT_MUSHROOM:["plant",249,250],MAT_RED_MUSHROOM:["plant",52,53],MAT_CORAL_MUSHROOM:["plant",52,53],MAT_LABEL:["plant",26,27],MAT_HOT:["plant",52,53],MAT_PUNGENT:["plant",53,54],MAT_SAVORY:["plant",69,70],MAT_CARROT:["plant",34,35],MAT_PUMPKIN:["plant",83,84],MAT_TOMATO:["plant",57,58],MAT_CORN:["plant",54,55],MAT_STARFISH:["plant",34,35],MAT_ANEMONE:["plant",55,56],MAT_RED:["plant",51,52],MAT_ORANGE:["plant",34,35],MAT_YELLOW:["plant",64,65],MAT_GREEN:["plant",12,13],MAT_BLUE:["plant",55,56],MAT_PURPLE:["plant",69,70],plant:{shiny:[[233,240]],unlit:249},character:{shiny:[[217,232]],unlit:249},material:{shiny:[[1,40],[221,223]],unlit:249},by_prefix:{metal:{shiny:[[1,8]]}}}},{}],26:[function(e,r,a){"use strict"
a.create=create
function FastPriorityQueue(){this.array=[]
this.size=0}FastPriorityQueue.prototype.add=function(e){var r=this.size
this.array[this.size]=e
this.size+=1
var a
var t
while(r>0){t=this.array[a=r-1>>1]
if(e.score>=t.score)break
this.array[r]=t
r=a}this.array[r]=e}
FastPriorityQueue.prototype._percolateUp=function(e,r){var a=this.array[e]
var t
var i
while(e>0){i=this.array[t=e-1>>1]
if(!r&&!(a.score<i.score))break
this.array[e]=i
e=t}this.array[e]=a}
FastPriorityQueue.prototype._percolateDown=function(e){var r=this.size
var a=this.size>>>1
var t=this.array[e]
var i
var n
var o
while(e<a){o=this.array[i=1+(e<<1)]
if((n=i+1)<r)if(this.array[n].score<o.score){i=n
o=this.array[n]}if(!(o.score<t.score))break
this.array[e]=o
e=i}this.array[e]=t}
FastPriorityQueue.prototype._removeAt=function(e){if(e>this.size-1||e<0)return
this._percolateUp(e,true)
return this.pop()}
FastPriorityQueue.prototype.remove=function(e){for(var r=0;r<this.size;r++)if(this.array[r]===e){this._removeAt(r)
return true}return false}
FastPriorityQueue.prototype.pop=function(){if(0===this.size)return
var e=this.array[0]
if(this.size>1){this.array[0]=this.array[--this.size]
this._percolateDown(0)}else--this.size
return e}
function create(){return new FastPriorityQueue}},{}],27:[function(e,r,a){"use strict"
a.setFlatOreType=setFlatOreType
a.getFlatOreType=getFlatOreType
a.seedWorld=seedWorld
a.onZMap=onZMap
a.renderDetail=renderDetail
a.oreLowestStoneTier=oreLowestStoneTier
a.oreFromChunkPos=oreFromChunkPos
a.stoneTierFromPos=stoneTierFromPos
a.deepestOreFromWorldPos=deepestOreFromWorldPos
a.handleHexomeChoices=handleHexomeChoices
a.gen=gen
a.startup=startup
a.getVerticalSliceMapData=a.initPhase40=void 0
var Ee=e("assert")
var o=e("../glov/client/rand_fast").randSimpleSpatial
var t=e("../glov/common/rand_alea").mashString
var i=e("../glov/common/util")
var Q=i.clamp
var J=i.lerp
var s=i.mod
var n=e("../glov/common/vmath")
var v=n.ivec3
var $=n.unit_vec
var l=n.v2distSq
var f=n.v2normalize
var u=n.v2sub
var c=n.v3addScale
var _=n.v3copy
var Te=n.v3set
var d=n.vec1
var h=n.vec2
var E=n.vec3
var p=n.vec4
var g=e("../common/globals")
var Se=g.CHUNK_SIZE
var Ae=g.CS2
var m=g.ID2
var T=g.ID_FACTOR
var S=g.MEGACHUNK_SIZE
var A=e("../common/materials_common").Mat
var R=e("../common/voxel_data_common")
var Re=R.VoxelDataBase
var O=R.ZMAP_UNDERGROUND
var I=R.ZMAP_UNKNOWN
var y=R.ZMap
var Oe=R.voxel_data_mem_tracker
var b=e("./biome_details")
var w=e("./continent").continentSeed
var D=e("./line2d").ptLineDistSq
var ee=e("./proc_gen_biomes")
var N=e("./proc_gen_biomes")
var Ie=N.biome_noise
var re=N.calcBlendWeightsVS
var L=N.choiceDataSet
var M=N.getElevationEstimate
var ae=N.getParam
var ye=N.getVerticalSlice
var te=N.getVerticalSliceById
var P=N.getVerticalSliceWorldPos
var be=N.initPhase60
var we=N.worldStoneType
var ie=N.world_noise
var C=e("./proc_gen_constants")
var De=C.PROP_1x1x1
var ne=C.SNOW_ELEVATION
var oe=C.SNOW_VARIATION
var k=e("./proc_gen_details")
var x=k.detailGenGetHighest
var Ne=k.detailGenLocal
var U=k.detailGenSeed
var F=k.detailStartup
var G=e("./proc_gen_hydro")
var se=e("./proc_gen_hydro").initPhase37
var B=e("./proc_gen_shared")
var Le=B.intNoise
var Me=B.phase_counts
var Pe=B.phase_timing
var Ce=e("./rand_seed")
var H=e("./stone_tiers")
var W=H.ORE_DISTRO
var V=H.ORE_FREQ
var q=H.STONE_TIER_DEPTH
var z=H.STONE_TIER_DISTRO
var j=e("./tiles")
var Y=j.TILE_INTANGIBLE
var K=j.TILE_NON_OPAQUE
var ke=j.TILE_PROP_BASE
var ve=j.TILE_SNOW
var Z=j.TILE_STONE
var xe=j.TILE_WATER
var le=Math.ceil,X=Math.floor,fe=Math.max,Ue=Math.min,ue=Math.PI,ce=Math.round,_e=Math.sqrt,de=Math.tan,he=Math.atan2
var pe=10
var ge=1
var me=3
var Fe=20
var Ge=.05
var Be=.2
var He=1.57
var We=110
var Ve=.005
var qe=.01
var ze
var je=true
var Ye
var Ke=A.GOLD
function setFlatOreType(e,r){Ke=e
null==r||r()}function getFlatOreType(){return Ke}function seedWorld(e){je="flat"===e.world_type
Ye=t("ore"+e.seed)
ee.seedWorld(e)
b.seedWorld(e)
G.seedWorld(e)
w(e)
U(e)
ze={}}var Ze=3e4
var Xe
function cleanupExtraChunks(){profilerStart("cleanupExtraChunks")
Xe=null
var e=Date.now()-Ze
var r=true
for(var a in ze)if(ze[a].alloc_time<e)delete ze[a]
else r=false
if(!r)extraChunkCleanupSchedule()
profilerStop("cleanupExtraChunks")}function extraChunkCleanupSchedule(){Xe=setTimeout(cleanupExtraChunks,Ze/2)}function seedPlants(e){return e.seed+1007}var Qe=-3
var Je=10
var $e=.1
var er=-1
var rr=-1
var ar=function(){var g=E()
var m=[]
return function pathDistFn(e,r){var a=-Infinity
var t=0
var i=0
var n=0
er=rr=-1
for(var o=0;o<r.length;++o){var s=r[o]
for(var v=0;v<s.length-1;++v){var l=m[n]
if(!l)l=m[n]=E()
var f=s[v]
var u=s[v+1]
D(l,f,u,e)
var c=J(l[0],f[4],u[4])
l[1]=c-_e(l[1])
if(l[1]>a){a=l[1]
t=l[2]=J(l[0],f[2],u[2])
i=c;++n
er=o
rr=v}else if(l[1]>a-Je){l[2]=J(l[0],f[2],u[2]);++n}}}if(n&&a<Qe){var _=t=0
var d=a-Je
while(n){var h=m[--n]
var p=h[1]-d
if(p>0){t+=(p*=$e)*h[2]
_+=p}}t/=_}Te(g,a,t,i)
return g}}()
var tr=function(){var o=p()
var s=h()
return function pathDirfn(e,r){if(-1===er)return o
var a=r[er]
var t=a[rr]
var i=a[rr+1]
var n=l(t,e)
u(s,i,t)
f(s,s)
o[0]=he(s[0],s[1])
o[1]=n
o[2]=t[0]
o[3]=t[1]
return o}}()
var ir=.5*(He-Be)
var nr=.5*(Be+He)
var or=function(){var q=h()
var z=E()
var j=d()
var Y=[0,1,T,T+1]
var K=new Array(Se*Se)
var Z=new Array(Se*Se)
var X={}
X.pos_world=h(0,0)
X.dir=h(0,0)
return function initPhase40fn(e){if(e.phase>=40)return;++Me[40]
var r=Date.now()
e.phase=40
var a=[]
for(var t=0;t<e.hexomes_cont_mid.length;++t){var i=e.hexomes_cont_mid[t]
se(i)
if(i.hydro_paths)a=a.concat(i.hydro_paths)}var n={}
var o=0
for(var s=0;s<Y.length&&o<=1;++s){var v=te(e.vsid+Y[s]).origin_hexomes
for(var l=0;l<v.length;++l){var f=v[l]
if(n[f.uid])continue
n[f.uid]=true
o++}}if(1===o){Ee.equal(e.origin_hexomes.length,1)
e.hexomes=e.origin_hexomes
e.blend_primary_hexome=e.hexomes[0]
e.blend_weights=$
e.hexomes_noisy=e.origin_hexomes
e.blend_primary_hexome_noisy=e.hexomes_noisy[0]
e.blend_weights_noisy=$
e.single_hexome=true}var u=e.blend_primary_hexome.water_level
Ee(!e.map)
e.map=new Array(Se)
e.max_z=-Infinity
e.max_solid_z=-Infinity
var c=0
for(var _=0;_<Se;++_){q[1]=_
var d=e.map[_]=new Array(Se)
for(var h=0;h<Se;++h){var p=d[q[0]=h]={}
re(e,q,true)
K[c]=e.blend_primary_hexome_noisy.params.local_func
var g=e.blend_pos_world
var m=ce(ee.getElevation(e))
p.h=m
p.base=e.last_base_elevation
p.surface=ae(e,null,"surface",true)
var E=fe(0,ce(ae(e,j,"surface_depth",true)[0]))
p.ground=ae(e,null,"ground",false)
ae(e,z,"ground_depth",true)
var T=.5+.5*ie[3].noise2D(g[0]*qe,g[1]*qe)
var S=.5+.5*ie[3].noise2D(g[0]*Ge,g[1]*Ge)
var A=ne+S*oe
if(p.h>A){p.surface=ve
E=ge+ce(me*Ue(1,(p.h-A)/Fe))}p.surface_h=m-E
p.ground_h=p.surface_h-fe(0,ce(z[0]+z[1]*T))
p.water_level=u
var R=ar(g,a)
var O=p.hydro_pen=R[0]
var I=nr+ir*ie[4].noise2D(g[0]*Ve,g[1]*Ve)
var y=0
if(O>0){var b=1-Ue(O/15,1)
I=b*I+(1-b)*Be}else{y=Q(-O/We*1.2-.2,0,1)
I=J(y,I,He)}var w=de(I)
var D=le(O*w)
var N=ce(R[1])-1
var L=fe(N,u)
var M=L-D
var P=Z[c]=void 0
if(e.blend_primary_hexome_noisy.river_mouth){var C=tr(g,a)
X.pos_world=g
X.dir=C
var k=fe(60-2*(p.surface_h-u),0)
if(P=Q(k/60,0,1)){var x=P
if(P<.5)x=0
var U=12
var F=Q(R[2]-O,0,U)/U
var G=x*ee.riverDeltaHeight(X)
M=ce(fe(G*=F,-1)+(L-D*(1.1-P)))}}if(D>=0){if(L>u){p.water_level=L
p.h=M}else if(p.h>M){p.h=M
if(e.blend_primary_hexome_noisy.river_mouth&&P)Z[c]=ee.riverDeltaSmoothNoise}}else{if(-(O+.5)<pe)if(e.blend_primary_hexome_noisy.river_mouth&&P)Z[c]=ee.riverDeltaSmoothNoise
I=J(y,I=.25*(I+3*ue/4),He)
var B=de(I)
var H=Ue(N,ce(N+1+(O+.5)*B))
if(p.h<H&&L>u)p.h=H
else if(M<p.h)p.h=M}e.max_z=fe(e.max_z,p.water_level,p.h)
e.max_solid_z=fe(e.max_solid_z,p.h)
c++}}for(var W=c=0;W<Se;++W)for(var V=0;V<Se;++V){if(K[c])K[c](e,V,W)
if(Z[c])Z[c](e,V,W)
c++}e.max_z++
e.max_solid_z++
Pe[40]+=Date.now()-r}}()
a.initPhase40=or
var sr
function onZMap(e){sr=e}function renderDetail(e){if(!e.rendered){e.rendered=true
e.vd=e.detail_type.gen(e)
Ee(e.vd)
_(e.size,e.vd.size)}}var vr=function(){var a=h()
return function getVerticalSliceMapDataFn(e){var r=P(e)
u(a,e,r.pos_world)
or(r)
return r.map[a[1]][a[0]]}}()
a.getVerticalSliceMapData=vr
function oreLowestStoneTier(e){var r=W.indexOf(e)
if(-1===r)return-1
for(var a=0;a<z.length;++a)if(-1!==z[a][1].indexOf(r)){var t=z[a][0]
if(t<0)return 0
var i=q.indexOf(t)
Ee(-1!==i)
return i+1}return-1}var lr=E()
var fr=E(Se/2,Se/2,0)
function oreFromChunkPos(e){if(je){if(-1===Ke)return W[s(e[0]+e[1]+e[2],W.length-1)+1]
return Ke}var r=o(Ye,ce(e[0]*V),ce(e[1]*V),0)
c(lr,fr,e,Se)
var a=M(lr)-lr[2]
var t=0
while(a>z[t+1][0])++t
var i=z[t][1]
var n=X(r*i.length)
if(n===i.length)--n
return W[i[n]]}function stoneTierFromPos(e){if(je)return 0
var r=M(e)-e[2]
var a=0
while(r>=q[a])++a
return a}function deepestOreFromWorldPos(e){var r=stoneTierFromPos(e)
var a=0
for(var t=0;t<=r;++t){var i=z[t][1]
for(var n=0;n<i.length;++n)a=a<i[n]?i[n]:a}return a}function liquidStableEstimate(e){var a=e.data,t=e.liquid
function solid(e){if(t[e])return true
var r=a[e]
if(r&&r<Y)return true
return false}var r=0
for(var i=0;i<16;++i)for(var n=0;n<16;++n)for(var o=0;o<16;++o,++r){if(!t[r])continue
if(o>0&&!solid(r-1))return false
if(o<15&&!solid(r+1))return false
if(n>0&&!solid(r-16))return false
if(n<15&&!solid(r+16))return false
if(i>0&&!solid(r-256))return false}return true}function handleHexomeChoices(e){for(var r=0;r<e.length;++r){var a=e[r]
for(var t in a)L(t,a[t])}}function liquidQuickUpdate(e){var r=e.data
var a=e.liquid
if(!r||!a)return
for(var t=0;t<Se;++t)for(var i=0;i<Se;++i){var n=i+t*Se
var o=-1
for(var s=0;s<Se;++s){var v=n+s*Ae
if(a[v]){if(-1!==o){a[o]=a[v]
a[v]=0
o+=Ae}}else if(!r[v]){if(-1===o)o=v}else o=-1}}}function topTile(e){if(e.h>e.surface_h)return e.surface
if(e.h>e.ground_h)return e.ground
return Z}var ur=function(){var ge=E()
var me=Ce.createFast(0)
return function initPhase90fn(e){var r=Date.now();++Me[90]
var a=new Re(e.pos[0],e.pos[1],e.pos[2],e.chunk_id,null,Oe)
var t=a.pos_world
var i=ye(a.pos)
be(i)
var n=t[2]
me.reseed(a.chunk_id+i.seed)
if(n<=i.max_z){var o=false
var s=n+Se
var v=i.map
var l=true
var f=true
Ee(!a.data)
var u=null
for(var c=0;c<Se;++c){var _=v[c]
for(var d=0;d<Se;++d){var h=_[d]
var p=h.h,g=h.surface,m=h.surface_h,E=h.ground,T=h.ground_h,S=h.water_level
if(n>p&&n>S){if(n===p+1)o=true
f=l=false
continue}if(s>=p)o=true
if(!u){a.alloc()
u=a.data}if(S>p)if(!a.liquid)a.alloc(true)
var A=c*Se+d
for(var R=0;R<Se;++R){var O=n+R
if(O>p&&O>S){f=l=false
break}var I=void 0
var y=false
if(O>p){I=xe
y=true
l=false}else if(O>m)I=g
else if(O>T)I=E
else{var b=me.random()
I=we(t[0]+d,t[1]+c,O+5*b-2.5)}if(y)a.liquid[A]=I
else u[A]=I
A+=Ae}}}if(o){var w=i.plants
var D=Ce.createGood(seedPlants(i))
for(var N=0;N<w.length;++N){var L=w[N],M=L.weight,P=L.plant
var C=P.id,k=P.freq,x=P.over,U=P.chance,F=P.offs,G=P.attr1,B=P.attr2,H=P.attr3_list,W=P.size
if(!W)W=De
var V=P.min
var q=P.max
var z=V+Le(Ie[0],i.pos_world,k,F,q-V+1)
if(z<=0)continue
U*=M
var j=W[0]
var Y=W[1]
var K=W[2]
e:for(var Z=0;Z<z;++Z){if(D.random()>U)continue
var X=D.range(Se-j+1)
var Q=D.range(Se-Y+1)
var J=D.range(4)
var $=H?H[D.range(H.length)]:void 0
var ee=Infinity
for(var re=0;re<Y;++re)for(var ae=0;ae<j;++ae){var te=v[Q+re][X+ae].h
ee=Ue(ee,te)}if(ee<n-1||ee+K>=s)continue
if(!(X&&v[Q][X-1].h===ee||Q&&v[Q-1][X].h===ee||X<Se-j&&v[Q][X+j].h===ee||Q<Se-Y&&v[Q+Y][X].h===ee))continue
ee++
if(!u){a.alloc()
u=a.data}Te(ge,X,Q,ee-n)
var ie=ge[2]*Ae+ge[1]*Se+ge[0]
for(var ne=0;ne<K;++ne)for(var oe=0;oe<Y;++oe)for(var se=0;se<j;++se){var ve=ie+se+oe*Se+ne*Ae
if(u[ve]||a.liquid&&a.liquid[ve])continue e}for(var le=0;le<Y;++le)for(var fe=0;fe<j;++fe)if(topTile(v[Q+le][X+fe])!==x)continue e
if(!a.props)a.props={}
a.props[ie]={id:C,rot:J,attr1:G,attr2:B,attr3:$,size:W}
for(var ue=0;ue<K;++ue)for(var ce=0;ce<Y;++ce)for(var _e=0;_e<j;++_e)u[ie+_e+ce*Se+ue*Ae]=ke+_e+ce+ue}}}a.full=l
if(a.liquid)a.liquid_stable=f||liquidStableEstimate(a)}Ne({vd:a,vs:i,non_spatial_rand:me})
var de=a.props
if(de)for(var he in de){var pe=de[he]
Ee(pe.size)
Ee(pe.size[0]&&pe.size[1]&&pe.size[2])
pe.proc_genned=true}if(a.liquid)liquidQuickUpdate(a)
Pe[90]+=Date.now()-r
return a}}()
var cr=v()
function calcZMap(e,r){++Me.zm
var a=Date.now()
var t=new y
var i=t.data
var n=e.max_solid_z
cr[0]=e.pos_world[0]
cr[1]=e.pos_world[1]
cr[2]=n
n=fe(n,x(cr))
var o=X((n+Se-1)/Se)
var s=X(e.max_solid_z/Se)-8
var v={}
var l=(v[r.pos[2]]=r).pos[0]+r.pos[1]*T
for(var f=0;f<Ae;++f){var u=I
e:for(var c=o;c>s;--c){var _=v[c]
if(!_){_=v[c]=ur({pos:[r.pos[0],r.pos[1],c],chunk_id:l+c*m});(ze[_.chunk_id]=_).alloc_time=a
if(!Xe)extraChunkCleanupSchedule()}var d=_.data
if(!d)continue
for(var h=Se-1;h>=0;--h){var p=d[f+h*Ae]
if(!p)continue
if(p<=K){u=c*Se+h
break e}}}i[f]=u}sr(e.vsid,t)
Pe.zm+=Date.now()-a}function gen(e){var r=ze[e.chunk_id]
if(r){delete ze[e.chunk_id]
return r}var a=Date.now();++Me[100]
r=ur(e)
if(sr&&!e.has_zmap){var t=ye(r.pos)
if(!t.have_zmap)if(r.pos[2]>t.max_solid_z/Se+S/2);else if(r.pos[2]>t.max_solid_z/Se-S/2){t.have_zmap=true
calcZMap(t,r)}else if(!t.have_zmap_prelim){t.have_zmap_prelim=true
sr(t.vsid,O)}}Pe[100]+=Date.now()-a
return r}function startup(){ee.startup()
F()}},{"../common/globals":41,"../common/materials_common":43,"../common/voxel_data_common":45,"../glov/client/rand_fast":52,"../glov/common/rand_alea":57,"../glov/common/util":58,"../glov/common/vmath":60,"./biome_details":4,"./continent":8,"./line2d":16,"./proc_gen_biomes":28,"./proc_gen_constants":29,"./proc_gen_details":30,"./proc_gen_hydro":31,"./proc_gen_shared":32,"./rand_seed":34,"./stone_tiers":35,"./tiles":37,assert:void 0}],28:[function(a,e,n){"use strict"
n.setLODMode=setLODMode
n.procGenDoLODs=procGenDoLODs
n.riverDeltaHeight=riverDeltaHeight
n.riverDeltaSmoothNoise=riverDeltaSmoothNoise
n.flushVerticalSlices=flushVerticalSlices
n.worldStoneType=worldStoneType
n.sampleUniformNoise3D=sampleUniformNoise3D
n.seedWorld=seedWorld
n.choiceDataSet=choiceDataSet
n.onHexomeChoice=onHexomeChoice
n.getHexome=getHexome
n.getHexomeExact=getHexomeExact
n.getContinentIDsForPos=getContinentIDsForPos
n.BlendWeightContext=BlendWeightContext
n.calcBlendWeightsVS=calcBlendWeightsVS
n.VerticalSlice=VerticalSlice
n.getVerticalSliceById=getVerticalSliceById
n.getVerticalSlice=getVerticalSlice
n.getVerticalSliceWorldPos=getVerticalSliceWorldPos
n.getParam=getParam
n.getElevationEstimate=getElevationEstimate
n.getChunkTintColor=getChunkTintColor
n.initPhase60=initPhase60
n.handleMC2DUnsub=handleMC2DUnsub
n.startup=startup
n.initPhase50=n.getVSElevAndTile=n.getVSTintColors=n.calcBlendWeights=n.getHexomeIDsFromChunkPos=n.getHexomeIDExact=n.rflow_cache=n.vertical_slices=n.getDetailsVersion=n.getElevation=n.RFLOW_UNDERWATER=n.NOISE_CUSTOM_IDX=n.NOISE_DETAIL_IDX=n.world_noise3D=n.world_noise=n.biome_noise=void 0
var Z=new Array(5)
n.biome_noise=Z
var v=new Array(10)
n.world_noise=v
var o=new Array(1)
n.world_noise3D=o
var r=5
n.NOISE_DETAIL_IDX=r
var t=6
n.NOISE_CUSTOM_IDX=t
var _=99
n.RFLOW_UNDERWATER=_
var X=a("assert")
var Q=a("./biome_details.js")
var i=a("./biome_types.js"),s=i.setupFlat,d=i.BIOMES,l=i.BIOME_BY_ID,c=i.BIOME_PARAM_TYPE,h=i.TYPE_ARR,p=i.TYPE_NON_INTERP
var J=a("./detail_gen_rendered.js").renderedDetailGen
var O=a("./context.js").contextThreadName
var f=a("./continent.js"),u=f.continentGet,g=f.continentGetID,m=f.continentGetIDs,E=f.continentReady
var T=a("../common/globals.js"),$=T.CHUNK_SIZE,ee=T.ID_FACTOR,re=T.ID2,I=T.MEGACHUNK_SIZE,ae=T.MEGACHUNK_VOXEL_SIZE
var S=a("../glov/client/hsv.js").hsvToRGB
var A=Math.abs,R=Math.ceil,C=Math.floor,te=Math.max,ie=Math.min,ne=Math.round,y=Math.sqrt,b=Math.cos,w=Math.sin
var D=a("./proc_gen.js")
var N=D.oreFromChunkPos
var L=a("./proc_gen_constants.js"),k=L.HEX_HEIGHT,oe=L.HEX_WIDTH,x=L.SKEW_X,M=L.C_WATER,P=L.C_PLAINS,U=L.C_HILLS,F=L.C_MOUNTAINS,G=L.SNOW_ELEVATION,B=L.SNOW_VARIATION,H=L.STONE_FREQ_XY,W=L.STONE_FREQ_Z,V=L.C_RIVER_DELTA
var q=a("./proc_gen_details.js").DETAILS_CURRENT_VERSION
var z=a("./proc_gen_shared.js")
var se=a("./rand_seed.js")
var j=a("../glov/common/rand_alea.js").mashString
var Y=a("simplex-noise")
var K=a("open-simplex-noise").makeNoise3D
var ve=a("./tiles.js")
var le=a("../glov/common/util.js"),fe=le.clamp,ue=le.isPowerOfTwo,ce=le.lerp,_e=le.nop,de=le.ridx
var he=a("../glov/common/vmath.js"),pe=he.vec2,ge=he.v2add,me=he.v2addScale,Ee=he.v2distSq,Te=he.v2set,Se=he.v2floor,Ae=he.v2scale,Re=he.v2sub,Oe=he.vec3,Ie=he.v3add,ye=he.v3sub,be=he.v3scaleFloor,we=he.unit_vec,De=he.zero_vec
var Ne=a("../common/waygate_common.js").FLAT_SEED_EMPTY
var Le=ve.NUM_STONES,Me=ve.STONES,Pe=ve.TILE_GRASS,Ce=ve.TILE_SNOW,ke=ve.TILE_WATER,xe=ve.TILE_DIRT,Ue=ve.TILE_STONE_DARK,Fe=ve.TILE_STONE_LIGHT,Ge=ve.TILE_STONE_RED,Be=ve.TILE_TINT_GRASS,He=ve.TILE_TINT_ORE,We=ve.MAT_METAL_TINT
var Ve=z.intNoise,qe=z.neighbor_id_offs,ze=z.phase_counts,je=z.phase_timing
var Ye
var Ke
var Ze
var Xe
var Qe
var Je
var $e
var er
n.getElevation=er
var rr
var ar
var tr
var ir
n.getDetailsVersion=ir
var nr=false
var or=1e-4
var sr=[.005,.25]
var vr=[25,7]
var lr
n.vertical_slices=lr
var fr
n.rflow_cache=fr
var ur
var cr
var _r
var dr=false
function setLODMode(){dr=true}var hr=true
function procGenDoLODs(){return hr}function sampleRidgeNoise(e,r,a,t){return 1-A(v[e].noise2D(a*r,t*r))}function sampleNoise(e,r,a,t){return v[e].noise2D(a*r,t*r)}function mountainsHeight(e){var r=e.pos_world[0]
var a=e.pos_world[1]
var t
t=50*sampleRidgeNoise(3,.005,r,a)
return(t+=5*sampleRidgeNoise(4,.02,r,a))-10}function spikyHeight(e){var r=e.pos_world[0]
var a=e.pos_world[1]
var t
t=sampleNoise(2,.05,r,a)
if((t-=5*sampleNoise(1,.01,r,a))>0){var i
var n
var o
n=10*sampleNoise(1,.05,r,a)
o=10*sampleNoise(2,.05,r,a)
i=sampleNoise(2,.05,r+=n,a+=o)
i-=5*sampleNoise(1,.01,r,a)
t*=A(i*i/2*sampleNoise(2,.005,r,a))}return t}function shallowsSpikyHeight(e){return spikyHeight(e)-20}function shallowsSpikyReef(e,r,a){var t=e.map[a][r]
e.pos_world[0]+=r
e.pos_world[1]+=a
if(shallowsSpikyHeight(e)>-15){if(getNeighbourCount(r,a,e,t.h)>.5){t.surface_depth=1
t.surface_h=t.h-1}}else{t.surface_depth=1
t.surface_h=t.h-1}e.pos_world[0]-=r
e.pos_world[1]-=a}var pr=pe(0,0)
function rotate(e,r){var a=e[0]
pr[0]=e[2]
pr[1]=e[3]
Re(r,r,pr)
var t=r[0]*b(a)-r[1]*w(a)
var i=r[0]*w(a)+r[1]*b(a)
return Te(pr,t,i)}var gr=pe()
var mr=pe()
function riverDeltaHeight(e){var r=e.pos_world[0]
var a=e.pos_world[1]
var t
t=15*sampleNoise(1,1/30,r,a)
a+=15*sampleNoise(2,1/30,r,a)
var i
mr[0]=r+=t
mr[1]=a
if(e.dir){(gr=rotate(e.dir,mr))[0]*=10
i=10*sampleNoise(3,.005,ce(.6,r,gr[0]),ce(.6,a,gr[1]))}else{i=10*sampleNoise(3,.005,r,a);--i}return i}function getNeighbourCount(e,r,a,t){var i=0
var n=9
for(var o=-1;o<=1;++o){if(r+o<0||r+o>$-1){n-=3
continue}var s=a.map[r+o]
for(var v=-1;v<=1;++v){var l=s[e+v]
if(0===v&&0===o||e+v<0||e+v>$-1){n--
continue}if(l.h===t)i++}}return i/n}function delta_kernel_func(e,r){if(r<e.h-1)--e.h
if(r>e.h+1)e.h+=1}function mountain_kernel_func(e,r,a,t){if(r===e.h&&e.surface!==Ce){e.surface_h=e.h-1
e.surface=a
e.ground_h=e.h-t}}function grassFire(e,r,a,t,i,n){var o=e[a][r].h
if(r>0)t(e[a][r-1],o,i,n)
if(r<$-1)t(e[a][r+1],o,i,n)
if(a>0)t(e[a-1][r],o,i,n)
if(a<$-1)t(e[a+1][r],o,i,n)}function riverDeltaSmoothNoise(e,r,a){grassFire(e.map,a,r,delta_kernel_func)}function grassyMountain(e,r,a){var t=e.map[a][r]
var i=e.pos_world[0]
var n=e.pos_world[1]
var o
var s
var v
if(t.surface!==Ce){var l=sampleRidgeNoise(3,1/80,i=e.pos_world[0]+r,n=e.pos_world[1]+a)
o=13*sampleRidgeNoise(1,.05,i,n)
s=10*sampleRidgeNoise(2,.05,i,n)
if((v=sampleRidgeNoise(3,.1,i+=o,n+=s))<.4&&l<.4){t.surface=Fe
t.surface_h=t.h-1}else if(v<.6&&l<.4){t.surface=Ue
t.surface_h=t.h-1}}var f=getNeighbourCount(r,a,e,t.h)
o=13*sampleRidgeNoise(1,1/30,i=e.pos_world[0]+r,n=e.pos_world[1]+a)
s=10*sampleRidgeNoise(2,1/30,i,n)
v=sampleRidgeNoise(3,1/30,i+=o,n+=s)
i=e.pos_world[0]
n=e.pos_world[1]
e.pos_world[0]=i+r
e.pos_world[1]=n+a
var u=mountainsHeight(e)
e.pos_world[0]=i
e.pos_world[1]=n
if(u<20&&v>.95&&f<.6&&t.surface!==Ce){t.surface_h=t.h-1
t.surface=Ge}if(f>.6&&t.surface!==Ce&&u<40){t.surface_h=t.h-1
t.ground_h=t.h-2
t.surface=xe
grassFire(e.map,r,a,mountain_kernel_func,xe,2)
if(f>.7&&t.h<G+50*(sampleRidgeNoise(1,1/30,e.pos_world[0]+r,e.pos_world[1]+a)-.5)){t.surface_h=t.h-1
t.ground_h=t.h-2
t.surface=Pe
grassFire(e.map,r,a,mountain_kernel_func,Pe,2)}}else if(f<.15&&t.surface===Ce){i=e.pos_world[0]+r
n=e.pos_world[1]+a
if(v>.6){t.surface_h=t.h
t.ground_h=t.h}}}function hexomeMountainSpireHeight(e){return e.w0*e.w0*e.w0*140}function cliffsHeight(e){var a=e.pos_world[0]
var t=e.pos_world[1]
function sample(e,r){return r[0]*(.5+.5*v[e].noise2D(a*r[1],t*r[1]))}var r=e.hexome
var i=ie(sample(0,[1,.025]),sample(1,[1,.025]))
return(.25+.25*r.biome_param)*(.5*r.cliff_height*i*i+.125*r.cliff_height*A(v[2].noise2D(a/16,t/16)))}function genericHeight(e){var r=e.hexome,a=e.pos_world
var t=r.params.noise_weights
var i=r.params.noise_periods
var n=0
for(var o=0;o<t.length;++o){var s=t[o]
if(s)n+=s*(.5+.5*v[o].noise2D(a[0]*i[o],a[1]*i[o]))}return n}function hexomeHillHeight(e){return genericHeight(e)+40*e.w0}var Er={genericHeight:genericHeight,mountainsHeight:mountainsHeight,cliffsHeight:cliffsHeight,grassyMountain:grassyMountain,riverDeltaHeight:riverDeltaHeight,riverDeltaSmoothNoise:riverDeltaSmoothNoise,spikyHeight:spikyHeight,shallowsSpikyHeight:shallowsSpikyHeight,shallowsSpikyReef:shallowsSpikyReef,hexomeHillHeight:hexomeHillHeight,hexomeMountainSpireHeight:hexomeMountainSpireHeight}
function VeriticalSlices(){}function flushVerticalSlices(){n.vertical_slices=lr=new VeriticalSlices}function worldStoneType(e,r,a){var t=o[0](e*H,r*H,a*W)
return Me[fe(C(t*Le),0,Le-1)]}var Tr=new Float32Array([0,.001349,.001349,.008905,.010254,.027101,.037364,.05666,.094024,.083166,.17719,.099867,.277057,.109412,.386469,.114112,.500581,.114131,.614712,.108271,.722983,.099347,.82233,.082007,.904337,.05668,.961017,.028057,.989074,.009402,.998476,.001524])
var Sr=16
function sampleUniformNoise3D(e,r,a){var t=o[0](e,r,a)
if((t=te(0,t*Sr))>=Sr)return 1
var i=C(t)
var n=t-i
return Tr[2*i]+Tr[2*i+1]*n}function getDetailsVersionCurrent(){return q}function getDetailsVersion0(){return 0}function makeNoise3DNormal(e){var t=K(e)
return function(e,r,a){return fe(.5+.58*t(e,r,a),0,1)}}function Hexomes(){}function seedWorld(e){X(e&&e.seed&&e.world_type)
Xe=e.seed
Qe=e.world_type
flushVerticalSlices()
ur=new Hexomes
_r={}
cr={}
n.rflow_cache=fr={}
hr=true
switch(Qe){case"v1":Je=hexomeInitV1
$e=hexomeInitAfterBiomeTypeV1
n.getElevation=er=tr
rr=getElevationEstimateV1
ar=getBiomeTypeV1
n.getDetailsVersion=ir=getDetailsVersionCurrent
break
default:console.error("Unknown world type: "+Qe+", using flat")
case"flat":if(Xe===Ne){Je=hexomeInitEmpty
hr=false}else Je=hexomeInitFlat
$e=_e
n.getElevation=er=getElevationFlat
rr=getElevationFlat
ar=getBiomeTypeFlat
n.getDetailsVersion=ir=getDetailsVersion0
s(Xe)}var r="pc"+e.seed
for(var a=0;a<Z.length;++a)Z[a]=new Y(""+r+a+"biome")
for(var t=0;t<v.length;++t)v[t]=new Y(""+r+t+"world")
for(var i=0;i<o.length;++i)o[i]=makeNoise3DNormal(j(""+r+i+"world"))}function choiceDataSet(e,r){cr[e]=r}function hexomeInitEmpty(e){e.elevation=d.FLAT.fixed_elev
e.water_level=e.elevation}function hexomeInitFlat(e){e.elevation=d.FLAT.fixed_elev
e.water_level=-1}function hexomeInitV1(e){var r=m(e.hx,e.hy)
e.continent=u(r.cid)
var a=e.cont_idx=r.idx
e.cont_elevation=e.continent.getElevation(a)
e.slopes=e.continent.getSlopes(a)
e.humidity=e.continent.getHumidity(a)
e.cdist=e.continent.getCoastDistance(a)
e.water_level=e.continent.getWaterLevel(a)
e.classif=e.continent.getClassif(a)
e.river_bits=e.continent.getRiver(a)
e.rflow_dir=e.continent.getFlowDir(a)
e.rflow_amt=e.continent.getFlowAmount(a)
if(!e.river_bits&&7!==e.rflow_dir){e.rflow_dir=-1
e.rflow_amt=0}}function hexomeInitAfterBiomeTypeV1(e,r){e.elevation=e.cont_elevation
e.biome_param=r.random()
if(e.type===d.CLIFFS){var a=e.continent.getMinElev(e.cont_idx)
e.cliff_height=e.cont_elevation-a
e.elevation=a}}function getBiomeTypeFlat(e,r){return d.FLAT}var Ar=1
var Rr=.25
var Or=.03
function weightedChoiceBuild(e){var r=0
for(var a=0;a<e.length;++a)r+=e[a][0]
return{total:r,list:e}}function weightedChoiceGet(e,r){var a=e.total,t=e.list
var i=a*r
for(var n=0;n<t.length;++n)if((i-=t[n][0])<=0)return t[n][1]
return t[0][1]}var Ir=weightedChoiceBuild([[Ar,"DENSE_FOREST"],[Rr,"PLAINS_FOREST"],[Rr,"PLAINS_FOREST_SPIKY"],[Or,"FOREST_RUIN"],[Or,"FOREST_MEGA_TREE"]])
var yr=weightedChoiceBuild([[Ar,"PLAINS_FOREST"],[Rr,"PLAINS"],[Rr,"PLAINS_WITH_BERRIES"]])
var br=weightedChoiceBuild([[Ar,"PLAINS"],[Or,"PLAINS_BLUE_V3"],[Or,"PLAINS_RED_V2"],[Or,"PLAINS_YELLOW"],[Or,"HILLS"]])
var wr=weightedChoiceBuild([[Ar,"MOUNTAINS"],[Rr,"SNOW_PINE_MOUNTAINS"],[Or,"MOUNTAINS_FLOATY_ROCKS"]])
function getBiomeTypeV1(e,r){var a=e.cont_elevation,t=e.slopes,i=e.humidity,n=e.cdist,o=e.classif,s=e.river_bits
if(o===M){if(A(a-e.water_level)<20)return d.SHALLOWS_SPIKY
return d.OCEAN}if(o===V)return d.RIVER_DELTA
var v=s&&ue(s)
var l=t[3]
if(l>.6&&n<.01)return d.CLIFFS
var f
if(o===F)if(l>.12||a<G)f=weightedChoiceGet(wr,r)
else f="TUNDRA"
else if(o===U)if(i>.66)f="HILLS_FOREST"
else f="HILLS"
else if(o===P)if(i>.75)f=weightedChoiceGet(Ir,r)
else if(i>.5)f=weightedChoiceGet(yr,r)
else if(i>.25)f=weightedChoiceGet(br,r)
else f="DESERT"
else X(0)
X(d[f])
if(v&&d[f+"_SPRING"])f+="_SPRING"
return d[f]}function rangeOrValue(e,r){if("number"!==typeof r&&r.length)return e.floatBetween(r[0],r[1])
return r}var Dr=0
var Nr=se.createGood(0)
function Hexome(e,r,a){var t=ne(e/ee)
var i=e-t*ee
if(t!==a||i!==r)X(false,"Unexpected Hexome("+e+", "+r+", "+a+") !== "+i+","+t)
this.uid=++Dr
this.phase=0
this.hid=e
this.hx=r
this.hy=a
this.dist=0
this.dist_noisy=0
this.details=[]
this.hydro_output_vsid=null
var n=a-.5*r
var o=r/x
this.unif_pos=pe(o,n)
this.pos_world=pe(o*k,n*k)
Je(this)
Nr.reseed(j("b_"+Xe+"_"+this.pos_world[0]+"_"+this.pos_world[1]))
var s=Nr.random()
var v
var l=cr[this.hid]
if(l){v=l.seed
this.initFromChoiceData(l)}else{v=Nr.uint32()
this.initFresh(s,v)}Nr.reseed(v)
$e(this,Nr)
this.blend_weight=Nr.floatBetween(this.type.blend[0],this.type.blend[1])
this.params={}
for(var f in this.type)this.params[f]=this.type[f]
this.sort_uid=Nr.range(65536)
this.params.debug_color=S(Oe(),rangeOrValue(Nr,this.type.debug_color_hsv[0]),rangeOrValue(Nr,this.type.debug_color_hsv[1]),rangeOrValue(Nr,this.type.debug_color_hsv[2]))}var Lr
function onHexomeChoice(e){Lr=e}Hexome.prototype.initFresh=function(e,r){this.seed=r
this.type=ar(this,e)
if(Lr)Lr(this)}
Hexome.prototype.initFromChoiceData=function(e){this.seed=e.seed
this.type=l[e.id]
X(this.type,e.id)}
Hexome.prototype.toChoiceData=function(){return{seed:this.seed,id:this.type.id}}
var Mr=function(){var n=pe()
var o=pe()
return function getHexomeIDExactFn(e){Ae(n,e,1/k)
o[0]=n[0]*x
o[1]=n[1]+.5*o[0]
var r=C(o[0])
var a=o[0]-r
var t=C(o[1])
var i=o[1]-t
if(i>1-a)if(i>2*a)++t
else if(i>.5*a){++r;++t}else++r
else if(i>.5*a+.5)++t
else if(i<=2*a-1)++r
return r+t*ee}}()
n.getHexomeIDExact=Mr
var Pr=function(){var D=pe()
var N=pe()
var L=[[0,0],[1,1],[1,0]]
var M=[[0,0],[1,1],[0,1]]
var P=.005
return function getHexomesFn(e,r){X(e!==we)
X(isFinite(r[0]))
X(isFinite(r[1]))
Ae(D,r,1/k)
N[0]=D[0]*x
N[1]=D[1]+.5*N[0]
var a=C(N[0])
var t=N[0]-a
var i=C(N[1])
var n
if(t>N[1]-i)n=L
else n=M
var o=[]
var s=0
var v=0
for(var l=0;l<n.length;++l){var f=a+n[l][0]
var u=i+n[l][1]
var c=f+u*ee
var _=ur[c]
if(!_)_=ur[c]=new Hexome(c,f,u)
var d=te(0,.75-Ee(_.unif_pos,D))
var h=_.blend_weight
var p=d*d*h
if((p=Math.pow(d,2+4*(1-h)))>0){s+=p
if(o.length)if(p>v){v=p
e[o.length]=e[0]
e[0]=p
o.push(o[0])
o[0]=_}else{e[o.length]=p
o.push(_)}else{v=p
e[o.length]=p
o.push(_)}}}if(!o.length){var g=["up="+D[0]+","+D[1]+",wps="+r[0]+","+r[1]]
for(var m=0;m<n.length;++m){var E=a+n[m][0]
var T=i+n[m][1]
var S=E+T*ee
var A=ur[S]
var R=te(0,.75-Ee(A.unif_pos,D))
var O=A.blend_weight
var I=R*R*O
I=Math.pow(R,2+4*(1-O))
g.push("hid="+S+",hx="+E+",hy="+T+",up="+A.unif_pos[0]+","+A.unif_pos[1]+",d="+R+",bw="+O+",w="+I)}X(o.length,g.join("\n"))}var y=P*s
for(var b=o.length-1;b>=0;--b)if(e[b]<y){de(o,b)
e[b]=e[o.length]}for(var w=0;w<o.length;++w){e[w]/=s
X(o[w])}X(o.length)
return o}}()
var Cr=function(){var E=pe()
var T=pe()
var S=[[0,0],[1,1],[1,0]]
var A=[[0,0],[0,1],[1,1]]
var R=-y(.75)
return function getHexomesContFn(e,r){Ae(E,r,1/k)
T[0]=E[0]*x
T[1]=E[1]+.5*T[0]
var a=C(T[0])
var t=T[0]-a
var i=C(T[1])
var n=T[1]-i
var o
if(t>n)o=S
else o=A
var s=[]
for(var v=0;v<o.length;++v){var l=a+o[v][0]
var f=i+o[v][1]
var u=l+f*ee
var c=ur[u]
if(!c)c=ur[u]=new Hexome(u,l,f)
s.push(c)}var _=s[2]
var d=_.unif_pos[0]
var h=_.unif_pos[1]
var p
var g
if(t>n){p=(E[0]-d)/R
g=(-.5*(E[0]-d)+R*(E[1]-h))/R}else{p=(.5*(E[0]-d)+-R*(E[1]-h))/R
g=(.5*(E[0]-d)+R*(E[1]-h))/R}var m=1-p-g
e[0]=fe(p,0,1)
e[1]=fe(g,0,1)
e[2]=fe(m,0,1)
return s}}()
function getHexome(e){var r=ur[e]
if(!r){var a=ne(e/ee)
var t=e-a*ee
r=ur[e]=new Hexome(e,t,a)}return r}function getHexomeExact(e){return getHexome(Mr(e))}var kr=function(){var v=pe()
var l=pe()
var f=[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[1,2],[2,2]]
var u=[[-1,-1],[0,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]
var c=$/k
return function getHexomeIDsFromChunkPosFn(e){Ae(v,e,c)
l[0]=v[0]*x
l[1]=v[1]+.5*l[0]
var r=C(l[0])
var a=l[0]-r
var t=C(l[1])
var i
if(a>l[1]-t)i=f
else i=u
var n=[]
for(var o=0;o<i.length;++o){var s=r+i[o][0]+(t+i[o][1])*ee
n.push(s)}return n}}()
n.getHexomeIDsFromChunkPos=kr
var xr=[[-2,1],[2,3],[-2,-3],[2,-1]]
function getContinentIDsForPos(e,r,a){X(a)
var t=Mr(r)
var i=ne(t/ee)
var n=t-i*ee
var o=R(a/k/2)
var s=0
for(var v=0;v<4;++v){var l=xr[v]
var f=g(n+l[0]*o,i+l[1]*o)
if(!s||-1===e.lastIndexOf(f,s-1))e[s++]=f}return s}function BlendWeightContext(){this.hexomes=null
this.hexomes_noisy=null
this.hexomes_cont=null
this.blend_weights=new Float32Array(3)
this.blend_weights_noisy=new Float32Array(3)
this.blend_weights_cont=new Float32Array(3)}var Ur=function(){var n=pe()
var o=pe()
var s=pe()
var v=pe()
return function calcBlendWeightsFn(e,r,a,t,i){if(!t){s[0]=Z[1].noise2D(r[0]*sr[0],r[1]*sr[0])*vr[0]
s[1]=Z[2].noise2D(r[0]*sr[0],r[1]*sr[0])*vr[0]
ge(n,r,s)
if(!i)e.hexomes=Pr(e.blend_weights,n)
e.hexomes_cont=Cr(e.blend_weights_cont,n)}if(a){v[0]=Z[3].noise2D(r[0]*sr[1],r[1]*sr[1])*vr[1]
v[1]=Z[4].noise2D(r[0]*sr[1],r[1]*sr[1])*vr[1]
ge(o,n,v)
e.hexomes_noisy=Pr(e.blend_weights_noisy,o)}}}()
n.calcBlendWeights=Ur
function calcBlendWeightsVS(e,r,a){var t=e.blend_pos_world
ge(t,e.pos_world,r)
if(e.single_hexome){Ur(e,t,false,false,true)
return}Ur(e,t,a)
e.blend_primary_hexome=e.hexomes[0]
if(a)e.blend_primary_hexome_noisy=e.hexomes_noisy[0]}function VerticalSlice(e){var r=ne(e/ee)
var a=e-r*ee
this.pos_world=pe(a*$,r*$)
this.vsid=e
this.single_hexome=false
this.phase=0
if(!dr){this.map=null
this.max_z=0}}function getVerticalSliceById(e){var r=lr[e]
if(!r)initPhase30(r=lr[e]=new VerticalSlice(e))
return r}function getVerticalSlice(e){return getVerticalSliceById(e[0]+e[1]*ee)}var Fr=pe()
function getVerticalSliceWorldPos(e){Ae(Fr,e,1/$)
Se(Fr,Fr)
return getVerticalSlice(Fr)}function getParam(e,r,a,t){var i=t?e.blend_weights_noisy:e.blend_weights
var n=t?e.hexomes_noisy:e.hexomes
var o=n.length
switch(c[a]){case p:return(t?e.blend_primary_hexome_noisy:e.blend_primary_hexome).params[a]
case h:for(var s=0;s<r.length;++s)r[s]=0
for(var v=0;v<o;++v){var l=i[v]
if(l){var f=n[v].params[a]
for(var u=0;u<r.length;++u)r[u]+=l*f[u]}}return r
default:X(0)
return 0}}function getElevationFlat(e){e.last_base_elevation=d.FLAT.fixed_elev
return d.FLAT.fixed_elev}var Gr=.333*k
function cubicInterpElevation(e,r){var a=e.length
X.equal(a,3)
var t=e[0]
var i=e[1]
var n=e[2]
var o=t.elevation
var s=i.elevation
var v=n.elevation
var l=r[0]
var f=r[1]
var u=r[2]
var c
var _
var d
var h
var p
var g
if(i.hx>t.hx){c=o+t.slopes[1]*Gr
d=o+t.slopes[2]*Gr
_=s-i.slopes[1]*Gr
p=s-i.slopes[0]*Gr
h=v-n.slopes[2]*Gr
g=v+n.slopes[0]*Gr}else{c=o+t.slopes[0]*Gr
d=o+t.slopes[1]*Gr
_=s-i.slopes[0]*Gr
p=s+i.slopes[2]*Gr
h=v-n.slopes[1]*Gr
g=v-n.slopes[2]*Gr}return s*f*f*f+3*_*l*f*f+3*p*f*f*u+3*c*l*l*f+(c+d+_+p+h+g)/6*6*l*f*u+3*g*f*u*u+o*l*l*l+3*d*l*l*u+3*h*l*u*u+v*u*u*u}var Br=new Float32Array(3)
var Hr=0
function getElevationEstimateV1(e){if(!E(e,3*k))return Hr
var r=Cr(Br,e)
return Hr=cubicInterpElevation(r,Br)}tr=function(){return function getElevationV1fn(e){var r=e.hexomes_cont
var a=e.blend_weights_cont
var t=cubicInterpElevation(r,a)
e.last_base_elevation=t
var i=e.blend_weights
var n=e.hexomes
var o=n.length
var s=0
var v={vs:e,pos_world:e.blend_pos_world}
for(var l=0;l<o;++l){var f=i[l]
if(f){var u=n[l]
var c=u.params.height_func
if(c){v.hexome=u
v.w0=r[0]===u?a[0]:r[1]===u?a[1]:a[2]
s+=f*c(v)}}}return t+s}}()
function getElevationEstimate(e){return rr(e)}var Wr=new Float32Array(3)
var Vr=new Float32Array(3)
var qr=new Float32Array(3)
var zr=new Float32Array(2)
function initPhase30Base(e){e.blend_weights=Wr
e.blend_weights_noisy=Vr
e.blend_weights_cont=qr
e.blend_pos_world=zr}var jr=pe(($-1)/2,($-1)/2)
function initPhase30(e){X.equal(e.phase,0);++ze[30]
var r=Date.now()
e.phase=30
initPhase30Base(e)
calcBlendWeightsVS(e,jr,false)
if(!dr){e.blend_weights_mid=e.blend_weights.slice(0)
e.hexomes_mid=e.hexomes.slice(0)
e.hexomes_cont_mid=e.hexomes_cont.slice(0)}e.owner_hexome=e.hexomes[0]
X(e.owner_hexome)
e.mid_elevation=er(e)
var a=e.last_base_elevation
var t=.5+.5*v[3].noise2D(e.pos_world[0]*or,e.pos_world[1]*or)
e.mid_elevation_eroded=ce(t=.1+.8*t*t*t,e.mid_elevation,a)
e.mid_hexome_exact=getHexomeExact(e.blend_pos_world)
if(!dr){calcBlendWeightsVS(e,De,false)
e.origin_hexomes=e.hexomes.slice(0)
e.seed=e.vsid+e.owner_hexome.seed}je[30]+=Date.now()-r}var Yr=function(){var p=Oe()
return function getTintFn(e,r,a,t){var i=e.blend_weights_noisy
var n=e.hexomes_noisy
var o=n.length
for(var s=0;s<p.length;++s){var v=0
var l=0
var f=void 0
for(var u=0;u<o;++u){var c=i[u]
if(c){var _=n[u].params[t]
if(!_)_=n[u].params.tint_grass_hsv
var d=_[s]
if(Array.isArray(d)){X(d.length>=4)
var h=d[3]+d[2]
if(d.length>=5)h+=1e4*d[4]
if(l!==h){l=h
f=.5+.5*Z[d.length>=5?d[4]:s].noise2D(r[0]*d[2]+d[3],r[1]*d[2])}d=(d[1]-d[0])*f+d[0]}v+=c*d}}p[s]=v}S(a,p[0],p[1],p[2])}}()
var Kr=function(){var n=new VerticalSlice
initPhase30Base(n)
return function getVSTintColorsFn(e,r,a){var t=_r[e]
if(!t){Ur(n,r,true)
_r[e]=t=[]
var i=t[Be]=Oe()
Yr(n,r,i,"tint_grass_hsv")}return t[a]}}()
n.getVSTintColors=Kr
function getChunkTintColor(e,r){X.equal(r,He)
var a=N(e)
return We[a]}var Zr=function(){var l=new VerticalSlice
initPhase30Base(l)
var f=Oe()
var u=Oe()
var c=G+.5*B
return function getVSElevAndTileFn(e,r){l.blend_pos_world=r
Ur(l,r,false)
l.blend_primary_hexome=l.hexomes[0]
var a=l.blend_primary_hexome.water_level
var t=er(l)
var i
var n
var o
if(t<a){t=a
n=ke
o=_}else if(o=fr[e])n=ke
if(t>c)i=Ce
else if(te(0,ne(getParam(l,f,"surface_depth",false)[0]))>0)i=getParam(l,null,"surface",false)
else{getParam(l,f,"ground_depth",false)
var s=.5
if(te(0,ne(f[0]+f[1]*s))>0)i=getParam(l,null,"ground",false)
else i=worldStoneType(r[0],r[1],t)}var v
if(i===Pe){Ur(l,r,true,true)
Yr(l,r,u,"tint_lod_hsv")
v=u}return{elev:t,tile:i,tint:v,liquid:n,rflow_amt:o}}}()
n.getVSElevAndTile=Zr
function seedDetails(e){X(e.phase>=30)
return e.seed}function uninitPhase50(e){if(e.phase<50)return
X.equal(e.phase,50)
e.details.length=0
e.phase=37}var Xr=function(){var q=pe()
var z=pe()
var j=pe()
var Y=Oe()
var K=se.createGood(0)
return function initPhase50fn(R){if(R.phase>=50)return
if(R.phase<37)Ke(R);++ze[50]
var e=Date.now()
R.phase=50
Ae(q,R.pos_world,1/$)
Se(q,q)
var n={}
var o=[]
var s=[]
var v=[]
var O=Infinity
var l=-Infinity
var I=Infinity
function search(e,r){var a=getVerticalSliceById(e)
O=ie(O,a.pos_world[0])
I=ie(I,a.pos_world[1])
l=te(l,a.pos_world[0])
if(a.owner_hexome===R)s.push(a)
else{v.push(a)
if(!r)return}for(var t=0;t<qe.length;++t){var i=e+qe[t]
if(!n[i]){n[i]=true
o.push(i)}}}var r=q[0]+q[1]*ee
var a=r
search(r,n[r]=true)
while(o.length)search(r=o.pop())
var y=l-O+16
X(!R.details.length)
var b=[]
for(var t=0;t<v.length;++t){var i=v[t]
var f=i.pos_world[0]-O
var u=i.pos_world[1]-I
for(var c=0;c<$-1;++c){b[u*y+f+c]=true
b[(u+c)*y+f+$-1]=true
b[(u+$-1)*y+f+c+1]=true
b[(u+c+1)*y+f]=true}}var w=0
function addDetail(e,r,a,t,i){var n=e.bounds,o=e.exclusion,s=e.priority
var v=K.uint32()
var l=++w
var f=r-O
var u=a-I
if(!t&&o)for(var c=0;c<o[1];++c)for(var _=0;_<o[0];++_)if(b[(u+c)*y+f+_])return false
var d=Oe(r,a)
if(o){for(var h=0;h<o[1];++h)for(var p=0;p<o[0];++p)b[(u+h)*y+f+p]=true
me(z,d,o,.5)}else{z[0]=d[0]+(n[0][0]+n[1][0])/2
z[1]=d[1]+(n[0][1]+n[1][1])/2}Se(z,z)
var g=getVerticalSliceWorldPos(z)
Re(j,z,g.pos_world)
calcBlendWeightsVS(g,j,false)
var m=er(g)
d[2]=ne(m)
var E
if(e.factory){E=e.factory(v,d,g)
X(!E.seed||E.seed===v)
E.seed=v
X(!E.uid)
E.uid=++l}else{var T=Ie(Oe(),d,n[0])
var S=ye(Oe(),n[1],n[0])
E=J({priority:s,uid:l<<16|R.sort_uid,origin:d,pos_world:T,size:S,detail_type:e,seed:v,hexome:R,provider_data:i})}be(Y,d,1/ae)
var A=Y[0]+Y[1]*ee+Y[2]*re
E.owner_mcid=A
X(E.bounds_buf)
X(E.bounds_idx>=0)
X(E.bounds_len<31)
R.details.push(E)
return true}if(R.type.detail_provider){var _=getVerticalSliceById(a)
K.reseed(seedDetails(_))
var d=Q[R.type.detail_provider](R)
for(var h=0;h<d.length;++h){var p=d[h]
var g=p.pos,m=p.type,E=p.provider_data
var T=g[0]
var S=g[1]
X(T>=R.pos_world[0]-oe&&T<=R.pos_world[0]+oe)
X(S>=R.pos_world[1]-oe&&S<=R.pos_world[1]+oe)
addDetail(m,T,S,true,E)}}var A=R.type.details
for(var D=0;D<A.length;++D){var N=A[D]
var L=N.type_name,M=N.freq,P=N.offs,C=N.chance
var k=Q[L]
var x=N.min
var U=N.max
for(var F=0;F<s.length;++F){var G=s[F]
var B=x+Ve(Z[0],G.pos_world,M,P,U-x+1)
if(B<=0)continue
K.reseed(seedDetails(G))
for(var H=0;H<B;++H){var W=G.pos_world[0]+K.range($)
var V=G.pos_world[1]+K.range($)
if(K.random()>C)continue
addDetail(k,W,V,false)}}}je[50]+=Date.now()-e}}()
n.initPhase50=Xr
function initPhase60(e){if(e.phase>=60)return;++ze[60]
var r=Date.now()
Ye(e)
e.phase=60
e.plants=[]
var a=false
for(var t=0;t<e.hexomes_mid.length;++t){var i=e.blend_weights_mid[t]
if(i){var n=e.hexomes_mid[t].type
if(n.plants&&n.plants.length)for(var o=0;o<n.plants.length;++o){var s=n.plants[o]
e.plants.push({weight:i,plant:s})
a=true}}}if(a)e.max_z++
je[60]+=Date.now()-r}function handleMC2DUnsub(e){var r=[]
var a=[]
var t={}
for(var i=0;i<e.length;++i){var n=e[i]
var o=ne(n/ee)
var s=n-o*ee
var v=s*I+o*I*ee
for(var l=0;l<I;++l)for(var f=0;f<I;++f){var u=lr[v+f+l*ee]
if(u)r.push(u)}var c=C(s*ae/oe)-1
var _=C(((s+1)*ae-1)/oe)+1
for(var d=c;d<=_;++d){var h=o*ae+d*k/2
var p=C(h/k)-1
var g=C((h+ae-1)/k)+1
for(var m=p;m<=g;++m){var E=d+m*ee
if(!t[E]){t[E]=true
var T=getHexome(E)
if(T.phase>=37)a.push(T)}}}}if(!r.length&&!a.length)return
for(var S=0;S<a.length;++S){uninitPhase50(a[S])
Ze(a[S])}for(var A=0;A<r.length;++A){var R=r[A]
delete lr[R.vsid]}console.log(O(),"Unload "+r.length+" VSes, "+a.length+" Hexomes")}function startup(){Ye=D.initPhase40
var e=a("./proc_gen_hydro.js")
Ke=e.initPhase37
Ze=e.uninitPhase37
for(var r in d){if(d[r].height_func){X(Er[d[r].height_func])
d[r].height_func=Er[d[r].height_func]}if(d[r].local_func){X(Er[d[r].local_func])
d[r].local_func=Er[d[r].local_func]}}if(nr){var u=[30,40]
var c=[]
setInterval(function(){var e=[]
var r=[]
var a=[]
for(var t=0;t<u.length;++t){e.push(0)
r.push([Infinity,Infinity])
a.push([-Infinity,-Infinity])}for(var i in lr){var n=lr[i]
for(var o=0;o<u.length;++o)if(n.phase>=u[o]){e[o]++
var s=r[o]
var v=a[o]
s[0]=ie(s[0],n.pos_world[0])
s[1]=ie(s[1],n.pos_world[1])
v[0]=te(v[0],n.pos_world[0])
v[1]=te(v[1],n.pos_world[1])}}for(var l=0;l<u.length;++l)if(isFinite(r[l][0])){var f=r[l]+"-"+a[l]+" ("+e[l]+")"
if(f!==c[l]){c[l]=f
console.log(O(),"Phase"+u[l]+":",f)}}},3e4)}}},{"../common/globals.js":41,"../common/waygate_common.js":46,"../glov/client/hsv.js":49,"../glov/common/rand_alea.js":57,"../glov/common/util.js":58,"../glov/common/vmath.js":60,"./biome_details.js":4,"./biome_types.js":5,"./context.js":7,"./continent.js":8,"./detail_gen_rendered.js":12,"./proc_gen.js":27,"./proc_gen_constants.js":29,"./proc_gen_details.js":30,"./proc_gen_hydro.js":31,"./proc_gen_shared.js":32,"./rand_seed.js":34,"./tiles.js":37,assert:void 0,"open-simplex-noise":void 0,"simplex-noise":void 0}],29:[function(e,r,a){"use strict"
a.PROP_4x1x4=a.PROP_1x4x4=a.PROP_2x1x4=a.PROP_1x2x4=a.PROP_2x2x1=a.PROP_2x2x2=a.PROP_1x1x1=a.STONE_FREQ_Z=a.STONE_FREQ_XY=a.SNOW_VARIATION=a.SNOW_ELEVATION=a.C_RIVER_DELTA=a.C_MOUNTAINS=a.C_HILLS=a.C_PLAINS=a.C_WATER=a.HEX_WIDTH=a.SKEW_X=a.HEX_HEIGHT=a.HEX_EDGE=void 0
var t=Math.sqrt
var i=128
a.HEX_EDGE=i
var n=t(3)*i
a.HEX_HEIGHT=n
var o=1/t(.75)
a.SKEW_X=o
var s=1.5*i
a.HEX_WIDTH=s
var v=0
a.C_WATER=v
var l=1
a.C_PLAINS=l
var f=2
a.C_HILLS=f
var u=3
a.C_MOUNTAINS=u
var c=4
a.C_RIVER_DELTA=c
var _=900
a.SNOW_ELEVATION=_
var d=100
a.SNOW_VARIATION=d
var h=24e-6
a.STONE_FREQ_XY=h
var p=6e-4
a.STONE_FREQ_Z=p
var g=[1,1,1]
a.PROP_1x1x1=g
var m=[2,2,2]
a.PROP_2x2x2=m
var E=[2,2,1]
a.PROP_2x2x1=E
var T=[1,2,4]
a.PROP_1x2x4=T
var S=[2,1,4]
a.PROP_2x1x4=S
var A=[1,4,4]
a.PROP_1x4x4=A
var R=[4,1,4]
a.PROP_4x1x4=R},{}],30:[function(e,r,a){"use strict"
a.i32Alloc=i32Alloc
a.f32Alloc=f32Alloc
a.detailGenSeed=detailGenSeed
a.detailGenSetData=detailGenSetData
a.detailGenMCIDs=detailGenMCIDs
a.detailGenMCIDs2=detailGenMCIDs2
a.detailGenGetHighest=detailGenGetHighest
a.detailGenLocal=detailGenLocal
a.detailGenGetDebugData=detailGenGetDebugData
a.detailStartup=detailStartup
a.MAX_DETAIL_REACH=a.DETAILS_CURRENT_VERSION=void 0
var t=e("../common/globals.js"),E=t.CHUNK_SIZE,I=t.ID_FACTOR,y=t.ID2,b=t.MEGACHUNK_SIZE,w=t.MEGACHUNK_VOXEL_SIZE
var i=1
a.DETAILS_CURRENT_VERSION=i
var n=b/2
var S=(n-1)*E
a.MAX_DETAIL_REACH=S
var D=e("assert")
var o=e("./cave_generators.js"),s=o.caveGenBoring,v=o.caveGenMaze,l=o.caveGenSphere,f=o.oreVeinGen
var N=Math.floor,L=Math.round
var p=e("../common/megachunk_common.js").parseChunkId
var u=e("./proc_gen_constants.js"),M=u.HEX_HEIGHT,P=u.HEX_WIDTH
var c=e("./proc_gen_biomes.js")
var _=e("./proc_gen_biomes.js"),C=_.getHexome,k=_.getVerticalSliceById
var d=e("./proc_gen_shared.js")
var h=e("../glov/common/rand_alea.js").randCreate
var g=e("../glov/common/verify.js")
var m=e("../glov/common/vmath.js"),T=m.ivec3,A=m.vec3,x=m.v3iScale,R=m.v3scaleFloor,O=m.v3add,U=m.v3addScale,F=m.v3scale,G=m.unit_vec
var B=d.phase_counts,H=d.phase_timing
var W
var V=n
var q=4*E
var z=10
var j=-20
var Y=256
var K=.5
var Z=16384
var X
var Q
var J
var $=Z
function sharedBufAlloc(){X=new ArrayBuffer(4*Z)
Q=new Int32Array(X)
J=new Float32Array(X)
$=0}function i32Alloc(e){D(e>=0&&e<=1024)
if($+e>Z)sharedBufAlloc()
var r=$
$+=e
return[Q,r]}function f32Alloc(e){D(e>=0&&e<=1024)
if($+e>Z)sharedBufAlloc()
var r=$
$+=e
return[J,r]}function DetailMegaChunks(){}var ee
function DetailMegaChunk(e,r){this.mcid=e
this.phase=0
D.equal(typeof r.ver,"number")
D.equal(typeof r.seed,"number")
this.ver=r.ver
this.seed=r.seed
this.midchunks=[]}DetailMegaChunk.prototype.dispose=function(){var e=this.details
if(e){for(var r=0;r<e.length;++r)e[r].dispose()
this.details=null}this.midchunks=null}
DetailMegaChunk.prototype.addDetail=function(e,r){var a=this
var t=e.bounds_buf,i=e.bounds_idx,n=e.bounds_len
var o={}
for(var s=0;s<n;++s){var v=i+6*s
var l=N(t[v]/q)
var f=N((t[v+1]-1)/q)
var u=N(t[v+2]/q)
var c=N((t[v+3]-1)/q)
var _=N(t[v+4]/q)
var d=N((t[v+5]-1)/q)
for(var h=_;h<=d;++h)for(var p=u;p<=c;++p)for(var g=l;g<=f;++g)o[(h*I+p)*I+g]=1
for(var m=0;m<3;++m){D(r[m]-t[v+2*m]<S)
D(t[v+2*m+1]-r[m]<=S)}}for(var E in o){var T=a.midchunks[E]
if(!T)T=a.midchunks[E]=[]
T.push(e)}a.details.push(e)}
var re=6e4
var ae
var te
var ie
function detailCleanupElem(e){if(e.last_use_time<ie){e.cleanup()
e.last_use_time=0
return false}return true}function detailCleanup(){profilerStart("detailCleanup")
te=null
ie=Date.now()-re
ae=ae.filter(detailCleanupElem)
detailCleanupSchedule()
profilerStop("detailCleanup")}function detailCleanupSchedule(){if(ae.length&&!te)te=setTimeout(detailCleanup,re/2)}function detailGenSeed(e){ee=new DetailMegaChunks
ae=[]}function detailGenSetData(e,r){if(r){var a=ee[e]
D(!a||a.ver===r.ver&&a.seed===r.seed)
if(!a)ee[e]=new DetailMegaChunk(e,r)}else{D(ee[e])
ee[e].dispose()
delete ee[e]}}function typeChoice(e,r){var a=e*r.total
var t=r.list,i=r.count
var n
for(var o=0;o<t.length;++o){var s=t[o]
if(s[2]&&i[o]===s[2])continue
n=o
if((a-=s[0])<=0){if(s[2]){i[o]++
if(i[o]===s[2])r.total-=s[0]}break}}return n}function listTotal(e){var r=0
for(var a=0;a<e.length;++a)r+=e[a][0]
return r}var ne=1
var oe=.25
var se=.03
var ve={}
function optsForVer(e){if(ve[e])return ve[e]
var r=[]
var a=[0,0]
if(e>0){r.push([ne,s,0,z])
r.push([oe,l,4,-20])
r.push([se,v,1,-300])
a=[150,50]}var t=[]
var i=[0,0]
if(e>0){t.push([ne,f,0,j])
i=[750,50]}return ve[e]={caves:r,caves_total:listTotal(r),caves_range:a,ores:t,ores_total:listTotal(t),ores_range:i}}var le=h()
var fe=T()
var ue=T()
function detailGenInitPhase1(g){if(g.phase>=1)return 0
g.phase=1
g.details=[];++B.d1
var e=Date.now()
var r=g.mcid
fe[2]=L(r/y)
var m=(r-=fe[2]*y)*b
fe[1]=L(r/I)
r-=fe[1]*I
fe[0]=r
x(fe,w)
var E=0
function spawnCaves(e,r,a,t,i){var n=[]
for(var o=0;o<r.length;++o)n.push(0)
var s={list:r,total:a,count:n}
for(var v=0;v<e;++v){var l=r[typeChoice(le.random(),s)]
var f=l[1]
var u=l[3]
ue[0]=le.range(w)
ue[1]=le.range(w)
ue[2]=fe[2]+le.range(w)
var c=le.uint32()
var _=m+(ue[0]>>4)+(ue[1]>>4)*I
var d=k(_)
if(ue[2]>=d.mid_elevation+u)continue
var h=le.random()
if(ue[2]>=d.mid_elevation-t&&h<i)continue
ue[0]+=fe[0]
ue[1]+=fe[1]
var p=f(c,ue,d)
D(p.bounds_buf)
D(p.bounds_idx>=0)
D(p.bounds_len<31)
D(!p.seed||p.seed===c)
p.seed=c
D(!p.uid)
p.uid=++E
p.owner_mcid=g.mcid
g.addDetail(p,ue)}}var a=optsForVer(g.ver),t=a.caves,i=a.caves_total,n=a.caves_range,o=a.ores,s=a.ores_total,v=a.ores_range
le.reseed(g.seed)
var l=le.uint32()
spawnCaves(n[0]+le.range(n[1]),t,i,Y,K)
le.reseed(l)
spawnCaves(v[0]+le.range(v[1]),o,s,-Infinity,0)
var f=N(fe[0]/P)-1
var u=N((fe[0]+w-1)/P)+1
r=g.mcid
for(var c=f;c<=u;++c){var _=fe[1]+c*M/2
var d=N(_/M)-1
var h=N((_+w-1)/M)+1
for(var p=d;p<=h;++p){var T=C(c+p*I)
W(T)
for(var S=0;S<T.details.length;++S){var A=T.details[S]
var R=A.origin
if(A.owner_mcid===r)g.addDetail(A,R)}}}var O=Date.now()-e
H.d1+=O
H.d2-=O
return O}function cmpPriority(e,r){var a=e.priority-r.priority
if(a)return a
if(a=e.seed-r.seed)return a
return e.uid-r.uid}function boundsOverlap(e,r,a){var t=a.bounds_buf,i=a.bounds_idx,n=a.bounds_len
var o=0
for(var s=0;s<n;++s,i+=6)if(r[0]>t[i]&&e[0]<t[i+1]&&r[1]>t[i+2]&&e[1]<t[i+3]&&r[2]>t[i+4]&&e[2]<t[i+5])o|=1<<s
return o}function boundsOverlapMaxZ(e,r,a,t){var i=t.bounds_buf,n=t.bounds_idx,o=t.bounds_len
for(var s=0;s<o;++s,n+=6){var v=i[n+5]
if(v>e)if(a[0]>i[n]&&r[0]<i[n+1]&&a[1]>i[n+2]&&r[1]<i[n+3]&&a[2]>i[n+4]&&r[2]<v)e=v}return e}var ce=[0,1,I,I+1,y,y+1,y+I,y+I+1]
var _e=1/b
var de=-V/b
function detailGenMCIDs(e){var r=N(e[0]*_e+de)
var a=N(e[1]*_e+de)
return[(N(e[2]*_e+de)*I+a)*I+r,ce]}var he=1
function detailGenMCIDs2(e,r){var a=N(r[0]*_e)
var t=N(r[1]*_e)
var i=(N(r[2]*_e)*I+t)*I+a
var n=N(r[0]*_e-he)
var o=N(r[0]*_e+he)
var s=N(r[1]*_e-he)
var v=N(r[1]*_e+he)
var l=N(r[2]*_e-he)
var f=N(r[2]*_e+he)+1
var u=0
for(var c=l;c<=f;++c)for(var _=s;_<=v;++_)for(var d=n;d<=o;++d){i=(c*I+_)*I+d
e[u++]=i}return u}var pe=A()
var ge=A()
var me=T()
function detailBlocked(e){var r=e.blocked_origin,a=e.blocked_size
U(ge,r,a,.5)
ge[2]=r[2]
F(pe,ge,1/E)
O(me,r,a)
var t=detailGenMCIDs(pe),i=t[0],n=t[1]
var o=N(ge[0]/q)+N(ge[1]/q)*I+N(ge[2]/q)*y
var s=a[2]
for(var v=0;v<n.length;++v){var l=i+n[v]
var f=ee[l]
D(f)
if(!f)continue
detailGenInitPhase1(f)
var u=f.midchunks[o]
if(u)for(var c=0;c<u.length;++c){var _=u[c]
var d=boundsOverlap(r,me,_)
if(d)if(_.blocksOther(e,ge,s,d))return true}}return false}var Ee=T()
function detailGenGetHighest(e){U(Ee,e,G,E)
Ee[2]=2147483647
R(pe,e,1/E)
var r=detailGenMCIDs(pe),a=r[0],t=r[1]
var i=N(e[0]/q)+N(e[1]/q)*I+N(e[2]/q-1)*y
var n=i+w/q*y
var o=-Infinity
for(var s=0;s<t.length;++s){var v=a+t[s]
var l=ee[v]
if(!g(l))continue
detailGenInitPhase1(l)
for(var f=i;f<=n;f+=y){var u=l.midchunks[f]
if(!u)continue
for(var c=0;c<u.length;++c)o=boundsOverlapMaxZ(o,e,Ee,u[c])}}return o-1}function detailGenLocal(e){var r=Date.now()
B.d2++
var a=e.vd
var t=a.pos_world
U(Ee,t,G,E)
var i=detailGenMCIDs(a.pos),n=i[0],o=i[1]
var s=N(t[0]/q)+N(t[1]/q)*I+N(t[2]/q)*y
var v=[]
for(var l=0;l<o.length;++l){var f=n+o[l]
var u=ee[f]
D(u)
if(!u)continue
detailGenInitPhase1(u)
var c=u.midchunks[s]
if(!c)continue
for(var _=0;_<c.length;++_){var d=c[_]
if(d.blockable&&!d.blocked_check){d.blocked=detailBlocked(d)
d.blocked_check=true}if(d.blocked)continue
var h=boundsOverlap(t,Ee,d)
if(h){d.last_bits=h
v.push(d)}}}v.sort(cmpPriority)
var p=Date.now()
H.d2+=p-r
for(var g=0;g<v.length;++g){B.d3++
var m=v[g]
m.genLocal(e)
if(m.cleanup){if(!m.last_use_time)ae.push(m)
m.last_use_time=p}}detailCleanupSchedule()
H.d3+=Date.now()-p}function detailGenGetDebugData(e,r){var a=detailGenGetDebugData.pos_world
if(!a)a=detailGenGetDebugData.pos_world=T()
var t=p(e)
F(a,t.chunk_pos,E)
U(Ee,a,G,E)
var i=detailGenMCIDs(t.chunk_pos),n=i[0],o=i[1]
var s=N(a[0]/q)+N(a[1]/q)*I+N(a[2]/q)*y
var v=[]
for(var l=0;l<o.length;++l){var f=n+o[l]
var u=ee[f]
if(!u)continue
detailGenInitPhase1(u)
var c=u.midchunks[s]
if(c)for(var _=0;_<c.length;++_){var d=c[_]
var h=boundsOverlap(a,Ee,d)
if(h){d.last_bits=h
v.push(d)}}}v.sort(cmpPriority)
r(v=v.map(function(e){return e.toJSON?e.toJSON():e}))}function detailStartup(){W=c.initPhase50}},{"../common/globals.js":41,"../common/megachunk_common.js":44,"../glov/common/rand_alea.js":57,"../glov/common/verify.js":59,"../glov/common/vmath.js":60,"./cave_generators.js":6,"./proc_gen_biomes.js":28,"./proc_gen_constants.js":29,"./proc_gen_shared.js":32,assert:void 0}],31:[function(e,r,a){"use strict"
a.initPhase37=initPhase37
a.uninitPhase37=uninitPhase37
a.setLODMode=setLODMode
a.seedWorld=seedWorld
a.hydroChunkInitRange=void 0
var C=e("assert")
var t=e("../common/globals.js"),i=t.CHUNK_SIZE,f=t.ID_FACTOR
var k=Math.abs,u=Math.ceil,c=Math.floor,x=Math.max,U=Math.min,n=Math.sqrt
var F=e("./priority_queue.js")
var o=e("./proc_gen_constants.js"),s=o.HEX_EDGE,_=o.HEX_HEIGHT,d=o.SKEW_X,v=o.C_RIVER_DELTA
var l=e("./proc_gen_biomes.js")
var h=e("./proc_gen_shared.js")
var p=e("./rand_seed.js")
var g=e("../glov/common/util.js"),G=g.clamp,B=g.lerp
var m=e("../glov/common/vmath.js"),E=m.vec2,H=m.v2add,T=m.v2addScale,S=m.v2scale
var W=h.neighbor_id_offs,V=h.phase_counts,q=h.phase_timing
var A=l.flushVerticalSlices,z=l.getVerticalSliceById,j=l.getVerticalSliceWorldPos,Y=l.getHexome
var K=i/2
var Z=40
var R=u(_/i)
var X=(R+1)*(R+1)
var Q
var J
var $=false
function seedHydro(e){return e.seed+4321}var O=[1,1,2,3,4,6]
var I=[1,1,3,4,6,8]
function hydroInit(e,r,a,t){if(e.hydro_init)return
e.hydro_init=true
var i=p.createGood(seedHydro(e))
var n=U(t,5)
var o=O[n]
var s=I[n]
e.hydro_width=o+i.random()*s
e.hydro_jitter_x=i.range(9)-4
e.hydro_jitter_y=i.range(9)-4
e.hydro_elev=r}var ee=[f,f+1,1,-f,-f-1,-1]
var y=n(.75)
var b=[[E(-s/2,_/2),E(1,0)],[E(s/2,_/2),E(.5,-y)],[E(s,0),E(-.5,-y)],[E(s/2,-_/2),E(-1,0)],[E(-s/2,-_/2),E(-.5,y)],[E(-s,0),E(.5,y)]]
b.forEach(function(e){return S(e[1],e[1],i)})
var w=s/i-4
function addRiverMouths(e,r,a){if(e<1)return false
if(r.classif===v&&r.rflow_amt>1)return true
if(!r.river_bits)return false
for(var t=0;t<ee.length;++t){var i=r.hid+ee[t]
if(i===a)continue
var n=Y(i)
if(0!==n.rflow_amt)if(addRiverMouths(e-1,n,r.hid))return true}return false}var D=E()
function initPhase35(e){if(e.phase>=35||!e.river_bits)return;++V[35]
var r=Date.now()
e.phase=35
var a=e.rflow_dir
if(7===a);else{C(a>=0&&a<6)
var t=b[a]
H(D,e.pos_world,t[0])
var i=t[1]
T(D,D,i,1.5)
var n=null
var o=Infinity
for(var s=0;s<w;++s){H(D,D,i)
var v=j(D)
var l=v.mid_elevation
if(l<o){o=l
n=v.vsid}}e.hydro_output_vsid=n}q[35]+=Date.now()-r}var re=[2,1,2,1,1,2,1,2]
var ae=50
var te=50
var ie=[[s/4,s/4],[-s/4,s/4],[s/4,-s/4],[-s/4,-s/4]]
var ne=E()
function rflowToErosion(e){return G((e-1)/2,0,1)}function getVSID(e){return e.vsid}var oe=false
function verticalSliceClear(){profilerStart("verticalSliceClear")
oe=false
A()
Q=l.vertical_slices
profilerStop("verticalSliceClear")}function initPhase37(T){if(T.phase>=37)return;++V[37]
var e=Date.now()
if($&&!oe){oe=true
setTimeout(verticalSliceClear,1e3)}initPhase35(T)
T.phase=37
if(addRiverMouths(6,T,null))T.river_mouth=true
var r=T.river_bits,a=T.hid,t=T.rflow_dir
if(7===t){C(!r)
for(var i=0;i<ee.length;++i){var n=a+ee[i]
if(Y(n).river_bits&1<<(i+3)%6)r|=1<<i}C(r)}var o=[]
var s=[]
for(var v=0;v<ee.length;++v)if(v!==t&&r&1<<v){var l=a+ee[v]
var f=Y(l)
initPhase35(f)
C(null!==f.hydro_output_vsid)
C(f.rflow_dir===(v+3)%6)
o.push(z(f.hydro_output_vsid))
s.push(f.rflow_amt)}if(!o.length&&null===T.hydro_output_vsid){q[37]+=Date.now()-e
return}T.hydro_inputs=o.map(getVSID)
var S=[]
var A={}
var R={}
var u=T.water_level
function connect(g,m,E){if(g.mid_elevation<m.mid_elevation){var e=g
g=m
m=e}var n=m.mid_elevation
function costEstimate(e){return k(e.pos_world[0]-m.pos_world[0])+k(e.pos_world[1]-m.pos_world[1])}function addPath(e){var r=rflowToErosion(E)
var a=Infinity
var t=rflowToErosion(T.rflow_amt)
var i=g.owner_hexome.type.min_erosion||0
var n=m.owner_hexome.type.min_erosion||0
var o=m.mid_elevation_eroded
for(var s=0;s<e.length;++s){var v=e[s]
var l=v[3]
var f=Q[l]
var u=s/(e.length-1)
var c=B(u,r,t)
var _=B(u,i,n)
var d=B(c,f.mid_elevation,f.mid_elevation_eroded)
if(d>f.mid_elevation-_)d=x(f.mid_elevation-_,f.mid_elevation_eroded)
if(d>a)d=a
else{if(d<o)d=o
a=U(a,d)}v[2]=d
var h=A[l]
if(!h)A[l]=[d,c]
else{h[0]=U(d,h[0])
h[1]=x(c,h[1])}var p=R[l]
if(p)if(p===E)R[l]=E+1
else R[l]=x(E,p)
else R[l]=E}S.push(e)}var r=X
var o=F.create()
var s={}
var v={}
var l={}
var f={}
function queue(e,r,a){var t=e.vsid
if(s[t])return
if(r&&e!==m&&e.mid_hexome_exact!==T)return
var i=a
if(r)i+=x(0,e.mid_elevation-r.mid_elevation+1)*ae
if(e.mid_elevation<n)i+=(n-e.mid_elevation)*te
if(v[t]){if(i>=l[t])return
o.remove(e)}else v[t]=true
l[t]=i
e.score=i+costEstimate(e)
f[t]=r
o.add(e)}queue(g,null,0)
var a
while(a=o.pop()){C(--r)
if(a===m){var t=[]
while(a){t.push([a.pos_world[0]+K,a.pos_world[1]+K,1e3,a.vsid,0])
a=f[a.vsid]}t.reverse()
addPath(t)
break}var i=a.vsid
var u=l[i]
v[i]=false
s[i]=true
for(var c=0;c<W.length;++c){var _=i+W[c]
queue(z(_),a,u+re[c])}}}var c=j(T.pos_world)
var _=null!==T.hydro_output_vsid&&z(T.hydro_output_vsid)
var d=_
if(!d){var h=(d=c).mid_elevation
for(var p=0;p<ie.length;++p){H(ne,T.pos_world,ie[p])
var g=j(ne)
if(g.mid_elevation<h)h=(d=g).mid_elevation}h=U(u,h)
for(var m=0;m<o.length;++m)h=U(h,o[m].mid_elevation)}for(var E=0;E<o.length;++E)connect(o[E],d,s[E])
if(_&&!o.length){T.hydro_source_vsid=c.vsid
connect(c,_,T.rflow_amt)}if($)for(var O in R)J[O]=R[O]
else{for(var I=0;I<S.length;++I){var y=S[I]
var b=y[0][2]
for(var w=0;w<y.length;++w){var D=y[w]
var N=D[3]
var L=A[N]
D[2]=b=U(L[0],b)
var M=Q[N]
var P=R[N]+(b<=u?1:0)
hydroInit(M,b,L[1],P)
D[0]+=M.hydro_jitter_x
D[1]+=M.hydro_jitter_y
if(T.river_mouth){D[4]=M.hydro_width+G(Z-2*(b-u),0,Z)
D[2]-=G(Z-(b-u),0,Z)}else D[4]=M.hydro_width}}if(S.length)T.hydro_paths=S}q[37]+=Date.now()-e}function uninitPhase37(e){if(e.phase<37)return
C.equal(e.phase,37)
e.hydro_paths=null
e.phase=35}var N=function(){var l=E()
return function(e,r){S(l,e,1/_)
var a=c(l[0]*d)
var t=a+(u(r/_*d)+1)
var i=u(r/_)+1
for(var n=a;n<=t;++n){var o=c(l[1]+.5*n)
var s=o+i
for(var v=o;v<=s;++v)initPhase37(Y(v*f+n))}}}()
a.hydroChunkInitRange=N
function setLODMode(){$=true
l.setLODMode()}function seedWorld(e){Q=l.vertical_slices
J=l.rflow_cache}},{"../common/globals.js":41,"../glov/common/util.js":58,"../glov/common/vmath.js":60,"./priority_queue.js":26,"./proc_gen_biomes.js":28,"./proc_gen_constants.js":29,"./proc_gen_shared.js":32,"./rand_seed.js":34,assert:void 0}],32:[function(e,r,a){"use strict"
a.intNoise=intNoise
a.phase_counts=a.phase_timing=a.neighbor_id_offs=void 0
var t=e("../common/globals.js").ID_FACTOR
var o=Math.floor
var i=[30,35,37,40,50,60,70,"d1","d2","d3",90,100,"zm"]
var n=[-t-1,-t,1-t,-1,1,t-1,t,t+1]
a.neighbor_id_offs=n
var s={}
a.phase_timing=s
var v={}
a.phase_counts=v
i.forEach(function(e){s[e]=0
v[e]=0})
function intNoise(e,r,a,t,i){var n=o((.5+.5*e.noise2D(r[0]*a+t,r[1]*a))*i)
if(n===i)n=i-1
return n}},{"../common/globals.js":41}],33:[function(e,r,a){"use strict"
a.startup=startup
var t=e("assert")
var c=e("./continent.js").continentHandleData
var i=e("./continent_gen.js").continentGen
var n=e("./continent_serialize.js").continentSerialize
var _=e("./proc_gen.js")
var d=_.handleHexomeChoices,o=_.setFlatOreType
var s=e("./proc_gen_biomes.js")
var h=s.handleMC2DUnsub
var v=e("./proc_gen_details.js"),p=v.detailGenSetData,l=v.detailGenGetDebugData
var f=e("./proc_gen_shared.js"),u=f.phase_counts,g=f.phase_timing
var m=e("./task_sched_worker.js")
var E=e("../common/voxel_data_common.js").ZMAP_UNDERGROUND
var T=e("../glov/client/worker_thread.js").addHandler
var S=false
var A=[]
var R=[]
function onZMap(e,r){t(S)
if(r===E)A.push({vsid:e,data:E,from:"procgen"})
else{A.push({vsid:e,data:r.data,from:"procgen"})
R.push(r.data.buffer)}}var O=[]
function onHexomeChoice(e){if(S)O.push({hid:e.hid,data:e.toChoiceData()})}function gen(e,r){var a=Date.now()
S=true
var t=e.hexome_choices,i=e.continents,n=e.details,o=e.mc2d_unsubs
if(t)d(t)
if(i)c(i)
if(n)for(var s=0;s<n.length;s+=2)p(n[s],n[s+1])
if(o)h(o)
var v=_.gen(e)
var l=[]
if(v.data)l.push(v.data.buffer)
if(v.liquid)l.push(v.liquid.buffer)
var f
if(A.length){f=A
l=l.concat(R)
A=[]
R=[]}var u
if(O.length){u=O
O=[]}r({data:v.data,liquid:v.liquid,full:v.full,liquid_stable:v.liquid_stable,props:v.props,gen_time:Date.now()-a,zmaps:f,hexome_choices:u},l)}function genContinent(e,r){var a=e.seed
var t=n(i(a))
r(t,[t.buffer])}function startup(){_.startup()
_.onZMap(onZMap)
s.onHexomeChoice(onHexomeChoice)
T("seed",function(e){t(!O.length)
t(!A.length)
_.seedWorld(e)})
m.addHandler("gen",gen)
m.registerTrackingData("phase_counts",u)
m.registerTrackingData("phase_timing",g)
m.addHandler("gen_continent",genContinent)
m.addHandler("detail_debug",l)
m.addHandler("flat_ore_type",o)}},{"../common/voxel_data_common.js":45,"../glov/client/worker_thread.js":54,"./continent.js":8,"./continent_gen.js":9,"./continent_serialize.js":10,"./proc_gen.js":27,"./proc_gen_biomes.js":28,"./proc_gen_details.js":30,"./proc_gen_shared.js":32,"./task_sched_worker.js":36,assert:void 0}],34:[function(e,r,a){"use strict"
var t=e("../glov/client/rand_fast.js").randFastCreate
var i=e("../glov/common/rand_alea.js").randCreate
a.createFast=t
a.createGood=i},{"../glov/client/rand_fast.js":52,"../glov/common/rand_alea.js":57}],35:[function(e,r,a){"use strict"
a.STONE_TIER_DISTRO=a.ORE_DROPRATE=a.ORE_DISTRO=a.ORE_FREQ=a.STONE_TIER_NAMES=a.STONE_TIER_SCALAR=a.STONE_TIER_DEPTH=void 0
var t=e("assert")
var i=e("../common/materials_common").Mat
var o={0:{depth_delta:50,scalar:1},1:{depth_delta:40,scalar:1.5},2:{depth_delta:70,scalar:2},3:{depth_delta:70,scalar:2.5},4:{depth_delta:40,scalar:3},5:{depth_delta:70,scalar:3.5},6:{depth_delta:70,scalar:4},7:{depth_delta:70,scalar:4.5},8:{depth_delta:70,scalar:5},9:{depth_delta:Infinity,scalar:1}}
var s=[]
a.STONE_TIER_DEPTH=s
var v=[]
a.STONE_TIER_SCALAR=v
var n=[]
a.STONE_TIER_NAMES=n;(function(){var e=0
for(var r in o){var a=Number(r)
var t=o[a],i=t.depth_delta,n=t.scalar
e+=i
s[a]=e
v[a]=n}})()
var l=1/6
a.ORE_FREQ=l
var f=[null,i.COPPER,i.TIN,i.IRON,i.SILVER,i.EMBERYLLIUM,i.GOLD,i.COBALT,i.MYTHRIL,i.AETHERSTONE]
a.ORE_DISTRO=f
var u=[0,1,1,1,1,1,1,1,1,1]
a.ORE_DROPRATE=u
t.equal(f.length,u.length)
var c=[[-Infinity,[1,3,1,1,1,3,1,1,3]],[s[0],[2,2,2,2,2,2,2,2,2]],[s[1],[1,3,2,3,2,3,1,3,3]],[s[2],[1,5,2,5,4,5,5,4,5]],[s[3],[1,6,3,6,6,5,6,4,6]],[s[4],[7,7,3,6,7,5,7,4,7]],[s[5],[8,2,8,6,7,8,8,4,8]],[s[6],[1,9,3,9,9,8,9,9,8]],[s[7],[1,2,3,6,7,5,9,4,8]],[Infinity,null]]
a.STONE_TIER_DISTRO=c},{"../common/materials_common":43,assert:void 0}],36:[function(e,r,p){"use strict"
p.addHandler=addHandler
p.addPreHandler=addPreHandler
p.registerTrackingData=registerTrackingData
p.startup=startup
p.batch_id=void 0
var g=e("assert")
var i=e("../glov/common/verify.js")
var a=e("./context.js"),n=a.contextSetThreadName,o=a.contextSetDebug
var m=Math.ceil
var t=e("../glov/client/worker_thread.js")
var E=t.sendmsg
var T={}
var S={}
function addHandler(e,r){g(!T[e])
T[e]=r}function addPreHandler(e,r){g(!S[e])
S[e]=r}var A={}
function registerTrackingData(e,r){A[e]=r}var R
p.batch_id=R
function onTaskBatch(e){p.batch_id=R=e.batch_id
var r=e.batch
for(var a=0;a<r.length;++a){var t=r[a]
var i=t.type,n=t.data
if(S[i])S[i](n)}var o=r.length
var s=[]
var v=[]
var l
var f
var u=m(r.length/3)+1
function flush(e){var r={results:s,tracking_data:A}
if(!o)r.tracking_data=A
E("task_batch_done",r,v)
s=[]
v=[]}function handleResult(e,r){--o
f=true
s.push({task_id:l,res:e})
if(r)for(var a=0;a<r.length;++a)v.push(r[a])
if(s.length>=u)flush()}for(var c=0;c<r.length;++c){var _=r[c]
l=_.task_id
var d=_.type,h=_.data
g(T[d])
f=false
T[d](h,handleResult)
g(f)}if(s.length)flush()}function onWorkerInit(e){var r=e.should_throw,a=e.name,t=e.is_debug
n(a)
o(t)
i.dothrow(r)}function startup(){t.addHandler("task_batch",onTaskBatch)
t.addHandler("worker_init",onWorkerInit)
n("worker")}},{"../glov/client/worker_thread.js":54,"../glov/common/verify.js":59,"./context.js":7,assert:void 0}],37:[function(e,r,a){"use strict"
a.tileMapIdentityTinted=tileMapIdentityTinted
a.setMetalTints=setMetalTints
a.setUnreleasedTiles=setUnreleasedTiles
a.priority_solid=a.priority_liquid=a.tile_map_identity=a.VNUDGE_BIT=a.NUM_STONES=a.STONES=a.DIG_RATE_PROP=a.DIG_RATE_DEFAULT=a.tile_map_liquids=a.tile_map_default=a.liquid_colors=a.tile_colors=a.MAT_METAL_TINT=a.liquid_code_name=a.liquid_name=a.tile_code_name=a.tile_info=a.tile_name_block=a.tile_name=void 0
var b=e("assert")
var t=e("../glov/common/util")
var i=t.defaults
var n=t.merge
var o=e("../glov/common/vmath")
var s=o.v3copy
var v=o.vec4
var w=e("../common/ids").TYPE_BLOCK
var l=e("../common/materials_common").Mat
var f=e("./atlas_params.json")
var u=e("./autogen/liquid_tiles_data")
var c=e("./autogen/tiles_data")
var _=e("./tiles_const").Tint
var d=e("./tiles_const")
var h=n(a,d.TILES)
var p=[]
a.tile_name=p
var g=[]
a.tile_name_block=g
var m=[]
a.tile_info=m
var E={}
a.tile_code_name=E
var T=Object.keys(h)
for(var S=0;S<T.length;++S)E[h[T[S]]]=T[S]
var A=n({},d.LIQUID_TILES)
n(h,A)
var R=[]
a.liquid_name=R
var O=[]
a.liquid_code_name=O
var I=Object.keys(A)
for(var y=0;y<I.length;++y)O[A[I[y]]]=I[y]
n(h,{HIT_LIQUID:256,PROP_PENDING:257,TINT_GRASS:_.GRASS,TINT_ORE:_.ORE,TINT_MAX:_.MAX});(function(){var e=Object.keys(h)
for(var r=0;r<e.length;++r)h["TILE_"+e[r]]=h[e[r]]})()
var D=function(){var e=[]
for(var r=0;r<14;++r)e.push(v(1,0,1,1))
return e}()
var N={};(a.MAT_METAL_TINT=N)[l.COPPER]=D[0]
N[l.IRON]=D[1]
N[l.TIN]=D[2]
N[l.BRONZE]=D[3]
N[l.SILVER]=D[4]
N[l.EMBERYLLIUM]=D[5]
N[l.GOLD]=D[6]
N[l.BRIGHTSTEEL]=D[7]
N[l.COBALT]=D[8]
N[l.MYTHRIL]=D[9]
N[l.AETHERSTONE]=D[10]
N[l.AETHERSTEEL]=D[11]
N[l.MUTTAL]=D[12]
var L=[]
a.tile_colors=L
var M=[]
a.liquid_colors=M
function rgb(e,r,a){return new Uint8Array([e,r,a])}L[h.STONE]=rgb(152,157,178)
L[h.STONE_LIGHT]=rgb(196,205,234)
L[h.STONE_DARK]=rgb(111,115,137)
L[h.STONE_RED]=rgb(155,116,101)
L[h.DIRT]=rgb(180,99,69)
L[h.SNOW]=rgb(201,240,253)
L[h.SAND]=rgb(250,255,177)
L[h.VEINIUM]=rgb(222,155,255)
L[h.GLASS]=rgb(199,225,242)
L[h.TILLED]=L[h.DIRT]
L[h.TILLED_WATERED]=L[h.DIRT]
L.def=rgb(255,0,255)
M[h.WATER]=rgb(0,98,228)
var P=n({},c);(a.tile_map_default=P)[h.COAL].tint_color=D[13]
b(P.prop)
for(var C=h.PROP_BASE;C<=h.PROP_MAX;++C)P[C]=i({debug:"PROP_"+(C-h.PROP_BASE),tile_code:"PROP_"+(C-h.PROP_BASE)},P.prop)
delete P.prop
b(P.unknown)
P.unknown.tile_code="EMPTY"
for(var k=0;k<256;++k)if(!P[k])P[k]=P.unknown
var x=n({},u)
a.tile_map_liquids=x
var U=1
a.DIG_RATE_DEFAULT=U
var F=.5
a.DIG_RATE_PROP=F
var G=[h.STONE,h.STONE,h.STONE,h.STONE_DARK,h.STONE,h.STONE_LIGHT,h.STONE,h.STONE_LIGHT,h.STONE_LIGHT,h.STONE,h.STONE,h.STONE_DARK,h.STONE,h.STONE_LIGHT,h.STONE,h.STONE_LIGHT,h.STONE,h.STONE,h.STONE_RED,h.STONE,h.STONE]
var B=(a.STONES=G).length
a.NUM_STONES=B
var H=128
a.VNUDGE_BIT=H
function fillMaps(h,e,r){var p={}
var g={}
var m={}
var E={}
var T={}
var S={}
var A={}
var R={}
var O=256
var I=[]
var y=[]
var a=function _loop(e){var a=h[e]
var r=Number(e)
if(!a.inv&&a.limited_blueprint)a.inv=[a.limited_blueprint]
if(!a.inv){b(isFinite(r))
a.inv=[r]}if(!Array.isArray(a.inv))a.inv=[a.inv]
for(var t=0;t<a.inv.length;++t){var i=a.inv[t]
if("number"===typeof i)a.inv[t]={type:w,id:i}
else b(i.id)}if(a.variable_yield&&a.mat&&N[a.mat])a.tint_color=N[a.mat]
if(a.crafted)a.stamina_use=0
if(a.unlimited_only)b(a.limited_blueprint)
var n=!a.unlimited_only&&!a.unplaceable
if(n&&(1!==a.inv.length||a.inv[0].type!==w||a.inv[0].id!==r))n=false
a.allowed_in_inventory=n
if(a.mat&&!a.not_material_source){b(isFinite(r))
if(a.crafted){b(!y[a.mat])
y[a.mat]=r}else if(!a.unplaceable){b(!I[a.mat])
I[a.mat]=r}}var o=a.alpha||false
var s=a.alpha_cutout||false
var v=(a.tile1?0:a.tile4?3:2)<<5
var l=a.tint||0
var f=a.tint_color||void 0
var u=a.unlit||false
var c=a.doublesided||false
if(f){if(void 0!==A[a.def]&&A[a.def]!==f){var _=--O
R[_]=a.def
a.def=_}A[a.def]=f}function assignValues(e){p[e]=o
g[e]=o||s
S[e]=c
m[e]=v
if(l){b(void 0===E[e]||E[e]===l)
E[e]=l}T[e]=u}assignValues(a.def)
if(a.face){b(!f)
for(var d=0;d<a.face.length;++d)if(a.face[d])assignValues(a.face[d])}["above","below"].forEach(function(e){if(a[e]){b(!f)
for(var r in a[e])assignValues(a[e][r])}})}
for(var t in h)a(t)
if(e)for(var i=e;i<=r;++i)if(m[i])m[i]|=H
h.tile_rate=m
h.alpha_map=p
h.alpha_allow_map=g
h.doublesided_map=S
h.tint_map=E
h.tint_colors=A
h.unlit_map=T
h.material_map=I
h.material_crafted_map=y
h.tile_override=R}fillMaps(P,f.primary.nudge[0],f.primary.nudge[1])
fillMaps(x)
Object.keys(x.alpha_allow_map).forEach(function(e){return P.alpha_allow_map[e]=true})
P.material_map[l.FANCY_STONE]=h.STONE_LIGHT
P.tile_invisible=h.INVISIBLE
P.tile_non_opaque=h.NON_OPAQUE
x.tile_invisible=h.INVISIBLE
x.tile_non_opaque=h.NON_OPAQUE
var W=function(){var e={}
for(var r=0;r<256;++r)e[r]={def:r}
e.tile_invisible=e.tile_non_opaque=256
return e}()
a.tile_map_identity=W
function tileMapIdentityTinted(e,r){r=r||256
var a={}
var t={}
var i={}
for(var n=0;n<r;++n){a[n]=W[n]
t[n]=96
i[n]=n>=e?62:63}a.tile_rate=t
a.tile_override=i
a.tile_invisible=a.tile_non_opaque=r
return a}var V={};(a.priority_liquid=V)[0]=1
V[h.WATER_FLOW]=2
V[h.WATER]=3
var q={};(a.priority_solid=q)[h.GRASS]=1
q[h.TILLED]=2
q[h.DIRT]=3
function setMetalTints(e){b.equal(D.length,e.length-1)
for(var r=0;r<D.length;++r)s(D[r],e[r+1])}var z={}
function setUnreleasedTiles(e){if(e)for(var r in z){P[r].def=z[r].def
P[r].face=z[r].face
delete z[r]}else for(var a in P){var t=P[a]
if(t.next_release&&!z[a]){z[a]={def:P[a].def,face:P[a].face}
t.def=P[h.STONE].def
t.face=P[h.STONE].face}}}},{"../common/ids":42,"../common/materials_common":43,"../glov/common/util":58,"../glov/common/vmath":60,"./atlas_params.json":1,"./autogen/liquid_tiles_data":2,"./autogen/tiles_data":3,"./tiles_const":38,assert:void 0}],38:[function(e,r,a){"use strict"
a.FuelRate=a.Tint=a.LIQUID_TILES=a.TILES=void 0
var t={EMPTY:0,DIRT:1,GRASS:2,STONE:3,ORE_IN_STONE:4,COAL:5,WOOD:6,TILLED:8,TILLED_WATERED:9,SNOW:10,SAND:11,STONE_DARK:12,STONE_LIGHT:13,STONE_RED:14,DIRT_WITH_FLINT:16,WOOD_BARK:17,PLANKS_WOOD:18,BRICK_CLAY:19,BRICK_STONE:20,WOOD_LIGHT:21,WOOD_LIGHT_BARK:22,PLANKS_WOOD_LIGHT:23,WOOD_DARK:24,WOOD_DARK_BARK:25,PLANKS_WOOD_DARK:26,WOOD_RED:27,WOOD_RED_BARK:28,PLANKS_WOOD_RED:29,COLORED_HUE0:30,COLORED_HUE1:31,COLORED_HUE2:32,COLORED_HUE3:33,COLORED_HUE4:34,COLORED_HUE5:35,ORE_IN_STONE_LIGHT:36,ORE_IN_STONE_DARK:37,ORE_IN_STONE_RED:38,VEINIUM:39,ORE_IN_VEINIUM:40,CORAL:41,LEAVES1:100,LEAVES2:101,LEAVES3:102,LEAVES4:103,LEAVES5:104,NON_OPAQUE:105,GLASS:110,COPPER:120,TIN:121,IRON:123,SILVER:124,EMBERYLLIUM:125,GOLD:126,COBALT:128,MYTHRIL:129,AETHERSTONE:130,INTANGIBLE:200,PASSABLE_LEAVES:200,POROUS:201,INVISIBLE:220,PROP_MASK:240,PROP_VALUE:224,UNDIGABLE:224,PROP_BASE:224,PROP_MAX:239,AIR:255}
a.TILES=t
var i={LIQUID_RESERVED:1,WATER:2,WATER_FLOW:3}
a.LIQUID_TILES=i
var n;(function(e){e[e["GRASS"]=1]="GRASS"
e[e["ORE"]=2]="ORE"
e[e["MAX"]=3]="MAX"})((a.Tint=n)||(a.Tint=n={}))
var o;(function(e){e[e["WOOD"]=10]="WOOD"
e[e["PLANKS"]=20]="PLANKS"
e[e["LEAVES"]=100]="LEAVES"})((a.FuelRate=o)||(a.FuelRate=o={}))},{}],39:[function(e,r,a){"use strict"
a.loadXRAW=loadXRAW
a.reloadXRAW=reloadXRAW
a.loadAsyncModelBinary=loadAsyncModelBinary
a.voxelDataXRAWStartup=voxelDataXRAWStartup
a.MODELS_BASEPATH=void 0
function _extends(){return(_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]
for(var t in a)if(Object.prototype.hasOwnProperty.call(a,t))e[t]=a[t]}return e}).apply(this,arguments)}var i="models/"
a.MODELS_BASEPATH=i
var D=e("assert")
var o=e("../glov/client/fetch").fetch
var t=e("../glov/client/filewatch").filewatchOn
var n=e("../glov/client/webfs")
var s=n.webFSGetFile
var v=n.webFSGetFileNames
var l=e("../glov/common/util")
var f=l.merge
var u=l.nop
var c=e("../glov/common/vmath")
var N=c.unit_vec
var L=c.v3addScale
var M=c.v3copy
var P=c.v3iAdd
var C=c.v3iMax
var k=c.v3iMin
var x=c.v3set
var U=c.vec3
var F=c.zero_vec
var _=e("./context").contextThreadName
var G=e("./palette").paletteGetOrLoad
var B=Math.max
var d="models_streamed/"
var h=4
var p;(function(e){e[e["NOT_LOADED"]=0]="NOT_LOADED"
e[e["LOADING"]=1]="LOADING"
e[e["LOADED"]=2]="LOADED"})(p=p||{})
function isVoxelModelShell(e){return!e.binary}var H={}
var W
function loadXRAW(e,r){var a=H[e]
if(!a||isVoxelModelShell(a))D(false,"Attempted to synchronously load nonexistent VoxelModel: "+e)
D(r)
D(r.palette)
var t=G(r.palette)
D(t)
D(t.tile_map)
var i=a.binary
var n=0
function eat(e){D.equal(i[n++],e)}var o=79===i[0]||67===i[0]||80===i[0]||84===i[0]
var s
var v
var l
var f=[0,0,0]
var u
var c=U()
if(r.origin_offset)M(c,r.origin_offset)
var _
if(r.for_baking){_=M(U(),r.bake_offset||F)
if(!r.origin_offset&&r.bake_offset){var d=r.size||N
x(c,d[0]/2-r.bake_offset[0]/7,d[1]/2-r.bake_offset[1]/7,-r.bake_offset[2]/7)}}var h
if(o){n++
s=i[n++]
v=i[n++]
l=i[n++]
var p=r.noscale||r.for_baking?1/7:1
if(80===i[u=0]){c[0]=i[n++]*p
c[1]=i[n++]*p
c[2]=i[n++]*p}if(84===i[0]){c[0]=i[n++]
c[1]=i[n++]
c[2]=i[n++];(h=U())[0]=i[n++]-c[0]
h[1]=i[n++]-c[1]
h[2]=i[n++]-c[2]
c[0]*=p
c[1]*=p
c[2]*=p}f[0]=i[n++]
f[1]=i[n++]
f[2]=i[n++]
if(_)P(_,f)
L(c,c,f,-p)}else{eat(88)
eat(82)
eat(65)
eat(87)
D.equal(i[n++],0)
var g=i[n++]
D(4===g)
D.equal(i[n++],8)
D.equal(i[n++],8)
s=i[n++]
eat(0)
eat(0)
eat(0)
v=i[n++]
eat(0)
eat(0)
eat(0)
l=i[n++]
eat(0)
eat(0)
eat(0)
u=i[n++]+(i[n++]<<8)
D(u<=256)
eat(0)
eat(0)}D(B(B(s,v),l)<128)
var m=new Uint8Array([s,v,l])
var E=W(m)
var T=E.minpos=new Uint8Array([s-1,v-1,l-1])
var S=E.maxpos=new Uint8Array([0,0,0])
var A=new Int8Array(3)
for(var R=0;R<l;++R){A[2]=R
for(var O=0;O<v;++O){A[1]=O
for(var I=0;I<s;++I){var y=i[n++]
if(y){A[0]=I
C(S,A)
k(T,A)
E.setUnchecked(A,y)}}}}if(n!==i.length)n+=4*u
E.tile_map=t.tile_map
E.updateGeometrySimple(_extends({},r,{tint_colors:t}))
var b
if(r.for_baking){D(E.baked_mesh_data)
D(_)
b={bake_offset:_,data:E.baked_mesh_data}}var w={baked:b,opts:r};(a.vmds=a.vmds||[]).push(w)
return{origin_offset:c,tool_pos:h,baked:b,vd:E,vmd:w}}function reloadModelVMDs(e,r){for(var a=0;a<r.length;++a){var t=r[a]
var i=loadXRAW(e,t.opts)
var n=i.baked,o=i.vmd
var s=r.pop()
D.equal(o,s)
var v=t.baked
if(v){f(v,n)
i.baked=v}if(t.reload_cb)t.reload_cb(i,t.reload_cb_payload)}}var g
function reloadXRAW(e,r){var a=0
r=r||false
function reloadAndCountModelVSDs(e){var r=H[e]
if(r&&r.status===p.LOADED&&r.vmds){reloadModelVMDs(e,r.vmds)
a+=r.vmds.length}}if(!e)Object.keys(H).forEach(function(e){if(H[e].streamed===r)reloadAndCountModelVSDs(e)})
else reloadAndCountModelVSDs(e)
console.log("["+_()+"] Reloaded "+a+" models")
if(a)g()}function loadModelBinary(e){var r=s(e)
var a=e.slice(i.length)
var t=H[a]
if(!t)H[a]={streamed:false,status:p.LOADED,attempts:0,last_attempt:0,binary:r}
else{D(!t.streamed)
t.binary=r}}var m
var E
function loadAsyncModelBinary(t,e,r){var i=H[t]
var a=Date.now()
var n=e||u
if(!i)i=H[t]={streamed:true,status:p.NOT_LOADED,attempts:0,last_attempt:0}
if(!r)if(i.status===p.LOADED){n()
return true}else if(i.status===p.LOADING){n("ERR_LOADING_IN_FLIGHT")
return false}else if(a-i.last_attempt<i.attempts*i.attempts*100){n("ERR_TOO_MANY_ATTEMPTS")
return false}if(E()){i.attempts=0
n("ERR_DISCONNECTED")
return false}i.status=p.LOADING
o({url:""+m+d+t,response_type:"arraybuffer"},function(e,r){D(i)
if(e){i.status=p.NOT_LOADED;++i.attempts
i.last_attempt=Date.now()
console.error("Failed to load model: "+t+": "+e)
if(i.attempts===h)D(false,"Exhausted attempts to load model: "+t+" ("+e+")")
n(e)
return}i.status=p.LOADED
var a=new Uint8Array(r)
i.binary=a
n()})
return false}function reloadModel(e){loadModelBinary(e)
reloadXRAW(e.slice(i.length))}function reloadAsyncModel(e){var r=e.slice(d.length)
var a=H[r]
if(a)a.attempts=0
loadAsyncModelBinary(r,function(e){if(e){console.error("Failed to reload model: "+r)
return}reloadXRAW(r,true)},true)}function voxelDataXRAWStartup(e){g=e.on_reload_cb
W=e.create_vd_cb
E=e.net_disconnected_cb
m=e.url_base
var r=v("models")
for(var a=0;a<r.length;++a)loadModelBinary(r[a])
t(i,reloadModel)
t(d,reloadAsyncModel)}},{"../glov/client/fetch":47,"../glov/client/filewatch":48,"../glov/client/webfs":53,"../glov/common/util":58,"../glov/common/vmath":60,"./context":7,"./palette":24,assert:void 0}],40:[function(e,r,a){"use strict"
e("../glov/client/worker_thread.js")
var t=e("./proc_gen_worker.js")
var i=e("./lods_worker.js")
var n=e("./mesh_worker.js")
e("./task_sched_worker.js").startup()
i.startup()
n.startup()
t.startup()},{"../glov/client/worker_thread.js":54,"./lods_worker.js":19,"./mesh_worker.js":23,"./proc_gen_worker.js":33,"./task_sched_worker.js":36}],41:[function(e,r,a){"use strict"
a.STACK_SIZE=a.FAKE_PURCHASES=a.CHAT_MAX_LEN=a.TILE_PROP_MAX=a.TILE_PROP_BASE=a.ENV_LOCAL=a.ENV_TEST2=a.ENV_TEST=a.ENV_STAGING=a.ENV_PRODUCTION=a.PLATFORM_MIN_SUPPORTED_VERSIONS=a.MIN_SUPPORTED_VERSION=a.CURRENT_VERSION=a.MC_COUNT=a.MEGACHUNK_VOXEL_SIZE=a.MEGACHUNK_SIZE=a.SAFE_DIST_Z=a.SAFE_DIST=a.ID2=a.ID_FACTOR=a.VOXELS_PER_M=a.CS3=a.CS2=a.CHUNK_SIZE=void 0
var t=16
var i=(a.CHUNK_SIZE=t)*t
a.CS2=i
var n=t*t*t
a.CS3=n
var o=2
a.VOXELS_PER_M=o
var s=65536
var v=(a.ID_FACTOR=s)*s
a.ID2=v
var l=s*t/4
var f=a.SAFE_DIST=l
a.SAFE_DIST_Z=f
var u=32
var c=(a.MEGACHUNK_SIZE=u)*t
a.MEGACHUNK_VOXEL_SIZE=c
var _=u*u*u
a.MC_COUNT=_
var d="0.72.1"
a.CURRENT_VERSION=d
var h="0.72.0"
a.MIN_SUPPORTED_VERSION=h
var p={}
a.PLATFORM_MIN_SUPPORTED_VERSIONS=p
var g="prod"
a.ENV_PRODUCTION=g
var m="staging"
a.ENV_STAGING=m
var E="test"
a.ENV_TEST=E
var T="test2"
a.ENV_TEST2=T
var S="local"
a.ENV_LOCAL=S
var A=224
a.TILE_PROP_BASE=A
var R=239
a.TILE_PROP_MAX=R
var O=140
a.CHAT_MAX_LEN=O
var I=false
a.FAKE_PURCHASES=I
var y=100
a.STACK_SIZE=y},{}],42:[function(e,r,a){"use strict"
function _extends(){return(_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]
for(var t in a)if(Object.prototype.hasOwnProperty.call(a,t))e[t]=a[t]}return e}).apply(this,arguments)}var t={TYPE_ITEM:1,TYPE_BLOCK:2,TYPE_CRAFT_CLASS:-1,TYPE_SETTLEMENT_UPGRADE:-2,TYPE_RECIPE:-3}
var i={ITEM_UNKNOWNID:-1,ITEM_PICKAX:1,ITEM_HATCHET:2,ITEM_SHOVEL:4,ITEM_HOE:5,ITEM_WAYGATE:6,ITEM_BAG:7,ITEM_PLANT:8,ITEM_SEEDS_CORN:9,ITEM_SEEDS_WHEAT:10,ITEM_CORN:11,ITEM_WHEAT:12,ITEM_FIBER:15,ITEM_CORD:16,ITEM_ROD:17,ITEM_TOOL_HEAD:18,ITEM_RODH:19,ITEM_RODV:20,ITEM_CHEST_MEDIUM:22,ITEM_DOOR:23,ITEM_TORCH:24,ITEM_FENCE:25,ITEM_HANDSTOOL:26,ITEM_BUCKET:27,ITEM_BLUEPRINT:28,ITEM_LIGHT_CUBE:29,ITEM_LIQUID:30,ITEM_LANTERN:31,ITEM_SHELF:32,ITEM_CHEST_TINY:33,ITEM_CHEST_SMALL:34,ITEM_CHEST_TALL:35,ITEM_FLOWERPOT:36,ITEM_STEPS:37,ITEM_TABLE_LARGE:38,ITEM_TABLE_SMALL:39,ITEM_CHAIR:40,ITEM_BENCH:41,ITEM_BED:42,ITEM_RUG:43,ITEM_LADDER:44,ITEM_ORE:45,ITEM_INGOT:46,ITEM_FURNACE_ORE:47,ITEM_FURNACE_GLASS:48,ITEM_SAWMILL:49,ITEM_OVEN:50,ITEM_WINDOW_SMALL:51,ITEM_WINDOW_MEDIUM:52,ITEM_WINDOW_LARGE:53,ITEM_DOOR_DOUBLE:54,ITEM_GEM:55,ITEM_STONECUTTER_SIMPLE:56,ITEM_STONECUTTER_ADVANCED:57,ITEM_FACTORY_DEBUG:58,ITEM_WORKBENCH:59,ITEM_COAL:60,ITEM_ANVIL:61,ITEM_DOWSER_ADVANCED:62,ITEM_TOOL_HEAD_CAST:63,ITEM_BERRY_BUSH_RED:64,ITEM_BERRY:65,ITEM_JUICER:66,ITEM_BOTTLE:67,ITEM_JUICE:68,ITEM_SPICE_PLANT:69,ITEM_SPICE:70,ITEM_CAMPFIRE:71,ITEM_SEEDS_TOMATO:72,ITEM_TOMATO:73,ITEM_SEEDS_CARROT:74,ITEM_SEEDS_PUMPKIN:75,ITEM_WATERING_SYSTEM:76,ITEM_WILD_CROP:77,ITEM_BREAD:78,ITEM_PUMPKIN:79,ITEM_CARROT:80,ITEM_PIE:81,ITEM_LEFTOVERS:82,ITEM_ROAST_VEGETABLES:83,ITEM_SANDWICH:84,ITEM_BERRY_BUSH_BLUE:85,ITEM_BERRY_BUSH_YELLOW:86,ITEM_MUSHROOM:87,ITEM_MILL:88,ITEM_FLOUR:89,ITEM_ENERGY_WELL:99,ITEM_PAINT_MIXER:100,ITEM_PAINT:101,ITEM_KILN:102,ITEM_DOWSER_SIMPLE:103,ITEM_SEEDS_SUGAR_CANE:104,ITEM_SUGAR_CANE:105,ITEM_SUGAR:106,ITEM_CROISSANT:107,ITEM_SIGNBOARD:108,ITEM_SIGNPOST:109,ITEM_PARTICLE_DEBUGGER:110,ITEM_BONFIRE:111,ITEM_BONFIRE_METAL:112,ITEM_BUZZERSTART:113,ITEM_BUZZERGOAL:114,ITEM_ACCESS_CONTROL:115,ITEM_VEINIUM_GRINDER:116,ITEM_INDICATOR:117,ITEM_SEASHELL:118,ITEM_CORAL_POWDER:119,ITEM_STARFISH:120,ITEM_LEAPGATE:121,ITEM_LEAPGATE_SHARD:122,ITEM_SEASHELL_PILE:123,ITEM_STARFISH_PILE:124,ITEM_ANEMONE:125,ITEM_ANEMONE_PILE:126,ITEM_ROAST_SEAFOOD:127,ITEM_SEA_CANDY:128,ITEM_DISC_CORAL:129,ITEM_CORAL_TUBES:130,ITEM_ALGAE:131,ITEM_BLOCK_PREVIEW:999,ITEM_TEST00:1e3,ITEM_TEST01:1001,ITEM_TEST02:1002,ITEM_TEST03:1003,ITEM_TEST04:1004,ITEM_TEST05:1005,ITEM_TEST06:1006,ITEM_TEST07:1007,ITEM_TEST08:1008,ITEM_TEST09:1009}
var n=[]
var o=_extends({ITEM_ID_CODE_NAME:n,INV_ELEM_NAME:t},t,{INV_ITEM_NAME:i},i)
r.exports=o;(function(){for(var e in i){var r=i[e]
n[r]=e}})()},{}],43:[function(e,r,a){"use strict"
a.UNRELEASED_ATTR1=a.Mat=a.CraftClass=void 0
var t
var i;(function(e){e[e["FUEL"]=1]="FUEL"
e[e["WOOD_RAW"]=2]="WOOD_RAW"
e[e["STONE_RAW"]=3]="STONE_RAW"
e[e["REPAIRABLE"]=4]="REPAIRABLE"
e[e["INGREDIENT"]=5]="INGREDIENT"
e[e["GRINDABLE"]=6]="GRINDABLE"
e[e["SCALED_INGOT"]=7]="SCALED_INGOT"
e[e["BAKED_FOOD"]=8]="BAKED_FOOD"
e[e["WOOD_PLANK"]=9]="WOOD_PLANK"
e[e["FARMING_SEED"]=10]="FARMING_SEED"
e[e["BRICK"]=11]="BRICK"
e[e["WHEAT_CORN"]=12]="WHEAT_CORN"
e[e["VEGETABLE"]=13]="VEGETABLE"
e[e["PIE_FILLING"]=14]="PIE_FILLING"
e[e["SEAFOOD"]=15]="SEAFOOD"
e[e["SANDWICH_FILLING"]=16]="SANDWICH_FILLING"})((a.CraftClass=i)||(a.CraftClass=i={}))
var n;(function(e){e[e["NONE"]=0]="NONE"
e[e["ANY"]=-99]="ANY"
e[e["LEAF"]=1]="LEAF"
e[e["LIGHT_WOOD"]=4]="LIGHT_WOOD"
e[e["WOOD"]=2]="WOOD"
e[e["RED_WOOD"]=5]="RED_WOOD"
e[e["DARK_WOOD"]=3]="DARK_WOOD"
e[e["FLINT"]=100]="FLINT"
e[e["ROCK"]=101]="ROCK"
e[e["STONE"]=102]="STONE"
e[e["CORAL"]=105]="CORAL"
e[e["FANCY_STONE"]=104]="FANCY_STONE"
e[e["UNUSED_STONE"]=103]="UNUSED_STONE"
e[e["SAND"]=201]="SAND"
e[e["DIRT"]=200]="DIRT"
e[e["MUTTAL"]=311]="MUTTAL"
e[e["COAL"]=500]="COAL"
e[e["COPPER"]=300]="COPPER"
e[e["TIN"]=302]="TIN"
e[e["BRONZE"]=303]="BRONZE"
e[e["IRON"]=301]="IRON"
e[e["SILVER"]=304]="SILVER"
e[e["EMBERYLLIUM"]=305]="EMBERYLLIUM"
e[e["GOLD"]=306]="GOLD"
e[e["BRIGHTSTEEL"]=307]="BRIGHTSTEEL"
e[e["COBALT"]=308]="COBALT"
e[e["MYTHRIL"]=309]="MYTHRIL"
e[e["AETHERSTONE"]=310]="AETHERSTONE"
e[e["AETHERSTEEL"]=390]="AETHERSTEEL"
e[e["REGULAR"]=397]="REGULAR"
e[e["FAST"]=398]="FAST"
e[e["SUPER"]=399]="SUPER"
e[e["ANY_INGREDIENT"]=400]="ANY_INGREDIENT"
e[e["TOMATO"]=401]="TOMATO"
e[e["PUMPKIN"]=402]="PUMPKIN"
e[e["CARROT"]=403]="CARROT"
e[e["RED_BERRY"]=404]="RED_BERRY"
e[e["BLUE_BERRY"]=405]="BLUE_BERRY"
e[e["YELLOW_BERRY"]=406]="YELLOW_BERRY"
e[e["LABEL"]=407]="LABEL"
e[e["HOT"]=408]="HOT"
e[e["PUNGENT"]=409]="PUNGENT"
e[e["SAVORY"]=410]="SAVORY"
e[e["BREAD"]=411]="BREAD"
e[e["BROWN_MUSHROOM"]=412]="BROWN_MUSHROOM"
e[e["LUMINESCENT_MUSHROOM"]=413]="LUMINESCENT_MUSHROOM"
e[e["RED_MUSHROOM"]=414]="RED_MUSHROOM"
e[e["CORN"]=415]="CORN"
e[e["CORAL_MUSHROOM"]=416]="CORAL_MUSHROOM"
e[e["STARFISH"]=417]="STARFISH"
e[e["ANEMONE"]=418]="ANEMONE"
e[e["RED"]=501]="RED"
e[e["ORANGE"]=502]="ORANGE"
e[e["YELLOW"]=503]="YELLOW"
e[e["GREEN"]=504]="GREEN"
e[e["BLUE"]=505]="BLUE"
e[e["PURPLE"]=506]="PURPLE"})((a.Mat=n)||(a.Mat=n={}))
var o=((t={})[n.FANCY_STONE]=true,t[n.CORAL]=true,t[n.CORAL_MUSHROOM]=true,t[n.STARFISH]=true,t[n.ANEMONE]=true,t)
a.UNRELEASED_ATTR1=o},{}],44:[function(e,r,a){"use strict"
a.chunkPosFromId=chunkPosFromId
a.parseChunkId=parseChunkId
a.chunkIdFromWorldPos=chunkIdFromWorldPos
a.posPairFromWorldPos=posPairFromWorldPos
a.megachunkIdFromWorldPos=megachunkIdFromWorldPos
a.parseWorldPos=parseWorldPos
a.isSpoiled=isSpoiled
a.spoil=spoil
a.unspoil=unspoil
var v=e("assert")
var t=e("../common/globals.js"),i=t.ID_FACTOR,n=t.ID2,l=t.MC_COUNT,f=t.MEGACHUNK_SIZE,o=t.MEGACHUNK_VOXEL_SIZE,s=t.CHUNK_SIZE
var u=Math.floor,c=Math.round
var _=new Int32Array(3)
var d=new Int32Array(3)
var h=new Int32Array(3)
var p={chunk_pos:_,mchunk_pos:d,local_pos:h,mcid:0}
function chunkPosFromId(e){_[2]=c(e/n)
e-=_[2]*n
_[1]=c(e/i)
e-=_[1]*i
_[0]=e
return _}function parseChunkId(e){chunkPosFromId(e)
d[0]=u(_[0]/f)
d[1]=u(_[1]/f)
d[2]=u(_[2]/f)
h[0]=_[0]-d[0]*f
h[1]=_[1]-d[1]*f
h[2]=_[2]-d[2]*f
p.mcid=(d[2]*i+d[1])*i+d[0]
return p}function chunkIdFromWorldPos(e){_[0]=u(e[0]/s)
_[1]=u(e[1]/s)
_[2]=u(e[2]/s)
return(_[2]*i+_[1])*i+_[0]}var g={chunk_pos:_,local_pos:h}
function posPairFromWorldPos(e){g.chunk_id=chunkIdFromWorldPos(e)
h[0]=e[0]-_[0]*s
h[1]=e[1]-_[1]*s
h[2]=e[2]-_[2]*s
g.idx=(h[2]*s+h[1])*s+h[0]
return g}function megachunkIdFromWorldPos(e){d[0]=u(e[0]/o)
d[1]=u(e[1]/o)
d[2]=u(e[2]/o)
return(d[2]*i+d[1])*i+d[0]}var m={chunk_pos:_,mchunk_pos:d,local_pos:h,chunk_id:0,mcid:0}
function parseWorldPos(e){m.chunk_id=chunkIdFromWorldPos(e)
d[0]=u(_[0]/f)
d[1]=u(_[1]/f)
d[2]=u(_[2]/f)
h[0]=_[0]-d[0]*f
h[1]=_[1]-d[1]*f
h[2]=_[2]-d[2]*f
m.mcid=(d[2]*i+d[1])*i+d[0]
return m}function isSpoiled(e,r){var a=(r[2]*f+r[1])*f+r[0]
v(a>=0&&a<l)
var t=false
var i=0
var n=0
while(n<=a){n+=e[i++]
t=!t}return!t}function setPristine(e,r,a){var t=(r[2]*f+r[1])*f+r[0]
v(t>=0&&t<l)
var i=false
var n=0
var o=0
var s=0
while(o<=t){s=o
o+=e[n++]
i=!i}if(i===a)return false
e[--n]--
if(t===o-1){if(n===e.length-1)e.push(1)
else e[n+1]++
if(!e[n]&&0!==n){e[n-1]+=e[n+1]
e.splice(n,2)}}else if(t===s)if(0===n){v(!a)
e.splice(n,0,0,1)}else e[n-1]++
else{e.splice(n+1,0,1,o-t-1)
e[n]=t-s}return true}function spoil(e,r){return setPristine(e,r,false)}function unspoil(e,r){return setPristine(e,r,true)}},{"../common/globals.js":41,assert:void 0}],45:[function(J,e,$){(function(Q){(function(){"use strict"
$.VoxelDataBase=VoxelDataBase
$.createUtilVD=createUtilVD
$.ZMap=ZMap
$.zmapDeserialize=zmapDeserialize
$.zmapSerialize=zmapSerialize
$.resetDayIndex=resetDayIndex
$.LIGHT_DECREASE=$.LIGHT_INCREASE=$.TORCH_DECREASE=$.TORCH_INCREASE=$.SUN_DECREASE=$.SUN_INCREASE=$.ZMAP_UNDERGROUND=$.ZMAP_MAX=$.ZMAP_UNKNOWN=$.UNCHUNKED_ID=$.ANIM_TYPE_POS=$.ANIM_TYPE_PLAYER=$.ANIM_STYLE_BEAM=$.ANIM_STYLE_PHYS=$.TRANS_INV_EQUIP=$.TRANS_INV_PLAYER=$.TRANSACT_LEAPGATE_PROGRESS=$.TRANSACT_BLUEBOX_INFO=$.TRANSACT_VOLUME_MOD=$.TRANSACT_SETTLEMENT_PROGRESS=$.TRANSACT_STAT=$.TRANSACT_ITEM_ANIM=$.TRANSACT_PROP_MOD=$.TRANSACT_USER_ATTRIB=$.TRANSACT_INV_ATTRIB=$.TRANSACT_PROP_INV_MOD=$.TRANSACT_INV_MOD=$.TRANSACT_BAG_ADD=$.TRANSACT_PROP_SET=$.TRANSACT_VOXEL_SET_RANGE=$.TRANSACT_VOXEL_SET=$.TRANSACT_PRISTINE=$.voxel_data_mem_tracker=void 0
var f=J("assert")
var s=J("../glov/common/util").deepEqual
var e=J("../common/globals")
var n=e.CHUNK_SIZE
var o=e.CS2
var h=e.TILE_PROP_BASE
var u=Math.ceil,c=Math.max
var a={count:0,bytes:0}
$.voxel_data_mem_tracker=a
var r="pristine"
$.TRANSACT_PRISTINE=r
var t="set"
$.TRANSACT_VOXEL_SET=t
var i="setx"
$.TRANSACT_VOXEL_SET_RANGE=i
var v="prop"
$.TRANSACT_PROP_SET=v
var l="bag"
$.TRANSACT_BAG_ADD=l
var _="inv"
$.TRANSACT_INV_MOD=_
var d="pinv"
$.TRANSACT_PROP_INV_MOD=d
var p="iattr"
$.TRANSACT_INV_ATTRIB=p
var g="uattr"
$.TRANSACT_USER_ATTRIB=g
var m="pmod"
$.TRANSACT_PROP_MOD=m
var E="anim"
$.TRANSACT_ITEM_ANIM=E
var T="stat"
$.TRANSACT_STAT=T
var S="sprog"
$.TRANSACT_SETTLEMENT_PROGRESS=S
var A="volm"
$.TRANSACT_VOLUME_MOD=A
var R="bbinfo"
$.TRANSACT_BLUEBOX_INFO=R
var O="lgprog"
$.TRANSACT_LEAPGATE_PROGRESS=O
var I=1
$.TRANS_INV_PLAYER=I
var y=2
$.TRANS_INV_EQUIP=y
var b=1
$.ANIM_STYLE_PHYS=b
var w=2
$.ANIM_STYLE_BEAM=w
var D=1
$.ANIM_TYPE_PLAYER=D
var N=2
$.ANIM_TYPE_POS=N
var L=11
var M=32768
$.UNCHUNKED_ID=M
var P=-32768
$.ZMAP_UNKNOWN=P
var C=32767
$.ZMAP_MAX=C
f(P<0)
var k="underground"
$.ZMAP_UNDERGROUND=k
var x=1
$.SUN_INCREASE=x
var U=2
$.SUN_DECREASE=U
var F=4
$.TORCH_INCREASE=F
var G=8
$.TORCH_DECREASE=G
var B=x|F
$.LIGHT_INCREASE=B
var H=U|G
$.LIGHT_DECREASE=H
var W=new Int8Array([n,n,n])
function VoxelDataBase(e,r,a,t,i,n){this.pos=new Int32Array(3)
this.pos_world=new Int32Array(3)
this.mem_tracker=n
this.mem_tracker.count++
this.baseInit(e,r,a,t,i)}VoxelDataBase.prototype.baseInit=function(e,r,a,t,i){this.pos[0]=e
this.pos[1]=r
this.pos[2]=a
this.pos_world[0]=e*n
this.pos_world[1]=r*n
this.pos_world[2]=a*n
this.chunk_id=t
this.size=i||W
this.byte_size=this.size[0]*this.size[1]*this.size[2]
this.stride1=this.size[0]
this.stride2=this.size[0]*this.size[1]
this.data=null
this.liquid=null
this.props=null
this.setMemUsage(0)}
VoxelDataBase.prototype.setMemUsage=function(e){if(e!==this.mem_last_bytes){this.mem_tracker.bytes+=e-(this.mem_last_bytes||0)
this.mem_last_bytes=e}}
function createUtilVD(e){var r=new VoxelDataBase(0,0,0,M,e,a)
r.alloc()
return r}function serializeUInt8Array(e,r,a){if(!r)e.push(a,0)
else{var t=r[0]
var i=1
for(var n=1;n<a;++n)if(r[n]!==t){e.push(i,t)
i=1
t=r[n]}else i++
e.push(i,t)}}function deserializeUInt8ArrayFromBuffer(e,r,a){var t=r.str,i=r.offs
var n
function getc(){var e=t[i++]
if(e<=127)return e
else if(e>=192&&e<224)return(31&e)<<6|63&t[i++]
else if(e>=224&&e<240)return(15&e)<<12|(63&t[i++])<<6|63&t[i++]
else{n="Bad character"
return 0}}var o=i
var s=getc()
var v=getc()
if(n)return n
var l
if(!v&&s===a)l=null
else{i=o
l=new Uint8Array(a)
var f=0
for(;i<t.length&&f<a;){var u=getc()
var c=getc()
if(n)return n
if(f+u>a)return"overflow"
while(u){l[f++]=c
u--}}}r.offs=i
e.data=l
return null}function deserializeUInt8Array(e,r,a){var t=r.str
var i=t.charCodeAt(r.offs)
if(!t.charCodeAt(r.offs+1)&&i===a){r.offs+=2
return e.data=null}var n=new Uint8Array(a)
var o=0
for(;r.offs<t.length&&o<a;r.offs+=2){var s=t.charCodeAt(r.offs)
var v=t.charCodeAt(r.offs+1)
if(o+s>a)return"overflow"
while(s){n[o++]=v
s--}}e.data=n
return null}var V
var q
var z
if("undefined"===typeof process){V=function utf8FromBuffer(){f(false)}
q=function bufferAlloc(e){return new Uint8Array(e)}
z=function bufferClone(e,r,a){return e.slice(0,a)}}else{f(Q.alloc(1)instanceof Uint8Array)
V=function utf8FromBuffer(e,r){return Q.from(e.buffer,e.byteOffset+r,e.byteLength-r).toString("utf8")}
q=function bufferAlloc(e){return Q.alloc(e)}
z=function bufferClone(e,r,a){return Q.from(e.slice(r,a))}}VoxelDataBase.prototype.deserialize=function(e,r){if(!e)return false
var a=e instanceof Uint8Array
var t=a?e[0]:e.charCodeAt(0)
if(t!==L&&10!==t)return false
var i={str:e,offs:1}
var n={}
var o=a?deserializeUInt8ArrayFromBuffer:deserializeUInt8Array
var s=o(n,i,this.byte_size)
if(s){console.error(s)
return false}this.data=n.data
if(s=o(n,i,this.byte_size)){console.error(s)
return false}this.liquid=n.data
var v=0
if(this.data)v+=this.byte_size
if(this.liquid)v+=this.byte_size
if(i.offs!==e.length){if(!this.props)this.props={}
var l
if(a)l=V(e,i.offs)
else l=e.slice(i.offs)
v+=l.length
var f
try{f=JSON.parse(l)}catch(e){}if(!Array.isArray(f)||!f.length){console.error("invalid prop_list")
return false}if(r&&!this.data)this.alloc()
for(var u=0;u<f.length;++u){var c=f[u]
if(!Array.isArray(c)||4!==c.length){console.error("invalid prop_entry")
return false}var _=this.deserializeProp(c)
if(!_){console.error("deserializeProp failed")
return false}var d=_.pos[2]*this.stride2+_.pos[1]*this.stride1+_.pos[0]
if((this.props[d]=_).baked){if(!this.baked_props)this.baked_props={}
this.baked_props[d]=_.baked}if(_.draw){if(!this.drawable_props)this.drawable_props={}
this.drawable_props[d]=_}if(r&&this.data[d]!==h)this.data[d]=h}}this.setMemUsage(v)
return true}
var j=null
var Y=0
var K
function workBufWriteUTF8(e){if(e<=127)j[K++]=e
else if(e<=2047){j[K++]=e>>6|192
j[K++]=63&e|128}else if(e<=65535){j[K++]=e>>12|224
j[K++]=e>>6&63|128
j[K++]=63&e|128}else f(false,"Invalid character: "+e)}VoxelDataBase.prototype.serialize=function(e,r){f(!this.disposed)
var a=[L]
serializeUInt8Array(a,this.data,this.byte_size)
serializeUInt8Array(a,this.liquid,this.byte_size)
var t=""
if(this.props){var i=[]
for(var n in this.props)i.push(this.serializeProp(this.props[n]))
if(i.length)t=JSON.stringify(i)}if(r){var o=0
if(this.data)o+=this.byte_size
if(this.liquid)o+=this.byte_size
o+=t.length
this.setMemUsage(o)}if(e){var s=3*a.length+4*t.length
if(s>Y){Y=c(u(1.5*Y),s)
j=q(Y)}for(var v=K=0;v<a.length;++v)workBufWriteUTF8(a[v])
for(var l=0;l<t.length;++l)workBufWriteUTF8(t.charCodeAt(l))
f(K<Y)
return z(j,0,K)}else return""+String.fromCharCode.apply(null,a)+t}
var Z=new Uint8Array([0])
function unit8ArrayEquals(e,r){r=r||Z
var a=c((e=e||Z).length,r.length)
for(var t=0;t<a;++t)if((e[t]||0)!==(r[t]||0))return false
return true}VoxelDataBase.prototype.equals=function(e){f(!this.disposed)
f(!e.disposed)
if(!unit8ArrayEquals(this.data,e.data))return false
if(!unit8ArrayEquals(this.liquid,e.liquid))return false
var r=this.props||{}
var a=e.props||{}
for(var t in r){var i=r[t]
var n=a[t]
if(!n)return false
i=i.toJSON()
n=n.toJSON()
if(!s(i,n))return false}for(var o in a)if(!r[o])return false
return true}
VoxelDataBase.prototype.get=function(e,r){if(e[0]<0||e[1]<0||e[2]<0||e[0]>=this.size[0]||e[1]>=this.size[1]||e[2]>=this.size[2])return 0
var a=e[2]*this.stride2+e[1]*this.stride1+e[0]
if(r)return this.liquid[a]
else return this.data[a]}
VoxelDataBase.prototype.set=function(e,r,a){f(!(e[0]<0||e[1]<0||e[2]<0||e[0]>=this.size[0]||e[1]>=this.size[1]||e[2]>=this.size[2]))
var t=e[2]*this.stride2+e[1]*this.stride1+e[0]
if(a)this.liquid[t]=r
else this.data[t]=r}
VoxelDataBase.prototype.getDirect=function(e,r){var a=r?this.liquid:this.data
if(!a)return null
return a[e]}
VoxelDataBase.prototype.getProp=function(e){if(!this.props||e[0]<0||e[1]<0||e[2]<0||e[0]>=this.size[0]||e[1]>=this.size[1]||e[2]>=this.size[2])return null
return this.props[e[2]*this.stride2+e[1]*this.stride1+e[0]]}
VoxelDataBase.prototype.getPropDirect=function(e){if(!this.props)return null
return this.props[e]}
VoxelDataBase.prototype.alloc=function(e){if(e){if(!this.liquid)this.liquid=new Uint8Array(this.byte_size)}else if(!this.data)this.data=new Uint8Array(this.byte_size)}
function ZMap(e){this.data=e||new Int16Array(o)}var X=32
function zmapDeserialize(e,r){if(r.charCodeAt(0)!==X)return"bad version"
if(e)f.equal(e.length,o)
var a=0
for(var t=1;t<r.length;){var i=r.charCodeAt(t++)-33
if(-1===i)i=-(r.charCodeAt(t++)-33)
var n=r.charCodeAt(t++)-31
if(a+n>o)return"overflow"
if(e)while(n){e[a++]=i;--n}else a+=n}if(a!==o)return"underflow"
return null}function zmapSerialize(e){f(e instanceof Int16Array)
f.equal(e.length,o)
var r=[X]
var a=e[0]
var t=0
for(var i=0;i<o;++i){if(e[i]!==a){if(a<0){r.push(32)
a*=-1}r.push(a+33)
r.push(t+31)
a=e[i]
t=0}++t}if(a<0){r.push(32)
a*=-1}r.push(a+33)
r.push(t+31)
return String.fromCharCode.apply(null,r)}function resetDayIndex(e){return 1}}).call(this)}).call(this,J("buffer").Buffer)},{"../common/globals":41,"../glov/common/util":58,assert:void 0,buffer:void 0}],46:[function(e,r,a){"use strict"
a.waygateImagePath=waygateImagePath
a.waygate_invalid_ids=a.waygate_invalid_regex=a.waygate_valid_regex=a.MAX_WAYGATE_TARGETS=a.WAYGATE_ID_LEN=a.WAYGATE_NAME_LEN=a.MAX_WAYGATES=a.FLAT_SEED_EMPTY=a.FLAT_SEED_WATER=a.FLAT_SEED_GRASS_ON_STONE=void 0
var t
var i=2
a.FLAT_SEED_GRASS_ON_STONE=i
var n=4
a.FLAT_SEED_WATER=n
var o=225
a.FLAT_SEED_EMPTY=o
var s=1e3
a.MAX_WAYGATES=s
var v=32
a.WAYGATE_NAME_LEN=v
var l=16
a.WAYGATE_ID_LEN=l
var f=100
a.MAX_WAYGATE_TARGETS=f
var u=/^[a-z0-9_]{1,16}$/
a.waygate_valid_regex=u
var c=/^__.*__$/
a.waygate_invalid_regex=c
var _={info:1,admin:1,manage:1,share:1,players:1,stats:1,connect:1,undefined:1}
a.waygate_invalid_ids=_
var d=((t={})[i]="grass",t[n]="water",t[o]="empty",t[10]="snow",t[11]="sand",t[3]="stone",t[12]="stone_dark",t[13]="stone_light",t[14]="stone_red",t)
function waygateImagePath(e,r,a){var t=(e=e||{}).waygates||{}
if(!t[a=a||"default"])a="default"
var i=t[a]&&t[a].imgid
var n
if(i){var o=e.image&&e.image.sets&&e.image.sets[i]
var s=o&&o[r]
if(s)n=""+(o.prefix||"")+s}if(!n){n="img/placeholder/"
if("flat"===e.world_type)n+="flat_"+(d[e.seed]||"stone")
else n+="procgen"
n+="_"+r+"."+("thumb"===r?"png":"jpg")}return n}},{}],47:[function(e,r,a){"use strict"
a.fetch=fetch
a.ERR_CONNECTION=void 0
var c=e("assert")
var _=e("../common/util.js").once
var d="ERR_CONNECTION"
a.ERR_CONNECTION=d
var t=/\/\/[^/]+\/([^?#]+)/
var i=/([^?#]+)/
function labelFromURL(e){var r=e.match(t)
if(r)return r[1]
return(r=e.match(i))?r[1]:e}function fetch(e,t){t=_(t)
var r=e.method,i=e.url,n=e.response_type,o=e.label,a=e.body,s=e.headers,v=void 0===s?{}:s,l=e.timeout
r=r||"GET"
c(i)
o=o||labelFromURL(i)
var f=new XMLHttpRequest
f.open(r,i,true)
if(l)f.timeout=l
if(n&&"json"!==n)f.responseType=n
for(var u in v)f.setRequestHeader(u,v[u])
f.onload=function(){profilerStart("fetch_onload:"+o)
if(0!==f.status&&f.status<200||f.status>=300){var e
try{e=f.responseText}catch(e){}t(String(f.status),e||"")}else if("json"===n){var r
var a
try{r=f.responseText
a=JSON.parse(r)}catch(e){console.error("Received invalid JSON response from "+i+": "+(r||"<empty response>"))
t(e)
profilerStop()
return}t(null,a)}else if("arraybuffer"===n)if(f.response)t(null,f.response)
else t("empty response")
else t(null,f.responseText)
profilerStop()}
f.onerror=function(){profilerStart("fetch_onerror:"+o)
t(d)
profilerStop()}
if(void 0!==a)if("object"===typeof a){f.setRequestHeader("Content-Type","application/json")
a=JSON.stringify(a)}else a=String(a)
f.send(a)}},{"../common/util.js":58,assert:void 0}],48:[function(e,r,a){"use strict"
a.filewatchOn=filewatchOn
a.filewatchMessageHandler=filewatchMessageHandler
a.filewatchTriggerChange=filewatchTriggerChange
a.filewatchStartup=filewatchStartup
var t=e("assert")
var n={}
var o=[]
function filewatchOn(e,r){if("."===e[0]){t(!n[e])
n[e]=r}else o.push([e,r])}var s
function filewatchMessageHandler(e){s=e}function onFileChange(e){console.log("FileWatch change: "+e)
var r=e.lastIndexOf(".")
var a=false
if(-1!==r){var t=e.slice(r)
if(n[t])if(false!==n[t](e))a=true}for(var i=0;i<o.length;++i)if(e.match(o[i][0]))if(false!==o[i][1](e))a=true
if(s&&a)s("Reloading: "+e)}function filewatchTriggerChange(e){onFileChange(e)}function filewatchStartup(e){e.onMsg("filewatch",onFileChange)}},{assert:void 0}],49:[function(e,r,a){"use strict"
var v=Math.max,l=Math.min,f=Math.floor
a.rgbToHSV=function rgbToHSV(e,r){var a=r[0]
var t=r[1]
var i=r[2]
var n=l(a,t,i)
var o=v(a,t,i)
var s=(e[2]=o)-n
if(0!==s)e[1]=s/o
else{e[1]=0
e[0]=0
return}if(a===o)e[0]=(t-i)/s
else if(t===o)e[0]=2+(i-a)/s
else e[0]=4+(a-t)/s
e[0]*=60
if(e[0]<0)e[0]+=360}
a.hsvToRGB=function hsvToRGB(e,r,a,t){if(0===a){e[0]=e[1]=e[2]=t
return e}if((r/=60)>=6)r-=6
var i=f(r)
var n=r-i
var o=t*(1-a)
var s=t*(1-a*n)
var v=t*(1-a*(1-n))
switch(i){case 0:e[0]=t
e[1]=v
e[2]=o
break
case 1:e[0]=s
e[1]=t
e[2]=o
break
case 2:e[0]=o
e[1]=t
e[2]=v
break
case 3:e[0]=o
e[1]=s
e[2]=t
break
case 4:e[0]=v
e[1]=o
e[2]=t
break
default:e[0]=t
e[1]=o
e[2]=s}return e}},{}],50:[function(e,r,a){"use strict"
var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array]
if(!Uint8Array.prototype.slice)t.forEach(function(n){Object.defineProperty(n.prototype,"slice",{value:function value(e,r){if(void 0===r)r=this.length
if(r<0)r=this.length-r
if((e=e||0)>=this.length)e=this.length-1
if(r>this.length)r=this.length
if(r<e)r=e
var a=r-e
var t=new n(a)
for(var i=0;i<a;++i)t[i]=this[e+i]
return t}})})
function cmpDefault(e,r){return e-r}var i={join:function join(e){return Array.prototype.join.call(this,e)},fill:function fill(e,r,a){if(void 0===a)a=this.length
for(var t=r||0;t<a;++t)this[t]=e
return this},sort:function sort(e){Array.prototype.sort.call(this,e||cmpDefault)}}
var n=function _loop(r){if(!Uint8Array.prototype[r])t.forEach(function(e){Object.defineProperty(e.prototype,r,{value:i[r]})})}
for(var o in i)n(o)
if(!String.prototype.endsWith){Object.defineProperty(String.prototype,"endsWith",{value:function value(e){return this.slice(-e.length)===e}})
Object.defineProperty(String.prototype,"startsWith",{value:function value(e){return this.slice(0,e.length)===e}})}if(!String.prototype.includes)Object.defineProperty(String.prototype,"includes",{value:function value(e,r){return-1!==this.indexOf(e,r)}})
if(!Array.prototype.includes)Object.defineProperty(Array.prototype,"includes",{value:function value(e,r){return-1!==this.indexOf(e,r)}})
if(!Object.values)Object.values=function values(r){return Object.keys(r).map(function(e){return r[e]})}
if(!Object.entries)Object.entries=function entries(e){var r=Object.keys(e)
var a=new Array(r.length)
for(var t=r.length-1;t>=0;--t)a[t]=[r[t],e[r[t]]]
return a}
if(!Object.assign)Object.assign=function assign(e,r){for(var a=1;a<arguments.length;++a){var t=arguments[a]
for(var i in t)e[i]=t[i]}return e}
if(!Math.sign)Math.sign=function sign(e){return e<0?-1:e>0?1:0}
if("undefined"!==typeof window){if(!window.Intl)window.Intl={}
if(!window.Intl.NumberFormat){window.Intl.NumberFormat=function(){}
window.Intl.NumberFormat.prototype.format=function(e){return String(e)}}if(!window.Intl.DateTimeFormat){window.Intl.DateTimeFormat=function(){}
window.Intl.DateTimeFormat.prototype.format=function(e){return String(e)}}}},{}],51:[function(e,r,a){"use strict"
a.quat=quat
a.qiNegW=qiNegW
a.qiNormalize=qiNormalize
a.qFromAxisAngle=qFromAxisAngle
a.qFromYPR=qFromYPR
a.qRotateX=qRotateX
a.qRotateY=qRotateY
a.qRotateZ=qRotateZ
a.qSlerp=qSlerp
a.qTransformVec3=qTransformVec3
a.qMult=qMult
a.qInvert=qInvert
a.qLerp=qLerp
a.unit_quat=void 0
var t=e("../common/vmath.js"),i=t.rovec4,n=t.vec4
var g=Math.acos,d=Math.cos,m=Math.sin,o=Math.sqrt
var E=1e-6
var s=i(0,0,0,-1)
a.unit_quat=s
function quat(){return n(0,0,0,-1)}a.createQuat=quat
function qiNegW(e){if(e[3]>0){e[0]*=-1
e[1]*=-1
e[2]*=-1
e[3]*=-1}}function qiNormalize(e){var r=o(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])
if(0!==r){var a=1/r
e[0]*=a
e[1]*=a
e[2]*=a
e[3]*=a}qiNegW(e)}function qFromAxisAngle(e,r,a){var t=m(a*=.5)
e[0]=t*r[0]
e[1]=t*r[1]
e[2]=t*r[2]
e[3]=d(a)
qiNegW(e)
return e}function qFromYPR(e,r,a,t){var i=m(.5*a)
var n=d(.5*a)
var o=m(.5*r)
var s=d(.5*r)
var v=m(.5*t)
var l=d(.5*t)
var f=n*s
var u=i*o
var c=i*s
var _=n*o
e[0]=c*l-_*v
e[1]=u*l+f*v
e[2]=_*l+c*v
e[3]=f*l-u*v
qiNormalize(e)
return e}function qRotateX(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
var o=r[3]
var s=m(a*=.5)
var v=d(a)
e[0]=t*v+o*s
e[1]=i*v+n*s
e[2]=n*v-i*s
e[3]=o*v-t*s
return e}function qRotateY(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
var o=r[3]
var s=m(a*=.5)
var v=d(a)
e[0]=t*v-n*s
e[1]=i*v+o*s
e[2]=n*v+t*s
e[3]=o*v-i*s
return e}function qRotateZ(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
var o=r[3]
var s=m(a*=.5)
var v=d(a)
e[0]=t*v+i*s
e[1]=i*v-t*s
e[2]=n*v+o*s
e[3]=o*v-n*s
return e}function qSlerp(e,r,a,t){var i=a[0]
var n=a[1]
var o=a[2]
var s=a[3]
var v=t[0]
var l=t[1]
var f=t[2]
var u=t[3]
var c
var _
var d=i*v+n*l+o*f+s*u
if(d<0){d=-d
v=-v
l=-l
f=-f
u=-u}if(1-d>E){var h=g(d)
var p=m(h)
c=m((1-r)*h)/p
_=m(r*h)/p}else{c=1-r
_=r}e[0]=c*i+_*v
e[1]=c*n+_*l
e[2]=c*o+_*f
e[3]=c*s+_*u
return e}function qTransformVec3(e,r,a){var t=a[0]
var i=a[1]
var n=a[2]
var o=a[3]
var s=r[0]
var v=r[1]
var l=r[2]
var f=i*l-n*v
var u=n*s-t*l
var c=t*v-i*s
var _=i*c-n*u
var d=n*f-t*c
var h=t*u-i*f
var p=2*o
u*=p
c*=p
d*=2
h*=2
e[0]=s+(f*=p)+(_*=2)
e[1]=v+u+d
e[2]=l+c+h
return e}function qMult(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
var o=r[3]
var s=a[0]
var v=a[1]
var l=a[2]
var f=a[3]
e[0]=t*f+o*s+i*l-n*v
e[1]=i*f+o*v+n*s-t*l
e[2]=n*f+o*l+t*v-i*s
e[3]=o*f-t*s-i*v-n*l
return e}function qInvert(e,r){var a=r[0]
var t=r[1]
var i=r[2]
var n=r[3]
var o=a*a+t*t+i*i+n*n
var s=o?1/o:0
e[0]=-a*s
e[1]=-t*s
e[2]=-i*s
e[3]=n*s
return e}function qLerp(e,r,a,t){qiNormalize(a)
qiNormalize(t)
var i=(a[0]*t[0]+a[1]*t[1]+a[2]*t[2]+a[3]*t[3]<0?-1:1)*(1-r)
e[0]=a[0]*i+t[0]*r
e[1]=a[1]*i+t[1]*r
e[2]=a[2]*i+t[2]*r
e[3]=a[3]*i+t[3]*r
qiNormalize(e)
return e}},{"../common/vmath.js":60}],52:[function(e,r,a){"use strict"
a.randFastCreate=randFastCreate
a.randSimpleSpatial=randSimpleSpatial
function step2(e){e=e>>>0||22329833666
e^=e<<13
e^=e>>>17
e^=e<<5
e^=e<<13
return((e^=e>>>17)^e<<5)>>>0}function RandSeed2(e){this.seed=step2(e)}RandSeed2.prototype.reseed=function(e){this.seed=step2(e)}
RandSeed2.prototype.step=function(){var e=this.seed
e^=e<<13
e^=e>>>17
return(this.seed=(e^=e<<5)>>>0)-1}
RandSeed2.prototype.uint32=RandSeed2.prototype.step
RandSeed2.prototype.range=function(e){return this.step()*e*2.3283064376e-10|0}
RandSeed2.prototype.random=function(){return 2.3283064376e-10*this.step()}
RandSeed2.prototype.floatBetween=function(e,r){return e+(r-e)*this.random()}
function randFastCreate(e){return new RandSeed2(e)}var i=134775813
var n=1103515245
function randSimpleSpatial(e,r,a,t){return(((r^(a+=10327*t))*i^e+r)*(n*r<<16^n*a-i)>>>0)/4294967295}},{}],53:[function(e,r,a){"use strict"
a.webFSOnReady=webFSOnReady
a.webFSGetFileNames=webFSGetFileNames
a.webFSGetFile=webFSGetFile
a.webFSExists=webFSExists
a.webFSReportUnused=webFSReportUnused
a.webFSSetToWorkerCB=webFSSetToWorkerCB
a.webFSGetData=webFSGetData
a.webFSApplyReload=webFSApplyReload
a.webFSStartup=webFSStartup
a.webFSAPI=webFSAPI
var s=e("assert")
var t=e("../common/util")
var i=t.callEach
var n=t.clone
var o=t.deepEqual
var v=e("./filewatch")
var l=v.filewatchOn
var f=v.filewatchTriggerChange
var u
var c={}
var _={}
var d=false
var h=[]
function webFSOnReady(e){if(u)e()
else h.push(e)}function decode(e){var r=e[0]
var a=e[1]
var t=new Uint8Array(r)
var i=0
var n=0
while(i<r){var o=a.charCodeAt(n++)
if(126===o)o=0
else if(27===o)o=a.charCodeAt(n++)
t[i++]=o}s.equal(n,a.length)
s.equal(i,r)
return t}function webFSGetFileNames(e){s(u)
var r=[]
for(var a in u)if(a.startsWith(e))r.push(a)
return r}function webFSGetFile(e,r){s(u)
var a=c[e]
if(a)return a
_[e]=true
var t=u[e]
s(t,"Error loading file: "+e)
if("jsobj"===r){s(!Array.isArray(t))
a=d?n(t):t}else{s(Array.isArray(t))
if("text"===r)a=t[1]
else a=decode(t)}return c[e]=a}function webFSExists(e){s(u)
return Boolean(u[e])}function webFSReportUnused(e){e=e||/\.(fp|vp)$/
var r=0
for(var a in u)if(!_[a]&&!a.match(e)){console.warn("WebFS file bundled but unreferenced: "+a)
r+=u[a][0]}if(r)console.warn("WebFS wasting "+r+" bytes")}var p
function webFSSetToWorkerCB(e){p=e}function webFSGetData(){return u}function webFSApplyReload(e){var r=u
u=e
if(p)p(u)
c={}
_={}
for(var a in u){var t=r[a]
var i=u[a]
if(Array.isArray(t)){for(var n=0;n<i.length;++n)if(!t||i[n]!==t[n]){f(a)
break}}else if(!o(t,i))f(a)}}var g
function webFSReload(){d=true
window.glov_webfs=null
var e=document.createElement("script")
e.src=g+"fsdata.js?rl="+Date.now()
e.onload=function(){if(window.glov_webfs)webFSApplyReload(window.glov_webfs)}
document.getElementsByTagName("head")[0].appendChild(e)}function webFSStartup(e,r){u=e||{}
if(r){g=r
l("fsdata.js",webFSReload)}if(p)p(u)
i(h,h=null)}function webFSAPI(){return{getFileNames:webFSGetFileNames,getFile:webFSGetFile,filewatchOn:l}}},{"../common/util":58,"./filewatch":48,assert:void 0}],54:[function(e,r,a){"use strict"
a.sendmsg=sendmsg
a.debugmsg=debugmsg
a.addHandler=addHandler
a.startWork=startWork
a.endWork=endWork
e("./polyfill.js")
if(!self.profilerStart)self.profilerStart=self.profilerStop=self.profilerStopStart=function(){}
var t=e("assert")
var i=e("./webfs.js")
var n=i.webFSApplyReload
var o=i.webFSGetData
var s=i.webFSStartup
function sendmsg(e,r,a){postMessage({id:e,data:r},a)}function debugmsg(e,r){sendmsg("debugmsg",{msg:e,clear:r})}self.addEventListener("error",function(e){if(e.error){sendmsg("error",{message:e.error.message,stack:e.error.stack})
e.preventDefault()}})
var v=[]
function addHandler(e,r){t(!v[e])
v[e]=r}var l=0
var f=0
var u=[]
var c=Date.now()
var _=false
function reportTiming(e){if(e-c>100){var r=l+f
t(r<=e-c+10)
sendmsg("timing",{time_work:l,time_idle:f,elapsed:r,batches:u})
c=e
f=l=0
u.length=0}}var d=c
var h=0
function startWork(){var e=Date.now()
var r=e-d
if(_)u.push(r)
f+=r
h=e}function endWork(){var e=Date.now()
var r=(d=e)-h
l+=r
if(_){u.push(r)
reportTiming(e)}}onmessage=function onmessage(e){startWork()
if((e=e.data)instanceof Object&&e.id){t(v[e.id])
try{v[e.id](e.data)}catch(e){sendmsg("error",{message:e.message||String(e),stack:e.stack})}}else console.log("worker (worker thread) unhandled message",e)
endWork()}
addHandler("busy",function(e){var r=Date.now()
while(Date.now()-r<e);sendmsg("busy_done",null)})
addHandler("timing_enable",function(e){_=e})
addHandler("webfs_data",function(e){if(o())n(e)
else s(e)})
addHandler("assert_now",function(){t(false)})
addHandler("assert_later",function(){setTimeout(function assertLater(){t(false)},100)})
addHandler("crash_now",function(){null.foo.bar++})
addHandler("crash_later",function(){setTimeout(function crashLater(){null.foo.bar++},100)})
addHandler("reject_now",function(){new Promise(function(e,r){r(new Error("client_worker_reject_now"))})})
sendmsg("log","WebWorker communication initialized")},{"./polyfill.js":50,"./webfs.js":53,assert:void 0}],55:[function(e,r,a){(function(n){(function(){"use strict"
var i=Math.floor
var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
var v="="
function encode(e,r,a){var t=e.u8
var i=""
var n
var o
for(n=0;n<a-2;n+=3){i+=s[t[o=r+n]>>2]
i+=s[((3&t[o])<<4)+(t[o+1]>>4)]
i+=s[((15&t[o+1])<<2)+(t[o+2]>>6)]
i+=s[63&t[o+2]]}if(a%3){i+=s[t[o=r+(n=a-a%3)]>>2]
if(a%3===2){i+=s[((3&t[o])<<4)+(t[o+1]>>4)]
i+=s[(15&t[o+1])<<2]
i+=v}else{i+=s[(3&t[o])<<4]
i+=v+v}}return i}function decodeNativeBrowser(e,r){var a=window.atob(e)
var t=a.length
var i=r(t)
var n=i.u8
for(var o=0;o<t;++o)n[o]=a.charCodeAt(o)
i.decode_size=t
return i}function encodeNativeNode(e,r,a){return n.from(e.buffer).toString("base64",r,r+a)}function decodeNativeNode(e,r){var a=r(3*(e.length>>2)+i(e.length%4/1.5))
var t=n.from(a.buffer)
a.decode_size=t.write(e,"base64")
return a}var e="undefined"!==typeof window
a.base64Decode=e?decodeNativeBrowser:decodeNativeNode
a.base64Encode=e?encode:encodeNativeNode
a.base64CharTable=s}).call(this)}).call(this,e("buffer").Buffer)},{buffer:void 0}],56:[function(w,e,D){(function(b){(function(){"use strict"
D.packetBufPoolAlloc=packetBufPoolAlloc
D.packetBufPoolFree=packetBufPoolFree
D.packetDefaultFlags=packetDefaultFlags
D.packetEnableDebug=packetEnableDebug
var i=D.PACKET_DEBUG=1
var e=D.PACKET_RESERVED1=2
var r=D.PACKET_RESERVED2=4
var v=i|e|r
var o=256
var l=w("assert")
var s=Math.max
var a=w("./util.js"),t=a.deprecate,n=a.isInteger,f=a.log2
var u=w("./base64.js"),c=u.base64Encode,_=u.base64Decode
t(D,"default_flags")
var d=[void 0,null,0,false,"",NaN]
var h=1024
var p="PKTERR_UNDERRUN"
var g=5e3
var m=5e3
var E=[0,10,10,20,20,20,20,20,20,20,5e3,20,20,20,20,20,20,10,10]
var T=[]
var S=[]
var A=E.map(function(){return[]})
function allocDataView(e){var r=f(e)
l(r)
if(r>=A.length)r=0
if(r){e=1<<r
if(A[r].length)return A[r].pop()}var a=new Uint8Array(e)
var t=new DataView(a.buffer)
t.u8=a
if(r)t.packet_pool_idx=r
return t}function wrapU8AsDataView(e){var r=new DataView(e.buffer,e.byteOffset,e.byteLength)
r.u8=e
return r}function utf8ByteLength(e){var r=e.length
var a=r
for(var t=0;t<r;++t){var i=e.charCodeAt(t)
if(i>127){++a
if(i>2047){++a
if(i>65535){++a
if(i>2097151){++a
if(i>67108863)++a}}}}}return a}function utf8WriteChar(e,r,a){if(a>1114111)a=65535
if(a<=127)e.u8[r++]=a
else if(a<=2047){e.u8[r++]=a>>6|192
e.u8[r++]=63&a|128}else if(a<=65535){e.u8[r++]=a>>12|224
e.u8[r++]=a>>6&63|128
e.u8[r++]=63&a|128}else if(a<=1114111){e.u8[r++]=a>>18|240
e.u8[r++]=a>>12&63|128
e.u8[r++]=a>>6&63|128
e.u8[r++]=63&a|128}else l(false)
return r}function poolBuf(e){l(e)
l(e.u8)
var r=e.packet_pool_idx
if(r){var a=A[r]
if(a.length<E[r])a.push(e)}}function packetBufPoolAlloc(e){return allocDataView(e)}function packetBufPoolFree(e){poolBuf(e)}var R=0
function packetDefaultFlags(){return R}function packetEnableDebug(e){if(e)R|=i}function Packet(e,r,a){this.reinit(e,r,a)}Packet.prototype.reinit=function(e,r,a){this.flags=e||0
this.has_flags=false
this.buf=null
this.buf_len=0
this.buf_offs=0
this.bufs=null
this.bsizes=null
this.readable=false
this.ref_count=1
this.pak_debug=a
if(r){this.fit(r,true)
this.buf_len=r}}
Packet.prototype.getRefCount=function(){return this.ref_count}
Packet.prototype.ref=function(){l(this.ref_count);++this.ref_count}
Packet.prototype.pool=function(){l(this.ref_count)
if(--this.ref_count)return
if(this.flags&o);else{if(this.buf)poolBuf(this.buf)
if(this.bufs)for(var e=0;e<this.bufs.length;++e)poolBuf(this.bufs[e])}if(T.length<g)T.push(this)
if(this.pak_debug)this.pak_debug.poolDebug()}
Packet.prototype.totalSize=function(){var e=0
if(this.readable)return this.buf_len
if(this.bsizes)for(var r=0;r<this.bsizes.length;++r)e+=this.bsizes[r]
return e+this.buf_offs}
Packet.prototype.setReadable=function(){l(this.buf)
l(!this.bufs)
l(!this.readable)
this.readable=true}
Packet.prototype.makeReadable=function(){l(this.buf)
l(!this.readable)
var e=this.totalSize()
this.readable=true
if(!this.bufs){this.buf_len=e
this.buf_offs=0
return}var r=allocDataView(e)
var a=r.u8
var t=0
for(var i=0;i<this.bufs.length;++i){var n=this.bsizes[i]
var o=this.bufs[i]
if(t+o.u8.length>e){l.equal(o.byteOffset,0)
a.set(new Uint8Array(o.buffer,0,n),t)}else a.set(o.u8,t)
t+=n
poolBuf(o)}l.equal(this.buf.byteOffset,0)
a.set(new Uint8Array(this.buf.buffer,this.buf.byteOffset,this.buf_offs),t)
poolBuf(this.buf)
l.equal(t+this.buf_offs,e)
this.bufs=this.bsizes=null
this.buf=r
this.buf_offs=0
this.buf_len=e}
Packet.prototype.flush=function(){var e=this.buf,r=this.buf_offs
if(!this.bufs){this.bufs=[e]
this.bsizes=[r]}else{this.bufs.push(e)
this.bsizes.push(r)}this.buf=null
this.buf_len=0
this.buf_offs=0}
Packet.prototype.fit=function(e,r){var a=this.buf,t=this.buf_len,i=this.buf_offs
var n=i+e
if(n<=t){if(!r)this.buf_offs=n
return i}l(!this.readable)
if(a)this.flush()
this.buf_len=t=s(h,e)
this.buf=allocDataView(t)
this.buf_offs=r?0:e
return 0}
Packet.prototype.advance=function(e){var r=this.buf_offs
var a=r+e
if((this.buf_offs=a)>this.buf_len)throw new Error(p)
if(a===this.buf_len)this.pool()
return r}
Packet.prototype.ended=function(){return this.buf_offs===this.buf_len}
Packet.prototype.writeU8=function(e){l(e>=0&&e<256)
var r=this.fit(1)
this.buf.u8[r]=e}
Packet.prototype.readU8=function(){return this.buf.u8[this.advance(1)]}
Packet.prototype.writeInt=function(e){l(n(e))
var r=this.fit(9,true)
var a=this.buf
var t=e<0?1:0
if(t)e=-e
if(e<248){if(t)a.u8[r++]=255
a.u8[r++]=e}else if(e<65536){a.u8[r++]=248+t
a.setUint16(r,e,true)
r+=2}else if(e<4294967296){a.u8[r++]=250+t
a.setUint32(r,e,true)
r+=4}else{a.u8[r++]=252+t
var i=e>>>0
a.setUint32(r,i,true)
a.setUint32(r+=4,(e-i)/4294967296,true)
r+=4}this.buf_offs=r}
Packet.prototype.zeroInt=function(){var e=this.buf.u8[this.buf_offs]
if(e<248){this.buf.u8[this.buf_offs++]=0
return}this.buf_offs++
var r
switch(e){case 253:case 252:r=8
break
case 251:case 250:r=4
break
case 249:case 248:r=2
break
case 255:r=1
break
default:throw new Error("PKTERR_PACKED_INT")}while(r){--r
this.buf.u8[this.buf_offs++]=0}}
Packet.prototype.readInt=function(){var e=this.buf.u8[this.advance(1)]
if(e<248)return e
var r=1
switch(e){case 249:r=-1
case 248:return r*this.buf.getUint16(this.advance(2),true)
case 251:r=-1
case 250:return r*this.buf.getUint32(this.advance(4),true)
case 253:r=-1
case 252:var a=this.buf.getUint32(this.advance(4),true)
return r*(4294967296*this.buf.getUint32(this.advance(4),true)+a)
case 255:return-this.buf.u8[this.advance(1)]
default:throw new Error("PKTERR_PACKED_INT")}}
Packet.prototype.writeFloat=function(e){l.equal(typeof e,"number")
if(!e){this.buf.u8[this.fit(1)]=0
return}var r=this.fit(5,true)
this.buf.setFloat32(r,e,true)
if(this.buf.u8[r]<=1){this.buf.u8[r++]=1
this.buf.setFloat32(r,e,true)}this.buf_offs=r+4}
Packet.prototype.readFloat=function(){var e=this.advance(1)
var r=this.buf.u8[e]
if(!r)return 0
if(1===r)return this.buf.getFloat32(this.advance(4),true)
this.advance(3)
return this.buf.getFloat32(e,true)}
Packet.prototype.writeU32=function(e){l.equal(typeof e,"number")
this.buf.setUint32(this.fit(4),e,true)}
Packet.prototype.readU32=function(){return this.buf.getUint32(this.advance(4),true)}
Packet.prototype.writeString=function(e){l.equal(typeof e,"string")
var r=utf8ByteLength(e)
this.writeInt(r)
if(!r)return
var a=this.fit(r)
var t=this.buf
for(var i=0;i<e.length;++i){var n=e.charCodeAt(i)
if(n<=127)t.u8[a++]=n
else a=utf8WriteChar(t,a,n)}}
Packet.prototype.utf8ReadChar=function(e){var r=this.buf
if(e>=192&&e<224)return(31&e)<<6|63&r.u8[this.buf_offs++]
else if(e>=224&&e<240)return(15&e)<<12|(63&r.u8[this.buf_offs++])<<6|63&r.u8[this.buf_offs++]
else if(e>=240&&e<248)return(15&e)<<18|(63&r.u8[this.buf_offs++])<<12|(63&r.u8[this.buf_offs++])<<6|63&r.u8[this.buf_offs++]
else return 65533}
var O=[]
Packet.prototype.readString=function(){var e=this.readInt()
if(!e)return""
if(this.buf_offs+e>this.buf_len)throw new Error(p)
var r=this.buf
var a=this.buf_offs+e
var t
if(e>8192){t=""
while(this.buf_offs<a){var i=r.u8[this.buf_offs++]
if(i>127)i=this.utf8ReadChar(i)
t+=String.fromCharCode(i)}}else{O.length=e
var n=0
while(this.buf_offs<a){var o=r.u8[this.buf_offs++]
if(o>127)o=this.utf8ReadChar(o)
O[n++]=o}if(O.length!==n)O.length=n
t=String.fromCharCode.apply(void 0,O)}if(this.buf_offs===this.buf_len)this.pool()
return t}
Packet.prototype.writeAnsiString=function(e){l.equal(typeof e,"string")
var r=e.length
this.writeInt(r)
var a=this.fit(r)
var t=this.buf
for(var i=0;i<r;++i)t.u8[a++]=e.charCodeAt(i)}
Packet.prototype.readAnsiString=function(){var e=this.readInt()
if(!e)return""
var r=this.advance(e)
var a=this.buf
O.length=e
for(var t=0;t<e;++t)O[t]=a.u8[r++]
return String.fromCharCode.apply(void 0,O)}
Packet.prototype.writeJSON=function(e){if(!e){var r=d.indexOf(e)
l(-1!==r)
this.writeU8(r+1)
return}this.writeU8(0)
this.writeString(JSON.stringify(e))}
Packet.prototype.readJSON=function(){var e=this.readU8()
if(e){if(e-1>=d.length)throw new Error("PKTERR_JSON_HEADER")
return d[e-1]}var r=this.readString()
return JSON.parse(r)}
Packet.prototype.writeBuffer=function(e){this.writeInt(e.length)
if(e.length){var r=this.fit(e.length)
this.buf.u8.set(e,r)}}
var I=new Uint8Array(0)
Packet.prototype.readBuffer=function(e){var r=this.readInt()
if(!r)return I
var a=this.advance(r)
if(e)return this.buf.u8.slice(a,a+r)
else{var t=this.buf
return new Uint8Array(t.buffer,t.byteOffset+a,r)}}
Packet.prototype.writeBool=function(e){this.writeU8(e?1:0)}
Packet.prototype.readBool=function(){return Boolean(this.readU8())}
Packet.prototype.append=function(e){l.equal(this.flags&v,e.flags&v)
if(e.bufs)for(var r=0;r<e.bufs.length;++r){var a=e.bufs[r]
var t=e.bsizes[r]
var i=this.fit(t)
if(t!==a.byteLength)this.buf.u8.set(new Uint8Array(a.buffer,a.byteOffset,t),i)
else this.buf.u8.set(a.u8,i)}if(e.buf){var n=e.buf
var o=e.readable?e.buf_len:e.buf_offs
var s=this.fit(o)
if(o!==n.byteLength)this.buf.u8.set(new Uint8Array(n.buffer,n.byteOffset,o),s)
else this.buf.u8.set(n.u8,s)}}
Packet.prototype.appendRemaining=function(e){l.equal(this.flags&v,e.flags&v)
l(e.readable)
l(!e.bufs)
l(e.buf)
l(e.buf_offs<=e.buf_len)
var r=e.buf_len-e.buf_offs
if(r){var a=this.fit(r)
this.buf.u8.set(new Uint8Array(e.buf.buffer,e.buf.byteOffset+e.buf_offs,r),a)}e.pool()}
Packet.prototype.toJSON=function(){var e={f:this.flags}
if(this.bufs){e.b=[]
for(var r=0;r<this.bufs.length;++r)e.b.push(c(this.bufs[r],0,this.bsizes[r]))}if(this.buf)if(this.readable)e.d=c(this.buf,0,this.buf_len)
else e.d=c(this.buf,0,this.buf_offs)
return e}
Packet.prototype.setBuffer=function(e,r){l(!this.buf)
l(!this.bufs)
l(this.flags&o)
l(e instanceof Uint8Array)
this.buf=wrapU8AsDataView(e)
this.buf_len=r
this.readable=true}
Packet.prototype.getBuffer=function(){l(this.buf)
l(!this.bufs)
return this.buf.u8}
Packet.prototype.getBufferLen=function(){l(this.buf)
l(!this.bufs)
return this.readable?this.buf_len:this.buf_offs}
Packet.prototype.getOffset=function(){if(this.readable)return this.buf_offs
return this.totalSize()}
Packet.prototype.seek=function(e){l(this.readable)
l(e>=0&&e<=this.buf_len)
this.buf_offs=e}
Packet.prototype.writeFlags=function(){l(!this.has_flags)
l.equal(this.buf_offs,0)
this.writeU8(this.flags)
this.has_flags=true}
Packet.prototype.updateFlags=function(e){l(this.has_flags)
l(!(e&v))
this.flags=this.flags&v|e;(this.bufs?this.bufs[0]:this.buf).u8[0]=this.flags}
Packet.prototype.readFlags=function(){var e=this.readU8()
l.equal(e,255&this.flags)
this.has_flags=true
return this.flags}
Packet.prototype.getFlags=function(){return this.flags}
Packet.prototype.getInternalFlags=function(){return this.flags&v}
Packet.prototype.contents=function(){return"pak("+this.totalSize()+"b)"}
function PacketDebug(e,r){this.reinit(e,r)}PacketDebug.prototype.reinit=function(e,r){var a=this
this.in_pool=false
if(T.length){this.pak=T.pop()
this.pak.reinit(e,r,this)}else this.pak=new Packet(e,r,this)
this.warned=false
this.pool_timer=setTimeout(function(){console.warn("Packet not pooled after 5s: "+a.contents())
a.warned=true},m)}
PacketDebug.prototype.poolDebug=function(){if(this.warned)console.warn("Packet pooled after timeout")
else clearTimeout(this.pool_timer)
l(!this.in_pool)
this.in_pool=true
if(S.length<g)S.push(this)}
var y=[null,"U8","U32","Int","Float","String","AnsiString","JSON","Bool","Buffer"]
y.forEach(function(a,t){if(!a)return
var e="write"+a
var r="read"+a
var i=Packet.prototype[e]
var n=Packet.prototype[r]
PacketDebug.prototype[e]=function(e){this.pak.writeU8(t)
i.call(this.pak,e)}
PacketDebug.prototype[r]=function(e){var r=this.pak.readU8()
if(r!==t)l(false,"PacketDebug error: Expected "+a+"("+t+"), found "+y[r]+"("+r+")")
return n.call(this.pak,e)}})
PacketDebug.prototype.zeroInt=function(){this.pak.writeU8(3)
this.pak.zeroInt()};["ended","getBuffer","getBufferLen","getFlags","getInternalFlags","getOffset","getRefCount","makeReadable","pool","readFlags","ref","seek","setBuffer","setReadable","toJSON","totalSize","updateFlags","writeFlags"].forEach(function(e){var r=Packet.prototype[e]
PacketDebug.prototype[e]=function(){return r.apply(this.pak,arguments)}})
PacketDebug.prototype.append=function(e){l(e instanceof PacketDebug)
this.pak.append(e.pak)}
PacketDebug.prototype.appendRemaining=function(e){l(e instanceof PacketDebug)
this.pak.appendRemaining(e.pak)}
function format(e){switch(typeof e){case"object":if(e instanceof Uint8Array)return"u8<"+e.length+">"
return JSON.stringify(e)
default:return e}}PacketDebug.prototype.contents=function(){var e=this.pak
var r=e.getOffset()
var a=r
var t=["buf:"+e.buf_offs+"/"+e.buf_len]
if(e.bufs){e.makeReadable()
t.push("bufs")}else if(e.buf){if(e.readable)a=e.buf_len
e.buf_offs=0}else{t.push("empty")
a=-1}var i=e.ref_count
e.ref_count=2
try{if(!i)t.push("!ref_count=0!")
if(e.has_flags)t.push("flags:"+e.readU8())
while(e.buf_offs<a){var n=e.readU8()
var o=y[n]
if(!o){t.push("UnknownType:"+n)
break}var s=e["read"+o]()
t.push(o+":"+format(s))}}catch(e){t.push("Error dumping packet contents: "+e)}e.ref_count=i
e.buf_offs=r
return t.join(",")}
function packetCreate(e,r){if(void 0===e)e=R
var a=e&i?S:T
if(a.length){var t=a.pop()
t.reinit(e,r)
return t}if(e&i)return new PacketDebug(e,r)
return new Packet(e,r)}D.packetCreate=packetCreate
function packetFromBuffer(e,r,a){var t=e[0]
l.equal(typeof t,"number")
if(a){l(r)
l(e.buffer instanceof ArrayBuffer)
var i=packetCreate(t,r)
if(e.byteLength!==r)e=b.from(e.buffer,0,r)
i.getBuffer().set(e)
i.setReadable()
return i}else{l(e instanceof Uint8Array)
var n=packetCreate(t|o)
n.setBuffer(e,r||e.byteLength)
return n}}D.packetFromBuffer=packetFromBuffer
function packetFromJSON(e){var r=packetCreate(e.f)
var a=r.pak||r
function decode(e){return _(e,allocDataView)}if(e.b){a.bsizes=[]
a.bufs=[]
for(var t=0;t<e.b.length;++t){var i=decode(e.b[t])
a.bufs.push(i)
a.bsizes.push(i.decode_size)
delete i.decode_size}}if(e.d){a.buf=decode(e.d)
a.buf_len=a.buf.decode_size
delete a.buf.decode_size
a.buf_offs=0}return r}D.packetFromJSON=packetFromJSON
function isPacket(e){return e instanceof Packet||e instanceof PacketDebug}D.isPacket=isPacket}).call(this)}).call(this,w("buffer").Buffer)},{"./base64.js":55,"./util.js":58,assert:void 0,buffer:void 0}],57:[function(e,r,a){"use strict"
a.mashString=mashString
a.mashI53=mashI53
a.randCreate=randCreate
a.shuffleArray=shuffleArray
function mashString(e){var r=4022871197
for(var a=0;a<e.length;a++){var t=.02519603282416938*(r+=e.charCodeAt(a))
t-=r=t>>>0
r=(t*=r)>>>0
r+=4294967296*(t-=r)}return r>>>0}function mashI53(e){var r=4022871197
while(e){var a=e%256
e=(e-a)/256
var t=.02519603282416938*(r+=a)
t-=r=t>>>0
r=(t*=r)>>>0
r+=4294967296*(t-=r)}return 2.3283064365386963e-10*(r>>>0)}function Mash(){this.n=3228327880}Mash.prototype.mash=function(e){var r=this.n+e
var a=.02519603282416938*r
a-=r=a>>>0
r=(a*=r)>>>0
return 2.3283064365386963e-10*((this.n=r+=4294967296*(a-=r))>>>0)}
function Alea(e){this.reseed(e)}Alea.prototype.reseed=function(e){this.c=1
var r=new Mash
this.s0=.3014581324532628
this.s1=.2643220406025648
this.s2=.7516536582261324
this.s0-=r.mash(e)
if(this.s0<0)this.s0+=1
this.s1-=r.mash(e)
if(this.s1<0)this.s1+=1
this.s2-=r.mash(e)
if(this.s2<0)this.s2+=1}
Alea.prototype.step=function(){var e=2091639*this.s0+2.3283064365386963e-10*this.c
this.s0=this.s1
this.s1=this.s2
return this.s2=e-(this.c=0|e)}
Alea.prototype.uint32=function(){return 4294967296*this.step()}
Alea.prototype.fract53=function(){return this.step()+11102230246251565e-32*(2097152*this.step()|0)}
Alea.prototype.random=Alea.prototype.step
Alea.prototype.range=function(e){return this.step()*e|0}
Alea.prototype.floatBetween=function(e,r){return e+(r-e)*this.random()}
Alea.prototype.exportState=function(){return[this.s0,this.s1,this.s2,this.c]}
Alea.prototype.importState=function(e){this.s0=e[0]
this.s1=e[1]
this.s2=e[2]
this.c=e[3]}
function randCreate(e){return new Alea(e)}function shuffleArray(e,r){for(var a=r.length-1;a>=1;--a){var t=e.range(a+1)
var i=r[a]
r[a]=r[t]
r[t]=i}}},{}],58:[function(e,r,a){"use strict"
a.nop=nop
a.identity=identity
a.once=once
a.empty=empty
a.easeInOut=easeInOut
a.easeIn=easeIn
a.easeOut=easeOut
a.clone=clone
a.merge=merge
a.has=has
a.defaults=defaults
a.defaultsDeep=defaultsDeep
a.cloneShallow=cloneShallow
a.deepEqual=deepEqual
a.deepAdd=deepAdd
a.clamp=clamp
a.lerp=lerp
a.mix=mix
a.map01=map01
a.sign=sign
a.mod=mod
a.log2=log2
a.ridx=ridx
a.round100=round100
a.round1000=round1000
a.fract=fract
a.nearSame=nearSame
a.titleCase=titleCase
a.lineCircleIntersect=lineCircleIntersect
a.lineLineIntersect=lineLineIntersect
a.inherits=inherits
a.isPowerOfTwo=isPowerOfTwo
a.nextHighestPowerOfTwo=nextHighestPowerOfTwo
a.logdata=logdata
a.isInteger=isInteger
a.toNumber=toNumber
a.randomNot=randomNot
a.toArray=toArray
a.arrayToSet=arrayToSet
a.objectToSet=objectToSet
a.matchAll=matchAll
a.callEach=callEach
a.sanitize=sanitize
a.plural=plural
a.secondsToFriendlyString=secondsToFriendlyString
a.secondsSince2020=secondsSince2020
a.dateToSafeLocaleString=dateToSafeLocaleString
a.dateToFileTimestamp=dateToFileTimestamp
a.msToTimeString=msToTimeString
a.removeSymbols=removeSymbols
a.cleanupStringArray=cleanupStringArray
a.cleanStringSplit=cleanStringSplit
a.eatPossiblePromise=eatPossiblePromise
a.errorString=errorString
a.deprecate=deprecate
a.EMAIL_REGEX=void 0
var o=e("assert")
var u=Math.abs,s=Math.floor,t=Math.min,i=Math.max,n=Math.random,v=Math.round,l=Math.pow,c=Math.sqrt
var f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
a.EMAIL_REGEX=f
function nop(){}function identity(e){return e}function once(e){var r=false
return function(){if(r)return
r=true
e.apply(void 0,arguments)}}function empty(e){for(var r in e)return false
return true}function easeInOut(e,r){var a=l(e,r)
return a/(a+l(1-e,r))}function easeIn(e,r){return 2*easeInOut(.5*e,r)}function easeOut(e,r){return 2*easeInOut(.5+.5*e,r)-1}function clone(e){if(!e)return e
return JSON.parse(JSON.stringify(e))}function merge(e,r){for(var a in r)e[a]=r[a]
return e}function has(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function defaults(e,r){for(var a in r)if(!has(e,a))e[a]=r[a]
return e}function defaultsDeep(e,r){for(var a in r)if(!has(e,a))e[a]=r[a]
else if("object"===typeof e[a])defaultsDeep(e[a],r[a])
return e}function cloneShallow(e){return merge({},e)}function deepEqual(e,r){if(Array.isArray(e)){if(!Array.isArray(r))return false
if(e.length!==r.length)return false
for(var a=0;a<e.length;++a)if(!deepEqual(e[a],r[a]))return false
return true}else if("object"===typeof e){if("object"!==typeof r)return false
if(!e||!r)return!e&&!r
for(var t in e)if(!deepEqual(e[t],r[t]))return false
for(var i in r)if(void 0!==r[i]&&void 0===e[i])return false
return true}return e===r}function deepAdd(e,r){o(e&&r)
for(var a in r){var t=r[a]
var i=e[a]
if("object"===typeof t){o(t)
var n=e[a]=i||{}
o.equal(typeof n,"object")
deepAdd(n,t)}else{if(!i)i=0
o("number"===typeof i)
o("number"===typeof t)
e[a]=(i||0)+t}}}function clamp(e,r,a){return t(i(r,e),a)}function lerp(e,r,a){return(1-e)*r+e*a}function mix(e,r,a){return(1-a)*e+a*r}function map01(e,r,a){return(e-r)/(a-r)}function sign(e){return e<0?-1:e>0?1:0}function mod(e,r){return(e%r+r)%r}function log2(e){for(var r=1,a=0;;r<<=1,++a)if(r>=e)return a}function ridx(e,r){e[r]=e[e.length-1]
e.pop()}function round100(e){return v(100*e)/100}function round1000(e){return v(1e3*e)/1e3}function fract(e){return e-s(e)}function nearSame(e,r,a){return u(r-e)<=a}function titleCase(e){return e.split(" ").map(function(e){return""+e[0].toUpperCase()+e.slice(1)}).join(" ")}var _=1e-5
function lineCircleIntersect(e,r,a,t){var i=[r[0]-e[0],r[1]-e[1]]
var n=i[0]*i[0]+i[1]*i[1]
var o=2*(i[0]*(e[0]-a[0])+i[1]*(e[1]-a[1]))
var s=a[0]*a[0]+a[1]*a[1]
s+=e[0]*e[0]+e[1]*e[1]
s-=2*(a[0]*e[0]+a[1]*e[1])
var v=o*o-4*n*(s-=t*t)
if(u(n)<_||v<0)return false
var l=(-o+c(v))/(2*n)
var f=(-o-c(v))/(2*n)
if(l>=0&&l<=1||f>=0&&f<=1)return true
return false}function lineLineIntersect(e,r,a,t){var i=(t[1]-a[1])*(r[0]-e[0])-(t[0]-a[0])*(r[1]-e[1])
var n=(t[0]-a[0])*(e[1]-a[1])-(t[1]-a[1])*(e[0]-a[0])
var o=(r[0]-e[0])*(e[1]-a[1])-(r[1]-e[1])*(e[0]-a[0])
if(0===i){if(!n&&!o)return true
return false}var s=n/i
var v=o/i
if(s<0||s>1||v<0||v>1)return false
return true}function inherits(e,r){o("function"===typeof r)
var a=e.prototype
e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
for(var t in a)e.prototype[t]=a[t]
for(var i in r)e[i]=r[i]}function isPowerOfTwo(e){return 0===(e&e-1)}function nextHighestPowerOfTwo(e){--e
for(var r=1;r<32;r<<=1)e|=e>>r
return e+1}function logdata(e){if(void 0===e)return""
var r=JSON.stringify(e)
if(r.length<120)return r
return r.slice(0,117)+"...("+r.length+")"}function isInteger(e){return"number"===typeof e&&isFinite(e)&&s(e)===e}function toNumber(e){return Number(e)}function randomNot(e,r){var a
do{a=s(n()*r)}while(a===e)
return a}function toArray(e){return Array.prototype.slice.call(e)}function arrayToSet(e){var r=Object.create(null)
for(var a=0;a<e.length;++a)r[e[a]]=true
return r}function objectToSet(e){return merge(Object.create(null),e)}function matchAll(e,r){var a=[]
var t
do{if(t=r.exec(e))a.push(t[1])}while(t)
return a}function callEach(e,r){if(e&&e.length){for(var a=arguments.length,t=new Array(a>2?a-2:0),i=2;i<a;i++)t[i-2]=arguments[i]
for(var n=0;n<e.length;++n)e[n].apply(e,t)}}var d=/[\uD800-\uDFFF\x00-\x1F\x7F\u1D54\u1D55\u2000-\u200F\u205F-\u206F\uFE00]/g
function sanitize(e){return(e||"").replace(d,"")}function plural(e,r){return r+(1===e?"":"s")}function secondsToFriendlyString(e,r){var a=s(e/86400)
var t=s((e-=60*a*60*24)/3600)
var i=s((e-=60*t*60)/60)
e-=60*i
var n=[]
if(a){var o=s(a/365.25)
if(o){a-=s(365.25*o)
n.push(o+" "+plural(o,"year"))}n.push(a+" "+plural(a,"day"))}if(t)n.push(t+" "+plural(t,"hour"))
if(i||!n.length)n.push(i+" "+plural(i,"minute"))
if(r)n.push(e+" "+plural(e,"second"))
return n.join(", ")}function secondsSince2020(){return s(Date.now()/1e3)-1577836800}function dateToSafeLocaleString(r,a){var t
try{t=a?r.toLocaleDateString():r.toLocaleString()}catch(e){console.error(e,"(Using toString as fallback)")
t=a?r.toDateString():r.toString()}return t}function dateToFileTimestamp(e){function pad(e){return""+(e<10?0:"")+e}return e.getFullYear()+"-"+pad(e.getMonth()+1)+"-"+pad(e.getDate())+" "+pad(e.getHours())+"_"+pad(e.getMinutes())+"_"+pad(e.getSeconds())}function msToTimeString(e,r){var a=e%1e3
var t
var i
var n
n=(i=(t=e-a)-(t%=6e4))-(i%=36e5)
i/=6e4
return((n/=36e5)?n+":":"")+(n&&i<10?"0":"")+i+":"+((t/=1e3)<10?"0":"")+t+((r=r||{}).hide_ms?"":"."+(a<10?"00":a<100?"0":"")+a)}function removeSymbols(e){return e.replace(/[.,/\\@#£!$%^&*;:<>{}|?=\-+_`'"~[\]()]/g,"").replace(/\s{1,}/g," ")}var h=arrayToSet(["am","an","and","as","at","be","by","el","for","in","is","la","las","los","of","on","or","the","that","this","to","with"])
function cleanupStringArray(e){return e.filter(function(e){return e.length>1&&e.length<=32&&!h[e]})}function cleanStringSplit(e,r){return cleanupStringArray(removeSymbols(sanitize(e)).toLowerCase().split(r).map(function(e){return e.trim()}))}function eatPossiblePromise(e){if(e&&e.catch)e.catch(nop)}function errorString(e){var r=String(e)
if("[object Object]"===r)try{r=JSON.stringify(e)}catch(e){}if(e&&e.stack&&e.message)r=String(e.message)
return r.slice(0,600)}function deprecate(e,r,a){Object.defineProperty(e,r,{get:function get(){o(false,r+" is deprecated, use "+a+" instead")
return}})}},{assert:void 0}],59:[function(e,r,a){"use strict"
var t=true
function verify(e,r){if(!e&&t)throw new Error("Assertion failed"+(r?": "+r:""))
return e}(function(e){e.ok=verify
function equal(e,r){if(e===r)return true
if(t)throw new Error('Assertion failed: "'+e+'"==="'+r+'"')
return false}e.equal=equal
function dothrow(e){t=e}e.dothrow=dothrow
function shouldThrow(){return t}e.shouldThrow=shouldThrow})(verify=verify||{})
r.exports=verify},{}],60:[function(e,r,a){"use strict"
a.vec1=vec1
a.vec2=vec2
a.ivec2=ivec2
a.vec3=vec3
a.ivec3=ivec3
a.vec4=vec4
a.v2abs=v2abs
a.v2add=v2add
a.v2addScale=v2addScale
a.v2angle=v2angle
a.v2copy=v2copy
a.v2dist=v2dist
a.v2distSq=v2distSq
a.v2div=v2div
a.v2dot=v2dot
a.v2floor=v2floor
a.v2iFloor=v2iFloor
a.v2lengthSq=v2lengthSq
a.v2length=v2length
a.v2lerp=v2lerp
a.v2mul=v2mul
a.v2normalize=v2normalize
a.v2iNormalize=v2iNormalize
a.v2round=v2round
a.v2iRound=v2iRound
a.v2same=v2same
a.v2scale=v2scale
a.v2set=v2set
a.v2sub=v2sub
a.v3add=v3add
a.v3iAdd=v3iAdd
a.v3addScale=v3addScale
a.v3angle=v3angle
a.v3copy=v3copy
a.v3cross=v3cross
a.v3determinant=v3determinant
a.v3distSq=v3distSq
a.v3dist=v3dist
a.v3div=v3div
a.v3dot=v3dot
a.v3iFloor=v3iFloor
a.v3floor=v3floor
a.v3lengthSq=v3lengthSq
a.v3length=v3length
a.v3lerp=v3lerp
a.v3iMax=v3iMax
a.v3iMin=v3iMin
a.v3mul=v3mul
a.v3iMul=v3iMul
a.v3mulMat4=v3mulMat4
a.m4TransformVec3=m4TransformVec3
a.v3normalize=v3normalize
a.v3iNormalize=v3iNormalize
a.v3perspectiveProject=v3perspectiveProject
a.v3pow=v3pow
a.v3round=v3round
a.v3iRound=v3iRound
a.v3same=v3same
a.v3scale=v3scale
a.v3scaleFloor=v3scaleFloor
a.v3iScale=v3iScale
a.v3set=v3set
a.v3sub=v3sub
a.v3iSub=v3iSub
a.v3zero=v3zero
a.v4add=v4add
a.v4clone=v4clone
a.v4copy=v4copy
a.v4dot=v4dot
a.v4fromRGBA=v4fromRGBA
a.v4lerp=v4lerp
a.v4mul=v4mul
a.v4mulAdd=v4mulAdd
a.v4same=v4same
a.v4scale=v4scale
a.v4set=v4set
a.v4zero=v4zero
a.zaxis=a.yaxis=a.xaxis=a.identity_mat4=a.identity_mat3=a.zero_vec=a.half_vec=a.unit_vec=a.rovec4=a.roivec3=a.rovec3=a.roivec2=a.rovec2=a.rovec1=a.mat4=a.mat3=void 0
var t=e("gl-mat3/create")
var i=e("gl-mat4/create")
var n=Math.abs,o=Math.acos,s=Math.max,v=Math.min,l=Math.floor,f=Math.pow,u=Math.round,c=Math.sqrt
var _=t
a.mat3=_
var d=i
a.mat4=d
function vec1(e){return new Float32Array([e||0])}var h=vec1
a.rovec1=h
function vec2(e,r){var a=new Float32Array(2)
if(e||r){a[0]=e
a[1]=r}return a}var p=vec2
a.rovec2=p
function ivec2(e,r){var a=new Int32Array(2)
if(e||r){a[0]=e
a[1]=r}return a}var g=ivec2
a.roivec2=g
function vec3(e,r,a){var t=new Float32Array(3)
if(e||r||a){t[0]=e
t[1]=r
t[2]=a}return t}var m=vec3
a.rovec3=m
function ivec3(e,r,a){var t=new Int32Array(3)
if(e||r||a){t[0]=e
t[1]=r
t[2]=a}return t}var E=ivec3
a.roivec3=E
function vec4(e,r,a,t){var i=new Float32Array(4)
if(e||r||a||t){i[0]=e
i[1]=r
i[2]=a
i[3]=t}return i}var T=vec4
a.rovec4=T
function frozenVec4(e,r,a,t){return T(e,r,a,t)}var S=frozenVec4(1,1,1,1)
a.unit_vec=S
var A=frozenVec4(.5,.5,.5,.5)
a.half_vec=A
var R=frozenVec4(0,0,0,0)
a.zero_vec=R
var O=_()
a.identity_mat3=O
var I=d()
a.identity_mat4=I
var y=frozenVec4(1,0,0,0)
a.xaxis=y
var b=frozenVec4(0,1,0,0)
a.yaxis=b
var w=frozenVec4(0,0,1,0)
a.zaxis=w
function v2abs(e,r){e[0]=n(r[0])
e[1]=n(r[1])
return e}function v2add(e,r,a){e[0]=r[0]+a[0]
e[1]=r[1]+a[1]
return e}function v2addScale(e,r,a,t){e[0]=r[0]+a[0]*t
e[1]=r[1]+a[1]*t
return e}function v2angle(e,r){var a=c((e[0]*e[0]+e[1]*e[1])*(r[0]*r[0]+r[1]*r[1]))
return o(v(s(a&&(e[0]*r[0]+e[1]*r[1])/a,-1),1))}function v2copy(e,r){e[0]=r[0]
e[1]=r[1]
return e}function v2dist(e,r){return c((e[0]-r[0])*(e[0]-r[0])+(e[1]-r[1])*(e[1]-r[1]))}function v2distSq(e,r){return(e[0]-r[0])*(e[0]-r[0])+(e[1]-r[1])*(e[1]-r[1])}function v2div(e,r,a){e[0]=r[0]/a[0]
e[1]=r[1]/a[1]
return e}function v2dot(e,r){return e[0]*r[0]+e[1]*r[1]}function v2floor(e,r){e[0]=l(r[0])
e[1]=l(r[1])
return e}function v2iFloor(e){e[0]=l(e[0])
e[1]=l(e[1])
return e}function v2lengthSq(e){return e[0]*e[0]+e[1]*e[1]}function v2length(e){return c(v2lengthSq(e))}function v2lerp(e,r,a,t){var i=1-r
e[0]=i*a[0]+r*t[0]
e[1]=i*a[1]+r*t[1]
return e}function v2mul(e,r,a){e[0]=r[0]*a[0]
e[1]=r[1]*a[1]
return e}function v2normalize(e,r){var a=r[0]*r[0]+r[1]*r[1]
if(a>0){a=1/c(a)
e[0]=r[0]*a
e[1]=r[1]*a}return e}function v2iNormalize(e){var r=e[0]*e[0]+e[1]*e[1]
if(r>0){r=1/c(r)
e[0]*=r
e[1]*=r}return e}function v2round(e,r){e[0]=u(r[0])
e[1]=u(r[1])
return e}function v2iRound(e){e[0]=u(e[0])
e[1]=u(e[1])
return e}function v2same(e,r){return e[0]===r[0]&&e[1]===r[1]}function v2scale(e,r,a){e[0]=r[0]*a
e[1]=r[1]*a
return e}function v2set(e,r,a){e[0]=r
e[1]=a
return e}function v2sub(e,r,a){e[0]=r[0]-a[0]
e[1]=r[1]-a[1]
return e}function v3add(e,r,a){e[0]=r[0]+a[0]
e[1]=r[1]+a[1]
e[2]=r[2]+a[2]
return e}function v3iAdd(e,r){e[0]+=r[0]
e[1]+=r[1]
e[2]+=r[2]
return e}function v3addScale(e,r,a,t){e[0]=r[0]+a[0]*t
e[1]=r[1]+a[1]*t
e[2]=r[2]+a[2]*t
return e}function v3angle(e,r){var a=c((e[0]*e[0]+e[1]*e[1]+e[2]*e[2])*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]))
return o(v(s(a&&(e[0]*r[0]+e[1]*r[1]+e[2]*r[2])/a,-1),1))}function v3copy(e,r){e[0]=r[0]
e[1]=r[1]
e[2]=r[2]
return e}function v3cross(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
var o=a[0]
var s=a[1]
var v=a[2]
e[0]=i*v-n*s
e[1]=n*o-t*v
e[2]=t*s-i*o
return e}function v3determinant(e,r,a){var t=e[0]
var i=r[0]
var n=a[0]
var o=e[1]
var s=r[1]
var v=a[1]
var l=e[2]
var f=r[2]
var u=a[2]
return t*(u*s-v*f)+i*(-u*o+v*l)+n*(f*o-s*l)}function v3distSq(e,r){return(e[0]-r[0])*(e[0]-r[0])+(e[1]-r[1])*(e[1]-r[1])+(e[2]-r[2])*(e[2]-r[2])}function v3dist(e,r){return c(v3distSq(e,r))}function v3div(e,r,a){e[0]=r[0]/a[0]
e[1]=r[1]/a[1]
e[2]=r[2]/a[2]
return e}function v3dot(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}function v3iFloor(e){e[0]=l(e[0])
e[1]=l(e[1])
e[2]=l(e[2])
return e}function v3floor(e,r){e[0]=l(r[0])
e[1]=l(r[1])
e[2]=l(r[2])
return e}function v3lengthSq(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function v3length(e){return c(v3lengthSq(e))}function v3lerp(e,r,a,t){var i=1-r
e[0]=i*a[0]+r*t[0]
e[1]=i*a[1]+r*t[1]
e[2]=i*a[2]+r*t[2]
return e}function v3iMax(e,r){e[0]=s(e[0],r[0])
e[1]=s(e[1],r[1])
e[2]=s(e[2],r[2])
return e}function v3iMin(e,r){e[0]=v(e[0],r[0])
e[1]=v(e[1],r[1])
e[2]=v(e[2],r[2])
return e}function v3mul(e,r,a){e[0]=r[0]*a[0]
e[1]=r[1]*a[1]
e[2]=r[2]*a[2]
return e}function v3iMul(e,r){e[0]*=r[0]
e[1]*=r[1]
e[2]*=r[2]
return e}function v3mulMat4(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
e[0]=t*a[0]+i*a[4]+n*a[8]
e[1]=t*a[1]+i*a[5]+n*a[9]
e[2]=t*a[2]+i*a[6]+n*a[10]
return e}function m4TransformVec3(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
e[0]=t*a[0]+i*a[4]+n*a[8]+a[12]
e[1]=t*a[1]+i*a[5]+n*a[9]+a[13]
e[2]=t*a[2]+i*a[6]+n*a[10]+a[14]
return e}function v3normalize(e,r){var a=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]
if(a>0){a=1/c(a)
e[0]=r[0]*a
e[1]=r[1]*a
e[2]=r[2]*a}return e}function v3iNormalize(e){var r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2]
if(r>0){r=1/c(r)
e[0]*=r
e[1]*=r
e[2]*=r}return e}function v3perspectiveProject(e,r,a){var t=r[0]
var i=r[1]
var n=r[2]
var o=.5/(a[3]*t+a[7]*i+a[11]*n+a[15]||1e-5)
e[0]=(a[0]*t+a[4]*i+a[8]*n+a[12])*o+.5
e[1]=(a[1]*t+a[5]*i+a[9]*n+a[13])*-o+.5
e[2]=a[2]*t+a[6]*i+a[10]*n+a[14]
return e}function v3pow(e,r,a){e[0]=f(r[0],a)
e[1]=f(r[1],a)
e[2]=f(r[2],a)
return e}function v3round(e,r){e[0]=u(r[0])
e[1]=u(r[1])
e[2]=u(r[2])
return e}function v3iRound(e){e[0]=u(e[0])
e[1]=u(e[1])
e[2]=u(e[2])
return e}function v3same(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]}function v3scale(e,r,a){e[0]=r[0]*a
e[1]=r[1]*a
e[2]=r[2]*a
return e}function v3scaleFloor(e,r,a){e[0]=l(r[0]*a)
e[1]=l(r[1]*a)
e[2]=l(r[2]*a)
return e}function v3iScale(e,r){e[0]*=r
e[1]*=r
e[2]*=r
return e}function v3set(e,r,a,t){e[0]=r
e[1]=a
e[2]=t
return e}function v3sub(e,r,a){e[0]=r[0]-a[0]
e[1]=r[1]-a[1]
e[2]=r[2]-a[2]
return e}function v3iSub(e,r){e[0]-=r[0]
e[1]-=r[1]
e[2]-=r[2]
return e}function v3zero(e){e[0]=e[1]=e[2]=0
return e}function v4add(e,r,a){e[0]=r[0]+a[0]
e[1]=r[1]+a[1]
e[2]=r[2]+a[2]
e[3]=r[3]+a[3]
return e}function v4clone(e){return e.slice(0)}function v4copy(e,r){e[0]=r[0]
e[1]=r[1]
e[2]=r[2]
e[3]=r[3]
return e}function v4dot(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}function v4fromRGBA(e){return vec4((e>>>24)/255,((16711680&e)>>16)/255,((65280&e)>>8)/255,(255&e)/255)}function v4lerp(e,r,a,t){var i=1-r
e[0]=i*a[0]+r*t[0]
e[1]=i*a[1]+r*t[1]
e[2]=i*a[2]+r*t[2]
e[3]=i*a[3]+r*t[3]
return e}function v4mul(e,r,a){e[0]=r[0]*a[0]
e[1]=r[1]*a[1]
e[2]=r[2]*a[2]
e[3]=r[3]*a[3]
return e}function v4mulAdd(e,r,a,t){e[0]=r[0]*a[0]+t[0]
e[1]=r[1]*a[1]+t[1]
e[2]=r[2]*a[2]+t[2]
e[3]=r[3]*a[3]+t[3]
return e}function v4same(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]}function v4scale(e,r,a){e[0]=r[0]*a
e[1]=r[1]*a
e[2]=r[2]*a
e[3]=r[3]*a
return e}function v4set(e,r,a,t,i){e[0]=r
e[1]=a
e[2]=t
e[3]=i
return e}function v4zero(e){e[0]=e[1]=e[2]=e[3]=0
return e}},{"gl-mat3/create":void 0,"gl-mat4/create":void 0}]},{},[40])

//# sourceMappingURL=worker.bundle.js.map
