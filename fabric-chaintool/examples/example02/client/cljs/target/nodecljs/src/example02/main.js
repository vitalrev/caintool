// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('example02.main');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.nodejs');
goog.require('cljs.tools.cli');
goog.require('example02.connection');
goog.require('example02.api');
goog.require('promesa.core');
cljs.nodejs.enable_util_print_BANG_.call(null);
example02.main.fs = cljs.nodejs.require.call(null,"fs");
example02.main.pathlib = cljs.nodejs.require.call(null,"path");
example02.main.readyaml = cljs.nodejs.require.call(null,"read-yaml");
example02.main._commands = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["install",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),example02.api.install], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["instantiate",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),example02.api.instantiate,new cljs.core.Keyword(null,"default-args","default-args",2086877675),({"partyA": ({"entity": "A", "value": (100)}), "partyB": ({"entity": "B", "value": (200)})})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["make-payment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),example02.api.make_payment,new cljs.core.Keyword(null,"default-args","default-args",2086877675),({"partySrc": "A", "partyDst": "B", "amount": (10)})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete-account",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),example02.api.delete_account,new cljs.core.Keyword(null,"default-args","default-args",2086877675),({"id": "A"})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["check-balance",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),example02.api.check_balance,new cljs.core.Keyword(null,"default-args","default-args",2086877675),({"id": "A"})], null)], null)], null);
example02.main.commands = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,example02.main._commands);
example02.main.print_commands = (function example02$main$print_commands(){
return cljs.core.print_str.call(null,cljs.core.vec.call(null,cljs.core.keys.call(null,example02.main.commands)));
});
example02.main.options = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"--config CONFIG","path/to/client.config"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-p","--path ID","path/to/chaincode.car ('install' only)"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i","--chaincodeId ID","ChaincodeID",new cljs.core.Keyword(null,"default","default",-1987822328),"mycc"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-v","--version VERSION","Chaincode version",new cljs.core.Keyword(null,"default","default",-1987822328),"1"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"--channelId ID","Channel ID",new cljs.core.Keyword(null,"default","default",-1987822328),"mychannel"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-c","--command CMD",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("One of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(example02.main.print_commands.call(null))].join(''),new cljs.core.Keyword(null,"default","default",-1987822328),"check-balance",new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__8682_SHARP_){
return cljs.core.contains_QMARK_.call(null,example02.main.commands,p1__8682_SHARP_);
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Supported commands: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(example02.main.print_commands.call(null))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-a","--args ARGS","JSON formatted arguments to submit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-h","--help"], null)], null);
example02.main.exit = (function example02$main$exit(var_args){
var args__7654__auto__ = [];
var len__7647__auto___8686 = arguments.length;
var i__7648__auto___8687 = (0);
while(true){
if((i__7648__auto___8687 < len__7647__auto___8686)){
args__7654__auto__.push((arguments[i__7648__auto___8687]));

var G__8688 = (i__7648__auto___8687 + (1));
i__7648__auto___8687 = G__8688;
continue;
} else {
}
break;
}

var argseq__7655__auto__ = ((((2) < args__7654__auto__.length))?(new cljs.core.IndexedSeq(args__7654__auto__.slice((2)),(0),null)):null);
return example02.main.exit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7655__auto__);
});

example02.main.exit.cljs$core$IFn$_invoke$arity$variadic = (function (status,msg,rest){
cljs.core.apply.call(null,cljs.core.println,msg,rest);

return status;
});

example02.main.exit.cljs$lang$maxFixedArity = (2);

example02.main.exit.cljs$lang$applyTo = (function (seq8683){
var G__8684 = cljs.core.first.call(null,seq8683);
var seq8683__$1 = cljs.core.next.call(null,seq8683);
var G__8685 = cljs.core.first.call(null,seq8683__$1);
var seq8683__$2 = cljs.core.next.call(null,seq8683__$1);
return example02.main.exit.cljs$core$IFn$_invoke$arity$variadic(G__8684,G__8685,seq8683__$2);
});

example02.main.prep_usage = (function example02$main$prep_usage(msg){
return clojure.string.join.call(null,"\n",cljs.core.flatten.call(null,msg));
});
example02.main.usage = (function example02$main$usage(options_summary){
return example02.main.prep_usage.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Usage: example02 [options]","","Options Summary:",options_summary,""], null));
});
example02.main.exist_QMARK_ = (function example02$main$exist_QMARK_(path){
try{return example02.main.fs.statSync(path);
}catch (e8690){if((e8690 instanceof Object)){
var e = e8690;
return null;
} else {
throw e8690;

}
}});
example02.main._main = (function example02$main$_main(var_args){
var args__7654__auto__ = [];
var len__7647__auto___8697 = arguments.length;
var i__7648__auto___8698 = (0);
while(true){
if((i__7648__auto___8698 < len__7647__auto___8697)){
args__7654__auto__.push((arguments[i__7648__auto___8698]));

var G__8699 = (i__7648__auto___8698 + (1));
i__7648__auto___8698 = G__8699;
continue;
} else {
}
break;
}

var argseq__7655__auto__ = ((((0) < args__7654__auto__.length))?(new cljs.core.IndexedSeq(args__7654__auto__.slice((0)),(0),null)):null);
return example02.main._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7655__auto__);
});

