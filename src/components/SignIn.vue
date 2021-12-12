<template>

<div class="solSagBosluk" >
    
<span class="spanTittle hideMobile">Üye Girişi</span>
<div class="userWrapper emailDiv">
<input class="textbox txtUyeGirisEmail" name="txtUyeGirisEmail" required="required" placeholder="E-posta" type="text" member-user-name-validate="true">

</div>
<div class="userWrapper passDiv" style="position:relative;">
<input class="textbox txtUyeGirisPassword" name="txtUyeGirisPassword" ng-required="true" placeholder="Şifre" type="password">

<span class="TcxPassEye" style="position:absolute; right:10px;top:22%;">
<a id="eyeTrue" onmouseover="window.mem.form.maskPasswordIn('txtUyeGirisPassword','eyeTrue','eyeFalse')" onmouseout="window.mem.form.maskPasswordOut('txtUyeGirisPassword','eyeTrue','eyeFalse')">
<svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" ><path d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"></path><path d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"></path></svg>
</a>

</span>
</div>
<button type="button" class="userLoginBtn button" onclick="window.mem.form.login()">
<span style="font-size: 20px">Giriş Yap</span>
</button>
<div>
<a onclick="window.mem.init.bind('forgotpassword')" class="userPassBtn" style="font-size: 15px">Şifremi Unuttum</a>
</div>
<a class="userPassBtn userSignUp " onclick="window.mem.init.bind('quickmembership')">Üye değilsen <a>ÜYE OL</a></a>
</div>

</template>



<style>
.solSagBosluk{
    margin-left: 35%;
    margin-right: 35%;
}
.userWrapper input {
    letter-spacing: .3px;
    background-color: #fff;
    height: auto;
    border-radius: 0;
    box-shadow: none;
    padding: 15px 0;
    border: 1px solid #eee;
    font-weight: normal;
    color: #555;
    width: 100%;
    text-indent: 15px;
    line-height: 1;
}
.txtUyeGirisEmail {
    margin: 0 0 10px 0
}

.txtUyeGirisPassword {
    margin: 0 0 10px 0
}

.spanTittle {
    display: block;
    text-align: center;
    margin-bottom: 15px;
    font-size: 26px;
    font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    font-weight: 600;
}
.userLoginBtn {
    width: 100%;
    float: none;
    text-align: center;
    margin: 10px 0 0 0;
    margin-top: 20px;
    clear: left;
    line-height: 1.5 !important;
    padding: 15px 0;
    cursor: pointer;
    border-radius: 0;
    height: auto;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: .6px;
    display: block;    
    color: #fff;
    background: #000 !important;
}
.userPassBtn {
    margin: 10px 0;
    display: inline-block;
    line-height: normal;
    font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    font-size: 12px;
    text-align: left;
    text-decoration: underline;
}

.textbox {
    font-family: josefin sans,sans-serif !important;
    color: #666;
    display: block;
    font-size: 14px;
    width: 100%;
    transition-duration: .2s,.2s;
    -webkit-transition-duration: .2s,.2s;
}
.userWrapper {
    margin: 0;
    margin-bottom: 10px;        
    outline: 0;
    padding: 0;
    font-weight: 400;
}

.userSignUp {
    width: 100%;
    margin-top: 7px;
    font-size: 16px;
    display: block;
    text-align: center;
    border: 1px solid #666;
    padding: 12px 0;
    font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    clear: left;
    background: #fff !important;
    color: #000 !important;
    border-color: #fff !important;
}

</style>