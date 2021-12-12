<template>
  <div class="userLeftBox solSagBosluk">
    <div id="divPopupHizliUyelik">
      <span class="spanTittle">Hızlı Üyelik</span>
      <div class="userWrapper nameDiv">
        <input
          class="textbox"
          name="txtQuickName"
          placeholder="Adınız"
          type="text"
        />
      </div>
      <div class="userWrapper lastDiv">
        <input
          class="textbox"
          name="txtQuickLastName"
          placeholder="Soyadınız"
          type="text"
        />
      </div>
      <div class="userWrapper emailDiv">
        <input
          class="textbox"
          name="txtQuickEmail"
          placeholder="E-posta"
          type="email"
        />
      </div>
      <div class="userWrapper passDiv" style="position: relative">
        <input
          class="textbox"
          name="txtQuickPass"
          placeholder="Şifre"
          type="password"
        />
        <span
          class="TcxPassEye"
          style="position: absolute; right: 10px; top: 22%"
        >
          <a
            id="eyeTrueFast"
            onmouseover="window.mem.form.maskPasswordIn('txtQuickPass','eyeTrueFast','eyeFalseFast')"
            onmouseout="window.mem.form.maskPasswordOut('txtQuickPass','eyeTrueFast','eyeFalseFast')"
          >
            <svg
              aria-hidden="true"
              class="stUf5b"
              fill="currentColor"
              focusable="false"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"
              ></path>
              <path
                d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"
              ></path>
            </svg>
          </a>
          <a
            id="eyeFalseFast"
            onmouseover="window.mem.form.maskPasswordIn('txtQuickPass','eyeTrueFast','eyeFalseFast')"
            onmouseout="window.mem.form.maskPasswordOut('txtQuickPass','eyeTrueFast','eyeFalseFast')"
            style="display: none"
          >
            <svg
              aria-hidden="true"
              class="stUf5b"
              fill="currentColor"
              focusable="false"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"
              ></path>
              <path
                d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"
              ></path>
              <path
                d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"
              ></path>
            </svg>
          </a>
        </span>
      </div>
      <div>
        <html lang="en">



</html>
      </div> 
      <div style="float:left;" class="userMail">
        <input type="checkbox" /><label for="chkMailPermission"
          >Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak
          istiyorum.</label
        >
      </div>
      <div style="float:left;" class="userSms">
        <input type="checkbox" /><label for="chkSmsPermission"
          >Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak
          istiyorum.</label
        >
      </div>
      <div style="float:left;" class="userSozlesmeDiv">
        <input id="chkSozlesme" type="checkbox" />
        <label for="chkSozlesme"
          ><a style="color: red">Üyelik koşullarını</a> ve
          <a style="color: red">kişisel verilerimin korunmasını</a> kabul
          ediyorum.</label
        >
      </div>
      <button
        type="button"
        class="userLoginBtn QuickMember button"
        onclick="window.mem.form.signUp()"
      >
        <span>Üye Ol</span>
      </button>
      <a
        class="userLogin"
        href="javascript:void(0);"
        onclick="window.mem.init.bind('login')"
      >
        <p>Üye Misiniz?</p>
        <p class="backBtn">Giriş Yap</p>
      </a>
    </div>
  </div>
</template>



<style scoped>
body {
  font-family: Helvetica, sans-serif;
}

.container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

#phone, .btn {
  padding-top: 6px;
  padding-bottom: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  color: #fff;
  background-color: #428BCA;
  border-color: #357EBD;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
}

.btn:focus, .btn:hover {
  background-color: #3276B1;
  border-color: #285E8E;
}

.btn:active {
  box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
}

.alert {
  padding: 15px;
  margin-top: 10px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-info {
  border-color: #bce8f1;
  color: #31708f;
  background-color: #d9edf7;
}

.alert-error {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.userWrapper {
    margin: 0;
    margin-bottom: 10px;
    outline: 0;
    padding: 0;
    font-weight: 400;
}
.iti {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    font-weight: 400;
}

.iti__flag-container {
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 1px;
}
.iti__selected-flag {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 6px 0 8px;
}
.iti__country-list {
    position: absolute;
    z-index: 2;
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0 0 0 -1
px
;
    box-shadow: 1px 1px 4px rgb(0 0 0 / 20%);
    background-color: #fff;
    border: 1
px
 solid #ccc;
    white-space: nowrap;
    max-height: 200
px
;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
.iti--allow-dropdown input, .iti--allow-dropdown {
    padding-right: 6px;
    padding-left: 52px !important;
    margin-left: 0;
}
.iti input, .iti  {
    position: relative;
    z-index: 0;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: 0;
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
.textbox {
    font-family: josefin sans,sans-serif !important;
    color: #666;
    display: block;
    font-size: 14px;
    width: 100%;
    transition-duration: .2s,.2s;
    -webkit-transition-duration: .2s,.2s;
}
.iti__flag.iti__tr {
    height: 14
px
;
    background-position: -5065
px
 0;
}
.iti__flag {
    width: 20
px
;
    box-shadow: 0 0 1px 0 #888;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png);
    background-repeat: no-repeat;
    background-color: #dbdbdb;
    background-position: 20
px
 0;
}
.iti__arrow {
    margin-left: 6
px
;
    width: 0;
    height: 0;
    border-left: 3
px
 solid transparent;
    border-right: 3
px
 solid transparent;
    border-top: 4
px
 solid #555;
}
.solSagBosluk {
  margin-left: 35%;
  margin-right: 35%;
}
.userMail input,
.userSms input,
.userSozlesmeDiv input {
  width: 17px;
  margin-left: 0;
  display: inline-block;
  vertical-align: top;
  margin-top: 0 !important;
  margin-right: 5px;
  font-family: josefin sans, sans-serif !important;
  font-size: 12px;
}
.userMail label,
.userSms label,
.userSozlesmeDiv label {
  width: 90%;
  line-height: 12px;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box !important;
  color: gray;
}

.userLogin {
  text-decoration: none;
  text-align: center;
  color: #000;
  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  clear: left;
  margin-top: 15px;
  border-top: 1px solid #eee;
  font-style: italic;
  display: block;
}
.backBtn {
  font-style: normal;
  display: block;
  text-align: center;
  border: 1px solid #666;
  padding: 12px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  clear: left;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 0;
  margin-top: 15px;
  background: #fff !important;
  border-color: #000 !important;
}
</style>
