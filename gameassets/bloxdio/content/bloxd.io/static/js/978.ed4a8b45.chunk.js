"use strict";(self.webpackChunkbloxd=self.webpackChunkbloxd||[]).push([[978],{76978:function(e,i,a){a.r(i),a.d(i,{initializeFirebase:function(){return c}});var t=a(15671),o=a(43144),n=a(33700),s=a(31172),r=a(20271),d=a(68206),h=a(71806),u=a(85774),l=!1;function c(){if(l)throw new Error("Firebase should only be initialised once");return l=!0,new f}var f=function(){function e(){(0,t.Z)(this,e),this.failed=void 0,this.firebaseApp=void 0,this.analytics=void 0,this.auth=void 0,this.googleProvider=void 0,this.failed=!1,console.log("Current gamemode",(0,n.hy)());var i={apiKey:"AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",authDomain:"bloxd-ee1aa.firebaseapp.com",projectId:"bloxd-ee1aa",storageBucket:"bloxd-ee1aa.appspot.com",messagingSenderId:"758847442742",appId:"1:758847442742:web:7bb74eb261641e30f02d97",measurementId:"G-DXF16YBENG"},a=i;this.firebaseApp=(0,r.ZF)(i),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",a,{send_page_view:!1}),this.analytics=(0,d.IH)();var o={portal:s.parse(document.location.search).portal||"root",loggedIn:!1};u.EU.id&&(o.user_id=u.EU.id),this.setUserProperties(o);try{this.auth=(0,h.v0)(),(0,h.ic)(this.auth),this.googleProvider=new h.hJ}catch(l){this.failed=!0,console.error("Failed to log in because firebase auth crashes when you cannot read from localstorage")}window.gtag("set",{cookie_flags:"SameSite=None;Secure"})}return(0,o.Z)(e,[{key:"hasFailed",value:function(){return this.failed}},{key:"setUserProperties",value:function(e){this.failed||(0,d.xP)(this.analytics,e)}},{key:"onIdTokenChanged",value:function(e){this.failed||(0,h.MX)(this.auth,e)}},{key:"signOut",value:function(){if(!this.failed)return(0,h.w7)(this.auth)}},{key:"signInWithPopup",value:function(e){if(!this.failed)return(0,h.rh)(this.auth,e)}}]),e}()}}]);