const qs=(s,p=document)=>p.querySelector(s), qsa=(s,p=document)=>[...p.querySelectorAll(s)];
const store={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
const toast=(msg)=>{const t=qs('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)};
const mapUrl=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const img={
 kyoto:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
 market:'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80',
 temple:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80',
 uji:'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=900&q=80',
 deer:'https://images.unsplash.com/photo-1553521306-938e58a4c042?auto=format&fit=crop&w=900&q=80',
 ramen:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
 sushi:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
 yakiniku:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
 cafe:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
 curry:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
 usj:'https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=900&q=80',
 airport:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80'
};


const commons=name=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1200`;
const fixedPhotos={
  daiwa:[
    'https://www.daiwaroynet.jp/datas/cache/images/2026/05/01/1760x790_ea1e9d427fb5664c32c517a73e421e58_9677b500b2731ace7593fc96f9a0fb41735dc466.jpg',
    'https://www.daiwaroynet.jp/datas/cache/images/2026/03/29/1000x720_ea1e9d427fb5664c32c517a73e421e58_4a29c6153d2e78c7776c00097497ad80018fc973.jpg',
    'https://www.daiwaroynet.jp/datas/cache/images/2026/03/29/1000x720_ea1e9d427fb5664c32c517a73e421e58_175ea2b0b6d8db8e02731a83871cc1be9dbd1f3e.jpg',
    'https://www.daiwaroynet.jp/datas/cache/images/2026/04/18/1000x720_ea1e9d427fb5664c32c517a73e421e58_48b551550f687b245998f552498a9ace768c43ee.jpg'
  ],
  odysis:[
    'https://www.odysissuitesosaka.com/odysiscms/wp-content/themes/odysis/img/top/visual01.jpg',
    'https://www.odysissuitesosaka.com/odysiscms/wp-content/themes/odysis/img/top/space-bg.jpg',
    'https://www.odysissuitesosaka.com/odysiscms/wp-content/themes/odysis/img/top/visual02.jpg'
  ],
  kix:[
    commons('Kansai International Airport Terminal 1.jpg'),
    commons('Kansai International Airport Terminal.jpg'),
    commons('Kansai International Airport 01.jpg')
  ],
  kyotoStation:[
    commons('Kyoto Station November 2016.jpg'),
    commons('Kyoto Station Building 2018.jpg'),
    commons('Kyoto Station interior.jpg')
  ],
  nishiki:[
    commons('Nishiki Market, Kyoto - Flickr - Sergiy Galyonkin.jpg'),
    commons('Nishiki market - Kyoto - 2022 Dec 30 various 11 30 08 508000.jpeg'),
    commons('Nishiki Ichiba by jason.kaechler in Kyoto.jpg'),
    commons('Fish shop by ellievanhoutte in Nishiki-ichiba, Kyoto.jpg')
  ],
  byodoin:[
    commons('Byodo-in in Uji.jpg'),
    commons('Byodo-in Uji03bs2640.jpg'),
    commons('Byodo-in Uji01pbs2640.jpg'),
    commons('Byodoin Phoenix Hall Uji 2009.jpg')
  ],
  nara:[
    commons('Deer in Nara Park, Nara, Japan.jpg'),
    commons('Nara Park deer.jpg'),
    commons('Sika deer in Nara Park.jpg'),
    commons('Nara Park, Nara, Japan.jpg')
  ],
  todaiji:[
    commons('Tōdai-ji Kon-dō.jpg'),
    commons('Todaiji Temple Nara Japan.jpg'),
    commons('Great Buddha Hall, Todai-ji, Nara.jpg'),
    commons('Nandaimon of Todaiji.jpg')
  ],
  kiyomizu:[
    commons('Kiyomizu-dera, Kyoto, Japan (48923900762).jpg'),
    commons('Japan Kyoto KiyoMizuDera temple from afar DSC00653.jpg'),
    commons('20131014 70 Kyoto - Higashiyama - Kiyomizudera Temple (10512818343).jpg'),
    commons('View of Kyoto skyline from Kiyomizu-dera.jpg')
  ],
  higashiyama:[
    commons('Sannenzaka Kyoto.jpg'),
    commons('Ninenzaka, Kyoto.jpg'),
    commons('Yasaka Pagoda and Sannen Zaka Street.jpg'),
    commons('Hokanji Temple Kyoto.jpg')
  ],
  aquarium:[
    commons('Kyoto Aquarium.jpg'),
    commons('Kyoto Aquarium penguins.jpg'),
    commons('Kyoto Railway Museum 2016.jpg'),
    commons('Kyoto Railway Museum main hall.jpg')
  ],
  usj:[
    commons('Universal Studios Japan 2015.jpg'),
    commons('Universal Studios Japan globe.jpg'),
    commons('Universal Studios Japan entrance.jpg')
  ],
  jaws:[
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-b.jpg',
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-photo-cf1-b.jpg',
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-lifted-jaws-gallery-b.jpg',
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-swim-jaws-cf1-b.jpg'
  ],
  nintendo:[
    commons('Super Nintendo World Universal Studios Japan.jpg'),
    commons('Super Nintendo World at Universal Studios Japan.jpg'),
    commons('Mario Kart Koopa’s Challenge.jpg'),
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/usj-super-nintendo-world-5th-hero-m.jpg?imwidth=1200'
  ],
  harry:[
    commons('The Wizarding World of Harry Potter Universal Studios Japan.jpg'),
    commons('Hogwarts Castle Universal Studios Japan.jpg'),
    commons('Hogsmeade Universal Studios Japan.jpg')
  ],
  donkey:[
    commons('Donkey Kong Country Universal Studios Japan.jpg'),
    commons('Mine Cart Madness Universal Studios Japan.jpg'),
    commons('Golden Temple Donkey Kong Country USJ.jpg'),
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/usj-super-nintendo-world-5th-hero-m.jpg?imwidth=1200'
  ]
};
const photoSets={
  '抵達關西機場':fixedPhotos.kix,
  'HARUKA 前往京都':fixedPhotos.kyotoStation,
  '飯店寄放行李':fixedPhotos.daiwa,
  '錦市場':fixedPhotos.nishiki,
  '寺町・新京極':fixedPhotos.higashiyama,
  '3COINS +plus 河原町 OPA 店':fixedPhotos.kyotoStation,
  '京都高島屋 S.C.／Nintendo KYOTO':fixedPhotos.kyotoStation,
  '河原町晚餐':fixedPhotos.nishiki,
  '京都 → 宇治':fixedPhotos.byodoin,
  '宇治表參道':fixedPhotos.byodoin,
  '平等院・宇治川':fixedPhotos.byodoin,
  '宇治午餐':fixedPhotos.byodoin,
  '宇治 → 奈良':fixedPhotos.nara,
  '奈良公園':fixedPhotos.nara,
  '東大寺':fixedPhotos.todaiji,
  '返回京都':fixedPhotos.kyotoStation,
  '前往清水寺':fixedPhotos.higashiyama,
  '清水寺':fixedPhotos.kiyomizu,
  '三年坂・二年坂・八坂塔':fixedPhotos.higashiyama,
  '祇園／東山午餐':fixedPhotos.higashiyama,
  '午後二選一':fixedPhotos.aquarium,
  'JR 京都伊勢丹':fixedPhotos.kyotoStation,
  '京都 Porta 地下街':fixedPhotos.kyotoStation,
  '京都飯店退房':fixedPhotos.daiwa,
  'USJ 入園':fixedPhotos.usj,
  '上午自由玩':fixedPhotos.usj,
  '提早午餐':fixedPhotos.usj,
  '哈利波特／親子園區':fixedPhotos.harry,
  'JAWS 快速通關':fixedPhotos.jaws,
  '前往任天堂世界入口':fixedPhotos.nintendo,
  '瑪利歐賽車 Express':fixedPhotos.nintendo,
  '咚奇剛瘋狂礦車 Express':fixedPhotos.donkey,
  '任天堂世界夜景':fixedPhotos.nintendo,
  '前往機場飯店':fixedPhotos.odysis,
  '早餐與最後整理':fixedPhotos.odysis,
  '退房前往 KIX':fixedPhotos.kix,
  '報到・托運・安檢':fixedPhotos.kix,
  'BR177 返回台灣':fixedPhotos.kix
};

Object.assign(photoSets,{
  'Daiwa Roynet Hotel Kyoto Shijo Karasuma':fixedPhotos.daiwa,
  '河原町':fixedPhotos.nishiki,
  '二年坂・三年坂':fixedPhotos.higashiyama,
  '平等院':fixedPhotos.byodoin,
  '宇治川':fixedPhotos.byodoin,
  'USJ 入園自由行':fixedPhotos.usj,
  '超級任天堂世界':fixedPhotos.nintendo,
  '瑪利歐賽車：庫巴的挑戰書':fixedPhotos.nintendo,
  '咚奇剛國度：礦車瘋狂™':fixedPhotos.donkey,
  'Odysis Suites Osaka Airport Hotel':fixedPhotos.odysis,
  '關西國際機場（KIX）':fixedPhotos.kix
});
function stopPhotos(title){return (photoSets[title]||fixedPhotos.kyotoStation).slice(0,5)}
function galleryHtml(title){
  const photos=stopPhotos(title);
  return `<div class="place-gallery" data-gallery-title="${title}"><button type="button" class="gallery-main" data-gallery-open="0" aria-label="放大查看 ${title} 照片"><img src="${photos[0]}" alt="${title} 實景照片 1" loading="lazy"><span>1 / ${photos.length}</span></button><div class="gallery-thumbs">${photos.map((p,i)=>`<button type="button" data-gallery-thumb="${i}" class="${i===0?'active':''}" aria-label="查看第 ${i+1} 張照片"><img src="${p}" alt="${title} 實景照片 ${i+1}" loading="lazy"></button>`).join('')}</div><script type="application/json" class="gallery-data">${JSON.stringify(photos)}</script></div>`;
}

const hotels={
 kyoto:{name:'Daiwa Roynet Hotel Kyoto Shijo Karasuma',map:'Daiwa Roynet Hotel Kyoto Shijo Karasuma'},
 airport:{name:'Odysis Suites Osaka Airport Hotel',map:'Odysis Suites Osaka Airport Hotel'}
};

const stopInfo={
  'Daiwa Roynet Hotel Kyoto Shijo Karasuma':{intro:'位於京都四條烏丸一帶，交通與購物都很方便，適合作為連續三晚的京都住宿據點。每日行程結束後回到同一間飯店，不必反覆整理行李。',features:['四條烏丸生活機能便利','連住三晚，減少搬運行李','適合前往河原町、京都站與東山'],stay:'Day 1～Day 3 住宿',cost:'住宿費依訂房方案',tip:'Day 4 早上退房時，記得確認護照、充電器與 USJ 票券。'},
  '錦市場':{intro:'有「京都廚房」之稱的傳統市場，集結海鮮、漬物、玉子燒與各式京都小吃。第一天下午慢慢逛，適合用少量多樣的方式品嚐。',features:['京都代表性市場街','小吃與伴手禮選擇多','雨天也相對好逛'],stay:'約 60～90 分鐘',cost:'小吃約 ¥500～1,500／人',tip:'部分店家較早收攤，建議抵達京都後優先前往。'},
  '河原町':{intro:'京都市中心最熱鬧的購物區之一，百貨、商店與餐廳密集，適合第一天依體力彈性散步。',features:['京都市區購物核心','百貨與餐廳集中','傍晚街景熱鬧'],stay:'約 30～60 分鐘',cost:'依購物與餐飲安排',tip:'第一天不必走滿全區，保留體力給後續購物點。'},
  '寺町・新京極':{intro:'兩條相鄰的拱廊商店街，從藥妝、服飾到伴手禮都有，雨天或炎熱時也容易逛。',features:['有遮棚的商店街','品牌與在地店家混合','可一路銜接河原町'],stay:'約 45～60 分鐘',cost:'依購物安排',tip:'人潮多時牽好孩子，行程可依體力隨時縮短。'},
  '3COINS +plus 河原町 OPA 店':{intro:'本次行程指定的 3COINS 店舖，商品從居家雜貨、旅行用品到親子小物都有，價格親民且容易挖寶。',features:['日本平價生活雜貨','旅行與收納用品豐富','適合挑選小型伴手禮'],stay:'約 30～45 分鐘',cost:'多數商品自 ¥330 起',tip:'熱門聯名商品可能售罄，看到喜歡的品項可先入手。'},
  '京都高島屋 S.C.／Nintendo KYOTO':{intro:'京都高島屋與 T8 商場結合的購物據點，其中 Nintendo KYOTO 是本次角色商品重點。',features:['Nintendo KYOTO 必逛','百貨、餐飲與伴手禮集中','室內行程適合親子休息'],stay:'約 60～90 分鐘',cost:'依購物安排',tip:'角色商品容易逛較久，可先設定預算與離開時間。'},
  '麵匠たか松':{intro:'京都人氣沾麵店，以帶有小麥香氣的麵條與濃郁沾汁為特色，適合作為第一天晚餐。',features:['京都人氣沾麵','餐點份量有飽足感','四條烏丸附近方便回飯店'],stay:'約 45～60 分鐘',cost:'約 ¥1,000～2,000／人',tip:'用餐尖峰可能排隊，孩子太累時可視現場狀況彈性調整。'},
  '宇治表參道':{intro:'從宇治站前往平等院的重要街道，沿途聚集多家抹茶老舖、甜點店與伴手禮店。',features:['抹茶名店集中','適合購買宇治伴手禮','可順路前往平等院'],stay:'約 45～60 分鐘',cost:'甜點與伴手禮約 ¥500～2,000／人',tip:'熱門店排隊較久，可先逛街再依現場人潮選店。'},
  '平等院':{intro:'世界文化遺產平等院以鳳凰堂與水面倒影聞名，是宇治最具代表性的景點。',features:['鳳凰堂經典景觀','日圓硬幣上的代表建築','庭園與博物館可一併參觀'],stay:'約 60～90 分鐘',cost:'門票依現場公告',tip:'夏季戶外較熱，參觀後可到宇治川附近稍作休息。'},
  '宇治川':{intro:'流經宇治市中心的河川，步道與橋景開闊，適合在平等院後安排一段放鬆散步。',features:['河岸景色舒適','可欣賞宇治橋與周邊山景','銜接表參道與車站方便'],stay:'約 30～45 分鐘',cost:'免費',tip:'天氣炎熱時不必走太遠，以孩子體力為主。'},
  '奈良公園':{intro:'以自由活動的梅花鹿聞名，是奈良最具代表性的親子景點，也可一路步行前往東大寺。',features:['近距離觀察奈良鹿','廣闊草地與自然景觀','與東大寺行程順路'],stay:'約 60～90 分鐘',cost:'公園免費；鹿仙貝另購',tip:'鹿仙貝分次拿取，孩子餵鹿時由大人陪同。'},
  '東大寺':{intro:'奈良代表寺院，以宏偉的大佛殿與盧舍那佛聞名，建築尺度令人震撼。',features:['世界級木造大佛殿','奈良大佛必看','與奈良公園相連'],stay:'約 60～90 分鐘',cost:'門票依現場公告',tip:'傍晚返回京都前，預留步行回車站或搭車的時間。'},
  '清水寺':{intro:'京都最具代表性的寺院之一，清水舞台可俯瞰東山與京都市景，早上前往較能避開人潮。',features:['清水舞台經典景觀','仁王門與三重塔','四季景色各具特色'],stay:'約 60～90 分鐘',cost:'門票依現場公告',tip:'上坡與階梯較多，穿著好走的鞋並準備飲水。'},
  '二年坂・三年坂':{intro:'保留京都傳統街町風貌的石板坡道，沿途可看到町家、甜點店與八坂塔景觀。',features:['京都代表性古街景','八坂塔拍照視角','伴手禮與甜點店集中'],stay:'約 60～90 分鐘',cost:'散步免費；購物另計',tip:'石板路與坡度較明顯，下坡時留意孩子腳步。'},
  'JR 京都伊勢丹':{intro:'與京都車站相連的大型百貨，適合在第三天下午購買甜點、熟食與最後的京都伴手禮。',features:['交通方便且全程室內','地下樓層伴手禮豐富','可順便用餐與休息'],stay:'約 60～90 分鐘',cost:'依購物安排',tip:'冷藏商品建議接近離開前再購買。'},
  'USJ 入園自由行':{intro:'Day 4 的主場是日本環球影城。入園後依現場人潮自由調整，將已購買的快速通關與任天堂世界指定時段列為優先。',features:['園區主題與設施豐富','依等候時間彈性調整','全天親子娛樂'],stay:'全天',cost:'門票與快速通關已另行購買',tip:'入園後先確認當日營運與快速通關時段，不必為了玩滿所有設施而趕行程。'},
  '哈利波特／親子園區':{intro:'上午至下午先安排哈利波特魔法世界與適合孩子的園區，依當下體力與排隊時間自由取捨。',features:['霍格華茲城堡與活米村','沉浸式魔法場景','可搭配親子設施調節強度'],stay:'約 2～3 小時',cost:'園區內消費另計',tip:'這段保留彈性，不強制每個設施都要完成。'},
  'JAWS 快速通關':{intro:'搭船進入電影《大白鯊》的海港場景，沿途結合導覽演出、火焰與鯊魚突襲，是全家可共同體驗的經典設施。',features:['USJ 經典乘船設施','快速通關可節省排隊','情境演出與特效豐富'],stay:'含移動約 30～45 分鐘',cost:'已包含於快速通關',tip:'設施有水花與突然出現的鯊魚，先提醒容易受驚的孩子。'},
  '超級任天堂世界':{intro:'以瑪利歐遊戲世界為主題的沉浸式園區，從入口水管到碧姬城堡、問號磚都充滿遊戲場景。',features:['高度還原遊戲世界','園區拍照點密集','包含瑪利歐與咚奇剛主題'],stay:'約 2～3 小時',cost:'園區內商品與餐飲另計',tip:'依指定入場時間提早抵達入口，避免壓線。'},
  '瑪利歐賽車：庫巴的挑戰書':{intro:'結合實體場景、AR 視覺與互動射擊的瑪利歐賽車設施，從庫巴城堡排隊區開始就很有沉浸感。',features:['AR 互動式乘車體驗','庫巴城堡場景完整','親子共同競賽感強'],stay:'含排隊與體驗約 40～60 分鐘',cost:'已包含於快速通關',tip:'依快速通關票面指定時段入場，進入前先確認孩子配戴設備是否舒適。'},
  '咚奇剛國度：礦車瘋狂™':{intro:'位於超級任天堂世界擴建區，以叢林、黃金神殿與跳軌礦車為核心，視覺與速度感都很強。',features:['咚奇剛主題新園區','礦車跳軌視覺效果','黃金神殿場景吸睛'],stay:'含排隊與體驗約 40～60 分鐘',cost:'已包含於快速通關',tip:'刺激度較高，搭乘前再次確認孩子的身高與接受程度。'},
  'Odysis Suites Osaka Airport Hotel':{intro:'飯店位於臨空城，距離關西機場僅一站，適合作為返台前最後一晚住宿。高樓層房型可欣賞大阪灣與機場方向景色。',features:['臨空城站周邊住宿','隔日前往關西機場方便','家庭房型與高樓景觀'],stay:'Day 4 住宿',cost:'住宿費依訂房方案',tip:'抵達時間較晚，以辦理入住與整理行李為主，隔天早上保留充足時間前往機場。'},
  '關西國際機場（KIX）':{intro:'旅程最後一站，完成報到、托運與安檢後，準備搭乘 BR177 返回台灣。',features:['國際線報到與托運','最後伴手禮採買','旅程收尾'],stay:'建議起飛前至少 2～3 小時抵達',cost:'依交通與購物安排',tip:'離開飯店前再次確認護照、手機、錢包與退稅商品。'}
};

const days=[
{date:'7/25',day:'D1',title:'抵達京都・河原町購物',sub:'抵達後以京都市區購物與美食為主，晚上返回四條烏丸住宿。',mood:'舒適度 ★★★★☆',metrics:['約 8,000 步','購物主日','京都住宿'],hotel:hotels.kyoto,transport:'關西機場 → 京都市區',focus:'錦市場｜河原町｜Nintendo KYOTO',reminders:[['💡','旅行提醒','抵達後先到飯店寄放行李，再開始市區行程。']],stops:[
['10:10','✈️','抵達關西機場','入境、領行李後前往京都。','Kansai International Airport',img.airport],['13:30','🏨','Daiwa Roynet Hotel Kyoto Shijo Karasuma','寄放行李並稍作休息。',hotels.kyoto.map,img.kyoto],['15:00','🍢','錦市場','先逛較早收店的市場。','Nishiki Market Kyoto',img.market],['16:00','🌆','河原町','市中心街區散步。','Kyoto Kawaramachi',img.kyoto],['16:30','🛍️','寺町・新京極','依孩子體力彈性逛街。','Shinkyogoku Shopping Street',img.kyoto],['17:15','⭐','3COINS +plus 河原町 OPA 店','本次指定的 3COINS。','3COINS +plus 河原町OPA店',img.market],['18:10','🏬','京都高島屋 S.C.／Nintendo KYOTO','百貨與角色周邊。','Kyoto Takashimaya S.C.',img.kyoto],['19:30','🍜','麵匠たか松','第一天晚餐。','麺匠 たか松 四条店',img.ramen],['21:00','🏨','Daiwa Roynet Hotel Kyoto Shijo Karasuma','返回飯店住宿。',hotels.kyoto.map,img.kyoto]],foodArea:'河原町'},
{date:'7/26',day:'D2',title:'宇治抹茶 × 奈良小鹿',sub:'上午宇治、下午奈良，晚上返回京都同一間飯店住宿。',mood:'舒適度 ★★★☆☆',metrics:['約 13,000 步','JR 移動','京都住宿'],hotel:hotels.kyoto,transport:'京都 → 宇治 → 奈良 → 京都',focus:'平等院｜宇治川｜奈良公園｜東大寺',reminders:[['👨‍👩‍👧','親子提醒','餵鹿時讓孩子站在大人身旁，鹿仙貝分次拿取。']],stops:[
['08:00','🏨','Daiwa Roynet Hotel Kyoto Shijo Karasuma','從飯店出發。',hotels.kyoto.map,img.kyoto],['08:30','🚆','京都 → 宇治','搭 JR 前往宇治。','Uji Station Kyoto',img.uji],['09:15','🍵','宇治表參道','抹茶甜點與伴手禮。','Byodoin Omotesando Uji',img.uji],['10:15','🏯','平等院','參觀鳳凰堂與庭園。','Byodoin Temple',img.temple],['11:45','🌉','宇治川','河岸散步。','Uji River',img.uji],['13:00','🚆','宇治 → 奈良','搭 JR 前往奈良。','Nara Station',img.deer],['14:15','🦌','奈良公園','親子餵鹿與散步。','Nara Park',img.deer],['15:45','🏯','東大寺','參觀大佛殿。','Todaiji Temple',img.temple],['19:30','🏨','Daiwa Roynet Hotel Kyoto Shijo Karasuma','返回京都住宿。',hotels.kyoto.map,img.kyoto]],foodArea:'宇治奈良'},
{date:'7/27',day:'D3',title:'清水寺 × 京都車站購物',sub:'早上走訪東山經典景點，下午到 JR 京都伊勢丹購物，晚上回飯店住宿。',mood:'舒適度 ★★★★☆',metrics:['早起避暑','東山散步','京都住宿'],hotel:hotels.kyoto,transport:'京都市區移動',focus:'清水寺｜二年坂・三年坂｜JR 京都伊勢丹',reminders:[['👨‍👩‍👧','親子提醒','清水寺與坡道區較費體力，穿好走的鞋並準備飲水。']],stops:[
['07:30','🏨','Daiwa Roynet Hotel Kyoto Shijo Karasuma','從飯店出發。',hotels.kyoto.map,img.kyoto],['08:00','🏯','清水寺','清晨人潮相對較少。','Kiyomizu-dera',img.temple],['09:30','📷','二年坂・三年坂','沿石板坡道慢慢散步。','Sannenzaka Kyoto',img.kyoto],['15:30','🏬','JR 京都伊勢丹','購買伴手禮與熟食。','JR Kyoto Isetan',img.market],['19:00','🏨','Daiwa Roynet Hotel Kyoto Shijo Karasuma','返回飯店住宿。',hotels.kyoto.map,img.kyoto]],foodArea:'京都車站'},
{date:'7/28',day:'D4',title:'USJ 親子冒險日',sub:'京都飯店退房後前往 USJ，完成快速通關與任天堂世界行程，晚上入住臨空城飯店。',mood:'舒適度 ★★★☆☆',metrics:['USJ 全天','快速通關','機場飯店住宿'],hotel:hotels.airport,transport:'京都 → USJ → 臨空城',focus:'哈利波特｜JAWS｜任天堂世界｜咚奇剛',reminders:[['💡','旅行提醒','今天換飯店，退房前確認行李、充電器、護照與所有 USJ 票券。'],['👨‍👩‍👧','親子提醒','園區內保留休息時間，設施依孩子當下體力取捨。']],usj:true,stops:[
['07:15','🧳','京都飯店退房','由 Daiwa Roynet Hotel 退房後前往 USJ。',hotels.kyoto.map,img.kyoto],['09:00','🌍','USJ 入園自由行','入園後依現場等候時間彈性遊玩。','Universal Studios Japan',img.usj],['11:00','🪄','哈利波特／親子園區','哈利波特魔法世界與親子設施自由安排。','The Wizarding World of Harry Potter Japan',img.usj],['15:30','🦈','JAWS 快速通關','依快速通關安排體驗。','JAWS Universal Studios Japan',img.usj],['16:35','🍄','超級任天堂世界','依指定時間提早抵達入口。','Super Nintendo World Japan',img.usj],['17:10','🏎️','瑪利歐賽車：庫巴的挑戰書','使用快速通關入場。','Mario Kart Koopa Challenge',img.usj],['17:40','🦍','咚奇剛國度：礦車瘋狂™','使用快速通關體驗。','Donkey Kong Country USJ',img.usj],['19:30','🚆','前往機場飯店','離開 USJ 後前往臨空城。',hotels.airport.map,img.airport],['21:00','🏨','Odysis Suites Osaka Airport Hotel','辦理入住並整理隔日返台行李。',hotels.airport.map,img.airport]],foodArea:'USJ'},
{date:'7/29',day:'D5',title:'關西機場・返回台灣',sub:'由臨空城飯店前往關西機場，搭乘 BR177 返回台灣。',mood:'舒適度 ★★★★★',metrics:['BR177','11:10 起飛','旅程收尾'],hotel:null,flight:'BR177｜11:10 KIX → TPE',transport:'臨空城 → 關西機場',focus:'退房｜機場報到｜返台',reminders:[['✈️','返台提醒','再次確認護照、手機、錢包與退稅商品。']],stops:[
['07:00','🏨','Odysis Suites Osaka Airport Hotel','早餐、最後整理並退房。',hotels.airport.map,img.airport],['08:15','✈️','關西國際機場（KIX）','完成報到、托運與安檢。','Kansai International Airport',img.airport],['11:10','🇹🇼','BR177 返回台灣','旅程完成，平安回家。','Kansai International Airport',img.airport]],foodArea:'關西機場'}];

const defaultPrep=[
['證件與票券',['護照與護照影本','電子機票截圖','飯店訂房憑證','旅遊保險資料','USJ 入園門票 QR Code','Express Pass QR Code']],
['手機與交通',['安裝並登入 USJ App','下載 Google Maps 離線地圖','完成 eSIM 設定','確認 ICOCA／交通卡','行動電源充滿電']],
['親子與行李',['兒童常備藥','體溫計','防曬用品','小風扇與冰毛巾','雨具','水壺與簡單零食']],
['最後確認',['設定起床鬧鐘','確認前往機場交通','確認行李重量','護照放入隨身包','手機／相機／行動電源充電']]
];

const baseRestaurants=[
{area:'河原町',name:'麵匠 Takamatsu 四條店',type:'拉麵／沾麵',rating:'4.3',reviews:'1,000+',budget:'¥1,000–2,000',kid:'可',desc:'四條烏丸附近的人氣沾麵，適合第一天或回飯店前用餐。',map:'麺匠 たか松 四条店',photos:[img.ramen,img.kyoto]},
{area:'河原町',name:'京極かねよ',type:'鰻魚／京都料理',rating:'4.1',reviews:'1,500+',budget:'¥2,500–4,000',kid:'可',desc:'京都老字號鰻魚飯，想吃特色正餐時可選。',map:'Kyogoku Kane-yo Kyoto',photos:[img.sushi,img.kyoto]},
{area:'河原町',name:'京都高島屋餐廳樓層',type:'多國料理',rating:'4.0+',reviews:'百貨內多店',budget:'¥1,500–3,000',kid:'親子友善',desc:'有冷氣、洗手間與多種選擇，孩子累時最穩。',map:'Kyoto Takashimaya Restaurant',photos:[img.market,img.cafe]},
{area:'宇治奈良',name:'中村藤吉 宇治本店',type:'抹茶／甜點',rating:'4.4',reviews:'4,000+',budget:'¥1,500–2,500',kid:'可',desc:'宇治代表性抹茶餐點，熱門時先取號再去附近散步。',map:'Nakamura Tokichi Honten Uji',photos:[img.uji,img.cafe]},
{area:'宇治奈良',name:'伊藤久右衛門 JR宇治站前店',type:'抹茶／蕎麥麵',rating:'4.2',reviews:'2,000+',budget:'¥1,200–2,500',kid:'親子友善',desc:'離 JR 宇治站近，行程彈性高。',map:'Itoh Kyuemon JR Uji Station',photos:[img.uji,img.cafe]},
{area:'宇治奈良',name:'志津香 公園店',type:'釜飯',rating:'4.1',reviews:'2,000+',budget:'¥1,500–2,500',kid:'可',desc:'奈良經典釜飯，排隊過長時不必勉強。',map:'Kamameshi Shizuka Nara Park',photos:[img.curry,img.deer]},
{area:'京都車站',name:'京都拉麵小路',type:'拉麵',rating:'4.2',reviews:'5,000+',budget:'¥1,000–1,800',kid:'可',desc:'伊勢丹樓上多家拉麵店，可依現場隊伍決定。',map:'Kyoto Ramen Koji',photos:[img.ramen,img.kyoto]},
{area:'京都車站',name:'JR 京都伊勢丹餐廳街',type:'多國料理',rating:'4.0+',reviews:'百貨內多店',budget:'¥1,500–3,500',kid:'親子友善',desc:'購物後直接用餐最省力。',map:'JR Kyoto Isetan Restaurant',photos:[img.market,img.sushi]},
{area:'京都車站',name:'奥丹清水',type:'湯豆腐／京都料理',rating:'4.1',reviews:'1,000+',budget:'¥3,000–5,000',kid:'可',desc:'想安排一餐傳統京都風味時可選。',map:'Okutan Kiyomizu Kyoto',photos:[img.temple,img.sushi]},
{area:'USJ',name:'Studio Stars Restaurant',type:'西式／親子',rating:'4.0',reviews:'1,000+',budget:'¥1,500–2,500',kid:'親子友善',desc:'座位與餐點選擇相對穩定，適合提早午餐。',map:'Studio Stars Restaurant USJ',photos:[img.usj,img.cafe]},
{area:'USJ',name:'Snoopy Backlot Cafe',type:'速食／親子',rating:'4.1',reviews:'500+',budget:'¥1,200–2,000',kid:'很適合',desc:'小朋友接受度高，搭配親子園區動線。',map:'Snoopy Backlot Cafe USJ',photos:[img.usj,img.cafe]},
{area:'關西機場',name:'關西機場餐廳區',type:'多國料理',rating:'4.0+',reviews:'依店家',budget:'¥1,000–2,500',kid:'親子友善',desc:'完成報到與安檢後再依時間決定。',map:'Kansai Airport restaurants',photos:[img.airport,img.sushi]}
];

const mainShopping=[
{name:'3COINS +plus 河原町 OPA 店',day:'Day 1｜必逛',desc:'本次唯一排入正式行程的 3COINS。',map:'3COINS +plus 河原町OPA店'},
{name:'京都高島屋 S.C.／T8',day:'Day 1｜正式行程',desc:'Nintendo KYOTO、角色周邊、百貨與美食集中。',map:'Kyoto Takashimaya S.C.'},
{name:'JR 京都伊勢丹',day:'Day 3｜正式行程',desc:'B1 甜點、熟食與伴手禮。',map:'JR Kyoto Isetan'},
{name:'京都 Porta 地下街',day:'Day 3｜正式行程',desc:'有冷氣、交通方便。',map:'Kyoto Porta'}];
const optionalShopping=[['3COINS 京都 Porta 店','Day 3 已在附近，但不必特地去'],['Loft 京都','喜歡文具再加'],['Hands 京都','河原町周邊補充選項'],['Pokémon Center KYOTO','對角色有興趣再安排'],['Universal CityWalk 商店','離園後還有體力才逛']];
const phrases=[['我要內用','店内で食べます。'],['請給我兒童餐具','子供用の食器をお願いします。'],['不需要袋子','袋はいりません。'],['洗手間在哪裡？','トイレはどこですか？'],['小孩不能吃辣','子供は辛いものが食べられません。'],['請問還要等多久？','あとどれくらい待ちますか？'],['可以刷卡嗎？','クレジットカードは使えますか？']];

function renderOverview(){qs('#overviewCards').innerHTML=days.map(d=>`<button class="overview-card" data-go="itinerary" data-dayjump="${d.day}"><span class="date-pill">${d.date} ${d.day}</span><h3>${d.title}</h3><p>${d.sub}</p></button>`).join('')}

function prepData(){return store.get('prepCustom',defaultPrep.map(([title,items])=>({title,items:items.map(text=>({id:crypto.randomUUID?.()||Math.random().toString(36),text,done:false}))})))}
function savePrep(x){store.set('prepCustom',x)}
function renderPrep(){const groups=prepData();qs('#prepGroups').innerHTML=`<form id="prepAddForm" class="inline-add"><input id="prepNewItem" placeholder="新增準備事項" required><select id="prepNewGroup">${groups.map((g,i)=>`<option value="${i}">${g.title}</option>`).join('')}</select><button class="primary-btn">新增</button></form>`+groups.map((g,gi)=>`<div class="task-group"><h3>${g.title}</h3>${g.items.map((x,i)=>`<div class="check-row editable"><label><input type="checkbox" data-prep-check="${gi}-${i}" ${x.done?'checked':''}><span>${x.text}</span></label><button class="delete-mini" data-prep-del="${gi}-${i}" aria-label="刪除">×</button></div>`).join('')}</div>`).join('');
 qsa('[data-prep-check]').forEach(c=>c.onchange=()=>{const [gi,i]=c.dataset.prepCheck.split('-').map(Number);groups[gi].items[i].done=c.checked;savePrep(groups);updatePrep(groups)});
 qsa('[data-prep-del]').forEach(b=>b.onclick=()=>{const [gi,i]=b.dataset.prepDel.split('-').map(Number);groups[gi].items.splice(i,1);savePrep(groups);renderPrep();toast('已刪除')});
 qs('#prepAddForm').onsubmit=e=>{e.preventDefault();const text=qs('#prepNewItem').value.trim(),gi=+qs('#prepNewGroup').value;if(!text)return;groups[gi].items.push({id:Date.now().toString(),text,done:false});savePrep(groups);renderPrep();toast('已新增準備事項')};updatePrep(groups)}
function updatePrep(groups=prepData()){const all=groups.flatMap(g=>g.items),done=all.filter(x=>x.done).length,p=Math.round(done/all.length*100)||0;qs('#prepPercent').textContent=p+'%';qs('#prepBar').style.width=p+'%';qs('#prepRemain').textContent=p===100?'全部完成，可以安心出發！':`還有 ${all.length-done} 項任務未完成`}

let currentDay=0;
function renderDays(){qs('#dayTabs').innerHTML=days.map((d,i)=>`<button class="day-tab ${i===currentDay?'active':''}" data-day="${i}"><small>${d.date}</small><b>${d.day}</b></button>`).join('');qsa('.day-tab').forEach(b=>b.onclick=()=>{currentDay=+b.dataset.day;renderDays();renderDay()});renderDay()}
function renderDay(){const d=days[currentDay];let mission='';if(d.usj){const saved=store.get('missions',{});const items=[['mario','瑪利歐賽車 17:10'],['dk','咚奇剛礦車 17:40'],['jaws','JAWS（彈性）'],['hp','哈利波特園區'],['night','任天堂世界夜景']];mission=`<div class="mission-card"><div class="mission-head"><div><span class="mini-label">USJ QUEST</span><h3>今日任務</h3></div><b id="missionPct">0%</b></div><div class="progress"><span id="missionBar"></span></div><div class="mission-list">${items.map(([k,n])=>`<label><input type="checkbox" class="mission-check" data-key="${k}" ${saved[k]?'checked':''}>${n}</label>`).join('')}</div></div>`}
 const stay=d.hotel?`<div class="stay-card"><div><small>🏨 今晚住宿</small><h3>${d.hotel.name}</h3></div></div>`:`<div class="stay-card flight"><div><small>✈️ 今日航班</small><h3>${d.flight}</h3></div></div>`;
 const reminders=`<div class="reminder-stack">${d.reminders.map(r=>`<article class="reminder-card"><span>${r[0]}</span><div><b>${r[1]}</b><p>${r[2]}</p></div></article>`).join('')}</div>`;
 qs('#dayContent').innerHTML=`<div class="day-header"><span class="kicker">${d.date} · ${d.day}</span><h2>${d.title}</h2><p>${d.sub}</p>${stay}<div class="daily-summary"><div><small>🚆 今日交通</small><b>${d.transport}</b></div><div><small>🎯 今日重點</small><b>${d.focus}</b></div></div><div class="day-metrics">${d.metrics.map(x=>`<div class="metric"><small>TRIP NOTE</small><b>${x}</b></div>`).join('')}</div><div class="comfort">🌿 ${d.mood}</div></div>${reminders}${mission}<div class="timeline">${d.stops.map(s=>`<div class="stop"><time>${s[0]}</time><div class="dot">${s[1]}</div><div class="stop-card">${galleryHtml(s[2])}<h3>${s[2]}</h3><p>${s[3]}</p>${stopInfo[s[2]]?`<div class="place-info"><section><b>📝 景點介紹</b><p>${stopInfo[s[2]].intro}</p></section><section><b>⭐ 景點特色</b><ul>${stopInfo[s[2]].features.map(x=>`<li>${x}</li>`).join('')}</ul></section><div class="info-grid"><section><b>⏰ 建議停留時間</b><p>${stopInfo[s[2]].stay}</p></section><section><b>💰 費用／預估消費</b><p>${stopInfo[s[2]].cost}</p></section></div><section class="tip-box"><b>💡 小提醒</b><p>${stopInfo[s[2]].tip}</p></section></div>`:''}</div></div>`).join('')}</div><div class="food-inline"><div class="food-inline-head"><div><span class="kicker">MEAL OPTIONS</span><h3>${d.foodArea}餐廳候選</h3></div><button class="text-btn" data-go="food" data-filter="${d.foodArea}">查看清單 →</button></div></div>`;
 bindGalleries(qs('#dayContent'));
 qsa('[data-go]',qs('#dayContent')).forEach(bindGo);qsa('.mission-check').forEach(c=>c.onchange=()=>{const m=store.get('missions',{});m[c.dataset.key]=c.checked;store.set('missions',m);updateMissions()});updateMissions()}
function bindGalleries(root=document){
 qsa('.place-gallery',root).forEach(g=>{
  const photos=JSON.parse(qs('.gallery-data',g).textContent),main=qs('.gallery-main img',g),counter=qs('.gallery-main span',g),thumbs=qsa('[data-gallery-thumb]',g);
  const select=i=>{main.src=photos[i];main.alt=`${g.dataset.galleryTitle} 實景照片 ${i+1}`;counter.textContent=`${i+1} / ${photos.length}`;thumbs.forEach((b,n)=>b.classList.toggle('active',n===i));qs('.gallery-main',g).dataset.galleryOpen=i};
  thumbs.forEach(b=>b.onclick=()=>select(+b.dataset.galleryThumb));
  qs('.gallery-main',g).onclick=()=>openLightbox(g.dataset.galleryTitle,photos,+qs('.gallery-main',g).dataset.galleryOpen);
 });
}
function openLightbox(title,photos,start=0){
 const modal=qs('#photoModal'),image=qs('#photoModalImage'),count=qs('#photoModalCount'),caption=qs('#photoModalTitle');let index=start;
 const show=()=>{image.src=photos[index];image.alt=`${title} 實景照片 ${index+1}`;count.textContent=`${index+1} / ${photos.length}`;caption.textContent=title};
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');show();
 qs('#photoPrev').onclick=()=>{index=(index-1+photos.length)%photos.length;show()};
 qs('#photoNext').onclick=()=>{index=(index+1)%photos.length;show()};
}
function closeLightbox(){const m=qs('#photoModal');m.classList.remove('open');m.setAttribute('aria-hidden','true')}

function updateMissions(){const all=qsa('.mission-check');if(!all.length)return;const done=all.filter(x=>x.checked).length,p=Math.round(done/all.length*100);qs('#missionPct').textContent=p+'%';qs('#missionBar').style.width=p+'%'}

let foodFilter='全部';
function customRestaurants(){return store.get('customRestaurants',[])}
function renderFood(){const areas=['全部','河原町','宇治奈良','京都車站','USJ','關西機場'];qs('#foodFilters').innerHTML=areas.map(a=>`<button class="filter-chip ${a===foodFilter?'active':''}" data-area="${a}">${a}</button>`).join('');qsa('.filter-chip').forEach(b=>b.onclick=()=>{foodFilter=b.dataset.area;renderFood()});
 const custom=customRestaurants();const list=[...baseRestaurants,...custom.map(x=>({...x,custom:true,photos:x.photos?.length?x.photos:[img.cafe,img.ramen]}))].filter(r=>foodFilter==='全部'||r.area===foodFilter);
 qs('#foodList').innerHTML=`<details class="restaurant-add" ${custom.length===0?'open':''}><summary>＋ 自訂新增餐廳</summary><form id="restaurantForm" class="restaurant-form"><input id="rName" placeholder="餐廳名稱" required><select id="rArea">${areas.slice(1).map(a=>`<option>${a}</option>`).join('')}</select><input id="rType" placeholder="料理分類，例如燒肉"><input id="rMap" placeholder="Google Maps 連結或店名"><input id="rNote" placeholder="備註"><div class="form-row"><input id="rRating" placeholder="評分（選填）"><input id="rReviews" placeholder="評論數（選填）"></div><button class="primary-btn">加入我的餐廳</button></form></details><p class="rating-note">Google 評分與評論數會變動，出發前請點開地圖確認最新資訊。</p>`+list.map((r,i)=>`<article class="restaurant-card ${r.custom?'custom-card':''}"><div class="photo-strip">${r.photos.map(p=>`<img src="${p}" alt="${r.name}" loading="lazy">`).join('')}</div><div class="restaurant-top"><div><span class="badge">${r.custom?'我的新增':'推薦'} · ${r.area} · ${r.type||'未分類'}</span><h3>${r.name}</h3></div>${r.custom?`<button class="delete-mini" data-rdel="${r.id}" aria-label="刪除">×</button>`:''}</div><p>${r.desc||r.note||'自訂餐廳'}</p><div class="rating-line"><b>⭐ ${r.rating||'—'}</b><span>${r.reviews?`Google 評論 ${r.reviews}`:'尚未填寫評論數'}</span></div><div class="restaurant-meta"><span>💴 ${r.budget||'未填'}</span><span>👧 ${r.kid||'未填'}</span></div><a class="map-btn" target="_blank" href="${r.map?.startsWith('http')?r.map:mapUrl(r.map||r.name)}">查看地圖</a></article>`).join('');
 qs('#restaurantForm').onsubmit=e=>{e.preventDefault();const arr=customRestaurants();arr.push({id:Date.now().toString(),name:qs('#rName').value.trim(),area:qs('#rArea').value,type:qs('#rType').value.trim(),map:qs('#rMap').value.trim(),desc:qs('#rNote').value.trim(),rating:qs('#rRating').value.trim(),reviews:qs('#rReviews').value.trim(),budget:'自訂',kid:'自訂',photos:[img.cafe,img.ramen]});store.set('customRestaurants',arr);renderFood();toast('已新增餐廳')};
 qsa('[data-rdel]').forEach(b=>b.onclick=()=>{const arr=customRestaurants().filter(x=>x.id!==b.dataset.rdel);store.set('customRestaurants',arr);renderFood();toast('已刪除餐廳')})}

function renderShopping(){qs('#mainShopping').innerHTML=mainShopping.map(s=>`<article class="shop-card"><div class="shop-top"><div><span class="badge">${s.day}</span><h3>${s.name}</h3></div></div><p>${s.desc}</p><a class="map-btn" target="_blank" href="${mapUrl(s.map)}">導航</a></article>`).join('');qs('#optionalShopping').innerHTML=optionalShopping.map(x=>`<div class="mini-item"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}
function renderPhrases(){qs('#phraseList').innerHTML=phrases.map(x=>`<button class="phrase" data-copy="${x[1]}">${x[0]}<small>${x[1]}</small></button>`).join('')}
function renderBudget(){const arr=store.get('budget',[]);qs('#budgetTotal').textContent=arr.reduce((s,x)=>s+x.amount,0).toLocaleString();qs('#budgetList').innerHTML=arr.map((x,i)=>`<div class="budget-row"><div><b>${x.item}</b><small>${x.cat}</small></div><div><b>¥${x.amount.toLocaleString()}</b><button data-del="${i}">刪除</button></div></div>`).join('');qsa('[data-del]').forEach(b=>b.onclick=()=>{arr.splice(+b.dataset.del,1);store.set('budget',arr);renderBudget()})}
function bindGo(el){el.onclick=()=>{const target=el.dataset.go;if(el.dataset.filter)foodFilter=el.dataset.filter;if(el.dataset.dayjump){currentDay=days.findIndex(d=>d.day===el.dataset.dayjump);renderDays()}showView(target)}}
function showView(name){qsa('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));qsa('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.go===name||(name==='prepare'&&n.dataset.go==='more')||(['emergency','info','budget','phrases'].includes(name)&&n.dataset.go==='more')));if(name==='food')renderFood();if(name==='budget')renderBudget();window.scrollTo({top:name==='home'?0:430,behavior:'smooth'})}
function initCountdown(){const now=new Date(),trip=new Date('2026-07-25T06:30:00+08:00'),diff=Math.ceil((trip-now)/86400000);qs('#countdown').textContent=diff>0?`${diff} 天`:diff===0?'今天出發':'旅程中／已完成'}

renderOverview();renderPrep();renderDays();renderFood();renderShopping();renderPhrases();renderBudget();initCountdown();
qsa('[data-go]').forEach(bindGo);qsa('[data-copy]').forEach(b=>b.onclick=async()=>{await navigator.clipboard?.writeText(b.dataset.copy);toast('已複製日文')});
qs('#budgetForm').onsubmit=e=>{e.preventDefault();const arr=store.get('budget',[]);arr.push({item:qs('#budgetItem').value.trim(),amount:+qs('#budgetAmount').value,cat:qs('#budgetCategory').value});store.set('budget',arr);e.target.reset();renderBudget();toast('已加入記帳')};
const dark=store.get('dark',false);document.body.classList.toggle('dark',dark);qs('#themeBtn').textContent=dark?'☀':'☾';qs('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');const d=document.body.classList.contains('dark');store.set('dark',d);qs('#themeBtn').textContent=d?'☀':'☾'};
qs('#photoModalClose').onclick=closeLightbox;qs('#photoModal').onclick=e=>{if(e.target.id==='photoModal')closeLightbox()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
