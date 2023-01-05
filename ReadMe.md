# google-map-nearby

可以展示簡單的 Google Map，包含標點以及附近地標，點擊 Marker 展示地標資訊。

(基於 [@react-google-maps/api](https://github.com/JustFly1984/react-google-maps-api) 所建置)

## [Oneline Demo](https://no-ttt.github.io/google-map-nearby/)

## Install
### 必要套件
- React v16.6 or later
- @react-google-maps/api

```
npm  install --save @react-google-maps/api
 # 或
yarn  add @react-google-maps/api
```

### Install google-map-nearby 
```
npm i google-map-nearby --save
```

## PROPS & METHODS
> 至少需要給予 `apiKey` 以及 `center` 才能執行。

|Prop Name | Type | Default | Description |
| -------- | -------- | -------- | -------- |
| apiKey     | string     |     | api key     |
| width     | string     | 100%     | 地圖的寬度     |
| height     | string     | 100vh     | 地圖的高度     |
| center     | object     |      | 地圖中心點 (需要明確給予 lat 和 lng 的值, ex. {lat: [lat], lng: [lng]})     |
| mainLat     | number     |     | 主要的 Marker 緯度     |
| mainLng     | number     |     |  主要的 Marker 經度    |
| defaultZoom     | number     | 16     |  zoom 初始值    |
| nearbyIcons     | string     |      |  附近地標的 icon    |
| iconSize     | object     |  { width: 40, height: 40 }   |   附近地標 icon 的大小   |
| nearbyData     | object     |     |   附近地標的相關資料   |
| lat     | func     |      |  取得附近地標的緯度    |
| lng     | func     |      |   取得附近地標的經度   |
| setCurrent     | func     |      |   設置目前所點擊的地標資料   |
| popup     | node     |      |   彈跳窗內容   |
| options     | object     |      |   地圖樣式設定   |


## Usage
```jsx
  import React, { useState } from 'react'
  import Map from 'google-map-nearby'

  const GOOGLE_MAPS_API_KEY = 'API_KEY'
  const nearby = 
    [
      {
        "oid": 707,
        "cName": "鹿麻產車站",
        "pictureUrl": null,
        "positionLon": 120.5313720703,
        "positionLat": 23.5041694641
      },
      {
        "oid": 708,
        "cName": "鹿滿菸樓",
        "pictureUrl": null,
        "positionLon": 120.5315704346,
        "positionLat": 23.5040397644
      },
      {
        "oid": 714,
        "cName": "竹崎鹿滿客家文化園區",
        "pictureUrl": null,
        "positionLon": 120.5358428955,
        "positionLat": 23.5018291473
      },
      {
        "oid": 6265,
        "cName": "英和碗粿店",
        "pictureUrl": null,
        "positionLon": 120.5330963135,
        "positionLat": 23.4981594086
      },
      {
        "oid": 12048,
        "cName": "山合院休閒民宿",
        "pictureUrl": "https://taiwan.taiwanstay.net.tw/twpic/1063.jpg",
        "positionLon": 120.5333557129,
        "positionLat": 23.498714447
      }
    ];

  export default function Demo() {
    const [selectData, setSelectData] = useState({})
    const mapOptions = {
      styles: [
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ],
      mapTypeControl: false,
    }
    
    let Item = () => {
      return (
        <div>{selectData.cName}</div>
      )
    }
    
    return (
      <Map apiKey={GOOGLE_MAPS_API_KEY} center={{lat: 23.504, lng: 120.531 }} defaultZoom={16} mainLat={23.504} mainLng={120.531} 
        nearbyData={nearby} lat={(d) => d.positionLat} lng={(d) => d.positionLon} setCurrent={(data) => setSelectData(data)}
        nearbyIcons={"https://www.iconpacks.net/icons/2/free-location-pin-icon-2965-thumb.png"} iconSize={{ width: 40, height: 40 }}
        popup={<Item />} options={mapOptions}
      />
    )
  }
```

## 版本更新
### 修改內容
- 彈跳窗內容原本用 `children` 進行傳遞，更改成 `popup` 參數傳遞
- `popup` 加上 Close Button

### 增加功能
- 可以自行傳入 MapOptions 對地圖進行調整
