(this["webpackJsonpstar-wars-dashboard"]=this["webpackJsonpstar-wars-dashboard"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),l=(a(16),a(17),a(18),a(1)),i=a.n(l),u=a(2),h=a(7),o=a(8),m=a(4),d=a(10),p=a(9),f=a(3);function v(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(""),h=Object(f.a)(l,2),o=h[0],m=h[1],d=Object(n.useState)(""),p=Object(f.a)(d,2),v=p[0],x=p[1],b=Object(n.useState)(""),E=Object(f.a)(b,2),w=E[0],g=E[1],R=Object(n.useState)(""),C=Object(f.a)(R,2),j=C[0],k=C[1];function N(e){var t=e.indexOf("p"),a=e.slice(0,t+1)+"s"+e.slice(t+1,e.length);return console.log(a),a}function O(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(i.a.mark((function e(t,a){var n,r,s,c,l,h,o,d,p,f,v,b,E,w,R,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"films"===a?(s="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=N,e.next=3,t;case 3:return e.t1=e.sent,c=(0,e.t0)(e.t1),e.next=7,fetch(c);case 7:return n=e.sent,e.next=10,n.json();case 10:if(r=e.sent,""!==s){e.next=17;break}return e.next=14,r.title;case 14:s=e.sent,e.next=22;break;case 17:return e.t2=s+", ",e.next=20,r.title;case 20:e.t3=e.sent,s=e.t2+e.t3;case 22:m(s);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):"species"===a?t.length&&(o="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=N,e.next=3,t;case 3:return e.t1=e.sent,d=(0,e.t0)(e.t1),e.next=7,fetch(d);case 7:return l=e.sent,e.next=10,l.json();case 10:if(h=e.sent,""!==o){e.next=17;break}return e.next=14,h.name;case 14:o=e.sent,e.next=22;break;case 17:return e.t2=o+", ",e.next=20,h.name;case 20:e.t3=e.sent,o=e.t2+e.t3;case 22:x(o);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):"starships"===a?t.length&&(v="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=N,e.next=3,t;case 3:return e.t1=e.sent,b=(0,e.t0)(e.t1),e.next=7,fetch(b);case 7:return p=e.sent,e.next=10,p.json();case 10:if(f=e.sent,""!==v){e.next=17;break}return e.next=14,f.name;case 14:v=e.sent,e.next=22;break;case 17:return e.t2=v+", ",e.next=20,f.name;case 20:e.t3=e.sent,v=e.t2+e.t3;case 22:g(v);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):"vehicles"===a&&t.length&&(R="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=N,e.next=3,t;case 3:return e.t1=e.sent,C=(0,e.t0)(e.t1),e.next=7,fetch(C);case 7:return E=e.sent,e.next=10,E.json();case 10:if(w=e.sent,""!==R){e.next=17;break}return e.next=14,w.name;case 14:R=e.sent,e.next=22;break;case 17:return e.t2=R+", ",e.next=20,w.name;case 20:e.t3=e.sent,R=e.t2+e.t3;case 22:k(R);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(u.a)(i.a.mark((function t(){var a,n,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.searchResultCard.homeworld,n=N(a),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return s=t.sent,t.t0=c,t.next=11,s.name;case 11:t.t1=t.sent,(0,t.t0)(t.t1),O(e.searchResultCard.films,"films"),O(e.searchResultCard.species,"species"),O(e.searchResultCard.starships,"starships"),O(e.searchResultCard.vehicles,"vehicles");case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"card text-white bg-warning mb-3 m-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,e.searchResultCard.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Film Appearances: "+o),r.a.createElement("h5",{className:"card-title"},"Birth Year: "+e.searchResultCard.birth_year),r.a.createElement("h5",{className:"card-title"},"Home World: "+s),r.a.createElement("div",null,e.searchResultCard.species.length?r.a.createElement("h5",{className:"card-title"},"Species: "+v):""),r.a.createElement("h5",{className:"card-title"},"Eye Color: "+e.searchResultCard.eye_color),r.a.createElement("h5",{className:"card-title"},"Gender: "+e.searchResultCard.gender),r.a.createElement("h5",{className:"card-title"},"Hair Color: "+e.searchResultCard.hair_color),r.a.createElement("h5",{className:"card-title"},"Height: "+e.searchResultCard.height+" cm"),r.a.createElement("h5",{className:"card-title"},"Mass: "+e.searchResultCard.mass+" kg"),r.a.createElement("h5",{className:"card-title"},"Skin Color: "+e.searchResultCard.skin_color),r.a.createElement("div",null,e.searchResultCard.starships.length?r.a.createElement("h5",{className:"card-title"},"Starships: "+w):""),r.a.createElement("div",null,e.searchResultCard.vehicles.length?r.a.createElement("h5",{className:"card-title"},"Vehicles: "+j):"")))}function x(e){return 0===e.searchResult.count?r.a.createElement("h2",{className:"NoResult"},"No results found"):1===e.searchResult.count?r.a.createElement("div",null,r.a.createElement(v,{searchResultCard:e.searchResult.results[0]})):r.a.createElement("div",{className:"container"},e.searchResult.results.map((function(e){return r.a.createElement("div",null,r.a.createElement(v,{searchResultCard:e}))})))}var b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={searchResult:{},loading:!0,search:"",userSearchedOnce:!1},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"createSearchResult",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=4;break}this.setState({searchResult:"",loading:!1}),e.next=13;break;case 4:return"https://swapi.dev/api/people/?search=",a="https://swapi.dev/api/people/?search="+t,e.next=8,fetch(a);case 8:return n=e.sent,e.next=11,n.json();case 11:r=e.sent,this.setState({searchResult:r,loading:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({search:e.target.value,userSearchedOnce:!0}),this.createSearchResult(this.state.search)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"yellow Center m-4"},"Star Wars Character Database"),r.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1",value:this.state.search,onChange:this.handleChange}),r.a.createElement("div",{className:"Center"},this.state.userSearchedOnce?this.state.loading||!this.state.searchResult?r.a.createElement("div",{className:"spinner-border text-light m-4",style:{width:"3em",height:"3em"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",null,r.a.createElement(x,{searchResult:this.state.searchResult})):r.a.createElement("h2",{className:"yellow m-3"},"Type in the name of a character for some info on them!")))}}]),a}(r.a.Component);var E=function(){return r.a.createElement("div",{className:"whole"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.186fb5df.chunk.js.map