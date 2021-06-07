(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{720:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=r,u=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return n?a.a.createElement(u,i(i({ref:t},p),{},{components:n})):a.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(720)),c={id:"stack",title:"Stack"},i={unversionedId:"stack",id:"version-3.0.0-next.37/stack",isDocsHomePage:!1,title:"Stack",description:"Stack aligns items vertically or horizontally based on the direction prop.",source:"@site/versioned_docs/version-3.0.0-next.37/stack.md",slug:"/stack",permalink:"/3.0.0-next.37/stack",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/stack.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"HStack / Row",permalink:"/3.0.0-next.37/hStack"},next:{title:"VStack / Column",permalink:"/3.0.0-next.37/VStack"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Stack")," aligns items vertically or horizontally based on the ",Object(o.b)("inlineCode",{parentName:"p"},"direction")," prop."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"%2F%2F%40ts-nocheck%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20Stack%2C%20Center%2C%20Heading%2C%20Button%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%5Bdirection%2C%20setDirection%5D%20%3D%20React.useState(%22column%22)%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B3%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%3EStack%20-%20%7Bdirection%20%3D%3D%3D%20%22row%22%20%3F%20%22Row%22%20%3A%20%22Column%22%7D%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CStack%20direction%3D%7Bdirection%7D%20space%3D%7B3%7D%20mb%3D%7B3%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20shadow%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22secondary.400%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20shadow%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20shadow%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Box%203%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setDirection(direction%20%3D%3D%3D%20%22row%22%20%3F%20%22column%22%20%3A%20%22row%22)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Change%20Stack%20Direction%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        divider\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The divider element to use between elements.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        space\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        ResponsiveValue<number | "gutter" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl">\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The space between each stack item. Accepts Responsive values\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        reversed\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Determines whether to reverse the direction of Stack Items.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        direction\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        ResponsiveValue<"column" | "row">\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The direction of the Stack Items.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        column\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Stack implements ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"box#props"}),"Box"))))}d.isMDXComponent=!0}}]);