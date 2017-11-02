// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('cljs.tools.cli');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string.format');
goog.require('goog.string');
/**
 * Reduce arguments sequence into [opt-type opt ?optarg?] vectors and a vector
 *   of remaining arguments. Returns as [option-tokens remaining-args].
 * 
 *   Expands clumped short options like "-abc" into:
 *   [[:short-opt "-a"] [:short-opt "-b"] [:short-opt "-c"]]
 * 
 *   If "-b" were in the set of options that require arguments, "-abc" would
 *   then be interpreted as: [[:short-opt "-a"] [:short-opt "-b" "c"]]
 * 
 *   Long options with `=` are always parsed as option + optarg, even if nothing
 *   follows the `=` sign.
 * 
 *   If the :in-order flag is true, the first non-option, non-optarg argument
 *   stops options processing. This is useful for handling subcommand options.
 */
cljs.tools.cli.tokenize_args = (function cljs$tools$cli$tokenize_args(var_args){
var args__7654__auto__ = [];
var len__7647__auto___8344 = arguments.length;
var i__7648__auto___8345 = (0);
while(true){
if((i__7648__auto___8345 < len__7647__auto___8344)){
args__7654__auto__.push((arguments[i__7648__auto___8345]));

var G__8346 = (i__7648__auto___8345 + (1));
i__7648__auto___8345 = G__8346;
continue;
} else {
}
break;
}

var argseq__7655__auto__ = ((((2) < args__7654__auto__.length))?(new cljs.core.IndexedSeq(args__7654__auto__.slice((2)),(0),null)):null);
return cljs.tools.cli.tokenize_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7655__auto__);
});

cljs.tools.cli.tokenize_args.cljs$core$IFn$_invoke$arity$variadic = (function (required_set,args,options){
var map__8313 = cljs.core.apply.call(null,cljs.core.hash_map,options);
var map__8313__$1 = ((((!((map__8313 == null)))?((((map__8313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8313):map__8313);
var in_order = cljs.core.get.call(null,map__8313__$1,new cljs.core.Keyword(null,"in-order","in-order",-1605651796));
var opts = cljs.core.PersistentVector.EMPTY;
var argv = cljs.core.PersistentVector.EMPTY;
var G__8318 = args;
var vec__8319 = G__8318;
var seq__8320 = cljs.core.seq.call(null,vec__8319);
var first__8321 = cljs.core.first.call(null,seq__8320);
var seq__8320__$1 = cljs.core.next.call(null,seq__8320);
var car = first__8321;
var cdr = seq__8320__$1;
var opts__$1 = opts;
var argv__$1 = argv;
var G__8318__$1 = G__8318;
while(true){
var opts__$2 = opts__$1;
var argv__$2 = argv__$1;
var vec__8322 = G__8318__$1;
var seq__8323 = cljs.core.seq.call(null,vec__8322);
var first__8324 = cljs.core.first.call(null,seq__8323);
var seq__8323__$1 = cljs.core.next.call(null,seq__8323);
var car__$1 = first__8324;
var cdr__$1 = seq__8323__$1;
if(cljs.core.truth_(car__$1)){
var pred__8325 = cljs.core.re_seq;
var expr__8326 = car__$1;
if(cljs.core.truth_(pred__8325.call(null,/^--$/,expr__8326))){
var G__8347 = opts__$2;
var G__8348 = cljs.core.into.call(null,argv__$2,cdr__$1);
var G__8349 = cljs.core.PersistentVector.EMPTY;
opts__$1 = G__8347;
argv__$1 = G__8348;
G__8318__$1 = G__8349;
continue;
} else {
if(cljs.core.truth_(pred__8325.call(null,/^--\S+=/,expr__8326))){
var G__8350 = cljs.core.conj.call(null,opts__$2,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long-opt","long-opt",-386094553)], null),clojure.string.split.call(null,car__$1,/=/,(2))));
var G__8351 = argv__$2;
var G__8352 = cdr__$1;
opts__$1 = G__8350;
argv__$1 = G__8351;
G__8318__$1 = G__8352;
continue;
} else {
if(cljs.core.truth_(pred__8325.call(null,/^--/,expr__8326))){
var vec__8328 = ((cljs.core.contains_QMARK_.call(null,required_set,car__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cdr__$1),cljs.core.rest.call(null,cdr__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cdr__$1], null));
var optarg = cljs.core.nth.call(null,vec__8328,(0),null);
var cdr__$2 = cljs.core.nth.call(null,vec__8328,(1),null);
var G__8353 = cljs.core.conj.call(null,opts__$2,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long-opt","long-opt",-386094553),car__$1], null),(cljs.core.truth_(optarg)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [optarg], null):cljs.core.PersistentVector.EMPTY)));
var G__8354 = argv__$2;
var G__8355 = cdr__$2;
opts__$1 = G__8353;
argv__$1 = G__8354;
G__8318__$1 = G__8355;
continue;
} else {
if(cljs.core.truth_(pred__8325.call(null,/^-./,expr__8326))){
var vec__8331 = (function (){var os = cljs.core.PersistentVector.EMPTY;
var G__8337 = cljs.core.rest.call(null,car__$1);
var vec__8338 = G__8337;
var seq__8339 = cljs.core.seq.call(null,vec__8338);
var first__8340 = cljs.core.first.call(null,seq__8339);
var seq__8339__$1 = cljs.core.next.call(null,seq__8339);
var c = first__8340;
var cs = seq__8339__$1;
var os__$1 = os;
var G__8337__$1 = G__8337;
while(true){
var os__$2 = os__$1;
var vec__8341 = G__8337__$1;
var seq__8342 = cljs.core.seq.call(null,vec__8341);
var first__8343 = cljs.core.first.call(null,seq__8342);
var seq__8342__$1 = cljs.core.next.call(null,seq__8342);
var c__$1 = first__8343;
var cs__$1 = seq__8342__$1;
var o = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c__$1)].join('');
if(cljs.core.contains_QMARK_.call(null,required_set,o)){
if(cljs.core.seq.call(null,cs__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,os__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),o,clojure.string.join.call(null,cs__$1)], null)),cdr__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,os__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),o,cljs.core.first.call(null,cdr__$1)], null)),cljs.core.rest.call(null,cdr__$1)], null);
}
} else {
if(cljs.core.seq.call(null,cs__$1)){
var G__8356 = cljs.core.conj.call(null,os__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),o], null));
var G__8357 = cs__$1;
os__$1 = G__8356;
G__8337__$1 = G__8357;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,os__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),o], null)),cdr__$1], null);
}
}
break;
}
})();
var os = cljs.core.nth.call(null,vec__8331,(0),null);
var cdr__$2 = cljs.core.nth.call(null,vec__8331,(1),null);
var G__8358 = cljs.core.into.call(null,opts__$2,os);
var G__8359 = argv__$2;
var G__8360 = cdr__$2;
opts__$1 = G__8358;
argv__$1 = G__8359;
G__8318__$1 = G__8360;
continue;
} else {
if(cljs.core.truth_(in_order)){
var G__8361 = opts__$2;
var G__8362 = cljs.core.into.call(null,argv__$2,cljs.core.cons.call(null,car__$1,cdr__$1));
var G__8363 = cljs.core.PersistentVector.EMPTY;
opts__$1 = G__8361;
argv__$1 = G__8362;
G__8318__$1 = G__8363;
continue;
} else {
var G__8364 = opts__$2;
var G__8365 = cljs.core.conj.call(null,argv__$2,car__$1);
var G__8366 = cdr__$1;
opts__$1 = G__8364;
argv__$1 = G__8365;
G__8318__$1 = G__8366;
continue;
}
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts__$2,argv__$2], null);
}
break;
}
});

