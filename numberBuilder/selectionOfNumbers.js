a = new Array ('f1','f2', 'f3','f4','f5','f6','f7','f8','f9','f10')
data = new Array(1, 25, 50, 75, 100, 200, 300, 400, 500, 1000)

function sum(){
    total = 0
    for (i = 0; i < data.length; i++){
        if(document.NumberBuilder[a[i]].checked){
            total = total + data[i];
        }
    }
    document.NumberBuilder.result.value=total
    
    if (total == 1925){
        document.write('<h1 style="font-family: verdana;">The University of Miami was founded in 1925!</h1>')
        document.write('<img src="https://s3.amazonaws.com/photos.niche.com/47c063da8c8218d78d9cea45ed23a49ba7cc977d" alt="University of Miami" height=300px>') 
    }
}
