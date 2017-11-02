// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('fabric_sdk.channel');
goog.require('cljs.core');
goog.require('promesa.core');
fabric_sdk.channel.new$ = (function fabric_sdk$channel$new(client,name){
return client.newChannel(name);
});
fabric_sdk.channel.initialize = (function fabric_sdk$channel$initialize(channel){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return channel.initialize().then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.channel.add_peer = (function fabric_sdk$channel$add_peer(channel,instance){
return channel.addPeer(instance);
});
fabric_sdk.channel.add_orderer = (function fabric_sdk$channel$add_orderer(channel,instance){
return channel.addOrderer(instance);
});
fabric_sdk.channel.set_dev_mode = (function fabric_sdk$channel$set_dev_mode(channel,enabled){
return channel.setDevMode(enabled);
});
fabric_sdk.channel.send_instantiate_proposal = (function fabric_sdk$channel$send_instantiate_proposal(channel,request){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return channel.sendInstantiateProposal(request).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.channel.send_transaction_proposal = (function fabric_sdk$channel$send_transaction_proposal(channel,request){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return channel.sendTransactionProposal(request).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.channel.send_transaction = (function fabric_sdk$channel$send_transaction(channel,request){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return channel.sendTransaction(request).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.channel.query_by_chaincode = (function fabric_sdk$channel$query_by_chaincode(channel,request){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return channel.queryByChaincode(request).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});

//# sourceMappingURL=channel.js.map