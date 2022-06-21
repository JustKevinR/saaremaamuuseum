# saaremaamuuseum

## Lähteülesanne:
luua lahendus info edastamiseks Kuressaare lossihoovi installeeritavale ekraanile, kust mööduja saab infot lossis toimuvate näituste/ürituste ja muuseumi kontaktide kohta.
https://github.com/kuressaareametikool/tarkvaraprojektid/wiki/2020∕21-PROJEKT-nr-4-‒-Infoekraan-muuseumile
Ekraani ülemine osa on planeeritud ürituste plakatite ja neist üle jääv pind muuseumi info jaoks.




## Skeem

### Ürituste komponent
Ürituste info kuvatakse pildifailidena (png/jpg), mis on genereeritud A4...A2 formaadis plakatite kujundusfailidest. Faile vahetab muuseumi töötaja sisuhalduse kaudu.

### Info komponent
Kajastatud on järgmine infot eesti ja inglise keeles:

Saaremaa muuseumi logo<br/>
Linnus avatud T-P 10.00-18.00<br/>
Opening hours Tu-Su 10.00-18.00<br/>
lisarida erakorralisteks teadeteks<br/>
email: muuseum@saaremaamuuseum.ee<br/>
telefon: +372 455 4463<br/>
Infot saab muuseumi töötaja sisuhalduse kaudu muuta.

## Figma
[Prototüüp](https://www.figma.com/file/JIUjfH6OjuhAbHn7CRrhyx/Saaremaa-Muuseumi-infotahvel?node-id=8%3A77)

## Stilistika
Kasutatud on nii rakenduses kui sisuhalduses muuseumi stilistikat (värve ja fonti Oswald) <br/>

## Sisuhaldus
Muuseumi töötaja haldab ekraanil kuvatavat sisu üle veebi google sheetis https://docs.google.com/spreadsheets/d/10mMnEhsYHXfWANvk8qSnl8yn9h9RL4hG9C423M_06HI/edit#gid=0. Ta saab lisada ja muuta sündmusi ( valida kalendrist avaldamise alguse- ja lõpu kuupäevad ja pildi lingi) ning muuta muuseumi lahtiolekuaegu (valida kellaaegu rippmenüüst). Muuta saab ainult konkreetseid välju, muu on kasutajale lukus. Lehe muutmisõigused on ainult loetletud kasutajatel


## API info
Kasutasime [Google Cloud Platformi](http://console.developers.google.com/) API võtme genereerimiseks ja hoidmiseks.

Õpetusena kasutasime [sellist artiklit](https://betterprogramming.pub/google-spreadsheet-as-a-backend-b6b51541f1e1)

## Screensaver

Ekraani sissekõrbemise vältimiseks jookseb üle kogu ekraani muuseumi tutvustav video (intervall paar minutit) 

## Github https://github.com/ratsepmarkus/saaremaamuuseum/
## Link https://janek.itmajakas.ee/saaremaamuuseum/
