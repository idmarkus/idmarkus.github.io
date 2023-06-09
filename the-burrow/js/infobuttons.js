function openInfo() {
    let el = document.getElementById("infobar");
    let underlay = document.getElementById("overlay-underlay-click");
    let now_w = getComputedStyle(el).getPropertyValue('--infobar-width');
    // alert(now_w);
    if (now_w == 0) {
        el.style.setProperty('--infobar-width', '600pt');
        el.style.setProperty('--infobar-left', 'calc(100% - var(--infobar-width))');
        underlay.style.display = "block";
        // underlay.style.color = "#000f";
        // underlay.style.background = "#fffc";
    } else {
        el.style.setProperty('--infobar-width', '0');
        el.style.setProperty('--infobar-left', '100%');
        // underlay.style.color = "#0000";
        // underlay.style.background = "#fff0";
        underlay.style.display = "none";
    }
    // document.getElementById("infobar").style.setProperty('--infobar-width', '600pt');
}
