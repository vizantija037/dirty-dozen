const players = [
    {
        id:1,
        image: "./Img/Milos-Teodosic.jpg",
        name: "Milos Teodosic",
        position: "Point Guard",
        birthday: "19.03.1987.",
        height: "195 cm",
        club: "Virtus Bologna (ITA)",
        details: "Miloš Teodosić (Valjevo, 19. mart 1987) srpski je košarkaš. Igra na poziciji plejmejkera, a trenutno nastupa za Virtus Bolonju. Karakteriše ga prefinjena tehnika na terenu, sa originalnim asistencijama, često nesvakidašnjim rešenjima i odličnim šutom. Zvanično najbolji igrač Evrope po izboru FIBE 2010. godine, a iste godine je i dobio nagradu za najkorisnijeg igrača Evrolige. Tri puta je izabran u najbolju petorku Evrolige, a isto toliko puta je bio i u drugoj petorci. Osvojio je Evroligu sa ekipom CSKA 2016. godine posle pobede nad turskim Fenerbahčeom. Iste godine je dobio prestižnu nagradu Evroskar za najboljeg evropskog košarkaša. Izabran je u idealan tim decenije Evrolige (2010-20). Standardan je član i kapiten košarkaške reprezentacije Srbije, jedan je od vodećih igrača, a sa reprezentacijom je osvajao medalje na skoro svim takmičenjima."
    },
    {
        id:2,
        image: "./Img/Aleksa-Avramovic.jpg",
        name: "Aleksa Avramovic",
        position: "Point Guard",
        birthday: "25.10.1994.",
        height: "192 cm",
        club: "Estudiantes (ESP)",
        details: "Avramović je prošao kompletnu školu Mladosti iz Čačka gde je nastupao i za prvi tim ovog kluba. Pred početak sezone 2013/14. je potpisao dugogodišnji ugovor sa Borcem iz Čačka, potom se za sezonu 2014/15. preselio u OKK Beograd da bi se pred početak sezone 2015/16. vratio u Borac. U ovoj sezoni je skrenuo pažnju na sebe odličnim igrama. Na utakmici Košarkaške lige Srbije protiv Mladosti iz Zemuna imao je indeks korisnosti 63. Sezonu 2015/16. je završio kao najkorisniji igrač Košarkaške lige Srbije a potom i Superlige Srbije.U junu 2016. godine prelazi u italijanski Vareze.[6] U ekipi Varezea je proveo naredne tri sezone, a u svojoj poslednjoj sezoni je beležio prosečno 17,7 poena u italijanskoj Seriji A. U junu 2019. godine prelazi u špansku Unikahu. U decembru 2019. odlazi na pozajmicu u Estudijantes do kraja 2019/20. sezone. Za reprezentaciju Srbije je debitovao u kvalifikacijama za Svetsko prvenstvo 2019. u Kini."
    },
    {
        id:3,
        image: "./Img/Dejan-Todorovic.jpg",
        name: "Dejan Todorovic",
        position: "Shooting Guard",
        birthday: "29.05.1994.",
        height: "196 cm",
        club: "Andorra (ESP)",
        details: "Todorović je košarku počeo da trenira kao desetogodišnjak u rodnom Mrkonjić Gradu. Godine 2009. preselio se u Novi Sad i upisao školu košarke Sport ki koju drži Janko Lukovski.Godine 2011. otisnuo se put Španije i priključio juniorima Malage. Seniorsku karijeru započeo je u jesen 2011. godine u dresu Aharkuije, tadašnjeg B tima Malage. Za ovu ekipu nastupao je tri sezone i odigrao ukupno 72 utakmice. Tokom sezone 2013/14. zabeležio je i po nekoliko nastupa za prvi tim Malage u ACB ligi i u Evroligi, ali uz više nego simboličnu minutažu. Sezonu 2014/15. proveo je na pozajmici u ekipi Bilbaa. U septembru 2015. produžio je ugovor sa Malagom za još dve godine, ali je odmah potom ponovo prosleđen na pozajmicu Bilbau. U julu 2016. raskinuo je saradnju sa Malagom i potpisao trogodišnji ugovor sa Bilbaom. Nakon dve sezone napušta Bilbao i u avgustu 2018. prelazi u Mursiju. U septembru 2018, na pripremnoj utakmici između njegove Mursije i Huventuda, Todorović je doživeo tešku povredu zbog koje je pauzirao skoro celu sezonu.Vratio se tek u finišu sezone i odigrao dve utakmice za Mursiju. Za sezonu 2019/20. je potpisao ugovor sa Andorom. Od jula 2020. je igrač Kanarijasa. Za seniorsku reprezentaciju Srbije debitovao je u kvalifikacijama za Svetsko prvenstvo 2019. godine."
    },
    {
        id:4,
        image: "./Img/Marko-Simonovic.jpg",
        name: "Marko Simonovic",
        position: "Power Foward",
        birthday: "30.05.1986.",
        height: "203 cm",
        club: "Cedevita Olimpija (SLO)",
        details: "Simonović je rođen u Prištini, ali se 1999. godine posle NATO bombardovanja preselio u Beograd. Ubrzo je i zaigrao u mlađim kategorijama beogradskog Radničkog, a kasnije je bio i deo njihovog seniorskog tima. U periodu od 2003. do 2005. dve sezone proveo je u klubu Lavovi 063, a nakon toga jednu u niškom Ergonomu. Sezonu 2006/07. počeo je u belgijskom Ostendeu, ali se u decembru vratio u Srbiju i pridružio Hemofarmu u kom je ostao godinu i po dana. Od leta 2008. proveo je tri sezone u podgoričkoj Budućnosti, u čijim redovima je osvojio po tri crnogorska prvenstva i kupa. U sezoni 2011/12. nastupao je za Albu iz Berlina. U sezonama 2012/13. i 2013/14. je bio igrač Crvene zvezde, a od leta 2013. postao je i njen kapiten. Sa ovim klubom osvojio je dva Kupa Radivoja Koraća (2013. i 2014). U sezoni 2014/15. je nastupao za francuski EB Po Lak Ortez. Krajem septembra 2015. se vratio u Crvenu zvezdu.U svom drugom mandatu u crveno-belom dresu, osvojio je po dve titule prvaka Srbije i ABA lige kao i još jedan Kup. U julu 2017. je potpisao ugovor sa Zenitom iz Sankt Peterburga u čijem dresu provodi naredne dve sezone.U julu 2019. je potpisao dvogodišnji ugovor sa ekipom Cedevite Olimpije, ali u februaru 2020. prelazi u Malagu.Dana 13. jula 2020. Simonović se vratio u Crvenu zvezdu, potpisavši dvogodišnji ugovor sa klubom."
    },
    {
        id:5,
        image: "./Img/Miroslav-Raduljica.jpg",
        name: "Mirosalv Raduljica",
        position: "Center",
        birthday: "05.01.1988.",
        height: "213 cm",
        club: "Jiangsu Dragons (CHN)",
        details:"Raduljica je počeo karijeru u mlađim kategorijama FMP Železnika. Svoj debi u prvom timu FMP-a imao je u sezoni 2005/06. Sezonu 2006/07. proveo je na pozajmici u Borcu iz Čačka. Najbolje partije u dresu FMP-a je imao u sezoni 2009/10. kada je i proglašen za najkorisnijeg igrača Superlige Srbije. U leto 2010. potpisao je petogodišnji ugovor sa Efes Pilsenom. Već na početku karijere u turskom klubu doživeo je povredu stopala zbog koje je odsustvovao nekoliko meseci. U februaru 2011. Efes je poslao Raduljicu na pozajmicu u berlinsku Albu kako bi igrao i vratio se u formu posle povrede. Sa Albom je stigao do finala nemačkog prvenstva. U avgustu 2011. Raduljica je došao na jednogodišnju pozajmicu u Partizan. Svoju najbolju partiju u dresu Partizana imao je u pobedi nad ekipom Heliosa kada je postigao 31 poen i imao 8 skokova, zabeleživši indeks korisnosti od čak 47. Raduljica je za crno-bele u Jadranskoj ligi prosečno postizao 12,5 poena i 5,5 skokova a Partizan je eliminisan na fajnal-foru u polufinalnoj utakmici od Cedevite. Raduljica je sa crno-belima osvojio dva trofeja, Kup Radivoja Koraća i Prvenstvo Srbije. Za sezonu 2012/13. Efes ga je ponovo pozajmio, ovaj put ukrajinskom Azovmašu. Raduljica je pružao sjajne partije u dresu ukrajinskog Azovmaša, sa kojim je stigao do finala nacionalnog šampionata. Ipak, Budiveljnik je bio bolji od tima iz Marijupolja sa 4-3. Raduljica je prosečno postizao po 14,2 poena i beležio po 5,9 skokova i 1,1 blokadu na 53 utakmice ukrajinskog prvenstva."
    },
    {
        id:6,
        image: "./Img/Dejan-Kravic.jpg",
        name: "Dejan Kravic",
        position: "Center",
        birthday: "09.09.1990.",
        height: "213 cm",
        club: "Obradoiro (ESP)",
        details: "Rođen je u Mostaru, ali je ubrzo zbog rata izbegao u Kanadu u Ontario. Koledž karijeru je započeo na Univerzitetu Jork, gde je na prvoj sezoni prosečno postizao 15,6 poena i imao 9,6 skokova. Međutim od 2012. godine prelazi na Univerzitet Teksas, gde je u poslednjoj sezoni beležio 7,3 poena, 4,6 skokova i 1,3 blokada za prosečno 21 minut po utakmici. Profesionalnu karijeru je započeo u Retimnu u Grčkoj gde je proveo jednu sezonu. Leta 2015. godine odlazi u Holandiju u tim Den Bosa, odakle se nakon jedne sezone vraća u Retimno. Sezonu 2017/18. je počeo u Ekselzioru iz Brisela da bi u oktobru napustio klub. U novembru iste godine se priključio grčkom Panioniosu u čijem dresu je proveo ostatak sezone. U sezoni 2018/19. je nastupao za Virtus iz Bolonje. Sa italijanskim klubom je osvojio FIBA Ligu šampiona u kojoj je prosečno beležio 7,8 poena i 4,5 skokova po meču. U julu 2019. je potpisao za španski Obradoiro. U ekipi Obradiora je tokom sezone 2019/20. u ACB ligi prosečno beležio 13,2 poena, 6,4 skoka, jednu asistenciju i jednu blokadu po utakmici. Ukupan prosečan indeks bio mu je 15,9. U julu 2020. prelazi u San Pablo Burgos."
    },
    {
        id:7,
        image: "./Img/Nikola-Rebic.jpg",
        name: "Nikola Rebic",
        position: "Point Guard",
        birthday: "22.01.1995.",
        height: "188 cm",
        club: "Enisey (RUS)",
        details: "U mlađim kategorijama igrao je prvo za FMP Železnik, a zatim i Crvenu zvezdu. U februaru 2013. potpisao je prvi profesionalni ugovor i to upravo sa Crvenom zvezdom. Iako sa malom minutažom, Rebić je u crveno-belom dresu osvojio dve titule ABA lige, dva nacionalna prvenstva i dva kupa Radivoja Koraća. U decembru 2016. je napustio Crvenu zvezdu i prešao u Mega Leks. U ekipi Mege je stigao i do kapitenske trake, a u februaru 2018. je napustio klub i prešao u španski Bilbao do kraja sezone. U septembru 2018. je potpisao ugovor sa Mornarom iz Bara. U ABA ligi je u dresu tima iz Bara imao prosek od 10,7 poena, 2,1 skoka i 3,8 asistencija, dok je na putu do finala šampionata Crne Gore, gde je Mornar tek posle majstorice, ustupio tron Budućnosti, prosečno beležio 15 poena, 2,8 skokova i 6,2 asistencije. U sezoni 2019/20. je bio igrač Jeniseja iz Krasnojarska. U oktobru 2020. je potpisao ugovor sa Monakom, ali je u decembru iste godine promenio klub i prešao u Nanter."

    },
    {
        id:8,
        image: "./Img/Dalibor-Ilic.jpg",
        name: "Dalibor Ilic",
        position: "Power Foward",
        birthday: "04.03.2000.",
        height: "202 cm",
        club: "Igokea (ROS/BIH)",
        details: "Ilić je ponikao u mlađim kategorijama višegradske Varde. U leto 2015. godine prešao je u mlađe kategorije Igokee. Ilić je već od početka sezone 2016/17. postao i član seniorskog tima Igokee. Krajem marta 2018. godine potpisao je prvi profesionalni ugovor sa klubom iz Laktaša.Tokom Superlige Srbije 2019. je igrao na pozajmici u ekipi Mega Bemaksa. Ilić je bio kapiten sastava juniorske reprezentacije Srbije koji je osvojio zlatnu medalju na Evropskom prvenstvu 2018. godine. U februaru 2020. godine je dobio prvi poziv za seniorsku reprezentaciju Srbije. Selektor Igor Kokoškov ga je uvrstio na spisak igrača za utakmice protiv Finske i Gruzije u kvalifikacijama za Evropsko prvenstvo 2021. Ilić je debitovao za seniorsku reprezentaciju 20. februara 2020. u pobedi nad Finskom (58:80)."

    },
    {
        id:9,
        image: "./Img/Ognjen-Jaramaz.jpg",
        name: "Ognjen Jaramaz",
        position: "Point Guard",
        birthday: "01.09.1995.",
        height: "193 cm",
        club: "Partizan Nis (SRB)",
        details: "Kao učenik osnovne škole „Jovan Popović”, Jaramaz je košarkom počeo da se bavi sa sedam godina u OKK Junior, gde ga je trenirao nastavnik fizičkog vaspitanja, Boško Vraneš.Godine 2006. pridružio se mlađim kategorijama Partizana. Početak seniorske karijere označilo je pristupanje Mega Vizuri u sezoni 2012/13, ali tokom nje nije imao značajniju minutažu. Usledila je pozajmica Smederevu 1953 tokom prvog dela Košarkaške lige Srbije 2013/14. gde je imao zapaženu ulogu i bio najbolji strelac te faze takmičenja, a pred početak Superlige Srbije 2014. vratio se u Mega Vizuru. U sezoni 2014/15. je beležio oko 5 poena po meču u ABA ligi da bi od naredne 2015/16. sezone prosek porastao na 11 poena po meču u istom takmičenju, a sličan učinak je imao i u sezoni 2016/17. Učestvovao je u najvećem klupskom uspehu Mege kada je osvojen Kup Radivoja Koraća 2016. godine. Leta 2017. godine se prijavio i na NBA draft gde su ga kao 58. pika izabrali Njujork niksi za koje je igrao Letnju ligu. Međutim, tada su počeli veliki zdravstveni problemi. Njujork ga je posalo u bolnicu gde mu je dijagnostikovana plućna embolija zbog koje je bio van košarke nekoliko meseci. Tek što je početkom 2018. godine opet zaigrao za Megu i počeo da se vraća u formu, usledio je lom šake zbog kojeg je morao na novu pauzu.Vratio se tek u finišu domaće Superlige posle čega je napustio Megu. U junu 2018. potpisao je dvogodišnji ugovor sa španskim San Pablo Burgosom.Tamo je na 18 prvenstvenih mečeva u proseku beležio 6,4 poena za 14 minuta na parketu. Dana 12. februara 2019. godine Jaramaz dolazi u Partizan kao pozajmljeni igrač do kraja takmičarske sezone 2018/19.U julu 2019. je raskinuo ugovor sa Burgosom, a narednog meseca se priključio pripremama Partizana za novu 2019/20. sezonu. Sa reprezentacijom Srbije osvojio je bronzanu medalju na Evropskom prvenstvu do 20 godina 2014. godine."
    },
    {
        id:10,
        image: "./Img/Uros-Trifunovic.jpg",
        name: "Uros Trifunovic",
        position: "Shooting Guard",
        birthday: "05.12.2000.",
        height: "199 cm",
        club: "Partizan Nis (SRB)",
        details: "Trifunović je ponikao u mlađim kategorijama Zemuna. U leto 2015. godine prešao je u mlađe kategorije Mege. Bio je član sastava Mege koji je u sezoni 2015/16. osvojio nacionalno kadetsko prvenstvo. U sezoni 2017/18. igrao je za juniore turske Karšijake. Zanimljivo je da je u istoj sezoni glavni trener seniorskog tima Karšijake bio upravo Urošev otac. Početkom septembra 2018. godine Trifunović je došao u Partizan. Već sredinom decembra iste godine potpisao je i profesionalni ugovor sa beogradskim crno-belima. U sezoni 2018/19. igrao je na dvojnu registraciju za Partizan i zemunsku Mladost. U junu 2019. godine, Partizan ga šalje na jednogodišnju pozajmicu u Mega Bemaks. Trifunović je u dresu Mege nastupio u prva dva kola ABA lige, nakon čega je nezadovoljan minutažom i ulogom u timu napustio klub. Pozajmica je zvanično raskinuta 18. oktobra 2019, nakon čega se Trifunović vratio u Partizan. U junu 2020. je potpisao novi četvorogodišnji ugovor sa Partizanom."
    },
    {
        id:11,
        image: "./Img/Novica-Velickovic.jpg",
        name: "Novica Velickovic",
        position: "Power Forward",
        birthday: "05.10.1986.",
        height: "205 cm",
        club: "Partizan Nis (SRB)",
        details: "Novica Veličković (Beograd, 5. oktobar 1986) je srpski košarkaš. Igra na poziciji krilnog centra, a trenutno nastupa za Partizan. Seniorsku karijeru je počeo u Partizanu, za čiji prvi tim je debitovao u sezoni 2004/05. U dresu Partizana je igrao u dva navrata, i tokom tog perioda je osvojio pet titula državnog prvaka, tri titule Jadranske lige, pet trofeja Kupa Radivoja Koraća kao i jedan Superkup Jadranske lige. Iz Partizana je prešao u Real Madrid, a u inostranstvu je još igrao i za Broze Bamberg i Trabzonspor. Takođe je u dva navrata bio igrač Mega Vizure. Sa seniorskom reprezentacijom Srbije je osvojio srebrnu medalju na Evropskom prvenstvu 2009. u Poljskoj. Igrao je takođe i na Evropskom prvenstvu 2007. u Španiji kao i na Svetskom prvenstvu 2010. u Turskoj."
    },
    {
        id:12,
        image: "./Img/Rade-Zagorac.jpg",
        name: "Rade Zagorac",
        position: "Small Forward",
        birthday: "12.08.1995.",
        height: "205 cm",
        club: "Partizan Nis (SRB)",
        details: "Košarkom je počeo da se bavi u beogradskom klubu Div basket, a kasnije je nastavio u ekipi Zemuna. Godine 2011. dolazi u ekipu Mege i sa njima beleži prve minute u seniorskoj košarci u sezoni 2012/13. Tokom sezone 2013/14. nastupao je kao pozajmljen igrač u ekipi Smedereva, da bi se pred sezonu 2014/15. vratio u MegZagorac je u sezoni 2015/16. sa Megom osvojio Kup Radivoja Koraća i ostvario plasman u finale ABA lige dok je u Superligi osvojio treće mesto i plasman u regionalno takmičenje naredne sezone. U ABA ligi je zbog loma ruke u 1. kolu pauzirao tri i po meseca  ali se vratio u finišu takmičenja i bio jedan od najzaslužnijih za veliki uspeh Mege. U proseku je beležio 13,1 poen i 5,9 skokova a najbolju partiju je pružio u prvom polufinalnom meču u Podgorici kada je protiv Budućnosti postigao 27 poena uz indeks 40.Pružio je fantastične partije i u Superligi gde je u proseku beležio 14,7 poena uz 6,2 skoka, 3,1 asistenciju i 2,4 ukradene lopte po meču za prosečan indeks korisnosti 21,2.Na NBA draftu 2016. odabran je kao 35. pik od strane Boston seltiksa, a Boston je kasnije prava na njega menjao u Memfis grizlise. Ipak Zagorac ne odlazi u NBA, već početkom jula 2016. potpisuje novi dvogodišnji ugovor sa Megom. U ekipi Mege se zadržao do marta 2017. godine kada je otišao u SAD kako bi se pripremio za NBA ligu. Zagorac je tokom sezone 2016/17. u ABA ligi prosečno beležio 15 poena, 6,5 skokova i 2,5 asistencija, dok je u FIBA Ligi šampiona imao 12,6 poena, 6,1 skok, 2,5 asistencija i 1,8 ukradenih lopti po meču.Zagorac je 17. jula 2017. potpisao ugovor sa Memfis grizlisima. Ipak nije uspeo da uđe u konačan sastav Memfisa pa je otpušten 16. oktobra 2017. godine. Krajem novembra 2017. godine je potpisao ugovor sa ekipom Real Betisa koji se u tom momentu nalazio na poslednjem mestu ACB lige. Za Betis je na odigranih 14 prvenstvenih susreta prosečno beležio 4,4 poena i 0,9 skokova po meču. Dana 30. juna 2018. godine Zagorac je potpisao dvogodišnji ugovor sa Partizanom."
    },
    {
        id:13,
        image: "./Img/Aleksa-Radanov.jpg",
        name: "Aleksa Radanov",
        position: "Small Forward",
        birthday: "01.02.1998.",
        height: "201 cm",
        club: "FMP (SRB)",
        details: "Košarkom je počeo da se bavi u klubu Beostars na Novom Beogradu. Njegov talenat je ubrzo primećen i zato prelazi u mlađe kategorije Crvene zvezde. Iako dve godine mlađi, bio je deo ekipe Crvene zvezde koja je osvojila juniorsko takmičenje Evrolige 2014. godine. I naredne 2015. je na Evroliginom kvalifikacionom turniru pomogao Zvezdinim juniorima da se plasiraju na finalni turnir. Interesantno je da je jedan od retkih košarkaša koji je igrao dva derbija u istom danu protiv Partizana, i to u kadetskoj i juniorskoj konkurenciji. U oba je Zvezda pobedila a on je postigao 20 i 10 poenZa prvi tim Crvene zvezde je debitovao 8. marta 2015, na utakmici 24. kola ABA lige protiv valjevskog Metalca u Pioniru. Tadašnji trener Dejan Radonjić je odlučio da mu pruži šansu umesto Markusa Vilijamsa koji je odmarao ovu utakmicu. To mu je bio i jedini nastup u sezoni 2014/15.Od sezone 2015/16. je kao pozajmljen igrač Crvene zvezde zaigrao za FMP. U prvoj sezoni sa ekipom FMP-a je igrao samo Košarkašku ligu Srbije, a od sezone 2016/17. sa klubom iz Železnika je zaigrao i u ABA ligi. Na pozajmici u FMP-u je bio do aprila 2018. kada je zajedno sa Filipom Čovićem priključen Crvenoj zvezdi pred takmičenje u Superligi Srbije. Nastupio je na 14 utakmica u Superligi koju je Crvena zvezda na kraju i osvojila.Sezonu 2018/19. je proveo celu u ekipi Crvene zvezde. Nije provodio puno vremena na parketu, ali je bio deo tima koji je osvojio ABA Superkup, ABA ligu i Superligu Srbije. U avgustu 2019. je ponovo pozajmljen ekipi FMP-a,gde je tokom sezone 2019/20. u ABA ligi beležio prosečno 11 poena i tri skoka po utakmici.Dana 29. jula 2020. se vratio u Crvenu zvezdu, sa kojom je dogovorio saradnju na dve sezone."
    }
]

