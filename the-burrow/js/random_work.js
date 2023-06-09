// To get seeded rand, by bryc
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}
function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    };
}

var today = new Date();
var dstr = "" + today.getDate() + today.getMonth + today.getYear();
var seed = xmur3(dstr);
var rand = sfc32(seed(), seed(), seed(), seed());

// Durstenfeld shuffle, by Laurens Holst (modified to use above seeded rand)
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(rand() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let pairs = [
    ["alan-sondheim", "Alan Sondheim"],
    ["almond-yeggs", "Almond Yeggs"],
    ["amelia-marzec-abe-morrison", "Amelia Marzec & Abe Morrison"],
    ["angelika-vardalou", "Angelika Vardalou"],
    ["antje-feger-benjamin-stumpf", "Antje Feger & Benjamin Stumpf"],
    ["ausin-sainz", "Ausín Sáinz"],
    ["benna-gaean-maris", "Benna Gaean Maris"],
    ["brad-brace", "Brad Brace"],
    ["disnovation-org", "disnovation.org"],
    ["fabian-heller", "Fabian Heller"],
    ["garrett-lynch-irl", "Garrett Lynch IRL"],
    ["isabelle-arvers", "Isabelle Arvers"],
    ["johannes-birringer", "Johannes Birringer"],
    ["joseph-moore", "Joseph Moore"],
    ["juergen-trautwein", "Juergen Trautwein"],
    ["luis-mercado", "Luis Mercado"],
    ["metazoa-org", "metazoa.org"],
    ["pall-thayer", "Pall Thayer"],
    ["ronnie-s", "ronnie s"],
    ["sophie-fields", "Sophie Fields"],
    ["stefanie-reling-burns", "Stefanie Reling-Burns"],
    ["ursula-endlicher", "Ursula Endlicher"],
    ["y-divya-sri", "Y Divya Sri"],
    ["yu-cai", "Yu Cai"],
    ["zsolt-mesterhazy", "Zsolt Mesterhazy"]
];
//["()", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],

// let listings = [
//     '<li><a target="_blank" href="/alan-sondheim"><b>Alan Sondheim</b></a></li>',


shuffleArray(pairs);

function getRandomListing() {
    let list = [];
    for (let i = 0; i < pairs.length; i++) {
        let s = '<li><a target="_blank" href="' + pairs[i][0] + '"><b>' + pairs[i][1] + '</b></a></li>';
        list.push(s);
    }
    return list.join('');
}

function getRandomWork() {
    if (typeof(Storage) !== "undefined") {
        // shuffleArray(works);
        let i = (sessionStorage.last_i) ? Number(sessionStorage.last_i) + 1 : 0;
        i %= pairs.length;
        sessionStorage.last_i = i;
        return pairs[i][0];
    } else {
        let rand_i = Math.floor(Math.random() * pairs.length);
        return pairs[rand_i][0];
    }
}

function getWorkString() {
    let result = "n";
    if (typeof(Storage) !== "undefined") {
        let i = (sessionStorage.last_i) ? Number(sessionStorage.last_i) : 0;
        for (let j = 0; j < i; j++) {
            result += "<br>+1";
        }
    }
    let lenstr = pairs.length;
    // if (lenstr < 10) lenstr = '0' + lenstr;
    return result + "<br> <b>--</b><strong><br> " + lenstr + "</strong>";
}
