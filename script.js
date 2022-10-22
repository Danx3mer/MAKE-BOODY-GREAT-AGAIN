const blueColors = ['blue', 'aquamarine', 'darkblue'], redColors = ['darkorange', 'tomato', 'red'], fire_spread = 45

function addBlueParticle() {
    var fs = document.createElement('div'),
    skew = Math.random() < .5 ? Math.random() * fire_spread : -Math.random() * fire_spread
    fs.className = 'fire_shaft'
    fs.style.height = Math.random() * 50 + 25 + 'vh'
    fs.style.transform = 'skew(' + skew + 'deg)'
    fs.style.right = 30 + Math.random() * 40 + '%'
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
    fs.style.height = Math.random() * 50 + 25 + 'vh'
    fs.style.transform = 'skew(' + skew + 'deg)'
    fs.style.left = Math.random() * 40 - 20 + '%'
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
