goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51977){
var map__51978 = p__51977;
var map__51978__$1 = (((((!((map__51978 == null))))?(((((map__51978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51978):map__51978);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51989_52045 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51990_52046 = null;
var count__51991_52047 = (0);
var i__51992_52048 = (0);
while(true){
if((i__51992_52048 < count__51991_52047)){
var vec__52013_52053 = chunk__51990_52046.cljs$core$IIndexed$_nth$arity$2(null,i__51992_52048);
var k_52054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52013_52053,(0),null);
var cb_52055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52013_52053,(1),null);
try{var G__52020_52057 = cljs.core.deref(re_frame.trace.traces);
(cb_52055.cljs$core$IFn$_invoke$arity$1 ? cb_52055.cljs$core$IFn$_invoke$arity$1(G__52020_52057) : cb_52055.call(null,G__52020_52057));
}catch (e52019){var e_52062 = e52019;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52054,"while storing",cljs.core.deref(re_frame.trace.traces),e_52062], 0));
}

var G__52063 = seq__51989_52045;
var G__52064 = chunk__51990_52046;
var G__52065 = count__51991_52047;
var G__52066 = (i__51992_52048 + (1));
seq__51989_52045 = G__52063;
chunk__51990_52046 = G__52064;
count__51991_52047 = G__52065;
i__51992_52048 = G__52066;
continue;
} else {
var temp__5735__auto___52067 = cljs.core.seq(seq__51989_52045);
if(temp__5735__auto___52067){
var seq__51989_52068__$1 = temp__5735__auto___52067;
if(cljs.core.chunked_seq_QMARK_(seq__51989_52068__$1)){
var c__4556__auto___52070 = cljs.core.chunk_first(seq__51989_52068__$1);
var G__52071 = cljs.core.chunk_rest(seq__51989_52068__$1);
var G__52072 = c__4556__auto___52070;
var G__52073 = cljs.core.count(c__4556__auto___52070);
var G__52074 = (0);
seq__51989_52045 = G__52071;
chunk__51990_52046 = G__52072;
count__51991_52047 = G__52073;
i__51992_52048 = G__52074;
continue;
} else {
var vec__52021_52079 = cljs.core.first(seq__51989_52068__$1);
var k_52080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52021_52079,(0),null);
var cb_52081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52021_52079,(1),null);
try{var G__52025_52082 = cljs.core.deref(re_frame.trace.traces);
(cb_52081.cljs$core$IFn$_invoke$arity$1 ? cb_52081.cljs$core$IFn$_invoke$arity$1(G__52025_52082) : cb_52081.call(null,G__52025_52082));
}catch (e52024){var e_52083 = e52024;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52080,"while storing",cljs.core.deref(re_frame.trace.traces),e_52083], 0));
}

var G__52087 = cljs.core.next(seq__51989_52068__$1);
var G__52088 = null;
var G__52089 = (0);
var G__52090 = (0);
seq__51989_52045 = G__52087;
chunk__51990_52046 = G__52088;
count__51991_52047 = G__52089;
i__51992_52048 = G__52090;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
