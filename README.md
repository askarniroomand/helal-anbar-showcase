<div align="center">

<img src="assets/banner.jpg" alt="Helal Anbar" width="100%" />

<br/>

# هلال‌انبار

### سامانه انبارداری Enterprise · جمعیت هلال احمر کهگیلویه

نرم‌افزار **دسکتاپ آفلاین** برای مدیریت انبار امدادی —  
ورود · حواله · امانت · دپو · گزارش PDF/Excel · تقویم شمسی

<br/>

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-Product_Page-E31E24?style=for-the-badge&labelColor=0B0B0E)](https://askarniroomand.github.io/helal-anbar-showcase/)
[![Demo](https://img.shields.io/badge/▶_Interactive_Demo-UI_Preview-1C1C22?style=for-the-badge&labelColor=0B0B0E)](https://askarniroomand.github.io/helal-anbar-showcase/demo/)
[![Source](https://img.shields.io/badge/🔒_Source-Private-111111?style=for-the-badge)](https://github.com/askarniroomand)
[![License](https://img.shields.io/badge/License-Proprietary-6B7280?style=for-the-badge&labelColor=1F2937)](LICENSE)

<br/>

```text
┌──────────────────────────────────────────────────────────┐
│  PUBLIC SHOWCASE                                         │
│  Landing · Interactive UI Demo · Docs                    │
│                                                          │
│  SOURCE CODE → PRIVATE REPOSITORY ONLY  🔒               │
└──────────────────────────────────────────────────────────┘
```

</div>

---

## این ریپو چیست؟

| ✅ عمومی (همین‌جا) | 🔒 خصوصی (منتشر نشده) |
|:---|:---|
| لندینگ محصول | کد Python / PySide6 |
| دموی تعاملی UI | منطق کسب‌وکار و schema |
| موکاپ و بنر | بیلد / exe کامل |
| مجوز اختصاصی | دیتابیس و credential |

> **هدف:** معرفی حرفه‌ای محصول و نمایش ظاهر — **نه** انتشار سورس.

---

## قابلیت‌های محصول واقعی

<table>
<tr>
<td width="50%">

**عملیات انبار**
- مدیریت اقلام و موجودی
- ثبت ورودی + پیوست
- حواله خروج + چاپ رسمی
- امانت / سررسید / بازگشت
- دپو (قفل · جزئی · کامل)

</td>
<td width="50%">

**هوش و گزارش**
- داشبورد + نمودار
- هشدار کمبود موجودی
- گزارش Excel و PDF فارسی
- تقویم شمسی سراسری
- بکاپ خودکار ماهانه

</td>
</tr>
<tr>
<td>

**تجربه کاربری**
- رابط Enterprise RTL
- تم Light / Dark
- نقش IT و انباردار

</td>
<td>

**استقرار**
- کاملاً آفلاین
- Windows پرتابل
- بدون نیاز به Python (کاربر)

</td>
</tr>
</table>

---

## پیش‌نمایش

<p align="center">
  <img src="assets/dashboard-mockup.jpg" alt="Dashboard mockup" width="92%" />
</p>

<p align="center">
  <a href="https://askarniroomand.github.io/helal-anbar-showcase/demo/"><strong>▶ باز کردن دموی تعاملی UI</strong></a>
  &nbsp;·&nbsp;
  <a href="https://askarniroomand.github.io/helal-anbar-showcase/"><strong>🌐 صفحه معرفی</strong></a>
</p>

---

## معماری (سطح‌بالا)

```text
   ┌─────────────────────────────────────┐
   │     Desktop UI  ·  RTL Enterprise   │
   │  Dashboard · Inventory · Logistics  │
   └──────────────────┬──────────────────┘
                      │
   ┌──────────────────▼──────────────────┐
   │      Application Services           │
   │   Auth · Report · Print · Backup    │
   └──────────────────┬──────────────────┘
                      │
   ┌──────────────────▼──────────────────┐
   │     Offline Data  ·  SQLite         │
   └─────────────────────────────────────┘
```

جزئیات پیاده‌سازی عمداً منتشر نمی‌شود.

---

## امنیت و مالکیت

- **مجوز:** [Proprietary](LICENSE) — همه حقوق محفوظ
- **سیاست:** [SECURITY.md](SECURITY.md)
- بازتولید محصول، کپی UI به‌عنوان نرم‌افزار مستقل، یا مهندسی معکوس **بدون مجوز کتبی ممنوع** است

---

## تماس / درخواست نسخه

| | |
|:--|:--|
| **توسعه‌دهنده** | امدادگر عسکر نیرومند |
| **تلفن** | `09331351329` |
| **سازمان** | جمعیت هلال احمر شهرستان کهگیلویه |
| **GitHub** | [@askarniroomand](https://github.com/askarniroomand) |

برای **دمو کامل دسکتاپ**، استقرار در اداره، یا مجوز استفاده پیام دهید.

---

## ساختار این ریپو

```text
helal-anbar-showcase/
├── index.html          # لندینگ مدرن
├── assets/             # استایل، اسکریپت، بنر
├── demo/               # دموی UI تعاملی
├── docs/               # مستندات سطح‌بالا
├── LICENSE
├── SECURITY.md
└── README.md
```

---

<div align="center">

**ساخته‌شده برای عملیات امدادی** · © ۱۴۰۵ · Proprietary

[Live Site](https://askarniroomand.github.io/helal-anbar-showcase/) · [Demo](https://askarniroomand.github.io/helal-anbar-showcase/demo/) · [License](LICENSE)

</div>
