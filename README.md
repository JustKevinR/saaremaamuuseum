# saaremaamuuseum

## Projekti kirjeldus:
luua lahendus info edastamiseks Kuressaare lossihoovi installeeritavale ekraanile, kust mööduja saab infot lossis toimuvate näituste/ürituste ja muuseumi kontaktide kohta.

Ekraani ülemine osa on planeeritud ürituste plakatite ja neist üle jääv pind muuseumi info jaoks.

## Figma
[Prototüüp](https://www.figma.com/file/JIUjfH6OjuhAbHn7CRrhyx/Saaremaa-Muuseumi-infotahvel?node-id=8%3A77)

## Skeem

Ürituste komponent
ürituste info kuvatakse pildifailidena (png/jpg), mis on genereeritud A4...A2 formaadis plakatite kujundusfailidest.
ürituste arv ei ole teada/muutub
Info komponent
Vaja on kajastada järgmist infot eesti ja inglise keeles:

Saaremaa muuseumi logo<br/>
Linnus avatud T-P 10.00-18.00<br/>
Opening hours Tu-Su 10.00-18.00<br/>
peab arvestama, et vahel võib olla aegades ka lisarida (nt E 11.00-16.00 vms)<br/>
email: muuseum@saaremaamuuseum.ee<br/>
telefon: +372 455 4463<br/>

## Sisuhaldus
Muuseumi töötaja haldab ekraanil kuvatavat sisu üle veebi google sheetis https://docs.google.com/spreadsheets/d/10mMnEhsYHXfWANvk8qSnl8yn9h9RL4hG9C423M_06HI/edit#gid=0. Ta saab lisada ja muuta sündmusi ( valida kalendrist avaldamise alguse- ja lõpu kuupäevad ja pildi lingi) ning muuta muuseumi lahtiolekuaegu (valida kellaaegu rippmenüüst). Muuta saab ainult konkreetseid välju, muu on kasutajale lukus. Lehe muutmisõigused on ainult loetletud kasutajatel

## Ekraan
Resolutsioon: FullHD<br/>
Formaat: püstine (portrait)<br/>
Info kuvatakse ekraani sisse ehitatud Samsungi brauseri kaudu, aga et mitte elu liiga keeruliseks teha, piisab projektis kui rakendus töötab viimaste Chrome versioonidega<br/>
## Stilistika
Kasutatud on nii rakenduses kui sisuhalduses muuseumi stilistikat (värve ja fonti Oswald) <br/>


## API info
Kasutasime [Google Cloud Platformi](http://console.developers.google.com/) API võtme genereerimiseks ja hoidmiseks.

Õpetusena kasutasime [sellist artiklit](https://betterprogramming.pub/google-spreadsheet-as-a-backend-b6b51541f1e1)
