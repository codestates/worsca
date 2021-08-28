import React, { useEffect } from "react";
const { kakao } = window;

export default function Can() {
	useEffect(() => {
		mapscript();
	}, []);

	const mapscript = () => {
		let container = document.getElementById("map");
		let options = {
			center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
			level: 5,
		};
		//map
		const map = new kakao.maps.Map(container, options);

		//마커가 표시 될 위치
		let markerPosition = new kakao.maps.LatLng(
			37.62197524055062,
			127.16017523675508
		);

		// 마커를 생성
		let marker = new kakao.maps.Marker({
			position: markerPosition,
		});

		// 마커를 지도 위에 표시
		marker.setMap(map);
	};

	return (
		<div
			id="map"
			style={{
				position: "fixed",
				minWidth: "100vw",
				minHeight: "100vh",
				top: "0",
				left: "0",
				width: "auto",
				height: "auto",
				// zIndex: "-1",
			}}
		></div>
	);
}
