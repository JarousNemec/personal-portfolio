export const projectDetailMock = {
    "id": "project-001",
    "name": "smart-home-dashboard",
    "title": "Smart Home Dashboard",
    "description": "Moderní webová aplikace pro správu chytré domácnosti, umožňující ovládání zařízení, sledování spotřeby energie a automatizaci.",
    "downloadUrl": "https://github.com/JarousNemec/yt-music-downloader/archive/refs/heads/master.zip",
    "gitRepoUrl": "https://github.com/JarousNemec/yt-music-downloader",
    "downloadLabel": "Stáhnout zip projektu",
    "gitRepoLabel": "Repo projektu",
    "images": [
        {
            "url": "https://picsum.photos/seed/project1/800/500",
            "description": "Náhled hlavního dashboardu aplikace."
        },
        {
            "url": "https://picsum.photos/seed/project2/800/500",
            "description": "Ukázka nastavení chytrých zařízení."
        }
    ],
    "sections": [
        {
            "id": "1",
            "title": "Přehled projektu",
            "paragraphs": [
                "Smart Home Dashboard je webová aplikace zaměřená na centralizovanou správu zařízení chytré domácnosti.",
                "Umožňuje přehledně monitorovat senzory, nastavovat automatizace a sledovat energetickou spotřebu v reálném čase."
            ]
        },
        {
            "id": "2",
            "title": "Klíčové funkce",
            "paragraphs": [
                "• Ovládání osvětlení, kamer a ostatních IoT zařízení.",
                "• Automatické scény a plánování událostí.",
                "• Statistiky energetické spotřeby a optimalizace běhu domácnosti."
            ]
        },
        {
            "id": "3",
            "title": "Technologie",
            "paragraphs": [
                "Frontend aplikace je postaven na Reactu a TypeScriptu.",
                "Backend běží na Node.js a komunikace probíhá pomocí REST API."
            ]
        }
    ],
    "tags": [
        {"label": "React", "type": "web" as const},
        {"label": "TypeScript", "type": "web" as const},
        {"label": "IoT", "type": "hardware" as const}
    ]
};

export const projectListMock = [
    {
        "id": "project-001",
        "name": "smart-home-dashboard",
        "title": "Smart Home Dashboard",
        "description": "Webová aplikace pro správu a automatizaci chytré domácnosti.",
        "downloadUrl": "https://github.com/JarousNemec/yt-music-downloader/archive/refs/heads/master.zip",
        "gitRepoUrl": "https://github.com/JarousNemec/yt-music-downloader",
        "downloadLabel": "Stáhnout zip projektu",
        "gitRepoLabel": "Repo projektu",
        "images": [],
        "sections": [],
        "tags": [
            {"label": "React", "type": "web" as const},
            {"label": "TypeScript", "type": "web" as const},
            {"label": "IoT", "type": "hardware" as const}
        ]
    },
    {
        "id": "project-002",
        "name": "energy-monitoring-system",
        "title": "Energy Monitoring System",
        "description": "Platforma pro sledování energetické spotřeby v reálném čase.",
        "downloadUrl": "https://github.com/JarousNemec/yt-music-downloader/archive/refs/heads/master.zip",
        "gitRepoUrl": "https://github.com/JarousNemec/yt-music-downloader",
        "downloadLabel": "Stáhnout zip projektu",
        "gitRepoLabel": "Repo projektu",
        "images": [],
        "sections": [],
        "tags": [
            {"label": "Node.js", "type": "web" as const},
            {"label": "MongoDB", "type": "backend" as const},
            {"label": "Data Visualization", "type": "other" as const}
        ]
    },
    {
        "id": "project-003",
        "name": "fleet-management-app",
        "title": "Fleet Management App",
        "description": "Mobilní a webové řešení pro správu firemních vozových parků.",
        "downloadUrl": "https://github.com/JarousNemec/yt-music-downloader/archive/refs/heads/master.zip",
        "gitRepoUrl": "",
        "downloadLabel": "Stáhnout zip projektu",
        "gitRepoLabel": "Repo projektu",
        "images": [],
        "sections": [],
        "tags": [
            {"label": "React Native", "type": "web" as const},
            {"label": "Express", "type": "web" as const},
            {"label": "GPS Tracking", "type": "hardware" as const}
        ]
    },
    {
        "id": "project-004",
        "name": "ecommerce-platform",
        "title": "E-commerce Platform",
        "description": "Modulární e-shop systém připravený pro velké katalogy a více prodejců.",
        "downloadUrl": "",
        "gitRepoUrl": "https://github.com/JarousNemec/yt-music-downloader",
        "downloadLabel": "Stáhnout zip projektu",
        "gitRepoLabel": "Repo projektu",
        "images": [],
        "sections": [],
        "tags": [
            {"label": "Next.js", "type": "web" as const},
            {"label": "Stripe", "type": "backend" as const},
            {"label": "PostgreSQL", "type": "backend" as const}
        ]
    },
    {
        "id": "project-005",
        "name": "ai-document-analyzer",
        "title": "AI Document Analyzer",
        "description": "Aplikace využívající umělou inteligenci pro extrakci dat z dokumentů.",
        "downloadUrl": "",
        "gitRepoUrl": "",
        "downloadLabel": "Stáhnout zip projektu",
        "gitRepoLabel": "Repo projektu",
        "images": [],
        "sections": [],
        "tags": [
            {"label": "Python", "type": "backend" as const},
            {"label": "Machine Learning", "type": "backend" as const},
            {"label": "OCR", "type": "backend" as const}
        ]
    }
];


