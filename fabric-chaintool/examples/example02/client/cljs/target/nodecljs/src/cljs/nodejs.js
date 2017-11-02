// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7772__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7773__i = 0, G__7773__a = new Array(arguments.length -  0);
while (G__7773__i < G__7773__a.length) {G__7773__a[G__7773__i] = arguments[G__7773__i + 0]; ++G__7773__i;}
  args = new cljs.core.IndexedSeq(G__7773__a,0,null);
} 
return G__7772__delegate.call(this,args);};
G__7772.cljs$lang$maxFixedArity = 0;
G__7772.cljs$lang$applyTo = (function (arglist__7774){
var args = cljs.core.seq(arglist__7774);
return G__7772__delegate(args);
});
G__7772.cljs$core$IFn$_invoke$arity$variadic = G__7772__delegate;
return G__7772;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7775__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7776__i = 0, G__7776__a = new Array(arguments.length -  0);
while (G__7776__i < G__7776__a.length) {G__7776__a[G__7776__i] = arguments[G__7776__i + 0]; ++G__7776__i;}
  args = new cljs.core.IndexedSeq(G__7776__a,0,null);
} 
return G__7775__delegate.call(this,args);};
G__7775.cljs$lang$maxFixedArity = 0;
G__7775.cljs$lang$applyTo = (function (arglist__7777){
var args = cljs.core.seq(arglist__7777);
return G__7775__delegate(args);
});
G__7775.cljs$core$IFn$_invoke$arity$variadic = G__7775__delegate;
return G__7775;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map