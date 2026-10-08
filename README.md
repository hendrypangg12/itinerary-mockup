# Itinerary Mockup — Tokyo & Shanghai (Mode Muslim)

> ⚠️ **Ini contoh / mockup**, bukan aplikasi jadi dan bukan saran perjalanan resmi. Data dicek 7–8 Oktober 2026; harga, jam buka, dan status halal bisa berubah — selalu cek ulang ke sumber resmi sebelum berangkat.

Contoh output aplikasi itinerary AI (sekali beli): rencana 3 hari penuh untuk keluarga (2 dewasa + 2 anak 6–11 tahun) dengan **Mode Muslim ON** — jadwal salat metode Kemenag RI (Aladhan API), masjid/musala, restoran berlabel halal yang jujur, tiket masuk, rute kereta/metro, dan estimasi biaya.

## Halaman
| Halaman | Isi |
|---|---|
| [`index.html`](index.html) | 🇯🇵 Tokyo 3 hari (Sab–Sen, 17–19 Okt 2026) |
| [`kuliner.html`](kuliner.html) | Kuliner Tokyo per area (Must Try + Kuliner Sekitar dengan filter) |
| [`shanghai.html`](shanghai.html) | 🇨🇳 Shanghai 3 hari + catatan praktis WNI (visa, Alipay/WeChat Pay, internet, metro) |
| [`shanghai-kuliner.html`](shanghai-kuliner.html) | Kuliner Shanghai per area |

Pemilih destinasi (Tokyo / Shanghai) ada di bagian paling atas setiap halaman. Semua path relatif, jadi situs bisa dibuka di GitHub Pages maupun langsung dari folder lokal.

## Label halal
- ✅ **Halal tersertifikasi** — lembaga sertifikasi disebut oleh sumber.
- 🟦 **Muslim-friendly / tanpa babi & alkohol (belum sertifikat)** — klaim operator/panduan, sertifikat belum diverifikasi.
- ⚠️ **Tidak halal / perlu cek** — mengandung babi/alkohol, atau restoran yang menyajikan alkohol.

## Sumber data (ringkas)
Jadwal salat: Aladhan API (method 20, Kemenag RI). Rating: Tabelog (Tokyo) dan Ctrip/携程 (Shanghai) — bukan Google. Kurs: ECB via Frankfurter (7 Okt 2026). Waktu jalan kaki & menit metro bertanda *est.* adalah perkiraan. Daftar lengkap sumber & hal yang belum terverifikasi ada di bagian bawah tiap halaman.

## Kredit foto (Wikimedia Commons)
Semua foto berasal dari Wikimedia Commons dengan lisensi bebas (CC0 / CC BY / CC BY-SA / domain publik) dan telah diperkecil (maks. 1024 px). Foto makanan adalah **ilustrasi jenis hidangan**, bukan foto restoran yang disebut (kecuali `shfood-lige.jpg`, foto toko permen pir City Temple). Lisensi CC BY-SA berlaku untuk foto turunan ini.

