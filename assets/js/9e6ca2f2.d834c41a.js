"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[860],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5317:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],o={id:"useInterstitialAd",title:"useInterstitialAd",sidebar_label:"useInterstitialAd"},d=void 0,s={unversionedId:"api/useInterstitialAd",id:"api/useInterstitialAd",isDocsHomePage:!1,title:"useInterstitialAd",description:"Use this hook to use Interstitial Ad with its various states.",source:"@site/docs/api/useInterstitialAd.md",sourceDirName:"api",slug:"/api/useInterstitialAd",permalink:"/admob/docs/api/useInterstitialAd",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/api/useInterstitialAd.md",version:"current",frontMatter:{id:"useInterstitialAd",title:"useInterstitialAd",sidebar_label:"useInterstitialAd"},sidebar:"sideBar",previous:{title:"Usage examples",permalink:"/admob/docs/examples"},next:{title:"useRewardedAd",permalink:"/admob/docs/api/useRewardedAd"}},p=[{value:"Usage example",id:"usage-example",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>unitId</code>",id:"unitid",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Returns",id:"returns",children:[]}],m={toc:p};function u(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use this hook to use Interstitial Ad with its various states."),(0,i.kt)("h2",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useInterstitialAd } from '@react-native-admob/admob';\n\nconst hookOptions = {\n  loadOnDismissed: true,\n  requestOptions: {\n    requestNonPersonalizedAdsOnly: true,\n  },\n};\n\nexport default function App() {\n  const {\n    adLoadError,\n    adLoaded,\n    adDismissed,\n    show\n  } = useInterstitialAd(UNIT_ID_INTERSTITIAL, hookOptions);\n\n  useEffect(() => {\n    if (adLoadError) {\n      console.error(adLoadError);\n    }\n  }, [adLoadError]);\n\n  useEffect(() => {\n    if (adLoaded) {\n      show();\n    }\n  }, [adLoaded]);\n\n  useEffect(() => {\n    if (adDismissed) {\n      console.log('Interstitial Ad is dismissed. Preloading next ad...');\n    }\n  }, [adDismissed]);\n\n  return (/* Your App code */)\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h3",{id:"unitid"},(0,i.kt)("inlineCode",{parentName:"h3"},"unitId")),(0,i.kt)("p",null,"Your Interstitial Ad's ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/7356431"},"ad Unit ID")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,i.kt)("h3",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h3"},"options")),(0,i.kt)("p",null,"Options for your hook. Available values are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"object")))),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loadOnMounted"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to load automatically on mounted.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"showOnLoaded"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to show automatically on loaded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loadOnDismissed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to load new ad automatically on dismissed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"requestOptions"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"RequestOptions"},"RequestOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional RequestOptions used to load the ad.")))),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"object")))),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"adLoaded"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is loaded and ready to present.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"adPresented"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is presented to user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"adDismissed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is dismissed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"adShowing"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is showing. The value is equal with ",(0,i.kt)("inlineCode",{parentName:"td"},"adPresented && !adDismissed"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"adLoadError"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error during ad load.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"adPresentError"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error during ad present.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"load"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Loads new ad. Can not call this function if the ad is loaded but not presented and dismissed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"show"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Shows loaded ad. Ad must be loaded prior to this call.")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"adPresented")," value remains ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," after the ad is dismissed. The value changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," when ad is initialized via ",(0,i.kt)("inlineCode",{parentName:"p"},"load()"),". To determine whether the ad is showing, use ",(0,i.kt)("inlineCode",{parentName:"p"},"adShowing")," value."))))}u.isMDXComponent=!0}}]);