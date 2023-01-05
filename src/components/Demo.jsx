import React, { useState } from 'react'
import Map from './Map'
import '../styles/Demo.css'

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
    },
    {
      "oid": 11934,
      "cName": "香林薇拉民宿",
      "type": 7,
      "pictureUrl": "https://taiwan.taiwanstay.net.tw/twpic/70671.jpg",
      "positionLon": 120.5513687134,
      "positionLat": 23.5249538422
    },
    {
      "oid": 12065,
      "cName": "波希瓦舍民宿",
      "type": 7,
      "pictureUrl": "https://taiwan.taiwanstay.net.tw/twpic/26561.jpg",
      "positionLon": 120.551399231,
      "positionLat": 23.5251846313
    }
  ];

export default function Demo() {
  const [selectData, setSelectData] = useState({})
  const [apiKey, setKey] = useState("")
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
    <div>
      {
        apiKey === "" &&
        <div style={{ padding: "20px" }}>
          <input id="key" placeholder="請先輸入 api-key" />
          <button onClick={() => setKey(document.getElementById('key').value)}>OK</button>
        </div>
      }
      {
        apiKey !== "" &&
        <Map apiKey={apiKey} center={{lat: 23.504, lng: 120.531 }} defaultZoom={16} mainLat={23.504} mainLng={120.531} 
          nearbyData={nearby} lat={(d) => d.positionLat} lng={(d) => d.positionLon} setCurrent={(data) => setSelectData(data)}
          nearbyIcons={"https://www.iconpacks.net/icons/2/free-location-pin-icon-2965-thumb.png"} iconSize={{ width: 40, height: 40 }}
          popup={<Item />} options={mapOptions}
        />
      }
    </div>
  )
}