cljs.tools.cli.tokenize_args.cljs$lang$maxFixedArity = (2);

cljs.tools.cli.tokenize_args.cljs$lang$applyTo = (function (seq8310){
var G__8311 = cljs.core.first.call(null,seq8310);
var seq8310__$1 = cljs.core.next.call(null,seq8310);
var G__8312 = cljs.core.first.call(null,seq8310__$1);
var seq8310__$2 = cljs.core.next.call(null,seq8310__$1);
return cljs.tools.cli.tokenize_args.cljs$core$IFn$_invoke$arity$variadic(G__8311,G__8312,seq8310__$2);
});

cljs.tools.cli.spec_keys = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),new cljs.core.Keyword(null,"long-opt","long-opt",-386094553),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default-desc","default-desc",324577013),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),new cljs.core.Keyword(null,"assoc-fn","assoc-fn",418597603),new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),new cljs.core.Keyword(null,"validate-msg","validate-msg",-1415932287),new cljs.core.Keyword(null,"missing","missing",362507769)], null);
/**
 * Select only known spec entries from map and warn the user about unknown
 * entries at development time.
 */
cljs.tools.cli.select_spec_keys = (function cljs$tools$cli$select_spec_keys(map){
var unknown_keys_8367 = cljs.core.keys.call(null,cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.tools.cli.spec_keys));
if(cljs.core.seq.call(null,unknown_keys_8367)){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The following options to parse-opts are unrecognized: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",unknown_keys_8367))].join(''));
} else {
}

return cljs.core.select_keys.call(null,map,cljs.tools.cli.spec_keys);
});
cljs.tools.cli.compile_spec = (function cljs$tools$cli$compile_spec(spec){
var sopt_lopt_desc = cljs.core.take_while.call(null,(function (p1__8368_SHARP_){
return (typeof p1__8368_SHARP_ === 'string') || ((p1__8368_SHARP_ == null));
}),spec);
var spec_map = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.drop.call(null,cljs.core.count.call(null,sopt_lopt_desc),spec));
var vec__8378 = sopt_lopt_desc;
var short_opt = cljs.core.nth.call(null,vec__8378,(0),null);
var long_opt = cljs.core.nth.call(null,vec__8378,(1),null);
var desc = cljs.core.nth.call(null,vec__8378,(2),null);
var long_opt__$1 = (function (){var or__6534__auto__ = long_opt;
if(cljs.core.truth_(or__6534__auto__)){
return or__6534__auto__;
} else {
return new cljs.core.Keyword(null,"long-opt","long-opt",-386094553).cljs$core$IFn$_invoke$arity$1(spec_map);
}
})();
var vec__8381 = (cljs.core.truth_(long_opt__$1)?cljs.core.rest.call(null,cljs.core.re_find.call(null,/^(--[^ =]+)(?:[ =](.*))?/,long_opt__$1)):null);
var long_opt__$2 = cljs.core.nth.call(null,vec__8381,(0),null);
var req = cljs.core.nth.call(null,vec__8381,(1),null);
var id = (cljs.core.truth_(long_opt__$2)?cljs.core.keyword.call(null,cljs.core.subs.call(null,long_opt__$2,(2))):null);
var validate = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(spec_map);
var vec__8384 = ((cljs.core.seq.call(null,validate))?cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),(2),cljs.core.repeat.call(null,null),validate)):null);
var validate_fn = cljs.core.nth.call(null,vec__8384,(0),null);
var validate_msg = cljs.core.nth.call(null,vec__8384,(1),null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),short_opt,new cljs.core.Keyword(null,"long-opt","long-opt",-386094553),long_opt__$2,new cljs.core.Keyword(null,"required","required",1807647006),req,new cljs.core.Keyword(null,"desc","desc",2093485764),desc,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),validate_fn,new cljs.core.Keyword(null,"validate-msg","validate-msg",-1415932287),validate_msg], null),cljs.tools.cli.select_spec_keys.call(null,cljs.core.dissoc.call(null,spec_map,new cljs.core.Keyword(null,"validate","validate",-201300827))));
});
cljs.tools.cli.distinct_QMARK__STAR_ = (function cljs$tools$cli$distinct_QMARK__STAR_(coll){
if(cljs.core.seq.call(null,coll)){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
} else {
return true;
}
});
cljs.tools.cli.wrap_val = (function cljs$tools$cli$wrap_val(map,key){
if(cljs.core.contains_QMARK_.call(null,map,key)){
return cljs.core.update_in.call(null,map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),(function (p1__8387_SHARP_){
if((p1__8387_SHARP_ == null)){
return null;
} else {
if(cljs.core.coll_QMARK_.call(null,p1__8387_SHARP_)){
return p1__8387_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8387_SHARP_], null);

}
}
}));
} else {
return map;
}
});
/**
 * Map a sequence of option specification vectors to a sequence of:
 * 
 *   {:id           Keyword  ; :server
 * :short-opt    String   ; "-s"
 * :long-opt     String   ; "--server"
 * :required     String   ; "HOSTNAME"
 * :desc         String   ; "Remote server"
 * :default      Object   ; #<Inet4Address example.com/93.184.216.119>
 * :default-desc String   ; "example.com"
 * :parse-fn     IFn      ; #(InetAddress/getByName %)
 * :assoc-fn     IFn      ; assoc
 * :validate-fn  [IFn]    ; [#(instance? Inet4Address %)
 *                        ;  #(not (.isMulticastAddress %)]
 * :validate-msg [String] ; ["Must be an IPv4 host"
 *                        ;  "Must not be a multicast address"]
 * :missing      String   ; "server must be specified"
 * }
 * 
 *   :id defaults to the keywordized name of long-opt without leading dashes, but
 *   may be overridden in the option spec.
 * 
 *   The option spec entry `:validate [fn msg ...]` desugars into the two vector
 *   entries :validate-fn and :validate-msg. Multiple pairs of validation
 *   functions and error messages may be provided.
 * 
 *   A :default entry will not be included in the compiled spec unless specified.
 * 
 *   An option spec may also be passed as a map containing the entries above,
 *   in which case that subset of the map is transferred directly to the result
 *   vector.
 * 
 *   An assertion error is thrown if any :id values are unset, or if there exist
 *   any duplicate :id, :short-opt, or :long-opt values.
 */
