const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BrandVideo-DR_Ah9am.js","./react-vendor-cxkclgJA.js","./BrandOrigin-BlKLe8pd.js","./WhyBuyUs-CsQG4JM2.js","./HowItWorks-Dqp30tW7.js","./CategorySection-C6104Btm.js","./WhyAssortment-Txekc3y6.js","./ContactCTA-BF6-DAcx.js","./SeoText-DlGe8u4g.js"])))=>i.map(i=>d[i]);
import{r as d,a as B,R as S}from"./react-vendor-cxkclgJA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function p(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(a){if(a.ep)return;a.ep=!0;const t=p(a);fetch(a.href,t)}})();var L={exports:{}},E={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=d,q=Symbol.for("react.element"),C=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,D=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function A(s,o,p){var i,a={},t=null,l=null;p!==void 0&&(t=""+p),o.key!==void 0&&(t=""+o.key),o.ref!==void 0&&(l=o.ref);for(i in o)P.call(o,i)&&!M.hasOwnProperty(i)&&(a[i]=o[i]);if(s&&s.defaultProps)for(i in o=s.defaultProps,o)a[i]===void 0&&(a[i]=o[i]);return{$$typeof:q,type:s,key:t,ref:l,props:a,_owner:D.current}}E.Fragment=C;E.jsx=A;E.jsxs=A;L.exports=E;var e=L.exports,v={},k=B;v.createRoot=k.createRoot,v.hydrateRoot=k.hydrateRoot;const U="modulepreload",z=function(s,o){return new URL(s,o).href},R={},u=function(o,p,i){let a=Promise.resolve();if(p&&p.length>0){const l=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),g=m?.nonce||m?.getAttribute("nonce");a=Promise.allSettled(p.map(n=>{if(n=z(n,i),n in R)return;R[n]=!0;const r=n.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!i)for(let b=l.length-1;b>=0;b--){const y=l[b];if(y.href===n&&(!r||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${c}`))return;const h=document.createElement("link");if(h.rel=r?"stylesheet":U,r||(h.as="script"),h.crossOrigin="",h.href=n,g&&h.setAttribute("nonce",g),document.head.appendChild(h),r)return new Promise((b,y)=>{h.addEventListener("load",b),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${n}`)))})}))}function t(l){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=l,window.dispatchEvent(m),!m.defaultPrevented)throw l}return a.then(l=>{for(const m of l||[])m.status==="rejected"&&t(m.reason);return o().catch(t)})},x=[{id:"tablas",name:"Tablas (Decks)",slug:"tablas",icon:"deck",moq:5,boxLabel:"Caja de 5 Tablas Surtidas",intro:"Maderos originales importados para armar o exhibir en tienda. Se entregan en surtido de bodega; imágenes de referencia.",products:[{id:"tablas-01382105",sku:"01382105",name:"VODKA GREEN 8.25",qty:9,image:"https://bunkerskateshop.com/wp-content/uploads/2025/12/image-9.jpg"},{id:"tablas-01782051",sku:"01782051",name:"16MM CHRYSLER BLACK 8.25",qty:6,image:"https://mantisshop.de/cdn/shop/files/Theories-Of-Atlantis-16mm-Chrysler-Deck-1_54802.jpg?v=1769597987&width=713"},{id:"tablas-01382077",sku:"01382077",name:"AIRLINES ORANGE 8.25",qty:7,image:"https://mantisshop.de/cdn/shop/files/polzrsuckzs_68671.jpg?v=1769604806&width=713"},{id:"tablas-01778071",sku:"01778071",name:"ALIEN NYC 7.875",qty:1,image:null},{id:"tablas-01780071",sku:"01780071",name:"ALIEN NYC 8.0",qty:1,image:null},{id:"tablas-01380094",sku:"01380094",name:"ARROW BLUE 8.0",qty:19,image:"https://mantisshop.de/cdn/shop/files/polstdnjukzs_68622.jpg?v=1769605587&width=713"},{id:"tablas-01381040",sku:"01381040",name:"ATMO DREAMCATCHER NATURAL 8.125",qty:8,image:"https://mantisshop.de/cdn/shop/files/dreamcatcheratmo_68620.jpg?v=1769605576&width=713"},{id:"tablas-01285036",sku:"01285036",name:"BENDER YELLOW 8.5",qty:9,image:"https://mantisshop.de/cdn/shop/files/Hopps-Meinholz-Bender-Deck-1_56571.jpg?v=1769596416&width=713"},{id:"tablas-01282049",sku:"01282049",name:"BIG HOPPS MULTIBLAZE 8.25",qty:6,image:"https://mantisshop.de/cdn/shop/files/hwtr_69023.jpg?v=1769605903&width=713"},{id:"tablas-01380027",sku:"01380027",name:"BRAINS ORANGE 8.0",qty:9,image:"https://mantisshop.de/cdn/shop/files/polstgjruckzs_68623.jpg?v=1769605593&width=713"},{id:"tablas-01483058",sku:"01483058",name:"BRANDON BONNER PURPLE 8.375",qty:3,image:"https://mantisshop.de/cdn/shop/files/Natural-Konzepts-1_45693.jpg?v=1769588755&width=713"},{id:"tablas-01278119",sku:"01278119",name:"CAUTION TAPE MULTI BLK YELLOW 7.875",qty:1,image:"https://mantisshop.de/cdn/shop/files/Hopps-x-Labor-Barrier-Deck-YellowBlack_58842.jpg?v=1769597844&width=713"},{id:"tablas-01383039",sku:"01383039",name:"CHARMER MULTI 8.375",qty:8,image:"https://bunkerskateshop.com/wp-content/uploads/2025/12/image-13.jpg"},{id:"tablas-01280014",sku:"01280014",name:"CHIPPER DELNEGRO BLUE 8.0",qty:1,image:"https://reliefskatesupply.com/cdn/shop/products/image_ae18344e-8cbd-4a2b-8786-d47c228e5d75_1000x1000.jpg?v=1631894248"},{id:"tablas-01280015",sku:"01280015",name:"CHIPPER DELNEGRO GREEN 8.0",qty:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXNlXnvS0xM4tfSGONp4th-Gvnu2_qmvrWgZIIVeyngoy8eymajbAink&s=10"},{id:"tablas-01280018",sku:"01280018",name:"CHIPPER DELNEGRO PURPLE 8.0",qty:1,image:null},{id:"tablas-01280013",sku:"01280013",name:"CHIPPER DELNEGRO RED 8.0",qty:1,image:null},{id:"tablas-01880054",sku:"01880054",name:"CLOUD CITY BLUE 8",qty:2,image:"https://bunkerskateshop.com/wp-content/uploads/2025/12/image-39.jpg"},{id:"tablas-01881054",sku:"01881054",name:"CLOUD CITY BLUE 8.125",qty:4,image:null},{id:"tablas-01882054",sku:"01882054",name:"CLOUD CITY BLUE 8.25",qty:5,image:null},{id:"tablas-01382018",sku:"01382018",name:"COFFEE PURPLE 8.25",qty:9,image:"https://mantisshop.de/cdn/shop/files/Feel-Skatebords-dek-3_48724.jpg?v=1769590980&width=713"},{id:"tablas-01281022",sku:"01281022",name:"EGGELING WHITE 8.125",qty:4,image:"https://mantisshop.de/cdn/shop/files/Hopps-Sculpture-Series-Eggeling-Deck-1_60882.jpg?v=1769599236&width=713"},{id:"tablas-01782031",sku:"01782031",name:"GREAT PYRAMID BLACK 8.25",qty:2,image:null},{id:"tablas-01380050",sku:"01380050",name:"HORSEMEN NATURAL 8.0",qty:9,image:"https://mantisshop.de/cdn/shop/files/polstermhgxkzs_68629.jpg?v=1769604957&width=713"},{id:"tablas-01782014",sku:"01782014",name:"ISHTAR (WITH LION) BLUE 8.25",qty:6,image:"https://bunkerskateshop.com/wp-content/uploads/2025/12/image-31.jpg"},{id:"tablas-01281100",sku:"01281100",name:"JAHMAL WILLIAMS AFRO KEY WHITE/BROWN 8.125",qty:1,image:"https://mantisshop.de/cdn/shop/files/Hopps-Sculpture-Williams-1_60805.jpg?v=1769600119&width=713"},{id:"tablas-01281056",sku:"01281056",name:"JAMAL WILLIAMS YELLOW 8.125",qty:1,image:null},{id:"tablas-01482026",sku:"01482026",name:"JJ COLON YELLOW 8.25",qty:4,image:"https://mantisshop.de/cdn/shop/files/Natural-Concenpts-Colon-Sloth-1_59608.jpg?v=1769599097&width=713"},{id:"tablas-01282084",sku:"01282084",name:"JOAN BARKER ARTIST BLUE 8.25",qty:1,image:"https://mantisshop.de/cdn/shop/files/Hopps-Brandi-Joan-Barker-Abstract-Series-Deck-1_58837.jpg?v=1769597805&width=713"},{id:"tablas-01282073",sku:"01282073",name:"JOAN BARKER ARTIST RED 8.25",qty:1,image:"https://mantisshop.de/cdn/shop/files/Hopps-Williams-Joan-Barker-Abstract-Series-Deck-1_58838.jpg?v=1769598657&width=713"},{id:"tablas-01281092",sku:"01281092",name:"JOEL MEINHOLZ AFRO KEY WHITE/GREY 8.125",qty:1,image:"https://mantisshop.de/cdn/shop/files/Hopps-Sculpture-Series-Meinholz-1_60878.jpg?v=1769600096&width=713"},{id:"tablas-01482045",sku:"01482045",name:"JOSE VELEZ GREEN 8.25",qty:4,image:"https://mantisshop.de/cdn/shop/files/Natural-Konzepts_45697.jpg?v=1769588768&width=713"},{id:"tablas-01482034",sku:"01482034",name:"JZ RADICAL BLUE 8.25",qty:4,image:"https://images.squarespace-cdn.com/content/v1/5c658a899b8fe80d499ee52a/1612623294780-6NB7VO5TPYCJ8TT4MSV7/JZ-Radical-%27Straight-Flush%27-hi-res-750x1000pxl.jpg?format=1500w"},{id:"tablas-01377087",sku:"01377087",name:"NEWYORK ORANGE 7.75",qty:9,image:"https://mantisshop.de/cdn/shop/files/polsjztckzs_68630.jpg?v=1769604962&width=713"},{id:"tablas-01781049",sku:"01781049",name:"OBSERVATION MULTI 8.125",qty:4,image:"https://mantisshop.de/cdn/shop/files/Theories-Of-Atlantis-Observation-Deck-1_60891.jpg?v=1769600131&width=713"},{id:"tablas-01785024",sku:"01785024",name:"RASPUTEN BLUE 8.5",qty:5,image:"https://mantisshop.de/cdn/shop/files/Theories-Deck-Rasputin-Stained-1_51674.jpg?v=1769593531&width=713"},{id:"tablas-01782025",sku:"01782025",name:"RASPUTEN GREEN 8.25",qty:1,image:"https://mantisshop.de/cdn/shop/files/Theories-Deck-Rasputin-Stained-1_51674.jpg?v=1769593531&width=714"},{id:"tablas-01782023",sku:"01782023",name:"RASPUTEN RED 8.25",qty:2,image:"https://mantisshop.de/cdn/shop/files/Theories-Deck-Rasputin-Stained-1_51674.jpg?v=1769593531&width=715"},{id:"tablas-01780109",sku:"01780109",name:"SALA NYLE MULTI 8.0",qty:1,image:"https://mantisshop.de/cdn/shop/files/THEORIES-NYLE-LOVETT-CHAMP-SKATEBOARD-DECK-BOTTOM.webp?v=1784121804&width=713"},{id:"tablas-01382060",sku:"01382060",name:"SIDESHOW NATURAL 8.25",qty:19,image:"https://mantisshop.de/cdn/shop/files/polstergeuckzs_68686.jpg?v=1769604635&width=713"},{id:"tablas-01780069",sku:"01780069",name:"THUNDER CAT MULTI 8",qty:3,image:null},{id:"tablas-01882029",sku:"01882029",name:"TRAFFICDRIGGSANDMANHATTANAVEMATCHLESSDECK MULTI 8.25",qty:3,image:"https://www.boardstore.com.au/assets/thumbL/tradec.1.dm.8.0.jpg?20211029144636"},{id:"tablas-01882039",sku:"01882039",name:"TRAFFICDRIGGSANDMANHATTANAVENONAMEDECK MULTI 8.25",qty:3,image:"https://www.boardstore.com.au/assets/thumbL/tradec.1.dm.8.0.jpg?20211029144636"},{id:"tablas-01885049",sku:"01885049",name:"TRAFFICSCRAMBLECROSSINGSAYRESDECK MULTI 8.5",qty:4,image:"https://bunkerskateshop.com/wp-content/uploads/2025/12/image-37.jpg"},{id:"tablas-01985014",sku:"01985014",name:"TRAPBLOCKLOGODECKBLUE 8.5",qty:5,image:"https://mantisshop.de/cdn/shop/files/Trap-Block-Logo-Deck-Blue-1_51099.jpg?v=1769592850&width=713"},{id:"tablas-01980014",sku:"01980014",name:"TRAPBLOCKLOGODECKTURQUISE 8.0",qty:3,image:"https://mantisshop.de/cdn/shop/files/Trap-Block-Logo-Deck-Turquise-1_51101.jpg?v=1769592874&width=713"},{id:"tablas-01982054",sku:"01982054",name:"TRAPCLUBBERSTCLLFFLER BLUE 8.25",qty:8,image:null},{id:"tablas-01985054",sku:"01985054",name:"TRAPCLUBBERSTCLLFFLER BLUE 8.5",qty:4,image:null},{id:"tablas-01985059",sku:"01985059",name:"TRAPCLUBBERSTGLHORRWARTH MULTI 8.25",qty:5,image:null},{id:"tablas-01982056",sku:"01982056",name:"TRAPCLUBBERSTGLPREUT YELLOW 8.25",qty:8,image:null},{id:"tablas-01985051",sku:"01985051",name:"TRAPCLUBBERSTGLREIF BLACK 8.5",qty:5,image:null},{id:"tablas-01982015",sku:"01982015",name:"TRAPIRONLOGODECKLIME 8.25",qty:5,image:"https://mantisshop.de/cdn/shop/files/Trap-Iron-Logo-Deck-Lime-1_51105.jpg?v=1769592874&width=713"},{id:"tablas-01983015",sku:"01983015",name:"TRAPIRONLOGODECKLIME 8.375",qty:1,image:"https://mantisshop.de/cdn/shop/files/Trap-Iron-Logo-Deck-Lime-1_51105.jpg?v=1769592874&width=713"},{id:"tablas-01985015",sku:"01985015",name:"TRAPIRONLOGODECKLIME 8.5",qty:3,image:"https://mantisshop.de/cdn/shop/files/Trap-Iron-Logo-Deck-Lime-1_51105.jpg?v=1769592874&width=713"},{id:"tablas-01981017",sku:"01981017",name:"TRAPIRONLOGODECKORANGE 8.125",qty:3,image:"https://mantisshop.de/cdn/shop/files/Trap-Iron-Logo-Deck-Orange-1_51107.jpg?v=1769592885&width=713"},{id:"tablas-01983017",sku:"01983017",name:"TRAPIRONLOGODECKORANGE 8.375",qty:1,image:"https://mantisshop.de/cdn/shop/files/Trap-Iron-Logo-Deck-Orange-1_51107.jpg?v=1769592885&width=713"},{id:"tablas-01981025",sku:"01981025",name:"TRAPMOTORSMVF BLUEDECK 8.125",qty:4,image:"https://mantisshop.de/cdn/shop/files/Trap-Motors-Reif-Deck-1_59253.jpg?v=1769598181&width=713"},{id:"tablas-01982026",sku:"01982026",name:"TRAPMOTORSREIF YELLOWDECK 8.25",qty:4,image:"https://mantisshop.de/cdn/shop/files/Trap-Motors-Reif-Deck-1_59253.jpg?v=1769598181&width=713"},{id:"tablas-01982036",sku:"01982036",name:"TRAPRODRIGUEZTAROTMONDYELLOW 8.25",qty:4,image:"https://mantisshop.de/cdn/shop/files/Trap-Rodriguez-Tarot-Mond-Yellow-1_52370.jpg?v=1769593317&width=713"},{id:"tablas-01983035",sku:"01983035",name:"TRAPRODRIGUEZTAROTTURMGREEN 8.375",qty:4,image:"https://mantisshop.de/cdn/shop/files/Trap-Rodriguez-Tarot-Turm-Green-1_52374.jpg?v=1769593341&width=713"},{id:"tablas-01985034",sku:"01985034",name:"TRAPRODRIGUEZTAROTWAGENBLUE 8.5",qty:4,image:"https://mantisshop.de/cdn/shop/files/Trap-Rodriguez-Tarot-Wagen-Blue-1_52376.jpg?v=1769593354&width=713"},{id:"tablas-01982047",sku:"01982047",name:"TRAPSHIPJURGEN ORANGE 8.25",qty:5,image:"https://f.fcdn.app/imgs/ae5527/www.tiendarepublica.com/rep/4ca7/original/catalogo/TR-SHIP-HO-8.375TR-SHIP-HO-8.3751/1024-1024/deck-trap-barco-jurgen-horrwarth-8-375-solo-tabla-deck-trap-barco-jurgen-horrwarth-8-375-solo-tabla.jpg"},{id:"tablas-01985045",sku:"01985045",name:"TRAPSHIPMVF GREEN 8.5",qty:4,image:"https://mantisshop.de/cdn/shop/files/Trap-Ship-MVF-Complete-1_55645.jpg?v=1769596395&width=713"},{id:"tablas-01985042",sku:"01985042",name:"TRAPSHIPREIF WHITE 8.5",qty:3,image:"https://mantisshop.de/cdn/shop/files/Trap-Ship-1_47545.jpg?v=1769589051&width=713"},{id:"tablas-01982049",sku:"01982049",name:"TRAPSHIPTROVATO MULTI 8.25",qty:4,image:"https://mantisshop.de/cdn/shop/files/Trap-Ship-6_47570.jpg?v=1769589075&width=713"},{id:"tablas-01981044",sku:"01981044",name:"TRAPSHIP_PREUT BLUE 8.125",qty:5,image:"https://mantisshop.de/cdn/shop/files/Trap-Space-Preut-Deck-Mint-1_55426.jpg?v=1769595438&width=713"},{id:"tablas-01782094",sku:"01782094",name:"TV GIRL BLUE 8.25",qty:1,image:null},{id:"tablas-01783084",sku:"01783084",name:"TWO FACE BLUE 8.375",qty:1,image:null},{id:"tablas-01281067",sku:"01281067",name:"WAX ORANGE 8.125",qty:1,image:null},{id:"tablas-01882061",sku:"01882061",name:"X COLOR COMMUNICATION SKYLINE BLACK 8.25",qty:3,image:"https://mantisshop.de/cdn/shop/files/Traffic-X-Color-Skyline-Deck-3_57315.jpg?v=1769597527&width=713"}]},{id:"trucks",name:"Ejes (Trucks)",slug:"trucks",icon:"truck",moq:5,boxLabel:"Caja de 5 Pares de Ejes Surtidos",intro:"Ejes en aluminio fundido, alturas estándar para street y transición.",products:[{id:"trucks-02558031",sku:"02558031",name:"BLACK BASE 5.85",qty:30,image:"https://mantisshop.de/cdn/shop/files/Bolzen-Trucks-Black-Black-V2-Base-1_47441.jpg?v=1769589901&width=713"},{id:"trucks-02555025",sku:"02555025",name:"GREEN BASE 5.5",qty:30,image:"https://mantisshop.de/cdn/shop/files/Bolzen-Trucks-Black-Black-V2-Base-1_47441.jpg?v=1769589901&width=714"},{id:"trucks-02552013",sku:"02552013",name:"RED BASE 5.25",qty:40,image:"https://mantisshop.de/cdn/shop/files/Bolzen-Trucks-Black-Black-V2-Base-1_47441.jpg?v=1769589901&width=715"}]},{id:"ruedas",name:"Ruedas",slug:"ruedas",icon:"wheel",moq:5,boxLabel:"Caja de 5 Sets de Ruedas Surtidas",intro:"Poliuretano de alta resistencia en distintos diámetros y durezas.",products:[{id:"ruedas-03354121",sku:"03354121",name:"BROOKLYN BRAWLERS 54MM",qty:10,image:"https://mantisshop.de/cdn/shop/files/3167E205-A2E6-40F0-BFE1-03BCA41882D5.webp?v=1780528868&width=713"},{id:"ruedas-03352169",sku:"03352169",name:"BUBBLE GUM MULTI RED/BLUE 52MM",qty:10,image:"https://mantisshop.de/cdn/shop/files/polsterthtckzs_68644.jpg?v=1769604595&width=713"},{id:"ruedas-03352151",sku:"03352151",name:"PHOTO CAPTURE BLACK 52MM",qty:10,image:null},{id:"ruedas-03354118",sku:"03354118",name:"SKULL PURPLE 54MM",qty:10,image:"https://mantisshop.de/cdn/shop/files/polsterrfgkzs_68637.jpg?v=1769604555&width=713"},{id:"ruedas-03354133",sku:"03354133",name:"STAND STRONG 54MM",qty:5,image:null},{id:"ruedas-03353149",sku:"03353149",name:"UNITE MULTI RED/BLUE 53MM",qty:5,image:null}]},{id:"rodamientos",name:"Rodamientos",slug:"rodamientos",icon:"bearing",moq:5,boxLabel:"Caja de 5 Packs de Rodamientos Surtidos",intro:"Rodamientos de acero, disponibles en distintos grados de velocidad.",products:[{id:"rodamientos-04902025",sku:"04902025",name:"TRAPTITANIUM BEARINGS ABEC7 GREEN",qty:48,image:"https://mantisshop.de/cdn/shop/files/Trap-Titanium-Smoker-Bearings-1_55176.jpg?v=1769595562&width=713"}]}],de=[{name:"Theories of Atlantis",note:"Decks de autor y series gráficas conceptuales."},{name:"Hopps",note:"Colaboraciones de artista y series escultóricas."},{name:"Trap Skateboards",note:"Catálogo amplio de gráficas y completos."},{name:"Traffic Skateboards",note:"Gráfica urbana de alta rotación."},{name:"Natural Konzepts",note:"Diseño minimalista y de autor."},{name:"Feel Skateboards",note:"Producción europea, acabados de calidad."},{name:"Bolzen Trucks",note:"Ejes en aluminio fundido."}],pe=[{n:"01",title:"Explora por categoría",text:"Revisa tablas, ejes, ruedas y rodamientos: lo que ves es lo que hay físicamente en bodega, no un catálogo genérico de proveedor."},{n:"02",title:"Cotiza cantidades",text:"Escríbenos por WhatsApp indicando cuántas unidades te interesan por categoría. El formulario de contacto ya te ayuda a armar el mensaje."},{n:"03",title:"Confirmamos disponibilidad",text:"Te respondemos con precio por volumen y disponibilidad real de la rotación de bodega al momento de tu pedido."},{n:"04",title:"Coordinamos despacho",text:"Una vez confirmado el pedido, coordinamos el envío a tu ciudad o punto de retiro."}],H=[{tag:"SURTIDO",text:"Distribución aleatoria con equilibrio de diseños en cada pedido."},{tag:"AVISO",text:"No se garantiza diseño específico por unidad. Imágenes de referencia."},{tag:"B2B",text:"Ideal para reventa y distribución mayorista."},{tag:"ROTACIÓN",text:"Selección basada en rotación de inventario de bodega."}];function w({whatsappHref:s}){const[o,p]=d.useState(!1),[i,a]=d.useState(!1);return d.useEffect(()=>{const t=()=>p(window.scrollY>8);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),e.jsxs("header",{className:`nav ${o?"nav-scrolled":""}`,children:[e.jsxs("div",{className:"container nav-inner",children:[e.jsxs("a",{href:"#top",className:"nav-logo",children:["CATÁLOGO 2026",e.jsx("span",{children:"BY LET PROCUREMENT"})]}),e.jsxs("nav",{className:"nav-links",children:[e.jsx("a",{href:"#marca",children:"La marca"}),x.map(t=>e.jsx("a",{href:`#${t.slug}`,children:t.name},t.id))]}),e.jsx("div",{className:"nav-actions",children:e.jsx("a",{href:s,target:"_blank",rel:"noreferrer",className:"btn btn-primary",children:"Cotizar por WhatsApp"})}),e.jsxs("button",{className:"nav-toggle",onClick:()=>a(t=>!t),"aria-label":"Abrir menú","aria-expanded":i,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]}),i&&e.jsxs("div",{className:"nav-mobile",children:[e.jsx("a",{href:"#marca",onClick:()=>a(!1),children:"La marca"}),x.map(t=>e.jsx("a",{href:`#${t.slug}`,onClick:()=>a(!1),children:t.name},t.id)),e.jsx("a",{href:s,target:"_blank",rel:"noreferrer",className:"btn btn-primary",onClick:()=>a(!1),children:"Cotizar por WhatsApp"})]}),e.jsx("style",{children:`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(18,18,18,0.94);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s ease;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 20px;
          letter-spacing: 0.03em;
          color: var(--white);
          white-space: nowrap;
        }
        .nav-logo span { display: block; color: var(--yellow); margin-top: 1px; font-size: 11px; font-family: var(--font-mono); letter-spacing: 0.1em; }
        .nav-links {
          display: flex;
          gap: 26px;
        }
        .nav-links a {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--light-gray);
          transition: color 0.15s ease;
        }
        .nav-links a:hover { color: var(--yellow); }
        .nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 8px; }
        .nav-toggle span { width: 22px; height: 2px; background: var(--white); }
        .nav-mobile { display: none; }

        @media (max-width: 900px) {
          .nav-links, .nav-actions { display: none; }
          .nav-toggle { display: flex; }
          .nav-mobile.nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 12px var(--edge) 20px;
            background: var(--carbon);
            border-top: 1px solid rgba(255,255,255,0.08);
          }
          .nav-mobile a {
            padding: 12px 0;
            font-family: var(--font-mono);
            font-size: 13px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--light-gray);
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .nav-mobile .btn { margin-top: 12px; justify-content: center; }
        }
      `})]})}const G=["https://bunkerskateshop.com/wp-content/uploads/2025/12/image-9.jpg","https://mantisshop.de/cdn/shop/files/Theories-Of-Atlantis-16mm-Chrysler-Deck-1_54802.jpg?v=1769597987&width=713","https://mantisshop.de/cdn/shop/files/polzrsuckzs_68671.jpg?v=1769604806&width=713","https://mantisshop.de/cdn/shop/files/polstdnjukzs_68622.jpg?v=1769605587&width=713","https://mantisshop.de/cdn/shop/files/dreamcatcheratmo_68620.jpg?v=1769605576&width=713","https://mantisshop.de/cdn/shop/files/Hopps-Meinholz-Bender-Deck-1_56571.jpg?v=1769596416&width=713"];function W({whatsappHref:s,quoteHref:o}){return e.jsxs("section",{id:"top",className:"hero",children:[e.jsx("div",{className:"hero-collage","aria-hidden":"true",children:G.map((p,i)=>e.jsx("div",{className:"hero-collage-tile",children:e.jsx("img",{src:p,alt:"",loading:"eager",fetchpriority:i===0?"high":"auto",decoding:i===0?"sync":"async",width:"200",height:"300"})},i))}),e.jsx("div",{className:"hero-scrim"}),e.jsxs("div",{className:"container hero-content",children:[e.jsx("p",{className:"eyebrow hero-eyebrow",children:"Catálogo mayorista 2026 · By LET Procurement"}),e.jsxs("h1",{className:"hero-title",children:["Inventario en",e.jsx("br",{}),"surtido, listo",e.jsx("br",{}),"para rodar."]}),e.jsx("p",{className:"hero-sub",children:"Tablas, ejes, ruedas y rodamientos por volumen. Las cajas llegan surtidas de bodega: las imágenes son de referencia, el diseño exacto que recibes depende de la rotación disponible al momento del despacho."}),e.jsxs("div",{className:"hero-ctas",children:[e.jsx("a",{href:s,target:"_blank",rel:"noreferrer",className:"btn btn-primary",children:"Cotizar por WhatsApp"}),e.jsx("a",{href:o,className:"btn btn-outline-light",children:"Ver catálogo por categoría"})]}),e.jsx("div",{className:"hero-note stencil-badge on-dark",children:"Distribución equitativa de diseños por pedido, sin gráfica garantizada"})]}),e.jsx("style",{children:`
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: flex-end;
          background: var(--carbon);
          overflow: hidden;
        }
        .hero-collage {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2px;
          opacity: 0.55;
        }
        .hero-collage-tile {
          overflow: hidden;
          background: var(--dark-gray);
        }
        .hero-collage-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.15) contrast(1.05);
        }
        @media (max-width: 700px) {
          .hero-collage { grid-template-columns: repeat(3, 1fr); }
          .hero-collage-tile:nth-child(n+4) { display: none; }
        }
        .hero-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(18,18,18,0.55) 0%, rgba(18,18,18,0.35) 35%, rgba(18,18,18,0.92) 100%);
        }
        .hero-content {
          position: relative;
          padding-top: 140px;
          padding-bottom: 76px;
          max-width: 760px;
        }
        .hero-eyebrow { color: var(--yellow); margin-bottom: 18px; }
        .hero-title {
          font-size: clamp(46px, 8vw, 92px);
          line-height: 0.98;
          color: var(--white);
        }
        .hero-sub {
          margin-top: 22px;
          max-width: 520px;
          color: var(--light-gray);
          font-size: 16px;
          line-height: 1.6;
        }
        .hero-ctas {
          margin-top: 34px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-note {
          margin-top: 28px;
        }

        @media (max-width: 600px) {
          .hero { min-height: 86vh; }
          .hero-content { padding-top: 110px; padding-bottom: 48px; }
        }
      `})]})}function F(){return e.jsxs("section",{className:"infobar",children:[e.jsx("div",{className:"container infobar-inner",children:H.map(s=>e.jsxs("div",{className:"infobar-item",children:[e.jsx("span",{className:"infobar-tag",children:s.tag}),e.jsx("span",{className:"infobar-text",children:s.text})]},s.tag))}),e.jsx("style",{children:`
        .infobar {
          background: var(--carbon);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .infobar-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .infobar-item {
          padding: 20px 22px;
          border-left: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .infobar-item:first-child { border-left: none; }
        .infobar-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--yellow);
        }
        .infobar-text {
          font-size: 13.5px;
          color: var(--light-gray);
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .infobar-inner { grid-template-columns: repeat(2, 1fr); }
          .infobar-item:nth-child(2n+1) { border-left: none; }
          .infobar-item:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
        @media (max-width: 520px) {
          .infobar-inner { grid-template-columns: 1fr; }
          .infobar-item { border-left: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
      `})]})}const K=d.lazy(()=>u(()=>import("./BrandVideo-DR_Ah9am.js"),__vite__mapDeps([0,1]),import.meta.url)),V=d.lazy(()=>u(()=>import("./BrandOrigin-BlKLe8pd.js"),__vite__mapDeps([2,1]),import.meta.url)),Y=d.lazy(()=>u(()=>import("./WhyBuyUs-CsQG4JM2.js"),__vite__mapDeps([3,1]),import.meta.url)),$=d.lazy(()=>u(()=>import("./HowItWorks-Dqp30tW7.js"),__vite__mapDeps([4,1]),import.meta.url)),J=d.lazy(()=>u(()=>import("./CategorySection-C6104Btm.js"),__vite__mapDeps([5,1]),import.meta.url)),Z=d.lazy(()=>u(()=>import("./WhyAssortment-Txekc3y6.js"),__vite__mapDeps([6,1]),import.meta.url)),X=d.lazy(()=>u(()=>import("./ContactCTA-BF6-DAcx.js"),__vite__mapDeps([7,1]),import.meta.url)),Q=d.lazy(()=>u(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url)),ee=d.lazy(()=>u(()=>import("./SeoText-DlGe8u4g.js"),__vite__mapDeps([8,1]),import.meta.url)),te=d.lazy(()=>u(()=>Promise.resolve().then(()=>oe),void 0,import.meta.url)),O="573118785553",ae="dXKgk423hu0";function j(s){return`https://wa.me/${O}?text=${s}`}function se(){const[s,o]=d.useState({}),[p,i]=d.useState(null),a=Object.values(s).reduce((n,r)=>n+r.qty,0),t=n=>{o(r=>{const c=r[n.id],f=c?c.qty+1:1;return{...r,[n.id]:{category:n,qty:f}}}),i(`+1 caja de ${n.name} añadida a tu cotización.`),setTimeout(()=>i(null),4e3)},l=n=>{o(r=>{const c=r[n];if(!c||c.qty<=0)return r;const f=c.qty-1;if(f===0){const h={...r};return delete h[n],h}return{...r,[n]:{...c,qty:f}}})},m=n=>{o(r=>{const c={...r};return delete c[n],c})},g=j("Hola, tengo algunas dudas sobre el catálogo mayorista y el proceso de compra. ¿Me podrían asesorar?");return e.jsxs(e.Fragment,{children:[e.jsx(w,{whatsappHref:g}),e.jsx(W,{whatsappHref:g,quoteHref:`#${x[0].slug}`}),e.jsx(F,{}),e.jsxs(d.Suspense,{fallback:null,children:[e.jsx(K,{youtubeId:ae,title:"Video de la marca"}),e.jsx(V,{}),e.jsx(Y,{}),e.jsx($,{}),x.map((n,r)=>e.jsx(J,{category:n,index:r,onBoxAdd:t,onBoxRemove:l,cartQty:s[n.id]?.qty||0,totalBoxes:a},n.id)),e.jsx(Z,{}),e.jsx(X,{whatsappNumber:O,cart:s,totalBoxes:a,removeCategory:m,handleBoxAdd:t,handleBoxRemove:l,buildWhatsappHref:j}),e.jsx(ee,{}),e.jsx(te,{}),e.jsx(Q,{href:g}),a>0&&e.jsxs("a",{href:"#cotizacion-box",className:"floating-cart",children:[e.jsx("span",{className:"cart-count",children:a}),"Ver cotización"]}),p&&e.jsxs("div",{className:"toast-notification reg-corners",children:[e.jsx("span",{children:p}),e.jsx("a",{href:"#cotizacion-box",onClick:()=>i(null),className:"toast-link",children:"Ver cotización →"})]})]})]})}function N(){return e.jsxs("footer",{className:"foot",children:[e.jsxs("div",{className:"container foot-inner",children:[e.jsxs("div",{className:"foot-brand",children:[e.jsxs("p",{className:"foot-logo",children:["CATÁLOGO 2026",e.jsx("span",{children:"BY LET PROCUREMENT"})]}),e.jsx("p",{className:"foot-copy",children:"Distribuidora B2B de productos de skateboarding. Venta exclusiva por volumen a distribuidores, tiendas y puntos de reventa."}),e.jsxs("p",{className:"foot-copy",style:{marginTop:"12px"},children:["Un catálogo operado por ",e.jsx("a",{href:"https://letprocurement.com",target:"_blank",rel:"noreferrer",style:{color:"var(--yellow)",textDecoration:"underline"},children:"LET Procurement"}),"."]})]}),e.jsxs("div",{className:"foot-col",children:[e.jsx("p",{className:"eyebrow foot-heading",children:"Categorías"}),e.jsx("ul",{children:x.map(s=>e.jsx("li",{children:e.jsx("a",{href:`#${s.slug}`,children:s.name})},s.id))})]}),e.jsxs("div",{className:"foot-col",children:[e.jsx("p",{className:"eyebrow foot-heading",children:"Política de surtido"}),e.jsxs("ul",{className:"foot-notes",children:[e.jsx("li",{children:"Diseños asignados por rotación de bodega."}),e.jsx("li",{children:"Imágenes de referencia: no se garantiza gráfica exacta."}),e.jsx("li",{children:"Equilibrio de diseños en cada paquete."})]})]})]}),e.jsx("div",{className:"container foot-bottom",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," Catálogo 2026 Skateboarding. Catálogo de uso exclusivo B2B."]})}),e.jsx("style",{children:`
        .foot { background: var(--carbon); color: var(--light-gray); padding: 64px 0 0; }
        .foot-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 44px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .foot-logo { font-family: var(--font-display); font-size: 20px; color: var(--white); }
        .foot-logo span { display: block; color: var(--yellow); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em; margin-top: 4px; }
        .foot-copy { margin-top: 14px; font-size: 13.5px; line-height: 1.6; max-width: 320px; color: var(--light-gray); }
        .foot-heading { color: var(--mid-gray); margin-bottom: 14px; }
        .foot-col ul { display: flex; flex-direction: column; gap: 10px; }
        .foot-col a { font-size: 13.5px; }
        .foot-col a:hover { color: var(--yellow); }
        .foot-notes li { font-size: 13px; color: var(--light-gray); line-height: 1.5; }
        .foot-bottom {
          padding: 20px 0 26px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--mid-gray);
        }

        @media (max-width: 700px) {
          .foot-inner { grid-template-columns: 1fr; gap: 30px; }
        }
      `})]})}const oe=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));function _({href:s}){return e.jsxs("a",{href:s,target:"_blank",rel:"noreferrer",className:"fab","aria-label":"Escribir por WhatsApp",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[e.jsx("path",{d:"M4 20l1.3-4A8 8 0 1 1 8.5 19L4 20Z"}),e.jsx("path",{d:"M8.5 9.5c0 3 2.5 5.5 5.5 5.5",strokeLinecap:"round"})]}),e.jsx("style",{children:`
        .fab {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 60;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--carbon);
          color: var(--yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--yellow);
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .fab:hover { transform: translateY(-2px); background: var(--blue); border-color: var(--blue); color: var(--white); }
      `})]})}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));function ne(){const o="https://wa.me/573132310746?text=Hola,%20no%20pude%20encontrar%20lo%20que%20buscaba%20en%20el%20cat%C3%A1logo.";return e.jsxs(e.Fragment,{children:[e.jsx(w,{whatsappHref:o}),e.jsxs("section",{className:"not-found-container",style:{minHeight:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"var(--carbon)",color:"var(--white)",padding:"40px 20px",textAlign:"center"},children:[e.jsx("h1",{style:{fontSize:"clamp(40px, 6vw, 80px)",marginBottom:"20px",color:"var(--yellow)"},children:"404"}),e.jsx("h2",{style:{fontSize:"24px",marginBottom:"20px"},children:"Página no encontrada"}),e.jsx("p",{style:{maxWidth:"500px",color:"var(--light-gray)",marginBottom:"30px"},children:"Lo sentimos, no pudimos encontrar la página que estás buscando. Es posible que el enlace sea incorrecto o que la página haya sido movida."}),e.jsx("a",{href:"/",className:"btn btn-primary",children:"Volver al catálogo"})]}),e.jsx(N,{}),e.jsx(_,{href:o})]})}const T=window.location.pathname,re=T!=="/"&&T!=="/index.html";v.createRoot(document.getElementById("root")).render(e.jsx(S.StrictMode,{children:re?e.jsx(ne,{}):e.jsx(se,{})}));export{de as b,e as j,pe as p};
