// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('fabric_sdk.user');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('promesa.core');
fabric_sdk.user.user = cljs.nodejs.require.call(null,"fabric-client/lib/User.js");
fabric_sdk.user.new$ = (function fabric_sdk$user$new(username,client){
return (new fabric_sdk.user.user(username,client));
});
fabric_sdk.user.enrolled_QMARK_ = (function fabric_sdk$user$enrolled_QMARK_(user){
var and__6522__auto__ = user;
if(cljs.core.truth_(and__6522__auto__)){
return user.isEnrolled();
} else {
return and__6522__auto__;
}
});
fabric_sdk.user.set_enrollment = (function fabric_sdk$user$set_enrollment(user,enrollment,mspid){
return promesa.core.promise.call(null,(function (resolve__8211__auto__,reject__8212__auto__){
return user.setEnrollment(enrollment.key,enrollment.certificate,mspid).then((function (p1__8209__8213__auto__){

return resolve__8211__auto__.call(null,p1__8209__8213__auto__);
}),(function (p1__8210__8214__auto__){

return reject__8212__auto__.call(null,p1__8210__8214__auto__);
}));
}));
});

//# sourceMappingURL=user.js.map