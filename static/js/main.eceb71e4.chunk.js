(this["webpackJsonpstar-wars-dashboard"]=this["webpackJsonpstar-wars-dashboard"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),c=a.n(s),l=(a(16),a(17),a(18),a(1)),i=a.n(l),u=a(2),h=a(7),o=a(8),m=a(4),d=a(10),p=a(9),f=a(3);function v(e){var t=Object(r.useState)(""),a=Object(f.a)(t,2),s=a[0],c=a[1],l=Object(r.useState)(""),h=Object(f.a)(l,2),o=h[0],m=h[1],d=Object(r.useState)(""),p=Object(f.a)(d,2),v=p[0],b=p[1],x=Object(r.useState)(""),E=Object(f.a)(x,2),w=E[0],R=E[1],g=Object(r.useState)(""),C=Object(f.a)(g,2),j=C[0],k=C[1];function N(e,t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(i.a.mark((function e(t,a){var r,n,s,c,l,h,o,d,p,f,v,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"films"==a?(s="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:if(n=e.sent,""!==s){e.next=12;break}return e.next=9,n.title;case 9:s=e.sent,e.next=17;break;case 12:return e.t0=s+", ",e.next=15,n.title;case 15:e.t1=e.sent,s=e.t0+e.t1;case 17:m(s);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):"species"==a?t.length&&(h="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:if(l=e.sent,""!==h){e.next=12;break}return e.next=9,l.name;case 9:h=e.sent,e.next=17;break;case 12:return e.t0=h+", ",e.next=15,l.name;case 15:e.t1=e.sent,h=e.t0+e.t1;case 17:b(h);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):"starships"==a?t.length&&(p="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return o=e.sent,e.next=5,o.json();case 5:if(d=e.sent,""!==p){e.next=12;break}return e.next=9,d.name;case 9:p=e.sent,e.next=17;break;case 12:return e.t0=p+", ",e.next=15,d.name;case 15:e.t1=e.sent,p=e.t0+e.t1;case 17:R(p);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):"vehicles"==a&&t.length&&(x="",t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return f=e.sent,e.next=5,f.json();case 5:if(v=e.sent,""!==x){e.next=12;break}return e.next=9,v.name;case 9:x=e.sent,e.next=17;break;case 12:return e.t0=x+", ",e.next=15,v.name;case 15:e.t1=e.sent,x=e.t0+e.t1;case 17:k(x);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(u.a)(i.a.mark((function t(){var a,r,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.searchResultCard.homeworld,t.next=3,fetch(a);case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.t0=c,t.next=10,n.name;case 10:t.t1=t.sent,(0,t.t0)(t.t1),N(e.searchResultCard.films,"films"),N(e.searchResultCard.species,"species"),N(e.searchResultCard.starships,"starships"),N(e.searchResultCard.vehicles,"vehicles");case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),n.a.createElement("div",{className:"card text-white bg-warning mb-3 m-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",null,e.searchResultCard.name)),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Film Appearances: "+o),n.a.createElement("h5",{className:"card-title"},"Birth Year: "+e.searchResultCard.birth_year),n.a.createElement("h5",{className:"card-title"},"Home World: "+s),n.a.createElement("div",null,e.searchResultCard.species.length?n.a.createElement("h5",{className:"card-title"},"Species: "+v):""),n.a.createElement("h5",{className:"card-title"},"Eye Color: "+e.searchResultCard.eye_color),n.a.createElement("h5",{className:"card-title"},"Gender: "+e.searchResultCard.gender),n.a.createElement("h5",{className:"card-title"},"Hair Color: "+e.searchResultCard.hair_color),n.a.createElement("h5",{className:"card-title"},"Height: "+e.searchResultCard.height+" cm"),n.a.createElement("h5",{className:"card-title"},"Mass: "+e.searchResultCard.mass+" kg"),n.a.createElement("h5",{className:"card-title"},"Skin Color: "+e.searchResultCard.skin_color),n.a.createElement("div",null,e.searchResultCard.starships.length?n.a.createElement("h5",{className:"card-title"},"Starships: "+w):""),n.a.createElement("div",null,e.searchResultCard.vehicles.length?n.a.createElement("h5",{className:"card-title"},"Vehicles: "+j):"")))}function b(e){return 0==e.searchResult.count?n.a.createElement("h2",{className:"NoResult"},"No results found"):1==e.searchResult.count?n.a.createElement("div",null,n.a.createElement(v,{searchResultCard:e.searchResult.results[0]})):n.a.createElement("div",{className:"container"},e.searchResult.results.map((function(e){return n.a.createElement("div",null,n.a.createElement(v,{searchResultCard:e}))})))}var x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={searchResult:{},loading:!0,search:"",userSearchedOnce:!1},r.handleChange=r.handleChange.bind(Object(m.a)(r)),r}return Object(o.a)(a,[{key:"createSearchResult",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=4;break}this.setState({searchResult:"",loading:!1}),e.next=13;break;case 4:return"https://swapi.dev/api/people/?search=",a="https://swapi.dev/api/people/?search="+t,e.next=8,fetch(a);case 8:return r=e.sent,e.next=11,r.json();case 11:n=e.sent,this.setState({searchResult:n,loading:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({search:e.target.value,userSearchedOnce:!0}),this.createSearchResult(this.state.search)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"yellow Center m-4"},"Star Wars Character Database"),n.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1",value:this.state.search,onChange:this.handleChange}),n.a.createElement("div",{className:"Center"},this.state.userSearchedOnce?this.state.loading||!this.state.searchResult?n.a.createElement("div",{className:"spinner-border text-light m-4",style:{width:"3em",height:"3em"},role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")):n.a.createElement("div",null,n.a.createElement(b,{searchResult:this.state.searchResult})):n.a.createElement("h2",{className:"yellow m-3"},"Type in the name of a character for some info on them!")))}}]),a}(n.a.Component);var E=function(){return n.a.createElement("div",{className:"whole"},n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.eceb71e4.chunk.js.map