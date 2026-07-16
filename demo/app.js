/* Interactive UI demo only — no backend, no source of the real app */

const titles = {
  dashboard: "داشبورد",
  items: "مدیریت اقلام",
  warehouses: "انبارها",
  depot: "دپو",
  entry: "ثبت ورودی",
  dispatch: "ثبت خروج",
  loans: "امانت",
  lists: "لیست‌ها",
  reports: "گزارش‌ها",
  settings: "تنظیمات",
};

const sampleItems = [
  ["چادر امدادی ۱۲ نفره", "انبار مرکزی", "۴۸", "عدد", "ok", "عادی"],
  ["پتو نمدی", "انبار مرکزی", "۲۱۰", "عدد", "ok", "عادی"],
  ["بسته بهداشتی خانواده", "انبار فرعی", "۳۵", "بسته", "warn", "کمبود نزدیک"],
  ["آب معدنی ۱.۵ لیتر", "انبار مرکزی", "۸", "بسته", "bad", "بحرانی"],
  ["مولد برق سیار", "انبار تجهیزات", "۶", "دستگاه", "ok", "عادی"],
  ["کیت کمک‌های اولیه", "انبار مرکزی", "۹۲", "ست", "ok", "عادی"],
];

function pageDashboard() {
  return `
    <div class="page-header">
      <h1>داشبورد</h1>
      <p>نمای کلی وضعیت انبار امدادی — داده‌ها نمایشی هستند</p>
    </div>
    <div class="grid-stats">
      ${stat("📦", "اقلام ثبت‌شده", "۱۸۶")}
      ${stat("📊", "مجموع موجودی", "۱۲٬۴۵۰")}
      ${stat("⛁", "دپو (قفل)", "۷", "warn")}
      ${stat("📤", "حواله این ماه", "۳۴")}
      ${stat("⚠", "موجودی بحرانی", "۵", "danger")}
    </div>
    <div class="row-2">
      <div class="card">
        <div class="section-title">📈 حواله‌های ماهانه (نمونه)</div>
        <div class="bars">
          ${[40, 65, 48, 80, 55, 92, 70].map((h, i) =>
            `<div class="bar" style="height:${h}%"><span>م${i + 1}</span></div>`
          ).join("")}
        </div>
      </div>
      <div class="card">
        <div class="section-title">🧩 ترکیب موجودی</div>
        <div class="pie-wrap">
          <div class="pie" aria-hidden="true"></div>
          <div class="legend">
            <div><i style="background:var(--red)"></i>اقلام امدادی — ۳۸٪</div>
            <div><i style="background:#1b8a4b"></i>خوراکی — ۲۴٪</div>
            <div><i style="background:#ed6c02"></i>بهداشتی — ۱۸٪</div>
            <div><i style="background:#0078d4"></i>تجهیزات — ۲۰٪</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-2">
      <div class="card">
        <div class="section-title">📅 تقویم شمسی (نمایشی)</div>
        <div class="cal">
          ${["ش","ی","د","س","چ","پ","ج"].map(d => `<div class="d" style="font-weight:700;color:var(--text)">${d}</div>`).join("")}
          ${Array.from({length: 28}, (_, i) =>
            `<div class="d${i === 15 ? " today" : ""}">${i + 1}</div>`
          ).join("")}
        </div>
      </div>
      <div class="card">
        <div class="section-title">🔔 هشدارها</div>
        <div class="alert danger">۵ قلم زیر آستانه موجودی هستند — نیاز به تأمین فوری</div>
        <div class="alert">۳ امانت در حال نزدیک شدن به سررسید</div>
        <div class="alert">۷ رکورد دپو در وضعیت قفل</div>
      </div>
    </div>
  `;
}

function stat(icon, label, value, kind = "") {
  return `<div class="card stat ${kind}">
    <div class="icon">${icon}</div>
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  </div>`;
}

