var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;              
        if (panel.style.maxHeight) {
            this.classList.toggle("active");
            panel.style.maxHeight = null;
            var otheracc = document.getElementsByClassName("accordion");
            for (let j = 0; j < otheracc.length; j++) {
                let other = otheracc[j];
                other.style.lineHeight = "1";
                other.style.padding = "18px";
                other.style.fontSize = "16pt";
            }
        } else {
            var otheracc = document.getElementsByClassName("accordion");
            var totalButtonHeight = 0;
            for (let j = 0; j < otheracc.length; j++) {
                let other = otheracc[j];
                // if (other == this) continue;
                other.classList.remove("active");
                other.style.lineHeight = "60%";
                other.style.padding = "16px";
                // other.style.fontSize = "100%";
                totalButtonHeight += other.offsetHeight;
            }
            // var header = document.getElementById("work-header");
            // totalButtonHeight += header.offsetHeight;
            this.classList.add("active")
            // this.style.lineHeight = "1.5";
            // this.style.padding = "18px";
            // this.style.fontSize = "16pt";
            // totalButtonHeight += this.offsetHeight;
            var panels = document.getElementsByClassName("panel");
            for (let j = 0; j < panels.length; j++) {
                panels[j].style.maxHeight = null;
            }

            var h = window.innerHeight - totalButtonHeight;
            panel.style.maxHeight = h;//"88vh";
            panel.style.height = "100%";
        }
        // if (panel.style.display === "block") {
        //     panel.style.display = "none";
        // } else {
        //     panel.style.display = "block";
        // }
    });
}
