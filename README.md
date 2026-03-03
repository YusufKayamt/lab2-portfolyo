# 🚀 Yusuf Mete Kaya | Web Programlama Laboratuvar Günlüğü & Portfolyo

Merhaba! Ben Yusuf Mete Kaya, Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. 

Bu depo, "Web Tasarımı ve Programlama" dersi kapsamında adım adım (LAB-1, LAB-2, LAB-3) geliştirdiğim kişisel portfolyo projemi içermektedir. Vite ortamında sıfırdan inşa edilen bu site, modern web standartlarını (Semantik HTML, A11Y, Design Tokens, CSS Grid/Flex) merkeze alarak tasarlanmıştır.

---

## 🏗️ Geliştirme Süreci ve Branşlar (Lab Aşamaları)

Proje, Git iş akışına uygun olarak farklı branch'ler (dallar) üzerinden aşama aşama inşa edilmiştir:

* 🌱 **Faz 1 (`main`):** Vite altyapısının kurulması, proje mimarisinin oluşturulması ve temel dosyaların yapılandırılması.
* ♿ **Faz 2 (`feature/semantic-html`):** İşin iskeleti. Sadece `<div>` kullanmak yerine `<main>`, `<article>`, `<nav>` gibi semantik HTML5 etiketleri entegre edildi. Ekran okuyucular için ARIA nitelikleri (`aria-label`, vb.), gizli "Skip link" (ana içeriğe atla) özelliği ve tam erişilebilir, erişim ağacı kusursuz form yapıları kuruldu. Lighthouse erişilebilirlik testlerinden %100 tam puan alındı.
* 🎨 **Faz 3 (`feature/responsive-layout`):** Tasarımın canlanması. Herhangi bir hazır kütüphane kullanılmadan, saf CSS ile Mobile-First (Önce Mobil) yaklaşımı uygulandı. 

## 🛠️ Mimari ve Teknik Yaklaşımlar

Projenin arayüz mimarisi şu modern CSS prensiplerine dayanır:

1.  **Design Tokens Modeli:** Renk paletleri, boşluk (spacing) skalaları, border-radius ve gölge değerleri `tokens.css` içerisinde CSS Variables (`--var`) olarak merkezi sisteme bağlandı.
2.  **Akıcı Tipografi (Fluid Typography):** Cihaz boyutuna göre kendiliğinden büyüyüp küçülen `clamp()` fonksiyonları sayesinde media-query yazma zorunluluğu ortadan kaldırıldı.
3.  **Akıllı Layout (Grid & Flexbox):** Menülerde `flex-direction` ile cihaz yönelimine göre esneyen yapılar kullanılırken, proje kartlarında `repeat(auto-fit, minmax(...))` formülüyle kendi kendini dizen akıllı Grid sistemi uygulandı.
4.  **Responsive Strateji:** Mobil (0–639px), Tablet (640px+) ve Masaüstü (1024px+) olmak üzere 3 farklı kırılım noktası kullanıldı. Tasarım esnasında alınan tüm kritik kararlar `CSS-KARARLARI.md` dosyasında belgelendi. Uygulamanın farklı cihazlardaki görünümleri `screenshots/` klasörüne eklendi.

---

## 💻 Benim Dünyam: Öne Çıkan Projeler & Yetkinlikler

Siber güvenlik, yapay zeka, gömülü sistemler ve web geliştirme ekseninde (C#, Python, Laravel, Axios, Arduino) teknolojiler üretiyorum. Üzerinde çalıştığım başlıca projelerim:

* 🛡️ **BlockSentinelAI:** CAN-Bus ağlarındaki siber saldırıları tespit etmeye yönelik geliştirdiğim, yapay zeka entegrasyonlu siber güvenlik yazılımı.
* 🌌 **DreamToon:** Kullanıcıların rüyalarını yapay zeka destekli animasyonlara dönüştüren yenilikçi web platformu.

## 🎸 Kodların Ötesinde

Sadece ekrana bakarak kod yazmıyor, sanatı da hayatımın bir parçası olarak görüyorum. Lise yıllarımdan bu yana kaleme aldığım şiirlerimi **"Fecir Vakti"** isimli kitabımda topluyorum. Ayrıca gümbür gümbür sahne alan Anadolu rock grubu **NEFRES**'in kurucusu ve yöneticisiyim. Müzik ve edebiyat, yazılım projelerime ilham vermeye devam ediyor.
