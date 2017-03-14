 
window.onload = function () {
        (function () { //nested function ehk isoleeritud kõigest, seda teevad need sulud
            var date = new Date(); //paneme aja õigel kujul kokku
            var time = date.getHours() + ':' + 
            date.getMinutes() + ':' +
                date.getSeconds();
            document.getElementsByTagName ('div')[0].innerHTML = "Aeg koolis: "+time;
            window.setTimeout(arguments.callee, 1000); //
        })(); //innerhtml tähendab seda, et ta otsib tagi paaridest. inner on esimene ja outer on see mis läheb / kinni. 
        
    };