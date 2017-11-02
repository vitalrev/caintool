// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('example02.connection');
goog.require('cljs.core');
goog.require('fabric_sdk.core');
goog.require('fabric_sdk.channel');
goog.require('fabric_sdk.eventhub');
goog.require('fabric_sdk.user');
goog.require('promesa.core');
example02.connection.set_state_store = (function example02$connection$set_state_store(client,path){
return promesa.core.then.call(null,fabric_sdk.core.new_default_kv_store.call(null,path),(function (p1__8233_SHARP_){
return fabric_sdk.core.set_state_store.call(null,client,p1__8233_SHARP_);
}));
});
example02.connection.create_user = (function example02$connection$create_user(client,identity){
var config = ({"username": new cljs.core.Keyword(null,"principal","principal",1371406427).cljs$core$IFn$_invoke$arity$1(identity), "mspid": new cljs.core.Keyword(null,"mspid","mspid",-691347067).cljs$core$IFn$_invoke$arity$1(identity), "cryptoContent": ({"privateKeyPEM": new cljs.core.Keyword(null,"privatekey","privatekey",300229646).cljs$core$IFn$_invoke$arity$1(identity), "signedCertPEM": new cljs.core.Keyword(null,"certificate","certificate",-1722392944).cljs$core$IFn$_invoke$arity$1(identity)})});
return fabric_sdk.core.create_user.call(null,client,config);
});
example02.connection.connect_orderer = (function example02$connection$connect_orderer(client,channel,config){
var map__8236 = new cljs.core.Keyword(null,"orderer","orderer",558149817).cljs$core$IFn$_invoke$arity$1(config);
var map__8236__$1 = ((((!((map__8236 == null)))?((((map__8236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8236):map__8236);
var ca = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"ca","ca",-454432663));
var hostname = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"hostname","hostname",2105669933));
var url = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"url","url",276297046));
var orderer = fabric_sdk.core.new_orderer.call(null,client,url,({"pem": ca, "ssl-target-name-override": hostname}));
fabric_sdk.channel.add_orderer.call(null,channel,orderer);

return orderer;
});
example02.connection.connect_peer = (function example02$connection$connect_peer(client,channel,config,peercfg){
var ca = new cljs.core.Keyword(null,"certificate","certificate",-1722392944).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ca","ca",-454432663).cljs$core$IFn$_invoke$arity$1(config));
var map__8240 = peercfg;
var map__8240__$1 = ((((!((map__8240 == null)))?((((map__8240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8240):map__8240);
var api = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var hostname = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"hostname","hostname",2105669933));
var peer = fabric_sdk.core.new_peer.call(null,client,api,({"pem": ca, "ssl-target-name-override": hostname, "request-timeout": (120000)}));
fabric_sdk.channel.add_peer.call(null,channel,peer);

return peer;
});
example02.connection.connect_eventhub = (function example02$connection$connect_eventhub(client,channel,config){
var ca = new cljs.core.Keyword(null,"certificate","certificate",-1722392944).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ca","ca",-454432663).cljs$core$IFn$_invoke$arity$1(config));
var map__8244 = cljs.core.first.call(null,new cljs.core.Keyword(null,"peers","peers",2005345354).cljs$core$IFn$_invoke$arity$1(config));
var map__8244__$1 = ((((!((map__8244 == null)))?((((map__8244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8244):map__8244);
var events = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var hostname = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"hostname","hostname",2105669933));
var eventhub = fabric_sdk.core.new_eventhub.call(null,client);
fabric_sdk.eventhub.set_peer_addr.call(null,eventhub,events,({"pem": ca, "ssl-target-name-override": hostname}));

fabric_sdk.eventhub.connect_BANG_.call(null,eventhub);

return eventhub;
});
example02.connection.connect_BANG_ = (function example02$connection$connect_BANG_(p__8247){
var map__8250 = p__8247;
var map__8250__$1 = ((((!((map__8250 == null)))?((((map__8250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8250):map__8250);
var options = map__8250__$1;
var config = cljs.core.get.call(null,map__8250__$1,new cljs.core.Keyword(null,"config","config",994861415));
var id = cljs.core.get.call(null,map__8250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var channelId = cljs.core.get.call(null,map__8250__$1,new cljs.core.Keyword(null,"channelId","channelId",2082229448));
var client = fabric_sdk.core.new_client.call(null);
var identity = new cljs.core.Keyword(null,"identity","identity",1647396035).cljs$core$IFn$_invoke$arity$1(config);
return promesa.core.then.call(null,promesa.core.then.call(null,example02.connection.set_state_store.call(null,client,".hfc-kvstore"),((function (client,identity,map__8250,map__8250__$1,options,config,id,channelId){
return (function (){
return example02.connection.create_user.call(null,client,identity);
});})(client,identity,map__8250,map__8250__$1,options,config,id,channelId))
),((function (client,identity,map__8250,map__8250__$1,options,config,id,channelId){
return (function (user){
var channel = fabric_sdk.channel.new$.call(null,client,channelId);
var orderer = example02.connection.connect_orderer.call(null,client,channel,config);
var peers = cljs.core.map.call(null,((function (channel,orderer,client,identity,map__8250,map__8250__$1,options,config,id,channelId){
return (function (p1__8246_SHARP_){
return example02.connection.connect_peer.call(null,client,channel,config,p1__8246_SHARP_);
});})(channel,orderer,client,identity,map__8250,map__8250__$1,options,config,id,channelId))
,new cljs.core.Keyword(null,"peers","peers",2005345354).cljs$core$IFn$_invoke$arity$1(config));
var eventhub = example02.connection.connect_eventhub.call(null,client,channel,config);
return promesa.core.then.call(null,fabric_sdk.channel.initialize.call(null,channel),((function (channel,orderer,peers,eventhub,client,identity,map__8250,map__8250__$1,options,config,id,channelId){
return (function (){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"client","client",-1323448117),client,new cljs.core.Keyword(null,"channel","channel",734187692),channel,new cljs.core.Keyword(null,"orderer","orderer",558149817),orderer,new cljs.core.Keyword(null,"peers","peers",2005345354),peers,new cljs.core.Keyword(null,"eventhub","eventhub",-90859363),eventhub,new cljs.core.Keyword(null,"user","user",1532431356),user], null);
});})(channel,orderer,peers,eventhub,client,identity,map__8250,map__8250__$1,options,config,id,channelId))
);
});})(client,identity,map__8250,map__8250__$1,options,config,id,channelId))
);
});
example02.connection.disconnect_BANG_ = (function example02$connection$disconnect_BANG_(p__8252){
var map__8255 = p__8252;
var map__8255__$1 = ((((!((map__8255 == null)))?((((map__8255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8255):map__8255);
var eventhub = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"eventhub","eventhub",-90859363));
return fabric_sdk.eventhub.disconnect_BANG_.call(null,eventhub);
});

//# sourceMappingURL=connection.js.map