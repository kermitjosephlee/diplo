const mapString = (
	positions
) => `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg [
<!ENTITY Switzerland "219,376">
<!ENTITY Adriatic_Sea "296,441">
<!ENTITY Aegean_Sea "403,524">
<!ENTITY Albania "339,469">
<!ENTITY Ankara "500,460">	<!ENTITY scAnkara "482,469">
<!ENTITY Apulia "302,472">
<!ENTITY Armenia "576,456">
<!ENTITY Baltic_Sea "323,250">
<!ENTITY Barents_Sea "445,41">
<!ENTITY Belgium "197,317">	<!ENTITY scBelgium "186,305">
<!ENTITY Berlin "279,283">	<!ENTITY scBerlin "281,298">
<!ENTITY Black_Sea "484,420">
<!ENTITY Bohemia "289,336">
<!ENTITY Brest "125,334">	<!ENTITY scBrest "106,322">
<!ENTITY Budapest "353,378">	<!ENTITY scBudapest "326,376">
<!ENTITY Bulgaria "395,443">	<!ENTITY scBulgaria "377,444">
<!ENTITY Bulgaria__ec "410,440">
<!ENTITY Bulgaria__sc "399,462">
<!ENTITY Burgundy "191,360">
<!ENTITY Clyde "139,188">
<!ENTITY Constantinople "439,473">	<!ENTITY scConstantinople "429,460">
<!ENTITY Denmark "256,245">	<!ENTITY scDenmark "272,252">
<!ENTITY Eastern_Mediterranean "474,546">
<!ENTITY Edinburgh "157,210">	<!ENTITY scEdinburgh "154,219">
<!ENTITY English_Channel "119,307">
<!ENTITY Finland "385,143">
<!ENTITY Galicia "377,343">
<!ENTITY Gascony "137,388">
<!ENTITY Greece "366,515">	<!ENTITY scGreece "378,507">
<!ENTITY Gulf_of_Lyon "180,444">
<!ENTITY Gulf_of_Bothnia "348,199">
<!ENTITY Helgoland_Bight "226,252">
<!ENTITY Holland "205,297">	<!ENTITY scHolland "205,284">
<!ENTITY Ionian_Sea "324,540">
<!ENTITY Irish_Sea "90,276">
<!ENTITY Kiel "243,295">	<!ENTITY scKiel "254,278">
<!ENTITY Liverpool "142,241">	<!ENTITY scLiverpool "144,257">
<!ENTITY Livonia "382,245">
<!ENTITY London "162,281">	<!ENTITY scLondon "162,290">
<!ENTITY Marseilles "184,402">	<!ENTITY scMarseilles "186,417">
<!ENTITY Mid-Atlantic_Ocean "23,355">
<!ENTITY Moscow "505,226">	<!ENTITY scMoscow "481,234">
<!ENTITY Munich "243,347">	<!ENTITY scMunich "258,359">
<!ENTITY Naples "299,505">	<!ENTITY scNaples "278,469">
<!ENTITY North_Atlantic_Ocean "65,140">
<!ENTITY North_Africa "100,536">
<!ENTITY North_Sea "204,215">
<!ENTITY Norway "264,160">	<!ENTITY scNorway "270,187">
<!ENTITY Norwegian_Sea "220,90">
<!ENTITY Paris "162,346">	<!ENTITY scParis "173,334">
<!ENTITY Picardy "168,319">
<!ENTITY Piedmont "220,399">
<!ENTITY Portugal "34,417">	<!ENTITY scPortugal "15,434">
<!ENTITY Prussia "315,283">
<!ENTITY Rome "264,452">	<!ENTITY scRome "252,443">
<!ENTITY Ruhr "223,320">
<!ENTITY Rumania "415,405">	<!ENTITY scRumania "402,413">
<!ENTITY Serbia "351,438">	<!ENTITY scSerbia "343,419">
<!ENTITY Sevastopol "515,330">	<!ENTITY scSevastopol "483,396">
<!ENTITY Silesia "304,314">
<!ENTITY Skagerrak "260,212">
<!ENTITY Smyrna "490,505">	<!ENTITY scSmyrna "424,502">
<!ENTITY Spain "64,439">	<!ENTITY scSpain "80,432">
<!ENTITY Spain__nc "80,404">
<!ENTITY Spain__sc "52,475">
<!ENTITY St_Petersburg "500,140">	<!ENTITY scSt_Petersburg "418,187">
<!ENTITY St_Petersburg__nc "472,122">
<!ENTITY St_Petersburg__sc "418,205">
<!ENTITY Sweden "315,140">	<!ENTITY scSweden "323,196">
<!ENTITY Syria "570,520">
<!ENTITY Trieste "305,412">	<!ENTITY scTrieste "284,396">
<!ENTITY Tunis "212,542">	<!ENTITY scTunis "220,529">
<!ENTITY Tuscany "247,430">
<!ENTITY Tyrolia "277,378">
<!ENTITY Tyrrhenian_Sea "246,483">
<!ENTITY Ukraine "427,327">
<!ENTITY Venice "250,408">	<!ENTITY scVenice "261,397">
<!ENTITY Vienna "314,360">	<!ENTITY scVienna "301,363">
<!ENTITY Wales "125,285">
<!ENTITY Warsaw "361,315">	<!ENTITY scWarsaw "346,302">
<!ENTITY Western_Mediterranean "140,492">
<!ENTITY Yorkshire "161,254">
]>
<svg viewBox="0 0 610 560" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Diplomacy</title>
<desc>
Variant SVG coding 2006 by Martin Asal
Copyright: CC-BY-SA-3.0-DE  (http://creativecommons.org/licenses/by-sa/3.0/deed.de)
Created for Diplomap (http://www.games2relax.net/diplomap/)
</desc>

<defs>
<style type="text/css">
<![CDATA[
	.l, .Unowned, .undefined	{fill:#FFFFFF; stroke:black; stroke-linejoin:round}
	.w		{fill:#99CCFF; stroke:black; stroke-linejoin:round}
	.s		{fill:#222; stroke:black; stroke-linejoin:round}
	.summary 	{fill:#EEE; stroke:black; stroke-linejoin:round}

	text		{font-family:Courier,Helvetica,sans-serif; font-size:7px}

	.Austria	{fill:#FF0000; stroke:black}
	.England	{fill:#0000FF; stroke:black}
	.France 	{fill:#00FFFF; stroke:black}
	.Germany	{fill:#808080; stroke:black}
	.Italy  	{fill:#00FF00; stroke:black}
	.Russia 	{fill:#C300FF; stroke:black}
	.Turkey 	{fill:#FFFF00; stroke:black}

  .Austria_shade	{fill:#FFA1A1; stroke:black}
	.England_shade	{fill:#A1A1FF; stroke:black}
	.France_shade		{fill:#A1FFFF; stroke:black}
	.Germany_shade	{fill:#C7C7C7; stroke:black}
	.Italy_shade		{fill:#A1FFA1; stroke:black}
	.Russia_shade		{fill:#E9A1FF; stroke:black}
	.Turkey_shade		{fill:#FFFFA1; stroke:black}
]]>
</style>
</defs>

<g title="Norwegian Sea">
	<polygon class="w" points="362,33 357,39 343,44 324,54 320,64 310,75 309,84 303,86 292,111 277,132 269,134 264,142 258,141 236,154 198,154 171,181 171,197 158,193 152,194 154,188 161,185 162,181
		148,177 148,0 362,0"/>
	<text x="220" y="70">NWG</text>
</g>
<g title="North Sea">
	<path class="w" d="M171,197 L171,181 A27,27 0,0,1 198,154 L241,154 L241,224 L248,224 L245,237 L211,237 L211,301 L173,301 L165,293 L140,197Z"/>
	<text x="190" y="230">NTH</text>
</g>
<g title="Switzerland">
	<polygon class="s" points="209,363 208,367 194,382 197,385 203,379 207,386 213,387 221,385 227,390 229,385 243,388 245,384 241,378 234,374 234,366 232,363 225,362 222,365"/>
	<text x="215" y="378" fill="#FFF">Swi</text>
</g>
<g title="Adriatic Sea">
	<polygon class="w" points="322,480 297,456 300,453 290,453 278,443 272,424 260,417 261,401 270,398 276,399 275,403 278,410 282,401 286,402 289,418 306,436 331,454 331,477 335,480"/>
	<text x="308" y="460">ADR</text>
</g>
<g title="Aegean Sea">
	<polygon class="w" points="376,537 371,520 378,521 377,513 386,516 385,509 370,494 371,491 378,494 368,483 371,477 379,484 382,483 381,477 386,478 380,472 392,472 400,468 408,470 410,473 414,475
		410,482 409,487 417,486 417,489 420,495 417,498 417,507 423,510 427,524 435,523 435,530 416,549 412,547 387,546 383,544"/>
	<text x="392" y="510">AEG</text>
</g>
<g title="Albania">
	<polygon class="l" points="331,454 331,477 335,480 339,487 350,477 350,471 346,466 346,452 337,446 330,445"/>
	<text x="333" y="460">Alb</text>
</g>
<g title="Ankara">
	<polygon class="l" points="555,438 551,437 520,441 514,438 511,440 502,433 481,438 470,447 464,457 468,461 468,479 466,491 473,491 490,480 501,482 508,480 531,460 546,462 555,460 557,449"/> 
	<text x="510" y="455">Ank</text>
	<use xlink:href="#SC" transform="translate(&scAnkara;)"/>
</g>
<g title="Apulia">
	<polygon class="l" points="304,484 310,480 318,485 322,485 322,480 297,456 300,453 290,453 278,443 274,447 279,451 280,455 279,458 293,481"/>
	<text x="291" y="470">Apu</text>
</g>
<g title="Armenia">
	<polygon class="l" points="609,493 584,478 563,479 562,471 556,467 555,460 557,449 555,438 570,427 589,442 594,439 603,441 609,440"/>
	<text x="585" y="467">Arm</text>
</g>
<g title="Baltic Sea">
	<polygon class="w" points="266,255 271,260 278,254 277,250 280,248 279,243 282,253 289,254 294,245 305,244 312,229 311,220 359,220 349,229 347,243 347,248 348,254 344,262 337,264 334,273 328,274
		326,265 314,266 307,273 294,275 286,274 287,267 280,266 266,275 261,274 260,269 256,266 256,263 254,255"/>
	<text x="308" y="260">BAL</text>
</g>
<g title="Barents Sea">
	<polygon class="w" points="540 0 535,9 530,6 517,19 516,33 513,38 513,23 507,20 505,26 499,33 492,48 495,58 488,60 479,57 477,55 481,50 473,43 466,45 472,62 478,66 478,74 472,72 468,74 457,91
		469,100 467,106 462,109 444,101 442,110 447,115 454,119 452,122 434,118 426,103 426,94 414,88 412,83 445,84 457,79 459,66 453,61 417,47 405,49 401,45 397,48 391,47 395,41 394,38 384,33 382,40
		380,33 377,31 374,38 371,33 366,42 366,33 362,33 362,0"/>
	<text x="440" y="15">BAR</text>
</g>
<g title="Belgium">
	<polygon class="l" points="191,299 194,303 206,306 205,311 208,315 210,326 205,331 192,323 184,315 169,311 173,301"/>
	<text x="192" y="321">Bel</text>
	<use xlink:href="#SC" transform="translate(&scBelgium;)"/>
</g>
<g title="Berlin">
	<polygon class="l" points="294,275 286,274 287,267 280,266 266,275 266,283 262,287 264,293 261,296 263,310 288,305 296,300 297,296 292,290"/>
	<text x="272" y="292">Ber</text>
	<use xlink:href="#SC" transform="translate(&scBerlin;)"/>
</g>
<g title="Black Sea">
	<polygon class="w" points="440,458 430,455 426,450 422,441 425,427 429,426 430,423 432,409 439,404 438,397 446,378 459,375 461,377 459,379 465,383 476,381 478,383 472,385 468,392 477,396 477,401
		486,404 488,397 494,396 497,392 507,389 506,384 494,387 485,378 503,364 526,351 527,354 514,365 517,371 520,371 515,384 511,383 510,386 517,393 528,394 554,406 567,408 573,417 570,427 555,438
		551,437 520,441 514,438 511,440 502,433 481,438 470,447 464,457 442,460"/>
	<text x="500" y="418">BLA</text>
</g>
<g title="Bohemia">
	<polygon class="l" points="281,356 276,346 268,343 264,329 266,325 278,326 288,321 297,322 311,334 314,332 321,339 322,347 316,348 303,346 295,349 292,357"/>
	<text x="283" y="347">Boh</text>
</g>
<g title="Brest">
	<polygon class="l" points="150,319 144,318 142,312 136,310 136,326 124,323 122,318 102,317 100,322 103,328 109,329 123,344 122,350 123,357 128,363 146,365 146,337 148,329"/>
	<text x="130" y="345">Bre</text>
	<use xlink:href="#SC" transform="translate(&scBrest;)"/>
</g>
<g title="Budapest">
	<polygon class="l" points="394,376 395,382 401,385 406,396 401,402 387,402 367,406 365,412 360,413 342,410 338,412 335,410 332,410 323,408 321,398 311,394 308,383 311,375 322,370 335,354 337,350
		350,347 360,351 368,353 377,360 378,363 384,365"/>
	<text x="350" y="390">Bud</text>
	<use xlink:href="#SC" transform="translate(&scBudapest;)"/>
</g>
<g title="Bulgaria (ec)">
	<polyline class="l" points="413,464 412,454 420,451 426,450 422,441 425,427 429,426 430,423 422,420 410,420 404,422 398,427 390,425 382,427 375,423 370,425 367,421 365,425 368,433 371,438"/>
	<text x="395" y="443">Bul</text>
</g>
<g title="Bulgaria (sc)">
	<polyline class="l" points="371,438 366,439 371,456 365,461 369,464 376,464 388,460 392,472 400,468 408,470 413,464 412,454"/>
	<use xlink:href="#SC" transform="translate(&scBulgaria;)"/>
</g>
<g title="Burgundy">
	<polygon class="l" points="192,323 205,331 204,338 211,346 213,352 209,363 208,367 194,382 178,381 178,390 173,396 168,395 163,387 165,383 158,380 156,374 165,365 185,344 188,332"/>
	<text x="185" y="371">Bur</text>
</g>
<g title="Clyde">
	<polygon class="l" points="138,214 130,208 129,197 139,189 140,182 148,177 162,181 161,185 154,188 152,194 146,200 144,213"/>
	<text x="133" y="201">Cly</text>
</g>
<g title="Constantinople">
	<polygon class="l" points="408,470 410,473 414,475 410,482 409,487 417,486 417,489 423,487 432,493 452,495 466,491 468,479 468,461 464,457 442,460 440,458 430,455 426,450 420,451 412,454 413,464"/>
	<polygon class="w" points="414,475 421,467 435,463 440,458 442,460 439,463 448,464 425,475"/>
	<text x="435" y="483">Con</text>
	<use xlink:href="#SC" transform="translate(&scConstantinople;)"/>
</g>
<g title="Denmark">
	<polygon class="l" points="279,243 275,242 269,243 266,240 267,234 266,221 263,223 248,224 245,237 243,247 244,254 254,255 266,255 271,260 278,254 277,250 280,248 "/>
	<polygon class="w" points="269,243 268,246 263,247 266,255 254,255 257,247 266,240"/>
	<text x="250" y="235">Den</text>
	<use xlink:href="#SC" transform="translate(&scDenmark;)"/>
</g>
<g title="Eastern Mediterranean">
	<polygon class="w" points="435,530 441,526 447,528 453,534 464,531 466,521 475,520 485,528 491,530 505,526 511,514 520,517 527,508 530,509 525,518 526,530 532,535 528,559 400,559 400,554 414,552 416,549"/>
	<text x="455" y="550">EAS</text>
</g>
<g title="Edinburgh">
	<polygon class="l" points="152,194 158,193 171,197 170,202 165,210 158,214 151,215 157,216 161,218 163,226 155,228 145,217 144,213 146,200"/>
	<text x="152" y="202">Edi</text>
	<use xlink:href="#SC" transform="translate(&scEdinburgh;)"/>
</g>
<g title="English Channel">
	<polygon class="w" points="173,301 169,311 153,315 155,320 150,319 144,318 142,312 136,310 136,326 124,323 122,318 102,317 88,303 100,291 110,292 120,295 124,291 134,294 147,295 160,298 168,296"/>
	<text x="135" y="306">ENG</text>
</g>
<g title="Finland">
	<polygon class="l" points="362,107 368,108 372,120 366,121 359,136 345,151 347,160 350,165 348,178 349,184 357,186 365,191 384,185 402,177 412,161 410,152 414,147 410,130 402,118 401,110 392,92
		393,73 387,68 388,61 386,58 388,54 379,48 370,49 369,61 355,62 346,54 342,61 356,71"/>
	<text x="375" y="160">Fin</text>
</g>
<g title="Galicia">
	<polygon class="l" points="333,330 341,330 344,332 353,327 356,323 361,324 367,329 374,327 379,324 383,327 385,332 399,338 404,354 403,360 404,371 394,376 384,365 378,363 377,360 368,353 360,351
		350,347 337,350 329,346 322,347 321,339 322,347 321,339 325,340 329,338"/>
	<text x="355" y="343">Gal</text>
</g>
<g title="Gascony">
	<polygon class="l" points="128,363 121,382 122,384 112,399 113,407 123,412 134,417 135,414 142,417 149,403 157,397 168,395 163,387 165,383 158,380 156,374 149,372 146,365"/>
	<text x="130" y="400">Gas</text>
</g>
<g title="Greece">
	<polygon class="l" points="339,487 346,498 350,498 347,500 352,508 367,507 371,511 355,510 350,514 357,521 359,533 360,528 367,536 368,531 376,537 371,520 378,521 377,513 386,516 385,509 370,494
		371,491 378,494 368,483 371,477 379,484 382,483 381,477 386,478 380,472 392,472 388,460 376,464 369,464 361,467 356,471 350,471 350,477"/>
	<text x="352" y="490">Gre</text>
	<use xlink:href="#SC" transform="translate(&scGreece;)"/>
</g>
<g title="Gulf of Lyon">
	<polygon class="w" points="115,469 110,461 124,444 131,439 146,438 157,432 158,425 158,418 169,412 176,417 188,422 198,421 211,416 222,410 233,415 238,431 224,431 221,434 211,436 213,451 218,454
		218,458 214,461 206,462 205,466 154,466 148,463 142,469"/>
	<text x="170" y="457">LYO</text>
</g>
<g title="Gulf of Bothnia">
	<polygon class="w" points="311,220 314,209 322,206 328,203 331,193 326,183 320,182 321,161 330,146 343,138 351,128 347,121 349,112 355,104 362,107 368,108 372,120 366,121 359,136 345,151 347,160
		350,165 348,178 349,184 357,186 365,191 384,185 402,177 403,183 411,184 414,187 408,187 400,192 399,197 387,196 371,198 369,202 365,204 368,210 372,213 373,221 377,227 373,229 366,228 359,220"/>
	<text x="328" y="175">BOT</text>
</g>
<g title="Helgoland Bight">
	<polygon class="w" points="245,237 243,247 244,254 243,257 245,263 244,270 244,273 235,277 234,274 230,273 226,275 211,274 211,237"/>
	<text x="220" y="265">HEL</text>
</g>
<g title="Holland">
	<polygon class="l" points="226,275 227,280 225,292 220,298 215,297 213,302 210,313 208,315 205,311 206,306 194,303 191,299 198,289 205,276 205,279 207,279 211,274"/>
	<text x="210" y="290">Hol</text>
	<use xlink:href="#SC" transform="translate(&scHolland;)"/>
</g>
<g title="Ionian Sea">
	<polygon class="w" points="289,511 290,514 295,515 308,500 311,491 304,484 310,480 318,485 322,485 322,480 335,480 339,487 346,498 350,498 347,500 352,508 367,507 371,511 355,510 350,514 357,521
		359,533 360,528 367,536 368,531 376,537 383,544 380,547 383,550 400,554 400,559 232,559 234,551 232,544 225,535 231,531 236,524 247,513 258,519 273,531 281,532 282,521 285,513 285,511"/>
	<text x="315" y="520">ION</text>
</g>
<g title="Irish Sea">
	<polygon class="w" points="100,291 112,287 122,281 130,282 127,276 119,272 116,272 115,265 128,262 126,256 121,257 132,250 135,250 139,240 136,229 130,227 120,227 110,232 109,246 98,259 87,257
		70,261 58,273 88,303"/>
	<text x="95" y="270">IRI</text>
</g>
<g title="Kiel">
	<polygon class="l" points="244,254 243,257 245,263 244,270 244,273 235,277 234,274 230,273 226,275 227,280 225,292 220,298 215,297 213,302 232,308 241,316 243,322 263,310 261,296 264,293
		262,287 266,283 266,275 261,274 260,269 256,266 256,263 254,255"/>
	<polygon class="w" points="244,270 244,273 256,266 256,263 "/>
	<text x="237" y="285">Kie</text>
	<use xlink:href="#SC" transform="translate(&scKiel;)"/>
</g>
<g title="Liverpool">
	<polygon class="l" points="128,262 126,256 121,257 132,250 135,250 139,240 136,229 130,227 130,223 138,217 138,214 144,213 145,217 155,228 155,239 151,248 150,264 143,262"/>
	<text x="138" y="230">Lvp</text>
	<use xlink:href="#SC" transform="translate(&scLiverpool;)"/>
</g>
<g title="Livonia">
	<polygon class="l" points="369,202 365,204 368,210 372,213 373,221 377,227 373,229 366,228 359,220 349,229 347,243 354,251 356,261 362,260 367,265 365,281 372,283 379,290 389,285 392,278
		404,275 405,239 409,228 405,217 394,205 382,206 372,205"/>
	<text x="380" y="260">Lvn</text>
</g>
<g title="London">
	<polygon class="l" points="166,269 168,270 171,268 177,270 178,274 176,283 165,293 172,294 168,296 160,298 147,295 145,281 150,277 153,271"/>
	<text x="160" y="280">Lon</text>
	<use xlink:href="#SC" transform="translate(&scLondon;)"/>
</g>
<g title="Marseilles">
	<polygon class="l" points="142,417 149,403 157,397 168,395 173,396 178,390 178,381 194,382 197,385 203,379 207,386 204,390 207,396 201,399 204,402 203,410 211,416 198,421 188,422 176,417
		169,412 158,418 158,425 154,427"/>
	<text x="173" y="412">Mar</text>
	<use xlink:href="#SC" transform="translate(&scMarseilles;)"/>
</g>
<g title="Mid-Atlantic_Ocean">
	<polygon class="w" points="102,317 100,322 103,328 109,329 123,344 122,350 123,357 128,363 121,382 122,384 112,399 101,396 96,397 72,384 59,381 54,375 48,374 46,378 39,375 33,381 35,384 32,396
		30,406 17,427 14,427 10,433 13,440 15,441 12,450 13,454 8,462 19,469 27,468 33,475 34,484 37,490 37,495 33,496 17,518 0,520 0,273 58,273"/>
	<text x="50" y="355">MAO</text>
</g>
<g title="Moscow">
	<polygon class="l" points="609,117 598,132 573,143 564,159 534,164 515,169 489,184 476,183 458,194 456,207 457,210 451,213 447,209 439,211 428,225 421,229 409,228 405,239 404,275 392,278
		389,285 379,290 386,309 390,306 456,292 468,295 477,289 494,295 505,280 516,286 526,287 533,283 549,284 554,304 564,305 569,321 597,330 609,330"/>
	<text x="460" y="265">Mos</text>
	<use xlink:href="#SC" transform="translate(&scMoscow;)"/>
</g>
<g title="Munich">
	<polygon class="l" points="234,366 243,370 246,369 250,371 267,368 271,370 269,362 275,362 281,356 276,346 268,343 264,329 266,325 278,326 288,321 284,314 288,305 263,310 243,322 237,322
		219,344 211,346 213,352 209,363 222,365 225,362 232,363"/>
	<text x="235" y="360">Mun</text>
	<use xlink:href="#SC" transform="translate(&scMunich;)"/>
</g>
<g title="Naples">
	<polygon class="l" points="271,464 276,474 290,487 294,502 289,511 290,514 295,515 308,500 311,491 304,484 293,481 279,458"/>
	<text x="293" y="493">Nap</text>
	<use xlink:href="#SC" transform="translate(&scNaples;)"/>
</g>
<g title="North Atlantic Ocean">
	<polygon class="w" points="70,261 64,250 67,242 71,245 81,234 74,228 80,225 78,218 82,217 89,220 94,220 95,218 94,216 97,216 101,212 110,212 119,217 120,227 130,227 130,223 138,217 138,214
		130,208 129,197 139,189 140,182 148,177 148,100 0,100 0,273 58,273"/>
	<text x="65" y="160">NAO</text>
</g>
<g title="North Africa">
	<polygon class="l" points="203,520 179,515 169,518 150,511 117,509 106,511 99,515 89,512 84,518 79,520 68,516 68,511 64,514 46,509 42,502 41,494 37,495 33,496 17,518 0,520 0,559 195,559 197,527"/>
	<text x="130" y="536">Naf</text>
</g>
<g title="Norway">
	<polygon class="l" points="397,48 391,47 395,41 394,38 384,33 382,40 380,33 377,31 374,38 371,33 366,42 366,33 362,33 357,39 343,44 324,54 320,64 310,75 309,84 303,86 292,111 277,132 269,134
		264,142 258,141 236,154 237,160 233,167 231,180 233,186 229,192 231,201 241,209 246,210 266,201 270,193 275,203 279,204 287,177 285,170 290,164 292,133 301,132 300,126 309,115 308,104 311,101
		324,71 332,74 330,64 341,65 342,61 346,54 355,62 369,61 370,49 379,48 388,54 386,58 388,61"/>
	<text x="250" y="175">Nwy</text>
	<use xlink:href="#SC" transform="translate(&scNorway;)"/>
</g>
<g title="Paris">
	<polygon class="l" points="146,365 149,372 156,374 165,365 185,344 188,332 172,328 165,331 159,331 148,329 146,337"/>
	<text x="155" y="358">Par</text>
	<use xlink:href="#SC" transform="translate(&scParis;)"/>
</g>
<g title="Picardy">
	<polygon class="l" points="169,311 153,315 155,320 150,319 148,329 159,331 165,331 172,328 188,332 192,323 184,315"/>
	<text x="168" y="326">Pic</text>
</g>
<g title="Piedmont">
	<polygon class="l" points="207,386 204,390 207,396 201,399 204,402 203,410 211,416 222,410 233,415 236,411 233,404 246,392 243,388 229,385 227,390 221,385 213,387"/>
	<text x="215" y="408">Pie</text>
</g>
<g title="Portugal">
	<polygon class="l" points="32,396 30,406 17,427 14,427 10,433 13,440 15,441 12,450 13,454 8,462 19,469 27,468 36,457 34,447 40,441 37,431 42,432 52,412 61,411 62,407 55,400 42,399 43,395"/>
	<text x="22" y="440">Por</text>
	<use xlink:href="#SC" transform="translate(&scPortugal;)"/>
</g>
<g title="Prussia">
	<polygon class="l" points="347,243 347,248 348,254 344,262 337,264 334,273 328,274 326,265 314,266 307,273 294,275 292,290 297,296 296,300 320,303 324,299 326,292 341,287 345,289 359,286
		365,281 367,265 362,260 356,261 354,251"/>
	<text x="335" y="283">Pru</text>
</g>
<g title="Rome">
	<polygon class="l" points="247,442 248,447 256,458 271,464 279,458 280,455 279,451 274,447 263,434 250,438"/>
	<text x="257" y="452">Rom</text>
	<use xlink:href="#SC" transform="translate(&scRome;)"/>
</g>
<g title="Ruhr">
	<polygon class="l" points="213,302 210,313 208,315 210,326 205,331 204,338 211,346 219,344 237,322 243,322 241,316 232,308"/>
	<text x="215" y="330">Ruh</text>
</g>
<g title="Rumania">
	<polygon class="l" points="403,360 404,371 394,376 395,382 401,385 406,396 401,402 387,402 367,406 365,412 367,421 370,425 375,423 382,427 390,425 398,427 404,422 410,420 422,420 430,423 432,409
		439,404 438,397 427,399 422,382 423,376 414,372 411,361"/>
	<text x="410" y="415">Rum</text>
	<use xlink:href="#SC" transform="translate(&scRumania;)"/>
</g>
<g title="Serbia">
	<polygon class="l" points="365,412 360,413 342,410 338,412 335,410 332,410 330,416 331,424 327,429 330,437 337,446 346,452 346,466 350,471 356,471 361,467 369,464 365,461 371,456 366,439 371,438
		368,433 365,425 367,421"/>
	<text x="350" y="450">Ser</text>
	<use xlink:href="#SC" transform="translate(&scSerbia;)"/>
</g>
<g title="Sevastopol">
	<polygon class="l" points="438,397 446,378 459,375 461,377 459,379 465,383 476,381 478,383 472,385 468,392 477,396 477,401 486,404 488,397 494,396 497,392 507,389 506,384 494,387 485,378 503,364
		526,351 527,354 514,365 517,371 520,371 515,384 511,383 510,386 517,393 528,394 554,406 567,408 573,417 570,427 589,442 594,439 603,441 609,440 609,330 597,330 569,321 564,305 554,304 549,284
		533,283 526,287 516,286 505,280 494,295 477,289 468,295 470,303 466,307 460,345 445,350 434,360 432,372 423,376 422,382 427,399"/>
	<text x="540" y="350">Sev</text>
	<use xlink:href="#SC" transform="translate(&scSevastopol;)"/>
</g>
<g title="Silesia">
	<polygon class="l" points="288,321 297,322 311,334 314,332 321,339 325,340 329,338 333,330 326,327 323,322 320,303 296,300 288,305 284,314"/>
	<text x="304" y="325">Sil</text>
</g>
<g title="Skagerrak">
	<polygon class="w" points="241,209 246,210 266,201 270,193 275,203 277,218 276,224 282,236 279,240 279,243 275,242 269,243 266,240 267,234 266,221 263,223 248,224 241,224"/>
	<text x="255" y="220">SKA</text>
</g>
<g title="Smyrna">
	<polygon class="l" points="417,489 420,495 417,498 417,507 423,510 427,524 435,523 435,530 441,526 447,528 453,534 464,531 466,521 475,520 485,528 491,530 505,526 511,514 520,517 527,508 530,509
		536,494 545,486 555,484 563,479 562,471 556,467 555,460 546,462 531,460 508,480 501,482 490,480 473,491 466,491 452,495 432,493 423,487"/>
	<text x="460" y="510">Smy</text>
	<use xlink:href="#SC" transform="translate(&scSmyrna;)"/>
</g>
<g title="Spain (nc)">
	<polyline class="l" points="134,417 123,412 113,407 112,399 101,396 96,397 72,384 59,381 54,375 48,374 46,378 39,375 33,381 35,384 32,396 43,395 42,399 55,400 62,407 61,411 52,412 42,432 37,431 40,441"/>
</g>
<g title="Spain (sc)">
	<polyline class="l" points="40,441 34,447 36,457 27,468 33,475 34,484 37,490 47,488 52,489 60,486 78,491 83,494 86,485 90,483 98,484 107,474 113,473 115,469 110,461 124,444 131,439 146,438
		157,432 158,425 154,427 142,417 135,414 134,417 123,412"/>
	<text x="85" y="450">Spa</text>
	<use xlink:href="#SC" transform="translate(&scSpain;)"/>
</g>
<g title="St Petersburg (nc)">
	<polyline class="l" points="534,164 564,159 573,143 598,132 609,117 609,0 540 0 535,9 530,6 517,19 516,33 513,38 513,23 507,20 505,26 499,33 492,48 495,58 488,60 479,57 477,55 481,50 473,43 466,45 472,62
		478,66 478,74 472,72 468,74 457,91 469,100 467,106 462,109 444,101 442,110 447,115 454,119 452,122 434,118 426,103 426,94 414,88 412,83 445,84 457,79 459,66 453,61 417,47 405,49 401,45 397,48
		388,61 387,68 393,73 392,92 401,110 402,118 410,130 414,147"/>
	<text x="460" y="149">Stp</text>
</g>
<g title="St Petersburg (sc)">
	<polyline class="l" points="414,147 410,152 412,161 402,177 403,183 411,184 414,187 408,187 400,192 399,197 387,196 371,198 369,202 372,205 382,206 394,205 405,217 409,228 421,229 428,225 439,211
		447,209 451,213 457,210 456,207 458,194 476,183 489,184 515,169 534,164 564,159"/>
	<use xlink:href="#SC" transform="translate(&scSt_Petersburg;)"/>
</g>
<g title="Sweden">
	<polygon class="l" points="275,203 277,218 276,224 282,236 279,240 279,243 282,253 289,254 294,245 305,244 312,229 311,220 314,209 322,206 328,203 331,193 326,183 320,182 321,161 330,146 343,138
		351,128 347,121 349,112 355,104 362,107 356,71 342,61 341,65 330,64 332,74 324,71 311,101 308,104 309,115 300,126 301,132 292,133 290,164 285,170 287,177 279,204"/>
	<text x="300" y="170">Swe</text>
	<use xlink:href="#SC" transform="translate(&scSweden;)"/>
</g>
<g title="Syria">
	<polygon class="l" points="530,509 536,494 545,486 555,484 563,479 584,478 609,493 609,559 528,559 532,535 526,530 525,518"/>
	<text x="570" y="535">Syr</text>
</g>
<g title="Trieste">
	<polygon class="l" points="276,399 275,403 278,410 282,401 286,402 289,418 306,436 331,454 330,445 337,446 330,437 327,429 331,424 330,416 332,410 323,408 321,398 311,394 308,383 299,385 294,380
		289,385 276,386 279,389"/>
	<text x="305" y="425">Tri</text>
	<use xlink:href="#SC" transform="translate(&scTrieste;)"/>
</g>
<g title="Tunis">
	<polygon class="l" points="232,559 234,551 232,544 225,535 231,531 236,524 233,523 224,527 223,518 218,516 212,517 208,521 203,520 197,527 195,559"/>
	<text x="210" y="555">Tun</text>
	<use xlink:href="#SC" transform="translate(&scTunis;)"/>
</g>
<g title="Tuscany">
	<polygon class="l" points="233,415 238,431 247,442 250,438 263,434 253,418 246,416 240,415 236,411"/>
	<text x="240" y="425">Tus</text>
</g>
<g title="Tyrolia">
	<polygon class="l" points="234,366 243,370 246,369 250,371 267,368 271,370 269,362 275,362 281,356 292,357 295,362 294,380 289,385 276,386 268,385 259,388 255,394 250,397 246,392 243,388 245,384
		241,378 234,374"/>
	<text x="255" y="380">Tyr</text>
</g>
<g title="Tyrrhenian Sea">
	<polygon class="w" points="238,431 247,442 248,447 256,458 271,464 276,474 290,487 294,502 289,511 285,511 285,508 276,510 263,510 257,507 252,508 247,513 236,524 233,523 224,527 223,518
		218,516 218,490 220,490 224,468 222,458 218,458 218,454 223,450 225,444 225,436 224,431"/>
	<text x="245" y="495">TYS</text>
</g>
<g title="Ukraine">
	<polygon class="l" points="383,327 385,332 399,338 404,354 403,360 411,361 414,372 423,376 432,372 434,360 445,350 460,345 466,307 470,303 468,295 456,292 390,306 386,309"/>
	<text x="420" y="340">Ukr</text>
</g>
<g title="Venice">
	<polygon class="l" points="278,443 272,424 260,417 261,401 270,398 276,399 279,389 276,386 268,385 259,388 255,394 250,397 246,392 233,404 236,411 240,415 246,416 253,418 263,434 274,447"/>
	<text x="245" y="407">Ven</text>
	<use xlink:href="#SC" transform="translate(&scVenice;)"/>
</g>
<g title="Vienna">
	<polygon class="l" points="292,357 295,349 303,346 316,348 322,347 329,346 337,350 335,354 322,370 311,375 308,383 299,385 294,380 295,362"/>
	<text x="307" y="370">Vie</text>
	<use xlink:href="#SC" transform="translate(&scVienna;)"/>
</g>
<g title="Wales">
	<polygon class="l" points="100,291 112,287 122,281 130,282 127,276 119,272 116,272 115,265 128,262 143,262 150,264 153,271 150,277 145,281 147,295 134,294 124,291 120,295 110,292"/>
	<text x="130" y="275">Wal</text>
</g>
<g title="Warsaw">
	<polygon class="l" points="333,330 326,327 323,322 320,303 324,299 326,292 341,287 345,289 359,286 365,281 372,283 379,290 386,309 383,327 379,324 374,327 367,329 361,324 356,323 353,327
		344,332 341,330"/>
	<text x="355" y="304">War</text>
	<use xlink:href="#SC" transform="translate(&scWarsaw;)"/>
</g>
<g title="Western Mediterranean">
	<polygon class="w" points="37,490 47,488 52,489 60,486 78,491 83,494 86,485 90,483 98,484 107,474 113,473 115,469 142,469 150,471 154,466 205,466 206,476 204,485 208,492 212,492 217,489 218,490
		218,516 212,517 208,521 203,520 179,515 169,518 150,511 117,509 106,511 99,515 89,512 84,518 79,520 68,516 68,511 64,514 46,509 42,502 41,494 37,495"/>
	<text x="160" y="491">WES</text>
</g>
<g title="Yorkshire">
	<polygon class="l" points="163,226 163,239 168,246 170,252 169,265 166,269 153,271 150,264 151,248 155,239 155,228"/>
	<text x="155" y="254">Yor</text>
</g><defs>

<g id="A">
	<path d="M9,-6 L2,0 M9,6 L0,0"/>
	<path d="M-11,-6 v4 h17 a2,2 0,0 0 0,-4z"/>
	<circle r="6"/>
</g>
<g id="F">
	<polygon points="-2,-3 10,-3 -2,-13"/>
	<polygon points="-12,-1 -6,5 6,5 12,-1"/>
</g>
<g id="sc"> <!-- colored SC -->
	<circle r="4"/>
</g>
<use id="SC" xlink:href="#sc" class="Unowned"/>
</defs>

${positions}

</svg>
`;

