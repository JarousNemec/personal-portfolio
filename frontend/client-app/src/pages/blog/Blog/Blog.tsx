import styles from "./blog.module.scss";
import Section from "../../../components/Section/Section.tsx";

const Blog = () => {
    const year = new Date().getFullYear();
    const itDuration = year - 2019;
    const itUhkYear = year - 2024;

    return (<>
        <Section id={"myRoute"} title={"Moje cesta k programování"} containerClassName={styles.about}
                 containerAriaLabel={"Moje cesta k programování"}>
            <p className={styles.bio}>
                Jmenuji se Jaroslav Němec a už přes {itDuration} let se zabívám věcmi okolo technologií. Aktuálně
                studuji {itUhkYear}. rokem obor Aplikovaná Informatika na Univerzitě Hradec
                Králové. Můj životní cíl je stát se dobrým full-stack vývojářem jak po teoretické tak i praktické
                stránce.
                <br/> <br/>
                Už od školky se mi líbila technika, ať už to byl traktor, auto nebo počítač. S programováním jsem se
                poprvé pořádně setkal v páté třídě, kdy jsem se díky kroužku na ZŠ přihlásil do Kodu Cupu. V něm
                jsem se
                dostal až do krajského kola
                soutěže. Po skončení kroužku jsem se IT nijak zvlášť nevěnoval mimo pár pokusů s Arduinem, ale už
                jsem
                věděl
                jakým směrem budu svou budoucí karieru směrovat.
                <br/><br/>
                Vše začalo v 7. třídě (2018-2019), kdy jsem se přihlásil do Hradeckého domu dětí na kurz
                programování v
                C#. Zde jsem se naučil základy pro mě prvního objektově orientovaného jazyka. Díky tomuto kroužku
                jsem
                poprvé získal širší ucelený názor na to, co to znamená programovat. Vytvářeli jsme zde nejrůznější
                aplikace od úplně základních (kalkulačka) po pokročilejší, které již využívali nám v tu dobu
                magické objekty. Ve výsledku jsem v rámci tohoto kroužku stvořil dva pro mě tehdy velké projekty.
                Obě
                aplikace byli konzolové a využívali pouze vstupy z klávesnice. První aplikace nesla název „Piškvorky
                pro
                dva hráče". Druhý projekt byla hra z názvem „Formule 1". Byla to opět konzolovka a prezentoval jsem
                jí
                tenkrát jako svůj závěrečný projekt na tomto kroužku.
                V těchto letech jsem si také založil svůj Github, který dnes používám, a začala se psát moje
                historie
                vývojáře.
                <br/><br/>
                Po završení programátorského kroužku, kde jsem získal určitý nadhled jsem si již doma vytvářel
                svoje menší praktické projektíky. Díky nim jsem se buď učil nové věci a nebo to byli ideálně
                užitečné
                věci, které jsem používal. Mimo vývoje desktopových aplikací se mi vždy líbil i ten fyzický/reálný
                svět.
                Na základě toho jsem se začal seznamovat se světem IoT. Můj tenkrát nejúspěšnější a nejužitečnější
                projekt bylo zařízení pro spínání plynového kotle. Jednalo se o Krabičku se displejem a několika
                ovládacími tlačítky, která umožňovala nastavit aktuální čas a následně na základě něho v daný čas na
                určitou dobu sepnout relé. Tím se pak sepnul plynový kotel. Zařízení to sice nebylo nejspolehlivější
                a
                určitě bych do 400kč sehnal lepší spolehlivou náhradu. Každopádně jsem ale díky tomuto
                projektu získal kupu zkušeností, které mi opět rozšířili obzory.
                <br/><br/>
                Co nevidět doplním zbytek...
            </p>
        </Section></>)
}

export default Blog;