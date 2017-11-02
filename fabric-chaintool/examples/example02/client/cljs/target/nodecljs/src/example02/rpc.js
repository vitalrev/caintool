// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('example02.rpc');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('fabric_sdk.core');
goog.require('fabric_sdk.channel');
goog.require('fabric_sdk.eventhub');
goog.require('promesa.core');
example02.rpc.create_base_request = (function example02$rpc$create_base_request(p__8571){
var map__8574 = p__8571;
var map__8574__$1 = ((((!((map__8574 == null)))?((((map__8574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8574):map__8574);
var client = cljs.core.get.call(null,map__8574__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var peers = cljs.core.get.call(null,map__8574__$1,new cljs.core.Keyword(null,"peers","peers",2005345354));
var channelId = cljs.core.get.call(null,map__8574__$1,new cljs.core.Keyword(null,"channelId","channelId",2082229448));
var chaincodeId = cljs.core.get.call(null,map__8574__$1,new cljs.core.Keyword(null,"chaincodeId","chaincodeId",437998381));
var txid = fabric_sdk.core.new_txnid.call(null,client);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chaincodeType","chaincodeType",764964438),"car",new cljs.core.Keyword(null,"targets","targets",2014963406),peers,new cljs.core.Keyword(null,"chainId","chainId",1804276883),channelId,new cljs.core.Keyword(null,"chaincodeId","chaincodeId",437998381),chaincodeId,new cljs.core.Keyword(null,"txId","txId",-736861334),txid], null);
});
example02.rpc.create_request = (function example02$rpc$create_request(p__8576){
var map__8579 = p__8576;
var map__8579__$1 = ((((!((map__8579 == null)))?((((map__8579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8579):map__8579);
var options = map__8579__$1;
var func = cljs.core.get.call(null,map__8579__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.call(null,map__8579__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return cljs.core.assoc.call(null,example02.rpc.create_base_request.call(null,options),new cljs.core.Keyword(null,"fcn","fcn",1801641902),func,new cljs.core.Keyword(null,"args","args",1315556576),[args.toBuffer()]);
});
example02.rpc.decodejs = (function example02$rpc$decodejs(js){
return cljs.core.js__GT_clj.call(null,js,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
example02.rpc.verify_results = (function example02$rpc$verify_results(p__8581){
var vec__8589 = p__8581;
var results = cljs.core.nth.call(null,vec__8589,(0),null);
var proposal = cljs.core.nth.call(null,vec__8589,(1),null);
var header = cljs.core.nth.call(null,vec__8589,(2),null);
var response = vec__8589;
var seq__8592_8596 = cljs.core.seq.call(null,results);
var chunk__8593_8597 = null;
var count__8594_8598 = (0);
var i__8595_8599 = (0);
while(true){
if((i__8595_8599 < count__8594_8598)){
var result_8600 = cljs.core._nth.call(null,chunk__8593_8597,i__8595_8599);
var retval_8601 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(example02.rpc.decodejs.call(null,result_8600)));
if(cljs.core._EQ_.call(null,retval_8601,(200))){
} else {
throw result_8600;
}

var G__8602 = seq__8592_8596;
var G__8603 = chunk__8593_8597;
var G__8604 = count__8594_8598;
var G__8605 = (i__8595_8599 + (1));
seq__8592_8596 = G__8602;
chunk__8593_8597 = G__8603;
count__8594_8598 = G__8604;
i__8595_8599 = G__8605;
continue;
} else {
var temp__4657__auto___8606 = cljs.core.seq.call(null,seq__8592_8596);
if(temp__4657__auto___8606){
var seq__8592_8607__$1 = temp__4657__auto___8606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8592_8607__$1)){
var c__7353__auto___8608 = cljs.core.chunk_first.call(null,seq__8592_8607__$1);
var G__8609 = cljs.core.chunk_rest.call(null,seq__8592_8607__$1);
var G__8610 = c__7353__auto___8608;
var G__8611 = cljs.core.count.call(null,c__7353__auto___8608);
var G__8612 = (0);
seq__8592_8596 = G__8609;
chunk__8593_8597 = G__8610;
count__8594_8598 = G__8611;
i__8595_8599 = G__8612;
continue;
} else {
var result_8613 = cljs.core.first.call(null,seq__8592_8607__$1);
var retval_8614 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(example02.rpc.decodejs.call(null,result_8613)));
if(cljs.core._EQ_.call(null,retval_8614,(200))){
} else {
throw result_8613;
}

var G__8615 = cljs.core.next.call(null,seq__8592_8607__$1);
var G__8616 = null;
var G__8617 = (0);
var G__8618 = (0);
seq__8592_8596 = G__8615;
chunk__8593_8597 = G__8616;
count__8594_8598 = G__8617;
i__8595_8599 = G__8618;
continue;
}
} else {
}
}
break;
}

return response;
});
example02.rpc.register_tx_event = (function example02$rpc$register_tx_event(eventhub,txid){
return promesa.core.promise.call(null,(function (resolve,reject){
return fabric_sdk.eventhub.register_tx_event.call(null,eventhub,txid,resolve);
}));
});
example02.rpc.send_transaction = (function example02$rpc$send_transaction(p__8619){
var map__8625 = p__8619;
var map__8625__$1 = ((((!((map__8625 == null)))?((((map__8625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8625):map__8625);
var channel = cljs.core.get.call(null,map__8625__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var response = cljs.core.get.call(null,map__8625__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var vec__8627 = response;
var results = cljs.core.nth.call(null,vec__8627,(0),null);
var proposal = cljs.core.nth.call(null,vec__8627,(1),null);
var header = cljs.core.nth.call(null,vec__8627,(2),null);
return fabric_sdk.channel.send_transaction.call(null,channel,({"proposalResponses": results, "proposal": proposal, "header": header}));
});
example02.rpc.forward_endorsements = (function example02$rpc$forward_endorsements(p__8630){
var map__8633 = p__8630;
var map__8633__$1 = ((((!((map__8633 == null)))?((((map__8633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8633):map__8633);
var options = map__8633__$1;
var eventhub = cljs.core.get.call(null,map__8633__$1,new cljs.core.Keyword(null,"eventhub","eventhub",-90859363));
var request = cljs.core.get.call(null,map__8633__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var tmo = cljs.core.get.call(null,map__8633__$1,new cljs.core.Keyword(null,"tmo","tmo",1205376239));
var txid = new cljs.core.Keyword(null,"txId","txId",-736861334).cljs$core$IFn$_invoke$arity$1(example02.rpc.decodejs.call(null,request));
return promesa.core.timeout.call(null,promesa.core.all.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example02.rpc.register_tx_event.call(null,eventhub,txid),example02.rpc.send_transaction.call(null,options)], null)),tmo);
});
example02.rpc.install = (function example02$rpc$install(p__8635){
var map__8638 = p__8635;
var map__8638__$1 = ((((!((map__8638 == null)))?((((map__8638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8638):map__8638);
var options = map__8638__$1;
var client = cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var channel = cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var path = cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var version = cljs.core.get.call(null,map__8638__$1,new cljs.core.Keyword(null,"version","version",425292698));
var request = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,example02.rpc.create_base_request.call(null,options),new cljs.core.Keyword(null,"chaincodeVersion","chaincodeVersion",936094029),version,new cljs.core.Keyword(null,"chaincodePath","chaincodePath",434535783),path));
if(cljs.core.not.call(null,path)){
fabric_sdk.channel.set_dev_mode.call(null,channel,true);
} else {
}

return promesa.core.then.call(null,fabric_sdk.core.install_chaincode.call(null,client,request),example02.rpc.verify_results);
});
example02.rpc.instantiate = (function example02$rpc$instantiate(p__8641){
var map__8644 = p__8641;
var map__8644__$1 = ((((!((map__8644 == null)))?((((map__8644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8644):map__8644);
var options = map__8644__$1;
var client = cljs.core.get.call(null,map__8644__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var channel = cljs.core.get.call(null,map__8644__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var version = cljs.core.get.call(null,map__8644__$1,new cljs.core.Keyword(null,"version","version",425292698));
var request = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,example02.rpc.create_request.call(null,options),new cljs.core.Keyword(null,"chaincodeVersion","chaincodeVersion",936094029),version));
return promesa.core.then.call(null,promesa.core.then.call(null,fabric_sdk.channel.send_instantiate_proposal.call(null,channel,request),example02.rpc.verify_results),((function (request,map__8644,map__8644__$1,options,client,channel,version){
return (function (p1__8640_SHARP_){
return example02.rpc.forward_endorsements.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"response","response",-1068424192),p1__8640_SHARP_,new cljs.core.Keyword(null,"tmo","tmo",1205376239),(120000)));
});})(request,map__8644,map__8644__$1,options,client,channel,version))
);
});
example02.rpc.transaction = (function example02$rpc$transaction(p__8647){
var map__8650 = p__8647;
var map__8650__$1 = ((((!((map__8650 == null)))?((((map__8650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8650):map__8650);
var options = map__8650__$1;
var client = cljs.core.get.call(null,map__8650__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var channel = cljs.core.get.call(null,map__8650__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var request = cljs.core.clj__GT_js.call(null,example02.rpc.create_request.call(null,options));
return promesa.core.then.call(null,promesa.core.then.call(null,fabric_sdk.channel.send_transaction_proposal.call(null,channel,request),example02.rpc.verify_results),((function (request,map__8650,map__8650__$1,options,client,channel){
return (function (p1__8646_SHARP_){
return example02.rpc.forward_endorsements.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"response","response",-1068424192),p1__8646_SHARP_,new cljs.core.Keyword(null,"tmo","tmo",1205376239),(30000)));
});})(request,map__8650,map__8650__$1,options,client,channel))
);
});
example02.rpc.query = (function example02$rpc$query(p__8652){
var map__8655 = p__8652;
var map__8655__$1 = ((((!((map__8655 == null)))?((((map__8655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8655):map__8655);
var options = map__8655__$1;
var client = cljs.core.get.call(null,map__8655__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var channel = cljs.core.get.call(null,map__8655__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var request = cljs.core.clj__GT_js.call(null,example02.rpc.create_request.call(null,options));
return fabric_sdk.channel.query_by_chaincode.call(null,channel,request);
});

//# sourceMappingURL=rpc.js.map