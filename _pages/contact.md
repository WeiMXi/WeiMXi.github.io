---
permalink: /contact/
title: "联系我们"
author_profile: true
layout: single
---

<div class="container mt-2">
    <div class="row">
        <div class="col-md-8">
            <h3>科研联络</h3>
            <p class="lead">
                <a href="http://spe.sysu.edu.cn/node/605" class="text-decoration-none">唐健</a>
            </p>
        </div>
        <div class="col-md-4">
            <h3>网站维护人</h3>
            <p class="lead">
                <a href="mailto:zhaoww7@mail3.sysu.edu.cn" class="text-decoration-none">iyu</a>
            </p>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-12">
            <h3>通讯地址</h3>
            <p class="lead">
                广东省广州市海珠区新港西路135号中山大学，邮编：510275。
            </p>
            <p class="lead">
                No.135, Xingang Xi Road, Guangzhou, 510275, P.R.China.
            </p>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-8">
            <h3>地图导航</h3>
            <div id="map" style="width: 100%; height: 300px;"></div>
        </div>
        <div class="col-md-4">
            <h3>天气预报</h3>
            <p class="lead">
                <a href="http://forecast.weather.com.cn/town/weathern/101280101036.shtml" class="text-decoration-none">中文天气预报</a>
            </p>
            <p class="lead">
                <a href="https://www.google.com/search?hl=en-US&sxsrf=ALeKk03MDgkqnjjotQFV0ZHVyDNb_nQPKA:1591701806118&ei=LnHfXoXXBovWmAXGpoWYBA&q=guangzhou+weather" class="text-decoration-none">English Weather</a>
            </p>
        </div>
    </div>
</div>

<!-- 高德地图API -->
<script src="https://webapi.amap.com/maps?v=1.4.15&key=70b974d00902c7b8a261a149cecc01d0"></script>
<script>
   !function(){
     var infoWindow, map, level = 16,
       center = {lng: 113.3, lat: 23.1},
       features = [];
     function loadFeatures(){
       for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++){
         data = features[i];
         switch(data.type){
           case "Marker":
             feature = new AMap.Marker({ map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
               zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
               content: '<div class="icon icon-' + data.icon + ' icon-'+ data.icon +'-' + data.color +'"></div>' });
             break;
           case "Polyline":
            for(j = 0, jl = data.path.length, path = []; j < jl; j++){
							path.push(new AMap.LngLat(data.path[j].lng, data.path[j].lat));
						}
             feature = new AMap.Polyline({ map: map, path: path, extData: data, zIndex: 2,
               strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity });
             break;
           case "Polygon":
             for(j = 0, jl = data.path.length, path = []; j < jl; j++){
               path.push(new AMap.LngLat(data.path[j].lng, data.path[j].lat));
             }
             feature = new AMap.Polygon({ map: map, path: path, extData: data, zIndex: 1,
               strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
               fillColor: data.fillColor, fillOpacity: data.fillOpacity });
             break;
           default: feature = null;
         }
         if(feature){ AMap.event.addListener(feature, "click", mapFeatureClick); }
       }
     }
     function mapFeatureClick(e){
       if(!infoWindow){ infoWindow = new AMap.InfoWindow({autoMove: true,isCustom: false}); }
       var extData = e.target.getExtData();
       infoWindow.setContent("<div class='myinfowindow'><h5>" + extData.name + "</h5><div>" + extData.desc + "</div></div>");
       infoWindow.open(map, e.lnglat);
     }
     map = new AMap.Map("map", {center: new AMap.LngLat(center.lng, center.lat), level: level, keyboardEnable:true, dragEnable:true, scrollWheel:true, doubleClickZoom:true});
     loadFeatures();
     map.on('complete', function(){
       map.plugin(["AMap.ToolBar", "AMap.OverView", "AMap.Scale"], function(){
         map.addControl(new AMap.ToolBar({ruler: true, direction: true, locate: false})); map.addControl(new AMap.OverView({isOpen: true})); map.addControl(new AMap.Scale);
       });	
     })
 	}();
   </script>