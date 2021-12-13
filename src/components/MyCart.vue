<template>
<div class="ticiContainer">
    <div ng-app="appGlobal" ng-controller="cntrlSepet" class="ng-scope">
    <div class="BasketPage BasketPageeStep_1">
        
        
        
        <div class="Basketstep step1">
            
            <ul style="display: none;" class="mobilSepetAdim">
                <li class="onestepsec bSepet"><i></i>
                    <div><span>SEPETİM</span><span class="onesteptext">Alışveriş Sepetim</span></div>
                </li>
                <li class="pasif bAdres"><i></i>
                    <div><span>ADRES</span><span class="onesteptext">Adres Seçimi</span></div>
                </li>
                <li class="pasif bOdeme"><i></i>
                    <div><span>ÖDEME</span><span class="onesteptext">Ödeme Bilgileri</span></div>
                </li>
                <li class="pasif bSiparis"><i></i>
                    <div><span>SİPARİŞ</span><span class="onesteptext">Sipariş Onayı</span></div>
                </li>
            </ul>
            <a href="javascript:;" class="sepetDuzenleBtn" data-edit="0">Düzenle</a>
        </div>
        
        <div class="BasketDetailContainer">
            <div class="BasketDetail EmptyCart" style="display: none;">
                <div class="empty-area">
                    <div class="left">
                        <div class="Icon">
                            <span class="tici-100"></span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="Text">
                            <div class="T">Sepetinizde Ürün Bulunamadı</div>
                        </div>
                        <a href="/t-shirt/bisiklet-yaka?min=47&amp;max=62" class="cart-btn next-btn alisverisedevamet" title="">Alışverişe Devam Et</a>
                    </div>
                </div>
            </div>
            <div class="BasketDetail BasketDetailSepetList">
                <div id="sepetimExtraUrunContent" style="display: none;">
                </div>
                <div class="sepett">
                    <a id="linkAlisverisDevam" class="alisverisedevamet button" target="_parent" href="/t-shirt/bisiklet-yaka?min=47&amp;max=62">Alışverişe Devam Et</a>
                    <div class="clear"></div>
                    <div class="sepetListConent">
                        <div class="sepetItemContent">
                            <div v-for="mycart in mycarts"  :key="mycart.id">
                                    <div class="sepetItem sepetAdetTipi0">
                                        <div class="sepetItemB sepetItemB0 divUrunSepetResim" data-href="/slim-fit--baskili-basic-bisiklet-yaka-erkek-t-shirt-22117" data-productid="22117" data-variantid="80297">
                                            <img class="sepetImg urunSepetResim" :src="mycart.src1" onerror="this.onerror=null;this.src='/Scripts/images/resimyok_ufak.jpg';">
                                        </div>
                                        <div class="sepetItemB sepetItemB1">
                                            
                                            
                                            
                                            
                                            
                                            <a href="/slim-fit--baskili-basic-bisiklet-yaka-erkek-t-shirt-22117" rel="0" target="_top">{{mycart.name}}</a>
                                            
                                                    <span>RENK: <strong>{{mycart.özellikler.renk}}</strong></span>
                                                
                                                    <span>Beden: <strong>M</strong></span>
                                                
                                            <span class="UrunHizliKargo" style="display:none">
                                                Hızlı Kargo
                                            </span>
                                            <span class="UrunKisiselNot" style="display:none">
                                                Ürün Notu : <strong></strong>
                                            </span>
                                            
                                            <span class="hediyeUrunKampanyasiVar" style="display:none">
                                                <a class="hediyeUrunKampanyaYonlendir" href="javascript:hediyeKampanyaYonlendir();">Sepet_UrunHediyeKampanyaBilgi</a>
                                            </span>
                                            <span class="UrunKisiselNot SepetKampanyaTanim" style="display:none">
                                                Kampanya : 
                                                
                                            </span>
                                            
                                        </div>
                                        <div class="sepetItemB sepetItemB2">
                                            <div class="adetGuncelleContent">
                                                
                                                <a href="javascript:void(0);" class="urunListeAdetAzalt qtyMinus" style="display: none;">Azalt</a>
                                                <input v-model="mycart.sepetsayısı" id="txtbxAdet_80297" type="number" class="textbox txtSepetAdet"  name="txtbxAdet_80297"  min="1" max="999999" step="1" data-double="False">

                                                <span class="sepetAdetMobile" style="display: none">x <span>Adet</span></span>
                                                <a href="javascript:void(0);" class="urunListeAdetArtir qtyPlus" style="display: none;">Artır</a>
                                                <a @click="güncelle(mycart.id, mycart.sepetsayısı)" id="mainHolder_ucSepetim_rptSepet_lnkBtnAdetGuncelle_0" onclick="return adetGuncelleKontrol(this);"  class="AdetGuncelle" data-urun-id="80297" data-kampanya-id="0" href="javascript:__doPostBack('ctl00$mainHolder$ucSepetim$rptSepet$ctl00$lnkBtnAdetGuncelle','')">Güncelle</a>
                                            </div>
                                            
                                        </div>
                                        <div class="sepetItemPriceContent">
                                            
                                            <div class="sepetItemB sepetItemB4 sepetFiyatBold" style="width:32%;">
                                                <span class="sepetItemB4_1">
                                                    ₺{{(mycart.eskifiyat*mycart.sepetsayısı).toFixed(2)}}
                                                </span>
                                                
                                                <span class="sepetItemB4_2">
                                                   ₺{{(mycart.indirimlifiyat*mycart.sepetsayısı).toFixed(2)}}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="sepetItemB sepetItemB5">
                                             <img @click="deleteItem(mycart.id)" style="width: 12px; cursor:pointer;" src="https://www.pinclipart.com/picdir/big/538-5385185_grey-cross-icon-png-clipart.png">
                                        </div>
                                    </div>
                                
                        
                    </div></div>
                    <div class="sepetListAlt">
                        <div style="margin-top: 10px; color: brown;" >
                            
                        </div>
                        
                        
                        <a id="mainHolder_ucSepetim_btnSepetiTemizle" onclick="return sepetTemizleKontrol();"  class="sepetiTemizle" href="javascript:__doPostBack('ctl00$mainHolder$ucSepetim$btnSepetiTemizle','')">Sepeti Temizle</a>
                    </div>

                    
                </div>
                <br>
                
            </div>
            </div>
      

            

            
            

            

            
            
        </div>
        <div class="BasketAccountContainer">
            <div class="BasketAccount" style="z-index: 0;">
                <div class="basketCompleteContent">
                    <a id="mainHolder_ucSepetim_aSiparisTamamlaLink2" style="cursor: pointer !important;" class="button buttonkaan basketCompletebtn" onclick="satinAl();">SİPARİŞİ TAMAMLA </a>
                    
                    
                </div>
                <div class="BasketRigth">
                    <ul>
                        <li>
                            <span>Sipariş Tutarı</span>
                            <span class="tut ng-binding">₺{{sepettoplamı.toFixed(2)}}</span>
                        </li>
                        <!-- ngIf: cart.toplamKDV != '0' && !kdvDahilGoster -->
                        <!-- ngIf: cart.urunOzellestirmeFiyatlari != '0' -->
                        <!-- ngIf: cart.ekVergiTutari -->
                        <!-- ngIf: cart.gumrukVergisiGumruk -->
                        <!-- ngIf: cart.gumrukVergisiVergi -->
                        
                        <!-- ngIf: cart.hediyeCekiIndirimi > 0 || cart.hediyeCekiTipi == 2 -->
                        <!-- ngIf: cart.hopiParacikKullanimi > 0 -->
                        <!-- ngIf: cart.hopiIndirimi > 0 -->
                        <!-- ngIf: cart.puanIndirimTutari > 0 -->
                        <!-- ngIf: cart.kampanyaIndirimleri > 0 -->
                        <!-- ngIf: cart.indirimlerToplami > 0 && false -->
                        <li class="genelToplam">
                            <span>Sepet Toplamı </span>
                            <span class="tut ng-binding">₺{{sepettoplamı.toFixed(2)}}</span>
                        </li>
                        <!-- ngIf: cart.tahminiTeslimSuresi > 0 || cart.ayniGunTeslimat -->
                    </ul>
                </div>
                
                
                <div class="BasketRigth BasketHediyeCeki">
                    <div id="hed">
                        <div id="mainHolder_ucSepetim_divHediyeCekiForm" class="Odeme-RightLine">
                            Hediye Çekleri
                            <div id="hediyeCeklerimList" style="display: none;">
                                
                            </div>

                            <div class="hediCekForm">
                                <input id="txtbxHediyeCekiKodu" name="ctl00$mainHolder$ucSepetim$txtbxHediyeCekiKodu" type="text" >

                                <a id="mainHolder_ucSepetim_lnkButtonHediyeCekiUygula" onclick="onHediyeCekiUygula();"  class="button" href="javascript:__doPostBack('ctl00$mainHolder$ucSepetim$lnkButtonHediyeCekiUygula','')">Ekle</a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="basketCompleteContent">
                    <a id="mainHolder_ucSepetim_aSiparisTamamlaLink" style="cursor: pointer !important;" class="button buttonkaan basketCompletebtn" onclick="satinAl();">SİPARİŞİ TAMAMLA</a>
                    
                    
                </div>
            </div><div></div>
        </div>
        
    
    </div>
    <div id="divSepetUrunStokYok" style="display: none;">
        <div class="modal-js SoldModal">
            <div class="modal-title"></div>
            <div class="modal-stitle">Alışverişe devam et, yeni fırsatları yakala.</div>
            <div class="modal-body">
                <div class="SoldOutCount"><span class="spnSoldOutCount"></span><span>Adet</span></div>
                <div class="SoldOut-area">
                    <div class="T">Sepete Eklenemeyen Ürün(ler)</div>
                    <div id="divTukenenUrunListesi" class="List" >
                    </div>
                </div>
            </div>
            <div class="modal-control">
                <div class="item">
                    <a href="javascript:void(0);" onclick="$.fancybox.close()" class="basketCompletebtn button">Alışverişe Devam Et</a>
                </div>
                <div class="item">
                    <a href="javascript:void(0);" onclick="stoktaOlmayankariSepettenCikar()" class="basketCompletebtn  button">Sepetten Çıkar</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>


<script>

export default {
    
    data(){
        return{
        mycarts: this.$store.state.mycart,
        sepettoplamı: this.$store.state.sepettoplam,
        temp: this.$store.state.mycart,
        }
    },
    methods: {
        deleteItem(id){
            this.$store.commit("REMOVE_OBJECT_FROM_ARRAY" , id)
            this.güncelle()
        },
        güncelle(){ 
            this.$store.state.sepettoplam = 0  
            this.temp= this.$store.state.mycart
            for (let index = 0; index < this.temp.length; index++ ) {
                this.$store.state.sepettoplam += this.temp[index].indirimlifiyat*this.temp[index].sepetsayısı   
            }  
        },
        
    },
   
     
}
</script>



<style scoped>
        @import '../assets/mycart.css';
.buttonkaan {
    cursor: pointer;
    background: #71034e;
    color: #fff;
    padding: 10px 136px;
    transition: all .3s ease 0;
    border: none !important;
    font-family: josefin sans, sans-serif !important;
    text-align: center;
}        
</style>