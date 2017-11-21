//Se crea la lista
var max_elem=5; 
var x=create(max_elem);
console.log("Lista:");
    for (var i=0; i<5; i++){
 		console.log(x[i]);
 	}
console.log("Y ordenada:");
ordenar(x);
    for (var i=0; i<5; i++){
 		console.log(x[i]);
 	}

//Se comprueba si está vacía
console.log("¿Está vacía?");
isEmpty(x);

//Se comprueba si está llena
console.log("¿Está llena?");
isFull(x);

//Se comprueba su número de elementos
console.log("Su número de elementos es:");
size(x);

//Se añade un elemento
console.log("Después de añadir un elemento, su número de elementos es:");
add(x,5);
size(x);


//Hallar el valor de un elemento psando un índice
console.log("El valor de la posición 4 es:");
var valor=get(x,4);
 		console.log(valor);

//Devolve la lista en forma de cadena. Sus elementos estarán delimitados por "-"
console.log("La cadena quedaría tal que así:");
str=toString(x);
    console.log(str);

//Devolve la posición de un elemento indicado, si no está, devuelve un -1
console.log("Posición de un elemento en la lista (Ejemplo, el 3):");
valor=indexOf(x,3);
    console.log(valor);

//Devolve la posición de un elemento indicado, empezando por el final, si no está, devuelve un -1
console.log("Posición de un elemento en la lista (Ejemplo, el 4):");
valor=lastIndexOf(x,4);
    console.log(valor);

//Capacidad de la lista
console.log("Capacidad de la lista:");
valor=capacity(x);
    console.log(valor);

//Limpiar la lista
console.log("Lista vacía:");
valor=clear(x);
    console.log(valor);

//Rellenamos la lista de nuevo
console.log("(Rellenamos la lista):");
    x=create(max_elem);
    console.log("Nueva lista:");
    for (var i=0; i<max_elem; i++){
 		console.log(x[i]);
 	}
    console.log("Y ordenada:");
    ordenar(x);
    for (var i=0; i<5; i++){
 		console.log(x[i]);
 	}

//Primer elemento
console.log("Primer elemento:");
valor=firstElement(x);
console.log(valor);

//Último elemento
console.log("Último elemento:");
valor=lastElement(x);
console.log(valor);

//Mostrar valor borrado
console.log("Valor borrado: (Con índice 2, por ejemplo)");
valor=remove(x,2);
console.log(valor);

//Mostrar valor borrado
console.log("Valor borrado: (El 6, por ejemplo)(Si lo ha borrado devolverá true, sino: false)");
valor=removeElement(x,6);
console.log(valor);


//Lista final
    console.log("La lista, quedaría finalmente así:");
    for (var i=0; i<max_elem; i++){
 		console.log(x[i]);
 	}
    console.log("Y ordenada:");
    ordenar(x);
    for (var i=0; i<5; i++){
 		console.log(x[i]);
 	}












 //Crear lista
    function create(max_elem){
        var lista = [];
        for (var i=0; i<max_elem; i++){
 		lista[i] = Math.round(Math.random() * (10 - 1) + 1);
        }
        return lista;
        } 

    //isEmpty
    function isEmpty(x){
        var vacia=false;
        for(var i=0;i<x.length;i++){
            if (x[i]==undefined){
                vacia=true;
            }
        }
        console.log(vacia);
    }

    //isFull
    function isFull(x){
        var vacia=true;
        for(var i=0;i<x.length;i++){
            if (x[i]==undefined){
                vacia=false;
            }
        }
        console.log(vacia);
    }

    //size
    function size(x){
        var lon=0;
        for(var i=0;i<x.length;i++){
            lon++;
        }
        console.log(lon);
    }

     //add
    function add(x,e){
        x[x.length]=e;  
        max_elem++;
    } 

    //get
    function get(x,i){
        var valor=x[i];
        return valor;
    }
    
    //toString
    function toString(x){
 	var str="";
 		for (var i=0; i<x.length;i++){
 			str=str+x[i]+"-";
 		} 		 				
 	return str;
    } 

    //indexOf
    function indexOf(x,e){
        var bool="0";
        var cont="-1";
        for(var i=0;i<x.length;i++){
            if(x[i]==e){
                bool=i;
            }
        }
        if(bool!=0){
            return bool;
        }else{
            return cont;
        }
    }

    //lastIndexOf
    function lastIndexOf(x,e){
        var bool="0";
        var cont="-1";
        var i=x.length;
        for(i;i=0;i--){
            if(x[i]==e){
                bool=i;
            }
        }
        if(bool!=0){
            return bool;
        }else{
            return cont;
        }
    }

    //capacity
    function capacity(x){
        return max_elem;
    }

    //clear
    function clear(x){
 	  var e=Number.NaN;
 	  if (!isEmpty(x)){	
          for (var i=0;i<x.length;i++){
              x[i]=Number.NaN;
          } 	
      }
        return x;
    }

    //firstElement
    function firstElement(x){
 		return x[0]; 		
    } 
    
    //lastElement
    function lastElement(x){
 		return x[max_elem-1]; 		
    } 

    //remove
    function remove(x,i){
        var alm=0;
        var e=Number.NaN;
        alm=x[i];
        x[i]=e;
        return alm;
    }

    //removeElement
    function removeElement(x,e){
        var bool="0";
        var borrar=Number.NaN;
        for(var i=0;i<x.length;i++){
            if(x[i]==e){
                x[i]=borrar;
                bool=1;
            }
        }
        if(bool!=0){
            return true;
        }else{
            return false;
        }
    }





    //Ordenar ascendentemente
    function ordenar(x){
        for(var i=1;i<x.length;i++)
		{
			for(var j=0;j<(x.length-i);j++)
			{
				if(x[j]>x[j+1])
				{
					k=x[j+1];
					x[j+1]=x[j];
					x[j]=k;
				}
			}
		}
		return x;
    }














    /*
    Mediante funciones de arrays
    
    //size
    var size=x.length;
    
    //add
    var nuevalong=x.push(3);
    
    //toString
    var str=x.toString;
    
    //indexOf
    var pos=x.indexOf(4);
    
    //clear y remove
    x.prototype.splice();
    */