function pageItems() {
  return `
    <div class="page-header">
      <h1>مدیریت اقلام</h1>
      <p>افزودن، ویرایش، موجودی و تاریخچه — حالت نمایشی</p>
    </div>
    <div class="toolbar">
      <input class="input" placeholder="جستجوی نام قلم، کد یا انبار..." />
      <button class="btn btn-primary" data-toast>＋ افزودن قلم</button>
      <button class="btn btn-ghost" data-toast>خروجی Excel</button>
    </div>
    <div class="card table-wrap">
      <table>
        <thead>
          <tr>
            <th>نام قلم</th><th>انبار</th><th>موجودی</th><th>واحد</th><th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          ${sampleItems.map(([n, w, q, u, t, l]) => `
            <tr>
              <td><strong>${n}</strong></td>
              <td>${w}</td>
              <td>${q}</td>
              <td>${u}</td>
              <td><span class="tag ${t}">${l}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function pageForm(title, subtitle, fields) {
  return `
    <div class="page-header">
      <h1>${title}</h1>
      <p>${subtitle}</p>
    </div>
    <div class="card">
      <div class="form-grid">
        ${fields.map(([lab, ph]) => `
          <div class="field">
            <label>${lab}</label>
            <input placeholder="${ph}" />
          </div>
        `).join("")}
      </div>
      <div style="margin-top:16px;display:flex;gap:10px">
        <button class="btn btn-primary" data-toast>ثبت (نمایشی)</button>
        <button class="btn btn-ghost" data-toast>چاپ نمونه</button>
      </div>
    </div>
  `;
}

function pageLoans() {
  return `
    <div class="page-header">
      <h1>امانت</h1>
      <p>پیگیری امانت‌ها، سررسید و بازگشت</p>
    </div>
    <div class="card table-wrap">
      <table>
        <thead>
          <tr><th>گیرنده</th><th>قلم</th><th>تعداد</th><th>سررسید</th><th>وضعیت</th></tr>
        </thead>
        <tbody>
          <tr><td>واحد عملیاتی الف</td><td>چادر امدادی</td><td>۴</td><td>۱۴۰۵/۰۵/۰۲</td><td><span class="tag warn">نزدیک سررسید</span></td></tr>
          <tr><td>پایگاه امداد</td><td>مولد برق</td><td>۱</td><td>۱۴۰۵/۰۵/۲۰</td><td><span class="tag ok">فعال</span></td></tr>
          <tr><td>داوطلب — م.ر</td><td>کیت کمک اولیه</td><td>۲</td><td>۱۴۰۵/۰۴/۱۰</td><td><span class="tag bad">سررسید شده</span></td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function pageReports() {
  return `
    <div class="page-header">
      <h1>گزارش‌ها</h1>
      <p>خروجی Excel و PDF رسمی — در دمو فقط رابط نمایش داده می‌شود</p>
    </div>
    <div class="grid-stats" style="grid-template-columns:repeat(3,1fr)">
      <div class="card"><div class="section-title">📄 موجودی انبار</div><p class="muted">گزارش کامل موجودی به تفکیک انبار</p><button class="btn btn-primary" data-toast style="margin-top:12px">دانلود نمونه PDF</button></div>
      <div class="card"><div class="section-title">📗 گردش کالا</div><p class="muted">ورود / خروج / امانت در بازه زمانی</p><button class="btn btn-primary" data-toast style="margin-top:12px">دانلود نمونه Excel</button></div>
      <div class="card"><div class="section-title">📕 حواله‌های ماهانه</div><p class="muted">خلاصه آماری با نمودار</p><button class="btn btn-primary" data-toast style="margin-top:12px">پیش‌نمایش</button></div>
    </div>
  `;
}

function pageSettings() {
  return `
    <div class="page-header">
      <h1>تنظیمات</h1>
      <p>تم، آستانه کمبود، بکاپ و کاربران (نمایشی)</p>
    </div>
    <div class="card form-grid">
      <div class="field">
        <label>تم رابط</label>
        <select id="themeSelect">
          <option value="light">روشن (Light)</option>
          <option value="dark">تیره (Dark)</option>
        </select>
      </div>
      <div class="field">
        <label>آستانه موجودی بحرانی</label>
        <input type="number" value="10" />
      </div>
      <div class="field">
        <label>بازه بکاپ خودکار (روز)</label>
        <input type="number" value="30" />
      </div>
      <div class="field">
        <label>نام سازمان (نمایشی)</label>
        <input value="جمعیت هلال احمر شهرستان کهگیلویه" />
      </div>
    </div>
    <div style="margin-top:14px">
      <button class="btn btn-primary" data-toast>ذخیره تنظیمات</button>
    </div>
  `;
}

function pageGeneric(key) {
  const map = {
    warehouses: pageForm("انبارها", "تعریف و مدیریت انبارهای امدادی", [
      ["نام انبار", "مثلاً انبار مرکزی دهدشت"],
      ["مسئول", "نام مسئول"],
      ["آدرس", "آدرس انبار"],
      ["توضیحات", "یادداشت"],
    ]),
    depot: pageForm("دپو", "مدیریت دپو، قفل و انتقال جزئی/کامل", [
      ["کد دپو", "DEP-00"],
      ["محل", "نام محل دپو"],
      ["وضعیت", "قفل / جزئی / کامل"],
      ["توضیح", "یادداشت انتقال"],
    ]),
    entry: pageForm("ثبت ورودی", "ورود کالا به انبار با پیوست و چاپ", [
      ["قلم", "جستجوی قلم..."],
      ["تعداد", "0"],
      ["منبع تأمین", "اهدا / خرید / ..."],
      ["تاریخ (شمسی)", "۱۴۰۵/۰۴/۲۵"],
    ]),
    dispatch: pageForm("ثبت خروج (حواله)", "حواله رسمی با چاپ PDF", [
      ["گیرنده", "نام واحد / فرد"],
      ["قلم", "جستجوی قلم..."],
      ["تعداد", "0"],
      ["علت خروج", "عملیات / توزیع / ..."],
    ]),
    lists: `
      <div class="page-header"><h1>لیست‌ها</h1><p>مرور یکپارچه ورود، خروج، امانت و اقلام ویژه</p></div>
      <div class="toolbar">
        <button class="btn btn-primary" data-toast>ورودی‌ها</button>
        <button class="btn btn-ghost" data-toast>خروج‌ها</button>
        <button class="btn btn-ghost" data-toast>امانت‌ها</button>
        <button class="btn btn-ghost" data-toast>اقلام ویژه</button>
      </div>
      ${pageItems().split('<div class="page-header">')[0] || ""}
      <div class="card table-wrap">
        <table>
          <thead><tr><th>نوع</th><th>شرح</th><th>تاریخ</th><th>مقدار</th></tr></thead>
          <tbody>
            <tr><td><span class="tag ok">ورود</span></td><td>پتو نمدی — اهدا</td><td>۱۴۰۵/۰۴/۱۸</td><td>۵۰</td></tr>
            <tr><td><span class="tag warn">خروج</span></td><td>چادر — عملیات سیل</td><td>۱۴۰۵/۰۴/۲۰</td><td>۱۲</td></tr>
            <tr><td><span class="tag bad">امانت</span></td><td>مولد برق — پایگاه</td><td>۱۴۰۵/۰۴/۲۲</td><td>۱</td></tr>
          </tbody>
        </table>
      </div>
    `,
  };
  return map[key];
}

const pages = {
  dashboard: pageDashboard,
  items: pageItems,
  warehouses: () => pageGeneric("warehouses"),
  depot: () => pageGeneric("depot"),
  entry: () => pageGeneric("entry"),
  dispatch: () => pageGeneric("dispatch"),
  loans: pageLoans,
  lists: () => pageGeneric("lists"),
  reports: pageReports,
  settings: pageSettings,
};

const content = document.getElementById("content");
const crumb = document.getElementById("crumb");
const toast = document.getElementById("toast");
const clock = document.getElementById("clock");

function showPage(key) {
  content.innerHTML = pages[key]();
  crumb.textContent = titles[key];
  document.querySelectorAll(".nav-item").forEach((b) => {
    b.classList.toggle("active", b.dataset.page === key);
  });
  bindPageEvents();
}

function bindPageEvents() {
  content.querySelectorAll("[data-toast]").forEach((el) => {
    el.addEventListener("click", () => showToast("این دکمه فقط در دمو کار می‌کند — نرم‌افزار واقعی دسکتاپ است."));
  });
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) {
    themeSelect.value = document.body.classList.contains("dark") ? "dark" : "light";
    themeSelect.addEventListener("change", () => {
      document.body.classList.toggle("dark", themeSelect.value === "dark");
    });
  }
}

function showToast(msg) {
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { toast.hidden = true; }, 2600);
}

document.getElementById("nav").addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-item");
  if (!btn) return;
  showPage(btn.dataset.page);
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  showToast(document.body.classList.contains("dark") ? "تم تیره فعال شد" : "تم روشن فعال شد");
});

function tick() {
  const now = new Date();
  clock.textContent = now.toLocaleString("fa-IR", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    year: "numeric", month: "2-digit", day: "2-digit",
  });
}
tick();
setInterval(tick, 1000);

showPage("dashboard");
