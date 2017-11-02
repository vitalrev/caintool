// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('promesa.protocols');
cljs.core.load_file("/Users/vitalijreicherdt/BlockChain/Fabric/B9Lab/chaintool/fabric-chaintool/examples/example02/client/cljs/target/nodecljs/src/bluebird/bluebird.js");
promesa.impl.Promise = Promise.noConflict();
promesa.impl.Promise.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__7704_SHARP_){
return cb.call(null,p1__7704_SHARP_);
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__7705_SHARP_){
return cb.call(null,p1__7705_SHARP_);
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.caught(((function (it__$1){
return (function (p1__7706_SHARP_){
return cb.call(null,p1__7706_SHARP_);
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IState$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
});
(promesa.protocols.IPromise["_"] = true);

(promesa.protocols._map["_"] = (function (it,cb){
return promesa.protocols._map.call(null,promesa.impl.resolved.call(null,it),cb);
}));

(promesa.protocols._bind["_"] = (function (it,cb){
return promesa.protocols._bind.call(null,promesa.impl.resolved.call(null,it),cb);
}));

(promesa.protocols._catch["_"] = (function (it,cb){
return promesa.protocols._catch.call(null,promesa.impl.resolved.call(null,it),cb);
}));
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl.Promise.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl.Promise.reject(v);
});
(promesa.protocols.IPromiseFactory["function"] = true);

(promesa.protocols._promise["function"] = (function (func){
return (new promesa.impl.Promise(func));
}));

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected.call(null,e__$1);
});

(promesa.protocols.IPromiseFactory["object"] = true);

(promesa.protocols._promise["object"] = (function (v){
return promesa.impl.resolved.call(null,v);
}));

(promesa.protocols.IPromiseFactory["number"] = true);

(promesa.protocols._promise["number"] = (function (v){
return promesa.impl.resolved.call(null,v);
}));

(promesa.protocols.IPromiseFactory["boolean"] = true);

(promesa.protocols._promise["boolean"] = (function (v){
return promesa.impl.resolved.call(null,v);
}));

(promesa.protocols.IPromiseFactory["string"] = true);

(promesa.protocols._promise["string"] = (function (v){
return promesa.impl.resolved.call(null,v);
}));

(promesa.protocols.IPromiseFactory["null"] = true);

(promesa.protocols._promise["null"] = (function (v){
return promesa.impl.resolved.call(null,v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#<Promise["),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(promesa.protocols._pending_QMARK_.call(null,p))?"~":(cljs.core.truth_(promesa.protocols._rejected_QMARK_.call(null,p))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("error="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract.call(null,p))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("value="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract.call(null,p))].join('')
))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]>")].join('');
});
promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write.call(null,writer,promesa.impl.promise__GT_str.call(null,p__$1));
});

//# sourceMappingURL=impl.js.map