cljs.tools.cli.compile_option_specs = (function cljs$tools$cli$compile_option_specs(option_specs){
var _PERCENT_ = cljs.core.map.call(null,(function (spec){
return cljs.tools.cli.wrap_val.call(null,cljs.tools.cli.wrap_val.call(null,((cljs.core.map_QMARK_.call(null,spec))?cljs.tools.cli.select_spec_keys.call(null,spec):cljs.tools.cli.compile_spec.call(null,spec)),new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944)),new cljs.core.Keyword(null,"validate-msg","validate-msg",-1415932287));
}),option_specs);
if(cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.identity,new cljs.core.Keyword(null,"id","id",-1388402092)),_PERCENT_)){
} else {
throw (new Error("Assert failed: (every? (comp identity :id) %)"));
}

if(cljs.core.truth_(cljs.tools.cli.distinct_QMARK__STAR_.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),_PERCENT_))))){
} else {
throw (new Error("Assert failed: (distinct?* (map :id (filter :default %)))"));
}

if(cljs.core.truth_(cljs.tools.cli.distinct_QMARK__STAR_.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),_PERCENT_))))){
} else {
throw (new Error("Assert failed: (distinct?* (remove nil? (map :short-opt %)))"));
}

if(cljs.core.truth_(cljs.tools.cli.distinct_QMARK__STAR_.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"long-opt","long-opt",-386094553),_PERCENT_))))){
} else {
throw (new Error("Assert failed: (distinct?* (remove nil? (map :long-opt %)))"));
}

