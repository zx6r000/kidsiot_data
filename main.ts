input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    ESP8266_IoT.uploadKidsiot(counter)
    counter += 1
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.off, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.on, function () {
    music.play(music.stringPlayable("- C D D D E F F ", 120), music.PlaybackMode.UntilDone)
})
let counter = 0
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
counter = 0
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showIcon(IconNames.Heart)
    } else {
        ESP8266_IoT.connectWifi("imotep", "Deltaforce322851!")
    }
    if (ESP8266_IoT.kidsiotState(true)) {
        basic.showIcon(IconNames.Yes)
    } else {
        ESP8266_IoT.connectKidsiot("8045Rcjtu8gDvnPf", "1")
    }
})
