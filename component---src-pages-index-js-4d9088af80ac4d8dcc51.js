(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{DCNC:function(e,t,a){var r=a("P8UN");r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},RXBc:function(e,t,a){"use strict";a.r(t);a("YbXK"),a("cFtU"),a("q8oJ"),a("8npG"),a("m210"),a("4DPX"),a("rzGZ"),a("YBKJ"),a("DCNC"),a("E5k/");var r=a("q1tI"),n=a.n(r),o=(a("n7j8"),a("AqHK"),a("MIFh"),a("OeI1"),a("gu/5"),a("eoYm"),a("6kNP"),a("pS08"),a("LagC"),a("XDgv")),l=a.n(o),s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function i(e,t){function a(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function u(e,t,a,r){return new(a||(a=Promise))((function(n,o){function l(e){try{i(r.next(e))}catch(t){o(t)}}function s(e){try{i(r.throw(e))}catch(t){o(t)}}function i(e){e.done?n(e.value):new a((function(t){t(e.value)})).then(l,s)}i((r=r.apply(e,t||[])).next())}))}function m(e,t){var a,r,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(s){o=[6,s],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var p={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(e,t){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleGoogleChartsLoaderScriptLoaded=function(e){var a=t.props,r=a.chartVersion,n=a.chartPackages,o=a.chartLanguage,l=a.mapsApiKey,s=a.onLoad;e.charts.load(r||"current",{packages:n||["corechart","controls"],language:o||"en",mapsApiKey:l}),e.charts.setOnLoadCallback((function(){s(e)}))},t}return i(t,e),t.prototype.shouldComponentUpdate=function(e){return e.chartPackages===this.props.chartPackages},t.prototype.render=function(){var e=this,t=this.props.onError;return Object(r.createElement)(l.a,{url:"https://www.gstatic.com/charts/loader.js",onError:t,onLoad:function(){var t=window;t.google&&e.handleGoogleChartsLoaderScriptLoaded(t.google)}})},t}(r.Component),d=0,g=function(){return"reactgooglegraph-"+(d+=1)},f=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],v=function(e,t,a){return void 0===a&&(a={}),u(void 0,void 0,void 0,(function(){return m(this,(function(r){return[2,new Promise((function(r,n){var o=a.headers?"headers="+a.headers:"headers=0",l=a.query?"&tq="+encodeURIComponent(a.query):"",s=a.gid?"&gid="+a.gid:"",i=a.sheet?"&sheet="+a.sheet:"",c=a.access_token?"&access_token="+a.access_token:"",u=t+"/gviz/tq?"+(""+o+s+i+l+c);new e.visualization.Query(u).send((function(e){e.isError()?n("Error in query:  "+e.getMessage()+" "+e.getDetailedMessage()):r(e.getDataTable())}))}))]}))}))},w=Object(r.createContext)(p),x=w.Provider,b=w.Consumer,y=function(e){var t=e.children,a=e.value;return Object(r.createElement)(x,{value:a},t)},E=function(e){var t=e.render;return Object(r.createElement)(b,null,(function(e){return t(e)}))},C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hiddenColumns:[]},t.listenToLegendToggle=function(){var e=t.props,a=e.google,r=e.googleChartWrapper;a.visualization.events.addListener(r,"select",(function(){var e=r.getChart().getSelection(),a=r.getDataTable();if(0!==e.length&&null===e[0].row&&null!==a){var n=e[0].column,o=t.getColumnID(a,n);t.state.hiddenColumns.includes(o)?t.setState((function(e){return c({},e,{hiddenColumns:e.hiddenColumns.filter((function(e){return e!==o})).slice()})})):t.setState((function(e){return c({},e,{hiddenColumns:e.hiddenColumns.concat([o])})}))}}))},t.applyFormatters=function(e,a){for(var r=t.props.google,n=0,o=a;n<o.length;n++){var l=o[n];switch(l.type){case"ArrowFormat":(s=new r.visualization.ArrowFormat(l.options)).format(e,l.column);break;case"BarFormat":(s=new r.visualization.BarFormat(l.options)).format(e,l.column);break;case"ColorFormat":for(var s=new r.visualization.ColorFormat(l.options),i=0,c=l.ranges;i<c.length;i++){var u=c[i];s.addRange.apply(s,u)}s.format(e,l.column);break;case"DateFormat":(s=new r.visualization.DateFormat(l.options)).format(e,l.column);break;case"NumberFormat":(s=new r.visualization.NumberFormat(l.options)).format(e,l.column);break;case"PatternFormat":(s=new r.visualization.PatternFormat(l.options)).format(e,l.column)}}},t.getColumnID=function(e,t){return e.getColumnId(t)||e.getColumnLabel(t)},t.draw=function(e){var a=e.data,r=e.diffdata,n=e.rows,o=e.columns,l=e.options,s=e.legend_toggle,i=e.legendToggle,c=e.chartType,p=e.formatters,h=e.spreadSheetUrl,d=e.spreadSheetQueryParameters;return u(t,void 0,void 0,(function(){var e,t,u,g,f,w,x,b,y,E,C,N,_,z;return m(this,(function(m){switch(m.label){case 0:return e=this.props,t=e.google,u=e.googleChartWrapper,f=null,null!==r&&(w=t.visualization.arrayToDataTable(r.old),x=t.visualization.arrayToDataTable(r.new),f=t.visualization[c].prototype.computeDiff(w,x)),null===a?[3,1]:(g=Array.isArray(a)?t.visualization.arrayToDataTable(a):new t.visualization.DataTable(a),[3,5]);case 1:return null===n||null===o?[3,2]:(g=t.visualization.arrayToDataTable([o].concat(n)),[3,5]);case 2:return null===h?[3,4]:[4,v(t,h,d)];case 3:return g=m.sent(),[3,5];case 4:g=t.visualization.arrayToDataTable([]),m.label=5;case 5:for(b=g.getNumberOfColumns(),y=0;y<b;y+=1)E=this.getColumnID(g,y),this.state.hiddenColumns.includes(E)&&(C=g.getColumnLabel(y),N=g.getColumnId(y),_=g.getColumnType(y),g.removeColumn(y),g.addColumn({label:C,id:N,type:_}));return z=u.getChart(),"Timeline"===u.getChartType()&&z&&z.clearChart(),u.setChartType(c),u.setOptions(l),u.setDataTable(g),u.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(g),null!==f&&(u.setDataTable(f),u.draw()),null!==p&&(this.applyFormatters(g,p),u.setDataTable(g),u.draw()),!0!==i&&!0!==s||this.grayOutHiddenColumns({options:l}),[2]}}))}))},t.grayOutHiddenColumns=function(e){var a=e.options,r=t.props.googleChartWrapper,n=r.getDataTable();if(null!==n){var o=n.getNumberOfColumns();if(!1!==t.state.hiddenColumns.length>0){var l=Array.from({length:o-1}).map((function(e,r){var o=t.getColumnID(n,r+1);return t.state.hiddenColumns.includes(o)?"#CCCCCC":void 0!==a.colors&&null!==a.colors?a.colors[r]:f[r]}));r.setOptions(c({},a,{colors:l})),r.draw()}}},t.onResize=function(){t.props.googleChartWrapper.draw()},t}return i(t,e),t.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.google,a=e.googleChartWrapper;window.removeEventListener("resize",this.onResize),t.visualization.events.removeAllListeners(a),"Timeline"===a.getChartType()&&a.getChart()&&a.getChart().clearChart()},t.prototype.componentDidUpdate=function(){this.draw(this.props)},t.prototype.render=function(){return null},t}(r.Component),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){var e=this.props,t=e.google,a=e.googleChartWrapper,n=e.googleChartDashboard;return Object(r.createElement)(E,{render:function(e){return Object(r.createElement)(C,c({},e,{google:t,googleChartWrapper:a,googleChartDashboard:n}))}})},t}(r.Component),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.listenToEvents=function(e){var t=this,a=e.chartEvents,r=e.google,n=e.googleChartWrapper;if(null!==a){r.visualization.events.removeAllListeners(n);for(var o=function(e){var a=e.eventName,o=e.callback;r.visualization.events.addListener(n,a,(function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];o({chartWrapper:n,props:t.props,google:r,eventArgs:e})}))},l=0,s=a;l<s.length;l++){o(s[l])}}},t.prototype.render=function(){var e=this,t=this.props,a=t.google,n=t.googleChartWrapper;return Object(r.createElement)(E,{render:function(t){return e.listenToEvents({chartEvents:t.chartEvents||null,google:a,googleChartWrapper:n}),null}})},t}(r.Component),z=0,L=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},t.graphID=null,t.dashboard_ref=Object(r.createRef)(),t.toolbar_ref=Object(r.createRef)(),t.getGraphID=function(){var e,a=t.props,r=a.graphID,n=a.graph_id;return e=null===r&&null===n?null===t.graphID?g():t.graphID:null!==r&&null===n?r:null!==n&&null===r?n:r,t.graphID=e,t.graphID},t.getControlID=function(e,t){return z+=1,void 0===e?"googlechart-control-"+t+"-"+z:e},t.addControls=function(e,a){var r=t.props,n=r.google,o=r.controls,l=null===o?null:o.map((function(e,a){var r=e.controlID,o=e.controlType,l=e.options,s=e.controlWrapperParams,i=t.getControlID(r,a);return{controlProp:e,control:new n.visualization.ControlWrapper(c({containerId:i,controlType:o,options:l},s))}}));if(null===l)return null;a.bind(l.map((function(e){return e.control})),e);for(var s=function(a){for(var r=a.control,o=a.controlProp.controlEvents,l=function(a){var o=a.callback,l=a.eventName;n.visualization.events.removeListener(r,l,o),n.visualization.events.addListener(r,l,(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];o({chartWrapper:e,controlWrapper:r,props:t.props,google:n,eventArgs:a})}))},s=0,i=void 0===o?[]:o;s<i.length;s++){l(i[s])}},i=0,u=l;i<u.length;i++){s(u[i])}return l},t.renderChart=function(){var e=t.props,a=e.width,n=e.height,o=e.options,l=e.style,s=e.className,i=e.rootProps,u=e.google,m=c({height:n||o&&o.height,width:a||o&&o.width},l);return Object(r.createElement)("div",c({id:t.getGraphID(),style:m,className:s},i),t.state.isReady&&null!==t.state.googleChartWrapper?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(N,{googleChartWrapper:t.state.googleChartWrapper,google:u,googleChartDashboard:t.state.googleChartDashboard}),Object(r.createElement)(_,{googleChartWrapper:t.state.googleChartWrapper,google:u})):null)},t.renderControl=function(e){return void 0===e&&(e=function(e){e.control,e.controlProp;return!0}),t.state.isReady&&null!==t.state.googleChartControls?Object(r.createElement)(r.Fragment,null,t.state.googleChartControls.filter((function(t){var a=t.controlProp,r=t.control;return e({control:r,controlProp:a})})).map((function(e){var t=e.control;e.controlProp;return Object(r.createElement)("div",{key:t.getContainerId(),id:t.getContainerId()})}))):null},t.renderToolBar=function(){return null===t.props.toolbarItems?null:Object(r.createElement)("div",{ref:t.toolbar_ref})},t}return i(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.options,a=e.google,r=e.chartType,n=e.chartWrapperParams,o=e.toolbarItems,l=e.getChartEditor,s=e.getChartWrapper,i=c({chartType:r,options:t,containerId:this.getGraphID()},n),u=new a.visualization.ChartWrapper(i);u.setOptions(t),s(u,a);var m=new a.visualization.Dashboard(this.dashboard_ref),p=this.addControls(u,m);null!==o&&a.visualization.drawToolbar(this.toolbar_ref.current,o);var h=null;null!==l&&l({chartEditor:h=new a.visualization.ChartEditor,chartWrapper:u,google:a}),this.setState({googleChartEditor:h,googleChartControls:p,googleChartDashboard:m,googleChartWrapper:u,isReady:!0})},t.prototype.componentDidUpdate=function(){if(null!==this.state.googleChartWrapper&&null!==this.state.googleChartDashboard&&null!==this.state.googleChartControls)for(var e=this.props.controls,t=0;t<e.length;t+=1){var a=e[t],r=a.controlType,n=a.options,o=a.controlWrapperParams;o&&"state"in o&&this.state.googleChartControls[t].control.setState(o.state),this.state.googleChartControls[t].control.setOptions(n),this.state.googleChartControls[t].control.setControlType(r)}},t.prototype.shouldComponentUpdate=function(e,t){return this.state.isReady!==t.isReady||e.controls!==this.props.controls},t.prototype.render=function(){var e=this.props,t=e.width,a=e.height,n=e.options,o=e.style,l=c({height:a||n&&n.height,width:t||n&&n.width},o);return null!==this.props.render?Object(r.createElement)("div",{ref:this.dashboard_ref,style:l},Object(r.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(r.createElement)("div",{ref:this.dashboard_ref,style:l},this.renderControl((function(e){return"bottom"!==e.controlProp.controlPosition})),this.renderChart(),this.renderControl((function(e){return"bottom"===e.controlProp.controlPosition})),this.renderToolBar())},t}(r.Component),I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._isMounted=!1,t.state={loadingStatus:"loading",google:null},t.onLoad=function(e){if(t.isFullyLoaded(e))t.onSuccess(e);else var a=setInterval((function(){var e=window.google;t._isMounted?e&&t.isFullyLoaded(e)&&(clearInterval(a),t.onSuccess(e)):clearInterval(a)}),1e3)},t.onSuccess=function(e){t.setState({loadingStatus:"ready",google:e})},t.onError=function(){t.setState({loadingStatus:"errored"})},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.chartLanguage,a=e.chartPackages,n=e.chartVersion,o=e.mapsApiKey,l=e.loader,s=e.errorElement;return Object(r.createElement)(y,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(r.createElement)(L,c({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&s?s:l,Object(r.createElement)(h,c({},{chartLanguage:t,chartPackages:a,chartVersion:n,mapsApiKey:o},{onLoad:this.onLoad,onError:this.onError})))},t.prototype.componentDidMount=function(){this._isMounted=!0},t.prototype.componentWillUnmount=function(){this._isMounted=!1},t.prototype.isFullyLoaded=function(e){var t=this.props,a=t.controls,r=t.toolbarItems,n=t.getChartEditor;return e&&e.visualization&&e.visualization.ChartWrapper&&e.visualization.Dashboard&&(!a||e.visualization.ChartWrapper)&&(!n||e.visualization.ChartEditor)&&(!r||e.visualization.drawToolbar)},t.defaultProps=p,t}(r.Component),S=a("Bl7J"),O=a("vrFN");function D(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(){var e=Object(r.useState)({treated:{cumulative:0,today:0,percentageIncrease:0,min:0,max:0,historical:[]},dead:{cumulative:0,today:0,percentageIncrease:0,min:0,max:0,historical:[]},recovered:{cumulative:0,today:0,percentageIncrease:0,min:0,max:0,historical:[]}}),t=e[0],a=e[1];return Object(r.useEffect)((function(){fetch("https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?f=json&where=Tanggal%3Ctimestamp%20%272020-03-28%2017%3A00%3A00%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Tanggal%20asc&resultOffset=0&resultRecordCount=2000&cacheHint=true").then((function(e){return e.json()})).then((function(e){var t=e.features.filter((function(e){return null!==e.Jumlah_Kasus_Kumulatif})).map((function(e){return Object.assign({},e.attributes)})),r=t[t.length-1];a({treated:{cumulative:r.Jumlah_pasien_dalam_perawatan,today:r.Jumlah_Kasus_Dirawat_per_Hari,percentageIncrease:Math.round(100*(r.Jumlah_Kasus_Dirawat_per_Hari/(r.Jumlah_pasien_dalam_perawatan-r.Jumlah_Kasus_Dirawat_per_Hari)*100+Number.EPSILON))/100,min:Math.min.apply(Math,D(t.map((function(e){return e.Jumlah_pasien_dalam_perawatan})))),max:Math.max.apply(Math,D(t.map((function(e){return e.Jumlah_pasien_dalam_perawatan})))),historical:[["kasus","kasus",{type:"string",role:"style"}]].concat(t.map((function(e,t,a){return t===a.length-1?[t,e.Jumlah_pasien_dalam_perawatan,"point { size: 4; shape-type: circle; fill-color: #a52714; }"]:[t,e.Jumlah_pasien_dalam_perawatan,null]})))},dead:{cumulative:r.Jumlah_Pasien_Meninggal,today:r.Jumlah_Kasus_Meninggal_per_Hari,percentageIncrease:Math.round(100*(r.Jumlah_Kasus_Meninggal_per_Hari/(r.Jumlah_Pasien_Meninggal-r.Jumlah_Kasus_Meninggal_per_Hari)*100+Number.EPSILON))/100,min:Math.min.apply(Math,D(t.map((function(e){return e.Jumlah_Pasien_Meninggal})))),max:Math.max.apply(Math,D(t.map((function(e){return e.Jumlah_Pasien_Meninggal})))),historical:[["kasus","kasus",{type:"string",role:"style"}]].concat(t.map((function(e,t,a){return t===a.length-1?[t,e.Jumlah_Pasien_Meninggal,"point { size: 4; shape-type: circle; fill-color: #a52714; }"]:[t,e.Jumlah_Pasien_Meninggal,null]})))},recovered:{cumulative:r.Jumlah_Pasien_Sembuh,today:r.Jumlah_Kasus_Sembuh_per_Hari,percentageIncrease:Math.round(100*(r.Jumlah_Kasus_Sembuh_per_Hari/(r.Jumlah_Pasien_Sembuh-r.Jumlah_Kasus_Sembuh_per_Hari)*100+Number.EPSILON))/100,min:Math.min.apply(Math,D(t.map((function(e){return e.Jumlah_Pasien_Sembuh})))),max:Math.max.apply(Math,D(t.map((function(e){return e.Jumlah_Pasien_Sembuh})))),historical:[["kasus","kasus",{type:"string",role:"style"}]].concat(t.map((function(e,t,a){return t===a.length-1?[t,e.Jumlah_Pasien_Sembuh,"point { size: 4; shape-type: circle; fill-color: #a52714; }"]:[t,e.Jumlah_Pasien_Sembuh,null]})))}})}))}),[]),console.log(t),n.a.createElement(S.a,null,n.a.createElement(O.a,{keywords:["gatsby","tailwind","react","tailwindcss"],title:"Home"}),n.a.createElement("div",{className:"w-full text-center mt-4"},n.a.createElement("p",{className:"font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl"},"Monitoring COVID-19"),n.a.createElement("p",{className:"text-sm text-gray-700"},"last updated at 15 March 2020 at 18:00")),n.a.createElement("div",{className:"w-full mt-4"},n.a.createElement("div",{className:"flex flex-row justify-center items-center"},n.a.createElement("svg",{className:"w-6 h-6 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"})),n.a.createElement("p",{className:"text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold"},"30"),n.a.createElement("p",{className:"mt-3 ml-1 text-sm text-gray-700"},"days")),n.a.createElement("div",{className:"flex justify-center"},n.a.createElement("p",{className:"text-xs font-hairline text-gray-700"},"since first case occured"))),n.a.createElement("div",{className:"w-full h-auto mt-4 mx-auto"},n.a.createElement("div",{className:"flex flex-col sm:flex-row justify-center"},n.a.createElement("div",{className:"w-5/6 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 h-40 bg-white mx-auto sm:mx-1 md:mx-4 my-1 px-2 rounded-md shadow-lg"},n.a.createElement("div",{className:"w-full flex h-auto pt-2"},n.a.createElement("div",{className:"w-6/12 pl-2"},n.a.createElement("div",{className:"flex flex-col max-w-full"},n.a.createElement("p",{className:"text-gray-600 text-sm tracking-wider uppercase"},"Dirawat"),n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("p",{className:"text-3xl font-bold"},t.treated.cumulative),n.a.createElement("div",{className:"w-4 h-4 mt-3 pt-1 pl-1"},n.a.createElement("svg",{className:"w-4 h-4 fill-current text-gray-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"})))))),n.a.createElement("div",{className:"w-6/12"},n.a.createElement("div",{className:"flex justify-between items-baseline bg-red-100 border-2 border-red-400 px-1 py-1 rounded-lg"},n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("span",{className:"text-teal-600 text-xs font-extrabold mr-1"},"+ ",t.treated.today),n.a.createElement("svg",{className:"w-3 h-3 fill-current text-gray-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}))),n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("span",{className:"text-teal-600 text-xs font-extrabold mr-1"},t.treated.percentageIncrease," %"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-3 h-3 fill-current text-red-500"},n.a.createElement("path",{d:"M7 11H1L12 0l11 11h-6v13H7z"})))))),n.a.createElement("div",{className:"h-auto"},n.a.createElement(I,{className:"h-16",chartType:"LineChart",loader:n.a.createElement("div",null,"Sedang mempersiapkan grafik"),data:t.treated.historical,chartEvents:[{eventName:"ready",callback:function(e){e.chartWrapper.getChart().setSelection([{row:t.treated.historical.length-2,column:1}])}}],options:{legend:"none",curveType:"function",pointSize:.1,hAxis:{baselineColor:"white",gridlines:{color:"white"}},vAxis:{baselineColor:"white",gridlines:{color:"white"},viewWindow:{min:t.treated.min,max:t.treated.max}}},rootProps:{"data-testid":"1"}}))),n.a.createElement("div",{className:"w-5/6 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 h-40 bg-white mx-auto sm:mx-1 md:mx-4 my-1 px-2 rounded-md shadow-lg"},n.a.createElement("div",{className:"w-full flex h-auto pt-2"},n.a.createElement("div",{className:"w-6/12 pl-2"},n.a.createElement("div",{className:"flex flex-col max-w-full"},n.a.createElement("p",{className:"text-gray-600 text-sm tracking-wider uppercase"},"Sembuh"),n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("p",{className:"text-3xl font-bold"},t.recovered.cumulative),n.a.createElement("div",{className:"w-4 h-4 mt-3 pt-1 pl-1"},n.a.createElement("svg",{className:"w-4 h-4 fill-current text-gray-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"})))))),n.a.createElement("div",{className:"w-6/12"},n.a.createElement("div",{className:"flex justify-between items-baseline bg-green-100 border-2 border-green-400 px-1 py-1 rounded-lg"},n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("span",{className:"text-teal-600 text-xs font-extrabold mr-1"},"+ ",t.recovered.today),n.a.createElement("svg",{className:"w-3 h-3 fill-current text-gray-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}))),n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("span",{className:"text-teal-600 text-xs font-extrabold mr-1"},t.recovered.percentageIncrease," %"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-3 h-3 fill-current text-green-500"},n.a.createElement("path",{d:"M7 11H1L12 0l11 11h-6v13H7z"})))))),n.a.createElement("div",{className:"h-auto"},n.a.createElement(I,{className:"h-16",chartType:"LineChart",loader:n.a.createElement("div",null,"Sedang mempersiapkan grafik"),data:t.recovered.historical,chartEvents:[{eventName:"ready",callback:function(e){e.chartWrapper.getChart().setSelection([{row:t.recovered.historical.length-2,column:1}])}}],options:{legend:"none",curveType:"function",pointSize:.1,hAxis:{baselineColor:"white",gridlines:{color:"white"}},vAxis:{baselineColor:"white",gridlines:{color:"white"},viewWindow:{min:t.recovered.min,max:t.recovered.max}}},rootProps:{"data-testid":"1"}}))),n.a.createElement("div",{className:"w-5/6 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 h-40 bg-white mx-auto sm:mx-1 md:mx-4 my-1 px-2 rounded-md shadow-lg"},n.a.createElement("div",{className:"w-full flex h-auto pt-2"},n.a.createElement("div",{className:"w-6/12 pl-2"},n.a.createElement("div",{className:"flex flex-col max-w-full"},n.a.createElement("p",{className:"text-gray-600 text-sm tracking-wider uppercase"},"Meninggal"),n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("p",{className:"text-3xl font-bold"},t.dead.cumulative),n.a.createElement("div",{className:"w-4 h-4 mt-3 pt-1 pl-1"},n.a.createElement("svg",{className:"w-4 h-4 fill-current text-gray-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"})))))),n.a.createElement("div",{className:"w-6/12"},n.a.createElement("div",{className:"flex justify-between items-baseline bg-red-100 border-2 border-red-400 px-1 py-1 rounded-lg"},n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("span",{className:"text-teal-600 text-xs font-extrabold mr-1"},"+ ",t.dead.today),n.a.createElement("svg",{className:"w-3 h-3 fill-current text-gray-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}))),n.a.createElement("div",{className:"flex flex-row items-center"},n.a.createElement("span",{className:"text-teal-600 text-xs font-extrabold mr-1"},t.dead.percentageIncrease," %"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-3 h-3 fill-current text-red-500"},n.a.createElement("path",{d:"M7 11H1L12 0l11 11h-6v13H7z"})))))),n.a.createElement("div",{className:"h-auto"},n.a.createElement(I,{className:"h-16",chartType:"LineChart",loader:n.a.createElement("div",null,"Sedang mempersiapkan grafik"),data:t.dead.historical,chartEvents:[{eventName:"ready",callback:function(e){e.chartWrapper.getChart().setSelection([{row:t.dead.historical.length-2,column:1}])}}],options:{legend:"none",curveType:"function",pointSize:.1,hAxis:{baselineColor:"white",gridlines:{color:"white"}},vAxis:{baselineColor:"white",gridlines:{color:"white"},viewWindow:{min:t.dead.min,max:t.dead.max}}},rootProps:{"data-testid":"1"}}))))),n.a.createElement("div",{className:"w-full flex p-4"},n.a.createElement("div",{className:"bg-white h-32 w-full rounded-md shadow-lg"})),n.a.createElement("div",{className:"w-full mt-4 mb-4"},n.a.createElement("div",{className:"flex flex-wrap sm:flex-no-wrap sm:flex-row justify-center"},n.a.createElement("div",{className:"bg-white w-full sm:w-3/4 lg:w-2/5 h-auto rounded-md shadow-lg my-2 mx-4 p-4"},n.a.createElement("p",{className:"font-bold text-xl text-center"},"What is Corona Virus?"),n.a.createElement("p",{className:"text-justify text-sm mt-2"},"Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.")),n.a.createElement("div",{className:"bg-white w-full sm:w-3/4 lg:w-2/5 h-auto rounded-md shadow-lg my-2 mx-4 p-4"},n.a.createElement("p",{className:"font-bold text-xl text-center"},"What is COVID-19?"),n.a.createElement("p",{className:"text-justify text-sm mt-2"},"COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.")))),n.a.createElement("div",{className:"w-full flex justify-center px-4 mb-4"},n.a.createElement("div",{className:"w-full sm:w-3/4 md:w-3/5 lg:w-3/6 xl:w-2/5 bg-blue-700 h-auto rounded-md shadow-lg text-white p-4"},n.a.createElement("div",{className:"w-full flex items-center mb-2"},n.a.createElement("svg",{className:"w-4 h-4 mr-2 fill-current text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z"})),n.a.createElement("p",{className:"text-xl font-bold"},"Are/Have you...")),n.a.createElement("div",{className:"text-sm"},n.a.createElement("ul",null,n.a.createElement("li",{className:"flex flex-row items-center"},n.a.createElement("div",{className:"p-1"},n.a.createElement("svg",{className:"w-6 h-6 fill-current text-white mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"}))),n.a.createElement("div",null,n.a.createElement("p",null,"travelled to infected countries recently?"))),n.a.createElement("li",{className:"flex flex-row items-center"},n.a.createElement("div",{className:"p-1"},n.a.createElement("svg",{className:"w-6 h-6 fill-current text-white mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"}))),n.a.createElement("div",null,n.a.createElement("p",null,"having fever? (38°C)"))),n.a.createElement("li",{className:"flex flex-row items-center"},n.a.createElement("div",{className:"p-1"},n.a.createElement("svg",{className:"w-6 h-6 fill-current text-white mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"}))),n.a.createElement("div",null,n.a.createElement("p",null,"having dry cough?"))))),n.a.createElement("div",{className:"h-auto w-full mt-6 text-justify"},n.a.createElement("p",{className:"font-bold text-sm"},"If you experienced one of those symptomps or all, contact :"),n.a.createElement("div",{className:"w-full h-auto mt-4 p-2"},n.a.createElement("div",{className:"flex flex-col sm:flex-row"},n.a.createElement("div",{className:"w-full sm:w-1/2 flex justify-center p-2"},n.a.createElement("a",{href:"tel:112",className:"w-full"},n.a.createElement("button",{className:"w-full flex flex-row justify-center items-center rounded-md border bg-white p-2 text-blue-500"},n.a.createElement("svg",{className:"w-4 h-4 mr-1 fill-current text-blue-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"})),n.a.createElement("p",{className:"font-bold tracking-wide"},"112")))),n.a.createElement("div",{className:"w-full sm:w-1/2 flex justify-center p-2"},n.a.createElement("a",{href:"tel:081388376955",className:"w-full"},n.a.createElement("button",{className:"w-full flex flex-row justify-center items-center rounded-md border bg-white p-2 text-blue-500"},n.a.createElement("svg",{className:"w-4 h-4 mr-1 fill-current text-blue-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("path",{d:"M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"})),n.a.createElement("p",{className:"font-bold tracking-wide"},"0813-8837-6955"))))))))))}},XDgv:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("JHok"),a("LagC"),a("pS08"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r,n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a("q1tI"),l=(r=o)&&r.__esModule?r:{default:r},s=a("17x9");var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.scriptLoaderId="id"+a.constructor.idCount++,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onError,a=e.onLoad,r=e.url;this.constructor.loadedScripts[r]?a():this.constructor.erroredScripts[r]?t():this.constructor.scriptObservers[r]?this.constructor.scriptObservers[r][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[r]=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,a=t.onCreate,r=t.url,n=t.attributes,o=document.createElement("script");a(),n&&Object.keys(n).forEach((function(e){return o.setAttribute(e,n[e])})),o.src=r,o.hasAttribute("async")||(o.async=1);var l=function(t){var a=e.constructor.scriptObservers[r];Object.keys(a).forEach((function(n){t(a[n])&&delete e.constructor.scriptObservers[r][e.scriptLoaderId]}))};o.onload=function(){e.constructor.loadedScripts[r]=!0,l((function(e){return e.onLoad(),!0}))},o.onerror=function(){e.constructor.erroredScripts[r]=!0,l((function(e){return e.onError(),!0}))},document.body.appendChild(o)}},{key:"render",value:function(){return null}}]),t}(l.default.Component);i.propTypes={attributes:s.PropTypes.object,onCreate:s.PropTypes.func,onError:s.PropTypes.func.isRequired,onLoad:s.PropTypes.func.isRequired,url:s.PropTypes.string.isRequired},i.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},i.scriptObservers={},i.loadedScripts={},i.erroredScripts={},i.idCount=0,t.default=i,e.exports=t.default},YBKJ:function(e,t,a){"use strict";var r=a("emib"),n=a("qDzq"),o=a("CCE/"),l=a("TUPI"),s=a("kxs/"),i=a("96qb"),c=a("chL8").f,u=a("Drra").f,m=a("rjfK").f,p=a("EU/P").trim,h=r.Number,d=h,g=h.prototype,f="Number"==o(a("nsRs")(g)),v="trim"in String.prototype,w=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,r,n,o=(t=v?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var l,i=t.slice(2),c=0,u=i.length;c<u;c++)if((l=i.charCodeAt(c))<48||l>n)return NaN;return parseInt(i,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(f?i((function(){g.valueOf.call(a)})):"Number"!=o(a))?l(new d(w(t)),a,h):w(t)};for(var x,b=a("QPJK")?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;b.length>y;y++)n(d,x=b[y])&&!n(h,x)&&m(h,x,u(d,x));h.prototype=g,g.constructor=h,a("IYdN")(r,"Number",h)}}}]);
//# sourceMappingURL=component---src-pages-index-js-4d9088af80ac4d8dcc51.js.map