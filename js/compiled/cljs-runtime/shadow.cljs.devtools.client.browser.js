goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53115 = arguments.length;
var i__4737__auto___53116 = (0);
while(true){
if((i__4737__auto___53116 < len__4736__auto___53115)){
args__4742__auto__.push((arguments[i__4737__auto___53116]));

var G__53117 = (i__4737__auto___53116 + (1));
i__4737__auto___53116 = G__53117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52812){
var G__52813 = cljs.core.first(seq52812);
var seq52812__$1 = cljs.core.next(seq52812);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52813,seq52812__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52841 = cljs.core.seq(sources);
var chunk__52842 = null;
var count__52843 = (0);
var i__52844 = (0);
while(true){
if((i__52844 < count__52843)){
var map__52888 = chunk__52842.cljs$core$IIndexed$_nth$arity$2(null,i__52844);
var map__52888__$1 = (((((!((map__52888 == null))))?(((((map__52888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52888):map__52888);
var src = map__52888__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52894){var e_53118 = e52894;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53118);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53118.message)].join('')));
}

var G__53119 = seq__52841;
var G__53120 = chunk__52842;
var G__53121 = count__52843;
var G__53122 = (i__52844 + (1));
seq__52841 = G__53119;
chunk__52842 = G__53120;
count__52843 = G__53121;
i__52844 = G__53122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52841);
if(temp__5735__auto__){
var seq__52841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52841__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52841__$1);
var G__53123 = cljs.core.chunk_rest(seq__52841__$1);
var G__53124 = c__4556__auto__;
var G__53125 = cljs.core.count(c__4556__auto__);
var G__53126 = (0);
seq__52841 = G__53123;
chunk__52842 = G__53124;
count__52843 = G__53125;
i__52844 = G__53126;
continue;
} else {
var map__52895 = cljs.core.first(seq__52841__$1);
var map__52895__$1 = (((((!((map__52895 == null))))?(((((map__52895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52895):map__52895);
var src = map__52895__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52899){var e_53127 = e52899;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53127);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53127.message)].join('')));
}

var G__53128 = cljs.core.next(seq__52841__$1);
var G__53129 = null;
var G__53130 = (0);
var G__53131 = (0);
seq__52841 = G__53128;
chunk__52842 = G__53129;
count__52843 = G__53130;
i__52844 = G__53131;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52904 = cljs.core.seq(js_requires);
var chunk__52905 = null;
var count__52906 = (0);
var i__52907 = (0);
while(true){
if((i__52907 < count__52906)){
var js_ns = chunk__52905.cljs$core$IIndexed$_nth$arity$2(null,i__52907);
var require_str_53132 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53132);


var G__53133 = seq__52904;
var G__53134 = chunk__52905;
var G__53135 = count__52906;
var G__53136 = (i__52907 + (1));
seq__52904 = G__53133;
chunk__52905 = G__53134;
count__52906 = G__53135;
i__52907 = G__53136;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52904);
if(temp__5735__auto__){
var seq__52904__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52904__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52904__$1);
var G__53137 = cljs.core.chunk_rest(seq__52904__$1);
var G__53138 = c__4556__auto__;
var G__53139 = cljs.core.count(c__4556__auto__);
var G__53140 = (0);
seq__52904 = G__53137;
chunk__52905 = G__53138;
count__52906 = G__53139;
i__52907 = G__53140;
continue;
} else {
var js_ns = cljs.core.first(seq__52904__$1);
var require_str_53141 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53141);


var G__53142 = cljs.core.next(seq__52904__$1);
var G__53143 = null;
var G__53144 = (0);
var G__53145 = (0);
seq__52904 = G__53142;
chunk__52905 = G__53143;
count__52906 = G__53144;
i__52907 = G__53145;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52915){
var map__52916 = p__52915;
var map__52916__$1 = (((((!((map__52916 == null))))?(((((map__52916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52916):map__52916);
var msg = map__52916__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52916__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52916__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52919(s__52920){
return (new cljs.core.LazySeq(null,(function (){
var s__52920__$1 = s__52920;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52920__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__52925 = cljs.core.first(xs__6292__auto__);
var map__52925__$1 = (((((!((map__52925 == null))))?(((((map__52925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52925):map__52925);
var src = map__52925__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__52920__$1,map__52925,map__52925__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52916,map__52916__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52919_$_iter__52921(s__52922){
return (new cljs.core.LazySeq(null,((function (s__52920__$1,map__52925,map__52925__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52916,map__52916__$1,msg,info,reload_info){
return (function (){
var s__52922__$1 = s__52922;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52922__$1);
if(temp__5735__auto____$1){
var s__52922__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52922__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52922__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52924 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52923 = (0);
while(true){
if((i__52923 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__52923);
cljs.core.chunk_append(b__52924,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53146 = (i__52923 + (1));
i__52923 = G__53146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52924),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52919_$_iter__52921(cljs.core.chunk_rest(s__52922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52924),null);
}
} else {
var warning = cljs.core.first(s__52922__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52919_$_iter__52921(cljs.core.rest(s__52922__$2)));
}
} else {
return null;
}
break;
}
});})(s__52920__$1,map__52925,map__52925__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52916,map__52916__$1,msg,info,reload_info))
,null,null));
});})(s__52920__$1,map__52925,map__52925__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52916,map__52916__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52919(cljs.core.rest(s__52920__$1)));
} else {
var G__53147 = cljs.core.rest(s__52920__$1);
s__52920__$1 = G__53147;
continue;
}
} else {
var G__53148 = cljs.core.rest(s__52920__$1);
s__52920__$1 = G__53148;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52931_53149 = cljs.core.seq(warnings);
var chunk__52932_53150 = null;
var count__52933_53151 = (0);
var i__52934_53152 = (0);
while(true){
if((i__52934_53152 < count__52933_53151)){
var map__52943_53153 = chunk__52932_53150.cljs$core$IIndexed$_nth$arity$2(null,i__52934_53152);
var map__52943_53154__$1 = (((((!((map__52943_53153 == null))))?(((((map__52943_53153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52943_53153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52943_53153):map__52943_53153);
var w_53155 = map__52943_53154__$1;
var msg_53156__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52943_53154__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52943_53154__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52943_53154__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52943_53154__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53159)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53157),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53158),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53156__$1)].join(''));


var G__53160 = seq__52931_53149;
var G__53161 = chunk__52932_53150;
var G__53162 = count__52933_53151;
var G__53163 = (i__52934_53152 + (1));
seq__52931_53149 = G__53160;
chunk__52932_53150 = G__53161;
count__52933_53151 = G__53162;
i__52934_53152 = G__53163;
continue;
} else {
var temp__5735__auto___53164 = cljs.core.seq(seq__52931_53149);
if(temp__5735__auto___53164){
var seq__52931_53165__$1 = temp__5735__auto___53164;
if(cljs.core.chunked_seq_QMARK_(seq__52931_53165__$1)){
var c__4556__auto___53166 = cljs.core.chunk_first(seq__52931_53165__$1);
var G__53167 = cljs.core.chunk_rest(seq__52931_53165__$1);
var G__53168 = c__4556__auto___53166;
var G__53169 = cljs.core.count(c__4556__auto___53166);
var G__53170 = (0);
seq__52931_53149 = G__53167;
chunk__52932_53150 = G__53168;
count__52933_53151 = G__53169;
i__52934_53152 = G__53170;
continue;
} else {
var map__52945_53171 = cljs.core.first(seq__52931_53165__$1);
var map__52945_53172__$1 = (((((!((map__52945_53171 == null))))?(((((map__52945_53171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52945_53171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52945_53171):map__52945_53171);
var w_53173 = map__52945_53172__$1;
var msg_53174__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945_53172__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945_53172__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945_53172__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945_53172__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53177)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53175),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53176),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53174__$1)].join(''));


var G__53178 = cljs.core.next(seq__52931_53165__$1);
var G__53179 = null;
var G__53180 = (0);
var G__53181 = (0);
seq__52931_53149 = G__53178;
chunk__52932_53150 = G__53179;
count__52933_53151 = G__53180;
i__52934_53152 = G__53181;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52914_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52914_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52953){
var map__52954 = p__52953;
var map__52954__$1 = (((((!((map__52954 == null))))?(((((map__52954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52954):map__52954);
var msg = map__52954__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52954__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52956 = cljs.core.seq(updates);
var chunk__52958 = null;
var count__52959 = (0);
var i__52960 = (0);
while(true){
if((i__52960 < count__52959)){
var path = chunk__52958.cljs$core$IIndexed$_nth$arity$2(null,i__52960);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53001_53182 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53005_53183 = null;
var count__53006_53184 = (0);
var i__53007_53185 = (0);
while(true){
if((i__53007_53185 < count__53006_53184)){
var node_53186 = chunk__53005_53183.cljs$core$IIndexed$_nth$arity$2(null,i__53007_53185);
if(cljs.core.not(node_53186.shadow$old)){
var path_match_53187 = shadow.cljs.devtools.client.browser.match_paths(node_53186.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53187)){
var new_link_53188 = (function (){var G__53018 = node_53186.cloneNode(true);
G__53018.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53187),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53018;
})();
(node_53186.shadow$old = true);

(new_link_53188.onload = ((function (seq__53001_53182,chunk__53005_53183,count__53006_53184,i__53007_53185,seq__52956,chunk__52958,count__52959,i__52960,new_link_53188,path_match_53187,node_53186,path,map__52954,map__52954__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53186);
});})(seq__53001_53182,chunk__53005_53183,count__53006_53184,i__53007_53185,seq__52956,chunk__52958,count__52959,i__52960,new_link_53188,path_match_53187,node_53186,path,map__52954,map__52954__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53187], 0));

goog.dom.insertSiblingAfter(new_link_53188,node_53186);


var G__53189 = seq__53001_53182;
var G__53190 = chunk__53005_53183;
var G__53191 = count__53006_53184;
var G__53192 = (i__53007_53185 + (1));
seq__53001_53182 = G__53189;
chunk__53005_53183 = G__53190;
count__53006_53184 = G__53191;
i__53007_53185 = G__53192;
continue;
} else {
var G__53193 = seq__53001_53182;
var G__53194 = chunk__53005_53183;
var G__53195 = count__53006_53184;
var G__53196 = (i__53007_53185 + (1));
seq__53001_53182 = G__53193;
chunk__53005_53183 = G__53194;
count__53006_53184 = G__53195;
i__53007_53185 = G__53196;
continue;
}
} else {
var G__53197 = seq__53001_53182;
var G__53198 = chunk__53005_53183;
var G__53199 = count__53006_53184;
var G__53200 = (i__53007_53185 + (1));
seq__53001_53182 = G__53197;
chunk__53005_53183 = G__53198;
count__53006_53184 = G__53199;
i__53007_53185 = G__53200;
continue;
}
} else {
var temp__5735__auto___53201 = cljs.core.seq(seq__53001_53182);
if(temp__5735__auto___53201){
var seq__53001_53202__$1 = temp__5735__auto___53201;
if(cljs.core.chunked_seq_QMARK_(seq__53001_53202__$1)){
var c__4556__auto___53203 = cljs.core.chunk_first(seq__53001_53202__$1);
var G__53204 = cljs.core.chunk_rest(seq__53001_53202__$1);
var G__53205 = c__4556__auto___53203;
var G__53206 = cljs.core.count(c__4556__auto___53203);
var G__53207 = (0);
seq__53001_53182 = G__53204;
chunk__53005_53183 = G__53205;
count__53006_53184 = G__53206;
i__53007_53185 = G__53207;
continue;
} else {
var node_53208 = cljs.core.first(seq__53001_53202__$1);
if(cljs.core.not(node_53208.shadow$old)){
var path_match_53209 = shadow.cljs.devtools.client.browser.match_paths(node_53208.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53209)){
var new_link_53210 = (function (){var G__53021 = node_53208.cloneNode(true);
G__53021.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53209),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53021;
})();
(node_53208.shadow$old = true);

(new_link_53210.onload = ((function (seq__53001_53182,chunk__53005_53183,count__53006_53184,i__53007_53185,seq__52956,chunk__52958,count__52959,i__52960,new_link_53210,path_match_53209,node_53208,seq__53001_53202__$1,temp__5735__auto___53201,path,map__52954,map__52954__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53208);
});})(seq__53001_53182,chunk__53005_53183,count__53006_53184,i__53007_53185,seq__52956,chunk__52958,count__52959,i__52960,new_link_53210,path_match_53209,node_53208,seq__53001_53202__$1,temp__5735__auto___53201,path,map__52954,map__52954__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53209], 0));

goog.dom.insertSiblingAfter(new_link_53210,node_53208);


var G__53211 = cljs.core.next(seq__53001_53202__$1);
var G__53212 = null;
var G__53213 = (0);
var G__53214 = (0);
seq__53001_53182 = G__53211;
chunk__53005_53183 = G__53212;
count__53006_53184 = G__53213;
i__53007_53185 = G__53214;
continue;
} else {
var G__53215 = cljs.core.next(seq__53001_53202__$1);
var G__53216 = null;
var G__53217 = (0);
var G__53218 = (0);
seq__53001_53182 = G__53215;
chunk__53005_53183 = G__53216;
count__53006_53184 = G__53217;
i__53007_53185 = G__53218;
continue;
}
} else {
var G__53219 = cljs.core.next(seq__53001_53202__$1);
var G__53220 = null;
var G__53221 = (0);
var G__53222 = (0);
seq__53001_53182 = G__53219;
chunk__53005_53183 = G__53220;
count__53006_53184 = G__53221;
i__53007_53185 = G__53222;
continue;
}
}
} else {
}
}
break;
}


var G__53223 = seq__52956;
var G__53224 = chunk__52958;
var G__53225 = count__52959;
var G__53226 = (i__52960 + (1));
seq__52956 = G__53223;
chunk__52958 = G__53224;
count__52959 = G__53225;
i__52960 = G__53226;
continue;
} else {
var G__53227 = seq__52956;
var G__53228 = chunk__52958;
var G__53229 = count__52959;
var G__53230 = (i__52960 + (1));
seq__52956 = G__53227;
chunk__52958 = G__53228;
count__52959 = G__53229;
i__52960 = G__53230;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52956);
if(temp__5735__auto__){
var seq__52956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52956__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52956__$1);
var G__53231 = cljs.core.chunk_rest(seq__52956__$1);
var G__53232 = c__4556__auto__;
var G__53233 = cljs.core.count(c__4556__auto__);
var G__53234 = (0);
seq__52956 = G__53231;
chunk__52958 = G__53232;
count__52959 = G__53233;
i__52960 = G__53234;
continue;
} else {
var path = cljs.core.first(seq__52956__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53023_53235 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53027_53236 = null;
var count__53028_53237 = (0);
var i__53029_53238 = (0);
while(true){
if((i__53029_53238 < count__53028_53237)){
var node_53239 = chunk__53027_53236.cljs$core$IIndexed$_nth$arity$2(null,i__53029_53238);
if(cljs.core.not(node_53239.shadow$old)){
var path_match_53240 = shadow.cljs.devtools.client.browser.match_paths(node_53239.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53240)){
var new_link_53241 = (function (){var G__53042 = node_53239.cloneNode(true);
G__53042.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53240),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53042;
})();
(node_53239.shadow$old = true);

(new_link_53241.onload = ((function (seq__53023_53235,chunk__53027_53236,count__53028_53237,i__53029_53238,seq__52956,chunk__52958,count__52959,i__52960,new_link_53241,path_match_53240,node_53239,path,seq__52956__$1,temp__5735__auto__,map__52954,map__52954__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53239);
});})(seq__53023_53235,chunk__53027_53236,count__53028_53237,i__53029_53238,seq__52956,chunk__52958,count__52959,i__52960,new_link_53241,path_match_53240,node_53239,path,seq__52956__$1,temp__5735__auto__,map__52954,map__52954__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53240], 0));

goog.dom.insertSiblingAfter(new_link_53241,node_53239);


var G__53242 = seq__53023_53235;
var G__53243 = chunk__53027_53236;
var G__53244 = count__53028_53237;
var G__53245 = (i__53029_53238 + (1));
seq__53023_53235 = G__53242;
chunk__53027_53236 = G__53243;
count__53028_53237 = G__53244;
i__53029_53238 = G__53245;
continue;
} else {
var G__53246 = seq__53023_53235;
var G__53247 = chunk__53027_53236;
var G__53248 = count__53028_53237;
var G__53249 = (i__53029_53238 + (1));
seq__53023_53235 = G__53246;
chunk__53027_53236 = G__53247;
count__53028_53237 = G__53248;
i__53029_53238 = G__53249;
continue;
}
} else {
var G__53250 = seq__53023_53235;
var G__53251 = chunk__53027_53236;
var G__53252 = count__53028_53237;
var G__53253 = (i__53029_53238 + (1));
seq__53023_53235 = G__53250;
chunk__53027_53236 = G__53251;
count__53028_53237 = G__53252;
i__53029_53238 = G__53253;
continue;
}
} else {
var temp__5735__auto___53254__$1 = cljs.core.seq(seq__53023_53235);
if(temp__5735__auto___53254__$1){
var seq__53023_53255__$1 = temp__5735__auto___53254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53023_53255__$1)){
var c__4556__auto___53256 = cljs.core.chunk_first(seq__53023_53255__$1);
var G__53257 = cljs.core.chunk_rest(seq__53023_53255__$1);
var G__53258 = c__4556__auto___53256;
var G__53259 = cljs.core.count(c__4556__auto___53256);
var G__53260 = (0);
seq__53023_53235 = G__53257;
chunk__53027_53236 = G__53258;
count__53028_53237 = G__53259;
i__53029_53238 = G__53260;
continue;
} else {
var node_53261 = cljs.core.first(seq__53023_53255__$1);
if(cljs.core.not(node_53261.shadow$old)){
var path_match_53262 = shadow.cljs.devtools.client.browser.match_paths(node_53261.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53262)){
var new_link_53263 = (function (){var G__53047 = node_53261.cloneNode(true);
G__53047.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53262),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53047;
})();
(node_53261.shadow$old = true);

(new_link_53263.onload = ((function (seq__53023_53235,chunk__53027_53236,count__53028_53237,i__53029_53238,seq__52956,chunk__52958,count__52959,i__52960,new_link_53263,path_match_53262,node_53261,seq__53023_53255__$1,temp__5735__auto___53254__$1,path,seq__52956__$1,temp__5735__auto__,map__52954,map__52954__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53261);
});})(seq__53023_53235,chunk__53027_53236,count__53028_53237,i__53029_53238,seq__52956,chunk__52958,count__52959,i__52960,new_link_53263,path_match_53262,node_53261,seq__53023_53255__$1,temp__5735__auto___53254__$1,path,seq__52956__$1,temp__5735__auto__,map__52954,map__52954__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53262], 0));

goog.dom.insertSiblingAfter(new_link_53263,node_53261);


var G__53264 = cljs.core.next(seq__53023_53255__$1);
var G__53265 = null;
var G__53266 = (0);
var G__53267 = (0);
seq__53023_53235 = G__53264;
chunk__53027_53236 = G__53265;
count__53028_53237 = G__53266;
i__53029_53238 = G__53267;
continue;
} else {
var G__53268 = cljs.core.next(seq__53023_53255__$1);
var G__53269 = null;
var G__53270 = (0);
var G__53271 = (0);
seq__53023_53235 = G__53268;
chunk__53027_53236 = G__53269;
count__53028_53237 = G__53270;
i__53029_53238 = G__53271;
continue;
}
} else {
var G__53272 = cljs.core.next(seq__53023_53255__$1);
var G__53273 = null;
var G__53274 = (0);
var G__53275 = (0);
seq__53023_53235 = G__53272;
chunk__53027_53236 = G__53273;
count__53028_53237 = G__53274;
i__53029_53238 = G__53275;
continue;
}
}
} else {
}
}
break;
}


var G__53276 = cljs.core.next(seq__52956__$1);
var G__53277 = null;
var G__53278 = (0);
var G__53279 = (0);
seq__52956 = G__53276;
chunk__52958 = G__53277;
count__52959 = G__53278;
i__52960 = G__53279;
continue;
} else {
var G__53280 = cljs.core.next(seq__52956__$1);
var G__53281 = null;
var G__53282 = (0);
var G__53283 = (0);
seq__52956 = G__53280;
chunk__52958 = G__53281;
count__52959 = G__53282;
i__52960 = G__53283;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53049){
var map__53050 = p__53049;
var map__53050__$1 = (((((!((map__53050 == null))))?(((((map__53050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53050):map__53050);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53050__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53056){
var map__53057 = p__53056;
var map__53057__$1 = (((((!((map__53057 == null))))?(((((map__53057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53057):map__53057);
var _ = map__53057__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53057__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53065,done,error){
var map__53066 = p__53065;
var map__53066__$1 = (((((!((map__53066 == null))))?(((((map__53066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53066):map__53066);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53085,done,error){
var map__53086 = p__53085;
var map__53086__$1 = (((((!((map__53086 == null))))?(((((map__53086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53086):map__53086);
var msg = map__53086__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53086__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53086__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53086__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53089){
var map__53092 = p__53089;
var map__53092__$1 = (((((!((map__53092 == null))))?(((((map__53092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53092):map__53092);
var src = map__53092__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53092__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53097 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53097) : done.call(null,G__53097));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53099){
var map__53100 = p__53099;
var map__53100__$1 = (((((!((map__53100 == null))))?(((((map__53100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53100):map__53100);
var msg__$1 = map__53100__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53100__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53102){var ex = e53102;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53103){
var map__53104 = p__53103;
var map__53104__$1 = (((((!((map__53104 == null))))?(((((map__53104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53104):map__53104);
var env = map__53104__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53104__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53106){
var map__53107 = p__53106;
var map__53107__$1 = (((((!((map__53107 == null))))?(((((map__53107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53107):map__53107);
var msg = map__53107__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53107__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53109){
var map__53110 = p__53109;
var map__53110__$1 = (((((!((map__53110 == null))))?(((((map__53110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53110):map__53110);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53112){
var map__53113 = p__53112;
var map__53113__$1 = (((((!((map__53113 == null))))?(((((map__53113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53113):map__53113);
var svc = map__53113__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53113__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
