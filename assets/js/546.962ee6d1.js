"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[546],{6165:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(3366),r=n(7294),l=n(6010),i=n(308),c=n(6742),o="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",h="sidebarItemLinkActive_12pM",f=n(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:h},e.title))}))))}var p=n(571),v=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,n=e.toc,c=e.children,o=(0,a.Z)(e,v),s=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(g,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&r.createElement("div",{className:"col col--2"},r.createElement(p.Z,{toc:n})))))}},4884:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(7294),r=n(6010),l=n(3905),i=n(4973),c=n(6742),o=n(4996),s=n(941),m=n(2238),u=n(6146),d="blogPostTitle_GeHD",h="blogPostData_291c",f="blogPostDetailsFull_3kfx",g=n(7682),p="image_1yU8";var v=function(e){var t=e.author,n=t.name,r=t.title,l=t.url,i=t.imageURL;return a.createElement("div",{className:"avatar margin-bottom--sm"},i&&a.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:l},a.createElement("img",{className:p,src:i,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(c.Z,{href:l,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_1R69";function b(e){var t=e.authors,n=e.assets;return 0===t.length?a.createElement(a.Fragment,null):a.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return a.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},a.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=n.authorsImageUrls[t])?l:e.imageURL})}))})))}var Z=function(e){var t,n,p,v,E=(p=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),Z=(0,o.C)().withBaseUrl,N=e.children,_=e.frontMatter,k=e.assets,y=e.metadata,T=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,C=y.date,O=y.formattedDate,U=y.permalink,w=y.tags,x=y.readingTime,R=y.title,I=y.editUrl,A=y.authors,S=null!=(t=k.image)?t:_.image;return a.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=L?"h1":"h2",a.createElement("header",null,a.createElement(v,{className:d,itemProp:"headline"},L?R:a.createElement(c.Z,{itemProp:"url",to:U},R)),a.createElement("div",{className:(0,r.Z)(h,"margin-vert--md")},a.createElement("time",{dateTime:C,itemProp:"datePublished"},O),void 0!==x&&a.createElement(a.Fragment,null," \xb7 ",E(x))),a.createElement(b,{authors:A,assets:k}))),S&&a.createElement("meta",{itemProp:"image",content:Z(S,{absolute:!0})}),a.createElement("div",{className:"markdown",itemProp:"articleBody"},a.createElement(l.Zo,{components:m.Z},N)),(w.length>0||T)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(n={},n[f]=L,n))},w.length>0&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":!L})},a.createElement(g.Z,{tags:w})),L&&I&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:I})),!L&&T&&a.createElement("div",{className:"col col--3 text--right"},a.createElement(c.Z,{to:y.permalink,"aria-label":"Read more about "+R},a.createElement("b",null,a.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6146:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(4973),l=n(7462),i=n(3366),c=n(6010),o="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,n=(0,i.Z)(e,s);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=n(941);function d(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(m,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,t,n){n.d(t,{N:function(){return d},Z:function(){return h}});var a=n(3366),r=n(7462),l=n(7294),i=n(6010),c=n(4973),o=n(941),s="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},h=function(e){return"h1"===e?d:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,u),h=(0,o.LU)().navbar.hideOnScroll;return r?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(n={},n[m]=h,n[s]=!h,n)),id:r}),d.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},2238:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7462),r=n(3366),l=n(7294),i=n(9105),c=n(6742),o=n(6213),s=n(6159),m=n(6010),u=n(941),d="details_1VDD";function h(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,a.Z)({},t,{className:(0,m.Z)("alert alert--info",d,t.className)}))}var f=["mdxType","originalType"];var g={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,r.Z)(a,f));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(o.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(o.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(h,(0,a.Z)({},e,{summary:n}),r)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},571:function(e,t,n){n.d(t,{r:function(){return h},Z:function(){return f}});var a=n(7294),r=n(6010),l=n(941);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e){var t,n=e.anchorTopOffset,a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((function(e){return i(e).top>=n}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=a[a.indexOf(r)-1])?t:null:a[a.length-1]}function o(){var e=(0,a.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,a.useRef)(void 0),n=o();(0,a.useEffect)((function(){var a=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=c({anchorTopOffset:n.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function h(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(h,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return s(d),a.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},a.createElement(h,{toc:t}))}},7211:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),l=n(6742),i="tag_1Okp",c="tagRegular_3MiF",o="tagWithCount_1HU1";var s=function(e){var t,n=e.permalink,s=e.name,m=e.count;return a.createElement(l.Z,{href:n,className:(0,r.Z)(i,(t={},t[c]=!m,t[o]=m,t))},s,m&&a.createElement("span",null,m))}},7682:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),l=n(4973),i=n(7211),c="tags_2ga9",o="tag_11ep";function s(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:o},a.createElement(i.Z,{name:t,permalink:n}))}))))}}}]);