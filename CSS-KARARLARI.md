# CSS Kararları

## 1. Breakpoint Seçimi
Projeyi tasarlarken 640px (tablet) ve 1024px (masaüstü) kırılım noktalarını seçtim. 640px altında içeriklerin sıkışmasını engellemek için dikey düzen tercih ederken, bu noktalardan sonra menü ve "Hakkımda" kısımlarının yatay düzene geçmesini sağladım.

## 2. Layout Tercihleri
Header içerisindeki logo ve navigasyon elemanlarını kolayca hizalamak için Flexbox kullandım. Proje kartları için ise `repeat(auto-fit, minmax(280px, 1fr))` kullanarak, media query yazmaya gerek kalmadan ekran boyutuna göre (3->2->1 sütun) otomatik dizilen akıllı bir Grid sistemi seçtim.

## 3. Design Tokens
Renk paletimde profesyonel bir görünüm sunan lacivert ve mavi tonlarını kullandım. Tüm renk, boşluk (spacing) ve radius değerlerini CSS değişkenleri olarak tanımlayıp projede tutarlılık sağladım. Yazı boyutlarında ise `clamp()` fonksiyonu kullanarak, her ekrana sıvı (fluid) gibi akıcı bir şekilde uyum sağlayan bir tipografi kurdum.

## 4. Responsive Stratejiler
Tasarımı Mobile-First (önce mobil) yaklaşımıyla kurguladım. Kodlara sıfır media query ile en dar ekranlardan başladım, ardından `min-width` kullanarak tablet ve masaüstü kurallarını üstüne ekledim. Görsellerin taşmasını engellemek için hepsine `max-width: 100%` ve `object-fit: cover` özellikleri atadım.