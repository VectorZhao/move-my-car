{\rtf1\ansi\ansicpg936\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Italic;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red79\green84\blue87;\red255\green255\blue255;\red14\green105\blue47;
\red162\green64\blue4;\red14\green110\blue109;\red103\green0\blue124;\red123\green9\blue2;\red0\green21\blue124;
\red37\green0\blue124;\red121\green213\blue255;\red252\green120\blue8;}
{\*\expandedcolortbl;;\cssrgb\c38431\c40392\c41569;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c47843\c23922;
\cssrgb\c70196\c32549\c0;\cssrgb\c0\c50196\c50196;\cssrgb\c48627\c0\c56078;\cssrgb\c56078\c8235\c0;\cssrgb\c0\c14902\c56078;
\cssrgb\c19608\c0\c56078;\cssrgb\c53725\c86667\c100000;\cssrgb\c100000\c54902\c0;}
\margl1440\margr1440\vieww37860\viewh17740\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\i\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 //Version:1.5.0
\f1\i0 \cb1 \

\f0\i \cb3 //Date:2024-11-22 10:50:47
\f1\i0 \cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4 addEventListener\cf2 \strokec2 (\cf5 \strokec5 'fetch'\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 event\cf2 \strokec2  \cf8 \strokec8 =>\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf9 \strokec9 event\cf6 \strokec6 .\cf4 \strokec4 respondWith\cf2 \strokec2 (\cf4 \strokec4 handleRequest\cf2 \strokec2 (\cf9 \strokec9 event\cf6 \strokec6 .\cf9 \strokec9 request\cf2 \strokec2 ))\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0

\f0\i \cf2 \cb3 //\uc0\u38450 \u27490 \u34987 \u28389 \u29992 \u65292 \u22312 \u28155 \u21152 \u36710 \u36742 \u20449 \u24687 \u26102 \u38656 \u35201 \u29992 \u26469 \u37492 \u26435 
\f1\i0 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 API_KEY\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 \'93xxxxxxxxxxx\'94\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cf8 \cb3 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 notifyMessage\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 "\uc0\u24744 \u22909 \u65292 \u26377 \u20154 \u38656 \u35201 \u24744 \u25386 \u36710 \u65292 \u35831 \u21450 \u26102 \u22788 \u29702 \u12290 "\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cf8 \cb3 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 sendSuccessMessage\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 "\uc0\u24744 \u22909 \u65292 \u25105 \u24050 \u25910 \u21040 \u20320 \u30340 \u25386 \u36710 \u36890 \u30693 \u65292 \u25105 \u27491 \u22312 \u36214 \u26469 \u30340 \u36335 \u19978 \u65292 \u35831 \u31245 \u31561 \u29255 \u21051 \u65281 "\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0

\f0\i \cf2 \cb3 //300\uc0\u31186 \u20869 \u21487 \u21457 \u36865 5\u27425 \u36890 \u30693 
\f1\i0 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 rateLimitDelay\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf7 \strokec7 300\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cf8 \cb3 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 rateLimitMaxRequests\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf7 \strokec7 5\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0

\f0\i \cf2 \cb3 //\uc0\u36798 \u21040 \u36895 \u29575 \u38480 \u21046 \u26102 \u36820 \u22238 \u20869 \u23481 
\f1\i0 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 rateLimitMessage\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 "\uc0\u25105 \u27491 \u22312 \u36214 \u26469 \u30340 \u36335 \u19978 ,\u35831 \u31245 \u31561 \u29255 \u21051 ~~~"\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0

\f0\i \cf2 \cb3 //\uc0\u36890 \u30693 \u31867 \u22411 \u65292 \u20854 \u20182 \u30340 \u36890 \u30693 \u31867 \u22411 \u21487 \u33258 \u34892 \u23454 \u29616 
\f1\i0 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 notifyTypeMap\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  [\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10   \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "id"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "1"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "name"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "WxPusher"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "functionName"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 wxpusher\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "tip"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\cf11 \strokec11 \\r\\n\cf5 \strokec5 AT_xxxxxx|UID_xxxxxx"\cf10 \strokec10  \cf6 \strokec6 \},\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "id"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "2"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "name"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "Bark"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "functionName"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 bark\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "tip"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\cf11 \strokec11 \\r\\n\cf5 \strokec5 token|soundName\cf11 \strokec11 \\r\\n\\r\\n\cf5 \strokec5 \uc0\u27880 \u65306 token\u20026 xxxxxx\u20195 \u34920 \u30340 \u20540 \u65292 \u30452 \u25509 \u36755 \u20837 \u35813 \u20540 \u21363 \u21487 \u65292 \u35831 \u21247 \u36755 \u20837 \u23436 \u25972 \u38142 \u25509 \u65288 https://api.day.app/xxxxxx\u65289 \u65292 soundName\u20026 \u38083 \u22768 \u21517 \u31216 \u65288 \u40664 \u35748 \u20351 \u29992 \u65306 multiwayinvitation\u65289 \u65292 \u22914 \u38656 \u33258 \u23450 \u20041 \u38083 \u22768 \u38656 \u35201 \u25226 \u38083 \u22768 \u25991 \u20214 \u20808 \u19978 \u20256 \u21040 BarkApp"\cf10 \strokec10  \cf6 \strokec6 \},\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "id"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "3"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "name"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\uc0\u39134 \u20070 \u26426 \u22120 \u20154 "\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "functionName"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 feishu\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "tip"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\cf11 \strokec11 \\r\\n\cf5 \strokec5 token\cf11 \strokec11 \\r\\n\\r\\n\cf5 \strokec5 \uc0\u27880 \u65306 token\u20026 xxxxxx\u20195 \u34920 \u30340 \u20540 \u65292 \u30452 \u25509 \u36755 \u20837 \u35813 \u20540 \u21363 \u21487 \u65292 \u35831 \u21247 \u36755 \u20837 \u23436 \u25972 \u38142 \u25509 \u65288 https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxx\u65289 "\cf10 \strokec10  \cf6 \strokec6 \},\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "id"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "4"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "name"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\uc0\u20225 \u19994 \u24494 \u20449 \u26426 \u22120 \u20154 "\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "functionName"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 weixin\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "tip"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\cf11 \strokec11 \\r\\n\cf5 \strokec5 token\cf11 \strokec11 \\r\\n\\r\\n\cf5 \strokec5 \uc0\u27880 \u65306 token\u20026 xxxxxx\u20195 \u34920 \u30340 \u20540 \u65292 \u30452 \u25509 \u36755 \u20837 \u35813 \u20540 \u21363 \u21487 \u65292 \u35831 \u21247 \u36755 \u20837 \u23436 \u25972 \u38142 \u25509 \u65288 https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxxx\u65289 "\cf10 \strokec10  \cf6 \strokec6 \},\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "id"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "5"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "name"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\uc0\u38025 \u38025 \u26426 \u22120 \u20154 "\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "functionName"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 dingtalk\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "tip"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\cf11 \strokec11 \\r\\n\cf5 \strokec5 token\cf11 \strokec11 \\r\\n\\r\\n\cf5 \strokec5 \uc0\u27880 \u65306 token\u20026 xxxxxx\u20195 \u34920 \u30340 \u20540 \u65292 \u30452 \u25509 \u36755 \u20837 \u35813 \u20540 \u21363 \u21487 \u65292 \u35831 \u21247 \u36755 \u20837 \u23436 \u25972 \u38142 \u25509 \u65288 https://oapi.dingtalk.com/robot/send?access_token=xxxxxx\u65289 "\cf10 \strokec10  \cf6 \strokec6 \},\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "id"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "6"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "name"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "NapCatQQ"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "functionName"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 onebot\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "tip"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "http://127.0.0.1:8000/send_private_msg|access_token|\uc0\u25509 \u25910 \u20154 QQ\u21495 "\cf10 \strokec10  \cf6 \strokec6 \},\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "id"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "7"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "name"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "Lagrange.Onebot"\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "functionName"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 onebot\cf6 \strokec6 ,\cf10 \strokec10  \cf5 \strokec5 "tip"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "http://127.0.0.1:8000/send_private_msg|access_token|\uc0\u25509 \u25910 \u20154 QQ\u21495 "\cf10 \strokec10  \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10 ]\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 handleRequest\cf6 \strokec6 (\cf7 \strokec7 request\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 try\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 url\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 new\cf10 \strokec10  \cf4 \strokec4 URL\cf10 \strokec10 (\cf9 \strokec9 request\cf6 \strokec6 .\cf9 \strokec9 url\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 pathname\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 url\cf6 \strokec6 .\cf9 \strokec9 pathname\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 if\cf2 \strokec2  (\cf9 \strokec9 request\cf6 \strokec6 .\cf9 \strokec9 method\cf2 \strokec2  \cf8 \strokec8 ===\cf2 \strokec2  \cf5 \strokec5 "OPTIONS"\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf5 \strokec5 ""\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 204\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf9 \strokec9 request\cf6 \strokec6 .\cf9 \strokec9 method\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 "POST"\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 '/api/notifyOwner'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 request\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 notifyOwner\cf2 \strokec2 (\cf8 \strokec8 json\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 '/api/callOwner'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 request\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 callOwner\cf2 \strokec2 (\cf8 \strokec8 json\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 '/api/addOwner'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !\cf4 \strokec4 isAuth\cf2 \strokec2 (\cf8 \strokec8 request\cf2 \strokec2 )) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3                   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "Auth error"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 request\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 addOwner\cf2 \strokec2 (\cf8 \strokec8 json\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 '/api/deleteOwner'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !\cf4 \strokec4 isAuth\cf2 \strokec2 (\cf8 \strokec8 request\cf2 \strokec2 )) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3                   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "Auth error"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 request\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 deleteOwner\cf2 \strokec2 (\cf8 \strokec8 json\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 '/api/listOwner'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !\cf4 \strokec4 isAuth\cf2 \strokec2 (\cf8 \strokec8 request\cf2 \strokec2 )) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3                   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "Auth error"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 listOwner\cf2 \strokec2 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 '/api/notifyTypeList'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getNotifyTypeList\cf2 \strokec2 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 '/api/login'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 apiKey\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 request\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 apiKey\cf2 \strokec2  \cf8 \strokec8 &&\cf2 \strokec2  \cf8 \strokec8 apiKey\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf9 \strokec9 API_KEY\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3                   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "Authorized"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3                   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 401\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "Unauthorized"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf9 \strokec9 request\cf6 \strokec6 .\cf9 \strokec9 method\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 "GET"\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 "/login"\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 login\cf2 \strokec2 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 pathname\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 "/manager"\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 managerOwnerIndex\cf2 \strokec2 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 style\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 url\cf6 \strokec6 .\cf9 \strokec9 searchParams\cf6 \strokec6 .\cf4 \strokec4 get\cf10 \strokec10 (\cf5 \strokec5 "style"\cf10 \strokec10 ) \cf8 \strokec8 ||\cf10 \strokec10  \cf5 \strokec5 "1"\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 id\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 url\cf6 \strokec6 .\cf9 \strokec9 searchParams\cf6 \strokec6 .\cf4 \strokec4 get\cf10 \strokec10 (\cf5 \strokec5 "id"\cf10 \strokec10 ) \cf8 \strokec8 ||\cf10 \strokec10  \cf5 \strokec5 ""\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 style\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf5 \strokec5 "2"\cf2 \strokec2  \cf8 \strokec8 ?\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 index2\cf2 \strokec2 (\cf8 \strokec8 id\cf2 \strokec2 ) \cf8 \strokec8 :\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 index1\cf2 \strokec2 (\cf8 \strokec8 id\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2  \cf8 \strokec8 catch\cf2 \strokec2  (\cf8 \strokec8 error\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf9 \strokec9 error\cf6 \strokec6 .\cf9 \strokec9 message\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 isAuth\cf6 \strokec6 (\cf7 \strokec7 request\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 authHeader\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 request\cf6 \strokec6 .\cf9 \strokec9 headers\cf6 \strokec6 .\cf4 \strokec4 get\cf10 \strokec10 (\cf5 \strokec5 "Authorization"\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !authHeader\cf2 \strokec2  \cf8 \strokec8 ||\cf2 \strokec2  \cf8 \strokec8 !\cf9 \strokec9 authHeader\cf6 \strokec6 .\cf4 \strokec4 startsWith\cf2 \strokec2 (\cf5 \strokec5 "Bearer "\cf2 \strokec2 ) \cf8 \strokec8 ||\cf2 \strokec2  \cf9 \strokec9 authHeader\cf6 \strokec6 .\cf4 \strokec4 split\cf2 \strokec2 (\cf5 \strokec5 " "\cf2 \strokec2 )[\cf7 \strokec7 1\cf2 \strokec2 ] \cf8 \strokec8 !==\cf2 \strokec2  \cf9 \strokec9 API_KEY\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 false\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 true\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 getKV\cf6 \strokec6 (\cf7 \strokec7 id\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 try\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 id\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 owner\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 DATA\cf6 \strokec6 .\cf4 \strokec4 get\cf10 \strokec10 (\cf8 \strokec8 id\cf10 \strokec10 ) \cf8 \strokec8 ||\cf10 \strokec10  null\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 owner\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3               \cf8 \strokec8 return\cf2 \strokec2  \cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf2 \strokec2 (\cf8 \strokec8 owner\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3           \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2  \cf8 \strokec8 catch\cf2 \strokec2  (\cf8 \strokec8 e\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 null\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 putKV\cf6 \strokec6 (\cf7 \strokec7 id\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 owner\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 cfg\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 id\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 await\cf2 \strokec2  \cf9 \strokec9 DATA\cf6 \strokec6 .\cf4 \strokec4 put\cf2 \strokec2 (\cf8 \strokec8 id\cf6 \strokec6 ,\cf2 \strokec2  \cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf8 \strokec8 owner\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 cfg\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 true\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 false\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 delKV\cf6 \strokec6 (\cf7 \strokec7 id\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 id\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 await\cf2 \strokec2  \cf9 \strokec9 DATA\cf6 \strokec6 .\cf4 \strokec4 delete\cf2 \strokec2 (\cf8 \strokec8 id\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 true\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 false\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 listKV\cf6 \strokec6 (\cf7 \strokec7 prefix\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 limit\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf9 \strokec9 DATA\cf6 \strokec6 .\cf4 \strokec4 list\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  \cf8 \strokec8 prefix\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 limit\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 rateLimit\cf6 \strokec6 (\cf7 \strokec7 id\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 key\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `ratelimit:\cf6 \strokec6 $\{\cf9 \strokec9 id\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf5 \strokec5 ()\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 currentCount\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 getKV\cf10 \strokec10 (\cf8 \strokec8 key\cf10 \strokec10 ) \cf8 \strokec8 ||\cf10 \strokec10  \cf7 \strokec7 0\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 notifyCount\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf4 \strokec4 parseInt\cf10 \strokec10 (\cf8 \strokec8 currentCount\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 notifyCount\cf2 \strokec2  \cf8 \strokec8 >=\cf2 \strokec2  \cf8 \strokec8 rateLimitMaxRequests\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 false\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 putKV\cf2 \strokec2 (\cf8 \strokec8 key\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 notifyCount\cf2 \strokec2  \cf8 \strokec8 +\cf2 \strokec2  \cf7 \strokec7 1\cf6 \strokec6 ,\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       expirationTtl\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 rateLimitDelay\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf10 \strokec10 true\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 notifyOwner\cf6 \strokec6 (\cf7 \strokec7 json\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 id\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 message\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 isCanSend\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 rateLimit\cf10 \strokec10 (\cf8 \strokec8 id\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !isCanSend\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 rateLimitMessage\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 owner\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 getKV\cf10 \strokec10 (\cf5 \strokec5 `car_\cf6 \strokec6 $\{\cf9 \strokec9 id\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf5 \strokec5 ()\cf6 \strokec6 \}\cf5 \strokec5 `\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !owner\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36710 \u36742 \u20449 \u24687 \u38169 \u35823 \u65281 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2 (\cf8 \strokec8 !\cf9 \strokec9 owner\cf6 \strokec6 .\cf9 \strokec9 isNotify\cf2 \strokec2 )\cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36710 \u20027 \u26410 \u24320 \u21551 \u35813 \u21151 \u33021 ,\u35831 \u20351 \u29992 \u20854 \u20182 \u26041 \u24335 \u32852 \u31995 \u36710 \u20027 !"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \strokec2  \cb1 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 let\cf10 \strokec10  \cf8 \strokec8 resp\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  null\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 no\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 notifyType\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 notifyToken\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 owner\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 provider\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 notifyTypeMap\cf6 \strokec6 .\cf4 \strokec4 find\cf10 \strokec10 (\cf7 \strokec7 element\cf10 \strokec10  \cf8 \strokec8 =>\cf10 \strokec10  \cf9 \strokec9 element\cf6 \strokec6 .\cf9 \strokec9 id\cf10 \strokec10  \cf8 \strokec8 ==\cf10 \strokec10  \cf8 \strokec8 notifyType\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 provider\cf2 \strokec2  \cf8 \strokec8 &&\cf2 \strokec2  \cf9 \strokec9 provider\cf6 \strokec6 .\cf9 \strokec9 functionName\cf2 \strokec2  \cf8 \strokec8 &&\cf2 \strokec2  \cf8 \strokec8 typeof\cf2 \strokec2  \cf9 \strokec9 provider\cf6 \strokec6 .\cf9 \strokec9 functionName\cf2 \strokec2  \cf8 \strokec8 ===\cf2 \strokec2  \cf5 \strokec5 'function'\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 sendMsg\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `\uc0\u12304 \cf6 \strokec6 $\{\cf8 \strokec8 no\cf6 \strokec6 \}\cf5 \strokec5 \uc0\u12305 \cf6 \strokec6 $\{\cf8 \strokec8 message\cf5 \strokec5  \cf8 \strokec8 ||\cf5 \strokec5  \cf8 \strokec8 notifyMessage\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 resp\cf2 \strokec2  \cf8 \strokec8 =\cf2 \strokec2  \cf8 \strokec8 await\cf2 \strokec2  \cf9 \strokec9 provider\cf6 \strokec6 .\cf4 \strokec4 functionName\cf2 \strokec2 (\cf8 \strokec8 notifyToken\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 sendMsg\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 resp\cf2 \strokec2  \cf8 \strokec8 =\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u21457 \u36865 \u22833 \u36133 !"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf8 \strokec8 resp\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 callOwner\cf6 \strokec6 (\cf7 \strokec7 json\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 id\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 owner\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 getKV\cf10 \strokec10 (\cf5 \strokec5 `car_\cf6 \strokec6 $\{\cf9 \strokec9 id\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf5 \strokec5 ()\cf6 \strokec6 \}\cf5 \strokec5 `\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !owner\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36710 \u36742 \u20449 \u24687 \u38169 \u35823 \u65281 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2 (\cf8 \strokec8 !\cf9 \strokec9 owner\cf6 \strokec6 .\cf9 \strokec9 isCall\cf2 \strokec2 )\cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36710 \u20027 \u26410 \u24320 \u21551 \u35813 \u21151 \u33021 ,\u35831 \u20351 \u29992 \u20854 \u20182 \u26041 \u24335 \u32852 \u31995 \u36710 \u20027 !"\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \strokec2  \cb1 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 phone\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 owner\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 phone\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 addOwner\cf6 \strokec6 (\cf7 \strokec7 json\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 try\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 id\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 no\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 phone\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 notifyType\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 notifyToken\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 isNotify\cf6 \strokec6 ,\cf10 \strokec10  \cf9 \strokec9 isCall\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 putKV\cf2 \strokec2 (\cf5 \strokec5 `car_\cf6 \strokec6 $\{\cf9 \strokec9 id\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf5 \strokec5 ()\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ,\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  \cf8 \strokec8 id\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 no\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 phone\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 notifyType\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 notifyToken\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 isNotify\cf6 \strokec6 ,\cf2 \strokec2  \cf8 \strokec8 isCall\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u28155 \u21152 \u25104 \u21151 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2  \cf8 \strokec8 catch\cf2 \strokec2  (\cf8 \strokec8 e\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u28155 \u21152 \u22833 \u36133 \u65292 "\cf2 \strokec2  \cf8 \strokec8 +\cf2 \strokec2  \cf9 \strokec9 e\cf6 \strokec6 .\cf9 \strokec9 message\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 deleteOwner\cf6 \strokec6 (\cf7 \strokec7 json\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 try\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 id\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 await\cf2 \strokec2  \cf4 \strokec4 delKV\cf2 \strokec2 (\cf5 \strokec5 `car_\cf6 \strokec6 $\{\cf9 \strokec9 id\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf5 \strokec5 ()\cf6 \strokec6 \}\cf5 \strokec5 `\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u21024 \u38500 \u25104 \u21151 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2  \cf8 \strokec8 catch\cf2 \strokec2  (\cf8 \strokec8 e\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u21024 \u38500 \u22833 \u36133 \u65292 "\cf2 \strokec2  \cf8 \strokec8 +\cf2 \strokec2  \cf9 \strokec9 e\cf6 \strokec6 .\cf9 \strokec9 message\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 listOwner\cf6 \strokec6 ()\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 value\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 listKV\cf10 \strokec10 (\cf5 \strokec5 "car_"\cf6 \strokec6 ,\cf10 \strokec10  \cf7 \strokec7 50\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 keys\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 value\cf6 \strokec6 .\cf9 \strokec9 keys\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 arrys\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  []\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 for\cf2 \strokec2  (\cf8 \strokec8 let\cf10 \strokec10  \cf8 \strokec8 i\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf7 \strokec7 0\cf6 \strokec6 ;\cf2 \strokec2  \cf8 \strokec8 i\cf2 \strokec2  \cf8 \strokec8 <\cf2 \strokec2  \cf9 \strokec9 keys\cf6 \strokec6 .\cf12 \strokec12 length\cf6 \strokec6 ;\cf2 \strokec2  \cf8 \strokec8 i++\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 owner\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 getKV\cf10 \strokec10 (\cf8 \strokec8 keys\cf10 \strokec10 [\cf8 \strokec8 i\cf10 \strokec10 ]\cf6 \strokec6 .\cf9 \strokec9 name\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !owner\cf2 \strokec2  \cf8 \strokec8 ||\cf2 \strokec2  \cf8 \strokec8 !\cf9 \strokec9 owner\cf6 \strokec6 ?.\cf9 \strokec9 id\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 continue\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3       \cf9 \strokec9 arrys\cf6 \strokec6 .\cf4 \strokec4 push\cf2 \strokec2 (\cf8 \strokec8 owner\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 arrys\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 getNotifyTypeList\cf6 \strokec6 ()\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 types\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  []\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf9 \strokec9 notifyTypeMap\cf6 \strokec6 .\cf4 \strokec4 forEach\cf2 \strokec2 (\cf7 \strokec7 element\cf2 \strokec2  \cf8 \strokec8 =>\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf9 \strokec9 types\cf6 \strokec6 .\cf4 \strokec4 push\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  text\cf6 \strokec6 :\cf2 \strokec2  \cf9 \strokec9 element\cf6 \strokec6 .\cf9 \strokec9 name\cf6 \strokec6 ,\cf2 \strokec2  value\cf6 \strokec6 :\cf2 \strokec2  \cf9 \strokec9 element\cf6 \strokec6 .\cf9 \strokec9 id\cf6 \strokec6 ,\cf2 \strokec2  tip\cf6 \strokec6 :\cf2 \strokec2  \cf9 \strokec9 element\cf6 \strokec6 .\cf9 \strokec9 tip\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cb1 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf4 \strokec4 getResponse\cf2 \strokec2 (\cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf2 \strokec2 (\cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 types\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 login\cf6 \strokec6 ()\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 htmlContent\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `<!DOCTYPE html>\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5   <html lang="zh-CN">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <meta charset="UTF-8">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <meta name="viewport"\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <title>\uc0\u36890 \u30693 \u36710 \u20027 \u25386 \u36710 </title>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           * \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               box-sizing: border-box;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           body \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-family: Arial, sans-serif;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               align-items: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               justify-content: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 100vh;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #f0f2f5;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #333;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .container \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               text-align: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               max-width: 400px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 8px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 10px\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           h1 \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 24px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #007bff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5           input\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 5px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           button \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 5px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 10px 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 18px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-weight: bold;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 6px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: background 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .call-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #17a2b8;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .call-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #138496;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           @keyframes float \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               0% \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   transform: translateY(0px) rotate(0deg);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               50% \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   transform: translateY(-20px) rotate(5deg);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               100% \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   transform: translateY(0px) rotate(0deg);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .loading \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               pointer-events: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               top: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transform: translate(-50%, -50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .loading::after \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               content: "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: 3px solid #ffffff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-top-color: transparent;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               animation: spin 0.8s linear infinite;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-left: 10px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           @keyframes spin \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               to \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   transform: rotate(360deg);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .toast \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: fixed;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transform: translateX(-50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: rgba(0, 0, 0, 0.8);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 12px 24px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 50px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 16px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               opacity: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: opacity 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .toast.show \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               opacity: 1;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .modal \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: fixed;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               top: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: rgba(0, 0, 0, 0.5);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="container">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <h1>\uc0\u30331 \u24405 </h1>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <input type="text" id="apiKey" placeholder="\uc0\u35831 \u36755 \u20837 API_KEY"/>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <button class="call-btn" onclick="login()">\uc0\u30331 \u24405 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div id="toast" class="toast"></div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div id="loadingBox" class="modal">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <div class="loading"></div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function login() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const authKey = document.getElementById('apiKey').value; \cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5               if (!authKey) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   showToast("\uc0\u35831 \u36755 \u20837 API_KEY");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/login", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   method: "POST",\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   headers: \{ "Content-Type": "application/json" \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       apiKey: authKey \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);                        \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       if(data.code==200)\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           showToast("\uc0\u30331 \u24405 \u25104 \u21151 \u65281 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           setTimeout(() => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               localStorage.setItem('API_KEY', authKey);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               window.location.href="/manager";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           \}, 500);                            \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       else\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           showToast("\uc0\u30331 \u24405 \u22833 \u36133 \u65292 API_KEY\u38169 \u35823 \u65281 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function showToast(message, duration = 5000) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const toast = document.getElementById('toast');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               toast.textContent = message;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               toast.classList.add('show');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               setTimeout(() => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   toast.classList.remove('show');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}, duration);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u26174 \u31034 \u28155 \u21152 \u27169 \u24577 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function showLoading(isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   document.getElementById('loadingBox').style.display = 'block';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   document.getElementById('loadingBox').style.display = 'none';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </html>`\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 new\cf2 \strokec2  \cf4 \strokec4 Response\cf2 \strokec2 (\cf8 \strokec8 htmlContent\cf6 \strokec6 ,\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       headers\cf6 \strokec6 :\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Content-Type'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 'text/html;charset=UTF-8'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Origin'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Headers'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 index1\cf6 \strokec6 (\cf7 \strokec7 id\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 owner\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 getKV\cf10 \strokec10 (\cf5 \strokec5 `car_\cf6 \strokec6 $\{\cf9 \strokec9 id\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf5 \strokec5 ()\cf6 \strokec6 \}\cf5 \strokec5 `\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 isNotify\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 owner\cf6 \strokec6 ?.\cf9 \strokec9 isNotify\cf10 \strokec10  \cf8 \strokec8 ??\cf10 \strokec10  true\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 isCall\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 owner\cf6 \strokec6 ?.\cf9 \strokec9 isCall\cf10 \strokec10  \cf8 \strokec8 ??\cf10 \strokec10  true\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 htmlContent\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `<!DOCTYPE html>\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5   <html lang="zh-CN">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <meta charset="UTF-8">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <meta name="viewport"\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <title>\uc0\u36890 \u30693 \u36710 \u20027 \u25386 \u36710 </title>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           * \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               box-sizing: border-box;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           body \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-family: Arial, sans-serif;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               align-items: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               justify-content: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 100vh;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #f0f2f5;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #333;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .container \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               text-align: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               max-width: 400px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 8px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 10px\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           h1 \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 24px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #007bff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           p \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 16px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #555;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           button \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 15px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 10px 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 18px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-weight: bold;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 6px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: background 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .notify-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #28a745;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .notify-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #218838;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .call-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #17a2b8;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .call-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: #138496;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .loading \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               pointer-events: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               top: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transform: translate(-50%, -50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .loading::after \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               content: "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: 3px solid #ffffff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-top-color: transparent;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               animation: spin 0.8s linear infinite;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           @keyframes spin \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               0% \{ transform: translate(-50%, -50%) rotate(0deg); \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               100% \{ transform: translate(-50%, -50%) rotate(360deg); \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .toast \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: fixed;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transform: translateX(-50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background: rgba(0, 0, 0, 0.8);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 12px 24px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 50px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 16px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               opacity: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: opacity 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .toast.show \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               opacity: 1;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .modal \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: fixed;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               top: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: rgba(0, 0, 0, 0.5);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5           .hide-notify\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \cf6 \strokec6 $\{\cf8 \strokec8 !isNotify\cf5 \strokec5  \cf8 \strokec8 ?\cf5 \strokec5  `display: none;` \cf8 \strokec8 :\cf5 \strokec5  ""\cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .hide-call\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \cf6 \strokec6 $\{\cf8 \strokec8 !isCall\cf5 \strokec5  \cf8 \strokec8 ?\cf5 \strokec5  `display: none;` \cf8 \strokec8 :\cf5 \strokec5  ""\cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="container">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <h1>\uc0\u36890 \u30693 \u36710 \u20027 \u25386 \u36710 </h1>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <p>\uc0\u22914 \u38656 \u36890 \u30693 \u36710 \u20027 \u65292 \u35831 \u28857 \u20987 \u20197 \u19979 \u25353 \u38062 </p>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <button class="notify-btn hide-notify" onclick="notifyOwner()">\uc0\u36890 \u30693 \u36710 \u20027 \u25386 \u36710 </button>                    \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <button class="call-btn hide-call" onclick="callOwner()">\uc0\u25320 \u25171 \u36710 \u20027 \u30005 \u35805 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div id="toast" class="toast"></div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div id="loadingBox" class="modal">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <div class="loading"></div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function getQueryVariable(variable) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               let query = window.location.search.substring(1);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               let vars = query.split("&");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               for (let i = 0; i < vars.length; i++) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   let pair = vars[i].split("=");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   if (pair[0].toLowerCase() == variable.toLowerCase()) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       return pair[1];\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               return "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u21457 \u36865 \u36890 \u30693 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function notifyOwner() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               let id = getQueryVariable("id");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!id) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   showToast("\uc0\u26410 \u33719 \u21462 \u21040 id\u21442 \u25968 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/notifyOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   method: "POST",\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   headers: \{ "Content-Type": "application/json" \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       id: id,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       message: ""\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showToast(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u25320 \u25171 \u36710 \u20027 \u30005 \u35805 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function callOwner() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               let id = getQueryVariable("id");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!id) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   showToast("\uc0\u26410 \u33719 \u21462 \u21040 id\u21442 \u25968 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/callOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   method: "POST",\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   headers: \{ "Content-Type": "application/json" \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       id: id,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       if (data.code === 200) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           window.location.href = "tel:" + data.data;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \} else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function showToast(message, duration = 5000) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const toast = document.getElementById('toast');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               toast.textContent = message;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               toast.classList.add('show');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               setTimeout(() => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   toast.classList.remove('show');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}, duration);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u26174 \u31034 \u28155 \u21152 \u27169 \u24577 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function showLoading(isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   document.getElementById('loadingBox').style.display = 'block';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   document.getElementById('loadingBox').style.display = 'none';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </html>`\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 new\cf2 \strokec2  \cf4 \strokec4 Response\cf2 \strokec2 (\cf8 \strokec8 htmlContent\cf6 \strokec6 ,\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       headers\cf6 \strokec6 :\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Content-Type'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 'text/html;charset=UTF-8'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Origin'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Headers'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 index2\cf6 \strokec6 (\cf7 \strokec7 id\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 owner\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 getKV\cf10 \strokec10 (\cf5 \strokec5 `car_\cf6 \strokec6 $\{\cf9 \strokec9 id\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf5 \strokec5 ()\cf6 \strokec6 \}\cf5 \strokec5 `\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 isNotify\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 owner\cf6 \strokec6 ?.\cf9 \strokec9 isNotify\cf10 \strokec10  \cf8 \strokec8 ??\cf10 \strokec10  true\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 isCall\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 owner\cf6 \strokec6 ?.\cf9 \strokec9 isCall\cf10 \strokec10  \cf8 \strokec8 ??\cf10 \strokec10  true\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 htmlContent\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `<!DOCTYPE html>\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5   <html lang="zh-CN">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <meta charset="UTF-8">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <meta name="viewport"\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <title>\uc0\u36890 \u30693 \u36710 \u20027 \u25386 \u36710 </title>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       * \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-sizing: border-box;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         margin: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         padding: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       :root \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         --primary-color: #4776E6;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         --secondary-color: #8E54E9;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         --text-color: #2c3e50;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         --shadow-color: rgba(0, 0, 0, 0.1);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       body \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         align-items: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         justify-content: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         min-height: 100vh;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         color: var(--text-color);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         padding: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         line-height: 1.6;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .container \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         text-align: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         padding: 40px 30px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         max-width: 400px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border-radius: 16px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 10px 40px var(--shadow-color);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background: rgba(255, 255, 255, 0.95);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         /* backdrop-filter: blur(10px); */\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: translateY(0);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .container:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: translateY(-8px);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       h1 \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         /* font-size: 32px;  */\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         margin-bottom: 25px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         -webkit-background-clip: text;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         -webkit-text-fill-color: transparent;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         font-weight: 700;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .car-icon \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         font-size: 64px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         margin-bottom: 25px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         display: inline-block;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         animation: float 6s ease-in-out infinite;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       p \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         margin-bottom: 30px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         /* font-size: 18px;  */\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         color: #546e7a;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         line-height: 1.8;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .button-group \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         flex-wrap: wrap;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         /* \uc0\u20801 \u35768 \u23376 \u20803 \u32032 \u25442 \u34892  */\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         justify-content: space-between;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         /* \uc0\u23376 \u20803 \u32032 \u22312 \u20027 \u36724 \u19978 \u22343 \u21248 \u20998 \u24067  */\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         gap: 10px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       button \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         flex: 1;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         padding: 10px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         /* font-size: 18px; \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-weight: 600;  */\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border-radius: 10px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         color: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         align-items: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         justify-content: center;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         gap: 10px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       button:active \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: scale(0.98);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .action-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background: linear-gradient(45deg, #546c7c, #546c7c);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 4px 15px rgba(71, 118, 230, 0.2);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .action-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 6px 20px rgba(71, 118, 230, 0.3);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: translateY(-2px);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .notify-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 4px 15px rgba(71, 118, 230, 0.2);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .notify-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 6px 20px rgba(71, 118, 230, 0.3);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: translateY(-2px);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .call-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background: linear-gradient(45deg, #00b09b, #96c93d);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 4px 15px rgba(0, 176, 155, 0.2);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .call-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         box-shadow: 0 6px 20px rgba(0, 176, 155, 0.3);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: translateY(-2px);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       @keyframes float \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         0% \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           transform: translateY(0px) rotate(0deg);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         50% \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           transform: translateY(-20px) rotate(5deg);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         100% \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           transform: translateY(0px) rotate(0deg);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .loading \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         pointer-events: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         top: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: translate(-50%, -50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .loading::after \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         content: "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         width: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         height: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border: 3px solid #ffffff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border-radius: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border-top-color: transparent;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         animation: spin 0.8s linear infinite;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       @keyframes spin \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           0% \{ transform: translate(-50%, -50%) rotate(0deg); \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           100% \{ transform: translate(-50%, -50%) rotate(360deg); \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .toast \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         position: fixed;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transform: translateX(-50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background: rgba(0, 0, 0, 0.8);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         padding: 12px 24px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border-radius: 50px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         font-size: 16px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         opacity: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         transition: opacity 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .toast.show \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         opacity: 1;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       textarea \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         padding: 10px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border: 1px solid #ccc;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         border-radius: 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       .modal \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         display: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         position: fixed;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         top: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         left: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         height: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         background-color: rgba(0, 0, 0, 0.5);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5       .hide-notify\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \cf6 \strokec6 $\{\cf8 \strokec8 !isNotify\cf5 \strokec5  \cf8 \strokec8 ?\cf5 \strokec5  `display: none;` \cf8 \strokec8 :\cf5 \strokec5  ""\cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5       .hide-call\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \cf6 \strokec6 $\{\cf8 \strokec8 !isCall\cf5 \strokec5  \cf8 \strokec8 ?\cf5 \strokec5  `display: none;` \cf8 \strokec8 :\cf5 \strokec5  ""\cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     </style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <div class="container">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="car-icon">\uc0\u55357 \u56983 </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <h1>\uc0\u28201 \u39336 \u25552 \u31034 </h1>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <p>\uc0\u19981 \u22909 \u24847 \u24605 \u38459 \u30861 \u21040 \u24744 \u30340 \u20986 \u34892 \u20102 <br>\u35831 \u36890 \u36807 \u20197 \u19979 \u26041 \u24335 \u32852 \u31995 \u25105 \u65292 \u25105 \u20250 \u31435 \u21363 \u21069 \u26469 \u25386 \u36710 </p>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="button-group hide-notify">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <textarea rows="5" id="notifyMessage" placeholder="\uc0\u32473 \u36710 \u20027 \u30041 \u35328 ">\u36710 \u20027 \u65292 \u26377 \u20154 \u38656 \u35201 \u24744 \u25386 \u36710 \u65292 \u35831 \u21450 \u26102 \u22788 \u29702 \u19968 \u19979 \u21734 \u12290 </textarea>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>        \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="button-group hide-notify">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         <button class="action-btn" data-msg="\uc0\u36710 \u20027 \u65292 \u26377 \u20154 \u38656 \u35201 \u24744 \u25386 \u36710 \u65292 \u35831 \u21450 \u26102 \u22788 \u29702 \u19968 \u19979 \u21734 \u12290 ">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <span>\uc0\u25386 \u36710 </span>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         <button class="action-btn" data-msg="\uc0\u36710 \u20027 \u65292 \u24744 \u29233 \u36710 \u30340 \u36710 \u31383 \u26410 \u20851 \u65292 \u35831 \u21450 \u26102 \u22788 \u29702 \u19968 \u19979 \u21734 \u12290 ">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <span>\uc0\u26410 \u20851 \u31383 </span>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="button-group hide-notify">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         <button class="action-btn" data-msg="\uc0\u36710 \u20027 \u65292 \u24744 \u29233 \u36710 \u30340 \u36710 \u28783 \u26410 \u20851 \u65292 \u35831 \u21450 \u26102 \u22788 \u29702 \u19968 \u19979 \u21734 \u12290 ">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <span>\uc0\u26410 \u20851 \u28783 </span>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         <button class="action-btn" data-msg="\uc0\u36710 \u20027 \u65292 \u27492 \u22788 \u26377 \u20132 \u35686 \u26597 \u36710 \u65292 \u35831 \u21450 \u26102 \u22788 \u29702 \u19968 \u19979 \u21734 \u12290 ">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <span>\uc0\u20132 \u35686 </span>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="button-group">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         <button class="notify-btn hide-notify" onclick="notifyOwner()">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <span>\uc0\u24494 \u20449 \u36890 \u30693 </span> \u55357 \u56561 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         <button class="call-btn hide-call" onclick="callOwner()">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <span>\uc0\u30005 \u35805 \u32852 \u31995 </span> \u55357 \u56542 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <div id="toast" class="toast"></div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <div id="loadingBox" class="modal">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="loading"></div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     <script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       document.addEventListener('DOMContentLoaded', () => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         let btns = document.querySelectorAll(".action-btn");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         btns.forEach(element => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           element.addEventListener("click", function (e) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             document.getElementById("notifyMessage").value = e.currentTarget.dataset.msg;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       function showToast(message, duration = 5000) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         const toast = document.getElementById('toast');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         toast.textContent = message;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         toast.classList.add('show');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         setTimeout(() => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           toast.classList.remove('show');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}, duration);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       // \uc0\u26174 \u31034 \u20851 \u38381 \u21152 \u36733 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       function showLoading(isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         if (isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           document.getElementById('loadingBox').style.display = 'block';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           document.getElementById('loadingBox').style.display = 'none';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       function getQueryVariable(variable) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         let query = window.location.search.substring(1);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         let vars = query.split("&");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         for (let i = 0; i < vars.length; i++) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           let pair = vars[i].split("=");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           if (pair[0].toLowerCase() == variable.toLowerCase()) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             return pair[1];\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         return "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       // \uc0\u21457 \u36865 \u36890 \u30693 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       function notifyOwner() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         let id = getQueryVariable("id");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         let message = document.getElementById("notifyMessage").value || "\uc0\u24744 \u22909 \u65292 \u26377 \u20154 \u38656 \u35201 \u24744 \u25386 \u36710 \u65292 \u35831 \u21450 \u26102 \u22788 \u29702 \u12290 "\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         if (!id) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           showToast("\uc0\u26410 \u33719 \u21462 \u21040 id\u21442 \u25968 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         fetch("/api/notifyOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           method: "POST",\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           headers: \{ "Content-Type": "application/json" \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             id: id,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             message: message\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             showToast(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       // \uc0\u25320 \u25171 \u36710 \u20027 \u30005 \u35805 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       function callOwner() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         let id = getQueryVariable("id");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         if (!id) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           showToast("\uc0\u26410 \u33719 \u21462 \u21040 id\u21442 \u25968 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         fetch("/api/callOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           method: "POST",\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           headers: \{ "Content-Type": "application/json" \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             id: id,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             if (data.code === 200) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               window.location.href = "tel:" + data.data;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             \} else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5     </script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </html>`\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 new\cf2 \strokec2  \cf4 \strokec4 Response\cf2 \strokec2 (\cf8 \strokec8 htmlContent\cf6 \strokec6 ,\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       headers\cf6 \strokec6 :\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Content-Type'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 'text/html;charset=UTF-8'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Origin'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Headers'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 managerOwnerIndex\cf6 \strokec6 ()\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 htmlContent\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `<!DOCTYPE html>\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5   <html lang="zh">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <meta charset="UTF-8">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <meta name="viewport" content="width=device-width, initial-scale=1.0">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <title>\uc0\u36710 \u36742 \u31649 \u29702 \u31995 \u32479 </title>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           * \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               box-sizing: border-box;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           body \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-family: Arial, sans-serif;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #f5f5f5;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .container \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               max-width: 1200px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: 0 auto;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .header \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 8px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .header h1 \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: #333;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .add-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 8px 16px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #4CAF50;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: background-color 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .add-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #45a049;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5           .loginOut-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 8px 16px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #dc3545;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: background-color 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .loginOut-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #c82333;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}            \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .table-container \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 8px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               overflow-x: auto;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           table \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-collapse: collapse;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           th,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           td \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 12px 15px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               text-align: left;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-bottom: 1px solid #ddd;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               white-space:nowrap;                \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           th \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #f8f9fa;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-weight: 600;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .actions \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               gap: 8px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .delete-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #dc3545;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 5px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: background-color 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .delete-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #c82333;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .edit-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #ffc107;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 5px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: background-color 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .edit-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #e0a800;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5           .notify-btn \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #17a2b8;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               color: white;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 5px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transition: background-color 0.3s;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .notify-btn:hover \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #138496;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .modal \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: fixed;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               top: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 0;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 100%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: rgba(0, 0, 0, 0.5);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               overflow-y: scroll;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .modal-content \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               background-color: #fff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin: auto auto;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 8px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 80%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               max-width: 500px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               top: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transform: translate(-50%, -50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .loading \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               pointer-events: none;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               top: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               left: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               transform: translate(-50%, -50%);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             .loading::after \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               content: "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               position: absolute;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               width: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               height: 20px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: 3px solid #ffffff;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 50%;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-top-color: transparent;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               animation: spin 0.8s linear infinite;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             @keyframes spin \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                 0% \{ transform: translate(-50%, -50%) rotate(0deg); \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                 100% \{ transform: translate(-50%, -50%) rotate(360deg); \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             \}            \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .close \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               float: right;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               cursor: pointer;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 24px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .add-form \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               flex-direction: column;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               gap: 10px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           .input-group \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               display: flex;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               flex-direction: column;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           input,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           textarea,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           select \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               padding: 8px 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border: 1px solid #ddd;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               border-radius: 4px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               font-size: 14px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           h2,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           label \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               margin-bottom: 5px;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </style>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </head>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   <body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div class="container">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <div class="header">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <h1>\uc0\u36710 \u36742 \u31649 \u29702 \u31995 \u32479 </h1>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <button class="add-btn" onclick="getOwnerList()">\uc0\u21047 \u26032 \u21015 \u34920 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <button class="add-btn" onclick="showAddModal()">\uc0\u28155 \u21152 \u36710 \u36742 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <button class="loginOut-btn" onclick="loginOut()">\uc0\u27880 \u38144 \u30331 \u24405 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <div class="table-container">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <table>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <thead>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <tr>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u36710 \u36742 ID</th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u36710 \u29260 \u21495 </th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u25163 \u26426 \u21495 </th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u36890 \u30693 \u26041 \u24335 </th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u36890 \u30693 Token</th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u28040 \u24687 \u36890 \u30693 </th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u30005 \u35805 \u36890 \u30693 </th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           <th>\uc0\u25805 \u20316 </th>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       </tr>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </thead>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <tbody id="ownerList">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </tbody>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               </table>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div id="addModal" class="modal">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <div class="modal-content">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <span class="close" onclick="closeAddModal()">&times;</span>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <h2>\uc0\u36710 \u36742 \u20449 \u24687 </h2>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               <form class="add-form" onsubmit="event.preventDefault(); addOwner();">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <div class="input-group">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <label for="addId">\uc0\u36710 \u36742 ID</label>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <input type="text" id="addId" placeholder="\uc0\u36710 \u36742 ID\u65292 \u21487 \u20026 \u20219 \u24847 \u20869 \u23481 \u21807 \u19968 \u21363 \u21487 ">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <div class="input-group">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <label for="addId">\uc0\u36710 \u29260 \u21495 </label>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <input type="text" id="addNo" placeholder="\uc0\u36710 \u29260 \u21495 ">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <div class="input-group">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <label for="addPhone">\uc0\u25163 \u26426 \u21495 </label>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <input type="text" id="addPhone" placeholder="\uc0\u25163 \u26426 \u21495 ">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <div class="input-group">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <label for="addNotifyType">\uc0\u36890 \u30693 \u26041 \u24335 </label>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <select id="addNotifyType"></select>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <div class="input-group">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <label for="addNotifyToken">\uc0\u36890 \u30693 Token</label>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <textarea rows="10" id="addNotifyToken" placeholder="\uc0\u36890 \u30693 Token"></textarea>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </div>                   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <input type="checkbox" id="addIsNotify" />\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <label for="addIsNotify">\uc0\u24320 \u21551 \u28040 \u24687 \u36890 \u30693 </label>\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5                       <input type="checkbox" id="addIsCall" />\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <label for="addIsCall">\uc0\u24320 \u21551 \u30005 \u35805 \u36890 \u30693 </label>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </div>   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <button type="submit" class="add-btn">\uc0\u30830 \u23450 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               </form>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <div id="loadingBox" class="modal">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           <div class="loading"></div>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </div>        \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       <script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function loginOut() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!confirm('\uc0\u30830 \u35748 \u36864 \u20986 \u30331 \u24405 \u21527 \u65311 ')) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \} \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               localStorage.clear();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               setTimeout(()=>\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   window.location.href="/login"\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \},1000)\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5           // \uc0\u26174 \u31034 \u20851 \u38381 \u21152 \u36733 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function showLoading(isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             if (isShow) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('loadingBox').style.display = 'block';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('loadingBox').style.display = 'none';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}            \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u33719 \u21462 \u36710 \u36742 \u21015 \u34920 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function getOwnerList() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const authKey = localStorage.getItem('API_KEY') || "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!authKey) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   alert("\uc0\u35831 \u36755 \u20837 API_KEY");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5               showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/listOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       method: 'POST',\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       headers: \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           "Content-Type": "application/json",\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           "Authorization": "Bearer " + authKey\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       if (data.code === 200) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           displayOwnerList(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \} else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u26174 \u31034 \u36710 \u36742 \u21015 \u34920 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function displayOwnerList(data) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const tbody = document.getElementById('ownerList');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               tbody.innerHTML = '';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               data.forEach(owner => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   const tr = document.createElement('tr');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   tr.innerHTML =\cf11 \strokec11 \\`\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td><a href="/?id=\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.id\}" target="_blank">\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.id\}</a></td>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td>\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.no\}</td>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td>\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.phone\}</td>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td>\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.notifyType\}</td>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td>\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.notifyToken.length>30?owner.notifyToken.substring(0,30)+"...":owner.notifyToken\}</td>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td>\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.isNotify?"\uc0\u24050 \u24320 \u21551 ":"\u26410 \u24320 \u21551 "\}</td>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td>\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.isCall?"\uc0\u24050 \u24320 \u21551 ":"\u26410 \u24320 \u21551 "\}</td>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   <td class="actions">\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <button class="notify-btn" onclick="notifyOwner('\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.id\}')">\uc0\u36890 \u30693 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <button class="edit-btn" onclick="showEditModal('\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.id\}', '\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.no\}', '\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.phone\}', '\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.notifyType\}', '\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.notifyToken\}', \cf11 \strokec11 \\$\cf5 \strokec5 \{owner.isNotify\}, \cf11 \strokec11 \\$\cf5 \strokec5 \{owner.isCall\})">\uc0\u32534 \u36753 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       <button class="delete-btn" onclick="deleteOwner('\cf11 \strokec11 \\$\cf5 \strokec5 \{owner.id\}')">\uc0\u21024 \u38500 </button>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   </td>\cf11 \strokec11 \\`\cf5 \strokec5 ;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   tbody.appendChild(tr);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5           // \uc0\u36890 \u30693 \u36710 \u36742 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function notifyOwner(id) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/notifyOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       method: 'POST',\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       headers: \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           'Content-Type': 'application/json'\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           id\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       if (data.code === 200) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \} else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5           // \uc0\u28155 \u21152 \u36710 \u36742 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function addOwner() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const id = document.getElementById('addId').value;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const no = document.getElementById('addNo').value;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const phone = document.getElementById('addPhone').value;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const notifyType = document.getElementById('addNotifyType').value;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const notifyToken = document.getElementById('addNotifyToken').value;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const isNotify = document.getElementById('addIsNotify').checked;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const isCall = document.getElementById('addIsCall').checked;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!id || !phone || !notifyType || !notifyToken) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   alert('\uc0\u35831 \u22635 \u20889 \u25152 \u26377 \u23383 \u27573 ');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5               if (!isNotify && !isCall ) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   alert('\uc0\u35831 \u36873 \u25321 \u36890 \u30693 \u26041 \u24335 ');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const authKey = localStorage.getItem('API_KEY') || "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!authKey) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   alert("\uc0\u35831 \u36755 \u20837 API_KEY");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5               showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/addOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       method: 'POST',\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       headers: \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           'Content-Type': 'application/json',\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           "Authorization": "Bearer " + authKey\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           id,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           no,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           phone,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           notifyType,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           notifyToken,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           isNotify,\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           isCall\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       if (data.code === 200) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           closeAddModal();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           getOwnerList();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \} else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u21024 \u38500 \u36710 \u36742 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function deleteOwner(id) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const authKey = localStorage.getItem('API_KEY') || "";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!authKey) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   alert("\uc0\u35831 \u36755 \u20837 API_KEY");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if (!confirm('\uc0\u30830 \u35748 \u21024 \u38500 \u35813 \u36710 \u36742 \u65311 ')) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               showLoading(true);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/deleteOwner", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       method: 'POST',\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       headers: \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           'Content-Type': 'application/json',\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           "Authorization": "Bearer " + authKey\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \},\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       body: JSON.stringify(\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           id\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       if (data.code === 200) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           getOwnerList();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \} else \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           alert(data.data);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       showLoading(false);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error("Error sending notification:", error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       alert("\uc0\u36890 \u30693 \u21457 \u36865 \u20986 \u38169 \u65292 \u35831 \u26816 \u26597 \u32593 \u32476 \u36830 \u25509 \u12290 ");\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           //\uc0\u33719 \u21462 \u36890 \u30693 \u28192 \u36947 \u21015 \u34920 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function notifyTypeList() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const notifyType = document.getElementById('addNotifyType');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               fetch("/api/notifyTypeList", \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       method: "POST",\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       headers: \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           "Content-Type": "application/json"\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(response => response.json())\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .then(data => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       if (data.code == 200) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           data.data.forEach(optionData => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               const optionElement = document.createElement('option');\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               optionElement.value = optionData.value;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               optionElement.textContent = optionData.text;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               optionElement.dataset.tip = optionData.tip; // \uc0\u23384 \u20648  tip \u20540 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               notifyType.appendChild(optionElement);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           if (notifyType.options.length > 0) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               addNotifyToken.placeholder = "\uc0\u35831 \u36755 \u20837 \u36890 \u30693 \u28192 \u36947 \u25152 \u38656 \u30340 \u21442 \u25968 \u26684 \u24335 \u22914 \u19979 \u65306 " + notifyType.options[0].dataset.tip;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           // \uc0\u28155 \u21152  change \u20107 \u20214 \u30417 \u21548 \u22120 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           notifyType.addEventListener('change', () => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               const selectedOption = notifyType.options[notifyType.selectedIndex];\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                               addNotifyToken.placeholder = "\uc0\u35831 \u36755 \u20837 \u36890 \u30693 \u28192 \u36947 \u25152 \u38656 \u30340 \u21442 \u25968 \u26684 \u24335 \u22914 \u19979 \u65306 " + selectedOption.dataset.tip;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                           \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \})\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   .catch(error => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                       console.error('Error fetching options:', error);\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u26174 \u31034 \u32534 \u36753 \u27169 \u24577 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function showEditModal(id, no, phone, notifyType, notifyToken, isNotify, isCall) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addId').value = id;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addNo').value = no;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addPhone').value = phone;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addNotifyType').value = notifyType;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addNotifyToken').value = notifyToken;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addIsNotify').checked = isNotify;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addIsCall').checked = isCall;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addModal').style.display = 'block';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u26174 \u31034 \u28155 \u21152 \u27169 \u24577 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function showAddModal() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addModal').style.display = 'block';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u20851 \u38381 \u28155 \u21152 \u27169 \u24577 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function closeAddModal() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addModal').style.display = 'none';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               clearAddForm();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u28165 \u31354 \u28155 \u21152 \u34920 \u21333 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           function clearAddForm() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addId').value = '';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addNo').value = '';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addPhone').value = '';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               //document.getElementById('addNotifyType').value = '';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addNotifyToken').value = '';\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addIsNotify').checked = false;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               document.getElementById('addIsCall').checked = false;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u39029 \u38754 \u21152 \u36733 \u26102 \u33719 \u21462 \u36710 \u36742 \u21015 \u34920 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // window.onload = function() \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           //    getOwnerList();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           document.addEventListener('DOMContentLoaded', () => \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               const apiKey = localStorage.getItem('API_KEY')||"";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               if(!apiKey)\{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   window.location.href="/login";\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5                   return;\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               \}\cf2 \cb1 \strokec2 \
\
\cf5 \cb3 \strokec5               getOwnerList();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5               notifyTypeList();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           \});\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \uc0\u28857 \u20987 \u27169 \u24577 \u26694 \u22806 \u37096 \u20851 \u38381 \u27169 \u24577 \u26694 \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // window.onclick = function (event) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           //     if (event.target == document.getElementById('addModal')) \{\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           //         closeAddModal();\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           //     \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5           // \}\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5       </script>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </body>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   \cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5   </html>`\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 new\cf2 \strokec2  \cf4 \strokec4 Response\cf2 \strokec2 (\cf8 \strokec8 htmlContent\cf6 \strokec6 ,\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       headers\cf6 \strokec6 :\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Content-Type'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 'text/html;charset=UTF-8'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Origin'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Headers'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 wxpusher\cf6 \strokec6 (\cf7 \strokec7 token\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 message\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 tokens\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 token\cf6 \strokec6 .\cf4 \strokec4 split\cf10 \strokec10 (\cf5 \strokec5 '|'\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 reqUrl\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 'https://wxpusher.zjiecode.com/api/send/message'\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 jsonBody\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10       appToken\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 `\cf6 \strokec6 $\{\cf8 \strokec8 tokens\cf5 \strokec5 [\cf7 \strokec7 0\cf5 \strokec5 ]\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       uids\cf6 \strokec6 :\cf10 \strokec10  [\cf5 \strokec5 `\cf6 \strokec6 $\{\cf8 \strokec8 tokens\cf5 \strokec5 [\cf7 \strokec7 1\cf5 \strokec5 ]\cf6 \strokec6 \}\cf5 \strokec5 `\cf10 \strokec10 ]\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       content\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 `\cf6 \strokec6 $\{\cf8 \strokec8 message\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       contentType\cf6 \strokec6 :\cf10 \strokec10  \cf7 \strokec7 1\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 response\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 postRequest\cf10 \strokec10 (\cf8 \strokec8 reqUrl\cf6 \strokec6 ,\cf10 \strokec10  \cf8 \strokec8 jsonBody\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 response\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 code\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 code\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf7 \strokec7 1000\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 sendSuccessMessage\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36890 \u30693 \u21457 \u36865 \u22833 \u36133 \u65292 \u35831 \u31245 \u21518 \u37325 \u35797 \u12290 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 bark\cf6 \strokec6 (\cf7 \strokec7 token\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 message\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 tokens\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 token\cf6 \strokec6 .\cf4 \strokec4 split\cf10 \strokec10 (\cf5 \strokec5 '|'\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 reqUrl\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 'https://xxxxxxxxxxx/push'\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 jsonBody\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10       \cf5 \strokec5 "body"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 message\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "title"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\uc0\u25386 \u36710 \u36890 \u30693 "\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "device_key"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 tokens\cf10 \strokec10 [\cf7 \strokec7 0\cf10 \strokec10 ] \cf8 \strokec8 ||\cf10 \strokec10  \cf5 \strokec5 ""\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "sound"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 tokens\cf10 \strokec10 [\cf7 \strokec7 1\cf10 \strokec10 ] \cf8 \strokec8 ||\cf10 \strokec10  \cf5 \strokec5 "multiwayinvitation"\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "group"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "\uc0\u25386 \u36710 \u36890 \u30693 "\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "call"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "1"\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "level"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "critical"\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "volume"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "2"\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 response\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 postRequest\cf10 \strokec10 (\cf8 \strokec8 reqUrl\cf6 \strokec6 ,\cf10 \strokec10  \cf8 \strokec8 jsonBody\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 response\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 code\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 code\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf7 \strokec7 200\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 sendSuccessMessage\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36890 \u30693 \u21457 \u36865 \u22833 \u36133 \u65292 \u35831 \u31245 \u21518 \u37325 \u35797 \u12290 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 feishu\cf6 \strokec6 (\cf7 \strokec7 token\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 message\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 reqUrl\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `https://open.feishu.cn/open-apis/bot/v2/hook/\cf6 \strokec6 $\{\cf8 \strokec8 token\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 jsonBody\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10       \cf5 \strokec5 "msg_type"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "text"\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "content"\cf6 \strokec6 :\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10           \cf5 \strokec5 "text"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 message\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 response\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 postRequest\cf10 \strokec10 (\cf8 \strokec8 reqUrl\cf6 \strokec6 ,\cf10 \strokec10  \cf8 \strokec8 jsonBody\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 response\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 code\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 code\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf7 \strokec7 0\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 sendSuccessMessage\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36890 \u30693 \u21457 \u36865 \u22833 \u36133 \u65292 \u35831 \u31245 \u21518 \u37325 \u35797 \u12290 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 weixin\cf6 \strokec6 (\cf7 \strokec7 token\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 message\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 reqUrl\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=\cf6 \strokec6 $\{\cf8 \strokec8 token\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 jsonBody\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10       \cf5 \strokec5 "msgtype"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "text"\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "text"\cf6 \strokec6 :\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10           \cf5 \strokec5 "content"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 message\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 response\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 postRequest\cf10 \strokec10 (\cf8 \strokec8 reqUrl\cf6 \strokec6 ,\cf10 \strokec10  \cf8 \strokec8 jsonBody\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 response\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 errcode\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 errcode\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf7 \strokec7 0\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 sendSuccessMessage\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36890 \u30693 \u21457 \u36865 \u22833 \u36133 \u65292 \u35831 \u31245 \u21518 \u37325 \u35797 \u12290 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 dingtalk\cf6 \strokec6 (\cf7 \strokec7 token\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 message\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 reqUrl\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf5 \strokec5 `https://oapi.dingtalk.com/robot/send?access_token=\cf6 \strokec6 $\{\cf8 \strokec8 token\cf6 \strokec6 \}\cf5 \strokec5 `\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 jsonBody\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10       \cf5 \strokec5 "msgtype"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 "text"\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf5 \strokec5 "text"\cf6 \strokec6 :\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10           \cf5 \strokec5 "content"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 message\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 response\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 postRequest\cf10 \strokec10 (\cf8 \strokec8 reqUrl\cf6 \strokec6 ,\cf10 \strokec10  \cf8 \strokec8 jsonBody\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 response\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 errcode\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 errcode\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf7 \strokec7 0\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 sendSuccessMessage\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36890 \u30693 \u21457 \u36865 \u22833 \u36133 \u65292 \u35831 \u31245 \u21518 \u37325 \u35797 \u12290 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 onebot\cf6 \strokec6 (\cf7 \strokec7 token\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 message\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 tokens\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf9 \strokec9 token\cf6 \strokec6 .\cf4 \strokec4 split\cf10 \strokec10 (\cf5 \strokec5 '|'\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 reqUrl\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 tokens\cf10 \strokec10 [\cf7 \strokec7 0\cf10 \strokec10 ]\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 access_token\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 tokens\cf10 \strokec10 [\cf7 \strokec7 1\cf10 \strokec10 ]\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 uid\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 tokens\cf10 \strokec10 [\cf7 \strokec7 2\cf10 \strokec10 ]\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 jsonBody\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10       \cf5 \strokec5 "message"\cf6 \strokec6 :\cf10 \strokec10  \cf8 \strokec8 message\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf9 \strokec9 reqUrl\cf6 \strokec6 .\cf4 \strokec4 includes\cf2 \strokec2 (\cf5 \strokec5 "send_private_msg"\cf2 \strokec2 )) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 jsonBody\cf2 \strokec2 [\cf5 \strokec5 "user_id"\cf2 \strokec2 ] \cf8 \strokec8 =\cf2 \strokec2  \cf8 \strokec8 uid\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 jsonBody\cf2 \strokec2 [\cf5 \strokec5 "group_id"\cf2 \strokec2 ] \cf8 \strokec8 =\cf2 \strokec2  \cf8 \strokec8 uid\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 headers\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf5 \strokec5 "Authorization"\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 `Bearer \cf6 \strokec6 $\{\cf8 \strokec8 access_token\cf6 \strokec6 \}\cf5 \strokec5 `\cf10 \strokec10  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 response\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 postRequest\cf10 \strokec10 (\cf8 \strokec8 reqUrl\cf6 \strokec6 ,\cf10 \strokec10  \cf8 \strokec8 jsonBody\cf6 \strokec6 ,\cf10 \strokec10  \cf8 \strokec8 headers\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 json\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf9 \strokec9 response\cf6 \strokec6 .\cf4 \strokec4 json\cf10 \strokec10 ()\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf6 \strokec6 \{\cf10 \strokec10  \cf9 \strokec9 retcode\cf10 \strokec10  \cf6 \strokec6 \}\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 json\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 retcode\cf2 \strokec2  \cf8 \strokec8 ==\cf2 \strokec2  \cf7 \strokec7 0\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 sendSuccessMessage\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "success"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 else\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 return\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \strokec2  code\cf6 \strokec6 :\cf2 \strokec2  \cf7 \strokec7 500\cf6 \strokec6 ,\cf2 \strokec2  data\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "\uc0\u36890 \u30693 \u21457 \u36865 \u22833 \u36133 \u65292 \u35831 \u31245 \u21518 \u37325 \u35797 \u12290 "\cf6 \strokec6 ,\cf2 \strokec2  message\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 "fail"\cf2 \strokec2  \cf6 \strokec6 \};\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 getResponse\cf6 \strokec6 (\cf7 \strokec7 resp\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 status\cf2 \strokec2  \cf8 \strokec8 =\cf2 \strokec2  \cf7 \strokec7 200\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 headers\cf2 \strokec2  \cf8 \strokec8 =\cf2 \strokec2  \cf6 \strokec6 \{\})\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 new\cf2 \strokec2  \cf4 \strokec4 Response\cf2 \strokec2 (\cf8 \strokec8 resp\cf6 \strokec6 ,\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       status\cf6 \strokec6 :\cf2 \strokec2  \cf8 \strokec8 status\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3       headers\cf6 \strokec6 :\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Content-Type'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 'application/json'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Origin'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 'Access-Control-Allow-Headers'\cf6 \strokec6 :\cf2 \strokec2  \cf5 \strokec5 '*'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cb3           \cf8 \strokec8 ...headers\cf2 \cb1 \strokec2 \
\cb3       \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 async\cf2 \strokec2  \cf8 \strokec8 function\cf2 \strokec2  \cf4 \strokec4 postRequest\cf6 \strokec6 (\cf7 \strokec7 reqUrl\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 jsonBody\cf6 \strokec6 ,\cf2 \strokec2  \cf7 \strokec7 headers\cf6 \strokec6 )\cf2 \strokec2  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 const\cf10 \strokec10  \cf9 \strokec9 response\cf10 \strokec10  \cf8 \strokec8 =\cf10 \strokec10  \cf8 \strokec8 await\cf10 \strokec10  \cf4 \strokec4 fetch\cf10 \strokec10 (\cf8 \strokec8 reqUrl\cf6 \strokec6 ,\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10       method\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 'POST'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       headers\cf6 \strokec6 :\cf10 \strokec10  \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10           \cf5 \strokec5 'Content-Type'\cf6 \strokec6 :\cf10 \strokec10  \cf5 \strokec5 'application/json'\cf6 \strokec6 ,\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10           \cf8 \strokec8 ...headers\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       \cf6 \strokec6 \},\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10       body\cf6 \strokec6 :\cf10 \strokec10  \cf9 \strokec9 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf10 \strokec10 (\cf8 \strokec8 jsonBody\cf10 \strokec10 )\cf2 \cb1 \strokec2 \
\cf10 \cb3 \strokec10   \cf6 \strokec6 \}\cf10 \strokec10 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \cf8 \strokec8 if\cf2 \strokec2  (\cf8 \strokec8 !\cf9 \strokec9 response\cf6 \strokec6 .\cf9 \strokec9 ok\cf2 \strokec2 ) \cf6 \strokec6 \{\cf2 \cb1 \strokec2 \
\cb3       \cf8 \strokec8 throw\cf2 \strokec2  \cf8 \strokec8 new\cf2 \strokec2  \cf4 \strokec4 Error\cf2 \strokec2 (\cf5 \strokec5 'Unexpected response '\cf2 \strokec2  \cf8 \strokec8 +\cf2 \strokec2  \cf9 \strokec9 response\cf6 \strokec6 .\cf9 \strokec9 status\cf2 \strokec2 )\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\cb3   \cf6 \strokec6 \}\cf2 \cb1 \strokec2 \
\cb3   \cf8 \strokec8 return\cf2 \strokec2  \cf8 \strokec8 response\cf6 \strokec6 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf2 \cb1 \strokec2 \
}