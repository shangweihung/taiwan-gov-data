(this["webpackJsonptaiwan-data"]=this["webpackJsonptaiwan-data"]||[]).push([[0],{34:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),o=(a(39),a(3)),c=a(4),s=a(6),m=a(5),h=a(28),u=a(15),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{style:{fontSize:50}},"It's a React practice project for Taiwan Government Open Data. "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://data.ntpc.gov.tw/"},"\u65b0\u5317\u5e02\u653f\u5e9c\u8cc7\u6599\u958b\u653e\u5e73\u53f0")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://opendata.cwb.gov.tw/index"},"\u6c23\u8c61\u8cc7\u6599\u958b\u653e\u5e73\u53f0"))))}}]),a}(n.Component),d=a(10),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.message;return r.a.createElement("div",{className:"message-model"},e)}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={placeHolder:n.props.placeHolder},n.handleFilterTextChange=n.handleFilterTextChange.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"handleFilterTextChange",value:function(e){this.props.onFilterTextChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{type:"text",id:"search",placeholder:this.state.placeHolder,onChange:this.handleFilterTextChange})}}]),a}(n.Component),g=function(e,t,a){return"error"===t?"":a(e,t)},v=function(e){var t;switch(e){case 0:t="\u661f\u671f\u65e5";break;case 1:t="\u661f\u671f\u4e00";break;case 2:t="\u661f\u671f\u4e8c";break;case 3:t="\u661f\u671f\u4e09";break;case 4:t="\u661f\u671f\u56db";break;case 5:t="\u661f\u671f\u4e94";break;case 6:t="\u661f\u671f\u516d"}return t},b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){for(var e=this.props.holidayData,t=[],a=0;a<e.length;a++)"\u88dc\u884c\u4e0a\u73ed\u65e5"===e[a].holidayCategory?t.push(r.a.createElement("tr",{key:e[a].date,className:"work-day"},r.a.createElement("td",null,e[a].date),r.a.createElement("td",null,e[a].name),r.a.createElement("td",null,e[a].holidayCategory),r.a.createElement("td",null,e[a].description))):t.push(r.a.createElement("tr",{key:e[a].date},r.a.createElement("td",null,e[a].date),r.a.createElement("td",null,e[a].name),r.a.createElement("td",null,e[a].holidayCategory),r.a.createElement("td",null,e[a].description)));return t}}]),a}(n.Component);function y(e,t){for(var a=[],n=0;n<e.length;n++)if(new Date(e[n].date)>=new Date("1/1/"+t)&&new Date(e[n].date)<=new Date("12/31/"+t)&&"\u661f\u671f\u516d\u3001\u661f\u671f\u65e5"!==e[n].holidayCategory){var r={date:"",name:"",holidayCategory:"",description:""},i=new Date(e[n].date);r.date=e[n].date+" "+v(i.getDay()),r.name=e[n].name,r.holidayCategory=e[n].holidayCategory,r.description=e[n].description,a.push(r)}return a}var O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,isError:!1,year:(new Date).getFullYear(),data:""},n.handleYear=n.handleYear.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"handleYear",value:function(e){if(4===e.length)this.setState((function(t){return{year:e}}));else if(""===e&&void 0===e){var t=new Date;this.setState((function(e){return{year:t.getFullYear()}}))}else this.setState((function(e){return{year:"error"}}))}},{key:"getHolidayDatas",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000077-002").then((function(e){return e.json()})).then((function(t){var a=t.result.records;e.setState((function(e){return{isLoading:!1,data:a}}))})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getHolidayDatas()}},{key:"render",value:function(){var e,t,a=this.state.data;if(this.state.isLoading)console.log("It's loading!!!"),t=r.a.createElement("p",{id:"message"},r.a.createElement("i",{className:"fas fa-spinner"})," \u8f09\u5165\u4e2d"),e=r.a.createElement(f,{message:t});else if(this.state.isError)console.log("error"),t=r.a.createElement("p",{id:"message"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"})," \u4f3a\u670d\u5668\u767c\u751f\u554f\u984c"),e=r.a.createElement(f,{message:t});else if(console.log("Finish loading!!!"),(a=g(this.state.data,this.state.year,y)).length>0){var n=r.a.createElement("tr",null,r.a.createElement("th",null,"\u65e5\u671f"),r.a.createElement("th",null,"\u540d\u7a31"),r.a.createElement("th",null,"\u985e\u578b"),r.a.createElement("th",null,"\u5176\u4ed6"));e=r.a.createElement("div",null,r.a.createElement(E,{placeHolder:"\u67e5\u8a62\u5e74\u4efd: e.g.2020",onFilterTextChange:this.handleYear}),r.a.createElement("table",{className:"holiday-table"},r.a.createElement("tbody",null,n,r.a.createElement(b,{holidayData:a}))))}else t=r.a.createElement("p",{id:"message"},r.a.createElement("i",{className:"fas fa-file"})," \u67e5\u7121\u8cc7\u6599"),e=r.a.createElement("div",null,r.a.createElement(E,{placeHolder:"\u67e5\u8a62\u5e74\u4efd: e.g.2020",onFilterTextChange:this.handleYear}),r.a.createElement(f,{message:t}));return e}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=new Date(this.props.dayInfo.startTime),a=new Date(this.props.dayInfo.endTime),n=v(t.getDay()),i=v(a.getDay()),l=t.toLocaleTimeString("en-US"),o=a.toLocaleTimeString("en-US");return e=n===i?n:n+" - "+i,r.a.createElement("div",{className:"weather-card"},r.a.createElement("div",{className:"weather-time"},e,r.a.createElement("br",null),r.a.createElement("p",{className:"start-time"},l),r.a.createElement("p",{className:"end-time"}," - ",o)),r.a.createElement("div",{className:"weather-description"},this.props.dayInfo.weatherDescription),r.a.createElement("div",{className:"weather-temperature"},this.props.dayInfo.minTemperature," ~ "," ",this.props.dayInfo.maxTemperature),r.a.createElement("div",{className:"rain-probability"},"\u964d\u96e8\u6a5f\u7387:",this.props.dayInfo.rainProbability))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={select:n.props.defaultSelect},n.selectClick=n.selectClick.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"selectClick",value:function(e){this.setState((function(t){return{select:e}})),this.props.onOptionChange(e)}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.props.optionList.length;a++)t.push(this.props.optionList[a].locationName);var n=[];return t.forEach((function(t,a){t===e.state.select?n.push(r.a.createElement("li",{key:a,className:"option selected",onClick:function(){return e.selectClick(t)}},t)):n.push(r.a.createElement("li",{key:a,className:"option",onClick:function(){return e.selectClick(t)}},t))})),r.a.createElement("ul",{className:this.props.isShow?"select-option show-select-option":"select-option"},n)}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showOption:!1,select:n.props.defaultSelect},n.selectBarClick=n.selectBarClick.bind(Object(d.a)(n)),n.onOptionChange=n.onOptionChange.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"selectBarClick",value:function(){this.setState((function(e){return{showOption:!e.showOption}}))}},{key:"onOptionChange",value:function(e){this.setState((function(t){return{select:e}})),this.props.onSelectOptonChange(e)}},{key:"render",value:function(){var e=this.state.select;return r.a.createElement("div",{className:"select-bar",onClick:this.selectBarClick},r.a.createElement("p",null,e)," ",r.a.createElement("i",{className:"fas fa-caret-down"}),r.a.createElement(k,{isShow:this.state.showOption,optionList:this.props.optionDatas,defaultSelected:e,onOptionChange:this.onOptionChange}))}}]),a}(n.Component);function j(e,t){for(var a,n,r={location:"",info:[{startTime:"",endTime:"",weatherDescription:"",maxTemperature:"",minTemperature:"",rainProbability:"",comfort:""},{startTime:"",endTime:"",weatherDescription:"",maxTemperature:"",minTemperature:"",rainProbability:"",comfort:""},{startTime:"",endTime:"",weatherDescription:"",maxTemperature:"",minTemperature:"",rainProbability:"",comfort:""}]},i=0;i<e.length;i++)if(e[i].locationName===t){a=i;break}for(var l=0;l<e[a].weatherElement.length;l++){n=e[a].weatherElement[l].elementName,r.location=e[a].locationName;for(var o=0;o<e[a].weatherElement[l].time.length;o++)o<3&&(r.info[o].startTime=e[a].weatherElement[l].time[o].startTime,r.info[o].endTime=e[a].weatherElement[l].time[o].endTime),"Wx"===n?r.info[o].weatherDescription=e[a].weatherElement[l].time[o].parameter.parameterName:"MaxT"===n?r.info[o].maxTemperature=e[a].weatherElement[l].time[o].parameter.parameterName+"\u2103":"MinT"===n?r.info[o].minTemperature=e[a].weatherElement[l].time[o].parameter.parameterName+"\u2103":"CI"===n?r.info[o].comfort=e[a].weatherElement[l].time[o].parameter.parameterName:"PoP"===n&&(r.info[o].rainProbability=e[a].weatherElement[l].time[o].parameter.parameterName+"%")}return r}var N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,isError:!1,city:"\u81fa\u5317\u5e02",data:""},n.onSelectOptonChange=n.onSelectOptonChange.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"onSelectOptonChange",value:function(e){this.setState((function(t){return{city:e}}))}},{key:"getWeatherData",value:function(){var e=this;fetch("https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=rdec-key-123-45678-011121314&format=JSON").then((function(e){return e.json()})).then((function(t){var a=t.cwbopendata.dataset.location;e.setState((function(e){return{isLoading:!1,data:a}}))})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getWeatherData()}},{key:"render",value:function(){var e,t;if(this.state.isLoading)console.log("It's loading!!!"),t=r.a.createElement("p",{id:"message"},r.a.createElement("i",{className:"fas fa-spinner"})," \u8f09\u5165\u4e2d"),e=r.a.createElement(f,{message:t});else if(this.state.isError)console.log("error"),t=r.a.createElement("p",{id:"message"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"})," \u4f3a\u670d\u5668\u767c\u751f\u554f\u984c"),e=r.a.createElement(f,{message:t});else{console.log("Finish loading!!!");var a=g(this.state.data,this.state.city,j),n=a.info.map((function(e,t){return r.a.createElement(w,{key:t,dayInfo:e})}));e=r.a.createElement("div",null,r.a.createElement(C,{optionDatas:this.state.data,defaultSelect:this.state.city,onSelectOptonChange:this.onSelectOptonChange}),r.a.createElement("div",{className:"weather"},r.a.createElement("h3",{className:"weather-location"},a.location),r.a.createElement("div",{className:"weather-card-container"},n)))}return e}}]),a}(n.Component),T=(a(40),a(51)),D=a(52),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={webModel:"\u570b\u5b9a\u5047\u65e5"},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(T.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(T.a.Brand,{href:"/"},r.a.createElement("i",{class:"far fa-flag"})," \u653f\u5e9c\u8cc7\u6599\u958b\u653e\u5e73\u53f0 "),r.a.createElement(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(T.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(D.a,{className:"mr-auto"},r.a.createElement(D.a.Link,{href:"/holiday"},"\u570b\u5b9a\u5047\u65e5"),r.a.createElement(D.a.Link,{href:"/weather"},"\u5929\u6c23\u9810\u5831")))),r.a.createElement("div",{className:"container"},r.a.createElement(u.a,{exact:!0,path:"/",component:p}),r.a.createElement(u.a,{exact:!0,path:"/holiday",component:O}),r.a.createElement(u.a,{exact:!0,path:"/weather",component:N})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.f63e9faa.chunk.js.map