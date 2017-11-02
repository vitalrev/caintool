// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('fabric_sdk.eventhub');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('promesa.core');
fabric_sdk.eventhub.set_peer_addr = (function fabric_sdk$eventhub$set_peer_addr(instance,addr,opts){
return instance.setPeerAddr(addr,opts);
});
fabric_sdk.eventhub.connect_BANG_ = (function fabric_sdk$eventhub$connect_BANG_(instance){
return instance.connect();
});
fabric_sdk.eventhub.disconnect_BANG_ = (function fabric_sdk$eventhub$disconnect_BANG_(instance){
return instance.disconnect();
});
fabric_sdk.eventhub.register_tx_event = (function fabric_sdk$eventhub$register_tx_event(instance,txid,cb){
return instance.registerTxEvent(txid.getTransactionID(),cb);
});
fabric_sdk.eventhub.unregister_tx_event = (function fabric_sdk$eventhub$unregister_tx_event(instance,txid){
return instance.unregisterTxEvent(txid);
});

//# sourceMappingURL=eventhub.js.map