SendLoadingScreenMessage(json.encode({
    eventName = "gameReady"
}))

Citizen.SetTimeout(3 * 1000, function()
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)
