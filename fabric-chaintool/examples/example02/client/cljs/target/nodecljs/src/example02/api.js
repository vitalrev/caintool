// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('example02.api');
goog.require('cljs.core');
goog.require('example02.protobuf');
goog.require('example02.rpc');
goog.require('promesa.core');
example02.api.intf_name = "org.hyperledger.chaincode.example02";
example02.api.all_interfaces = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["appinit",example02.api.intf_name], null);
example02.api.init = (function example02$api$init(dir){
return example02.protobuf.init.call(null,dir,example02.api.all_interfaces);
});
example02.api.install = (function example02$api$install(context){
return promesa.core.then.call(null,example02.rpc.install.call(null,context),(function (){
return cljs.core.println.call(null,"Success!");
}));
});
example02.api.instantiate = (function example02$api$instantiate(p__8659){
var map__8662 = p__8659;
var map__8662__$1 = ((((!((map__8662 == null)))?((((map__8662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8662):map__8662);
var context = map__8662__$1;
var args = cljs.core.get.call(null,map__8662__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var proto = example02.protobuf.get.call(null,"appinit");
return promesa.core.then.call(null,example02.rpc.instantiate.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"func","func",-238706040),"init",new cljs.core.Keyword(null,"args","args",1315556576),(new proto.Init(args)))),((function (proto,map__8662,map__8662__$1,context,args){
return (function (){
return cljs.core.println.call(null,"Success!");
});})(proto,map__8662,map__8662__$1,context,args))
);
});
example02.api.make_payment = (function example02$api$make_payment(p__8664){
var map__8667 = p__8664;
var map__8667__$1 = ((((!((map__8667 == null)))?((((map__8667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8667):map__8667);
var context = map__8667__$1;
var args = cljs.core.get.call(null,map__8667__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var proto = example02.protobuf.get.call(null,example02.api.intf_name);
return promesa.core.then.call(null,example02.rpc.transaction.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"func","func",-238706040),"org.hyperledger.chaincode.example02/fcn/1",new cljs.core.Keyword(null,"args","args",1315556576),(new proto.PaymentParams(args)))),((function (proto,map__8667,map__8667__$1,context,args){
return (function (){
return cljs.core.println.call(null,"Success!");
});})(proto,map__8667,map__8667__$1,context,args))
);
});
example02.api.delete_account = (function example02$api$delete_account(p__8669){
var map__8672 = p__8669;
var map__8672__$1 = ((((!((map__8672 == null)))?((((map__8672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8672):map__8672);
var context = map__8672__$1;
var args = cljs.core.get.call(null,map__8672__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var proto = example02.protobuf.get.call(null,example02.api.intf_name);
return promesa.core.then.call(null,example02.rpc.transaction.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"func","func",-238706040),"org.hyperledger.chaincode.example02/fcn/2",new cljs.core.Keyword(null,"args","args",1315556576),(new proto.Entity(args)))),((function (proto,map__8672,map__8672__$1,context,args){
return (function (){
return cljs.core.println.call(null,"Success!");
});})(proto,map__8672,map__8672__$1,context,args))
);
});
example02.api.check_balance = (function example02$api$check_balance(p__8675){
var map__8678 = p__8675;
var map__8678__$1 = ((((!((map__8678 == null)))?((((map__8678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8678):map__8678);
var context = map__8678__$1;
var args = cljs.core.get.call(null,map__8678__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var proto = example02.protobuf.get.call(null,example02.api.intf_name);
return promesa.core.then.call(null,example02.rpc.query.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"func","func",-238706040),"org.hyperledger.chaincode.example02/fcn/3",new cljs.core.Keyword(null,"args","args",1315556576),(new proto.Entity(args)))),((function (proto,map__8678,map__8678__$1,context,args){
return (function (p1__8674_SHARP_){
return cljs.core.println.call(null,"Success: Balance =",proto.BalanceResult.decode64.call(null,cljs.core.first.call(null,p1__8674_SHARP_)).balance);
});})(proto,map__8678,map__8678__$1,context,args))
);
});

//# sourceMappingURL=api.js.map