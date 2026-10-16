import{j as e}from"./index-DTS8MfiA.js";import{r as a}from"./react-vendor-cxkclgJA.js";function v({youtubeId:t,title:d="Conoce la marca"}){const[n,o]=a.useState(!1),[s,c]=a.useState(!1),i=a.useRef(null);a.useEffect(()=>{const r=new IntersectionObserver(([b])=>{b.isIntersecting&&(o(!0),r.disconnect())},{rootMargin:"200px"});return i.current&&r.observe(i.current),()=>r.disconnect()},[]);const l=`https://www.youtube-nocookie.com/embed/${t}?rel=0&modestbranding=1&autoplay=0`,p=`https://i.ytimg.com/vi/${t}/hqdefault.jpg`;return e.jsxs("section",{className:"brandvid","aria-label":"Video de la marca",children:[e.jsxs("div",{className:"container brandvid-inner",children:[e.jsxs("div",{className:"brandvid-head",children:[e.jsx("p",{className:"eyebrow brandvid-eyebrow",children:"Conoce la marca"}),e.jsxs("h2",{className:"brandvid-title",children:["Así se ve la línea",e.jsx("br",{}),"que estás comprando."]}),e.jsx("p",{className:"brandvid-copy",children:"Un vistazo rápido a la marca detrás de este lote: estilo, calidad de construcción y espíritu de la gráfica. El surtido que recibes sale de esta misma línea de producto."})]}),e.jsx("div",{className:"brandvid-frame reg-corners",ref:i,children:n?e.jsx("iframe",{src:l,title:d,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,onLoad:()=>c(!0),style:{opacity:s?1:0,transition:"opacity 0.4s ease"}}):e.jsxs("div",{className:"brandvid-placeholder","aria-hidden":"true",children:[e.jsx("img",{src:p,alt:"",loading:"lazy",width:"560",height:"315"}),e.jsx("span",{className:"brandvid-play-icon",children:"▶"})]})})]}),e.jsx("style",{children:`
        .brandvid {
          background: var(--off-white);
          padding: 88px 0;
          border-bottom: 1px solid var(--light-gray);
        }
        .brandvid-inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 48px;
          align-items: center;
        }
        .brandvid-eyebrow { color: var(--blue); margin-bottom: 16px; }
        .brandvid-title {
          font-size: clamp(30px, 3.6vw, 42px);
          line-height: 1.03;
        }
        .brandvid-copy {
          margin-top: 18px;
          color: var(--dark-gray);
          font-size: 15px;
          line-height: 1.7;
          max-width: 420px;
        }
        .brandvid-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--carbon);
          overflow: hidden;
        }
        .brandvid-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .brandvid-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--carbon);
          overflow: hidden;
        }
        .brandvid-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
        }
        .brandvid-play-icon {
          position: absolute;
          font-size: 42px;
          color: var(--white);
          opacity: 0.9;
          pointer-events: none;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
        }

        @media (max-width: 900px) {
          .brandvid-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .brandvid { padding: 56px 0; }
        }
      `})]})}export{v as default};