return _PERCENT_;
});
cljs.tools.cli.default_option_map = (function cljs$tools$cli$default_option_map(specs){
return cljs.core.reduce.call(null,(function (m,s){
if(cljs.core.contains_QMARK_.call(null,s,new cljs.core.Keyword(null,"default","default",-1987822328))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(s));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,specs);
});
/**
 * Given specs, returns a map of spec id to error message if missing.
 */
cljs.tools.cli.missing_errors = (function cljs$tools$cli$missing_errors(specs){
return cljs.core.reduce.call(null,(function (m,s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(s));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,specs);
});
cljs.tools.cli.find_spec = (function cljs$tools$cli$find_spec(specs,opt_type,opt){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8388_SHARP_){
return cljs.core._EQ_.call(null,opt,opt_type.call(null,p1__8388_SHARP_));
}),specs));
});
cljs.tools.cli.pr_join = (function cljs$tools$cli$pr_join(var_args){
var args__7654__auto__ = [];
var len__7647__auto___8390 = arguments.length;
var i__7648__auto___8391 = (0);
while(true){
if((i__7648__auto___8391 < len__7647__auto___8390)){
args__7654__auto__.push((arguments[i__7648__auto___8391]));

var G__8392 = (i__7648__auto___8391 + (1));
i__7648__auto___8391 = G__8392;
continue;
} else {
}
break;
}

var argseq__7655__auto__ = ((((0) < args__7654__auto__.length))?(new cljs.core.IndexedSeq(args__7654__auto__.slice((0)),(0),null)):null);
return cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic(argseq__7655__auto__);
});

cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.pr_str.call(null,clojure.string.join.call(null," ",xs));
});

cljs.tools.cli.pr_join.cljs$lang$maxFixedArity = (0);

cljs.tools.cli.pr_join.cljs$lang$applyTo = (function (seq8389){
return cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8389));
});

