"use strict";(self.webpackChunkmonopay_docs=self.webpackChunkmonopay_docs||[]).push([[347],{7660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),u=["components"],a={sidebar_position:2,title:"\u0631\u0648\u0646\u062f \u067e\u0631\u062f\u0627\u062e\u062a"},d=void 0,c={unversionedId:"payment-procedure",id:"payment-procedure",isDocsHomePage:!1,title:"\u0631\u0648\u0646\u062f \u067e\u0631\u062f\u0627\u062e\u062a",description:"\u0627\u06af\u0631 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u062f \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 Node.js \u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f\u060c\u200c \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u0628\u062f\u0627\u0646\u06cc\u062f \u062f\u0631\u06af\u0627\u0647 \u0647\u0627\u06cc \u067e\u0631\u062f\u0627\u062e\u062a \u0686\u0637\u0648\u0631 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/payment-procedure.md",sourceDirName:".",slug:"/payment-procedure",permalink:"/monopay/fa/docs/payment-procedure",editUrl:"https://github.com/alitnk/monopay/edit/documentation/docs/payment-procedure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u0631\u0648\u0646\u062f \u067e\u0631\u062f\u0627\u062e\u062a"},sidebar:"tutorialSidebar",previous:{title:"\u0645\u0639\u0631\u0641\u06cc",permalink:"/monopay/fa/docs/introduction"},next:{title:"\u0646\u062d\u0648\u0647 \u0646\u0635\u0628",permalink:"/monopay/fa/docs/installation"}},l=[{value:"1. \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u067e\u0631\u062f\u0627\u062e\u062a",id:"1-\u062f\u0631\u062e\u0648\u0627\u0633\u062a-\u067e\u0631\u062f\u0627\u062e\u062a",children:[],level:2},{value:"2. \u0627\u0631\u0633\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647",id:"2-\u0627\u0631\u0633\u0627\u0644-\u06a9\u0627\u0631\u0628\u0631-\u0628\u0647-\u062f\u0631\u06af\u0627\u0647",children:[],level:2},{value:"3. \u062a\u0627\u06cc\u06cc\u062f \u0635\u062d\u062a \u067e\u0631\u062f\u0627\u062e\u062a",id:"3-\u062a\u0627\u06cc\u06cc\u062f-\u0635\u062d\u062a-\u067e\u0631\u062f\u0627\u062e\u062a",children:[],level:2}],p={toc:l};function s(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0627\u06af\u0631 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u062f \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 Node.js \u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f\u060c\u200c \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u0628\u062f\u0627\u0646\u06cc\u062f \u062f\u0631\u06af\u0627\u0647 \u0647\u0627\u06cc \u067e\u0631\u062f\u0627\u062e\u062a \u0686\u0637\u0648\u0631 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f."),(0,i.kt)("h2",{id:"1-\u062f\u0631\u062e\u0648\u0627\u0633\u062a-\u067e\u0631\u062f\u0627\u062e\u062a"},"1. \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u067e\u0631\u062f\u0627\u062e\u062a"),(0,i.kt)("p",null,"\u0634\u0645\u0627 \u06cc\u06a9 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0647 API \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a\u060c \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631\u06af\u0627\u0647 \u062e\u0648\u062f \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0631\u0627\u06a9\u0646\u0634 \u0645\u06cc \u0641\u0631\u0633\u062a\u06cc\u062f."),(0,i.kt)("p",null,"\u0633\u067e\u0633 API \u0628\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0628\u0647 \u0634\u0645\u0627 \u0628\u0631 \u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f \u06a9\u0647 \u0627\u0632 \u0622\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u0627\u06cc \u0631\u062f\u06cc\u0627\u0628\u06cc \u0648 \u062a\u0627\u06cc\u06cc\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,i.kt)("h2",{id:"2-\u0627\u0631\u0633\u0627\u0644-\u06a9\u0627\u0631\u0628\u0631-\u0628\u0647-\u062f\u0631\u06af\u0627\u0647"},"2. \u0627\u0631\u0633\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647"),(0,i.kt)("p",null,"\u06cc\u06a9 form \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc\u062f \u0648 \u0622\u0646 \u0631\u0627 \u0628\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631\u06af\u0627\u0647 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u062a\u0627 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0647 \u0633\u0627\u06cc\u062a \u062f\u0631\u06af\u0627\u0647 \u0645\u0646\u062a\u0642\u0644 \u0634\u0648\u062f."),(0,i.kt)("h2",{id:"3-\u062a\u0627\u06cc\u06cc\u062f-\u0635\u062d\u062a-\u067e\u0631\u062f\u0627\u062e\u062a"},"3. \u062a\u0627\u06cc\u06cc\u062f \u0635\u062d\u062a \u067e\u0631\u062f\u0627\u062e\u062a"),(0,i.kt)("p",null,"\u0648\u0642\u062a\u06cc \u06a9\u0627\u0631\u0628\u0631 \u067e\u0631\u062f\u0627\u062e\u062a \u0631\u0627 \u062a\u0645\u0627\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u062f\u0631\u06af\u0627\u0647 \u0627\u0648 \u0631\u0627 \u0628\u0647 \u0633\u0627\u06cc\u062a \u0634\u0645\u0627 \u0628\u0631\u0645\u06cc\u06af\u0631\u062f\u0627\u0646\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627 API \u062f\u0631\u06af\u0627\u0647 \u0686\u06a9 \u0645\u06cc \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f \u0627\u06cc\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0635\u062d\u06cc\u062d \u0627\u0633\u062a \u0648 \u0627\u0632 \u0637\u0631\u0641 \u062f\u0631\u06af\u0627\u0647 \u0628\u0648\u062f\u0647."),(0,i.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u062a\u0627\u06cc\u06cc\u062f \u0634\u0648\u062f\u060c\u200c \u0634\u0645\u0627 \u06cc\u06a9 \u06a9\u062f \u0631\u0647\u06af\u06cc\u0631\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0646\u0634\u0627\u0646 \u062f\u0647\u06cc\u062f."))}s.isMDXComponent=!0}}]);