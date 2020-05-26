(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(22),a(3)),l=a.n(i),s=a(14),m=a(1);a(24),a(25);var u=function(e){var t=e.location,a=e.temp_c,n=e.text,c=e.iconURL;return r.a.createElement("div",{className:"weather-container"},r.a.createElement("div",{className:"weather-container-header"},t),r.a.createElement("div",{className:"weather-container-inner"},r.a.createElement("div",{className:"weather-container-image"},r.a.createElement("img",{src:c,alt:"sun"})),r.a.createElement("div",{className:"weather-container-temperature"},a,"\xb0")),r.a.createElement("div",{className:"weather-container-footer"},n))},d=a(50);a(26);var p=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)("ref"),l=Object(m.a)(i,2),s=l[0],p=l[1],f=Object(n.useState)("here is the popper element"),h=Object(m.a)(f,2),E=h[0],v=h[1],b=Object(n.useState)(null),w=Object(m.a)(b,2),g=w[0],j=w[1],N=Object(n.useState)(""),O=Object(m.a)(N,2),y=O[0],x=O[1],S=Object(d.a)(s,E,{modifiers:[{name:"arrow",options:{element:g}}]}),L=S.styles,_=S.attributes,k=e.eventEmitter;function W(){o(!c)}return r.a.createElement("div",{className:"top-container"},r.a.createElement("div",{className:"title"},"Weather Up"),r.a.createElement(u,e),r.a.createElement("button",{className:"btn btn-select-location",type:"button",ref:p,onClick:W},"Select Location"),c&&r.a.createElement("div",Object.assign({className:"popup-container",ref:v},_.popper),r.a.createElement("div",{className:"form-container"},r.a.createElement("label",{htmlFor:"location-name"},"Location Name"),r.a.createElement("input",{id:"location-name",type:"text",placeholder:"City Name",onChange:function(e){x(e.target.value)}}),r.a.createElement("button",{className:"btn btn-select-location",onClick:function(){W(),!1===k.emit("updateWeather",y)&&console.log("Error triggering event")}},"Select")),r.a.createElement("div",{ref:j,style:L.arrow})))};a(27);var f=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],i="http://openweathermap.org/img/w/"+e.iconcode+".png";return r.a.createElement("div",{className:"forecastday-container",onMouseEnter:function(){return e.dayId,void o(!0)},onMouseLeave:function(){return e.dayId,void o(!1)}},c?r.a.createElement("span",{className:"tooltiptext",id:e.dayId},e.description,r.a.createElement("br",null),r.a.createElement("br",null),"Max Temp: ",Math.round(e.temp_max),"\xb0",r.a.createElement("br",null),"Humidity: ",e.humidity,r.a.createElement("br",null),"Pressure: ",e.pressure,r.a.createElement("br",null),"Wind Speed: ",e.wind):null,r.a.createElement("div",{className:"forecastday-container-date"},e.forecastDate),r.a.createElement("div",{className:"forecastday-container-image"},r.a.createElement("img",{src:i,alt:"weather icon"})),r.a.createElement("div",{className:"forecastday-container-text"},e.weather))};var h=function(e){var t=e.forecastDays;return console.log("forecastList: ",t),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"bottom-container-header"},"5-day forecast"),r.a.createElement("div",{className:"bottom-inner-container tooltip"},t.map((function(e,t){var a=e.dt_txt.slice(e.dt_txt.length-8),n=e.weather[0].icon,c=e.dt,o=e.dt_txt.slice(8,10)+"/"+e.dt_txt.slice(5,7),i=e.main.temp_max,l=e.main.humidity,s=e.main.pressure,m=e.weather[0].description,u=e.wind.speed;return"12:00:00"===a?r.a.createElement(f,{iconcode:n,weather:e.weather[0].main,description:m,dayId:c,temp_max:i,forecastDate:o,key:t,humidity:l,pressure:s,wind:u}):r.a.createElement(r.a.Fragment,null)}))))};var E=function(e){var t=Object(n.useState)("London"),c=Object(m.a)(t,2),o=c[0],i=c[1],u=e.eventEmitter,d=Object(n.useState)(0),f=Object(m.a)(d,2),E=f[0],v=f[1],b=Object(n.useState)(""),w=Object(m.a)(b,2),g=w[0],j=w[1],N=Object(n.useState)(""),O=Object(m.a)(N,2),y=O[0],x=O[1],S=Object(n.useState)([]),L=Object(m.a)(S,2),_=L[0],k=L[1],W=Object(n.useState)(!0),M=Object(m.a)(W,2),C=M[0],I=M[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a(28),n={appid:"f84cddc6b247326126f3ca0fcf0bc7cf",q:o,units:"metric"},e.next=4,t.get("https://api.openweathermap.org/data/2.5/forecast",{params:n}).then((function(e){return e.data})).then((function(e){console.log("data forecast: ",e),I(!1),v(Math.round(e.list[0].main.temp)),j(e.list[0].weather[0].main);var t=e.list[0].weather[0].icon;console.log("iconcode: ",t),x("http://openweathermap.org/img/w/"+t+".png"),k(e.list)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),u.on("updateWeather",(function(e){i(e),console.log("Updating weather... LocationName:",e)})),r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"main-container"},C&&r.a.createElement("h3",null,"Loading Weather..."),!C&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-section"},r.a.createElement(p,{location:o,temp_c:E,text:g,iconURL:y,eventEmitter:e.eventEmitter})),r.a.createElement("div",{className:"bottom-section"},r.a.createElement(h,{forecastDays:_})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(16);var b=function(e){var t=new v.EventEmitter;return r.a.Children.map(e.children,(function(e){return r.a.cloneElement(e,{appName:"Weather Up",eventEmitter:t})}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null,r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.3a9bbaaa.chunk.js.map