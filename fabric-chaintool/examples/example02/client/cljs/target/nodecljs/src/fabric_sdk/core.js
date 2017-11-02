// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('fabric_sdk.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('promesa.core');
fabric_sdk.core.hfc = cljs.nodejs.require.call(null,"fabric-client");
fabric_sdk.core.new_client = (function fabric_sdk$core$new_client(){
return (new fabric_sdk.core.hfc());
});
fabric_sdk.core.new_default_kv_store = (function fabric_sdk$core$new_default_kv_store(path){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return fabric_sdk.core.hfc.newDefaultKeyValueStore(({"path": path})).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.core.set_state_store = (function fabric_sdk$core$set_state_store(client,store){
return client.setStateStore(store);
});
fabric_sdk.core.install_chaincode = (function fabric_sdk$core$install_chaincode(client,request){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return client.installChaincode(request).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.core.get_user_context = (function fabric_sdk$core$get_user_context(client,username){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return client.getUserContext(username).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.core.set_user_context = (function fabric_sdk$core$set_user_context(client,user){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return client.setUserContext(user).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.core.create_user = (function fabric_sdk$core$create_user(client,spec){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return client.createUser(spec).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});
fabric_sdk.core.new_orderer = (function fabric_sdk$core$new_orderer(client,url,opts){
return client.newOrderer(url,opts);
});
fabric_sdk.core.new_peer = (function fabric_sdk$core$new_peer(client,url,opts){
return client.newPeer(url,opts);
});
fabric_sdk.core.new_eventhub = (function fabric_sdk$core$new_eventhub(client){
return client.newEventHub();
});
fabric_sdk.core.new_txnid = (function fabric_sdk$core$new_txnid(client){
return client.newTransactionID();
});

//# sourceMappingURL=core.js.map