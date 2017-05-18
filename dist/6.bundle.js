webpackJsonp([6],{197:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n(243),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("div",{style:{position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",padding:"5%",color:"#f1f1f1",backgroundColor:"#222",width:"100%"}},o.createElement("b",null,"User Profile:"),o.createElement("div",null,o.createElement("b",null,"email:")," ",this.props.userGQL.emailAddress),o.createElement("div",null,o.createElement("b",null,"name:")," ",this.props.userGQL.name),o.createElement("div",null,o.createElement("b",null,"id:")," ",this.props.userGQL.id),o.createElement("div",null,o.createElement("b",null,"upvotes:")," ",this.props.userGQL.upvotes),o.createElement("div",null,o.createElement("b",null,"downvotes:")," ",this.props.userGQL.downvotes),o.createElement("div",null,o.createElement("b",null,"cards:")),this.props.userGQL.cards.map(function(t,e){return o.createElement("div",{key:e,style:{height:"200px"}},o.createElement("img",{style:{height:"100%"},src:"https://s3-ap-southeast-2.amazonaws.com/hayekcards/spades_"+t+".svg"}))}))},e}(o.Component);e.Profile=s;var u=function(t){return{userGQL:t.reduxUser.userGQL}};e.default=i.connect(u,null)(s)},224:function(t,e,n){"use strict";function r(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}e.a=r},238:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function u(){}function a(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(t){n.shouldComponentUpdate=!0,n.error=t}}};return n}function c(t){var e,c,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=p.getDisplayName,O=void 0===l?function(t){return"ConnectAdvanced("+t+")"}:l,w=p.methodName,S=void 0===w?"connectAdvanced":w,g=p.renderCountProp,C=void 0===g?void 0:g,E=p.shouldHandleStateChanges,j=void 0===E||E,N=p.storeKey,T=void 0===N?"store":N,q=p.withRef,_=void 0!==q&&q,x=s(p,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),M=T+"Subscription",U=m++,R=(e={},e[T]=y.a,e[M]=y.b,e),D=(c={},c[M]=y.b,c);return function(e){d()("function"==typeof e,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(e));var s=e.displayName||e.name||"Component",c=O(s),p=v({},x,{getDisplayName:O,methodName:S,renderCountProp:C,shouldHandleStateChanges:j,storeKey:T,withRef:_,displayName:c,wrappedComponentName:s,WrappedComponent:e}),l=function(s){function f(t,e){r(this,f);var n=o(this,s.call(this,t,e));return n.version=U,n.state={},n.renderCount=0,n.store=t[T]||e[T],n.propsMode=Boolean(t[T]),n.setWrappedInstance=n.setWrappedInstance.bind(n),d()(n.store,'Could not find "'+T+'" in either the context or props of "'+c+'". Either wrap the root component in a <Provider>, or explicitly pass "'+T+'" as a prop to "'+c+'".'),n.initSelector(),n.initSubscription(),n}return i(f,s),f.prototype.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return t={},t[M]=e||this.context[M],t},f.prototype.componentDidMount=function(){j&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},f.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},f.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},f.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=u,this.store=null,this.selector.run=u,this.selector.shouldComponentUpdate=!1},f.prototype.getWrappedInstance=function(){return d()(_,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+S+"() call."),this.wrappedInstance},f.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},f.prototype.initSelector=function(){var e=t(this.store.dispatch,p);this.selector=a(e,this.store),this.selector.run(this.props)},f.prototype.initSubscription=function(){if(j){var t=(this.propsMode?this.props:this.context)[M];this.subscription=new b.a(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},f.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(P)):this.notifyNestedSubs()},f.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},f.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},f.prototype.addExtraProps=function(t){if(!(_||C||this.propsMode&&this.subscription))return t;var e=v({},t);return _&&(e.ref=this.setWrappedInstance),C&&(e[C]=this.renderCount++),this.propsMode&&this.subscription&&(e[M]=this.subscription),e},f.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return n.i(h.createElement)(e,this.addExtraProps(t.props))},f}(h.Component);return l.WrappedComponent=e,l.displayName=c,l.childContextTypes=D,l.contextTypes=R,l.propTypes=R,f()(l,e)}}var p=n(35),f=n.n(p),l=n(6),d=n.n(l),h=n(0),b=(n.n(h),n(282)),y=n(240);e.a=c;var v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},m=0,P={}},239:function(t,e,n){"use strict";function r(t){return function(e,n){function r(){return o}var o=t(e,n);return r.dependsOnOwnProps=!1,r}}function o(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function i(t,e){return function(e,n){var r=(n.displayName,function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)});return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=o(t);var i=r(e,n);return"function"==typeof i&&(r.mapToProps=i,r.dependsOnOwnProps=o(i),i=r(e,n)),i},r}}n(241);e.b=r,e.a=i},240:function(t,e,n){"use strict";var r=n(1),o=n.n(r);n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});var i=o.a.shape({trySubscribe:o.a.func.isRequired,tryUnsubscribe:o.a.func.isRequired,notifyNestedSubs:o.a.func.isRequired,isSubscribed:o.a.func.isRequired}),s=o.a.shape({subscribe:o.a.func.isRequired,dispatch:o.a.func.isRequired,getState:o.a.func.isRequired})},241:function(t,e,n){"use strict";n(20),n(224)},243:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(275),o=n(238),i=n(276);n.d(e,"Provider",function(){return r.a}),n.d(e,"connectAdvanced",function(){return o.a}),n.d(e,"connect",function(){return i.a})},275:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(0),u=(n.n(s),n(1)),a=n.n(u),c=n(240);n(224);n.d(e,"a",function(){return p});var p=function(t){function e(n,i){r(this,e);var s=o(this,t.call(this,n,i));return s.store=n.store,s}return i(e,t),e.prototype.getChildContext=function(){return{store:this.store,storeSubscription:null}},e.prototype.render=function(){return s.Children.only(this.props.children)},e}(s.Component);p.propTypes={store:c.a.isRequired,children:a.a.element.isRequired},p.childContextTypes={store:c.a.isRequired,storeSubscription:c.b},p.displayName="Provider"},276:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function i(t,e){return t===e}var s=n(238),u=n(283),a=n(277),c=n(278),p=n(279),f=n(280),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?s.a:e,d=t.mapStateToPropsFactories,h=void 0===d?c.a:d,b=t.mapDispatchToPropsFactories,y=void 0===b?a.a:b,v=t.mergePropsFactories,m=void 0===v?p.a:v,P=t.selectorFactory,O=void 0===P?f.a:P;return function(t,e,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=a.pure,p=void 0===c||c,f=a.areStatesEqual,d=void 0===f?i:f,b=a.areOwnPropsEqual,v=void 0===b?u.a:b,P=a.areStatePropsEqual,w=void 0===P?u.a:P,S=a.areMergedPropsEqual,g=void 0===S?u.a:S,C=r(a,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),E=o(t,h,"mapStateToProps"),j=o(e,y,"mapDispatchToProps"),N=o(s,m,"mergeProps");return n(O,l({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:E,initMapDispatchToProps:j,initMergeProps:N,pure:p,areStatesEqual:d,areOwnPropsEqual:v,areStatePropsEqual:w,areMergedPropsEqual:g},C))}}()},277:function(t,e,n){"use strict";function r(t){return"function"==typeof t?n.i(u.a)(t,"mapDispatchToProps"):void 0}function o(t){return t?void 0:n.i(u.b)(function(t){return{dispatch:t}})}function i(t){return t&&"object"==typeof t?n.i(u.b)(function(e){return n.i(s.bindActionCreators)(t,e)}):void 0}var s=n(16),u=n(239);e.a=[r,o,i]},278:function(t,e,n){"use strict";function r(t){return"function"==typeof t?n.i(i.a)(t,"mapStateToProps"):void 0}function o(t){return t?void 0:n.i(i.b)(function(){return{}})}var i=n(239);e.a=[r,o]},279:function(t,e,n){"use strict";function r(t,e,n){return u({},n,t,e)}function o(t){return function(e,n){var r=(n.displayName,n.pure),o=n.areMergedPropsEqual,i=!1,s=void 0;return function(e,n,u){var a=t(e,n,u);return i?r&&o(a,s)||(s=a):(i=!0,s=a),s}}}function i(t){return"function"==typeof t?o(t):void 0}function s(t){return t?void 0:function(){return r}}var u=(n(241),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t});e.a=[i,s]},280:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function i(t,e,n,r,o){function i(o,i){return h=o,b=i,y=t(h,b),v=e(r,b),m=n(y,v,b),d=!0,m}function s(){return y=t(h,b),e.dependsOnOwnProps&&(v=e(r,b)),m=n(y,v,b)}function u(){return t.dependsOnOwnProps&&(y=t(h,b)),e.dependsOnOwnProps&&(v=e(r,b)),m=n(y,v,b)}function a(){var e=t(h,b),r=!l(e,y);return y=e,r&&(m=n(y,v,b)),m}function c(t,e){var n=!f(e,b),r=!p(t,h);return h=t,b=e,n&&r?s():n?u():r?a():m}var p=o.areStatesEqual,f=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1,h=void 0,b=void 0,y=void 0,v=void 0,m=void 0;return function(t,e){return d?c(t,e):i(t,e)}}function s(t,e){var n=e.initMapStateToProps,s=e.initMapDispatchToProps,u=e.initMergeProps,a=r(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),c=n(t,a),p=s(t,a),f=u(t,a);return(a.pure?i:o)(c,p,f,t,a)}n(281);e.a=s},281:function(t,e,n){"use strict";n(224)},282:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){var t=[],e=[];return{clear:function(){e=i,t=i},notify:function(){for(var n=t=e,r=0;r<n.length;r++)n[r]()},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==i&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}n.d(e,"a",function(){return u});var i=null,s={notify:function(){}},u=function(){function t(e,n,o){r(this,t),this.store=e,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=s}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},t.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=o())},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},t}()},283:function(t,e,n){"use strict";function r(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!==t&&e!==e}function o(t,e){if(r(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(var s=0;s<n.length;s++)if(!i.call(e,n[s])||!r(t[n[s]],e[n[s]]))return!1;return!0}e.a=o;var i=Object.prototype.hasOwnProperty}});