### Tokyo
| File | Judul Commons | Pembuat | Lisensi |
|---|---|---|---|
| `photos/sensoji.jpg` | [File:Kaminarimon, Sensoji (2521999969).jpg](https://commons.wikimedia.org/wiki/File:Kaminarimon,_Sensoji_(2521999969).jpg) | KimonBerlin | CC BY-SA 2.0 |
| `photos/sensoji-2.jpg` | [File:Hondo (Main Hall) of Sensoji Temple 2.jpg](https://commons.wikimedia.org/wiki/File:Hondo_(Main_Hall)_of_Sensoji_Temple_2.jpg) | そらみみ (Soramimi) | CC BY-SA 4.0 |
| `photos/sensoji-3.jpg` | [File:Nakamise, Asakusa, Tokyo as seen from the Asakusa Culture Tourist Information Center 20190420 2.jpg](https://commons.wikimedia.org/wiki/File:Nakamise,_Asakusa,_Tokyo_as_seen_from_the_Asakusa_Culture_Tourist_Information_Center_20190420_2.jpg) | DXR | CC BY-SA 4.0 |
| `photos/sensoji-4.jpg` | [File:Tokyo Nakamise(Asakusa).JPG](https://commons.wikimedia.org/wiki/File:Tokyo_Nakamise(Asakusa).JPG) | Ludvig14 | CC BY-SA 3.0 |
| `photos/skytree.jpg` | [File:Asahi Breweries headquarters building with the Asahi Flame and Skytree at blue hour with full moon, Sumida-ku, Tokyo, Japan.jpg](https://commons.wikimedia.org/wiki/File:Asahi_Breweries_headquarters_building_with_the_Asahi_Flame_and_Skytree_at_blue_hour_with_full_moon,_Sumida-ku,_Tokyo,_Japan.jpg) | Basile Morin | CC BY-SA 4.0 |
| `photos/skytree-2.jpg` | [File:Tokyo Skytree at night view.jpg](https://commons.wikimedia.org/wiki/File:Tokyo_Skytree_at_night_view.jpg) | VaneTrz20 | CC0 |
| `photos/skytree-3.jpg` | [File:Views from Tokyo Skytree at night 20200815.jpg](https://commons.wikimedia.org/wiki/File:Views_from_Tokyo_Skytree_at_night_20200815.jpg) | Suicasmo | CC BY-SA 4.0 |
| `photos/skytree-4.jpg` | [File:Tokyo Skytree Tembo Deck (53081433435).jpg](https://commons.wikimedia.org/wiki/File:Tokyo_Skytree_Tembo_Deck_(53081433435).jpg) | Dick Thomas Johnson from Tokyo, Japan | CC BY 2.0 |
| `photos/meiji-jingu.jpg` | [File:Meiji-jingu Torii 1.jpg](https://commons.wikimedia.org/wiki/File:Meiji-jingu_Torii_1.jpg) | Zairon | CC BY-SA 4.0 |
| `photos/meiji-jingu-2.jpg` | [File:Courtyard of Meiji Shrine 20190717.jpg](https://commons.wikimedia.org/wiki/File:Courtyard_of_Meiji_Shrine_20190717.jpg) | Tokuzo in Edomura | CC BY-SA 4.0 |
| `photos/meiji-jingu-3.jpg` | [File:Meiji-jingu-pathway.jpg](https://commons.wikimedia.org/wiki/File:Meiji-jingu-pathway.jpg) | Nightcrafter | CC BY-SA 4.0 |
| `photos/meiji-jingu-4.jpg` | [File:September 2024 Meiji Jingu 10.jpg](https://commons.wikimedia.org/wiki/File:September_2024_Meiji_Jingu_10.jpg) | Syced | CC0 |
| `photos/tokyo-camii.jpg` | [File:Tokyo Camii 01.JPG](https://commons.wikimedia.org/wiki/File:Tokyo_Camii_01.JPG) | Abasaa | Public domain |
| `photos/tokyo-camii-2.jpg` | [File:Tokyo Camii dome interior.JPG](https://commons.wikimedia.org/wiki/File:Tokyo_Camii_dome_interior.JPG) | Abasaa | Public domain |
| `photos/tokyo-camii-3.jpg` | [File:Tokyo Camii mihrab.JPG](https://commons.wikimedia.org/wiki/File:Tokyo_Camii_mihrab.JPG) | Abasaa | Public domain |
| `photos/tokyo-camii-4.jpg` | [File:Tokyo Camii - 9164943601.jpg](https://commons.wikimedia.org/wiki/File:Tokyo_Camii_-_9164943601.jpg) | Guilhem Vellut | CC BY 2.0 |
| `photos/shibuya-crossing.jpg` | [File:Tokyo Shibuya Scramble Crossing 2018-10-09.jpg](https://commons.wikimedia.org/wiki/File:Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg) | Benh LIEU SONG (Flickr) | CC BY-SA 2.0 |
| `photos/shibuya-crossing-2.jpg` | [File:Hachiko (53083712909).jpg](https://commons.wikimedia.org/wiki/File:Hachiko_(53083712909).jpg) | Dick Thomas Johnson from Tokyo, Japan | CC BY 2.0 |
| `photos/shibuya-crossing-3.jpg` | [File:Shibuya Scramble crossing.jpg](https://commons.wikimedia.org/wiki/File:Shibuya_Scramble_crossing.jpg) | Syced | CC0 |
| `photos/takeshita.jpg` | [File:Japan Tokyo Takeshita street at summer - 東京竹下.jpg](https://commons.wikimedia.org/wiki/File:Japan_Tokyo_Takeshita_street_at_summer_-_%E6%9D%B1%E4%BA%AC%E7%AB%B9%E4%B8%8B.jpg) | japanvlogjp | CC BY-SA 4.0 |
| `photos/takeshita-2.jpg` | [File:Takeshita Street.jpg](https://commons.wikimedia.org/wiki/File:Takeshita_Street.jpg) | Syced | CC0 |
| `photos/takeshita-3.jpg` | [File:Takeshita street, Tokyo, 20240822 1032 5383.jpg](https://commons.wikimedia.org/wiki/File:Takeshita_street,_Tokyo,_20240822_1032_5383.jpg) | Jakub Hałun | CC BY 4.0 |
| `photos/teamlab-planets.jpg` | [File:Photos at teamlab planets tokyo.jpg](https://commons.wikimedia.org/wiki/File:Photos_at_teamlab_planets_tokyo.jpg) | Sasa0403 | CC BY-SA 4.0 |
| `photos/teamlab-planets-2.jpg` | [File:At teamLab Planets (48277798316).jpg](https://commons.wikimedia.org/wiki/File:At_teamLab_Planets_(48277798316).jpg) | Big Ben in Japan from Kawasaki, Japan | CC BY-SA 2.0 |
| `photos/teamlab-planets-3.jpg` | [File:Teamlab toyosu.jpg](https://commons.wikimedia.org/wiki/File:Teamlab_toyosu.jpg) | Syced | CC0 |
| `photos/odaiba-rainbow-bridge.jpg` | [File:20190322 Odaiba Rainbow Bridge.jpg](https://commons.wikimedia.org/wiki/File:20190322_Odaiba_Rainbow_Bridge.jpg) | Balon Greyjoy | CC0 |
| `photos/odaiba-rainbow-bridge-2.jpg` | [File:Odaiba Seaside Park @ Odaiba (9730161317).jpg](https://commons.wikimedia.org/wiki/File:Odaiba_Seaside_Park_@_Odaiba_(9730161317).jpg) | Guilhem Vellut from Annecy, France | CC BY 2.0 |
| `photos/odaiba-rainbow-bridge-3.jpg` | [File:DECKS Tokyo Beach at night.jpg](https://commons.wikimedia.org/wiki/File:DECKS_Tokyo_Beach_at_night.jpg) | Christophe95 | CC BY-SA 4.0 |
| `photos/odaiba-rainbow-bridge-4.jpg` | [File:DECKS Tokyo Beach2.jpg](https://commons.wikimedia.org/wiki/File:DECKS_Tokyo_Beach2.jpg) | 江戸村のとくぞう (Edomura no Tokuzo) | CC BY-SA 4.0 |
| `photos/sumida-1.jpg` | [File:Sumida-Aquarium-1.jpg](https://commons.wikimedia.org/wiki/File:Sumida-Aquarium-1.jpg) | Evelyn-rose | CC0 |
| `photos/sumida-2.jpg` | [File:Jellyfish in Sumida Aquarium 20180215.jpg](https://commons.wikimedia.org/wiki/File:Jellyfish_in_Sumida_Aquarium_20180215.jpg) | Hal 0005 | CC BY-SA 4.0 |
| `photos/sumida-3.jpg` | [File:Fishes in Sumida Aquarium 20180215.jpg](https://commons.wikimedia.org/wiki/File:Fishes_in_Sumida_Aquarium_20180215.jpg) | Hal 0005 | CC BY-SA 4.0 |
| `photos/shibuya-sky-1.jpg` | [File:Shibuya Scramble Square - SHIBUYA SKY 10.jpg](https://commons.wikimedia.org/wiki/File:Shibuya_Scramble_Square_-_SHIBUYA_SKY_10.jpg) | Kakidai | CC BY-SA 4.0 |
| `photos/shibuya-sky-2.jpg` | [File:Shibuya Scramble Square SHIBUYA SKY (53083861869).jpg](https://commons.wikimedia.org/wiki/File:Shibuya_Scramble_Square_SHIBUYA_SKY_(53083861869).jpg) | Dick Thomas Johnson from Tokyo, Japan | CC BY 2.0 |
| `photos/shibuya-sky-3.jpg` | [File:SHIBUYA SCRAMBLE SQUARE East Tower.jpg](https://commons.wikimedia.org/wiki/File:SHIBUYA_SCRAMBLE_SQUARE_East_Tower.jpg) | Sakura Torch | CC BY-SA 4.0 |
| `photos/divercity-1.jpg` | [File:Life-Sized Unicorn Gundam Statue.jpg](https://commons.wikimedia.org/wiki/File:Life-Sized_Unicorn_Gundam_Statue.jpg) | Pelpinosas R. Justin James | CC0 |
| `photos/divercity-3.jpg` | [File:Diver City Tokyo 20211127 02.jpg](https://commons.wikimedia.org/wiki/File:Diver_City_Tokyo_20211127_02.jpg) | 先従隗始 | CC0 |
| `photos/legoland-1.jpg` | [File:Legoland Tokyo (29137503094).jpg](https://commons.wikimedia.org/wiki/File:Legoland_Tokyo_(29137503094).jpg) | nakashi from Chofu, Tokyo, JAPAN | CC BY-SA 2.0 |
| `photos/legoland-2.jpg` | [File:Legoland Tokyo (29472955930).jpg](https://commons.wikimedia.org/wiki/File:Legoland_Tokyo_(29472955930).jpg) | nakashi from Chofu, Tokyo, JAPAN | CC BY-SA 2.0 |
| `photos/legoland-3.jpg` | [File:Legoland Tokyo (29471911540).jpg](https://commons.wikimedia.org/wiki/File:Legoland_Tokyo_(29471911540).jpg) | nakashi from Chofu, Tokyo, JAPAN | CC BY-SA 2.0 |
| `photos/food-melonpan.jpg` | [File:波蘿麵包, 浅草花月堂, 浅草, 東京, 日本, ジャンボめろんぱん, あさくさ, とうきょう, にっぽん, にほん, Asakusa Kagetsudo Honten, Asakusa, Tokyo, Japan, Nippon, Nihon (22533901280).jpg](https://commons.wikimedia.org/wiki/File:%E6%B3%A2%E8%98%BF%E9%BA%B5%E5%8C%85,_%E6%B5%85%E8%8D%89%E8%8A%B1%E6%9C%88%E5%A0%82,_%E6%B5%85%E8%8D%89,_%E6%9D%B1%E4%BA%AC,_%E6%97%A5%E6%9C%AC,_%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%82%81%E3%82%8D%E3%82%93%E3%81%B1%E3%82%93,_%E3%81%82%E3%81%95%E3%81%8F%E3%81%95,_%E3%81%A8%E3%81%86%E3%81%8D%E3%82%87%E3%81%86,_%E3%81%AB%E3%81%A3%E3%81%BD%E3%82%93,_%E3%81%AB%E3%81%BB%E3%82%93,_Asakusa_Kagetsudo_Honten,_Asakusa,_Tokyo,_Japan,_Nippon,_Nihon_(22533901280).jpg) | bryan... | CC BY-SA 2.0 |
| `photos/food-ningyoyaki.jpg` | [File:Ningyo-yaki bakery Asakusa Tokyo.JPG](https://commons.wikimedia.org/wiki/File:Ningyo-yaki_bakery_Asakusa_Tokyo.JPG) | 投稿者 | Public domain |
| `photos/food-okoshi.jpg` | [File:Japanese kaminari okoshi 2014.jpg](https://commons.wikimedia.org/wiki/File:Japanese_kaminari_okoshi_2014.jpg) | Kentin | CC BY-SA 4.0 |
| `photos/food-kaiten.jpg` | [File:Tokyo-Kaiten sushi, Japan (2010).jpg](https://commons.wikimedia.org/wiki/File:Tokyo-Kaiten_sushi,_Japan_(2010).jpg) | Alberto Carrasco Casado | CC BY 2.0 |
| `photos/food-tsukemen.jpg` | [File:Tsukemen at a Tokyo restaurant.jpg](https://commons.wikimedia.org/wiki/File:Tsukemen_at_a_Tokyo_restaurant.jpg) | City Foodsters | CC BY 2.0 |
| `photos/food-curry-naan.jpg` | [File:Butter Chicken with Garlic Naan.jpg](https://commons.wikimedia.org/wiki/File:Butter_Chicken_with_Garlic_Naan.jpg) | Miscellaneous contributor | CC BY-SA 4.0 |
| `photos/food-crepe.jpg` | [File:Marion Crêpes in Harajuku Takeshita.jpg](https://commons.wikimedia.org/wiki/File:Marion_Cr%C3%AApes_in_Harajuku_Takeshita.jpg) | Syced | CC0 |
| `photos/food-gyoza.jpg` | [File:2018-07-29 Yaki Gyoza of Hidakaya.jpg](https://commons.wikimedia.org/wiki/File:2018-07-29_Yaki_Gyoza_of_Hidakaya.jpg) | Shinji | CC BY 2.0 |
| `photos/food-yuzu-ramen.jpg` | [File:Yuzu Shio Ramen @ Afuri @ Ebisu (14018053090).jpg](https://commons.wikimedia.org/wiki/File:Yuzu_Shio_Ramen_@_Afuri_@_Ebisu_(14018053090).jpg) | Guilhem Vellut from Annecy, France | CC BY 2.0 |
| `photos/food-tonkotsu.jpg` | [File:Tonkotsu ramen in Tokyo.jpg](https://commons.wikimedia.org/wiki/File:Tonkotsu_ramen_in_Tokyo.jpg) | Syced | CC0 |
| `photos/food-nigiri.jpg` | [File:Maguro Chutoro (moderately fatty tuna) Nigiri.jpg](https://commons.wikimedia.org/wiki/File:Maguro_Chutoro_(moderately_fatty_tuna)_Nigiri.jpg) | Zheng Zhou | CC BY-SA 4.0 |
| `photos/food-takoyaki.jpg` | [File:Takoyaki dish.jpg](https://commons.wikimedia.org/wiki/File:Takoyaki_dish.jpg) | sayo ts | CC0 |
| `photos/food-soba.jpg` | [File:Soba Noodles at Tamawarai, Shibuya, Tokyo.jpg](https://commons.wikimedia.org/wiki/File:Soba_Noodles_at_Tamawarai,_Shibuya,_Tokyo.jpg) | Zheng Zhou | CC BY-SA 4.0 |
| `photos/food-dorayaki.jpg` | [File:Dorayaki 004.jpg](https://commons.wikimedia.org/wiki/File:Dorayaki_004.jpg) | Ocdp | CC0 |
| `photos/food-anmitsu.jpg` | [File:Anmitsu 001.jpg](https://commons.wikimedia.org/wiki/File:Anmitsu_001.jpg) | Ocdp | CC0 |
| `photos/food-kebab.jpg` | [File:Döner Kebab, Berlin, 2010 (01).jpg](https://commons.wikimedia.org/wiki/File:D%C3%B6ner_Kebab,_Berlin,_2010_(01).jpg) | AleGranholm | CC BY 2.0 |
| `photos/food-tempura-don.jpg` | [File:Tendon 002.jpg](https://commons.wikimedia.org/wiki/File:Tendon_002.jpg) | Ocdp | CC0 |
| `photos/food-matcha-soft.jpg` | [File:Matcha ice-cream.jpg](https://commons.wikimedia.org/wiki/File:Matcha_ice-cream.jpg) | Aleksander p | CC BY-SA 4.0 |
| `photos/food-nasi-goreng.jpg` | [File:Nasi Goreng Kampung.jpg](https://commons.wikimedia.org/wiki/File:Nasi_Goreng_Kampung.jpg) | Supardisahabu | CC BY-SA 4.0 |
| `photos/food-menchi.jpg` | [File:Menchi (minced pork) katsu.jpg](https://commons.wikimedia.org/wiki/File:Menchi_(minced_pork)_katsu.jpg) | Hajime NAKANO (jetalone) | CC BY 2.0 |

### Shanghai
| File | Judul Commons | Pembuat | Lisensi |
|---|---|---|---|
| `photos/sh-yu-1.jpg` | [File:Yu Garden Shanghai November 2017 003.jpg](https://commons.wikimedia.org/wiki/File:Yu_Garden_Shanghai_November_2017_003.jpg) | King of Hearts | CC BY-SA 4.0 |
| `photos/sh-yu-2.jpg` | [File:Yu Garden Shanghai November 2017 001.jpg](https://commons.wikimedia.org/wiki/File:Yu_Garden_Shanghai_November_2017_001.jpg) | King of Hearts | CC BY-SA 4.0 |
| `photos/sh-yu-3.jpg` | [File:2024-Apr Shanghai Yu Yuan Garden 豫园 - img 20.jpg](https://commons.wikimedia.org/wiki/File:2024-Apr_Shanghai_Yu_Yuan_Garden_%E8%B1%AB%E5%9B%AD_-_img_20.jpg) | Chainwit. | CC BY 4.0 |
| `photos/sh-bund-1.jpg` | [File:Shanghai skyline from the bund.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_skyline_from_the_bund.jpg) | https://www.pxfuel.com/en/free-photo-ovozr | CC0 |
| `photos/sh-bund-2.jpg` | [File:Pudong Skyline from The Bund 20260417.jpg](https://commons.wikimedia.org/wiki/File:Pudong_Skyline_from_The_Bund_20260417.jpg) | DvTor8303 | CC0 |
| `photos/sh-bund-3.jpg` | [File:The Bund at night, Shanghai, Aug 10 2023.jpg](https://commons.wikimedia.org/wiki/File:The_Bund_at_night,_Shanghai,_Aug_10_2023.jpg) | A Chinese ID | CC BY-SA 4.0 |
| `photos/sh-nanjing-1.jpg` | [File:2014.11.15.181414 Nanjing Road Pedestrian Zone Shanghai.jpg](https://commons.wikimedia.org/wiki/File:2014.11.15.181414_Nanjing_Road_Pedestrian_Zone_Shanghai.jpg) | Hermann Luyken | CC0 |
| `photos/sh-nanjing-2.jpg` | [File:Nanjing Pedestrian Shopping Street at Evening.jpg](https://commons.wikimedia.org/wiki/File:Nanjing_Pedestrian_Shopping_Street_at_Evening.jpg) | TheBlueRutabaga | CC BY-SA 4.0 |
| `photos/sh-nanjing-3.jpg` | [File:East Nanjing Pedestrian Shopping Street.jpg](https://commons.wikimedia.org/wiki/File:East_Nanjing_Pedestrian_Shopping_Street.jpg) | HeroicLife | CC BY 2.0 |
| `photos/sh-xtym-1.jpg` | [File:Xiaotaoyuan Mosque.JPG](https://commons.wikimedia.org/wiki/File:Xiaotaoyuan_Mosque.JPG) | Chongkian | CC BY-SA 4.0 |
| `photos/sh-xtym-2.jpg` | [File:Xiaotaoyuan Mosque for Women.JPG](https://commons.wikimedia.org/wiki/File:Xiaotaoyuan_Mosque_for_Women.JPG) | Chongkian | CC BY-SA 4.0 |
| `photos/sh-xtym-3.jpg` | [File:Xiaotaoyuan Mosque - Prayer Hall.JPG](https://commons.wikimedia.org/wiki/File:Xiaotaoyuan_Mosque_-_Prayer_Hall.JPG) | Chongkian | CC BY-SA 4.0 |
| `photos/sh-museum-1.jpg` | [File:2010 Shanghai Museum.jpg](https://commons.wikimedia.org/wiki/File:2010_Shanghai_Museum.jpg) | Gary Todd | CC0 |
| `photos/sh-museum-2.jpg` | [File:Shanghai Museum on People's Square.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_Museum_on_People%27s_Square.jpg) | Alexey Yakovlev | CC0 |
| `photos/sh-nhm-1.jpg` | [File:Shanghai Natural History Museum (New) 01.JPG](https://commons.wikimedia.org/wiki/File:Shanghai_Natural_History_Museum_(New)_01.JPG) | SSYoung | CC BY-SA 4.0 |
| `photos/sh-nhm-2.jpg` | [File:Shanghai Natural History Museum (2015) - 02.JPG](https://commons.wikimedia.org/wiki/File:Shanghai_Natural_History_Museum_(2015)_-_02.JPG) | Another Believer | CC BY-SA 4.0 |
| `photos/sh-nhm-3.jpg` | [File:Shanghai Natural History Museum (2015) - 05.JPG](https://commons.wikimedia.org/wiki/File:Shanghai_Natural_History_Museum_(2015)_-_05.JPG) | Another Believer | CC BY-SA 4.0 |
| `photos/sh-huxi-1.jpg` | [File:Huxi Mosque.jpg](https://commons.wikimedia.org/wiki/File:Huxi_Mosque.jpg) | Chongkian | CC BY-SA 4.0 |
| `photos/sh-huxi-2.jpg` | [File:Huxi Mosque - Prayer Hall.jpg](https://commons.wikimedia.org/wiki/File:Huxi_Mosque_-_Prayer_Hall.jpg) | Chongkian | CC BY-SA 4.0 |
| `photos/sh-huxi-3.jpg` | [File:2026-10-04 Huxi Mosque, Shanghai 上海沪西清真寺 04.jpg](https://commons.wikimedia.org/wiki/File:2026-10-04_Huxi_Mosque,_Shanghai_%E4%B8%8A%E6%B5%B7%E6%B2%AA%E8%A5%BF%E6%B8%85%E7%9C%9F%E5%AF%BA_04.jpg) | 源義信 | CC BY 4.0 |
| `photos/sh-pudong-1.jpg` | [File:Pudong Mosque.jpg](https://commons.wikimedia.org/wiki/File:Pudong_Mosque.jpg) | Chongkian | CC BY-SA 4.0 |
| `photos/sh-pudong-2.jpg` | [File:2026-10-02 Pudong Mosque 浦东清真寺 01.jpg](https://commons.wikimedia.org/wiki/File:2026-10-02_Pudong_Mosque_%E6%B5%A6%E4%B8%9C%E6%B8%85%E7%9C%9F%E5%AF%BA_01.jpg) | 源義信 | CC BY 4.0 |
| `photos/sh-pudong-3.jpg` | [File:Pudong Mosque - Prayer Hall.JPG](https://commons.wikimedia.org/wiki/File:Pudong_Mosque_-_Prayer_Hall.JPG) | Chongkian | CC BY-SA 4.0 |
| `photos/sh-opt-1.jpg` | [File:Oriental Pearl Tower in Shanghai.jpg](https://commons.wikimedia.org/wiki/File:Oriental_Pearl_Tower_in_Shanghai.jpg) | Dmitry A. Mottl | CC BY-SA 4.0 |
| `photos/sh-opt-2.jpg` | [File:Oriental Pearl Tower at Night.jpg](https://commons.wikimedia.org/wiki/File:Oriental_Pearl_Tower_at_Night.jpg) | Daftation | CC BY-SA 4.0 |
| `photos/sh-opt-3.jpg` | [File:2010 Oriental Pearl Tower, Shanghai 01.jpg](https://commons.wikimedia.org/wiki/File:2010_Oriental_Pearl_Tower,_Shanghai_01.jpg) | Gary Todd | CC0 |
| `photos/sh-soa-1.jpg` | [File:Shanghai Ocean Aquarium 2018.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_Ocean_Aquarium_2018.jpg) | Baycrest | CC BY-SA 2.5 |
| `photos/sh-soa-3.jpg` | [File:Shanghai Ocean Aquarium - Chitala blanci 1.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_Ocean_Aquarium_-_Chitala_blanci_1.jpg) | This illustration was made by Peter Potrowl. Please credit this with : © Peter P | CC BY 3.0 |
| `photos/sh-tower-1.jpg` | [File:View from Shanghai Tower Observation Deck.jpg](https://commons.wikimedia.org/wiki/File:View_from_Shanghai_Tower_Observation_Deck.jpg) | Cotopaxi5897 | CC BY-SA 4.0 |
| `photos/sh-tower-2.jpg` | [File:Shanghai Tower view 2016 8.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_Tower_view_2016_8.jpg) | Fredlyfish4 | CC BY-SA 4.0 |
| `photos/sh-tower-3.jpg` | [File:Shanghai Tower Aussichtsplattform.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_Tower_Aussichtsplattform.jpg) | O.S. | CC BY-SA 4.0 |
| `photos/sh-tianzifang-1.jpg` | [File:Tianzifang, Shanghai.jpg](https://commons.wikimedia.org/wiki/File:Tianzifang,_Shanghai.jpg) | 钉钉 | CC BY-SA 4.0 |
| `photos/sh-tianzifang-2.jpg` | [File:Tianzifang 21640-Shanghai (32943988321).jpg](https://commons.wikimedia.org/wiki/File:Tianzifang_21640-Shanghai_(32943988321).jpg) | xiquinhosilva | CC BY 2.0 |
| `photos/sh-tianzifang-3.jpg` | [File:Tianzifang 21655-Shanghai (32255079393).jpg](https://commons.wikimedia.org/wiki/File:Tianzifang_21655-Shanghai_(32255079393).jpg) | xiquinhosilva | CC BY 2.0 |
| `photos/shfood-xlb.jpg` | [File:Xiaolongbao Shanghai.jpg](https://commons.wikimedia.org/wiki/File:Xiaolongbao_Shanghai.jpg) | Robigasp | CC BY-SA 4.0 |
| `photos/shfood-tangyuan.jpg` | [File:Chinese Tangyuan.jpeg](https://commons.wikimedia.org/wiki/File:Chinese_Tangyuan.jpeg) | Huihermit | CC0 |
| `photos/shfood-lige.jpg` | [File:City Temple Pear Syrup Candy Shop - Chenghuang Temple, Huangpu, Shanghai, China.jpg](https://commons.wikimedia.org/wiki/File:City_Temple_Pear_Syrup_Candy_Shop_-_Chenghuang_Temple,_Huangpu,_Shanghai,_China.jpg) | Spudgun67 | CC BY-SA 4.0 |
| `photos/shfood-hotpot.jpg` | [File:Instant-boiled mutton hot pot at Yangfang Shengli (20200111153612).jpg](https://commons.wikimedia.org/wiki/File:Instant-boiled_mutton_hot_pot_at_Yangfang_Shengli_(20200111153612).jpg) | N509FZ | CC BY-SA 4.0 |
| `photos/shfood-lamb-skewer.jpg` | [File:Jumbo kebab at Xinjiang Restaurant (20141121184744).JPG](https://commons.wikimedia.org/wiki/File:Jumbo_kebab_at_Xinjiang_Restaurant_(20141121184744).JPG) | N509FZ | CC BY-SA 4.0 |
| `photos/shfood-lanzhou.jpg` | [File:Lanzhou beef noodles in Xizhimen (20150212172050).JPG](https://commons.wikimedia.org/wiki/File:Lanzhou_beef_noodles_in_Xizhimen_(20150212172050).JPG) | N509FZ | CC BY-SA 4.0 |
| `photos/shfood-samsa.jpg` | [File:Uyghur samsa.jpg](https://commons.wikimedia.org/wiki/File:Uyghur_samsa.jpg) | Mizu basyo | CC BY-SA 3.0 |
| `photos/shfood-polo.jpg` | [File:Uyghur polo as served at Jiang Lai in Toshima, Tokyo.jpg](https://commons.wikimedia.org/wiki/File:Uyghur_polo_as_served_at_Jiang_Lai_in_Toshima,_Tokyo.jpg) | Yuet Man Lee | CC BY-SA 4.0 |
| `photos/shfood-dapanji.jpg` | [File:Dapanji Uyghur Style.jpg](https://commons.wikimedia.org/wiki/File:Dapanji_Uyghur_Style.jpg) | Mizu basyo | CC BY-SA 3.0 |
| `photos/shfood-grill.jpg` | [File:Mixed plate in Trilye, Ankara.jpg](https://commons.wikimedia.org/wiki/File:Mixed_plate_in_Trilye,_Ankara.jpg) | E4024 | CC BY-SA 4.0 |
| `photos/shfood-caibao.jpg` | [File:Baozi (50381350011).jpg](https://commons.wikimedia.org/wiki/File:Baozi_(50381350011).jpg) | Gauthier DELECROIX - 郭天 from Qingdao, China | CC BY 2.0 |
| `photos/shfood-handlamb.jpg` | [File:Hand-cut lamb slices for hotpot.jpg](https://commons.wikimedia.org/wiki/File:Hand-cut_lamb_slices_for_hotpot.jpg) | ZhengZhou | CC BY-SA 4.0 |

## Lisensi kode
HTML/CSS/JS mockup ini bebas dipakai sebagai contoh. Foto mengikuti lisensi masing-masing di atas.
