(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7762],{62484:function(e,t,a){"use strict";var n,o=a(67294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.Z=function(e){return o.createElement("svg",_extends({fill:"#8690bf",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 318.293 318.293",style:{enableBackground:"new 0 0 318.293 318.293"},xmlSpace:"preserve"},e),n||(n=o.createElement("path",{d:"M159.148 0c-52.696 0-95.544 39.326-95.544 87.662h47.736c0-22.007 21.438-39.927 47.808-39.927 26.367 0 47.804 17.92 47.804 39.927v6.929c0 23.39-10.292 34.31-25.915 50.813-20.371 21.531-45.744 48.365-45.744 105.899h47.745c0-38.524 15.144-54.568 32.692-73.12 17.368-18.347 38.96-41.192 38.96-83.592v-6.929C254.689 39.326 211.845 0 159.148 0zM134.475 277.996h49.968v40.297h-49.968z"})))}},27031:function(e,t,a){"use strict";a.d(t,{Z:function(){return GameLayout}});var n=a(85893),o=a(76633),s=a.n(o),l=a(94184),r=a.n(l),i=a(1277);let u={left:s().gameLayoutColumnLeft,right:s().gameLayoutColumnRight,row:s().gameLayoutColumnRow,anotherLeft:s().gameLayoutColumnAnotherLeft,anotherRight:s().gameLayoutColumnAnotherRight};function GameLayout(e){let{className:t,children:a,...o}=e;return(0,n.jsx)("div",{className:s().gameLayout,...o,children:a})}GameLayout.Column=function(e){let{type:t,className:a,children:o,customMobileOrder:l="initial",...c}=e,m=(0,i.Z)();return(0,n.jsx)("div",{className:r()(s().gameLayoutColumn,u[t],a),style:{order:m.width<993?l:"initial"},...c,children:o})}},17762:function(e,t,a){"use strict";a.d(t,{Z:function(){return A}});var n,o,s=a(85893),l=a(67294),r=a(86501),i=a(2664),u=a(34558),c=a(27031),m=a(49089),d=a(94184),w=a.n(d),v=a(69316),h=a(83480),g=a(97787),p=a(42946),y=a.n(p),_=a(19870),x=a(62484),f=a(8891),j=a.n(f);function TowersBet(e){let{setGame:t,setDifficulty:a,setBetAmount:n,user:o,game:c,betAmount:d,difficulty:p,className:f,...G}=e,[C,b]=(0,l.useState)(!1),L=(0,i.I0)(),{fflags:Z}=(0,i.v9)(e=>e.auth);(0,l.useEffect)(()=>{(null==c?void 0:c.betAmount)&&n(c.betAmount),(null==c?void 0:c.difficulty)&&a(c.difficulty)},[c]);let requestSetBetAmount=e=>{(null==c?void 0:c.active)?r.Am.error("You can not change the round settings while there's an active game!"):n(e)},requestSetDifficulty=e=>{(null==c?void 0:c.active)?r.Am.error("You can not change the round settings while there's an active game!"):(t(void 0),a(e))},onButtonClick=async()=>{try{if(b(!0),null==c?void 0:c.active){let e=await (0,u.J6)(!0);if(b(!1),e.success){let a=new Audio("/sounds/big_cashout.mp3");a.volume=.2,a.play(),r.Am.success("You've won "+e.winnings.toFixed(2)+" R$ by playing towers! Good job!"),t(e.game)}}else{let e=await (0,u.Ab)(p,parseFloat(d));Z.fe_ga_enabled&&m.ZP.event({category:"Towers game",action:"Joined tower game",value:d}),Z.fe_mixpanel_enabled&&j().track("JOINED_TOWERS_GAME",{amount:d}),b(!1),t(e.game)}}catch(t){var e,a;if(b(!1),null==t?void 0:null===(a=t.response)||void 0===a?void 0:null===(e=a.data)||void 0===e?void 0:e.msg){if(t.response.data.msg.includes("Auth")){L({type:_.gr});return}r.Am.error(t.response.data.msg)}else r.Am.error("An unknown fatal error occurred while trying to process your request. Are you connected to the internet?")}};return(0,s.jsxs)("div",{className:w()("gameBlock gameBet",y().towersBet,f),...G,children:[(0,s.jsxs)("div",{className:w()("gameBetTabs"),style:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(h.Z,{variant:"tab",isActive:!0,children:"Manual"}),(0,s.jsxs)("div",{style:{display:"flex",gap:"1em",height:"80%"},children:[(0,s.jsx)(h.Z,{onClick:()=>L({type:_.hj,payload:"Tower"}),variant:"betOption",children:(0,s.jsx)(x.Z,{style:{height:".75em"}})}),(0,s.jsx)(h.Z,{onClick:()=>{(null==c?void 0:c.active)?L({type:_.LE,payload:{...c,gameName:"towers"}}):r.Am.error("You must start a game to see the provably fair info")},variant:"betOption",children:"Fairness"}),(0,s.jsx)(h.Z,{onClick:()=>L({type:_.bN,payload:{gameType:"towers"}}),variant:"betOption",children:"History"})]})]}),(0,s.jsxs)("div",{className:w()("customInput","gameBetInput"),children:[(0,s.jsx)(v.Z,{element:"p",textType:"labelsRegular",className:w()("customInputLabel"),children:"Bet amount"}),(0,s.jsxs)("div",{className:w()("customInputInner"),children:[(0,s.jsx)(g.Z,{pattern:"^-?[0-9]\\d*\\.?\\d*$",onKeyPress:e=>{/[0-9]/.test(e.key)||e.preventDefault()},hasCurrencyIcon:!0,disabled:null==c?void 0:c.active,onChange:e=>requestSetBetAmount(e.currentTarget.value),value:d}),(0,s.jsxs)("div",{className:w()("customInputInnerButtons"),children:[(0,s.jsx)(h.Z,{variant:"inputButton",onClick:()=>requestSetBetAmount(Math.floor(d/2)),children:"1/2"}),(0,s.jsx)(h.Z,{variant:"inputButton",onClick:()=>requestSetBetAmount(Math.min(Math.max(2*d,0),5e4)),children:"2x"}),(0,s.jsx)(h.Z,{variant:"inputButton",onClick:()=>requestSetBetAmount(Math.min(Math.max(Math.floor(o.wallet+o.bonusWallet),0),5e4)),children:"Max"})]})]})]}),(0,s.jsxs)("div",{className:w()("customInput","gameBetInput"),children:[(0,s.jsx)(v.Z,{element:"p",textType:"labelsRegular",className:w()("customInputLabel"),children:"Difficulty"}),(0,s.jsxs)("div",{className:w()("customInputOptions"),children:[(0,s.jsx)(h.Z,{variant:"betOption",isActive:"easy"===p,onClick:()=>requestSetDifficulty("easy"),children:"Easy"}),(0,s.jsx)(h.Z,{variant:"betOption",isActive:"normal"===p,onClick:()=>requestSetDifficulty("normal"),children:"Normal"}),(0,s.jsx)(h.Z,{variant:"betOption",isActive:"hard"===p,onClick:()=>requestSetDifficulty("hard"),children:"Hard"})]})]}),(0,s.jsx)(h.Z,{variant:(null==c?void 0:c.active)?"secondary":"primary",disabled:C,onClick:onButtonClick,className:w()("gameBetSubmit","mobileBottomMargin"),children:(null==c?void 0:c.active)?"Cashout":"Start new game"})]})}var G=a(40975),C=a(64709),b=a(66713),L=a(91897);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var star=function(e){return l.createElement("svg",_extends({width:22,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=l.createElement("path",{d:"M5.397 20c-.293 0-.58-.09-.818-.254a1.434 1.434 0 0 1-.468-.571 1.364 1.364 0 0 1-.112-.718l.51-5.469L.851 8.875a1.402 1.402 0 0 1-.325-.654c-.048-.24-.03-.49.052-.722a1.37 1.37 0 0 1 .394-.591c.183-.162.406-.275.648-.33l5.33-1.202L9.748.702c.124-.213.306-.39.526-.514a1.486 1.486 0 0 1 1.452 0c.22.124.402.3.526.514l2.798 4.707 5.33 1.202c.242.055.465.168.648.33.183.161.318.365.394.592.082.232.1.48.052.722-.048.24-.16.466-.325.653l-3.637 4.08.51 5.47c.025.247-.02.496-.127.722a1.439 1.439 0 0 1-.488.566 1.459 1.459 0 0 1-1.399.134l-5.015-2.164-5.008 2.164c-.184.08-.385.121-.588.12Z",fill:"url(#star_svg__a)"})),o||(o=l.createElement("defs",null,l.createElement("linearGradient",{id:"star_svg__a",x1:11,y1:0,x2:11,y2:20,gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:"#FBD03B"}),l.createElement("stop",{offset:1,stopColor:"#FD9E12"})))))};let Z={easy:2/3,normal:.5,hard:1/3},calculateMultiplier=function(e,t,a){let n=t*(1/Math.pow(Z[e],a)*(1-.05*a));return n};function TowersGame(e){let{game:t,setGame:a,difficulty:n,betAmount:o,className:r,...i}=e,[c,m]=(0,l.useState)([]),[d,g]=(0,l.useState)(-1),uncoverTile=async(e,t)=>{console.debug("Uncovering tile ".concat(e," at tower level ").concat(t)),g(e);let n=await (0,u.J6)(!1,e,t);if(g(-1),n.completedLevels&&m(n.completedLevels),n.game&&a(n.game),n.exploded){let e=new Audio("/sounds/break.mp3");e.volume=.2,e.play()}else{let e=new Audio("/sounds/stomp.mp3");e.volume=.2,e.play()}};return(0,l.useEffect)(()=>{(null==t?void 0:t.completedLevels)&&m(t.completedLevels),t||m([])},[t]),(0,s.jsx)("div",{className:w()(y().towersGame,r),...i,children:(0,s.jsx)("div",{className:y().towersGameInner,children:Array(8).fill(0).map((e,a)=>{var l,r,i;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:w()(y().towersGameRow,"normal"===n?y().towersGameTwoRows:y().towersGameThreeRows,(null==t?void 0:t.active)&&(null==c?void 0:c.length)+1==8-a&&y().towersGameRowActive,(null==t?void 0:t.active)&&(null==c?void 0:c.length)+1!=8-a&&(null==c?void 0:c.length)>7-a&&y().towersGameRowSuccess),children:[(0,s.jsx)("div",{className:y().towersGameRowContainer,children:(null==c?void 0:c.length)+1!=8-a&&(null==c?void 0:c.length)>7-a&&0==c[7-a]?(0,s.jsx)("div",{className:y().towersGameStar,children:(0,s.jsx)(star,{})}):(null==t?void 0:t.active)===!1&&(null==t?void 0:null===(l=t.towerLevels)||void 0===l?void 0:l[7-a][0])==1?(0,s.jsx)("div",{className:y().towersGameCross,children:(0,s.jsx)(L.Z,{})}):(0,s.jsx)(h.Z,{className:0==d&&(null==c?void 0:c.length)==7-a?y().towersGameSpinningButton:y().towersGameButton,onClick:()=>uncoverTile(0,8-a-1),children:(0!=d||(null==c?void 0:c.length)!=7-a)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{element:"span",textType:"regular14",children:(0,G.Z)((0,C.Z)(calculateMultiplier(n,o,8-a)))}),(0,s.jsx)(b.Z,{})]})})}),(0,s.jsx)("div",{className:y().towersGameRowContainer,children:(null==c?void 0:c.length)+1!=8-a&&(null==c?void 0:c.length)>7-a&&1==c[7-a]?(0,s.jsx)("div",{className:y().towersGameStar,children:(0,s.jsx)(star,{})}):(null==t?void 0:t.active)===!1&&(null==t?void 0:null===(r=t.towerLevels)||void 0===r?void 0:r[7-a][1])==1?(0,s.jsx)("div",{className:y().towersGameCross,children:(0,s.jsx)(L.Z,{})}):(0,s.jsx)(h.Z,{className:1==d&&(null==c?void 0:c.length)==7-a?y().towersGameSpinningButton:y().towersGameButton,onClick:()=>uncoverTile(1,8-a-1),children:(1!=d||(null==c?void 0:c.length)!=7-a)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{element:"span",textType:"regular14",children:(0,G.Z)((0,C.Z)(calculateMultiplier(n,o,8-a)))}),(0,s.jsx)(b.Z,{})]})})}),"normal"!==n&&(0,s.jsx)("div",{className:y().towersGameRowContainer,children:(null==c?void 0:c.length)+1!=8-a&&(null==c?void 0:c.length)>7-a&&2==c[7-a]?(0,s.jsx)("div",{className:y().towersGameStar,children:(0,s.jsx)(star,{})}):(null==t?void 0:t.active)===!1&&(null==t?void 0:null===(i=t.towerLevels)||void 0===i?void 0:i[7-a][2])==1?(0,s.jsx)("div",{className:y().towersGameCross,children:(0,s.jsx)(L.Z,{})}):(0,s.jsx)(h.Z,{className:2==d&&(null==c?void 0:c.length)==7-a?y().towersGameSpinningButton:y().towersGameButton,onClick:()=>uncoverTile(2,8-a-1),children:(2!=d||(null==c?void 0:c.length)!=7-a)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{element:"span",textType:"regular14",children:(0,G.Z)((0,C.Z)(calculateMultiplier(n,o,8-a)))}),(0,s.jsx)(b.Z,{})]})})})]})})})})})}var A=(0,i.$j)(e=>({user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}))(e=>{let{user:t,isAuthenticated:a,...n}=e,[o,i]=(0,l.useState)(),[m,d]=(0,l.useState)("30"),[w,v]=(0,l.useState)("easy");return(0,l.useEffect)(()=>{if(a){let fetchData=async()=>{try{let e=await (0,u.ik)();e.hasGame&&i(e.game)}catch(e){r.Am.error("Failed to laod active towers game, please refresh the page and try again!")}};fetchData()}},[a]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c.Z,{...n,children:[(0,s.jsx)(c.Z.Column,{type:"left",children:(0,s.jsx)(TowersBet,{style:{animation:"bottomTop .3s"},user:t,game:o,setGame:i,betAmount:m,setBetAmount:d,difficulty:w,setDifficulty:v})}),(0,s.jsx)(c.Z.Column,{customMobileOrder:"-1",type:"right",children:(0,s.jsx)(TowersGame,{style:{animation:"bottomTop .3s",position:"relative"},game:o,setGame:i,betAmount:m,difficulty:w})})]})})})},76633:function(e){e.exports={gameLayout:"game-layout_gameLayout__bgIOR",gameLayoutColumnRow:"game-layout_gameLayoutColumnRow__0wXiL",gameLayoutColumn:"game-layout_gameLayoutColumn__q01vS",gameLayoutColumnLeft:"game-layout_gameLayoutColumnLeft__55fuZ",gameLayoutColumnRight:"game-layout_gameLayoutColumnRight__oj_7g",gameLayoutColumnAnotherLeft:"game-layout_gameLayoutColumnAnotherLeft__uOx3g",gameLayoutColumnAnotherRight:"game-layout_gameLayoutColumnAnotherRight__j_wQx"}},42946:function(e){e.exports={towersBet:"towers_towersBet__irweK",towersPlayers:"towers_towersPlayers__s3w_2",towersGame:"towers_towersGame__4VfYK",towersGameInner:"towers_towersGameInner__gbFa9",towersGameSpinningButton:"towers_towersGameSpinningButton___uxEq",spinning:"towers_spinning__KzbYX",towersGameButton:"towers_towersGameButton__xLe_v",towersGameTwoRows:"towers_towersGameTwoRows__FdQB8",towersGameThreeRows:"towers_towersGameThreeRows__FLXL1",towersGameRow:"towers_towersGameRow__flu2C",towersGameRowContainer:"towers_towersGameRowContainer__HCJog",towersGameRowActive:"towers_towersGameRowActive__BIMrx",towersGameRowSuccess:"towers_towersGameRowSuccess__Ux4Wu",towersGameText:"towers_towersGameText__1Gr7Q",towersGameRowFailed:"towers_towersGameRowFailed__Lb6PL",towersGameStar:"towers_towersGameStar__ZVPVJ",towersGameCross:"towers_towersGameCross__Fhj1y"}}}]);