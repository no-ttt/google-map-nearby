import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/Map.styl'
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api'

export class Map extends Component {
	static propTypes = {
		/** api key */
		apiKey: PropTypes.string.isRequired,
		/** 地圖的寬度 */
		width: PropTypes.string,
		/** 地圖的高度 */
		height: PropTypes.string,
		/** 地圖中心點 (需要明確給予 lat 和 lng 的值, ex. {lat: [lat], lng: [lng]}) */
		center: PropTypes.object.isRequired,
		/** 主要的 Marker 緯度 */
		mainLat: PropTypes.number,
		/** 主要的 Marker 經度 */
		mainLng: PropTypes.number,
		/** zoom 初始值 */
		defaultZoom: PropTypes.number,
		/** 附近地標的 icon */
		nearbyIcons: PropTypes.string,
		/** 附近地標 icon 的大小 */
		iconSize: PropTypes.object,
		/** 附近地標的相關資料 */
		nearbyData: PropTypes.array,
		/** 取得附近地標的緯度 */
		lat: PropTypes.func,
		/** 取得附近地標的經度 */
		lng: PropTypes.func,
		/** 設置目前所點擊的地標資料 */
		setCurrent: PropTypes.func,
		/** 彈跳窗內容 */
		popup: PropTypes.node,
		/** 地圖樣式設定 */
		options: PropTypes.object,
		/** Label text */
		labelText: PropTypes.func,
		/** Marker label style */
		labelStyle: PropTypes.string,
		/** 到達多少 zoom 值顯示 label */
		labelZoom: PropTypes.number,
	}

	static defaultProps = {
		defaultZoom: 16,
		width: "100%",
		height: "100vh",
		iconSize: { width: 40, height: 40 },
		labelZoom: 18,
	}

	constructor(props) {
		super(props);
		this.state = {
			currentClick: {},
			click: false,
			center: this.props.center,
			map: null,
			currentZoom: this.props.defaultZoom,
		}
	}

	handleOnLoad = (map) => {
		this.setState({ map: map })
	}

	handleZoomChanged = () => {
		const { map } = this.state

		if (map) {
			const zl = map.getZoom()
			console.log(zl)
			this.setState({
				currentZoom: zl
			})
		}
	}

	render() {
		const { apiKey, width, height, mainLat, mainLng, defaultZoom, nearbyData, nearbyIcons, iconSize, lat, lng, setCurrent, popup, options, labelText, labelStyle, labelZoom } = this.props
		const { click, currentClick, center, currentZoom } = this.state

		const icon = {
			url: nearbyIcons,
			scaledSize: iconSize
		}

		const containerStyle = {
			width: width,
			height: height
		}

		return (
			<div>
				<LoadScript
					googleMapsApiKey={apiKey}
				>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={defaultZoom}
						options={options}
						onLoad={this.handleOnLoad}
						onZoomChanged={this.handleZoomChanged}
					>

						{
							mainLat && mainLng &&
							<Marker
								position={{ lat: mainLat, lng: mainLng }}
							/>
						}

						{
							nearbyData !== undefined &&
							nearbyData.map((nearby, i) => (
								<Marker
									key={i}
									position={{ lat: lat(nearby), lng: lng(nearby) }}
									onClick={() => { this.setState({ currentClick: nearby, click: true, center: { lat: lat(nearby), lng: lng(nearby) } }); setCurrent(nearby) }}
									icon={icon}
									label={
										labelText !== undefined && currentZoom >= labelZoom ? 
										{
											text: labelText(nearby), 
											className: labelStyle
										} 
										: { text: " " }
									}
								/>
							))
						}

						{
							click && popup &&
							<InfoWindow
								position={{ lat: lat(currentClick), lng: lng(currentClick) }}
								onCloseClick={() => this.setState({ click: false })}
								options={{ pixelOffset: { height: -40 } }}
								zIndex={1}
							>
								{popup}
							</InfoWindow>
						}

					</GoogleMap>
				</LoadScript>
			</div>
		)
	}
}

export default CSSModules(Map, styles)