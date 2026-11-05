(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="180",Ys={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fp=0,Oh=1,pp=2,$d=1,mp=2,pi=3,Gn=0,Kt=1,Rn=2,Ht=0,Ks=1,Fh=2,Bh=3,kh=4,ef=5,Bn=100,gp=101,xp=102,vp=103,_p=104,Or=200,yp=201,Sp=202,Mp=203,Gc=204,Wc=205,Xc=206,bp=207,jc=208,wp=209,Tp=210,Ep=211,Ap=212,Rp=213,Cp=214,qc=0,Yc=1,Kc=2,Qs=3,Zc=4,Jc=5,Qc=6,$c=7,Ql=0,Pp=1,Lp=2,Bi=0,tf=1,nf=2,sf=3,$l=4,rf=5,of=6,af=7,zh="attached",Dp="detached",cf=300,$s=301,er=302,el=303,tl=304,wa=306,oi=1e3,Ui=1001,ga=1002,Ut=1003,lf=1004,Fr=1005,un=1006,ca=1007,xi=1008,Wn=1009,hf=1010,uf=1011,Wr=1012,eh=1013,ki=1014,vn=1015,Xn=1016,th=1017,nh=1018,tr=1020,df=35902,ff=35899,pf=1021,mf=1022,sn=1023,Xr=1026,nr=1027,ih=1028,Ta=1029,gf=1030,sh=1031,rh=1033,la=33776,ha=33777,ua=33778,da=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,cl=37496,ll=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,xl=37816,vl=37817,_l=37818,yl=37819,Sl=37820,Ml=37821,bl=36492,wl=36494,Tl=36495,El=36283,Al=36284,Rl=36285,Cl=36286,jr=2300,qr=2301,Ua=2302,Hh=2400,Vh=2401,Gh=2402,Ip=2500,Np=0,xf=1,Pl=2,Up=3200,Op=3201,Ea=0,Fp=1,Ii="",wt="srgb",Zt="srgb-linear",xa="linear",ct="srgb",cs=7680,Wh=519,Bp=512,kp=513,zp=514,vf=515,Hp=516,Vp=517,Gp=518,Wp=519,Ll=35044,Xh="300 es",Hn=2e3,va=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const zr=Math.PI/180,ir=180/Math.PI;function Vn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ve(r,e,t){return Math.max(e,Math.min(t,r))}function oh(r,e){return(r%e+e)%e}function Xp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function jp(r,e,t){return r!==e?(t-r)/(e-r):0}function Hr(r,e,t){return(1-t)*r+t*e}function qp(r,e,t,n){return Hr(r,e,1-Math.exp(-t*n))}function Yp(r,e=1){return e-Math.abs(oh(r,e*2)-e)}function Kp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Zp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Jp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Qp(r,e){return r+Math.random()*(e-r)}function $p(r){return r*(.5-Math.random())}function em(r){r!==void 0&&(jh=r);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tm(r){return r*zr}function nm(r){return r*ir}function im(r){return(r&r-1)===0&&r!==0}function sm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function om(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:zr,RAD2DEG:ir,generateUUID:Vn,clamp:Ve,euclideanModulo:oh,mapLinear:Xp,inverseLerp:jp,lerp:Hr,damp:qp,pingpong:Yp,smoothstep:Kp,smootherstep:Zp,randInt:Jp,randFloat:Qp,randFloatSpread:$p,seededRandom:em,degToRad:tm,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:rm,setQuaternionFromProperEuler:om,normalize:lt,denormalize:kn};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),R=Math.atan2(S,p*_);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}const v=a*_;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new D,qh=new ai;class We{constructor(e,t,n,i,s,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],y=i[4],v=i[7],S=i[2],R=i[5],A=i[8];return s[0]=o*x+a*_+c*S,s[3]=o*m+a*y+c*R,s[6]=o*p+a*v+c*A,s[1]=l*x+h*_+u*S,s[4]=l*m+h*y+u*R,s[7]=l*p+h*v+u*A,s[2]=d*x+f*_+g*S,s[5]=d*m+f*y+g*R,s[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new We;function _f(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function am(){const r=Yr("canvas");return r.style.display="block",r}const Yh={};function Kr(r){r in Yh||(Yh[r]=!0,console.warn(r))}function cm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Kh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){const r={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?xa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zt]:{primaries:e,whitePoint:n,transfer:xa,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),r}const Ke=lm();function _i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class hm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=Yr("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_i(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let um=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ba(i[o].image)):s.push(Ba(i[o]))}else s=Ba(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ba(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;const ka=new D;class Pt extends is{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Ui,i=Ui,s=un,o=xi,a=sn,c=Wn,l=Pt.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Vn(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=cf;Pt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,S=(p+1)/2,R=(h+d)/4,A=(u+x)/4,P=(g+m)/4;return y>v&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=R/n,s=A/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=P/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=P/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fm extends is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Pt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ch(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends fm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yf extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pm extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class et{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ro.subVectors(this.max,pr),hs.subVectors(e.a,pr),us.subVectors(e.b,pr),ds.subVectors(e.c,pr),Mi.subVectors(us,hs),bi.subVectors(ds,us),Vi.subVectors(hs,ds);let t=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Vi.z,Vi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Vi.z,0,-Vi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Vi.y,Vi.x,0];return!za(t,hs,us,ds,ro)||(t=[1,0,0,0,1,0,0,0,1],!za(t,hs,us,ds,ro))?!1:(oo.crossVectors(Mi,bi),t=[oo.x,oo.y,oo.z],za(t,hs,us,ds,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,so=new et,hs=new D,us=new D,ds=new D,Mi=new D,bi=new D,Vi=new D,pr=new D,ro=new D,oo=new D,Gi=new D;function za(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gi.fromArray(r,s);const a=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),c=e.dot(Gi),l=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mm=new et,mr=new D,Ha=new D;class Gt{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Ha)),this.expandByPoint(mr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new D,Va=new D,ao=new D,wi=new D,Ga=new D,co=new D,Wa=new D;class ss{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Va.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Va);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=wi.dot(this.direction),c=-wi.dot(ao),l=wi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Va).addScaledVector(ao,d),f}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,s){Ga.subVectors(t,e),co.subVectors(n,e),Wa.crossVectors(Ga,co);let o=this.direction.dot(Wa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const c=a*this.direction.dot(co.crossVectors(wi,co));if(c<0)return null;const l=a*this.direction.dot(Ga.cross(wi));if(l<0||c+l>o)return null;const h=-a*wi.dot(Wa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,x,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,xm)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ti.crossVectors(n,mn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ti.crossVectors(n,mn)),Ti.normalize(),lo.crossVectors(mn,Ti),i[0]=Ti.x,i[4]=lo.x,i[8]=mn.x,i[1]=Ti.y,i[5]=lo.y,i[9]=mn.y,i[2]=Ti.z,i[6]=lo.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],v=n[11],S=n[15],R=i[0],A=i[4],P=i[8],b=i[12],M=i[1],L=i[5],I=i[9],F=i[13],k=i[2],B=i[6],z=i[10],J=i[14],X=i[3],ne=i[7],le=i[11],ge=i[15];return s[0]=o*R+a*M+c*k+l*X,s[4]=o*A+a*L+c*B+l*ne,s[8]=o*P+a*I+c*z+l*le,s[12]=o*b+a*F+c*J+l*ge,s[1]=h*R+u*M+d*k+f*X,s[5]=h*A+u*L+d*B+f*ne,s[9]=h*P+u*I+d*z+f*le,s[13]=h*b+u*F+d*J+f*ge,s[2]=g*R+x*M+m*k+p*X,s[6]=g*A+x*L+m*B+p*ne,s[10]=g*P+x*I+m*z+p*le,s[14]=g*b+x*F+m*J+p*ge,s[3]=_*R+y*M+v*k+S*X,s[7]=_*A+y*L+v*B+S*ne,s[11]=_*P+y*I+v*z+S*le,s[15]=_*b+y*F+v*J+S*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,S=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,R=t*_+n*y+i*v+s*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=_*A,e[1]=(x*d*s-u*m*s-x*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*s-x*c*s+x*i*l-n*m*l-a*i*p+n*c*p)*A,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*A,e[4]=y*A,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*A,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*A,e[8]=v*A,e[9]=(g*u*s-h*x*s-g*n*f+t*x*f+h*n*p-t*u*p)*A,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*p+t*a*p)*A,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=S*A,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,x=o*h,m=o*u,p=a*u,_=c*l,y=c*h,v=c*u,S=n.x,R=n.y,A=n.z;return i[0]=(1-(x+p))*S,i[1]=(f+v)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(f-v)*R,i[5]=(1-(d+p))*R,i[6]=(m+_)*R,i[7]=0,i[8]=(g+y)*A,i[9]=(m-_)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);const l=1/s,h=1/o,u=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Hn,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Hn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===va)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Hn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Hn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===va)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new D,Nn=new Ce,gm=new D(0,0,0),xm=new D(1,1,1),Ti=new D,lo=new D,mn=new D,Jh=new Ce,Qh=new ai;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const $h=new D,ps=new ai,hi=new Ce,ho=new D,gr=new D,_m=new D,ym=new ai,eu=new D(1,0,0),tu=new D(0,1,0),nu=new D(0,0,1),iu={type:"added"},Sm={type:"removed"},ms={type:"childadded",child:null},Xa={type:"childremoved",child:null};class _t extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new D,t=new jn,n=new ai,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new We}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(gr,ho,this.up):hi.lookAt(ho,gr,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(hi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iu),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sm),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iu),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new D(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new D,ui=new D,ja=new D,di=new D,gs=new D,xs=new D,su=new D,qa=new D,Ya=new D,Ka=new D,Za=new nt,Ja=new nt,Qa=new nt;class Vt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Un.subVectors(i,t),ui.subVectors(n,t),ja.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(ui),c=Un.dot(ja),l=ui.dot(ui),h=ui.dot(ja),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Za,s.x),o.addScaledVector(Ja,s.y),o.addScaledVector(Qa,s.z),o}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),ui.subVectors(e,t),Un.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Un.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;gs.subVectors(i,n),xs.subVectors(s,n),qa.subVectors(e,n);const c=gs.dot(qa),l=xs.dot(qa);if(c<=0&&l<=0)return t.copy(n);Ya.subVectors(e,i);const h=gs.dot(Ya),u=xs.dot(Ya);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gs,o);Ka.subVectors(e,s);const f=gs.dot(Ka),g=xs.dot(Ka);if(g>=0&&f<=g)return t.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(xs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return su.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(su,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},uo={h:0,s:0,l:0};function $a(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=oh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$a(o,s,e+1/3),this.g=$a(o,s,e),this.b=$a(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ke.workingToColorSpace(jt.copy(this),e),Math.round(Ve(jt.r*255,0,255))*65536+Math.round(Ve(jt.g*255,0,255))*256+Math.round(Ve(jt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,s=jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=wt){Ke.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(uo);const n=Hr(Ei.h,uo.h,t),i=Hr(Ei.s,uo.s,t),s=Hr(Ei.l,uo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Le;Le.NAMES=Sf;let Mm=0;class Pn extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Ks,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oi extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new D,fo=new _e;let bm=0;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class Mf extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bf extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wm=0;const wn=new Ce,ec=new _t,vs=new D,gn=new et,xr=new et,Bt=new D;class Wt extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?bf:Mf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new et);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(gn.min,xr.min),gn.expandByPoint(Bt),Bt.addVectors(gn.max,xr.max),gn.expandByPoint(Bt)):(gn.expandByPoint(xr.min),gn.expandByPoint(xr.max))}gn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(e,l),Bt.add(vs)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;const l=new D,h=new D,u=new D,d=new _e,f=new _e,g=new _e,x=new D,m=new D;function p(P,b,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(x),a[b].add(x),a[M].add(x),c[P].add(m),c[b].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,b=_.length;P<b;++P){const M=_[P],L=M.start,I=M.count;for(let F=L,k=L+I;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new D,v=new D,S=new D,R=new D;function A(P){S.fromBufferAttribute(i,P),R.copy(S);const b=a[P];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),v.crossVectors(R,b);const L=v.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,b=_.length;P<b;++P){const M=_[P],L=M.start,I=M.count;for(let F=L,k=L+I;F<k;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new Ce,Wi=new ss,po=new Gt,ou=new D,mo=new D,go=new D,xo=new D,tc=new D,vo=new D,au=new D,_o=new D;class xt extends _t{constructor(e=new Wt,t=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){vo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(tc.fromBufferAttribute(u,e),o?vo.addScaledVector(tc,h):vo.addScaledVector(tc.sub(t),h))}t.add(vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(po.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(po,ou)===null||Wi.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(ru.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(ru),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=y;v<S;v+=3){const R=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);i=yo(this,p,e,n,l,h,u,R,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=yo(this,o,e,n,l,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=y;v<S;v+=3){const R=v,A=v+1,P=v+2;i=yo(this,p,e,n,l,h,u,R,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,y=m+1,v=m+2;i=yo(this,o,e,n,l,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Tm(r,e,t,n,i,s,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Gn,a),c===null)return null;_o.copy(a),_o.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_o);return l<t.near||l>t.far?null:{distance:l,point:_o.clone(),object:r}}function yo(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,mo),r.getVertexPosition(c,go),r.getVertexPosition(l,xo);const h=Tm(r,e,t,n,mo,go,xo,au);if(h){const u=new D;Vt.getBarycoord(au,mo,go,xo,u),i&&(h.uv=Vt.getInterpolatedAttribute(i,a,c,l,u,new _e)),s&&(h.uv1=Vt.getInterpolatedAttribute(s,a,c,l,u,new _e)),o&&(h.normal=Vt.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};Vt.getNormal(mo,go,xo,d.normal),h.face=d,h.barycoord=u}return h}class cr extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(u,2));function g(x,m,p,_,y,v,S,R,A,P,b){const M=v/A,L=S/P,I=v/2,F=S/2,k=R/2,B=A+1,z=P+1;let J=0,X=0;const ne=new D;for(let le=0;le<z;le++){const ge=le*L-F;for(let Ne=0;Ne<B;Ne++){const Ye=Ne*M-I;ne[x]=Ye*_,ne[m]=ge*y,ne[p]=k,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ne/A),u.push(1-le/P),J+=1}}for(let le=0;le<P;le++)for(let ge=0;ge<A;ge++){const Ne=d+ge+B*le,Ye=d+ge+B*(le+1),$e=d+(ge+1)+B*(le+1),He=d+(ge+1)+B*le;c.push(Ne,Ye,He),c.push(Ye,$e,He),X+=6}a.addGroup(f,X,b),f+=X,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(r){const e={};for(let t=0;t<r.length;t++){const n=sr(r[t]);for(const i in n)e[i]=n[i]}return e}function Em(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function wf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const zn={clone:sr,merge:tn};var Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tf extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new D,cu=new _e,lu=new _e;class nn extends Tf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,cu,lu),t.subVectors(lu,cu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,ys=1;class Cm extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(_s,ys,e,t);i.layers=this.layers,this.add(i);const s=new nn(_s,ys,e,t);s.layers=this.layers,this.add(s);const o=new nn(_s,ys,e,t);o.layers=this.layers,this.add(o);const a=new nn(_s,ys,e,t);a.layers=this.layers,this.add(a);const c=new nn(_s,ys,e,t);c.layers=this.layers,this.add(c);const l=new nn(_s,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ef extends Pt{constructor(e=[],t=$s,n,i,s,o,a,c,l,h){super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pm extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ef(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cr(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Ht});s.uniforms.tEquirect.value=t;const o=new xt(i,s),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=un),new Cm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ri extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lm={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Af extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new D;class hh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hu=new D,uu=new nt,du=new nt,Im=new D,fu=new Ce,So=new D,ic=new Gt,pu=new Ce,sc=new ss;class Nm extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zh,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new et),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(i),e.ray.intersectsSphere(ic)!==!1&&(pu.copy(i).invert(),sc.copy(e.ray).applyMatrix4(pu),!(this.boundingBox!==null&&sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;uu.fromBufferAttribute(i.attributes.skinIndex,e),du.fromBufferAttribute(i.attributes.skinWeight,e),hu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=du.getComponent(s);if(o!==0){const a=uu.getComponent(s);fu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Im.copy(hu).applyMatrix4(fu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rf extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ns extends Pt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Ut,h=Ut,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mu=new Ce,Um=new Ce;class uh{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Um;mu.multiplyMatrices(a,t[s]),mu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new uh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ns(t,e,e,sn,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Rf),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Dl extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new Ce,gu=new Ce,Mo=[],xu=new et,Om=new Ce,vr=new xt,_r=new Gt;class dh extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Om)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),xu.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(xu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),_r.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ss),gu.multiplyMatrices(n,Ss),vr.matrixWorld=gu,vr.raycast(e,Mo);for(let o=0,a=Mo.length;o<a;o++){const c=Mo[o];c.instanceId=s,c.object=this,t.push(c)}Mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(i*this.count),i,this.count,ih,vn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rc=new D,Fm=new D,Bm=new We;class An{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rc.subVectors(n,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bm.getNormalMatrix(e),i=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Gt,km=new _e(.5,.5),bo=new D;class lr{constructor(e=new An,t=new An,n=new An,i=new An,s=new An,o=new An){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],_=s[12],y=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-o,f-h,p-g,S-_).normalize(),i[1].setComponents(l+o,f+h,p+g,S+_).normalize(),i[2].setComponents(l+a,f+u,p+x,S+y).normalize(),i[3].setComponents(l-a,f-u,p-x,S-y).normalize(),n)i[4].setComponents(c,d,m,v).normalize(),i[5].setComponents(l-c,f-d,p-m,S-v).normalize();else if(i[4].setComponents(l-c,f-d,p-m,S-v).normalize(),t===Hn)i[5].setComponents(l+c,f+d,p+m,S+v).normalize();else if(t===va)i[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=km.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bo.x=i.normal.x>0?e.max.x:e.min.x,bo.y=i.normal.y>0?e.max.y:e.min.y,bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zn=new Ce,Jn=new lr;class fh{constructor(){this.coordinateSystem=Hn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Zn,i.coordinateSystem,i.reversedDepth),Jn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Zn,i.coordinateSystem,i.reversedDepth),Jn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Zn,i.coordinateSystem,i.reversedDepth),Jn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Zn,i.coordinateSystem,i.reversedDepth),Jn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Zn,i.coordinateSystem,i.reversedDepth),Jn.containsPoint(e))return!0}return!1}clone(){return new fh}}function oc(r,e){return r-e}function zm(r,e){return r.z-e.z}function Hm(r,e){return e.z-r.z}class Vm{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const cn=new Ce,Gm=new Le(1,1,1),vu=new lr,Wm=new fh,wo=new et,ji=new Gt,yr=new D,_u=new D,Xm=new D,ac=new Vm,qt=new xt,To=[];function jm(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function qi(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class qm extends xt{constructor(e,t,n=t*2,i){super(new Wt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ns(t,e,e,sn,vn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ns(t,e,e,Ta,ki);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ns(t,e,e,sn,vn);n.colorSpace=Ke.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Et(h,c,l);t.setAttribute(s,u)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Et(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new et);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,cn),this.getBoundingBoxAt(s,wo).applyMatrix4(cn),e.union(wo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,cn),this.getBoundingSphereAt(s,ji).applyMatrix4(cn),e.union(ji)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(oc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;cn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(Gm.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(oc),c=this._availableGeometryIds.shift(),s[c]=i):(c=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);jm(u,d,c);const f=u.itemSize;for(let g=u.count,x=l;g<x;g++){const m=c+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)s.setX(h+d,c+o.getX(d));for(let d=o.count,f=u;d<f;d++)s.setX(h+d,c);s.needsUpdate=!0,s.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=i[o],l=n[c];if(l.active!==!1){if(s.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=s.index,g=f.array,x=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+x;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,d=s.attributes;for(const f in d){const g=d[f],{array:x,itemSize:m}=g;x.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=s.index?l.indexStart:l.vertexStart,this._nextIndexStart=s.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new et,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),s.expandByPoint(yr.fromBufferAttribute(a,h))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Gt;this.getBoundingBoxAt(e,wo),wo.getCenter(s.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),yr.fromBufferAttribute(a,u),c=Math.max(c,s.center.distanceToSquared(yr))}s.radius=Math.sqrt(c),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(oc);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);qi(this._multiDrawCounts,i),qi(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),qi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),qi(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),qi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Wt,this._initializeGeometry(s));const o=this.geometry;s.index&&qi(s.index.array,o.index.array);for(const a in s.attributes)qi(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;qt.material=this.material,qt.geometry.index=o.index,qt.geometry.attributes=o.attributes,qt.geometry.boundingBox===null&&(qt.geometry.boundingBox=new et),qt.geometry.boundingSphere===null&&(qt.geometry.boundingSphere=new Gt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,h=i[l];qt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,qt.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,qt.geometry.boundingBox),this.getBoundingSphereAt(l,qt.geometry.boundingSphere),qt.raycast(e,To);for(let u=0,d=To.length;u<d;u++){const f=To[u];f.object=this,f.batchId=a,t.push(f)}To.length=0}qt.material=null,qt.geometry.index=null,qt.geometry.attributes={},qt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data,x=n.isArrayCamera?Wm:vu;d&&!n.isArrayCamera&&(cn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vu.setFromProjectionMatrix(cn,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){cn.copy(this.matrixWorld).invert(),yr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(cn),_u.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(cn);for(let y=0,v=c.length;y<v;y++)if(c[y].visible&&c[y].active){const S=c[y].geometryIndex;this.getMatrixAt(y,cn),this.getBoundingSphereAt(S,ji).applyMatrix4(cn);let R=!1;if(d&&(R=!x.intersectsSphere(ji,n)),!R){const A=u[S],P=Xm.subVectors(ji.center,yr).dot(_u);ac.push(A.start,A.count,P,y)}}const p=ac.list,_=this.customSort;_===null?p.sort(s.transparent?Hm:zm):_.call(this,p,n);for(let y=0,v=p.length;y<v;y++){const S=p[y];l[m]=S.start*a,h[m]=S.count,g[m]=S.index,m++}ac.reset()}else for(let p=0,_=c.length;p<_;p++)if(c[p].visible&&c[p].active){const y=c[p].geometryIndex;let v=!1;if(d&&(this.getMatrixAt(p,cn),this.getBoundingSphereAt(y,ji).applyMatrix4(cn),v=!x.intersectsSphere(ji,n)),!v){const S=u[y];l[m]=S.start*a,h[m]=S.count,g[m]=p,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class Cf extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _a=new D,ya=new D,yu=new Ce,Sr=new ss,Eo=new Gt,cc=new D,Su=new D;class $r extends _t{constructor(e=new Wt,t=new Cf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_a.fromBufferAttribute(t,i-1),ya.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_a.distanceTo(ya);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;yu.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(yu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=h.getX(x),_=h.getX(x+1),y=Ao(this,e,Sr,c,p,_,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=Ao(this,e,Sr,c,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=Ao(this,e,Sr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Ao(this,e,Sr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ao(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(_a.fromBufferAttribute(a,i),ya.fromBufferAttribute(a,s),t.distanceSqToSegment(_a,ya,cc,Su)>n)return;cc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(cc);if(!(l<e.near||l>e.far))return{distance:l,point:Su.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Mu=new D,bu=new D;class ph extends $r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Mu.fromBufferAttribute(t,i),bu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mu.distanceTo(bu);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mh extends $r{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pf extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new Ce,Il=new ss,Ro=new Gt,Co=new D;class gh extends _t{constructor(e=new Wt,t=new Pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;wu.copy(i).invert(),Il.copy(e.ray).applyMatrix4(wu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=l.getX(g);Co.fromBufferAttribute(u,m),Tu(Co,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Co.fromBufferAttribute(u,g),Tu(Co,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tu(r,e,t,n,i,s,o){const a=Il.distanceSqToPoint(r);if(a<t){const c=new D;Il.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zr extends Pt{constructor(e,t,n=ki,i,s,o,a=Ut,c=Ut,l,h=Xr,u=1){if(h!==Xr&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lf extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let y=0;y<l;y++){const v=y*u-s;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const y=_+l*p,v=_+l*(p+1),S=_+1+l*(p+1),R=_+1+l*p;f.push(y,v,R),f.push(v,S,R)}this.setIndex(f),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class xh extends Wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const R=S/t;u.x=-e*Math.cos(i+R*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+R*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+v,1-y),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=h[p][_+1],v=h[p][_],S=h[p+1][_],R=h[p+1][_+1];(p!==0||o>0)&&f.push(y,v,R),(p!==n-1||c<Math.PI)&&f.push(v,S,R)}this.setIndex(f),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ym extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jr extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Jr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Km extends Pn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Zm extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jm extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qm extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Po(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function $m(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function eg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Eu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Df(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class eo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tg extends eo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:s=e,a=2*t-n;break;case Gh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vh:o=e,c=2*n-t;break;case Gh:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let S=0;S!==a;++S)s[S]=p*o[h+S]+_*o[l+S]+y*o[c+S]+v*o[u+S];return s}}class ng extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class ig extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ig(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&$m(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=qr;class hr extends Yn{constructor(e,t,n){super(e,t,n)}}hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=jr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class If extends Yn{constructor(e,t,n,i){super(e,t,n,i)}}If.prototype.ValueTypeName="color";class rr extends Yn{constructor(e,t,n,i){super(e,t,n,i)}}rr.prototype.ValueTypeName="number";class sg extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)ai.slerpFlat(s,0,o,l-a,o,l,c);return s}}class or extends Yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new sg(this.times,this.values,this.getValueSize(),e)}}or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Yn{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=jr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Yn{constructor(e,t,n,i){super(e,t,n,i)}}ar.prototype.ValueTypeName="vector";class rg{constructor(e="",t=-1,n=[],i=Ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ag(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=eg(c);c=Eu(c,1,h),l=Eu(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new rr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];Df(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new rr(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(ar,f+".position",d,"pos",i),n(or,f+".quaternion",d,"rot",i),n(ar,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function og(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return ar;case"color":return If;case"quaternion":return or;case"bool":case"boolean":return hr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ag(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=og(r.type);if(r.times===void 0){const t=[],n=[];Df(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const vi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class cg{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const lg=new cg;class rs{constructor(e){this.manager=e!==void 0?e:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class hg extends Error{constructor(e,t){super(e),this.response=t}}class Sa extends rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=fi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{x+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let R=0,A=h.length;R<A;R++){const P=h[R];P.onProgress&&P.onProgress(S)}p.enqueue(v),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new hg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{vi.add(`file:${e}`,l);const h=fi[e];delete fi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=fi[e];if(h===void 0)throw this.manager.itemError(e),l;delete fi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ms=new WeakMap;class ug extends rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Ms.get(o);u===void 0&&(u=[],Ms.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Yr("img");function c(){h(),t&&t(this);const u=Ms.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ms.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),vi.remove(`image:${e}`);const d=Ms.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ms.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class dg extends rs{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,o=new ug(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class to extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class lc extends to{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hc=new Ce,Au=new D,Ru=new D;class vh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fg extends vh{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ir*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pg extends to{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new fg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cu=new Ce,Mr=new D,uc=new D;class mg extends vh{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),uc.copy(n.position),uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uc),n.updateMatrixWorld(),i.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu,n.coordinateSystem,n.reversedDepth)}}class Nf extends to{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ra extends Tf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gg extends vh{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mi extends to{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new gg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pu extends to{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const dc=new WeakMap;class xg extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(dc.has(o)===!0)i&&i(dc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),dc.set(c,l),vi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vg extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _g{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const _h="\\[\\]\\.:\\/",yg=new RegExp("["+_h+"]","g"),yh="[^"+_h+"]",Sg="[^"+_h.replace("\\.","")+"]",Mg=/((?:WC+[\/:])*)/.source.replace("WC",yh),bg=/(WCOD+)?/.source.replace("WCOD",Sg),wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),Tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),Eg=new RegExp("^"+Mg+bg+wg+Tg+"$"),Ag=["material","materials","bones","map"];class Rg{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(e){const t=Eg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ag.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Rg;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Lu=new Ce;class Uf{constructor(e,t,n=0,i=1/0){this.ray=new ss(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return Nl(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Nl(e[i],this,n,t);return n.sort(Du),n}}function Du(r,e){return r.distance-e.distance}function Nl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Nl(s[o],e,t,!0)}}class Iu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nu=new D,Lo=new D,bs=new D,ws=new D,fc=new D,Cg=new D,Pg=new D;class yi{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Nu.subVectors(e,this.start),Lo.subVectors(this.end,this.start);const n=Lo.dot(Lo);let s=Lo.dot(Nu)/n;return t&&(s=Ve(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Cg,n=Pg){const i=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,h=e.end;bs.subVectors(l,a),ws.subVectors(h,c),fc.subVectors(a,c);const u=bs.dot(bs),d=ws.dot(ws),f=ws.dot(fc);if(u<=i&&d<=i)return t.copy(a),n.copy(c),t.sub(n),t.dot(t);if(u<=i)s=0,o=f/d,o=Ve(o,0,1);else{const g=bs.dot(fc);if(d<=i)o=0,s=Ve(-g/u,0,1);else{const x=bs.dot(ws),m=u*d-x*x;m!==0?s=Ve((x*f-g*d)/m,0,1):s=0,o=(x*s+f)/d,o<0?(o=0,s=Ve(-g/u,0,1)):o>1&&(o=1,s=Ve((x-g)/u,0,1))}}return t.copy(a).add(bs.multiplyScalar(s)),n.copy(c).add(ws.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Lg extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Uu(r,e,t,n){const i=Dg(n);switch(t){case pf:return r*e;case ih:return r*e/i.components*i.byteLength;case Ta:return r*e/i.components*i.byteLength;case gf:return r*e*2/i.components*i.byteLength;case sh:return r*e*2/i.components*i.byteLength;case mf:return r*e*3/i.components*i.byteLength;case sn:return r*e*4/i.components*i.byteLength;case rh:return r*e*4/i.components*i.byteLength;case la:case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ua:case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(r,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(r,8)*Math.max(e,8)/2;case ol:case al:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bl:case wl:case Tl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case El:case Al:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Rl:case Cl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(r){switch(r){case Wn:case hf:return{byteLength:1,components:1};case Wr:case uf:case Xn:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case ki:case eh:case vn:return{byteLength:4,components:1};case df:case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Of(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ig(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];r.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ix=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,px=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ix=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Ng,alphahash_pars_fragment:Ug,alphamap_fragment:Og,alphamap_pars_fragment:Fg,alphatest_fragment:Bg,alphatest_pars_fragment:kg,aomap_fragment:zg,aomap_pars_fragment:Hg,batching_pars_vertex:Vg,batching_vertex:Gg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:jg,iridescence_fragment:qg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:Qg,color_fragment:$g,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,cube_uv_reflection_fragment:sx,defaultnormal_vertex:rx,displacementmap_pars_vertex:ox,displacementmap_vertex:ax,emissivemap_fragment:cx,emissivemap_pars_fragment:lx,colorspace_fragment:hx,colorspace_pars_fragment:ux,envmap_fragment:dx,envmap_common_pars_fragment:fx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:Ex,envmap_vertex:gx,fog_vertex:xx,fog_pars_vertex:vx,fog_fragment:_x,fog_pars_fragment:yx,gradientmap_pars_fragment:Sx,lightmap_pars_fragment:Mx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:wx,lights_pars_begin:Tx,lights_toon_fragment:Ax,lights_toon_pars_fragment:Rx,lights_phong_fragment:Cx,lights_phong_pars_fragment:Px,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Ix,lights_fragment_maps:Nx,lights_fragment_end:Ux,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:kx,map_fragment:zx,map_pars_fragment:Hx,map_particle_fragment:Vx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Wx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:jx,morphcolor_vertex:qx,morphnormal_vertex:Yx,morphtarget_pars_vertex:Kx,morphtarget_vertex:Zx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:$x,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:c0,premultiplied_alpha_fragment:l0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:x0,shadowmask_pars_fragment:v0,skinbase_vertex:_0,skinning_pars_vertex:y0,skinning_vertex:S0,skinnormal_vertex:M0,specularmap_fragment:b0,specularmap_pars_fragment:w0,tonemapping_fragment:T0,tonemapping_pars_fragment:E0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:D0,background_vert:I0,background_frag:N0,backgroundCube_vert:U0,backgroundCube_frag:O0,cube_vert:F0,cube_frag:B0,depth_vert:k0,depth_frag:z0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:j0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:K0,meshlambert_frag:Z0,meshmatcap_vert:J0,meshmatcap_frag:Q0,meshnormal_vert:$0,meshnormal_frag:ev,meshphong_vert:tv,meshphong_frag:nv,meshphysical_vert:iv,meshphysical_frag:sv,meshtoon_vert:rv,meshtoon_frag:ov,points_vert:av,points_frag:cv,shadow_vert:lv,shadow_frag:hv,sprite_vert:uv,sprite_frag:dv},pe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},si={basic:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:tn([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:tn([pe.lights,pe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};si.physical={uniforms:tn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Do={r:0,b:0,g:0},Yi=new jn,fv=new Ce;function pv(r,e,t,n,i,s,o){const a=new Le(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1;const S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===wa)?(h===void 0&&(h=new xt(new cr(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:sr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Yi.copy(v.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(Yi)),h.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ct,(u!==S||d!==S.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new xt(new Aa(2,2),new Dt({name:"BackgroundMaterial",uniforms:sr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Do,wf(r)),n.buffers.color.setClear(Do.r,Do.g,Do.b,v,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m,dispose:_}}function mv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,L,I,F,k){let B=!1;const z=u(F,I,L);s!==z&&(s=z,l(s.object)),B=f(M,F,I,k),B&&g(M,F,I,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(M,L,I,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,L,I){const F=I.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let B=k[L.id];B===void 0&&(B={},k[L.id]=B);let z=B[F];return z===void 0&&(z=d(c()),B[F]=z),z}function d(M){const L=[],I=[],F=[];for(let k=0;k<t;k++)L[k]=0,I[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,L,I,F){const k=s.attributes,B=L.attributes;let z=0;const J=I.getAttributes();for(const X in J)if(J[X].location>=0){const le=k[X];let ge=B[X];if(ge===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function g(M,L,I,F){const k={},B=L.attributes;let z=0;const J=I.getAttributes();for(const X in J)if(J[X].location>=0){let le=B[X];le===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),k[X]=ge,z++}s.attributes=k,s.attributesNum=z,s.index=F}function x(){const M=s.newAttributes;for(let L=0,I=M.length;L<I;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const I=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;I[M]=1,F[M]===0&&(r.enableVertexAttribArray(M),F[M]=1),k[M]!==L&&(r.vertexAttribDivisor(M,L),k[M]=L)}function _(){const M=s.newAttributes,L=s.enabledAttributes;for(let I=0,F=L.length;I<F;I++)L[I]!==M[I]&&(r.disableVertexAttribArray(I),L[I]=0)}function y(M,L,I,F,k,B,z){z===!0?r.vertexAttribIPointer(M,L,I,k,B):r.vertexAttribPointer(M,L,I,F,k,B)}function v(M,L,I,F){x();const k=F.attributes,B=I.getAttributes(),z=L.defaultAttributeValues;for(const J in B){const X=B[J];if(X.location>=0){let ne=k[J];if(ne===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const le=ne.normalized,ge=ne.itemSize,Ne=e.get(ne);if(Ne===void 0)continue;const Ye=Ne.buffer,$e=Ne.type,He=Ne.bytesPerElement,$=$e===r.INT||$e===r.UNSIGNED_INT||ne.gpuType===eh;if(ne.isInterleavedBufferAttribute){const ee=ne.data,ue=ee.stride,be=ne.offset;if(ee.isInstancedInterleavedBuffer){for(let ve=0;ve<X.locationSize;ve++)p(X.location+ve,ee.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ve=0;ve<X.locationSize;ve++)y(X.location+ve,ge/X.locationSize,$e,le,ue*He,(be+ge/X.locationSize*ve)*He,$)}else{if(ne.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)p(X.location+ee,ne.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ee=0;ee<X.locationSize;ee++)y(X.location+ee,ge/X.locationSize,$e,le,ge*He,ge/X.locationSize*ee*He,$)}}else if(z!==void 0){const le=z[J];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(X.location,le);break;case 3:r.vertexAttrib3fv(X.location,le);break;case 4:r.vertexAttrib4fv(X.location,le);break;default:r.vertexAttrib1fv(X.location,le)}}}}_()}function S(){P();for(const M in n){const L=n[M];for(const I in L){const F=L[I];for(const k in F)h(F[k].object),delete F[k];delete L[I]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const I in L){const F=L[I];for(const k in F)h(F[k].object),delete F[k];delete L[I]}delete n[M.id]}function A(M){for(const L in n){const I=n[L];if(I[M.id]===void 0)continue;const F=I[M.id];for(const k in F)h(F[k].object),delete F[k];delete I[M.id]}}function P(){b(),o=!0,s!==i&&(s=i,l(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function gv(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==sn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:R}}function vv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new An,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const _=s?0:n,y=_*4;let v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let S=0;S!==y;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _v(r){let e=new WeakMap;function t(o,a){return a===el?o.mapping=$s:a===tl&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===el||a===tl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Pm(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const js=4,Ou=[.125,.215,.35,.446,.526,.582],ts=20,pc=new Ra,Fu=new Le;let mc=null,gc=0,xc=0,vc=!1;const es=(1+Math.sqrt(5))/2,Ts=1/es,Bu=[new D(-es,Ts,0),new D(es,Ts,0),new D(-Ts,0,es),new D(Ts,0,es),new D(0,es,-Ts),new D(0,es,Ts),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],yv=new D;class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=yv}=s;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,xc),this._renderer.xr.enabled=vc,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Xn,format:sn,colorSpace:Zt,depthBuffer:!1},i=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(s)),this._blurMaterial=Mv(s,e,t)}return i}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,n,i,s){const c=new nn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Fu),u.toneMapping=Bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new Oi({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new xt(new cr,x);let p=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,p=!0):(x.color.copy(Fu),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const S=this._cubeSize;Io(i,v*S,y>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$s||e.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Io(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,pc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bu[(i-s-1)%Bu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ts-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):ts;m>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const p=[];let _=0;for(let A=0;A<ts;++A){const P=A/x,b=Math.exp(-P*P/2);p.push(b),A===0?_+=b:A<m&&(_+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[i],S=3*v*(i>y-js?i-y+js:0),R=4*(this._cubeSize-v);Io(t,S,R,3*v,2*v),c.setRenderTarget(t),c.render(u,pc)}}function Sv(r){const e=[],t=[],n=[];let i=r;const s=r-js+1+Ou.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-js?c=Ou[o-r+js-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,P=R>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(b,x*g*R),y.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const S=new Wt;S.setAttribute("position",new Et(_,x)),S.setAttribute("uv",new Et(y,m)),S.setAttribute("faceIndex",new Et(v,p)),e.push(S),i>js&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ku(r,e,t){const n=new Sn(r,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mv(r,e,t){const n=new Float32Array(ts),i=new D(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function zu(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function Hu(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function Sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===el||c===tl,h=c===$s||c===er;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ul(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ul(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tv(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){const S=_[y+0],R=_[y+1],A=_[y+2];d.push(S,R,R,A,A,S)}}else if(g!==void 0){const _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const S=y+0,R=y+1,A=y+2;d.push(S,R,R,A,A,S)}}else return;const m=new(_f(d)?bf:Mf)(d,1);m.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ev(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Av(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rv(r,e,t){const n=new WeakMap,i=new nt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let S=a.attributes.position.count*v,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*R*4*u),P=new yf(A,S,R,u);P.type=vn,P.needsUpdate=!0;const b=v*4;for(let L=0;L<u;L++){const I=p[L],F=_[L],k=y[L],B=S*R*4*L;for(let z=0;z<I.count;z++){const J=z*b;g===!0&&(i.fromBufferAttribute(I,z),A[B+J+0]=i.x,A[B+J+1]=i.y,A[B+J+2]=i.z,A[B+J+3]=0),x===!0&&(i.fromBufferAttribute(F,z),A[B+J+4]=i.x,A[B+J+5]=i.y,A[B+J+6]=i.z,A[B+J+7]=0),m===!0&&(i.fromBufferAttribute(k,z),A[B+J+8]=i.x,A[B+J+9]=i.y,A[B+J+10]=i.z,A[B+J+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new _e(S,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Cv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Ff=new Pt,Vu=new Zr(1,1),Bf=new yf,kf=new pm,zf=new Ef,Gu=[],Wu=[],Xu=new Float32Array(16),ju=new Float32Array(9),qu=new Float32Array(4);function dr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Gu[i];if(s===void 0&&(s=new Float32Array(i),Gu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ca(r,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Pv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function Dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function Iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function Nv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;qu.set(n),r.uniformMatrix2fv(this.addr,!1,qu),Ft(t,n)}}function Uv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;ju.set(n),r.uniformMatrix3fv(this.addr,!1,ju),Ft(t,n)}}function Ov(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Xu.set(n),r.uniformMatrix4fv(this.addr,!1,Xu),Ft(t,n)}}function Fv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function Hv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function Gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function Wv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function Xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vu.compareFunction=vf,s=Vu):s=Ff,t.setTexture2D(e||s,i)}function jv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kf,i)}function qv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zf,i)}function Yv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bf,i)}function Kv(r){switch(r){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return Iv;case 35674:return Nv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Zv(r,e){r.uniform1fv(this.addr,e)}function Jv(r,e){const t=dr(e,this.size,2);r.uniform2fv(this.addr,t)}function Qv(r,e){const t=dr(e,this.size,3);r.uniform3fv(this.addr,t)}function $v(r,e){const t=dr(e,this.size,4);r.uniform4fv(this.addr,t)}function e_(r,e){const t=dr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function t_(r,e){const t=dr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function n_(r,e){const t=dr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function i_(r,e){r.uniform1iv(this.addr,e)}function s_(r,e){r.uniform2iv(this.addr,e)}function r_(r,e){r.uniform3iv(this.addr,e)}function o_(r,e){r.uniform4iv(this.addr,e)}function a_(r,e){r.uniform1uiv(this.addr,e)}function c_(r,e){r.uniform2uiv(this.addr,e)}function l_(r,e){r.uniform3uiv(this.addr,e)}function h_(r,e){r.uniform4uiv(this.addr,e)}function u_(r,e,t){const n=this.cache,i=e.length,s=Ca(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ff,s[o])}function d_(r,e,t){const n=this.cache,i=e.length,s=Ca(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||kf,s[o])}function f_(r,e,t){const n=this.cache,i=e.length,s=Ca(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||zf,s[o])}function p_(r,e,t){const n=this.cache,i=e.length,s=Ca(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bf,s[o])}function m_(r){switch(r){case 5126:return Zv;case 35664:return Jv;case 35665:return Qv;case 35666:return $v;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return c_;case 36295:return l_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kv(t.type)}}class x_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Yu(r,e){r.seq.push(e),r.map[e.id]=e}function __(r,e,t){const n=r.name,i=n.length;for(_c.lastIndex=0;;){const s=_c.exec(n),o=_c.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yu(t,l===void 0?new g_(a,r,e):new x_(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new v_(a),Yu(t,u)),t=u}}}class fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);__(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ku(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const y_=37297;let S_=0;function M_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Zu=new We;function b_(r){Ke._getMatrix(Zu,Ke.workingColorSpace,r);const e=`mat3( ${Zu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case xa:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ju(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+M_(r.getShaderSource(e),a)}else return s}function w_(r,e){const t=b_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function T_(r,e){let t;switch(e){case tf:t="Linear";break;case nf:t="Reinhard";break;case sf:t="Cineon";break;case $l:t="ACESFilmic";break;case of:t="AgX";break;case af:t="Neutral";break;case rf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new D;function E_(){Ke.getLuminanceCoefficients(No);const r=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function R_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Br(r){return r!==""}function Qu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(r){return r.replace(P_,D_)}const L_=new Map;function D_(r,e){let t=je[e];if(t===void 0){const n=L_.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(r){return r.replace(I_,N_)}function N_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function td(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function O_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case er:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function B_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case Pp:e="ENVMAP_BLENDING_MIX";break;case Lp:e="ENVMAP_BLENDING_ADD";break}return e}function k_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function z_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=U_(t),l=O_(t),h=F_(t),u=B_(t),d=k_(t),f=A_(t),g=R_(s),x=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?je.tonemapping_pars_fragment:"",t.toneMapping!==Bi?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,w_("linearToOutputTexel",t.outputColorSpace),E_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=Ol(o),o=Qu(o,t),o=$u(o,t),a=Ol(a),a=Qu(a,t),a=$u(a,t),o=ed(o),a=ed(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+o,v=_+p+a,S=Ku(i,i.VERTEX_SHADER,y),R=Ku(i,i.FRAGMENT_SHADER,v);i.attachShader(x,S),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(L){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(S)||"",k=i.getShaderInfoLog(R)||"",B=I.trim(),z=F.trim(),J=k.trim();let X=!0,ne=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,S,R);else{const le=Ju(i,S,"vertex"),ge=Ju(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+le+`
`+ge)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||J==="")&&(ne=!1);ne&&(L.diagnostics={runnable:X,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:J,prefix:p}})}i.deleteShader(S),i.deleteShader(R),P=new fa(i,x),b=C_(i,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,y_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=R,this}let H_=0;class V_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new G_(e),t.set(e,n)),n}}class G_{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}}function W_(r,e,t,n,i,s,o){const a=new lh,c=new V_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,I,F){const k=I.fog,B=F.geometry,z=b.isMeshStandardMaterial?I.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),X=J&&J.mapping===wa?J.image.height:null,ne=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=le!==void 0?le.length:0;let Ne=0;B.morphAttributes.position!==void 0&&(Ne=1),B.morphAttributes.normal!==void 0&&(Ne=2),B.morphAttributes.color!==void 0&&(Ne=3);let Ye,$e,He,$;if(ne){const ke=si[ne];Ye=ke.vertexShader,$e=ke.fragmentShader}else Ye=b.vertexShader,$e=b.fragmentShader,c.update(b),He=c.getVertexShaderID(b),$=c.getFragmentShaderID(b);const ee=r.getRenderTarget(),ue=r.state.buffers.depth.getReversed(),be=F.isInstancedMesh===!0,ve=F.isBatchedMesh===!0,Xe=!!b.map,rt=!!b.matcap,U=!!J,Qe=!!b.aoMap,Ae=!!b.lightMap,Re=!!b.bumpMap,ye=!!b.normalMap,tt=!!b.displacementMap,he=!!b.emissiveMap,Ue=!!b.metalnessMap,st=!!b.roughnessMap,ot=b.anisotropy>0,N=b.clearcoat>0,T=b.dispersion>0,W=b.iridescence>0,Q=b.sheen>0,te=b.transmission>0,K=ot&&!!b.anisotropyMap,Se=N&&!!b.clearcoatMap,re=N&&!!b.clearcoatNormalMap,xe=N&&!!b.clearcoatRoughnessMap,we=W&&!!b.iridescenceMap,se=W&&!!b.iridescenceThicknessMap,de=Q&&!!b.sheenColorMap,De=Q&&!!b.sheenRoughnessMap,Te=!!b.specularMap,ce=!!b.specularColorMap,E=!!b.specularIntensityMap,w=te&&!!b.transmissionMap,O=te&&!!b.thicknessMap,G=!!b.gradientMap,ie=!!b.alphaMap,Z=b.alphaTest>0,j=!!b.alphaHash,ae=!!b.extensions;let fe=Bi;b.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Pe={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:$e,defines:b.defines,customVertexShaderID:He,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ve,batchingColor:ve&&F._colorsTexture!==null,instancing:be,instancingColor:be&&F.instanceColor!==null,instancingMorph:be&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Zt,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:rt,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:X,aoMap:Qe,lightMap:Ae,bumpMap:Re,normalMap:ye,displacementMap:d&&tt,emissiveMap:he,normalMapObjectSpace:ye&&b.normalMapType===Fp,normalMapTangentSpace:ye&&b.normalMapType===Ea,metalnessMap:Ue,roughnessMap:st,anisotropy:ot,anisotropyMap:K,clearcoat:N,clearcoatMap:Se,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:T,iridescence:W,iridescenceMap:we,iridescenceThicknessMap:se,sheen:Q,sheenColorMap:de,sheenRoughnessMap:De,specularMap:Te,specularColorMap:ce,specularIntensityMap:E,transmission:te,transmissionMap:w,thicknessMap:O,gradientMap:G,opaque:b.transparent===!1&&b.blending===Ks&&b.alphaToCoverage===!1,alphaMap:ie,alphaTest:Z,alphaHash:j,combine:b.combine,mapUv:Xe&&x(b.map.channel),aoMapUv:Qe&&x(b.aoMap.channel),lightMapUv:Ae&&x(b.lightMap.channel),bumpMapUv:Re&&x(b.bumpMap.channel),normalMapUv:ye&&x(b.normalMap.channel),displacementMapUv:tt&&x(b.displacementMap.channel),emissiveMapUv:he&&x(b.emissiveMap.channel),metalnessMapUv:Ue&&x(b.metalnessMap.channel),roughnessMapUv:st&&x(b.roughnessMap.channel),anisotropyMapUv:K&&x(b.anisotropyMap.channel),clearcoatMapUv:Se&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(b.sheenRoughnessMap.channel),specularMapUv:Te&&x(b.specularMap.channel),specularColorMapUv:ce&&x(b.specularColorMap.channel),specularIntensityMapUv:E&&x(b.specularIntensityMap.channel),transmissionMapUv:w&&x(b.transmissionMap.channel),thicknessMapUv:O&&x(b.thicknessMap.channel),alphaMapUv:ie&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||ot),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Xe||ie),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:he&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rn,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ae&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&b.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=g[b.type];let L;if(M){const I=si[M];L=zn.clone(I.uniforms)}else L=b.uniforms;return L}function S(b,M){let L;for(let I=0,F=h.length;I<F;I++){const k=h[I];if(k.cacheKey===M){L=k,++L.usedTimes;break}}return L===void 0&&(L=new z_(r,M,b,s),h.push(L)),L}function R(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:P}}function X_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function j_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function id(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||j_),n.length>1&&n.sort(d||nd),i.length>1&&i.sort(d||nd)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function q_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new id,r.set(n,[o])):i>=s.length?(o=new id,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Y_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function K_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Z_=0;function J_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Q_(r){const e=new Y_,t=K_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,s=new Ce,o=new Ce;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,S=0,R=0,A=0;l.sort(J_);for(let b=0,M=l.length;b<M;b++){const L=l[b],I=L.color,F=L.intensity,k=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],F);A++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,X=t.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=L.shadow.matrix,_++}n.directional[f]=z,f++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(I).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[x]=z;const J=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,J.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=J.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=B,v++}x++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(I).multiplyScalar(F),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const J=L.shadow,X=t.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(F),z.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==S||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=S,P.numLightProbes=A,n.version=Z_++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function sd(r){const e=new Q_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function $_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new sd(r),e.set(i,[a])):s>=o.length?(a=new sd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ny(r,e,t){let n=new lr;const i=new _e,s=new _e,o=new nt,a=new Jm({depthPacking:Op}),c=new Qm,l={},h=t.maxTextureSize,u={[Gn]:Kt,[Kt]:Gn,[Rn]:Rn},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let p=this.type;this.render=function(R,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ht),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==pi&&this.type===pi,k=p===pi&&this.type!==pi;for(let B=0,z=R.length;B<z;B++){const J=R[B],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ne=X.getFrameExtents();if(i.multiply(ne),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,X.mapSize.y=s.y)),X.map===null||F===!0||k===!0){const ge=this.type!==pi?{minFilter:Ut,magFilter:Ut}:{};X.map!==null&&X.map.dispose(),X.map=new Sn(i.x,i.y,ge),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const le=X.getViewportCount();for(let ge=0;ge<le;ge++){const Ne=X.getViewport(ge);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),I.viewport(o),X.updateMatrices(J,ge),n=X.getFrustum(),v(A,P,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===pi&&_(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,M,L)};function _(R,A){const P=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Sn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(A,null,P,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(A,null,P,f,x,null)}function y(R,A,P,b){let M=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=M.uuid,F=A.uuid;let k=l[I];k===void 0&&(k={},l[I]=k);let B=k[F];B===void 0&&(B=M.clone(),k[F]=B,A.addEventListener("dispose",S)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,b===pi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=r.properties.get(M);I.light=P}return M}function v(R,A,P,b,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===pi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=e.update(R),k=R.material;if(Array.isArray(k)){const B=F.groups;for(let z=0,J=B.length;z<J;z++){const X=B[z],ne=k[X.materialIndex];if(ne&&ne.visible){const le=y(R,ne,b,M);R.onBeforeShadow(r,R,A,P,F,le,X),r.renderBufferDirect(P,null,F,le,R,X),R.onAfterShadow(r,R,A,P,F,le,X)}}}else if(k.visible){const B=y(R,k,b,M);R.onBeforeShadow(r,R,A,P,F,B,null),r.renderBufferDirect(P,null,F,B,R,null),R.onAfterShadow(r,R,A,P,F,B,null)}}const I=R.children;for(let F=0,k=I.length;F<k;F++)v(I[F],A,P,b,M)}function S(R){R.target.removeEventListener("dispose",S);for(const P in l){const b=l[P],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const iy={[qc]:Yc,[Kc]:Qc,[Zc]:$c,[Qs]:Jc,[Yc]:qc,[Qc]:Kc,[$c]:Zc,[Jc]:Qs};function sy(r,e){function t(){let w=!1;const O=new nt;let G=null;const ie=new nt(0,0,0,0);return{setMask:function(Z){G!==Z&&!w&&(r.colorMask(Z,Z,Z,Z),G=Z)},setLocked:function(Z){w=Z},setClear:function(Z,j,ae,fe,Pe){Pe===!0&&(Z*=fe,j*=fe,ae*=fe),O.set(Z,j,ae,fe),ie.equals(O)===!1&&(r.clearColor(Z,j,ae,fe),ie.copy(O))},reset:function(){w=!1,G=null,ie.set(-1,0,0,0)}}}function n(){let w=!1,O=!1,G=null,ie=null,Z=null;return{setReversed:function(j){if(O!==j){const ae=e.get("EXT_clip_control");j?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),O=j;const fe=Z;Z=null,this.setClear(fe)}},getReversed:function(){return O},setTest:function(j){j?ee(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(j){G!==j&&!w&&(r.depthMask(j),G=j)},setFunc:function(j){if(O&&(j=iy[j]),ie!==j){switch(j){case qc:r.depthFunc(r.NEVER);break;case Yc:r.depthFunc(r.ALWAYS);break;case Kc:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Zc:r.depthFunc(r.EQUAL);break;case Jc:r.depthFunc(r.GEQUAL);break;case Qc:r.depthFunc(r.GREATER);break;case $c:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ie=j}},setLocked:function(j){w=j},setClear:function(j){Z!==j&&(O&&(j=1-j),r.clearDepth(j),Z=j)},reset:function(){w=!1,G=null,ie=null,Z=null,O=!1}}}function i(){let w=!1,O=null,G=null,ie=null,Z=null,j=null,ae=null,fe=null,Pe=null;return{setTest:function(ke){w||(ke?ee(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(ke){O!==ke&&!w&&(r.stencilMask(ke),O=ke)},setFunc:function(ke,Jt,Kn){(G!==ke||ie!==Jt||Z!==Kn)&&(r.stencilFunc(ke,Jt,Kn),G=ke,ie=Jt,Z=Kn)},setOp:function(ke,Jt,Kn){(j!==ke||ae!==Jt||fe!==Kn)&&(r.stencilOp(ke,Jt,Kn),j=ke,ae=Jt,fe=Kn)},setLocked:function(ke){w=ke},setClear:function(ke){Pe!==ke&&(r.clearStencil(ke),Pe=ke)},reset:function(){w=!1,O=null,G=null,ie=null,Z=null,j=null,ae=null,fe=null,Pe=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,S=null,R=null,A=new Le(0,0,0),P=0,b=!1,M=null,L=null,I=null,F=null,k=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=J>=2);let ne=null,le={};const ge=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Ye=new nt().fromArray(ge),$e=new nt().fromArray(Ne);function He(w,O,G,ie){const Z=new Uint8Array(4),j=r.createTexture();r.bindTexture(w,j),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<G;ae++)w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY?r.texImage3D(O,0,r.RGBA,1,1,ie,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(O+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return j}const $={};$[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc(Qs),Re(!1),ye(Oh),ee(r.CULL_FACE),Qe(Ht);function ee(w){h[w]!==!0&&(r.enable(w),h[w]=!0)}function ue(w){h[w]!==!1&&(r.disable(w),h[w]=!1)}function be(w,O){return u[w]!==O?(r.bindFramebuffer(w,O),u[w]=O,w===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=O),w===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=O),!0):!1}function ve(w,O){let G=f,ie=!1;if(w){G=d.get(O),G===void 0&&(G=[],d.set(O,G));const Z=w.textures;if(G.length!==Z.length||G[0]!==r.COLOR_ATTACHMENT0){for(let j=0,ae=Z.length;j<ae;j++)G[j]=r.COLOR_ATTACHMENT0+j;G.length=Z.length,ie=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,ie=!0);ie&&r.drawBuffers(G)}function Xe(w){return g!==w?(r.useProgram(w),g=w,!0):!1}const rt={[Bn]:r.FUNC_ADD,[gp]:r.FUNC_SUBTRACT,[xp]:r.FUNC_REVERSE_SUBTRACT};rt[vp]=r.MIN,rt[_p]=r.MAX;const U={[Or]:r.ZERO,[yp]:r.ONE,[Sp]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[Tp]:r.SRC_ALPHA_SATURATE,[jc]:r.DST_COLOR,[Xc]:r.DST_ALPHA,[Mp]:r.ONE_MINUS_SRC_COLOR,[Wc]:r.ONE_MINUS_SRC_ALPHA,[wp]:r.ONE_MINUS_DST_COLOR,[bp]:r.ONE_MINUS_DST_ALPHA,[Ep]:r.CONSTANT_COLOR,[Ap]:r.ONE_MINUS_CONSTANT_COLOR,[Rp]:r.CONSTANT_ALPHA,[Cp]:r.ONE_MINUS_CONSTANT_ALPHA};function Qe(w,O,G,ie,Z,j,ae,fe,Pe,ke){if(w===Ht){x===!0&&(ue(r.BLEND),x=!1);return}if(x===!1&&(ee(r.BLEND),x=!0),w!==ef){if(w!==m||ke!==b){if((p!==Bn||v!==Bn)&&(r.blendEquation(r.FUNC_ADD),p=Bn,v=Bn),ke)switch(w){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fh:r.blendFunc(r.ONE,r.ONE);break;case Bh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Bh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}_=null,y=null,S=null,R=null,A.set(0,0,0),P=0,m=w,b=ke}return}Z=Z||O,j=j||G,ae=ae||ie,(O!==p||Z!==v)&&(r.blendEquationSeparate(rt[O],rt[Z]),p=O,v=Z),(G!==_||ie!==y||j!==S||ae!==R)&&(r.blendFuncSeparate(U[G],U[ie],U[j],U[ae]),_=G,y=ie,S=j,R=ae),(fe.equals(A)===!1||Pe!==P)&&(r.blendColor(fe.r,fe.g,fe.b,Pe),A.copy(fe),P=Pe),m=w,b=!1}function Ae(w,O){w.side===Rn?ue(r.CULL_FACE):ee(r.CULL_FACE);let G=w.side===Kt;O&&(G=!G),Re(G),w.blending===Ks&&w.transparent===!1?Qe(Ht):Qe(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),o.setFunc(w.depthFunc),o.setTest(w.depthTest),o.setMask(w.depthWrite),s.setMask(w.colorWrite);const ie=w.stencilWrite;a.setTest(ie),ie&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),he(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(w){M!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),M=w)}function ye(w){w!==fp?(ee(r.CULL_FACE),w!==L&&(w===Oh?r.cullFace(r.BACK):w===pp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),L=w}function tt(w){w!==I&&(z&&r.lineWidth(w),I=w)}function he(w,O,G){w?(ee(r.POLYGON_OFFSET_FILL),(F!==O||k!==G)&&(r.polygonOffset(O,G),F=O,k=G)):ue(r.POLYGON_OFFSET_FILL)}function Ue(w){w?ee(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)}function st(w){w===void 0&&(w=r.TEXTURE0+B-1),ne!==w&&(r.activeTexture(w),ne=w)}function ot(w,O,G){G===void 0&&(ne===null?G=r.TEXTURE0+B-1:G=ne);let ie=le[G];ie===void 0&&(ie={type:void 0,texture:void 0},le[G]=ie),(ie.type!==w||ie.texture!==O)&&(ne!==G&&(r.activeTexture(G),ne=G),r.bindTexture(w,O||$[w]),ie.type=w,ie.texture=O)}function N(){const w=le[ne];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{r.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{r.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{r.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{r.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function we(){try{r.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{r.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(w){Ye.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),Ye.copy(w))}function De(w){$e.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),$e.copy(w))}function Te(w,O){let G=l.get(O);G===void 0&&(G=new WeakMap,l.set(O,G));let ie=G.get(w);ie===void 0&&(ie=r.getUniformBlockIndex(O,w.name),G.set(w,ie))}function ce(w,O){const ie=l.get(O).get(w);c.get(O)!==ie&&(r.uniformBlockBinding(O,ie,w.__bindingPointIndex),c.set(O,ie))}function E(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,le={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,S=null,R=null,A=new Le(0,0,0),P=0,b=!1,M=null,L=null,I=null,F=null,k=null,Ye.set(0,0,r.canvas.width,r.canvas.height),$e.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:ue,bindFramebuffer:be,drawBuffers:ve,useProgram:Xe,setBlending:Qe,setMaterial:Ae,setFlipSided:Re,setCullFace:ye,setLineWidth:tt,setPolygonOffset:he,setScissorTest:Ue,activeTexture:st,bindTexture:ot,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:we,texImage3D:se,updateUBOMapping:Te,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:xe,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Se,scissor:de,viewport:De,reset:E}}function ry(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,T){return f?new OffscreenCanvas(N,T):Yr("canvas")}function x(N,T,W){let Q=1;const te=ot(N);if((te.width>W||te.height>W)&&(Q=W/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const K=Math.floor(Q*te.width),Se=Math.floor(Q*te.height);u===void 0&&(u=g(K,Se));const re=T?g(K,Se):u;return re.width=K,re.height=Se,re.getContext("2d").drawImage(N,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Se+")."),re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){r.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(N,T,W,Q,te=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let K=T;if(T===r.RED&&(W===r.FLOAT&&(K=r.R32F),W===r.HALF_FLOAT&&(K=r.R16F),W===r.UNSIGNED_BYTE&&(K=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.R8UI),W===r.UNSIGNED_SHORT&&(K=r.R16UI),W===r.UNSIGNED_INT&&(K=r.R32UI),W===r.BYTE&&(K=r.R8I),W===r.SHORT&&(K=r.R16I),W===r.INT&&(K=r.R32I)),T===r.RG&&(W===r.FLOAT&&(K=r.RG32F),W===r.HALF_FLOAT&&(K=r.RG16F),W===r.UNSIGNED_BYTE&&(K=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RG8UI),W===r.UNSIGNED_SHORT&&(K=r.RG16UI),W===r.UNSIGNED_INT&&(K=r.RG32UI),W===r.BYTE&&(K=r.RG8I),W===r.SHORT&&(K=r.RG16I),W===r.INT&&(K=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGB8UI),W===r.UNSIGNED_SHORT&&(K=r.RGB16UI),W===r.UNSIGNED_INT&&(K=r.RGB32UI),W===r.BYTE&&(K=r.RGB8I),W===r.SHORT&&(K=r.RGB16I),W===r.INT&&(K=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),W===r.UNSIGNED_INT&&(K=r.RGBA32UI),W===r.BYTE&&(K=r.RGBA8I),W===r.SHORT&&(K=r.RGBA16I),W===r.INT&&(K=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),T===r.RGBA){const Se=te?xa:Ke.getTransfer(Q);W===r.FLOAT&&(K=r.RGBA32F),W===r.HALF_FLOAT&&(K=r.RGBA16F),W===r.UNSIGNED_BYTE&&(K=Se===ct?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(N,T){let W;return N?T===null||T===ki||T===tr?W=r.DEPTH24_STENCIL8:T===vn?W=r.DEPTH32F_STENCIL8:T===Wr&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ki||T===tr?W=r.DEPTH_COMPONENT24:T===vn?W=r.DEPTH_COMPONENT32F:T===Wr&&(W=r.DEPTH_COMPONENT16),W}function S(N,T){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ut&&N.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function R(N){const T=N.target;T.removeEventListener("dispose",R),P(T),T.isVideoTexture&&h.delete(T)}function A(N){const T=N.target;T.removeEventListener("dispose",A),M(T)}function P(N){const T=n.get(N);if(T.__webglInit===void 0)return;const W=N.source,Q=d.get(W);if(Q){const te=Q[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(N),Object.keys(Q).length===0&&d.delete(W)}n.remove(N)}function b(N){const T=n.get(N);r.deleteTexture(T.__webglTexture);const W=N.source,Q=d.get(W);delete Q[T.__cacheKey],o.memory.textures--}function M(N){const T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let te=0;te<T.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(T.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Q]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=N.textures;for(let Q=0,te=W.length;Q<te;Q++){const K=n.get(W[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(W[Q])}n.remove(N)}let L=0;function I(){L=0}function F(){const N=L;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),L+=1,N}function k(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function B(N,T){const W=n.get(N);if(N.isVideoTexture&&Ue(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const Q=N.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function z(N,T){const W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){$(W,N,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function J(N,T){const W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){$(W,N,T);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function X(N,T){const W=n.get(N);if(N.version>0&&W.__version!==N.version){ee(W,N,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}const ne={[oi]:r.REPEAT,[Ui]:r.CLAMP_TO_EDGE,[ga]:r.MIRRORED_REPEAT},le={[Ut]:r.NEAREST,[lf]:r.NEAREST_MIPMAP_NEAREST,[Fr]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[ca]:r.LINEAR_MIPMAP_NEAREST,[xi]:r.LINEAR_MIPMAP_LINEAR},ge={[Bp]:r.NEVER,[Wp]:r.ALWAYS,[kp]:r.LESS,[vf]:r.LEQUAL,[zp]:r.EQUAL,[Gp]:r.GEQUAL,[Hp]:r.GREATER,[Vp]:r.NOTEQUAL};function Ne(N,T){if(T.type===vn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===ca||T.magFilter===Fr||T.magFilter===xi||T.minFilter===un||T.minFilter===ca||T.minFilter===Fr||T.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,ne[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,ne[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,ne[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,le[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ut||T.minFilter!==Fr&&T.minFilter!==xi||T.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ye(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",R));const Q=T.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const K=k(T);if(K!==N.__cacheKey){te[K]===void 0&&(te[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[K].usedTimes++;const Se=te[N.__cacheKey];Se!==void 0&&(te[N.__cacheKey].usedTimes--,Se.usedTimes===0&&b(T)),N.__cacheKey=K,N.__webglTexture=te[K].texture}return W}function $e(N,T,W){return Math.floor(Math.floor(N/W)/T)}function He(N,T,W,Q){const K=N.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,Q,T.data);else{K.sort((se,de)=>se.start-de.start);let Se=0;for(let se=1;se<K.length;se++){const de=K[Se],De=K[se],Te=de.start+de.count,ce=$e(De.start,T.width,4),E=$e(de.start,T.width,4);De.start<=Te+1&&ce===E&&$e(De.start+De.count-1,T.width,4)===ce?de.count=Math.max(de.count,De.start+De.count-de.start):(++Se,K[Se]=De)}K.length=Se+1;const re=r.getParameter(r.UNPACK_ROW_LENGTH),xe=r.getParameter(r.UNPACK_SKIP_PIXELS),we=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let se=0,de=K.length;se<de;se++){const De=K[se],Te=Math.floor(De.start/4),ce=Math.ceil(De.count/4),E=Te%T.width,w=Math.floor(Te/T.width),O=ce,G=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,E),r.pixelStorei(r.UNPACK_SKIP_ROWS,w),t.texSubImage2D(r.TEXTURE_2D,0,E,w,O,G,W,Q,T.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,re),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function $(N,T,W){let Q=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=r.TEXTURE_3D);const te=Ye(N,T),K=T.source;t.bindTexture(Q,N.__webglTexture,r.TEXTURE0+W);const Se=n.get(K);if(K.version!==Se.__version||te===!0){t.activeTexture(r.TEXTURE0+W);const re=Ke.getPrimaries(Ke.workingColorSpace),xe=T.colorSpace===Ii?null:Ke.getPrimaries(T.colorSpace),we=T.colorSpace===Ii||re===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=x(T.image,!1,i.maxTextureSize);se=st(T,se);const de=s.convert(T.format,T.colorSpace),De=s.convert(T.type);let Te=y(T.internalFormat,de,De,T.colorSpace,T.isVideoTexture);Ne(Q,T);let ce;const E=T.mipmaps,w=T.isVideoTexture!==!0,O=Se.__version===void 0||te===!0,G=K.dataReady,ie=S(T,se);if(T.isDepthTexture)Te=v(T.format===nr,T.type),O&&(w?t.texStorage2D(r.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Te,se.width,se.height,0,de,De,null));else if(T.isDataTexture)if(E.length>0){w&&O&&t.texStorage2D(r.TEXTURE_2D,ie,Te,E[0].width,E[0].height);for(let Z=0,j=E.length;Z<j;Z++)ce=E[Z],w?G&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(r.TEXTURE_2D,Z,Te,ce.width,ce.height,0,de,De,ce.data);T.generateMipmaps=!1}else w?(O&&t.texStorage2D(r.TEXTURE_2D,ie,Te,se.width,se.height),G&&He(T,se,de,De)):t.texImage2D(r.TEXTURE_2D,0,Te,se.width,se.height,0,de,De,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){w&&O&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Te,E[0].width,E[0].height,se.depth);for(let Z=0,j=E.length;Z<j;Z++)if(ce=E[Z],T.format!==sn)if(de!==null)if(w){if(G)if(T.layerUpdates.size>0){const ae=Uu(ce.width,ce.height,T.format,T.type);for(const fe of T.layerUpdates){const Pe=ce.data.subarray(fe*ae/ce.data.BYTES_PER_ELEMENT,(fe+1)*ae/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,fe,ce.width,ce.height,1,de,Pe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,se.depth,de,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Te,ce.width,ce.height,se.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,se.depth,de,De,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Te,ce.width,ce.height,se.depth,0,de,De,ce.data)}else{w&&O&&t.texStorage2D(r.TEXTURE_2D,ie,Te,E[0].width,E[0].height);for(let Z=0,j=E.length;Z<j;Z++)ce=E[Z],T.format!==sn?de!==null?w?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Te,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?G&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(r.TEXTURE_2D,Z,Te,ce.width,ce.height,0,de,De,ce.data)}else if(T.isDataArrayTexture)if(w){if(O&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Te,se.width,se.height,se.depth),G)if(T.layerUpdates.size>0){const Z=Uu(se.width,se.height,T.format,T.type);for(const j of T.layerUpdates){const ae=se.data.subarray(j*Z/se.data.BYTES_PER_ELEMENT,(j+1)*Z/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,de,De,ae)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,De,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,de,De,se.data);else if(T.isData3DTexture)w?(O&&t.texStorage3D(r.TEXTURE_3D,ie,Te,se.width,se.height,se.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,De,se.data)):t.texImage3D(r.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,de,De,se.data);else if(T.isFramebufferTexture){if(O)if(w)t.texStorage2D(r.TEXTURE_2D,ie,Te,se.width,se.height);else{let Z=se.width,j=se.height;for(let ae=0;ae<ie;ae++)t.texImage2D(r.TEXTURE_2D,ae,Te,Z,j,0,de,De,null),Z>>=1,j>>=1}}else if(E.length>0){if(w&&O){const Z=ot(E[0]);t.texStorage2D(r.TEXTURE_2D,ie,Te,Z.width,Z.height)}for(let Z=0,j=E.length;Z<j;Z++)ce=E[Z],w?G&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,de,De,ce):t.texImage2D(r.TEXTURE_2D,Z,Te,de,De,ce);T.generateMipmaps=!1}else if(w){if(O){const Z=ot(se);t.texStorage2D(r.TEXTURE_2D,ie,Te,Z.width,Z.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,De,se)}else t.texImage2D(r.TEXTURE_2D,0,Te,de,De,se);m(T)&&p(Q),Se.__version=K.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ee(N,T,W){if(T.image.length!==6)return;const Q=Ye(N,T),te=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const K=n.get(te);if(te.version!==K.__version||Q===!0){t.activeTexture(r.TEXTURE0+W);const Se=Ke.getPrimaries(Ke.workingColorSpace),re=T.colorSpace===Ii?null:Ke.getPrimaries(T.colorSpace),xe=T.colorSpace===Ii||Se===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!we&&!se?de[j]=x(T.image[j],!0,i.maxCubemapSize):de[j]=se?T.image[j].image:T.image[j],de[j]=st(T,de[j]);const De=de[0],Te=s.convert(T.format,T.colorSpace),ce=s.convert(T.type),E=y(T.internalFormat,Te,ce,T.colorSpace),w=T.isVideoTexture!==!0,O=K.__version===void 0||Q===!0,G=te.dataReady;let ie=S(T,De);Ne(r.TEXTURE_CUBE_MAP,T);let Z;if(we){w&&O&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,E,De.width,De.height);for(let j=0;j<6;j++){Z=de[j].mipmaps;for(let ae=0;ae<Z.length;ae++){const fe=Z[ae];T.format!==sn?Te!==null?w?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,fe.width,fe.height,Te,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,E,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,fe.width,fe.height,Te,ce,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,E,fe.width,fe.height,0,Te,ce,fe.data)}}}else{if(Z=T.mipmaps,w&&O){Z.length>0&&ie++;const j=ot(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,E,j.width,j.height)}for(let j=0;j<6;j++)if(se){w?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,Te,ce,de[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,E,de[j].width,de[j].height,0,Te,ce,de[j].data);for(let ae=0;ae<Z.length;ae++){const Pe=Z[ae].image[j].image;w?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,Pe.width,Pe.height,Te,ce,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,E,Pe.width,Pe.height,0,Te,ce,Pe.data)}}else{w?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,ce,de[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,E,Te,ce,de[j]);for(let ae=0;ae<Z.length;ae++){const fe=Z[ae];w?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,Te,ce,fe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,E,Te,ce,fe.image[j])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),K.__version=te.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ue(N,T,W,Q,te,K){const Se=s.convert(W.format,W.colorSpace),re=s.convert(W.type),xe=y(W.internalFormat,Se,re,W.colorSpace),we=n.get(T),se=n.get(W);if(se.__renderTarget=T,!we.__hasExternalTextures){const de=Math.max(1,T.width>>K),De=Math.max(1,T.height>>K);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,K,xe,de,De,T.depth,0,Se,re,null):t.texImage2D(te,K,xe,de,De,0,Se,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),he(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,te,se.__webglTexture,0,tt(T)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,te,se.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(N,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const Q=T.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,K=v(T.stencilBuffer,te),Se=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=tt(T);he(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,K,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,N)}else{const Q=T.textures;for(let te=0;te<Q.length;te++){const K=Q[te],Se=s.convert(K.format,K.colorSpace),re=s.convert(K.type),xe=y(K.internalFormat,Se,re,K.colorSpace),we=tt(T);W&&he(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,xe,T.width,T.height):he(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,xe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,xe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const te=Q.__webglTexture,K=tt(T);if(T.depthTexture.format===Xr)he(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===nr)he(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Xe(N){const T=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const Q=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=Q}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Q=N.texture.mipmaps;Q&&Q.length>0?ve(T.__webglFramebuffer[0],N):ve(T.__webglFramebuffer,N)}else if(W){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=r.createRenderbuffer(),be(T.__webglDepthbuffer[Q],N,!1);else{const te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}else{const Q=N.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),be(T.__webglDepthbuffer,N,!1);else{const te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(N,T,W){const Q=n.get(N);T!==void 0&&ue(Q.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Xe(N)}function U(N){const T=N.texture,W=n.get(N),Q=n.get(T);N.addEventListener("dispose",A);const te=N.textures,K=N.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=T.version,o.memory.textures++),K){W.__webglFramebuffer=[];for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[re]=[];for(let xe=0;xe<T.mipmaps.length;xe++)W.__webglFramebuffer[re][xe]=r.createFramebuffer()}else W.__webglFramebuffer[re]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)W.__webglFramebuffer[re]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Se)for(let re=0,xe=te.length;re<xe;re++){const we=n.get(te[re]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&he(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let re=0;re<te.length;re++){const xe=te[re];W.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[re]);const we=s.convert(xe.format,xe.colorSpace),se=s.convert(xe.type),de=y(xe.internalFormat,we,se,xe.colorSpace,N.isXRRenderTarget===!0),De=tt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,de,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,W.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),be(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,T);for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)ue(W.__webglFramebuffer[re][xe],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe);else ue(W.__webglFramebuffer[re],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,xe=te.length;re<xe;re++){const we=te[re],se=n.get(we);let de=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,se.__webglTexture),Ne(de,we),ue(W.__webglFramebuffer,N,we,r.COLOR_ATTACHMENT0+re,de,0),m(we)&&p(de)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(re=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,Q.__webglTexture),Ne(re,T),T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)ue(W.__webglFramebuffer[xe],N,T,r.COLOR_ATTACHMENT0,re,xe);else ue(W.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,re,0);m(T)&&p(re),t.unbindTexture()}N.depthBuffer&&Xe(N)}function Qe(N){const T=N.textures;for(let W=0,Q=T.length;W<Q;W++){const te=T[W];if(m(te)){const K=_(N),Se=n.get(te).__webglTexture;t.bindTexture(K,Se),p(K),t.unbindTexture()}}}const Ae=[],Re=[];function ye(N){if(N.samples>0){if(he(N)===!1){const T=N.textures,W=N.width,Q=N.height;let te=r.COLOR_BUFFER_BIT;const K=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(N),re=T.length>1;if(re)for(let we=0;we<T.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=N.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<T.length;we++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);const se=n.get(T[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,W,Q,0,0,W,Q,te,r.NEAREST),c===!0&&(Ae.length=0,Re.length=0,Ae.push(r.COLOR_ATTACHMENT0+we),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ae.push(K),Re.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<T.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);const se=n.get(T[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function tt(N){return Math.min(i.maxSamples,N.samples)}function he(N){const T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ue(N){const T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function st(N,T){const W=N.colorSpace,Q=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Zt&&W!==Ii&&(Ke.getTransfer(W)===ct?(Q!==sn||te!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function ot(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=rt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=he}function oy(r,e){function t(n,i=Ii){let s;const o=Ke.getTransfer(i);if(n===Wn)return r.UNSIGNED_BYTE;if(n===th)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===df)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ff)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===hf)return r.BYTE;if(n===uf)return r.SHORT;if(n===Wr)return r.UNSIGNED_SHORT;if(n===eh)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===vn)return r.FLOAT;if(n===Xn)return r.HALF_FLOAT;if(n===pf)return r.ALPHA;if(n===mf)return r.RGB;if(n===sn)return r.RGBA;if(n===Xr)return r.DEPTH_COMPONENT;if(n===nr)return r.DEPTH_STENCIL;if(n===ih)return r.RED;if(n===Ta)return r.RED_INTEGER;if(n===gf)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===rh)return r.RGBA_INTEGER;if(n===la||n===ha||n===ua||n===da)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===cl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ol||n===al)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===vl||n===_l||n===yl||n===Sl||n===Ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ll)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===wl||n===Tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bl)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===Al||n===Rl||n===Cl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===El)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ly{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:ay,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hy extends is{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new ly,p={},_=t.getContextAttributes();let y=null,v=null;const S=[],R=[],A=new _e;let P=null;const b=new nn;b.viewport=new nt;const M=new nn;M.viewport=new nt;const L=[b,M],I=new vg;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=S[$];return ee===void 0&&(ee=new nc,S[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=S[$];return ee===void 0&&(ee=new nc,S[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=S[$];return ee===void 0&&(ee=new nc,S[$]=ee),ee.getHandSpace()};function B($){const ee=R.indexOf($.inputSource);if(ee===-1)return;const ue=S[ee];ue!==void 0&&(ue.update($.inputSource,$.frame,l||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",J);for(let $=0;$<S.length;$++){const ee=R[$];ee!==null&&(R[$]=null,S[$].disconnect(ee))}F=null,k=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(y),f=null,d=null,u=null,i=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",z),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,be=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?nr:Xr,be=_.stencil?tr:ki);const Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Sn(d.textureWidth,d.textureHeight,{format:sn,type:Wn,depthTexture:new Zr(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Sn(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J($){for(let ee=0;ee<$.removed.length;ee++){const ue=$.removed[ee],be=R.indexOf(ue);be>=0&&(R[be]=null,S[be].disconnect(ue))}for(let ee=0;ee<$.added.length;ee++){const ue=$.added[ee];let be=R.indexOf(ue);if(be===-1){for(let Xe=0;Xe<S.length;Xe++)if(Xe>=R.length){R.push(ue),be=Xe;break}else if(R[Xe]===null){R[Xe]=ue,be=Xe;break}if(be===-1)break}const ve=S[be];ve&&ve.connect(ue)}}const X=new D,ne=new D;function le($,ee,ue){X.setFromMatrixPosition(ee.matrixWorld),ne.setFromMatrixPosition(ue.matrixWorld);const be=X.distanceTo(ne),ve=ee.projectionMatrix.elements,Xe=ue.projectionMatrix.elements,rt=ve[14]/(ve[10]-1),U=ve[14]/(ve[10]+1),Qe=(ve[9]+1)/ve[5],Ae=(ve[9]-1)/ve[5],Re=(ve[8]-1)/ve[0],ye=(Xe[8]+1)/Xe[0],tt=rt*Re,he=rt*ye,Ue=be/(-Re+ye),st=Ue*-Re;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(Ue),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ot=rt+Ue,N=U+Ue,T=tt-st,W=he+(be-st),Q=Qe*U/N*ot,te=Ae*U/N*ot;$.projectionMatrix.makePerspective(T,W,Q,te,ot,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ge($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,ue=$.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),I.near=M.near=b.near=ee,I.far=M.far=b.far=ue,(F!==I.near||k!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,k=I.far),I.layers.mask=$.layers.mask|6,b.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const be=$.parent,ve=I.cameras;ge(I,be);for(let Xe=0;Xe<ve.length;Xe++)ge(ve[Xe],be);ve.length===2?le(I,b,M):I.projectionMatrix.copy(b.projectionMatrix),Ne($,I,be)};function Ne($,ee,ue){ue===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ir*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return p[$]};let Ye=null;function $e($,ee){if(h=ee.getViewerPose(l||o),g=ee,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let be=!1;ue.length!==I.cameras.length&&(I.cameras.length=0,be=!0);for(let U=0;U<ue.length;U++){const Qe=ue[U];let Ae=null;if(f!==null)Ae=f.getViewport(Qe);else{const ye=u.getViewSubImage(d,Qe);Ae=ye.viewport,U===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let Re=L[U];Re===void 0&&(Re=new nn,Re.layers.enable(U),Re.viewport=new nt,L[U]=Re),Re.matrix.fromArray(Qe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Qe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),U===0&&(I.matrix.copy(Re.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),be===!0&&I.cameras.push(Re)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const U=u.getDepthInformation(ue[0]);U&&U.isValid&&U.texture&&m.init(U,i.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let U=0;U<ue.length;U++){const Qe=ue[U].camera;if(Qe){let Ae=p[Qe];Ae||(Ae=new Lf,p[Qe]=Ae);const Re=u.getCameraImage(Qe);Ae.sourceTexture=Re}}}}for(let ue=0;ue<S.length;ue++){const be=R[ue],ve=S[ue];be!==null&&ve!==void 0&&ve.update(be,ee,l||o)}Ye&&Ye($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const He=new Of;He.setAnimationLoop($e),this.setAnimationLoop=function($){Ye=$},this.dispose=function(){}}}const Ki=new jn,uy=new Ce;function dy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(Ki)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fy(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const v=y.program;n.uniformBlockBinding(_,v)}function l(_,y){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(_,S);const R=e.render.frame;s[_.id]!==R&&(d(_),s[_.id]=R)}function h(_){const y=u();_.__bindingPointIndex=y;const v=r.createBuffer(),S=_.__size,R=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,S,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],v=_.uniforms,S=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let R=0,A=v.length;R<A;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,M=P.length;b<M;b++){const L=P[b];if(f(L,R,b,S)===!0){const I=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let B=0;B<F.length;B++){const z=F[B],J=x(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,I+k,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,y,v,S){const R=_.value,A=y+"_"+v;if(S[A]===void 0)return typeof R=="number"||typeof R=="boolean"?S[A]=R:S[A]=R.clone(),!0;{const P=S[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return S[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(_){const y=_.uniforms;let v=0;const S=16;for(let A=0,P=y.length;A<P;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=b.length;M<L;M++){const I=b[M],F=Array.isArray(I.value)?I.value:[I.value];for(let k=0,B=F.length;k<B;k++){const z=F[k],J=x(z),X=v%S,ne=X%J.boundary,le=X+ne;v+=ne,le!==0&&S-le<J.storage&&(v+=S-le),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=J.storage}}}const R=v%S;return R>0&&(v+=S-R),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class py{constructor(e={}){const{canvas:t=am(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=wt;let R=0,A=0,P=null,b=-1,M=null;const L=new nt,I=new nt;let F=null;const k=new Le(0);let B=0,z=t.width,J=t.height,X=1,ne=null,le=null;const ge=new nt(0,0,z,J),Ne=new nt(0,0,z,J);let Ye=!1;const $e=new lr;let He=!1,$=!1;const ee=new Ce,ue=new D,be=new nt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function rt(){return P===null?X:1}let U=n;function Qe(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Z,!1),U===null){const H="webgl2";if(U=Qe(H,C),U===null)throw Qe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Re,ye,tt,he,Ue,st,ot,N,T,W,Q,te,K,Se,re,xe,we,se,de,De,Te,ce,E;function w(){Ae=new wv(U),Ae.init(),Te=new oy(U,Ae),Re=new xv(U,Ae,e,Te),ye=new sy(U,Ae),Re.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),tt=new Av(U),he=new X_,Ue=new ry(U,Ae,ye,he,Re,Te,tt),st=new _v(v),ot=new bv(v),N=new Ig(U),ce=new mv(U,N),T=new Tv(U,N,tt,ce),W=new Cv(U,T,N,tt),se=new Rv(U,Re,Ue),re=new vv(he),Q=new W_(v,st,ot,Ae,Re,ce,re),te=new dy(v,he),K=new q_,Se=new $_(Ae),we=new pv(v,st,ot,ye,W,f,c),xe=new ny(v,W,Re),E=new fy(U,tt,Re,ye),de=new gv(U,Ae,tt),De=new Ev(U,Ae,tt),tt.programs=Q.programs,v.capabilities=Re,v.extensions=Ae,v.properties=he,v.renderLists=K,v.shadowMap=xe,v.state=ye,v.info=tt}w();const O=new hy(v,U);this.xr=O,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(z,J,!1))},this.getSize=function(C){return C.set(z,J)},this.setSize=function(C,H,q=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,J=H,t.width=Math.floor(C*X),t.height=Math.floor(H*X),q===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(z*X,J*X).floor()},this.setDrawingBufferSize=function(C,H,q){z=C,J=H,X=q,t.width=Math.floor(C*q),t.height=Math.floor(H*q),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,H,q,Y){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,H,q,Y),ye.viewport(L.copy(ge).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(Ne)},this.setScissor=function(C,H,q,Y){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,H,q,Y),ye.scissor(I.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(C){ye.setScissorTest(Ye=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,q=!0){let Y=0;if(C){let V=!1;if(P!==null){const oe=P.texture.format;V=oe===rh||oe===sh||oe===Ta}if(V){const oe=P.texture.type,me=oe===Wn||oe===ki||oe===Wr||oe===tr||oe===th||oe===nh,Ee=we.getClearColor(),Me=we.getClearAlpha(),Fe=Ee.r,ze=Ee.g,Ie=Ee.b;me?(g[0]=Fe,g[1]=ze,g[2]=Ie,g[3]=Me,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Fe,x[1]=ze,x[2]=Ie,x[3]=Me,U.clearBufferiv(U.COLOR,0,x))}else Y|=U.COLOR_BUFFER_BIT}H&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),we.dispose(),K.dispose(),Se.dispose(),he.dispose(),st.dispose(),ot.dispose(),W.dispose(),ce.dispose(),E.dispose(),Q.dispose(),O.dispose(),O.removeEventListener("sessionstart",Kn),O.removeEventListener("sessionend",Ph),zi.stop()};function G(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=tt.autoReset,H=xe.enabled,q=xe.autoUpdate,Y=xe.needsUpdate,V=xe.type;w(),tt.autoReset=C,xe.enabled=H,xe.autoUpdate=q,xe.needsUpdate=Y,xe.type=V}function Z(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function j(C){const H=C.target;H.removeEventListener("dispose",j),ae(H)}function ae(C){fe(C),he.remove(C)}function fe(C){const H=he.get(C).programs;H!==void 0&&(H.forEach(function(q){Q.releaseProgram(q)}),C.isShaderMaterial&&Q.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,q,Y,V,oe){H===null&&(H=ve);const me=V.isMesh&&V.matrixWorld.determinant()<0,Ee=ap(C,H,q,Y,V);ye.setMaterial(Y,me);let Me=q.index,Fe=1;if(Y.wireframe===!0){if(Me=T.getWireframeAttribute(q),Me===void 0)return;Fe=2}const ze=q.drawRange,Ie=q.attributes.position;let Je=ze.start*Fe,dt=(ze.start+ze.count)*Fe;oe!==null&&(Je=Math.max(Je,oe.start*Fe),dt=Math.min(dt,(oe.start+oe.count)*Fe)),Me!==null?(Je=Math.max(Je,0),dt=Math.min(dt,Me.count)):Ie!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,Ie.count));const Mt=dt-Je;if(Mt<0||Mt===1/0)return;ce.setup(V,Y,Ee,q,Me);let vt,mt=de;if(Me!==null&&(vt=N.get(Me),mt=De,mt.setIndex(vt)),V.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*rt()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(V.isLine){let Oe=Y.linewidth;Oe===void 0&&(Oe=1),ye.setLineWidth(Oe*rt()),V.isLineSegments?mt.setMode(U.LINES):V.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else V.isPoints?mt.setMode(U.POINTS):V.isSprite&&mt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Oe=V._multiDrawStarts,yt=V._multiDrawCounts,it=V._multiDrawCount,fn=Me?N.get(Me).bytesPerElement:1,as=he.get(Y).currentProgram.getUniforms();for(let pn=0;pn<it;pn++)as.setValue(U,"_gl_DrawID",pn),mt.render(Oe[pn]/fn,yt[pn])}else if(V.isInstancedMesh)mt.renderInstances(Je,Mt,V.count);else if(q.isInstancedBufferGeometry){const Oe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,Oe);mt.renderInstances(Je,Mt,yt)}else mt.render(Je,Mt)};function Pe(C,H,q){C.transparent===!0&&C.side===Rn&&C.forceSinglePass===!1?(C.side=Kt,C.needsUpdate=!0,io(C,H,q),C.side=Gn,C.needsUpdate=!0,io(C,H,q),C.side=Rn):io(C,H,q)}this.compile=function(C,H,q=null){q===null&&(q=C),p=Se.get(q),p.init(H),y.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),C!==q&&C.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const oe=V.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Ee=oe[me];Pe(Ee,q,V),Y.add(Ee)}else Pe(oe,q,V),Y.add(oe)}),p=y.pop(),Y},this.compileAsync=function(C,H,q=null){const Y=this.compile(C,H,q);return new Promise(V=>{function oe(){if(Y.forEach(function(me){he.get(me).currentProgram.isReady()&&Y.delete(me)}),Y.size===0){V(C);return}setTimeout(oe,10)}Ae.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ke=null;function Jt(C){ke&&ke(C)}function Kn(){zi.stop()}function Ph(){zi.start()}const zi=new Of;zi.setAnimationLoop(Jt),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(C){ke=C,O.setAnimationLoop(C),C===null?zi.stop():zi.start()},O.addEventListener("sessionstart",Kn),O.addEventListener("sessionend",Ph),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(H),H=O.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,H,P),p=Se.get(C,y.length),p.init(H),y.push(p),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$e.setFromProjectionMatrix(ee,Hn,H.reversedDepth),$=this.localClippingEnabled,He=re.init(this.clippingPlanes,$),m=K.get(C,_.length),m.init(),_.push(m),O.enabled===!0&&O.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&Ia(oe,H,-1/0,v.sortObjects)}Ia(C,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,le),Xe=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Xe&&we.addToRenderList(m,C),this.info.render.frame++,He===!0&&re.beginShadows();const q=p.state.shadowsArray;xe.render(q,C,H),He===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const oe=H.cameras;if(V.length>0)for(let me=0,Ee=oe.length;me<Ee;me++){const Me=oe[me];Dh(Y,V,C,Me)}Xe&&we.render(C);for(let me=0,Ee=oe.length;me<Ee;me++){const Me=oe[me];Lh(m,C,Me,Me.viewport)}}else V.length>0&&Dh(Y,V,C,H),Xe&&we.render(C),Lh(m,C,H);P!==null&&A===0&&(Ue.updateMultisampleRenderTarget(P),Ue.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(v,C,H),ce.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],He===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ia(C,H,q,Y){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$e.intersectsSprite(C)){Y&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const me=W.update(C),Ee=C.material;Ee.visible&&m.push(C,me,Ee,q,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$e.intersectsObject(C))){const me=W.update(C),Ee=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),be.copy(me.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(Ee)){const Me=me.groups;for(let Fe=0,ze=Me.length;Fe<ze;Fe++){const Ie=Me[Fe],Je=Ee[Ie.materialIndex];Je&&Je.visible&&m.push(C,me,Je,q,be.z,Ie)}}else Ee.visible&&m.push(C,me,Ee,q,be.z,null)}}const oe=C.children;for(let me=0,Ee=oe.length;me<Ee;me++)Ia(oe[me],H,q,Y)}function Lh(C,H,q,Y){const V=C.opaque,oe=C.transmissive,me=C.transparent;p.setupLightsView(q),He===!0&&re.setGlobalState(v.clippingPlanes,q),Y&&ye.viewport(L.copy(Y)),V.length>0&&no(V,H,q),oe.length>0&&no(oe,H,q),me.length>0&&no(me,H,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Dh(C,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Sn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Xn:Wn,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const oe=p.state.transmissionRenderTarget[Y.id],me=Y.viewport||L;oe.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);const Ee=v.getRenderTarget(),Me=v.getActiveCubeFace(),Fe=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(k),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&we.render(q);const ze=v.toneMapping;v.toneMapping=Bi;const Ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),He===!0&&re.setGlobalState(v.clippingPlanes,Y),no(C,q,Y),Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let dt=0,Mt=H.length;dt<Mt;dt++){const vt=H[dt],mt=vt.object,Oe=vt.geometry,yt=vt.material,it=vt.group;if(yt.side===Rn&&mt.layers.test(Y.layers)){const fn=yt.side;yt.side=Kt,yt.needsUpdate=!0,Ih(mt,q,Y,Oe,yt,it),yt.side=fn,yt.needsUpdate=!0,Je=!0}}Je===!0&&(Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe))}v.setRenderTarget(Ee,Me,Fe),v.setClearColor(k,B),Ie!==void 0&&(Y.viewport=Ie),v.toneMapping=ze}function no(C,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,oe=C.length;V<oe;V++){const me=C[V],Ee=me.object,Me=me.geometry,Fe=me.group;let ze=me.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),Ee.layers.test(q.layers)&&Ih(Ee,H,q,Me,ze,Fe)}}function Ih(C,H,q,Y,V,oe){C.onBeforeRender(v,H,q,Y,V,oe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(v,H,q,Y,C,oe),V.transparent===!0&&V.side===Rn&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,v.renderBufferDirect(q,H,Y,V,C,oe),V.side=Gn,V.needsUpdate=!0,v.renderBufferDirect(q,H,Y,V,C,oe),V.side=Rn):v.renderBufferDirect(q,H,Y,V,C,oe),C.onAfterRender(v,H,q,Y,V,oe)}function io(C,H,q){H.isScene!==!0&&(H=ve);const Y=he.get(C),V=p.state.lights,oe=p.state.shadowsArray,me=V.state.version,Ee=Q.getParameters(C,V.state,oe,H,q),Me=Q.getProgramCacheKey(Ee);let Fe=Y.programs;Y.environment=C.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(C.isMeshStandardMaterial?ot:st).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Fe===void 0&&(C.addEventListener("dispose",j),Fe=new Map,Y.programs=Fe);let ze=Fe.get(Me);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===me)return Uh(C,Ee),ze}else Ee.uniforms=Q.getUniforms(C),C.onBeforeCompile(Ee,v),ze=Q.acquireProgram(Ee,Me),Fe.set(Me,ze),Y.uniforms=Ee.uniforms;const Ie=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=re.uniform),Uh(C,Ee),Y.needsLights=lp(C),Y.lightsStateVersion=me,Y.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function Nh(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=fa.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Uh(C,H){const q=he.get(C);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function ap(C,H,q,Y,V){H.isScene!==!0&&(H=ve),Ue.resetTextureUnits();const oe=H.fog,me=Y.isMeshStandardMaterial?H.environment:null,Ee=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zt,Me=(Y.isMeshStandardMaterial?ot:st).get(Y.envMap||me),Fe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let Mt=Bi;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,mt=vt!==void 0?vt.length:0,Oe=he.get(Y),yt=p.state.lights;if(He===!0&&($===!0||C!==M)){const Qt=C===M&&Y.id===b;re.setState(Y,C,Qt)}let it=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==yt.state.version||Oe.outputColorSpace!==Ee||V.isBatchedMesh&&Oe.batching===!1||!V.isBatchedMesh&&Oe.batching===!0||V.isBatchedMesh&&Oe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Oe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null||Oe.envMap!==Me||Y.fog===!0&&Oe.fog!==oe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==re.numPlanes||Oe.numIntersection!==re.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==ze||Oe.morphTargets!==Ie||Oe.morphNormals!==Je||Oe.morphColors!==dt||Oe.toneMapping!==Mt||Oe.morphTargetsCount!==mt)&&(it=!0):(it=!0,Oe.__version=Y.version);let fn=Oe.currentProgram;it===!0&&(fn=io(Y,H,V));let as=!1,pn=!1,fr=!1;const St=fn.getUniforms(),Mn=Oe.uniforms;if(ye.useProgram(fn.program)&&(as=!0,pn=!0,fr=!0),Y.id!==b&&(b=Y.id,pn=!0),as||M!==C){ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),St.setValue(U,"projectionMatrix",C.projectionMatrix),St.setValue(U,"viewMatrix",C.matrixWorldInverse);const an=St.map.cameraPosition;an!==void 0&&an.setValue(U,ue.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,pn=!0,fr=!0)}if(V.isSkinnedMesh){St.setOptional(U,V,"bindMatrix"),St.setOptional(U,V,"bindMatrixInverse");const Qt=V.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),St.setValue(U,"boneTexture",Qt.boneTexture,Ue))}V.isBatchedMesh&&(St.setOptional(U,V,"batchingTexture"),St.setValue(U,"batchingTexture",V._matricesTexture,Ue),St.setOptional(U,V,"batchingIdTexture"),St.setValue(U,"batchingIdTexture",V._indirectTexture,Ue),St.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&St.setValue(U,"batchingColorTexture",V._colorsTexture,Ue));const bn=q.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&se.update(V,q,fn),(pn||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,St.setValue(U,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mn.envMap.value=Me,Mn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Mn.envMapIntensity.value=H.environmentIntensity),pn&&(St.setValue(U,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&cp(Mn,fr),oe&&Y.fog===!0&&te.refreshFogUniforms(Mn,oe),te.refreshMaterialUniforms(Mn,Y,X,J,p.state.transmissionRenderTarget[C.id]),fa.upload(U,Nh(Oe),Mn,Ue)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fa.upload(U,Nh(Oe),Mn,Ue),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(U,"center",V.center),St.setValue(U,"modelViewMatrix",V.modelViewMatrix),St.setValue(U,"normalMatrix",V.normalMatrix),St.setValue(U,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Qt=Y.uniformsGroups;for(let an=0,Na=Qt.length;an<Na;an++){const Hi=Qt[an];E.update(Hi,fn),E.bind(Hi,fn)}}return fn}function cp(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function lp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,H,q){const Y=he.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),he.get(C.texture).__webglTexture=H,he.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const q=he.get(C);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const hp=U.createFramebuffer();this.setRenderTarget=function(C,H=0,q=0){P=C,R=H,A=q;let Y=!0,V=null,oe=!1,me=!1;if(C){const Me=he.get(C);if(Me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Me.__webglFramebuffer===void 0)Ue.setupRenderTarget(C);else if(Me.__hasExternalTextures)Ue.rebindTextures(C,he.get(C.texture).__webglTexture,he.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ie=C.depthTexture;if(Me.__boundDepthTexture!==Ie){if(Ie!==null&&he.has(Ie)&&(C.width!==Ie.image.width||C.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const ze=he.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?V=ze[H][q]:V=ze[H],oe=!0):C.samples>0&&Ue.useMultisampledRTT(C)===!1?V=he.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[q]:V=ze,L.copy(C.viewport),I.copy(C.scissor),F=C.scissorTest}else L.copy(ge).multiplyScalar(X).floor(),I.copy(Ne).multiplyScalar(X).floor(),F=Ye;if(q!==0&&(V=hp),ye.bindFramebuffer(U.FRAMEBUFFER,V)&&Y&&ye.drawBuffers(C,V),ye.viewport(L),ye.scissor(I),ye.setScissorTest(F),oe){const Me=he.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Me.__webglTexture,q)}else if(me){const Me=H;for(let Fe=0;Fe<C.textures.length;Fe++){const ze=he.get(C.textures[Fe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,q,Me)}}else if(C!==null&&q!==0){const Me=he.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,q)}b=-1},this.readRenderTargetPixels=function(C,H,q,Y,V,oe,me,Ee=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){ye.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Fe=C.textures[Ee],ze=Fe.format,Ie=Fe.type;if(!Re.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Y&&q>=0&&q<=C.height-V&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(H,q,Y,V,Te.convert(ze),Te.convert(Ie),oe))}finally{const Fe=P!==null?he.get(P).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(C,H,q,Y,V,oe,me,Ee=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(H>=0&&H<=C.width-Y&&q>=0&&q<=C.height-V){ye.bindFramebuffer(U.FRAMEBUFFER,Me);const Fe=C.textures[Ee],ze=Fe.format,Ie=Fe.type;if(!Re.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,oe.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(H,q,Y,V,Te.convert(ze),Te.convert(Ie),0);const dt=P!==null?he.get(P).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,dt);const Mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await cm(U,Mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,oe),U.deleteBuffer(Je),U.deleteSync(Mt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,q=0){const Y=Math.pow(2,-q),V=Math.floor(C.image.width*Y),oe=Math.floor(C.image.height*Y),me=H!==null?H.x:0,Ee=H!==null?H.y:0;Ue.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,me,Ee,V,oe),ye.unbindTexture()};const up=U.createFramebuffer(),dp=U.createFramebuffer();this.copyTextureToTexture=function(C,H,q=null,Y=null,V=0,oe=null){oe===null&&(V!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=V,V=0):oe=0);let me,Ee,Me,Fe,ze,Ie,Je,dt,Mt;const vt=C.isCompressedTexture?C.mipmaps[oe]:C.image;if(q!==null)me=q.max.x-q.min.x,Ee=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,ze=q.min.y,Ie=q.isBox3?q.min.z:0;else{const bn=Math.pow(2,-V);me=Math.floor(vt.width*bn),Ee=Math.floor(vt.height*bn),C.isDataArrayTexture?Me=vt.depth:C.isData3DTexture?Me=Math.floor(vt.depth*bn):Me=1,Fe=0,ze=0,Ie=0}Y!==null?(Je=Y.x,dt=Y.y,Mt=Y.z):(Je=0,dt=0,Mt=0);const mt=Te.convert(H.format),Oe=Te.convert(H.type);let yt;H.isData3DTexture?(Ue.setTexture3D(H,0),yt=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ue.setTexture2DArray(H,0),yt=U.TEXTURE_2D_ARRAY):(Ue.setTexture2D(H,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const it=U.getParameter(U.UNPACK_ROW_LENGTH),fn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),as=U.getParameter(U.UNPACK_SKIP_PIXELS),pn=U.getParameter(U.UNPACK_SKIP_ROWS),fr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);const St=C.isDataArrayTexture||C.isData3DTexture,Mn=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const bn=he.get(C),Qt=he.get(H),an=he.get(bn.__renderTarget),Na=he.get(Qt.__renderTarget);ye.bindFramebuffer(U.READ_FRAMEBUFFER,an.__webglFramebuffer),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Hi=0;Hi<Me;Hi++)St&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,he.get(C).__webglTexture,V,Ie+Hi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,he.get(H).__webglTexture,oe,Mt+Hi)),U.blitFramebuffer(Fe,ze,me,Ee,Je,dt,me,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||he.has(C)){const bn=he.get(C),Qt=he.get(H);ye.bindFramebuffer(U.READ_FRAMEBUFFER,up),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,dp);for(let an=0;an<Me;an++)St?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bn.__webglTexture,V,Ie+an):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bn.__webglTexture,V),Mn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.__webglTexture,oe,Mt+an):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qt.__webglTexture,oe),V!==0?U.blitFramebuffer(Fe,ze,me,Ee,Je,dt,me,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):Mn?U.copyTexSubImage3D(yt,oe,Je,dt,Mt+an,Fe,ze,me,Ee):U.copyTexSubImage2D(yt,oe,Je,dt,Fe,ze,me,Ee);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(yt,oe,Je,dt,Mt,me,Ee,Me,mt,Oe,vt.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,oe,Je,dt,Mt,me,Ee,Me,mt,vt.data):U.texSubImage3D(yt,oe,Je,dt,Mt,me,Ee,Me,mt,Oe,vt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,oe,Je,dt,me,Ee,mt,Oe,vt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,oe,Je,dt,vt.width,vt.height,mt,vt.data):U.texSubImage2D(U.TEXTURE_2D,oe,Je,dt,me,Ee,mt,Oe,vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,as),U.pixelStorei(U.UNPACK_SKIP_ROWS,pn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,fr),oe===0&&H.generateMipmaps&&U.generateMipmap(yt),ye.unbindTexture()},this.initRenderTarget=function(C){he.get(C).__webglFramebuffer===void 0&&Ue.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ue.setTextureCube(C,0):C.isData3DTexture?Ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ue.setTexture2DArray(C,0):Ue.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,ye.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}async function my(){const r=await fetch("data/catalog.json",{cache:"no-cache"});if(!r.ok)throw new Error(`catalog.json: HTTP ${r.status}`);return r.json()}const rd=new Map;function Hf(r){let e=rd.get(r);return e||(e=fetch(`data/descriptions/${encodeURIComponent(r)}.json`).then(t=>t.ok?t.json():null).catch(()=>null),rd.set(r,e)),e}function gy(r,e){const t=[];for(let n=r.nodes[e];n;n=n.parent?r.nodes[n.parent]:void 0)t.unshift(n.name);return t}function rn(r,e){const t=[],n=[e];for(;n.length;){const i=r.nodes[n.pop()];i&&(i.mesh&&t.push(i.id),n.push(...i.children))}return t}function xy(r){const e=new Map;for(const t of Object.values(r.nodes)){if(!t.mesh||t.side==="m")continue;const n=t.id.replace(/\.([a-z]*\d*)([lr])(\.\d+)?$/,(s,o,a,c="")=>`.${o}${a==="l"?"r":"l"}${c}`),i=r.nodes[n];n!==t.id&&i?.mesh&&i.side!==t.side&&i.side!=="m"&&e.set(t.id,n)}return e}const vy="anatomy-atlas",yc="bookmarks",Uo="kv",_y=2;class yy{db;constructor(){this.db=new Promise((e,t)=>{const n=indexedDB.open(vy,_y);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(yc)||i.createObjectStore(yc,{keyPath:"id"}),i.objectStoreNames.contains(Uo)||i.createObjectStore(Uo)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async all(){return(await this.run("readonly",t=>t.getAll())).sort((t,n)=>n.created-t.created)}put(e){return this.run("readwrite",t=>t.put(e))}remove(e){return this.run("readwrite",t=>t.delete(e))}async getValue(e){return this.run("readonly",t=>t.get(e),Uo)}setValue(e,t){return this.run("readwrite",n=>n.put(t,e),Uo)}async exportJson(){return JSON.stringify({format:"anatomy-atlas-bookmarks",version:1,bookmarks:await this.all()},null,1)}async importJson(e){const t=JSON.parse(e);if(t?.format!=="anatomy-atlas-bookmarks"||!Array.isArray(t.bookmarks))throw new Error("This file is not an Anatomix 3D bookmarks export.");const n=new Set((await this.all()).map(s=>s.id));let i=0;for(const s of t.bookmarks)!s?.id||!s.pose||!s.display||(await this.put(n.has(s.id)?{...s,id:crypto.randomUUID()}:s),i++);return i}async run(e,t,n=yc){const i=await this.db;return new Promise((s,o)=>{const a=t(i.transaction(n,e).objectStore(n));a.onsuccess=()=>s(a.result),a.onerror=()=>o(a.error)})}}const Vf=0,Sy=1,My=2,od=2,Sc=1.25,ad=1,yn=32,Rt=yn/4,Gf=65535,pa=Math.pow(2,-24),Mh=Symbol("SKIP_GENERATION"),Wf={strategy:Vf,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Mh]:!1};function bt(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function Fl(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function cd(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],o=i-s,a=i+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Mc(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}function Tt(r,e){return e[r+15]===Gf}function kt(r,e){return e[r+6]}function Yt(r,e){return e[r+14]}function It(r){return r+Rt}function Nt(r,e){const t=e[r+6];return r+t*Rt}function bh(r,e){return e[r+7]}function bc(r,e,t,n,i){let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,g=-1/0,x=-1/0,m=-1/0;const p=r.offset||0;for(let _=(e-p)*6,y=(e+t-p)*6;_<y;_+=6){const v=r[_+0],S=r[_+1],R=v-S,A=v+S;R<s&&(s=R),A>c&&(c=A),v<u&&(u=v),v>g&&(g=v);const P=r[_+2],b=r[_+3],M=P-b,L=P+b;M<o&&(o=M),L>l&&(l=L),P<d&&(d=P),P>x&&(x=P);const I=r[_+4],F=r[_+5],k=I-F,B=I+F;k<a&&(a=k),B>h&&(h=B),I<f&&(f=I),I>m&&(m=I)}n[0]=s,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=h,i[0]=u,i[1]=d,i[2]=f,i[3]=g,i[4]=x,i[5]=m}const ni=8,wh=8,wc=new Int32Array(ni),Qn=new Float32Array(ni*6),Es=new Float32Array(ni*6),On=new Float32Array(6),Oo=new Float32Array(6),Ri=new Int32Array(wh),ld=new Float32Array(wh*6);function by(r,e,t,n){for(let i=0;i<3;i++){const s=e[r+2*i],o=e[r+2*i+1],a=s-o,c=s+o;a<t[n+i]&&(t[n+i]=a),c>t[n+i+3]&&(t[n+i+3]=c)}}function hd(r,e){const t=r[e+3]-r[e],n=r[e+4]-r[e+1],i=r[e+5]-r[e+2];return 2*(t*n+n*i+i*t)}function wy(r,e,t,n,i,s){let o=-1,a=0;if(s===Vf)o=Fl(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===Sy)o=Fl(r),o!==-1&&(a=Ty(t,n,i,o));else if(s===My){const c=Mc(r);let l=Sc*i;const h=t.offset||0,u=(n-h)*6,d=(n+i-h)*6;for(let f=0;f<3;f++){const g=e[f],p=(e[f+3]-g)/ni;if(i<wh){for(let _=0;_<i;_++){const y=u+_*6,v=t[y+2*f];let S=_;for(;S>0&&t[Ri[S-1]+2*f]>v;)Ri[S]=Ri[S-1],S--;Ri[S]=y}for(let _=0;_<3;_++)On[_]=1/0,On[_+3]=-1/0,Oo[_]=1/0,Oo[_+3]=-1/0;for(let _=i-1;_>=0;_--)cd(Ri[_],t,Oo),ld.set(Oo,_*6);for(let _=0;_<i-1;_++){cd(Ri[_],t,On);const y=t[Ri[_+1]+2*f];if(t[Ri[_]+2*f]===y)continue;const v=_+1,S=i-v,R=Mc(On)/c,A=hd(ld,v*6)/c,P=ad+Sc*(R*v+A*S);P<l&&(o=f,l=P,a=y)}}else{for(let v=0;v<ni;v++){wc[v]=0;for(let S=0;S<3;S++)Qn[v*6+S]=1/0,Qn[v*6+S+3]=-1/0}for(let v=u;v<d;v+=6){let A=~~((t[v+2*f]-g)/p);A>=ni&&(A=ni-1),wc[A]++,by(v,t,Qn,A*6)}const _=(ni-1)*6;for(let v=0;v<6;v++)Es[_+v]=Qn[_+v];for(let v=ni-2;v>=0;v--){const S=v*6,R=S+6;for(let A=0;A<3;A++)Es[S+A]=Math.min(Qn[S+A],Es[R+A]),Es[S+A+3]=Math.max(Qn[S+A+3],Es[R+A+3])}let y=0;for(let v=0;v<ni-1;v++){const S=v*6,R=wc[v];if(R!==0)for(let L=0;L<3;L++)y===0?(On[L]=Qn[S+L],On[L+3]=Qn[S+L+3]):(On[L]=Math.min(On[L],Qn[S+L]),On[L+3]=Math.max(On[L+3],Qn[S+L+3]));y+=R;let A=0,P=0;y!==0&&(A=Mc(On)/c);const b=i-y;b!==0&&(P=hd(Es,S+6)/c);const M=ad+Sc*(A*y+P*b);M<l&&(o=f,l=M,a=g+p+v*p)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Ty(r,e,t,n){let i=0;const s=r.offset;for(let o=e,a=e+t;o<a;o++)i+=r[(o-s)*6+n*2];return i/t}function Ey(r,e,t,n,i,s){let o=n,a=n+i-1;const c=s.pos,l=s.axis*2,h=t.offset||0;for(;;){for(;o<=a&&t[(o-h)*6+l]<c;)o++;for(;o<=a&&t[(a-h)*6+l]>=c;)a--;if(o<a){for(let u=0;u<e;u++){let d=r[o*e+u];r[o*e+u]=r[a*e+u],r[a*e+u]=d}for(let u=0;u<6;u++){const d=o-h,f=a-h,g=t[d*6+u];t[d*6+u]=t[f*6+u],t[f*6+u]=g}o++,a--}else return o}}const Ay=Math.pow(2,32),As=new Float32Array(6),Fo=new Float32Array(6);function Ry(r,e,t,n,i,s){const{maxDepth:o,verbose:a,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:h,onProgress:u,useSharedArrayBuffer:d=!1}=i,f=r.primitiveBuffer,g=r.primitiveBufferStride,x=d?SharedArrayBuffer:ArrayBuffer,m=new x(yn*Math.max(1,2*Math.ceil(n)-1)),p=new Float32Array(m),_=new Uint32Array(m),y=new Uint16Array(m);let v=0,S=!1;return bc(e,t,n,As,Fo),P(t,n,0),m.slice(0,v*yn);function R(b){u&&u((b-s.offset)/s.count)}function A(b,M,L){const I=b*2;_[b+6]=M,y[I+14]=L,y[I+15]=Gf,R(M+L)}function P(b,M,L){const I=v++,F=I*Rt;p.set(As,F),!S&&L>=o&&(S=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const k=M>l;if(M<=c&&!k||L>=o){A(F,b,M);return}const B=wy(As,Fo,e,b,M,h);let z=B.axis===-1?-1:Ey(f,g,e,b,M,B);if(B.axis===-1||z===b||z===b+M){if(!k){A(F,b,M);return}B.axis=Math.max(0,Fl(As)),z=b+Math.max(1,Math.floor(M/2))}_[F+7]=B.axis;const J=z-b;bc(e,b,J,As,Fo),P(b,J,L+1);const X=v-I;if(X>Ay)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");_[F+6]=X;const ne=M-J;bc(e,z,ne,As,Fo),P(z,ne,L+1)}}function Cy(r,e){const t=r.getRootRanges(e.range),n=t[0],i=t[t.length-1],s={offset:n.offset,count:i.offset+i.count-n.offset},o=new Float32Array(6*s.count);o.offset=s.offset,r.computePrimitiveBounds(s.offset,s.count,o),r._roots=t.map(a=>Ry(r,o,a.offset,a.count,e,s))}class Th{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class Py{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ut=new Py;let Fi,qs;const Rs=[],Bo=new Th(()=>new et);function Ly(r,e,t,n,i,s){Fi=Bo.getPrimitive(),qs=Bo.getPrimitive(),Rs.push(Fi,qs),ut.setBuffer(r._roots[e]);const o=Bl(0,r.geometry,t,n,i,s);ut.clearBuffer(),Bo.releasePrimitive(Fi),Bo.releasePrimitive(qs),Rs.pop(),Rs.pop();const a=Rs.length;return a>0&&(qs=Rs[a-1],Fi=Rs[a-2]),o}function Bl(r,e,t,n,i=null,s=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=ut;let h=r*2;if(Tt(h,c)){const g=kt(r,l),x=Yt(h,c);return bt(r,a,Fi),n(g,x,!1,o,s+r/Rt,Fi)}else{let I=function(k){const{uint16Array:B,uint32Array:z}=ut;let J=k*2;for(;!Tt(J,B);)k=It(k),J=k*2;return kt(k,z)},F=function(k){const{uint16Array:B,uint32Array:z}=ut;let J=k*2;for(;!Tt(J,B);)k=Nt(k,z),J=k*2;return kt(k,z)+Yt(J,B)};var d=I,f=F;const g=It(r),x=Nt(r,l);let m=g,p=x,_,y,v,S;if(i&&(v=Fi,S=qs,bt(m,a,v),bt(p,a,S),_=i(v),y=i(S),y<_)){m=x,p=g;const k=_;_=y,y=k,v=S}v||(v=Fi,bt(m,a,v));const R=Tt(m*2,c),A=t(v,R,_,o+1,s+m/Rt);let P;if(A===od){const k=I(m),z=F(m)-k;P=n(k,z,!0,o+1,s+m/Rt,v)}else P=A&&Bl(m,e,t,n,i,s,o+1);if(P)return!0;S=qs,bt(p,a,S);const b=Tt(p*2,c),M=t(S,b,y,o+1,s+p/Rt);let L;if(M===od){const k=I(p),z=F(p)-k;L=n(k,z,!0,o+1,s+p/Rt,S)}else L=M&&Bl(p,e,t,n,i,s,o+1);return!!L}}const Gr=new ut.constructor,Ma=new ut.constructor,Di=new Th(()=>new et),Cs=new et,Ps=new et,Tc=new et,Ec=new et;let Ac=!1;function Dy(r,e,t,n){if(Ac)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ac=!0;const i=r._roots,s=e._roots;let o,a=0,c=0;const l=new Ce().copy(t).invert();for(let h=0,u=i.length;h<u;h++){Gr.setBuffer(i[h]),c=0;const d=Di.getPrimitive();bt(0,Gr.float32Array,d),d.applyMatrix4(l);for(let f=0,g=s.length;f<g&&(Ma.setBuffer(s[f]),o=Fn(0,0,t,l,n,a,c,0,0,d),Ma.clearBuffer(),c+=s[f].byteLength/yn,!o);f++);if(Di.releasePrimitive(d),Gr.clearBuffer(),a+=i[h].byteLength/yn,o)break}return Ac=!1,o}function Fn(r,e,t,n,i,s=0,o=0,a=0,c=0,l=null,h=!1){let u,d;h?(u=Ma,d=Gr):(u=Gr,d=Ma);const f=u.float32Array,g=u.uint32Array,x=u.uint16Array,m=d.float32Array,p=d.uint32Array,_=d.uint16Array,y=r*2,v=e*2,S=Tt(y,x),R=Tt(v,_);let A=!1;if(R&&S)h?A=i(kt(e,p),Yt(e*2,_),kt(r,g),Yt(r*2,x),c,o+e/Rt,a,s+r/Rt):A=i(kt(r,g),Yt(r*2,x),kt(e,p),Yt(e*2,_),a,s+r/Rt,c,o+e/Rt);else if(R){const P=Di.getPrimitive();bt(e,m,P),P.applyMatrix4(t);const b=It(r),M=Nt(r,g);bt(b,f,Cs),bt(M,f,Ps);const L=P.intersectsBox(Cs),I=P.intersectsBox(Ps);A=L&&Fn(e,b,n,t,i,o,s,c,a+1,P,!h)||I&&Fn(e,M,n,t,i,o,s,c,a+1,P,!h),Di.releasePrimitive(P)}else{const P=It(e),b=Nt(e,p);bt(P,m,Tc),bt(b,m,Ec);const M=l.intersectsBox(Tc),L=l.intersectsBox(Ec);if(M&&L)A=Fn(r,P,t,n,i,s,o,a,c+1,l,h)||Fn(r,b,t,n,i,s,o,a,c+1,l,h);else if(M)if(S)A=Fn(r,P,t,n,i,s,o,a,c+1,l,h);else{const I=Di.getPrimitive();I.copy(Tc).applyMatrix4(t);const F=It(r),k=Nt(r,g);bt(F,f,Cs),bt(k,f,Ps);const B=I.intersectsBox(Cs),z=I.intersectsBox(Ps);A=B&&Fn(P,F,n,t,i,o,s,c,a+1,I,!h)||z&&Fn(P,k,n,t,i,o,s,c,a+1,I,!h),Di.releasePrimitive(I)}else if(L)if(S)A=Fn(r,b,t,n,i,s,o,a,c+1,l,h);else{const I=Di.getPrimitive();I.copy(Ec).applyMatrix4(t);const F=It(r),k=Nt(r,g);bt(F,f,Cs),bt(k,f,Ps);const B=I.intersectsBox(Cs),z=I.intersectsBox(Ps);A=B&&Fn(b,F,n,t,i,o,s,c,a+1,I,!h)||z&&Fn(b,k,n,t,i,o,s,c,a+1,I,!h),Di.releasePrimitive(I)}}return A}const Rc=new class{constructor(){let r=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=r=s._roots[o],this.uint16Array=t=new Uint16Array(r),this.uint32Array=e=new Uint32Array(r)},this.reset=()=>{this.root=null,this.buffer=r=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=s=>{let o=s*2;for(;!Tt(o,t);)s=It(s),o=s*2;return kt(s,e)},this.getRangeEnd=s=>{let o=s*2;for(;!Tt(o,t);)s=Nt(s,e),o=s*2;return kt(s,e)+Yt(o,t)};const i=(s,o,a)=>{const c=o*2,l=Tt(c,t);if(!s(a,l,o)&&!l){const u=It(o),d=Nt(o,e);i(s,u,a+1),i(s,d,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,c)=>{if(a){const l=c*2,h=e[c+6],u=t[l+14];return s(o,a,new Float32Array(r,c*4,6),h,u)}else{const l=bh(c,e);return s(o,a,new Float32Array(r,c*4,6),l)}})}}},ud=new et,Ls=new Float32Array(6);class Iy{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Wf,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),Cy(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,i){let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0;for(let u=e,d=e+t;u<d;u++){this.writePrimitiveBounds(u,Ls,0);const[f,g,x,m,p,_]=Ls;f<s&&(s=f),m>c&&(c=m),g<o&&(o=g),p>l&&(l=p),x<a&&(a=x),_>h&&(h=_)}return n[i+0]=s,n[i+1]=o,n[i+2]=a,n[i+3]=c,n[i+4]=l,n[i+5]=h,n}computePrimitiveBounds(e,t,n){const i=n.offset||0;for(let s=e,o=e+t;s<o;s++){this.writePrimitiveBounds(s,Ls,0);const[a,c,l,h,u,d]=Ls,f=(a+h)/2,g=(c+u)/2,x=(l+d)/2,m=(h-a)/2,p=(u-c)/2,_=(d-l)/2,y=(s-i)*6;n[y+0]=f,n[y+1]=m+(Math.abs(f)+m)*pa,n[y+2]=g,n[y+3]=p+(Math.abs(g)+p)*pa,n[y+4]=x,n[y+5]=_+(Math.abs(x)+_)*pa}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,i=t.length;n<i;n++)t[n]+=e;else{const n=this._roots;for(let i=0;i<n.length;i++){const s=n[i],o=new Uint32Array(s),a=new Uint16Array(s),c=s.byteLength/yn;for(let l=0;l<c;l++){const h=Rt*l,u=2*h;Tt(u,a)&&(o[h+6]+=e)}}}}traverse(e,t=0){Rc.setBVH(this,t),Rc.traverse(e),Rc.reset()}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const i=e[t],s=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/yn;for(let l=c-1;l>=0;l--){const h=l*Rt,u=h*2;if(Tt(u,o)){const f=kt(h,s),g=Yt(u,o);this.writePrimitiveRangeBounds(f,g,Ls,0),a.set(Ls,h)}else{const f=It(h),g=Nt(h,s);for(let x=0;x<3;x++){const m=a[f+x],p=a[f+x+3],_=a[g+x],y=a[g+x+3];a[h+x]=m<_?m:_,a[h+x+3]=p>y?p:y}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{bt(0,new Float32Array(n),ud),e.union(ud)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=e;if(i&&s){const u=i;i=(d,f,g,x,m)=>u(d,f,g,x,m)?!0:a(d,f,this,s,g,x,o)}else i||(s?i=(u,d,f,g)=>a(u,d,this,s,f,g,o):i=(u,d,f)=>f);let c=!1,l=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const f=h[u];if(c=Ly(this,u,n,i,t,l),c)break;l+=f.byteLength/yn}return c}bvhcast(e,t,n){let{intersectsRanges:i}=n;return Dy(this,e,t,i)}}function Ny(){return typeof SharedArrayBuffer<"u"}function Eh(r){return r.index?r.index.count:r.attributes.position.count}function Pa(r){return Eh(r)/3}function Uy(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function Oy(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Uy(t,n);r.setIndex(new Et(i,1));for(let s=0;s<t;s++)i[s]=s}}function Fy(r,e,t){const n=Eh(r)/t,i=e||r.drawRange,s=i.start/t,o=(i.start+i.count)/t,a=Math.max(0,s),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function By(r,e){return r.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function dd(r,e,t){const n=Fy(r,e,t),i=By(r,t);if(!i.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,c=Eh(r)/t,l=[];for(const d of i){const{offset:f,count:g}=d,x=f,m=isFinite(g)?g:c-f,p=f+m;x<a&&p>o&&(l.push({pos:Math.max(o,x),isStart:!0}),l.push({pos:Math.min(a,p),isStart:!1}))}l.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let h=0,u=null;for(const d of l){const f=d.pos;h!==0&&f!==u&&s.push({offset:u,count:f-u}),h+=d.isStart?1:-1,u=f}return s}function ky(r,e){const t=r[r.length-1],n=t.offset+t.count>2**16,i=r.reduce((l,h)=>l+h.count,0),s=n?4:2,o=e?new SharedArrayBuffer(i*s):new ArrayBuffer(i*s),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let l=0;l<r.length;l++){const{offset:h,count:u}=r[l];for(let d=0;d<u;d++)a[c+d]=h+d;c+=u}return a}class zy extends Iy{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!Ny())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Wf,...t},t[Mh]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const i=dd(t,e.range,n),s=ky(i,e.useSharedArrayBuffer);this._indirectBuffer=s}else Oy(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new et))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:dd(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Si{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){const c=e[s][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],c=e.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Si.prototype.setFromBox=(function(){const r=new D;return function(t,n){const i=n.min,s=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){r.x=i.x*c+s.x*(1-c),r.y=i.y*l+s.y*(1-l),r.z=i.z*h+s.z*(1-h);const u=t.dot(r);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})();const Hy=(function(){const r=new D,e=new D,t=new D;return function(i,s,o){const a=i.start,c=r,l=s.start,h=e;t.subVectors(a,l),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const u=t.dot(h),d=h.dot(c),f=h.dot(h),g=t.dot(c),m=c.dot(c)*f-d*d;let p,_;m!==0?p=(u*d-g*f)/m:p=0,_=(u+p*d)/f,o.x=p,o.y=_}})(),Ah=(function(){const r=new _e,e=new D,t=new D;return function(i,s,o,a){Hy(i,s,r);let c=r.x,l=r.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),s.at(l,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;c<0?h=i.start:h=i.end;let u;l<0?u=s.start:u=s.end;const d=e,f=t;if(i.closestPointToPoint(u,!0,e),s.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(f);return}}}})(),Vy=(function(){const r=new D,e=new D,t=new An,n=new yi;return function(s,o){const{radius:a,center:c}=s,{a:l,b:h,c:u}=o;if(n.start=l,n.end=h,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a||(n.start=l,n.end=u,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a)||(n.start=h,n.end=u,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a))return!0;const x=o.getPlane(t);if(Math.abs(x.distanceToPoint(c))<=a){const p=x.projectPoint(c,e);if(o.containsPoint(p))return!0}return!1}})(),Gy=["x","y","z"],gi=1e-15,fd=gi*gi;function Tn(r){return Math.abs(r)<gi}class qn extends Vt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new Si),this.points=[this.a,this.b,this.c],this.plane=new An,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new yi,this.needsUpdate=!0}intersectsSphere(e){return Vy(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);const l=s[1],h=o[1];l.subVectors(e,t),h.setFromPoints(l,i);const u=s[2],d=o[2];u.subVectors(t,n),d.setFromPoints(u,i);const f=s[3],g=o[3];f.subVectors(n,e),g.setFromPoints(f,i);const x=l.length(),m=u.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<gi?m<gi||p<gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<gi?p<gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<gi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}qn.prototype.closestPointToSegment=(function(){const r=new D,e=new D,t=new yi;return function(i,s=null,o=null){this.needsUpdate&&this.update();const{start:a,end:c}=i,l=this.points;let h,u=1/0;const d=this.plane.distanceToPoint(a),f=this.plane.distanceToPoint(c);if(d*f<0&&this.plane.intersectLine(i,r)!==null&&this.containsPoint(r))return s&&s.copy(r),o&&o.copy(r),0;for(let g=0;g<3;g++){const x=(g+1)%3;t.start.copy(l[g]),t.end.copy(l[x]),Ah(t,i,r,e),h=r.distanceToSquared(e),h<u&&(u=h,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),h=a.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(c,r),h=c.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(c)),Math.sqrt(u)}})();qn.prototype.intersectsTriangle=(function(){const r=new qn,e=new Si,t=new Si,n=new D,i=new D,s=new D,o=new D,a=new yi,c=new yi,l=new D,h=new _e,u=new _e;function d(y,v,S,R){const A=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?A.copy(y.plane.normal):A.copy(v.plane.normal);const P=y.satBounds,b=y.satAxes;for(let I=1;I<4;I++){const F=P[I],k=b[I];if(e.setFromPoints(k,v.points),F.isSeparated(e)||(o.copy(A).cross(k),e.setFromPoints(o,y.points),t.setFromPoints(o,v.points),e.isSeparated(t)))return!1}const M=v.satBounds,L=v.satAxes;for(let I=1;I<4;I++){const F=M[I],k=L[I];if(e.setFromPoints(k,y.points),F.isSeparated(e)||(o.crossVectors(A,k),e.setFromPoints(o,y.points),t.setFromPoints(o,v.points),e.isSeparated(t)))return!1}return S&&(R||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function f(y,v,S,R,A,P,b,M,L,I,F){let k=b/(b-M);I.x=R+(A-R)*k,F.start.subVectors(v,y).multiplyScalar(k).add(y),k=b/(b-L),I.y=R+(P-R)*k,F.end.subVectors(S,y).multiplyScalar(k).add(y)}function g(y,v,S,R,A,P,b,M,L,I,F){if(A>0)f(y.c,y.a,y.b,R,v,S,L,b,M,I,F);else if(P>0)f(y.b,y.a,y.c,S,v,R,M,b,L,I,F);else if(M*L>0||b!=0)f(y.a,y.b,y.c,v,S,R,b,M,L,I,F);else if(M!=0)f(y.b,y.a,y.c,S,v,R,M,b,L,I,F);else if(L!=0)f(y.c,y.a,y.b,R,v,S,L,b,M,I,F);else return!0;return!1}function x(y,v,S,R){const A=v.degenerateSegment,P=y.plane.distanceToPoint(A.start),b=y.plane.distanceToPoint(A.end);return Tn(P)?Tn(b)?d(y,v,S,R):(S&&(S.start.copy(A.start),S.end.copy(A.start)),y.containsPoint(A.start)):Tn(b)?(S&&(S.start.copy(A.end),S.end.copy(A.end)),y.containsPoint(A.end)):y.plane.intersectLine(A,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),y.containsPoint(n)):!1}function m(y,v,S){const R=v.a;return Tn(y.plane.distanceToPoint(R))&&y.containsPoint(R)?(S&&(S.start.copy(R),S.end.copy(R)),!0):!1}function p(y,v,S){const R=y.degenerateSegment,A=v.a;return R.closestPointToPoint(A,!0,n),A.distanceToSquared(n)<fd?(S&&(S.start.copy(A),S.end.copy(A)),!0):!1}function _(y,v,S,R){if(y.isDegenerateIntoSegment)if(v.isDegenerateIntoSegment){const A=y.degenerateSegment,P=v.degenerateSegment,b=i,M=s;A.delta(b),P.delta(M);const L=n.subVectors(P.start,A.start),I=b.x*M.y-b.y*M.x;if(Tn(I))return!1;const F=(L.x*M.y-L.y*M.x)/I,k=-(b.x*L.y-b.y*L.x)/I;if(F<0||F>1||k<0||k>1)return!1;const B=A.start.z+b.z*F,z=P.start.z+M.z*k;return Tn(B-z)?(S&&(S.start.copy(A.start).addScaledVector(b,F),S.end.copy(A.start).addScaledVector(b,F)),!0):!1}else return v.isDegenerateIntoPoint?p(y,v,S):x(v,y,S,R);else{if(y.isDegenerateIntoPoint)return v.isDegenerateIntoPoint?v.a.distanceToSquared(y.a)<fd?(S&&(S.start.copy(y.a),S.end.copy(y.a)),!0):!1:v.isDegenerateIntoSegment?p(v,y,S):m(v,y,S);if(v.isDegenerateIntoPoint)return m(y,v,S);if(v.isDegenerateIntoSegment)return x(y,v,S,R)}}return function(v,S=null,R=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(r.copy(v),r.update(),v=r);const A=_(this,v,S,R);if(A!==void 0)return A;const P=this.plane,b=v.plane;let M=b.distanceToPoint(this.a),L=b.distanceToPoint(this.b),I=b.distanceToPoint(this.c);Tn(M)&&(M=0),Tn(L)&&(L=0),Tn(I)&&(I=0);const F=M*L,k=M*I;if(F>0&&k>0)return!1;let B=P.distanceToPoint(v.a),z=P.distanceToPoint(v.b),J=P.distanceToPoint(v.c);Tn(B)&&(B=0),Tn(z)&&(z=0),Tn(J)&&(J=0);const X=B*z,ne=B*J;if(X>0&&ne>0)return!1;i.copy(P.normal),s.copy(b.normal);const le=i.cross(s);let ge=0,Ne=Math.abs(le.x);const Ye=Math.abs(le.y);Ye>Ne&&(Ne=Ye,ge=1),Math.abs(le.z)>Ne&&(ge=2);const He=Gy[ge],$=this.a[He],ee=this.b[He],ue=this.c[He],be=v.a[He],ve=v.b[He],Xe=v.c[He];if(g(this,$,ee,ue,F,k,M,L,I,h,a))return d(this,v,S,R);if(g(v,be,ve,Xe,X,ne,B,z,J,u,c))return d(this,v,S,R);if(h.y<h.x){const rt=h.y;h.y=h.x,h.x=rt,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(u.y<u.x){const rt=u.y;u.y=u.x,u.x=rt,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return h.y<u.x||u.y<h.x?!1:(S&&(u.x>h.x?S.start.copy(c.start):S.start.copy(a.start),u.y<h.y?S.end.copy(c.end):S.end.copy(a.end)),!0)}})();qn.prototype.distanceToPoint=(function(){const r=new D;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();qn.prototype.distanceToTriangle=(function(){const r=new D,e=new D,t=["a","b","c"],n=new yi,i=new yi;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],g=o[f];this.closestPointToPoint(g,r),d=g.distanceToSquared(r),d<h&&(h=d,a&&a.copy(r),c&&c.copy(g));const x=this[f];o.closestPointToPoint(x,r),d=x.distanceToSquared(r),d<h&&(h=d,a&&a.copy(x),c&&c.copy(r))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const x=t[g],m=t[(g+1)%3];i.set(o[x],o[m]),Ah(n,i,r,e);const p=r.distanceToSquared(e);p<h&&(h=p,a&&a.copy(r),c&&c.copy(e))}}return Math.sqrt(h)}})();class on{constructor(e,t,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Ce,this.invMatrix=new Ce,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new Si),this.alignedSatBounds=new Array(3).fill().map(()=>new Si),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}on.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*l|2*h|4*u,f=i[d];f.x=l?n.x:t.x,f.y=h?n.y:t.y,f.z=u?n.z:t.z,f.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){const h=o[l],u=s[l],d=1<<l,f=i[d];h.subVectors(a,f),u.setFromPoints(h,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();on.prototype.intersectsBox=(function(){const r=new Si;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let c=0;c<3;c++){const l=o[c],h=s[c];if(r.setFromBox(l,t),h.isSeparated(r))return!1}return!0}})();on.prototype.intersectsTriangle=(function(){const r=new qn,e=new Array(3),t=new Si,n=new Si,i=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=c[d];if(t.setFromPoints(g,e),f.isSeparated(t))return!1}const l=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){const f=l[d],g=h[d];if(t.setFromPoints(g,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=c[d];for(let g=0;g<4;g++){const x=h[g];if(i.crossVectors(f,x),t.setFromPoints(i,e),n.setFromPoints(i,u),t.isSeparated(n))return!1}}return!0}})();on.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();on.prototype.distanceToPoint=(function(){const r=new D;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();on.prototype.distanceToBox=(function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new yi),t=new Array(12).fill().map(()=>new yi),n=new D,i=new D;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const h=a*a,u=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];i.copy(p).clamp(u,d);const _=p.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(p),l&&l.copy(i),_<h))return Math.sqrt(_)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){const y=(m+1)%3,v=(m+2)%3,S=p<<y|_<<v,R=1<<m|p<<y|_<<v,A=f[S],P=f[R];e[x].set(A,P);const M=r[m],L=r[y],I=r[v],F=t[x],k=F.start,B=F.end;k[M]=u[M],k[L]=p?u[L]:d[L],k[I]=_?u[I]:d[I],B[M]=d[M],B[L]=p?u[L]:d[L],B[I]=_?u[I]:d[I],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){i.x=m?d.x:u.x,i.y=p?d.y:u.y,i.z=_?d.z:u.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(i),y<h))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=e[m];for(let _=0;_<12;_++){const y=t[_];Ah(p,y,n,i);const v=n.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(i),v<h))return Math.sqrt(v)}}return Math.sqrt(g)}})();class Wy extends Th{constructor(){super(()=>new qn)}}const Cn=new Wy,br=new D,Cc=new D;function Xy(r,e,t={},n=0,i=1/0){const s=n*n,o=i*i;let a=1/0,c=null;if(r.shapecast({boundsTraverseOrder:h=>(br.copy(e).clamp(h.min,h.max),br.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,br);const d=e.distanceToSquared(br);return d<a&&(Cc.copy(br),a=d,c=u),d<s}}),a===1/0)return null;const l=Math.sqrt(a);return t.point?t.point.copy(Cc):t.point=Cc.clone(),t.distance=l,t.faceIndex=c,t}const ko=parseInt(Qr)>=169,jy=parseInt(Qr)<=161,Zi=new D,Ji=new D,Qi=new D,zo=new _e,Ho=new _e,Vo=new _e,pd=new D,md=new D,gd=new D,wr=new D;function qy(r,e,t,n,i,s,o,a){let c;if(s===Kt?c=r.intersectTriangle(n,t,e,!0,i):c=r.intersectTriangle(e,t,n,s!==Rn,i),c===null)return null;const l=r.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function xd(r,e,t,n,i,s,o,a,c,l,h){Zi.fromBufferAttribute(e,s),Ji.fromBufferAttribute(e,o),Qi.fromBufferAttribute(e,a);const u=qy(r,Zi,Ji,Qi,wr,c,l,h);if(u){if(n){zo.fromBufferAttribute(n,s),Ho.fromBufferAttribute(n,o),Vo.fromBufferAttribute(n,a),u.uv=new _e;const f=Vt.getInterpolation(wr,Zi,Ji,Qi,zo,Ho,Vo,u.uv);ko||(u.uv=f)}if(i){zo.fromBufferAttribute(i,s),Ho.fromBufferAttribute(i,o),Vo.fromBufferAttribute(i,a),u.uv1=new _e;const f=Vt.getInterpolation(wr,Zi,Ji,Qi,zo,Ho,Vo,u.uv1);ko||(u.uv1=f),jy&&(u.uv2=u.uv1)}if(t){pd.fromBufferAttribute(t,s),md.fromBufferAttribute(t,o),gd.fromBufferAttribute(t,a),u.normal=new D;const f=Vt.getInterpolation(wr,Zi,Ji,Qi,pd,md,gd,u.normal);u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1),ko||(u.normal=f)}const d={a:s,b:o,c:a,normal:new D,materialIndex:0};if(Vt.getNormal(Zi,Ji,Qi,d.normal),u.face=d,u.faceIndex=s,ko){const f=new D;Vt.getBarycoord(wr,Zi,Ji,Qi,f),u.barycoord=f}}return u}function vd(r){return r&&r.isMaterial?r.side:r}function La(r,e,t,n,i,s,o){const a=n*3;let c=a+0,l=a+1,h=a+2;const{index:u,groups:d}=r;r.index&&(c=u.getX(c),l=u.getX(l),h=u.getX(h));const{position:f,normal:g,uv:x,uv1:m}=r.attributes;if(Array.isArray(e)){const p=n*3;for(let _=0,y=d.length;_<y;_++){const{start:v,count:S,materialIndex:R}=d[_];if(p>=v&&p<v+S){const A=vd(e[R]),P=xd(t,f,g,x,m,c,l,h,A,s,o);if(P)if(P.faceIndex=n,P.face.materialIndex=R,i)i.push(P);else return P}}}else{const p=vd(e),_=xd(t,f,g,x,m,c,l,h,p,s,o);if(_)if(_.faceIndex=n,_.face.materialIndex=0,i)i.push(_);else return _}return null}function Ct(r,e,t,n){const i=r.a,s=r.b,o=r.c;let a=e,c=e+1,l=e+2;t&&(a=t.getX(a),c=t.getX(c),l=t.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Yy(r,e,t,n,i,s,o,a){const{geometry:c,_indirectBuffer:l}=r;for(let h=n,u=n+i;h<u;h++)La(c,e,t,h,s,o,a)}function Ky(r,e,t,n,i,s,o){const{geometry:a,_indirectBuffer:c}=r;let l=1/0,h=null;for(let u=n,d=n+i;u<d;u++){let f;f=La(a,e,t,u,null,s,o),f&&f.distance<l&&(h=f,l=f.distance)}return h}function Zy(r,e,t,n,i,s,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=h,Ct(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}function Jy(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,c,l=0;const h=r._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),u(0,l),l+=s.byteLength;function u(d,f,g=!1){const x=d*2;if(Tt(x,a)){const m=kt(d,o),p=Yt(x,a);let _=1/0,y=1/0,v=1/0,S=-1/0,R=-1/0,A=-1/0;for(let P=3*m,b=3*(m+p);P<b;P++){let M=n[P];const L=i.getX(M),I=i.getY(M),F=i.getZ(M);L<_&&(_=L),L>S&&(S=L),I<y&&(y=I),I>R&&(R=I),F<v&&(v=F),F>A&&(A=F)}return c[d+0]!==_||c[d+1]!==y||c[d+2]!==v||c[d+3]!==S||c[d+4]!==R||c[d+5]!==A?(c[d+0]=_,c[d+1]=y,c[d+2]=v,c[d+3]=S,c[d+4]=R,c[d+5]=A,!0):!1}else{const m=It(d),p=Nt(d,o);let _=g,y=!1,v=!1;if(e){if(!_){const M=m/Rt+f/yn,L=p/Rt+f/yn;y=e.has(M),v=e.has(L),_=!y&&!v}}else y=!0,v=!0;const S=_||y,R=_||v;let A=!1;S&&(A=u(m,f,_));let P=!1;R&&(P=u(p,f,_));const b=A||P;if(b)for(let M=0;M<3;M++){const L=m+M,I=p+M,F=c[L],k=c[L+3],B=c[I],z=c[I+3];c[d+M]=F<B?F:B,c[d+M+3]=k>z?k:z}return b}}}function Ln(r,e,t,n,i){let s,o,a,c,l,h;const u=1/t.direction.x,d=1/t.direction.y,f=1/t.direction.z,g=t.origin.x,x=t.origin.y,m=t.origin.z;let p=e[r],_=e[r+3],y=e[r+1],v=e[r+3+1],S=e[r+2],R=e[r+3+2];return u>=0?(s=(p-g)*u,o=(_-g)*u):(s=(_-g)*u,o=(p-g)*u),d>=0?(a=(y-x)*d,c=(v-x)*d):(a=(v-x)*d,c=(y-x)*d),s>c||a>o||((a>s||isNaN(s))&&(s=a),(c<o||isNaN(o))&&(o=c),f>=0?(l=(S-m)*f,h=(R-m)*f):(l=(R-m)*f,h=(S-m)*f),s>h||l>o)?!1:((l>s||s!==s)&&(s=l),(h<o||o!==o)&&(o=h),s<=i&&o>=n)}function Qy(r,e,t,n,i,s,o,a){const{geometry:c,_indirectBuffer:l}=r;for(let h=n,u=n+i;h<u;h++){let d=l?l[h]:h;La(c,e,t,d,s,o,a)}}function $y(r,e,t,n,i,s,o){const{geometry:a,_indirectBuffer:c}=r;let l=1/0,h=null;for(let u=n,d=n+i;u<d;u++){let f;f=La(a,e,t,c?c[u]:u,null,s,o),f&&f.distance<l&&(h=f,l=f.distance)}return h}function eS(r,e,t,n,i,s,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),Ct(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}function tS(r,e,t,n,i,s,o){ut.setBuffer(r._roots[e]),Ln(0,ut.float32Array,n,s,o)&&kl(0,r,t,n,i,s,o),ut.clearBuffer()}function kl(r,e,t,n,i,s,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ut,h=r*2;if(Tt(h,c)){const d=kt(r,l),f=Yt(h,c);Yy(e,t,n,d,f,i,s,o)}else{const d=It(r);Ln(d,a,n,s,o)&&kl(d,e,t,n,i,s,o);const f=Nt(r,l);Ln(f,a,n,s,o)&&kl(f,e,t,n,i,s,o)}}const nS=["x","y","z"];function iS(r,e,t,n,i,s){ut.setBuffer(r._roots[e]);let o=null;return Ln(0,ut.float32Array,n,i,s)&&(o=zl(0,r,t,n,i,s)),ut.clearBuffer(),o}function zl(r,e,t,n,i,s){const{float32Array:o,uint16Array:a,uint32Array:c}=ut;let l=r*2;if(Tt(l,a)){const u=kt(r,c),d=Yt(l,a);return Ky(e,t,n,u,d,i,s)}else{const u=bh(r,c),d=nS[u],g=n.direction[d]>=0;let x,m;g?(x=It(r),m=Nt(r,c)):(x=Nt(r,c),m=It(r));const _=Ln(x,o,n,i,s)?zl(x,e,t,n,i,s):null;if(_){const S=_.point[d];if(g?S<=o[m+u]:S>=o[m+u+3])return _}const v=Ln(m,o,n,i,s)?zl(m,e,t,n,i,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}const Go=new et,Ds=new qn,Is=new qn,Tr=new Ce,_d=new on,Wo=new on;function sS(r,e,t,n){ut.setBuffer(r._roots[e]);const i=Hl(0,r,t,n);return ut.clearBuffer(),i}function Hl(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ut;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),_d.set(t.boundingBox.min,t.boundingBox.max,n),i=_d),Tt(c,o)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,g=t.attributes.position,x=kt(r,a),m=Yt(c,o);if(Tr.copy(n).invert(),t.boundsTree)return bt(r,s,Wo),Wo.matrix.copy(Tr),Wo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>Wo.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=x*3,v=(m+x)*3;y<v;y+=3)if(Ct(Is,y,u,d),Is.needsUpdate=!0,_.intersectsTriangle(Is))return!0;return!1}});{const p=Pa(t);for(let _=x*3,y=(m+x)*3;_<y;_+=3){Ct(Ds,_,u,d),Ds.a.applyMatrix4(Tr),Ds.b.applyMatrix4(Tr),Ds.c.applyMatrix4(Tr),Ds.needsUpdate=!0;for(let v=0,S=p*3;v<S;v+=3)if(Ct(Is,v,f,g),Is.needsUpdate=!0,Ds.intersectsTriangle(Is))return!0}}}else{const h=It(r),u=Nt(r,a);return bt(h,s,Go),!!(i.intersectsBox(Go)&&Hl(h,e,t,n,i)||(bt(u,s,Go),i.intersectsBox(Go)&&Hl(u,e,t,n,i)))}}const Xo=new Ce,Pc=new on,Er=new on,rS=new D,oS=new D,aS=new D,cS=new D;function lS(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Pc.set(e.boundingBox.min,e.boundingBox.max,t),Pc.needsUpdate=!0;const a=r.geometry,c=a.attributes.position,l=a.index,h=e.attributes.position,u=e.index,d=Cn.getPrimitive(),f=Cn.getPrimitive();let g=rS,x=oS,m=null,p=null;i&&(m=aS,p=cS);let _=1/0,y=null,v=null;return Xo.copy(t).invert(),Er.matrix.copy(Xo),r.shapecast({boundsTraverseOrder:S=>Pc.distanceToBox(S),intersectsBounds:(S,R,A)=>A<_&&A<o?(R&&(Er.min.copy(S.min),Er.max.copy(S.max),Er.needsUpdate=!0),!0):!1,intersectsRange:(S,R)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:P=>Er.distanceToBox(P),intersectsBounds:(P,b,M)=>M<_&&M<o,intersectsRange:(P,b)=>{for(let M=P,L=P+b;M<L;M++){Ct(f,3*M,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let I=S,F=S+R;I<F;I++){Ct(d,3*I,l,c),d.needsUpdate=!0;const k=d.distanceToTriangle(f,g,m);if(k<_&&(x.copy(g),p&&p.copy(m),_=k,y=I,v=M),k<s)return!0}}}});{const A=Pa(e);for(let P=0,b=A;P<b;P++){Ct(f,3*P,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let M=S,L=S+R;M<L;M++){Ct(d,3*M,l,c),d.needsUpdate=!0;const I=d.distanceToTriangle(f,g,m);if(I<_&&(x.copy(g),p&&p.copy(m),_=I,y=M,v=P),I<s)return!0}}}}}),Cn.releasePrimitive(d),Cn.releasePrimitive(f),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Xo),x.applyMatrix4(Xo),i.distance=x.sub(i.point).length(),i.faceIndex=v),n)}function hS(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,c,l=0;const h=r._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),u(0,l),l+=s.byteLength;function u(d,f,g=!1){const x=d*2;if(Tt(x,a)){const m=kt(d,o),p=Yt(x,a);let _=1/0,y=1/0,v=1/0,S=-1/0,R=-1/0,A=-1/0;for(let P=m,b=m+p;P<b;P++){const M=3*r.resolveTriangleIndex(P);for(let L=0;L<3;L++){let I=M+L;I=n?n[I]:I;const F=i.getX(I),k=i.getY(I),B=i.getZ(I);F<_&&(_=F),F>S&&(S=F),k<y&&(y=k),k>R&&(R=k),B<v&&(v=B),B>A&&(A=B)}}return c[d+0]!==_||c[d+1]!==y||c[d+2]!==v||c[d+3]!==S||c[d+4]!==R||c[d+5]!==A?(c[d+0]=_,c[d+1]=y,c[d+2]=v,c[d+3]=S,c[d+4]=R,c[d+5]=A,!0):!1}else{const m=It(d),p=Nt(d,o);let _=g,y=!1,v=!1;if(e){if(!_){const M=m/Rt+f/yn,L=p/Rt+f/yn;y=e.has(M),v=e.has(L),_=!y&&!v}}else y=!0,v=!0;const S=_||y,R=_||v;let A=!1;S&&(A=u(m,f,_));let P=!1;R&&(P=u(p,f,_));const b=A||P;if(b)for(let M=0;M<3;M++){const L=m+M,I=p+M,F=c[L],k=c[L+3],B=c[I],z=c[I+3];c[d+M]=F<B?F:B,c[d+M+3]=k>z?k:z}return b}}}function uS(r,e,t,n,i,s,o){ut.setBuffer(r._roots[e]),Ln(0,ut.float32Array,n,s,o)&&Vl(0,r,t,n,i,s,o),ut.clearBuffer()}function Vl(r,e,t,n,i,s,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ut,h=r*2;if(Tt(h,c)){const d=kt(r,l),f=Yt(h,c);Qy(e,t,n,d,f,i,s,o)}else{const d=It(r);Ln(d,a,n,s,o)&&Vl(d,e,t,n,i,s,o);const f=Nt(r,l);Ln(f,a,n,s,o)&&Vl(f,e,t,n,i,s,o)}}const dS=["x","y","z"];function fS(r,e,t,n,i,s){ut.setBuffer(r._roots[e]);let o=null;return Ln(0,ut.float32Array,n,i,s)&&(o=Gl(0,r,t,n,i,s)),ut.clearBuffer(),o}function Gl(r,e,t,n,i,s){const{float32Array:o,uint16Array:a,uint32Array:c}=ut;let l=r*2;if(Tt(l,a)){const u=kt(r,c),d=Yt(l,a);return $y(e,t,n,u,d,i,s)}else{const u=bh(r,c),d=dS[u],g=n.direction[d]>=0;let x,m;g?(x=It(r),m=Nt(r,c)):(x=Nt(r,c),m=It(r));const _=Ln(x,o,n,i,s)?Gl(x,e,t,n,i,s):null;if(_){const S=_.point[d];if(g?S<=o[m+u]:S>=o[m+u+3])return _}const v=Ln(m,o,n,i,s)?Gl(m,e,t,n,i,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}const jo=new et,Ns=new qn,Us=new qn,Ar=new Ce,yd=new on,qo=new on;function pS(r,e,t,n){ut.setBuffer(r._roots[e]);const i=Wl(0,r,t,n);return ut.clearBuffer(),i}function Wl(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ut;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),yd.set(t.boundingBox.min,t.boundingBox.max,n),i=yd),Tt(c,o)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,g=t.attributes.position,x=kt(r,a),m=Yt(c,o);if(Ar.copy(n).invert(),t.boundsTree)return bt(r,s,qo),qo.matrix.copy(Ar),qo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>qo.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=x,v=m+x;y<v;y++)if(Ct(Us,3*e.resolveTriangleIndex(y),u,d),Us.needsUpdate=!0,_.intersectsTriangle(Us))return!0;return!1}});{const p=Pa(t);for(let _=x,y=m+x;_<y;_++){const v=e.resolveTriangleIndex(_);Ct(Ns,3*v,u,d),Ns.a.applyMatrix4(Ar),Ns.b.applyMatrix4(Ar),Ns.c.applyMatrix4(Ar),Ns.needsUpdate=!0;for(let S=0,R=p*3;S<R;S+=3)if(Ct(Us,S,f,g),Us.needsUpdate=!0,Ns.intersectsTriangle(Us))return!0}}}else{const h=It(r),u=Nt(r,a);return bt(h,s,jo),!!(i.intersectsBox(jo)&&Wl(h,e,t,n,i)||(bt(u,s,jo),i.intersectsBox(jo)&&Wl(u,e,t,n,i)))}}const Yo=new Ce,Lc=new on,Rr=new on,mS=new D,gS=new D,xS=new D,vS=new D;function _S(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Lc.set(e.boundingBox.min,e.boundingBox.max,t),Lc.needsUpdate=!0;const a=r.geometry,c=a.attributes.position,l=a.index,h=e.attributes.position,u=e.index,d=Cn.getPrimitive(),f=Cn.getPrimitive();let g=mS,x=gS,m=null,p=null;i&&(m=xS,p=vS);let _=1/0,y=null,v=null;return Yo.copy(t).invert(),Rr.matrix.copy(Yo),r.shapecast({boundsTraverseOrder:S=>Lc.distanceToBox(S),intersectsBounds:(S,R,A)=>A<_&&A<o?(R&&(Rr.min.copy(S.min),Rr.max.copy(S.max),Rr.needsUpdate=!0),!0):!1,intersectsRange:(S,R)=>{if(e.boundsTree){const A=e.boundsTree;return A.shapecast({boundsTraverseOrder:P=>Rr.distanceToBox(P),intersectsBounds:(P,b,M)=>M<_&&M<o,intersectsRange:(P,b)=>{for(let M=P,L=P+b;M<L;M++){const I=A.resolveTriangleIndex(M);Ct(f,3*I,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let F=S,k=S+R;F<k;F++){const B=r.resolveTriangleIndex(F);Ct(d,3*B,l,c),d.needsUpdate=!0;const z=d.distanceToTriangle(f,g,m);if(z<_&&(x.copy(g),p&&p.copy(m),_=z,y=F,v=M),z<s)return!0}}}})}else{const A=Pa(e);for(let P=0,b=A;P<b;P++){Ct(f,3*P,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let M=S,L=S+R;M<L;M++){const I=r.resolveTriangleIndex(M);Ct(d,3*I,l,c),d.needsUpdate=!0;const F=d.distanceToTriangle(f,g,m);if(F<_&&(x.copy(g),p&&p.copy(m),_=F,y=M,v=P),F<s)return!0}}}}}),Cn.releasePrimitive(d),Cn.releasePrimitive(f),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Yo),x.applyMatrix4(Yo),i.distance=x.sub(i.point).length(),i.faceIndex=v),n)}function Sd(r,e,t){return r===null?null:(r.point.applyMatrix4(e.matrixWorld),r.distance=r.point.distanceTo(t.ray.origin),r.object=e,r)}const Ko=new on,Zo=new ss,Md=new D,bd=new Ce,wd=new D,Dc=["getX","getY","getZ"];class ba extends zy{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:o}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(s));const a=new ba(t,{...n,[Mh]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const h=new Et(e.index,1,!1);t.setIndex(h)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a;function c(l){for(let h=0;h<l.length;h++){const u=l[h],d=new Uint32Array(u),f=new Uint16Array(u);for(let g=0,x=u.byteLength/yn;g<x;g++){const m=Rt*g,p=2*m;Tt(p,f)||(d[m+6]=d[m+6]/Rt-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=(s?s[e]:e)*3;let h=l+0,u=l+1,d=l+2;a&&(h=a[h],u=a[u],d=a[d]);for(let f=0;f<3;f++){const g=o[Dc[f]](h),x=o[Dc[f]](u),m=o[Dc[f]](d);let p=g;x<p&&(p=x),m<p&&(p=m);let _=g;x>_&&(_=x),m>_&&(_=m),t[n+f]=p,t[n+f+3]=_}return t}computePrimitiveBounds(e,t,n){const i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=o.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=o.array,h=o.offset||0;let u=3;o.isInterleavedBufferAttribute&&(u=o.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let g=e,x=e+t;g<x;g++){const p=(s?s[g]:g)*3,_=(g-f)*6;let y=p+0,v=p+1,S=p+2;a&&(y=a[y],v=a[v],S=a[S]),c||(y=y*u+h,v=v*u+h,S=S*u+h);for(let R=0;R<3;R++){let A,P,b;c?(A=o[d[R]](y),P=o[d[R]](v),b=o[d[R]](S)):(A=l[y+R],P=l[v+R],b=l[S+R]);let M=A;P<M&&(M=P),b<M&&(M=b);let L=A;P>L&&(L=P),b>L&&(L=b);const I=(L-M)/2,F=R*2;n[_+F+0]=M+I,n[_+F+1]=I+(Math.abs(M)+I)*pa}}return n}raycastObject3D(e,t,n=[]){const{material:i}=e;if(i===void 0)return;bd.copy(e.matrixWorld).invert(),Zo.copy(t.ray).applyMatrix4(bd),wd.setFromMatrixScale(e.matrixWorld),Md.copy(Zo.direction).multiply(wd);const s=Md.length(),o=t.near/s,a=t.far/s;if(t.firstHitOnly===!0){let c=this.raycastFirst(Zo,i,o,a);c=Sd(c,e,t),c&&n.push(c)}else{const c=this.raycast(Zo,i,o,a);for(let l=0,h=c.length;l<h;l++){const u=Sd(c[l],e,t);u&&n.push(u)}}return n}refit(e=null){return(this.indirect?hS:Jy)(this,e)}raycast(e,t=Gn,n=0,i=1/0){const s=this._roots,o=[],a=this.indirect?uS:tS;for(let c=0,l=s.length;c<l;c++)a(this,c,t,e,o,n,i);return o}raycastFirst(e,t=Gn,n=0,i=1/0){const s=this._roots;let o=null;const a=this.indirect?fS:iS;for(let c=0,l=s.length;c<l;c++){const h=a(this,c,t,e,n,i);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?pS:sS;for(let o=0,a=i.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=Cn.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?eS:Zy});return Cn.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const o=Cn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Ct(o,x*3,a,c)}:g=>{Ct(o,g*3,a,c)},h=Cn.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?g=>{const x=e.resolveTriangleIndex(g);Ct(h,x*3,u,d)}:g=>{Ct(h,g*3,u,d)};if(s){if(!(e instanceof ba))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(x,m,p,_,y,v,S,R)=>{for(let A=p,P=p+_;A<P;A++){f(A),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let b=x,M=x+m;b<M;b++)if(l(b),o.needsUpdate=!0,s(o,h,b,A,y,v,S,R))return!0}return!1};if(i){const x=i;i=function(m,p,_,y,v,S,R,A){return x(m,p,_,y,v,S,R,A)?!0:g(m,p,_,y,v,S,R,A)}}else i=g}return super.bvhcast(e,t,{intersectsRanges:i})}intersectsBox(e,t){return Ko.set(e.min,e.max,t),Ko.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ko.intersectsBox(n),intersectsTriangle:n=>Ko.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,o=1/0){return(this.indirect?_S:lS)(this,e,t,n,i,s,o)}closestPointToPoint(e,t={},n=0,i=1/0){return Xy(this,e,t,n,i)}}const Vs={Mesh:xt.prototype.raycast,Line:$r.prototype.raycast,LineSegments:ph.prototype.raycast,LineLoop:mh.prototype.raycast,Points:gh.prototype.raycast,BatchedMesh:qm.prototype.raycast},zt=new xt,Jo=[];function yS(r,e){if(this.isBatchedMesh)SS.call(this,r,e);else{const{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,r,e);else{let n;if(this instanceof xt)n=Vs.Mesh;else if(this instanceof ph)n=Vs.LineSegments;else if(this instanceof mh)n=Vs.LineLoop;else if(this instanceof $r)n=Vs.Line;else if(this instanceof gh)n=Vs.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,r,e)}}}function SS(r,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,s=this.matrixWorld;zt.material=this.material,zt.geometry=this.geometry;const o=zt.geometry.boundsTree,a=zt.geometry.drawRange;zt.geometry.boundingSphere===null&&(zt.geometry.boundingSphere=new Gt);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const h=n[c].geometryIndex;if(zt.geometry.boundsTree=t[h],this.getMatrixAt(c,zt.matrixWorld).premultiply(s),!zt.geometry.boundsTree){this.getBoundingBoxAt(h,zt.geometry.boundingBox),this.getBoundingSphereAt(h,zt.geometry.boundingSphere);const u=i[h];zt.geometry.setDrawRange(u.start,u.count)}zt.raycast(r,Jo);for(let u=0,d=Jo.length;u<d;u++){const f=Jo[u];f.object=this,f.batchId=c,e.push(f)}Jo.length=0}zt.geometry.boundsTree=o,zt.geometry.drawRange=a,zt.material=null,zt.geometry=null}else Vs.BatchedMesh.call(this,r,e)}function MS(r={}){const{type:e=ba}=r;return this.boundsTree=new e(this,r),this.boundsTree}function bS(){this.boundsTree=null}Wt.prototype.computeBoundsTree=MS;Wt.prototype.disposeBoundsTree=bS;xt.prototype.raycast=yS;class wS{constructor(e,t,n,i,s){this.host=e,this.viewer=t,this.state=n,this.nameOf=i,this.onClick=s,t.onFrame(()=>this.position()),t.controls.addEventListener("end",()=>this.refresh()),n.addEventListener("change",()=>this.refresh())}showAll=!1;partPins=!1;describe=async()=>null;max=28;landmarks=()=>[];partsOf=()=>[];keeps=()=>!0;offsetOf=()=>null;els=new Map;chosen=[];recompute=0;ray=new Uf;drawable(){const e=new Set(this.state.selection),t=[];for(const n of this.chosen){const i=this.els.get(n.id);if(!i||i.style.display==="none")continue;const s=this.worldOf(n);t.push({text:i.textContent??"",world:s,pin:!!n.pin,selected:e.has(n.id)})}return t}rebuild(){for(const e of this.els.values())e.remove();this.els.clear(),this.refresh()}refresh(){cancelAnimationFrame(this.recompute),this.recompute=requestAnimationFrame(()=>{this.chosen=this.choose(),this.sync(),this.position()})}choose(){const e=new Set(this.state.selection.filter(x=>this.state.mesh(x)?.visible)),t=new Set(e.size<=6&&this.partPins?[...e].flatMap(x=>this.partsOf(x)).filter(x=>!e.has(x)):[]),n=[];if(e.size<=6)for(const x of e){const m=this.state.mesh(x);if(!m?.visible)continue;const p=this.anchor(x,m);this.partPins&&(p.part=!0),n.push(p)}const i=this.viewer.camera,s=this.state.visibleMeshes(),o=this.viewer.canvas.clientWidth,a=this.viewer.canvas.clientHeight,c=[],l=x=>{const m=x.clone().project(i);return new _e((m.x*.5+.5)*o,(-m.y*.5+.5)*a)},h=new Gt,u=x=>(m,p)=>{const _=m.distanceTo(i.position);this.ray.set(i.position,m.clone().sub(i.position).normalize());const y=x.filter(S=>(S.geometry.boundingSphere||S.geometry.computeBoundingSphere(),this.ray.ray.intersectsSphere(h.copy(S.geometry.boundingSphere).applyMatrix4(S.matrixWorld))));for(const S of y)S.geometry.boundsTree||S.geometry.computeBoundsTree();const v=this.ray.intersectObjects(y,!1).find(S=>{const R=S.object.material;return!(R.transparent&&R.opacity<.5)&&this.keeps(S.point,S.object.name)});return v?p?v.object===p:v.distance>_-.006:!0},d=u(s),f=s.filter(x=>e.has(x.name)||t.has(x.name)),g=u(f);for(const x of this.landmarks([...e])){const m={id:x.id,local:new D(...x.position),mesh:null,pin:!0,owner:x.owner,text:x.text,target:x.target,cls:x.cls},p=this.worldOf(m);if(!this.keeps(p,x.owner)||!d(p,null))continue;const _=l(p);this.overlaps(c,_,x.id,x.text)||n.push(m)}return this.partPins&&e.size>6?this.placeLargest(f.filter(x=>e.has(x.name)),n,c,g,l,!0):this.partPins&&t.size&&this.placeLargest(f.filter(x=>t.has(x.name)),n,c,g,l,!0),this.showAll&&this.placeLargest(s.filter(x=>!e.has(x.name)),n,c,d,l,!1),n}placeLargest(e,t,n,i,s,o){const a=this.viewer.camera,c=new lr().setFromProjectionMatrix(new Ce().multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse)),l=[],h=new Set;for(const f of e){if(h.has(f.name))continue;h.add(f.name);const g=f.geometry.boundingSphere.clone().applyMatrix4(f.matrixWorld);if(!c.containsPoint(g.center))continue;const x=g.center.distanceTo(a.position),m=this.anchor(f.name,f);m.part=o,l.push({a:m,size:g.radius/x})}l.sort((f,g)=>g.size-f.size);let u=0,d=400;for(const{a:f}of l){if(u>=this.max)break;let g=f.local.clone().applyMatrix4(f.mesh.matrixWorld);if(!this.keeps(g,f.id)||!i(g,f.mesh)){if(d<=0)continue;const m=this.frontPoints(f.mesh).find(p=>{if(d--<=0)return!1;const _=p.clone().applyMatrix4(f.mesh.matrixWorld);return this.keeps(_,f.id)&&i(_,f.mesh)});if(!m)continue;f.local=m,g=m.clone().applyMatrix4(f.mesh.matrixWorld)}const x=s(g);this.overlaps(n,x,f.id)||(t.push(f),u++)}}overlaps(e,t,n,i){const s=((i??this.nameOf(n)).length*6.3+18)/2;return e.some(o=>Math.abs(o.x-t.x)<o.hw+s+4&&Math.abs(o.y-t.y)<22)?!0:(e.push({x:t.x,y:t.y,hw:s}),!1)}worldOf(e){if(e.mesh)return e.local.clone().applyMatrix4(e.mesh.matrixWorld);const t=e.owner?this.offsetOf(e.owner):null;return t?e.local.clone().add(t):e.local.clone()}frontPoints(e){const t=e.geometry.getAttribute("position"),n=e.worldToLocal(this.viewer.camera.position.clone()),i=Math.max(1,Math.floor(t.count/500)),s=[];for(let c=0;c<t.count;c+=i){const l=new D().fromBufferAttribute(t,c);s.push({v:l,d:l.distanceTo(n)})}s.sort((c,l)=>c.d-l.d);const o=s.slice(0,Math.max(1,Math.ceil(s.length/3))),a=[o[0].v];for(;a.length<4&&a.length<o.length;){let c=null,l=-1;for(const{v:h}of o){const u=Math.min(...a.map(d=>d.distanceToSquared(h)));u>l&&(l=u,c=h)}if(!c||l<=0)break;a.push(c)}return a}anchor(e,t){const n=t.geometry.boundingBox.getCenter(new D),i=t.geometry.getAttribute("position"),s=new D;let o=n.clone(),a=1/0;const c=Math.max(1,Math.floor(i.count/400));for(let l=0;l<i.count;l+=c){s.fromBufferAttribute(i,l);const h=s.distanceToSquared(n);h<a&&(a=h,o=s.clone())}return{id:e,local:o,mesh:t}}sync(){const e=new Set(this.chosen.map(n=>n.id));for(const[n,i]of this.els)e.has(n)||(i.remove(),this.els.delete(n));const t=new Set(this.state.selection);for(const n of this.chosen){let i=this.els.get(n.id);if(!i){i=document.createElement("div"),i.className=(n.pin?"label pin":n.part?"label part":"label")+(n.cls?` ${n.cls}`:""),i.dir="auto",i.textContent=n.text??this.nameOf(n.id);const s=n.target??n.id;if(i.addEventListener("click",()=>this.onClick(s)),n.pin||n.part){const o=i,a=o.textContent??"";o.addEventListener("mouseenter",()=>void this.describe(s).then(c=>o.title=c?`${a}

${c}

(click for more)`:`${a} (click for details)`),{once:!0})}this.host.appendChild(i),this.els.set(n.id,i)}i.classList.toggle("selected",t.has(n.id))}}position(){if(!this.chosen.length)return;const e=this.viewer.camera,t=this.viewer.canvas.clientWidth,n=this.viewer.canvas.clientHeight;for(const i of this.chosen){const s=this.els.get(i.id);if(!s)continue;const o=this.worldOf(i),a=o.clone().project(e),c=a.z>1||i.mesh!==null&&!i.mesh.visible||!this.keeps(o,i.mesh?i.id:i.owner);s.style.display=c?"none":"",s.style.left=`${(a.x*.5+.5)*t}px`,s.style.top=`${(-a.y*.5+.5)*n-(i.pin||i.part?16:6)}px`}}}const TS=new Le("#f3e28c");class ES extends EventTarget{entries=new Map;hidden=new Set;xray=new Set;selected=new Set;ghostOthers=!1;peel=0;oneSide=!1;attachmentsVisible=!1;defaultHidden=new Set;highlights=new Map;undoStack=[];redoStack=[];onMaterial=()=>{};pairOf=()=>{};mirror=!1;register(e,t,n,i,s=!1){const o=t.map(a=>{const c=a.material;return s&&(c.polygonOffset=!0,c.polygonOffsetFactor=-2,c.polygonOffsetUnits=-2),{mesh:a,base:c,own:null}});this.entries.set(e,{parts:o,layer:n,side:i,attachment:s}),this.apply(e)}hideInitially(e){for(const t of e)this.hidden.add(t),this.defaultHidden.add(t);this.applyAll()}setHighlights(e){this.highlights=new Map([...e].filter(([t])=>this.entries.has(t))),this.applyAll()}get isTracing(){return this.highlights.size>0}setAttachmentsVisible(e){this.attachmentsVisible=e,this.applyAll()}unregister(e){this.entries.delete(e)}has(e){return this.entries.has(e)}meshes(e){return this.entries.get(e)?.parts.map(t=>t.mesh)??[]}mesh(e){const t=this.entries.get(e)?.parts;if(t?.length)return t.reduce((n,i)=>i.mesh.geometry.boundingSphere.radius>n.mesh.geometry.boundingSphere.radius?i:n).mesh}ids(){return this.entries.keys()}get selection(){return[...this.selected]}get peelLevel(){return this.peel}get isGhostOthers(){return this.ghostOthers}get isOneSide(){return this.oneSide}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}isVisible(e){const t=this.entries.get(e);return!!t&&this.visibleNow(e,t)}isHidden(e){return this.hidden.has(e)}isXray(e){return this.xray.has(e)}visibleMeshes(){const e=[];for(const[t,n]of this.entries)if(this.visibleNow(t,n))for(const i of n.parts)e.push(i.mesh);return e}select(e,t=!1){const n=[...this.selected];if(t||this.selected.clear(),e){const i=this.withPairs([e]);t&&this.selected.has(e)?i.forEach(s=>this.selected.delete(s)):i.forEach(s=>this.selected.add(s))}if(this.ghostOthers)this.applyAll();else{for(const i of new Set([...n,...this.selected]))this.apply(i);this.changed()}}selectMany(e){e=this.withPairs(e);const t=[...this.selected];if(this.selected=new Set(e),this.ghostOthers)this.applyAll();else{for(const n of new Set([...t,...e]))this.apply(n);this.changed()}}selectOpposite(){const e=[...this.selected].map(t=>this.pairOf(t)??t).filter(t=>this.entries.has(t));if(!e.length)return[];this.record();for(const t of e)this.hidden.delete(t);return this.selected=new Set(e),this.applyAll(),e}hide(e){e=this.withPairs(e),this.record();for(const t of e)this.hidden.add(t),this.selected.delete(t);this.applyAll()}unhide(e){e=this.withPairs(e),this.record();for(const t of e)this.hidden.delete(t);this.applyAll()}isolate(e){if(!e.length)return;this.record();const t=new Set(this.withPairs(e));for(const n of this.entries.keys())t.has(n)||this.hidden.add(n);for(const n of t)this.hidden.delete(n);this.applyAll()}toggleXray(e){if(!e.length)return;e=this.withPairs(e),this.record();const t=!e.every(n=>this.xray.has(n));for(const n of e)t?this.xray.add(n):this.xray.delete(n);this.applyAll()}setGhostOthers(e){this.record(),this.ghostOthers=e,this.applyAll()}setPeel(e){const t=Math.max(0,Math.min(this.maxLayer(),e));t!==this.peel&&(this.record(),this.peel=t,this.applyAll())}setOneSide(e){this.record(),this.oneSide=e,this.applyAll()}showAll(){this.record(),this.hidden=new Set(this.defaultHidden),this.xray.clear(),this.ghostOthers=!1,this.peel=0,this.oneSide=!1,this.applyAll()}undo(){const e=this.undoStack.pop();e&&(this.redoStack.push(this.snapshot()),this.restore(e,!1))}redo(){const e=this.redoStack.pop();e&&(this.undoStack.push(this.snapshot()),this.restore(e,!1))}maxLayer(){let e=0;for(const t of this.entries.values())e=Math.max(e,t.layer);return e}snapshot(){return{hidden:[...this.hidden],xray:[...this.xray],selected:[...this.selected],ghostOthers:this.ghostOthers,peel:this.peel,oneSide:this.oneSide}}restore(e,t=!0){t&&this.record(),this.hidden=new Set(e.hidden),this.xray=new Set(e.xray),this.selected=new Set(e.selected),this.ghostOthers=e.ghostOthers,this.peel=e.peel,this.oneSide=e.oneSide,this.applyAll()}bounds(e){const t=new et,n=e?e.flatMap(i=>this.entries.get(i)?.parts.map(s=>s.mesh)??[]):this.visibleMeshes();for(const i of n)t.expandByObject(i);return t}hideQuietly(e){for(const t of e)this.hidden.add(t),this.selected.delete(t);this.applyAll()}withPairs(e){if(!this.mirror)return e;const t=new Set(e);for(const n of e){const i=this.pairOf(n);i&&this.entries.has(i)&&t.add(i)}return[...t]}record(){this.undoStack.push(this.snapshot()),this.undoStack.length>100&&this.undoStack.shift(),this.redoStack=[]}visibleNow(e,t){return this.highlights.has(e)?!t.attachment:this.shown(e,t)}shown(e,t){return!(t.attachment&&!this.attachmentsVisible||this.hidden.has(e)||t.layer>0&&t.layer<=this.peel||this.oneSide&&t.side==="l")}applyAll(){for(const e of this.entries.keys())this.apply(e);this.changed()}apply(e){const t=this.entries.get(e);if(!t)return;const n=this.highlights.get(e),i=this.highlights.size>0,s=this.visibleNow(e,t),o=this.selected.has(e),a=!n&&(this.xray.has(e)||i&&!o||this.ghostOthers&&this.selected.size>0&&!o);for(const c of t.parts){if(c.mesh.visible=s,n){c.own||(c.own=c.base.clone(),this.onMaterial(c.own));const h=c.own;h.color.set(n),h.emissive.set(n).multiplyScalar(.35),h.transparent=!1,h.opacity=1,h.depthWrite=!0,h.needsUpdate=!0,c.mesh.material=h,c.mesh.renderOrder=2;continue}if(!o&&!a){c.mesh.material=c.base,c.mesh.renderOrder=0;continue}c.own||(c.own=c.base.clone(),this.onMaterial(c.own));const l=c.own;l.color.copy(c.base.color),o&&l.color.lerp(TS,.72),l.emissive.set(o?"#2a2208":"#000000"),l.transparent=a,l.opacity=a?this.xray.has(e)?.25:.12:1,l.depthWrite=!a,l.needsUpdate=!0,c.mesh.material=l,c.mesh.renderOrder=a?1:0}}changed(){this.dispatchEvent(new Event("change"))}}function Td(r,e){if(e===Np)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Pl||e===xf){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Pl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class AS extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new jS(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Vr.extractUrlBase(e);o=Vr.resolveURL(l,this.path)}else o=Vr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Sa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Xf){try{o[Ze.KHR_BINARY_GLTF]=new qS(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new oM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new PS;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new YS(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new KS;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new ZS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function RS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CS{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Zt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new mi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Nf(h),l.distance=u;break;case"spot":l=new pg(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class PS{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Oi}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(i)}}class LS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class DS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(s)}}class IS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class NS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class US{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class OS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class FS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Zt),Promise.all(s)}}class BS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class kS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(s)}}class zS{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class HS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class VS{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class GS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class WS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class XS{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class jS{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==En.TRIANGLES&&l.mode!==En.TRIANGLE_STRIP&&l.mode!==En.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const x=new Ce,m=new D,p=new ai,_=new D(1,1,1),y=new dh(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(m,p,_));for(const v in c)if(v==="_COLOR_0"){const S=c[v];y.instanceColor=new Dl(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);_t.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Xf="glTF",Cr=12,Ed={JSON:1313821514,BIN:5130562};class qS{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cr,s=new DataView(e,Cr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Ed.JSON){const l=new Uint8Array(e,Cr+o,a);this.content=n.decode(l)}else if(c===Ed.BIN){const l=Cr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Xl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Xl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Js[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,Zt,d)})})}}class KS{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZS{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class jf extends eo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+u;for(let v=0;v!==a;v++){const S=o[x+v+a],R=o[x+v+c]*h,A=o[g+v+a],P=o[g+v]*h;s[v]=_*S+y*R+m*A+p*P}return s}}const JS=new ai;class QS extends jf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return JS.fromArray(s).normalize().toArray(s),s}}const En={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ad={9728:Ut,9729:un,9984:lf,9985:ca,9986:Fr,9987:xi},Rd={33071:Ui,33648:ga,10497:oi},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$S={CUBICSPLINE:void 0,LINEAR:qr,STEP:jr},Nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Jr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),r.DefaultMaterial}function $i(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tM(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function nM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iM(r){let e;const t=r.extensions&&r.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uc(t.attributes):e=r.indices+":"+Uc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Uc(r.targets[n]);return e}function Uc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function jl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rM=new Ce;class oM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new dg(this.options.manager):this.textureLoader=new xg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $i(s,a,i),ti(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Vr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ic[i.type],a=Js[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Et(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ic[i.type],l=Js[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(_);y||(x=new l(a,p*f,i.count*f/h),y=new Dm(x,f/h),t.cache.add(_,y)),m=new hh(y,c,d%f/h,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),m=new Et(x,c,g);if(i.sparse!==void 0){const p=Ic.SCALAR,_=Js[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new _(o[1],y,i.sparse.count*p),R=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=S.length;A<P;A++){const b=S[A];if(m.setX(b,R[A*c]),c>=2&&m.setY(b,R[A*c+1]),c>=3&&m.setZ(b,R[A*c+2]),c>=4&&m.setW(b,R[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Ad[d.magFilter]||un,h.minFilter=Ad[d.minFilter]||xi,h.wrapS=Rd[d.wrapS]||oi,h.wrapT=Rd[d.wrapT]||oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==un,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Pt(x);m.needsUpdate=!0,d(m)}),t.load(Vr.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ti(u,o),u.userData.mimeType=o.mimeType||sM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Pf,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Cf,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Jr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Rn);const h=s.alphaMode||Nc.OPAQUE;if(h===Nc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Nc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Oi&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new _e(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Oi&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Oi){const u=s.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],Zt)}return s.emissiveTexture!==void 0&&o!==Oi&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,wt)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),ti(u,s),t.associations.set(u,{materials:e}),s.extensions&&$i(i,u,s),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Cd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=iM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Cd(new Wt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?eM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=o[f];let p;const _=l[f];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Nm(x,_):new xt(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===En.TRIANGLE_STRIP?p.geometry=Td(p.geometry,xf):m.mode===En.TRIANGLE_FAN&&(p.geometry=Td(p.geometry,Pl));else if(m.mode===En.LINES)p=new ph(x,_);else if(m.mode===En.LINE_STRIP)p=new $r(x,_);else if(m.mode===En.LINE_LOOP)p=new mh(x,_);else if(m.mode===En.POINTS)p=new gh(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&nM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ti(p,s),m.extensions&&$i(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&$i(i,u[0],s),u[0];const d=new ri;s.extensions&&$i(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(ah.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ra(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ce;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new uh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,v=d.length;y<v;y++){const S=d[y],R=f[y],A=g[y],P=x[y],b=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=n._createAnimationTracks(S,R,A,P,b);if(M)for(let L=0;L<M.length;L++)p.push(M[L])}const _=new rg(s,void 0,p);return ti(_,i),_})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,rM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Rf:l.length>1?h=new ri:l.length===1?h=l[0]:h=new _t,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),ti(h,s),s.extensions&&$i(n,h,s),s.matrix!==void 0){const u=new Ce;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ri;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&$i(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Pn||d instanceof Pt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Ci[s.path]===Ci.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ci[s.path]){case Ci.weights:l=rr;break;case Ci.rotation:l=or;break;case Ci.translation:case Ci.scale:l=ar;break;default:switch(n.itemSize){case 1:l=rr;break;case 2:case 3:default:l=ar;break}break}const h=i.interpolation!==void 0?$S[i.interpolation]:qr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ci[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jl(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof or?QS:jf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aM(r,e,t){const n=e.attributes,i=new et;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const h=jl(Js[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,c=new D;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=jl(Js[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Gt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Cd(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Xl[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),ti(r,e),aM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tM(r,e.targets,t):r})}const Oc=new WeakMap;class cM extends rs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Sa(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,wt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Zt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Oc.has(e)){const c=Oc.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[s]={resolve:l,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Oc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Wt;e.index&&t.setIndex(new Et(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new Et(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==wt)return;const n=new Le;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Ke.colorSpaceToWorking(n,wt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Sa(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=lM.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function lM(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let _,y;if(l.useUniqueIDs)y=h[m],_=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[m]]),y===-1)continue;_=a.GetAttribute(d,y)}const v=i(o,a,d,m,p,_);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),x.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,x=g*h.BYTES_PER_ELEMENT,m=s(o,h),p=o._malloc(x);a.GetAttributeDataArrayForAllPoints(c,u,m,x,p);const _=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:_,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Pd=[[/^(bone|suture|compact bone|spongy bone)/i,"#cdc7b9"],[/^teeth|^tooth|enamel|dentin/i,"#f4f1e8"],[/cartilage|meniscus|disc/i,"#a9c8d8"],[/^origin-|^end-/i,"#d24b45"],[/articular capsule|ligament|retinaculum|aponeurosis/i,"#cfd8dc"],[/tendon/i,"#ece6da"],[/fascia/i,"#d9c7b8"],[/bursa|synovial/i,"#8fb9d9"],[/flex|exten|abduct|adduct|rotat|levator|depressor|sphincter|muscle|constrictor|tensor|dilator|biarticular|pronat|supinat/i,"#9a3832"],[/artery|arter|aorta/i,"#c8323c"],[/vein|venous|vena/i,"#3a62b8"],[/heart|myocard/i,"#b33a3a"],[/nerve|neur|ganglion|plexus|spinal cord/i,"#e8c547"],[/brain|grey|gray|cortex|white matter|cerebr/i,"#e7b8b0"],[/lymph/i,"#8fbf6a"],[/gland|thymus|thyroid/i,"#d4a373"],[/lung|bronch|trachea|pleura/i,"#e59a9a"],[/liver|hepat/i,"#8b3a2f"],[/stomach|intestin|colon|digest|esophag|oesophag|duoden|jejun|caec|rect/i,"#d98b7a"],[/kidney|renal|ureter|bladder|urethra/i,"#a0524a"],[/eye|cornea|lens|retina|sclera/i,"#f2f2f2"],[/skin/i,"#e3b49a"],[/fat|adipose/i,"#f2d27a"]];function hM(r,e,t){const n=r.replace(/\.\d{3}$/,"");for(const[i,s]of Pd)if(i.test(n))return s;for(const[i,s]of Pd)if(i.test(e))return s;return t}const uM={bone:{roughness:.74,specular:.45,sheen:0,scatter:.06,detail:1,bump:.3,vary:1,scale:2600},teeth:{roughness:.32,specular:.8,sheen:0,scatter:.08,detail:3,bump:.05,vary:.3,scale:400},cartilage:{roughness:.38,specular:.7,sheen:0,scatter:.12,detail:3,bump:.08,vary:.4,scale:300},attachment:{roughness:.62,specular:.4,sheen:.4,scatter:.1,detail:2,bump:.4,vary:.8,scale:1400},ligament:{roughness:.46,specular:.7,sheen:.5,scatter:.06,detail:2,bump:.45,vary:.6,scale:1600},tendon:{roughness:.42,specular:.75,sheen:.55,scatter:.05,detail:2,bump:.45,vary:.5,scale:1800},fascia:{roughness:.5,specular:.55,sheen:.4,scatter:.06,detail:2,bump:.3,vary:.5,scale:1200},bursa:{roughness:.3,specular:.8,sheen:0,scatter:.1,detail:3,bump:.08,vary:.3,scale:300},muscle:{roughness:.66,specular:.32,sheen:.75,scatter:.22,detail:2,bump:.75,vary:1,scale:1500},artery:{roughness:.4,specular:.65,sheen:0,scatter:.12,detail:3,bump:.1,vary:.4,scale:400},vein:{roughness:.4,specular:.65,sheen:0,scatter:.12,detail:3,bump:.1,vary:.4,scale:400},heart:{roughness:.55,specular:.45,sheen:.5,scatter:.18,detail:2,bump:.45,vary:.8,scale:900},nerve:{roughness:.5,specular:.55,sheen:.5,scatter:.08,detail:2,bump:.4,vary:.6,scale:2e3},brain:{roughness:.6,specular:.45,sheen:.2,scatter:.14,detail:3,bump:.15,vary:.5,scale:350},lymph:{roughness:.55,specular:.5,sheen:.1,scatter:.1,detail:3,bump:.2,vary:.5,scale:450},gland:{roughness:.52,specular:.5,sheen:.1,scatter:.14,detail:3,bump:.25,vary:.6,scale:500},lung:{roughness:.6,specular:.4,sheen:.2,scatter:.16,detail:3,bump:.3,vary:.7,scale:380},organ:{roughness:.45,specular:.55,sheen:.1,scatter:.16,detail:3,bump:.2,vary:.6,scale:350},eye:{roughness:.2,specular:1,sheen:0,scatter:.05,detail:0,bump:0,vary:0,scale:1},skin:{roughness:.6,specular:.45,sheen:.2,scatter:.2,detail:1,bump:.12,vary:.4,scale:1600},fat:{roughness:.5,specular:.5,sheen:.1,scatter:.15,detail:3,bump:.3,vary:.6,scale:400},other:{roughness:.6,specular:.5,sheen:0,scatter:.05,detail:3,bump:.1,vary:.3,scale:400}},Ld=[[/^origin-|^end-/i,"attachment"],[/^teeth|^tooth|enamel|dentin/i,"teeth"],[/cartilage|meniscus|disc/i,"cartilage"],[/^(bone|suture|compact bone|spongy bone)/i,"bone"],[/articular capsule|ligament|retinaculum|aponeurosis|membrane/i,"ligament"],[/tendon/i,"tendon"],[/fascia|septum/i,"fascia"],[/bursa|synovial|sheath/i,"bursa"],[/heart|myocard|atrium|ventricle/i,"heart"],[/artery|arter|aorta|trunk/i,"artery"],[/vein|venous|vena|sinus/i,"vein"],[/nerve|neur|ganglion|plexus|spinal cord|root/i,"nerve"],[/brain|grey|gray|cortex|white matter|cerebr|cerebell|gyrus/i,"brain"],[/lymph|node|tonsil|spleen|thymus/i,"lymph"],[/gland|thyroid|hypophysis|suprarenal/i,"gland"],[/lung|bronch|trachea|pleura/i,"lung"],[/flex|exten|abduct|adduct|rotat|levator|depressor|sphincter|muscle|constrictor|tensor|dilator|biarticular|pronat|supinat|head of|belly/i,"muscle"],[/liver|hepat|stomach|intestin|colon|digest|esophag|oesophag|duoden|jejun|ile|caec|rect|kidney|renal|ureter|bladder|urethra|pancrea|gall|testis|prostat|penis|uter|ovar/i,"organ"],[/eye|cornea|lens|retina|sclera/i,"eye"],[/skin|region|hair/i,"skin"],[/fat|adipose/i,"fat"]];function dM(r,e,t){const n=r.replace(/\.\d{3}$/,"");for(const[i,s]of Ld)if(i.test(n))return s;for(const[i,s]of Ld)if(i.test(e))return s;return t==="skeletal"?"bone":t==="muscular"?"muscle":t==="regions"?"skin":"other"}function fM(r,e,t){const n=uM[e];r.roughness=n.roughness,r.metalness=0,r instanceof Dn&&(r.specularIntensity=n.specular,r.sheen=n.sheen,r.sheenColor.copy(r.color).lerp(new Le("#fff1e8"),.45),r.sheenRoughness=.5),t.computeBoundingBox();const i=t.boundingBox.getSize(new D),s=i.x>=i.y&&i.x>=i.z?[1,0,0]:i.y>=i.z?[0,1,0]:[0,0,1];r.userData.tissue={detail:n.detail,bump:n.bump,vary:n.vary,scale:n.scale,scatter:n.scatter,axis:s}}const pM=`
float tHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float tNoise(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(tHash(i), tHash(i + vec3(1,0,0)), f.x), mix(tHash(i + vec3(0,1,0)), tHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(tHash(i + vec3(0,0,1)), tHash(i + vec3(1,0,1)), f.x), mix(tHash(i + vec3(0,1,1)), tHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float tFbm(vec3 p) { return 0.55 * tNoise(p) + 0.3 * tNoise(p * 2.03) + 0.15 * tNoise(p * 4.11); }
vec3 tTint = vec3(1.0);
// Height field (relief) per detail kind; also sets tTint (colour variation).
float tHeight(vec3 p) {
  vec3 q = p * uTScale;
  if (uTDetail == 1) {
    // Bone: blotchy warm/grey mottling a few centimetres across, a faint fine grain, sparse pores.
    float mott = tFbm(p * 30.0);
    float mott2 = tFbm(p * 110.0 + 3.7);
    tTint = mix(vec3(0.90, 0.91, 0.93), vec3(1.06, 1.02, 0.90), mott) * (0.95 + 0.1 * mott2);
    float pores = smoothstep(0.87, 0.98, tNoise(q * 0.45 + 11.3));
    tTint *= 1.0 - 0.08 * pores;
    return 0.25 * tNoise(q) + 0.35 * mott2 - 0.6 * pores;
  }
  if (uTDetail == 2) {
    // Fibres: fine striation along the axis, bundles (fascicles) with faint grooves between them.
    vec3 a = normalize(uTAxis);
    float along = dot(q, a);
    vec3 across = q - along * a;
    float fib = tNoise(across * 2.4 + a * along * 0.04);
    float fasc = tFbm(across * 0.28 + a * along * 0.015);
    float groove = 1.0 - smoothstep(0.0, 0.08, abs(fract(fasc * 4.0) - 0.5) - 0.38);
    tTint = vec3(0.82 + 0.3 * fasc) * (1.0 - 0.12 * groove);
    return 0.55 * fib + 0.45 * fasc - 0.35 * groove;
  }
  float m = tFbm(q * 0.6);
  tTint = vec3(0.93 + 0.14 * m);
  return m;
}
`;function mM(r,e){const t=r.userData.tissue;e.uniforms.uTDetail={value:t?.detail??0},e.uniforms.uTBump={value:t?.bump??0},e.uniforms.uTVary={value:t?.vary??0},e.uniforms.uTScale={value:t?.scale??1},e.uniforms.uTScatter={value:t?.scatter??0},e.uniforms.uTAxis={value:new D(...t?.axis??[0,1,0])},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTObj = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTObj;
uniform int uTDetail;
uniform float uTBump;
uniform float uTVary;
uniform float uTScale;
uniform float uTScatter;
uniform vec3 uTAxis;
${pM}`).replace("#include <color_fragment>",`#include <color_fragment>
      float tH = uTDetail > 0 ? tHeight(vTObj) : 0.5;
      diffuseColor.rgb *= mix(vec3(1.0), tTint, uTVary);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      if (uTDetail > 0 && gl_FrontFacing) {
        vec3 tPos = -vViewPosition;
        vec3 dpx = dFdx(tPos), dpy = dFdy(tPos);
        float fade = clamp(1.0 - length(tPos) / 2.5, 0.0, 1.0);
        float k = uTBump * 0.0005 * fade;
        float hx = dFdx(tH) * k, hy = dFdy(tH) * k;
        vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
        float det = dot(dpx, r1);
        vec3 grad = sign(det) * (hx * r1 + hy * r2);
        if (abs(det) > 1e-12) normal = normalize(abs(det) * normal - grad);
      }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      if (uTScatter > 0.0) {
        float tRim = pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 2.0);
        totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.62, 0.52) * uTScatter * (0.35 + tRim);
      }`)}class gM{constructor(e,t,n){this.catalog=e,this.root=t,this.state=n;const i=new cM;i.setDecoderPath("draco/"),this.gltf.setDRACOLoader(i)}gltf=new AS;files=new Map;active=new Set;pending=new Map;isLoaded(e){return this.active.has(e)}isLoading(e){return this.pending.has(e)}loadedSystems(){return[...this.active]}load(e,t){if(this.active.has(e.id))return Promise.resolve();let n=this.pending.get(e.id);return n||(n=this.loadFile(e,t).then(i=>{const s=i.get(e.id)??new Map;for(const[o,a]of s){const c=this.catalog.nodes[o];this.state.register(o,a,c?.layer??0,c?.side??"m",c?.kind==="attachment")}this.state.hideInitially([...s.keys()].filter(o=>this.catalog.nodes[o]?.hiddenByDefault)),this.active.add(e.id)}).finally(()=>this.pending.delete(e.id)),this.pending.set(e.id,n),n)}loadFile(e,t){let n=this.files.get(e.file);return n||(n=this.gltf.loadAsync(e.file,i=>t?.(i.total?i.loaded/i.total:i.loaded/Math.max(e.bytes,1))).then(i=>{const s=i.scene;s.name=`file:${e.file}`;const o=new Map;return s.traverse(a=>{if(!a.isMesh)return;const c=a,l=c.userData.name??c.parent?.userData.name??c.name;c.name=l;const h=this.catalog.nodes[l],u=c.material;c.material=xM(u,hM(u.name,h?.name??"",h?.color??e.color)),fM(c.material,dM(u.name,h?.name??"",h?.system??e.id),c.geometry),this.state.onMaterial(c.material),c.geometry.computeBoundingBox(),c.geometry.computeBoundingSphere(),c.visible=!1;const d=h?.system??e.id;o.has(d)||o.set(d,new Map);const f=o.get(d);f.set(l,[...f.get(l)??[],c])}),this.root.add(s),o}),n.catch(()=>this.files.delete(e.file)),this.files.set(e.file,n),n)}}function xM(r,e){const t=new Dn({color:new Le(e),roughness:.62,metalness:0,side:Rn});return t.name=r.name,r!==t&&r.dispose(),t}class vM{constructor(e,t,n,i){this.list=e,this.importInput=t,this.store=n,this.host=i,t.addEventListener("change",()=>this.importFile()),this.render()}async add(){const e={id:crypto.randomUUID(),title:this.host.suggestTitle(),notes:"",created:Date.now(),...this.host.capture()};await this.store.put(e),await this.render(),this.host.toast("Bookmark saved")}async exportFile(){const e=new Blob([await this.store.exportJson()],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=`anatomix-3d-bookmarks-${new Date().toISOString().slice(0,10)}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}async importFile(){const e=this.importInput.files?.[0];if(this.importInput.value="",!!e)try{const t=await this.store.importJson(await e.text());await this.render(),this.host.toast(`Imported ${t} bookmark${t===1?"":"s"}`)}catch(t){this.host.toast(t instanceof Error?t.message:"Import failed")}}async render(){const e=await this.store.all();if(this.list.replaceChildren(),!e.length){const t=document.createElement("li");t.className="empty",t.textContent="No bookmarks yet. Set up a view and press “Save current view”.",this.list.append(t);return}for(const t of e)this.list.append(this.item(t))}item(e){const t=document.createElement("li");t.className="bookmark";const n=document.createElement("img");n.src=e.thumbnail,n.alt=e.title,n.addEventListener("click",()=>void this.host.open(e));const i=document.createElement("div"),s=document.createElement("div");s.className="row";const o=document.createElement("span");o.className="title",o.textContent=e.title,o.title="Open (double-click to rename)",o.addEventListener("click",()=>void this.host.open(e)),o.addEventListener("dblclick",async()=>{const h=prompt("Bookmark name",e.title)?.trim();h&&(e.title=h,await this.store.put(e),o.textContent=h)});const a=document.createElement("button");a.textContent="🗑",a.title="Delete",a.addEventListener("click",async()=>{confirm(`Delete bookmark “${e.title}”?`)&&(await this.store.remove(e.id),await this.render())});const c=document.createElement("button");c.textContent="🔗",c.title="Copy a link to this view",c.addEventListener("click",()=>void this.host.share(e)),s.append(o,c,a);const l=document.createElement("textarea");return l.placeholder="Notes…",l.value=e.notes,l.addEventListener("change",async()=>{e.notes=l.value,await this.store.put(e)}),i.append(s,l),t.append(n,i),t}}const Dd=["origin","insertion","movementCategory","action","nerveSupply","bloodSupply"];let Id=null;function _M(){return Id??=fetch("data/muscle-facts.json",{cache:"no-cache"}).then(r=>r.ok?r.json():{entries:{}}).then(r=>r.entries??{}).catch(()=>({})),Id}async function yM(r,e){const t=await _M(),n=r.nodes[e];if(!n)return null;const i=n.parent?r.nodes[n.parent]:void 0,s=[{base:n.base,via:null}];i&&i.kind!=="system"&&t[i.base]&&i.base!==n.base&&s.push({base:i.base,via:i.base});for(const a of n.children){const c=r.nodes[a];c&&c.kind!=="attachment"&&c.kind!=="landmark"&&t[c.base]&&!s.some(l=>l.base===c.base)&&s.push({base:c.base,via:c.base})}if(!t[n.base]&&s.length===1)return null;const o=Object.fromEntries(Dd.map(a=>[a,[]]));for(const{base:a,via:c}of s){const l=t[a];if(l)for(const h of Dd){const u=l[h];if(!c&&u?.status==="NA"){o[h].push({values:[],source:null,via:null,na:!0});continue}if(!u||u.value==null)continue;const d=Array.isArray(u.value)?u.value:[u.value],f=new Set(o[h].flatMap(g=>g.values));c&&d.every(g=>f.has(g))||d.length&&o[h].push({values:d,source:u.source??null,via:c??u.via??null})}}return o}const SM={arterial:new Set(["Left ventricle","Right ventricle","Heart"]),venous:new Set(["Right atrium","Left atrium","Heart"])},Ni=r=>/\b(artery|arteries|aorta|aortic|arterial|trunk|arcade|arch)\b/i.test(r)&&!Li(r);function Li(r){return/\b(vein|veins|vena|venae|sinus|venous)\b/i.test(r)}const Nd=r=>/^(heart|left ventricle|right ventricle|left atrium|right atrium)$/i.test(r);class MM{out=new Map;inn=new Map;cont=new Map;variantOf=new Map;byBase=new Map;groupsByBase=new Map;data;catalog;constructor(e,t){this.data=e,this.catalog=t;for(const n of e.edges){if(n.rel==="continuous_with"){for(const[o,a]of[[n.from,n.to],[n.to,n.from]])this.cont.has(o)||this.cont.set(o,[]),this.cont.get(o).push({to:a,source:n.source});continue}this.out.has(n.from)||this.out.set(n.from,new Map);const i=this.out.get(n.from);i.has(n.rel)||i.set(n.rel,[]),i.get(n.rel).push({to:n.to,source:n.source}),this.inn.has(n.to)||this.inn.set(n.to,new Map);const s=this.inn.get(n.to);s.has(n.rel)||s.set(n.rel,[]),s.get(n.rel).push({from:n.from,source:n.source})}for(const[n,i]of Object.entries(e.nodes)){i.variants&&(this.variantOf.set(i.variants.l,n),this.variantOf.set(i.variants.r,n));for(const s of i.parts??[])this.variantOf.set(s,n)}for(const n of Object.values(t.nodes))!n.mesh&&n.kind==="group"&&(this.groupsByBase.has(n.base)||this.groupsByBase.set(n.base,[]),this.groupsByBase.get(n.base).push(n.id)),!(!n.mesh||n.kind==="attachment")&&(this.byBase.has(n.base)||this.byBase.set(n.base,[]),this.byBase.get(n.base).push(n.id))}get source(){return this.data._meta.source}idsFor(e,t){const n=this.data.nodes[e];if(n?.variants)return t==="m"?[...this.idsFor(n.variants.l,"m"),...this.idsFor(n.variants.r,"m")]:this.idsFor(n.variants[t],t);if(n?.parts)return n.parts.flatMap(o=>this.idsFor(o,t));const i=this.byBase.get(e)??(this.groupsByBase.get(e)??[]).flatMap(o=>this.meshesUnder(o));if(t==="m")return i;const s=i.filter(o=>this.catalog.nodes[o]?.side===t);return s.length?s:i.filter(o=>this.catalog.nodes[o]?.side==="m")}chain(e,t){const n=this.catalog.nodes[e];if(!n)return{paths:[],status:"none",start:[],inheritedFrom:null,notApplicable:null};const i=n.side,s=t==="arterial"?Ni:Li;if(t==="venous"&&Ni(n.base))return{paths:[],status:"none",start:[],inheritedFrom:null,notApplicable:"artery"};if(t==="arterial"&&Li(n.base))return{paths:[],status:"none",start:[],inheritedFrom:null,notApplicable:"vein"};const o=t==="arterial"?"arterial_supply":"venous_drainage";let a=[],c=null;if(s(n.base)&&this.known(n.base))a=[{base:n.base,source:null}];else for(let u=n;u&&u.kind!=="system";u=u.parent?this.catalog.nodes[u.parent]:void 0){const d=this.edgesFrom(u.base,o).filter(f=>s(f.to)||s(this.sided(f.to,i)));if(d.length){a=d.map(f=>({base:f.to,source:f.source})),u!==n&&(c=u.base);break}}if(!a.length)return{paths:[],status:"none",start:[],inheritedFrom:null,notApplicable:null};const l=[];let h=!0;for(const u of a){const d=this.sided(u.base,i),f=this.toRoot(d,t,i);f.reached||(h=!1);const g=f.steps;u.source&&g.push({base:n.base,ids:[e],link:{rel:o,source:u.source}}),l.push(g)}return{paths:l,status:h?"full":"partial",start:a.map(u=>u.base),inheritedFrom:c,notApplicable:null}}reverse(e){const t=this.catalog.nodes[e];if(!t)return{supplies:[],drains:[],branches:[]};const n=[t.base,this.variantOf.get(t.base)].filter(s=>!!s),i=s=>[...new Set(n.flatMap(o=>(this.inn.get(o)?.get(s)??[]).map(a=>a.from)))];return{supplies:i("arterial_supply").filter(s=>!Li(s)&&!Ni(s)),drains:i("venous_drainage").filter(s=>!Li(s)&&!Ni(s)),branches:[...new Set([...i("branch_of"),...i("venous_drainage").filter(Li)])]}}meshesUnder(e){const t=[],n=[e];for(;n.length;){const i=this.catalog.nodes[n.pop()];i&&(i.mesh&&i.kind!=="attachment"&&t.push(i.id),n.push(...i.children))}return t}known(e){return this.out.has(e)||this.inn.has(e)||this.cont.has(e)||this.variantOf.has(e)}edgesFrom(e,t){const n=this.out.get(e)?.get(t)??[];if(n.length)return n;const i=this.variantOf.get(e);return i?this.out.get(i)?.get(t)??[]:[]}sided(e,t){const n=this.data.nodes[e]?.variants;return n&&t!=="m"?n[t]:e}toRoot(e,t,n){const i=SM[t],s=t==="arterial"?"branch_of":"venous_drainage",o=f=>Nd(f)||(t==="arterial"?Ni(f):Li(f)),a=new Map([[e,0]]),c=new Map([[e,null]]),l=[e];let h=i.has(e)?e:null;for(;l.length&&!h;){l.sort((x,m)=>a.get(x)-a.get(m));const f=l.shift();if(i.has(f)){h=f;break}const g=[...this.edgesFrom(f,s).filter(x=>t==="arterial"||Li(x.to)||Nd(x.to)).map(x=>({to:x.to,rel:s,source:x.source,w:1})),...[...this.cont.get(f)??[],...this.cont.get(this.variantOf.get(f)??"")??[]].filter(x=>o(x.to)).map(x=>({to:x.to,rel:"continuous_with",source:x.source,w:4}))];for(const x of g){const m=this.sided(x.to,n),p=a.get(f)+x.w;p>=(a.get(m)??1/0)||(a.set(m,p),c.set(m,{from:f,rel:x.rel,source:x.source}),l.includes(m)||l.push(m))}if(a.size>600)break}if(!h)return{steps:this.upward(e,s,n),reached:!1};const u=[];for(let f=h;f!==void 0;f=c.get(f)?.from)u.push(f);return{steps:u.map((f,g)=>{const x=g>0?c.get(u[g-1]):null;return{base:f,ids:this.idsFor(f,n),link:x?{rel:x.rel,source:x.source}:null}}),reached:!0}}upward(e,t,n){const i=[e],s=[null];for(let o=e,a=0;a<30;a++){const c=this.edgesFrom(o,t)[0];if(!c)break;const l=this.sided(c.to,n);if(i.includes(l))break;i.push(l),s.push({rel:t,source:c.source}),o=l}return i.reverse(),s.reverse(),i.map((o,a)=>({base:o,ids:this.idsFor(o,n),link:a>0?s[a-1]:null}))}}const Ud=new Map;function ql(r){let e=Ud.get(r);return e||(e=fetch(`data/i18n/names-${r}.json`,{cache:"no-cache"}).then(t=>t.ok?t.json():{}).catch(()=>({})),Ud.set(r,e)),e}class bM extends EventTarget{constructor(e){super(),this.catalog=e}languages=[];lang={code:"en",name:"English",dir:"ltr",coverage:1,words:{left:"left",right:"right",origin:"origin",insertion:"insertion"}};names={};latinNames={};ta2={};get code(){return this.lang.code}get dir(){return this.lang.dir}async init(e){const[t,n,i]=await Promise.all([fetch("data/i18n/languages.json",{cache:"no-cache"}).then(s=>s.ok?s.json():[]).catch(()=>[]),ql("la"),fetch("data/i18n/ta2.json",{cache:"no-cache"}).then(s=>s.ok?s.json():{}).catch(()=>({}))]);this.languages=t,this.latinNames=n,this.ta2=i,await this.setLanguage(e)}async setLanguage(e){const t=this.languages.find(n=>n.code===e)??this.languages.find(n=>n.code==="en");t&&(this.names=t.code==="en"?{}:await ql(t.code),this.lang=t,this.dispatchEvent(new Event("change")))}name(e){const t=this.catalog.nodes[e];if(!t)return e;if(this.lang.code==="en")return t.name;const n=this.translate(t.base)??t.base;return this.decorate(t,n)}systemName(e){const t=this.catalog.systems.find(n=>n.id===e);return t?this.lang.code==="en"?t.name:this.translate(t.name)??t.name:e}term(e){return this.lang.code==="en"?e:this.translate(e)??e}latin(e){const t=this.catalog.nodes[e];if(!t)return null;const n=this.latinNames[t.base],i=Array.isArray(n)?n[0]:n;return i?{name:i,ta2:this.ta2[t.base]??null}:null}translate(e){const t=this.names[e];return(Array.isArray(t)?t[0]:t)??null}decorate(e,t){const n=this.lang.words,i=e.side==="l"?n.left??"left":e.side==="r"?n.right??"right":null;return e.part?`${t} – ${(e.part==="origin"?n.origin:n.insertion)??e.part}${i?` (${i})`:""}`:i&&e.mesh?`${t} (${i})`:t}}async function qf(r){const e=new Map,t=await Promise.all(r.map(async n=>[n.code,await ql(n.code)]));for(const[n,i]of t)for(const[s,o]of Object.entries(i)){const a=e.get(s)??[];a.push({code:n,names:Array.isArray(o)?o:[o]}),e.set(s,a)}return e}class wM{constructor(e,t,n,i,s){this.input=e,this.list=t,this.catalog=n,this.i18n=i,this.onPick=s,this.build(new Map),e.addEventListener("input",()=>this.update()),e.addEventListener("focus",()=>{this.loadAllLanguages().then(()=>this.update()),this.update()}),e.addEventListener("blur",()=>setTimeout(()=>t.hidden=!0,150)),e.addEventListener("keydown",o=>this.onKey(o))}entries=[];words=new Map;results=[];active=0;allLoaded=null;focus(){this.input.focus(),this.input.select()}async query(e,t=10){return await this.loadAllLanguages(),this.rank(e).slice(0,t).map(n=>({id:n.e.id,name:this.i18n.name(n.e.id),matched:n.matched?`${n.matched.text} [${n.matched.code}]`:null}))}loadAllLanguages(){return this.allLoaded??=qf(this.i18n.languages).then(e=>this.build(e)),this.allLoaded}build(e){this.entries=[],this.words.clear();for(const t of Object.values(this.catalog.nodes)){if(t.kind==="system")continue;const n=[{text:t.name,code:"en"}];t.base!==t.name&&n.push({text:t.base,code:"en"});for(const{code:o,names:a}of e.get(t.base)??[])for(const c of a)n.push({text:c,code:o});const i={id:t.id,system:t.system,mesh:t.mesh,attachment:t.kind==="attachment",terms:n,norms:n.map(o=>Gs(o.text))},s=this.entries.push(i)-1;for(const o of i.norms)for(const a of o.split(" ")){if(!a)continue;let c=this.words.get(a);c||this.words.set(a,c=new Set),c.add(s)}}}rank(e){const t=Gs(e);if(t.length<2)return[];const n=t.split(" ").filter(Boolean);let i=null;for(const o of n){const a=new Map,c=o.length>=8?2:o.length>=4?1:0;for(const[l,h]of this.words){let u=0;if(l===o?u=3:l.startsWith(o)?u=2:c&&Math.abs(l.length-o.length)<=c&&Yl(l,o,c)<=c?u=1:c&&l.length>o.length&&Yl(l.slice(0,o.length),o,c)<=c&&(u=.8),!!u)for(const d of h)(a.get(d)??0)<u&&a.set(d,u)}if(i===null)i=a;else{const l=new Map;for(const[h,u]of i){const d=a.get(h);d&&l.set(h,u+d)}i=l}if(!i.size)break}const s=[];for(const[o,a]of i??[]){const c=this.entries[o];let l=-1,h=-1/0;c.norms.forEach((x,m)=>{let p=0;x===t?p+=50:x.startsWith(t)?p+=25:x.includes(t)&&(p+=10),c.terms[m].code===this.i18n.code&&(p+=2),p>h&&(h=p,l=m)});let u=a*10+h;c.mesh||(u+=4),c.attachment&&(u-=15),u-=c.terms[0].text.length/25;const d=c.terms[l],f=this.i18n.name(c.id),g=d&&Gs(d.text)!==Gs(f)&&d.code!==this.i18n.code?d:null;s.push({e:c,matched:g,score:u})}return s.sort((o,a)=>a.score-o.score),s}update(){const e=this.input.value;if(Gs(e).length<2){this.list.hidden=!0;return}this.results=this.rank(e).slice(0,40),this.active=0,this.render()}render(){if(this.list.replaceChildren(),!this.results.length){const e=document.createElement("li");e.textContent="No matches",e.className="empty",this.list.append(e)}this.results.forEach((e,t)=>{const n=document.createElement("li");n.classList.toggle("active",t===this.active);const i=document.createElement("span"),s=document.createElement("span");if(s.textContent=this.i18n.name(e.e.id),s.dir="auto",i.append(s),e.matched){const a=document.createElement("span");a.className="alt",a.dir="auto",a.textContent=`${e.matched.text} · ${e.matched.code.toUpperCase()}`,i.append(a)}const o=document.createElement("span");o.className="sys",o.textContent=this.i18n.systemName(e.e.system),n.append(i,o),n.addEventListener("mousedown",a=>{a.preventDefault(),this.choose(t)}),this.list.append(n)}),this.list.hidden=!1}onKey(e){if(e.key==="Escape"){this.input.blur();return}this.list.hidden||!this.results.length||(e.key==="ArrowDown"||e.key==="ArrowUp"?(e.preventDefault(),this.active=(this.active+(e.key==="ArrowDown"?1:-1)+this.results.length)%this.results.length,this.render()):e.key==="Enter"&&(e.preventDefault(),this.choose(this.active)))}choose(e){const t=this.results[e];t&&(this.list.hidden=!0,this.input.value=this.i18n.name(t.e.id),this.input.blur(),this.onPick(t.e.id))}}function Gs(r){return r.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim()}function Yl(r,e,t){const n=r.length,i=e.length;if(Math.abs(n-i)>t)return t+1;let s=new Array(i+1).fill(0),o=Array.from({length:i+1},(a,c)=>c);for(let a=1;a<=n;a++){const c=new Array(i+1);c[0]=a;let l=c[0];for(let h=1;h<=i;h++){const u=r[a-1]===e[h-1]?0:1;let d=Math.min(o[h]+1,c[h-1]+1,o[h-1]+u);a>1&&h>1&&r[a-1]===e[h-2]&&r[a-2]===e[h-1]&&(d=Math.min(d,s[h-2]+1)),c[h]=d,d<l&&(l=d)}if(l>t)return t+1;s=o,o=c}return o[i]}const TM=2;class EM{constructor(e,t){this.catalog=e,this.i18n=t}names=null;facts=null;graph=null;async prepare(e){if(e.includes("name")&&!this.names){const t=await qf(this.i18n.languages);this.names=new Map([...t].map(([n,i])=>[n,i.flatMap(s=>s.names)]))}(e.includes("origin")||e.includes("insertion"))&&!this.facts&&(this.facts=await fetch("data/muscle-facts.json",{cache:"no-cache"}).then(t=>t.json()).then(t=>t.entries??{}).catch(()=>({}))),(e.includes("branch")||e.includes("supply"))&&!this.graph&&(this.graph=await fetch("data/vascular-graph.json",{cache:"no-cache"}).then(t=>t.json()).catch(()=>null))}pool(e){const t=new Set;for(const n of e)for(const i of rn(this.catalog,n)){const s=this.catalog.nodes[i];s.kind==="structure"&&!s.hiddenByDefault&&t.add(i)}return[...t]}make(e,t,n,i,s){const o=[],a=t.filter(d=>d==="find"||d==="name"||d==="choice");for(const d of e)if(s(d))for(const f of a){const g=this.meshQuestion(f,d,e);g&&o.push(g)}t.includes("origin")&&o.push(...this.factQuestions("origin",e,s)),t.includes("insertion")&&o.push(...this.factQuestions("insertion",e,s)),t.includes("branch")&&o.push(...this.branchQuestions(e,s)),t.includes("supply")&&o.push(...this.supplyQuestions(e,s));const c=d=>{const f=i[d.key];return f?f.streak===0?2.5:1/(1+f.streak):3},l=[],h=new Set,u=o.map(d=>({q:d,w:c(d)*(.5+Math.random())}));u.sort((d,f)=>f.w-d.w);for(const{q:d}of u){if(l.length>=n)break;h.has(d.key+d.kind)||l.some(f=>f.key===d.key)||(h.add(d.key+d.kind),l.push(d))}return Pi(l)}grade(e,t){if(t==null)return!1;if(e.kind==="find"){for(let n=this.catalog.nodes[t];n;n=n.parent?this.catalog.nodes[n.parent]:void 0)if(n.id===e.correct[0])return!0;return!1}return e.kind==="name"?e.target?this.nameMatches(t,e.target):!1:e.correct.includes(t)}nameMatches(e,t){const n=this.catalog.nodes[t];if(!n)return!1;const i=new Set(["left","right","l","r","sinister","dexter","sinistra","dextra"]),s=c=>Gs(c).split(" ").filter(l=>l&&!i.has(l)).join(" "),o=s(e);return o.length<2?!1:[n.base,n.name,...this.names?.get(n.base)??[]].some(c=>{const l=s(c),h=l.length>=8?2:l.length>=4?1:0;return Yl(o,l,h)<=h})}meshQuestion(e,t,n){const i=this.i18n.name(t),s=`id:${t}`;if(e==="find")return{kind:e,key:s,target:t,prompt:`Click the ${i}`,correct:[t],reveal:i};if(e==="name")return{kind:e,key:s,target:t,prompt:"Type the name of the highlighted structure",correct:[i],reveal:i};const o=this.catalog.nodes[t],a=n.filter(h=>h!==t&&this.catalog.nodes[h]?.parent===o.parent),c=n.filter(h=>h!==t&&!a.includes(h)),l=[i];for(const h of[...Pi(a),...Pi(c)]){const u=this.i18n.name(h);if(!(l.includes(u)||this.catalog.nodes[h].base===o.base)&&(l.push(u),l.length===4))break}return l.length<2?null:{kind:e,key:s,target:t,prompt:"Which structure is highlighted?",options:Pi(l),correct:[i],reveal:i}}factQuestions(e,t,n){if(!this.facts)return[];const i=c=>{const l=this.facts[c]?.[e];return!l?.value||!l.source||l.source.startsWith("wikipedia:")?null:{values:Array.isArray(l.value)?l.value:[l.value],source:l.source}},s=[...new Set(Object.keys(this.facts).flatMap(c=>i(c)?.values??[]))],o=[],a=new Set;for(const c of t){const l=this.catalog.nodes[c]?.base;if(!l||a.has(l))continue;const h=i(l);if(!h)continue;a.add(l);const u=h.values.map(f=>this.i18n.term(f)),d=Pi(s.filter(f=>!h.values.includes(f))).slice(0,3).map(f=>this.i18n.term(f));o.push({kind:e,key:`${e}:${l}`,target:n(c)?c:null,prompt:`Where does the ${this.i18n.term(l)} ${e==="origin"?"originate":"insert"}?`,options:Pi([u[0],...d]),correct:u,reveal:u.join(", "),source:h.source})}return o}branchQuestions(e,t){if(!this.graph)return[];const n=new Map;for(const s of this.graph.edges)s.rel!=="branch_of"||!Ni(s.from)||!Ni(s.to)||n.set(s.from,[...n.get(s.from)??[],{to:s.to,source:s.source}]);const i=[...new Set([...n.values()].flat().map(s=>s.to))];return this.edgeQuestions("branch",e,t,n,i,s=>`${s}: a branch of which artery?`)}supplyQuestions(e,t){if(!this.graph)return[];const n=new Map;for(const s of this.graph.edges)s.rel!=="arterial_supply"||!Ni(s.to)||n.set(s.from,[...n.get(s.from)??[],{to:s.to,source:s.source}]);const i=[...new Set([...n.values()].flat().map(s=>s.to))];return this.edgeQuestions("supply",e,t,n,i,s=>`${s}: which artery supplies it?`)}edgeQuestions(e,t,n,i,s,o){const a=[],c=new Set;for(const l of t){const h=this.catalog.nodes[l];if(!h||c.has(h.base))continue;let u=h.base,d=i.get(u);if(!d&&h.parent&&(u=this.catalog.nodes[h.parent]?.base??u,d=i.get(u)),!d?.length||c.has(u))continue;c.add(u),c.add(h.base);const f=new Set(d.map(m=>m.to)),g=[...f].map(m=>this.i18n.term(m)),x=Pi(s.filter(m=>!f.has(m))).slice(0,3).map(m=>this.i18n.term(m));a.push({kind:e,key:`${e}:${u}`,target:n(l)?l:null,prompt:o(this.i18n.term(u)),options:Pi([g[0],...x]),correct:g,reveal:g.join(", "),source:[...new Set(d.map(m=>m.source))].join(" ")})}return a}}function AM(r,e,t){const n=r[e]??={seen:0,correct:0,streak:0,last:0};n.seen++,t?(n.correct++,n.streak++):n.streak=0,n.last=Date.now()}function RM(r,e){let t=0,n=0;for(const i of e){const s=r[`id:${i}`];s&&(n++,s.streak>=TM&&t++)}return{mastered:t,seen:n,total:e.length}}function Yf(r){const e=/^wikidata:(Q\d+)/.exec(r);if(e)return{label:`Wikidata ${e[1]}`,url:`https://www.wikidata.org/wiki/${e[1]}`};const t=/^uberon:UBERON:(\d+)/.exec(r);if(t)return{label:`Uberon ${t[1]}`,url:`http://purl.obolibrary.org/obo/UBERON_${t[1]}`};if(r==="z-anatomy")return{label:"Z-Anatomy attachment areas",url:null};if(r.startsWith("wikipedia:")){const n=r.slice(10);return{label:"Wikipedia",url:`https://en.wikipedia.org/wiki/${encodeURIComponent(n.replace(/ /g,"_"))}`}}return{label:r,url:null}}function Pi(r){const e=[...r];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}const Od={origin:"Origin",insertion:"Insertion",movementCategory:"Movement category",action:"Action",nerveSupply:"Nerve supply",bloodSupply:"Blood supply"};class CM{constructor(e,t,n,i,s,o){this.panel=e,this.title=t,this.body=n,this.catalog=i,this.i18n=s,this.actions=o,s.addEventListener("change",()=>{this.current&&this.show(this.current)})}current=null;get shownId(){return this.current}close(){this.current=null,this.panel.hidden=!0}async show(e){const t=this.catalog.nodes[e];if(!t)return;this.current=e,this.panel.hidden=!1,this.title.textContent=this.i18n.name(e),this.title.dir="auto";const n=gy(this.catalog,e).slice(0,-1),i=document.createDocumentFragment(),s=[];for(let g=t.parent;g;g=this.catalog.nodes[g]?.parent??null)s.unshift(g);const o=gt("div","path",s.map(g=>this.catalog.nodes[g]?.kind==="system"?this.i18n.systemName(g):this.i18n.name(g)).join(" › ")||n.join(" › "));o.dir="auto",i.append(o);const a=this.i18n.latin(e);if(a){const g=gt("div","latin",a.name);a.ta2&&(g.title=`Terminologia Anatomica 2 (TA2) id ${a.ta2}`),a.ta2&&g.append(gt("span","ta2",` TA2 ${a.ta2}`)),i.append(g)}this.i18n.code!=="en"&&i.append(gt("div","english",t.name));const c=gt("div","actions"),l=(g,x)=>{const m=gt("button","",g);m.addEventListener("click",x),c.append(m)};l("Focus",()=>this.actions.focus(e)),l("Hide",()=>this.actions.hide(e)),l("Isolate",()=>this.actions.isolate(e)),l("X-ray",()=>this.actions.xray(e)),t.mesh&&l("Blood supply",()=>this.actions.bloodSupply(e)),t.mesh&&this.actions.opposite(e)&&l("Other side",()=>this.actions.selectOpposite(e)),t.parent&&this.catalog.nodes[t.parent]?.parent&&l("Select group",()=>this.actions.selectParent(e)),i.append(c),t.source?.startsWith("BodyParts3D")&&i.append(gt("p","credits","3D model: BodyParts3D, The Database Center for Life Science, CC BY-SA 2.1 Japan."));const h=gt("div");i.append(h);const u=gt("div");u.append(gt("p","empty",t.desc?"Loading description…":"No description available for this structure yet.")),i.append(u),this.body.replaceChildren(i),this.body.scrollTop=0;const[d,f]=await Promise.all([yM(this.catalog,e),t.desc?Hf(t.desc):Promise.resolve(null)]);if(this.current===e&&(d&&this.renderFacts(h,d),!!t.desc)){if(u.replaceChildren(),!f){u.append(gt("p","empty","Description could not be loaded."));return}!a&&f.latin&&o.after(gt("div","latin",f.latin)),this.i18n.code!=="en"&&u.append(gt("p","note","Description available in English only."));for(const g of f.summary)u.append(gt("p","",g));for(const g of f.sections){u.append(gt("h3","",g.heading));for(const x of g.paragraphs)u.append(gt("p","",x))}u.append(gt("p","credits","Text: Wikipedia via Z-Anatomy, CC BY-SA."))}}renderFacts(e,t){e.append(gt("h3","","Muscle facts"));const n=gt("dl","facts");let i=0;for(const o of Object.keys(Od)){n.append(gt("dt","",Od[o]));const a=gt("dd"),c=t[o].filter(l=>!l.na);!c.length&&t[o].some(l=>l.na)?a.append(gt("span","todo","Not applicable (not a muscle)")):c.length||(a.append(gt("span","todo","Not found in open sources yet")),i++);for(const l of c){const h=gt("div");h.append(document.createTextNode(l.values.map(d=>this.i18n.term(d)).join(", "))),l.via&&h.append(gt("span","via",` (${this.i18n.term(l.via)})`));const u=l.source?.startsWith("wikipedia:")?[l.source]:l.source?.startsWith("wikidata:")?l.source.split(" "):[];for(const d of u){const f=Yf(d),g=gt("a","via",` [${f.label}]`);g.href=f.url??"#",g.target="_blank",g.rel="noopener",h.append(g)}a.append(h)}n.append(a)}e.append(n);const s=gt("p","credits","Origin, insertion and movement category come from Z-Anatomy's attachment areas on the bones where available; other values from Wikidata (CC0) or the Wikipedia muscle infobox (CC BY-SA 4.0), each with a link to check it"+(i?". Fields marked “not found” have no value in these sources yet.":"."));e.append(s)}}function gt(r,e="",t){const n=document.createElement(r);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}const Qo={language:"en",background:"#050608",light:"atlas",exposure:.9,labelCount:28,showAttachments:!1,showLandmarkPins:!1,ambientOcclusion:!0},PM=["#050608","#1c2230","#0d0f14","#3a4150","#8d96a6","#e9edf2","#ffffff","#20302a","#2c2040"],Kf="anatomy-atlas:settings";function LM(){try{const r=JSON.parse(localStorage.getItem(Kf)??"{}");return r.background==="#1c2230"&&r.light==="studio"&&Object.assign(r,{background:Qo.background,light:Qo.light}),{...Qo,...r}}catch{return{...Qo}}}function Kl(r){try{localStorage.setItem(Kf,JSON.stringify(r))}catch{}}function DM(r,e,t,n){const i=(p,_)=>{e[p]=_,Kl(e),t(e)};r.replaceChildren();const s=m("Background"),o=document.createElement("div");o.className="swatches";for(const p of PM){const _=document.createElement("button");_.style.background=p,_.title=p,_.classList.toggle("active",p===e.background),_.addEventListener("click",()=>{o.querySelectorAll("button").forEach(y=>y.classList.remove("active")),_.classList.add("active"),i("background",p)}),o.append(_)}s.append(o);const a=m("Lighting"),c=document.createElement("select");for(const[p,_]of[["atlas","Atlas (realistic)"],["studio","Studio"],["soft","Soft"],["dramatic","Dramatic"],["flat","Flat (no shadows)"]])c.append(new Option(_,p,!1,p===e.light));c.addEventListener("change",()=>i("light",c.value)),a.append(c),a.after(),m("Brightness").append(Fd(.4,2,.05,e.exposure,p=>i("exposure",p))),m("Depth shading (ambient occlusion)").append(Fc(e.ambientOcclusion,p=>i("ambientOcclusion",p))),m("Labels shown at once").append(Fd(5,60,1,e.labelCount,p=>i("labelCount",p))),m("Muscle attachment areas on bones").append(Fc(e.showAttachments,p=>i("showAttachments",p))),m("Pins: features of the selection (N)").append(Fc(e.showLandmarkPins,p=>i("showLandmarkPins",p)));const g=document.createElement("div");g.className="credits",g.innerHTML="<b>Shortcuts</b><br>Click: select · Ctrl/Shift+click: multi-select · Double-click: focus<br>H hide · I isolate · T X-ray · G fade others · [ / ] peel muscle layers · L labels<br>R one side · A show all · Ctrl+Z undo · Home reset view · U hide interface · / search · B bookmarks · M systems";const x=document.createElement("div");x.className="credits",x.innerHTML='<b>Anatomix 3D</b> – Developed by Adeeb.<br><br><b>Credits & licences</b><br>3D models: <a href="https://www.z-anatomy.com" target="_blank" rel="noopener">Z-Anatomy</a> – the open source atlas of anatomy, CC BY-SA 4.0, derived from BodyParts3D – The Database Center for Life Science, CC BY-SA 2.1 Japan.<br>Included adapted models: Brainder &amp; White matter (University of Washington); Cranial nerves and foramina (University of Dundee, CAHID, CC BY 4.0); Anatomy of the inner ear (University of Dundee, CC BY-NC-SA 4.0); Kidney by lissiecowley (CC BY-NC 4.0).<br>Semispinalis capitis, vocalis and tensor veli palatini muscles: BodyParts3D, aligned to the Z-Anatomy body.<br>Descriptions: Wikipedia contributors via Z-Anatomy, CC BY-SA.<br>Changes: meshes simplified and converted to glTF for the web. This data is shared under CC BY-SA 4.0.',n?.(r),r.append(g,x);function m(p){const _=document.createElement("label");_.className="row";const y=document.createElement("span");return y.textContent=p,_.append(y),r.append(_),_}}function Fd(r,e,t,n,i){const s=document.createElement("input");return s.type="range",Object.assign(s,{min:r,max:e,step:t,value:String(n)}),s.addEventListener("input",()=>i(Number(s.value))),s}function Fc(r,e){const t=document.createElement("input");return t.type="checkbox",t.checked=r,t.addEventListener("change",()=>e(t.checked)),t}class IM{constructor(e,t,n,i,s,o){this.host=e,this.catalog=t,this.state=n,this.loader=i,this.i18n=s,this.h=o,this.render(),s.addEventListener("change",()=>this.render()),n.addEventListener("change",()=>this.syncChecks())}boxes=new Map;render(){this.host.replaceChildren(),this.boxes.clear();let e="";for(const t of this.catalog.systems){const n=this.catalog.nodes[t.id];if(!n)continue;if(t.category!==e){const h=document.createElement("div");h.className="tree-heading",h.textContent=t.category==="reference"?"Reference":"Body systems",this.host.append(h),e=t.category}const i=document.createElement("details");i.className="system-row";const s=document.createElement("summary"),o=document.createElement("span");o.className="swatch",o.style.background=t.color;const a=this.checkbox(t.id),c=document.createElement("span");c.textContent=this.i18n.systemName(t.id),c.dir="auto";const l=document.createElement("span");l.className="count",l.textContent=this.loader.isLoaded(t.id)?`${t.structures}`:`${t.structures} · ${NM(t.bytes)}${t.sharedFile?"*":""}`,t.sharedFile&&(l.title="Shared download: one file holds the respiratory, digestive, urinary, reproductive and endocrine systems"),s.append(a,o,c,l),i.append(s),i.addEventListener("toggle",()=>{i.open&&i.childElementCount===1&&this.renderChildren(i,n)}),c.addEventListener("click",h=>{h.preventDefault(),this.h.loadSystem(t.id).then(()=>this.h.focusNode(t.id))}),this.host.append(i)}this.syncChecks()}renderChildren(e,t){const n=t.children.map(s=>this.catalog.nodes[s]).filter(Boolean),i=s=>this.i18n.name(s.id);n.sort((s,o)=>Number(s.mesh)-Number(o.mesh)||i(s).localeCompare(i(o)));for(const s of n)if(s.children.length){const o=document.createElement("details"),a=document.createElement("summary"),c=document.createElement("span");c.textContent=this.i18n.name(s.id),c.dir="auto";const l=document.createElement("span");l.className="count",l.textContent=String(rn(this.catalog,s.id).length),a.append(this.checkbox(s.id),c,l),o.append(a),o.addEventListener("toggle",()=>{o.open&&o.childElementCount===1&&this.renderChildren(o,s)}),c.addEventListener("click",h=>{h.preventDefault(),this.h.focusNode(s.id)}),e.append(o)}else{const o=document.createElement("div");o.className="leaf";const a=document.createElement("span");a.textContent=this.i18n.name(s.id),a.dir="auto",o.append(this.checkbox(s.id),a),a.addEventListener("click",()=>this.h.focusNode(s.id)),e.append(o)}this.syncChecks()}checkbox(e){const t=document.createElement("input");return t.type="checkbox",t.title="Show / hide",t.addEventListener("click",n=>n.stopPropagation()),t.addEventListener("change",async()=>{const n=this.catalog.nodes[e],i=t.checked;i&&!this.loader.isLoaded(n.system)&&await this.h.loadSystem(n.system);const s=rn(this.catalog,e).filter(o=>this.state.has(o));if(i){const o=s.filter(a=>a===e||!this.catalog.nodes[a]?.hiddenByDefault);this.state.unhide(o)}else this.state.hide(s)}),this.boxes.set(e,t),t}syncChecks(){for(const[e,t]of this.boxes){const n=this.catalog.nodes[e];if(!n||!this.loader.isLoaded(n.system)){t.checked=!1,t.indeterminate=this.loader.isLoading(n?.system??"");continue}const i=rn(this.catalog,e).filter(o=>o===e||!this.catalog.nodes[o]?.hiddenByDefault),s=i.filter(o=>this.state.has(o)&&!this.state.isHidden(o)).length;t.checked=s===i.length&&s>0,t.indeterminate=s>0&&s<i.length}}}function NM(r){return`${(r/1048576).toFixed(1)} MB`}class UM{constructor(e,t){this.viewer=e,this.h=t;const n=e.canvas;n.addEventListener("pointerdown",i=>this.down={x:i.clientX,y:i.clientY,t:performance.now()}),n.addEventListener("pointerup",i=>this.onUp(i)),n.addEventListener("pointermove",i=>this.onMove(i)),n.addEventListener("pointerleave",()=>this.h.onHover(null,0,0))}raycaster=new Uf;down=null;lastClick={t:0,id:null};hoverFrame=0;multiSelect=!1;interceptNextClick(e){this.h.intercept=e}pick(e,t){return this.pickHit(e,t)?.id??null}pickHit(e,t){const n=this.viewer.canvas.getBoundingClientRect(),i=new _e((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.viewer.camera);for(const s of this.raycaster.intersectObjects(this.h.candidates(),!1)){const o=s.object.material;if(!(o.transparent&&o.opacity<.5)&&!(this.h.keeps&&!this.h.keeps(s.point,s.object.name)))return{id:s.object.name,point:s.point.clone(),mesh:s.object}}return null}onUp(e){if(!this.down)return;const t=Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y),n=performance.now()-this.down.t<450;if(this.down=null,t>6||!n||e.button!==0)return;if(this.h.intercept){const o=this.h.intercept;this.h.intercept=null,o(this.pickHit(e.clientX,e.clientY));return}const i=this.pick(e.clientX,e.clientY),s=performance.now();if(s-this.lastClick.t<320&&this.lastClick.id===i){this.lastClick.t=0,this.h.onDoubleClick(i);return}this.lastClick={t:s,id:i},this.h.onClick(i,this.multiSelect||e.ctrlKey||e.metaKey||e.shiftKey)}onMove(e){e.pointerType!=="mouse"||e.buttons||(cancelAnimationFrame(this.hoverFrame),this.hoverFrame=requestAnimationFrame(()=>this.h.onHover(this.pick(e.clientX,e.clientY),e.clientX,e.clientY)))}}const Bd={type:"change"},Rh={type:"start"},Zf={type:"end"},$o=new ss,kd=new An,OM=Math.cos(70*ah.DEG2RAD),Lt=new D,ln=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bc=1e-6;class FM extends Lg{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ai,this._lastTargetPosition=new D,this._quat=new ai().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Iu,this._sphericalDelta=new Iu,this._scale=1,this._panOffset=new D,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new D,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kM.bind(this),this._onPointerDown=BM.bind(this),this._onPointerUp=zM.bind(this),this._onContextMenu=qM.bind(this),this._onMouseWheel=GM.bind(this),this._onKeyDown=WM.bind(this),this._onTouchStart=XM.bind(this),this._onTouchMove=jM.bind(this),this._onMouseDown=HM.bind(this),this._onMouseMove=VM.bind(this),this._interceptControlDown=YM.bind(this),this._interceptControlUp=KM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bd),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<OM?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bc||this._lastTargetPosition.distanceToSquared(this.target)>Bc?(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Lt.copy(i).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function BM(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function kM(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function zM(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zf),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function HM(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=pt.DOLLY;break;case Ys.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=pt.ROTATE}break;case Ys.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Rh)}function VM(r){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function GM(r){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(r.preventDefault(),this.dispatchEvent(Rh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Zf))}function WM(r){this.enabled!==!1&&this._handleKeyDown(r)}function XM(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=pt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=pt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Rh)}function jM(r){switch(this._trackPointer(r),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=pt.NONE}}function qM(r){this.enabled!==!1&&r.preventDefault()}function YM(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KM(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ZM extends Af{constructor(){super();const e=new cr;e.deleteAttribute("uv");const t=new Jr({side:Kt}),n=new Jr,i=new Nf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new xt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new dh(e,n,6),a=new _t;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new xt(e,Os(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new xt(e,Os(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new xt(e,Os(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new xt(e,Os(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new xt(e,Os(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new xt(e,Os(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Os(r){return new Zm({color:0,emissive:16777215,emissiveIntensity:r})}const ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class os{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JM=new Ra(-1,1,1,-1,0,1);class QM extends Wt{constructor(){super(),this.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dn([0,2,0,0,2,0],2))}}const $M=new QM;class Da{constructor(e){this._mesh=new xt($M,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class eb extends os{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zn.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Da(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zd extends os{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class tb extends os{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eb(ma),this.copyPass.material.blending=Ht,this.clock=new _g}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zd!==void 0&&(o instanceof zd?n=!0:o instanceof tb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ib extends os{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const ea={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ce},cameraProjectionMatrixInverse:{value:new Ce},cameraWorldMatrix:{value:new Ce},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ta={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},kc={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function sb(r=5){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=rb(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],c=2*Math.PI*a/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(l.x*.5+.5)*255,i[o*4+1]=(l.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const s=new ns(i,e,e);return s.wrapS=oi,s.wrapT=oi,s.needsUpdate=!0,s}function rb(r){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),s=e-1;for(let o=1;o<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=o++;s++,i--}return n}const na={defines:{SAMPLES:16,SAMPLE_VECTORS:Jf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraProjectionMatrixInverse:{value:new Ce},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Jf(r,e,t){const n=ob(r,e,t);let i="vec3[SAMPLES](";for(let s=0;s<r;s++){const o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function ob(r,e,t){const n=[];for(let i=0;i<r;i++){const s=2*Math.PI*e*i/r,o=Math.pow(i/(r-1),t);n.push(new D(Math.cos(s),Math.sin(s),o))}return n}class ab{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=e-d,x=t-f;let m,p;g>x?(m=1,p=0):(m=0,p=1);const _=g-m+h,y=x-p+h,v=g-1+2*h,S=x-1+2*h,R=c&255,A=l&255,P=this.perm[R+this.perm[A]]%12,b=this.perm[R+m+this.perm[A+p]]%12,M=this.perm[R+1+this.perm[A+1]]%12;let L=.5-g*g-x*x;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[P],g,x));let I=.5-_*_-y*y;I<0?i=0:(I*=I,i=I*I*this._dot(this.grad3[b],_,y));let F=.5-v*v-S*S;return F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[M],v,S)),70*(n+i+s)}noise3d(e,t,n){let i,s,o,a;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,x=h-g,m=u-g,p=d-g,_=e-x,y=t-m,v=n-p;let S,R,A,P,b,M;_>=y?y>=v?(S=1,R=0,A=0,P=1,b=1,M=0):_>=v?(S=1,R=0,A=0,P=1,b=0,M=1):(S=0,R=0,A=1,P=1,b=0,M=1):y<v?(S=0,R=0,A=1,P=0,b=1,M=1):_<v?(S=0,R=1,A=0,P=0,b=1,M=1):(S=0,R=1,A=0,P=1,b=1,M=0);const L=_-S+f,I=y-R+f,F=v-A+f,k=_-P+2*f,B=y-b+2*f,z=v-M+2*f,J=_-1+3*f,X=y-1+3*f,ne=v-1+3*f,le=h&255,ge=u&255,Ne=d&255,Ye=this.perm[le+this.perm[ge+this.perm[Ne]]]%12,$e=this.perm[le+S+this.perm[ge+R+this.perm[Ne+A]]]%12,He=this.perm[le+P+this.perm[ge+b+this.perm[Ne+M]]]%12,$=this.perm[le+1+this.perm[ge+1+this.perm[Ne+1]]]%12;let ee=.6-_*_-y*y-v*v;ee<0?i=0:(ee*=ee,i=ee*ee*this._dot3(this.grad3[Ye],_,y,v));let ue=.6-L*L-I*I-F*F;ue<0?s=0:(ue*=ue,s=ue*ue*this._dot3(this.grad3[$e],L,I,F));let be=.6-k*k-B*B-z*z;be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[He],k,B,z));let ve=.6-J*J-X*X-ne*ne;return ve<0?a=0:(ve*=ve,a=ve*ve*this._dot3(this.grad3[$],J,X,ne)),32*(i+s+o+a)}noise4d(e,t,n,i){const s=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,g;const x=(e+t+n+i)*c,m=Math.floor(e+x),p=Math.floor(t+x),_=Math.floor(n+x),y=Math.floor(i+x),v=(m+p+_+y)*l,S=m-v,R=p-v,A=_-v,P=y-v,b=e-S,M=t-R,L=n-A,I=i-P,F=b>M?32:0,k=b>L?16:0,B=M>L?8:0,z=b>I?4:0,J=M>I?2:0,X=L>I?1:0,ne=F+k+B+z+J+X,le=o[ne][0]>=3?1:0,ge=o[ne][1]>=3?1:0,Ne=o[ne][2]>=3?1:0,Ye=o[ne][3]>=3?1:0,$e=o[ne][0]>=2?1:0,He=o[ne][1]>=2?1:0,$=o[ne][2]>=2?1:0,ee=o[ne][3]>=2?1:0,ue=o[ne][0]>=1?1:0,be=o[ne][1]>=1?1:0,ve=o[ne][2]>=1?1:0,Xe=o[ne][3]>=1?1:0,rt=b-le+l,U=M-ge+l,Qe=L-Ne+l,Ae=I-Ye+l,Re=b-$e+2*l,ye=M-He+2*l,tt=L-$+2*l,he=I-ee+2*l,Ue=b-ue+3*l,st=M-be+3*l,ot=L-ve+3*l,N=I-Xe+3*l,T=b-1+4*l,W=M-1+4*l,Q=L-1+4*l,te=I-1+4*l,K=m&255,Se=p&255,re=_&255,xe=y&255,we=a[K+a[Se+a[re+a[xe]]]]%32,se=a[K+le+a[Se+ge+a[re+Ne+a[xe+Ye]]]]%32,de=a[K+$e+a[Se+He+a[re+$+a[xe+ee]]]]%32,De=a[K+ue+a[Se+be+a[re+ve+a[xe+Xe]]]]%32,Te=a[K+1+a[Se+1+a[re+1+a[xe+1]]]]%32;let ce=.6-b*b-M*M-L*L-I*I;ce<0?h=0:(ce*=ce,h=ce*ce*this._dot4(s[we],b,M,L,I));let E=.6-rt*rt-U*U-Qe*Qe-Ae*Ae;E<0?u=0:(E*=E,u=E*E*this._dot4(s[se],rt,U,Qe,Ae));let w=.6-Re*Re-ye*ye-tt*tt-he*he;w<0?d=0:(w*=w,d=w*w*this._dot4(s[de],Re,ye,tt,he));let O=.6-Ue*Ue-st*st-ot*ot-N*N;O<0?f=0:(O*=O,f=O*O*this._dot4(s[De],Ue,st,ot,N));let G=.6-T*T-W*W-Q*Q-te*te;return G<0?g=0:(G*=G,g=G*G*this._dot4(s[Te],T,W,Q,te)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}}class ii extends os{constructor(e,t,n=512,i=512,s,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=sb(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Sn(this.width,this.height,{type:Xn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},ea.defines),uniforms:zn.clone(ea.uniforms),vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,blending:Ht,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Km,this.normalMaterial.blending=Ht,this.pdMaterial=new Dt({defines:Object.assign({},na.defines),uniforms:zn.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},ta.defines),uniforms:zn.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,blending:Ht}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:zn.clone(ma.uniforms),vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:jc,blendDst:Or,blendEquation:Bn,blendSrcAlpha:Xc,blendDstAlpha:Or,blendEquationAlpha:Bn}),this.blendMaterial=new Dt({uniforms:zn.clone(kc.uniforms),vertexShader:kc.vertexShader,fragmentShader:kc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ef,blendSrc:jc,blendDst:Or,blendEquation:Bn,blendSrcAlpha:Xc,blendDstAlpha:Or,blendEquationAlpha:Bn}),this._fsQuad=new Da(null),this._originalClearColor=new Le,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Zr,this.depthTexture.format=nr,this.depthTexture.type=tr,this.normalRenderTarget=new Sn(this.width,this.height,{minFilter:Ut,magFilter:Ut,type:Xn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Jf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ii.OUTPUT.Off:break;case ii.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ht,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ii.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ht,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ii.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ht,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ii.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case ii.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ht,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ii.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ht,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,s){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,s){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new ab,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=o,l=a;i[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const s=new ns(i,e,e,sn,Wn);return s.wrapS=oi,s.wrapT=oi,s.needsUpdate=!0,s}}ii.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class cb extends os{constructor(){super(),this.uniforms=zn.clone(ia.uniforms),this.material=new Ym({name:ia.name,uniforms:this.uniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader}),this._fsQuad=new Da(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===of?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===af?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===rf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const sa={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ra={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},zc={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class lb extends os{constructor(){super(),this._edgesRT=new Sn(1,1,{depthBuffer:!1,type:Xn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Sn(1,1,{depthBuffer:!1,type:Xn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Pt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=un,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Pt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=Ut,this._searchTexture.minFilter=Ut,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=zn.clone(sa.uniforms),this._materialEdges=new Dt({defines:Object.assign({},sa.defines),uniforms:this._uniformsEdges,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader}),this._uniformsWeights=zn.clone(ra.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Dt({defines:Object.assign({},ra.defines),uniforms:this._uniformsWeights,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader}),this._uniformsBlend=zn.clone(zc.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Dt({uniforms:this._uniformsBlend,vertexShader:zc.vertexShader,fragmentShader:zc.fragmentShader}),this._fsQuad=new Da(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}class hb{constructor(e){this.canvas=e,this.renderer=new py({canvas:e,antialias:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=wt,this.renderer.toneMapping=$l,this.renderer.toneMappingExposure=1,this.renderer.localClippingEnabled=!0;const t=new Ul(this.renderer);this.scene.environment=t.fromScene(new ZM,.04).texture,this.camera=new nn(40,1,.005,100),this.controls=new FM(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.minDistance=.02,this.controls.maxDistance=12,this.controls.addEventListener("change",()=>this.requestRender()),this.scene.add(this.root,this.lights,this.camera),this.setBackground("#1c2230"),this.setLightPreset("atlas"),this.applyPose(this.homePose),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),this.renderer.setAnimationLoop(()=>this.tick())}renderer;scene=new Af;camera;controls;root=new ri;lights=new ri;needsRender=!0;tween=null;frameListeners=new Set;beforeRender=new Set;animations=new Set;homePose={position:[0,1,3.2],target:[0,1,0]};ao=!0;composer=null;lowPower=!1;gtao=null;requestRender(){this.needsRender=!0}addAnimation(e){this.animations.add(e),this.requestRender()}removeAnimation(e){this.animations.delete(e),this.requestRender()}onBeforeRender(e){this.beforeRender.add(e)}onFrame(e){this.frameListeners.add(e)}setBackground(e){this.scene.background=new Le(e),document.documentElement.style.setProperty("--bg",e),this.requestRender()}setExposure(e){this.renderer.toneMappingExposure=e,this.requestRender()}setLightPreset(e){this.lights.clear(),this.camera.clear();const t=(n,i,s=!1)=>{i&&n.position.set(...i),(s?this.camera:this.lights).add(n)};switch(e){case"atlas":t(new lc(16775408,1711396,.3)),t(new mi(16774374,1.9),[-1.8,2,1.6],!0),t(new mi(14674175,.22),[2,.3,1.4],!0),t(new mi(16777215,.35),[0,1.5,-2.5]),this.scene.environmentIntensity=.16;break;case"studio":t(new lc(16777215,4212824,.9)),t(new mi(16777215,1.6),[1.5,2,2],!0),t(new mi(12571903,.6),[-2,1,-1.5]),this.scene.environmentIntensity=.35;break;case"soft":t(new lc(16777215,8949920,1.6)),t(new mi(16777215,.6),[0,1,2],!0),this.scene.environmentIntensity=.6;break;case"dramatic":t(new Pu(16777215,.15)),t(new mi(16773597,2.6),[2.5,2.5,1],!0),t(new mi(6719743,.8),[-2,-.5,-2]),this.scene.environmentIntensity=.15;break;case"flat":t(new Pu(16777215,2.2)),this.scene.environmentIntensity=0;break}this.requestRender()}getPose(){return{position:this.camera.position.toArray(),target:this.controls.target.toArray()}}applyPose(e){this.camera.position.set(...e.position),this.controls.target.set(...e.target),this.controls.update(),this.requestRender()}animateTo(e,t=650){this.tween={from:this.getPose(),to:e,t0:performance.now(),ms:t},this.requestRender()}setHome(e){this.homePose=e}resetView(){this.animateTo(this.homePose)}poseForBox(e,t,n=1.1){const i=e.getBoundingSphere(new Gt),s=ah.degToRad(this.camera.fov),o=Math.min(s,2*Math.atan(Math.tan(s/2)*this.camera.aspect)),a=Math.max(i.radius/Math.sin(o/2),this.controls.minDistance*2)*n,c=i.center;return{position:c.clone().addScaledVector(t.clone().normalize(),a).toArray(),target:c.toArray()}}frameBox(e,t=650){if(e.isEmpty())return;const n=this.camera.position.clone().sub(this.controls.target);this.animateTo(this.poseForBox(e,n),t)}setLowPower(e){this.lowPower=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e?1.5:2)),this.composer=null,this.gtao=null,this.resize()}setAmbientOcclusion(e){this.ao=e,this.requestRender()}renderFrame(){if(!this.ao){this.renderer.render(this.scene,this.camera);return}const e=this.renderer.getDrawingBufferSize(new _e);if(!this.composer){const n=new Sn(e.x,e.y,{type:Xn,samples:0});n.depthTexture=new Zr(e.x,e.y),this.composer=new nb(this.renderer,n),this.composer.setPixelRatio(1),this.composer.addPass(new ib(this.scene,this.camera)),this.gtao=new ii(this.scene,this.camera,e.x,e.y);const i=this.lowPower?8:16;this.gtao.updateGtaoMaterial({radius:.16,distanceExponent:1.2,thickness:1,scale:1.7,samples:i}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:i}),this.gtao.blendIntensity=1,this.composer.addPass(this.gtao),this.composer.addPass(new cb),this.composer.addPass(new lb)}const t=this.composer.readBuffer;(t.width!==e.x||t.height!==e.y)&&this.composer.setSize(e.x,e.y);for(const n of[this.composer.readBuffer,this.composer.writeBuffer])n.depthTexture||(n.depthTexture=new Zr(e.x,e.y));this.gtao.setGBuffer(this.composer.readBuffer.depthTexture),this.composer.render()}snapshot(e=320,t=240){this.renderFrame();const n=this.renderer.domElement,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d"),o=Math.max(e/n.width,t/n.height),a=n.width*o,c=n.height*o;return s.drawImage(n,(e-a)/2,(t-c)/2,a,c),i.toDataURL("image/jpeg",.8)}resize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.requestRender())}tick(){if(this.tween){const{from:e,to:t,t0:n,ms:i}=this.tween,s=Math.min(1,(performance.now()-n)/i),o=s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,a=(c,l)=>c.map((h,u)=>h+(l[u]-h)*o);this.camera.position.set(...a(e.position,t.position)),this.controls.target.set(...a(e.target,t.target)),s>=1&&(this.tween=null),this.needsRender=!0}if(this.controls.update()&&(this.needsRender=!0),this.animations.size){const e=performance.now();for(const t of this.animations)t(e);this.needsRender=!0}if(this.needsRender){this.needsRender=!1;for(const e of this.beforeRender)e();this.renderFrame();for(const e of this.frameListeners)e()}}}const Qf={mode:"off",position:.5,flip:!1,caps:!0},ub={axial:new D(0,-1,0),sagittal:new D(-1,0,0),coronal:new D(0,0,-1)};class db extends EventTarget{constructor(e){super(),this.camera=e}planes=[];plane=new An(new D(0,-1,0),0);state={...Qf};bounds=new et(new D(-.3,0,-.2),new D(.3,1.8,.2));uniforms={uCap:{value:0},uCapNormal:{value:new D(0,0,1)}};extraPatch=null;get current(){return{...this.state,normal:this.state.normal?[...this.state.normal]:void 0}}get active(){return this.state.mode!=="off"}setBounds(e){e.isEmpty()||this.bounds.copy(e),this.update()}set(e){this.state={...this.state,...e},this.state.mode==="free"&&!this.state.normal&&this.alignToView(),this.update()}alignToView(){const e=new D;this.camera.getWorldDirection(e),this.state.normal=e.toArray()}keeps(e){return!this.active||this.plane.distanceToPoint(e)>=-1e-5}attach(e){e.clippingPlanes=this.planes,e.onBeforeCompile=t=>{t.uniforms.uCap=this.uniforms.uCap,t.uniforms.uCapNormal=this.uniforms.uCapNormal,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCap;
uniform vec3 uCapNormal;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
if (uCap > 0.5 && !gl_FrontFacing) normal = normalize(uCapNormal);`),this.extraPatch?.(e,t)},e.customProgramCacheKey=()=>"anatomix-cap"}updateView(){if(!this.active)return;const e=this.plane.normal.clone().negate().transformDirection(this.camera.matrixWorldInverse);this.uniforms.uCapNormal.value.copy(e)}update(){const e=this.state;if(e.mode==="off"){this.planes.length=0,this.uniforms.uCap.value=0,this.dispatchEvent(new Event("change"));return}const t=e.mode==="free"?new D(...e.normal??[0,0,-1]).normalize():ub[e.mode].clone();e.flip&&t.negate();const i=[0,1].flatMap(c=>[0,1].flatMap(l=>[0,1].map(h=>new D(c?this.bounds.max.x:this.bounds.min.x,l?this.bounds.max.y:this.bounds.min.y,h?this.bounds.max.z:this.bounds.min.z)))).map(c=>c.dot(t)),s=Math.min(...i),o=Math.max(...i),a=s+(o-s)*e.position;this.plane.set(t,-a),this.planes.length===0&&this.planes.push(this.plane),this.uniforms.uCap.value=e.caps?1:0,this.updateView(),this.dispatchEvent(new Event("change"))}}const Hd=["#ff5a5f","#ffb400","#3ec46d","#4fa3ff","#b36bff","#ffffff"];class fb extends EventTarget{constructor(e,t,n){super(),this.host=e,this.viewer=t,this.state=n,t.onFrame(()=>this.position()),n.addEventListener("change",()=>this.position())}pins=[];els=new Map;visible=!0;keeps=()=>!0;onClick=()=>{};list(){return this.pins.map(e=>({...e,local:[...e.local]}))}setAll(e){this.pins=e.map(t=>({...t})),this.sync()}add(e,t,n){const i=this.state.mesh(e);if(!i)return null;const s=i.worldToLocal(t.clone()).toArray(),o={id:crypto.randomUUID(),structureId:e,local:s,note:"",color:n,created:Date.now()};return this.pins.push(o),this.sync(),o}update(e,t){const n=this.pins.find(i=>i.id===e);n&&(Object.assign(n,t),this.sync())}remove(e){this.pins=this.pins.filter(t=>t.id!==e),this.sync()}setVisible(e){this.visible=e,this.position()}worldOf(e){const t=this.state.mesh(e.structureId);return t?new D(...e.local).applyMatrix4(t.matrixWorld):null}drawable(){if(!this.visible)return[];const e=[];for(const t of this.pins){const n=this.worldOf(t);n&&this.state.isVisible(t.structureId)&&this.keeps(n,t.structureId)&&e.push({pin:t,world:n})}return e}sync(){for(const[e,t]of this.els)this.pins.some(n=>n.id===e)||(t.remove(),this.els.delete(e));this.pins.forEach((e,t)=>{let n=this.els.get(e.id);n||(n=document.createElement("div"),n.className="user-pin",n.addEventListener("click",()=>{const i=this.pins.find(s=>s.id===e.id);i&&this.onClick(i)}),this.host.append(n),this.els.set(e.id,n)),n.style.setProperty("--pin",e.color),n.dataset.n=String(t+1),n.title=e.note||"(no note)"}),this.position(),this.dispatchEvent(new Event("change")),this.viewer.requestRender()}position(){const e=this.viewer.camera,t=this.viewer.canvas.clientWidth,n=this.viewer.canvas.clientHeight;for(const i of this.pins){const s=this.els.get(i.id);if(!s)continue;const o=this.worldOf(i);if(!(this.visible&&!!o&&this.state.isVisible(i.structureId)&&this.keeps(o,i.structureId))||!o){s.style.display="none";continue}const c=o.clone().project(e);s.style.display=c.z>1?"none":"",s.style.left=`${(c.x*.5+.5)*t}px`,s.style.top=`${(-c.y*.5+.5)*n}px`}}}function pb(r,e,t){const{renderer:n,camera:i}=r,s=n.capabilities.maxTextureSize,o=Math.min(Math.round(t.width),s),a=Math.min(Math.round(t.height),s),c=n.getSize(new _e),l=n.getPixelRatio(),h=i.aspect;n.setPixelRatio(1),n.setSize(o,a,!1),i.aspect=o/a,i.updateProjectionMatrix(),e(),r.renderFrame();const u=document.createElement("canvas");u.width=o,u.height=a;const d=u.getContext("2d");return d.drawImage(n.domElement,0,0,o,a),mb(d,i,o,a,t.overlays,o/Math.max(c.x,1)),n.setPixelRatio(l),n.setSize(c.x,c.y,!1),i.aspect=h,i.updateProjectionMatrix(),r.requestRender(),u}function mb(r,e,t,n,i,s){const o=Math.max(1,s);r.textBaseline="middle";for(const a of i){const c=a.world.clone().project(e);if(c.z>1||Math.abs(c.x)>1.05||Math.abs(c.y)>1.05)continue;const l=(c.x*.5+.5)*t,h=(-c.y*.5+.5)*n;if(a.kind==="pin"&&(r.beginPath(),r.arc(l,h,7*o,0,Math.PI*2),r.fillStyle=a.color??"#ff5a5f",r.fill(),r.lineWidth=2*o,r.strokeStyle="#ffffff",r.stroke(),!a.text))continue;const u=(a.kind==="landmark"?11:12)*o;r.font=`${u}px "Segoe UI", system-ui, sans-serif`;const d=r.measureText(a.text).width,f=7*o,g=u+6*o,x=a.kind==="pin"?l+12*o:l-d/2-f,m=a.kind==="pin"?h-g/2:h-g-6*o;r.fillStyle=a.kind==="landmark"?"rgba(255,196,0,0.92)":"rgba(15,18,26,0.88)",gb(r,x,m,d+f*2,g,6*o),r.fill(),a.kind==="label"&&(r.strokeStyle="rgba(160,170,190,0.9)",r.lineWidth=1*o,r.beginPath(),r.moveTo(l,h),r.lineTo(l,m+g),r.stroke()),r.fillStyle=a.kind==="landmark"?"#1a1400":"#e8ecf3",r.fillText(a.text,x+f,m+g/2)}}function gb(r,e,t,n,i,s){r.beginPath(),r.moveTo(e+s,t),r.arcTo(e+n,t,e+n,t+i,s),r.arcTo(e+n,t+i,e,t+i,s),r.arcTo(e,t+i,e,t,s),r.arcTo(e,t,e+n,t,s),r.closePath()}function xb(r){return new Promise((e,t)=>r.toBlob(n=>n?e(n):t(new Error("PNG encoding failed")),"image/png"))}function vb(r,e){const t=document.createElement("a");t.href=URL.createObjectURL(r),t.download=e,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}async function _b(r){if(!("clipboard"in navigator)||typeof ClipboardItem>"u")throw new Error("This browser cannot copy images to the clipboard.");await navigator.clipboard.write([new ClipboardItem({"image/png":r})])}const yb=[["off","Off"],["axial","Axial"],["sagittal","Sagittal"],["coronal","Coronal"],["free","From view"]],Vd=[{label:"Current view",scale:1,w:0,h:0},{label:"Current view ×2",scale:2,w:0,h:0},{label:"Current view ×4",scale:4,w:0,h:0},{label:"Full HD 1920×1080",scale:null,w:1920,h:1080},{label:"4K 3840×2160",scale:null,w:3840,h:2160},{label:"Square 2048×2048",scale:null,w:2048,h:2048}];class Sb{constructor(e,t,n,i,s,o,a){this.host=e,this.clipping=t,this.pins=n,this.explode=i,this.scalpel=s,this.physiology=o,this.h=a,this.render(),s.addEventListener("change",()=>this.renderCuts()),i.addEventListener("change",()=>this.syncExplode()),t.addEventListener("change",()=>this.syncClip()),n.addEventListener("change",()=>this.renderPins())}explodeSlider;explodeValue;explodeScope;centreButtons=new Map;modeButtons=new Map;slider;flip;caps;pinList;pinColor=Hd[0];cutList;render(){this.host.replaceChildren();const e=Fs(this.host,"Explode view");this.explodeSlider=Object.assign(document.createElement("input"),{type:"range",min:"0",max:"100",step:"1",value:"0"}),this.explodeValue=document.createElement("span"),this.explodeValue.className="value",this.explodeSlider.addEventListener("input",()=>{const B={amount:Number(this.explodeSlider.value)/100};this.explode.value.scope==="selection"&&!this.explode.active&&(B.ids=this.h.selection()),this.explode.set(B)});const t=hn("Amount",this.explodeSlider);t.append(this.explodeValue),this.explodeScope=document.createElement("select"),this.explodeScope.addEventListener("focus",()=>this.fillScopes()),this.explodeScope.addEventListener("change",()=>{const B=this.explodeScope.value;if(B==="selection"){const z=this.h.selection();z.length||this.h.toast("Select structures first, then explode the selection"),this.explode.set({scope:B,ids:z})}else this.explode.set({scope:B})});const n=$n("seg");for(const[B,z,J]of[["group","Within groups","Parts spread apart inside their group; groups stay together"],["whole","From centre","Everything moves straight out from the centre"]]){const X=ei(z,()=>this.explode.set({centre:B}));X.title=J,this.centreButtons.set(B,X),n.append(X)}e.append(t,hn("Explode",this.explodeScope),n,$n("panel-actions",ei("Collapse",()=>this.explode.collapse()))),e.append(oa("Labels and pins follow the moved parts. “Selection” keeps the structures selected when you started; E toggles."));const i=Fs(this.host,"Scalpel"),s=Object.assign(document.createElement("input"),{type:"range",min:"0.5",max:"15",step:"0.5",value:"3"}),o=document.createElement("span");o.className="value";const a=()=>o.textContent=`${s.value} cm`;s.addEventListener("input",a),a();const c=hn("Cut depth",s);c.append(o);const l=document.createElement("select");l.append(new Option("Selected structures","selection"),new Option("Everything visible","visible"));const h=ei("✂ Draw a cut",async()=>{if(l.value==="selection"&&!this.h.selection().length)return this.h.toast("Select structures first, or cut everything visible");h.classList.add("active"),h.textContent="Drag a rectangle on the view… (Esc cancels)";const B=await this.h.drawRect();if(h.classList.remove("active"),h.textContent="✂ Draw a cut",!B)return;const z=this.h.cut(B,Number(s.value)/100,l.value);this.h.toast(z?`Cut ${z} structure${z===1?"":"s"}`:"Nothing cut (too small, or 4 cuts already on these structures)")});h.dataset.action="draw-cut",i.append($n("pin-tools",h),c,hn("Cut",l)),this.cutList=document.createElement("ul"),this.cutList.className="pin-list",i.append(this.cutList,$n("panel-actions",ei("Remove all cuts",()=>this.scalpel.clear()))),i.append(oa("Removes a window from the chosen structures only — up to 4 per structure. Cut walls are shaded from the structure's inner surface (not exact geometry). Clicks, labels and pins ignore the removed part."));const u=Fs(this.host,"Heartbeat & breathing (schematic)"),d=document.createElement("p");d.className="credits";const f=Bs(async()=>{f.checked&&await this.h.loadSystems(["cardiovascular"]),this.physiology.setHeart(f.checked,Number(g.value))}),g=Object.assign(document.createElement("input"),{type:"range",min:"40",max:"180",step:"1",value:String(this.physiology.heart.bpm)}),x=document.createElement("span");x.className="value",g.addEventListener("input",()=>{x.textContent=`${g.value}/min`,this.physiology.setHeart(f.checked,Number(g.value))}),x.textContent=`${g.value}/min`;const m=Bs(async()=>{m.checked&&await this.h.loadSystems(["respiratory","muscular"]),this.physiology.setBreathing(m.checked,Number(p.value))}),p=Object.assign(document.createElement("input"),{type:"range",min:"6",max:"30",step:"1",value:String(this.physiology.breathing.perMinute)}),_=document.createElement("span");_.className="value",p.addEventListener("input",()=>{_.textContent=`${p.value}/min`,this.physiology.setBreathing(m.checked,Number(p.value))}),_.textContent=`${p.value}/min`;const y=hn("Rate",g);y.append(x);const v=hn("Rate",p);v.append(_),f.dataset.action="heartbeat",m.dataset.action="breathing",u.append(hn("Heartbeat",f),y,hn("Breathing",m),v,d),u.append(oa("Schematic: the shapes are scaled and moved to show the sequence (atria, then ventricles; lungs expand as the diaphragm moves down). Timing and size changes are illustrative and exaggerated, not measured or simulated.")),setInterval(()=>{const B=this.physiology.phase,z=[B.heart&&`Heart: ${B.heart}`,B.breathing&&`Lungs: ${B.breathing}`].filter(Boolean).join(" · ");d.textContent!==z&&(d.textContent=z)},200);const S=Fs(this.host,"Section plane"),R=$n("seg");for(const[B,z]of yb){const J=ei(z,()=>this.clipping.set({mode:B,normal:B==="free"?void 0:this.clipping.current.normal}));B==="free"&&(J.title="Plane facing you, through the current view (rotate, then press again to re-align)"),this.modeButtons.set(B,J),R.append(J)}S.append(R),this.slider=Object.assign(document.createElement("input"),{type:"range",min:"0",max:"1",step:"0.002"}),this.slider.addEventListener("input",()=>this.clipping.set({position:Number(this.slider.value)})),S.append(hn("Cut depth",this.slider)),this.flip=Bs(()=>this.clipping.set({flip:this.flip.checked})),S.append(hn("Flip side",this.flip)),this.caps=Bs(()=>this.clipping.set({caps:this.caps.checked})),S.append(hn("Fill cut faces",this.caps)),S.append(oa("Axial cuts from the top, sagittal from the left side, coronal from the front. Clicks and labels ignore the removed part."));const A=Fs(this.host,"My pins"),P=$n("swatches");for(const B of Hd){const z=document.createElement("button");z.style.background=B,z.title=B,z.classList.toggle("active",B===this.pinColor),z.addEventListener("click",()=>{this.pinColor=B,P.querySelectorAll("button").forEach(J=>J.classList.toggle("active",J===z))}),P.append(z)}const b=ei("＋ Add pin",async()=>{b.classList.add("active"),b.textContent="Click a structure… (Esc cancels)";const B=await this.h.placePin(this.pinColor);b.classList.remove("active"),b.textContent="＋ Add pin",B&&(this.renderPins(),this.pinList.querySelector(`[data-pin="${B.id}"] textarea`)?.focus())});b.dataset.action="add-pin";const M=Bs(()=>this.pins.setVisible(M.checked));M.checked=this.pins.visible,A.append($n("pin-tools",b,P),hn("Show pins",M)),this.pinList=document.createElement("ul"),this.pinList.className="pin-list",A.append(this.pinList);const L=Fs(this.host,"Screenshot"),I=document.createElement("select");Vd.forEach((B,z)=>I.append(new Option(B.label,String(z))));const F=Bs(()=>{});F.checked=!0,L.append(hn("Size",I),hn("Include labels and pins",F));const k=B=>async()=>{const z=Vd[Number(I.value)];await this.h.screenshot({scale:z.scale,width:z.w,height:z.h,labels:F.checked},B)};L.append($n("panel-actions",ei("Download PNG",k("download")),ei("Copy to clipboard",k("copy")))),this.fillScopes(),this.syncExplode(),this.renderCuts(),this.syncClip(),this.renderPins()}fillScopes(){const e=this.explode.value.scope;this.explodeScope.replaceChildren(new Option("All visible systems","all"),new Option("Selection only","selection"));for(const t of this.h.loadedSystems())this.explodeScope.append(new Option(`${t.name} only`,t.id));[...this.explodeScope.options].some(t=>t.value===e)||this.explodeScope.append(new Option(e,e)),this.explodeScope.value=e}renderCuts(){this.cutList.replaceChildren(),this.scalpel.list.forEach((e,t)=>{const n=document.createElement("li");n.className="pin-item";const i=$n("row"),s=document.createElement("span");s.className="title",s.textContent=`Cut ${t+1}: ${this.h.nameOf(e.targets[0])}${e.targets.length>1?` + ${e.targets.length-1} more`:""}`;const o=ei("🗑",()=>this.scalpel.remove(e.id));o.title="Remove this cut",o.className="icon-del",i.append(s,o),n.append(i),this.cutList.append(n)})}syncExplode(){const e=this.explode.value;this.explodeSlider.value=String(Math.round(e.amount*100)),this.explodeValue.textContent=`${Math.round(e.amount*100)}%`,this.explodeScope.value!==e.scope&&this.fillScopes();for(const[t,n]of this.centreButtons)n.classList.toggle("active",t===e.centre)}syncClip(){const e=this.clipping.current;for(const[t,n]of this.modeButtons)n.classList.toggle("active",t===e.mode);this.slider.value=String(e.position),this.slider.disabled=e.mode==="off",this.flip.checked=e.flip,this.caps.checked=e.caps}renderPins(){const e=this.pins.list();if(this.pinList.replaceChildren(),!e.length){const t=document.createElement("li");t.className="empty",t.textContent="No pins yet. Press “Add pin” and click a structure.",this.pinList.append(t);return}e.forEach((t,n)=>{const i=document.createElement("li");i.className="pin-item",i.dataset.pin=t.id;const s=$n("row"),o=document.createElement("span");o.className="pin-dot",o.style.background=t.color,o.textContent=String(n+1);const a=document.createElement("span");a.className="title",a.textContent=this.h.nameOf(t.structureId),a.dir="auto",a.title="Show this pin",a.addEventListener("click",()=>this.h.focusPin(t));const c=ei("🗑",()=>{this.pins.remove(t.id),this.h.pinsChanged()});c.title="Delete pin",c.className="icon-del",s.append(o,a,c);const l=document.createElement("textarea");l.placeholder="Note…",l.value=t.note,l.addEventListener("change",()=>{this.pins.update(t.id,{note:l.value}),this.h.pinsChanged()}),i.append(s,l),this.pinList.append(i)})}}function Fs(r,e){const t=document.createElement("section");t.className="tool-section";const n=document.createElement("h3");return n.textContent=e,t.append(n),r.append(t),t}function $n(r,...e){const t=document.createElement("div");return t.className=r,t.append(...e),t}function ei(r,e){const t=document.createElement("button");return t.textContent=r,t.addEventListener("click",e),t}function Bs(r){const e=document.createElement("input");return e.type="checkbox",e.addEventListener("change",r),e}function hn(r,e){const t=document.createElement("label");t.className="row";const n=document.createElement("span");return n.textContent=r,t.append(n,e),t}function oa(r){const e=document.createElement("p");return e.className="credits",e.textContent=r,e}const Pr={arterial:"#e0262f",venous:"#2f6fe0",supplied:"#ff9f1a",target:"#ffd23f"};class Mb{constructor(e,t,n,i){this.panel=e,this.title=t,this.body=n,this.h=i}state=null;lastResult={};get current(){return this.state?{...this.state}:null}get active(){return this.state!==null}async start(e,t=this.state?.mode??"arterial",n=this.state?.flow??!1,i=this.state?.speed??.12){this.state={id:e,mode:t,flow:n,speed:i},this.h.opened(),this.panel.hidden=!1,this.title.textContent=`Blood supply: ${this.h.nameOf(e)}`,this.title.dir="auto",this.body.replaceChildren(at("p","empty","Tracing…")),await this.h.ensureCardiovascular();const s=await this.h.graph();this.state?.id===e&&this.render(s)}setMode(e){this.state&&this.start(this.state.id,e)}end(){this.state=null,this.panel.hidden=!0,this.h.flow(null,0),this.h.highlight(new Map)}render(e){const{id:t,mode:n}=this.state,i=n==="both"?["arterial","venous"]:[n];this.lastResult={};const s=new Map,o=new Set([t]);this.body.replaceChildren();const a=at("div","seg");for(const[g,x]of[["arterial","Arterial"],["venous","Venous"],["both","Both"]]){const m=at("button",g===n?"active":"",x);m.addEventListener("click",()=>this.setMode(g)),a.append(m)}this.body.append(a);const c=at("div","flow-row"),l=at("input");l.type="checkbox",l.checked=!!this.state.flow;const h=at("label","","");h.append(l,document.createTextNode(" Animated flow"));const u=at("input");Object.assign(u,{type:"range",min:"0.02",max:"0.4",step:"0.01",value:String(this.state.speed??.12),title:"Speed"}),u.disabled=!l.checked,c.append(h,u),this.body.append(c);const d=[];l.addEventListener("change",()=>{this.state.flow=l.checked,u.disabled=!l.checked,this.h.flow(l.checked?d:null,Number(u.value))}),u.addEventListener("input",()=>{this.state.speed=Number(u.value),l.checked&&this.h.flow(d,Number(u.value))});for(const g of i){const x=e.chain(t,g);this.lastResult[g]=x;const m=g==="arterial"?Pr.arterial:Pr.venous,p=at("section","trace-section");p.append(at("h3","",g==="arterial"?"Arterial supply (from the heart)":"Venous drainage (back to the heart)")),x.notApplicable?p.append(at("p","empty",x.notApplicable==="artery"?"This is an artery: blood flows away from the heart through it (see the arterial route).":"This is a vein: blood flows back to the heart through it (see the venous route).")):x.status==="none"?p.append(at("p","empty",g==="arterial"?"No arterial supply data for this structure in the open sources yet.":"No venous drainage data for this structure in the open sources yet.")):(x.inheritedFrom&&p.append(at("p","note",`Using the data for ${this.h.baseName(x.inheritedFrom)}.`)),x.status==="partial"&&p.append(at("p","note","Part of this route is missing in the sources, so a chain stops before the heart.")),x.paths.forEach((_,y)=>{x.paths.length>1&&p.append(at("div","path-title",`Route ${y+1}`)),p.append(this.renderPath(_,m)),d.push({kind:g,steps:_});for(const v of _)for(const S of v.ids)S!==t&&s.set(S,m),o.add(S)})),this.body.append(p)}const f=e.reverse(t);if(f.supplies.length||f.drains.length||f.branches.length){const g=at("section","trace-section");g.append(at("h3","","This vessel"));const x=this.h.sideOf(t),m=(p,_)=>{if(!_.length)return;g.append(at("div","path-title",p));const y=at("ul","trace-list");for(const v of _.sort()){const S=e.idsFor(v,x),R=at("li",S.length?"":"missing"),A=at("span","dot");A.style.background=Pr.supplied;const P=at("span","",this.h.baseName(v)+(S.length?"":" (not in 3D model)"));P.dir="auto",R.append(A,P),S.length&&R.addEventListener("click",()=>this.h.focusStep(S)),y.append(R);for(const b of S)s.has(b)||s.set(b,Pr.supplied)}g.append(y)};m("Supplies",f.supplies),m("Drains",f.drains),m("Branches / tributaries",f.branches),this.body.append(g)}s.set(t,Pr.target),this.h.highlight(s),this.h.frame([...o]),this.h.flow(this.state.flow&&d.length?d:null,this.state.speed??.12),this.state.flow&&!d.length&&c.append(at("span","note","No route to animate.")),this.body.append(at("p","note","Animated flow is schematic and educational, not a simulation.")),this.body.append(at("p","credits",`Relations: ${e.source}. Open databases can be incomplete or contain errors — every step links to its source.`))}renderPath(e,t){const n=at("ol","trace-list");for(const i of e){const s=at("li",i.ids.length?"":"missing"),o=at("span","dot");o.style.background=t;const a=at("span","",this.h.baseName(i.base)+(i.ids.length?"":" (not in 3D model)"));if(a.dir="auto",s.append(o,a),i.link){const c=i.link.source,l=c.startsWith("wikidata:")?`https://www.wikidata.org/wiki/${c.slice(9).split("#")[0]}`:`https://purl.obolibrary.org/obo/${c.slice(7).split("#")[0].replace(":","_")}`,h=at("a","src","source");h.href=l,h.target="_blank",h.rel="noopener",h.title=`${i.link.rel.replace(/_/g," ")} — ${c}`,h.addEventListener("click",u=>u.stopPropagation()),s.append(h)}i.ids.length&&s.addEventListener("click",()=>this.h.focusStep(i.ids)),n.append(s)}return n}}function at(r,e="",t){const n=document.createElement(r);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}let Gd=null;function bb(){return Gd??=fetch("data/vessel-lines.json",{cache:"no-cache"}).then(r=>r.ok?r.json():{}).catch(()=>({})),Gd}const wb=.03,Tb=600;class Eb{constructor(e,t,n){this.viewer=e,this.state=t,this.clipPlanes=n,this.group.name="blood-flow",e.scene.add(this.group)}tracks=[];group=new ri;animate=e=>this.update(e);running=!1;speed=.12;offsetOf=()=>null;get active(){return this.running}async show(e){this.clear();const t=await bb();let n=Tb;for(const i of e){const s=this.routePoints(i.steps,t);if(s.length<2)continue;i.kind==="venous"&&s.reverse();const o=s.map(d=>d.p),a=[0];for(let d=1;d<o.length;d++)a.push(a[d-1]+o[d].distanceTo(o[d-1]));const c=a[a.length-1],l=Math.max(2,Math.min(n,Math.round(c/wb)));n-=l;const h=new Oi({color:i.kind==="arterial"?"#ff3b3b":"#4a8bff",depthTest:!1,transparent:!0,opacity:.95,clippingPlanes:this.clipPlanes}),u=new dh(new xh(.0035,8,6),h,l);if(u.renderOrder=10,u.frustumCulled=!1,this.group.add(u),this.tracks.push({points:o,owners:s.map(d=>d.id),lengths:a,total:c,mesh:u,count:l}),n<=0)break}this.tracks.length&&(this.running=!0,this.viewer.addAnimation(this.animate))}clear(){this.running&&this.viewer.removeAnimation(this.animate),this.running=!1;for(const e of this.tracks)e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.group.remove(e.mesh);this.tracks=[],this.viewer.requestRender()}routePoints(e,t){const n=[];for(const s of e)for(const o of s.ids){const a=t[o];if(a?.length)n.push(a.map(c=>({p:new D(...c),id:o})));else if(this.state.has(o)){const c=this.state.bounds([o]).getCenter(new D),l=this.offsetOf(o);n.push([{p:l?c.sub(l):c,id:o}])}}if(!n.length)return[];if(n.length>1&&n[0].length>1){const s=n[1],o=a=>Math.min(a.p.distanceToSquared(s[0].p),a.p.distanceToSquared(s[s.length-1].p));o(n[0][0])<o(n[0][n[0].length-1])&&n[0].reverse()}const i=[...n[0]];for(const s of n.slice(1)){const o=i[i.length-1].p;s.length>1&&o.distanceToSquared(s[s.length-1].p)<o.distanceToSquared(s[0].p)&&s.reverse(),i.push(...s)}return i}update(e){const t=e/1e3,n=new Ce,i=new D,s=new D;for(const o of this.tracks){for(let a=0;a<o.count;a++){const c=((t*this.speed+a/o.count*o.total)%o.total+o.total)%o.total;let l=0,h=o.lengths.length-1;for(;h-l>1;){const g=l+h>>1;o.lengths[g]<=c?l=g:h=g}const u=o.lengths[h]-o.lengths[l]||1,d=this.offsetOf(o.owners[l]),f=this.offsetOf(o.owners[h]);i.copy(o.points[l]),d&&i.add(d),s.copy(o.points[h]),f&&s.add(f),i.lerp(s,(c-o.lengths[l])/u),n.makeTranslation(i.x,i.y,i.z),o.mesh.setMatrixAt(a,n)}o.mesh.instanceMatrix.needsUpdate=!0}}}const $f={amount:0,scope:"all",centre:"group"},Lr=new D,Ab=500;class Rb extends EventTarget{constructor(e,t,n){super(),this.viewer=e,this.state=t,this.catalog=n,t.addEventListener("change",()=>{this.s.amount<=0&&!this.current.size||this.dirty||(this.dirty=!0,queueMicrotask(()=>{this.dirty=!1,this.retarget()}))})}s={...$f};current=new Map;from=new Map;to=new Map;unitCache=new Map;originals=new Map;t0=0;animating=!1;dirty=!1;animate=e=>this.step(e);originalPosition=()=>null;get value(){return{...this.s,ids:this.s.ids?[...this.s.ids]:void 0}}get active(){return this.s.amount>0}set(e,t=!0){this.s={...this.s,...e},this.s.scope!=="selection"&&delete this.s.ids,this.s.amount=Math.max(0,Math.min(1,this.s.amount)),this.retarget(t),this.dispatchEvent(new Event("change"))}collapse(){this.set({amount:0})}offsetOf(e){return this.current.get(this.unitOf(e))??Lr}unitOf(e){let t=this.unitCache.get(e);if(t)return t;t=e;for(let n=this.catalog.nodes[t]?.parent;n&&this.catalog.nodes[n]?.mesh;n=this.catalog.nodes[n].parent)t=n;return this.unitCache.set(e,t),t}centreOf(e){const t=this.catalog.nodes[e]?.bbox;return t?new D((t[0]+t[3])/2,(t[1]+t[4])/2,(t[2]+t[5])/2):null}targets(){const e=new Map;if(this.s.amount<=0)return e;const t=this.s.scope==="selection"?new Set((this.s.ids??[]).map(l=>this.unitOf(l))):null,n=new Map;for(const l of this.state.ids()){const h=this.catalog.nodes[l];if(!h||!t&&this.s.scope!=="all"&&h.system!==this.s.scope)continue;const u=this.unitOf(l);if(t&&!t.has(u))continue;let d=n.get(u);if(!d){const f=this.centreOf(u);if(!f)continue;d={c:f,visible:!1,group:this.catalog.nodes[u]?.parent??""},n.set(u,d)}this.state.isVisible(l)&&(d.visible=!0)}if(n.size<2)return e;const i=l=>{const h=l.filter(u=>u.visible);return new et().setFromPoints((h.length?h:l).map(u=>u.c)).getCenter(new D)},s=[...n.values()],o=i(s),a=new Map;if(this.s.centre==="group"){const l=new Map;for(const h of s)l.set(h.group,[...l.get(h.group)??[],h]);for(const[h,u]of l)a.set(h,i(u))}const c=this.s.amount;for(const[l,h]of n){const u=new D;if(this.s.centre==="group"){const d=a.get(h.group);u.subVectors(h.c,d).multiplyScalar(1.5).addScaledVector(d.clone().sub(o),.5)}else u.subVectors(h.c,o);u.multiplyScalar(c),u.lengthSq()>1e-12&&e.set(l,u)}return e}retarget(e=!0){const t=this.targets();if(!(t.size===this.to.size&&[...t].every(([i,s])=>this.to.get(i)?.distanceToSquared(s)<1e-12)&&(this.animating||this.mapsEqual(this.current,t)))){if(this.from=new Map([...this.current].map(([i,s])=>[i,s.clone()])),this.to=t,!e){this.finish();return}this.t0=performance.now(),this.animating||(this.animating=!0,this.viewer.addAnimation(this.animate))}}mapsEqual(e,t){return e.size===t.size&&[...t].every(([n,i])=>e.get(n)?.distanceToSquared(i)<1e-12)}step(e){const t=Math.min(1,(e-this.t0)/Ab);if(t>=1)return this.finish();const n=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,i=new Map;for(const s of new Set([...this.from.keys(),...this.to.keys()])){const o=(this.from.get(s)??Lr).clone().lerp(this.to.get(s)??Lr,n);o.lengthSq()>1e-12&&i.set(s,o)}this.current=i,this.apply()}finish(){this.current=new Map([...this.to].map(([e,t])=>[e,t.clone()])),this.apply(),this.animating&&(this.animating=!1,this.viewer.removeAnimation(this.animate)),this.dispatchEvent(new Event("settled"))}apply(){const e=new D,t=new We;for(const n of this.state.ids()){const i=this.offsetOf(n);for(const s of this.state.meshes(n)){let o=this.originals.get(s);if(!o){if(i===Lr)continue;o=this.originalPosition(s)??s.position.clone(),this.originals.set(s,o)}s.position.copy(o),i!==Lr&&(t.setFromMatrix4(s.parent.matrixWorld).invert(),s.position.add(e.copy(i).applyMatrix3(t))),s.updateMatrixWorld()}}this.viewer.requestRender()}}class Ch{constructor(e){this.catalog=e}list=[];static async load(e){const t=new Ch(e),n=await fetch("data/region-presets.json",{cache:"no-cache"});if(!n.ok)throw new Error(`region-presets.json: HTTP ${n.status}`);const i=await n.json();for(const s of i.presets){const o=s.boxes.flatMap(a=>t.boxesFor(a,i.margin));if(!o.length){console.warn(`Region preset "${s.id}": no matching regions in the catalog`);continue}t.list.push({id:s.id,name:s.name,view:new D(...s.view).normalize(),side:s.side,boxes:o,exclude:(s.exclude??[]).flatMap(a=>t.boxesFor(a,0)),include:new Set((s.include??[]).flatMap(a=>rn(e,a))),omit:new Set((s.omit??[]).flatMap(a=>rn(e,a)))})}return t}get(e){return this.list.find(t=>t.id===e)}contains(e,t){const n=this.catalog.nodes[t],i=n?.bbox;if(!i||e.side&&n.side!==e.side||e.omit.has(t))return!1;if(e.include.has(t))return!0;const s=new D((i[0]+i[3])/2,(i[1]+i[4])/2,(i[2]+i[5])/2);return e.boxes.some(o=>o.containsPoint(s))&&!e.exclude.some(o=>o.containsPoint(s))}bounds(e){const t=new et;for(const n of e.boxes)t.union(n);return t}boxesFor(e,t){const n=e.split?e.regions.flatMap(s=>this.catalog.nodes[s]?.children??[]):[e.regions],i=[];for(const s of n){const o=new Map;for(const a of Array.isArray(s)?s:[s])for(const c of rn(this.catalog,a)){const l=this.catalog.nodes[c];if(!l.bbox||e.side&&l.side!==e.side)continue;const h=e.split?l.side:"";o.has(h)||o.set(h,new et),o.get(h).union(new et(new D(l.bbox[0],l.bbox[1],l.bbox[2]),new D(l.bbox[3],l.bbox[4],l.bbox[5])))}for(const a of o.values())i.push(a.expandByScalar(t))}return i}}const Dr=4,ks=5;class Cb extends EventTarget{constructor(e,t){super(),this.viewer=e,this.state=t,e.onBeforeRender(()=>this.updateView())}cuts=[];byStructure=new Map;uniforms=new WeakMap;hooked=new WeakSet;tmpPlane=new An;viewPlanes=new Map;updateView(){if(!this.cuts.length)return;const e=this.viewer.camera.matrixWorldInverse;for(const t of this.cuts){const n=this.viewPlanes.get(t.id)??t.planes.map(()=>new nt);t.planes.forEach(([i,s,o,a],c)=>{this.tmpPlane.set(new D(i,s,o),a).applyMatrix4(e),n[c].set(this.tmpPlane.normal.x,this.tmpPlane.normal.y,this.tmpPlane.normal.z,this.tmpPlane.constant)}),this.viewPlanes.set(t.id,n)}}get list(){return this.cuts}patch(e,t){let n=this.uniforms.get(e);n||(n={uCutCount:{value:0},uCutPlanes:{value:Array.from({length:Dr*ks},()=>new nt)}},this.uniforms.set(e,n)),t.uniforms.uCutCount=n.uCutCount,t.uniforms.uCutPlanes=n.uCutPlanes;const i=Dr*ks;t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform int uCutCount;
uniform vec4 uCutPlanes[${i}];
vec3 cutCapNormal = vec3(0.0);
bool cutCap = false;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (uCutCount > 0) {
          vec3 cp = -vViewPosition;
          float best = -1e9;
          for (int w = 0; w < ${Dr}; w++) {
            if (w >= uCutCount) break;
            float mn = 1e9; vec3 mnN = vec3(0.0);
            for (int k = 0; k < ${ks}; k++) {
              vec4 pl = uCutPlanes[w * ${ks} + k];
              float s = dot(pl.xyz, cp) + pl.w;
              if (s < mn) { mn = s; mnN = pl.xyz; }
            }
            if (mn > 0.0) discard; // inside this window: removed
            if (mn > best) { best = mn; cutCapNormal = mnN; }
          }
          // Back faces just behind a cut wall are its "cap".
          cutCap = !gl_FrontFacing && best > -0.004;
        }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
if (cutCap) normal = normalize(cutCapNormal);`)}cutRect(e,t,n,i,s,o,a){if(o=o.filter(A=>this.state.has(A)&&(this.byStructure.get(A)?.length??0)<Dr),!o.length||Math.abs(n-e)<4||Math.abs(i-t)<4)return null;const c=this.viewer.camera,l=this.viewer.canvas.getBoundingClientRect(),h=(A,P)=>new D((A-l.left)/l.width*2-1,-((P-l.top)/l.height)*2+1,.5).unproject(c).sub(c.position).normalize(),[u,d]=[Math.min(e,n),Math.max(e,n)],[f,g]=[Math.min(t,i),Math.max(t,i)],x=[h(u,f),h(d,f),h(d,g),h(u,g)],m=h((u+d)/2,(f+g)/2),p=c.position.clone(),_=[];for(let A=0;A<4;A++){const P=new D().crossVectors(x[A],x[(A+1)%4]).normalize();P.dot(m)<0&&P.negate(),_.push([P.x,P.y,P.z,-P.dot(p)])}const y=c.getWorldDirection(new D),S=(a?a.clone().sub(p).dot(y):this.state.bounds(o).getCenter(new D).sub(p).dot(y))+s;_.push([-y.x,-y.y,-y.z,y.dot(p)+S]);const R={id:crypto.randomUUID(),targets:o,planes:_};return this.cuts.push(R),this.reindex(),R}remove(e){this.cuts=this.cuts.filter(t=>t.id!==e),this.reindex()}clear(){this.cuts=[],this.reindex()}setAll(e){this.cuts=e.map(t=>({...t,targets:[...t.targets],planes:t.planes.map(n=>[...n])})),this.reindex()}keeps(e,t){const n=t?this.byStructure.get(t):void 0;return n?!n.some(i=>i.planes.every(([s,o,a,c])=>s*e.x+o*e.y+a*e.z+c>0)):!0}reindex(){this.byStructure.clear();for(const e of[...this.viewPlanes.keys()])this.cuts.some(t=>t.id===e)||this.viewPlanes.delete(e);this.updateView();for(const e of this.cuts)for(const t of e.targets)this.byStructure.set(t,[...this.byStructure.get(t)??[],e]);for(const e of this.byStructure.keys())for(const t of this.state.meshes(e)){if(this.hooked.has(t))continue;this.hooked.add(t);const n=t.onBeforeRender;t.onBeforeRender=(i,s,o,a,c,l)=>{n.call(t,i,s,o,a,c,l),this.sync(t.name,c)}}this.dispatchEvent(new Event("change")),this.viewer.requestRender()}sync(e,t){const n=this.uniforms.get(t);if(!n)return;const i=this.byStructure.get(e)??[];n.uCutCount.value=Math.min(i.length,Dr);for(let s=0;s<n.uCutCount.value;s++){const o=this.viewPlanes.get(i[s].id);if(o)for(let a=0;a<ks;a++)n.uCutPlanes.value[s*ks+a].copy(o[a])}}}const ep="serviceWorker"in navigator&&location.protocol.startsWith("http")&&!0;function Pb(){ep&&(navigator.serviceWorker.register("sw.js").catch(r=>console.warn("Offline support unavailable:",r)),navigator.storage?.persist?.().catch(()=>{}))}async function tp(r){const e=new Set([...r.systems.map(t=>t.file),"data/muscle-facts.json","data/vascular-graph.json","data/vessel-lines.json","data/exam-tracks.json","data/dissections.json"]);try{const t=await fetch("data/i18n/languages.json").then(n=>n.json());for(const n of t)e.add(`data/i18n/names-${n.code}.json`)}catch{}for(const t of Object.values(r.nodes))t.desc&&e.add(`data/descriptions/${encodeURIComponent(t.desc)}.json`);return[...e]}async function Lb(r){const e=await tp(r);if(!("caches"in window))return{stored:0,total:e.length};let t=0;for(const n of e)await caches.match(new URL(n,location.href).href)&&t++;return{stored:t,total:e.length}}async function Db(r,e){const t=await tp(r);let n=0,i=0;const s=[...t],o=async()=>{for(let a=s.shift();a;a=s.shift()){try{const c=await fetch(a);c.ok||i++,await c.arrayBuffer()}catch{i++}e(++n,t.length)}};return await Promise.all(Array.from({length:6},o)),i}class Ib extends EventTarget{constructor(e,t,n){super(),this.viewer=e,this.state=t,this.catalog=n,e.onBeforeRender(()=>this.frame(performance.now()))}heart={on:!1,bpm:70};breathing={on:!1,perMinute:14};phase={heart:"",breathing:""};t0=performance.now();tracked=new Map;keepRendering=()=>{};running=!1;offsetOf=()=>new D;originalPosition(e){return this.tracked.get(e)?.pos.clone()??null}setHeart(e,t=this.heart.bpm){this.heart={on:e,bpm:t},this.refresh()}setBreathing(e,t=this.breathing.perMinute){this.breathing={on:e,perMinute:t},this.refresh()}ids(e,t=()=>!0){return e.flatMap(n=>rn(this.catalog,n)).filter(n=>this.state.has(n)&&t(n))}heartIds(){return this.ids(["cardiovascular:Heart.g","cardiovascular:Arteries of heart.g","cardiovascular:Cardiac veins.g"])}lungIds(){return this.ids(["visceral:Respiratory system.g"],e=>/\b(lung|bronch\w*|pleura)\b/i.test(e))}diaphragmIds(){return["muscular:Diaphragm","muscular:Diaphragmatic fascia"].filter(e=>this.state.has(e))}refresh(){const e=new Set([...this.heart.on?this.heartIds():[],...this.breathing.on?[...this.lungIds(),...this.diaphragmIds()]:[]]);for(const[n,i]of[...this.tracked])e.has(i.id)||(n.position.copy(i.pos).add(this.offsetOf(i.id)),n.scale.copy(i.scale),n.updateMatrixWorld(),this.tracked.delete(n));for(const n of e)for(const i of this.state.meshes(n))this.tracked.has(i)||this.tracked.set(i,{id:n,pos:i.position.clone().sub(this.offsetOf(n)),scale:i.scale.clone()});const t=this.tracked.size>0;t&&!this.running&&this.viewer.addAnimation(this.keepRendering),!t&&this.running&&this.viewer.removeAnimation(this.keepRendering),this.running=t,t||(this.phase={heart:"",breathing:""}),this.viewer.requestRender(),this.dispatchEvent(new Event("change"))}centre(e){const t=new et;for(const n of e){const i=this.catalog.nodes[n]?.bbox;i&&t.union(new et(new D(i[0],i[1],i[2]),new D(i[3],i[4],i[5])))}return t}frame(e){if(!this.running)return;const t=(e-this.t0)/1e3,n=new Map;if(this.heart.on){const i=this.heartIds(),s=this.centre(i.filter(l=>/atrium|ventricle/i.test(l))).getCenter(new D),o=t*this.heart.bpm/60%1,a=o<.12?Math.sin(Math.PI*o/.12):0,c=o>=.12&&o<.45?Math.sin(Math.PI*(o-.12)/.33):0;this.phase.heart=o<.12?"atria contracting":o<.45?"ventricles contracting":"relaxing";for(const l of i){const h=/atri/i.test(l)?1-.07*a:1-.09*c;n.set(l,{s:new D(h,h,h),pivot:s})}}if(this.breathing.on){const i=t*this.breathing.perMinute/60%1,s=.5-.5*Math.cos(2*Math.PI*i);this.phase.breathing=i<.5?"breathing in":"breathing out";for(const o of["left","right"]){const a=this.lungIds().filter(u=>new RegExp(`\\b${o}\\b`,"i").test(u)||!/\b(left|right)\b/i.test(u)&&o==="right"),c=this.centre(a),l=new D((c.min.x+c.max.x)/2,c.max.y,(c.min.z+c.max.z)/2),h=new D(1+.05*s,1+.1*s,1+.06*s);for(const u of a)n.set(u,{s:h,pivot:l})}for(const o of this.diaphragmIds())n.set(o,{s:new D(1,1,1),pivot:new D,shift:new D(0,-.018*s,0)})}for(const[i,s]of this.tracked){const o=n.get(s.id),a=this.offsetOf(s.id);if(!o)continue;const c=new D(1,1,1).sub(o.s);i.position.copy(s.pos).add(a).add(c.multiply(o.pivot)),o.shift&&i.position.add(o.shift),i.scale.copy(s.scale).multiply(o.s),i.updateMatrixWorld()}}}const Nb="#ffb400",Wd="#3ec46d",Xd="#ff5a5f",Ub=[10,20,30];class Ob{constructor(e,t,n,i,s,o,a){this.panel=e,this.body=t,this.catalog=n,this.state=i,this.engine=s,this.store=o,this.h=a,e.addEventListener("keydown",c=>{c.key==="Enter"&&this.answered&&(c.preventDefault(),this.next())})}tracks=[];dissections=[];progress={};sessions=[];count=10;questions=[];index=0;answers=[];session=null;answered=!1;dissection=null;get active(){return!!this.session}async open(){if(this.h.opened(),this.panel.hidden=!1,!this.tracks.length){const[e,t]=await Promise.all([fetch("data/exam-tracks.json",{cache:"no-cache"}).then(n=>n.json()),fetch("data/dissections.json",{cache:"no-cache"}).then(n=>n.json())]);this.tracks=e.tracks,this.dissections=t.dissections,this.progress=await this.store.getValue("quiz-progress")??{},this.sessions=await this.store.getValue("quiz-sessions")??[]}this.session?this.renderQuestion():this.dissection?this.renderStep():this.renderHome()}close(){this.session&&this.endQuiz(!1),this.dissection&&this.endDissection(),this.panel.hidden=!0}renderHome(){const e=this.body;e.replaceChildren();const t=qe("p","credits","Questions come only from the model's names and groups, Z-Anatomy attachment areas and the sourced vascular graph. Fact answers show their source."),n=document.createElement("select");for(const c of Ub)n.append(new Option(`${c} questions`,String(c),!1,c===this.count));n.addEventListener("change",()=>this.count=Number(n.value));const i=en("Quiz what's visible",()=>void this.startVisible());i.title="Find, name and pick structures that are shown right now",e.append(Hs("Quiz"),t,zs(n,i)),e.append(Hs("Exam tracks"));const s=qe("ul","quiz-tracks");for(const c of this.tracks){const l=this.engine.pool(c.groups),h=RM(this.progress,l),u=qe("li","quiz-track"),d=qe("div","title",c.name),f=qe("div","bar"),g=qe("span");g.style.width=`${h.total?h.mastered/h.total*100:0}%`,f.append(g);const x=qe("div","stat",`${h.mastered} of ${h.total} mastered · ${h.seen} seen · ${c.kinds.join(", ")}`),m=en("Start",()=>void this.startTrack(c));u.append(qe("div","info",d,f,x),m),s.append(u)}e.append(s),e.append(Hs("Guided dissection"));const o=qe("ul","quiz-tracks");for(const c of this.dissections){const l=qe("li","quiz-track");l.append(qe("div","info",qe("div","title",c.name),qe("div","stat",`${c.steps.length} steps · loads ${c.systems.join(", ")}`)),en("Start",()=>void this.startDissection(c))),o.append(l)}if(e.append(o),e.append(Hs("History")),!this.sessions.length)e.append(qe("p","credits","No quizzes yet."));else{const c=qe("ul","quiz-history");for(const l of this.sessions.slice(0,8))c.append(qe("li","",`${new Date(l.date).toLocaleString()} — ${l.name}: ${l.score}/${l.total}`));e.append(c)}const a=en("Reset progress",()=>{confirm("Delete all quiz progress and history on this device?")&&(this.progress={},this.sessions=[],this.save(),this.renderHome())});a.className="quiz-reset",e.append(qe("p","credits","Progress is stored only in this browser (IndexedDB)."),a)}async startTrack(e){await this.h.loadSystems(e.systems),await this.engine.prepare(e.kinds);const t=this.engine.pool(e.groups).filter(s=>this.state.has(s)),n=this.engine.make(t,e.kinds,this.count,this.progress,s=>this.state.has(s));if(!n.length)return this.h.toast("No questions available for this track yet");const i=e.systems.includes("skeletal")&&!e.groups.some(s=>s.startsWith("skeletal:"))?rn(this.catalog,"skeletal").filter(s=>this.state.has(s)&&!this.catalog.nodes[s].hiddenByDefault&&this.catalog.nodes[s].kind==="structure"):[];this.h.frame(t),this.begin(e.id,e.name,n,[...t,...i])}async startVisible(e,t="Visible structures"){const n=(e??[...this.state.ids()]).filter(s=>this.state.isVisible(s)&&this.catalog.nodes[s]?.kind==="structure");await this.engine.prepare(["find","name","choice"]);const i=this.engine.make(n,e?["find","choice"]:["find","name","choice"],this.count,this.progress,s=>this.state.isVisible(s));if(!i.length)return this.h.toast("Nothing to quiz — show some structures first");this.begin("visible",t,i,null)}begin(e,t,n,i){const s=i?this.state.snapshot():null;this.session={track:e,name:t,restore:s,mirror:this.state.mirror},this.state.mirror=!1,this.state.select(null),i&&this.state.isolate(i),this.questions=n,this.index=0,this.answers=[],this.h.setBlocking(!0),this.renderQuestion()}renderQuestion(){const e=this.questions[this.index];if(!e)return this.finish();this.answered=!1;const t=this.body;t.replaceChildren();const n=this.answers.filter(o=>o.ok).length;t.append(qe("div","quiz-progress",`${this.session.name} · question ${this.index+1} of ${this.questions.length} · score ${n}`)),t.append(qe("h3","quiz-prompt",e.prompt)),this.state.setHighlights(e.target&&e.kind!=="find"?new Map([[e.target,Nb]]):new Map),e.target&&e.kind!=="find"&&this.h.frame([e.target],3),e.kind!=="find"&&!e.target&&(e.kind==="origin"||e.kind==="insertion"||e.kind==="branch"||e.kind==="supply")&&t.append(qe("p","credits","(This structure is not in the 3D model.)"));const i=qe("div","quiz-feedback"),s=o=>{if(this.answered)return;this.answered=!0,this.h.interceptClick(null);const a=this.engine.grade(e,o);AM(this.progress,e.key,a),this.answers.push({q:e,ok:a,given:o}),this.save(),this.showFeedback(e,a,o,i),t.querySelectorAll(".quiz-option").forEach(c=>{c.disabled=!0,e.correct.includes(c.textContent??"")?c.classList.add("right"):c.textContent===o&&c.classList.add("wrong")})};if(e.kind==="find"){t.append(qe("p","credits","Click it in the 3D view. Rotate and zoom as needed."));const o=a=>{if(a)return s(a.id);this.h.toast("Nothing there — try again"),this.h.interceptClick(o)};this.h.interceptClick(o)}else if(e.kind==="name"){const o=document.createElement("input");o.type="text",o.placeholder="Name (any language, Latin, typos OK)",o.className="quiz-input",o.addEventListener("keydown",a=>{a.key==="Enter"&&!this.answered&&(a.preventDefault(),a.stopPropagation(),s(o.value))}),t.append(zs(o,en("Check",()=>s(o.value)))),setTimeout(()=>o.focus(),0)}else{const o=qe("div","quiz-options");for(const a of e.options??[]){const c=en(a,()=>s(a));c.className="quiz-option",o.append(c)}t.append(o)}t.append(i,zs(en("Skip / show answer",()=>s(null)),en("End quiz",()=>this.endQuiz(!0))))}showFeedback(e,t,n,i){if(i.replaceChildren(),i.className=`quiz-feedback ${t?"ok":"bad"}`,i.append(qe("strong","",t?"✓ Correct":n==null?"Answer":"✗ Not quite")),i.append(qe("div","",e.kind==="find"&&!t&&n?`You clicked: ${this.h.nameOf(n)}. Correct: ${e.reveal}`:`Correct: ${e.reveal}`)),e.source){const o=qe("div","credits","Source: ");for(const a of e.source.split(" ")){const c=Yf(a);if(c.url){const l=document.createElement("a");l.href=c.url,l.target="_blank",l.rel="noopener",l.textContent=c.label,o.append(l," ")}else o.append(`${c.label} `)}i.append(o)}if(e.kind==="find"){const o=new Map([[e.target,Wd]]);!t&&n&&n!==e.target&&o.set(n,Xd),this.state.setHighlights(o),this.h.frame([...o.keys()],2)}else e.target&&this.state.setHighlights(new Map([[e.target,t?Wd:Xd]]));const s=en(this.index+1<this.questions.length?"Next (Enter)":"See results",()=>this.next());i.append(s),s.focus()}next(){this.index++,this.renderQuestion()}finish(){const e=this.session,t=this.answers.filter(a=>a.ok).length;this.sessions.unshift({track:e.track,name:e.name,date:Date.now(),score:t,total:this.answers.length}),this.sessions=this.sessions.slice(0,200),this.save();const n=this.answers.filter(a=>!a.ok),i=this.body;if(i.replaceChildren(),i.append(Hs("Result"),qe("p","quiz-score",`${t} of ${this.answers.length} correct`)),n.length){i.append(qe("p","credits","Missed:"));const a=qe("ul","quiz-history");for(const c of n)a.append(qe("li","",`${c.q.prompt} → ${c.q.reveal}`));i.append(a)}const s=n.map(a=>a.q),o=[en("Back to tracks",()=>this.endQuiz(!0))];s.length&&o.unshift(en("Retry missed",()=>{this.questions=s,this.index=0,this.answers=[],this.renderQuestion()})),i.append(zs(...o)),this.state.setHighlights(new Map)}endQuiz(e){const t=this.session;t&&(this.h.interceptClick(null),this.state.setHighlights(new Map),t.restore&&this.state.restore(t.restore),this.state.mirror=t.mirror,this.session=null,this.h.setBlocking(!1),e&&(this.dissection?this.renderStep():this.renderHome()))}save(){return Promise.all([this.store.setValue("quiz-progress",this.progress),this.store.setValue("quiz-sessions",this.sessions)])}async startDissection(e){const t=this.state.snapshot();await this.h.loadSystems(e.systems),this.h.applyRegion(e.region);const n=this.state.maxLayer(),i=e.steps.filter(s=>!s.peel||s.peel<=n);this.dissection={d:e,steps:i,step:0,base:this.state.snapshot(),before:t},this.goStep(0)}goStep(e){const t=this.dissection;t.step=Math.max(0,Math.min(t.steps.length-1,e));const n=new Set(t.base.hidden);let i=0;for(const o of t.steps.slice(0,t.step+1)){for(const a of o.hide??[])for(const c of rn(this.catalog,a))n.add(c);for(const a of o.show??[])for(const c of rn(this.catalog,a))n.delete(c);o.peel&&(i=Math.max(i,o.peel))}const s=new Set([...this.state.ids()].filter(o=>this.state.isVisible(o)));this.state.restore({...t.base,hidden:[...n],peel:i,selected:[]},!1),this.removed=[...s].filter(o=>!this.state.isVisible(o)&&this.catalog.nodes[o]?.kind==="structure"),this.renderStep()}removed=[];outermost(){const e=this.state.peelLevel,t=[...this.state.ids()];return t.some(n=>this.catalog.nodes[n]?.system==="regions"&&this.state.isVisible(n))?[]:t.filter(n=>{const i=this.catalog.nodes[n];return i?.kind==="structure"&&i.layer===e+1&&this.state.isVisible(n)})}renderStep(){const e=this.dissection,t=e.steps[e.step],n=this.body;n.replaceChildren(),n.append(Hs(e.d.name),qe("div","quiz-progress",`Step ${e.step+1} of ${e.steps.length}`),qe("h3","quiz-prompt",t.title));const i=(a,c)=>{if(!a.length)return;const l=qe("div","dissect-list");l.append(qe("strong","",`${c} (${a.length}): `));const h=a.slice(0,14);h.forEach((u,d)=>{const f=qe("a","",this.h.nameOf(u));f.addEventListener("click",()=>this.h.select(u)),l.append(f,d<h.length-1?", ":"")}),a.length>h.length&&l.append(` … +${a.length-h.length} more`),n.append(l)};e.step>0&&i(this.removed,"Removed"),e.step>0&&!this.removed.length&&n.append(qe("p","credits","Nothing in this view is at this layer."));const s=this.outermost();i(s,"Outermost muscles now"),(t.peel||s.length)&&n.append(qe("p","credits","Muscle layers are computed from the 3D model by ray casting (outermost = 1); they are not named anatomical layers."));const o=s.length?s:[...this.state.ids()].filter(a=>this.state.isVisible(a));n.append(zs(en("◀ Previous",()=>this.goStep(e.step-1)),en("Next ▶",()=>this.goStep(e.step+1))),zs(en("Quiz this step",()=>void this.startVisible(o,`${e.d.name} — ${t.title}`)),en("End dissection",()=>this.endDissection()))),n.querySelectorAll("button")[0].toggleAttribute("disabled",e.step===0),n.querySelectorAll("button")[1].toggleAttribute("disabled",e.step===e.steps.length-1)}endDissection(){const e=this.dissection;e&&(this.dissection=null,this.state.restore(e.before),this.renderHome())}}function qe(r,e="",...t){const n=document.createElement(r);return e&&(n.className=e),n.append(...t),n}function en(r,e){const t=document.createElement("button");return t.textContent=r,t.addEventListener("click",e),t}function zs(...r){return qe("div","quiz-row",...r)}function Hs(r){return qe("h3","quiz-section",r)}const _n=[.4872,1.4003,3.7145,13.8206,5.1618,1.2298,.8975,.031,1.6474,.1367,1.0461,2.1072,.0793,.3246,1.587,.2272,2.8755],np=-.5,ip=19/81,Zl=864e5,kr=6e4,jd=1,Hc=6,Fb=10,Bb={state:"new",stability:0,difficulty:0,reps:0,lapses:0,last:0},sp=r=>Math.min(10,Math.max(1,r)),kb=r=>Math.max(.1,_n[r-1]),rp=r=>sp(_n[4]-(r-3)*_n[5]);function zb(r,e){return e>0?Math.pow(1+ip*r/e,np):0}function Hb(r,e,t=36500){const n=r/ip*(Math.pow(e,1/np)-1);return Math.min(t,Math.max(1,Math.round(n)))}function Vb(r,e){return sp(_n[7]*rp(3)+(1-_n[7])*(r-_n[6]*(e-3)))}function Gb(r,e,t,n){const i=n===2?_n[15]:1,s=n===4?_n[16]:1;return e*(Math.exp(_n[8])*(11-r)*Math.pow(e,-.1367)*(Math.exp(_n[10]*(1-t))-1)*i*s+1)}function Wb(r,e,t){return Math.min(e,_n[11]*Math.pow(r,-.0793)*(Math.pow(e+1,_n[13])-1)*Math.exp(_n[14]*(1-t)))}function Ir(r,e,t,n=.9){const i={...r,reps:r.reps+1,last:t};if(r.state==="new")return i.stability=kb(e),i.difficulty=rp(e),e===4?Vc(i,t,n):(i.state="learning",i.due=t+(e===1?jd:e===2?Hc:Fb)*kr,i);if(r.state==="learning"||r.state==="relearning"){if(e===1)return i.due=t+jd*kr,i;if(e===2)return i.due=t+Hc*kr,i;const a=Vc(i,t,n);return e===4&&(a.due+=Zl),a}const s=Math.max(0,(t-r.last)/Zl),o=zb(s,r.stability);return i.difficulty=Vb(r.difficulty,e),e===1?(i.stability=Wb(r.difficulty,r.stability,o),i.lapses=r.lapses+1,i.state="relearning",i.due=t+Hc*kr,i):(i.stability=Gb(r.difficulty,r.stability,o,e),Vc(i,t,n))}function Vc(r,e,t){return r.state="review",r.due=e+Hb(r.stability,t)*Zl,r}function qd(r){const e=r/kr;if(e<60)return`${Math.max(1,Math.round(e))} min`;const t=e/60;if(t<24)return`${Math.round(t)} h`;const n=t/24;return n<31?`${Math.round(n)} d`:n<365?`${Math.round(n/30.4)} mo`:`${(n/365).toFixed(1)} y`}const Yd="srs",Ws=864e5;class Xb extends EventTarget{constructor(e){super(),this.store=e,this.loaded=e.getValue(Yd).then(t=>{t?.version===1&&(this.data=t)})}data={version:1,retention:.9,decks:[],cards:[],log:[]};loaded;ready(){return this.loaded}get decks(){return this.data.decks}get retention(){return this.data.retention}setRetention(e){return this.data.retention=Math.min(.97,Math.max(.7,e)),this.save()}cards(e){return e?this.data.cards.filter(t=>t.deck===e):this.data.cards}async createDeck(e,t,n=20){const i={id:crypto.randomUUID(),name:e,created:Date.now(),newPerDay:n};this.data.decks.push(i);const s=Date.now();for(const o of new Set(t))this.data.cards.push({...Bb,id:crypto.randomUUID(),deck:i.id,structure:o,created:s,due:s});return await this.save(),i}async deleteDeck(e){this.data.decks=this.data.decks.filter(t=>t.id!==e),this.data.cards=this.data.cards.filter(t=>t.deck!==e),this.data.log=this.data.log.filter(t=>t.deck!==e),await this.save()}async renameDeck(e,t){const n=this.data.decks.find(i=>i.id===e);n&&(n.name=t),await this.save()}counts(e,t=Date.now()){const n=this.cards(e),i=this.newIntroducedToday(e,t),s=this.data.decks.find(a=>a.id===e)?.newPerDay??20,o=n.filter(a=>a.state==="new").length;return{total:n.length,newAvailable:Math.max(0,Math.min(o,s-i)),learning:n.filter(a=>(a.state==="learning"||a.state==="relearning")&&a.due<=t).length,dueReview:n.filter(a=>a.state==="review"&&a.due<=Kd(t)).length}}next(e,t=Date.now()){const n=this.cards(e),i=n.filter(a=>(a.state==="learning"||a.state==="relearning")&&a.due<=t).sort((a,c)=>a.due-c.due);if(i.length)return i[0];const s=n.filter(a=>a.state==="review"&&a.due<=Kd(t)).sort((a,c)=>a.due-c.due);if(s.length)return s[0];if(this.counts(e,t).newAvailable>0){const a=n.filter(c=>c.state==="new").sort((c,l)=>c.created-l.created);if(a.length)return a[0]}return n.filter(a=>(a.state==="learning"||a.state==="relearning")&&a.due<=t+20*6e4).sort((a,c)=>a.due-c.due)[0]??null}preview(e,t=Date.now()){return{1:Ir(e,1,t,this.data.retention).due-t,2:Ir(e,2,t,this.data.retention).due-t,3:Ir(e,3,t,this.data.retention).due-t,4:Ir(e,4,t,this.data.retention).due-t}}async rate(e,t,n=Date.now()){const i=this.data.cards.findIndex(o=>o.id===e);if(i<0)return;const s=this.data.cards[i];this.data.log.push({card:s.id,deck:s.deck,rating:t,time:n,state:s.state}),this.data.cards[i]={...s,...Ir(s,t,n,this.data.retention)},await this.save()}stats(e,t=Date.now()){const n=this.cards(e),i=e?this.data.log.filter(l=>l.deck===e):this.data.log,s=Jl(t),o=i.filter(l=>l.time>=t-30*Ws&&l.state==="review"),a=Array.from({length:7},(l,h)=>n.filter(u=>u.state!=="new"&&u.due>=(h===0?0:s+h*Ws)&&u.due<s+(h+1)*Ws).length),c=Array.from({length:14},(l,h)=>i.filter(u=>u.time>=s-(13-h)*Ws&&u.time<s-(12-h)*Ws).length);return{total:n.length,new:n.filter(l=>l.state==="new").length,learning:n.filter(l=>l.state==="learning"||l.state==="relearning").length,review:n.filter(l=>l.state==="review").length,mature:n.filter(l=>l.state==="review"&&l.stability>=21).length,reviewsToday:i.filter(l=>l.time>=s).length,retention30:o.length?o.filter(l=>l.rating>1).length/o.length:null,retentionCount:o.length,forecast:a,perDay:c}}exportJson(){return JSON.stringify({format:"anatomix-flashcards",...this.data},null,1)}async importJson(e){const t=JSON.parse(e);if(t?.format!=="anatomix-flashcards"||t.version!==1||!Array.isArray(t.decks)||!Array.isArray(t.cards))throw new Error("This file is not an Anatomix 3D flashcards export.");const n=new Set(this.data.decks.map(c=>c.id)),i=new Set(this.data.cards.map(c=>c.id)),s=t.decks.filter(c=>c?.id&&!n.has(c.id)),o=t.cards.filter(c=>c?.id&&c.structure&&!i.has(c.id)&&(n.has(c.deck)||s.some(l=>l.id===c.deck))),a=new Set(this.data.log.map(c=>`${c.card}@${c.time}`));return this.data.decks.push(...s),this.data.cards.push(...o),this.data.log.push(...(t.log??[]).filter(c=>!a.has(`${c.card}@${c.time}`))),await this.save(),{decks:s.length,cards:o.length}}newIntroducedToday(e,t){const n=Jl(t);return this.data.log.filter(i=>i.deck===e&&i.state==="new"&&i.time>=n).length}async save(){await this.store.setValue(Yd,this.data),this.dispatchEvent(new Event("change"))}}function Jl(r){const e=new Date(r);return e.setHours(0,0,0,0),e.getTime()}function Kd(r){return Jl(r)+Ws-1}const jb="#ffb400",qb=[[1,"Again"],[2,"Hard"],[3,"Good"],[4,"Easy"]];class Yb{constructor(e,t,n,i,s){this.panel=e,this.body=t,this.cards=n,this.state=i,this.h=s,document.addEventListener("keydown",o=>{const a=this.studying,c=o.target;!a?.card||this.panel.hidden||c instanceof HTMLElement&&c.matches("input, textarea, select")||(!a.shown&&(o.key===" "||o.key==="Enter")?(o.preventDefault(),o.stopImmediatePropagation(),this.reveal()):a.shown&&["1","2","3","4"].includes(o.key)&&(o.preventDefault(),o.stopImmediatePropagation(),this.rate(Number(o.key))))},!0)}studying=null;async open(){this.h.opened(),this.panel.hidden=!1,await this.cards.ready(),this.studying?this.renderCard():this.renderHome()}close(){this.stopStudy(),this.panel.hidden=!0}async renderHome(){const e=this.body;e.replaceChildren(),e.append(aa("Decks")),this.cards.decks.length||e.append(Nr("No decks yet. Make one below from your selection, what's visible, or an exam track."));const t=Ge("ul","quiz-tracks");for(const h of this.cards.decks){const u=this.cards.counts(h.id),d=Ge("li","quiz-track"),f=Ge("div","title",h.name),g=Ge("div","stat",`${u.total} cards · `);g.append(Ge("span","srs-new",`${u.newAvailable} new`)," · ",Ge("span","srs-learn",`${u.learning} learning`)," · ",Ge("span","srs-due",`${u.dueReview} due`));const x=Ge("div","quiz-row",xn("Study",()=>void this.startStudy(h.id)),xn("Stats",()=>this.renderStats(h.id)),xn("Rename",()=>{const m=prompt("Deck name",h.name);m?.trim()&&this.cards.renameDeck(h.id,m.trim()).then(()=>this.renderHome())}),xn("Delete",()=>{confirm(`Delete the deck "${h.name}" and its review history?`)&&this.cards.deleteDeck(h.id).then(()=>this.renderHome())}));d.append(Ge("div","info",f,g,x)),t.append(d)}e.append(t),e.append(aa("New deck"));const n=document.createElement("input");n.className="quiz-input",n.placeholder="Deck name";const i=document.createElement("select"),s=await this.h.deckSources();s.forEach((h,u)=>i.append(new Option(`${h.label} (${h.ids.length})`,String(u)))),i.addEventListener("change",()=>n.placeholder=s[Number(i.value)]?.label??"Deck name"),n.placeholder=s[0]?.label??"Deck name",e.append(Ge("div","quiz-row",n),Ge("div","quiz-row",i,xn("Create",async()=>{const h=s[Number(i.value)];if(!h?.ids.length)return this.h.toast("That source has no structures — select or show some first");await this.cards.createDeck(n.value.trim()||h.label,h.ids),this.h.toast(`Deck created with ${new Set(h.ids).size} cards`),this.renderHome()}))),e.append(aa("Settings & data"));const o=Object.assign(document.createElement("input"),{type:"range",min:"0.8",max:"0.95",step:"0.01",value:String(this.cards.retention)}),a=Ge("span","",`${Math.round(this.cards.retention*100)}%`);o.addEventListener("input",()=>a.textContent=`${Math.round(Number(o.value)*100)}%`),o.addEventListener("change",()=>void this.cards.setRetention(Number(o.value)));const c=Ge("label","quiz-row","Target recall ",o,a);c.title="Higher = more frequent reviews. FSRS schedules each card for when your recall chance falls to this value.";const l=Object.assign(document.createElement("input"),{type:"file",accept:"application/json",hidden:!0});l.addEventListener("change",async()=>{const h=l.files?.[0];if(h){try{const u=await this.cards.importJson(await h.text());this.h.toast(`Imported ${u.decks} decks, ${u.cards} cards`),this.renderHome()}catch(u){this.h.toast(u instanceof Error?u.message:"Import failed")}l.value=""}}),e.append(c,Ge("div","quiz-row",xn("Statistics (all decks)",()=>this.renderStats()),xn("Export",()=>this.download()),xn("Import",()=>l.click()),l),Nr("Scheduling: FSRS-4.5 with its default parameters. Cards and history are stored only in this browser (IndexedDB); use Export to back them up or move them."))}download(){const e=new Blob([this.cards.exportJson()],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=`anatomix-flashcards-${new Date().toISOString().slice(0,10)}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3)}async startStudy(e){await this.h.ensureLoaded(this.cards.cards(e).map(t=>t.structure)),this.state.select(null),this.studying={deck:e,card:null,shown:!1,done:0},this.h.setBlocking(!0),this.nextCard()}nextCard(){const e=this.studying;e.card=this.cards.next(e.deck),e.shown=!1,this.renderCard()}renderCard(){const e=this.studying,t=this.body;t.replaceChildren();const n=this.cards.decks.find(a=>a.id===e.deck),i=this.cards.counts(e.deck),s=Ge("div","quiz-progress",`${n?.name??""} · `);s.append(Ge("span","srs-new",`${i.newAvailable} new`)," · ",Ge("span","srs-learn",`${i.learning} learning`)," · ",Ge("span","srs-due",`${i.dueReview} due`),` · ${e.done} done`),t.append(s);const o=e.card;if(!o){this.state.setHighlights(new Map);const a=this.cards.cards(e.deck).filter(c=>c.state!=="new").sort((c,l)=>c.due-l.due)[0];t.append(Ge("h3","quiz-prompt","All done for now ✓"),Nr(a?`Next card due in ${qd(a.due-Date.now())}.`:"No reviews scheduled."),Ge("div","quiz-row",xn("Back to decks",()=>this.stopStudy(!0))));return}if(this.state.has(o.structure)?(this.state.setHighlights(new Map([[o.structure,jb]])),this.h.frame([o.structure],3)):t.append(Nr(`“${this.h.nameOf(o.structure)}” is not loaded.`)),t.append(Ge("h3","quiz-prompt","Name the highlighted structure")),!e.shown)t.append(Ge("div","quiz-row",xn("Show answer (Space)",()=>this.reveal())));else{const a=this.h.latin(o.structure),c=Ge("div","quiz-feedback ok",Ge("strong","",this.h.nameOf(o.structure)));a&&c.append(Ge("div","credits",a)),c.append(Ge("div","credits",this.h.path(o.structure))),t.append(c);const l=this.cards.preview(o),h=Ge("div","srs-ratings");for(const[u,d]of qb){const f=xn("",()=>void this.rate(u));f.className=`srs-rate r${u}`,f.append(Ge("span","",`${d} (${u})`),Ge("small","",qd(l[u]))),h.append(f)}t.append(h)}t.append(Ge("div","quiz-row",xn("End session",()=>this.stopStudy(!0))))}reveal(){this.studying?.card&&(this.studying.shown=!0,this.renderCard())}async rate(e){const t=this.studying;!t?.card||!t.shown||(await this.cards.rate(t.card.id,e),t.done++,this.nextCard())}stopStudy(e=!1){this.studying&&(this.studying=null,this.state.setHighlights(new Map),this.h.setBlocking(!1),e&&this.renderHome())}renderStats(e){const t=this.cards.stats(e),n=this.body;n.replaceChildren(),n.append(aa(e?`Statistics: ${this.cards.decks.find(o=>o.id===e)?.name}`:"Statistics: all decks"));const i=Ge("div","srs-stats"),s=(o,a)=>i.append(Ge("div","",Ge("strong","",a),Ge("span","",o)));s("cards",String(t.total)),s("new",String(t.new)),s("learning",String(t.learning)),s("review",String(t.review)),s("mature (≥21 d)",String(t.mature)),s("reviews today",String(t.reviewsToday)),s("recall, 30 days",t.retention30==null?"—":`${Math.round(t.retention30*100)}%`),n.append(i),t.retention30!=null&&n.append(Nr(`Recall = share of ${t.retentionCount} day-based reviews in the last 30 days not rated “Again”.`)),n.append(Ge("p","credits","Due in the next 7 days"),Zd(t.forecast,["today","+1","+2","+3","+4","+5","+6"])),n.append(Ge("p","credits","Reviews per day (last 14 days)"),Zd(t.perDay,t.perDay.map((o,a)=>a===13?"today":a%2?"":`-${13-a}`))),n.append(Ge("div","quiz-row",xn("Back to decks",()=>void this.renderHome())))}}function Zd(r,e){const t=Math.max(1,...r),n=Ge("div","srs-bars");return r.forEach((i,s)=>{const o=Ge("div","col"),a=Ge("div","bar");a.style.height=`${i/t*100}%`,a.title=String(i),o.append(Ge("small","",i?String(i):""),a,Ge("small","",e[s]??"")),n.append(o)}),n}function Ge(r,e="",...t){const n=document.createElement(r);return e&&(n.className=e),n.append(...t),n}function xn(r,e){const t=document.createElement("button");return t.textContent=r,t.addEventListener("click",e),t}function aa(r){return Ge("h3","quiz-section",r)}function Nr(r){return Ge("p","credits",r)}class Kb{constructor(e){this.catalog=e,this.ids=Object.keys(e.nodes).sort(),this.ids.forEach((t,n)=>this.index.set(t,n)),this.fingerprint=`${this.ids.length.toString(36)}${Zb(this.ids.join("|")).toString(36)}`}ids;index=new Map;fingerprint;async encode(e){const t=e.systems.filter(d=>this.catalog.systems.some(f=>f.id===d)),n=this.loadedIds(t),i=new Set(e.display.hidden.filter(d=>n.has(d))),s=[...n].filter(d=>this.catalog.nodes[d].hiddenByDefault),o=[...i].filter(d=>!this.catalog.nodes[d].hiddenByDefault),a=s.filter(d=>!i.has(d)),c=[...n].filter(d=>!i.has(d)),l=c.length<o.length+a.length,h=e.display,u={v:1,f:this.fingerprint,c:[...e.pose.position,...e.pose.target].map(d=>Ur(d)),s:t,...l?{vis:this.pack(c)}:{hd:this.pack(o),sd:this.pack(a)},x:this.pack(h.xray),se:this.pack(h.selected),g:h.ghostOthers?1:0,p:h.peel,o:h.oneSide?1:0};return e.clip&&e.clip.mode!=="off"&&(u.cl={...e.clip,position:Ur(e.clip.position),normal:e.clip.normal?.map(d=>Ur(d))}),e.explode&&e.explode.amount>0&&(u.e={a:Ur(e.explode.amount),s:e.explode.scope,c:e.explode.centre,i:e.explode.ids?this.pack(e.explode.ids):void 0}),e.region&&(u.r=e.region),e.trace&&(u.t={i:this.index.get(e.trace.id),m:e.trace.mode,f:e.trace.flow?1:0,sp:e.trace.speed}),e.pins?.length&&(u.pn=e.pins.map(d=>({i:this.index.get(d.structureId),l:d.local.map(f=>Ur(f,5)),n:d.note,c:d.color}))),$b(await Jb(JSON.stringify(u)))}async decode(e){const t=JSON.parse(await Qb(ew(e)));if(t?.v!==1)throw new Error("Unknown link format");const n=t.f===this.fingerprint?null:"This link was made with a different version of the anatomy data; some parts may not match.",i=(t.s??[]).filter(l=>this.catalog.systems.some(h=>h.id===l)),s=this.loadedIds(i);let o;if(t.vis){const l=new Set(this.unpack(t.vis));o=[...s].filter(h=>!l.has(h))}else{const l=new Set(this.unpack(t.sd));o=[...this.unpack(t.hd),...[...s].filter(h=>this.catalog.nodes[h].hiddenByDefault&&!l.has(h))]}const a=t.c;return{scene:{pose:{position:[a[0],a[1],a[2]],target:[a[3],a[4],a[5]]},systems:i,display:{hidden:o,xray:this.unpack(t.x),selected:this.unpack(t.se),ghostOthers:!!t.g,peel:t.p??0,oneSide:!!t.o},clip:t.cl,explode:t.e?{amount:t.e.a,scope:t.e.s,centre:t.e.c,ids:t.e.i?this.unpack(t.e.i):void 0}:void 0,region:t.r??null,trace:t.t&&this.ids[t.t.i]?{id:this.ids[t.t.i],mode:t.t.m,flow:!!t.t.f,speed:t.t.sp}:null,pins:Array.isArray(t.pn)?t.pn.filter(l=>this.ids[l.i]).map(l=>({id:crypto.randomUUID(),structureId:this.ids[l.i],local:l.l,note:String(l.n??""),color:String(l.c??"#ff5a5f"),created:Date.now()})):void 0},warning:n}}loadedIds(e){const t=new Set(e);return new Set(Object.values(this.catalog.nodes).filter(n=>n.mesh&&t.has(n.system)).map(n=>n.id))}pack(e){const t=[...new Set(e.map(n=>this.index.get(n)).filter(n=>n!==void 0))].sort((n,i)=>n-i);return t.map((n,i)=>i?n-t[i-1]:n)}unpack(e){const t=[];let n=0;for(const[i,s]of(e??[]).entries())n=i?n+s:s,this.ids[n]&&t.push(this.ids[n]);return t}}const Ur=(r,e=4)=>Math.round(r*10**e)/10**e;function Zb(r){let e=2166136261;for(let t=0;t<r.length;t++)e^=r.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}async function Jb(r){const e=new Blob([r]).stream().pipeThrough(new CompressionStream("deflate-raw"));return new Uint8Array(await new Response(e).arrayBuffer())}async function Qb(r){const e=new Blob([r]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Response(e).text()}function $b(r){let e="";for(let t=0;t<r.length;t+=32768)e+=String.fromCharCode(...r.subarray(t,t+32768));return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ew(r){const e=atob(r.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(e,t=>t.charCodeAt(0))}class tw{constructor(e,t,n){this.panel=e,this.body=t,this.h=n}open(){this.h.opened(),this.panel.hidden=!1,this.render()}close(){this.panel.hidden=!0}async render(e=!1){const t=this.body;t.replaceChildren();const n=await this.h.link(e),i=Object.assign(document.createElement("textarea"),{readOnly:!0,value:n,rows:4,className:"share-url"});i.addEventListener("focus",()=>i.select());const s=iw("Copy link",async()=>{try{await navigator.clipboard.writeText(n),this.h.toast("Link copied")}catch{i.select(),this.h.toast("Press Ctrl+C to copy")}}),o=Object.assign(document.createElement("input"),{type:"checkbox",checked:e});o.addEventListener("change",()=>void this.render(o.checked));const a=document.createElement("label");a.className="quiz-row",a.append(o,` Include my pins (${this.h.pinCount()}) — their notes become readable by anyone with the link`),t.append(Jd("The link reopens this exact scene: camera, loaded systems, what is shown, hidden, see-through and selected, peel level, one side, section plane, explode view, regional view and blood-supply trace."),i,nw(s,op("span","credits",`${n.length.toLocaleString()} characters`)),a,Jd(location.protocol==="app:"?"The scene is stored inside the link itself — nothing is uploaded. Clicking the link opens this scene in Anatomix 3D on any PC where it is installed.":`The scene is stored inside the link itself — nothing is uploaded. Others can open it once Anatomix 3D is hosted at a public address; right now it points to ${location.origin}.`))}}function op(r,e,t){const n=document.createElement(r);return n.className=e,n.textContent=t,n}function Jd(r){return op("p","credits",r)}function nw(...r){const e=document.createElement("div");return e.className="quiz-row",e.append(...r),e}function iw(r,e){const t=document.createElement("button");return t.textContent=r,t.addEventListener("click",e),t}const Be=r=>document.querySelector(r);async function sw(){const r=new hb(Be("#viewport")),e=matchMedia("(pointer: coarse)").matches;e&&document.addEventListener("gesturestart",E=>E.preventDefault()),e&&Math.min(screen.width,screen.height)<600&&r.setLowPower(!0);const t=new ES,n=new db(r.camera);t.onMaterial=E=>n.attach(E),r.onBeforeRender(()=>n.updateView());let i;try{i=await my()}catch(E){throw ft("Could not load anatomy data. Run “npm run convert” first.",0),E}const s=new gM(i,r.root,t),o=xy(i);t.pairOf=E=>o.get(E);const a=new Rb(r,t,i),c=new Cb(r,t);n.extraPatch=(E,w)=>{c.patch(E,w),mM(E,w)};const l=(E,w)=>n.keeps(E)&&c.keeps(E,w),h=new Ib(r,t,i);h.offsetOf=E=>a.offsetOf(E),a.originalPosition=E=>h.originalPosition(E);const u=LM(),d=new bM(i);await d.init(u.language);const f=E=>d.name(E),g=Be("#loading");async function x(E){const w=i.systems.find(G=>G.id===E);if(!w||s.isLoaded(E))return;m(w,0),S.syncChecks();const O=new Set(t.ids());try{await s.load(w,ie=>m(w,ie));const G=Ue?st?.get(Ue):void 0;G&&t.hideQuietly([...t.ids()].filter(ie=>!O.has(ie)&&!st.contains(G,ie)))}catch(G){ft(`Failed to load ${w.name}`),console.error(G)}finally{g.hidden=!0,n.setBounds(t.bounds([...t.ids()])),S.syncChecks(),P.refresh(),r.requestRender()}}function m(E,w){g.hidden=!1,g.querySelector(".bar span").style.width=`${Math.round(Math.min(1,w)*100)}%`,g.querySelector("p").textContent=`Loading ${E.name}…`}let p=!1;function _(E,w=!1){if(!p){if(E&&!w&&he.active){t.select(E),he.start(E);return}t.select(E,w),E&&!w&&v.show(E),!E&&!w&&v.close(),Ae()}}async function y(E){const w=i.nodes[E];if(!w)return;s.isLoaded(w.system)||await x(w.system);const O=rn(i,E).filter(ie=>t.has(ie));if(!O.length){w.pin&&r.frameBox(new et().setFromCenterAndSize(new D(...w.pin),new D(.08,.08,.08))),v.show(E);return}const G=O.filter(ie=>t.isHidden(ie)&&(ie===E||!i.nodes[ie]?.hiddenByDefault));if(G.length&&t.unhide(G),w.kind==="system"){t.select(null),v.close(),r.frameBox(t.bounds(O)),Ae();return}t.selectMany(O),v.show(E),r.frameBox(t.bounds(O)),Ae()}const v=new CM(Be("#details-panel"),Be("#details-title"),Be("#details-body"),i,d,{focus:E=>void y(E),hide:E=>{t.hide(rn(i,E)),v.close()},isolate:E=>{const w=rn(i,E);t.isolate(w),r.frameBox(t.bounds(w))},xray:E=>t.toggleXray(rn(i,E)),bloodSupply:E=>void he.start(E),opposite:E=>o.get(E),selectOpposite:E=>{t.selection.includes(E)||t.select(E),Qe.opposite()},selectParent:E=>{const w=i.nodes[E]?.parent;w&&y(w)}}),S=new IM(Be("#systems-tree"),i,t,s,d,{loadSystem:x,focusNode:E=>void y(E)});new wM(Be("#search-input"),Be("#search-results"),i,d,E=>void y(E));const R=Be("#lang-select");for(const E of d.languages){const w=E.coverage<1?` · ${Math.round(E.coverage*100)}%`:"";R.append(new Option(`${E.name}${w}`,E.code,!1,E.code===d.code))}R.addEventListener("change",async()=>{u.language=R.value,Kl(u),await d.setLanguage(R.value)});const A=E=>E.split("@")[0],P=new wS(Be("#labels"),r,t,E=>f(A(E)),E=>{i.nodes[E]?.mesh?_(E):v.show(A(E))});d.addEventListener("change",()=>P.rebuild()),P.keeps=l,P.partsOf=E=>{const w=[],O=[...i.nodes[E]?.children??[]];for(;O.length;){const G=i.nodes[O.pop()];!G||G.kind==="attachment"||G.kind==="landmark"||(G.mesh&&w.push(G.id),O.push(...G.children))}return w},P.offsetOf=E=>a.offsetOf(E),a.addEventListener("settled",()=>P.refresh());const b=new fb(Be("#user-pins"),r,t);b.keeps=l,b.onClick=E=>M(E);async function M(E){const w=i.nodes[E.structureId];w&&!s.isLoaded(w.system)&&await x(w.system);const O=b.worldOf(E);if(!O)return ft("That pin's structure is not loaded");t.isHidden(E.structureId)&&t.unhide([E.structureId]),_(E.structureId),r.frameBox(new et().setFromCenterAndSize(O,new D(.12,.12,.12)))}const L=new Map;function I(E,w,O){const G=L.get(E);if(G)return G;const ie=new D(...w),Z=new D;let j=w,ae=1/0;for(const fe of t.meshes(O)){const Pe=fe.geometry.getAttribute("position");for(let ke=0;ke<Pe.count;ke++){Z.fromBufferAttribute(Pe,ke);const Jt=Z.distanceToSquared(ie);Jt<ae&&(ae=Jt,j=[Z.x,Z.y,Z.z])}}return L.set(E,j),j}function F(E){const w=new et;for(const G of t.meshes(E))G.geometry.computeBoundingBox(),w.union(G.geometry.boundingBox);if(w.isEmpty())return null;const O=w.getCenter(new D);return[O.x,O.y,O.z]}let k=null;function B(){if(k)return k;const E=new Map,w=new Map;for(const O of Object.values(i.nodes)){if(O.kind!=="attachment"||!O.parent)continue;const G=`${O.base}|${O.side}`;E.set(G,[...E.get(G)??[],O.id]),w.set(O.parent,[...w.get(O.parent)??[],O.id])}return k={byMuscle:E,byBone:w}}function z(E){const w=i.nodes[E];return Object.values(i.nodes).find(O=>O.mesh&&O.kind==="structure"&&O.base===w.base&&O.side===w.side&&O.system!=="skeletal")?.id}const J=E=>i.nodes[E].part==="insertion"?"Insertion":"Origin";P.landmarks=E=>{if(!u.showLandmarkPins||E.length>6)return[];const w=[],{byMuscle:O,byBone:G}=B(),ie=[];for(const j of E){const ae=i.nodes[j];if(!(!ae||!t.isVisible(j))){for(const fe of O.get(`${ae.base}|${ae.side}`)??[]){if(ae.kind==="attachment")break;const Pe=F(fe),ke=i.nodes[fe].parent;if(!Pe)continue;const Jt=J(fe);ie.push({id:`${fe}@muscle`,position:I(`${fe}@muscle`,Pe,j),owner:j,text:`${Jt}: ${f(ke)}`,target:ke,cls:`att-${Jt.toLowerCase()}`})}if(ae.system==="skeletal")for(const fe of G.get(j)??[]){const Pe=F(fe);if(!Pe)continue;const ke=J(fe);ie.push({id:`${fe}@bone`,position:I(`${fe}@bone`,Pe,j),owner:j,text:`${d.term(i.nodes[fe].base)} (${ke.toLowerCase()})`,target:z(fe)??fe,cls:`att-${ke.toLowerCase()}`})}}}const Z=j=>(i.nodes[j]?.children??[]).map(ae=>i.nodes[ae]).filter(ae=>ae?.kind==="landmark"&&ae.pin);for(const j of E){if(!t.isVisible(j))continue;const ae=Z(j);for(const Pe of ae)w.push({id:Pe.id,position:I(Pe.id,Pe.pin,j),owner:j});const fe=o.get(j);if(!ae.length&&fe)for(const Pe of Z(fe)){const ke=`${Pe.id}@${j}`;w.push({id:ke,position:I(ke,[-Pe.pin[0],Pe.pin[1],Pe.pin[2]],j),owner:j})}if(i.nodes[j]?.side==="m"&&i.nodes[j]?.system==="skeletal")for(const Pe of ae){if(Math.abs(Pe.pin[0])<.01)continue;const ke=`${Pe.id}@mirror`;w.push({id:ke,position:I(ke,[-Pe.pin[0],Pe.pin[1],Pe.pin[2]],j),owner:j})}}return w.push(...ie),w};const X=new yy,ne=()=>({pose:r.getPose(),display:t.snapshot(),systems:s.loadedSystems(),clip:n.current,pins:b.list(),trace:he.current,explode:a.value,region:Ue});async function le(E){te(),Ue=null;for(const O of E.systems)await x(O);t.restore(E.display),n.set(E.clip??Qf),a.set(E.explode??$f),N(E.region??null),E.trace?he.start(E.trace.id,E.trace.mode,E.trace.flow??!1,E.trace.speed??.12):he.active&&he.end(),E.pins&&(b.setAll(E.pins),X.setValue("pins",b.list())),r.animateTo(E.pose);const w=E.display.selected[0];w?v.show(w):v.close(),Ae()}const ge=new Kb(i),Ne=location.protocol==="app:",Ye=async E=>`${Ne?"anatomix3d://open/":`${location.origin}${location.pathname}`}#scene=${await ge.encode(E)}`,$e=new vM(Be("#bookmarks-list"),Be("#import-bookmarks"),X,{capture:()=>({thumbnail:r.snapshot(),...ne()}),suggestTitle:()=>{const E=t.selection;return E.length===1?f(E[0]):E.length>1?`${f(E[0])} + ${E.length-1} more`:`View ${new Date().toLocaleString()}`},open:E=>le(E),share:async E=>{const w=await Ye({...E,pins:void 0});try{await navigator.clipboard.writeText(w),ft("Link copied (without pins)")}catch{prompt("Copy this link",w)}},toast:ft});function He(E){r.setBackground(E.background),r.setLightPreset(E.light),r.setExposure(E.exposure),r.setAmbientOcclusion(E.ambientOcclusion),P.max=E.labelCount,P.partPins=E.showLandmarkPins,t.setAttachmentsVisible(E.showAttachments),P.refresh()}function $(E){const w=document.createElement("label");w.className="row";const O=R.cloneNode(!0);if(O.value=d.code,O.addEventListener("change",()=>{R.value=O.value,R.dispatchEvent(new Event("change"))}),w.append(Object.assign(document.createElement("span"),{textContent:"Language for structure names"}),O),E.append(w),!ep)return;const G=document.createElement("div");G.className="offline-box";const ie=document.createElement("p");ie.className="credits";const Z=document.createElement("button");Z.textContent="Download everything for offline use (≈ 45 MB)";const j=async()=>{const ae=await Lb(i);ie.textContent=ae.stored>=ae.total?"Everything is stored on this device — works fully offline.":`Stored on this device: ${ae.stored} of ${ae.total} files. Systems you open are stored automatically.`};Z.addEventListener("click",async()=>{Z.disabled=!0;const ae=await Db(i,(fe,Pe)=>ie.textContent=`Downloading… ${fe} / ${Pe}`);Z.disabled=!1,ae&&ft(`${ae} files could not be downloaded — try again with a connection`),await j()}),G.append(Object.assign(document.createElement("strong"),{textContent:"Offline"}),ie,Z),E.append(G),j()}const ee=()=>DM(Be("#settings-body"),u,He,$);ee(),He(u),Pb(),rw();const ue=Be("#hover-tip"),be=new UM(r,{candidates:()=>t.visibleMeshes(),keeps:l,onClick:(E,w)=>_(E,w),onDoubleClick:E=>{p||(E?(_(E),r.frameBox(t.bounds([E]))):r.frameBox(t.bounds()))},onHover:(E,w,O)=>{p&&(E=null),ue.hidden=!E,E&&(ue.textContent=f(E),ue.style.left=`${w}px`,ue.style.top=`${O}px`)}});P.describe=async E=>{const w=i.nodes[A(E)]?.desc,G=(w?await Hf(w):null)?.summary?.[0];return G?G.length>260?`${G.slice(0,257).replace(/\s+\S*$/,"")}…`:G:null};function ve(E){u.showLandmarkPins=E,Kl(u),P.partPins=E,P.refresh(),ee(),Ae()}const Xe=Be("#toolbar"),rt=["#bookmarks-panel","#settings-panel","#details-panel","#tools-panel","#tracer-panel","#quiz-panel","#cards-panel","#share-panel"];function U(E){const w=Be(E),O=w.hidden;O&&rt.includes(E)&&te(),rt.includes(E)&&rt.forEach(G=>Be(G).hidden=!0),w.hidden=!O,E==="#bookmarks-panel"&&O&&$e.render()}const Qe={"toggle-systems":()=>U("#systems-panel"),"toggle-bookmarks":()=>U("#bookmarks-panel"),"toggle-settings":()=>U("#settings-panel"),"toggle-tools":()=>U("#tools-panel"),"toggle-quiz":()=>Be("#quiz-panel").hidden?void xe.open():xe.close(),"toggle-cards":()=>Be("#cards-panel").hidden?void se.open():se.close(),"toggle-share":()=>Be("#share-panel").hidden?de.open():de.close(),"end-trace":()=>he.end(),trace:()=>{const E=t.selection[0]??v.shownId;if(!E||!i.nodes[E]?.mesh)return ft("Select a structure first");he.start(E)},"add-pin-key":()=>{Be("#tools-panel").hidden&&U("#tools-panel"),Be("#tools-panel").querySelector('[data-action="add-pin"]')?.click()},"close-details":()=>v.close(),"close-welcome":()=>{Be("#welcome").hidden=!0},hide:()=>{if(!t.selection.length)return ft("Select a structure first");t.hide(t.selection),v.close()},isolate:()=>{const E=t.selection;if(!E.length)return ft("Select a structure first");N(null),t.isolate(E),r.frameBox(t.bounds(E))},transparent:()=>t.selection.length?t.toggleXray(t.selection):ft("Select a structure first"),"ghost-others":()=>t.setGhostOthers(!t.isGhostOthers),"layer-up":()=>{if(!t.maxLayer())return ft("Load the muscular system to peel muscle layers");t.setPeel(t.peelLevel+1),ft(`Muscle layer ${t.peelLevel} of ${t.maxLayer()} removed`)},"layer-down":()=>t.setPeel(t.peelLevel-1),multi:()=>{be.multiSelect=!be.multiSelect,Ae()},"feature-pins":()=>{ve(!u.showLandmarkPins),u.showLandmarkPins&&!t.selection.length&&ft("Pins on: select a structure or a part to see its pins")},pins:()=>{P.showAll=!P.showAll,P.refresh(),Ae()},mirror:()=>t.setOneSide(!t.isOneSide),"mirror-select":()=>{t.mirror=!t.mirror,Ae(),ft(t.mirror?"Mirror on: selecting, hiding and fading also does the other side":"Mirror off")},opposite:()=>{const E=t.selection;if(!E.length)return ft("Select a structure first");if(!E.some(ie=>o.has(ie)))return ft("Midline structure — there is no other side");const w=v.shownId,O=t.selectOpposite(),G=w&&o.get(w)||O[0];G&&v.show(G)},explode:()=>{if(a.active)return a.collapse();const E=a.value.scope==="selection"?t.selection:void 0;if(E&&!E.length)return ft("Select structures first, or choose another explode scope in Tools");a.set({amount:.6,...E?{ids:E}:{}})},undo:()=>t.undo(),redo:()=>t.redo(),"show-all":()=>{N(null),t.showAll()},"reset-view":()=>r.resetView(),"hide-ui":()=>{const E=document.body.classList.toggle("ui-hidden");Be("#show-ui").hidden=!E},"add-bookmark":()=>void $e.add(),"export-bookmarks":()=>void $e.exportFile()};document.addEventListener("click",E=>{const w=E.target.closest("[data-action]"),O=w&&Qe[w.dataset.action];O&&O()});function Ae(){const E=t.selection.length>0,w=(O,G,ie=!1)=>{const Z=Xe.querySelector(`[data-action="${O}"]`);Z&&(Z.classList.toggle("active",G),Z.disabled=ie)};w("hide",!1,!E),w("isolate",!1,!E),w("transparent",E&&t.selection.every(O=>t.isXray(O)),!E),w("ghost-others",t.isGhostOthers),w("layer-up",t.peelLevel>0),w("layer-down",!1,t.peelLevel===0),w("multi",be.multiSelect),w("pins",P.showAll),w("feature-pins",u.showLandmarkPins),w("mirror",t.isOneSide),w("mirror-select",t.mirror),w("opposite",!1,!E),w("undo",!1,!t.canUndo),w("redo",!1,!t.canRedo)}t.addEventListener("change",()=>{Ae(),r.requestRender(),v.shownId&&i.nodes[v.shownId]?.mesh&&!t.isVisible(v.shownId)&&v.close()});let Re=null;new Sb(Be("#tools-body"),n,b,a,c,h,{loadSystems:async E=>{for(const w of E)await x(w)},drawRect:()=>new Promise(E=>{const w=document.createElement("div");w.className="cut-overlay";const O=document.createElement("div");O.className="cut-rect",O.hidden=!0,w.append(O),Be("#app").append(w);let G=null;const ie=Z=>{w.remove(),Re=null,E(Z)};Re=()=>ie(null),w.addEventListener("pointerdown",Z=>{G={x:Z.clientX,y:Z.clientY},w.setPointerCapture(Z.pointerId)}),w.addEventListener("pointermove",Z=>{G&&(O.hidden=!1,Object.assign(O.style,{left:`${Math.min(G.x,Z.clientX)}px`,top:`${Math.min(G.y,Z.clientY)}px`,width:`${Math.abs(Z.clientX-G.x)}px`,height:`${Math.abs(Z.clientY-G.y)}px`}))}),w.addEventListener("pointerup",Z=>ie(G?{x0:G.x,y0:G.y,x1:Z.clientX,y1:Z.clientY}:null))}),cut:(E,w,O)=>{const G=O==="selection"?t.selection:[...t.ids()].filter(Z=>t.isVisible(Z)),ie=be.pickHit((E.x0+E.x1)/2,(E.y0+E.y1)/2);return c.cutRect(E.x0,E.y0,E.x1,E.y1,w,G,ie?.point??null)?.targets.length??0},nameOf:f,loadedSystems:()=>s.loadedSystems().map(E=>({id:E,name:i.systems.find(w=>w.id===E)?.name??E})),selection:()=>t.selection,toast:ft,placePin:E=>new Promise(w=>{document.body.classList.add("placing-pin");const O=G=>{document.body.classList.remove("placing-pin"),be.interceptNextClick(null),Re=null,G&&X.setValue("pins",b.list()),w(G)};Re=()=>O(null),be.interceptNextClick(G=>{if(!G)return ft("No structure there — pin not placed"),O(null);O(b.add(G.id,G.point,E))})}),focusPin:E=>void M(E),pinsChanged:()=>void X.setValue("pins",b.list()),screenshot:async(E,w)=>{const O=r.canvas,G=E.scale?O.clientWidth*E.scale:E.width,ie=E.scale?O.clientHeight*E.scale:E.height,Z=E.labels?[...P.drawable().map(fe=>({text:fe.text,world:fe.world,color:null,kind:fe.pin?"landmark":"label"})),...b.drawable().map(({pin:fe,world:Pe},ke)=>({text:fe.note?`${ke+1}. ${fe.note}`:"",world:Pe,color:fe.color,kind:"pin"}))]:[],j=pb(r,()=>n.updateView(),{width:G,height:ie,overlays:Z}),ae=await xb(j);if(w==="download")vb(ae,`anatomix-3d-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.png`),ft(`Saved ${j.width}×${j.height} PNG`);else try{await _b(ae),ft(`Copied ${j.width}×${j.height} image`)}catch(fe){ft(fe instanceof Error?fe.message:"Copy failed")}}}),n.addEventListener("change",()=>{r.requestRender(),P.refresh()});let ye=null;const tt=new Eb(r,t,n.planes);tt.offsetOf=E=>a.offsetOf(E);const he=new Mb(Be("#tracer-panel"),Be("#tracer-title"),Be("#tracer-body"),{graph:()=>ye??=fetch("data/vascular-graph.json",{cache:"no-cache"}).then(E=>E.json()).then(E=>new MM(E,i)),ensureCardiovascular:()=>x("cardiovascular"),nameOf:f,baseName:E=>d.term(E),sideOf:E=>i.nodes[E]?.side??"m",highlight:E=>{t.setHighlights(E),Ae()},frame:E=>r.frameBox(t.bounds(E.filter(w=>t.has(w)))),flow:(E,w)=>{tt.speed=w,E?tt.show(E):tt.clear()},opened:()=>{te(),["#bookmarks-panel","#settings-panel","#details-panel","#tools-panel"].forEach(E=>Be(E).hidden=!0)},focusStep:E=>{const w=t.bounds(E.filter(O=>t.has(O)));w.isEmpty()||r.frameBox(w)}});let Ue=null,st=null;const ot=Be("#region-presets");try{st=await Ch.load(i)}catch(E){console.error(E),ot.hidden=!0}function N(E){Ue=E&&st?.get(E)?E:null,ot.querySelectorAll("button").forEach(w=>w.classList.toggle("active",(w.dataset.region||null)===Ue))}function T(E){const w=E?st?.get(E):void 0,O=[...t.ids()].filter(Z=>!i.nodes[Z]?.hiddenByDefault),G=w?O.filter(Z=>st.contains(w,Z)):O;if(!G.length)return ft("Nothing loaded in this region");he.active&&he.end(),t.select(null),v.close();const ie=t.mirror;t.mirror=!1,t.isolate(G),t.mirror=ie,N(w?w.id:null),w?r.animateTo(r.poseForBox(t.bounds(G),w.view,1.15)):r.resetView(),Ae()}if(st){const E=document.createElement("h3");E.textContent="Regional views";const w=document.createElement("div");w.className="seg";for(const O of[{id:"",name:"Whole body"},...st.list]){const G=document.createElement("button");G.textContent=O.name,G.dataset.region=O.id,G.title=O.id?`Show only the ${O.name.toLowerCase()} in the loaded systems`:"Show every loaded structure again",G.addEventListener("click",()=>T(O.id||null)),w.append(G)}ot.append(E,w),N(null)}let W=!1;function Q(E){E!==p&&(p=E,document.body.classList.toggle("quiz-blocking",E),E?(he.active&&he.end(),W=P.showAll,P.showAll=!1,ue.hidden=!0,v.close()):P.showAll=W,P.refresh(),Ae())}function te(){Be("#quiz-panel").hidden||xe.close(),Be("#cards-panel").hidden||se.close()}function K(E,w=1){const O=t.bounds(E.filter(G=>t.has(G)));if(!O.isEmpty()){if(w>1){O.expandByVector(O.getSize(new D).multiplyScalar((w-1)/2));const G=O.getSize(new D);O.expandByVector(new D(.15,.15,.15).sub(G).max(new D).multiplyScalar(.5))}r.frameBox(O)}}const Se=new EM(i,d),re=["#bookmarks-panel","#settings-panel","#details-panel","#tools-panel","#tracer-panel"],xe=new Ob(Be("#quiz-panel"),Be("#quiz-body"),i,t,Se,X,{nameOf:f,loadSystems:async E=>{for(const w of E)await x(w)},applyRegion:E=>T(E),frame:K,interceptClick:E=>be.interceptNextClick(E),setBlocking:Q,select:E=>{t.select(E),r.frameBox(t.bounds([E]))},opened:()=>{Be("#cards-panel").hidden||se.close(),re.forEach(E=>Be(E).hidden=!0)},toast:ft}),we=new Xb(X),se=new Yb(Be("#cards-panel"),Be("#cards-body"),we,t,{nameOf:f,latin:E=>d.latin(E)?.name??null,path:E=>{const w=[];for(let O=i.nodes[E]?.parent;O;O=i.nodes[O]?.parent)w.unshift(O===i.nodes[O]?.system?d.systemName(O):f(O));return w.join(" › ")},ensureLoaded:async E=>{for(const w of new Set(E.map(O=>i.nodes[O]?.system).filter(Boolean)))await x(w)},frame:K,setBlocking:Q,deckSources:async()=>{const E=O=>i.nodes[O]?.kind==="structure",w=await fetch("data/exam-tracks.json",{cache:"no-cache"}).then(O=>O.json()).then(O=>O.tracks).catch(()=>[]);return[{label:"Current selection",ids:t.selection.filter(E)},{label:"Visible structures",ids:[...t.ids()].filter(O=>E(O)&&t.isVisible(O))},...w.map(O=>({label:O.name,ids:Se.pool(O.groups)}))]},opened:()=>{Be("#quiz-panel").hidden||xe.close(),re.forEach(E=>Be(E).hidden=!0)},toast:ft}),de=new tw(Be("#share-panel"),Be("#share-body"),{link:E=>Ye({...ne(),pins:E?b.list():void 0}),pinCount:()=>b.list().length,opened:()=>{te(),rt.filter(E=>E!=="#share-panel").forEach(E=>Be(E).hidden=!0)},toast:ft});async function De(){const E=/^#scene=([\w-]+)$/.exec(location.hash);if(E){history.replaceState(null,"",location.pathname+location.search);try{const{scene:w,warning:O}=await ge.decode(E[1]);await le(w),Be("#welcome").hidden=!0,ft(O??"Opened shared scene",O?6e3:2200)}catch(w){console.error(w),ft("This link could not be opened (it may be incomplete)",5e3)}}}addEventListener("hashchange",()=>void De());const Te=Be("#search-input");document.addEventListener("keydown",E=>{if(E.target.matches("input:not([type=checkbox]):not([type=range]), textarea, select"))return;const w=E.code==="BracketLeft"?"[":E.code==="BracketRight"?"]":E.key.toLowerCase();if((E.ctrlKey||E.metaKey)&&(w==="y"||w==="z"&&E.shiftKey))return E.preventDefault(),Qe.redo();if((E.ctrlKey||E.metaKey)&&w==="z")return E.preventDefault(),Qe.undo();if(E.ctrlKey||E.metaKey||E.altKey)return;if(w==="o"&&E.shiftKey)return E.preventDefault(),Qe["mirror-select"]();const O={h:"hide",i:"isolate",t:"transparent",g:"ghost-others","[":"layer-up","]":"layer-down",l:"pins",r:"mirror",a:"show-all",home:"reset-view",u:"hide-ui",b:"toggle-bookmarks",m:"toggle-systems",k:"toggle-tools",p:"add-pin-key",v:"trace",o:"opposite",e:"explode",q:"toggle-quiz",f:"toggle-cards",s:"toggle-share",n:"feature-pins"};if(w==="/")E.preventDefault(),Te.focus();else if(w==="escape"){if(Re)return Re();if(he.active)return he.end();_(null)}else O[w]&&(E.preventDefault(),Qe[O[w]]())});for(const E of i.systems.filter(w=>w.initial))await x(E.id);const ce=t.bounds();if(!ce.isEmpty()){const E=r.poseForBox(ce,new D(0,0,1),1.2);r.setHome(E),r.applyPose(E)}Ae(),b.setAll(await X.getValue("pins")??[]),await De(),innerWidth>900&&(Be("#systems-panel").hidden=!1)}function rw(){const r=()=>{const e=document.querySelector("#nl-badge-frame, [id^='nl-badge']"),t=e?e.getBoundingClientRect().height:0;document.body.classList.toggle("host-badge",t>0),document.documentElement.style.setProperty("--badge-h",`${Math.ceil(t)+6}px`)};new MutationObserver(r).observe(document.body,{childList:!0}),addEventListener("resize",r),r()}let Qd=0;function ft(r,e=2200){const t=Be("#toast");t.textContent=r,t.hidden=!1,clearTimeout(Qd),e&&(Qd=window.setTimeout(()=>t.hidden=!0,e))}sw();