// <Section id={"myRoute"} title={"Moje cesta k programování"} containerClassName={styles.about}
//                  containerAriaLabel={"Moje cesta k programování"}>
//             <p className={styles.bio}>
//                 Jmenuji se Jaroslav Němec a už přes {itDuration} let se zabívám věcmi okolo technologií. Aktuálně
//                 studuji {itUhkYear}. rokem obor Aplikovaná Informatika na Univerzitě Hradec
//                 Králové. Můj životní cíl je stát se dobrým full-stack vývojářem jak po teoretické tak i praktické
//                 stránce.
//                 <br/> <br/>
//                 Už od školky se mi líbila technika, ať už to byl traktor, auto nebo počítač. S programováním jsem se
//                 poprvé pořádně setkal v páté třídě, kdy jsem se díky kroužku na ZŠ přihlásil do Kodu Cupu. V něm
//                 jsem se
//                 dostal až do krajského kola
//                 soutěže. Po skončení kroužku jsem se IT nijak zvlášť nevěnoval mimo pár pokusů s Arduinem, ale už
//                 jsem
//                 věděl
//                 jakým směrem budu svou budoucí karieru směrovat.
//                 <br/><br/>
//                 Vše začalo v 7. třídě (2018-2019), kdy jsem se přihlásil do Hradeckého domu dětí na kurz
//                 programování v
//                 C#. Zde jsem se naučil základy pro mě prvního objektově orientovaného jazyka. Díky tomuto kroužku
//                 jsem
//                 poprvé získal širší ucelený názor na to, co to znamená programovat. Vytvářeli jsme zde nejrůznější
//                 aplikace od úplně základních (kalkulačka) po pokročilejší, které již využívali nám v tu dobu
//                 magické objekty. Ve výsledku jsem v rámci tohoto kroužku stvořil dva pro mě tehdy velké projekty.
//                 Obě
//                 aplikace byli konzolové a využívali pouze vstupy z klávesnice. První aplikace nesla název „Piškvorky
//                 pro
//                 dva hráče". Druhý projekt byla hra z názvem „Formule 1". Byla to opět konzolovka a prezentoval jsem
//                 jí
//                 tenkrát jako svůj závěrečný projekt na tomto kroužku.
//                 V těchto letech jsem si také založil svůj Github, který dnes používám, a začala se psát moje
//                 historie
//                 vývojáře.
//                 <br/><br/>
//                 Po završení programátorského kroužku, kde jsem získal určitý nadhled jsem si již doma vytvářel
//                 svoje menší praktické projektíky. Díky nim jsem se buď učil nové věci a nebo to byli ideálně
//                 užitečné
//                 věci, které jsem používal. Mimo vývoje desktopových aplikací se mi vždy líbil i ten fyzický/reálný
//                 svět.
//                 Na základě toho jsem se začal seznamovat se světem IoT. Můj tenkrát nejúspěšnější a nejužitečnější
//                 projekt bylo zařízení pro spínání plynového kotle. Jednalo se o Krabičku se displejem a několika
//                 ovládacími tlačítky, která umožňovala nastavit aktuální čas a následně na základě něho v daný čas na
//                 určitou dobu sepnout relé. Tím se pak sepnul plynový kotel. Zařízení to sice nebylo nejspolehlivější
//                 a
//                 určitě bych do 400kč sehnal lepší spolehlivou náhradu. Každopádně jsem ale díky tomuto
//                 projektu získal kupu zkušeností, které mi opět rozšířili obzory.
//                 <br/><br/>
//                 Co nevidět doplním zbytek...
//             </p>
//         </Section></>