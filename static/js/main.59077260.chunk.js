(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(39)},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),i=n(4),o=n(5),u=n(7),m=n(6),s=n(8),p=n(18),f=n(40),d=n(23),h=n(41),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"container"},a.createElement("div",{className:"nav flex-column nav-pills"},this.props.menu&&this.props.menu.map(function(e){return a.createElement("li",{key:e.id,className:"nav-item"},a.createElement(h.a,{exact:e.exact,activeClassName:"active",className:"nav-link",to:e.href},e.label))})))}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-2"},a.createElement(E,{menu:this.props.menu})),a.createElement("div",{className:"col-10"},this.props.children)))}}]),t}(a.Component),v=n(9),O=0,j="SHOW_ALL",C="SHOW_COMPLETED",y="SHOW_ACTIVE",T={increment:function(){return{type:"INCREMENT_COUNT"}},decrement:function(){return{type:"DECREMENT_COUNT"}}},k=function(e){var t=e.active,n=e.children,a=e.onClick;return r.a.createElement("button",{onClick:a,disabled:t,style:{marginLeft:"4px"}},n)},N=Object(v.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(k),w=function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Show: "),r.a.createElement(N,{filter:j},"All"),r.a.createElement(N,{filter:y},"Active"),r.a.createElement(N,{filter:C},"Completed"))},x=Object(v.b)()(function(e){var t,n=e.dispatch;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){var a;e.preventDefault(),t.value.trim()&&(n((a=t.value,{type:"ADD_TODO",id:O++,text:a})),t.value="")}},r.a.createElement("input",{ref:function(e){return t=e}}),r.a.createElement("button",{type:"submit"},"Add Todo")))}),g=function(e){var t=e.onClick,n=e.completed,a=e.text;return r.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},a)},I=function(e){var t=e.todos,n=e.toggleTodo;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(g,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))}))},_=Object(v.b)(function(e){return{todos:function(e,t){switch(t){case j:return e;case C:return e.filter(function(e){return e.completed});case y:return e.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+t)}}(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(I),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",null,a.createElement("h1",null,"Counter"),a.createElement("p",null,"This is a simple example of a React component."),a.createElement("p",null,"Current count: ",a.createElement("strong",null,this.props.count)),a.createElement("button",{onClick:function(){e.props.increment()}},"Increment"))}}]),t}(a.Component),L=Object(v.b)(function(e){return e.counter},T)(D),S={components:r.a.createElement(function(){return r.a.createElement("h3",null,"Requested Param: Components")},null),"props-v-state":r.a.createElement(function(){return r.a.createElement("h3",null,"Requested Param: Props v. State")},null),counter:r.a.createElement(L,null)},A=function(e){var t=e.match;return t&&t.params&&t.params.id?S[t.params.id]:r.a.createElement("h3",null,"Please select a topic.")},R=[{id:0,href:"/",label:"Home",exact:!0,component:function(){return r.a.createElement("h2",null,"Home")}},{id:1,href:"/about",label:"About",exact:!1,component:function(){return r.a.createElement("h2",null,"About")}},{id:2,href:"/topics",label:"Topics",exact:!1,component:function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).menu=R.find(function(e){return e.href===n.props.match.path}),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Topics"),this.menu&&this.menu.children&&r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-pills"},this.menu.children.map(function(t){return r.a.createElement("li",{key:t.id,className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"".concat(e.props.match.url+t.href)},t.label))})),r.a.createElement(d.a,{path:"".concat(this.props.match.path,"/:id?"),component:A})))}}]),t}(r.a.Component),children:[{id:0,href:"/components",label:"Components",exact:!0},{id:1,href:"/props-v-state",label:"Props v. State",exact:!0},{id:2,href:"/counter",label:"Counter",exact:!0}]},{id:3,href:"/todolist",label:"Todo List",exact:!1,component:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(_,null),r.a.createElement(w,null))}}],P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).menu=R,e}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b,{menu:this.menu},this.menu&&this.menu.map(function(e){return r.a.createElement(d.a,{exact:e.exact,key:e.id,path:e.href,component:e.component})}))}}]),t}(r.a.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.AppContainer,null,r.a.createElement(f.a,{basename:"/"},r.a.createElement(P,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(11),M=n(24),U=n(22),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(U.a)(e).concat([{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(M.a)({},e,{completed:!e.completed}):e});default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},G=function(e,t){switch(t.type){case"INCREMENT_COUNT":return{count:e.count+1};case"DECREMENT_COUNT":return{count:e.count-1}}return e||{count:0}},V=Object(H.b)({todos:W,visibilityFilter:B,counter:G}),q=Object(H.c)(V),J=(n(37),document.getElementById("root"));l.a.render(r.a.createElement(v.a,{store:q},r.a.createElement(F,null)),J),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.59077260.chunk.js.map