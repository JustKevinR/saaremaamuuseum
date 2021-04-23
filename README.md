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
Sisuhaldus<br/>
Muuseumi töötaja peaks saama ekraanil kuvatavat sisu üle veebi hallata

## Ekraan
Resolutsioon: FullHD<br/>
Formaat: püstine (portrait)<br/>
Info kuvatakse ekraani sisse ehitatud Samsungi brauseri kaudu, aga et mitte elu liiga keeruliseks teha, piisab projektis kui rakendus töötab viimaste Chrome versioonidega<br/>
Stilistika<br/>
stilistikas võib soovi korral kasutada inspiratsiooni muuseumi kodulehelt, aga esmatähtis on info selgus ja loetavus<br/>
Lisafunktsioonid / nice-to-have<br/>
Kui aega üle jääb ja igavaks kisub, või pole tiimi liikmetele ülesandeid jagada, võib mõelda järgmiste lisafunktsionaalsuste peale:<br/>

📺 Screensaver<br/>
Et vältida ekraani nn "sisse kõrbemist", võiks mingi intervalliga üle ekraani joosta mingi muudatus. Üritustega seda probleemi pole, aga info võib kuude viisi olla muutumatu ühe koha peal.<br/>

🧮 Counter/indikaator<br/>
Üritustel võiks olla mingi visuaalne indikaator, mis näitab, mitu plakatit kokku on. Kõige lihtsam variant mingi 1/6 , 2/6 ... 6/6, aga seda saab ka muul moel edasi anda.


## API info
Kasutasime [Google Cloud Platformi](http://console.developers.google.com/) API võtme genereerimiseks ja hoidmiseks.

Õpetusena kasutasime [sellist artiklit](https://betterprogramming.pub/google-spreadsheet-as-a-backend-b6b51541f1e1)