// select items

const img = document.getElementById("image");
const modalImage = document.getElementById("modalImage");
const playerName = document.getElementById("name");
const position = document.getElementById("position");
const birthday = document.getElementById("birthday");
const height = document.getElementById("height");
const club = document.getElementById("club");
const modal = document.getElementById("modal");
const modalText = document.getElementById("rightSideModal")


const prevBtn = document.getElementById("btnLeft");
const nextBtn = document.getElementById("btnRight");
const btnMore = document.getElementById("btnMore");
const btnCloseModal = document.getElementById("btnCloseModal");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPlayer(currentItem);
});
// show player based on item
function showPlayer(player){
    const item = players[player];
    modalImage.src = item.image;
    img.src = item.image;
    playerName.textContent = item.name;
    position.textContent = item.position;
    birthday.textContent = item.birthday;
    height.textContent = item.height;
    club.textContent = item.club;
    modalText.textContent = item.details;

}
//show next player
nextBtn.addEventListener("click", function(){
    currentItem++;
        if(currentItem>players.length - 1){
            currentItem = 0;
        }
    showPlayer(currentItem);

})
prevBtn.addEventListener("click", function(){
    currentItem--;
        if(currentItem < 0){
            currentItem = players.length - 1;
        }

    showPlayer(currentItem);
})

// open/close modal

btnMore.addEventListener("click", function(){
    modal.style.visibility="visible";
})
btnCloseModal.addEventListener("click", function(){
    modal.style.visibility="hidden";
})




