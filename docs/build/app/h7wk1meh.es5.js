/*! Built with http://stenciljs.com */
App.loadBundle("h7wk1meh",["exports","./chunk-1d835f9d.js"],function(t,e){var r=window.App.h,n=function(){function t(){}return t.prototype.render=function(){return r("div",{class:"app-home"},r("p",null,"Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",r("a",{href:"https://stenciljs.com"},"stenciljs.com")," to get started."),r("stencil-route-link",{url:"/profile/stencil"},r("button",null,"Profile page")))},Object.defineProperty(t,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".app-home{padding:10px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}"},enumerable:!0,configurable:!0}),t}(),i=function(){function t(){this.unsubscribe=function(){},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}return t.prototype.componentWillLoad=function(){this.computeMatch()},t.prototype.computeMatch=function(){this.location&&(this.match=e.matchPath(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))},t.prototype.handleClick=function(t){if(!e.isModifiedEvent(t))return t.preventDefault(),this.history.push(this.getUrl(this.url))},t.prototype.getUrl=function(t){return"/"==t.charAt(0)&&"/"==this.root.charAt(this.root.length-1)?this.root.slice(0,this.root.length-1)+t:this.root+t},t.prototype.render=function(){var t,e={class:(t={},t[this.activeClass]=null!==this.match,t),onClick:this.handleClick.bind(this)};return this.anchorClass&&(e.class[this.anchorClass]=!0),"a"===this.custom&&(e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex})),r(this.custom,Object.assign({},e),r("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-route-link"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeClass:{type:String,attr:"active-class"},anchorClass:{type:String,attr:"anchor-class"},anchorRole:{type:String,attr:"anchor-role"},anchorTabIndex:{type:String,attr:"anchor-tab-index"},anchorTitle:{type:String,attr:"anchor-title"},custom:{type:String,attr:"custom"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},history:{type:"Any",attr:"history"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{state:!0},root:{type:String,attr:"root"},strict:{type:Boolean,attr:"strict"},url:{type:String,attr:"url"},urlMatch:{type:String,attr:"url-match"}}},enumerable:!0,configurable:!0}),t}();e.ActiveRouter.injectProps(i,["history","location","root"]),t.AppHome=n,t.StencilRouteLink=i,Object.defineProperty(t,"__esModule",{value:!0})});