cljs.tools.cli.missing_required_error = (function cljs$tools$cli$missing_required_error(opt,example_required){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing required argument for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.cli.pr_join.call(null,opt,example_required))].join('');
});
cljs.tools.cli.parse_error = (function cljs$tools$cli$parse_error(opt,optarg,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error while parsing option "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.cli.pr_join.call(null,opt,optarg)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
cljs.tools.cli.validation_error = (function cljs$tools$cli$validation_error(opt,optarg,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Failed to validate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.cli.pr_join.call(null,opt,optarg)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(msg)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''):""))].join('');
});
cljs.tools.cli.validate = (function cljs$tools$cli$validate(value,spec,opt,optarg){
var map__8437 = spec;
var map__8437__$1 = ((((!((map__8437 == null)))?((((map__8437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8437):map__8437);
var validate_fn = cljs.core.get.call(null,map__8437__$1,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944));
var validate_msg = cljs.core.get.call(null,map__8437__$1,new cljs.core.Keyword(null,"validate-msg","validate-msg",-1415932287));
var or__6534__auto__ = (function (){var G__8466 = validate_fn;
var vec__8468 = G__8466;
var seq__8469 = cljs.core.seq.call(null,vec__8468);
var first__8470 = cljs.core.first.call(null,seq__8469);
var seq__8469__$1 = cljs.core.next.call(null,seq__8469);
var vfn = first__8470;
var vfns = seq__8469__$1;
var G__8467 = validate_msg;
var vec__8471 = G__8467;
var seq__8472 = cljs.core.seq.call(null,vec__8471);
var first__8473 = cljs.core.first.call(null,seq__8472);
var seq__8472__$1 = cljs.core.next.call(null,seq__8472);
var msg = first__8473;
var msgs = seq__8472__$1;
var G__8466__$1 = G__8466;
var G__8467__$1 = G__8467;
while(true){
var vec__8474 = G__8466__$1;
var seq__8475 = cljs.core.seq.call(null,vec__8474);
var first__8476 = cljs.core.first.call(null,seq__8475);
var seq__8475__$1 = cljs.core.next.call(null,seq__8475);
var vfn__$1 = first__8476;
var vfns__$1 = seq__8475__$1;
var vec__8477 = G__8467__$1;
var seq__8478 = cljs.core.seq.call(null,vec__8477);
var first__8479 = cljs.core.first.call(null,seq__8478);
var seq__8478__$1 = cljs.core.next.call(null,seq__8478);
var msg__$1 = first__8479;
var msgs__$1 = seq__8478__$1;
if(cljs.core.truth_(vfn__$1)){
if(cljs.core.truth_((function (){try{return vfn__$1.call(null,value);
}catch (e8480){if((e8480 instanceof Error)){
var e = e8480;
return null;
} else {
throw e8480;

}
}})())){
var G__8481 = vfns__$1;
var G__8482 = msgs__$1;
G__8466__$1 = G__8481;
G__8467__$1 = G__8482;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.tools.cli","error","cljs.tools.cli/error",1825406757),cljs.tools.cli.validation_error.call(null,opt,optarg,msg__$1)], null);
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__6534__auto__)){
return or__6534__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,null], null);
}
});
cljs.tools.cli.parse_value = (function cljs$tools$cli$parse_value(value,spec,opt,optarg){
var map__8489 = spec;
var map__8489__$1 = ((((!((map__8489 == null)))?((((map__8489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8489):map__8489);
var parse_fn = cljs.core.get.call(null,map__8489__$1,new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345));
var vec__8490 = (cljs.core.truth_(parse_fn)?(function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_fn.call(null,value),null], null);
}catch (e8494){if((e8494 instanceof Error)){
var e = e8494;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.tools.cli.parse_error.call(null,opt,optarg,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''))], null);
} else {
throw e8494;

}
}})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,null], null));
var value__$1 = cljs.core.nth.call(null,vec__8490,(0),null);
var error = cljs.core.nth.call(null,vec__8490,(1),null);
if(cljs.core.truth_(error)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.tools.cli","error","cljs.tools.cli/error",1825406757),error], null);
} else {
return cljs.tools.cli.validate.call(null,value__$1,spec,opt,optarg);
}
});
cljs.tools.cli.parse_optarg = (function cljs$tools$cli$parse_optarg(spec,opt,optarg){
var map__8497 = spec;
var map__8497__$1 = ((((!((map__8497 == null)))?((((map__8497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8497):map__8497);
var required = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.truth_((function (){var and__6522__auto__ = required;
if(cljs.core.truth_(and__6522__auto__)){
return (optarg == null);
} else {
return and__6522__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.tools.cli","error","cljs.tools.cli/error",1825406757),cljs.tools.cli.missing_required_error.call(null,opt,required)], null);
} else {
return cljs.tools.cli.parse_value.call(null,(cljs.core.truth_(required)?optarg:true),spec,opt,optarg);
}
});
/**
 * Reduce sequence of [opt-type opt ?optarg?] tokens into a map of
 *   {option-id value} merged over the default values in the option
 *   specifications.
 * 
 *   If the :no-defaults flag is true, only options specified in the tokens are
 *   included in the option-map.
 * 
 *   Unknown options, missing options, missing required arguments, option
 *   argument parsing exceptions, and validation failures are collected into
 *   a vector of error message strings.
 * 
 *   If the :strict flag is true, required arguments that match other options
 *   are treated as missing, instead of a literal value beginning with - or --.
 * 
 *   Returns [option-map error-messages-vector].
 */
cljs.tools.cli.parse_option_tokens = (function cljs$tools$cli$parse_option_tokens(var_args){
var args__7654__auto__ = [];
var len__7647__auto___8528 = arguments.length;
var i__7648__auto___8529 = (0);
while(true){
if((i__7648__auto___8529 < len__7647__auto___8528)){
args__7654__auto__.push((arguments[i__7648__auto___8529]));

var G__8530 = (i__7648__auto___8529 + (1));
i__7648__auto___8529 = G__8530;
continue;
} else {
}
break;
}

var argseq__7655__auto__ = ((((2) < args__7654__auto__.length))?(new cljs.core.IndexedSeq(args__7654__auto__.slice((2)),(0),null)):null);
return cljs.tools.cli.parse_option_tokens.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7655__auto__);
});

cljs.tools.cli.parse_option_tokens.cljs$core$IFn$_invoke$arity$variadic = (function (specs,tokens,options){
var map__8504 = cljs.core.apply.call(null,cljs.core.hash_map,options);
var map__8504__$1 = ((((!((map__8504 == null)))?((((map__8504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8504):map__8504);
var no_defaults = cljs.core.get.call(null,map__8504__$1,new cljs.core.Keyword(null,"no-defaults","no-defaults",-1025033878));
var strict = cljs.core.get.call(null,map__8504__$1,new cljs.core.Keyword(null,"strict","strict",-665564191));
var defaults = cljs.tools.cli.default_option_map.call(null,specs);
var requireds = cljs.tools.cli.missing_errors.call(null,specs);
return ((function (map__8504,map__8504__$1,no_defaults,strict,defaults,requireds){
return (function (p1__8500_SHARP_){
var vec__8506 = p1__8500_SHARP_;
var m = cljs.core.nth.call(null,vec__8506,(0),null);
var ids = cljs.core.nth.call(null,vec__8506,(1),null);
var errors = cljs.core.nth.call(null,vec__8506,(2),null);
if(cljs.core.truth_(no_defaults)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys.call(null,m,ids),errors], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,errors], null);
}
});})(map__8504,map__8504__$1,no_defaults,strict,defaults,requireds))
.call(null,((function (map__8504,map__8504__$1,no_defaults,strict,defaults,requireds){
return (function (p1__8499_SHARP_){
return cljs.core.reduce.call(null,((function (map__8504,map__8504__$1,no_defaults,strict,defaults,requireds){
return (function (p__8509,p__8510){
var vec__8511 = p__8509;
var m = cljs.core.nth.call(null,vec__8511,(0),null);
var ids = cljs.core.nth.call(null,vec__8511,(1),null);
var errors = cljs.core.nth.call(null,vec__8511,(2),null);
var vec__8514 = p__8510;
var id = cljs.core.nth.call(null,vec__8514,(0),null);
var error = cljs.core.nth.call(null,vec__8514,(1),null);
if(cljs.core.contains_QMARK_.call(null,m,id)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,ids,errors], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,ids,cljs.core.conj.call(null,errors,error)], null);
}
});})(map__8504,map__8504__$1,no_defaults,strict,defaults,requireds))
,p1__8499_SHARP_,requireds);
});})(map__8504,map__8504__$1,no_defaults,strict,defaults,requireds))
.call(null,cljs.core.reduce.call(null,((function (map__8504,map__8504__$1,no_defaults,strict,defaults,requireds){
return (function (p__8517,p__8518){
var vec__8519 = p__8517;
var m = cljs.core.nth.call(null,vec__8519,(0),null);
var ids = cljs.core.nth.call(null,vec__8519,(1),null);
var errors = cljs.core.nth.call(null,vec__8519,(2),null);
var vec__8522 = p__8518;
var opt_type = cljs.core.nth.call(null,vec__8522,(0),null);
var opt = cljs.core.nth.call(null,vec__8522,(1),null);
var optarg = cljs.core.nth.call(null,vec__8522,(2),null);
var temp__4655__auto__ = cljs.tools.cli.find_spec.call(null,specs,opt_type,opt);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var vec__8525 = cljs.tools.cli.parse_optarg.call(null,spec,opt,optarg);
var value = cljs.core.nth.call(null,vec__8525,(0),null);
var error = cljs.core.nth.call(null,vec__8525,(1),null);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(spec);
if(!(cljs.core._EQ_.call(null,value,new cljs.core.Keyword("cljs.tools.cli","error","cljs.tools.cli/error",1825406757)))){
var temp__4655__auto____$1 = (function (){var and__6522__auto__ = strict;
if(cljs.core.truth_(and__6522__auto__)){
var or__6534__auto__ = cljs.tools.cli.find_spec.call(null,specs,new cljs.core.Keyword(null,"short-opt","short-opt",-384995699),optarg);
if(cljs.core.truth_(or__6534__auto__)){
return or__6534__auto__;
} else {
return cljs.tools.cli.find_spec.call(null,specs,new cljs.core.Keyword(null,"long-opt","long-opt",-386094553),optarg);
}
} else {
return and__6522__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var matched_spec = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,ids,cljs.core.conj.call(null,errors,cljs.tools.cli.missing_required_error.call(null,opt,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(spec)))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-fn","assoc-fn",418597603).cljs$core$IFn$_invoke$arity$2(spec,cljs.core.assoc).call(null,m,id,value),cljs.core.conj.call(null,ids,id),errors], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,ids,cljs.core.conj.call(null,errors,error)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,ids,cljs.core.conj.call(null,errors,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown option: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,opt))].join(''))], null);
}
});})(map__8504,map__8504__$1,no_defaults,strict,defaults,requireds))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [defaults,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),tokens)));
});

cljs.tools.cli.parse_option_tokens.cljs$lang$maxFixedArity = (2);

cljs.tools.cli.parse_option_tokens.cljs$lang$applyTo = (function (seq8501){
var G__8502 = cljs.core.first.call(null,seq8501);
var seq8501__$1 = cljs.core.next.call(null,seq8501);
var G__8503 = cljs.core.first.call(null,seq8501__$1);
var seq8501__$2 = cljs.core.next.call(null,seq8501__$1);
return cljs.tools.cli.parse_option_tokens.cljs$core$IFn$_invoke$arity$variadic(G__8502,G__8503,seq8501__$2);
});

/**
 * Given a single compiled option spec, turn it into a formatted string,
 *   optionally with its default values if requested.
 */
cljs.tools.cli.make_summary_part = (function cljs$tools$cli$make_summary_part(show_defaults_QMARK_,spec){
var map__8536 = spec;
var map__8536__$1 = ((((!((map__8536 == null)))?((((map__8536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8536):map__8536);
var short_opt = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"short-opt","short-opt",-384995699));
var long_opt = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"long-opt","long-opt",-386094553));
var required = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var default$ = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var default_desc = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"default-desc","default-desc",324577013));
var desc = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var opt = (cljs.core.truth_((function (){var and__6522__auto__ = short_opt;
if(cljs.core.truth_(and__6522__auto__)){
return long_opt;
} else {
return and__6522__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(short_opt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(long_opt)].join(''):(cljs.core.truth_(long_opt)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("    "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(long_opt)].join(''):(cljs.core.truth_(short_opt)?short_opt:null)));
var vec__8537 = (cljs.core.truth_(required)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(opt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(required)].join(''),(function (){var or__6534__auto__ = default_desc;
if(cljs.core.truth_(or__6534__auto__)){
return or__6534__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(default$)].join('');
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt,""], null));
var opt__$1 = cljs.core.nth.call(null,vec__8537,(0),null);
var dd = cljs.core.nth.call(null,vec__8537,(1),null);
if(cljs.core.truth_(show_defaults_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt__$1,dd,(function (){var or__6534__auto__ = desc;
if(cljs.core.truth_(or__6534__auto__)){
return or__6534__auto__;
} else {
return "";
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt__$1,(function (){var or__6534__auto__ = desc;
if(cljs.core.truth_(or__6534__auto__)){
return or__6534__auto__;
} else {
return "";
}
})()], null);
}
});
/**
 * Format a sequence of summary parts into columns. lens is a sequence of
 *   lengths to use for parts. There are two sequences of lengths if we are
 *   not displaying defaults. There are three sequences of lengths if we
 *   are showing defaults.
 */
cljs.tools.cli.format_lines = (function cljs$tools$cli$format_lines(lens,parts){
var fmt = (function (){var G__8543 = cljs.core.count.call(null,lens);
switch (G__8543) {
case (2):
return "  %%-%ds  %%-%ds";

break;
case (3):
return "  %%-%ds  %%-%ds  %%-%ds";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,lens))].join('')));

}
})();
var fmt__$1 = cljs.core.apply.call(null,goog.string.format,fmt,lens);
return cljs.core.map.call(null,((function (fmt,fmt__$1){
return (function (p1__8541_SHARP_){
return clojure.string.trimr.call(null,cljs.core.apply.call(null,goog.string.format,fmt__$1,p1__8541_SHARP_));
});})(fmt,fmt__$1))
,parts);
});
cljs.tools.cli.required_arguments = (function cljs$tools$cli$required_arguments(specs){
return cljs.core.reduce.call(null,(function (s,p__8548){
var map__8549 = p__8548;
var map__8549__$1 = ((((!((map__8549 == null)))?((((map__8549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8549):map__8549);
var required = cljs.core.get.call(null,map__8549__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var short_opt = cljs.core.get.call(null,map__8549__$1,new cljs.core.Keyword(null,"short-opt","short-opt",-384995699));
var long_opt = cljs.core.get.call(null,map__8549__$1,new cljs.core.Keyword(null,"long-opt","long-opt",-386094553));
if(cljs.core.truth_(required)){
return cljs.core.into.call(null,s,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [short_opt,long_opt], null)));
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,specs);
});
/**
 * Reduce options specs into a options summary for printing at a terminal.
 *   Note that the specs argument should be the compiled version. That effectively
 *   means that you shouldn't call summarize directly. When you call parse-opts
 *   you get back a :summary key which is the result of calling summarize (or
 *   your user-supplied :summary-fn option) on the compiled option specs.
 */
cljs.tools.cli.summarize = (function cljs$tools$cli$summarize(specs){
if(cljs.core.seq.call(null,specs)){
var show_defaults_QMARK_ = cljs.core.some.call(null,(function (p1__8551_SHARP_){
var and__6522__auto__ = new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(p1__8551_SHARP_);
if(cljs.core.truth_(and__6522__auto__)){
return cljs.core.contains_QMARK_.call(null,p1__8551_SHARP_,new cljs.core.Keyword(null,"default","default",-1987822328));
} else {
return and__6522__auto__;
}
}),specs);
var parts = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.tools.cli.make_summary_part,show_defaults_QMARK_),specs);
var lens = cljs.core.apply.call(null,cljs.core.map,((function (show_defaults_QMARK_,parts){
return (function() { 
var G__8552__delegate = function (cols){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,cols));
};
var G__8552 = function (var_args){
var cols = null;
if (arguments.length > 0) {
var G__8553__i = 0, G__8553__a = new Array(arguments.length -  0);
while (G__8553__i < G__8553__a.length) {G__8553__a[G__8553__i] = arguments[G__8553__i + 0]; ++G__8553__i;}
  cols = new cljs.core.IndexedSeq(G__8553__a,0,null);
} 
return G__8552__delegate.call(this,cols);};
G__8552.cljs$lang$maxFixedArity = 0;
G__8552.cljs$lang$applyTo = (function (arglist__8554){
var cols = cljs.core.seq(arglist__8554);
return G__8552__delegate(cols);
});
G__8552.cljs$core$IFn$_invoke$arity$variadic = G__8552__delegate;
return G__8552;
})()
;})(show_defaults_QMARK_,parts))
,parts);
var lines = cljs.tools.cli.format_lines.call(null,lens,parts);
return clojure.string.join.call(null,"\n",lines);
} else {
return "";
}
});
/**
 * Extract the map of default options from a sequence of option vectors.
 */
cljs.tools.cli.get_default_options = (function cljs$tools$cli$get_default_options(option_specs){
return cljs.tools.cli.default_option_map.call(null,cljs.tools.cli.compile_option_specs.call(null,option_specs));
});
/**
 * Parse arguments sequence according to given option specifications and the
 *   GNU Program Argument Syntax Conventions:
 * 
 *  https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html
 * 
 *   Option specifications are a sequence of vectors with the following format:
 * 
 *  [short-opt long-opt-with-required-description description
 *   :property value]
 * 
 *   The first three string parameters in an option spec are positional and
 *   optional, and may be nil in order to specify a later parameter.
 * 
 *   By default, options are toggles that default to nil, but the second string
 *   parameter may be used to specify that an option requires an argument.
 * 
 *  e.g. ["-p" "--port PORT"] specifies that --port requires an argument,
 *       of which PORT is a short description.
 * 
 *   The :property value pairs are optional and take precedence over the
 *   positional string arguments. The valid properties are:
 * 
 *  :id           The key for this option in the resulting option map. This
 *                is normally set to the keywordized name of the long option
 *                without the leading dashes.
 * 
 *                Multiple option entries can share the same :id in order to
 *                transform a value in different ways, but only one of these
 *                option entries may contain a :default entry.
 * 
 *                This option is mandatory.
 * 
 *  :short-opt    The short format for this option, normally set by the first
 *                positional string parameter: e.g. "-p". Must be unique.
 * 
 *  :long-opt     The long format for this option, normally set by the second
 *                positional string parameter; e.g. "--port". Must be unique.
 * 
 *  :required     A description of the required argument for this option if
 *                one is required; normally set in the second positional
 *                string parameter after the long option: "--port PORT".
 * 
 *                The absence of this entry indicates that the option is a
 *                boolean toggle that is set to true when specified on the
 *                command line.
 * 
 *  :desc         A optional short description of this option.
 * 
 *  :default      The default value of this option. If none is specified, the
 *                resulting option map will not contain an entry for this
 *                option unless set on the command line.
 * 
 *  :default-desc An optional description of the default value. This should be
 *                used when the string representation of the default value is
 *                too ugly to be printed on the command line.
 * 
 *  :parse-fn     A function that receives the required option argument and
 *                returns the option value.
 * 
 *                If this is a boolean option, parse-fn will receive the value
 *                true. This may be used to invert the logic of this option:
 * 
 *                ["-q" "--quiet"
 *                 :id :verbose
 *                 :default true
 *                 :parse-fn not]
 * 
 *  :assoc-fn     A function that receives the current option map, the current
 *                option :id, and the current parsed option value, and returns
 *                a new option map.
 * 
 *                This may be used to create non-idempotent options, like
 *                setting a verbosity level by specifying an option multiple
 *                times. ("-vvv" -> 3)
 * 
 *                ["-v" "--verbose"
 *                 :default 0
 *                 :assoc-fn (fn [m k _] (update-in m [k] inc))]
 * 
 *  :validate     A vector of [validate-fn validate-msg ...]. Multiple pairs
 *                of validation functions and error messages may be provided.
 * 
 *  :validate-fn  A vector of functions that receives the parsed option value
 *                and returns a falsy value or throws an exception when the
 *                value is invalid. The validations are tried in the given
 *                order.
 * 
 *  :validate-msg A vector of error messages corresponding to :validate-fn
 *                that will be added to the :errors vector on validation
 *                failure.
 * 
 *   parse-opts returns a map with four entries:
 * 
 *  {:options     The options map, keyed by :id, mapped to the parsed value
 *   :arguments   A vector of unprocessed arguments
 *   :summary     A string containing a minimal options summary
 *   :errors      A possible vector of error message strings generated during
 *                parsing; nil when no errors exist}
 * 
 *   A few function options may be specified to influence the behavior of
 *   parse-opts:
 * 
 *  :in-order     Stop option processing at the first unknown argument. Useful
 *                for building programs with subcommands that have their own
 *                option specs.
 * 
 *  :no-defaults  Only include option values specified in arguments and do not
 *                include any default values in the resulting options map.
 *                Useful for parsing options from multiple sources; i.e. from a
 *                config file and from the command line.
 * 
 *  :strict       Parse required arguments strictly: if a required argument value
 *                matches any other option, it is considered to be missing (and
 *                you have a parse error).
 * 
 *  :summary-fn   A function that receives the sequence of compiled option specs
 *                (documented at #'clojure.tools.cli/compile-option-specs), and
 *                returns a custom option summary string.
 *   
 */
cljs.tools.cli.parse_opts = (function cljs$tools$cli$parse_opts(var_args){
var args__7654__auto__ = [];
var len__7647__auto___8566 = arguments.length;
var i__7648__auto___8567 = (0);
while(true){
if((i__7648__auto___8567 < len__7647__auto___8566)){
args__7654__auto__.push((arguments[i__7648__auto___8567]));

var G__8568 = (i__7648__auto___8567 + (1));
i__7648__auto___8567 = G__8568;
continue;
} else {
}
break;
}

var argseq__7655__auto__ = ((((2) < args__7654__auto__.length))?(new cljs.core.IndexedSeq(args__7654__auto__.slice((2)),(0),null)):null);
return cljs.tools.cli.parse_opts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7655__auto__);
});

cljs.tools.cli.parse_opts.cljs$core$IFn$_invoke$arity$variadic = (function (args,option_specs,options){
var map__8558 = cljs.core.apply.call(null,cljs.core.hash_map,options);
var map__8558__$1 = ((((!((map__8558 == null)))?((((map__8558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8558):map__8558);
var in_order = cljs.core.get.call(null,map__8558__$1,new cljs.core.Keyword(null,"in-order","in-order",-1605651796));
var no_defaults = cljs.core.get.call(null,map__8558__$1,new cljs.core.Keyword(null,"no-defaults","no-defaults",-1025033878));
var strict = cljs.core.get.call(null,map__8558__$1,new cljs.core.Keyword(null,"strict","strict",-665564191));
var summary_fn = cljs.core.get.call(null,map__8558__$1,new cljs.core.Keyword(null,"summary-fn","summary-fn",-2130107959));
var specs = cljs.tools.cli.compile_option_specs.call(null,option_specs);
var req = cljs.tools.cli.required_arguments.call(null,specs);
var vec__8559 = cljs.tools.cli.tokenize_args.call(null,req,args,new cljs.core.Keyword(null,"in-order","in-order",-1605651796),in_order);
var tokens = cljs.core.nth.call(null,vec__8559,(0),null);
var rest_args = cljs.core.nth.call(null,vec__8559,(1),null);
var vec__8562 = cljs.tools.cli.parse_option_tokens.call(null,specs,tokens,new cljs.core.Keyword(null,"no-defaults","no-defaults",-1025033878),no_defaults,new cljs.core.Keyword(null,"strict","strict",-665564191),strict);
var opts = cljs.core.nth.call(null,vec__8562,(0),null);
var errors = cljs.core.nth.call(null,vec__8562,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"options","options",99638489),opts,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),rest_args,new cljs.core.Keyword(null,"summary","summary",380847952),(function (){var or__6534__auto__ = summary_fn;
if(cljs.core.truth_(or__6534__auto__)){
return or__6534__auto__;
} else {
return cljs.tools.cli.summarize;
}
})().call(null,specs),new cljs.core.Keyword(null,"errors","errors",-908790718),((cljs.core.seq.call(null,errors))?errors:null)], null);
});

cljs.tools.cli.parse_opts.cljs$lang$maxFixedArity = (2);

cljs.tools.cli.parse_opts.cljs$lang$applyTo = (function (seq8555){
var G__8556 = cljs.core.first.call(null,seq8555);
var seq8555__$1 = cljs.core.next.call(null,seq8555);
var G__8557 = cljs.core.first.call(null,seq8555__$1);
var seq8555__$2 = cljs.core.next.call(null,seq8555__$1);
return cljs.tools.cli.parse_opts.cljs$core$IFn$_invoke$arity$variadic(G__8556,G__8557,seq8555__$2);
});


//# sourceMappingURL=cli.js.map