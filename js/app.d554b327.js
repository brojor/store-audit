(function(e){function t(t){for(var o,s,r=t[0],u=t[1],i=t[2],l=0,k=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&k.push(a[s][0]),a[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(k.length)k.shift()();return p.push.apply(p,i||[]),n()}function n(){for(var e,t=0;t<p.length;t++){for(var n=p[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(p.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},p=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/store-audit/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var d=u;p.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"26af":function(e,t,n){},3278:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("StoreAudit")],1)},p=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",[e._v("Store audit")]),e._l(e.table,(function(t,o,a){return n("div",{key:a,staticClass:"kategory"},[n("div",{staticClass:"kategory-title",class:{active:e.activeKategory===a},on:{click:function(t){return e.dropDown(a)}}},[e._v(" "+e._s(e.kategories[o])),n("span",{staticClass:"rt-idx"},[e._v(" "+e._s(e.calcCurrentScore(o)+" / "+e.calcAvailableScore(o))+" ")])]),n("transition",{attrs:{name:"roll"}},[e.activeKategory===a?n("div",{staticClass:"points"},e._l(t,(function(t,a,p){return n("div",{key:p,ref:"trgt",refInFor:!0,staticClass:"point transformSlow",class:t.status,attrs:{draggable:"true"},on:{touchstart:function(t){return e.touchstart(p,t)},touchend:e.touchend,touchmove:function(n){return e.touchmove(t,o,a,n)}}},[n("p",[e._v(e._s(e.points[o][a]))])])})),0):e._e()])],1)})),n("RootModal"),e.hiddeAll?n("div",{staticClass:"secret"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.unhide(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",placeholder:"Zadejte heslo"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]):e._e()],2)},r=[],u=(n("13d5"),n("b64b"),n("07ac"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MyModal",{attrs:{isOpen:e.isOpen,info:e.info},on:{close:e.handleClose}})}),i=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isOpen?n("div",{staticClass:"overlay"},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"title"},[e._v("Přidání poznámky")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:"Zde stručně popište problém..",rows:"8"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{on:{click:e.handleSubmit}},[e._v("Uložit")])])]):e._e()},l=[],k=new o["a"],c={name:"MyModal",props:["isOpen"],data:function(){return{message:""}},methods:{handleSubmit:function(){k.$emit("commentAdded",this.message),this.message="",this.$emit("close")}}},v=c,m=(n("57b2"),n("2877")),h=Object(m["a"])(v,d,l,!1,null,"4b37b3fb",null),z=h.exports,j={name:"RootModal",components:{MyModal:z},data:function(){return{isOpen:null,info:null}},created:function(){var e=this;k.$on("open",(function(t){e.isOpen=!0,e.info=t})),document.addEventListener("keyup",this.handleKeyup)},beforeDestroy:function(){document.removeEventListener("keyup",this.handleKeyup)},methods:{handleClose:function(){this.isOpen=!1},handleKeyup:function(e){27===e.keyCode&&this.handleClose()}}},b=j,y=Object(m["a"])(b,u,i,!1,null,null,null),f=y.exports,g=n("d5a5"),w=n.n(g),P=n("ef49"),x={name:"StoreAudit",components:{RootModal:f},data:function(){return{hiddeAll:!0,password:"",modal:!1,kategories:P["kategories"],points:P["points"],weights:P["weights"],emitet:"",table:w.a,activeKategory:null,posX:{},touchTarget:null,justEdited:{}}},methods:{unhide:function(){"únor"===this.password.toLowerCase()&&(this.hiddeAll=!1)},touchstart:function(e,t){console.log(t),this.posX.start=t.touches[0].clientX,this.touchTarget=this.$refs.trgt[e],this.touchTarget.classList.remove("transformSlow")},touchend:function(e){console.log(e),this.touchTarget.style.transform="translate3d(0px, 0px, 0px)",this.touchTarget.classList.add("transformSlow")},touchmove:function(e,t,n,o){var a=o.touches[0].clientX,p=a-this.posX.start;if(Math.abs(p)>20&&(this.touchTarget.style.transform="translate3d(".concat(p,"px, 0px, 0px)")),Math.abs(p)>window.innerWidth/3){var s=e.status,r=p>0?"right":"left";"accept"!==s&&"right"===r&&this.swipedRigth(t,n),"reject"!==s&&"left"===r&&this.swipedLeft(t,n)}},dropDown:function(e){this.activeKategory=this.activeKategory===e?null:e},calcAvailableScore:function(e){return Object.values(P["weights"][e]).reduce((function(e,t){return e+t}))},calcCurrentScore:function(e){var t=this,n=Object.keys(P["weights"][e]);return n.reduce((function(n,o){return"accept"===t.table[e][o].status?n+P["weights"][e][o]:n}),0)},swipedRigth:function(e,t){this.table[e][t].status="accept"},swipedLeft:function(e,t){this.table[e][t].status="reject",this.justEdited={kategory:e,point:t},setTimeout((function(){k.$emit("open")}),500)}},created:function(){var e=this;k.$on("commentAdded",(function(t){var n=e.justEdited,o=n.kategory,a=n.point;e.table[o][a].note=t}))}},O=x,S=(n("927e"),Object(m["a"])(O,s,r,!1,null,"abae0e0c",null)),_=S.exports,M={name:"App",components:{StoreAudit:_}},C=M,A=(n("034f"),Object(m["a"])(C,a,p,!1,null,null,null)),T=A.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(T)}}).$mount("#app")},"57b2":function(e,t,n){"use strict";n("3278")},"85ec":function(e,t,n){},"927e":function(e,t,n){"use strict";n("26af")},d5a5:function(e,t){e.exports={kat0:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""}},kat1:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""},p6:{status:"",note:""},p7:{status:"",note:""}},kat2:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""},p6:{status:"",note:""},p7:{status:"",note:""},p8:{status:"",note:""},p9:{status:"",note:""}},kat3:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""}},kat4:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""},p6:{status:"",note:""}},kat5:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""},p6:{status:"",note:""},p7:{status:"",note:""},p8:{status:"",note:""},p9:{status:"",note:""}},kat6:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""}},kat7:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""}},kat8:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""},p6:{status:"",note:""},p7:{status:"",note:""},p8:{status:"",note:""}},kat9:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""}},kat10:{p0:{status:"",note:""},p1:{status:"",note:""},p2:{status:"",note:""},p3:{status:"",note:""},p4:{status:"",note:""},p5:{status:"",note:""},p6:{status:"",note:""},p7:{status:"",note:""},p8:{status:"",note:""},p9:{status:"",note:""},p10:{status:"",note:""}}}},ef49:function(e,t){e.exports={kategories:{kat0:"Před prodejnou, vstup do prodejny",kat1:"V prodejně",kat2:"Sklad, zázemí, kancelář",kat3:"Layout, POS a MKT označení",kat4:"Prezentace",kat5:"Provoz",kat6:'Stav zásob, "díry"',kat7:"Doplněnost",kat8:"Ceny, označení zboží",kat9:"Expirace",kat10:"Personál"},points:{kat0:{p0:"Výlohy jsou čisté",p1:"Ve výlohách jsou umístěny pouze informace a POS materiály dle instrukcí marketingu nebo vedení maloobchodu (případně vedení OC), na výloze není nic přilepené (mimo MKT samolepek příp. platností probíhajících akcí)",p2:"Vstup je průchodný, uklizený, rohož (čistící zóna) je uklizená, nepoškozená, nepokrčená",p3:"Ve výlohách na figurínách prezentujeme aktuální sestavy zboží dle instrukcí merchandisingera",p4:"Prostor ve výlohách je čistý, přehledný a upravený, příp. stojany jsou kompletně doplněné",p5:"Logo nad vstupem je čisté a svítí"},kat1:{p0:"Pokladny jsou čisté, uklizené, věci nepotřebné k práci jsou schované před zraky zákazníků pod pokladnami, kde je také čisto a věci jsou srovnané, na pokladně není žádné jídlo ani pití, na prodejním pultu nejsou žádné POS materiály, letáčky, magazíny, letáky (pokud není předepsáno centrálou), pokud je pokladna uzavřena, je označena informačním stojánkem, na pokladně jsou umístěny informační nálepky k EET a akceptací platebních karet, odpadkový koš je vynesený",p1:"Na pokladně je prezentována ZÓNA a aktuální akce (ve stojánku), stojánky jsou v reprezentativním stavu",p2:"Lightboxy a jiné osvětlené regály v provozní době svítí",p3:"Stojany, regály, police i poličky na prodejně jsou a čisté, bez prachu a nečistot. Jsou správně rozmístěné dle instrukcí VED.",p4:"Prodejní pult a zrcadla jsou čistá, vyleštěná",p5:"Kabinky jsou čisté a není v nich žádné zboží ani ramínka, pokud je u kabinky/v kabince umístěn klip rám je v něm aktuální plakát dle instrukcí MKT, stěny jsou čisté, nepolepené",p6:"Podlaha je čistá včetně prostoru pod stojany, stírá se mimo otevírací dobu (vyjma aktuálních nečistot)",p7:"Rádio a TV jsou zapnuté a nehrají nahlas (TV má aktuální videa)"},kat2:{p0:"Dveře do skladu/zázemí jsou vždy zavřené (pokud nejsou dveře, tak je zatažen závěs)",p1:"Ve skladu i v kanceláři je uklizeno, čisto a pořádek",p2:"Zboží je roztříděno sortimentně pokud možno v regálech, není poškozováno špatným skladováním",p3:"Pokud je uvedena expirace, uloženo dle FEFO (první expiruje, první ven)",p4:"Odpad je likvidován, kartony jsou rozložené a poskládané, v kanceláři/v zázemí/ve skladu nejsou staré nepotřebné věci, odpadkové koše jsou vynesené",p5:"Prošlé zboží, zboží na vratku, II. jakost, zboží pro e-shop a zboží na reklamaci je na odděleném místě, a připraveno k odvozu (sortimentně roztříděno)",p6:"Zboží aktuálně rezervované zákazníkem přes e-shop na prodejně je připravené, řádně zabalené a označené (jméno, cena, do kdy atd.), na odděleném místě (maximálně 48 hodin nebo dle dohody se zákazníkem)",p7:"Rezervace zákazníků (telefon, e-mail, osobně) jsou řádně označené jménem, do kdy atd., nejsou uložené žádné neaktuální",p8:"Nástěnka a aktuální instrukce personálu jsou jasné a přehledné",p9:'Zázemí (šatny, WC, kuchyňka, chodbičky), sklad i kancelář jsou čisté a uklizené - žádné rozjedené jídlo bez "strávníka", umyté nádobí, mikrovlnná trouba i lednice jsou čisté i zevnitř (bez nepoživatelných potravin), na stolech je čisto, bez zboží, lékárnička je aktuálně zásobená.'},kat3:{p0:"Je přesně dodržen layout prodejny",p1:"Na prodejně nejsou žádné nepovolené stojany atd.",p2:"Na prodejně není žádná komunikace prodejny směrem k zákazníkovi kromě komunikace schválené MKT nebo VED - žádné ručně psané ani tištěné nápisy, žádné nepovolené POS materiály externích dodavatelů",p3:"Ve vnitřních plakátovacích modulech a light-boxech jsou aktuální materiály apod.",p4:"Jsou používány jen aktuální materiály schválené MKT"},kat4:{p0:"Zboží je vyrovnané (pokud možno přední stranou k zákazníkovi), čisté, zabezpečené, vyndané z obalu, upravené dle standardů (tzn. zapnuté zipy, tkaničky zavázané/schované, porovnané kapuce atd.)",p1:"Je dodrženo vystavení akce",p2:"Zboží na prodejně je rozmístěno dle aktuální sezóny, příp. dle MKT",p3:"V boxech/koších je prezentován max. 1 druh zboží (čepice, rukavice apod.)",p4:"Prezentace zboží/výprodejů je tématická, sortimentně roztříděná",p5:"Při prezentaci je dodržené rozdělení pánské, dámské a dětské kolekce se seskupením podobných stylů k sobě (příp. dodržení koncepce SiSů)",p6:"Pokud jsou na prodejně využívána ramínka s brandingem, jsou použity jen na danou značku bez jiných typů"},kat5:{p0:"Na prodejně jsou založené jen aktuální směrnice",p1:"Aktuální směrnice jsou podepsané všemi zaměstnanci (vybranné směrnice i brigádníky)",p2:"Směrnice zápůjčky - tabulka zápůjček je aktuální a doplňovaná",p3:"Prodejna má zapsané průchody, denní tržby a počty účtenek do tabulky na S:/ (max. 7 dnů starý zápis v den kontroly)",p4:"Všechny světla na prodejně i ve skladu svítí - vyměněné všechny prasklé žárovky/zářivky",p5:"U nefunkčních světel došlo k nahlášení závady (kdy a komu)",p6:"Na pokladnách nejsou nepřiměřeně velké zůstatky a jsou průběžně odváděny do trezoru",p7:"Každodenní odvody hotovosti do banky",p8:"Na prodejně jsou na uzamčeném místě uložené kopie smluv a dohod jen aktuálních zaměstnanců",p9:"Na prodejně jsou evidované všechny klíče (příp. i čipy) od prodejny a od trezoru ve formě předávacích protokolů"},kat6:{p0:"Prodejna (případně pověřená osoba) provádí denně kontrolu a doplnění odprodaných artiklů",p1:"Pokud na prodejně nějaké zboží chybí, zná personál důvod",p2:"Objednávky chybějícího zboží provádí pověřená osoba průběžně",p3:"Průběžná kontrola doplňování (automatu) dle odprodaného zboží",p4:"Prodejna pravidelně provádí kontrolu stavu zásob i na ostatních artiklech, ne jen na artiklech chybějících na prodejně",p5:"Pokud u zboží nesouhlasí účetní stav s fyzickým, vedoucí (příp. jiná kompetentní osoba) má provedenou kontrolu a řeší okamžitě bez zbytečného odkladu – důležité vzhledem k aktuální skladové zásobě vůči e-shopu"},kat7:{p0:"Zboží je doplňováno s ohledem na zákazníka - na prodejní plochu nesmí být zavezena paleta, na prodejně neleží žádné krabice, doplňovací vozík či štendr není ponechán prázdný ani bez dozoru na prodejně",p1:"Na prodejně je dostatek zboží, plné regály, plné stojany = zboží není ve skladu",p2:"Akční zboží je v dostatečném množství na prodejně = zboží není ve skladu",p3:"Prodejna má zajištěné dostatečné množství akčního zboží, v případě marketingové podpory dodavatele je průběžně kontrolován a redukován stav zásob",p4:'Na prodejní ploše nejsou žádné prázdné háčky, "vodopády", tyče atd.'},kat8:{p0:"Veškeré zboží je označeno cenou a ceny jsou správné",p1:"Cenovky jsou tištěné z portálu SAP (žádné rukou psané či škrtané, tištěné etiketovacími kleštěmi apod.), je dodržen správný druh štítků",p2:"Zboží je označeno pouze jednou cenovkou",p3:"Výprodejové zboží nebo nová kolekce je označena aktuální visačkou na ramínku",p4:"Ve výloze a v čelních pozicích na prodejně jsou schované produktové visačky se správnou cenou",p5:"Přecenění zboží je provedeno do 24 hodin od přijetí pokynu k přecenění (email o přecenění) bez zbytečného odkladu",p6:"V průběhu každé akce prezentované ve výlohách je aktuální informace o době trvání umístěna alespoň v 1 výloze",p7:"Na zboží bez českých popisků materiálového složení je štítek s překladem aktuálně používaných materiálů (musí být pevně spojeno se zbožím)",p8:"Zboží je opatřeno českými návody jak používat atd. (týká se zboží, které ze své podstaty návod vyžadují)"},kat9:{p0:"Na prodejně není proexpirované zboží",p1:"Pokud je uvedena expirace, zboží je doplňováno a uloženo dle FEFO (první expiruje, první ven)",p2:"Personál prodejny pravidelně kontroluje expiraci a vede evidenci expirace"},kat10:{p0:"Je oblečen a upraven dle pravidel",p1:"Oslovuje zákazníky, aktivně prodává, dodržuje standard obsluhy zákazníků (pravidla chování k zákazníkovi)",p2:"Umí založit ZÓNA kartu, zná všechny výhody klubu",p3:"Aktivně nabízí doplňkový sortiment",p4:"Aktivně nabízí akční zboží",p5:"Zvládá řešit vzniklé situace (např. vyřízení reklamace - správnou komunikaci se zákazníkem, sepsání protokolu, výměnu zboží, apod.)",p6:"Plní všechny činnosti dle popisu pracovních pozic a pracovního řádu",p7:"Vykonává všechny činnosti z náplně práce - kromě výše zmíněného prodeje i doplňování zboží, kontrolu cen, péči o zboží a prodejnu, předává zpětnou vazbu nadřízenému, plní zadané úkoly a pokyny",p8:"Nabízí ZÓNA kartu, aktuální akční nabídky, prodej poukázek, přijímá platby poukázkami, ptá se zákazníka zda je potřeba taška k nákupu - pokud ano, vkládá zakoupené zboží s účtenkou zákazníkovi do tašky, loučí se a zve na další návštěvu, nezapomíná na oční kontakt",p9:"Dodržuje bezpečnostní opatření na pokladnách, na vyžádání dokáže provést kontrolu pokladní hotovosti a stavu trezoru",p10:'Ke každému prodeji zboží dává automaticky informace o údržbě zboží (v podobě kartičky "Symboly pro ošetřování výrobků")'}},weights:{kat0:{p0:15,p1:8,p2:8,p3:7,p4:15,p5:7},kat1:{p0:12,p1:9,p2:9,p3:12,p4:9,p5:12,p6:11,p7:6},kat2:{p0:7,p1:12,p2:12,p3:13,p4:6,p5:8,p6:10,p7:11,p8:7,p9:14},kat3:{p0:10,p1:10,p2:10,p3:10,p4:10},kat4:{p0:11,p1:11,p2:11,p3:7,p4:9,p5:12,p6:9},kat5:{p0:9,p1:10,p2:12,p3:8,p4:10,p5:8,p6:12,p7:12,p8:8,p9:11},kat6:{p0:10,p1:9,p2:7,p3:13,p4:7,p5:14},kat7:{p0:10,p1:9,p2:9,p3:10,p4:12},kat8:{p0:10,p1:11,p2:12,p3:7,p4:7,p5:7,p6:10,p7:13,p8:13},kat9:{p0:11,p1:10,p2:9},kat10:{p0:12,p1:10,p2:10,p3:9,p4:10,p5:10,p6:10,p7:10,p8:10,p9:10,p10:9}}}}});
//# sourceMappingURL=app.d554b327.js.map