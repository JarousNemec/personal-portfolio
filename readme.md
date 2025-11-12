# 🧠 Portfolio – Jan Novák

Osobní portfolio prezentující mou práci v oblasti **IoT, embedded systémů a webových technologií**.  
Web je navržen s důrazem na **minimalistický design**, **čitelnost** a **moderní technologický vzhled**.

---

## 🌐 Obsah a struktura
Web je rozdělen do několika hlavních sekcí:
- **Hero sekce** – krátké představení a CTA (moje projekty / kontakt)
- **O mně** – shrnutí zkušeností a zaměření
- **Projekty** – ukázky hlavních IoT a softwarových projektů
- **Blog** – krátké články k jednotlivým technologiím a projektům
- **Kontakt** – odkazy na GitHub, LinkedIn a e-mail

---

## 🛠️ Technologie
- **HTML5** – sémantická struktura (header, main, section, footer)
- **CSS3** – vlastní stylování, systém proměnných, responzivní layout
- **SVG** – dekorativní pozadí a ikony sociálních sítí
- Bez použití frameworků (Bootstrap, React, aj.)

---

## 🎨 Design
- Světlé, čisté barevné schéma (`bílá / šedá / modrá`)
- Fixní šířka obsahu pro lepší čitelnost na širokých monitorech
- Barevné tagy pro jednotlivé technologie (ESP32, MQTT, React, apod.)
- Responzivní rozložení (mobil / tablet / desktop)
- Odkaz na figmu: https://www.figma.com/design/6GjaXlWfeAqZuQqNyGt90R/personal-portfolio?node-id=0-1&t=hCvBhZhn5rkXx6Zq-1

---

## 🚀 Spuštění
Stačí otevřít soubor `index.html` v prohlížeči.

---

## 🚀 Deploy
Bude tu docker compose. V něm bude nginx jako reverzní proxy, která bude přesměrovávat požadavky na nginx container který běží na základě image který je dockerfilem buildnutý z raw nginxu a našeho react buildu. Dále to bude přesměrovávat na backend constainer, kterých běží v rámci composu. CloudFlared následně bude tunelovat pouze port nginxu takže vše bude schované za reverzní proxy a můžeme tak zde řešit limiting nebo autentikaci.

---

## 📄 Licence
Projekt je určen pro studijní a osobní prezentaci.  
© 2025 Jan Novák