(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3020],{73020:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(85893),a=t(67294),s=t(34558),l=t(86501),o=t(2664),m=t(27031),r=t(49089),u=t(94184),c=t.n(u),d=t(69316),v=t(83480),p=t(97787),h=t(62484),g=t(99080),x=t.n(g),y=t(19870),f=t(8891),I=t.n(f);function MinesBet(e){let{user:n,setGame:t,setMultiplier:m,multiplier:u,game:g,className:f,isAuthenticated:j,..._}=e,[b,G]=(0,a.useState)("30"),[C,M]=(0,a.useState)("3"),[k,B]=(0,a.useState)(!1),{fflags:N}=(0,o.v9)(e=>e.auth),w=(0,o.I0)();(0,a.useEffect)(()=>{b>(null==n?void 0:n.wallet)+(null==n?void 0:n.bonusWallet)&&G(Math.floor((null==n?void 0:n.wallet)+(null==n?void 0:n.bonusWallet))),b<0&&G(30)},[b]),(0,a.useEffect)(()=>{C>24&&M(24),C<1&&M(1)},[C]),(0,a.useEffect)(()=>{(null==g?void 0:g.betAmount)&&G(g.betAmount)},[g]);let onButtonClick=async()=>{try{if(B(!0),null==g?void 0:g.active){let e=await (0,s.J_)(!0);if(B(!1),e.success){let n=new Audio("/sounds/big_cashout.mp3");n.volume=.2,n.play(),l.Am.success("You've won ".concat(e.winnings.toFixed(2)," R$ by cashing out at ").concat(e.multiplier.toFixed(2),"x! Good job!")),t(e.game),m(.95)}}else{let e=await (0,s.Nh)(C,parseFloat(b));N.fe_ga_enabled&&r.ZP.event({category:"Mines game",action:"Joined mines game",value:b}),N.fe_mixpanel_enabled&&I().track("JOINED_MINES_GAME"),B(!1),m(.95),t(e.game)}}catch(t){var e,n;if(B(!1),null==t?void 0:null===(n=t.response)||void 0===n?void 0:null===(e=n.data)||void 0===e?void 0:e.msg){if(t.response.data.msg.includes("Auth")){w({type:y.gr});return}l.Am.error(t.response.data.msg)}else l.Am.error("An unknown fatal error occurred while trying to process your request. Are you connected to the internet?")}};return(0,i.jsxs)("div",{className:c()("gameBlock gameBet",x().minesBet,f),..._,children:[(0,i.jsxs)("div",{className:c()("gameBetTabs"),style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)(v.Z,{variant:"tab",isActive:!0,children:"Manual"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"1em",height:"80%"},children:[(0,i.jsx)(v.Z,{onClick:()=>w({type:y.hj,payload:"Mines"}),variant:"betOption",children:(0,i.jsx)(h.Z,{style:{height:".75em"}})}),(0,i.jsx)(v.Z,{onClick:()=>{(null==g?void 0:g.active)?w({type:y.LE,payload:{...g,gameName:"mines"}}):l.Am.error("You must start a game to see the provably fair info")},variant:"betOption",children:"Fairness"}),(0,i.jsx)(v.Z,{onClick:()=>w({type:y.bN,payload:{gameType:"mines"}}),variant:"betOption",children:"History"})]})]}),(0,i.jsxs)("div",{className:c()("customInput","gameBetInput"),children:[(0,i.jsx)(d.Z,{element:"p",textType:"labelsRegular",className:c()("customInputLabel"),children:"Bet amount"}),(0,i.jsxs)("div",{className:c()("customInputInner"),children:[(0,i.jsx)(p.Z,{pattern:"^-?[0-9]\\d*\\.?\\d*$",onKeyPress:e=>{/[0-9]/.test(e.key)||e.preventDefault()},hasCurrencyIcon:!0,onChange:e=>G(e.currentTarget.value),value:b}),(0,i.jsxs)("div",{className:c()("customInputInnerButtons"),children:[(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>G(Math.floor(b/2)),children:"1/2"}),(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>G(Math.min(Math.max(2*b,0),5e4)),children:"2x"}),(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>G(Math.min(Math.max(Math.floor(n.wallet+n.bonusWallet),0),5e4)),children:"Max"})]})]})]}),(0,i.jsxs)("div",{className:c()("customInput","gameBetInput"),children:[(0,i.jsx)(d.Z,{element:"p",textType:"labelsRegular",className:c()("customInputLabel"),children:"Mines"}),(0,i.jsxs)("div",{className:c()("customInputInner"),children:[(0,i.jsx)(p.Z,{pattern:"^-?[0-9]\\d*\\.?\\d*$",onKeyPress:e=>{/[0-9]/.test(e.key)||e.preventDefault()},onChange:e=>M(e.currentTarget.value),value:C}),(0,i.jsxs)("div",{className:c()("customInputInnerButtons"),children:[(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>M(1),children:"1"}),(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>M(3),children:"3"}),(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>M(5),children:"5"}),(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>M(10),children:"10"}),(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>M(15),children:"15"}),(0,i.jsx)(v.Z,{variant:"inputButton",onClick:()=>M(20),children:"20"})]})]})]}),(0,i.jsx)("div",{className:c()("customInput","gameBetInput")}),(0,i.jsxs)("div",{className:c()("customInput","gameBetInput"),children:[(0,i.jsxs)(d.Z,{element:"p",textType:"labelsRegular",className:c()("customInputLabel"),children:["Total earnings ",(null==g?void 0:g.active)&&"".concat(u.toFixed(2),"x")]}),(0,i.jsx)("div",{className:c()("customInputInner"),children:(0,i.jsx)(p.Z,{disabled:!0,value:(null==g?void 0:g.active)?((null==g?void 0:g.betAmount)*u).toFixed(2):""})})]}),(0,i.jsx)(v.Z,{variant:(null==g?void 0:g.active)?"secondary":"primary",disabled:k||(null==g?void 0:g.active)&&u<=1,onClick:onButtonClick,className:c()("gameBetSubmit","mobileBottomMargin"),children:(null==g?void 0:g.active)?u>=1?"Cashout (".concat(u.toFixed(2)," x)"):"Waiting to uncover a mine":"Start new game"})]})}let j={win:x().minesGameItemWin,lossPrimary:x().minesGameItemMine,lossSecondary:x().minesGameItemOtherMine},_=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];function MinesGame(e){let{className:n,setMultiplier:t,game:m,setGame:r,...u}=e,d=(0,a.useRef)([]);(0,a.useRef)([]);let v=(0,o.I0)(),[p,h]=(0,a.useState)([]);async function handleCellClick(e){if(e.classList.contains(j.win)||e.classList.contains(j.lossPrimary)||e.classList.contains(j.lossSecondary))return;let n=0;d.current.map((t,i)=>{t==e&&(n=i)});try{h(e=>[...e,n]);var i,a,o,u,c=new Audio("/sounds/suspense.mp3");c.volume=.15,c.play();let e=Date.now(),l=await (0,s.J_)(!1,n),d=600-(Date.now()-e);if(console.log("wait for "+d),d>0&&await new Promise(e=>setTimeout(e,d)),h(e=>null==e?void 0:e.filter(e=>e!==n)),l.exploded){var c=new Audio("/sounds/explosion.mp3");c.volume=.4,c.play(),r(l.game)}else{if(m.exploded)return;c.pause(),(c=new Audio("/sounds/good.mp3")).volume=.3,c.play(),r(e=>({...e,uncoveredLocations:[...e.uncoveredLocations,n]})),t(l.multiplier)}}catch(e){if(h(e=>null==e?void 0:e.filter(e=>e!==n)),(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:i.msg)==="You do not have an active mines game!"&&l.Am.error("You must start the game first!",{id:"mines-error"}),null==e?void 0:null===(u=e.response)||void 0===u?void 0:null===(o=u.data)||void 0===o?void 0:o.msg){if(e.response.data.msg.includes("Auth")){v({type:y.gr});return}}else l.Am.error("An unknown fatal error occurred while trying to process your request. Are you connected to the internet?")}}return(0,i.jsx)("div",{className:c()(x().minesGame,n),...u,children:(0,i.jsx)("div",{className:x().minesGameContainer,children:_.map((e,n)=>{var t,a,s,l;return p.includes(n)?(0,i.jsx)("div",{"aria-label":"Loading mine ".concat(e),ref:e=>d.current[n]=e,className:c()(x().minesGameSpinningItem),children:(0,i.jsx)("div",{"aria-label":"Loading mine ".concat(e),className:c()(x().minesGameSpinningItemLoadingSpinner)})},n):(0,i.jsx)("button",{onClick:e=>handleCellClick(e.target),"aria-label":"Open mine ".concat(e),ref:e=>d.current[n]=e,className:c()(x().minesGameItem,(null==m?void 0:null===(t=m.uncoveredLocations)||void 0===t?void 0:t.includes(n))&&x().minesGameItemWin,((null==m?void 0:m.exploded)||!(null==m?void 0:m.active))&&(null==m?void 0:null===(a=m.mineLocations)||void 0===a?void 0:a.includes(n))&&(null==m?void 0:m.badMineUncovered)!==n&&x().minesGameItemOtherMine,(null==m?void 0:m.exploded)&&(null==m?void 0:m.badMineUncovered)==n&&x().minesGameItemMine,((null==m?void 0:m.exploded)||(null==m?void 0:m.active)===!1)&&!(null==m?void 0:null===(s=m.uncoveredLocations)||void 0===s?void 0:s.includes(n))&&!(null==m?void 0:null===(l=m.mineLocations)||void 0===l?void 0:l.includes(n))&&x().minesGameItemWin)},n)})})})}var b=(0,o.$j)(e=>({user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}))(e=>{let{user:n,isAuthenticated:t,...o}=e,[r,u]=(0,a.useState)(),[c,d]=(0,a.useState)(.95),fetchData=async()=>{try{let e=await (0,s.Pl)();e.hasGame&&(u(e.game),d(e.multiplier))}catch(e){l.Am.error("Failed to load actvie mines game, please refresh the page and try again!")}};return(0,a.useEffect)(()=>{t&&fetchData()},[t]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Z,{...o,children:[(0,i.jsx)(m.Z.Column,{type:"left",children:(0,i.jsx)(MinesBet,{style:{animation:"bottomTop .3s"},user:n,isAuthenticated:t,game:r,setGame:u,multiplier:c,setMultiplier:d})}),(0,i.jsx)(m.Z.Column,{customMobileOrder:"-1",type:"right",children:(0,i.jsx)(MinesGame,{style:{animation:"bottomTop .5s"},game:r,setGame:u,setMultiplier:d})})]})})})},99080:function(e){e.exports={minesBetInputAmount:"mines_minesBetInputAmount__GyH73",minesGame:"mines_minesGame__6Bltb",minesGameContainer:"mines_minesGameContainer__Ih15s",minesGameSpinningItem:"mines_minesGameSpinningItem__1uz91",spinning:"mines_spinning__s1DfQ",minesGameSpinningItemLoadingSpinner:"mines_minesGameSpinningItemLoadingSpinner__J_bLZ",minesGameItem:"mines_minesGameItem__S2ytQ",minesGameItemWin:"mines_minesGameItemWin__4kRNF",minesGameItemMine:"mines_minesGameItemMine__NeRa4",minesGameItemOtherMine:"mines_minesGameItemOtherMine__cOPla"}}}]);