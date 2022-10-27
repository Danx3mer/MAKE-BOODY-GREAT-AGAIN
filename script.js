const blueColors = ['blue', 'aquamarine', 'darkblue'], redColors = ['darkorange', 'tomato', 'red'], fire_spread = 16

function addBlueParticle() {
    var fs = document.createElement('div'),
    skew = Math.random() < .5 ? Math.random() * fire_spread : -Math.random() * fire_spread
    fs.className = 'fire_shaft'
    fs.style.height = Math.random() * 75 + '%'
    fs.style.transform = 'skew(' + skew + 'deg)'
    fs.style.right = 50 + Math.random()*46 + '%'
    var p = document.createElement('div')
    p.className = 'particle'
    p.style.background = blueColors[Math.floor(Math.random()*blueColors.length)]
    p.onanimationend = function() {
        this.removeEventListener(null,null)
        fs.remove()
    }
    document.getElementById('welcomeDiv').appendChild(fs).appendChild(p)
}

function addRedParticle() {
    var fs = document.createElement('div'),
    skew = Math.random() < .5 ? Math.random() * fire_spread : -Math.random() * fire_spread
    fs.className = 'fire_shaft'
    fs.style.height = Math.random() *75 + '%'
    fs.style.transform = 'skew(' + skew + 'deg)'
    fs.style.right = Math.random()*46 + '%'
    var p = document.createElement('div')
    p.className = 'particle'
    p.style.background = redColors[Math.floor(Math.random()*redColors.length)]
    p.onanimationend = function() {
        this.removeEventListener(null,null)
        fs.remove()
    }
    document.getElementById('welcomeDiv').appendChild(fs).appendChild(p)
}

setInterval(addBlueParticle , 3500/60)
setInterval(addRedParticle , 3500/60)