example02.main._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
example02.api.init.call(null,example02.main.pathlib.resolve(__dirname,"..","protos"));

var map__8693 = cljs.tools.cli.parse_opts.call(null,args,example02.main.options);
var map__8693__$1 = ((((!((map__8693 == null)))?((((map__8693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8693):map__8693);
var options = cljs.core.get.call(null,map__8693__$1,new cljs.core.Keyword(null,"options","options",99638489));
var arguments$ = cljs.core.get.call(null,map__8693__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var errors = cljs.core.get.call(null,map__8693__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var summary = cljs.core.get.call(null,map__8693__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var map__8694 = options;
var map__8694__$1 = ((((!((map__8694 == null)))?((((map__8694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8694):map__8694);
var config = cljs.core.get.call(null,map__8694__$1,new cljs.core.Keyword(null,"config","config",994861415));
var command = cljs.core.get.call(null,map__8694__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var args__$1 = cljs.core.get.call(null,map__8694__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(options))){
return example02.main.exit.call(null,(0),example02.main.usage.call(null,summary));
} else {
if(cljs.core.not_EQ_.call(null,errors,null)){
return example02.main.exit.call(null,(-1),"Error: ",clojure.string.join.call(null,errors));
} else {
if((config == null)){
return example02.main.exit.call(null,(-1),"Error: --config required (see --help)");
} else {
if(cljs.core.not.call(null,example02.main.exist_QMARK_.call(null,config))){
return example02.main.exit.call(null,(-1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error: config \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" not found")].join(''));
} else {
var desc = example02.main.commands.call(null,command);
var _args = ((cljs.core.empty_QMARK_.call(null,arguments$))?new cljs.core.Keyword(null,"default-args","default-args",2086877675).cljs$core$IFn$_invoke$arity$1(desc):JSON.parse(cljs.core.first.call(null,arguments$)));
var _config = cljs.core.js__GT_clj.call(null,example02.main.readyaml.sync(config),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,promesa.core.await$,promesa.core.await$)){
return promesa.core.bind.call(null,example02.connection.connect_BANG_.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"config","config",994861415),_config)),((function (desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (context){
if(cljs.core._EQ_.call(null,promesa.core.await$,cljs.core.__GT_)){
return promesa.core.bind.call(null,options,((function (desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (params){
return promesa.core.promise.call(null,(function (){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Running "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

return promesa.core.then.call(null,promesa.core.catch$.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(desc).call(null,params),((function (desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (p1__8691_SHARP_){
return cljs.core.println.call(null,"Error:",p1__8691_SHARP_);
});})(desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
),((function (desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (){
return example02.connection.disconnect_BANG_.call(null,context);
});})(desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
);
})()
);
});})(desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
);
} else {
var params = cljs.core.merge.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"args","args",1315556576),_args),context);
return promesa.core.promise.call(null,(function (){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Running "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

return promesa.core.then.call(null,promesa.core.catch$.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(desc).call(null,params),((function (params,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (p1__8691_SHARP_){
return cljs.core.println.call(null,"Error:",p1__8691_SHARP_);
});})(params,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
),((function (params,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (){
return example02.connection.disconnect_BANG_.call(null,context);
});})(params,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
);
})()
);
}
});})(desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
);
} else {
var context = promesa.core.await$.call(null,example02.connection.connect_BANG_.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"config","config",994861415),_config)));
if(cljs.core._EQ_.call(null,promesa.core.await$,cljs.core.__GT_)){
return promesa.core.bind.call(null,options,((function (context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (params){
return promesa.core.promise.call(null,(function (){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Running "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

return promesa.core.then.call(null,promesa.core.catch$.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(desc).call(null,params),((function (context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (p1__8691_SHARP_){
return cljs.core.println.call(null,"Error:",p1__8691_SHARP_);
});})(context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
),((function (context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (){
return example02.connection.disconnect_BANG_.call(null,context);
});})(context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
);
})()
);
});})(context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
);
} else {
var params = cljs.core.merge.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"args","args",1315556576),_args),context);
return promesa.core.promise.call(null,(function (){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Running "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

return promesa.core.then.call(null,promesa.core.catch$.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(desc).call(null,params),((function (params,context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (p1__8691_SHARP_){
return cljs.core.println.call(null,"Error:",p1__8691_SHARP_);
});})(params,context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
),((function (params,context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1){
return (function (){
return example02.connection.disconnect_BANG_.call(null,context);
});})(params,context,desc,_args,_config,map__8693,map__8693__$1,options,arguments$,errors,summary,map__8694,map__8694__$1,config,command,args__$1))
);
})()
);
}
}

}
}
}
}
});

example02.main._main.cljs$lang$maxFixedArity = (0);

example02.main._main.cljs$lang$applyTo = (function (seq8692){
return example02.main._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8692));
});

cljs.core._STAR_main_cli_fn_STAR_ = example02.main._main;

//# sourceMappingURL=main.js.map