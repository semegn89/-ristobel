# CRISTOBAL Ltd - Корпоративен уебсайт

Официален корпоративен сайт на CRISTOBAL Ltd (КРИСТОБЪЛ ЕООД) - търговия, логистика и международен автомобилен превоз.

## Технологии

- **Next.js 14** - React framework с App Router
- **TypeScript** - Типизиран JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Интернационализация (i18n)
- **React Server Components** - За по-добра производителност

## Функционалности

- ✅ Мултиязичност (български/английски)
- ✅ SEO оптимизация (meta tags, schema.org, sitemap)
- ✅ Адаптивен дизайн (desktop/tablet/mobile)
- ✅ Форма за контакт
- ✅ Корпоративен дизайн (тёмно-синий/серый/белый)
- ✅ Всички страници от ТЗ

## Структура на сайта

- **Главна** (`/`) - Hero, услуги, за компанията, география, преимущества, CTA
- **За компанията** (`/about`) - Юридическа информация, управление, принципи
- **Услуги** (`/services`) - Общ преглед
  - Търговия (`/services/trade`)
  - Международен транспорт (`/services/transport`)
  - Спедиция и логистика (`/services/logistics`)
- **Партнёрам** (`/partners`) - Формати на сътрудничество
- **Контакти** (`/contacts`) - Адрес, телефон, email, форма
- **Правова информация** (`/legal`) - GDPR, бисквитки, общи условия

## Инсталация

```bash
# Инсталиране на зависимости
npm install

# Стартиране на development сървър
npm run dev

# Build за production
npm run build

# Стартиране на production сървър
npm start
```

Сайтът ще бъде достъпен на `http://localhost:3000`

## Конфигурация

### Промяна на домейн

В `app/sitemap.ts` и `app/robots.ts` променете `baseUrl` на вашия домейн.

### Добавяне на Google Analytics

Добавете Google Analytics код в `app/[locale]/layout.tsx` в `<head>` секцията.

### Настройка на формата за контакт

В `app/[locale]/contacts/page.tsx` в `handleSubmit` функцията добавете логика за изпращане на email или API заявка.

## Деплой

Сайтът може да бъде деплоиран на:

- **Vercel** (препоръчително за Next.js)
- **Netlify**
- **Собствен сървър** с Node.js

### Vercel

```bash
npm install -g vercel
vercel
```

## SEO

- ✅ Meta tags за всяка страница
- ✅ Schema.org Organization markup
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ ЧПУ URLs
- ✅ Hreflang tags за мултиязичност

## Поддръжка

За въпроси и поддръжка: info@cristobal.bg

## Лиценз

© 2025 CRISTOBAL Ltd. Всички права запазени.

