(window.webpackJsonp=window.webpackJsonp||[]).push([[24,6,13,14,15,16],{256:function(t,e,r){var content=r(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("268f718a",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(70),c=r(140),l=r(260),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=o.find((function(e){return e.name===t.product.category})),r=c.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:e,brandData:r}},methods:{decode:function(t){return l.decode(t)}}},f=(r(258),r(18)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumbs[0],alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"1e708522",null);e.default=component.exports},258:function(t,e,r){"use strict";r(256)},259:function(t,e,r){var n=r(68)(!1);n.push([t.i,".course-item[data-v-1e708522]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-1e708522]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-1e708522]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=n},261:function(t,e,r){"use strict";r.r(e);var n={name:"products",props:{products:Array}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(257).default})},262:function(t,e,r){"use strict";r.r(e);var n=r(19),o={data:function(){return{config:n}}},c=r(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row gy-2 gx-4 mb-4 mt-5"},t._l(t.config.checklist,(function(e,n){return r("div",{key:n,staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,r){r(265)},265:function(t,e,r){"use strict";var n=r(5),o=r(1),c=r(13),l=r(3),d=r(25),f=r(8),v=r(110),m=r(14),h=r(50),_=r(111),x=r(192),y=r(6),C=r(32),k=y("replace"),w=RegExp.prototype,D=o.TypeError,E=l(_),L=l("".indexOf),T=l("".replace),A=l("".slice),O=Math.max,R=function(t,e,r){return r>t.length?-1:""===e?r:L(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,l,_,y,P,S,$,j=d(this),I=0,M=0,U="";if(null!=t){if((r=v(t))&&(n=m(d("flags"in w?t.flags:E(t))),!~L(n,"g")))throw D("`.replaceAll` does not allow non-global regexes");if(o=h(t,k))return c(o,t,j,e);if(C&&r)return T(m(j),t,e)}for(l=m(j),_=m(t),(y=f(e))||(e=m(e)),P=_.length,S=O(1,P),I=R(l,_,0);-1!==I;)$=y?m(e(_,I,l)):x(_,l,I,[],void 0,e),U+=A(l,M,I)+$,M=I+P,I=R(l,_,I+S);return M<l.length&&(U+=A(l,M)),U}})},266:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("4150a5d0",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";r(266)},270:function(t,e,r){var n=r(68)(!1);n.push([t.i,".carousel-control-next-icon[data-v-e771df94],.carousel-control-prev-icon[data-v-e771df94]{background-color:rgba(0,0,0,.5);width:50px;height:50px;border-radius:50%}.carousel-control-next-icon[data-v-e771df94]:hover,.carousel-control-prev-icon[data-v-e771df94]:hover{background-color:rgba(0,0,0,.7)}",""]),t.exports=n},273:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(260),c={name:"productheader",props:{product:Object},data:function(){return{config:n}},methods:{decode:function(t){return o.decode(t)}}},l=(r(269),r(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-xxl py-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[r("div",{staticClass:"position-relative h-100"},[r("div",{staticClass:"carousel slide h-100",attrs:{id:"headerCarousel","data-bs-ride":"carousel"}},[r("div",{staticClass:"carousel-inner h-100"},t._l(t.product.localThumbs,(function(image,e){return r("div",{key:e,class:{"carousel-item":!0,active:0===e,"h-100":!0}},[r("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{src:""+t.config.imageFolder+image,alt:t.product.name,preset:"productHeader"}})],1)})),0),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]),t._v(" "),r("div",{staticClass:"col-lg-6 fadeInUp"},[r("div",{staticClass:"section-title bg-white text-start text-primary pe-3 h6"},[t._v("\n            "+t._s(t.product.category)+"\n          ")]),t._v(" "),r("h1",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            Die "+t._s(t.product.name)+" ist eine\n            "+t._s(t.product.categories[this.product.categories.length-2].slice(0,-1))+"\n            von der Marke "+t._s(t.decode(t.product.brand))+". Sie ist für einen Preis\n            von "+t._s(t.product.price)+" EUR verfügbar und ist sofort lieferbar.\n            Die "+t._s(t.decode(t.product.name))+" hat eine Gesamtbewertung von\n            "+t._s(t.product.stars)+"/5.\n          ")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            Das Produkt "),r("strong",[t._v(t._s(t.product.name))]),t._v(" bestand folgende\n            Testkriterien:\n          ")]),t._v(" "),r("Checklist"),t._v(" "),r("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testbericht"}},[t._v("Zum Testbericht")])],1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#headerCarousel","data-bs-slide":"prev"}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#headerCarousel","data-bs-slide":"next"}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"visually-hidden"},[t._v("Next")])])}],!1,null,"e771df94",null);e.default=component.exports;installComponents(component,{Checklist:r(262).default})},274:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(70),c=r(140),l=r(260),d={name:"productcard",props:{product:Object},data:function(){var t=this,e=this.product.category,r=o.find((function(t){return t.key===e.toLowerCase()}));r.key===e.toLowerCase()||(r=r.subCategories.find((function(t){return t.key===e.toLowerCase()})));var l=c.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:r,brandData:l}},methods:{decode:function(t){return l.decode(t)}}},f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"sidebar-widget schedule-widget mt-5"},[r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))]),t._v(" "),r("ul",{staticClass:"list-unstyled"},[r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Marke")]),t._v(" "),r("span",[r("nuxt-link",{attrs:{title:t.config.seo.mainKeyword+" von "+t.decode(t.product.brand),to:"/marken/"+t.brandData.slug+"/"},domProps:{innerHTML:t._s(t.product.brand)}})],1)]),t._v(" "),r("hr"),t._v(" "),r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Kategorie")]),t._v(" "),r("nuxt-link",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[r("span",[t._v(t._s(t.categoryData.name))])])],1),t._v(" "),r("hr"),t._v(" "),t._l(t.product.specifications,(function(e,n){return r("div",{key:n},[r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v(t._s(Object.keys(e)[0]))]),t._v(" "),r("span",[t._v(t._s(Object.values(e)[0]))])]),t._v(" "),r("hr")])})),t._v(" "),r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Bewertung")]),t._v(" "),r("div",{staticClass:"mb-1 mt-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})}))],2)]),t._v(" "),r("hr")],2),t._v(" "),r("div",{staticClass:"sidebar-contact-info mt-4"},[r("p",{staticClass:"mb-0"},[t._v("Preis")]),t._v(" "),r("div",{staticClass:"h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" EUR")])])])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,r){"use strict";var n=r(5),o=r(1),c=r(3),l=r(57),d=r(195),f=r(194),v=r(4),m=o.RangeError,h=o.String,_=Math.floor,x=c(f),y=c("".slice),C=c(1..toFixed),k=function(t,e,r){return 0===e?r:e%2==1?k(t,e-1,r*t):k(t*t,e/2,r)},w=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=_(n/1e7)},D=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=_(r/t),r=r%t*1e7},E=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,r,n,o,c=d(this),f=l(t),data=[0,0,0,0,0,0],v="",_="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return h(c);if(c<0&&(v="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*k(2,69,1))-69)<0?c*k(2,-e,1):c/k(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(data,0,r),n=f;n>=7;)w(data,1e7,0),n-=7;for(w(data,k(10,n,1),0),n=e-1;n>=23;)D(data,1<<23),n-=23;D(data,1<<n),w(data,1,1),D(data,2),_=E(data)}else w(data,0,r),w(data,1<<-e,0),_=E(data)+x("0",f);return _=f>0?v+((o=_.length)<=f?"0."+x("0",f-o)+_:y(_,0,o-f)+"."+y(_,o-f)):v+_}})},291:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(53),r(84),r(33),r(112),r(71),r(264),r(30),r(43),r(20),r(10),r(44),r(56),r(54),r(83),r(281),r(19)),c=r(51),l=r(109);var d={name:"product",head:function(){return{title:this.seoData&&this.seoData.seo&&this.seoData.seo.title?this.seoData.seo.title.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain):o.productSeo.defaultTitle.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain),meta:[{hid:"description",name:"description",content:this.seoData&&this.seoData.seo&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain):o.productSeo.defaultMetaDescription.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain)},{hid:"robots",name:"robots",content:this.seoData&&this.seoData.seo&&this.seoData.seo.robots?this.seoData.seo.robots:o.productSeo.defaultRobots}]}},data:function(){var t=this.$route.params.slug,e=l.a.products.getProductFromSlug(t),r=l.a.seo.getSeoForProduct(e),n=e.category,d=c.filter((function(t){return t.categories.includes(n)})).slice(0,12);return{product:e,config:o,seoData:r,category:n,relevantProducts:d,affiliateLink:o.affiliate.defaultLink}},methods:{fetchAffiliateLink:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/api/x/generate-link",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:"example.com",keyword:t.product.name})});case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:data=e.sent,t.affiliateLink=data.affiliateLink,e.next=12;break;case 11:console.error("Failed to generate affiliate link: ".concat(r.status," ").concat(r.statusText));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error generating affiliate link: ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}},created:function(){this.fetchAffiliateLink()},jsonld:function(){return{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org/","@type":"Product",name:this.product.name,image:[o.hostname+o.imageFolder+this.product.localThumb],description:this.seoData&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription:this.product.name+" - "+this.product.brand,sku:this.product.sku,brand:{"@type":"Brand",name:this.product.brand},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:this.product.stars.toString(),bestRating:this.product.stars.toString()},author:{"@type":"Organization",name:o.organization}},aggregateRating:{"@type":"AggregateRating",ratingValue:(1*Math.random()+4).toFixed(1).toString(),reviewCount:this.product.reviewCount},offers:{"@type":"Offer",url:o.hostname+o.productUrl+this.product.slug+"/",priceCurrency:"EUR",price:this.product.price,priceValidUntil:"2024-11-20",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock"}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":o.hostname,name:o.seo.mainKeyword}},{"@type":"ListItem",position:2,item:{"@id":o.hostname+o.kategorieUrl+this.category.toLowerCase()+"/",name:this.category}},{"@type":"ListItem",position:3,item:{"@id":o.hostname+o.productUrl+this.product.slug+"/",name:this.product.name}}]}]}}},f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ProductHeader",{attrs:{product:t.product,productName:t.product.name,textContent:t.product.description,productImage:""+t.config.imageFolder+t.product.localThumb}}),t._v(" "),r("div",{staticClass:"container-xxl py-5",attrs:{id:"testbericht"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},[t.seoData?t._e():r("h2",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),t.seoData&&t.seoData.seo&&t.seoData.seo.texts?r("div",t._l(t.seoData.seo.texts,(function(text,e){return r("div",{key:e},[r("div",{staticClass:"mb-3 mt-5 h5"},[r("h2",[t._v(t._s(text.title))])]),t._v(" "),r("p",{staticClass:"mb-4",domProps:{innerHTML:t._s(text.text)}})])})),0):t._e(),t._v(" "),r("Checklist"),t._v(" "),r("a",{staticClass:"btn btn-primary py-3 px-5",attrs:{target:"_blank",rel:"nofollow noopener",href:t.affiliateLink}},[t._v("\n            Bestellen\n          ")])],1),t._v(" "),r("div",{staticClass:"col-lg-4 fadeInUp"},[r("ProductCard",{attrs:{product:t.product}}),t._v(" "),r("div",{staticClass:"mt-5"},[r("a",{staticClass:"btn btn-primary py-3 px-5",staticStyle:{display:"block",width:"100%"},attrs:{target:"_blank",rel:"nofollow noopener",href:t.affiliateLink}},[t._v("\n              "+t._s(t.product.brand)+" Online Shop\n            ")])])],1)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        Ähnliche Produkte\n      ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v(t._s(t.category))])]),t._v(" "),r("Products",{attrs:{products:t.relevantProducts}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductHeader:r(273).default,Checklist:r(262).default,ProductCard:r(274).default,Products:r(261).default})}}]);