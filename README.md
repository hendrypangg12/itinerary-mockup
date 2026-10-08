# Itinerary Mockup — Tokyo, Shanghai & Kuala Lumpur (Mode Muslim)

> ⚠️ **Ini contoh / mockup**, bukan aplikasi jadi dan bukan saran perjalanan resmi. Data dicek 7–8 Oktober 2026; harga, jam buka, dan status halal bisa berubah — selalu cek ulang ke sumber resmi sebelum berangkat.

Contoh output aplikasi itinerary AI (sekali beli): rencana 3 hari penuh untuk keluarga (2 dewasa + 2 anak 6–11 tahun) dengan **Mode Muslim ON** — jadwal salat metode Kemenag RI (Aladhan API), masjid/musala, restoran berlabel halal yang jujur, tiket masuk, rute kereta/metro, dan estimasi biaya.

## Halaman
| Halaman | Isi |
|---|---|
| [`index.html`](index.html) | 🇯🇵 Tokyo 3 hari (Sab–Sen, 17–19 Okt 2026) |
| [`kuliner.html`](kuliner.html) | Kuliner Tokyo per area (Must Try + Kuliner Sekitar dengan filter) |
| [`shanghai.html`](shanghai.html) | 🇨🇳 Shanghai 3 hari + catatan praktis WNI (visa, Alipay/WeChat Pay, internet, metro) |
| [`shanghai-kuliner.html`](shanghai-kuliner.html) | Kuliner Shanghai per area |
| [`kualalumpur.html`](kualalumpur.html) | 🇲🇾 Kuala Lumpur 3 hari (Sab–Sen, 17–19 Okt 2026) + catatan praktis WNI (bebas visa & MDAC, Touch 'n Go, Grab, logo halal JAKIM) |
| [`kualalumpur-kuliner.html`](kualalumpur-kuliner.html) | Kuliner Kuala Lumpur per area (KLCC, Kampung Baru, Pasar Seni, Bukit Bintang) |

Pemilih destinasi (Tokyo / Shanghai / Kuala Lumpur) ada di bagian paling atas setiap halaman. **Format ringkas:** tiap hari tampil sebagai satu kartu (judul hari + 5 poin singkat: tempat, makan, salat, transport, biaya) plus galeri foto tempat utama; semua detail (jadwal per jam, alamat, jam buka, tiket, rute & tarif, jadwal salat, catatan, sumber) tetap ada di tombol **Selengkapnya**. Semua path relatif, jadi situs bisa dibuka di GitHub Pages maupun langsung dari folder lokal.

## Label halal
- ✅ **Halal tersertifikasi** — lembaga sertifikasi disebut oleh sumber.
- 🟦 **Muslim-friendly / tanpa babi & alkohol (belum sertifikat)** — klaim operator/panduan, sertifikat belum diverifikasi.
- ⚠️ **Tidak halal / perlu cek** — mengandung babi/alkohol, atau restoran yang menyajikan alkohol.

## Sumber data (ringkas)
Jadwal salat: Aladhan API (method 20, Kemenag RI) untuk Tokyo & Shanghai; **JAKIM e-Solat zon WLY01** untuk Kuala Lumpur. Rating: Tabelog (Tokyo), Ctrip/携程 (Shanghai), Google Maps (Kuala Lumpur). Status halal Kuala Lumpur dicek di direktori **JAKIM MYeHALAL**; label ✅ hanya bila ditemukan (sebagian besar di level perusahaan, bukan outlet). Tarif LRT/MRT dari kalkulator resmi MyRapid PULSE; jadwal KTM Komuter dari PDF resmi KTMB. Kurs: ECB via Frankfurter (7 Okt 2026). Waktu jalan kaki & menit metro bertanda *est.* adalah perkiraan. Daftar lengkap sumber & hal yang belum terverifikasi ada di bagian bawah tiap halaman.

## Kredit foto (Wikimedia Commons)
Semua foto berasal dari Wikimedia Commons dengan lisensi bebas (CC0 / CC BY / CC BY-SA / domain publik) dan telah diperkecil (maks. 1024 px). Foto makanan adalah **ilustrasi jenis hidangan**, bukan foto restoran yang disebut (kecuali `shfood-lige.jpg`, foto toko permen pir City Temple; `klfood-seleraputra.jpg`, foto Selera Putra; dan `klfood-wings.jpg`, foto sayap ayam Wong Ah Wah). Lisensi CC BY-SA berlaku untuk foto turunan ini.

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

### Kuala Lumpur
| File | Judul Commons | Pembuat | Lisensi |
|---|---|---|---|
| `photos/kl-petronas-1.jpg` | [File:2016 Kuala Lumpur, Petronas Towers (01).jpg](https://commons.wikimedia.org/wiki/File:2016_Kuala_Lumpur,_Petronas_Towers_(01).jpg) | Marcin Konsek | CC BY-SA 4.0 |
| `photos/kl-petronas-2.jpg` | [File:MY-KLCC-skybridge-01.jpg](https://commons.wikimedia.org/wiki/File:MY-KLCC-skybridge-01.jpg) | Balou46 | CC BY-SA 4.0 |
| `photos/kl-petronas-3.jpg` | [File:The skybridge that connects both Petronas Towers (18355826554).jpg](https://commons.wikimedia.org/wiki/File:The_skybridge_that_connects_both_Petronas_Towers_(18355826554).jpg) | Jorge Láscar from Melbourne, Australia | CC BY 2.0 |
| `photos/kl-klccpark-1.jpg` | [File:(MYS-Kuala Lumpur) KLCC Park 2025-01-28.jpg](https://commons.wikimedia.org/wiki/File:(MYS-Kuala_Lumpur)_KLCC_Park_2025-01-28.jpg) | S5A-0043 | CC BY 4.0 |
| `photos/kl-klccpark-2.jpg` | [File:2016 Kuala Lumpur, Park KLCC i Suria KLCC.jpg](https://commons.wikimedia.org/wiki/File:2016_Kuala_Lumpur,_Park_KLCC_i_Suria_KLCC.jpg) | Marcin Konsek | CC BY-SA 4.0 |
| `photos/kl-klccpark-3.jpg` | [File:Hexagon Pond of KLCC.jpg](https://commons.wikimedia.org/wiki/File:Hexagon_Pond_of_KLCC.jpg) | PulauKakatua19 | CC BY-SA 4.0 |
| `photos/kl-aquaria-1.jpg` | [File:Underwater tunnel in Aquaria KLCC.jpg](https://commons.wikimedia.org/wiki/File:Underwater_tunnel_in_Aquaria_KLCC.jpg) | Phalinn Ooi from Kuala Lumpur, Malaysia | CC BY 2.0 |
| `photos/kl-aquaria-2.jpg` | [File:Inside Aquaria KLCC.jpg](https://commons.wikimedia.org/wiki/File:Inside_Aquaria_KLCC.jpg) | Phalinn Ooi from Kuala Lumpur, Malaysia | CC BY 2.0 |
| `photos/kl-aquaria-3.jpg` | [File:Aquaria KLCC fish tank.jpg](https://commons.wikimedia.org/wiki/File:Aquaria_KLCC_fish_tank.jpg) | SAM Cheong | CC BY-SA 2.0 |
| `photos/kl-syakirin-1.jpg` | [File:Masjid As-Syakirin KLCC, Kuala Lumpur 20250121 142541.jpg](https://commons.wikimedia.org/wiki/File:Masjid_As-Syakirin_KLCC,_Kuala_Lumpur_20250121_142541.jpg) | Wiki Farazi | CC0 |
| `photos/kl-syakirin-2.jpg` | [File:As-Syakirin Mosque (1).jpg](https://commons.wikimedia.org/wiki/File:As-Syakirin_Mosque_(1).jpg) | Radosław Botev | CC BY 3.0 pl |
| `photos/kl-syakirin-3.jpg` | [File:As Syakirin Mosque, Kuala Lumpur.jpg](https://commons.wikimedia.org/wiki/File:As_Syakirin_Mosque,_Kuala_Lumpur.jpg) | User:Two hundred percent | CC BY-SA 3.0 |
| `photos/kl-kgbaru-1.jpg` | [File:Kuala Lumpur skyline and Petronas Twin Towers night view from Kampung Baru.jpg 01.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_skyline_and_Petronas_Twin_Towers_night_view_from_Kampung_Baru.jpg_01.jpg) | ELIZABETH XIONG | CC BY 4.0 |
| `photos/kl-kgbaru-2.jpg` | [File:Kampung Baru in 2026.jpg](https://commons.wikimedia.org/wiki/File:Kampung_Baru_in_2026.jpg) | Renek78 | CC0 |
| `photos/kl-kgbaru-3.jpg` | [File:Masjid Jamek Kampung Baru.jpg](https://commons.wikimedia.org/wiki/File:Masjid_Jamek_Kampung_Baru.jpg) | Elisa.rolle | CC BY-SA 4.0 |
| `photos/kl-saloma-1.jpg` | [File:Saloma Link Bridge and KLCC (211210).jpg](https://commons.wikimedia.org/wiki/File:Saloma_Link_Bridge_and_KLCC_(211210).jpg) | *angys* | CC BY-SA 4.0 |
| `photos/kl-saloma-2.jpg` | [File:Saloma Link at night - 2020-02.jpg](https://commons.wikimedia.org/wiki/File:Saloma_Link_at_night_-_2020-02.jpg) | Azizibasri Mograph | CC BY 3.0 |
| `photos/kl-saloma-3.jpg` | [File:Saloma Link Bridge linkway (211210).jpg](https://commons.wikimedia.org/wiki/File:Saloma_Link_Bridge_linkway_(211210).jpg) | *angys* | CC BY-SA 4.0 |
| `photos/kl-symphony-1.jpg` | [File:2016 Kuala Lumpur, Park KLCC, Fontanna na jeziorze Symphony (08).jpg](https://commons.wikimedia.org/wiki/File:2016_Kuala_Lumpur,_Park_KLCC,_Fontanna_na_jeziorze_Symphony_(08).jpg) | Marcin Konsek | CC BY-SA 4.0 |
| `photos/kl-symphony-2.jpg` | [File:Kuala Lumpur Lake Symphony 1.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Lake_Symphony_1.jpg) | Kondephy | CC BY-SA 4.0 |
| `photos/kl-symphony-3.jpg` | [File:Symphony Lake Fountain Show KLCC Park - panoramio.jpg](https://commons.wikimedia.org/wiki/File:Symphony_Lake_Fountain_Show_KLCC_Park_-_panoramio.jpg) | arches | CC BY-SA 3.0 |
| `photos/kl-batucaves-1.jpg` | [File:Batu Caves Murugan Statue and Stairs 2015.jpg](https://commons.wikimedia.org/wiki/File:Batu_Caves_Murugan_Statue_and_Stairs_2015.jpg) | KQuhen | CC BY-SA 4.0 |
| `photos/kl-batucaves-2.jpg` | [File:20190821 Batu Caves entrance-2.jpg](https://commons.wikimedia.org/wiki/File:20190821_Batu_Caves_entrance-2.jpg) | — | CC0 |
| `photos/kl-batucaves-3.jpg` | [File:Batu Caves View from Stairs 2015.jpg](https://commons.wikimedia.org/wiki/File:Batu_Caves_View_from_Stairs_2015.jpg) | KQuhen | CC BY-SA 4.0 |
| `photos/kl-negara-1.jpg` | [File:201906 National Mosque of Malaysia 04.jpg](https://commons.wikimedia.org/wiki/File:201906_National_Mosque_of_Malaysia_04.jpg) | Jonashtand | CC BY-SA 4.0 |
| `photos/kl-negara-2.jpg` | [File:20190822 National Mosque of Malaysia entrance-1.jpg](https://commons.wikimedia.org/wiki/File:20190822_National_Mosque_of_Malaysia_entrance-1.jpg) | — | CC0 |
| `photos/kl-negara-3.jpg` | [File:Islamic geometric patterns are used throughout Masjid Negara (18356862594).jpg](https://commons.wikimedia.org/wiki/File:Islamic_geometric_patterns_are_used_throughout_Masjid_Negara_(18356862594).jpg) | Jorge Láscar from Melbourne, Australia | CC BY 2.0 |
| `photos/kl-iamm-1.jpg` | [File:Islamic Arts Museum Malaysia Exterior (May 2022) - img 01.jpg](https://commons.wikimedia.org/wiki/File:Islamic_Arts_Museum_Malaysia_Exterior_(May_2022)_-_img_01.jpg) | Chainwit. | CC BY-SA 4.0 |
| `photos/kl-iamm-2.jpg` | [File:Interior of the Islamic Arts Museum Malaysia November 2017.jpg](https://commons.wikimedia.org/wiki/File:Interior_of_the_Islamic_Arts_Museum_Malaysia_November_2017.jpg) | Nick-D | CC BY-SA 4.0 |
| `photos/kl-iamm-3.jpg` | [File:Islamic Arts Museum Malaysia (18358991543).jpg](https://commons.wikimedia.org/wiki/File:Islamic_Arts_Museum_Malaysia_(18358991543).jpg) | Jorge Láscar from Melbourne, Australia | CC BY 2.0 |
| `photos/kl-birdpark-1.jpg` | [File:Bird Park in Kuala Lumpur (Malaysia) (1).jpg](https://commons.wikimedia.org/wiki/File:Bird_Park_in_Kuala_Lumpur_(Malaysia)_(1).jpg) | Frostpolar | CC BY-SA 4.0 |
| `photos/kl-birdpark-2.jpg` | [File:Bird Park in Kuala Lumpur (Malaysia) (2).jpg](https://commons.wikimedia.org/wiki/File:Bird_Park_in_Kuala_Lumpur_(Malaysia)_(2).jpg) | Frostpolar | CC BY-SA 4.0 |
| `photos/kl-birdpark-3.jpg` | [File:Behind the waterfall (25509894683).jpg](https://commons.wikimedia.org/wiki/File:Behind_the_waterfall_(25509894683).jpg) | Thomas Quine | CC BY 2.0 |
| `photos/kl-mjamek-1.jpg` | [File:Kuala Lumpur Malaysia Masjid-Jamek-01.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Malaysia_Masjid-Jamek-01.jpg) | CEphoto, Uwe Aranas | CC BY-SA 3.0 |
| `photos/kl-mjamek-2.jpg` | [File:Masjid Jamek at night 20 Jan 2019.jpg](https://commons.wikimedia.org/wiki/File:Masjid_Jamek_at_night_20_Jan_2019.jpg) | Derkommander0916 | CC BY-SA 4.0 |
| `photos/kl-mjamek-3.jpg` | [File:River of Life at Masjid Jamek.jpg](https://commons.wikimedia.org/wiki/File:River_of_Life_at_Masjid_Jamek.jpg) | Awan Senja | CC BY-SA 3.0 |
| `photos/kl-merdeka-1.jpg` | [File:Sultan Abdul Samad Building and Merdeka Square, Kuala Lumpur.jpg](https://commons.wikimedia.org/wiki/File:Sultan_Abdul_Samad_Building_and_Merdeka_Square,_Kuala_Lumpur.jpg) | Khairil Yusof | CC BY 2.0 |
| `photos/kl-merdeka-2.jpg` | [File:Sultan Abdul Samad Clock viewed from the Merdeka Square.jpg](https://commons.wikimedia.org/wiki/File:Sultan_Abdul_Samad_Clock_viewed_from_the_Merdeka_Square.jpg) | Maishootoniphone | CC BY-SA 4.0 |
| `photos/kl-merdeka-3.jpg` | [File:Merdeka Square Malaysia.jpg](https://commons.wikimedia.org/wiki/File:Merdeka_Square_Malaysia.jpg) | This photo was taken by Anton Zelenov. Please credit this with : Photo : Anton Z | CC BY-SA 3.0 |
| `photos/kl-cm-1.jpg` | [File:Central Market Kuala Lumpur.jpg](https://commons.wikimedia.org/wiki/File:Central_Market_Kuala_Lumpur.jpg) | Aumars | CC BY-SA 4.0 |
| `photos/kl-cm-2.jpg` | [File:Interior of Central Market, Kuala Lumpur.jpg](https://commons.wikimedia.org/wiki/File:Interior_of_Central_Market,_Kuala_Lumpur.jpg) | Wee Hong | CC BY-SA 4.0 |
| `photos/kl-cm-3.jpg` | [File:Central Market at nightfall.jpg](https://commons.wikimedia.org/wiki/File:Central_Market_at_nightfall.jpg) | Wee Hong | CC BY-SA 4.0 |
| `photos/kl-petaling-1.jpg` | [File:Jalan Petaling 2024.jpg](https://commons.wikimedia.org/wiki/File:Jalan_Petaling_2024.jpg) | ほっきー | CC0 |
| `photos/kl-petaling-2.jpg` | [File:Busy Petaling Street.jpg](https://commons.wikimedia.org/wiki/File:Busy_Petaling_Street.jpg) | Rruunnaa | CC BY 4.0 |
| `photos/kl-petaling-3.jpg` | [File:Jalan Petaling, Pasar Seni 20260625 - 15.jpg](https://commons.wikimedia.org/wiki/File:Jalan_Petaling,_Pasar_Seni_20260625_-_15.jpg) | Wiki Asmah | CC BY 4.0 |
| `photos/kl-putra-1.jpg` | [File:Masjid Putra, Putrajaya.jpg](https://commons.wikimedia.org/wiki/File:Masjid_Putra,_Putrajaya.jpg) | Muhammad Faqih | CC BY-SA 4.0 |
| `photos/kl-putra-2.jpg` | [File:Masjid Putra - Main Prayer Hall.jpg](https://commons.wikimedia.org/wiki/File:Masjid_Putra_-_Main_Prayer_Hall.jpg) | Slices of Light | CC BY-SA 4.0 |
| `photos/kl-putra-3.jpg` | [File:Putra Mosque in sunset.jpg](https://commons.wikimedia.org/wiki/File:Putra_Mosque_in_sunset.jpg) | Dlinemedia | CC BY-SA 4.0 |
| `photos/kl-dataranputra-1.jpg` | [File:Dataran Putra Square dan Masjid Putra.jpg](https://commons.wikimedia.org/wiki/File:Dataran_Putra_Square_dan_Masjid_Putra.jpg) | Slices of Light | CC BY-SA 4.0 |
| `photos/kl-dataranputra-2.jpg` | [File:Putra Square 20231107.jpg](https://commons.wikimedia.org/wiki/File:Putra_Square_20231107.jpg) | InterEdit88 | CC0 |
| `photos/kl-dataranputra-3.jpg` | [File:Putrajaya Lake February 2026.jpg](https://commons.wikimedia.org/wiki/File:Putrajaya_Lake_February_2026.jpg) | Azreey | CC BY-SA 4.0 |
| `photos/kl-pavilion-1.jpg` | [File:Pavilion Kuala Lumpur at night (230127) 01.jpg](https://commons.wikimedia.org/wiki/File:Pavilion_Kuala_Lumpur_at_night_(230127)_01.jpg) | *angys* | CC BY-SA 4.0 |
| `photos/kl-pavilion-2.jpg` | [File:Pavilion KL Interior 1.jpg](https://commons.wikimedia.org/wiki/File:Pavilion_KL_Interior_1.jpg) | PulauKakatua19 | CC BY-SA 4.0 |
| `photos/kl-pavilion-3.jpg` | [File:Exterior of Pavilion KL.jpg](https://commons.wikimedia.org/wiki/File:Exterior_of_Pavilion_KL.jpg) | *angys* | CC BY-SA 4.0 |
| `photos/kl-alor-1.jpg` | [File:Jalan Alor Kuala Lumpur.jpg](https://commons.wikimedia.org/wiki/File:Jalan_Alor_Kuala_Lumpur.jpg) | Alexander Synaptic | CC BY-SA 4.0 |
| `photos/kl-alor-2.jpg` | [File:Jalan Alor Street View1.jpg](https://commons.wikimedia.org/wiki/File:Jalan_Alor_Street_View1.jpg) | Alexander Synaptic from Toronto, Canada | CC BY-SA 2.0 |
| `photos/kl-alor-3.jpg` | [File:Alor Street (230127) 03.jpg](https://commons.wikimedia.org/wiki/File:Alor_Street_(230127)_03.jpg) | *angys* | CC BY-SA 4.0 |
| `photos/klfood-nasilemak.jpg` | [File:Nasi lemak on banana leaf.jpg](https://commons.wikimedia.org/wiki/File:Nasi_lemak_on_banana_leaf.jpg) | Jpatokal | CC BY-SA 4.0 |
| `photos/klfood-satay.jpg` | [File:Malaysian Chicken Satay.jpg](https://commons.wikimedia.org/wiki/File:Malaysian_Chicken_Satay.jpg) | ZhengZhou | CC BY-SA 4.0 |
| `photos/klfood-satepadang.jpg` | [File:Sate Padang Grilled.jpg](https://commons.wikimedia.org/wiki/File:Sate_Padang_Grilled.jpg) | Gunawan Kartapranata | CC BY-SA 3.0 |
| `photos/klfood-roticanai.jpg` | [File:Roti canai with dal in Kuala Lumpur, July 2014.jpg](https://commons.wikimedia.org/wiki/File:Roti_canai_with_dal_in_Kuala_Lumpur,_July_2014.jpg) | Sunnya343 | CC BY-SA 4.0 |
| `photos/klfood-tehtarik.jpg` | [File:Teh tarik man pulling tea.jpg](https://commons.wikimedia.org/wiki/File:Teh_tarik_man_pulling_tea.jpg) | Cheng from Austin, US | CC BY-SA 2.0 |
| `photos/klfood-cendol.jpg` | [File:CENDOL DURIAN.jpg](https://commons.wikimedia.org/wiki/File:CENDOL_DURIAN.jpg) | Yuvaqueen | CC BY-SA 4.0 |
| `photos/klfood-chickenrice.jpg` | [File:Chicken rice in KL (2).jpg](https://commons.wikimedia.org/wiki/File:Chicken_rice_in_KL_(2).jpg) | brown_colour | CC BY 2.0 |
| `photos/klfood-nasikandar.jpg` | [File:Nasi kandar di Kuala Lumpur.jpg](https://commons.wikimedia.org/wiki/File:Nasi_kandar_di_Kuala_Lumpur.jpg) | Raflinoer32 | CC BY-SA 4.0 |
| `photos/klfood-aiskacang.jpg` | [File:Ais kacang.jpg](https://commons.wikimedia.org/wiki/File:Ais_kacang.jpg) | Andrew Bogott | CC BY-SA 3.0 |
| `photos/klfood-meetarik.jpg` | [File:Mee Tarik Restaurant.jpg](https://commons.wikimedia.org/wiki/File:Mee_Tarik_Restaurant.jpg) | Chongkian | CC BY-SA 4.0 |
| `photos/klfood-amk.jpg` | [File:Air Mata Kuching ( Sweet Monk Fruit Longan Dessert ).jpg](https://commons.wikimedia.org/wiki/File:Air_Mata_Kuching_(_Sweet_Monk_Fruit_Longan_Dessert_).jpg) | Dr.Francostein1975 | CC BY-SA 4.0 |
| `photos/klfood-nasikerabu.jpg` | [File:Nasi kerabu.jpg](https://commons.wikimedia.org/wiki/File:Nasi_kerabu.jpg) | amrufm from Shah Alam, Malaysia | CC BY 2.0 |
| `photos/klfood-murtabak.jpg` | [File:Murtabak.jpg](https://commons.wikimedia.org/wiki/File:Murtabak.jpg) | Mojackjutaily | CC BY-SA 4.0 |
| `photos/klfood-wings.jpg` | [File:WAW chicken wings, Jalan Alor.JPG](https://commons.wikimedia.org/wiki/File:WAW_chicken_wings,_Jalan_Alor.JPG) | DTW | CC BY-SA 3.0 |
| `photos/klfood-seleraputra.jpg` | [File:Selera Putra.jpg](https://commons.wikimedia.org/wiki/File:Selera_Putra.jpg) | *angys* | CC BY-SA 4.0 |
| `photos/klfood-roti-teh.jpg` | [File:Roti canai and Teh Tarik, a typical Malaysian breakfast.jpg](https://commons.wikimedia.org/wiki/File:Roti_canai_and_Teh_Tarik,_a_typical_Malaysian_breakfast.jpg) | Sam Hidayat | CC BY-SA 4.0 |

## Galeri foto tempat utama (tambahan 8 Okt 2026)
Di kartu ringkas tiap hari, setiap tempat utama (kuil, landmark, museum, taman, dll.; bukan restoran/transit) kini punya carousel **6 foto** yang bisa digeser. Foto lama tetap dipakai, lalu ditambah foto dari Wikimedia Commons (lisensi CC0 / CC BY / CC BY-SA / domain publik, maks. 1024 px, dimuat *lazy*). Tiap foto dipilih dari kategori Commons tempat tersebut dan dicek visual agar benar-benar menampilkan tempat itu. Catatan: patung Unicorn Gundam hanya punya 1 foto berlisensi bebas yang jelas di Commons, jadi galeri itu dilengkapi foto gedung DiverCity Tokyo Plaza (lokasi patung).

### Tokyo — foto galeri tambahan
| File | Judul Commons | Pembuat | Lisensi |
|---|---|---|---|
| `photos/sensoji-g1.jpg` | [File:2018-09-24 Main Hall, Sensoji.jpg](https://commons.wikimedia.org/wiki/File:2018-09-24_Main_Hall,_Sensoji.jpg) | Sergey Galyonkin | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/sensoji-g2.jpg` | [File:Sensoji (50056779378).jpg](https://commons.wikimedia.org/wiki/File:Sensoji_(50056779378).jpg) | Dick Thomas Johnson from Tokyo, Japan | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/nakamise-g1.jpg` | [File:-i---i- (53028239941).jpg](https://commons.wikimedia.org/wiki/File:-i---i-_(53028239941).jpg) | Vitor Coelho Nisida from São Paulo, Brasil | [Public domain](https://commons.wikimedia.org/wiki/File:-i---i-_(53028239941).jpg) |
| `photos/nakamise-g2.jpg` | [File:Sensoji (50057348656).jpg](https://commons.wikimedia.org/wiki/File:Sensoji_(50057348656).jpg) | Dick Thomas Johnson from Tokyo, Japan | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/nakamise-g3.jpg` | [File:Sensoji (52481311989).jpg](https://commons.wikimedia.org/wiki/File:Sensoji_(52481311989).jpg) | Dick Thomas Johnson from Tokyo, Japan | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/nakamise-g4.jpg` | [File:淺草寺 (52852134772).jpg](https://commons.wikimedia.org/wiki/File:%E6%B7%BA%E8%8D%89%E5%AF%BA_(52852134772).jpg) | othree | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/nakamise-g5.jpg` | [File:Sensoji (50057346301).jpg](https://commons.wikimedia.org/wiki/File:Sensoji_(50057346301).jpg) | Dick Thomas Johnson from Tokyo, Japan | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/nakamise-g6.jpg` | [File:Asakusa Nakamise 2021-12 ac.jpg](https://commons.wikimedia.org/wiki/File:Asakusa_Nakamise_2021-12_ac.jpg) | Asturio Cantabrio | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sumida-g1.jpg` | [File:Sumida9 20240309.png](https://commons.wikimedia.org/wiki/File:Sumida9_20240309.png) | Gant223 | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/sumida-g2.jpg` | [File:アクアベース.jpg](https://commons.wikimedia.org/wiki/File:%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%99%E3%83%BC%E3%82%B9.jpg) | Souka Kinmei | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| `photos/sumida-g3.jpg` | [File:サンゴ礁水槽.jpg](https://commons.wikimedia.org/wiki/File:%E3%82%B5%E3%83%B3%E3%82%B4%E7%A4%81%E6%B0%B4%E6%A7%BD.jpg) | Souka Kinmei | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| `photos/skytree-g1.jpg` | [File:Tokyo Skytree at Dusk, Asakusa.jpg](https://commons.wikimedia.org/wiki/File:Tokyo_Skytree_at_Dusk,_Asakusa.jpg) | David Kernan | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| `photos/skytree-g2.jpg` | [File:源森橋から東京スカイツリーとスペーシアX20251108-IMG 4366.jpg](https://commons.wikimedia.org/wiki/File:%E6%BA%90%E6%A3%AE%E6%A9%8B%E3%81%8B%E3%82%89%E6%9D%B1%E4%BA%AC%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%84%E3%83%AA%E3%83%BC%E3%81%A8%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B7%E3%82%A2X20251108-IMG_4366.jpg) | くろふね | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| `photos/meiji-jingu-g1.jpg` | [File:2018-09-22 at Meiji Shrine.jpg](https://commons.wikimedia.org/wiki/File:2018-09-22_at_Meiji_Shrine.jpg) | Sergey Galyonkin | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/meiji-jingu-g2.jpg` | [File:Procession - Meiji Shrine - Tokyo, Japan - DSC05467.jpg](https://commons.wikimedia.org/wiki/File:Procession_-_Meiji_Shrine_-_Tokyo,_Japan_-_DSC05467.jpg) | Daderot | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/takeshita-g1.jpg` | [File:Takeshita Street (52650839618).jpg](https://commons.wikimedia.org/wiki/File:Takeshita_Street_(52650839618).jpg) | Dick Thomas Johnson from Tokyo, Japan | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/takeshita-g2.jpg` | [File:DSC 1969 (29493118225).jpg](https://commons.wikimedia.org/wiki/File:DSC_1969_(29493118225).jpg) | Sylvain Kalache from San Francisco, USA | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/takeshita-g3.jpg` | [File:Harajuku shopping (22064440264).jpg](https://commons.wikimedia.org/wiki/File:Harajuku_shopping_(22064440264).jpg) | Beni Arnold | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/tokyo-camii-g1.jpg` | [File:美しく彩色されたドーム.jpg](https://commons.wikimedia.org/wiki/File:%E7%BE%8E%E3%81%97%E3%81%8F%E5%BD%A9%E8%89%B2%E3%81%95%E3%82%8C%E3%81%9F%E3%83%89%E3%83%BC%E3%83%A0.jpg) | Souka Kinmei | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/tokyo-camii-g2.jpg` | [File:回廊とミナレット.jpg](https://commons.wikimedia.org/wiki/File:%E5%9B%9E%E5%BB%8A%E3%81%A8%E3%83%9F%E3%83%8A%E3%83%AC%E3%83%83%E3%83%88.jpg) | Souka Kinmei | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/shibuya-crossing-g1.jpg` | [File:Shibuya scramble square sky view of crossing (48995414042).jpg](https://commons.wikimedia.org/wiki/File:Shibuya_scramble_square_sky_view_of_crossing_(48995414042).jpg) | Real Estate Japan from Tokyo, Japan | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/shibuya-crossing-g2.jpg` | [File:Shibuya 2019 (46616691412).jpg](https://commons.wikimedia.org/wiki/File:Shibuya_2019_(46616691412).jpg) | msaw89 | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/shibuya-crossing-g3.jpg` | [File:Shibuya 2019 (47983453126).jpg](https://commons.wikimedia.org/wiki/File:Shibuya_2019_(47983453126).jpg) | chinnian from Singapore | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/shibuya-sky-g1.jpg` | [File:View from Shibuya Sky, Tokyo (53047114266).jpg](https://commons.wikimedia.org/wiki/File:View_from_Shibuya_Sky,_Tokyo_(53047114266).jpg) | Clemens Vasters from Viersen, Germany, Germany | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/shibuya-sky-g2.jpg` | [File:Shibuya Sky Observation Deck (53415730632).jpg](https://commons.wikimedia.org/wiki/File:Shibuya_Sky_Observation_Deck_(53415730632).jpg) | Stephen Kelly from San Francisco, CA, USA | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/shibuya-sky-g3.jpg` | [File:Tokyo Tower and Skyscrapers from Shibuya Sky Observation Deck (53416648661).jpg](https://commons.wikimedia.org/wiki/File:Tokyo_Tower_and_Skyscrapers_from_Shibuya_Sky_Observation_Deck_(53416648661).jpg) | Stephen Kelly from San Francisco, CA, USA | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/teamlab-planets-g1.jpg` | [File:Three-generation reflection (48277876332).jpg](https://commons.wikimedia.org/wiki/File:Three-generation_reflection_(48277876332).jpg) | Big Ben in Japan | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/teamlab-planets-g2.jpg` | [File:Japan 2024-04-28 (53891884372).jpg](https://commons.wikimedia.org/wiki/File:Japan_2024-04-28_(53891884372).jpg) | Maarten Heerlien from Voorschoten, The Netherlands | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/teamlab-planets-g3.jpg` | [File:At teamLab Planets (48277793276).jpg](https://commons.wikimedia.org/wiki/File:At_teamLab_Planets_(48277793276).jpg) | Big Ben in Japan | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/divercity-g1.jpg` | [File:Diver-City Tokyo.jpg](https://commons.wikimedia.org/wiki/File:Diver-City_Tokyo.jpg) | ITA-ATU | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/divercity-g2.jpg` | [File:Diver-City Tokyo as see from FCG Building.jpg](https://commons.wikimedia.org/wiki/File:Diver-City_Tokyo_as_see_from_FCG_Building.jpg) | ITA-ATU | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/divercity-g3.jpg` | [File:Calbee Plus in Diver City Tokyo.jpg](https://commons.wikimedia.org/wiki/File:Calbee_Plus_in_Diver_City_Tokyo.jpg) | User:John123521 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| `photos/divercity-g4.jpg` | [File:Fuji Television Network 20211127 03 - Diver City Tokyo 20211127 01.jpg](https://commons.wikimedia.org/wiki/File:Fuji_Television_Network_20211127_03_-_Diver_City_Tokyo_20211127_01.jpg) | 先従隗始 | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/legoland-g1.jpg` | [File:Legoland Tokyo (29137489674).jpg](https://commons.wikimedia.org/wiki/File:Legoland_Tokyo_(29137489674).jpg) | nakashi from Chofu, Tokyo, JAPAN | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/legoland-g2.jpg` | [File:Legoland Tokyo (29137540724).jpg](https://commons.wikimedia.org/wiki/File:Legoland_Tokyo_(29137540724).jpg) | nakashi from Chofu, Tokyo, JAPAN | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/legoland-g3.jpg` | [File:Legoland @ Odaiba (9227445562).jpg](https://commons.wikimedia.org/wiki/File:Legoland_@_Odaiba_(9227445562).jpg) | Guilhem Vellut from Annecy, France | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/odaiba-rainbow-bridge-g1.jpg` | [File:レインボーブリッジ (47172553112).jpg](https://commons.wikimedia.org/wiki/File:%E3%83%AC%E3%82%A4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%96%E3%83%AA%E3%83%83%E3%82%B8_(47172553112).jpg) | Melvin Loi from Macau, Macau | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/odaiba-rainbow-bridge-g2.jpg` | [File:レインボーブリッジ02.jpg](https://commons.wikimedia.org/wiki/File:%E3%83%AC%E3%82%A4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%96%E3%83%AA%E3%83%83%E3%82%B802.jpg) | Ai yamaishi | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |

### Shanghai — foto galeri tambahan
| File | Judul Commons | Pembuat | Lisensi |
|---|---|---|---|
| `photos/sh-yu-g1.jpg` | [File:Shanghai - Yu Garden - 0034.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_-_Yu_Garden_-_0034.jpg) | Stefan Fussan | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| `photos/sh-yu-g2.jpg` | [File:2015-09-26-070617 - Shanghai, Yu Yuan Garten.jpg](https://commons.wikimedia.org/wiki/File:2015-09-26-070617_-_Shanghai,_Yu_Yuan_Garten.jpg) | Zossolino | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-yu-g3.jpg` | [File:2015-09-26-061452 - Shanghai, Yu Yuan Garten.jpg](https://commons.wikimedia.org/wiki/File:2015-09-26-061452_-_Shanghai,_Yu_Yuan_Garten.jpg) | Zossolino | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-citygod-g1.jpg` | [File:City God Temple Tourism Area 1.jpg](https://commons.wikimedia.org/wiki/File:City_God_Temple_Tourism_Area_1.jpg) | Leiem | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-citygod-g2.jpg` | [File:2024-Apr Shanghai City God Temple 上海城隍廟 - img 01.jpg](https://commons.wikimedia.org/wiki/File:2024-Apr_Shanghai_City_God_Temple_%E4%B8%8A%E6%B5%B7%E5%9F%8E%E9%9A%8D%E5%BB%9F_-_img_01.jpg) | Chainwit. | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| `photos/sh-citygod-g3.jpg` | [File:City God Temple Tourism Area - Laomiao Huangjin Yinlou.jpg](https://commons.wikimedia.org/wiki/File:City_God_Temple_Tourism_Area_-_Laomiao_Huangjin_Yinlou.jpg) | Leiem | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-citygod-g4.jpg` | [File:The Temple of the Town Deity in Shanghai 01 2015-09.jpg](https://commons.wikimedia.org/wiki/File:The_Temple_of_the_Town_Deity_in_Shanghai_01_2015-09.jpg) | 猫猫的日记本 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-citygod-g5.jpg` | [File:Shanghai (December 9, 2015) - 12.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_(December_9,_2015)_-_12.jpg) | Another Believer | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-citygod-g6.jpg` | [File:上海城隍庙 - panoramio.jpg](https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E6%B5%B7%E5%9F%8E%E9%9A%8D%E5%BA%99_-_panoramio.jpg) | 空之境界 | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| `photos/sh-nanjing-g1.jpg` | [File:Nanjing Road at night, looking towards Xinshijie.jpg](https://commons.wikimedia.org/wiki/File:Nanjing_Road_at_night,_looking_towards_Xinshijie.jpg) | Benlisquare | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-nanjing-g2.jpg` | [File:Taikang Food near Maochang Glasses-20220828.jpg](https://commons.wikimedia.org/wiki/File:Taikang_Food_near_Maochang_Glasses-20220828.jpg) | Shwangtianyuan | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-nanjing-g3.jpg` | [File:Laomiao Jewellery at 462 East Nanjing Road-20220828.jpg](https://commons.wikimedia.org/wiki/File:Laomiao_Jewellery_at_462_East_Nanjing_Road-20220828.jpg) | Shwangtianyuan | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-bund-g1.jpg` | [File:中国上海外滩.jpg](https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E5%A4%96%E6%BB%A9.jpg) | ZSYYYYYY | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/sh-bund-g2.jpg` | [File:Shanghai (December 10, 2015) - 112.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_(December_10,_2015)_-_112.jpg) | Another Believer | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-bund-g3.jpg` | [File:Shanghai The Bund (22217999000).jpg](https://commons.wikimedia.org/wiki/File:Shanghai_The_Bund_(22217999000).jpg) | Gary Todd from Xinzheng, China | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/sh-museum-g1.jpg` | [File:Shanghai - People's Square (1392428195).jpg](https://commons.wikimedia.org/wiki/File:Shanghai_-_People%27s_Square_(1392428195).jpg) | KimonBerlin | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/sh-museum-g2.jpg` | [File:People's Square, Huangpu, Shanghai, China, 200000 - panoramio.jpg](https://commons.wikimedia.org/wiki/File:People%27s_Square,_Huangpu,_Shanghai,_China,_200000_-_panoramio.jpg) | Fumihiko Ueno | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| `photos/sh-museum-g3.jpg` | [File:20505-Shanghai (32225237174).jpg](https://commons.wikimedia.org/wiki/File:20505-Shanghai_(32225237174).jpg) | xiquinhosilva from Cacau | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/sh-museum-g4.jpg` | [File:Shanghai Museum 20523-Shanghai (33070886185).jpg](https://commons.wikimedia.org/wiki/File:Shanghai_Museum_20523-Shanghai_(33070886185).jpg) | xiquinhosilva | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/sh-nhm-g1.jpg` | [File:23009-Shanghai (32687845200).jpg](https://commons.wikimedia.org/wiki/File:23009-Shanghai_(32687845200).jpg) | xiquinhosilva from Cacau | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/sh-nhm-g2.jpg` | [File:23082-Shanghai (32224363614).jpg](https://commons.wikimedia.org/wiki/File:23082-Shanghai_(32224363614).jpg) | xiquinhosilva from Cacau | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/sh-nhm-g3.jpg` | [File:Shanghai (December 5, 2015) - 06.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_(December_5,_2015)_-_06.jpg) | Another Believer | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-tianzifang-g1.jpg` | [File:View in Tianzifang Area 1.jpg](https://commons.wikimedia.org/wiki/File:View_in_Tianzifang_Area_1.jpg) | そらみみ | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-tianzifang-g2.jpg` | [File:Tianzifang im Sommer 2025.jpg](https://commons.wikimedia.org/wiki/File:Tianzifang_im_Sommer_2025.jpg) | LunMa4 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| `photos/sh-tianzifang-g3.jpg` | [File:Tianzifang 21641-Shanghai (33029166756).jpg](https://commons.wikimedia.org/wiki/File:Tianzifang_21641-Shanghai_(33029166756).jpg) | xiquinhosilva | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/sh-soa-g1.jpg` | [File:上海海洋水族馆.jpg](https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E6%B5%B7%E6%B5%B7%E6%B4%8B%E6%B0%B4%E6%97%8F%E9%A6%86.jpg) | Lt2818 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-soa-g2.jpg` | [File:Pink Jellyfish.jpg](https://commons.wikimedia.org/wiki/File:Pink_Jellyfish.jpg) | Luvcaramel | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-soa-g3.jpg` | [File:Shark in Shanghai 2.JPG](https://commons.wikimedia.org/wiki/File:Shark_in_Shanghai_2.JPG) | J. Patrick Fischer | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| `photos/sh-soa-g4.jpg` | [File:Ducks in Shanghai Ocean Aquarium.jpg](https://commons.wikimedia.org/wiki/File:Ducks_in_Shanghai_Ocean_Aquarium.jpg) | Aapo Haapanen | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/sh-opt-g1.jpg` | [File:Shanghai Oriental Pearl Tower-20150516-RM-123453.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_Oriental_Pearl_Tower-20150516-RM-123453.jpg) | Ermell | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-opt-g2.jpg` | [File:Pudong area of Shanghai, at night.jpg](https://commons.wikimedia.org/wiki/File:Pudong_area_of_Shanghai,_at_night.jpg) | Peter K Burian | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-opt-g3.jpg` | [File:Shanghai - Pudong Skyline - 0010.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_-_Pudong_Skyline_-_0010.jpg) | Stefan Fussan | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| `photos/sh-tower-g1.jpg` | [File:Shanghai skyscrapers 5166285.jpg](https://commons.wikimedia.org/wiki/File:Shanghai_skyscrapers_5166285.jpg) | Ermell | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/sh-tower-g2.jpg` | [File:View from the Shanghai Tower observatory deck.jpg](https://commons.wikimedia.org/wiki/File:View_from_the_Shanghai_Tower_observatory_deck.jpg) | Chatterjee.kaushik | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/sh-tower-g3.jpg` | [File:Huangpu River1.jpg](https://commons.wikimedia.org/wiki/File:Huangpu_River1.jpg) | Janak Bhatta | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |

### Kuala Lumpur — foto galeri tambahan
| File | Judul Commons | Pembuat | Lisensi |
|---|---|---|---|
| `photos/kl-klccpark-g1.jpg` | [File:2016 Kuala Lumpur, Park KLCC, Fontanna na jeziorze Symphony (05).jpg](https://commons.wikimedia.org/wiki/File:2016_Kuala_Lumpur,_Park_KLCC,_Fontanna_na_jeziorze_Symphony_(05).jpg) | Marcin Konsek | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-klccpark-g2.jpg` | [File:Kuala Lumpur. KLCC Park. 2019-12-09 22-22-43.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur._KLCC_Park._2019-12-09_22-22-43.jpg) | Shesmax | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-klccpark-g3.jpg` | [File:Landscape- Kuala Lumpur (24972614696).jpg](https://commons.wikimedia.org/wiki/File:Landscape-_Kuala_Lumpur_(24972614696).jpg) | cloud.shepherd | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-petronas-g1.jpg` | [File:The Twins SE Asia 2019 (49171985716).jpg](https://commons.wikimedia.org/wiki/File:The_Twins_SE_Asia_2019_(49171985716).jpg) | James Kerwin from Tbilisi | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-petronas-g2.jpg` | [File:Petronas Towers (24403756704).jpg](https://commons.wikimedia.org/wiki/File:Petronas_Towers_(24403756704).jpg) | cloud.shepherd | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-petronas-g3.jpg` | [File:KLCC Park Petronas Twin Towers (53331134437).jpg](https://commons.wikimedia.org/wiki/File:KLCC_Park_Petronas_Twin_Towers_(53331134437).jpg) | Takeshi Aida from Hong Kong, Hong Kong | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/kl-aquaria-g1.jpg` | [File:Aquarium Kulalumpur Malaysia (2).JPG](https://commons.wikimedia.org/wiki/File:Aquarium_Kulalumpur_Malaysia_(2).JPG) | Shahnoor Habib Munmun | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| `photos/kl-aquaria-g2.jpg` | [File:Aquarium Kulalumpur Malaysia.JPG](https://commons.wikimedia.org/wiki/File:Aquarium_Kulalumpur_Malaysia.JPG) | Shahnoor Habib Munmun | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| `photos/kl-aquaria-g3.jpg` | [File:14 DEC 2007 Inside Aquaria KLCC Viewing Sharks Inside The Tunnel.jpg](https://commons.wikimedia.org/wiki/File:14_DEC_2007_Inside_Aquaria_KLCC_Viewing_Sharks_Inside_The_Tunnel.jpg) | Only Truth | [Public domain](https://commons.wikimedia.org/wiki/File:14_DEC_2007_Inside_Aquaria_KLCC_Viewing_Sharks_Inside_The_Tunnel.jpg) |
| `photos/kl-saloma-g1.jpg` | [File:Saloma link and KL cityscape (49525938062).jpg](https://commons.wikimedia.org/wiki/File:Saloma_link_and_KL_cityscape_(49525938062).jpg) | Sheikh Izham from Malaysia | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-saloma-g2.jpg` | [File:Saloma Bridge (49574882332).jpg](https://commons.wikimedia.org/wiki/File:Saloma_Bridge_(49574882332).jpg) | Sheikh Izham from Malaysia | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-saloma-g3.jpg` | [File:Saloma link at night.jpg](https://commons.wikimedia.org/wiki/File:Saloma_link_at_night.jpg) | Sheikh Izham from Malaysia | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-symphony-g1.jpg` | [File:Kuala Lumpur Lake Symphony 2.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Lake_Symphony_2.jpg) | Kondephy | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-symphony-g2.jpg` | [File:KLCC Park Fountain (53332466970).jpg](https://commons.wikimedia.org/wiki/File:KLCC_Park_Fountain_(53332466970).jpg) | Takeshi Aida from Hong Kong, Hong Kong | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/kl-symphony-g3.jpg` | [File:KLCC (8366586489).jpg](https://commons.wikimedia.org/wiki/File:KLCC_(8366586489).jpg) | Marufish from Alor Setar, Malaysia | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/kl-batucaves-g1.jpg` | [File:Batu Caves (1) 20230710 (53332465285).jpg](https://commons.wikimedia.org/wiki/File:Batu_Caves_(1)_20230710_(53332465285).jpg) | Takeshi Aida from Hong Kong, Hong Kong | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/kl-batucaves-g2.jpg` | [File:Batu Caves (4) 20230710 (53332468110).jpg](https://commons.wikimedia.org/wiki/File:Batu_Caves_(4)_20230710_(53332468110).jpg) | Takeshi Aida from Hong Kong, Hong Kong | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/kl-batucaves-g3.jpg` | [File:Batu Caves plaza (220714).jpg](https://commons.wikimedia.org/wiki/File:Batu_Caves_plaza_(220714).jpg) | *angys* | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-negara-g1.jpg` | [File:2016 Kuala Lumpur, Meczet Narodowy Malezji (04).jpg](https://commons.wikimedia.org/wiki/File:2016_Kuala_Lumpur,_Meczet_Narodowy_Malezji_(04).jpg) | Marcin Konsek | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-negara-g2.jpg` | [File:2016 Kuala Lumpur, Meczet Narodowy Malezji (06).jpg](https://commons.wikimedia.org/wiki/File:2016_Kuala_Lumpur,_Meczet_Narodowy_Malezji_(06).jpg) | Marcin Konsek | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-negara-g3.jpg` | [File:Kuala Lumpur, Malaysia (51251661993).jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur,_Malaysia_(51251661993).jpg) | Just a Brazilian man from Brazil | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-iamm-g1.jpg` | [File:Kuala Lumpur Malaysia Islamic-Arts-Museum-01.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Malaysia_Islamic-Arts-Museum-01.jpg) | CEphoto, Uwe Aranas | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| `photos/kl-iamm-g2.jpg` | [File:Beautiful tiles on the Islamic Arts Museum Malaysia façade (18982378051).jpg](https://commons.wikimedia.org/wiki/File:Beautiful_tiles_on_the_Islamic_Arts_Museum_Malaysia_fa%C3%A7ade_(18982378051).jpg) | Jorge Láscar from Melbourne, Australia | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-iamm-g3.jpg` | [File:2014 Borneo Luyten-De-Hauwere-Islamic-Arts-Museum-Malaysia.jpg](https://commons.wikimedia.org/wiki/File:2014_Borneo_Luyten-De-Hauwere-Islamic-Arts-Museum-Malaysia.jpg) | Denis Luyten | [Public domain](https://commons.wikimedia.org/wiki/File:2014_Borneo_Luyten-De-Hauwere-Islamic-Arts-Museum-Malaysia.jpg) |
| `photos/kl-birdpark-g1.jpg` | [File:KL Bird Park 6.jpg](https://commons.wikimedia.org/wiki/File:KL_Bird_Park_6.jpg) | RivieraBarnes | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-birdpark-g2.jpg` | [File:Entrance waterfall Kuala Lumpur Bird Park.jpg](https://commons.wikimedia.org/wiki/File:Entrance_waterfall_Kuala_Lumpur_Bird_Park.jpg) | Stress 043 | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| `photos/kl-birdpark-g3.jpg` | [File:KLBP Etang.jpg](https://commons.wikimedia.org/wiki/File:KLBP_Etang.jpg) | Léodras | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-merdeka-g1.jpg` | [File:Kuala Lumpur. The Sultan Abdul Samad Building. 2019-12-01 23-26-15.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur._The_Sultan_Abdul_Samad_Building._2019-12-01_23-26-15.jpg) | Shesmax | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-merdeka-g2.jpg` | [File:2016 Kuala Lumpur, Budynek Sułtana Abdula Samada (01).jpg](https://commons.wikimedia.org/wiki/File:2016_Kuala_Lumpur,_Budynek_Su%C5%82tana_Abdula_Samada_(01).jpg) | Marcin Konsek | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-merdeka-g3.jpg` | [File:Kuala Lumpur-Malasia05.JPG](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur-Malasia05.JPG) | Diego Delso | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| `photos/kl-mjamek-g1.jpg` | [File:KL Masjid Jamek Sep25 dusk.jpg](https://commons.wikimedia.org/wiki/File:KL_Masjid_Jamek_Sep25_dusk.jpg) | Man77 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-mjamek-g2.jpg` | [File:Kuala Lumpur Malaysia Masjid-Jamek-03.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Malaysia_Masjid-Jamek-03.jpg) | CEphoto, Uwe Aranas | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| `photos/kl-mjamek-g3.jpg` | [File:Masjid Jamek (49472814021).jpg](https://commons.wikimedia.org/wiki/File:Masjid_Jamek_(49472814021).jpg) | Dennis Sylvester Hurd from Minuwangoda, WP, Sri Lanka, Canada | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-petaling-g1.jpg` | [File:Kuala Lumpur. Jalan Petaling. 2019-12-07 15-24-13.jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur._Jalan_Petaling._2019-12-07_15-24-13.jpg) | Shesmax | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-petaling-g2.jpg` | [File:Part of Petaling Street in November 2017.jpg](https://commons.wikimedia.org/wiki/File:Part_of_Petaling_Street_in_November_2017.jpg) | Nick-D | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-petaling-g3.jpg` | [File:Papan Tanda Central Market.jpg](https://commons.wikimedia.org/wiki/File:Papan_Tanda_Central_Market.jpg) | Blusjai | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-putra-g1.jpg` | [File:Putra Mosque being reflected in the lake (crop).jpg](https://commons.wikimedia.org/wiki/File:Putra_Mosque_being_reflected_in_the_lake_(crop).jpg) | Azuladnan | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-putra-g2.jpg` | [File:RF20160422 Putrajaya-147.jpg](https://commons.wikimedia.org/wiki/File:RF20160422_Putrajaya-147.jpg) | Ariff Shah Sopian | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-putra-g3.jpg` | [File:Putra Mosque Version 1.jpg](https://commons.wikimedia.org/wiki/File:Putra_Mosque_Version_1.jpg) | Basavaraj M | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-dataranputra-g1.jpg` | [File:Putrajaya sign 2024 in front of Perdana Putra.jpg](https://commons.wikimedia.org/wiki/File:Putrajaya_sign_2024_in_front_of_Perdana_Putra.jpg) | Stress 043 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-dataranputra-g2.jpg` | [File:At Putra Square.jpg](https://commons.wikimedia.org/wiki/File:At_Putra_Square.jpg) | Slices of Light | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-dataranputra-g3.jpg` | [File:Putra Square Flags Putrajaya.jpg](https://commons.wikimedia.org/wiki/File:Putra_Square_Flags_Putrajaya.jpg) | QianCheng | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-alor-g1.jpg` | [File:Busy food street = happy (5086911721).jpg](https://commons.wikimedia.org/wiki/File:Busy_food_street_%3D_happy_(5086911721).jpg) | McKay Savage from London, UK | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-alor-g2.jpg` | [File:Jalan Alor - Kuala Lumpur.jpg](https://commons.wikimedia.org/wiki/File:Jalan_Alor_-_Kuala_Lumpur.jpg) | IQRemix | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) |
| `photos/kl-alor-g3.jpg` | [File:Kuala Lumpur - Malaysia (50931804213).jpg](https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_-_Malaysia_(50931804213).jpg) | Rômulo Gama Ferreira from Vitória-ES | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| `photos/kl-pavilion-g1.jpg` | [File:Bukit Bintang in Kuala Lumpur, Malaysia - 03.jpg](https://commons.wikimedia.org/wiki/File:Bukit_Bintang_in_Kuala_Lumpur,_Malaysia_-_03.jpg) | Yu Chu Chin | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-pavilion-g2.jpg` | [File:Pavilion Kuala Lumpur at night (230127) 04.jpg](https://commons.wikimedia.org/wiki/File:Pavilion_Kuala_Lumpur_at_night_(230127)_04.jpg) | *angys* | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| `photos/kl-pavilion-g3.jpg` | [File:Interior of Pavilion Kuala Lumpur Christmas 2023 (231211).jpg](https://commons.wikimedia.org/wiki/File:Interior_of_Pavilion_Kuala_Lumpur_Christmas_2023_(231211).jpg) | *angys* | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |

## Lisensi kode
HTML/CSS/JS mockup ini bebas dipakai sebagai contoh. Foto mengikuti lisensi masing-masing di atas.
