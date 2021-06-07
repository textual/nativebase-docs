(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{514:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(720)),i=n(724),c=n(725),s={},l={unversionedId:"migration/Tabs",id:"version-3.0.0-next.40/migration/Tabs",isDocsHomePage:!1,title:"Tabs",description:"Migrating to v3 will provide a lot more design, size, variation, color and customisation option.",source:"@site/versioned_docs/version-3.0.0-next.40/migration/Tabs.md",slug:"/migration/Tabs",permalink:"/migration/Tabs",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/migration/Tabs.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Spinner",permalink:"/migration/Spinner"},next:{title:"Thumbnail",permalink:"/migration/Thumbnail"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Migrating to v3 will provide a lot more ",Object(o.b)("strong",{parentName:"p"},"design"),", ",Object(o.b)("strong",{parentName:"p"},"size, variation"),", ",Object(o.b)("strong",{parentName:"p"},"color")," and ",Object(o.b)("strong",{parentName:"p"},"customisation")," option."),Object(o.b)("p",null,"We have sliced Tabs into multiple smaller component which not only provides more control over the the code but also makes it more readable."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Migrating Tabs components can broadly described in these points:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Separated ",Object(o.b)("inlineCode",{parentName:"li"},"TabViews")," and ",Object(o.b)("inlineCode",{parentName:"li"},"TabBar"),". Providing more control over the structure and design."),Object(o.b)("li",{parentName:"ul"},"Each ",Object(o.b)("strong",{parentName:"li"},"Tab")," can be more than string.")),Object(o.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(o.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Tabs>\n  <Tab heading='One'>\n    <Text>One</Text>\n  </Tab>\n  <Tab heading='Two'>\n    <Text>Two</Text>\n  </Tab>\n  <Tab heading='Three'>\n    <Text>Three</Text>\n  </Tab>\n</Tabs>\n"))),Object(o.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Tabs>\n  <TabBar>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n    <Tab>Three</Tab>\n  </TabBar>\n  <TabViews>\n    <TabView>One</TabView>\n    <TabView>Two</TabView>\n    <TabView>Three</TabView>\n  </TabViews>\n</Tabs>\n")))))}p.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},721:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},722:function(e,t,n){"use strict";var a=n(0),r=n(723);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},723:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},724:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(722),i=n(721),c=n(56),s=n.n(c);const l=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:u,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[v,O]=Object(a.useState)(c),T=a.Children.toArray(e.children);if(null!=p){const e=d[p];null!=e&&e!==v&&u.some((t=>t.value===e))&&O(e)}const g=e=>{O(e),null!=p&&f(p,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(a.cloneElement)(T.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},T.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},725:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);