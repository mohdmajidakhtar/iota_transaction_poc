// This code has be modified by Mohd Majid Akhtar and it uses original code from IOTA foundation.

var _0x5621=['https://comnet.thetangle.org/transaction/','now','composeAPI','link','563261SkNFmE','110921VEITdB','log','receiveraddress','9DaeIzs','https://nodes.comnet.thetangle.org:443','1154840Xhlpbt','comnetbalance','textContent','1485672AhOFFu','balances','2ybIgug','generateAddress','value','220593mdHySx','innerHTML','prepareTransfers','senderseedindex','Look\x20into\x20\x27Console\x27\x20for\x20more\x20logs,\x20errors\x20and\x20messages','1171308nIFYJu','434856xuRhlL','error','getBalances','reduce','Balance:\x20','push','hash','ms\x20to\x20Confirm\x20and\x20available\x20at\x20','getElementById'];var _0x19f7=function(_0x5116ac,_0x4bd8ee){_0x5116ac=_0x5116ac-0x18d;var _0x56217e=_0x5621[_0x5116ac];return _0x56217e;};var _0x266d00=_0x19f7;(function(_0x4473b7,_0x1aebe8){var _0x4cae4c=_0x19f7;while(!![]){try{var _0x1bfe80=parseInt(_0x4cae4c(0x19a))+parseInt(_0x4cae4c(0x1a2))+parseInt(_0x4cae4c(0x1a7))+-parseInt(_0x4cae4c(0x194))+parseInt(_0x4cae4c(0x1a8))*-parseInt(_0x4cae4c(0x19f))+-parseInt(_0x4cae4c(0x195))*-parseInt(_0x4cae4c(0x198))+-parseInt(_0x4cae4c(0x19d));if(_0x1bfe80===_0x1aebe8)break;else _0x4473b7['push'](_0x4473b7['shift']());}catch(_0x1eff7d){_0x4473b7['push'](_0x4473b7['shift']());}}}(_0x5621,0x98ed1));const iota=core[_0x266d00(0x192)]({'provider':_0x266d00(0x199)});document['getElementById']('hash')[_0x266d00(0x19c)]=_0x266d00(0x1a6);async function getBalance(_0x396160,_0x183b02,_0x506de5,_0x3b87ad){var _0x8c76e7=_0x266d00;try{let _0x1f1476=generate_addresses(_0x396160,_0x183b02,_0x506de5,_0x3b87ad);console[_0x8c76e7(0x196)](_0x1f1476);let _0x218fc9=await iota[_0x8c76e7(0x1aa)](_0x1f1476,0x64),_0x2c84eb=_0x218fc9[_0x8c76e7(0x19e)][_0x8c76e7(0x1ab)]((_0x520168,_0x11ba8f)=>{return _0x520168+_0x11ba8f;});console[_0x8c76e7(0x196)](_0x8c76e7(0x1ac)+_0x2c84eb);var _0x297fe7=_0x2c84eb;return _0x297fe7;}catch(_0x47b2cc){console[_0x8c76e7(0x1a9)](_0x47b2cc);}}function generate_addresses(_0x2dc47e,_0x4b1b9e,_0x1caeb4,_0x3854eb){var _0x4bf716=_0x266d00;let _0x1f7fce=[];for(let _0x3f3538=_0x1caeb4;_0x3f3538<_0x3854eb+0x1;_0x3f3538++){_0x1f7fce[_0x4bf716(0x1ad)](core[_0x4bf716(0x1a0)](_0x2dc47e,_0x3f3538,_0x4b1b9e,![]));}return _0x1f7fce;}const main=async()=>{var _0x3efed8=_0x266d00;const _0x51069b=document[_0x3efed8(0x18f)]('senderseed')[_0x3efed8(0x1a1)];console[_0x3efed8(0x196)](_0x51069b);var _0x30583a=document[_0x3efed8(0x18f)](_0x3efed8(0x1a5))[_0x3efed8(0x1a1)],_0x2331ee=parseInt(_0x30583a);console[_0x3efed8(0x196)](_0x2331ee);var _0x14b63a=0x2,_0x43c205=_0x2331ee,_0x50f1d3=_0x2331ee,_0xed4c73=document['getElementById'](_0x3efed8(0x19b))[_0x3efed8(0x1a1)],_0x221a75=parseInt(_0xed4c73);const _0x168fc7=[{'value':_0x221a75,'address':document[_0x3efed8(0x18f)](_0x3efed8(0x197))[_0x3efed8(0x1a1)]}];var _0x23fdf3={'inputs':[{'address':core[_0x3efed8(0x1a0)](_0x51069b,_0x2331ee,0x2,!![]),'keyIndex':_0x2331ee,'balance':await getBalance(_0x51069b,_0x14b63a,_0x43c205,_0x50f1d3),'security':0x2}]};try{let _0x533619=Date[_0x3efed8(0x191)]();const _0x9918fc=await iota[_0x3efed8(0x1a4)](_0x51069b,_0x168fc7,_0x23fdf3),_0xabbff3=await iota['sendTrytes'](_0x9918fc,0x3,0xa);var _0xb499c3=_0x3efed8(0x190)+(''+_0xabbff3[0x0][_0x3efed8(0x18d)]),_0x59eca0=_0xb499c3[_0x3efed8(0x193)](_0x3efed8(0x190)+(''+_0xabbff3[0x0][_0x3efed8(0x18d)]));const _0x5099af='Took\x20'+(Date[_0x3efed8(0x191)]()-_0x533619)+_0x3efed8(0x18e)+_0x59eca0;document['getElementById']('hash')[_0x3efed8(0x1a3)]=_0x5099af;}catch(_0x1ce589){console[_0x3efed8(0x196)](_0x1ce589);}};
  