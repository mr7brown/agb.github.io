var _statcounter=function(_1){var _2=parseInt(sc_project,10);var _3=_2==12225189||_2==11548023||_2==11878871||_2==12214659||_2==981359||_2==9560334||_2==6709687||_2==9879613||_2==4124138||_2==204609||_2==10776808||_2==11601825;try{var _4;var _5=1;if(typeof _1!=="undefined"&&_1.record_pageview){_4=_1;_5=_4._get_script_num()+1}else{if(typeof _1==="undefined"){_4=function(){};_4._pending_tags={}}else{if(_1.start_recording){_4=_1;if(_1._pageview_tags_in){_1=_1._pageview_tags_in}}else{_4=function(){}}if(Object.prototype.toString.call(_1)==="[object Array]"){_4._pending_tags=_1}else{_4._pending_tags={}}}_4._session_increment_calculated={};_4._returning_values={}}_4.push=function(_6){_4._pending_tags=[_6]};var _7=true;var _8=false;if(typeof performance!=="undefined"){try{_8=Math.round(performance.now())}catch(ex){_8=false}}var _9=false;if(document.currentScript&&document.currentScript.src){_9=document.currentScript.src}var _a=0;var _b=0;var _c=-1;var _d=0;var _e="";var _f="";var _10="";var _11="";var _12="";var _13="https";var _14="statcounter.com";var _15="c";var _16="StatCounter - Free Web Tracker and Counter";var _17="";var _18=0;var _19="";var _1a="&u1=za";var _1b="cookie";if(window.sc_client_storage){_1b=window.sc_client_storage}if(typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"){_1b="disabled"}if(window.sc_invisible){if(window.sc_invisible==1){_d=1}}if(window.sc_click_stat){_c=window.sc_click_stat}var _1c=""+document.location;var _1d=new RegExp("^https","i");if(_1c.match(_1d)){_13="https"}if(window.sc_local){_e=sc_local}else{if(_c==-1){_c=1}_e=_13+"://"+_15+"."+_14+"/"}_f=_e;if(window.sc_text){_e+="text.php?"}else{_e+="t.php?"}if(window.sc_project){if(sc_project=="4135125"||sc_project=="6169619"||sc_project=="6222332"||sc_project=="5106510"||sc_project=="6311399"||sc_project=="6320092"||sc_project=="5291656"||sc_project=="7324465"||sc_project=="6640020"||sc_project=="4629288"||sc_project=="1480088"||sc_project=="2447031"){if(Math.floor(Math.random()*6)!=1){_b=1}}_e+="sc_project="+sc_project}else{if(window.usr){_e+="usr="+usr}else{_a=1}}var _1e="sc_counter_content";if(window.sc_remove_link){_10="";_11=""}else{_10="<a id=\""+_1e+"\" class=\"statcounter\" href=\"http://www."+_14+"\" target=\"_blank\">";_11="</a>"}if(window.sc_security){_12=sc_security}var _1f=new Date();var _20=Math.floor(_1f/86400000);var _21=_20-17869;var _22=11200000-(_21*12223);var _23=9000000;if(_22<_23){_22=_23}var _24=_2==4344864||_2==4124138||_2==204609||_2>_22;var _25=_2==204609||_2==4124138;var _26=true;try{if(!(typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&typeof JSON.parse=="function"&&"sessionStorage" in window&&"withCredentials" in new XMLHttpRequest())){_26=false}if(_sessionStorageGetConfig("sc_project_config_"+sc_project)!==null&&_sessionStorageGetConfig("sc_project_time_difference_"+sc_project)!==null){_26=false}if(_sessionStorageGetConfig("sc_block_project_config_"+sc_project)!==null){_26=false}}catch(ignore){_26=false}var _27=[30,60,120,180,360,720,1440,2880,10080];function get_referrer(){var _28=""+document.referrer;try{_28=""+parent.document.referrer}catch(ex){_28=""+document.referrer}if(typeof sc_referer_scr08!=="undefined"){_28=sc_referer_scr08}return _28}_4.get_referrer=get_referrer;var _29=0;var _2a="";_4.inject_script=function(url,_2c){if(url===undefined||!url.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/)){return}var scr=document.createElement("script");scr.type="text/javascript";scr.async=true;if(_2c){scr.onload=_2c}scr.src=url;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(scr,s)};function get_jg_rr_url_params(){if(_2a==""){return "&jg=&rr="}return _2a}function get_page_title(){var _2f=""+document.title;_2f=_2f.substring(0,300);if(encodeURIComponent){_2f=encodeURIComponent(_2f)}else{_2f=escape(_2f)}return _2f}function get_page_url(){var _30=""+document.location;_30=_30.substring(0,300);_30=escape(_30);return _30}function get_screen_width(){return screen.width}function get_screen_height(){return screen.height}function get_performance_url_params(){if(_29==0){var _31="";var _32="";try{if(typeof performance!=="undefined"){var _33=Math.round(performance.now());_31="&sc_rum_e_s="+_8+"&sc_rum_e_e="+_33;var _34=_33-_8;_32=get_performance_tags(_34)}}catch(ex){_31="";_32=""}return _31+_32}return ""}function get_performance_tags(_35){var _36="";if(_25&&typeof performance!=="undefined"){var _37=document.getElementById("sc-ttfb-bd");var _38="-1";if(_37){_38=_37.textContent}var _39=performance.timing.responseStart-performance.timing.connectStart;var _3a=document.getElementById("sc-perf-wh");var _3b=0;if(_3a){_3b=_3a.textContent}var _3c=document.getElementById("sc-perf-pn");var _3d=0;if(_3c){_3d=_3c.textContent}var _3e=document.getElementById("sc-perf-db");var _3f=0;if(_3e){_3f=_3e.textContent}_36="&sc_ev_scperf_js_exec="+_35+"&sc_ev_scperf_ttfb_frontend="+_39+"&sc_ev_scperf_ttfb_backend="+_38+"&sc_ev_scperf_ws="+_3b+"&sc_ev_scperf_pn="+_3d+"&sc_ev_scperf_db="+_3f}return _36}function strip_tags(_40,_41){_41=(((_41||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var _42=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,_43=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return _40.replace(_43,"").replace(_42,function($0,$1){return _41.indexOf("<"+$1.toLowerCase()+">")>-1?$0:""})}function sanitise_tags(_46){for(var i=0;i<_46.length;i++){_46[i]=(""+_46[i]).trim()}return _46}function validate_tags(_48){var _49=10;var _4a=1;var _4b=300;var _4c=[];if(!(_48.length%2==0)){_4c.push("Every tag must have a name and value.")}else{if(_48.length/2>_49){_4c.push("No more than "+_49+" tags can be passed - "+_48.length/2+" passed.")}for(var i=0;i<_48.length;i++){var _4e=(""+_48[i]).length;if(_4e<_4a||_4e>_4b){_4c.push("Tag names and values must be between "+_4a+" and "+_4b+" characters in length ('"+_48[i]+"' is "+_48[i].length+" characters long).")}}for(var i=0;i<_48.length;i++){if(strip_tags(""+_48[i])!=""+_48[i]){_4c.push("Tag names and values may not contain HTML tags.")}}}if(_4c.length!=0){for(var i=0;i<_4c.length;i++){}return false}return true}function get_tag_string(_4f){function _50(obj,_52){var _53=obj.__proto__||obj.constructor.prototype;return (_52 in obj)&&(!(_52 in _53)||_53[_52]!==obj[_52])}if(Object.prototype.hasOwnProperty){var _50=function(obj,_55){return obj.hasOwnProperty(_55)}}var _56="";if(_50(_4f,"tags")&&typeof _4f.tags==="object"){var _57=[];for(var tag in _4f.tags){_57[_57.length]=tag;_57[_57.length]=_4f.tags[tag]}if(validate_tags(_57)){_57=sanitise_tags(_57);for(var i=0;i<_57.length;i=i+2){_56+="&sc_ev_"+encodeURIComponent(_57[i])+"="+encodeURIComponent(_57[i+1])}}}return _56}var _5a=[];var _5b=256;var _5c=6;var _5d=52;var _5e=Math.pow(_5b,_5c),_5f=Math.pow(2,_5d),_60=_5f*2,_61=_5b-1;var _62;var _63=function(_64,_65){var key=[];var _67=mixkey(flatten(_65?[_64,tostring(_5a)]:0 in arguments?_64:autoseed(),3),key);var _68=new ARC4(key);mixkey(tostring(_68.S),_5a);_62=function(){var n=_68.g(_5c),d=_5e,x=0;while(n<_5f){n=(n+x)*_5b;d*=_5b;x=_68.g(1)}while(n>=_60){n/=2;d/=2;x>>>=1}return (n+x)/d};return _67};function ARC4(key){var t,_6e=key.length,me=this,i=0,j=me.i=me.j=0,s=me.S=[];if(!_6e){key=[_6e++]}while(i<_5b){s[i]=i++}for(i=0;i<_5b;i++){s[i]=s[j=_61&(j+key[i%_6e]+(t=s[i]))];s[j]=t}(me.g=function(_73){var t,r=0,i=me.i,j=me.j,s=me.S;while(_73--){t=s[i=_61&(i+1)];r=r*_5b+s[_61&((s[i]=s[j=_61&(j+t)])+(s[j]=t))]}me.i=i;me.j=j;return r})(_5b)}function flatten(obj,_77){var _78=[],typ=(typeof obj)[0],_7a;if(_77&&typ=="o"){for(_7a in obj){try{_78.push(flatten(obj[_7a],_77-1))}catch(e){}}}return (_78.length?_78:typ=="s"?obj:obj+"\x00")}function mixkey(_7b,key){var _7d=_7b+"",_7e,j=0;while(j<_7d.length){key[_61&j]=_61&((_7e^=key[_61&j]*19)+_7d.charCodeAt(j++))}return tostring(key)}function autoseed(_80){try{window.crypto.getRandomValues(_80=new Uint8Array(_5b));return tostring(_80)}catch(e){return [+new Date,window,window.navigator.plugins,window.screen,tostring(_5a)]}}function tostring(a){return String.fromCharCode.apply(0,a)}mixkey(Math.random(),_5a);function detectBrowserFeatures(){var _82=[];var i;var _84;var _85={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};var _86=(new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent)?window.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(navigator.userAgent))){if(navigator.mimeTypes&&navigator.mimeTypes.length){for(var i in _85){if(Object.prototype.hasOwnProperty.call(_85,i)){_84=navigator.mimeTypes[_85[i]];_82.push((_84&&_84.enabledPlugin)?"1":"0")}}}if(typeof navigator.javaEnabled!=="unknown"&&typeof navigator.javaEnabled!=="undefined"&&navigator.javaEnabled()){_82.push("java")}if(typeof window.GearsFactory==="function"){_82.push("gears")}}_82.push(screen.width*_86+"x"+screen.height*_86);return _82.join("")}function generate_uuid(_87){var now=new Date();var _89=false;if(_87===undefined){_87=32;if(_89){_87=36}}var _8a=Math.round(now.getTime()/1000)+now.getMilliseconds();var _8b=(navigator.userAgent||"")+(navigator.platform||"")+detectBrowserFeatures()+now.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+_8a;_63(_8b);var _8c="0123456789ABCDEF".split(""),_8d=new Array(_87),rnd=0,r;for(var i=0;i<_87;i++){if(_89&&(i==8||i==13||i==18||i==23)){_8d[i]="-"}else{if((i==12&&!_89)||(i==14&&_89)){_8d[i]="4"}else{if((i==13&&!_89)||(i==15&&_89)){_8d[i]="F"}else{if(rnd<=2){rnd=33554432+(_62()*16777216)|0}r=rnd&15;rnd=rnd>>4;_8d[i]=_8c[(i==19)?(r&3)|8:r]}}}}return _8d.join("")}var _91;if(typeof window.sc_cookie_domain=="undefined"){_91=document.location.host.replace(/^www\./,"")}else{_91=window.sc_cookie_domain}if(_91.substring(0,1)!="."){_91="."+_91}function _localStorageAvailable(){var _92=false;if("localStorage" in window){try{_92=window["localStorage"]!==null}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}}}return _92}function _setLocalStorage(_93,_94,_95){if(_localStorageAvailable()){try{if(_93==="is_visitor_unique"){localStorage.setItem("statcounter.com/localstorage/",_94)}else{localStorage.setItem("statcounter_"+_93,_94)}}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}return false}return true}return false}function setLocal(_96,_97,_98,_99,_9a,_9b){if(typeof _97==="string"){_97=[_97]}if(_99===undefined){_99=""}if(_9a===undefined){_9a=30}var _9c=false;if(_1b=="localStorage"){_9c=_setLocalStorage(_96,_99+_97.join("-"),_98);if(!_9c){_9c=_writeCookie(_96,_99+_97.join("-"),_98,undefined,_9b)}else{if(_readCookie(_96)!==null){_removeCookie(_96,_98)}}}else{var _9d=_97.slice(0,_9a).join("-");_9c=_writeCookie(_96,_99+_9d,_98,undefined,_9b);if(!_9c){_9c=_setLocalStorage(_96,_99+_97.join("-"),_98)}else{if(_97.length>_9a){_setLocalStorage(_96,"mx"+_97.slice(_9a).join("-"),_98)}else{_removeLocalStorage(_96)}}}return _9c}function getLocal(_9e,_9f){var val=null;if(_localStorageAvailable()){if(_9e==="is_visitor_unique"){val=localStorage.getItem("statcounter.com/localstorage/")}else{val=localStorage.getItem("statcounter_"+_9e)}}if(_1b=="localStorage"&&val!==null&&val.substring(0,2)=="rx"){return val}var _a1=_readCookie(_9e,_9f);if(val!==null){if(_a1===null&&val.substring(0,2)=="rx"){return val}else{if(_a1!==null&&val.substring(0,2)=="mx"){_a1+="-"+val.substring(2)}}}return _a1}function _removeLocalStorage(_a2){if(_localStorageAvailable()){if(_a2==="is_visitor_unique"){localStorage.removeItem("statcounter.com/localstorage/")}localStorage.removeItem("statcounter_"+_a2)}}function removeLocal(_a3,_a4){_removeLocalStorage(_a3);if(_readCookie(_a3)){_removeCookie(_a3,_a4)}}function _readCookie(_a5,_a6){var _a7="sc_"+_a5+"=";var ret=null;if(document.cookie){var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1,c.length)}if(c.indexOf(_a7)==0){var _ac=c.substring(_a7.length,c.length);if(ret&&_a6!==undefined&&ret.indexOf(""+_a6+".")!==-1&&_ac.indexOf(""+_a6+".")===-1){}else{ret=_ac}}}}return ret}function _writeCookie(_ad,_ae,_af,_b0,_b1){var _b2=false;if(_b0===undefined){_b2=1000*60*60*24*365*2}else{if(_b0!=="session"){_b2=1000*_b0}}var _b3="";if(_b2!==false){var _b4=new Date();_b4.setTime(_b4.getTime()+_b2);_b3="; expires="+_b4.toGMTString()}var _b5=3050;if(_ae.length>_b5-50&&_ae.substring(0,_b5).indexOf("-")!==-1){_ae=_ae.substring(0,_ae.substring(0,_b5).lastIndexOf("-"))}var _b6="; SameSite=Lax";document.cookie="sc_"+_ad+"="+_ae+_b3+"; domain="+_af+"; path=/"+_b6;var rc=_readCookie(_ad,_b1);if(rc!==null&&rc===_ae){return true}else{return false}}function _removeCookie(_b8,_b9){if(document.location.host=="www"+_b9){document.cookie="sc_"+_b8+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www"+_b9+"; path=/; SameSite=Lax"}document.cookie="sc_"+_b8+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+_b9+"; path=/; SameSite=Lax"}function _getConfigDataStructureFromSession(){var _ba={};try{if(sessionStorage.getItem("statcounter_config")!==null){_ba=JSON.parse(sessionStorage.getItem("statcounter_config"))}}catch(ignore){_ba={}}return _ba}function _sessionStorageGetConfig(key){if(!("sessionStorage" in window)){return null}var _bc=_getConfigDataStructureFromSession();if(_bc[key]!==undefined){return _bc[key]}var _bd=null;try{_bd=sessionStorage.getItem(key)}catch(ignore){return null}if(_bd!==null){_sessionStorageSetConfig(key,_bd);sessionStorage.removeItem(key);return _bd}return null}function _sessionStorageSetConfig(key,_bf){if(!("sessionStorage" in window)){console.log("returning false");return false}var _c0=_getConfigDataStructureFromSession();try{_c0[key]=_bf;return sessionStorage.setItem("statcounter_config",JSON.stringify(_c0))}catch(ignore){return false}}var _c1=(function(){var _c2=false;return function(_c3){if(_c2){return}var _c4=_sessionStorageGetConfig("record_"+_c3);if(!_c4||!_c4.match(/(^on$|test$|wsdev$|^dev[0-9]*)/)){return}if(!_4._session_increment_calculated[_c3]){return}if(!_sessionStorageGetConfig("sc_project_time_difference_"+_c3)){return}if(_4.start_recording){_4.start_recording(_c3,_c4)}else{var _c5="https://www.statcounter.com/counter/recorder.js";if(_9){_c5=_9.replace(/\/counter([^\/])/,"/recorder$1")}if(_c4.indexOf("test")!=-1){_c5=_c5.replace(/\/recorder(.[^t])/,"/recorder_test$1")}if(_c4.substring(0,3)=="dev"&&_c4!=="dev"){_c5=_c5.replace(/\/\/(www\.|secure\.)?/,"//"+_c4.replace(/\//g,"").replace("test","").replace("wsdev","")+".")}_4.inject_script(_c5,function(){_statcounter.start_recording(_c3,_c4)})}_c2=true}}());function config_ping(url,_c7){url=url+"&get_config=true";var _c8=new XMLHttpRequest();_c8.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var _c9=JSON.parse(this.responseText);_sessionStorageSetConfig("sc_project_config_"+_2,1);_sessionStorageSetConfig("sc_project_time_difference_"+_2,parseInt(_c9["time_difference"]));if(_c9["visitor_recording"]===1){_4.record(_2)}if(typeof _c7!=="undefined"){_c7(_c9)}}};function XHRErrorHandler(_ca){_sessionStorageSetConfig("sc_block_project_config_"+_2,1)}_c8.withCredentials=true;_c8.addEventListener("error",XHRErrorHandler);_c8.open("GET",url,true);_c8.send()}var _cb={"google":null,"bing":["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,"baidu":["wd","word"],"yandex":["text"],"ya.ru":["text"],"haosou":["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],"aol":["query","q"],"duckduckgo":null,"ask.com":["q","QUERYT"],"mail.ru":["words"],"sogou":["q","query"]};var _cc={"fb":["facebook.com","fb.me"],"pi":["pinterest.com"],"tw":["twitter.com","t.co"],"ln":["linkedin.com"],"in":["instagram.com"],"rd":["reddit.com"],"tb":["tumblr.com"],"st":["stumbleupon.com"],"yt":["youtube.com"],"gp":["plus.google.com","plus.url.google.com"]};function check_root_domains_match(a,b){var _cf=a.split(".");var _d0=b.split(".");var _d1=Math.min(_cf.length,_d0.length);var _d2=2;if(_cf.length>1&&((_cf[_cf.length-2].length<=3&&_cf[_cf.length-1] in {"at":1,"au":1,"br":1,"es":1,"hu":1,"il":1,"nz":1,"tr":1,"uk":1,"us":1,"za":1})||_cf[_cf.length-1]=="kr"||_cf[_cf.length-1]=="ru"||(_cf[_cf.length-1]=="au"&&_cf[_cf.length-2] in {"csiro":1})||(_cf[_cf.length-1]=="at"&&_cf[_cf.length-2] in {"priv":1})||(_cf[_cf.length-1]=="fr"&&_cf[_cf.length-2] in {"avocat":1,"aeroport":1,"veterinaire":1})||(_cf[_cf.length-1]=="hu"&&_cf[_cf.length-2] in {"film":1,"lakas":1,"ingatlan":1,"sport":1,"hotel":1})||(_cf[_cf.length-1]=="nz"&&_cf[_cf.length-2] in {"geek":1,"kiwi":1,"maori":1,"school":1,"govt":1,"health":1,"parliament":1})||(_cf[_cf.length-1]=="il"&&_cf[_cf.length-2] in {"muni":1})||(_cf[_cf.length-1]=="za"&&_cf[_cf.length-2] in {"school":1})||(_cf[_cf.length-1]=="tr"&&_cf[_cf.length-2] in {"name":1})||(_cf[_cf.length-1]=="uk"&&_cf[_cf.length-2] in {"police":1}))){_d2=3}for(var i=1;i<=_d1;i++){if(_cf[_cf.length-i]!=_d0[_d0.length-i]){return false}if(i>=_d2){return true}}return _cf.length==_d0.length}function classify_referrer(r){if(r==""){return "d"}var _d5=r.split("/")[2].replace(/^www\./,"");var _d6=document.location.host.replace(/^www\./,"");if(_24){if(_d6==_d5){return "internal"}if(check_root_domains_match(_d5,_d6)){return "internal"}}if(r.search(/\bgoogle\..*\?.*adurl=http/)!==-1){return "p"}var _d7=["utm_source=bing","?gclid=","&gclid=","utm_medium=cpc","utm_medium=paid-media","utm_medium=ppc"];for(var i=0;i<_d7.length;i++){if(document.location.search.indexOf(_d7[i])!==-1){return "p"}}var _d9=["utm_medium=email"];for(var i=0;i<_d9.length;i++){if(document.location.search.indexOf(_d9[i])!==-1){return "e"}}if(!_24){if(_d6==_d5){return "internal"}}for(var _da in _cb){if(_d5.replace(_da,"#").split(".").indexOf("#")!==-1){if(_cb[_da]===null){return _da}for(var i=0;i<_cb[_da].length;i++){var _db=_cb[_da][i];if(r.indexOf("?"+_db+"=")!==-1||r.indexOf("&"+_db+"=")!==-1){return _da}}}}for(var _dc in _cc){for(var i=0;i<_cc[_dc].length;i++){var _da=_cc[_dc][i];if(_d5.replace(_da,"#").split(".").indexOf("#")!==-1){return _dc}}}return _d5}function categorize_class(cls){if(cls=="d"||cls=="p"||cls=="e"||cls=="internal"){return cls}if(cls in _cb){return "o"}if(cls in _cc){return "s"}return "r"}var _de=escape(get_referrer());_4.record_pageview=function(_df){if(typeof _df==="undefined"){_df=_4._pending_tags}_4._pending_tags={};_2a="";var _e0="";if(_b!=1){if(document.webkitVisibilityState!="prerender"){_18=0}else{_18=1;document.addEventListener("webkitvisibilitychange",function(evt){if(_18==1){_18=2;sc_send_data()}else{return}},false)}}if(!_24){var _e2=classify_referrer(_de);var _e3=categorize_class(_e2);if(_e2!="internal"){_e0="&rcat="+_e3+"&rdom="+_e2}}var _e4=Math.round((new Date()).getTime()/1000);if(_1b!="disabled"){if(_24){var _e2=classify_referrer(_de);var _e3=categorize_class(_e2);if(_e2!="internal"){_e0="&rcat="+_e3+"&rdom="+_e2}}try{var _e5=JSON.parse(localStorage.getItem("sc_medium_source"));if(_e5==null){_e5={}}var _e6=null;var _e7=null;var _e8=null;var msl=0;for(var k in _e5){if(_e6===null||_e5[k]>_e5[_e6]){_e6=k}var _eb=categorize_class(k);if(_e3==_eb&&(_e7===null||_e5[k]>_e5[_e7])){_e7=k}if(_eb=="r"&&(_e8===null||_e5[k]<_e5[_e8])){_e8=k}msl+=1}if(msl>30&&_e8!==null){delete _e5[_e8]}var _ec="";if(sessionStorage.getItem("statcounter_bounce")){sessionStorage.removeItem("statcounter_bounce");_ec="&bb=0"}var _ed=30;if(!_24){_ed=15}if(_e2=="d"&&_e6!==null&&_e6!="d"&&(_e4-_e5[_e6])<60*_ed){_e2="internal"}if(_24){if(sessionStorage.getItem("statcounter_session")&&(_e4-parseInt(sessionStorage.getItem("statcounter_session"),10))<60*30){_e2="internal"}sessionStorage.setItem("statcounter_session",_e4)}if(!_24){if(_e3=="r"&&sessionStorage.getItem("statcounter_exit_domain")==_e2){_e2="internal"}}if(_e2=="internal"){if(_e6!==null){_e0="&rcat="+categorize_class(_e6)+"&rdomo="+_e6;_e0+="&rdomg="+(_e4-_e5[_e6]);_e5[_e6]=_e4}}else{var _ee=false;if(_e2 in _e5){if(_e2==_e6){_e0=_e0.replace("rdom=","rdomo=")}_e0+="&rdomg="+(_e4-_e5[_e2]);if(_e4-_e5[_e2]<60*30){_ee=true}}else{_e0+="&rdomg=new"}if(_ec==""&&!_ee){sessionStorage.setItem("statcounter_bounce","1");_ec="&bb=1"}if(_e7!==null&&(!(_e2 in _e5)||_e2!=_e7)){_e0+="&rcatg="+(_e4-_e5[_e7])}_e5[_e2]=_e4}_e0+=_ec;try{localStorage.setItem("sc_medium_source",JSON.stringify(_e5))}catch(maybe_not_enough_space){if(_24){_e0=""}}}catch(e){if(_24){_e0=""}}if(_2==10227105){try{var _ef=new Image();_ef.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(localStorage.getItem("statcounter.com/localstorage/")+":::"+_readCookie("is_visitor_unique",_2))}catch(ignore){}}var _f0="1.1.1.1.1.1.1.1.1";var _f1="is_visitor_unique";try{var _f2=getLocal(_f1,_2)}catch(e){var _f2=false;_19=".ex"}var _f3=[];var _f4=[];if(_f2&&_f2.substring(0,2)=="rx"){removeLocal(_f1,_91);var _f5=_f2.substring(2);_f3=_f5.split("-");var _f6=false;var _f7=false;for(var i=0;i<_f3.length;i++){var _f9=_f3[i].split(".");if(_f9[0]==sc_project){_f6=true;var _fa=parseInt(_f9[1],10);_4._returning_values[_2]=[];var _fb=2;if(_f9[2].length==32){_19="."+_f9[2];_fb=3}else{_19=_f7}for(var ir=0;ir<_27.length;ir++){var _fd=parseInt(_f9[ir+_fb],10);if(isNaN(_fd)){_fd=1}_4._returning_values[_2].push(_fd)}_2a+="&jg="+(_e4-_fa);for(var ir=0;ir<_27.length;ir++){if(_e0.indexOf("rdom=")!==-1){_4._returning_values[_2][ir]++}else{if(_e4>(_fa+60*_27[ir])){_4._returning_values[_2][ir]++}}}_2a+="&rr="+_4._returning_values[_2].join(".");_f4.push(sc_project+"."+_e4+_19+"."+_4._returning_values[_2].join("."))}else{_f4.push(_f3[i]);if(i==0&&_f9[2].length==32&&_19==""){_19="."+_f9[2]}}if(i==0){_f7=_19}}if(!_f6){if(_f4.length==0&&_19==""){_19="."+generate_uuid()}_f4.push(sc_project+"."+_e4+_19+"."+_f0);_4._returning_values[_2]=_f0.split(".");_2a+="&jg=new&rr="+_f0}_f4.sort(function(a,b){return parseInt(b.split(".")[1],10)-parseInt(a.split(".")[1],10)});for(var iv=1;iv<_f4.length;iv++){_f4[iv]=_f4[iv].replace("."+_f4[0].split(".")[2]+".",".")}var _101=setLocal(_f1,_f4,_91,"rx",3,_2);if(!_101){}}else{if(_19!=".ex"){_19="."+generate_uuid();_f4=[sc_project+"."+_e4+_19+"."+_f0];var _102=setLocal(_f1,_f4,_91,"rx",3,_2);if(_102){_4._returning_values[_2]=_f0.split(".");_2a+="&jg=new&rr="+_f0}else{_19=".na"}}}_4._session_increment_calculated[_2]=true;if(_19!=""){_1a="&u1="+_19.substring(1)}}else{}var _103="";if(Object.prototype.toString.call(_df)==="[object Array]"){var _104=_df.length;if(_104>=1){_103=get_tag_string(_df[0])}}var _105=_e;_105+="&java=1&security="+_12+_1a;if(typeof performance!=="undefined"){try{var _106=performance.getEntriesByType("resource");for(var i=0;i<_106.length;i++){var _107=_106[i];if(_107.name.includes("statcounter.com/counter/counter.js")||_107.name.includes("statcounter.com/counter/counter_test.js")){var _108=_107.responseEnd-_107.fetchStart;_105+="&sc_rum_f_s="+Math.round(_107.requestStart)+"&sc_rum_f_e="+Math.round(_107.responseEnd);break}}}catch(e){}}var _109=_2a+"&resolution="+get_screen_width()+"&h="+get_screen_height()+"&camefrom="+_de.substring(0,600)+"&u="+get_page_url()+"&t="+get_page_title()+_e0+"&sc_snum="+_5+_103+"&sess="+_4.version();if(window.sc_counter_width&&window.sc_counter_height){_17=" width=\""+sc_counter_width+"\" height=\""+sc_counter_height+"\""}if(window.sc_remove_alt){_16=""}if(_a==1){document.writeln("Code corrupted. Insert fresh copy.")}else{if(_b==1){}else{sc_send_data()}}function sc_send_data(){if(_d==1||_18==2){_109+="&p="+_18+"&invisible=1";var _10a=false;if(_19!=""&&typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&"sessionStorage" in window){_10a=true}var _10b=false;if(_10a){try{var _10c=sessionStorage.getItem("statcounter_pending");if(!_10c){var _10d={}}else{try{var _10d=JSON.parse(_10c)}catch(ignore){var _10d={}}}if(_10d[sc_project]===undefined){_10d[sc_project]={}}var now=new Date().getTime();_10d[sc_project][now]=_109;while(true){_10c=JSON.stringify(_10d);if(_10c=="{}"){sessionStorage.removeItem("statcounter_pending");break}var _10f=_10c.split(/:.{20}/).length-1;if(_10f<20){var _110=true;try{sessionStorage.setItem("statcounter_pending",_10c)}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){throw e}_110=false}if(_110){break}}var _111=false;var _112=false;var _113=false;for(var _114 in _10d){for(var _115 in _10d[_114]){var _116=/jg=(\d+)/.exec(_10d[_114][_115]);if(_116!==null){var _117=parseInt(_116[1])}else{var _117=false}if(_111===false||(_117!==false&&_117<_111)){if(_117!==false){_111=_117}_112=_114;_113=_115}}}if(_113===false){break}delete _10d[_112][_113];if(JSON.stringify(_10d[_112])=="{}"){delete _10d[_112]}}for(var ts in _10d[sc_project]){(function(_119,_11a){var _11b=_10d[_11a][_119];function post_hit_pending_cleanup(){if(_10d[_11a]!==undefined){delete _10d[_11a][_119];if(JSON.stringify(_10d[_11a])=="{}"){delete _10d[_11a]}}var _11c=JSON.stringify(_10d);if(_11c=="{}"){sessionStorage.removeItem("statcounter_pending")}else{sessionStorage.setItem("statcounter_pending",_11c)}}if(_119!=now){_11b+="&pg="+Math.round((now-_119)/1000)}else{_10b=true}var _11d=_105+get_performance_url_params()+"&sc_random="+Math.random()+_11b;if(_26){config_ping(_11d,function(_11e){post_hit_pending_cleanup()})}else{if(!navigator.sendBeacon){var _11f=new Image();_11f.onload=function(){post_hit_pending_cleanup()};_11f.src=_11d}else{navigator.sendBeacon(_11d,"");post_hit_pending_cleanup()}}})(parseInt(ts,10),sc_project)}}catch(e){if(_3){if(typeof encodeURIComponent!="function"){encodeURIComponent=function(s){return escape(s)}}var _121="";for(var prop in e){_121+="e["+prop+"]: "+e[prop]+"\n"}_121+="unique_returning: "+_2a+"\n";_121+="uuid: "+_19+"\n";_121+="toString(): "+" value: ["+e.toString()+"]\n";var _123=new Image();_123.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=pending%20exception:%20"+encodeURIComponent(_121)}}}if(!_10a||!_10b){if(_26){config_ping(_105+get_performance_url_params()+"&sc_random="+Math.random()+_109)}else{if(!navigator.sendBeacon){var _124=new Image();_124.src=_105+get_performance_url_params()+"&sc_random="+Math.random()+_109}else{var _125=_105+get_performance_url_params()+"&sc_random="+Math.random()+_109;navigator.sendBeacon(_125,"")}}}}else{var _126=_105+get_performance_url_params()+"&sc_random="+Math.random()+_109+"&p="+_18;if(!config_ping){_126=_126.replace(/&/g,"&amp;")}if(window.sc_text){if(_26){document.writeln("<span class=\"statcounter\" id=\""+_1e+"\"></span>");config_ping(_126+"&text="+sc_text,function(_127){document.getElementById(_1e).innerHTML=_127["text"]})}else{document.writeln("<scr"+"ipt"+" src="+_126+"&amp;text="+sc_text+"></scr"+"ipt>")}}else{if(_26){document.writeln("<span class=\"statcounter\">"+_10+"Statcounter"+_11+"</span>");config_ping(_126,function(_128){var _129="<img src=\""+_128["counter_image"]+"\" alt=\""+_16+"\" border=\"0\""+_17+">";document.getElementById(_1e).innerHTML=_129})}else{document.writeln("<span class=\"statcounter\">"+_10+"<img src=\""+_126+"\" alt=\""+_16+"\" border=\"0\""+_17+">"+_11+"</span>")}}}}_de=get_page_url();_c1(_2);_29++};function sc_process_anchor(_12a){var _12b=function(){sc_clickstat_call(this,_f);return true};if(_12a.addEventListener){_12a.addEventListener("mousedown",_12b)}else{if(_12a.attachEvent){_12a.attachEvent("onmousedown",_12b)}}}function sc_none(){return}function sc_delay(){if(window.sc_click_stat){var d=window.sc_click_stat}else{var d=0}var n=new Date();var t=n.getTime()+d;while(n.getTime()<t){var n=new Date()}}function sc_clickstat_call(_12f,_130){var _131=window.sc_project;var _132=_12;var _133="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";if(typeof (window.sc_download_type)=="string"){_133=window.sc_download_type}var _134="https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";var _135="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";var dl=new RegExp("\\.("+_133+")$","i");var lnk=new RegExp("^("+_134+"):","i");var _138=new RegExp("^("+_135+")$","i");var _139=location.host.replace(/^www\./i,"");var _13a=_139.split(".");var _13b=_13a.pop();var _13c=_13a.pop();if(_138.test(_13c)){_13b=_13c+"."+_13b;_13c=_13a.pop()}_13b=_13c+"."+_13b;var _13d="^https?://(.*)("+_13b+"|webcache.googleusercontent.com)";var _13e=new RegExp(_13d,"i");if(_12f){var _13f=0;if(lnk.test(_12f)){if((_13e.test(_12f))){if(dl.test(_12f)){_13f=1}else{if(window.sc_exit_link_detect&&new RegExp(sc_exit_link_detect,"i").test(_12f)){_13f=2}else{if(_c==2){_13f=2}}}}else{_13f=2}}if(_13f!=0){var _140=escape(_12f);if(_140.length>0){if(!_24){if(_13f==2&&_1b!="disabled"){try{sessionStorage.setItem("statcounter_exit_domain",_140.split("/")[2].replace(/^www\./,""))}catch(ignore){}}}var _141=_130+"click.gif?sc_project="+_131+"&security="+_132+"&c="+_140+"&m="+_13f+"&u="+get_page_url()+"&t="+get_page_title()+"&sess="+_4.version()+"&rand="+Math.random()+_1a;_141+=get_jg_rr_url_params();var _142=new Image();_142.onload=sc_none;_142.src=_141;if(_4._add_recording_event){_4._add_recording_event(_13f==1?"download":_13f==2?"exit":"unknown",{"link":unescape(_140)})}sc_delay()}}}}var _143="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";var _144="^aswift_[0-9]+$";var _145;var _146;var _147;var _148;function sc_adsense_click(_149){var _14a=window.sc_project;var _14b=_12;if(_149.src.match(_143)){var _14c=escape(_149.src)}else{var _14c=escape("Google Adsense "+_149.width+"x"+_149.height)}var _14d=_f+"click.gif?sc_project="+_14a+"&security="+_14b+"&c="+_14c+"&m=2&u="+get_page_url()+"&t="+get_page_title()+"&sess="+_4.version()+"&rand="+Math.random()+_1a;_14d+=get_jg_rr_url_params();if(!navigator.sendBeacon){var i=new Image();i.src=_14d;sc_delay()}else{navigator.sendBeacon(_14d,"")}if(_4._add_recording_event){_4._add_recording_event("adsense",{"link":unescape(_14c)})}}function sc_adsense_init(){var _14f=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var _150=/Firefox/.test(navigator.userAgent)&&/Android/.test(navigator.userAgent);if(_7&&(_14f||_150)){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].id.substring(0,6)=="aswift"){el[i].addEventListener("mouseenter",function(e){sc_adsense_click(this)})}}}else{if(document.all&&typeof window.opera=="undefined"){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].src.match(_143)||el[i].id.match(_144)){el[i].onfocus=function(){sc_adsense_click(this)}}}}else{if(typeof window.addEventListener!="undefined"){var _154="unload";if(_7){_154="beforeunload";focus();window.addEventListener("blur",function(){var _155=document.activeElement;_147=_155;_148=new Date().getTime()})}window.addEventListener(_154,sc_exitpage,false);window.addEventListener("mousemove",sc_getmouse,true)}}}}function sc_getmouse(e){if(typeof e.pageX=="number"){_145=e.pageX;_146=e.pageY}else{if(typeof e.clientX=="number"){_145=e.clientX;_146=e.clientY;if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){_145+=document.body.scrollLeft;_146+=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){_145+=document.documentElement.scrollLeft;_146+=document.documentElement.scrollTop}}}}}function sc_findy(obj){var y=0;while(obj){y+=obj.offsetTop;obj=obj.offsetParent}return (y)}function sc_findx(obj){var x=0;while(obj){x+=obj.offsetLeft;obj=obj.offsetParent}return (x)}function sc_exitpage(e){var ad=document.getElementsByTagName("iframe");if(typeof _145!="undefined"){for(var i=0;i<ad.length;i++){var _15e=sc_findx(ad[i]);var _15f=sc_findy(ad[i]);var adW=parseInt(_15e,10)+parseInt(ad[i].width,10)+15;var adH=parseInt(_15f,10)+parseInt(ad[i].height,10)+10;var _162=(_145>(_15e-10)&&_145<adW);var _163=(_146>(_15f-10)&&_146<adH);if(_163&&_162){if(ad[i].src.match(_143)||ad[i].id.match(_144)){sc_adsense_click(ad[i])}}}}if(_7){if(typeof _147!="undefined"&&_147.id.substring(0,6)=="aswift"){var _164=new Date().getTime()-_148;if(_164<300){sc_adsense_click(_147)}}}}var _165=0;function initiate_click_detection(){if(_c>0){if(_165!=1){_165=1;if(document.getElementsByTagName){var _166=document.getElementsByTagName("a");var _167=document.getElementsByTagName("area");for(var i=0;i<_166.length;i++){var _169=_166[i];sc_process_anchor(_169)}for(var i=0;i<_167.length;i++){var _169=_167[i];if(typeof _169.hasAttribute==="function"&&_169.hasAttribute("href")){sc_process_anchor(_169)}}}if(typeof window.addEventListener!="undefined"){window.addEventListener("load",sc_adsense_init,false)}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",sc_adsense_init,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",sc_adsense_init)}else{if(typeof window.onload=="function"){var _16a=onload;window.onload=function(){_16a();sc_adsense_init()}}else{window.onload=sc_adsense_init}}}}}}}initiate_click_detection();_4.get_visitor_id=function(){if(_19.length>1){return _19.substring(1)}return "x-no-visitor"};_4.get_session_num=function(_16b){var _16c=_sessionStorageGetConfig("sc_project_time_difference_"+_16b);if(_16c!=false&&_4._session_increment_calculated[_16b]&&_4._returning_values[_16b].length==_27.length){for(var i=0;i<_27.length;i++){if(_27[i]*60==parseInt(_16c)){return _4._returning_values[_16b][i]}}}return "x-no-session-num-"+Math.round(100000*Math.random())};_4.version=function(){return "1b3daf"};_4.get_tab_session=function(){var _16e=false;try{_16e=sessionStorage.getItem("statcounter_tab_session");if(!_16e){_16e=generate_uuid(8);try{sessionStorage.setItem("statcounter_tab_session",_16e)}catch(e){_16e=false}}}catch(e){_16e=false}if(_16e===false){session_tab_id="x-no-session-storage-"+Math.round(100000*Math.random())}else{return _16e}};_4.record=function(_16f,_170){if(_170===undefined){_170="on"}else{}if(_16f===undefined||_16f==="on"||_16f==="dev"){console.log("Turning on session recording for p"+_2);_16f=_2}else{if(parseInt(_16f,10)+""==_16f){_16f=parseInt(_16f,10)}else{return}}_sessionStorageSetConfig("record_"+_16f,_170);_c1(_16f)};_4.clickstat_call=sc_clickstat_call;_4._get_script_num=function(){return _5};return _4}catch(e){if(_3){if(typeof encodeURIComponent!="function"){encodeURIComponent=function(s){return escape(s)}}var _172="";for(var prop in e){_172+="property: "+prop+" value: ["+e[prop]+"]\n"}_172+="toString(): "+" value: ["+e.toString()+"]\n";var _174=new Image();_174.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(_172)}_2a="";_1a="&u1=f2"}}(_statcounter);_statcounter.record_pageview();