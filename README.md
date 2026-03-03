# Web Tasarımı ve Programlama — Kişisel Portföy

## Hakkında
Bu proje, **Web Tasarımı ve Programlama** dersi kapsamında LAB-1, LAB-2 ve LAB-3 ödevleri olarak hazırlanmıştır. Vite ortamında sıfırdan oluşturulmuş; semantik HTML5, erişilebilirlik (a11y) standartlarına tam uyumlu ve CSS Design Tokens kullanılarak inşa edilmiş %100 responsive bir kişisel portföy sayfasıdır.

## Geliştirici
* **Ad Soyad:** Yusuf Mete Kaya
* **Eğitim:** Fırat Üniversitesi - Yazılım Mühendisliği (3. Sınıf)
* **Odak Alanları:** Siber Güvenlik, Yapay Zeka, Web Geliştirme, Gömülü Sistemler

## Kullanılan Teknolojiler
* **Geliştirme Ortamı:** Vite, Node.js
* **Frontend:** Semantik HTML5, Modern CSS3 (Flexbox, CSS Grid, Custom Properties)
* **Genel Yetkinliklerim:** C#, Python, Laravel, Axios, Arduino

## Lab Geçmişi
| Lab | Branch | Konu |
| :--- | :--- | :--- |
| **LAB-1** | `main` | Vite proje kurulumu ve temel yapılandırma |
| **LAB-2** | `feature/semantic-html` | Semantik HTML5, erişilebilirlik (a11y), form temelleri ve Lighthouse testleri |
| **LAB-3** | `feature/responsive-layout` | Modern CSS, Responsive Layout (Flex/Grid), Design Tokens ve Akıcı Tipografi |

## Özellikler

### LAB-2 — Semantik HTML & Erişilebilirlik
* **Semantik Yapı:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` etiketlerinin doğru kullanımı.
* **Erişilebilirlik:** Görünmez "Skip link" (Ana içeriğe atla) butonu, ARIA etiketleri (`aria-label`, `aria-describedby`), anlamlı `alt` metinleri.
* **İletişim Formu:** HTML5 doğrulama, `fieldset/legend`, `label/for-id` bağlantıları.
* **Heading Hiyerarşisi:** Sayfada tek `<h1>`, ana bölümler için `<h2>`, alt bölümler için `<h3>` kullanımı.

### LAB-3 — Modern CSS & Responsive Layout
* **Design Tokens:** `src/styles/tokens.css` içinde renk, spacing, radius ve font değişkenlerinin merkezi yönetimi.
* **Fluid Typography:** `clamp()` fonksiyonu ile medya sorgusu gerektirmeyen sıvı/akıcı font boyutları.
* **Flexbox Nav:** Mobile-First yaklaşımıyla dikey `flex-direction: column` menüden, ekran genişledikçe yatay `row` düzenine geçiş.
* **CSS Grid:** `repeat(auto-fit, minmax(280px, 1fr))` kullanılarak medya sorgusuna gerek kalmadan ekran boyutuna göre otomatik dizilen (3->2->1) akıllı kart düzeni.
* **3 Breakpoint:** Mobil (0–639px), Tablet (640px+), Masaüstü (1024px+). Tasarım kararları `CSS-KARARLARI.md` dosyasında belgelenmiştir.

## Öne Çıkan Projelerim
Portföyde detaylarına yer verilen başlıca akademik ve kişisel projelerim:
* **BlockSentinelAI:** CAN-Bus ağlarındaki siber saldırıları tespit etmeye yönelik yapay zeka entegrasyonlu yazılım projesi.
* **DreamToon:** Kullanıcıların rüyalarını yapay zeka destekli animasyonlara dönüştüren, Laravel ve Axios tabanlı web uygulaması.

## Lighthouse Puanı (LAB-2)
| Kategori | Puan | Tarih |
| :--- | :--- | :--- |
| ♿ Erişilebilirlik (Accessibility) | **100 / 100** ✅ | Şubat 2026 |
| 🏆 En İyi Uygulamalar (Best Practices) | **100 / 100** ✅ | Şubat 2026 |

## Ekran Görüntüleri (LAB-3)
3 farklı cihaz boyutu için alınan render görüntüleri `screenshots/` klasöründe yer almaktadır.
| Görünüm | Genişlik |
| :--- | :--- |
| 📱 Mobil | 375px |
| 📟 Tablet | 768px |
| 🖥️ Masaüstü | 1280px |

---
*Kariyerimin yanında edebiyat ve müzikle yakından ilgileniyorum. "Fecir Vakti" adında bir şiir kitabı hazırlığındayım ve Anadolu rock grubu **NEFRES**'in kurucu/yöneticisiyim.*
