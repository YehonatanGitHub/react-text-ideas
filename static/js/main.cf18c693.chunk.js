(this["webpackJsonpreact-text-ideas"]=this["webpackJsonpreact-text-ideas"]||[]).push([[0],{14:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=o(9),c=o.n(r),s=(o(14),o(5)),i=o(8),l=o(2),u=o(0),d=function(e){var t=e.title;e.onAdd,e.showAdd;return Object(u.jsx)("header",{children:Object(u.jsx)("h1",{className:"header",children:t})})},h=function(e){var t=e.color,o=e.text,a=e.onClick;return Object(u.jsx)("button",{onClick:a,className:"btn",style:{backgroundColor:t},children:o})};h.defultProps={color:"steelblue"};var b=h,j=function(e){e.title;var t=e.onAdd,o=e.showAdd;return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("div",{className:"add-quote",children:[Object(u.jsx)("p",{children:"Have A Great Quote?"}),Object(u.jsx)(b,{color:o?"red":"green",text:o?"Close":"Add One",onClick:t})]})})},m=o.p+"static/media/whatsapp.0f74af52.png",g=o(7),f=function(e){var t=e.quotes,o=e.i;return Object(u.jsxs)("div",{className:"quote",children:[Object(u.jsxs)("div",{className:"quote-content",children:['"',t.content,'"']}),Object(u.jsxs)("div",{className:"quote-author",children:["- ",t.author," -"]}),Object(u.jsx)(g.MobileView,{children:Object(u.jsx)("a",{href:"whatsapp://send?text="+t.content+" - "+t.author+" - built by https://yrwebdev.com",className:"ns_btn","data-action":"share/whatsapp/share",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:m,width:"35",height:"35",alt:"whatsapp-icon"})})}),Object(u.jsx)(g.BrowserView,{children:Object(u.jsx)("a",{href:"https://web.whatsapp.com/send?text="+t.content+" - "+t.author+" - built by https://yrwebdev.com",className:"ns_btn","data-action":"share/whatsapp/share",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:m,width:"35",height:"35",alt:"whatsapp-icon"})})}),Object(u.jsx)("hr",{})]},o)},p=function(e){var t=e.card,o=e.index,a=e.toggleCards;return Object(u.jsxs)("div",{className:"categorys "+(t.open?"open":""),onClick:function(){return a(o)},children:[Object(u.jsx)("div",{className:"category-name",children:t.category}),t.cards.map((function(e,t){return Object(u.jsx)(f,{quotes:e,i:t},t)}))]},o)},v=function(e){var t=e.onAdd,o=Object(a.useState)(""),n=Object(l.a)(o,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),d=i[0],h=i[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),m=j[0],g=j[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r?(t({quote:r,author:d,category:m}),c(""),h(""),g("")):alert("Please add a Quote")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Quote"}),Object(u.jsx)("input",{className:"input-box",type:"text",placeholder:"Add Quote",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Author"}),Object(u.jsx)("input",{className:"input-box",type:"text",placeholder:"Author",value:d,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control form-control-check",children:[Object(u.jsx)("label",{children:"Select Category"}),Object(u.jsxs)("select",{className:"category",name:"category",value:m,onChange:function(e){return g(e.target.value)},children:[Object(u.jsx)("option",{className:"category"}),Object(u.jsx)("option",{className:"category",value:"Inspirational",children:"Inspirational"}),Object(u.jsx)("option",{className:"category",value:"Love",children:"Love"}),Object(u.jsx)("option",{className:"category",value:"Chinese Proverbs",children:"Chinese Proverbs"}),Object(u.jsx)("option",{className:"category",value:"Bible",children:"Bible"})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{id:"submit-btn",type:"submit",value:"Save Quote",className:"btn btn-block"})})]})};var O=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),o=t[0],n=t[1],r=Object(a.useState)([{category:"Love",open:!1,cards:[{id:3,content:"Let us always meet each other with smile, for the smile is the beginning of love.",author:"Mother Teresa"},{id:4,content:"Love is always bestowed as a gift - freely, willingly and without expectation. We don't love to be loved; we love to love.",author:"Leo Buscaglia"},{id:9,content:"Love isn't something you find. Love is something that finds you.",author:"Loretta Young"}]},{category:"Inspirational",open:!1,cards:[{id:1,content:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",author:"Helen Keller"},{id:2,content:"We know what we are, but know not what we may be.",author:"William Shakespeare"},{id:10,content:"It is during our darkest moments that we must focus to see the light.",author:"Aristotle Onassis"},{id:11,content:"If opportunity doesn't knock, build a door.",author:"Milton Berle"},{id:12,content:"Change your thoughts and you change your world.",author:"Norman Vincent Peale"}]},{category:"Chinese Proverbs",open:!1,cards:[{id:5,content:"Be not afraid of growing slowly, be afraid only of standing still.",author:"Chinese Proverb"},{id:6,content:"Your teacher can open the door, but you must enter by yourself.",author:"Chinese Proverb"},{id:13,content:"Give me a fish and I will eat for a day. Teach me to fish and I eat for a lifetime.",author:"Chinese Proverb"},{id:14,content:"If you plan for one year, plant rice. If you plan for ten years, plant trees, If you plan for 100 years, educate mankind.",author:"Chinese Proverb"},{id:15,content:"The temptation to quit will be greatest just before you are about to succeed.",author:"Chinese Proverb"}]},{category:"Bible",open:!1,cards:[{id:7,content:"A righteous man falls down seven times and gets up.",author:"King Solomon, Proverbs, 24:16"},{id:8,content:"Gam zu l'tova. This too is for the good.",author:"Nachum Ish Gamzu, Talmud, Taanit, 21a"},{id:16,content:"People often avoid making decisions out of fear of making a mistake. Actually the failure to make decisions is one of life's biggest mistakes.",author:"Rabbi Noah Weinberg"},{id:17,content:"Say little and do much, and receive all men with a pleasant countenance.",author:"Shammai, Pirkei Avot, 1:15"},{id:18,content:"In a place where there are no men, strive to be a man.",author:"Pirkei Avot, 2:5"},{id:19,content:"Study is not the most important thing, but actions.",author:"Shimon ben Gamaliel, Pirkei Avot, 1:17"}]}]),c=Object(l.a)(r,2),h=c[0],b=c[1],m=function(e){b(h.map((function(t,o){return t.open=o===e&&!t.open,t})))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(d,{title:"Share Great Quotes"}),Object(u.jsxs)("div",{className:"accordion",children:[Object(u.jsx)("p",{className:"accordion-title",children:"Select from the list of categories:"}),h.map((function(e,t){return Object(u.jsx)(p,{card:e,index:t,toggleCards:m},t)}))]}),Object(u.jsx)(j,{onAdd:function(){return n(!o)},title:"Share Great Quotes",showAdd:o}),o&&Object(u.jsx)(v,{onAdd:function(e){var t=Object(i.a)(h),o=Object(s.a)({},e);console.log(t),console.log("theQuote"),console.log(o);var a={id:Math.floor(1e4*Math.random())+1,content:o.quote,author:o.author},n=o.category;console.log("newQute"),console.log(a),console.log("selectQuote"),console.log(n);var r=t.map((function(e){return e.category!==n?e:Object(s.a)(Object(s.a)({},e),{},{cards:[].concat(Object(i.a)(e.cards),[a])})}));console.log("newData"),console.log(r),b(r)}})]})},x=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(t){var o=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;o(e),a(e),n(e),r(e),c(e)}))};o(17);c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.cf18c693.chunk.js.map