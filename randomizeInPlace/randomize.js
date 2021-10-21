
var bluearray =[ "#00f", "#11f", "#22f", "#33f", "#44f", "#55f", "#66f", "#77f",
"#88f", "#99f", "#aaf", "#bbf", "#ccf", "#ddf", "#eef", "#fff" ] ;

var cb_color  = "#ffc" ; //code background
var cbh_color = "#faa" ; //code background highlight

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var temp;
var pos;
let k = 0;

    function randomize(k){
        temp = a[k];
        pos = parseInt(random(k, 16))
        swapIndexes(k, pos);
        }

    function random(min, max){
        return Math.random() * (max - min) + min;
    }

    function swapIndexes(x,y){
        a[x] = a[y];
        a[y] = temp;
    }

function swap() { 
    initElement() 
    nextPress = true;

}

function setElementValue(elementId, value) {
    if ( document.getElementById(elementId).innerText!=undefined ) {
        document.getElementById(elementId).innerText = value ;
    } else {
        document.getElementById(elementId).textContent = value ;
        }
    }

function initElement() {
    var i ;
    k++;
    for (i = 1; i < 17; i++) {
        document.getElementById('n' + i).style.background = bluearray[16-i] ;
        document.getElementById('n' + i).style.color = "black" ;
        setElementValue('array' + i, a[i-1]) ;
    }

    algStep_g = 1 ;
    nextPress = false;

    document.getElementById("codeloc1").style.background = cb_color ;
    document.getElementById("codeloc2").style.background = cb_color ;
    document.getElementById("codeloc3").style.background = cb_color ;

    setCodeColors(0) ;
}

function currentCell(cell){
    document.getElementById('n'+cell).style.background = "#faa" ;
}
// DO NOT GIVE ACCESS FROM 3. TO NEXT (MODIFY)
function algStep() {
    switch(algStep_g) {
        case 1:
            setCodeColors(1) ;
            algStep_g = 2;
            break;
        case 2: //(highlight cell that contains current i)
            setCodeColors(2) ;
            currentCell(k);
            randomize(k-1)
            algStep_g = 3
            break;
        case 3: //(highlight two cells that are going to interchange)
            setCodeColors(3) ;
            swapCell(pos+1);
            algStep_g = 4;
            break;
        case 4: // (actual swap)
            if (!nextPress){
                break;
            }
            nextPress = false;
            setCodeColors(3)
            setElementValue('array'+(k-1), a[pos])
            setElementValue('array'+(pos+1), a[k])
            k++;
            algStep_g = 2; //when done and next i
            break;
            
    }
    //return;

}

function swapCell(s){
    //document.getElementById('n'+f).style.background = "#ffff08" ;
    document.getElementById('n'+s).style.background = "#ffff08" ;

}

function setCodeColors(j) {
    document.getElementById("codeloc1").style.background = cb_color ;
    document.getElementById("codeloc2").style.background = cb_color ;
    document.getElementById("codeloc3").style.background = cb_color ;
    document.getElementById("codeloc"+ j).style.background = cbh_color ;
    }







