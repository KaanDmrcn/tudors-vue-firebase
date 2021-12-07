<template>
    <body class="global_body HomeBody menuAcik" data-language="tr" data-currency="try">

    <form method="post" action="./" >

    <div id="footer" class="homeFooter">
<div class="footerTop">
<div id="divNewsLetter" class="newaslater">
<label>E-bültenimize kayıt olun!</label>
<div id="UpdatePanel1" class="newsletterContent">
<input type="text" class="newstext textbox" name="txtbxNewsletterMail"  placeholder="E-posta adresinizi yazın...">
<a id="btnMailKaydet" href="javascript:void(0)" class="newsbutton button" onclick="saveNewsletter()">Gönder</a>
</div>
</div>
</div>
<div class="footerCenter">
<div class="footerCenter">
<div class="cookietudors" style="display: none;">Sizlere en iyi alışveriş deneyimini sunabilmek adına sitemizde çerezler(cookies) kullanmaktayız. Detaylı bilgi için lütfen <a href="https://www.tudors.com/kvkk">tıklayınız.</a>
<div class="kapatx">Anladım</div>
</div>
<div class="FooterTudors">
<div class="Social">
<div class="ticiContainer">
<ul>
<li><a href="https://www.facebook.com/TudorsTRY/" style=" max-width: 69%; "><img src="https://e7.pngegg.com/pngimages/968/121/png-clipart-mya-org-social-media-computer-icons-facebook-social-media-logo-social-media-marketing-thumbnail.png"> </a></li>
<li><a href="https://twitter.com/tudorsofficial"  style=" max-width: 69%; "><img src="data:image/png;base64,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"> </a></li>
<li><a href="https://www.instagram.com/tudorsofficial/" style=" max-width: 69%; "><img src="https://www.tudors.com/Uploads/Images/asd/instagram-ikon.png?t=20210517173758" ></a></li>
<li><a href="https://api.whatsapp.com/send?phone=908503338377" style=" max-width: 69%; " target="_blank"> <img src="https://img.icons8.com/pastel-glyph/2x/whatsapp--v2.png" ></a></li>
<li><a href="https://tr.pinterest.com/Tudorsofficial/"  style=" max-width: 69%; "><img src="data:image/png;base64,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" > </a></li>
<li><a href="https://www.youtube.com/channel/UCIQacmxjrLQRUFVGfA-1pzw"  style=" max-width: 69%; "><img src="https://i.pinimg.com/originals/20/9b/d8/209bd859c265e7ffc4bfeb75877b23f7.png" > </a></li>
</ul>
<a href="https://www.instagram.com/tudorsofficial/" style=" max-width: 69%; ">
<p style=" font-size: 9px; margin-left: -5px; text-align: center; background: -webkit-linear-gradient(#f69988, #f00000); -webkit-background-clip: text; -webkit-text-fill-color: #e55287; ">Instagram sayfamıza ulaşıp DM'den canlı destek alabilirsiniz.</p>
</a></div>
</div>
<div class="FooterMiddle">
<div class="ticiContainer">
<div class="linkler">
<ul>
<li><a href="javascript:;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">KURUMSAL </font></font></a>
<ul>
<li><a href="/Form/ceo-ya-yazin-12"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CEO'ya yazın </font></font></a></li>
<li><a href="https://www.tudors.com/Form/franchising-form-11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Franchising </font></font></a></li>
<li><a href="/kvkk"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gizlilik&amp;Güvenlik</font></font></a></li>
<li><a href="/magazalarimiz.aspx"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mağazalarımız</font></font></a></li>
<li><a href="/basinda-biz"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Medya</font></font></a></li>
<li><a href="/insan-kaynaklari"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kariyer</font></font></a></li>
<li><a href="/kvkk"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kişisel Verilerin Korunması</font></font></a></li>
</ul>
</li>
<li class="Menuicine"><a href="javascript:;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MÜŞTERİ HİZMETLERİ</font></font></a>
<ul>
<li><a href="/iletisim">İletişim</a></li>
<li><a href="/siparistakip.aspx">Sipariş takibi</a></li>
<li><a href="https://api.whatsapp.com/send?phone=908503338377" target="_blank">Whatsapp Destek</a></li>
</ul>
</li>
<li><a href="javascript:;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YARDIM </font></font></a>
<ul>
<li><a href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</a></li>
<li><a href="/iade-sartlari"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">İade ve Değişim </font></font></a></li>
<li><a href="/kapida-odeme"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kapıda Ödeme</font></font></a></li>
<li><a href="/kargo-teslimat"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Teslimat</font></font></a></li>
<li><a href="/UyelikSozlesme.aspx"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kullanım Koşulları</font></font></a></li>
</ul>
</li>
<li><a href="javascript:;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">POLİTİKALAR </font></font></a>
<ul>
<li><a href="/kvkk"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">KVKK Aydınlatma Metinleri </font></font></a></li>
<li><a href="/kvkk"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Veri işleme ve koruma politikası </font></font></a></li>
<li><a href="/kvkk"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Çerez politikası</font></font></a></li>
</ul>
</li>
<li>
<div class="MusteriHizmet">
<div class="Mimg"><img alt="" src="/Uploads/Images/mimg.png?t=20210305104233"></div>
<div class="Mtext"><a href="#">MÜŞTERİ HİZMETLERİ</a></div>
<div class="Mtext"><br>
<a href="#">0212 599 86 86&nbsp;</a></div>
</div>
<div class="Magazalar" style=" margin-top: 19px; "><a href="/magazalarimiz.aspx"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mağazalar </font></font></a></div>
</li>
</ul>
</div>
</div>
</div>
<div class="banksimg">
<div class="ticiContainer">
<div class="bankimgs"><img alt="" src="/Uploads/Images/bankimg.png"></div>
</div>
</div>
<div class="FTextAlan">
<div class="ticiContainer">
<div><strong style="color: rgb(0, 0, 0);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TUDORS</font></font></font></font></strong></div>
<div>&nbsp;</div>
<div style="color: rgb(0, 0, 0);">
<div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1998 yılında ana faaliyetlerine başlayan Tudors, kısa sürede perakende sektöründe önemli bir aktör haline geldi ve aslen İstanbul merkezli bir mağazayı Anadolu'ya doğru genişleterek, İstanbul'da da büyüyerek Türkiye'de gömlek pazarının liderliğine doğru oynadı.</font></font></div>
<div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Son yıllarda, yerel bir başarı serisinin ardından, markaya uluslararası alanda artan bir ilgi ve Tudors'un kendisinin uluslararası olmaya olan ilgisi vardı.</font></font></div>
<div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sadece 2 yıl gibi çok kısa bir zaman diliminde, Tudors bayrağını 14'ten fazla ülkeye yerleştirmiş ve sürekli yenilenen bir seçkisiyle son derece güvenilir ve yenilikçi kalarak, dünyanın en başarılı gömlek markası olma hedefiyle aralıksız devam etmektedir. hedef tüketicinin taleplerini karşılama alışkanlığı ve modern bir perakende anlayışı.</font></font></div>
</div>
</div>
</div>
<div class="product-social-icon-wrapper">
<div class="PaylasTit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PAYLAŞ</font></font></div>
<ul>
<li><a class="product-social-icons" content="facebook" href="javascript:;"><i class="fa fa-facebook"></i> </a></li>
<li><a class="product-social-icons" content="twitter" href="javascript:;"><i class="fa fa-twitter"></i> </a></li>
<li><a class="product-social-icons" content="pinterest" href="javascript:;"><i class="fa fa-pinterest"></i> </a></li>
<li><a class="product-social-icons" content="googleplus" href="javascript:;"><i class="fa fa-google-plus"></i> </a></li>
</ul>
</div>
<ul>
<li class="mobilmenureklam">&nbsp;</li>
</ul>
</div>
</div>
<div class="nav-footer">
<div class="Area">
<div class="T">HESABIM</div>
<div class="Content">
<div class="item navCtrl">
<div class="column"><a class="Link" href="/Hesabim#/Hesabim-Anasayfa" title=""><i class="fal fa-user"></i> HESABIM</a></div>
<div class="column">
<div class="control"><a href="/Hesabim#/Hesabim-Anasayfa">Hesabım</a> <span class="Or"></span> <a href="/UyeCikis.ashx">Çıkış Yap</a></div>
</div>
</div>
<div class="item">
<div class="column"><a class="Link" href="/Hesabim#/IadeTaleplerim" title=""><i class="fal fa-undo-alt"></i> KOLAY İADE</a></div>
</div>
<div class="item">
<div class="column favCol"><a class="Link onCntl" datahref="/Hesabim#/Favorilerim" href="/Hesabim#/Favorilerim" title=""><i class="fal fa-heart"></i> FAVORİLERİM</a></div>
</div>
<div class="item">
<div class="column"><a class="Link onCntl" datahref="/Hesabim#/Siparislerim" href="/Hesabim#/Siparislerim" title=""><i class="fal fa-box"></i> SİPARİŞLERİM</a></div>
</div>
</div>
</div>
<div class="Area">
<div class="T">YARDIM</div>
<div class="Content">
<div class="item">
<div class="column"><a class="Link" href="/siparistakip.aspx#/Hesabim-Anasayfa" title=""><i class="fal fa-box"></i> SİPARİŞ TAKİBİ</a></div>
</div>
<div class="item">
<div class="column"><a class="Link" href="/magazalarimiz.aspx" title=""><i class="fal fa-map-marker-alt"></i> MAĞAZA ADRESİ</a></div>
</div>
<div class="item">
<div class="column"><a class="Link" href="/sikca-sorulan-sorular" title=""><i class="far fa-life-ring"></i> YARDIM</a></div>
</div>
</div>
</div>
<div class="Area">
<div class="T">BİZİ TAKİP ET</div>
<div class="Content">
<div class="social-list"><a class="social-link" href="https://www.instagram.com/tudorsofficial/" title=""><i class="fab fa-instagram"></i></a> <a class="social-link" href="https://www.facebook.com/TudorsTRY/" title=""><i class="fab fa-facebook-f"></i></a> <a class="social-link" href="https://twitter.com/tudorsofficial" title=""><i class="fab fa-twitter"></i></a> <a class="social-link" href="https://www.youtube.com/channel/UCIQacmxjrLQRUFVGfA-1pzw" title=""><i class="fab fa-youtube"></i></a></div>
</div>
</div>
</div>
</div>
</div>
    </form>
</body>




</template>

<style>
@import '../assets/style.css';
</style>