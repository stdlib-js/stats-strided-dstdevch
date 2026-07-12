"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=t(function(w,v){
var h=require('@stdlib/stats-strided-dvariancech/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,i,f){return p(h(e,r,a,i,f))}v.exports=x
});var d=t(function(z,n){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=s();function l(e,r,a,i){return m(e,r,a,i,j(e,i))}n.exports=l
});var o=t(function(A,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=s();R(q,"ndarray",_);c.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),u,y=O(E(__dirname,"./native.js"));b(y)?u=g:u=y;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