const remainingString = `
<g title="Budapest"><use xlink:href="#sc" class="Austria" transform="translate(&scBudapest;)"/></g>
<g title="Trieste"><use xlink:href="#sc" class="Austria" transform="translate(&scTrieste;)"/></g>
<g title="Vienna"><use xlink:href="#sc" class="Austria" transform="translate(&scVienna;)"/></g>
<g title="Edinburgh"><use xlink:href="#sc" class="England" transform="translate(&scEdinburgh;)"/></g>
<g title="Liverpool"><use xlink:href="#sc" class="England" transform="translate(&scLiverpool;)"/></g>
<g title="London"><use xlink:href="#sc" class="England" transform="translate(&scLondon;)"/></g>
<g title="Brest"><use xlink:href="#sc" class="France" transform="translate(&scBrest;)"/></g>
<g title="Marseilles"><use xlink:href="#sc" class="France" transform="translate(&scMarseilles;)"/></g>
<g title="Paris"><use xlink:href="#sc" class="France" transform="translate(&scParis;)"/></g>
<g title="Berlin"><use xlink:href="#sc" class="Germany" transform="translate(&scBerlin;)"/></g>
<g title="Kiel"><use xlink:href="#sc" class="Germany" transform="translate(&scKiel;)"/></g>
<g title="Munich"><use xlink:href="#sc" class="Germany" transform="translate(&scMunich;)"/></g>
<g title="Naples"><use xlink:href="#sc" class="Italy" transform="translate(&scNaples;)"/></g>
<g title="Rome"><use xlink:href="#sc" class="Italy" transform="translate(&scRome;)"/></g>
<g title="Venice"><use xlink:href="#sc" class="Italy" transform="translate(&scVenice;)"/></g>
<g title="Moscow"><use xlink:href="#sc" class="Russia" transform="translate(&scMoscow;)"/></g>
<g title="Sevastopol"><use xlink:href="#sc" class="Russia" transform="translate(&scSevastopol;)"/></g>
<g title="St Petersburg"><use xlink:href="#sc" class="Russia" transform="translate(&scSt_Petersburg;)"/></g>
<g title="Warsaw"><use xlink:href="#sc" class="Russia" transform="translate(&scWarsaw;)"/></g>
<g title="Ankara"><use xlink:href="#sc" class="Turkey" transform="translate(&scAnkara;)"/></g>
<g title="Constantinople"><use xlink:href="#sc" class="Turkey" transform="translate(&scConstantinople;)"/></g>
<g title="Smyrna"><use xlink:href="#sc" class="Turkey" transform="translate(&scSmyrna;)"/></g>
<g title="Spain"><use xlink:href="#sc" id="Spain" class="England" transform="translate(&scSpain;)"/></g>
<g title="Portugal"><use xlink:href="#sc" id="Portugal" class="France" transform="translate(&scPortugal;)"/></g>

<g title="Vienna"><use xlink:href="#A" id="Vienna" class="Austria" transform="translate(&Vienna;)"/></g>
<g title="Budapest"><use xlink:href="#A" id="Budapest" class="Austria" transform="translate(&Budapest;)"/></g>
<g title="Trieste"><use xlink:href="#F" id="Trieste" class="Austria" transform="translate(&Trieste;)"/></g>
<g title="London"><use xlink:href="#F" id="London" class="England" transform="translate(&London;)"/></g>
<g title="Edinburgh"><use xlink:href="#F" id="Edinburgh" class="England" transform="translate(&Edinburgh;)"/></g>
<g title="Liverpool"><use xlink:href="#A" id="Liverpool" class="England" transform="translate(&Liverpool;)"/></g>
<g title="Paris"><use xlink:href="#A" id="Paris" class="France" transform="translate(&Paris;)"/></g>
<g title="Marseilles"><use xlink:href="#A" id="Marseilles" class="France" transform="translate(&Marseilles;)"/></g>
<g title="Brest"><use xlink:href="#F" id="Brest" class="France" transform="translate(&Brest;)"/></g>
<g title="Berlin"><use xlink:href="#A" id="Berlin" class="Germany" transform="translate(&Berlin;)"/></g>
<g title="Munich"><use xlink:href="#A" id="Munich" class="Germany" transform="translate(&Munich;)"/></g>
<g title="Kiel"><use xlink:href="#F" id="Kiel" class="Germany" transform="translate(&Kiel;)"/></g>
<g title="Rome"><use xlink:href="#A" id="Rome" class="Italy" transform="translate(&Rome;)"/></g>
<g title="Venice"><use xlink:href="#A" id="Venice" class="Italy" transform="translate(&Venice;)"/></g>
<g title="Naples"><use xlink:href="#F" id="Naples" class="Italy" transform="translate(&Naples;)"/></g>
<g title="Moscow"><use xlink:href="#A" id="Moscow" class="Russia" transform="translate(&Moscow;)"/></g>
<g title="Warsaw"><use xlink:href="#A" id="Warsaw" class="Russia" transform="translate(&Warsaw;)"/></g>
<g title="St Petersburg (sc)"><use xlink:href="#F" id="St_Petersburg" class="Russia" transform="translate(&St_Petersburg__sc;)"/></g>
<g title="Sevastopol"><use xlink:href="#F" id="Sevastopol" class="Russia" transform="translate(&Sevastopol;)"/></g>
<g title="Constantinople"><use xlink:href="#A" id="Constantinople" class="Turkey" transform="translate(&Constantinople;)"/></g>
<g title="Smyrna"><use xlink:href="#A" id="Smyrna" class="Turkey" transform="translate(&Smyrna;)"/></g>
<g title="Ankara"><use xlink:href="#F" id="Ankara" class="Turkey" transform="translate(&Ankara;)"/></g>
<g title="Spain"><use xlink:href="#A" id="Spain" class="England" transform="translate(&Spain;)"/></g>
<g title="Portugal"><use xlink:href="#A" id="Portugal" class="France" transform="translate(&Portugal;)"/></g>

</svg>`;

exports.mapString = mapString;
