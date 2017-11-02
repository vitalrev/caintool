// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('example02.protobuf');
goog.require('cljs.core');
goog.require('cljs.nodejs');
example02.protobuf.path = cljs.nodejs.require.call(null,"path");
example02.protobuf.pb = cljs.nodejs.require.call(null,"protobufjs");
example02.protobuf.builder = example02.protobuf.pb.newBuilder();
example02.protobuf.load = (function example02$protobuf$load(dir,name){
var path = example02.protobuf.path.resolve(dir,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".proto")].join(''));
example02.protobuf.pb.loadProtoFile(path,example02.protobuf.builder);

return example02.protobuf.builder.build(name);
});
example02.protobuf.protos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
example02.protobuf.get = (function example02$protobuf$get(name){
return cljs.core.deref.call(null,example02.protobuf.protos).call(null,name);
});
example02.protobuf.init = (function example02$protobuf$init(dir,interfaces){
var entries = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__8226_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8226_SHARP_,example02.protobuf.load.call(null,dir,p1__8226_SHARP_)],null));
}),interfaces));
return cljs.core.swap_BANG_.call(null,example02.protobuf.protos,cljs.core.merge,entries);
});

//# sourceMappingURL=protobuf.js.map