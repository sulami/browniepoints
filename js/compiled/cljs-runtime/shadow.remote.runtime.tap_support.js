goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48330,p__48331){
var map__48340 = p__48330;
var map__48340__$1 = (((((!((map__48340 == null))))?(((((map__48340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48340):map__48340);
var svc = map__48340__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48340__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48340__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48340__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48341 = p__48331;
var map__48341__$1 = (((((!((map__48341 == null))))?(((((map__48341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48341):map__48341);
var msg = map__48341__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48341__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48341__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48341__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48341__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__48387,p__48388){
var map__48389 = p__48387;
var map__48389__$1 = (((((!((map__48389 == null))))?(((((map__48389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48389):map__48389);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__48390 = p__48388;
var map__48390__$1 = (((((!((map__48390 == null))))?(((((map__48390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48390):map__48390);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48390__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__48406,p__48407){
var map__48409 = p__48406;
var map__48409__$1 = (((((!((map__48409 == null))))?(((((map__48409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48409):map__48409);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48410 = p__48407;
var map__48410__$1 = (((((!((map__48410 == null))))?(((((map__48410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48410):map__48410);
var msg = map__48410__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48410__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__48426,tid){
var map__48428 = p__48426;
var map__48428__$1 = (((((!((map__48428 == null))))?(((((map__48428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48428):map__48428);
var svc = map__48428__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48428__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__48456 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__48457 = null;
var count__48458 = (0);
var i__48459 = (0);
while(true){
if((i__48459 < count__48458)){
var vec__48506 = chunk__48457.cljs$core$IIndexed$_nth$arity$2(null,i__48459);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48506,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48506,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48565 = seq__48456;
var G__48566 = chunk__48457;
var G__48567 = count__48458;
var G__48568 = (i__48459 + (1));
seq__48456 = G__48565;
chunk__48457 = G__48566;
count__48458 = G__48567;
i__48459 = G__48568;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48456);
if(temp__5735__auto__){
var seq__48456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48456__$1);
var G__48570 = cljs.core.chunk_rest(seq__48456__$1);
var G__48571 = c__4556__auto__;
var G__48572 = cljs.core.count(c__4556__auto__);
var G__48573 = (0);
seq__48456 = G__48570;
chunk__48457 = G__48571;
count__48458 = G__48572;
i__48459 = G__48573;
continue;
} else {
var vec__48517 = cljs.core.first(seq__48456__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48517,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48517,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48574 = cljs.core.next(seq__48456__$1);
var G__48575 = null;
var G__48576 = (0);
var G__48577 = (0);
seq__48456 = G__48574;
chunk__48457 = G__48575;
count__48458 = G__48576;
i__48459 = G__48577;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__48435_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__48435_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__48436_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__48436_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__48437_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__48437_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__48438_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__48438_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__48526){
var map__48528 = p__48526;
var map__48528__$1 = (((((!((map__48528 == null))))?(((((map__48528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48528):map__48528);
var svc = map__48528__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48528__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48528__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
