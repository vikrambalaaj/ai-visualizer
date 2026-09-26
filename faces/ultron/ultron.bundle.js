"use strict";(()=>{var Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jp=0,$u=1,$p=2;var Ra=1,Qp=2,so=3,ns=0,Pn=1,oi=2,ai=0,er=1,Hn=2,Qu=3,td=4,tm=5;var bs=100,em=101,nm=102,im=103,sm=104,rm=200,om=201,am=202,lm=203,Wl=204,Xl=205,cm=206,hm=207,um=208,dm=209,fm=210,pm=211,mm=212,gm=213,_m=214,ql=0,Yl=1,Zl=2,nr=3,Kl=4,jl=5,Jl=6,$l=7,ed=0,xm=1,vm=2,bi=0,nd=1,id=2,sd=3,Pa=4,rd=5,od=6,ad=7;var ld=300,Ds=301,sr=302,Ac=303,Cc=304,Ia=306,Ql=1e3,Di=1001,tc=1002,ln=1003,ym=1004;var La=1005;var Ke=1006,Rc=1007;var Us=1008;var Wn=1009,cd=1010,hd=1011,ro=1012,Pc=1013,Si=1014,Ei=1015,vn=1016,Ic=1017,Lc=1018,oo=1020,ud=35902,dd=35899,fd=1021,pd=1022,li=1023,Ui=1026,Ns=1027,md=1028,Dc=1029,Fs=1030,Uc=1031;var Nc=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,Fc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Vc=37492,Gc=37496,Hc=37488,Wc=37489,Oa=37490,Xc=37491,qc=37808,Yc=37809,Zc=37810,Kc=37811,jc=37812,Jc=37813,$c=37814,Qc=37815,th=37816,eh=37817,nh=37818,ih=37819,sh=37820,rh=37821,oh=36492,ah=36494,lh=36495,ch=36283,hh=36284,Ba=36285,uh=36286;var na=2300,ec=2301,Hl=2302,Wu=2303,Xu=2400,qu=2401,Yu=2402;var Mm=3200;var gd=0,bm=1,rs="",zn="srgb",ia="srgb-linear",sa="linear",ae="srgb";var Qs=7680;var Zu=519,Sm=512,Em=513,Tm=514,dh=515,wm=516,Am=517,fh=518,Cm=519,nc=35044;var _d="300 es",yi=2e3,ra=2001;function G1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function H1(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function oa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Rm(){let e=oa("canvas");return e.style.display="block",e}var Ep={},Xr=null;function aa(...e){let t="THREE."+e.shift();Xr?Xr("log",t,...e):console.log(t,...e)}function Pm(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Lt(...e){e=Pm(e);let t="THREE."+e.shift();if(Xr)Xr("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ft(...e){e=Pm(e);let t="THREE."+e.shift();if(Xr)Xr("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tr(...e){let t=e.join(" ");t in Ep||(Ep[t]=!0,Lt(...e))}function Im(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Lm={[ql]:Yl,[Zl]:Jl,[Kl]:$l,[nr]:jl,[Yl]:ql,[Jl]:Zl,[$l]:Kl,[jl]:nr},Mi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tp=1234567,Hr=Math.PI/180,qr=180/Math.PI;function ts(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[e&255]+gn[e>>8&255]+gn[e>>16&255]+gn[e>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Zt(e,t,n){return Math.max(t,Math.min(n,e))}function xd(e,t){return(e%t+t)%t}function W1(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function X1(e,t,n){return e!==t?(n-e)/(t-e):0}function ea(e,t,n){return(1-n)*e+n*t}function q1(e,t,n,i){return ea(e,t,1-Math.exp(-n*i))}function Y1(e,t=1){return t-Math.abs(xd(e,t*2)-t)}function Z1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function K1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function j1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function J1(e,t){return e+Math.random()*(t-e)}function $1(e){return e*(.5-Math.random())}function Q1(e){e!==void 0&&(Tp=e);let t=Tp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tx(e){return e*Hr}function ex(e){return e*qr}function nx(e){return(e&e-1)===0&&e!==0}function ix(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function sx(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function rx(e,t,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),p=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":e.set(a*u,l*d,l*h,a*c);break;case"YZY":e.set(l*h,a*u,l*d,a*c);break;case"ZXZ":e.set(l*d,l*h,a*u,a*c);break;case"XZX":e.set(a*u,l*_,l*p,a*c);break;case"YXY":e.set(l*p,a*u,l*_,a*c);break;case"ZYZ":e.set(l*_,l*p,a*u,a*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ce(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ao={DEG2RAD:Hr,RAD2DEG:qr,generateUUID:ts,clamp:Zt,euclideanModulo:xd,mapLinear:W1,inverseLerp:X1,lerp:ea,damp:q1,pingpong:Y1,smoothstep:Z1,smootherstep:K1,randInt:j1,randFloat:J1,randFloatSpread:$1,seededRandom:Q1,degToRad:tx,radToDeg:ex,isPowerOfTwo:nx,ceilPowerOfTwo:ix,floorPowerOfTwo:sx,setQuaternionFromProperEuler:rx,normalize:ce,denormalize:vi},Sd=class Sd{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Zt(this.x,t.x,n.x),this.y=Zt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Zt(this.x,t,n),this.y=Zt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sd.prototype.isVector2=!0;var vt=Sd,Vn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+d*M;m<0&&(h=-h,p=-p,_=-_,M=-M,m=-m);let f=1-a;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);f=Math.sin(f*b)/A,a=Math.sin(a*b)/A,l=l*f+h*a,c=c*f+p*a,u=u*f+_*a,d=d*f+M*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+_*a,d=d*f+M*a;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return t[n]=a*_+u*d+l*p-c*h,t[n+1]=l*_+u*h+c*d-a*p,t[n+2]=c*_+u*p+a*h-l*d,t[n+3]=u*_-a*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ed=class Ed{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(wp.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(wp.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Zt(this.x,t.x,n.x),this.y=Zt(this.y,t.y,n.y),this.z=Zt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Zt(this.x,t,n),this.y=Zt(this.y,t,n),this.z=Zt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yu.copy(this).projectOnVector(t),this.sub(yu)}reflect(t){return this.sub(yu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ed.prototype.isVector3=!0;var P=Ed,yu=new P,wp=new Vn,Td=class Td{constructor(t,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c)}set(t,n,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],M=s[0],m=s[3],f=s[6],b=s[1],A=s[4],y=s[7],w=s[2],S=s[5],R=s[8];return r[0]=o*M+a*b+l*w,r[3]=o*m+a*A+l*S,r[6]=o*f+a*y+l*R,r[1]=c*M+u*b+d*w,r[4]=c*m+u*A+d*S,r[7]=c*f+u*y+d*R,r[2]=h*M+p*b+_*w,r[5]=h*m+p*A+_*S,r[8]=h*f+p*y+_*R,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,_=n*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*c-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=h*M,t[4]=(u*n-s*l)*M,t[5]=(s*r-a*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(o*n-i*r)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mu.makeScale(t,n)),this}rotate(t){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mu.makeRotation(-t)),this}translate(t,n){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Td.prototype.isMatrix3=!0;var kt=Td,Mu=new kt,Ap=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cp=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ox(){let e={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ia]:{primaries:t,whitePoint:i,transfer:sa,toXYZ:Ap,fromXYZ:Cp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Ap,fromXYZ:Cp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),e}var Kt=ox();function es(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Wr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ar,ic=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ar===void 0&&(Ar=oa("canvas")),Ar.width=t.width,Ar.height=t.height;let s=Ar.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ar}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=oa("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(es(n[i]/255)*255):n[i]=es(n[i]);return{data:n,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ax=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bu(s[o].image)):r.push(bu(s[o]))}else r=bu(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function bu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ic.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var lx=0,Su=new P,Cn=class e extends Mi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Di,s=Di,r=Ke,o=Us,a=li,l=Wn,c=e.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=ts(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ql:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ql:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=ld;Cn.DEFAULT_ANISOTROPY=1;var wd=class wd{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let A=(c+1)/2,y=(p+1)/2,w=(f+1)/2,S=(u+h)/4,R=(d+M)/4,x=(_+m)/4;return A>y&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=S/i,r=R/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=x/r),this.set(i,s,r,n),this}let b=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-M)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Zt(this.x,t.x,n.x),this.y=Zt(this.y,t.y,n.y),this.z=Zt(this.z,t.z,n.z),this.w=Zt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Zt(this.x,t,n),this.y=Zt(this.y,t,n),this.z=Zt(this.z,t,n),this.w=Zt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wd.prototype.isVector4=!0;var Re=wd,sc=class extends Mi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Re(0,0,t,n),this.scissorTest=!1,this.viewport=new Re(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new Cn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Yr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends sc{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},la=class extends Cn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends Cn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wc=class wc{constructor(t,n,i,s,r,o,a,l,c,u,d,h,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c,u,d,h,p,_,M,m)}set(t,n,i,s,r,o,a,l,c,u,d,h,p,_,M,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wc().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Cr.setFromMatrixColumn(t,0).length(),r=1/Cr.setFromMatrixColumn(t,1).length(),o=1/Cr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,p=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=_+p*c,n[10]=o*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,_=c*u,M=c*d;n[0]=h+M*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=M+h*a,n[10]=o*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,_=c*u,M=c*d;n[0]=h-M*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){let h=o*u,p=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+M,n[1]=l*d,n[5]=M*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){let h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=M-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=h-M*d}else if(t.order==="XZY"){let h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+M,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=M*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cx,t,hx)}lookAt(t,n,i){let s=this.elements;return Bn.subVectors(t,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),gs.crossVectors(i,Bn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),gs.crossVectors(i,Bn)),gs.normalize(),fl.crossVectors(Bn,gs),s[0]=gs.x,s[4]=fl.x,s[8]=Bn.x,s[1]=gs.y,s[5]=fl.y,s[9]=Bn.y,s[2]=gs.z,s[6]=fl.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],M=i[6],m=i[10],f=i[14],b=i[3],A=i[7],y=i[11],w=i[15],S=s[0],R=s[4],x=s[8],E=s[12],I=s[1],L=s[5],F=s[9],j=s[13],J=s[2],O=s[6],K=s[10],X=s[14],nt=s[3],st=s[7],ft=s[11],gt=s[15];return r[0]=o*S+a*I+l*J+c*nt,r[4]=o*R+a*L+l*O+c*st,r[8]=o*x+a*F+l*K+c*ft,r[12]=o*E+a*j+l*X+c*gt,r[1]=u*S+d*I+h*J+p*nt,r[5]=u*R+d*L+h*O+p*st,r[9]=u*x+d*F+h*K+p*ft,r[13]=u*E+d*j+h*X+p*gt,r[2]=_*S+M*I+m*J+f*nt,r[6]=_*R+M*L+m*O+f*st,r[10]=_*x+M*F+m*K+f*ft,r[14]=_*E+M*j+m*X+f*gt,r[3]=b*S+A*I+y*J+w*nt,r[7]=b*R+A*L+y*O+w*st,r[11]=b*x+A*F+y*K+w*ft,r[15]=b*E+A*j+y*X+w*gt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],_=t[3],M=t[7],m=t[11],f=t[15],b=l*p-c*h,A=a*p-c*d,y=a*h-l*d,w=o*p-c*u,S=o*h-l*u,R=o*d-a*u;return n*(M*b-m*A+f*y)-i*(_*b-m*w+f*S)+s*(_*A-M*w+f*R)-r*(_*y-M*S+m*R)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],_=t[12],M=t[13],m=t[14],f=t[15],b=n*a-i*o,A=n*l-s*o,y=n*c-r*o,w=i*l-s*a,S=i*c-r*a,R=s*c-r*l,x=u*M-d*_,E=u*m-h*_,I=u*f-p*_,L=d*m-h*M,F=d*f-p*M,j=h*f-p*m,J=b*j-A*F+y*L+w*I-S*E+R*x;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/J;return t[0]=(a*j-l*F+c*L)*O,t[1]=(s*F-i*j-r*L)*O,t[2]=(M*R-m*S+f*w)*O,t[3]=(h*S-d*R-p*w)*O,t[4]=(l*I-o*j-c*E)*O,t[5]=(n*j-s*I+r*E)*O,t[6]=(m*y-_*R-f*A)*O,t[7]=(u*R-h*y+p*A)*O,t[8]=(o*F-a*I+c*x)*O,t[9]=(i*I-n*F-r*x)*O,t[10]=(_*S-M*y+f*b)*O,t[11]=(d*y-u*S-p*b)*O,t[12]=(a*E-o*L-l*x)*O,t[13]=(n*L-i*E+s*x)*O,t[14]=(M*A-_*w-m*b)*O,t[15]=(u*w-d*A+h*b)*O,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,_=r*d,M=o*u,m=o*d,f=a*d,b=l*c,A=l*u,y=l*d,w=i.x,S=i.y,R=i.z;return s[0]=(1-(M+f))*w,s[1]=(p+y)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(h+f))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(_+A)*R,s[9]=(m-b)*R,s[10]=(1-(h+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Cr.set(s[0],s[1],s[2]).length(),a=Cr.set(s[4],s[5],s[6]).length(),l=Cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let c=1/o,u=1/a,d=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,n.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,n,i,s,r,o,a=yi,l=!1){let c=this.elements,u=2*r/(n-t),d=2*r/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),_,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===yi)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ra)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=yi,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),_,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===yi)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===ra)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};wc.prototype.isMatrix4=!0;var Te=wc,Cr=new P,gi=new Te,cx=new P(0,0,0),hx=new P(1,1,1),gs=new P,fl=new P,Bn=new P,Rp=new Te,Pp=new Vn,Ss=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Rp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rp,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ux=0,Ip=new P,Rr=new Vn,Ki=new Te,pl=new P,Yo=new P,dx=new P,fx=new Vn,Lp=new P(1,0,0),Dp=new P(0,1,0),Up=new P(0,0,1),Np={type:"added"},px={type:"removed"},Pr={type:"childadded",child:null},Eu={type:"childremoved",child:null},Rn=class e extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new Ss,i=new Vn,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new kt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Rr.setFromAxisAngle(t,n),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,n){return Rr.setFromAxisAngle(t,n),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Lp,t)}rotateY(t){return this.rotateOnAxis(Dp,t)}rotateZ(t){return this.rotateOnAxis(Up,t)}translateOnAxis(t,n){return Ip.copy(t).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Lp,t)}translateY(t){return this.translateOnAxis(Dp,t)}translateZ(t){return this.translateOnAxis(Up,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?pl.copy(t):pl.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Yo,pl,this.up):Ki.lookAt(pl,Yo,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Ki),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Np),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(px),Eu.child=t,this.dispatchEvent(Eu),Eu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Np),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,dx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,fx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(n){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Rn.DEFAULT_UP=new P(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Tu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Kt.workingColorSpace){if(t=xd(t,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Tu(o,r,t+1/3),this.g=Tu(o,r,t),this.b=Tu(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,n=zn){function i(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=zn){let i=Dm[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return Kt.workingToColorSpace(_n.copy(this),t),Math.round(Zt(_n.r*255,0,255))*65536+Math.round(Zt(_n.g*255,0,255))*256+Math.round(Zt(_n.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(_n.copy(this),n);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(_n.copy(this),n),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=zn){Kt.workingToColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,s=_n.b;return t!==zn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+n,_s.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(_s),t.getHSL(ml);let i=ea(_s.h,ml.h,n),s=ea(_s.s,ml.s,n),r=ea(_s.l,ml.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new zt;zt.NAMES=Dm;var ha=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},_i=new P,ji=new P,wu=new P,Ji=new P,Ir=new P,Lr=new P,Fp=new P,Au=new P,Cu=new P,Ru=new P,Pu=new Re,Iu=new Re,Lu=new Re,Li=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),_i.subVectors(t,n),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){_i.subVectors(s,n),ji.subVectors(i,n),wu.subVectors(t,n);let o=_i.dot(_i),a=_i.dot(ji),l=_i.dot(wu),c=ji.dot(ji),u=ji.dot(wu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,n,i,s,r,o,a,l){return this.getBarycoord(t,n,i,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,n,i,s,r,o){return Pu.setScalar(0),Iu.setScalar(0),Lu.setScalar(0),Pu.fromBufferAttribute(t,n),Iu.fromBufferAttribute(t,i),Lu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pu,r.x),o.addScaledVector(Iu,r.y),o.addScaledVector(Lu,r.z),o}static isFrontFacing(t,n,i,s){return _i.subVectors(i,n),ji.subVectors(t,n),_i.cross(ji).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),_i.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,o,a;Ir.subVectors(s,i),Lr.subVectors(r,i),Au.subVectors(t,i);let l=Ir.dot(Au),c=Lr.dot(Au);if(l<=0&&c<=0)return n.copy(i);Cu.subVectors(t,s);let u=Ir.dot(Cu),d=Lr.dot(Cu);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ir,o);Ru.subVectors(t,r);let p=Ir.dot(Ru),_=Lr.dot(Ru);if(_>=0&&p<=_)return n.copy(r);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Lr,a);let m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Fp.subVectors(r,s),a=(d-u)/(d-u+(p-_)),n.copy(s).addScaledVector(Fp,a);let f=1/(m+M+h);return o=M*f,a=h*f,n.copy(i).addScaledVector(Ir,o).addScaledVector(Lr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Es=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(xi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=xi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(t.matrixWorld),this.union(gl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),_l.subVectors(this.max,Zo),Dr.subVectors(t.a,Zo),Ur.subVectors(t.b,Zo),Nr.subVectors(t.c,Zo),xs.subVectors(Ur,Dr),vs.subVectors(Nr,Ur),Ks.subVectors(Dr,Nr);let n=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Ks.z,Ks.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Ks.z,0,-Ks.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Ks.y,Ks.x,0];return!Du(n,Dr,Ur,Nr,_l)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,Dr,Ur,Nr,_l))?!1:(xl.crossVectors(xs,vs),n=[xl.x,xl.y,xl.z],Du(n,Dr,Ur,Nr,_l))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$i=[new P,new P,new P,new P,new P,new P,new P,new P],xi=new P,gl=new Es,Dr=new P,Ur=new P,Nr=new P,xs=new P,vs=new P,Ks=new P,Zo=new P,_l=new P,xl=new P,js=new P;function Du(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){js.fromArray(e,r);let a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=t.dot(js),c=n.dot(js),u=i.dot(js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Xe=new P,vl=new vt,gx=0,Ln=class extends Mi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gx++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=nc,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(t),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix3(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix4(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyNormalMatrix(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.transformDirection(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=vi(n,this.array)),n}setX(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=vi(n,this.array)),n}setY(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=vi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=vi(n,this.array)),n}setW(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ua=class extends Ln{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var da=class extends Ln{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var se=class extends Ln{constructor(t,n,i){super(new Float32Array(t),n,i)}},_x=new Es,Ko=new P,Uu=new P,Ts=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):_x.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);let n=Ko.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ko,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Uu)),this.expandByPoint(Ko.copy(t.center).sub(Uu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xx=0,ii=new Te,Nu=new Rn,Fr=new P,kn=new Es,jo=new Es,an=new P,le=class e extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G1(t)?da:ua)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,n,i){return ii.makeTranslation(t,n,i),this.applyMatrix4(ii),this}scale(t,n,i){return ii.makeScale(t,n,i),this.applyMatrix4(ii),this}lookAt(t){return Nu.lookAt(t),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(kn.min,jo.min),kn.expandByPoint(an),an.addVectors(kn.max,jo.max),kn.expandByPoint(an)):(kn.expandByPoint(jo.min),kn.expandByPoint(jo.max))}kn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(an));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(t,c),an.add(Fr)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new P,l[x]=new P;let c=new P,u=new P,d=new P,h=new vt,p=new vt,_=new vt,M=new P,m=new P;function f(x,E,I){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,I),u.sub(c),d.sub(c),p.sub(h),_.sub(h);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[x].add(M),a[E].add(M),a[I].add(M),l[x].add(m),l[E].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,E=b.length;x<E;++x){let I=b[x],L=I.start,F=I.count;for(let j=L,J=L+F;j<J;j+=3)f(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let A=new P,y=new P,w=new P,S=new P;function R(x){w.fromBufferAttribute(s,x),S.copy(w);let E=a[x];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(S,E);let L=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,L)}for(let x=0,E=b.length;x<E;++x){let I=b[x],L=I.start,F=I.count;for(let j=L,J=L+F;j<J;j+=3)R(t.getX(j+0)),R(t.getX(j+1)),R(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Ln(h,u,d)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oc=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=nc,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new P,fa=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix4(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyNormalMatrix(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.transformDirection(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=vi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=vi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=vi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=vi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Ln(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vx=0,Ni=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=er,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Kr=class extends Ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Or,Jo=new P,Br=new P,kr=new P,zr=new vt,$o=new vt,Um=new Te,yl=new P,Qo=new P,Ml=new P,Op=new vt,Fu=new vt,Bp=new vt,pa=class extends Rn{constructor(t=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new le;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oc(n,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new fa(i,3,0,!1)),Or.setAttribute("uv",new fa(i,2,3,!1))}this.geometry=Or,this.material=t,this.center=new vt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),Um.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-kr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;bl(yl.set(-.5,-.5,0),kr,o,Br,s,r),bl(Qo.set(.5,-.5,0),kr,o,Br,s,r),bl(Ml.set(.5,.5,0),kr,o,Br,s,r),Op.set(0,0),Fu.set(1,0),Bp.set(1,1);let a=t.ray.intersectTriangle(yl,Qo,Ml,!1,Jo);if(a===null&&(bl(Qo.set(-.5,.5,0),kr,o,Br,s,r),Fu.set(0,1),a=t.ray.intersectTriangle(yl,Ml,Qo,!1,Jo),a===null))return;let l=t.ray.origin.distanceTo(Jo);l<t.near||l>t.far||n.push({distance:l,point:Jo.clone(),uv:Li.getInterpolation(Jo,yl,Qo,Ml,Op,Fu,Bp,new vt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function bl(e,t,n,i,s,r){zr.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?($o.x=r*zr.x-s*zr.y,$o.y=s*zr.x+r*zr.y):$o.copy(zr),e.copy(t),e.x+=$o.x,e.y+=$o.y,e.applyMatrix4(Um)}var Qi=new P,Ou=new P,Sl=new P,ys=new P,Bu=new P,El=new P,ku=new P,ws=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Qi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Ou.copy(t).add(n).multiplyScalar(.5),Sl.copy(n).sub(t).normalize(),ys.copy(this.origin).sub(Ou);let r=t.distanceTo(n)*.5,o=-this.direction.dot(Sl),a=ys.dot(this.direction),l=-ys.dot(Sl),c=ys.lengthSq(),u=Math.abs(1-o*o),d,h,p,_;if(u>0)if(d=o*l-a,h=o*a-l,_=r*u,d>=0)if(h>=-_)if(h<=_){let M=1/u;d*=M,h*=M,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ou).addScaledVector(Sl,h),p}intersectSphere(t,n){Qi.subVectors(t.center,this.origin);let i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,n,i,s,r){Bu.subVectors(n,t),El.subVectors(i,t),ku.crossVectors(Bu,El);let o=this.direction.dot(ku),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,t);let l=a*this.direction.dot(El.crossVectors(ys,El));if(l<0)return null;let c=a*this.direction.dot(Bu.cross(ys));if(c<0||l+c>o)return null;let u=-a*ys.dot(ku);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ri=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kp=new Te,Js=new ws,Tl=new Ts,zp=new P,wl=new P,Al=new P,Cl=new P,zu=new P,Rl=new P,Vp=new P,Pl=new P,Je=class extends Rn{constructor(t=new le,n=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(zu.fromBufferAttribute(d,t),o?Rl.addScaledVector(zu,u):Rl.addScaledVector(zu.sub(n),u))}n.add(Rl)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Js.copy(t.ray).recast(t.near),!(Tl.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Tl,zp)===null||Js.origin.distanceToSquared(zp)>(t.far-t.near)**2))&&(kp.copy(r).invert(),Js.copy(t.ray).applyMatrix4(kp),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Js)))}_computeIntersections(t,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let m=h[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,w=A;y<w;y+=3){let S=a.getX(y),R=a.getX(y+1),x=a.getX(y+2);s=Il(this,f,t,i,c,u,d,S,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let b=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=Il(this,o,t,i,c,u,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let m=h[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,w=A;y<w;y+=3){let S=y,R=y+1,x=y+2;s=Il(this,f,t,i,c,u,d,S,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let b=m,A=m+1,y=m+2;s=Il(this,o,t,i,c,u,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function yx(e,t,n,i,s,r,o,a){let l;if(t.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ns,a),l===null)return null;Pl.copy(a),Pl.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Pl);return c<n.near||c>n.far?null:{distance:c,point:Pl.clone(),object:e}}function Il(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,wl),e.getVertexPosition(l,Al),e.getVertexPosition(c,Cl);let u=yx(e,t,n,i,wl,Al,Cl,Vp);if(u){let d=new P;Li.getBarycoord(Vp,wl,Al,Cl,d),s&&(u.uv=Li.getInterpolatedAttribute(s,a,l,c,d,new vt)),r&&(u.uv1=Li.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};Li.getNormal(wl,Al,Cl,h.normal),u.face=h,u.barycoord=d}return u}var ac=class extends Cn{constructor(t=null,n=1,i=1,s,r,o,a,l,c=ln,u=ln,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vu=new P,Mx=new P,bx=new kt,si=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Vu.subVectors(i,n).cross(Mx.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Vu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||bx.getNormalMatrix(t),s=this.coplanarPoint(Vu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$s=new Ts,Sx=new vt(.5,.5),Ll=new P,ma=class{constructor(t=new si,n=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],M=r[9],m=r[10],f=r[11],b=r[12],A=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,f-_,w-b).normalize(),s[1].setComponents(c+o,p+u,f+_,w+b).normalize(),s[2].setComponents(c+a,p+d,f+M,w+A).normalize(),s[3].setComponents(c-a,p-d,f-M,w-A).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,f-m,w-y).normalize();else if(s[4].setComponents(c-l,p-h,f-m,w-y).normalize(),n===yi)s[5].setComponents(c+l,p+h,f+m,w+y).normalize();else if(n===ra)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);let n=Sx.distanceTo(t.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ll.x=s.normal.x>0?t.max.x:t.min.x,Ll.y=s.normal.y>0?t.max.y:t.min.y,Ll.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jr=class extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},lc=new P,cc=new P,Gp=new Te,ta=new ws,Dl=new Ts,Gu=new P,Hp=new P,un=class extends Rn{constructor(t=new le,n=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)lc.fromBufferAttribute(n,s-1),cc.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=lc.distanceTo(cc);t.setAttribute("lineDistance",new se(i,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,t.ray.intersectsSphere(Dl)===!1)return;Gp.copy(s).invert(),ta.copy(t.ray).applyMatrix4(Gp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=c){let f=u.getX(M),b=u.getX(M+1),A=Ul(this,t,ta,l,f,b,M);A&&n.push(A)}if(this.isLineLoop){let M=u.getX(_-1),m=u.getX(p),f=Ul(this,t,ta,l,M,m,_-1);f&&n.push(f)}}else{let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=c){let f=Ul(this,t,ta,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){let M=Ul(this,t,ta,l,_-1,p,_-1);M&&n.push(M)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ul(e,t,n,i,s,r,o){let a=e.geometry.attributes.position;if(lc.fromBufferAttribute(a,s),cc.fromBufferAttribute(a,r),n.distanceSqToSegment(lc,cc,Gu,Hp)>i)return;Gu.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Gu);if(!(c<t.near||c>t.far))return{distance:c,point:Hp.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Wp=new P,Xp=new P,Jr=class extends un{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Wp.fromBufferAttribute(n,s),Xp.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wp.distanceTo(Xp);t.setAttribute("lineDistance",new se(i,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $r=class extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qp=new Te,Ku=new ws,Nl=new Ts,Fl=new P,ga=class extends Rn{constructor(t=new le,n=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(s),Nl.radius+=r,t.ray.intersectsSphere(Nl)===!1)return;qp.copy(s).invert(),Ku.copy(t.ray).applyMatrix4(qp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,M=p;_<M;_++){let m=c.getX(_);Fl.fromBufferAttribute(d,m),Yp(Fl,m,l,s,t,n,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=h,M=p;_<M;_++)Fl.fromBufferAttribute(d,_),Yp(Fl,_,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yp(e,t,n,i,s,r,o){let a=Ku.distanceSqToPoint(e);if(a<n){let l=new P;Ku.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var _a=class extends Cn{constructor(t=[],n=Ds,i,s,r,o,a,l,c,u){super(t,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qr=class extends Cn{constructor(t,n,i,s,r,o,a,l,c){super(t,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class extends Cn{constructor(t,n,i=Si,s,r,o,a=ln,l=ln,c,u=Ui,d=1){if(u!==Ui&&u!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},hc=class extends is{constructor(t,n=Si,i=Ds,s,r,o=ln,a=ln,l,c=Ui){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xa=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},to=class e extends le{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;_("z","y","x",-1,-1,i,n,t,o,r,0),_("z","y","x",1,-1,i,n,-t,o,r,1),_("x","z","y",1,1,t,i,n,s,o,2),_("x","z","y",1,-1,t,i,-n,s,o,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function _(M,m,f,b,A,y,w,S,R,x,E){let I=y/R,L=w/x,F=y/2,j=w/2,J=S/2,O=R+1,K=x+1,X=0,nt=0,st=new P;for(let ft=0;ft<K;ft++){let gt=ft*L-j;for(let Mt=0;Mt<O;Mt++){let jt=Mt*I-F;st[M]=jt*b,st[m]=gt*A,st[f]=J,c.push(st.x,st.y,st.z),st[M]=0,st[m]=0,st[f]=S>0?1:-1,u.push(st.x,st.y,st.z),d.push(Mt/R),d.push(1-ft/x),X+=1}}for(let ft=0;ft<x;ft++)for(let gt=0;gt<R;gt++){let Mt=h+gt+O*ft,jt=h+gt+O*(ft+1),_e=h+(gt+1)+O*(ft+1),Jt=h+(gt+1)+O*ft;l.push(Mt,jt,Jt),l.push(jt,_e,Jt),nt+=6}a.addGroup(p,nt,E),p+=nt,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var va=class e extends le{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new P,u=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){let p=i+d/n*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var eo=class e extends le{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let A=new P,y=new P,w=new P;for(let S=0;S<n.length;S+=3)p(n[S+0],A),p(n[S+1],y),p(n[S+2],w),l(A,y,w,b)}function l(b,A,y,w){let S=w+1,R=[];for(let x=0;x<=S;x++){R[x]=[];let E=b.clone().lerp(y,x/S),I=A.clone().lerp(y,x/S),L=S-x;for(let F=0;F<=L;F++)F===0&&x===S?R[x][F]=E:R[x][F]=E.clone().lerp(I,F/L)}for(let x=0;x<S;x++)for(let E=0;E<2*(S-x)-1;E++){let I=Math.floor(E/2);E%2===0?(h(R[x][I+1]),h(R[x+1][I]),h(R[x][I])):(h(R[x][I+1]),h(R[x+1][I+1]),h(R[x+1][I]))}}function c(b){let A=new P;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(b),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function u(){let b=new P;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let y=m(b)/2/Math.PI+.5,w=f(b)/Math.PI+.5;o.push(y,1-w)}_(),d()}function d(){for(let b=0;b<o.length;b+=6){let A=o[b+0],y=o[b+2],w=o[b+4],S=Math.max(A,y,w),R=Math.min(A,y,w);S>.9&&R<.1&&(A<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),w<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function p(b,A){let y=b*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function _(){let b=new P,A=new P,y=new P,w=new P,S=new vt,R=new vt,x=new vt;for(let E=0,I=0;E<r.length;E+=9,I+=6){b.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),x.set(o[I+4],o[I+5]),w.copy(b).add(A).add(y).divideScalar(3);let L=m(w);M(S,I+0,b,L),M(R,I+2,A,L),M(x,I+4,y,L)}}function M(b,A,y,w){w<0&&b.x===1&&(o[A]=b.x-1),y.x===0&&y.z===0&&(o[A]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}};var Ol=new P,Bl=new P,Hu=new P,kl=new Li,no=class extends le{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){let s=Math.pow(10,4),r=Math.cos(Hr*n),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:M,b:m,c:f}=kl;if(M.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),kl.getNormal(Hu),d[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let A=(b+1)%3,y=d[b],w=d[A],S=kl[u[b]],R=kl[u[A]],x=`${y}_${w}`,E=`${w}_${y}`;E in h&&h[E]?(Hu.dot(h[E].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(R.x,R.y,R.z)),h[E]=null):x in h||(h[x]={index0:c[b],index1:c[A],normal:Hu.clone()})}}for(let _ in h)if(h[_]){let{index0:M,index1:m}=h[_];Ol.fromBufferAttribute(a,M),Bl.fromBufferAttribute(a,m),p.push(Ol.x,Ol.y,Ol.z),p.push(Bl.x,Bl.y,Bl.z)}this.setAttribute("position",new se(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ss=class e extends eo{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var ya=class e extends eo{constructor(t=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},Ma=class e extends le{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=n/l,p=[],_=[],M=[],m=[];for(let f=0;f<u;f++){let b=f*h-o;for(let A=0;A<c;A++){let y=A*d-r;_.push(y,-b,0),M.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let A=b+c*f,y=b+c*(f+1),w=b+1+c*(f+1),S=b+1+c*f;p.push(A,y,S),p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ba=class e extends le{constructor(t=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,h=(n-t)/s,p=new P,_=new vt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,u.push(_.x,_.y)}d+=h}for(let M=0;M<s;M++){let m=M*(i+1);for(let f=0;f<i;f++){let b=f+m,A=b,y=b+i+1,w=b+i+2,S=b+1;a.push(A,y,S),a.push(y,w,S)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var io=class e extends le{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new P,h=new P,p=[],_=[],M=[],m=[];for(let f=0;f<=i;f++){let b=[],A=f/i,y=o+A*a,w=t*Math.cos(y),S=Math.sqrt(t*t-w*w),R=0;f===0&&o===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let x=0;x<=n;x++){let E=x/n,I=s+E*r;d.x=-S*Math.cos(I),d.y=w,d.z=S*Math.sin(I),_.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(E+R,1-A),b.push(c++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<n;b++){let A=u[f][b+1],y=u[f][b],w=u[f+1][b],S=u[f+1][b+1];(f!==0||o>0)&&p.push(A,y,S),(f!==i-1||l<Math.PI)&&p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Sa=class e extends eo{constructor(t=1,n=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};function rr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(Zp(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(Zp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function yn(e){let t={};for(let n=0;n<e.length;n++){let i=rr(e[n]);for(let s in i)t[s]=i[s]}return t}function Zp(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ex(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function vd(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var or={clone:rr,merge:yn},Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=Ex(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Te().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},uc=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var dc=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zl(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var As=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break n}if(!(t>=r)){let a=n[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pc=class extends As{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:r=t,a=2*n-i;break;case Yu:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qu:o=t,l=2*i-n;break;case Yu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),M=_*_,m=M*_,f=-h*m+2*h*M-h*_,b=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*_+1,A=(-1-p)*m+(1.5+p)*M+.5*_,y=p*m-p*M;for(let w=0;w!==a;++w)r[w]=f*o[u+w]+b*o[c+w]+A*o[l+w]+y*o[d+w];return r}},mc=class extends As{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},gc=class extends As{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_c=class extends As{interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-n)/(s-n),M=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*M+o[l+m]*_;return r}let h=a*2,p=t-1;for(let _=0;_!==a;++_){let M=o[c+_],m=o[l+_],f=p*h+_*2,b=d[f],A=d[f+1],y=t*h+_*2,w=u[y],S=u[y+1],R=(i-n)/(s-n),x,E,I,L,F;for(let j=0;j<8;j++){x=R*R,E=x*R,I=1-R,L=I*I,F=L*I;let O=F*n+3*L*R*b+3*I*x*w+E*s-i;if(Math.abs(O)<1e-10)break;let K=3*L*(b-n)+6*I*R*(w-b)+3*x*(s-w);if(Math.abs(K)<1e-10)break;R=R-O/K,R=Math.max(0,Math.min(1,R))}r[_]=F*M+3*L*R*A+3*I*x*S+E*m}return r}},Gn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zl(n,this.TimeBufferType),this.values=zl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:zl(t.times,Array),values:zl(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new _c(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case na:n=this.InterpolantFactoryMethodDiscrete;break;case ec:n=this.InterpolantFactoryMethodLinear;break;case Hl:n=this.InterpolantFactoryMethodSmooth;break;case Wu:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ec;case this.InterpolantFactoryMethodSmooth:return Hl;case this.InterpolantFactoryMethodBezier:return Wu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ft("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&H1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Hl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let _=0;_!==i;++_){let M=n[d+_];if(M!==n[h+_]||M!==n[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ec;var Cs=class extends Gn{constructor(t,n,i){super(t,n,i)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=na;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Gn{constructor(t,n,i,s){super(t,n,i,s)}};xc.prototype.ValueTypeName="color";var vc=class extends Gn{constructor(t,n,i,s){super(t,n,i,s)}};vc.prototype.ValueTypeName="number";var yc=class extends As{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=t*a;for(let u=c+a;c!==u;c+=4)Vn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ea=class extends Gn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends Gn{constructor(t,n,i){super(t,n,i)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=na;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Gn{constructor(t,n,i,s){super(t,n,i,s)}};Mc.prototype.ValueTypeName="vector";var bc=class{constructor(t,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nm=new bc,Sc=class{constructor(t){this.manager=t!==void 0?t:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vl=new P,Gl=new Vn,Ii=new P,Ta=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vl,Gl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Vl,Gl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new P,Kp=new vt,jp=new vt,xn=class extends Ta{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z)}getViewSize(t,n){return this.getViewBounds(t,Kp,jp),n.subVectors(jp,Kp)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var ir=class extends Ta{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Vr=-90,Gr=1,Ec=class extends Rn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Vr,Gr,t,n);s.layers=this.layers,this.add(s);let r=new xn(Vr,Gr,t,n);r.layers=this.layers,this.add(r);let o=new xn(Vr,Gr,t,n);o.layers=this.layers,this.add(o);let a=new xn(Vr,Gr,t,n);a.layers=this.layers,this.add(a);let l=new xn(Vr,Gr,t,n);l.layers=this.layers,this.add(l);let c=new xn(Vr,Gr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(d,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Tc=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},wa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ax.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ax(){this._document.hidden===!1&&this.reset()}var yd="\\[\\]\\.:\\/",Cx=new RegExp("["+yd+"]","g"),Md="[^"+yd+"]",Rx="[^"+yd.replace("\\.","")+"]",Px=/((?:WC+[\/:])*)/.source.replace("WC",Md),Ix=/(WCOD+)?/.source.replace("WCOD",Rx),Lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Md),Dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Md),Ux=new RegExp("^"+Px+Ix+Lx+Dx+"$"),Nx=["material","materials","bones","map"],ju=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(t){let n=Ux.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Nx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=n.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=ju;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x3=new Float32Array(1);var Aa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}},Ps=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ad=class Ad{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};Ad.prototype.isMatrix2=!0;var Ju=Ad;var Ca=class extends Mi{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function bd(e,t,n,i){let s=Fx(i);switch(n){case fd:return e*t;case md:return e*t/s.components*s.byteLength;case Dc:return e*t/s.components*s.byteLength;case Fs:return e*t*2/s.components*s.byteLength;case Uc:return e*t*2/s.components*s.byteLength;case pd:return e*t*3/s.components*s.byteLength;case li:return e*t*4/s.components*s.byteLength;case Nc:return e*t*4/s.components*s.byteLength;case Da:case Ua:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Na:case Fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oc:case kc:return Math.max(e,16)*Math.max(t,8)/4;case Fc:case Bc:return Math.max(e,8)*Math.max(t,8)/2;case zc:case Vc:case Hc:case Wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gc:case Oa:case Xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case jc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case $c:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case th:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case nh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ih:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case oh:case ah:case lh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ch:case hh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ba:case uh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Fx(e){switch(e){case Wn:case cd:return{byteLength:1,components:1};case ro:case hd:case vn:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case Si:case Pc:case Ei:return{byteLength:4,components:1};case ud:case dd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function s0(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Bx(e){let t=new WeakMap;function n(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let M=d[p];e.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
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
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
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
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$x=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hv=`vec3 transformedNormal = objectNormal;
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
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,Iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ov=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Ey=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,qy=`#if DEPTH_PACKING == 3200
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
}`,Yy=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`uniform float scale;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,t2=`uniform vec3 diffuse;
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
}`,e2=`#define LAMBERT
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
}`,n2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,i2=`#define MATCAP
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
}`,s2=`#define MATCAP
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
}`,r2=`#define NORMAL
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
}`,o2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a2=`#define PHONG
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
}`,l2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,c2=`#define STANDARD
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
}`,h2=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,u2=`#define TOON
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
}`,d2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,f2=`uniform float size;
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
}`,p2=`uniform vec3 diffuse;
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
}`,m2=`#include <common>
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
}`,g2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,_2=`uniform float rotation;
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
}`,x2=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:kx,alphahash_pars_fragment:zx,alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Hx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:Zx,begin_vertex:Kx,beginnormal_vertex:jx,bsdfs:Jx,iridescence_fragment:$x,bumpmap_pars_fragment:Qx,clipping_planes_fragment:tv,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:sv,color_pars_fragment:rv,color_pars_vertex:ov,color_vertex:av,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:hv,displacementmap_pars_vertex:uv,displacementmap_vertex:dv,emissivemap_fragment:fv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:_v,envmap_common_pars_fragment:xv,envmap_pars_fragment:vv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Iv,envmap_vertex:Mv,fog_vertex:bv,fog_pars_vertex:Sv,fog_fragment:Ev,fog_pars_fragment:Tv,gradientmap_pars_fragment:wv,lightmap_pars_fragment:Av,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Pv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Dv,lights_phong_fragment:Uv,lights_phong_pars_fragment:Nv,lights_physical_fragment:Fv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Bv,lights_fragment_maps:kv,lights_fragment_end:zv,lightprobes_pars_fragment:Vv,logdepthbuf_fragment:Gv,logdepthbuf_pars_fragment:Hv,logdepthbuf_pars_vertex:Wv,logdepthbuf_vertex:Xv,map_fragment:qv,map_pars_fragment:Yv,map_particle_fragment:Zv,map_particle_pars_fragment:Kv,metalnessmap_fragment:jv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:$v,morphcolor_vertex:Qv,morphnormal_vertex:ty,morphtarget_pars_vertex:ey,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:oy,normal_vertex:ay,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:_y,dithering_pars_fragment:xy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:by,shadowmap_vertex:Sy,shadowmask_pars_fragment:Ey,skinbase_vertex:Ty,skinning_pars_vertex:wy,skinning_vertex:Ay,skinnormal_vertex:Cy,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:Iy,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Uy,uv_pars_fragment:Ny,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:By,background_vert:ky,background_frag:zy,backgroundCube_vert:Vy,backgroundCube_frag:Gy,cube_vert:Hy,cube_frag:Wy,depth_vert:Xy,depth_frag:qy,distance_vert:Yy,distance_frag:Zy,equirect_vert:Ky,equirect_frag:jy,linedashed_vert:Jy,linedashed_frag:$y,meshbasic_vert:Qy,meshbasic_frag:t2,meshlambert_vert:e2,meshlambert_frag:n2,meshmatcap_vert:i2,meshmatcap_frag:s2,meshnormal_vert:r2,meshnormal_frag:o2,meshphong_vert:a2,meshphong_frag:l2,meshphysical_vert:c2,meshphysical_frag:h2,meshtoon_vert:u2,meshtoon_frag:d2,points_vert:f2,points_frag:p2,shadow_vert:m2,shadow_frag:g2,sprite_vert:_2,sprite_frag:x2},mt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Oi={basic:{uniforms:yn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:yn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:yn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:yn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:yn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:yn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:yn([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:yn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:yn([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:yn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:yn([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:yn([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:yn([mt.lights,mt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Oi.physical={uniforms:yn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var ph={r:0,b:0,g:0},v2=new Te,r0=new kt;r0.set(-1,0,0,0,1,0,0,0,1);function y2(e,t,n,i,s,r){let o=new zt(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let y=b.backgroundBlurriness>0;A=t.get(A,y)}return A}function _(b){let A=!1,y=p(b);y===null?m(o,a):y&&y.isColor&&(m(y,1),A=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(b,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===Ia)?(c===void 0&&(c=new Je(new to(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:rr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v2.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(r0),c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ae,(u!==y||d!==y.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new Ma(2,2),new ze({name:"BackgroundMaterial",uniforms:rr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(ph,vd(e)),n.buffers.color.setClear(ph.r,ph.g,ph.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:_,addToRenderList:M,dispose:f}}function M2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(L,F,j,J,O){let K=!1,X=d(L,J,j,F);r!==X&&(r=X,c(r.object)),K=p(L,J,j,O),K&&_(L,J,j,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(L,F,j,J),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function u(L){return e.deleteVertexArray(L)}function d(L,F,j,J){let O=J.wireframe===!0,K=i[F.id];K===void 0&&(K={},i[F.id]=K);let X=L.isInstancedMesh===!0?L.id:0,nt=K[X];nt===void 0&&(nt={},K[X]=nt);let st=nt[j.id];st===void 0&&(st={},nt[j.id]=st);let ft=st[O];return ft===void 0&&(ft=h(l()),st[O]=ft),ft}function h(L){let F=[],j=[],J=[];for(let O=0;O<n;O++)F[O]=0,j[O]=0,J[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:J,object:L,attributes:{},index:null}}function p(L,F,j,J){let O=r.attributes,K=F.attributes,X=0,nt=j.getAttributes();for(let st in nt)if(nt[st].location>=0){let gt=O[st],Mt=K[st];if(Mt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==J}function _(L,F,j,J){let O={},K=F.attributes,X=0,nt=j.getAttributes();for(let st in nt)if(nt[st].location>=0){let gt=K[st];gt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor));let Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),O[st]=Mt,X++}r.attributes=O,r.attributesNum=X,r.index=J}function M(){let L=r.newAttributes;for(let F=0,j=L.length;F<j;F++)L[F]=0}function m(L){f(L,0)}function f(L,F){let j=r.newAttributes,J=r.enabledAttributes,O=r.attributeDivisors;j[L]=1,J[L]===0&&(e.enableVertexAttribArray(L),J[L]=1),O[L]!==F&&(e.vertexAttribDivisor(L,F),O[L]=F)}function b(){let L=r.newAttributes,F=r.enabledAttributes;for(let j=0,J=F.length;j<J;j++)F[j]!==L[j]&&(e.disableVertexAttribArray(j),F[j]=0)}function A(L,F,j,J,O,K,X){X===!0?e.vertexAttribIPointer(L,F,j,O,K):e.vertexAttribPointer(L,F,j,J,O,K)}function y(L,F,j,J){M();let O=J.attributes,K=j.getAttributes(),X=F.defaultAttributeValues;for(let nt in K){let st=K[nt];if(st.location>=0){let ft=O[nt];if(ft===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),ft!==void 0){let gt=ft.normalized,Mt=ft.itemSize,jt=t.get(ft);if(jt===void 0)continue;let _e=jt.buffer,Jt=jt.type,tt=jt.bytesPerElement,lt=Jt===e.INT||Jt===e.UNSIGNED_INT||ft.gpuType===Pc;if(ft.isInterleavedBufferAttribute){let rt=ft.data,Ot=rt.stride,Bt=ft.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<st.locationSize;Ut++)f(st.location+Ut,rt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<st.locationSize;Ut++)m(st.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let Ut=0;Ut<st.locationSize;Ut++)A(st.location+Ut,Mt/st.locationSize,Jt,gt,Ot*tt,(Bt+Mt/st.locationSize*Ut)*tt,lt)}else{if(ft.isInstancedBufferAttribute){for(let rt=0;rt<st.locationSize;rt++)f(st.location+rt,ft.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let rt=0;rt<st.locationSize;rt++)m(st.location+rt);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let rt=0;rt<st.locationSize;rt++)A(st.location+rt,Mt/st.locationSize,Jt,gt,Mt*tt,Mt/st.locationSize*rt*tt,lt)}}else if(X!==void 0){let gt=X[nt];if(gt!==void 0)switch(gt.length){case 2:e.vertexAttrib2fv(st.location,gt);break;case 3:e.vertexAttrib3fv(st.location,gt);break;case 4:e.vertexAttrib4fv(st.location,gt);break;default:e.vertexAttrib1fv(st.location,gt)}}}}b()}function w(){E();for(let L in i){let F=i[L];for(let j in F){let J=F[j];for(let O in J){let K=J[O];for(let X in K)u(K[X].object),delete K[X];delete J[O]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let F=i[L.id];for(let j in F){let J=F[j];for(let O in J){let K=J[O];for(let X in K)u(K[X].object),delete K[X];delete J[O]}}delete i[L.id]}function R(L){for(let F in i){let j=i[F];for(let J in j){let O=j[J];if(O[L.id]===void 0)continue;let K=O[L.id];for(let X in K)u(K[X].object),delete K[X];delete O[L.id]}}}function x(L){for(let F in i){let j=i[F],J=L.isInstancedMesh===!0?L.id:0,O=j[J];if(O!==void 0){for(let K in O){let X=O[K];for(let nt in X)u(X[nt].object),delete X[nt];delete O[K]}delete j[J],Object.keys(j).length===0&&delete i[F]}}}function E(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function b2(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function S2(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==li&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Wn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ei&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Lt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:S}}function E2(e){let t=this,n=null,i=0,s=!1,r=!1,o=new si,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,A=b*4,y=f.clippingState||null;l.value=y,y=u(_,h,A,p);for(let w=0;w!==A;++w)y[w]=n[w];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let f=p+M*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,y=p;A!==M;++A,y+=4)o.copy(d[A]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Os=4,Fm=[.125,.215,.35,.446,.526,.582],ar=20,T2=256,ka=new ir,Om=new zt,Cd=null,Rd=0,Pd=0,Id=!1,w2=new P,gh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=w2}=r;Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cd,Rd,Pd),this._renderer.xr.enabled=Id,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ds||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:vn,format:li,colorSpace:ia,depthBuffer:!1},s=Bm(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A2(r)),this._blurMaterial=R2(r,t,n),this._ggxMaterial=C2(r,t,n)}return s}_compileMaterial(t){let n=new Je(new le,t);this._renderer.compile(n,ka)}_sceneToCubeUV(t,n,i,s,r){let l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Om),d.toneMapping=bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new to,new ri({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(Om),f=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;lo(s,y*w,A>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=b}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ds||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ka)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-Os?i-_+Os:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-n,lo(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(a,ka),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,lo(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(a,ka)}_blur(t,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ar-1),M=r/_,m=isFinite(r)?1+Math.floor(u*M):ar;m>ar&&Lt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ar}`);let f=[],b=0;for(let R=0;R<ar;++R){let x=R/M,E=Math.exp(-x*x/2);f.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;let y=this._sizeLods[s],w=3*y*(s>A-Os?s-A+Os:0),S=4*(this._cubeSize-y);lo(n,w,S,3*y,2*y),l.setRenderTarget(n),l.render(d,ka)}};function A2(e){let t=[],n=[],i=[],s=e,r=e-Os+1+Fm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>e-Os?l=Fm[o-e+Os-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,M=3,m=2,f=1,b=new Float32Array(M*_*p),A=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let S=0;S<p;S++){let R=S%3*2/3-1,x=S>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];b.set(E,M*_*S),A.set(h,m*_*S);let I=[S,S,S,S,S,S];y.set(I,f*_*S)}let w=new le;w.setAttribute("position",new Ln(b,M)),w.setAttribute("uv",new Ln(A,m)),w.setAttribute("faceIndex",new Ln(y,f)),i.push(new Je(w,null)),s>Os&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Bm(e,t,n){let i=new je(e,t,n);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function C2(e,t,n){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function R2(e,t,n){let i=new Float32Array(ar),s=new P(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function km(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function zm(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vh(){return`

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
	`}var _h=class extends je{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _a(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new to(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:ai});r.uniforms.tEquirect.value=n;let o=new Je(s,r),a=n.minFilter;return n.minFilter===Us&&(n.minFilter=Ke),new Ec(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}};function P2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ac||p===Cc)if(t.has(h)){let _=t.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new _h(_.height);return M.fromEquirectangularTexture(e,h),t.set(h,M),h.addEventListener("dispose",c),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,_=p===Ac||p===Cc,M=p===Ds||p===sr;if(_||M){let m=n.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new gh(e)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return _&&b&&b.height>0||M&&b&&l(b)?(i===null&&(i=new gh(e)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Ac?h.mapping=Ds:p===Cc&&(h.mapping=sr),h}function l(h){let p=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function I2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&tr("WebGLRenderer: "+i+" extension not supported."),s}}}function L2(e,t,n,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,_=d.attributes.position,M=0;if(_===void 0)return;if(p!==null){let b=p.array;M=p.version;for(let A=0,y=b.length;A<y;A+=3){let w=b[A+0],S=b[A+1],R=b[A+2];h.push(w,S,S,R,R,w)}}else{let b=_.array;M=_.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let w=A+0,S=A+1,R=A+2;h.push(w,S,S,R,R,w)}}let m=new(_.count>=65535?da:ua)(h,1);m.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function D2(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){e.drawElements(i,h,r,d*o),n.update(h,i,1)}function c(d,h,p){p!==0&&(e.drawElementsInstanced(i,h,r,d*o,p),n.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];n.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function U2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:Ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function N2(e,t,n){let i=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),M===!0&&(A=3);let y=a.attributes.position.count*A,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*w*4*d),R=new la(S,y,w,d);R.type=Ei,R.needsUpdate=!0;let x=A*4;for(let I=0;I<d;I++){let L=m[I],F=f[I],j=b[I],J=y*w*4*I;for(let O=0;O<L.count;O++){let K=O*x;p===!0&&(s.fromBufferAttribute(L,O),S[J+K+0]=s.x,S[J+K+1]=s.y,S[J+K+2]=s.z,S[J+K+3]=0),_===!0&&(s.fromBufferAttribute(F,O),S[J+K+4]=s.x,S[J+K+5]=s.y,S[J+K+6]=s.z,S[J+K+7]=0),M===!0&&(s.fromBufferAttribute(j,O),S[J+K+8]=s.x,S[J+K+9]=s.y,S[J+K+10]=s.z,S[J+K+11]=j.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new vt(y,w)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function F2(e,t,n,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}var O2={[nd]:"LINEAR_TONE_MAPPING",[id]:"REINHARD_TONE_MAPPING",[sd]:"CINEON_TONE_MAPPING",[Pa]:"ACES_FILMIC_TONE_MAPPING",[od]:"AGX_TONE_MAPPING",[ad]:"NEUTRAL_TONE_MAPPING",[rd]:"CUSTOM_TONE_MAPPING"};function B2(e,t,n,i,s,r){let o=new je(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new is(t,n):void 0}),a=new je(t,n,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new le;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));let c=new uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Je(l,c),d=new ir(-1,1,1,-1,0,1),h=null,p=null,_=!1,M,m=null,f=[],b=!1;this.setSize=function(A,y){o.setSize(A,y),a.setSize(A,y);for(let w=0;w<f.length;w++){let S=f[w];S.setSize&&S.setSize(A,y)}},this.setEffects=function(A){f=A,b=f.length>0&&f[0].isRenderPass===!0;let y=o.width,w=o.height;for(let S=0;S<f.length;S++){let R=f[S];R.setSize&&R.setSize(y,w)}},this.begin=function(A,y){if(_||A.toneMapping===bi&&f.length===0)return!1;if(m=y,y!==null){let w=y.width,S=y.height;(o.width!==w||o.height!==S)&&this.setSize(w,S)}return b===!1&&A.setRenderTarget(o),M=A.toneMapping,A.toneMapping=bi,!0},this.hasRenderPass=function(){return b},this.end=function(A,y){A.toneMapping=M,_=!0;let w=o,S=a;for(let R=0;R<f.length;R++){let x=f[R];if(x.enabled!==!1&&(x.render(A,S,w,y),x.needsSwap!==!1)){let E=w;w=S,S=E}}if(h!==A.outputColorSpace||p!==A.toneMapping){h=A.outputColorSpace,p=A.toneMapping,c.defines={},Kt.getTransfer(h)===ae&&(c.defines.SRGB_TRANSFER="");let R=O2[p];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(m),A.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var o0=new Cn,Ud=new is(1,1),a0=new la,l0=new rc,c0=new _a,Vm=[],Gm=[],Hm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function ho(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Vm[s];if(r===void 0&&(r=new Float32Array(s),Vm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function $e(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function yh(e,t){let n=Gm[t];n===void 0&&(n=new Int32Array(t),Gm[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function k2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2fv(this.addr,t),Qe(n,t)}}function V2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($e(n,t))return;e.uniform3fv(this.addr,t),Qe(n,t)}}function G2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4fv(this.addr,t),Qe(n,t)}}function H2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(n,t)}else{if($e(n,i))return;Xm.set(i),e.uniformMatrix2fv(this.addr,!1,Xm),Qe(n,i)}}function W2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(n,t)}else{if($e(n,i))return;Wm.set(i),e.uniformMatrix3fv(this.addr,!1,Wm),Qe(n,i)}}function X2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(n,t)}else{if($e(n,i))return;Hm.set(i),e.uniformMatrix4fv(this.addr,!1,Hm),Qe(n,i)}}function q2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Y2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2iv(this.addr,t),Qe(n,t)}}function Z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3iv(this.addr,t),Qe(n,t)}}function K2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4iv(this.addr,t),Qe(n,t)}}function j2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function J2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2uiv(this.addr,t),Qe(n,t)}}function $2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3uiv(this.addr,t),Qe(n,t)}}function Q2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4uiv(this.addr,t),Qe(n,t)}}function tM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Ud.compareFunction=n.isReversedDepthBuffer()?fh:dh,r=Ud):r=o0,n.setTexture2D(t||r,s)}function eM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||l0,s)}function nM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||c0,s)}function iM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||a0,s)}function sM(e){switch(e){case 5126:return k2;case 35664:return z2;case 35665:return V2;case 35666:return G2;case 35674:return H2;case 35675:return W2;case 35676:return X2;case 5124:case 35670:return q2;case 35667:case 35671:return Y2;case 35668:case 35672:return Z2;case 35669:case 35673:return K2;case 5125:return j2;case 36294:return J2;case 36295:return $2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}function rM(e,t){e.uniform1fv(this.addr,t)}function oM(e,t){let n=ho(t,this.size,2);e.uniform2fv(this.addr,n)}function aM(e,t){let n=ho(t,this.size,3);e.uniform3fv(this.addr,n)}function lM(e,t){let n=ho(t,this.size,4);e.uniform4fv(this.addr,n)}function cM(e,t){let n=ho(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hM(e,t){let n=ho(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function uM(e,t){let n=ho(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function dM(e,t){e.uniform1iv(this.addr,t)}function fM(e,t){e.uniform2iv(this.addr,t)}function pM(e,t){e.uniform3iv(this.addr,t)}function mM(e,t){e.uniform4iv(this.addr,t)}function gM(e,t){e.uniform1uiv(this.addr,t)}function _M(e,t){e.uniform2uiv(this.addr,t)}function xM(e,t){e.uniform3uiv(this.addr,t)}function vM(e,t){e.uniform4uiv(this.addr,t)}function yM(e,t,n){let i=this.cache,s=t.length,r=yh(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=Ud:o=o0;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function MM(e,t,n){let i=this.cache,s=t.length,r=yh(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||l0,r[o])}function bM(e,t,n){let i=this.cache,s=t.length,r=yh(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||c0,r[o])}function SM(e,t,n){let i=this.cache,s=t.length,r=yh(n,s);$e(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||a0,r[o])}function EM(e){switch(e){case 5126:return rM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return hM;case 35676:return uM;case 5124:case 35670:return dM;case 35667:case 35671:return fM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return _M;case 36295:return xM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return SM}}var Nd=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sM(n.type)}},Fd=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EM(n.type)}},Od=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,n[a.id],i)}}},Ld=/(\w+)(\])?(\[|\.)?/g;function qm(e,t){e.seq.push(t),e.map[t.id]=t}function TM(e,t,n){let i=e.name,s=i.length;for(Ld.lastIndex=0;;){let r=Ld.exec(i),o=Ld.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qm(n,c===void 0?new Nd(a,e,t):new Fd(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new Od(a),qm(n,d)),n=d}}}var co=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(n,o),l=t.getUniformLocation(n,a.name);TM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in n&&i.push(o)}return i}};function Ym(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var wM=37297,AM=0;function CM(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Zm=new kt;function RM(e){Kt._getMatrix(Zm,Kt.workingColorSpace,e);let t=`mat3( ${Zm.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case sa:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Km(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+CM(e.getShaderSource(t),a)}else return r}function PM(e,t){let n=RM(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var IM={[nd]:"Linear",[id]:"Reinhard",[sd]:"Cineon",[Pa]:"ACESFilmic",[od]:"AgX",[ad]:"Neutral",[rd]:"Custom"};function LM(e,t){let n=IM[t];return n===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var mh=new P;function DM(){Kt.getLuminanceCoefficients(mh);let e=mh.x.toFixed(4),t=mh.y.toFixed(4),n=mh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function NM(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function FM(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Va(e){return e!==""}function jm(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var OM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(e){return e.replace(OM,kM)}var BM=new Map;function kM(e,t){let n=Ht[t];if(n===void 0){let i=BM.get(t);if(i!==void 0)n=Ht[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bd(n)}var zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(e){return e.replace(zM,VM)}function VM(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var GM={[Ra]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function HM(e){return GM[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var WM={[Ds]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};function XM(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":WM[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var qM={[sr]:"ENVMAP_MODE_REFRACTION"};function YM(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":qM[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ZM={[ed]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[vm]:"ENVMAP_BLENDING_ADD"};function KM(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":ZM[e.combine]||"ENVMAP_BLENDING_NONE"}function jM(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function JM(e,t,n,i){let s=e.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=HM(n),c=XM(n),u=YM(n),d=KM(n),h=jM(n),p=UM(n),_=NM(r),M=s.createProgram(),m,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Va).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Va).join(`
`),f.length>0&&(f+=`
`)):(m=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),f=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Ht.tonemapping_pars_fragment:"",n.toneMapping!==bi?LM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,PM("linearToOutputTexel",n.outputColorSpace),DM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),o=Bd(o),o=jm(o,n),o=Jm(o,n),a=Bd(a),a=jm(a,n),a=Jm(a,n),o=$m(o),a=$m(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=b+m+o,y=b+f+a,w=Ym(s,s.VERTEX_SHADER,A),S=Ym(s,s.FRAGMENT_SHADER,y);s.attachShader(M,w),s.attachShader(M,S),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(L){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",j=s.getShaderInfoLog(w)||"",J=s.getShaderInfoLog(S)||"",O=F.trim(),K=j.trim(),X=J.trim(),nt=!0,st=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,w,S);else{let ft=Km(s,w,"vertex"),gt=Km(s,S,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ft+`
`+gt)}else O!==""?Lt("WebGLProgram: Program Info Log:",O):(K===""||X==="")&&(st=!1);st&&(L.diagnostics={runnable:nt,programLog:O,vertexShader:{log:K,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(w),s.deleteShader(S),x=new co(s,M),E=FM(s,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,wM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=S,this}var $M=0,kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new zd(t),n.set(t,i)),i}},zd=class{constructor(t){this.id=$M++,this.code=t,this.usedTimes=0}};function QM(e){return e===Fs||e===Oa||e===Ba}function tb(e,t,n,i,s,r){let o=new ca,a=new kd,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,E,I,L,F,j){let J=L.fog,O=F.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||K,X),st=nt&&nt.mapping===Ia?nt.image.height:null,ft=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Lt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Mt=gt!==void 0?gt.length:0,jt=0;O.morphAttributes.position!==void 0&&(jt=1),O.morphAttributes.normal!==void 0&&(jt=2),O.morphAttributes.color!==void 0&&(jt=3);let _e,Jt,tt,lt;if(ft){let ct=Oi[ft];_e=ct.vertexShader,Jt=ct.fragmentShader}else{_e=x.vertexShader,Jt=x.fragmentShader;let ct=a.getVertexShaderStage(x),ie=a.getFragmentShaderStage(x);a.update(x,ct,ie),tt=ct.id,lt=ie.id}let rt=e.getRenderTarget(),Ot=e.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,Ut=F.isBatchedMesh===!0,be=!!x.map,Wt=!!x.matcap,ne=!!nt,$t=!!x.aoMap,qt=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,Ge=!!x.displacementMap,He=!!x.emissiveMap,ve=!!x.metalnessMap,ye=!!x.roughnessMap,D=x.anisotropy>0,Oe=x.clearcoat>0,Yt=x.dispersion>0,T=x.iridescence>0,g=x.sheen>0,N=x.transmission>0,k=D&&!!x.anisotropyMap,Y=Oe&&!!x.clearcoatMap,at=Oe&&!!x.clearcoatNormalMap,ht=Oe&&!!x.clearcoatRoughnessMap,Z=T&&!!x.iridescenceMap,$=T&&!!x.iridescenceThicknessMap,ut=g&&!!x.sheenColorMap,Et=g&&!!x.sheenRoughnessMap,pt=!!x.specularMap,dt=!!x.specularColorMap,Pt=!!x.specularIntensityMap,G=N&&!!x.transmissionMap,et=N&&!!x.thicknessMap,C=!!x.gradientMap,W=!!x.alphaMap,B=x.alphaTest>0,Q=!!x.alphaHash,it=!!x.extensions,q=bi;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(q=e.toneMapping);let ot={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:Jt,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ut,batchingColor:Ut&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:be,matcap:Wt,envMap:ne,envMapMode:ne&&nt.mapping,envMapCubeUVHeight:st,aoMap:$t,lightMap:qt,bumpMap:Se,normalMap:xe,displacementMap:Ge,emissiveMap:He,normalMapObjectSpace:xe&&x.normalMapType===bm,normalMapTangentSpace:xe&&x.normalMapType===gd,packedNormalMap:xe&&x.normalMapType===gd&&QM(x.normalMap.format),metalnessMap:ve,roughnessMap:ye,anisotropy:D,anisotropyMap:k,clearcoat:Oe,clearcoatMap:Y,clearcoatNormalMap:at,clearcoatRoughnessMap:ht,dispersion:Yt,iridescence:T,iridescenceMap:Z,iridescenceThicknessMap:$,sheen:g,sheenColorMap:ut,sheenRoughnessMap:Et,specularMap:pt,specularColorMap:dt,specularIntensityMap:Pt,transmission:N,transmissionMap:G,thicknessMap:et,gradientMap:C,opaque:x.transparent===!1&&x.blending===er&&x.alphaToCoverage===!1,alphaMap:W,alphaTest:B,alphaHash:Q,combine:x.combine,mapUv:be&&_(x.map.channel),aoMapUv:$t&&_(x.aoMap.channel),lightMapUv:qt&&_(x.lightMap.channel),bumpMapUv:Se&&_(x.bumpMap.channel),normalMapUv:xe&&_(x.normalMap.channel),displacementMapUv:Ge&&_(x.displacementMap.channel),emissiveMapUv:He&&_(x.emissiveMap.channel),metalnessMapUv:ve&&_(x.metalnessMap.channel),roughnessMapUv:ye&&_(x.roughnessMap.channel),anisotropyMapUv:k&&_(x.anisotropyMap.channel),clearcoatMapUv:Y&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(x.sheenRoughnessMap.channel),specularMapUv:pt&&_(x.specularMap.channel),specularColorMapUv:dt&&_(x.specularColorMap.channel),specularIntensityMapUv:Pt&&_(x.specularIntensityMap.channel),transmissionMapUv:G&&_(x.transmissionMap.channel),thicknessMapUv:et&&_(x.thicknessMap.channel),alphaMapUv:W&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||D),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(be||W),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ot,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:jt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:q,decodeVideoTexture:be&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oi,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(f(E,x),b(E,x),E.push(e.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let E=p[x.type],I;if(E){let L=Oi[E];I=or.clone(L.uniforms)}else I=x.uniforms;return I}function y(x,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new JM(e,E,x,s),c.push(I),u.set(E,I)),I}function w(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:R}}function eb(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function nb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function t0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function e0(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,_,M,m,f){let b=e[t];return b===void 0?(b={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:f},e[t]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=_,b.materialVariant=o(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=m,b.group=f),t++,b}function l(h,p,_,M,m,f){let b=a(h,p,_,M,m,f);_.transmission>0?i.push(b):_.transparent===!0?s.push(b):n.push(b)}function c(h,p,_,M,m,f){let b=a(h,p,_,M,m,f);_.transmission>0?i.unshift(b):_.transparent===!0?s.unshift(b):n.unshift(b)}function u(h,p,_){n.length>1&&n.sort(h||nb),i.length>1&&i.sort(p||t0),s.length>1&&s.sort(p||t0),_&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,p=e.length;h<p;h++){let _=e[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function ib(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;return r===void 0?(o=new e0,e.set(i,[o])):s>=r.length?(o=new e0,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function sb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new zt};break;case"SpotLight":n={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":n={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function rb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ob=0;function ab(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lb(e){let t=new sb,n=rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Te,o=new Te;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,b=0,A=0,y=0,w=0,S=0,R=0;c.sort(ab);for(let E=0,I=c.length;E<I;E++){let L=c[E],F=L.color,j=L.intensity,J=L.distance,O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Fs?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*j,d+=F.g*j,h+=F.b*j;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],j);R++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,nt=n.get(L);nt.shadowIntensity=X.intensity,nt.shadowBias=X.bias,nt.shadowNormalBias=X.normalBias,nt.shadowRadius=X.radius,nt.shadowMapSize=X.mapSize,i.directionalShadow[p]=nt,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=K,p++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(F).multiplyScalar(j),K.distance=J,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[M]=K;let X=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,X.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[M]=X.matrix,L.castShadow){let nt=n.get(L);nt.shadowIntensity=X.intensity,nt.shadowBias=X.bias,nt.shadowNormalBias=X.normalBias,nt.shadowRadius=X.radius,nt.shadowMapSize=X.mapSize,i.spotShadow[M]=nt,i.spotShadowMap[M]=O,y++}M++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy(F).multiplyScalar(j),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let X=L.shadow,nt=n.get(L);nt.shadowIntensity=X.intensity,nt.shadowBias=X.bias,nt.shadowNormalBias=X.normalBias,nt.shadowRadius=X.radius,nt.shadowMapSize=X.mapSize,nt.shadowCameraNear=X.camera.near,nt.shadowCameraFar=X.camera.far,i.pointShadow[_]=nt,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=L.shadow.matrix,A++}i.point[_]=K,_++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(j),K.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[f]=K,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==b||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,x.directionalLength=p,x.pointLength=_,x.spotLength=M,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=b,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=R,i.version=ob++)}function l(c,u){let d=0,h=0,p=0,_=0,M=0,m=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let A=c[f];if(A.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let y=i.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){let y=i.hemi[M];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function n0(e){let t=new lb(e),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(n)}function u(h){t.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function cb(e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),a;return o===void 0?(a=new n0(e),t.set(s,[a])):r>=o.length?(a=new n0(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,db=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],i0=new Te,za=new P,Dd=new P;function pb(e,t,n){let i=new ma,s=new vt,r=new vt,o=new Re,a=new dc,l=new fc,c={},u=n.maxTextureSize,d={[ns]:Pn,[Pn]:ns,[oi]:oi},h=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:hb,fragmentShader:ub}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new le;_.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Je(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let f=this.type;this.render=function(S,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Qp&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ra);let E=e.getRenderTarget(),I=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),F=e.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let j=f!==this.type;j&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(O=>O.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,O=S.length;J<O;J++){let K=S[J],X=K.shadow;if(X===void 0){Lt("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));let st=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=st,X.map===null||j===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===so){if(K.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new je(s.x,s.y,{format:Fs,type:vn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new is(s.x,s.y,Ei),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=Ui,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ln,X.map.depthTexture.magFilter=ln}else K.isPointLight?(X.map=new _h(s.x),X.map.depthTexture=new hc(s.x,Si)):(X.map=new je(s.x,s.y),X.map.depthTexture=new is(s.x,s.y,Si)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=Ui,this.type===Ra?(X.map.depthTexture.compareFunction=st?fh:dh,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ln,X.map.depthTexture.magFilter=ln);X.camera.updateProjectionMatrix()}let ft=X.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<ft;gt++){if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,gt),e.clear();else{gt===0&&(e.setRenderTarget(X.map),e.clear());let Mt=X.getViewport(gt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),F.viewport(o)}if(K.isPointLight){let Mt=X.camera,jt=X.matrix,_e=K.distance||Mt.far;_e!==Mt.far&&(Mt.far=_e,Mt.updateProjectionMatrix()),za.setFromMatrixPosition(K.matrixWorld),Mt.position.copy(za),Dd.copy(Mt.position),Dd.add(db[gt]),Mt.up.copy(fb[gt]),Mt.lookAt(Dd),Mt.updateMatrixWorld(),jt.makeTranslation(-za.x,-za.y,-za.z),i0.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(i0,Mt.coordinateSystem,Mt.reversedDepth)}else X.updateMatrices(K);i=X.getFrustum(),y(R,x,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===so&&b(X,x),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(E,I,L)};function b(S,R){let x=t.update(M);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new je(s.x,s.y,{format:Fs,type:vn})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,e.setRenderTarget(S.mapPass),e.clear(),e.renderBufferDirect(R,null,x,h,M,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,e.setRenderTarget(S.map),e.clear(),e.renderBufferDirect(R,null,x,p,M,null)}function A(S,R,x,E){let I=null,L=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)I=L;else if(I=x.isPointLight===!0?l:a,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=I.uuid,j=R.uuid,J=c[F];J===void 0&&(J={},c[F]=J);let O=J[j];O===void 0&&(O=I.clone(),J[j]=O,R.addEventListener("dispose",w)),I=O}if(I.visible=R.visible,I.wireframe=R.wireframe,E===so?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=e.properties.get(I);F.light=x}return I}function y(S,R,x,E,I){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===so)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let j=t.update(S),J=S.material;if(Array.isArray(J)){let O=j.groups;for(let K=0,X=O.length;K<X;K++){let nt=O[K],st=J[nt.materialIndex];if(st&&st.visible){let ft=A(S,st,E,I);S.onBeforeShadow(e,S,R,x,j,ft,nt),e.renderBufferDirect(x,null,j,ft,S,nt),S.onAfterShadow(e,S,R,x,j,ft,nt)}}}else if(J.visible){let O=A(S,J,E,I);S.onBeforeShadow(e,S,R,x,j,O,null),e.renderBufferDirect(x,null,j,O,S,null),S.onAfterShadow(e,S,R,x,j,O,null)}}let F=S.children;for(let j=0,J=F.length;j<J;j++)y(F[j],R,x,E,I)}function w(S){S.target.removeEventListener("dispose",w);for(let x in c){let E=c[x],I=S.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function mb(e,t){function n(){let C=!1,W=new Re,B=null,Q=new Re(0,0,0,0);return{setMask:function(it){B!==it&&!C&&(e.colorMask(it,it,it,it),B=it)},setLocked:function(it){C=it},setClear:function(it,q,ot,ct,ie){ie===!0&&(it*=ct,q*=ct,ot*=ct),W.set(it,q,ot,ct),Q.equals(W)===!1&&(e.clearColor(it,q,ot,ct),Q.copy(W))},reset:function(){C=!1,B=null,Q.set(-1,0,0,0)}}}function i(){let C=!1,W=!1,B=null,Q=null,it=null;return{setReversed:function(q){if(W!==q){let ot=t.get("EXT_clip_control");q?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),W=q;let ct=it;it=null,this.setClear(ct)}},getReversed:function(){return W},setTest:function(q){q?rt(e.DEPTH_TEST):Ot(e.DEPTH_TEST)},setMask:function(q){B!==q&&!C&&(e.depthMask(q),B=q)},setFunc:function(q){if(W&&(q=Lm[q]),Q!==q){switch(q){case ql:e.depthFunc(e.NEVER);break;case Yl:e.depthFunc(e.ALWAYS);break;case Zl:e.depthFunc(e.LESS);break;case nr:e.depthFunc(e.LEQUAL);break;case Kl:e.depthFunc(e.EQUAL);break;case jl:e.depthFunc(e.GEQUAL);break;case Jl:e.depthFunc(e.GREATER);break;case $l:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Q=q}},setLocked:function(q){C=q},setClear:function(q){it!==q&&(it=q,W&&(q=1-q),e.clearDepth(q))},reset:function(){C=!1,B=null,Q=null,it=null,W=!1}}}function s(){let C=!1,W=null,B=null,Q=null,it=null,q=null,ot=null,ct=null,ie=null;return{setTest:function(Gt){C||(Gt?rt(e.STENCIL_TEST):Ot(e.STENCIL_TEST))},setMask:function(Gt){W!==Gt&&!C&&(e.stencilMask(Gt),W=Gt)},setFunc:function(Gt,Ee,hn){(B!==Gt||Q!==Ee||it!==hn)&&(e.stencilFunc(Gt,Ee,hn),B=Gt,Q=Ee,it=hn)},setOp:function(Gt,Ee,hn){(q!==Gt||ot!==Ee||ct!==hn)&&(e.stencilOp(Gt,Ee,hn),q=Gt,ot=Ee,ct=hn)},setLocked:function(Gt){C=Gt},setClear:function(Gt){ie!==Gt&&(e.clearStencil(Gt),ie=Gt)},reset:function(){C=!1,W=null,B=null,Q=null,it=null,q=null,ot=null,ct=null,ie=null}}}let r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,_=[],M=null,m=!1,f=null,b=null,A=null,y=null,w=null,S=null,R=null,x=new zt(0,0,0),E=0,I=!1,L=null,F=null,j=null,J=null,O=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,st=e.getParameter(e.VERSION);st.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(st)[1]),X=nt>=1):st.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),X=nt>=2);let ft=null,gt={},Mt=e.getParameter(e.SCISSOR_BOX),jt=e.getParameter(e.VIEWPORT),_e=new Re().fromArray(Mt),Jt=new Re().fromArray(jt);function tt(C,W,B,Q){let it=new Uint8Array(4),q=e.createTexture();e.bindTexture(C,q),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ot=0;ot<B;ot++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(W,0,e.RGBA,1,1,Q,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(W+ot,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return q}let lt={};lt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),lt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),lt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(e.DEPTH_TEST),o.setFunc(nr),Se(!1),xe($u),rt(e.CULL_FACE),$t(ai);function rt(C){u[C]!==!0&&(e.enable(C),u[C]=!0)}function Ot(C){u[C]!==!1&&(e.disable(C),u[C]=!1)}function Bt(C,W){return h[C]!==W?(e.bindFramebuffer(C,W),h[C]=W,C===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=W),C===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=W),!0):!1}function Ut(C,W){let B=_,Q=!1;if(C){B=p.get(W),B===void 0&&(B=[],p.set(W,B));let it=C.textures;if(B.length!==it.length||B[0]!==e.COLOR_ATTACHMENT0){for(let q=0,ot=it.length;q<ot;q++)B[q]=e.COLOR_ATTACHMENT0+q;B.length=it.length,Q=!0}}else B[0]!==e.BACK&&(B[0]=e.BACK,Q=!0);Q&&e.drawBuffers(B)}function be(C){return M!==C?(e.useProgram(C),M=C,!0):!1}let Wt={[bs]:e.FUNC_ADD,[em]:e.FUNC_SUBTRACT,[nm]:e.FUNC_REVERSE_SUBTRACT};Wt[im]=e.MIN,Wt[sm]=e.MAX;let ne={[rm]:e.ZERO,[om]:e.ONE,[am]:e.SRC_COLOR,[Wl]:e.SRC_ALPHA,[fm]:e.SRC_ALPHA_SATURATE,[um]:e.DST_COLOR,[cm]:e.DST_ALPHA,[lm]:e.ONE_MINUS_SRC_COLOR,[Xl]:e.ONE_MINUS_SRC_ALPHA,[dm]:e.ONE_MINUS_DST_COLOR,[hm]:e.ONE_MINUS_DST_ALPHA,[pm]:e.CONSTANT_COLOR,[mm]:e.ONE_MINUS_CONSTANT_COLOR,[gm]:e.CONSTANT_ALPHA,[_m]:e.ONE_MINUS_CONSTANT_ALPHA};function $t(C,W,B,Q,it,q,ot,ct,ie,Gt){if(C===ai){m===!0&&(Ot(e.BLEND),m=!1);return}if(m===!1&&(rt(e.BLEND),m=!0),C!==tm){if(C!==f||Gt!==I){if((b!==bs||w!==bs)&&(e.blendEquation(e.FUNC_ADD),b=bs,w=bs),Gt)switch(C){case er:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hn:e.blendFunc(e.ONE,e.ONE);break;case Qu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case td:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ft("WebGLState: Invalid blending: ",C);break}else switch(C){case er:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Qu:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case td:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",C);break}A=null,y=null,S=null,R=null,x.set(0,0,0),E=0,f=C,I=Gt}return}it=it||W,q=q||B,ot=ot||Q,(W!==b||it!==w)&&(e.blendEquationSeparate(Wt[W],Wt[it]),b=W,w=it),(B!==A||Q!==y||q!==S||ot!==R)&&(e.blendFuncSeparate(ne[B],ne[Q],ne[q],ne[ot]),A=B,y=Q,S=q,R=ot),(ct.equals(x)===!1||ie!==E)&&(e.blendColor(ct.r,ct.g,ct.b,ie),x.copy(ct),E=ie),f=C,I=!1}function qt(C,W){C.side===oi?Ot(e.CULL_FACE):rt(e.CULL_FACE);let B=C.side===Pn;W&&(B=!B),Se(B),C.blending===er&&C.transparent===!1?$t(ai):$t(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let Q=C.stencilWrite;a.setTest(Q),Q&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),He(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?rt(e.SAMPLE_ALPHA_TO_COVERAGE):Ot(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(C){L!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),L=C)}function xe(C){C!==Jp?(rt(e.CULL_FACE),C!==F&&(C===$u?e.cullFace(e.BACK):C===$p?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ot(e.CULL_FACE),F=C}function Ge(C){C!==j&&(X&&e.lineWidth(C),j=C)}function He(C,W,B){C?(rt(e.POLYGON_OFFSET_FILL),(J!==W||O!==B)&&(J=W,O=B,o.getReversed()&&(W=-W),e.polygonOffset(W,B))):Ot(e.POLYGON_OFFSET_FILL)}function ve(C){C?rt(e.SCISSOR_TEST):Ot(e.SCISSOR_TEST)}function ye(C){C===void 0&&(C=e.TEXTURE0+K-1),ft!==C&&(e.activeTexture(C),ft=C)}function D(C,W,B){B===void 0&&(ft===null?B=e.TEXTURE0+K-1:B=ft);let Q=gt[B];Q===void 0&&(Q={type:void 0,texture:void 0},gt[B]=Q),(Q.type!==C||Q.texture!==W)&&(ft!==B&&(e.activeTexture(B),ft=B),e.bindTexture(C,W||lt[C]),Q.type=C,Q.texture=W)}function Oe(){let C=gt[ft];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Yt(){try{e.compressedTexImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function g(){try{e.texSubImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function N(){try{e.texSubImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function at(){try{e.texStorage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function ht(){try{e.texStorage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function Z(){try{e.texImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function $(){try{e.texImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function ut(C){return d[C]!==void 0?d[C]:e.getParameter(C)}function Et(C,W){d[C]!==W&&(e.pixelStorei(C,W),d[C]=W)}function pt(C){_e.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),_e.copy(C))}function dt(C){Jt.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),Jt.copy(C))}function Pt(C,W){let B=c.get(W);B===void 0&&(B=new WeakMap,c.set(W,B));let Q=B.get(C);Q===void 0&&(Q=e.getUniformBlockIndex(W,C.name),B.set(C,Q))}function G(C,W){let Q=c.get(W).get(C);l.get(W)!==Q&&(e.uniformBlockBinding(W,Q,C.__bindingPointIndex),l.set(W,Q))}function et(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ft=null,gt={},h={},p=new WeakMap,_=[],M=null,m=!1,f=null,b=null,A=null,y=null,w=null,S=null,R=null,x=new zt(0,0,0),E=0,I=!1,L=null,F=null,j=null,J=null,O=null,_e.set(0,0,e.canvas.width,e.canvas.height),Jt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Ot,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:be,setBlending:$t,setMaterial:qt,setFlipSided:Se,setCullFace:xe,setLineWidth:Ge,setPolygonOffset:He,setScissorTest:ve,activeTexture:ye,bindTexture:D,unbindTexture:Oe,compressedTexImage2D:Yt,compressedTexImage3D:T,texImage2D:Z,texImage3D:$,pixelStorei:Et,getParameter:ut,updateUBOMapping:Pt,uniformBlockBinding:G,texStorage2D:at,texStorage3D:ht,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:pt,viewport:dt,reset:et}}function gb(e,t,n,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,d=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,g){return _?new OffscreenCanvas(T,g):oa("canvas")}function m(T,g,N){let k=1,Y=Yt(T);if((Y.width>N||Y.height>N)&&(k=N/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(k*Y.width),ht=Math.floor(k*Y.height);h===void 0&&(h=M(at,ht));let Z=g?M(at,ht):h;return Z.width=at,Z.height=ht,Z.getContext("2d").drawImage(T,0,0,at,ht),Lt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+at+"x"+ht+")."),Z}else return"data"in T&&Lt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function f(T){return T.generateMipmaps}function b(T){e.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(T,g,N,k,Y,at=!1){if(T!==null){if(e[T]!==void 0)return e[T];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ht;k&&(ht=t.get("EXT_texture_norm16"),ht||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===e.RED&&(N===e.FLOAT&&(Z=e.R32F),N===e.HALF_FLOAT&&(Z=e.R16F),N===e.UNSIGNED_BYTE&&(Z=e.R8),N===e.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),N===e.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),g===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(Z=e.R8UI),N===e.UNSIGNED_SHORT&&(Z=e.R16UI),N===e.UNSIGNED_INT&&(Z=e.R32UI),N===e.BYTE&&(Z=e.R8I),N===e.SHORT&&(Z=e.R16I),N===e.INT&&(Z=e.R32I)),g===e.RG&&(N===e.FLOAT&&(Z=e.RG32F),N===e.HALF_FLOAT&&(Z=e.RG16F),N===e.UNSIGNED_BYTE&&(Z=e.RG8),N===e.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),N===e.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(Z=e.RG8UI),N===e.UNSIGNED_SHORT&&(Z=e.RG16UI),N===e.UNSIGNED_INT&&(Z=e.RG32UI),N===e.BYTE&&(Z=e.RG8I),N===e.SHORT&&(Z=e.RG16I),N===e.INT&&(Z=e.RG32I)),g===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),N===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),N===e.UNSIGNED_INT&&(Z=e.RGB32UI),N===e.BYTE&&(Z=e.RGB8I),N===e.SHORT&&(Z=e.RGB16I),N===e.INT&&(Z=e.RGB32I)),g===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),N===e.UNSIGNED_INT&&(Z=e.RGBA32UI),N===e.BYTE&&(Z=e.RGBA8I),N===e.SHORT&&(Z=e.RGBA16I),N===e.INT&&(Z=e.RGBA32I)),g===e.RGB&&(N===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),N===e.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),N===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),g===e.RGBA){let $=at?sa:Kt.getTransfer(Y);N===e.FLOAT&&(Z=e.RGBA32F),N===e.HALF_FLOAT&&(Z=e.RGBA16F),N===e.UNSIGNED_BYTE&&(Z=$===ae?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),N===e.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),N===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function w(T,g){let N;return T?g===null||g===Si||g===oo?N=e.DEPTH24_STENCIL8:g===Ei?N=e.DEPTH32F_STENCIL8:g===ro&&(N=e.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Si||g===oo?N=e.DEPTH_COMPONENT24:g===Ei?N=e.DEPTH_COMPONENT32F:g===ro&&(N=e.DEPTH_COMPONENT16),N}function S(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==Ke?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){let g=T.target;g.removeEventListener("dispose",R),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(T){let g=T.target;g.removeEventListener("dispose",x),L(g)}function E(T){let g=i.get(T);if(g.__webglInit===void 0)return;let N=T.source,k=p.get(N);if(k){let Y=k[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&I(T),Object.keys(k).length===0&&p.delete(N)}i.remove(T)}function I(T){let g=i.get(T);e.deleteTexture(g.__webglTexture);let N=T.source,k=p.get(N);delete k[g.__cacheKey],o.memory.textures--}function L(T){let g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Y=0;Y<g.__webglFramebuffer[k].length;Y++)e.deleteFramebuffer(g.__webglFramebuffer[k][Y]);else e.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)e.deleteFramebuffer(g.__webglFramebuffer[k]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=T.textures;for(let k=0,Y=N.length;k<Y;k++){let at=i.get(N[k]);at.__webglTexture&&(e.deleteTexture(at.__webglTexture),o.memory.textures--),i.remove(N[k])}i.remove(T)}let F=0;function j(){F=0}function J(){return F}function O(T){F=T}function K(){let T=F;return T>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),F+=1,T}function X(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function nt(T,g){let N=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let k=T.image;if(k===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(N,T,g);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+g)}function st(T,g){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ot(N,T,g);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+g)}function ft(T,g){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ot(N,T,g);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+g)}function gt(T,g){let N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Bt(N,T,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+g)}let Mt={[Ql]:e.REPEAT,[Di]:e.CLAMP_TO_EDGE,[tc]:e.MIRRORED_REPEAT},jt={[ln]:e.NEAREST,[ym]:e.NEAREST_MIPMAP_NEAREST,[La]:e.NEAREST_MIPMAP_LINEAR,[Ke]:e.LINEAR,[Rc]:e.LINEAR_MIPMAP_NEAREST,[Us]:e.LINEAR_MIPMAP_LINEAR},_e={[Sm]:e.NEVER,[Cm]:e.ALWAYS,[Em]:e.LESS,[dh]:e.LEQUAL,[Tm]:e.EQUAL,[fh]:e.GEQUAL,[wm]:e.GREATER,[Am]:e.NOTEQUAL};function Jt(T,g){if(g.type===Ei&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ke||g.magFilter===Rc||g.magFilter===La||g.magFilter===Us||g.minFilter===Ke||g.minFilter===Rc||g.minFilter===La||g.minFilter===Us)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Mt[g.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Mt[g.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Mt[g.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,jt[g.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,jt[g.minFilter]),g.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ln||g.minFilter!==La&&g.minFilter!==Us||g.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function tt(T,g){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));let k=g.source,Y=p.get(k);Y===void 0&&(Y={},p.set(k,Y));let at=X(g);if(at!==T.__cacheKey){Y[at]===void 0&&(Y[at]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Y[at].usedTimes++;let ht=Y[T.__cacheKey];ht!==void 0&&(Y[T.__cacheKey].usedTimes--,ht.usedTimes===0&&I(g)),T.__cacheKey=at,T.__webglTexture=Y[at].texture}return N}function lt(T,g,N){return Math.floor(Math.floor(T/N)/g)}function rt(T,g,N,k){let at=T.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,N,k,g.data);else{at.sort((Et,pt)=>Et.start-pt.start);let ht=0;for(let Et=1;Et<at.length;Et++){let pt=at[ht],dt=at[Et],Pt=pt.start+pt.count,G=lt(dt.start,g.width,4),et=lt(pt.start,g.width,4);dt.start<=Pt+1&&G===et&&lt(dt.start+dt.count-1,g.width,4)===G?pt.count=Math.max(pt.count,dt.start+dt.count-pt.start):(++ht,at[ht]=dt)}at.length=ht+1;let Z=n.getParameter(e.UNPACK_ROW_LENGTH),$=n.getParameter(e.UNPACK_SKIP_PIXELS),ut=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let Et=0,pt=at.length;Et<pt;Et++){let dt=at[Et],Pt=Math.floor(dt.start/4),G=Math.ceil(dt.count/4),et=Pt%g.width,C=Math.floor(Pt/g.width),W=G,B=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,et),n.pixelStorei(e.UNPACK_SKIP_ROWS,C),n.texSubImage2D(e.TEXTURE_2D,0,et,C,W,B,N,k,g.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,$),n.pixelStorei(e.UNPACK_SKIP_ROWS,ut)}}function Ot(T,g,N){let k=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=e.TEXTURE_3D);let Y=tt(T,g),at=g.source;n.bindTexture(k,T.__webglTexture,e.TEXTURE0+N);let ht=i.get(at);if(at.version!==ht.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let B=Kt.getPrimaries(Kt.workingColorSpace),Q=g.colorSpace===rs?null:Kt.getPrimaries(g.colorSpace),it=g.colorSpace===rs||B===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let $=m(g.image,!1,s.maxTextureSize);$=Oe(g,$);let ut=r.convert(g.format,g.colorSpace),Et=r.convert(g.type),pt=y(g.internalFormat,ut,Et,g.normalized,g.colorSpace,g.isVideoTexture);Jt(k,g);let dt,Pt=g.mipmaps,G=g.isVideoTexture!==!0,et=ht.__version===void 0||Y===!0,C=at.dataReady,W=S(g,$);if(g.isDepthTexture)pt=w(g.format===Ns,g.type),et&&(G?n.texStorage2D(e.TEXTURE_2D,1,pt,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,pt,$.width,$.height,0,ut,Et,null));else if(g.isDataTexture)if(Pt.length>0){G&&et&&n.texStorage2D(e.TEXTURE_2D,W,pt,Pt[0].width,Pt[0].height);for(let B=0,Q=Pt.length;B<Q;B++)dt=Pt[B],G?C&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,dt.width,dt.height,ut,Et,dt.data):n.texImage2D(e.TEXTURE_2D,B,pt,dt.width,dt.height,0,ut,Et,dt.data);g.generateMipmaps=!1}else G?(et&&n.texStorage2D(e.TEXTURE_2D,W,pt,$.width,$.height),C&&rt(g,$,ut,Et)):n.texImage2D(e.TEXTURE_2D,0,pt,$.width,$.height,0,ut,Et,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,W,pt,Pt[0].width,Pt[0].height,$.depth);for(let B=0,Q=Pt.length;B<Q;B++)if(dt=Pt[B],g.format!==li)if(ut!==null)if(G){if(C)if(g.layerUpdates.size>0){let it=bd(dt.width,dt.height,g.format,g.type);for(let q of g.layerUpdates){let ot=dt.data.subarray(q*it/dt.data.BYTES_PER_ELEMENT,(q+1)*it/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,q,dt.width,dt.height,1,ut,ot)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,$.depth,ut,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,B,pt,dt.width,dt.height,$.depth,0,dt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,$.depth,ut,Et,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,B,pt,dt.width,dt.height,$.depth,0,ut,Et,dt.data)}else{G&&et&&n.texStorage2D(e.TEXTURE_2D,W,pt,Pt[0].width,Pt[0].height);for(let B=0,Q=Pt.length;B<Q;B++)dt=Pt[B],g.format!==li?ut!==null?G?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,B,0,0,dt.width,dt.height,ut,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,B,pt,dt.width,dt.height,0,dt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?C&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,dt.width,dt.height,ut,Et,dt.data):n.texImage2D(e.TEXTURE_2D,B,pt,dt.width,dt.height,0,ut,Et,dt.data)}else if(g.isDataArrayTexture)if(G){if(et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,W,pt,$.width,$.height,$.depth),C)if(g.layerUpdates.size>0){let B=bd($.width,$.height,g.format,g.type);for(let Q of g.layerUpdates){let it=$.data.subarray(Q*B/$.data.BYTES_PER_ELEMENT,(Q+1)*B/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,$.width,$.height,1,ut,Et,it)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ut,Et,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,pt,$.width,$.height,$.depth,0,ut,Et,$.data);else if(g.isData3DTexture)G?(et&&n.texStorage3D(e.TEXTURE_3D,W,pt,$.width,$.height,$.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ut,Et,$.data)):n.texImage3D(e.TEXTURE_3D,0,pt,$.width,$.height,$.depth,0,ut,Et,$.data);else if(g.isFramebufferTexture){if(et)if(G)n.texStorage2D(e.TEXTURE_2D,W,pt,$.width,$.height);else{let B=$.width,Q=$.height;for(let it=0;it<W;it++)n.texImage2D(e.TEXTURE_2D,it,pt,B,Q,0,ut,Et,null),B>>=1,Q>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){let B=e.canvas;if(B.hasAttribute("layoutsubtree")||B.setAttribute("layoutsubtree","true"),$.parentNode!==B){B.appendChild($),d.add(g),B.onpaint=Q=>{let it=Q.changedElements;for(let q of d)it.includes(q.image)&&(q.needsUpdate=!0)},B.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,$);else{let it=e.RGBA,q=e.RGBA,ot=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,it,q,ot,$)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(G&&et){let B=Yt(Pt[0]);n.texStorage2D(e.TEXTURE_2D,W,pt,B.width,B.height)}for(let B=0,Q=Pt.length;B<Q;B++)dt=Pt[B],G?C&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,ut,Et,dt):n.texImage2D(e.TEXTURE_2D,B,pt,ut,Et,dt);g.generateMipmaps=!1}else if(G){if(et){let B=Yt($);n.texStorage2D(e.TEXTURE_2D,W,pt,B.width,B.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Et,$)}else n.texImage2D(e.TEXTURE_2D,0,pt,ut,Et,$);f(g)&&b(k),ht.__version=at.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Bt(T,g,N){if(g.image.length!==6)return;let k=tt(T,g),Y=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+N);let at=i.get(Y);if(Y.version!==at.__version||k===!0){n.activeTexture(e.TEXTURE0+N);let ht=Kt.getPrimaries(Kt.workingColorSpace),Z=g.colorSpace===rs?null:Kt.getPrimaries(g.colorSpace),$=g.colorSpace===rs||ht===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ut=g.isCompressedTexture||g.image[0].isCompressedTexture,Et=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let q=0;q<6;q++)!ut&&!Et?pt[q]=m(g.image[q],!0,s.maxCubemapSize):pt[q]=Et?g.image[q].image:g.image[q],pt[q]=Oe(g,pt[q]);let dt=pt[0],Pt=r.convert(g.format,g.colorSpace),G=r.convert(g.type),et=y(g.internalFormat,Pt,G,g.normalized,g.colorSpace),C=g.isVideoTexture!==!0,W=at.__version===void 0||k===!0,B=Y.dataReady,Q=S(g,dt);Jt(e.TEXTURE_CUBE_MAP,g);let it;if(ut){C&&W&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Q,et,dt.width,dt.height);for(let q=0;q<6;q++){it=pt[q].mipmaps;for(let ot=0;ot<it.length;ot++){let ct=it[ot];g.format!==li?Pt!==null?C?B&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,0,0,ct.width,ct.height,Pt,ct.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,et,ct.width,ct.height,0,ct.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,0,0,ct.width,ct.height,Pt,G,ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,et,ct.width,ct.height,0,Pt,G,ct.data)}}}else{if(it=g.mipmaps,C&&W){it.length>0&&Q++;let q=Yt(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Q,et,q.width,q.height)}for(let q=0;q<6;q++)if(Et){C?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pt[q].width,pt[q].height,Pt,G,pt[q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,et,pt[q].width,pt[q].height,0,Pt,G,pt[q].data);for(let ot=0;ot<it.length;ot++){let ie=it[ot].image[q].image;C?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,0,0,ie.width,ie.height,Pt,G,ie.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,et,ie.width,ie.height,0,Pt,G,ie.data)}}else{C?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Pt,G,pt[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,et,Pt,G,pt[q]);for(let ot=0;ot<it.length;ot++){let ct=it[ot];C?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,0,0,Pt,G,ct.image[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,et,Pt,G,ct.image[q])}}}f(g)&&b(e.TEXTURE_CUBE_MAP),at.__version=Y.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ut(T,g,N,k,Y,at){let ht=r.convert(N.format,N.colorSpace),Z=r.convert(N.type),$=y(N.internalFormat,ht,Z,N.normalized,N.colorSpace),ut=i.get(g),Et=i.get(N);if(Et.__renderTarget=g,!ut.__hasExternalTextures){let pt=Math.max(1,g.width>>at),dt=Math.max(1,g.height>>at);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,at,$,pt,dt,g.depth,0,ht,Z,null):n.texImage2D(Y,at,$,pt,dt,0,ht,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),ye(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,Y,Et.__webglTexture,0,ve(g)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,Y,Et.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(T,g,N){if(e.bindRenderbuffer(e.RENDERBUFFER,T),g.depthBuffer){let k=g.depthTexture,Y=k&&k.isDepthTexture?k.type:null,at=w(g.stencilBuffer,Y),ht=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ye(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(g),at,g.width,g.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(g),at,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,at,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,T)}else{let k=g.textures;for(let Y=0;Y<k.length;Y++){let at=k[Y],ht=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),$=y(at.internalFormat,ht,Z,at.normalized,at.colorSpace);ye(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(g),$,g.width,g.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(g),$,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,$,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Wt(T,g,N){let k=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Jt(e.TEXTURE_CUBE_MAP,g.depthTexture);let ut=r.convert(g.depthTexture.format),Et=r.convert(g.depthTexture.type),pt;g.depthTexture.format===Ui?pt=e.DEPTH_COMPONENT24:g.depthTexture.format===Ns&&(pt=e.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pt,g.width,g.height,0,ut,Et,null)}}else nt(g.depthTexture,0);let at=Y.__webglTexture,ht=ve(g),Z=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,$=g.depthTexture.format===Ns?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ui)ye(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,Z,at,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,$,Z,at,0);else if(g.depthTexture.format===Ns)ye(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,Z,at,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,$,Z,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(T){let g=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=k}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)Wt(g.__webglFramebuffer[k],T,k);else{let k=T.texture.mipmaps;k&&k.length>0?Wt(g.__webglFramebuffer[0],T,0):Wt(g.__webglFramebuffer,T,0)}else if(N){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=e.createRenderbuffer(),be(g.__webglDepthbuffer[k],T,!1);else{let Y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),be(g.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function $t(T,g,N){let k=i.get(T);g!==void 0&&Ut(k.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&ne(T)}function qt(T){let g=T.texture,N=i.get(T),k=i.get(g);T.addEventListener("dispose",x);let Y=T.textures,at=T.isWebGLCubeRenderTarget===!0,ht=Y.length>1;if(ht||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=g.version,o.memory.textures++),at){N.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[Z]=[];for(let $=0;$<g.mipmaps.length;$++)N.__webglFramebuffer[Z][$]=e.createFramebuffer()}else N.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)N.__webglFramebuffer[Z]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(ht)for(let Z=0,$=Y.length;Z<$;Z++){let ut=i.get(Y[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let $=Y[Z];N.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);let ut=r.convert($.format,$.colorSpace),Et=r.convert($.type),pt=y($.internalFormat,ut,Et,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),dt=ve(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,dt,pt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),be(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Jt(e.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ut(N.__webglFramebuffer[Z][$],T,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else Ut(N.__webglFramebuffer[Z],T,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(g)&&b(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ht){for(let Z=0,$=Y.length;Z<$;Z++){let ut=Y[Z],Et=i.get(ut),pt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,Et.__webglTexture),Jt(pt,ut),Ut(N.__webglFramebuffer,T,ut,e.COLOR_ATTACHMENT0+Z,pt,0),f(ut)&&b(pt)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,k.__webglTexture),Jt(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ut(N.__webglFramebuffer[$],T,g,e.COLOR_ATTACHMENT0,Z,$);else Ut(N.__webglFramebuffer,T,g,e.COLOR_ATTACHMENT0,Z,0);f(g)&&b(Z),n.unbindTexture()}T.depthBuffer&&ne(T)}function Se(T){let g=T.textures;for(let N=0,k=g.length;N<k;N++){let Y=g[N];if(f(Y)){let at=A(T),ht=i.get(Y).__webglTexture;n.bindTexture(at,ht),b(at),n.unbindTexture()}}}let xe=[],Ge=[];function He(T){if(T.samples>0){if(ye(T)===!1){let g=T.textures,N=T.width,k=T.height,Y=e.COLOR_BUFFER_BIT,at=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(T),Z=g.length>1;if(Z)for(let ut=0;ut<g.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let $=T.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ut=0;ut<g.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Et=i.get(g[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,N,k,0,0,N,k,Y,e.NEAREST),l===!0&&(xe.length=0,Ge.length=0,xe.push(e.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xe.push(at),Ge.push(at),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ge)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<g.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Et=i.get(g[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function ve(T){return Math.min(s.maxSamples,T.samples)}function ye(T){let g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){let g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Oe(T,g){let N=T.colorSpace,k=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==ia&&N!==rs&&(Kt.getTransfer(N)===ae?(k!==li||Y!==Wn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",N)),g}function Yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.getTextureUnits=J,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=st,this.setTexture3D=ft,this.setTextureCube=gt,this.rebindTextures=$t,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _b(e,t){function n(i,s=rs){let r,o=Kt.getTransfer(s);if(i===Wn)return e.UNSIGNED_BYTE;if(i===Ic)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ud)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===dd)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===cd)return e.BYTE;if(i===hd)return e.SHORT;if(i===ro)return e.UNSIGNED_SHORT;if(i===Pc)return e.INT;if(i===Si)return e.UNSIGNED_INT;if(i===Ei)return e.FLOAT;if(i===vn)return e.HALF_FLOAT;if(i===fd)return e.ALPHA;if(i===pd)return e.RGB;if(i===li)return e.RGBA;if(i===Ui)return e.DEPTH_COMPONENT;if(i===Ns)return e.DEPTH_STENCIL;if(i===md)return e.RED;if(i===Dc)return e.RED_INTEGER;if(i===Fs)return e.RG;if(i===Uc)return e.RG_INTEGER;if(i===Nc)return e.RGBA_INTEGER;if(i===Da||i===Ua||i===Na||i===Fa)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fc||i===Oc||i===Bc||i===kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Vc||i===Gc||i===Hc||i===Wc||i===Oa||i===Xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Vc)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hc)return r.COMPRESSED_R11_EAC;if(i===Wc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return r.COMPRESSED_RG11_EAC;if(i===Xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qc||i===Yc||i===Zc||i===Kc||i===jc||i===Jc||i===$c||i===Qc||i===th||i===eh||i===nh||i===ih||i===sh||i===rh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$c)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ih)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===ah||i===lh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===oh)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ch||i===hh||i===Ba||i===uh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ch)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
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

}`,Vd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new xa(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ze({vertexShader:xb,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Je(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gd=class extends Mi{constructor(t,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new Vd,f={},b=n.getContextAttributes(),A=null,y=null,w=[],S=[],R=new vt,x=null,E=new xn;E.viewport=new Re;let I=new xn;I.viewport=new Re;let L=[E,I],F=new Tc,j=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=w[tt];return lt===void 0&&(lt=new Zr,w[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=w[tt];return lt===void 0&&(lt=new Zr,w[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=w[tt];return lt===void 0&&(lt=new Zr,w[tt]=lt),lt.getHandSpace()};function O(tt){let lt=S.indexOf(tt.inputSource);if(lt===-1)return;let rt=w[lt];rt!==void 0&&(rt.update(tt.inputSource,tt.frame,c||o),rt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",X);for(let tt=0;tt<w.length;tt++){let lt=S[tt];lt!==null&&(S[tt]=null,w[tt].disconnect(lt))}j=null,J=null,m.reset();for(let tt in f)delete f[tt];t.setRenderTarget(A),p=null,h=null,d=null,s=null,y=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Ot=null,Bt=null;b.depth&&(Bt=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=b.stencil?Ns:Ui,Ot=b.stencil?oo:Si);let Ut={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new je(h.textureWidth,h.textureHeight,{format:li,type:Wn,depthTexture:new is(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let rt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new je(p.framebufferWidth,p.framebufferHeight,{format:li,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(tt){for(let lt=0;lt<tt.removed.length;lt++){let rt=tt.removed[lt],Ot=S.indexOf(rt);Ot>=0&&(S[Ot]=null,w[Ot].disconnect(rt))}for(let lt=0;lt<tt.added.length;lt++){let rt=tt.added[lt],Ot=S.indexOf(rt);if(Ot===-1){for(let Ut=0;Ut<w.length;Ut++)if(Ut>=S.length){S.push(rt),Ot=Ut;break}else if(S[Ut]===null){S[Ut]=rt,Ot=Ut;break}if(Ot===-1)break}let Bt=w[Ot];Bt&&Bt.connect(rt)}}let nt=new P,st=new P;function ft(tt,lt,rt){nt.setFromMatrixPosition(lt.matrixWorld),st.setFromMatrixPosition(rt.matrixWorld);let Ot=nt.distanceTo(st),Bt=lt.projectionMatrix.elements,Ut=rt.projectionMatrix.elements,be=Bt[14]/(Bt[10]-1),Wt=Bt[14]/(Bt[10]+1),ne=(Bt[9]+1)/Bt[5],$t=(Bt[9]-1)/Bt[5],qt=(Bt[8]-1)/Bt[0],Se=(Ut[8]+1)/Ut[0],xe=be*qt,Ge=be*Se,He=Ot/(-qt+Se),ve=He*-qt;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ve),tt.translateZ(He),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Bt[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let ye=be+He,D=Wt+He,Oe=xe-ve,Yt=Ge+(Ot-ve),T=ne*Wt/D*ye,g=$t*Wt/D*ye;tt.projectionMatrix.makePerspective(Oe,Yt,T,g,ye,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function gt(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let lt=tt.near,rt=tt.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),F.near=I.near=E.near=lt,F.far=I.far=E.far=rt,(j!==F.near||J!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,J=F.far),F.layers.mask=tt.layers.mask|6,E.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Ot=tt.parent,Bt=F.cameras;gt(F,Ot);for(let Ut=0;Ut<Bt.length;Ut++)gt(Bt[Ut],Ot);Bt.length===2?ft(F,E,I):F.projectionMatrix.copy(E.projectionMatrix),Mt(tt,F,Ot)};function Mt(tt,lt,rt){rt===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(rt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=qr*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(tt){return f[tt]};let jt=null;function _e(tt,lt){if(u=lt.getViewerPose(c||o),_=lt,u!==null){let rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ot=!1;rt.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let Wt=0;Wt<rt.length;Wt++){let ne=rt[Wt],$t=null;if(p!==null)$t=p.getViewport(ne);else{let Se=d.getViewSubImage(h,ne);$t=Se.viewport,Wt===0&&(t.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(y))}let qt=L[Wt];qt===void 0&&(qt=new xn,qt.layers.enable(Wt),qt.viewport=new Re,L[Wt]=qt),qt.matrix.fromArray(ne.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(ne.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set($t.x,$t.y,$t.width,$t.height),Wt===0&&(F.matrix.copy(qt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push(qt)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let Wt=d.getDepthInformation(rt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(Bt&&Bt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Wt=0;Wt<rt.length;Wt++){let ne=rt[Wt].camera;if(ne){let $t=f[ne];$t||($t=new xa,f[ne]=$t);let qt=d.getCameraImage(ne);$t.sourceTexture=qt}}}}for(let rt=0;rt<w.length;rt++){let Ot=S[rt],Bt=w[rt];Ot!==null&&Bt!==void 0&&Bt.update(Ot,lt,c||o)}jt&&jt(tt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),_=null}let Jt=new s0;Jt.setAnimationLoop(_e),this.setAnimationLoop=function(tt){jt=tt},this.dispose=function(){}}},yb=new Te,h0=new kt;h0.set(-1,0,0,0,1,0,0,0,1);function Mb(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,vd(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,A,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(h0),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=A*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bb(e,t,n,i){let s={},r={},o=[],a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let S=w.program;i.uniformBlockBinding(y,S)}function c(y,w){let S=s[y.id];S===void 0&&(m(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",b));let R=w.program;i.updateUBOMapping(y,R);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let w=d();y.__bindingPointIndex=w;let S=e.createBuffer(),R=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,R,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,w,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=s[y.id],S=y.uniforms,R=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let x=0,E=S.length;x<E;x++){let I=S[x];if(Array.isArray(I))for(let L=0,F=I.length;L<F;L++)p(I[L],x,L,R);else p(I,x,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,w,S,R){if(M(y,w,S,R)===!0){let x=y.__offset,E=y.value;if(Array.isArray(E)){let I=0;for(let L=0;L<E.length;L++){let F=E[L],j=f(F);_(F,y.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function _(y,w,S){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,S)}function M(y,w,S,R){let x=y.value,E=w+"_"+S;if(R[E]===void 0)return typeof x=="number"||typeof x=="boolean"?R[E]=x:ArrayBuffer.isView(x)?R[E]=x.slice():R[E]=x.clone(),!0;{let I=R[E];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return R[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(y){let w=y.uniforms,S=0,R=16;for(let E=0,I=w.length;E<I;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let F=0,j=L.length;F<j;F++){let J=L[F],O=Array.isArray(J.value)?J.value:[J.value];for(let K=0,X=O.length;K<X;K++){let nt=O[K],st=f(nt),ft=S%R,gt=ft%st.boundary,Mt=ft+gt;S+=gt,Mt!==0&&R-Mt<st.storage&&(S+=R-Mt),J.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=st.storage}}}let x=S%R;return x>0&&(S+=R-x),y.__size=S,y.__cache={},this}function f(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",y),w}function b(y){let w=y.target;w.removeEventListener("dispose",b);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),e.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let y in s)e.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function Eb(){return Fi===null&&(Fi=new ac(Sb,16,16,Fs,vn),Fi.name="DFG_LUT",Fi.minFilter=Ke,Fi.magFilter=Ke,Fi.wrapS=Di,Fi.wrapT=Di,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var xh=class{constructor(t={}){let{canvas:n=Rm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Wn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=p,m=new Set([Nc,Uc,Dc]),f=new Set([Wn,Si,ro,oo,Ic,Lc]),b=new Uint32Array(4),A=new Int32Array(4),y=new P,w=null,S=null,R=[],x=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,F=null,j=null,J=null,O=null;this._outputColorSpace=zn;let K=0,X=0,nt=null,st=-1,ft=null,gt=new Re,Mt=new Re,jt=null,_e=new zt(0),Jt=0,tt=n.width,lt=n.height,rt=1,Ot=null,Bt=null,Ut=new Re(0,0,tt,lt),be=new Re(0,0,tt,lt),Wt=!1,ne=new ma,$t=!1,qt=!1,Se=new Te,xe=new P,Ge=new Re,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return nt===null?rt:1}let D=i;function Oe(v,U){return n.getContext(v,U)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",Gt,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),D===null){let U="webgl2";if(D=Oe(U,v),D===null)throw Oe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ft("WebGLRenderer: "+v.message),v}let Yt,T,g,N,k,Y,at,ht,Z,$,ut,Et,pt,dt,Pt,G,et,C,W,B,Q,it,q;function ot(){Yt=new I2(D),Yt.init(),Q=new _b(D,Yt),T=new S2(D,Yt,t,Q),g=new mb(D,Yt),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),j=D.createFramebuffer(),J=D.createFramebuffer(),O=D.createFramebuffer(),N=new U2(D),k=new eb,Y=new gb(D,Yt,g,k,T,Q,N),at=new P2(I),ht=new Bx(D),it=new M2(D,ht),Z=new L2(D,ht,N,it),$=new F2(D,Z,ht,it,N),C=new N2(D,T,Y),Pt=new E2(k),ut=new tb(I,at,Yt,T,it,Pt),Et=new Mb(I,k),pt=new ib,dt=new cb(Yt),et=new y2(I,at,g,$,_,l),G=new pb(I,$,T),q=new bb(D,N,T,g),W=new b2(D,Yt,N),B=new D2(D,Yt,N),N.programs=ut.programs,I.capabilities=T,I.extensions=Yt,I.properties=k,I.renderLists=pt,I.shadowMap=G,I.state=g,I.info=N}ot(),M!==Wn&&(E=new B2(M,n.width,n.height,a,s,r));let ct=new Gd(I,D);this.xr=ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=Yt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Yt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(v){v!==void 0&&(rt=v,this.setSize(tt,lt,!1))},this.getSize=function(v){return v.set(tt,lt)},this.setSize=function(v,U,H=!0){if(ct.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=v,lt=U,n.width=Math.floor(v*rt),n.height=Math.floor(U*rt),H===!0&&(n.style.width=v+"px",n.style.height=U+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(tt*rt,lt*rt).floor()},this.setDrawingBufferSize=function(v,U,H){tt=v,lt=U,rt=H,n.width=Math.floor(v*H),n.height=Math.floor(U*H),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(M===Wn){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(gt)},this.getViewport=function(v){return v.copy(Ut)},this.setViewport=function(v,U,H,z){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,U,H,z),g.viewport(gt.copy(Ut).multiplyScalar(rt).round())},this.getScissor=function(v){return v.copy(be)},this.setScissor=function(v,U,H,z){v.isVector4?be.set(v.x,v.y,v.z,v.w):be.set(v,U,H,z),g.scissor(Mt.copy(be).multiplyScalar(rt).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(v){g.setScissorTest(Wt=v)},this.setOpaqueSort=function(v){Ot=v},this.setTransparentSort=function(v){Bt=v},this.getClearColor=function(v){return v.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,H=!0){let z=0;if(v){let V=!1;if(nt!==null){let xt=nt.texture.format;V=m.has(xt)}if(V){let xt=nt.texture.type,bt=f.has(xt),_t=et.getClearColor(),Tt=et.getClearAlpha(),Ct=_t.r,Vt=_t.g,Xt=_t.b;bt?(b[0]=Ct,b[1]=Vt,b[2]=Xt,b[3]=Tt,D.clearBufferuiv(D.COLOR,0,b)):(A[0]=Ct,A[1]=Vt,A[2]=Xt,A[3]=Tt,D.clearBufferiv(D.COLOR,0,A))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",Gt,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),et.dispose(),pt.dispose(),dt.dispose(),k.dispose(),at.dispose(),$.dispose(),it.dispose(),q.dispose(),ut.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",qo),ct.removeEventListener("sessionend",Sr),mi.stop()};function ie(v){v.preventDefault(),aa("WebGLRenderer: Context Lost."),L=!0}function Gt(){aa("WebGLRenderer: Context Restored."),L=!1;let v=N.autoReset,U=G.enabled,H=G.autoUpdate,z=G.needsUpdate,V=G.type;ot(),N.autoReset=v,G.enabled=U,G.autoUpdate=H,G.needsUpdate=z,G.type=V}function Ee(v){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function hn(v){let U=v.target;U.removeEventListener("dispose",hn),xu(U)}function xu(v){ds(v),k.remove(v)}function ds(v){let U=k.get(v).programs;U!==void 0&&(U.forEach(function(H){ut.releaseProgram(H)}),v.isShaderMaterial&&ut.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,H,z,V,xt){U===null&&(U=He);let bt=V.isMesh&&V.matrixWorld.determinantAffine()<0,_t=k1(v,U,H,z,V);g.setMaterial(z,bt);let Tt=H.index,Ct=1;if(z.wireframe===!0){if(Tt=Z.getWireframeAttribute(H),Tt===void 0)return;Ct=2}let Vt=H.drawRange,Xt=H.attributes.position,It=Vt.start*Ct,he=(Vt.start+Vt.count)*Ct;xt!==null&&(It=Math.max(It,xt.start*Ct),he=Math.min(he,(xt.start+xt.count)*Ct)),Tt!==null?(It=Math.max(It,0),he=Math.min(he,Tt.count)):Xt!=null&&(It=Math.max(It,0),he=Math.min(he,Xt.count));let Be=he-It;if(Be<0||Be===1/0)return;it.setup(V,z,_t,H,Tt);let Ue,fe=W;if(Tt!==null&&(Ue=ht.get(Tt),fe=B,fe.setIndex(Ue)),V.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*ye()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(V.isLine){let mn=z.linewidth;mn===void 0&&(mn=1),g.setLineWidth(mn*ye()),V.isLineSegments?fe.setMode(D.LINES):V.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else V.isPoints?fe.setMode(D.POINTS):V.isSprite&&fe.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let mn=V._multiDrawStarts,yt=V._multiDrawCounts,On=V._multiDrawCount,te=Tt?ht.get(Tt).bytesPerElement:1,ni=k.get(z).currentProgram.getUniforms();for(let Pi=0;Pi<On;Pi++)ni.setValue(D,"_gl_DrawID",Pi),fe.render(mn[Pi]/te,yt[Pi])}else if(V.isInstancedMesh)fe.renderInstances(It,Be,V.count);else if(H.isInstancedBufferGeometry){let mn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,yt=Math.min(H.instanceCount,mn);fe.renderInstances(It,Be,yt)}else fe.render(It,Be)};function dl(v,U,H){v.transparent===!0&&v.side===oi&&v.forceSinglePass===!1?(v.side=Pn,v.needsUpdate=!0,We(v,U,H),v.side=ns,v.needsUpdate=!0,We(v,U,H),v.side=oi):We(v,U,H)}this.compile=function(v,U,H=null){H===null&&(H=v),S=dt.get(H),S.init(U),x.push(S),H.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),v!==H&&v.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights();let z=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let xt=V.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){let _t=xt[bt];dl(_t,H,V),z.add(_t)}else dl(xt,H,V),z.add(xt)}),S=x.pop(),z},this.compileAsync=function(v,U,H=null){let z=this.compile(v,U,H);return new Promise(V=>{function xt(){if(z.forEach(function(bt){k.get(bt).currentProgram.isReady()&&z.delete(bt)}),z.size===0){V(v);return}setTimeout(xt,10)}Yt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let qs=null;function vu(v){qs&&qs(v)}function qo(){mi.stop()}function Sr(){mi.start()}let mi=new s0;mi.setAnimationLoop(vu),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(v){qs=v,ct.setAnimationLoop(v),v===null?mi.stop():mi.start()},ct.addEventListener("sessionstart",qo),ct.addEventListener("sessionend",Sr),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(v,U);let H=ct.enabled===!0&&ct.isPresenting===!0,z=E!==null&&(nt===null||H)&&E.begin(I,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(U),U=ct.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,U,nt),S=dt.get(v,x.length),S.init(U),S.state.textureUnits=Y.getTextureUnits(),x.push(S),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(Se,yi,U.reversedDepth),qt=this.localClippingEnabled,$t=Pt.init(this.clippingPlanes,qt),w=pt.get(v,R.length),w.init(),R.push(w),ct.enabled===!0&&ct.isPresenting===!0){let bt=I.xr.getDepthSensingMesh();bt!==null&&Ys(bt,U,-1/0,I.sortObjects)}Ys(v,U,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort(Ot,Bt,U.reversedDepth),ve=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ve&&et.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Pt.beginShadows();let V=S.state.shadowsArray;if(G.render(V,v,U),$t===!0&&Pt.endShadows(),(z&&E.hasRenderPass())===!1){let bt=w.opaque,_t=w.transmissive;if(S.setupLights(),U.isArrayCamera){let Tt=U.cameras;if(_t.length>0)for(let Ct=0,Vt=Tt.length;Ct<Vt;Ct++){let Xt=Tt[Ct];ei(bt,_t,v,Xt)}ve&&et.render(v);for(let Ct=0,Vt=Tt.length;Ct<Vt;Ct++){let Xt=Tt[Ct];Er(w,v,Xt,Xt.viewport)}}else _t.length>0&&ei(bt,_t,v,U),ve&&et.render(v),Er(w,v,U)}nt!==null&&X===0&&(Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt)),z&&E.end(I),v.isScene===!0&&v.onAfterRender(I,v,U),it.resetDefaultState(),st=-1,ft=null,x.pop(),x.length>0?(S=x[x.length-1],Y.setTextureUnits(S.state.textureUnits),$t===!0&&Pt.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function Ys(v,U,H,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ne.intersectsSprite(v)){z&&Ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Se);let bt=$.update(v),_t=v.material;_t.visible&&w.push(v,bt,_t,H,Ge.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ne.intersectsObject(v))){let bt=$.update(v),_t=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ge.copy(v.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ge.copy(bt.boundingSphere.center)),Ge.applyMatrix4(v.matrixWorld).applyMatrix4(Se)),Array.isArray(_t)){let Tt=bt.groups;for(let Ct=0,Vt=Tt.length;Ct<Vt;Ct++){let Xt=Tt[Ct],It=_t[Xt.materialIndex];It&&It.visible&&w.push(v,bt,It,H,Ge.z,Xt)}}else _t.visible&&w.push(v,bt,_t,H,Ge.z,null)}}let xt=v.children;for(let bt=0,_t=xt.length;bt<_t;bt++)Ys(xt[bt],U,H,z)}function Er(v,U,H,z){let{opaque:V,transmissive:xt,transparent:bt}=v;S.setupLightsView(H),$t===!0&&Pt.setGlobalState(I.clippingPlanes,H),z&&g.viewport(gt.copy(z)),V.length>0&&pn(V,U,H),xt.length>0&&pn(xt,U,H),bt.length>0&&pn(bt,U,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ei(v,U,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let It=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new je(1,1,{generateMipmaps:!0,type:It?vn:Wn,minFilter:Us,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let xt=S.state.transmissionRenderTarget[z.id],bt=z.viewport||gt;xt.setSize(bt.z*I.transmissionResolutionScale,bt.w*I.transmissionResolutionScale);let _t=I.getRenderTarget(),Tt=I.getActiveCubeFace(),Ct=I.getActiveMipmapLevel();I.setRenderTarget(xt),I.getClearColor(_e),Jt=I.getClearAlpha(),Jt<1&&I.setClearColor(16777215,.5),I.clear(),ve&&et.render(H);let Vt=I.toneMapping;I.toneMapping=bi;let Xt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),$t===!0&&Pt.setGlobalState(I.clippingPlanes,z),pn(v,H,z),Y.updateMultisampleRenderTarget(xt),Y.updateRenderTargetMipmap(xt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let he=0,Be=U.length;he<Be;he++){let Ue=U[he],{object:fe,geometry:mn,material:yt,group:On}=Ue;if(yt.side===oi&&fe.layers.test(z.layers)){let te=yt.side;yt.side=Pn,yt.needsUpdate=!0,Zs(fe,H,z,mn,yt,On),yt.side=te,yt.needsUpdate=!0,It=!0}}It===!0&&(Y.updateMultisampleRenderTarget(xt),Y.updateRenderTargetMipmap(xt))}I.setRenderTarget(_t,Tt,Ct),I.setClearColor(_e,Jt),Xt!==void 0&&(z.viewport=Xt),I.toneMapping=Vt}function pn(v,U,H){let z=U.isScene===!0?U.overrideMaterial:null;for(let V=0,xt=v.length;V<xt;V++){let bt=v[V],{object:_t,geometry:Tt,group:Ct}=bt,Vt=bt.material;Vt.allowOverride===!0&&z!==null&&(Vt=z),_t.layers.test(H.layers)&&Zs(_t,U,H,Tt,Vt,Ct)}}function Zs(v,U,H,z,V,xt){v.onBeforeRender(I,U,H,z,V,xt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(I,U,H,z,v,xt),V.transparent===!0&&V.side===oi&&V.forceSinglePass===!1?(V.side=Pn,V.needsUpdate=!0,I.renderBufferDirect(H,U,z,V,v,xt),V.side=ns,V.needsUpdate=!0,I.renderBufferDirect(H,U,z,V,v,xt),V.side=oi):I.renderBufferDirect(H,U,z,V,v,xt),v.onAfterRender(I,U,H,z,V,xt)}function We(v,U,H){U.isScene!==!0&&(U=He);let z=k.get(v),V=S.state.lights,xt=S.state.shadowsArray,bt=V.state.version,_t=ut.getParameters(v,V.state,xt,U,H,S.state.lightProbeGridArray),Tt=ut.getProgramCacheKey(_t),Ct=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let Vt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=at.get(v.envMap||z.environment,Vt),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",hn),Ct=new Map,z.programs=Ct);let Xt=Ct.get(Tt);if(Xt!==void 0){if(z.currentProgram===Xt&&z.lightsStateVersion===bt)return bp(v,_t),Xt}else _t.uniforms=ut.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,H,_t),v.onBeforeCompile(_t,I),Xt=ut.acquireProgram(_t,Tt),Ct.set(Tt,Xt),z.uniforms=_t.uniforms;let It=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(It.clippingPlanes=Pt.uniform),bp(v,_t),z.needsLights=V1(v),z.lightsStateVersion=bt,z.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=Xt,z.uniformsList=null,Xt}function Mp(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=co.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function bp(v,U){let H=k.get(v);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function B1(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let H=0,z=v.length;H<z;H++){let V=v[H];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function k1(v,U,H,z,V){U.isScene!==!0&&(U=He),Y.resetTextureUnits();let xt=U.fog,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,_t=nt===null?I.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Kt.workingColorSpace,Tt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ct=at.get(z.envMap||bt,Tt),Vt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xt=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!H.morphAttributes.position,he=!!H.morphAttributes.normal,Be=!!H.morphAttributes.color,Ue=bi;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ue=I.toneMapping);let fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mn=fe!==void 0?fe.length:0,yt=k.get(z),On=S.state.lights;if($t===!0&&(qt===!0||v!==ft)){let ge=v===ft&&z.id===st;Pt.setState(z,v,ge)}let te=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==On.state.version||yt.outputColorSpace!==_t||V.isBatchedMesh&&yt.batching===!1||!V.isBatchedMesh&&yt.batching===!0||V.isBatchedMesh&&yt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&yt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&yt.instancing===!1||!V.isInstancedMesh&&yt.instancing===!0||V.isSkinnedMesh&&yt.skinning===!1||!V.isSkinnedMesh&&yt.skinning===!0||V.isInstancedMesh&&yt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&yt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&yt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&yt.instancingMorph===!1&&V.morphTexture!==null||yt.envMap!==Ct||z.fog===!0&&yt.fog!==xt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Pt.numPlanes||yt.numIntersection!==Pt.numIntersection)||yt.vertexAlphas!==Vt||yt.vertexTangents!==Xt||yt.morphTargets!==It||yt.morphNormals!==he||yt.morphColors!==Be||yt.toneMapping!==Ue||yt.morphTargetsCount!==mn||!!yt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,yt.__version=z.version);let ni=yt.currentProgram;te===!0&&(ni=We(z,U,V),F&&z.isNodeMaterial&&F.onUpdateProgram(z,ni,yt));let Pi=!1,fs=!1,Tr=!1,pe=ni.getUniforms(),ke=yt.uniforms;if(g.useProgram(ni.program)&&(Pi=!0,fs=!0,Tr=!0),z.id!==st&&(st=z.id,fs=!0),yt.needsLights){let ge=B1(S.state.lightProbeGridArray,V);yt.lightProbeGrid!==ge&&(yt.lightProbeGrid=ge,fs=!0)}if(Pi||ft!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pe.setValue(D,"projectionMatrix",v.projectionMatrix),pe.setValue(D,"viewMatrix",v.matrixWorldInverse);let ms=pe.map.cameraPosition;ms!==void 0&&ms.setValue(D,xe.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),ft!==v&&(ft=v,fs=!0,Tr=!0)}if(yt.needsLights&&(On.state.directionalShadowMap.length>0&&pe.setValue(D,"directionalShadowMap",On.state.directionalShadowMap,Y),On.state.spotShadowMap.length>0&&pe.setValue(D,"spotShadowMap",On.state.spotShadowMap,Y),On.state.pointShadowMap.length>0&&pe.setValue(D,"pointShadowMap",On.state.pointShadowMap,Y)),V.isSkinnedMesh){pe.setOptional(D,V,"bindMatrix"),pe.setOptional(D,V,"bindMatrixInverse");let ge=V.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),pe.setValue(D,"boneTexture",ge.boneTexture,Y))}V.isBatchedMesh&&(pe.setOptional(D,V,"batchingTexture"),pe.setValue(D,"batchingTexture",V._matricesTexture,Y),pe.setOptional(D,V,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",V._indirectTexture,Y),pe.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",V._colorsTexture,Y));let ps=H.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&C.update(V,H,ni),(fs||yt.receiveShadow!==V.receiveShadow)&&(yt.receiveShadow=V.receiveShadow,pe.setValue(D,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(ke.envMapIntensity.value=U.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=Eb()),fs){if(pe.setValue(D,"toneMappingExposure",I.toneMappingExposure),yt.needsLights&&z1(ke,Tr),xt&&z.fog===!0&&Et.refreshFogUniforms(ke,xt),Et.refreshMaterialUniforms(ke,z,rt,lt,S.state.transmissionRenderTarget[v.id]),yt.needsLights&&yt.lightProbeGrid){let ge=yt.lightProbeGrid;ke.probesSH.value=ge.texture,ke.probesMin.value.copy(ge.boundingBox.min),ke.probesMax.value.copy(ge.boundingBox.max),ke.probesResolution.value.copy(ge.resolution)}co.upload(D,Mp(yt),ke,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(co.upload(D,Mp(yt),ke,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pe.setValue(D,"center",V.center),pe.setValue(D,"modelViewMatrix",V.modelViewMatrix),pe.setValue(D,"normalMatrix",V.normalMatrix),pe.setValue(D,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let ge=z.uniformsGroups;for(let ms=0,wr=ge.length;ms<wr;ms++){let Sp=ge[ms];q.update(Sp,ni),q.bind(Sp,ni)}}return ni}function z1(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function V1(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,U,H){let z=k.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(v.texture).__webglTexture=U,k.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let H=k.get(v);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,H=0){nt=v,K=U,X=H;let z=null,V=!1,xt=!1;if(v){let _t=k.get(v);if(_t.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,_t.__webglFramebuffer),gt.copy(v.viewport),Mt.copy(v.scissor),jt=v.scissorTest,g.viewport(gt),g.scissor(Mt),g.setScissorTest(jt),st=-1;return}else if(_t.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(_t.__hasExternalTextures)Y.rebindTextures(v,k.get(v.texture).__webglTexture,k.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Vt=v.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&k.has(Vt)&&(v.width!==Vt.image.width||v.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}let Tt=v.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(xt=!0);let Ct=k.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?z=Ct[U][H]:z=Ct[U],V=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?z=k.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?z=Ct[H]:z=Ct,gt.copy(v.viewport),Mt.copy(v.scissor),jt=v.scissorTest}else gt.copy(Ut).multiplyScalar(rt).floor(),Mt.copy(be).multiplyScalar(rt).floor(),jt=Wt;if(H!==0&&(z=j),g.bindFramebuffer(D.FRAMEBUFFER,z)&&g.drawBuffers(v,z),g.viewport(gt),g.scissor(Mt),g.setScissorTest(jt),V){let _t=k.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,H)}else if(xt){let _t=U;for(let Tt=0;Tt<v.textures.length;Tt++){let Ct=k.get(v.textures[Tt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,H,_t)}}else if(v!==null&&H!==0){let _t=k.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,H)}st=-1},this.readRenderTargetPixels=function(v,U,H,z,V,xt,bt,_t=0){if(!(v&&v.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){g.bindFramebuffer(D.FRAMEBUFFER,Tt);try{let Ct=v.textures[_t],Vt=Ct.format,Xt=Ct.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!T.textureFormatReadable(Vt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Xt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-z&&H>=0&&H<=v.height-V&&D.readPixels(U,H,z,V,Q.convert(Vt),Q.convert(Xt),xt)}finally{let Ct=nt!==null?k.get(nt).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,U,H,z,V,xt,bt,_t=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt)if(U>=0&&U<=v.width-z&&H>=0&&H<=v.height-V){g.bindFramebuffer(D.FRAMEBUFFER,Tt);let Ct=v.textures[_t],Vt=Ct.format,Xt=Ct.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!T.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,xt.byteLength,D.STREAM_READ),D.readPixels(U,H,z,V,Q.convert(Vt),Q.convert(Xt),0);let he=nt!==null?k.get(nt).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,he);let Be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Im(D,Be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xt),D.deleteBuffer(It),D.deleteSync(Be),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,H=0){let z=Math.pow(2,-H),V=Math.floor(v.image.width*z),xt=Math.floor(v.image.height*z),bt=U!==null?U.x:0,_t=U!==null?U.y:0;Y.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,bt,_t,V,xt),g.unbindTexture()},this.copyTextureToTexture=function(v,U,H=null,z=null,V=0,xt=0){let bt,_t,Tt,Ct,Vt,Xt,It,he,Be,Ue=v.isCompressedTexture?v.mipmaps[xt]:v.image;if(H!==null)bt=H.max.x-H.min.x,_t=H.max.y-H.min.y,Tt=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,Vt=H.min.y,Xt=H.isBox3?H.min.z:0;else{let ke=Math.pow(2,-V);bt=Math.floor(Ue.width*ke),_t=Math.floor(Ue.height*ke),v.isDataArrayTexture?Tt=Ue.depth:v.isData3DTexture?Tt=Math.floor(Ue.depth*ke):Tt=1,Ct=0,Vt=0,Xt=0}z!==null?(It=z.x,he=z.y,Be=z.z):(It=0,he=0,Be=0);let fe=Q.convert(U.format),mn=Q.convert(U.type),yt;U.isData3DTexture?(Y.setTexture3D(U,0),yt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),yt=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),yt=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let On=g.getParameter(D.UNPACK_ROW_LENGTH),te=g.getParameter(D.UNPACK_IMAGE_HEIGHT),ni=g.getParameter(D.UNPACK_SKIP_PIXELS),Pi=g.getParameter(D.UNPACK_SKIP_ROWS),fs=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,Ue.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ue.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),g.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);let Tr=v.isDataArrayTexture||v.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let ke=k.get(v),ps=k.get(U),ge=k.get(ke.__renderTarget),ms=k.get(ps.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,ge.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let wr=0;wr<Tt;wr++)Tr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(v).__webglTexture,V,Xt+wr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(U).__webglTexture,xt,Be+wr)),D.blitFramebuffer(Ct,Vt,bt,_t,It,he,bt,_t,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||k.has(v)){let ke=k.get(v),ps=k.get(U);g.bindFramebuffer(D.READ_FRAMEBUFFER,J),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ge=0;ge<Tt;ge++)Tr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,V,Xt+ge):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,V),pe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ps.__webglTexture,xt,Be+ge):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ps.__webglTexture,xt),V!==0?D.blitFramebuffer(Ct,Vt,bt,_t,It,he,bt,_t,D.COLOR_BUFFER_BIT,D.NEAREST):pe?D.copyTexSubImage3D(yt,xt,It,he,Be+ge,Ct,Vt,bt,_t):D.copyTexSubImage2D(yt,xt,It,he,Ct,Vt,bt,_t);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pe?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(yt,xt,It,he,Be,bt,_t,Tt,fe,mn,Ue.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,xt,It,he,Be,bt,_t,Tt,fe,Ue.data):D.texSubImage3D(yt,xt,It,he,Be,bt,_t,Tt,fe,mn,Ue):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xt,It,he,bt,_t,fe,mn,Ue.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xt,It,he,Ue.width,Ue.height,fe,Ue.data):D.texSubImage2D(D.TEXTURE_2D,xt,It,he,bt,_t,fe,mn,Ue);g.pixelStorei(D.UNPACK_ROW_LENGTH,On),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,te),g.pixelStorei(D.UNPACK_SKIP_PIXELS,ni),g.pixelStorei(D.UNPACK_SKIP_ROWS,Pi),g.pixelStorei(D.UNPACK_SKIP_IMAGES,fs),xt===0&&U.generateMipmaps&&D.generateMipmap(yt),g.unbindTexture()},this.initRenderTarget=function(v){k.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){K=0,X=0,nt=null,g.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}};var u0={type:"change"},Wd={type:"start"},f0={type:"end"},Mh=new ws,d0=new si,wb=Math.cos(70*ao.DEG2RAD),tn=new P,Dn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hd=1e-6,bh=class extends Ca{constructor(t,n=null){super(t,n),this.state=ue.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Vn,this._lastTargetPosition=new P,this._quat=new Vn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ps,this._sphericalDelta=new Ps,this._scale=1,this._panOffset=new P,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new P,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cb.bind(this),this._onPointerDown=Ab.bind(this),this._onPointerUp=Rb.bind(this),this._onContextMenu=Fb.bind(this),this._onMouseWheel=Lb.bind(this),this._onKeyDown=Db.bind(this),this._onTouchStart=Ub.bind(this),this._onTouchMove=Nb.bind(this),this._onMouseDown=Pb.bind(this),this._onMouseMove=Ib.bind(this),this._interceptControlDown=Ob.bind(this),this._interceptControlUp=Bb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(u0),this.update(),this.state=ue.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let n=this.object.position;tn.copy(n).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),n.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=tn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mh.origin.copy(this.object.position),Mh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mh.direction))<wb?this.object.lookAt(this.target):(d0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mh.intersectPlane(d0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hd||this._lastTargetPosition.distanceToSquared(this.target)>Hd?(this.dispatchEvent(u0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){tn.setFromMatrixColumn(n,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,n){this.screenSpacePanning===!0?tn.setFromMatrixColumn(n,1):(tn.setFromMatrixColumn(n,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new vt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Ab(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Cb(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Rb(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(f0),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Pb(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ue.DOLLY;break;case Is.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}break;case Is.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Wd)}function Ib(e){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Lb(e){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(e.preventDefault(),this.dispatchEvent(Wd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(f0))}function Db(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ub(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ue.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ue.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Wd)}function Nb(e){switch(this._trackPointer(e),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ue.NONE}}function Fb(e){this.enabled!==!1&&e.preventDefault()}function Ob(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bb(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var uo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kb=new ir(-1,1,1,-1,0,1),Xd=class extends le{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},zb=new Xd,fo=class{constructor(t){this._mesh=new Je(zb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,kb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var po=class extends Ti{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=or.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new fo(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ga=class extends Ti{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Sh=class extends Ti{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Eh=class{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){let i=t.getSize(new vt);this._width=i.width,this._height=i.height,n=new je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new po(uo),this.copyPass.material.blending=ai,this.timer=new wa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ga!==void 0&&(o instanceof Ga?i=!0:o instanceof Sh&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){let n=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Th=class extends Ti{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new zt}render(t,n,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var p0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var mo=class e extends Ti{constructor(t,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new je(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new je(r,o,{type:vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new je(r,o,{type:vn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=p0;this.highPassUniforms=or.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new vt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=or.clone(uo.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,premultipliedAlpha:!0,blending:Hn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new zt,this._oldClearAlpha=1,this._basic=new ri,this._fsQuad=new fo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new vt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let n=[],i=t/3;for(let s=0;s<t;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};mo.BlurDirectionX=new vt(1,0);mo.BlurDirectionY=new vt(0,1);var Mo=typeof self<"u"?self:{};function Lg(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=Mo,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function lr(){throw Error("Invalid UTF8")}function m0(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var wh,qd,Vb=typeof TextDecoder<"u",g0,Gb=typeof TextEncoder<"u";function Dg(e){if(Gb)e=(g0||(g0=new TextEncoder)).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function Ug(e){Mo.setTimeout((()=>{throw e}),0)}var ef,Hb=Lg(610401301,!1),_0=Lg(748402147,!0);function x0(){var e=Mo.navigator;return e&&(e=e.userAgent)?e:""}var v0=Mo.navigator;function Wh(e){return Wh[" "](e),e}ef=v0&&v0.userAgentData||null,Wh[" "]=function(){};var Ng={},Xa=null;function Wb(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);let i=new Uint8Array(n),s=0;return(function(r,o){function a(c){for(;l<r.length;){let u=r.charAt(l++),d=Xa[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}Fg();let l=0;for(;;){let c=a(-1),u=a(0),d=a(64),h=a(64);if(h===64&&c===-1)break;o(c<<2|u>>4),d!=64&&(o(u<<4&240|d>>2),h!=64&&o(d<<6&192|h))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function Fg(){if(!Xa){Xa={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));Ng[n]=i;for(let s=0;s<i.length;s++){let r=i[s];Xa[r]===void 0&&(Xa[r]=s)}}}}var Xb=typeof Uint8Array<"u",Og=!(!(Hb&&ef&&ef.brands.length>0)&&(x0().indexOf("Trident")!=-1||x0().indexOf("MSIE")!=-1))&&typeof btoa=="function",y0=/[-_.]/g,qb={"-":"+",_:"/",".":"="};function Yb(e){return qb[e]||""}function Bg(e){if(!Og)return Wb(e);e=y0.test(e)?e.replace(y0,Yb):e,e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Ef(e){return Xb&&e!=null&&e instanceof Uint8Array}var bo={};function _r(){return M0||(M0=new Gi(null,bo))}function Tf(e){kg(bo);var t=e.g;return(t=t==null||Ef(t)?t:typeof t=="string"?Bg(t):null)==null?t:e.g=t}var Gi=class{h(){return new Uint8Array(Tf(this)||0)}constructor(e,t){if(kg(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}},M0,b0;function kg(e){if(e!==bo)throw Error("illegal external caller")}function zg(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function nf(e){return zg(e=Error(e),"warning"),e}function So(e,t){if(e!=null){var n=b0??(b0={}),i=n[e]||0;i>=t||(n[e]=i+1,zg(e=Error(),"incident"),Ug(e))}}function Do(){return typeof BigInt=="function"}var Uo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Wi(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var Zb=Wi("jas",void 0,!0),S0=Wi(void 0,"0di"),Ha=Wi(void 0,"1oa"),Zn=Wi(void 0,Symbol()),Kb=Wi(void 0,"0ub"),jb=Wi(void 0,"0ubs"),sf=Wi(void 0,"0ubsb"),Jb=Wi(void 0,"0actk"),Eo=Wi("m_m","Pa",!0),E0=Wi(),Vg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Gg=Object.defineProperties,wt=Uo?Zb:"Ga",yr,T0=[];function il(e,t){Uo||wt in e||Gg(e,Vg),e[wt]|=t}function on(e,t){Uo||wt in e||Gg(e,Vg),e[wt]=t}function sl(e){return il(e,34),e}function $a(e){return il(e,8192),e}on(T0,7),yr=Object.freeze(T0);var To={};function jn(e,t){return t===void 0?e.h!==xr&&!!(2&(0|e.v[wt])):!!(2&t)&&e.h!==xr}var xr={};function wf(e,t){if(e!=null){if(typeof e=="string")e=e?new Gi(e,bo):_r();else if(e.constructor!==Gi)if(Ef(e))e=e.length?new Gi(new Uint8Array(e),bo):_r();else{if(!t)throw Error();e=void 0}}return e}var Fh=class{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){let t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}},$b=Object.freeze({});function Hg(e,t,n){let i=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);let o=s+(r?-1:0);for(t=128&t?1:0;t<o;t++)n(t-i,e[t]);if(r){e=e[s-1];for(let a in e)!isNaN(a)&&n(+a,e[a])}}var Wg={};function No(e){return 128&e?Wg:void 0}function Xh(e){return e.Na=!0,e}var Qb=Xh((e=>typeof e=="number")),w0=Xh((e=>typeof e=="string")),tS=Xh((e=>typeof e=="boolean")),qh=typeof Mo.BigInt=="function"&&typeof Mo.BigInt(0)=="bigint";function Kn(e){var t=e;if(w0(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Qb(t)&&!Number.isSafeInteger(t))throw Error(String(t));return qh?BigInt(e):e=tS(e)?e?"1":"0":w0(e)?e.trim()||"0":String(e)}var rf=Xh((e=>qh?e>=nS&&e<=sS:e[0]==="-"?A0(e,eS):A0(e,iS))),eS=Number.MIN_SAFE_INTEGER.toString(),nS=qh?BigInt(Number.MIN_SAFE_INTEGER):void 0,iS=Number.MAX_SAFE_INTEGER.toString(),sS=qh?BigInt(Number.MAX_SAFE_INTEGER):void 0;function A0(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var rS=typeof Uint8Array.prototype.slice=="function",C0,Pe=0,qe=0;function R0(e){let t=e>>>0;Pe=t,qe=(e-t)/4294967296>>>0}function wo(e){if(e<0){R0(-e);let[t,n]=Rf(Pe,qe);Pe=t>>>0,qe=n>>>0}else R0(e)}function Af(e){let t=C0||(C0=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),qe=0,Pe=t.getUint32(0,!0)}function Xg(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Qa(e,t)}function oS(e,t){return Kn(Do()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Qa(e,t))}function qg(e,t){return Do()?Kn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):Kn(Cf(e,t))}function Qa(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Do()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+P0(n)+P0(e));return n}function P0(e){return e=String(e),"0000000".slice(e.length)+e}function Cf(e,t){if(2147483648&t)if(Do())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=Rf(e,t);e="-"+Qa(n,i)}else e=Qa(e,t);return e}function Yh(e){if(e.length<16)wo(Number(e));else if(Do())e=BigInt(e),Pe=Number(e&BigInt(4294967295))>>>0,qe=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");qe=Pe=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));qe*=1e6,Pe=1e6*Pe+r,Pe>=4294967296&&(qe+=Math.trunc(Pe/4294967296),qe>>>=0,Pe>>>=0)}if(t){let[i,s]=Rf(Pe,qe);Pe=i,qe=s}}}function Rf(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function wi(e){return Array.prototype.slice.call(e)}var rl=typeof BigInt=="function"?BigInt.asIntN:void 0,aS=typeof BigInt=="function"?BigInt.asUintN:void 0,vr=Number.isSafeInteger,Zh=Number.isFinite,Ao=Math.trunc,lS=Kn(0);function qa(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Vi(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function tl(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function Yg(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}var cS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ol(e){switch(typeof e){case"bigint":return!0;case"number":return Zh(e);case"string":return cS.test(e);default:return!1}}function Fo(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Zh(e)?0|e:void 0}function Zg(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Zh(e)?e>>>0:void 0}function Kg(e){let t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(Yh(e),Cf(Pe,qe))}function Pf(e){if(e=Ao(e),!vr(e)){wo(e);var t=Pe,n=qe;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=Xg(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function jg(e){var t=Ao(Number(e));return vr(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Kg(e))}function Jg(e){var t=Ao(Number(e));return vr(t)?Kn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Do()?Kn(rl(64,BigInt(e))):Kn(Kg(e)))}function $g(e){return vr(e)?e=Kn(Pf(e)):(e=Ao(e),vr(e)?e=String(e):(wo(e),e=Cf(Pe,qe)),e=Kn(e)),e}function Oh(e){let t=typeof e;return e==null?e:t==="bigint"?Kn(rl(64,e)):ol(e)?t==="string"?Jg(e):$g(e):void 0}function Qg(e){if(typeof e!="string")throw Error();return e}function al(e){if(e!=null&&typeof e!="string")throw Error();return e}function fn(e){return e==null||typeof e=="string"?e:void 0}function If(e,t,n,i){return e!=null&&e[Eo]===To?e:Array.isArray(e)?((i=(n=0|e[wt])|32&i|2&i)!==n&&on(e,i),new t(e)):(n?2&i?((e=t[S0])||(sl((e=new t).v),e=t[S0]=e),t=e):t=new t:t=void 0,t)}function hS(e,t,n){if(t)t:{if(!ol(t=e))throw nf("int64");switch(typeof t){case"string":t=Jg(t);break t;case"bigint":t=Kn(rl(64,t));break t;default:t=$g(t)}}else t=Oh(e);return(e=t)==null?n?lS:void 0:e}var uS={},dS=(function(){try{return Wh(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Za=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},fS=dS?(Object.setPrototypeOf(Za.prototype,Map.prototype),Object.defineProperties(Za.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Za):class extends Map{constructor(){super()}};function I0(e){return e}function Yd(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var ls=class extends fS{constructor(e,t,n=I0,i=I0){super(),this.J=0|e[wt],this.K=t,this.S=n,this.fa=this.K?pS:i;for(let s=0;s<e.length;s++){let r=e[s],o=n(r[0],!1,!0),a=r[1];t?a===void 0&&(a=null):a=i(r[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(e){return $a(Array.from(super.entries(),e))}clear(){Yd(this),super.clear()}delete(e){return Yd(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new Fh(e,mS,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new Fh(e,ls.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,i,s)=>{e.call(t,s.get(i),i,s)})):super.forEach(e,t)}set(e,t){return Yd(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){let t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function pS(e,t,n,i,s,r){return e=If(e,i,n,r),s&&(e=Df(e)),e}function mS(e){return[e,this.get(e)]}var L0;function D0(){return L0||(L0=new ls(sl([]),void 0,void 0,void 0,uS))}function Kh(e){return Zn?e[Zn]:void 0}function Bh(e,t){for(let n in e)!isNaN(n)&&t(e,+n,e[n])}ls.prototype.toJSON=void 0;var of=class{},gS={Ka:!0};function _S(e,t){t<100||So(jb,1)}function jh(e,t,n,i){let s=i!==void 0;i=!!i;var r,o=Zn;!s&&Uo&&o&&(r=e[o])&&Bh(r,_S),o=[];var a=e.length;let l;r=4294967295;let c=!1,u=!!(64&t),d=u?128&t?0:-1:void 0;1&t||(l=a&&e[a-1],l!=null&&typeof l=="object"&&l.constructor===Object?r=--a:l=void 0,!u||128&t||s||(c=!0,r=r-d+d)),t=void 0;for(var h=0;h<a;h++){let p=e[h];if(p!=null&&(p=n(p,i))!=null)if(u&&h>=r){let _=h-d;(t??(t={}))[_]=p}else o[h]=p}if(l)for(let p in l){if((a=l[p])==null||(a=n(a,i))==null)continue;let _;h=+p,u&&!Number.isNaN(h)&&(_=h+d)<r?o[_]=a:(t??(t={}))[p]=a}return t&&(c?o.push(t):o[r]=t),s&&Zn&&(e=Kh(e))&&e instanceof of&&(o[Zn]=(function(p){let _=new of;return Bh(p,((M,m,f)=>{_[m]=wi(f)})),_.da=p.da,_})(e)),o}function xS(e){return e[0]=el(e[0]),e[1]=el(e[1]),e}function el(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return rf(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[wt];return e.length===0&&1&t?void 0:jh(e,t,el)}if(e!=null&&e[Eo]===To)return t_(e);if(e instanceof Gi){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Og){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Fg(),n=Ng[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let c=0,u=0;for(;c<t.length-2;c+=3){var r=t[c],o=t[c+1],a=t[c+2],l=n[r>>2];r=n[(3&r)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[u++]=l+r+o+a}switch(l=0,a=s,t.length-c){case 2:a=n[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],i[u]=n[t>>2]+n[(3&t)<<4|l>>4]+a+s}t=i.join("")}e=e.g=t}return e}return e instanceof ls?e=e.size!==0?e.V(xS):void 0:void 0}return e}var U0,N0;function t_(e){return jh(e=e.v,0|e[wt],el)}function dr(e,t){return e_(e,t[0],t[1])}function e_(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[wt],_0&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(_0)throw Error("carr");So(Jb,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&on(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var o=r-1;let l=n[o];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((o-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var a in l)(r=+a)<o&&(n[r+t]=l[a],delete l[a]);s=-16760833&s|(1023&o)<<14;break t}}if(t){if((a=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return on(e,64|s|i),e}function vS(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[wt];return e.length===0&&1&n?void 0:F0(e,n,t)}if(e!=null&&e[Eo]===To)return O0(e);if(e instanceof ls){if(2&(t=e.J))return e;if(!e.size)return;if(n=sl(e.V()),e.K)for(e=0;e<n.length;e++){let i=n[e],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[Eo]===To?O0(s):Array.isArray(s)?F0(s,0|s[wt],!!(32&t)):void 0,i[1]=s}return n}return e instanceof Gi?e:void 0}function F0(e,t,n){return 2&t||(!n||4096&t||16&t?e=Oo(e,t,!1,n&&!(16&t)):(il(e,34),4&t&&Object.freeze(e))),e}function Lf(e,t,n){return e=new e.constructor(t),n&&(e.h=xr),e.m=xr,e}function O0(e){let t=e.v,n=0|t[wt];return jn(e,n)?e:Uf(e,t,n)?Lf(e,t):Oo(t,n)}function Oo(e,t,n,i){return i??(i=!!(34&t)),e=jh(e,t,vS,i),i=32,n&&(i|=2),on(e,t=16769217&t|i),e}function Df(e){let t=e.v,n=0|t[wt];return jn(e,n)?Uf(e,t,n)?Lf(e,t,!0):new e.constructor(Oo(t,n,!1)):e}function Bo(e){if(e.h!==xr)return!1;var t=e.v;return il(t=Oo(t,0|t[wt]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function ko(e){if(!Bo(e)&&jn(e,0|e.v[wt]))throw Error()}function Mr(e,t){t===void 0&&(t=0|e[wt]),32&t&&!(4096&t)&&on(e,4096|t)}function Uf(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(on(t,2|n),e.h=xr,!0)}var n_=Kn(0),Bs={};function Ie(e,t,n,i,s){if((t=cs(e.v,t,n,s))!==null||i&&e.m!==xr)return t}function cs(e,t,n,i){if(t===-1)return null;let s=t+(n?0:-1),r=e.length-1,o,a;if(!(r<1+(n?0:-1))){if(s>=r)if(o=e[r],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[t],a=!0;else{if(s!==r)return;n=o}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[t]=i:e[s]=i,i}return n}}function de(e,t,n,i){ko(e),sn(e=e.v,0|e[wt],t,n,i)}function sn(e,t,n,i,s){let r=n+(s?0:-1);var o=e.length-1;if(o>=1+(s?0:-1)&&r>=o){let a=e[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,t}return r<=o?(e[r]=i,t):(i!==void 0&&(n>=(o=(t??(t=0|e[wt]))>>14&1023||536870912)?i!=null&&(e[o+(s?0:-1)]={[n]:i}):e[r]=i),t)}function hr(){return $b===void 0?2:4}function ur(e,t,n,i,s){let r=e.v,o=0|r[wt];i=jn(e,o)?1:i,s=!!s||i===3,i===2&&Bo(e)&&(r=e.v,o=0|r[wt]);let a=(e=Nf(r,t))===yr?7:0|e[wt],l=Ff(a,o);var c=!(4&l);if(c){4&l&&(e=wi(e),a=0,l=pr(l,o),o=sn(r,o,t,e));let u=0,d=0;for(;u<e.length;u++){let h=n(e[u]);h!=null&&(e[d++]=h)}d<u&&(e.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==a&&(on(e,l),2&l&&Object.freeze(e)),i_(e,l,r,o,t,i,c,s)}function i_(e,t,n,i,s,r,o,a){let l=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?fr(t)||((t|=!e.length||o&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==l&&on(e,t),Object.freeze(e)):(r===2&&fr(t)&&(e=wi(e),l=0,t=pr(t,i),i=sn(n,i,s,e)),fr(t)||(a||(t|=16),t!==l&&on(e,t))),2&t||!(4096&t||16&t)||Mr(n,i),e}function Nf(e,t,n){return e=cs(e,t,n),Array.isArray(e)?e:yr}function Ff(e,t){return 2&t&&(e|=2),1|e}function fr(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function s_(e){return wf(e,!0)}function r_(e){e=wi(e);for(let t=0;t<e.length;t++){let n=e[t]=wi(e[t]);Array.isArray(n[1])&&(n[1]=sl(n[1]))}return $a(e)}function zs(e,t,n,i){ko(e),sn(e=e.v,0|e[wt],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function zo(e,t,n){if(2&t)throw Error();let i=No(t),s=Nf(e,n,i),r=s===yr?7:0|s[wt],o=Ff(r,t);return(2&o||fr(o)||16&o)&&(o===r||fr(o)||on(s,o),s=wi(s),r=0,o=pr(o,t),sn(e,t,n,s,i)),o&=-13,o!==r&&on(s,o),s}function Zd(e,t){var n=Z_;return Bf(Of(e=e.v),e,void 0,n)===t?t:-1}function Of(e){if(Uo)return e[Ha]??(e[Ha]=new Map);if(Ha in e)return e[Ha];let t=new Map;return Object.defineProperty(e,Ha,{value:t}),t}function o_(e,t,n,i,s){let r=Of(e),o=Bf(r,e,t,n,s);return o!==i&&(o&&(t=sn(e,t,o,void 0,s)),r.set(n,i)),t}function Bf(e,t,n,i,s){let r=e.get(i);if(r!=null)return r;r=0;for(let o=0;o<i.length;o++){let a=i[o];cs(t,a,s)!=null&&(r!==0&&(n=sn(t,n,r,void 0,s)),r=a)}return e.set(i,r),r}function kf(e,t,n){let i=0|e[wt],s=No(i),r=cs(e,n,s),o;if(r!=null&&r[Eo]===To){if(!jn(r))return Bo(r),r.v;o=r.v}else Array.isArray(r)&&(o=r);if(o){let a=0|o[wt];2&a&&(o=Oo(o,a))}return o=dr(o,t),o!==r&&sn(e,i,n,o,s),o}function a_(e,t,n,i,s){let r=!1;if((i=cs(e,i,s,(o=>{let a=If(o,n,!1,t);return r=a!==o&&a!=null,a})))!=null)return r&&!jn(i)&&Mr(e,t),i}function re(e,t,n,i){let s=e.v,r=0|s[wt];if((t=a_(s,r,t,n,i))==null)return t;if(r=0|s[wt],!jn(e,r)){let o=Df(t);o!==t&&(Bo(e)&&(s=e.v,r=0|s[wt]),r=sn(s,r,n,t=o,i),Mr(s,r))}return t}function l_(e,t,n,i,s,r,o,a){var l=jn(e,n);r=l?1:r,o=!!o||r===3,l=a&&!l,(r===2||l)&&Bo(e)&&(n=0|(t=e.v)[wt]);var c=(e=Nf(t,s))===yr?7:0|e[wt],u=Ff(c,n);if(a=!(4&u)){var d=e,h=n;let p=!!(2&u);p&&(h|=2);let _=!p,M=!0,m=0,f=0;for(;m<d.length;m++){let b=If(d[m],i,!1,h);if(b instanceof i){if(!p){let A=jn(b);_&&(_=!A),M&&(M=A)}d[f++]=b}}f<m&&(d.length=f),u|=4,u=M?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==c&&(on(e,u),2&u&&Object.freeze(e)),l&&!(8&u||!e.length&&(r===1||r===4&&(2&u||!(16&u)&&32&n)))){for(fr(u)&&(e=wi(e),u=pr(u,n),n=sn(t,n,s,e)),i=e,l=u,c=0;c<i.length;c++)(d=i[c])!==(u=Df(d))&&(i[c]=u);l|=8,on(e,u=l=i.length?4096|l:-4097&l)}return i_(e,u,t,n,s,r,a,o)}function hs(e,t,n){let i=e.v;return l_(e,i,0|i[wt],t,n,hr(),!1,!0)}function c_(e){return e==null&&(e=void 0),e}function Nt(e,t,n,i,s){return de(e,n,i=c_(i),s),i&&!jn(i)&&Mr(e.v),e}function Ka(e,t,n,i){t:{var s=i=c_(i);ko(e);let r=e.v,o=0|r[wt];if(s==null){let a=Of(r);if(Bf(a,r,o,n)!==t)break t;a.set(n,0)}else o=o_(r,o,n,t);sn(r,o,t,s)}i&&!jn(i)&&Mr(e.v)}function pr(e,t){return-273&(2&t?2|e:-3&e)}function zf(e,t,n,i){var s=i;ko(e),e=l_(e,i=e.v,0|i[wt],n,t,2,!0),s=s??new n,e.push(s),t=n=e===yr?7:0|e[wt],(s=jn(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&on(e,n),s||Mr(i)}function di(e,t,n){return Fo(Ie(e,t,void 0,n))}function Ve(e,t){return Ie(e,t,void 0,void 0,Vi)??0}function us(e,t,n){if(n!=null){if(typeof n!="number"||!Zh(n))throw nf("int32");n|=0}de(e,t,n)}function Dt(e,t,n){de(e,t,qa(n))}function Jn(e,t,n){zs(e,t,al(n),"")}function kh(e,t,n){{ko(e);let o=e.v,a=0|o[wt];if(n==null)sn(o,a,t);else{var i=e=n===yr?7:0|n[wt],s=fr(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=wi(n),i=0,e=pr(e,a),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,s=0;s<n.length;s++){let l=n[s],c=Qg(l);Object.is(l,c)||(r&&(n=wi(n),i=0,e=pr(e,a),r=!1),n[s]=c)}e!==i&&(r&&(n=wi(n),e=pr(e,a)),on(n,e)),sn(o,a,t,n)}}}function Jh(e,t,n){ko(e),ur(e,t,fn,2,!0).push(Qg(n))}var go=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function Vf(e,t){if(typeof e=="string")return new go(Bg(e),t);if(Array.isArray(e))return new go(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new go(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new go(e,!1);if(e.constructor===Gi)return t=Tf(e)||new Uint8Array(0),new go(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new go(e,!1);throw Error()}function Gf(e,t){let n,i=0,s=0,r=0,o=e.h,a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(mr(e,a),!(128&n))return t(i>>>0,s>>>0);throw Error()}function Hf(e){let t=0,n=e.g,i=n+10,s=e.h;for(;n<i;){let r=s[n++];if(t|=r,(128&r)==0)return mr(e,n),!!(127&t)}throw Error()}function Gs(e){let t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return mr(e,n),s}function Hi(e){return Gs(e)>>>0}function zh(e){var t=e.h;let n=e.g;var i=t[n],s=t[n+1];let r=t[n+2];return t=t[n+3],mr(e,e.g+4),e=2*((s=(i<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:e*(1/0):i==0?1401298464324817e-60*e*s:e*Math.pow(2,i-150)*(s+8388608)}function yS(e){return Gs(e)}function mr(e,t){if(e.g=t,t>e.l)throw Error()}function h_(e,t){if(t<0)throw Error();let n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function u_(e,t){if(t==0)return _r();var n=h_(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):rS?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?_r():new Gi(n,bo)}var B0=[];function d_(e,t,n,i){if(Vh.length){let s=Vh.pop();return s.o(i),s.g.init(e,t,n,i),s}return new MS(e,t,n,i)}function f_(e){e.g.clear(),e.l=-1,e.h=-1,Vh.length<100&&Vh.push(e)}function p_(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=Hi(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function Lh(e){switch(e.h){case 0:e.h!=0?Lh(e):Hf(e.g);break;case 1:mr(e=e.g,e.g+8);break;case 2:if(e.h!=2)Lh(e);else{var t=Hi(e.g);mr(e=e.g,e.g+t)}break;case 5:mr(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!p_(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}Lh(e)}break;default:throw Error()}}function ll(e,t,n){let i=e.g.l;var s=Hi(e.g);let r=(s=e.g.g+s)-i;if(r<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=i,t}function Wf(e){var t=Hi(e.g),n=h_(e=e.g,t);if(e=e.h,Vb){var i,s=e;(i=qd)||(i=qd=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(wh===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),wh=!0}catch{wh=!1}}throw!wh&&(qd=void 0),a}}else{t=(r=n)+t,n=[];let a,l=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?lr():(a=e[r++],o<194||(192&a)!=128?(r--,lr()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?lr():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,lr()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?lr():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,lr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):lr(),n.length>=8192&&(l=m0(l,n),n.length=0)}r=m0(l,n)}return r}function m_(e){let t=Hi(e.g);return u_(e.g,t)}function $h(e,t,n){var i=Hi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var MS=class{constructor(e,t,n,i){if(B0.length){let s=B0.pop();s.init(e,t,n,i),e=s}else e=new class{constructor(s,r,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,o,a)}init(s,r,o,{Y:a=!1,ea:l=!1}={}){this.Y=a,this.ea=l,s&&(s=Vf(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},Vh=[];function k0(e){return e?/^\d+$/.test(e)?(Yh(e),new af(Pe,qe)):null:z0||(z0=new af(0,0))}var af=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},z0;function V0(e){return e?/^-?\d+$/.test(e)?(Yh(e),new lf(Pe,qe)):null:G0||(G0=new lf(0,0))}var lf=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},G0;function vo(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Vo(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Qh(e,t){if(t>=0)Vo(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Xf(e){var t=Pe;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Co(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function fi(e,t,n){Vo(e.g,8*t+n)}function qf(e,t){return fi(e,t,2),t=e.g.end(),Co(e,t),t.push(e.h),t}function Yf(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function tu(e,t,n){fi(e,t,2),Vo(e.g,n.length),Co(e,e.g.end()),Co(e,n)}function Gh(e,t,n,i){n!=null&&(t=qf(e,t),i(n,e),Yf(e,t))}function Xi(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Zf=Xi(),g_=Xi(),Kf=Xi(),jf=Xi(),Jf=Xi(),__=Xi(),bS=Xi(),eu=Xi(),x_=Xi(),v_=Xi();function qi(e,t,n){var i=e.v;Zn&&Zn in i&&(i=i[Zn])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var At=class{constructor(e,t){this.v=e_(e,t,void 0,2048)}toJSON(){return t_(this)}j(){var e=n3,t=this.v,n=e.g,i=Zn;if(Uo&&i&&t[i]?.[n]!=null&&So(Kb,3),t=e.g,E0&&Zn&&E0===void 0&&(i=(n=this.v)[Zn])&&(i=i.da))try{i(n,t,gS)}catch(s){Ug(s)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){let e=this.v,t=0|e[wt];return Uf(this,e,t)?Lf(this,e,!0):new this.constructor(Oo(e,t,!1))}};At.prototype[Eo]=To,At.prototype.toString=function(){return this.v.toString()};var Go=class{constructor(e,t,n){this.g=e,this.h=t,e=Zf,this.l=!!e&&n===e||!1}};function nu(e,t){return new Go(e,t,Zf)}function y_(e,t,n,i,s){Gh(e,n,b_(t,i),s)}var SS=nu((function(e,t,n,i,s){return e.h===2&&(ll(e,kf(t,i,n),s),!0)}),y_),ES=nu((function(e,t,n,i,s){return e.h===2&&(ll(e,kf(t,i,n),s),!0)}),y_),iu=Symbol(),su=Symbol(),cf=Symbol(),H0=Symbol(),W0=Symbol(),hf,uf;function br(e,t,n,i){var s=i[e];if(s)return s;(s={}).qa=i,s.T=(function(d){switch(typeof d){case"boolean":return U0||(U0=[0,void 0,!0]);case"number":return d>0?void 0:d===0?N0||(N0=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++o])=="function"&&(s.ma=!0,hf??(hf=r),uf??(uf=i[o+1]),r=i[o+=2]));let a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof Go?d=r:(d=SS,o--),d?.l){r=i[++o],c=i;var u=o;typeof r=="function"&&(r=r(),c[u]=r),c=r}for(u=l+1,typeof(r=i[++o])=="number"&&r<0&&(u-=r,r=i[++o]);l<u;l++){let h=a[l];c?n(s,l,d,c,h):t(s,l,d,h)}}return i[e]=s}function M_(e){return Array.isArray(e)?e[0]instanceof Go?e:[ES,e]:[e,void 0]}function b_(e,t){return e instanceof At?e.v:Array.isArray(e)?dr(e,t):void 0}function $f(e,t,n,i){let s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function Qf(e,t,n,i,s){let r=n.g,o,a;e[t]=(l,c,u)=>r(l,c,u,a||(a=br(su,$f,Qf,i).T),o||(o=tp(i)),s)}function tp(e){let t=e[cf];if(t!=null)return t;let n=br(su,$f,Qf,e);return t=n.ma?(i,s)=>hf(i,s,n):(i,s)=>{for(;p_(s)&&s.h!=4;){var r=s.l,o=n[r];if(o==null){var a=n.ba;a&&(a=a[r])&&(a=wS(a))!=null&&(o=n[r]=a)}if(o==null||!o(s,i,r)){if(o=(a=s).m,Lh(a),a.ha)var l=void 0;else l=a.g.g-o,a.g.g=o,l=u_(a.g,l);o=void 0,a=i,l&&((o=a[Zn]??(a[Zn]=new of))[r]??(o[r]=[])).push(l)}}return(i=Kh(i))&&(i.da=n.qa[W0]),!0},e[cf]=t,e[W0]=TS.bind(e),t}function TS(e,t,n,i){var s=this[su];let r=this[cf],o=dr(void 0,s.T),a=Kh(e);if(a){var l=!1,c=s.ba;if(c){if(s=(u,d,h)=>{if(h.length!==0)if(c[d])for(let p of h){u=d_(p);try{l=!0,r(o,u)}finally{f_(u)}}else i?.(e,d,h)},t==null)Bh(a,s);else if(a!=null){let u=a[t];u&&s(a,t,u)}if(l){let u=0|e[wt];if(2&u&&2048&u&&!n?.Ka)throw Error();let d=No(u),h=(p,_)=>{if(cs(e,p,d)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(u=sn(e,u,p,_,d)),delete a[p]};t==null?Hg(o,0|o[wt],((p,_)=>{h(p,_)})):h(t,cs(o,t,d))}}}}function wS(e){let t=(e=M_(e))[0].g;if(e=e[1]){let n=tp(e),i=br(su,$f,Qf,e).T;return(s,r,o)=>t(s,r,o,i,n)}return t}function ru(e,t,n){e[t]=n.h}function ou(e,t,n,i){let s,r,o=n.h;e[t]=(a,l,c)=>o(a,l,c,r||(r=br(iu,ru,ou,i).T),s||(s=S_(i)))}function S_(e){let t=e[H0];if(!t){let n=br(iu,ru,ou,e);t=(i,s)=>E_(i,s,n),e[H0]=t}return t}function E_(e,t,n){Hg(e,0|e[wt],((i,s)=>{if(s!=null){var r=(function(o,a){var l=o[a];if(l)return l;if((l=o.ba)&&(l=l[a])){var c=(l=M_(l))[0].h;if(l=l[1]){let u=S_(l),d=br(iu,ru,ou,l).T;l=o.ma?uf(d,u):(h,p,_)=>c(h,p,_,d,u)}else l=c;return o[a]=l}})(n,i);r?r(t,s,i):i<500||So(sf,3)}})),(e=Kh(e))&&Bh(e,((i,s,r)=>{for(Co(t,t.g.end()),i=0;i<r.length;i++)Co(t,Tf(r[i])||new Uint8Array(0))}))}var AS=Kn(0);function Ho(e,t){if(Array.isArray(t)){var n=0|t[wt];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){let r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),(e=-1537&(5|n))!==n&&on(t,e),2&e&&Object.freeze(t),t}}function En(e,t,n){return new Go(e,t,n)}function Wo(e,t,n){return new Go(e,t,n)}function Tn(e,t,n){sn(e,0|e[wt],t,n,No(0|e[wt]))}var CS=nu((function(e,t,n,i,s){if(e.h!==2)return!1;if(e=wi(e=ll(e,dr([void 0,void 0],i),s)),s=No(i=0|t[wt]),2&i)throw Error();let r=cs(t,n,s);if(r instanceof ls)(2&r.J)!=0?(r=r.V(),r.push(e),sn(t,i,n,r,s)):r.Ma(e);else if(Array.isArray(r)){var o=0|r[wt];8192&o||on(r,o|=8192),2&o&&(r=r_(r),sn(t,i,n,r,s)),r.push(e)}else sn(t,i,n,$a([e]),s);return!0}),(function(e,t,n,i,s){if(t instanceof ls)t.forEach(((r,o)=>{Gh(e,n,dr([o,r],i),s)}));else if(Array.isArray(t)){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)&&Gh(e,n,dr(o,i),s)}$a(t)}}));function T_(e,t,n){(t=Vi(t))!=null&&(fi(e,n,5),e=e.g,Af(t),Xf(e))}function w_(e,t,n){if(t=(function(i){if(i==null)return i;let s=typeof i;if(s==="bigint")return String(rl(64,i));if(ol(i)){if(s==="string")return jg(i);if(s==="number")return Pf(i)}})(t),t!=null&&(typeof t=="string"&&V0(t),t!=null))switch(fi(e,n,0),typeof t){case"number":e=e.g,wo(t),vo(e,Pe,qe);break;case"bigint":n=BigInt.asUintN(64,t),n=new lf(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),vo(e.g,n.h,n.g);break;default:n=V0(t),vo(e.g,n.h,n.g)}}function A_(e,t,n){(t=Fo(t))!=null&&t!=null&&(fi(e,n,0),Qh(e.g,t))}function C_(e,t,n){(t=Yg(t))!=null&&(fi(e,n,0),e.g.g.push(t?1:0))}function R_(e,t,n){(t=fn(t))!=null&&tu(e,n,Dg(t))}function P_(e,t,n,i,s){Gh(e,n,b_(t,i),s)}function I_(e,t,n){(t=t==null||typeof t=="string"||t instanceof Gi?t:void 0)!=null&&tu(e,n,Vf(t,!0).buffer)}function L_(e,t,n){(t=Zg(t))!=null&&t!=null&&(fi(e,n,0),Vo(e.g,t))}function D_(e,t,n){return(e.h===5||e.h===2)&&(t=zo(t,0|t[wt],n),e.h==2?$h(e,zh,t):t.push(zh(e.g)),!0)}var Ye=En((function(e,t,n){return e.h===5&&(Tn(t,n,zh(e.g)),!0)}),T_,eu),RS=Wo(D_,(function(e,t,n){if((t=Ho(Vi,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(fi(i,s,5),i=i.g,Af(r),Xf(i))}}),eu),ep=Wo(D_,(function(e,t,n){if((t=Ho(Vi,t))!=null&&t.length){fi(e,n,2),Vo(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Af(t[i]),Xf(n)}}),eu),PS=En((function(e,t,n){return e.h===5&&(Tn(t,n,(e=zh(e.g))===0?void 0:e),!0)}),T_,eu),Hs=En((function(e,t,n){return e.h!==0?e=!1:(Tn(t,n,Gf(e.g,qg)),e=!0),e}),w_,__),Kd=En((function(e,t,n){return e.h!==0?t=!1:(Tn(t,n,(e=Gf(e.g,qg))===AS?void 0:e),t=!0),t}),w_,__),IS=En((function(e,t,n){return e.h!==0?e=!1:(Tn(t,n,Gf(e.g,oS)),e=!0),e}),(function(e,t,n){if(t=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(aS(64,i));if(ol(i)){if(s==="string")return s=Ao(Number(i)),vr(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(Yh(i),i=Qa(Pe,qe))),i;if(s==="number")return(i=Ao(i))>=0&&vr(i)||(wo(i),i=Xg(Pe,qe)),i}})(t),t!=null&&(typeof t=="string"&&k0(t),t!=null))switch(fi(e,n,0),typeof t){case"number":e=e.g,wo(t),vo(e,Pe,qe);break;case"bigint":n=BigInt.asUintN(64,t),n=new af(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),vo(e.g,n.h,n.g);break;default:n=k0(t),vo(e.g,n.h,n.g)}}),bS),nn=En((function(e,t,n){return e.h===0&&(Tn(t,n,Gs(e.g)),!0)}),A_,jf),cl=Wo((function(e,t,n){return(e.h===0||e.h===2)&&(t=zo(t,0|t[wt],n),e.h==2?$h(e,Gs,t):t.push(Gs(e.g)),!0)}),(function(e,t,n){if((t=Ho(Fo,t))!=null&&t.length){n=qf(e,n);for(let i=0;i<t.length;i++)Qh(e.g,t[i]);Yf(e,n)}}),jf),xo=En((function(e,t,n){return e.h===0&&(Tn(t,n,(e=Gs(e.g))===0?void 0:e),!0)}),A_,jf),Le=En((function(e,t,n){return e.h===0&&(Tn(t,n,Hf(e.g)),!0)}),C_,g_),gr=En((function(e,t,n){return e.h===0&&(Tn(t,n,(e=Hf(e.g))===!1?void 0:e),!0)}),C_,g_),bn=Wo((function(e,t,n){return e.h===2&&(e=Wf(e),zo(t,0|t[wt],n).push(e),!0)}),(function(e,t,n){if((t=Ho(fn,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&tu(i,s,Dg(r))}}),Kf),Vs=En((function(e,t,n){return e.h===2&&(Tn(t,n,(e=Wf(e))===""?void 0:e),!0)}),R_,Kf),me=En((function(e,t,n){return e.h===2&&(Tn(t,n,Wf(e)),!0)}),R_,Kf),cn=(function(e,t,n=Zf){return new Go(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=dr(void 0,i),zo(t,0|t[wt],n).push(i),ll(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)P_(e,t[r],n,i,s);1&(e=0|t[wt])||on(t,1|e)}})),Ae=nu((function(e,t,n,i,s,r){if(e.h!==2)return!1;let o=0|t[wt];return o_(t,o,r,n,No(o)),ll(e,t=kf(t,i,n),s),!0}),P_),U_=En((function(e,t,n){return e.h===2&&(Tn(t,n,m_(e)),!0)}),I_,x_),LS=Wo((function(e,t,n){return(e.h===0||e.h===2)&&(t=zo(t,0|t[wt],n),e.h==2?$h(e,Hi,t):t.push(Hi(e.g)),!0)}),(function(e,t,n){if((t=Ho(Zg,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(fi(i,s,0),Vo(i.g,r))}}),Jf),DS=En((function(e,t,n){return e.h===0&&(Tn(t,n,(e=Hi(e.g))===0?void 0:e),!0)}),L_,Jf),Sn=En((function(e,t,n){return e.h===0&&(Tn(t,n,Gs(e.g)),!0)}),(function(e,t,n){(t=Fo(t))!=null&&(t=parseInt(t,10),fi(e,n,0),Qh(e.g,t))}),v_),df=class{constructor(t,n){var i=Qn;this.g=t,this.h=n,this.m=re,this.j=Nt,this.defaultValue=void 0,this.l=i.Oa!=null?Wg:void 0}register(){Wh(this)}};function Yi(e,t){return new df(e,t)}function Xs(e,t){return(n,i)=>{{let r={ea:!0};i&&Object.assign(r,i),n=d_(n,void 0,void 0,r);try{let o=new e,a=o.v;tp(t)(a,n);var s=o}finally{f_(n)}}return s}}function au(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};E_(this.v,t,br(iu,ru,ou,e)),Co(t,t.g.end());let n=new Uint8Array(t.h),i=t.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var X0=class extends At{constructor(e){super(e)}},q0=[0,Vs,En((function(e,t,n){return e.h===2&&(Tn(t,n,(e=m_(e))===_r()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof At){let i=t.Ra;return void(i?(t=i(t),t!=null&&tu(e,n,Vf(t,!0).buffer)):So(sf,3))}if(Array.isArray(t))return void So(sf,3)}I_(e,t,n)}),x_)],jd,Y0=globalThis.trustedTypes;function Z0(e){var t;return jd===void 0&&(jd=(function(){let n=null;if(!Y0)return n;try{let i=s=>s;n=Y0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),e=(t=jd)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function Ah(e,...t){if(t.length===0)return Z0(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return Z0(n)}var N_=[0,nn,Sn,Le,-1,cl,Sn,-1,Le],US=class extends At{constructor(e){super(e)}},F_=[0,Le,me,Le,Sn,-1,Wo((function(e,t,n){return(e.h===0||e.h===2)&&(t=zo(t,0|t[wt],n),e.h==2?$h(e,yS,t):t.push(Gs(e.g)),!0)}),(function(e,t,n){if((t=Ho(Fo,t))!=null&&t.length){n=qf(e,n);for(let i=0;i<t.length;i++)Qh(e.g,t[i]);Yf(e,n)}}),v_),me,-1,[0,Le,-1],Sn,Le,-1],O_=[0,3,Le,-1,2,[0,[2],nn,Ae,[0,En((function(e,t,n){return e.h===0&&(Tn(t,n,Hi(e.g)),!0)}),L_,Jf)]],[0,Sn,Le,Sn,Le,Sn,Le,me,-1],[0,[3,4],me,-1,Ae,[0,nn],Ae,[0,Sn]],[0]],B_=[0,me,-2],K0=class extends At{constructor(e){super(e)}},k_=[0],z_=[0,nn,Le,1,Le,-4],Qn=class extends At{constructor(e){super(e,2)}},rn={};rn[336783863]=[0,me,Le,-1,nn,[0,[1,2,3,4,5,6,7,8,9],Ae,k_,Ae,F_,Ae,B_,Ae,z_,Ae,N_,Ae,[0,me,-2],Ae,[0,me,Sn],Ae,O_,Ae,[0,Sn,-1,Le]],[0,me],Le,[0,[1,3],[2,4],Ae,[0,cl],-1,Ae,[0,bn],-1,cn,[0,me,-1]],me];var j0=[0,Kd,-1,gr,-3,Kd,cl,Vs,xo,Kd,-1,gr,xo,gr,-2,Vs];function Ce(e,t){Jh(e,3,t)}function Qt(e,t){Jh(e,4,t)}var Fn=class extends At{constructor(e){super(e,500)}o(e){return Nt(this,0,7,e)}},ja=[-1,{}],J0=[0,me,1,ja],$0=[0,me,bn,ja];function pi(e,t){zf(e,1,Fn,t)}function De(e,t){Jh(e,10,t)}function oe(e,t){Jh(e,15,t)}var ti=class extends At{constructor(e){super(e,500)}o(e){return Nt(this,0,1001,e)}},V_=[-500,cn,[-500,Vs,-1,bn,-3,[-2,rn,Le],cn,q0,xo,-1,J0,$0,cn,[0,Vs,gr],Vs,j0,xo,bn,987,bn],4,cn,[-500,me,-1,[-1,{}],998,me],cn,[-500,me,bn,-1,[-2,{},Le],997,bn,-1],xo,cn,[-500,me,bn,ja,998,bn],bn,xo,J0,$0,cn,[0,Vs,-1,ja],bn,-2,j0,Vs,-1,gr,[0,gr,DS],978,ja,cn,q0];ti.prototype.g=au(V_);var NS=Xs(ti,V_),FS=class extends At{constructor(e){super(e)}},G_=class extends At{constructor(e){super(e)}g(){return hs(this,FS,1)}},H_=[0,cn,[0,nn,Ye,me,-1]],lu=Xs(G_,H_),OS=class extends At{constructor(e){super(e)}},BS=class extends At{constructor(e){super(e)}},Jd=class extends At{constructor(e){super(e)}l(){return re(this,OS,2)}g(){return hs(this,BS,5)}},W_=Xs(class extends At{constructor(e){super(e)}},[0,bn,cl,ep,[0,Sn,[0,nn,-3],[0,Ye,-3],[0,nn,-1,[0,cn,[0,nn,-2]]],cn,[0,Ye,-1,me,Ye]],me,-1,Hs,cn,[0,nn,Ye],bn,Hs]),X_=class extends At{constructor(e){super(e)}},yo=Xs(class extends At{constructor(e){super(e)}},[0,cn,[0,Ye,-4]]),q_=class extends At{constructor(e){super(e)}},hl=Xs(class extends At{constructor(e){super(e)}},[0,cn,[0,Ye,-4]]),kS=class extends At{constructor(e){super(e)}},zS=[0,nn,-1,ep,Sn],Y_=class extends At{constructor(e){super(e)}};Y_.prototype.g=au([0,Ye,-4,Hs]);var VS=class extends At{constructor(e){super(e)}},GS=Xs(class extends At{constructor(e){super(e)}},[0,cn,[0,1,nn,me,H_],Hs]),Q0=class extends At{constructor(e){super(e)}},HS=class extends At{constructor(e){super(e)}na(){let e=Ie(this,1,void 0,void 0,s_);return e??_r()}},WS=class extends At{constructor(e){super(e)}},Z_=[1,2],XS=Xs(class extends At{constructor(e){super(e)}},[0,cn,[0,Z_,Ae,[0,ep],Ae,[0,U_],nn,me],Hs]),np=class extends At{constructor(e){super(e)}},K_=[0,me,nn,Ye,bn,-1],tg=class extends At{constructor(e){super(e)}},qS=[0,Le,-1],eg=class extends At{constructor(e){super(e)}},Dh=[1,2,3,4,5,6],Hh=class extends At{constructor(e){super(e)}g(){return Ie(this,1,void 0,void 0,s_)!=null}l(){return fn(Ie(this,2))!=null}},Fe=class extends At{constructor(e){super(e)}g(){return Yg(Ie(this,2))??!1}},j_=[0,U_,me,[0,nn,Hs,-1],[0,IS,Hs]],Ze=[0,j_,Le,[0,Dh,Ae,z_,Ae,F_,Ae,N_,Ae,k_,Ae,B_,Ae,O_],Sn],cu=class extends At{constructor(e){super(e)}},ip=[0,Ze,Ye,-1,nn],YS=Yi(502141897,cu);rn[502141897]=ip;var ZS=Xs(class extends At{constructor(e){super(e)}},[0,[0,Sn,-1,RS,LS],zS]),J_=class extends At{constructor(e){super(e)}},$_=class extends At{constructor(e){super(e)}},ff=[0,Ze,Ye,[0,Ze],Le],KS=Yi(508968150,$_);rn[508968150]=[0,Ze,ip,ff,Ye,[0,[0,j_]]],rn[508968149]=ff;var _o=class extends At{constructor(e){super(e)}l(){return re(this,np,2)}g(){de(this,2)}},Q_=[0,Ze,K_];rn[478825465]=Q_;var jS=class extends At{constructor(e){super(e)}},t1=class extends At{constructor(e){super(e)}},sp=class extends At{constructor(e){super(e)}},rp=class extends At{constructor(e){super(e)}},e1=class extends At{constructor(e){super(e)}},ng=[0,Ze,[0,Ze],Q_,-1],n1=[0,Ze,Ye,nn],op=[0,Ze,Ye],i1=[0,Ze,n1,op,Ye],JS=Yi(479097054,e1);rn[479097054]=[0,Ze,i1,ng],rn[463370452]=ng,rn[464864288]=n1;var $S=Yi(462713202,rp);rn[462713202]=i1,rn[474472470]=op;var QS=class extends At{constructor(e){super(e)}},s1=class extends At{constructor(e){super(e)}},r1=class extends At{constructor(e){super(e)}},o1=class extends At{constructor(e){super(e)}},ap=[0,Ze,Ye,-1,nn],pf=[0,Ze,Ye,Le];o1.prototype.g=au([0,Ze,op,[0,Ze],ip,ff,ap,pf]);var a1=class extends At{constructor(e){super(e)}},t3=Yi(456383383,a1);rn[456383383]=[0,Ze,K_];var l1=class extends At{constructor(e){super(e)}},e3=Yi(476348187,l1);rn[476348187]=[0,Ze,qS];var c1=class extends At{constructor(e){super(e)}},ig=class extends At{constructor(e){super(e)}},h1=[0,Sn,-1],n3=Yi(458105876,class extends At{constructor(e){super(e)}g(){let e;var t=this.v;let n=0|t[wt];return e=jn(this,n),t=(function(i,s,r,o){var a=ig;!o&&Bo(i)&&(r=0|(s=i.v)[wt]);var l=cs(s,2);if(i=!1,l==null){if(o)return D0();l=[]}else if(l.constructor===ls){if(!(2&l.J)||o)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[wt])):l=[];if(o){if(!l.length)return D0();i||(i=!0,sl(l))}else i&&(i=!1,$a(l),l=r_(l));return!i&&32&r&&il(l,32),r=sn(s,r,2,o=new ls(l,a,hS,void 0)),i||Mr(s,r),o})(this,t,n,e),!e&&ig&&(t.ra=!0),t}});rn[458105876]=[0,h1,CS,[!0,Hs,[0,me,-1,bn]],[0,cl,Le,Sn]];var lp=class extends At{constructor(e){super(e)}},u1=Yi(458105758,lp);rn[458105758]=[0,Ze,me,h1];var $d=class extends At{constructor(e){super(e)}},sg=[0,PS,-1,gr],i3=class extends At{constructor(e){super(e)}},d1=class extends At{constructor(e){super(e)}},mf=[1,2];d1.prototype.g=au([0,mf,Ae,sg,Ae,[0,cn,sg]]);var f1=class extends At{constructor(e){super(e)}},s3=Yi(443442058,f1);rn[443442058]=[0,Ze,me,nn,Ye,bn,-1,Le,Ye],rn[514774813]=ap;var p1=class extends At{constructor(e){super(e)}},r3=Yi(516587230,p1);function gf(e,t){return t=t?t.clone():new np,e.displayNamesLocale!==void 0?de(t,1,al(e.displayNamesLocale)):e.displayNamesLocale===void 0&&de(t,1),e.maxResults!==void 0?us(t,2,e.maxResults):"maxResults"in e&&de(t,2),e.scoreThreshold!==void 0?Dt(t,3,e.scoreThreshold):"scoreThreshold"in e&&de(t,3),e.categoryAllowlist!==void 0?kh(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&de(t,4),e.categoryDenylist!==void 0?kh(t,5,e.categoryDenylist):"categoryDenylist"in e&&de(t,5),t}function m1(e){let t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function cp(e,t=-1,n=""){return{categories:e.map((i=>({index:di(i,1)??0??-1,score:Ve(i,2)??0,categoryName:fn(Ie(i,3))??""??"",displayName:fn(Ie(i,4))??""??""}))),headIndex:t,headName:n}}function o3(e){let t={classifications:hs(e,VS,1).map((n=>cp(re(n,G_,4)?.g()??[],di(n,2)??0,fn(Ie(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(rf(n)?n=Number(n):(n=rl(64,n),n=rf(n)?Number(n):String(n)),n):ol(n)?typeof n=="number"?Pf(n):jg(n):void 0})(Ie(e,2,void 0,void 0,Oh))!=null&&(t.timestampMs=m1(Ie(e,2,void 0,void 0,Oh)??n_)),t}function g1(e){var t=ur(e,3,Vi,hr()),n=ur(e,2,Fo,hr()),i=ur(e,1,fn,hr()),s=ur(e,9,fn,hr());let r={categories:[],keypoints:[]};for(let o=0;o<t.length;o++)r.categories.push({score:t[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((t=re(e,Jd,4)?.l())&&(r.boundingBox={originX:di(t,1,Bs)??0,originY:di(t,2,Bs)??0,width:di(t,3,Bs)??0,height:di(t,4,Bs)??0,angle:0}),re(e,Jd,4)?.g().length)for(let o of re(e,Jd,4).g())r.keypoints.push({x:Ie(o,1,void 0,Bs,Vi)??0,y:Ie(o,2,void 0,Bs,Vi)??0,score:Ie(o,4,void 0,Bs,Vi)??0,label:fn(Ie(o,3,void 0,Bs))??""});return r}function hu(e){let t=[];for(let n of hs(e,q_,1))t.push({x:Ve(n,1)??0,y:Ve(n,2)??0,z:Ve(n,3)??0,visibility:Ve(n,4)??0});return t}function Ja(e){let t=[];for(let n of hs(e,X_,1))t.push({x:Ve(n,1)??0,y:Ve(n,2)??0,z:Ve(n,3)??0,visibility:Ve(n,4)??0});return t}function rg(e){return Array.from(e,(t=>t>127?t-256:t))}function og(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var Ch;rn[516587230]=[0,Ze,ap,pf,Ye],rn[518928384]=pf;var a3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function _1(e){if(e)return!0;if(Ch===void 0)try{await WebAssembly.instantiate(a3),Ch=!0}catch{Ch=!1}return Ch}async function Rh(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await _1(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var cr=class{};function x1(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function ag(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let n=self.import;n?await n(e.toString()):await import(e.toString())}}}function v1(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Rt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function lg(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=v1(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function cg(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function Bi(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function ks(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}cr.forVisionTasks=function(e,t=!1){return Rh("vision",e??Ah``,t)},cr.forTextTasks=function(e,t=!1){return Rh("text",e??Ah``,t)},cr.forGenAiTasks=function(e,t=!1){return Rh("genai",e??Ah``,t)},cr.forAudioTasks=function(e,t=!1){return Rh("audio",e??Ah``,t)},cr.isSimdSupported=function(e=!1){return _1(e)};async function l3(e,t,n,i){return e=await(async(s,r,o,a,l)=>{if(r&&await ag(r),!self.ModuleFactory||o&&(await ag(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function Qd(e,t){let n=re(e.baseOptions,Hh,1)||new Hh;typeof t=="string"?(de(n,2,al(t)),de(n,1)):t instanceof Uint8Array&&(de(n,1,wf(t,!1)),de(n,2)),Nt(e.baseOptions,0,1,n)}function hg(e){try{let t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function St(e,t){e.C=Math.max(e.C,t)}function uu(e,t){e.B=new Fn,Jn(e.B,2,"PassThroughCalculator"),Ce(e.B,"free_memory"),Qt(e.B,"free_memory_unused_out"),De(t,"free_memory"),pi(t,e.B)}function Ro(e,t){Ce(e.B,t),Qt(e.B,t+"_unused_out")}function du(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var _f=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){let n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(re(this.baseOptions,Hh,1)?.g()||re(this.baseOptions,Hh,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=re(i.baseOptions,eg,3);if(!r){var o=r=new eg,a=new K0;Ka(o,4,Dh,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new US,Ka(s,2,Dh,o)):(s=r,o=new K0,Ka(s,4,Dh,o))),Nt(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Qd(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)Qd(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){let s=[];for(var r=0;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{Qd(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=NS(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,hg(this)}finishProcessing(){this.g.finishProcessing(),hg(this)}close(){this.B=void 0,this.g.closeGraph()}};function In(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}_f.prototype.close=_f.prototype.close;var xf=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function ug(e,t,n){let i=e.g;if(n=In(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function dg(e,t){let n=e.g,i=In(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=In(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=In(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new xf(n,i,s,r)}function hp(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function ul(e,t,n,i){return hp(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=dg(e,!0)),n=e.u):(e.A||(e.A=dg(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Ws(e,t,n){return hp(e,t),e=In(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function fu(e,t,n){hp(e,t),e.B||(e.B=In(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function up(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Xo=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=In(e.createProgram(),"Failed to create WebGL program"),this.X=ug(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=ug(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}},c3=class extends Xo{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.C=Ws(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=Ws(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.P=In(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.U=In(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.M=In(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.M,0),e.uniform1i(this.P,1),e.uniform1i(this.U,2)}close(){this.C&&this.g.deleteTexture(this.C),this.j&&this.g.deleteTexture(this.j),super.close()}},h3=class extends Xo{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=Ws(this,e),e.activeTexture(e.TEXTURE2),this.C=Ws(this,e)}m(){super.m();let e=this.g;this.M=In(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.P=In(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.I=In(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.I,0),e.uniform1i(this.M,1),e.uniform1i(this.P,2)}close(){this.j&&this.g.deleteTexture(this.j),this.C&&this.g.deleteTexture(this.C),super.close()}};function as(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function vf(e){var t=as(e,1);if(!t){if(t=as(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);let i=Po(e);var n=dp(e);if(fu(n,i,y1(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function y1(e){let t=as(e,2);if(!t){let n=Po(e);t=b1(e);let i=vf(e),s=M1(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),yf(e)}return t}function Po(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=In(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function M1(e){if(e=Po(e),!Ph)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Ph=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ph=e.R16F}return Ph}function dp(e){return e.l||(e.l=new Xo),e.l}function b1(e){let t=Po(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=as(e,2);return n||(n=Ws(dp(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function yf(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Ph,en=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--fg===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!as(this,0)}ka(){return!!as(this,1)}R(){return!!as(this,2)}ja(){return(t=as(e=this,0))||(t=vf(e),t=new Uint8Array(t.map((n=>Math.round(255*n)))),e.g.push(t)),t;var e,t}ia(){return vf(this)}N(){return y1(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=Po(this),s=dp(this);i.activeTexture(i.TEXTURE1),n=Ws(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=M1(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),fu(s,i,n),ul(s,i,!1,(()=>{b1(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),yf(this)})),up(s),yf(this)}}e.push(n)}return new en(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Po(this).deleteTexture(as(this,2)),fg=-1}};en.prototype.close=en.prototype.close,en.prototype.clone=en.prototype.clone,en.prototype.getAsWebGLTexture=en.prototype.N,en.prototype.getAsFloat32Array=en.prototype.ia,en.prototype.getAsUint8Array=en.prototype.ja,en.prototype.hasWebGLTexture=en.prototype.R,en.prototype.hasFloat32Array=en.prototype.ka,en.prototype.hasUint8Array=en.prototype.Fa;var fg=250,u3={color:"white",lineWidth:4,radius:6};function tf(e){return{...u3,fillColor:(e=e||{}).color,...e}}function os(e,t){return e instanceof Function?e(t):e}function pg(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function Wa(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function nl(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function mg(e,t,n){if(t.R())n(t.N());else{let i=t.ka()?t.ia():t.ja();e.m=e.m??new Xo;let s=nl(e);n((e=new en([i],t.m,!1,s.canvas,e.m,t.width,t.height)).N()),e.close()}}function gg(e,t,n,i){let s=(function(a){return a.g||(a.g=new c3),a.g})(e),r=nl(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;ul(s,r,!0,(()=>{(function(l,c,u,d){let h=l.g;if(h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,c),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,l.C),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,u),l.I&&(function(p,_){if(p!==_)return!1;p=p.entries(),_=_.entries();for(let[M,m]of p){p=M;let f=m,b=_.next();if(b.done)return!1;let[A,y]=b.value;if(p!==A||f[0]!==y[0]||f[1]!==y[1]||f[2]!==y[2]||f[3]!==y[3])return!1}return!!_.next().done})(l.I,d))h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.j);else{l.I=d;let p=Array(1024).fill(0);d.forEach(((_,M)=>{if(_.length!==4)throw Error(`Color at index ${M} is not a four-channel value.`);p[4*M]=_[0],p[4*M+1]=_[1],p[4*M+2]=_[2],p[4*M+3]=_[3]})),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.j),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,256,1,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(p))}})(s,t,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)}))}function _g(e,t,n,i){let s=nl(e),r=(function(l){return l.h||(l.h=new h3),l.h})(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;ul(r,s,!0,(()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,t),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.j),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.C),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)}))}var Un=class{constructor(e,t){typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}ya(e,t){if(e){var n=Wa(this);t=tf(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=os(t.fillColor,{index:s,from:r}),n.strokeStyle=os(t.color,{index:s,from:r}),n.lineWidth=os(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,os(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}xa(e,t,n){if(e&&t){var i=Wa(this);n=tf(n),i.save();var s=i.canvas,r=0;for(let o of t){i.beginPath(),t=e[o.start];let a=e[o.end];t&&a&&(i.strokeStyle=os(n.color,{index:r,from:t,to:a}),i.lineWidth=os(n.lineWidth,{index:r,from:t,to:a}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}ua(e,t){let n=Wa(this);t=tf(t),n.save(),n.beginPath(),n.lineWidth=os(t.lineWidth,{}),n.strokeStyle=os(t.color,{}),n.fillStyle=os(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}va(e,t,n=[0,0,0,255]){this.l?(function(i,s,r,o){let a=nl(i);mg(i,s,(l=>{gg(i,l,r,o),(l=Wa(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)}))})(this,e,n,t):gg(this,e.N(),n,t)}wa(e,t,n){this.l?(function(i,s,r,o){let a=nl(i);mg(i,s,(l=>{_g(i,l,r,o),(l=Wa(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)}))})(this,e,t,n):_g(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function zi(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function S1(e){var t=zi(e,0);if(!t){t=Io(e);let n=pu(e),i=new Uint8Array(e.width*e.height*4);fu(n,t,Uh(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),up(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function Uh(e){let t=zi(e,2);if(!t){let n=Io(e);t=Nh(e);let i=zi(e,1)||S1(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Ya(e)}return t}function Io(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=In(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function pu(e){return e.l||(e.l=new Xo),e.l}function Nh(e){let t=Io(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=zi(e,2);return n||(n=Ws(pu(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Ya(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function xg(e){let t=Io(e);return ul(pu(e),t,!0,(()=>(function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}Un.prototype.close=Un.prototype.close,Un.prototype.drawConfidenceMask=Un.prototype.wa,Un.prototype.drawCategoryMask=Un.prototype.va,Un.prototype.drawBoundingBox=Un.prototype.ua,Un.prototype.drawConnectors=Un.prototype.xa,Un.prototype.drawLandmarks=Un.prototype.ya,Un.lerp=function(e,t,n,i,s){return pg(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},Un.clamp=pg;var dn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--vg===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!zi(this,0)}la(){return!!zi(this,1)}R(){return!!zi(this,2)}Ca(){return S1(this)}Ba(){var e=zi(this,1);return e||(Uh(this),Nh(this),e=xg(this),Ya(this),this.g.push(e),this.j=!0),e}N(){return Uh(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=Io(this),s=pu(this);i.activeTexture(i.TEXTURE1),n=Ws(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),fu(s,i,n),ul(s,i,!1,(()=>{Nh(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ya(this)})),up(s),Ya(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Uh(this),Nh(this),n=xg(this),Ya(this)}e.push(n)}return new dn(e,this.la(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&zi(this,1).close(),this.m&&Io(this).deleteTexture(zi(this,2)),vg=-1}};dn.prototype.close=dn.prototype.close,dn.prototype.clone=dn.prototype.clone,dn.prototype.getAsWebGLTexture=dn.prototype.N,dn.prototype.getAsImageBitmap=dn.prototype.Ba,dn.prototype.getAsImageData=dn.prototype.Ca,dn.prototype.hasWebGLTexture=dn.prototype.R,dn.prototype.hasImageBitmap=dn.prototype.la,dn.prototype.hasImageData=dn.prototype.Ea;var vg=250;function Ai(...e){return e.map((([t,n])=>({start:t,end:n})))}var d3=(function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}})((yg=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:x1()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Rt(this,i||"input_audio",(r=>{Rt(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Bi(this,"__graph_config__",(t=>{e(t)})),Rt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){let r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),Rt(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)}))}addGpuBufferToStream(e,t,n){Rt(this,t,(i=>{let[s,r]=lg(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){Rt(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){Rt(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){Rt(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){Rt(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){Rt(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){Rt(this,t,(i=>{Rt(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){Rt(this,t,(i=>{cg(this,Object.keys(e),(s=>{cg(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){Rt(this,n,(s=>{Rt(this,t,(r=>{let o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){Rt(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){Rt(this,t,(i=>{let s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){Rt(this,t,(i=>{let s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){Rt(this,t,(i=>{let s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){Rt(this,t,(i=>{let s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){Rt(this,t,(i=>{let s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){Rt(this,t,(i=>{let s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)Rt(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){Rt(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){Rt(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){Rt(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){Rt(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){Rt(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){Rt(this,t,(n=>{Rt(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){Rt(this,n,(i=>{Rt(this,t,(s=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){Rt(this,t,(n=>{let i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){Rt(this,t,(n=>{let i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){Rt(this,t,(n=>{let i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){Rt(this,t,(n=>{let i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){Rt(this,t,(n=>{let i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){Rt(this,t,(n=>{let i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)Rt(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Bi(this,e,t),Rt(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){ks(this,e,t),Rt(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Bi(this,e,t),Rt(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){ks(this,e,t),Rt(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Bi(this,e,t),Rt(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){ks(this,e,t),Rt(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Bi(this,e,t),Rt(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){ks(this,e,t),Rt(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Bi(this,e,t),Rt(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){ks(this,e,t),Rt(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Bi(this,e,t),Rt(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){ks(this,e,t),Rt(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Bi(this,e,t),Rt(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){ks(this,e,t),Rt(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Bi(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),Rt(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends yg{get ga(){return this.i}pa(e,t,n){Rt(this,t,(i=>{let[s,r]=lg(this,e,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)}))}Z(e,t){Bi(this,e,t),Rt(this,e,(n=>{this.ga._attachImageListener(n)}))}aa(e,t){ks(this,e,t),Rt(this,e,(n=>{this.ga._attachImageVectorListener(n)}))}})),yg,Ci=class extends d3{};async function ee(e,t,n){return(async function(i,s,r,o){return l3(i,s,r,o)})(e,n.canvas??(x1()?void 0:document.createElement("canvas")),t,n)}function E1(e,t,n,i){if(e.U){let r=new Y_;if(n?.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Dt(r,1,(s.left+s.right)/2),Dt(r,2,(s.top+s.bottom)/2),Dt(r,4,s.right-s.left),Dt(r,3,s.bottom-s.top)}else Dt(r,1,.5),Dt(r,2,.5),Dt(r,4,1),Dt(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Dt(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[o,a]=v1(t);n=Ve(r,3)*a/o,s=Ve(r,4)*o/a,Dt(r,4,n),Dt(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function Ri(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");E1(e,t,n,e.C+1)}function Zi(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");E1(e,t,n,i)}function Lo(e,t,n,i){var s=t.data;let r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new en([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var $n=class extends _f{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new Xo}l(e,t=!0){if("runningMode"in e&&de(this.baseOptions,2,tl(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};$n.prototype.close=$n.prototype.close;var ci=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Nt(e=this.h=new cu,0,1,t=new Fe),Dt(this.h,2,.5),Dt(this.h,3,.3)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Dt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Dt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},Ri(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Zi(this,e,n,t),this.j}m(){var e=new ti;De(e,"image_in"),De(e,"norm_rect_in"),oe(e,"detections");let t=new Qn;qi(t,YS,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ce(n,"IMAGE:image_in"),Ce(n,"NORM_RECT:norm_rect_in"),Qt(n,"DETECTIONS:detections"),n.o(t),pi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=W_(r),this.j.detections.push(g1(i));St(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ci.prototype.detectForVideo=ci.prototype.G,ci.prototype.detect=ci.prototype.F,ci.prototype.setOptions=ci.prototype.o,ci.createFromModelPath=async function(e,t){return ee(ci,e,{baseOptions:{modelAssetPath:t}})},ci.createFromModelBuffer=function(e,t){return ee(ci,e,{baseOptions:{modelAssetBuffer:t}})},ci.createFromOptions=function(e,t){return ee(ci,e,t)};var fp=Ai([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),pp=Ai([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),mp=Ai([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),T1=Ai([474,475],[475,476],[476,477],[477,474]),gp=Ai([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),_p=Ai([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),w1=Ai([469,470],[470,471],[471,472],[472,469]),xp=Ai([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),A1=[...fp,...pp,...mp,...gp,..._p,...xp],C1=Ai([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Mg(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ne=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Nt(e=this.h=new $_,0,1,t=new Fe),this.A=new J_,Nt(this.h,0,3,this.A),this.u=new cu,Nt(this.h,0,2,this.u),us(this.u,4,1),Dt(this.u,2,.5),Dt(this.A,2,.5),Dt(this.h,4,.5)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"numFaces"in e&&us(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Dt(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Dt(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return Mg(this),Ri(this,e,t),this.j}G(e,t,n){return Mg(this),Zi(this,e,n,t),this.j}m(){var e=new ti;De(e,"image_in"),De(e,"norm_rect"),oe(e,"face_landmarks");let t=new Qn;qi(t,KS,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ce(n,"IMAGE:image_in"),Ce(n,"NORM_RECT:norm_rect"),Qt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),pi(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(let r of i)i=hl(r),this.j.faceLandmarks.push(hu(i));St(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{St(this,i)})),this.outputFaceBlendshapes&&(oe(e,"blendshapes"),Qt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=lu(r),this.j.faceBlendshapes.push(cp(i.g()??[]));St(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{St(this,i)}))),this.outputFacialTransformationMatrixes&&(oe(e,"face_geometry"),Qt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=re(i=ZS(r),kS,2))&&this.j.facialTransformationMatrixes.push({rows:di(i,1)??0??0,columns:di(i,2)??0??0,data:ur(i,3,Vi,hr()).slice()??[]});St(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{St(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ne.prototype.detectForVideo=Ne.prototype.G,Ne.prototype.detect=Ne.prototype.F,Ne.prototype.setOptions=Ne.prototype.o,Ne.createFromModelPath=function(e,t){return ee(Ne,e,{baseOptions:{modelAssetPath:t}})},Ne.createFromModelBuffer=function(e,t){return ee(Ne,e,{baseOptions:{modelAssetBuffer:t}})},Ne.createFromOptions=function(e,t){return ee(Ne,e,t)},Ne.FACE_LANDMARKS_LIPS=fp,Ne.FACE_LANDMARKS_LEFT_EYE=pp,Ne.FACE_LANDMARKS_LEFT_EYEBROW=mp,Ne.FACE_LANDMARKS_LEFT_IRIS=T1,Ne.FACE_LANDMARKS_RIGHT_EYE=gp,Ne.FACE_LANDMARKS_RIGHT_EYEBROW=_p,Ne.FACE_LANDMARKS_RIGHT_IRIS=w1,Ne.FACE_LANDMARKS_FACE_OVAL=xp,Ne.FACE_LANDMARKS_CONTOURS=A1,Ne.FACE_LANDMARKS_TESSELATION=C1;var vp=Ai([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function bg(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Sg(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Eg(e,t=!0){let n=[];for(let s of e){var i=lu(s);e=[];for(let r of i.g())i=t&&di(r,1)!=null?di(r,1)??0:-1,e.push({score:Ve(r,2)??0,index:i,categoryName:fn(Ie(r,3))??""??"",displayName:fn(Ie(r,4))??""??""});n.push(e)}return n}var Xn=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Nt(e=this.j=new e1,0,1,t=new Fe),this.u=new rp,Nt(this.j,0,2,this.u),this.D=new sp,Nt(this.u,0,3,this.D),this.A=new t1,Nt(this.u,0,2,this.A),this.h=new jS,Nt(this.j,0,3,this.h),Dt(this.A,2,.5),Dt(this.u,4,.5),Dt(this.D,2,.5)}get baseOptions(){return re(this.j,Fe,1)}set baseOptions(e){Nt(this.j,0,1,e)}o(e){if(us(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&Dt(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Dt(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new _o,n=t,i=gf(e.cannedGesturesClassifierOptions,re(this.h,_o,3)?.l());Nt(n,0,2,i),Nt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&re(this.h,_o,3)?.g();return e.customGesturesClassifierOptions?(Nt(n=t=new _o,0,2,i=gf(e.customGesturesClassifierOptions,re(this.h,_o,4)?.l())),Nt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&re(this.h,_o,4)?.g(),this.l(e)}Ha(e,t){return bg(this),Ri(this,e,t),Sg(this)}Ia(e,t,n){return bg(this),Zi(this,e,n,t),Sg(this)}m(){var e=new ti;De(e,"image_in"),De(e,"norm_rect"),oe(e,"hand_gestures"),oe(e,"hand_landmarks"),oe(e,"world_hand_landmarks"),oe(e,"handedness");let t=new Qn;qi(t,JS,this.j);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ce(n,"IMAGE:image_in"),Ce(n,"NORM_RECT:norm_rect"),Qt(n,"HAND_GESTURES:hand_gestures"),Qt(n,"LANDMARKS:hand_landmarks"),Qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qt(n,"HANDEDNESS:handedness"),n.o(t),pi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i){i=hl(r);let o=[];for(let a of hs(i,q_,1))o.push({x:Ve(a,1)??0,y:Ve(a,2)??0,z:Ve(a,3)??0,visibility:Ve(a,4)??0});this.landmarks.push(o)}St(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{St(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i){i=yo(r);let o=[];for(let a of hs(i,X_,1))o.push({x:Ve(a,1)??0,y:Ve(a,2)??0,z:Ve(a,3)??0,visibility:Ve(a,4)??0});this.worldLandmarks.push(o)}St(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{St(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Eg(i,!1)),St(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{St(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Eg(i)),St(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Tg(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Xn.prototype.recognizeForVideo=Xn.prototype.Ia,Xn.prototype.recognize=Xn.prototype.Ha,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=function(e,t){return ee(Xn,e,{baseOptions:{modelAssetPath:t}})},Xn.createFromModelBuffer=function(e,t){return ee(Xn,e,{baseOptions:{modelAssetBuffer:t}})},Xn.createFromOptions=function(e,t){return ee(Xn,e,t)},Xn.HAND_CONNECTIONS=vp;var Mn=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Nt(e=this.h=new rp,0,1,t=new Fe),this.u=new sp,Nt(this.h,0,3,this.u),this.j=new t1,Nt(this.h,0,2,this.j),us(this.j,3,1),Dt(this.j,2,.5),Dt(this.u,2,.5),Dt(this.h,4,.5)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"numHands"in e&&us(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Dt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Dt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ri(this,e,t),Tg(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Zi(this,e,n,t),Tg(this)}m(){var e=new ti;De(e,"image_in"),De(e,"norm_rect"),oe(e,"hand_landmarks"),oe(e,"world_hand_landmarks"),oe(e,"handedness");let t=new Qn;qi(t,$S,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ce(n,"IMAGE:image_in"),Ce(n,"NORM_RECT:norm_rect"),Qt(n,"LANDMARKS:hand_landmarks"),Qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qt(n,"HANDEDNESS:handedness"),n.o(t),pi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i)i=hl(r),this.landmarks.push(hu(i));St(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{St(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i)i=yo(r),this.worldLandmarks.push(Ja(i));St(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{St(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;let a=[];for(let l of i){i=lu(l);let c=[];for(let u of i.g())c.push({score:Ve(u,2)??0,index:di(u,1)??0??-1,categoryName:fn(Ie(u,3))??""??"",displayName:fn(Ie(u,4))??""??""});a.push(c)}o.call(r,...a),St(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Mn.prototype.detectForVideo=Mn.prototype.G,Mn.prototype.detect=Mn.prototype.F,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(e,t){return ee(Mn,e,{baseOptions:{modelAssetPath:t}})},Mn.createFromModelBuffer=function(e,t){return ee(Mn,e,{baseOptions:{modelAssetBuffer:t}})},Mn.createFromOptions=function(e,t){return ee(Mn,e,t)},Mn.HAND_CONNECTIONS=vp;var R1=Ai([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function wg(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ag(e){try{if(!e.D)return e.h;e.D(e.h)}finally{du(e)}}function Ih(e,t){e=hl(e),t.push(hu(e))}var we=class extends $n{constructor(e,t){super(new Ci(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Nt(e=this.j=new o1,0,1,t=new Fe),this.I=new sp,Nt(this.j,0,2,this.I),this.W=new QS,Nt(this.j,0,3,this.W),this.u=new cu,Nt(this.j,0,4,this.u),this.O=new J_,Nt(this.j,0,5,this.O),this.A=new s1,Nt(this.j,0,6,this.A),this.M=new r1,Nt(this.j,0,7,this.M),Dt(this.u,2,.5),Dt(this.u,3,.3),Dt(this.O,2,.5),Dt(this.A,2,.5),Dt(this.A,3,.3),Dt(this.M,2,.5),Dt(this.I,2,.5)}get baseOptions(){return re(this.j,Fe,1)}set baseOptions(e){Nt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Dt(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Dt(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Dt(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Dt(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Dt(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Dt(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Dt(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){let i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,wg(this),Ri(this,e,i),Ag(this)}G(e,t,n,i){let s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,wg(this),Zi(this,e,s,t),Ag(this)}m(){var e=new ti;De(e,"input_frames_image"),oe(e,"pose_landmarks"),oe(e,"pose_world_landmarks"),oe(e,"face_landmarks"),oe(e,"left_hand_landmarks"),oe(e,"left_hand_world_landmarks"),oe(e,"right_hand_landmarks"),oe(e,"right_hand_world_landmarks");let t=new Qn,n=new X0;Jn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))de(s,2,jh(r,0,el));else{if(!(typeof r=="string"||r instanceof Gi||Ef(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");zs(s,2,wf(r,!1),_r())}})(n,this.j.g());let i=new Fn;Jn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),zf(i,8,X0,n),Ce(i,"IMAGE:input_frames_image"),Qt(i,"POSE_LANDMARKS:pose_landmarks"),Qt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qt(i,"FACE_LANDMARKS:face_landmarks"),Qt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),pi(e,i),uu(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Ih(s,this.h.poseLandmarks),St(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{St(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=yo(s),o.push(Ja(s)),St(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{St(this,s)})),this.outputPoseSegmentationMasks&&(Qt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ro(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Lo(this,s,!0,!this.D)],St(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],St(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Ih(s,this.h.faceLandmarks),St(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{St(this,s)})),this.outputFaceBlendshapes&&(oe(e,"extra_blendshapes"),Qt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=lu(s),o.push(cp(s.g()??[]))),St(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{St(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Ih(s,this.h.leftHandLandmarks),St(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{St(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=yo(s),o.push(Ja(s)),St(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{St(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Ih(s,this.h.rightHandLandmarks),St(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{St(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=yo(s),o.push(Ja(s)),St(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{St(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};we.prototype.detectForVideo=we.prototype.G,we.prototype.detect=we.prototype.F,we.prototype.setOptions=we.prototype.o,we.createFromModelPath=function(e,t){return ee(we,e,{baseOptions:{modelAssetPath:t}})},we.createFromModelBuffer=function(e,t){return ee(we,e,{baseOptions:{modelAssetBuffer:t}})},we.createFromOptions=function(e,t){return ee(we,e,t)},we.HAND_CONNECTIONS=vp,we.POSE_CONNECTIONS=R1,we.FACE_LANDMARKS_LIPS=fp,we.FACE_LANDMARKS_LEFT_EYE=pp,we.FACE_LANDMARKS_LEFT_EYEBROW=mp,we.FACE_LANDMARKS_LEFT_IRIS=T1,we.FACE_LANDMARKS_RIGHT_EYE=gp,we.FACE_LANDMARKS_RIGHT_EYEBROW=_p,we.FACE_LANDMARKS_RIGHT_IRIS=w1,we.FACE_LANDMARKS_FACE_OVAL=xp,we.FACE_LANDMARKS_CONTOURS=A1,we.FACE_LANDMARKS_TESSELATION=C1;var hi=class extends $n{constructor(e,t){super(new Ci(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Nt(e=this.h=new a1,0,1,t=new Fe)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return Nt(this.h,0,2,gf(e,re(this.h,np,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},Ri(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Zi(this,e,n,t),this.j}m(){var e=new ti;De(e,"input_image"),De(e,"norm_rect"),oe(e,"classifications");let t=new Qn;qi(t,t3,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ce(n,"IMAGE:input_image"),Ce(n,"NORM_RECT:norm_rect"),Qt(n,"CLASSIFICATIONS:classifications"),n.o(t),pi(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=o3(GS(i)),St(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};hi.prototype.classifyForVideo=hi.prototype.ta,hi.prototype.classify=hi.prototype.sa,hi.prototype.setOptions=hi.prototype.o,hi.createFromModelPath=function(e,t){return ee(hi,e,{baseOptions:{modelAssetPath:t}})},hi.createFromModelBuffer=function(e,t){return ee(hi,e,{baseOptions:{modelAssetBuffer:t}})},hi.createFromOptions=function(e,t){return ee(hi,e,t)};var qn=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect",!0),this.h=new l1,this.embeddings={embeddings:[]},Nt(e=this.h,0,1,t=new Fe)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){var t=this.h,n=re(this.h,tg,2);return n=n?n.clone():new tg,e.l2Normalize!==void 0?de(n,1,tl(e.l2Normalize)):"l2Normalize"in e&&de(n,1),e.quantize!==void 0?de(n,2,tl(e.quantize)):"quantize"in e&&de(n,2),Nt(t,0,2,n),this.l(e)}za(e,t){return Ri(this,e,t),this.embeddings}Aa(e,t,n){return Zi(this,e,n,t),this.embeddings}m(){var e=new ti;De(e,"image_in"),De(e,"norm_rect"),oe(e,"embeddings_out");let t=new Qn;qi(t,e3,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ce(n,"IMAGE:image_in"),Ce(n,"NORM_RECT:norm_rect"),Qt(n,"EMBEDDINGS:embeddings_out"),n.o(t),pi(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=XS(i),this.embeddings=(function(r){return{embeddings:hs(r,WS,1).map((o=>{let a={headIndex:di(o,3)??0??-1,headName:fn(Ie(o,4))??""??""};var l=o.v;return a_(l,0|l[wt],Q0,Zd(o,1))!==void 0?(o=ur(o=re(o,Q0,Zd(o,1),void 0),1,Vi,hr()),a.floatEmbedding=o.slice()):(l=new Uint8Array(0),a.quantizedEmbedding=re(o,HS,Zd(o,2),void 0)?.na()?.h()??l),a})),timestampMs:m1(Ie(r,2,void 0,void 0,Oh)??n_)}})(i),St(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};qn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=og(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=og(rg(e.quantizedEmbedding),rg(t.quantizedEmbedding))}return e},qn.prototype.embedForVideo=qn.prototype.Aa,qn.prototype.embed=qn.prototype.za,qn.prototype.setOptions=qn.prototype.o,qn.createFromModelPath=function(e,t){return ee(qn,e,{baseOptions:{modelAssetPath:t}})},qn.createFromModelBuffer=function(e,t){return ee(qn,e,{baseOptions:{modelAssetBuffer:t}})},qn.createFromOptions=function(e,t){return ee(qn,e,t)};var Mf=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function f3(e){let t=(function(n){return hs(n,Fn,1)})(e.ca()).filter((n=>(fn(Ie(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(re(t[0],Qn,7)?.j()?.g()??new Map).forEach(((n,i)=>{e.u[Number(i)]=fn(Ie(n,1))??""}))}function Cg(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Rg(e){try{let t=new Mf(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{du(e)}}Mf.prototype.close=Mf.prototype.close;var Nn=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lp,this.A=new c1,Nt(this.h,0,3,this.A),Nt(e=this.h,0,1,t=new Fe)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?de(this.h,2,al(e.displayNamesLocale)):"displayNamesLocale"in e&&de(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){f3(this)}segment(e,t,n){let i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Cg(this),Ri(this,e,i),Rg(this)}La(e,t,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Cg(this),Zi(this,e,s,t),Rg(this)}Da(){return this.u}m(){var e=new ti;De(e,"image_in"),De(e,"norm_rect");let t=new Qn;qi(t,u1,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ce(n,"IMAGE:image_in"),Ce(n,"NORM_RECT:norm_rect"),n.o(t),pi(e,n),uu(this,e),this.outputConfidenceMasks&&(oe(e,"confidence_masks"),Qt(n,"CONFIDENCE_MASKS:confidence_masks"),Ro(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Lo(this,r,!0,!this.j))),St(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],St(this,i)}))),this.outputCategoryMask&&(oe(e,"category_mask"),Qt(n,"CATEGORY_MASK:category_mask"),Ro(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=Lo(this,i,!1,!this.j),St(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,St(this,i)}))),oe(e,"quality_scores"),Qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,St(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Nn.prototype.getLabels=Nn.prototype.Da,Nn.prototype.segmentForVideo=Nn.prototype.La,Nn.prototype.segment=Nn.prototype.segment,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=function(e,t){return ee(Nn,e,{baseOptions:{modelAssetPath:t}})},Nn.createFromModelBuffer=function(e,t){return ee(Nn,e,{baseOptions:{modelAssetBuffer:t}})},Nn.createFromOptions=function(e,t){return ee(Nn,e,t)};var bf=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};bf.prototype.close=bf.prototype.close;var ki=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lp,this.u=new c1,Nt(this.h,0,3,this.u),Nt(e=this.h,0,1,t=new Fe)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){let s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new d1,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new $d;zs(r,3,tl(!0),!1),zs(r,1,qa(t.keypoint.x),0),zs(r,2,qa(t.keypoint.y),0),Ka(i,1,mf,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{let a=new i3;for(r of t.scribble)zs(t=new $d,3,tl(!0),!1),zs(t,1,qa(r.x),0),zs(t,2,qa(r.y),0),zf(a,1,$d,t);Ka(i,2,mf,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Ri(this,e,s);t:{try{let a=new bf(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break t}this.j(a)}finally{du(this)}o=void 0}return o}m(){var e=new ti;De(e,"image_in"),De(e,"roi_in"),De(e,"norm_rect_in");let t=new Qn;qi(t,u1,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Ce(n,"IMAGE:image_in"),Ce(n,"ROI:roi_in"),Ce(n,"NORM_RECT:norm_rect_in"),n.o(t),pi(e,n),uu(this,e),this.outputConfidenceMasks&&(oe(e,"confidence_masks"),Qt(n,"CONFIDENCE_MASKS:confidence_masks"),Ro(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Lo(this,r,!0,!this.j))),St(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],St(this,i)}))),this.outputCategoryMask&&(oe(e,"category_mask"),Qt(n,"CATEGORY_MASK:category_mask"),Ro(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=Lo(this,i,!1,!this.j),St(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,St(this,i)}))),oe(e,"quality_scores"),Qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,St(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ki.prototype.segment=ki.prototype.segment,ki.prototype.setOptions=ki.prototype.o,ki.createFromModelPath=function(e,t){return ee(ki,e,{baseOptions:{modelAssetPath:t}})},ki.createFromModelBuffer=function(e,t){return ee(ki,e,{baseOptions:{modelAssetBuffer:t}})},ki.createFromOptions=function(e,t){return ee(ki,e,t)};var ui=class extends $n{constructor(e,t){super(new Ci(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Nt(e=this.h=new f1,0,1,t=new Fe)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?de(this.h,2,al(e.displayNamesLocale)):"displayNamesLocale"in e&&de(this.h,2),e.maxResults!==void 0?us(this.h,3,e.maxResults):"maxResults"in e&&de(this.h,3),e.scoreThreshold!==void 0?Dt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&de(this.h,4),e.categoryAllowlist!==void 0?kh(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&de(this.h,5),e.categoryDenylist!==void 0?kh(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&de(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},Ri(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Zi(this,e,n,t),this.j}m(){var e=new ti;De(e,"input_frame_gpu"),De(e,"norm_rect"),oe(e,"detections");let t=new Qn;qi(t,s3,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ce(n,"IMAGE:input_frame_gpu"),Ce(n,"NORM_RECT:norm_rect"),Qt(n,"DETECTIONS:detections"),n.o(t),pi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=W_(r),this.j.detections.push(g1(i));St(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{St(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ui.prototype.detectForVideo=ui.prototype.G,ui.prototype.detect=ui.prototype.F,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=async function(e,t){return ee(ui,e,{baseOptions:{modelAssetPath:t}})},ui.createFromModelBuffer=function(e,t){return ee(ui,e,{baseOptions:{modelAssetBuffer:t}})},ui.createFromOptions=function(e,t){return ee(ui,e,t)};var Sf=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function Pg(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Ig(e){try{let t=new Sf(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{du(e)}}Sf.prototype.close=Sf.prototype.close;var Yn=class extends $n{constructor(e,t){super(new Ci(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Nt(e=this.h=new p1,0,1,t=new Fe),this.A=new r1,Nt(this.h,0,3,this.A),this.j=new s1,Nt(this.h,0,2,this.j),us(this.j,4,1),Dt(this.j,2,.5),Dt(this.A,2,.5),Dt(this.h,4,.5)}get baseOptions(){return re(this.h,Fe,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"numPoses"in e&&us(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Dt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Dt(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){let i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,Pg(this),Ri(this,e,i),Ig(this)}G(e,t,n,i){let s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Pg(this),Zi(this,e,s,t),Ig(this)}m(){var e=new ti;De(e,"image_in"),De(e,"norm_rect"),oe(e,"normalized_landmarks"),oe(e,"world_landmarks"),oe(e,"segmentation_masks");let t=new Qn;qi(t,r3,this.h);let n=new Fn;Jn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ce(n,"IMAGE:image_in"),Ce(n,"NORM_RECT:norm_rect"),Qt(n,"NORM_LANDMARKS:normalized_landmarks"),Qt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),pi(e,n),uu(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(let r of i)i=hl(r),this.landmarks.push(hu(i));St(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],St(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(let r of i)i=yo(r),this.worldLandmarks.push(Ja(i));St(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],St(this,i)})),this.outputSegmentationMasks&&(Qt(n,"SEGMENTATION_MASK:segmentation_masks"),Ro(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Lo(this,r,!0,!this.u))),St(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],St(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Yn.prototype.detectForVideo=Yn.prototype.G,Yn.prototype.detect=Yn.prototype.F,Yn.prototype.setOptions=Yn.prototype.o,Yn.createFromModelPath=function(e,t){return ee(Yn,e,{baseOptions:{modelAssetPath:t}})},Yn.createFromModelBuffer=function(e,t){return ee(Yn,e,{baseOptions:{modelAssetBuffer:t}})},Yn.createFromOptions=function(e,t){return ee(Yn,e,t)},Yn.POSE_CONNECTIONS=R1;var P1=new P(0,.5,5.5),I1=.6,L1=40;function p3(e){let t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight,i=new ha,s=new xn(55,t/n,.1,500);s.position.copy(P1);let r=new xh({antialias:!0,alpha:!0});r.setSize(t,n),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.toneMapping=Pa,r.toneMappingExposure=.8,e.appendChild(r.domElement);let o=new Eh(r);o.addPass(new Th(i,s));let a=new mo(new vt(t,n),1.8,.4,.2);o.addPass(a);let l={uniforms:{tDiffuse:{value:null},uTime:{value:0},uIntensity:{value:.003},uAlert:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uTime;
      uniform float uIntensity;
      uniform float uAlert;
      varying vec2 vUv;
      void main() {
        vec2 dir = vUv - vec2(0.5);
        float d = length(dir);
        float offset = uIntensity * d;
        // Subtle holographic flicker
        float flicker = 1.0 + 0.02 * sin(uTime * 30.0) * sin(uTime * 7.3);
        vec4 cr = texture2D(tDiffuse, vUv + dir * offset);
        vec4 cg = texture2D(tDiffuse, vUv);
        vec4 cb = texture2D(tDiffuse, vUv - dir * offset * 0.5);
        vec4 col = vec4(cr.r, cg.g * 1.05, cb.b * 0.6, 1.0) * flicker;
        
        // Amber Ultron grade
        vec3 amberGrade = mix(col.rgb, col.rgb * vec3(1.15, 0.85, 0.55), 0.3);
        
        // Menacing Crimson Alert grade
        vec3 alertGrade = mix(col.rgb, vec3(col.r * 1.5, col.g * 0.25, col.b * 0.25), 0.75);
        
        gl_FragColor = vec4(mix(amberGrade, alertGrade, uAlert), 1.0);
      }
    `},c=new po(l);o.addPass(c);let u=new bh(s,r.domElement);u.enableDamping=!0,u.dampingFactor=.04,u.minDistance=I1,u.maxDistance=L1,u.zoomSpeed=1.4,u.enablePan=!1;let d=16755248,h=14513920,p=8930304,_=5583616,M=16764006,m=new An;i.add(m);function f(G,et=1){return new jr({color:G,transparent:!0,opacity:et,blending:Hn,depthWrite:!1})}function b(G,et,C=120){let W=G*Math.cos(et),B=G*Math.sin(et),Q=[];for(let it=0;it<=C;it++){let q=it/C*Math.PI*2;Q.push(new P(W*Math.cos(q),B,W*Math.sin(q)))}return new le().setFromPoints(Q)}function A(G,et,C=120){let W=[];for(let B=0;B<=C;B++){let Q=B/C*Math.PI-Math.PI/2;W.push(new P(G*Math.cos(Q)*Math.cos(et),G*Math.sin(Q),G*Math.cos(Q)*Math.sin(et)))}return new le().setFromPoints(W)}let y=new An,w=2;for(let G=-15;G<=15;G++){let et=G/15*(Math.PI/2)*.95,C=G%3===0?.5:.12,W=G%3===0?h:_;y.add(new un(b(w,et),f(W,C)))}for(let G=0;G<24;G++){let et=G/24*Math.PI*2,C=G%6===0;y.add(new un(A(w,et),f(C?h:_,C?.6:.1)))}let S=18,R=.25;for(let G=0;G<4;G++){let et=G/4*Math.PI*2;for(let C=0;C<S;C++){let W=C/(S-1)*2-1,B=W*R/2,it=.85*(1-Math.abs(W)*.7),q=Math.abs(W)<.3?d:h;y.add(new un(A(w,et+B,200),f(q,it)))}}let x=20,E=.35;for(let G=0;G<x;G++){let et=G/(x-1)*2-1,C=et*E/2,B=.8*(1-Math.abs(et)*.65),Q=Math.abs(et)<.3?d:h;y.add(new un(b(w,C,200),f(Q,B)))}m.add(y);let I=new An;function L(G,et,C,W,B,Q=4){let it=new An,q=f(p,.25);for(let ot=0;ot<=Q;ot++){let ct=G-C/2+ot/Q*C,ie=[];for(let Gt=0;Gt<=Q*4;Gt++){let Ee=et-W/2+Gt/(Q*4)*W;ie.push(new P(B*Math.cos(ct)*Math.cos(Ee),B*Math.sin(ct),B*Math.cos(ct)*Math.sin(Ee)))}it.add(new un(new le().setFromPoints(ie),q))}for(let ot=0;ot<=Q;ot++){let ct=et-W/2+ot/Q*W,ie=[];for(let Gt=0;Gt<=Q*4;Gt++){let Ee=G-C/2+Gt/(Q*4)*C;ie.push(new P(B*Math.cos(Ee)*Math.cos(ct),B*Math.sin(Ee),B*Math.cos(Ee)*Math.sin(ct)))}it.add(new un(new le().setFromPoints(ie),q))}return it}for(let G=0;G<30;G++){let et=(Math.random()-.5)*Math.PI*.8,C=Math.random()*Math.PI*2,W=.15+Math.random()*.25,B=L(et,C,W,W,w+.01,3+Math.floor(Math.random()*3));I.add(B)}m.add(I);let F=new An,j=2.12;for(let G=0;G<16;G++){let et=(Math.random()-.5)*Math.PI*.85,C=Math.random()*Math.PI*2,W=.3+Math.random()*1.2,B=[],Q=60,it=j*Math.cos(et),q=j*Math.sin(et);for(let ot=0;ot<=Q;ot++){let ct=C+ot/Q*W;B.push(new P(it*Math.cos(ct),q,it*Math.sin(ct)))}F.add(new un(new le().setFromPoints(B),f(h,.2+Math.random()*.3)))}for(let G=0;G<12;G++){let et=Math.random()*Math.PI*2,C=(Math.random()-.5)*Math.PI*.8,W=.3+Math.random()*.8,B=[],Q=40;for(let it=0;it<=Q;it++){let q=C+it/Q*W;B.push(new P(j*Math.cos(q)*Math.cos(et),j*Math.sin(q),j*Math.cos(q)*Math.sin(et)))}F.add(new un(new le().setFromPoints(B),f(p,.15+Math.random()*.2)))}m.add(F);let J=new An,O=.9;for(let G=0;G<8;G++){let et=[],C=3+Math.random()*2,W=300,B=G/8*Math.PI*2;for(let Q=0;Q<=W;Q++){let it=Q/W,q=it*Math.PI-Math.PI/2,ot=it*C*Math.PI*2+B;et.push(new P(O*Math.cos(q)*Math.cos(ot),O*Math.sin(q),O*Math.cos(q)*Math.sin(ot)))}J.add(new un(new le().setFromPoints(et),f(d,.3+Math.random()*.2)))}for(let G=-6;G<=6;G++){let et=G/6*(Math.PI/2)*.9;J.add(new un(b(O,et,80),f(p,.2)))}for(let G=0;G<12;G++){let et=G/12*Math.PI*2;J.add(new un(A(O,et,80),f(p,.15)))}m.add(J);let K=.25,X=new ss(K,1),nt=new no(X),st=f(M,.9),ft=new Jr(nt,st);m.add(ft);let gt=new ri({color:M,transparent:!0,opacity:.15,blending:Hn}),Mt=new Je(new io(.15,16,16),gt);m.add(Mt);let jt=new ri({color:h,transparent:!0,opacity:.04,blending:Hn}),_e=new Je(new io(.5,16,16),jt);m.add(_e);let Jt=["sys.init()","0xFF3A","malloc()",">> SCAN","void*","ACK","SYNC OK","ptr_ref","exec()","hash256","::bind","core.0","01101001","10110100",">>> RDY","HEAP 4K","TCP/SYN","mutex.lk","IRQ 0x7","DMA xfer","REG EAX","FAULT 0","kernel.d","pipe |>","chmod +x","fork()","SIGTERM","eth0: UP","AES-256","RSA 4096","TLS 1.3","HTTP/2","latency","200 OK","PATCH /","fn main","use std","impl Orb","async {}","spawn()","arc::new",".unwrap","JARVIS.ai","ULTRON.run","NEURAL.net","0xFEED","VORTEX.io"];function tt(G,et=.08){let C=document.createElement("canvas");C.width=256,C.height=32;let W=C.getContext("2d");W.font="bold 14px 'SF Mono',Menlo,Consolas,monospace";let B=.35+Math.random()*.55;W.fillStyle=`rgba(255, ${130+Math.random()*80|0}, ${20+Math.random()*30|0}, ${B})`,W.textAlign="center",W.textBaseline="middle",W.fillText(G,128,16);let Q=new Qr(C);Q.minFilter=Ke;let it=new pa(new Kr({map:Q,transparent:!0,blending:Hn,depthWrite:!1}));return it.scale.set(et*5,et*.7,1),it}function lt(G,et,C,W){let B=new An;for(let Q=0;Q<G;Q++){let it=tt(Jt[Math.floor(Math.random()*Jt.length)],et()),q=Math.acos(2*Math.random()-1),ot=Math.random()*Math.PI*2,ct=C();it.position.set(ct*Math.sin(q)*Math.cos(ot),ct*Math.cos(q),ct*Math.sin(q)*Math.sin(ot)),it.userData={phi:q,theta:ot,r:ct,speed:(W[0]+Math.random()*W[1])*(Math.random()>.5?1:-1)},B.add(it)}return B}let rt=lt(1e3,()=>.04+Math.random()*.04,()=>w+.03+Math.random()*.08,[2e-4,8e-4]);m.add(rt);let Ot=lt(120,()=>.03+Math.random()*.03,()=>O+.02,[5e-4,.001]);m.add(Ot);let Bt=lt(350,()=>.03,()=>O+.2+Math.random()*(w-O-.3),[3e-4,6e-4]);m.add(Bt);let Ut=[new ss(.012,0),new ss(.02,0),new ss(.03,1),new ss(.008,0),new Sa(.015,0),new ya(.018,0)],be=[];for(let G=0;G<220;G++){let et=Ut[Math.floor(Math.random()*Ut.length)],C=new ri({color:Math.random()>.7?d:h,transparent:!0,opacity:.3+Math.random()*.6,blending:Hn}),W=new Je(et,C),B=1.2+Math.random()*4,Q=(.08+Math.random()*.6)*(Math.random()>.5?1:-1),it=(Math.random()-.5)*Math.PI*.9,q=(Math.random()-.5)*Math.PI*.5,ot=Math.random()*Math.PI*2;if(W.userData={orbitR:B,speed:Q,tiltX:it,tiltZ:q,phase:ot},be.push(W),m.add(W),Math.random()>.85){let ct=[];for(let Gt=0;Gt<=15;Gt++){let Ee=-(Gt/15)*.3;ct.push(new P(B*Math.cos(Ee+ot),B*.08*Math.sin(Ee*3),B*Math.sin(Ee+ot)))}let ie=new un(new le().setFromPoints(ct),f(_,.08));W.add(ie)}}let Wt=1800,ne=new Float32Array(Wt*3);for(let G=0;G<Wt;G++){let et=.5+Math.pow(Math.random(),.6)*7,C=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);ne[G*3]=et*Math.sin(W)*Math.cos(C),ne[G*3+1]=et*Math.cos(W),ne[G*3+2]=et*Math.sin(W)*Math.sin(C)}let $t=new le;$t.setAttribute("position",new se(ne,3));let qt=document.createElement("canvas");qt.width=qt.height=64;let Se=qt.getContext("2d"),xe=Se.createRadialGradient(32,32,0,32,32,32);xe.addColorStop(0,"rgba(255,170,48,1)"),xe.addColorStop(.2,"rgba(255,120,20,0.6)"),xe.addColorStop(.5,"rgba(200,80,0,0.15)"),xe.addColorStop(1,"rgba(100,40,0,0)"),Se.fillStyle=xe,Se.fillRect(0,0,64,64);let Ge=new $r({map:new Qr(qt),size:.04,transparent:!0,opacity:.5,blending:Hn,depthWrite:!1,sizeAttenuation:!0,color:d}),He=new ga($t,Ge);m.add(He);function ve(G,et=.015){let C=new ba(G-et,G+et,120),W=new ri({color:d,transparent:!0,opacity:0,blending:Hn,side:oi,depthWrite:!1}),B=new Je(C,W);return B.rotation.x=Math.PI/2,B}let ye=ve(w,.01),D=ve(w*.7,.008);m.add(ye,D);for(let G=0;G<15;G++){let et=Math.acos(2*Math.random()-1),C=Math.random()*Math.PI*2,W=w+.02,B=new va(.03+Math.random()*.02,6),Q=new no(B),it=new Jr(Q,f(h,.5));it.position.set(W*Math.sin(et)*Math.cos(C),W*Math.cos(et),W*Math.sin(et)*Math.sin(C)),it.lookAt(0,0,0),y.add(it)}let Oe=new Ps,Yt=new P;function T(G,et){Yt.copy(s.position).sub(u.target),Oe.setFromVector3(Yt),Oe.theta-=G,Oe.phi=ao.clamp(Oe.phi-et,.05,Math.PI-.05),Oe.makeSafe(),Yt.setFromSpherical(Oe),s.position.copy(u.target).add(Yt),s.lookAt(u.target)}function g(G){Yt.copy(s.position).sub(u.target);let et=ao.clamp(Yt.length()*G,I1,L1);Yt.setLength(et),s.position.copy(u.target).add(Yt)}function N(){s.position.copy(P1),u.target.set(0,0,0),s.lookAt(u.target),u.update()}let k=!1;function Y(){return k=!k,k}function at(){return k}let ht=new Aa,Z=0,$=0,ut=!1,Et=0;function pt(){if(ut)return;$=requestAnimationFrame(pt);let G=ht.getElapsedTime(),et=window.AV,C=et?.state||"idle",W=et?.env||0,B=et?.level||0,Q=!!et?.alert,it=et?.micLevel||0;Et+=((Q?1:0)-Et)*.08,c.uniforms.uAlert.value=Et,k&&T(.004,Math.sin(G*.4)*.0015);let q=0;C==="speaking"?q=W*2.8+B*1.2:C==="thinking"?q=.35+Math.sin(G*7.5)*.25:C==="listening"&&(q=.12+it*.45);let ot=C==="thinking"?3.4:C==="speaking"?1.3+W*1.5:1;y.rotation.y+=.0015*ot,y.rotation.x=Math.sin(G*.08)*.05,I.rotation.y+=.0018*ot,I.rotation.x=Math.sin(G*.08+.5)*.04,F.rotation.y-=.001*ot,F.rotation.z=Math.sin(G*.12)*.03,J.rotation.y-=.005*ot,J.rotation.z+=.002*ot,J.rotation.x=Math.cos(G*.1)*.08,ft.rotation.x+=.008*ot,ft.rotation.y+=.012*ot;let ct=Math.sin(G*1.2),ie=Math.pow(Math.max(0,Math.sin(G*.4)),5),Gt=Math.pow(Math.max(0,Math.sin(G*.7+2)),8),Ee=Math.pow(Math.max(0,Math.sin(G*.25)),3),hn=ie*1.5+Gt*2+q,xu=1+hn+Math.sin(G*5)*.05;Mt.scale.setScalar(xu);let ds=C==="speaking",dl=Math.min(.9,Math.max(0,(.08+ct*.05+hn*.32)*(1-(ds?0:Ee*.95))));gt.opacity=dl,_e.scale.setScalar(1+hn*.9),jt.opacity=Math.min(.7,Math.max(0,(.03+hn*.18)*(1-(ds?0:Ee*.9)))),ft.scale.setScalar(1+hn*.7),st.opacity=Math.min(1,.5+hn*.5),be.forEach(ei=>{let pn=ei.userData,Zs=pn.speed*(C==="thinking"?2:1),We=G*Zs+pn.phase;ei.position.set(pn.orbitR*Math.cos(We)*Math.cos(pn.tiltX),pn.orbitR*Math.sin(pn.tiltX)*Math.sin(We*.8)+Math.sin(We*.3+pn.tiltZ)*.2,pn.orbitR*Math.sin(We)*Math.cos(pn.tiltZ)),ei.rotation.x+=.015,ei.rotation.z+=.01});let qs=C==="speaking"?1+W*2.5:C==="thinking"?2.2:1,vu=[[rt,1*qs],[Ot,2*qs],[Bt,1.2*qs]];for(let[ei,pn]of vu)ei.children.forEach(Zs=>{let We=Zs.userData;We.theta+=We.speed*pn,Zs.position.set(We.r*Math.sin(We.phi)*Math.cos(We.theta),We.r*Math.cos(We.phi),We.r*Math.sin(We.phi)*Math.sin(We.theta))});let qo=C==="thinking"?2.2:1,Sr=Math.sin(G*.4*qo)*w;ye.position.y=Sr;let mi=Math.sqrt(Math.max(0,w*w-Sr*Sr))/w;ye.scale.set(mi,mi,1),ye.material.opacity=(.2+(ds?W*.35:0))*mi;let Ys=Math.sin(G*.6*qo+2)*O;D.position.y=Ys;let Er=Math.sqrt(Math.max(0,O*O-Ys*Ys))/O;D.scale.set(Er,Er,1),D.material.opacity=(.15+(ds?W*.3:0))*Er,He.rotation.y+=2e-4*ot,Z+=.016,Z>.1&&(Z=0,I.children.forEach(ei=>{Math.random()>.95&&(ei.visible=!ei.visible)})),a.strength=1.6+Math.sin(G*.8)*.3+(ds?W*1.5:C==="thinking"?.8:0),c.uniforms.uTime.value=G,c.uniforms.uIntensity.value=.003+(ds?W*.0035:0),u.update(),o.render()}pt();function dt(){let G=e.clientWidth||window.innerWidth,et=e.clientHeight||window.innerHeight;s.aspect=G/et,s.updateProjectionMatrix(),r.setSize(G,et),o.setSize(G,et)}window.addEventListener("resize",dt);function Pt(){ut=!0,cancelAnimationFrame($),window.removeEventListener("resize",dt),u.dispose(),i.traverse(G=>{let et=G;et.geometry&&et.geometry.dispose();let C=Array.isArray(et.material)?et.material:[et.material];for(let W of C){if(!W)continue;W.map?.dispose(),W.dispose()}}),o.dispose(),r.dispose(),r.domElement.remove()}return{rotateBy:T,zoomBy:g,zoomIn:()=>g(.65),zoomOut:()=>g(1.55),resetView:N,toggleCinematic:Y,isCinematic:at,dispose:Pt}}var m3="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm",g3="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",D1=0,mu=4,gu=8,U1=9,N1=.32,_3=.45,F1=5,O1=.4,yp=class{constructor(t,n,i){this.landmarker=null;this.stream=null;this.rafId=0;this.running=!1;this.lastVideoTime=-1;this.handStates=new Map;this.prevMode="idle";this.prevSpinGrab=null;this.prevZoomDist=null;this.lastStatus={hands:0,mode:"idle"};this.loop=()=>{if(!this.running||(this.rafId=requestAnimationFrame(this.loop),!this.landmarker||this.video.readyState<2)||this.video.currentTime===this.lastVideoTime)return;this.lastVideoTime=this.video.currentTime;let t=this.landmarker.detectForVideo(this.video,performance.now());this.processHands(t.landmarks,t.handedness.map(n=>n[0]?.categoryName??"?")),this.drawOverlay(t.landmarks)};this.video=t,this.overlay=n,this.callbacks=i}async start(){this.stream=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1}),this.video.srcObject=this.stream,await this.video.play();let t=await cr.forVisionTasks(m3),n={baseOptions:{modelAssetPath:g3,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.6,minHandPresenceConfidence:.6,minTrackingConfidence:.6};try{this.landmarker=await Mn.createFromOptions(t,n)}catch{this.landmarker=await Mn.createFromOptions(t,{...n,baseOptions:{...n.baseOptions,delegate:"CPU"}})}this.running=!0,this.loop()}stop(){this.running=!1,cancelAnimationFrame(this.rafId),this.landmarker?.close(),this.landmarker=null,this.stream?.getTracks().forEach(n=>n.stop()),this.stream=null,this.video.srcObject=null,this.handStates.clear(),this.prevMode="idle",this.prevSpinGrab=null,this.prevZoomDist=null,this.overlay.getContext("2d")?.clearRect(0,0,this.overlay.width,this.overlay.height),this.emitStatus({hands:0,mode:"idle"})}processHands(t,n){let i=[],s=new Set;t.forEach((o,a)=>{let l=n[a];s.add(l);let c=_u(o[D1],o[U1]);if(c<1e-6)return;let u=_u(o[mu],o[gu])/c,d={x:1-(o[mu].x+o[gu].x)/2,y:(o[mu].y+o[gu].y)/2},h=this.handStates.get(l);h||(h={pinching:!1,grab:d},this.handStates.set(l,h)),h.pinching&&u>_3?h.pinching=!1:!h.pinching&&u<N1&&(h.pinching=!0),h.grab={x:h.grab.x+(d.x-h.grab.x)*O1,y:h.grab.y+(d.y-h.grab.y)*O1},h.pinching&&i.push(h.grab)});for(let o of this.handStates.keys())s.has(o)||this.handStates.delete(o);let r=i.length>=2?"zoom":i.length===1?"spin":"idle";if(r!==this.prevMode&&(this.prevSpinGrab=null,this.prevZoomDist=null,this.prevMode=r),r==="spin"){let o=i[0];if(this.prevSpinGrab){let a=o.x-this.prevSpinGrab.x,l=o.y-this.prevSpinGrab.y;(Math.abs(a)>1e-4||Math.abs(l)>1e-4)&&this.callbacks.onRotate(a*F1,l*F1)}this.prevSpinGrab=o}else if(r==="zoom"){let o=Math.hypot(i[0].x-i[1].x,i[0].y-i[1].y);if(this.prevZoomDist&&o>1e-4){let a=Math.min(1.18,Math.max(.85,this.prevZoomDist/o));this.callbacks.onZoom(a)}this.prevZoomDist=o}this.emitStatus({hands:t.length,mode:r})}emitStatus(t){(t.hands!==this.lastStatus.hands||t.mode!==this.lastStatus.mode)&&(this.lastStatus=t,this.callbacks.onStatus(t))}drawOverlay(t){let n=this.overlay.getContext("2d");if(!n)return;let{width:i,height:s}=this.overlay;n.clearRect(0,0,i,s);for(let r of t){let o=r[mu],a=r[gu],l=(1-o.x)*i,c=o.y*s,u=(1-a.x)*i,d=a.y*s,h=_u(r[D1],r[U1]),p=h>1e-6&&_u(o,a)/h<N1;n.strokeStyle=p?"#ffcc66":"rgba(255,170,48,0.5)",n.lineWidth=p?2:1,n.beginPath(),n.moveTo(l,c),n.lineTo(u,d),n.stroke(),n.fillStyle=p?"#ffcc66":"rgba(255,170,48,0.7)";for(let[_,M]of[[l,c],[u,d]])n.beginPath(),n.arc(_,M,p?5:3,0,Math.PI*2),n.fill()}}};function _u(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}window.Ultron={createOrbScene:p3,HandTracker:yp};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
