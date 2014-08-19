//para hacer uso de $resource debemos colocarlo al crear el modulo
var capturaImagenesDigitales;
var app = angular.module("app", []);
 
//con dataResource inyectamos la factoría
app.controller("appController", function ($scope, $http) {
    //hacemos uso de $http para obtener los datos del json
    $http.get('js/data.json').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.datos = data;
        console.log(datos.length);
    });

    $http.get('json_files/I/IISemestre/captura-de-imagenes-digitales.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.dat = info;
        capturaImagenesDigitales=info;
        console.log($scope.dat.length);
        console.log(info[0].nombre);
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope

})



$(document).ready(function() {

$(document).foundation();

    pintarLineasCanvas();


/***************************************************************************************************************************************************************
*****************************************Eventos click a los botones de las esquinas de cada curso*************************************************
***************************************************************************************************************************************************************/

//esquina superior izquierda descripcion del curso
$('.up-left').click(function(event) { /*************************************DESCRIPCION*********************************************/
    /* Act on the event */
   var nombreCurso=$(this).attr('data');
   var curso =getCurso(nombreCurso);
   crearDescripcion(curso, nombreCurso);
   $('#descripcion').foundation('reveal', 'open');
});

//esquina superior derecha objetivos del curso
$('.up-right').click(function(event) { /*************************************OBJETIVOS*********************************************/
    /* Act on the event */
   var cursoNombre=$(this).attr('data');
   var curso =getCurso(cursoNombre);
    crearObjetivos(curso,cursoNombre);
    $('#objetivos').foundation('reveal', 'open');
});

//esquina inferior izquierda contenidos del curso
$('.down-left').click(function(event) {/*************************************CONTENIDOS*********************************************/
    /* Act on the event */
   var nombreCurso=$(this).attr('data');
   var curso =getCurso(nombreCurso);
   crearContenidos(curso,nombreCurso);

        $('.punto').click(function(event) {/***********PUNTOS CONTENIDOS***************/
          /* Act on the event */
            var posContenido=$(this).attr('data');
            crearPuntos(curso,nombreCurso, posContenido);
            $('#contenidos').attr('data', 'true');
            $('#puntos').foundation('reveal', 'open');
             });

    $('#contenidos').foundation('reveal', 'open');
});


  /****************************************************************************************************************************************************************
********************************************** Cuando se cierra un modal verifica cuales y l limpia ******************************************************
/*****************************************************************************************************************************************************************/
  $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
   var id = $(this).attr('id');
   if(id=='descripcion')
   {
        $('div').remove('.descripcion-cont');
    }

    if(id=='objetivos')
   {
        $('div').remove('.objetivos-cont');
    }

    if(id=='contenidos')
   {      
       // alert($(this).attr('data'));
        if($(this).attr('data')=='false')
        {
        $('div').remove('.contenidos-cont');
        }
     }

   if (id=='puntos') {
        $('div').remove('.puntos-cont');
        $('#contenidos').attr('data', 'false');
          $('#contenidos').foundation('reveal', 'open');
        };
});

});  /**************************************************************** Fin del document ready*************************************************************/
/*************************************************************************************************************************************************************/
/*************************************************************************************************************************************************************/ 


/*******************************************************************************************************************************************************************/
/****************************************************Metodods que crean automaticamente el contenido del los cursos**********************************
********************************************************************************************************************************************************************/

/********crea la descripcion del curso en el modal de descripcion**************/
function crearDescripcion(curso, nombreCurso)
{
    
        var descripcion="<div class='row descripcion-cont'><h3 class='text-left small-8 column'>"+curso[0].nombre+"<h3/><h4 class='small-8 column'><small>"+curso[0].siglas+"</small></h4></div><div class='row descripcion-cont'><p class='small-8 column'>"+curso[0].descripcion+"</p></div>";
       $('#descripcion').append(descripcion);
   
}

/********crea los objetivos del curso en el modal de objetivos**************/
function crearObjetivos(curso,cursoNombre)
{
      
            var objetivos="<div class='row objetivos-cont'><div class='small-4 column'><h4>Objetivos generales</h4><ol>";
            for(var i=0; i<curso[0].objetivosGenerales.length;i++)
            {
                objetivos+="<li>"+curso[0].objetivosGenerales[i]+"</li>";
            }

        objetivos+="<ol></div>"
        objetivos+="<div class='small-4 column'><h4>Objetivos específicos</h4><ol>";
        for(var i=0; i<curso[0].objetivosEspecificos.length; i++)
        {
            objetivos+="<li>"+curso[0].objetivosEspecificos[i]+"</li>";
        }
        objetivos+="</ol></div></div>";
        $('#objetivos').append(objetivos);
      
}

/********crea los contenidos que se desarrollan el el curso**************/
function crearContenidos(curso, nombreCurso)
{
      
     var contenidos="<div class='row contenidos-cont'><ol>";
     for(var i=0;i<curso[0].contenidos.length;i++)
     {
        
        contenidos+="<li><a class='punto' curso='"+curso[0].nombre+"' href='#'' data='"+i+"'>"+curso[0].contenidos[i].titulo+"</a></li>";
     }
     contenidos+="<ol><div>";
     $('#contenidos').append(contenidos);


}

/*****************crea los puntos del contenido seleccionado de un curso*****************/
function crearPuntos (curso, nombreCurso,posContenido) {
    // body...
    var puntos="<div class='row puntos-cont'> <h4>"+curso[0].contenidos[posContenido].titulo+"</h4><ul class='square'>";
    for (var i = 0; i < curso[0].contenidos[posContenido].temas.length; i++) {
         puntos+="<li>"+curso[0].contenidos[posContenido].temas[i]+"</li>";
    };
    puntos+="</ul><div>"
    $('#puntos').append(puntos);

}


/***************************************************************************************************************************************************************
***************************************************Devuelve el array del curso seleccionado************************************************************
***************************************************************************************************************************************************************/

function getCurso(nombreCurso)
{
    if(nombreCurso=='Captura de imágenes digitales')
    {
      return capturaImagenesDigitales;
    }

    return null;
}


/***************************************************************************************************************************************************************
*****************************************Pinta las lineas que unen los cursos en el canvas************************************************************
***************************************************************************************************************************************************************/
function pintarLineasCanvas()
{
    var canvas = document.getElementById("micanvas");
    canvas.width  = window.innerWidth-18;
    canvas.height  = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.beginPath();

var widthBox=parseInt($('.box').css('width'),10);
var heightBox=parseInt($('.box').css('height'),10);
ctx.lineWidth = 2;


var inicio=$('#EG-1').offset();
var fin=$('#SR-2').offset();
ctx.moveTo(inicio.left,inicio.top+23);
ctx.lineTo(fin.left,fin.top+23);
ctx.strokeStyle="#FFF";
ctx.stroke();
ctx.beginPath();

inicio=$('#TM-1100').offset();
fin=$('#TM-1500').offset();
ctx.moveTo(inicio.left+65,inicio.top+23);
ctx.lineTo(fin.left+65,fin.top+23);
ctx.strokeStyle="#FFF";
ctx.stroke();
ctx.beginPath();

inicio=$('#TM-1100').offset();
fin=$('#OPT-2').offset();
ctx.moveTo(inicio.left,inicio.top+23);
ctx.lineTo(fin.left+widthBox+10,fin.top+23);
ctx.lineTo(fin.left+widthBox+10,fin.top+80);
fin=$('#TM-8100').offset();
ctx.lineTo(fin.left,fin.top+8);

inicio=$('#TM-2100').offset();
fin=$('#TM-3200').offset();
ctx.moveTo(inicio.left+(widthBox/2),inicio.top);
ctx.lineTo(inicio.left+(widthBox/2),inicio.top+heightBox+25);
ctx.lineTo(fin.left+widthBox+10,inicio.top+heightBox+25);
ctx.lineTo(fin.left+widthBox+10,inicio.top+heightBox-25);
fin=$('#TM-4100').offset();
ctx.lineTo(fin.left+widthBox+10,inicio.top+heightBox-25);
ctx.lineTo(fin.left+widthBox+10,inicio.top+heightBox+25);
fin=$('#TM-5400').offset();
ctx.lineTo(fin.left,inicio.top+heightBox+25);
ctx.lineTo(fin.left+(widthBox/2),inicio.top+heightBox+25);
inicio=$('#TM-5500').offset();
ctx.lineTo(fin.left+(widthBox/2),inicio.top);

ctx.stroke();

inicio=$('#OPT-1').offset();
fin=$('#OPT-3').offset();
ctx.moveTo(inicio.left+widthBox, inicio.top+(heightBox/2));
ctx.lineTo(inicio.left+widthBox+10, inicio.top+(heightBox/2));
ctx.lineTo(inicio.left+widthBox+10, fin.top+(heightBox/2)-10);
fin=$('#TM-8100').offset();
ctx.lineTo(fin.left, fin.top+(heightBox/2)-10);
ctx.stroke();

inicio=$('#TM-3300').offset();
fin=$('#TM-4200').offset();
ctx.moveTo(inicio.left+widthBox, inicio.top+(heightBox/2)-20);
ctx.lineTo(inicio.left+widthBox+10, inicio.top+(heightBox/2-20));
ctx.lineTo(inicio.left+widthBox+10, fin.top+(heightBox/2));
ctx.lineTo(fin.left, fin.top+(heightBox/2));
ctx.stroke();

inicio=$('#TM-2400').offset();
fin=$('#TM-5200').offset();
ctx.moveTo(inicio.left, inicio.top+(heightBox/2)-10);
ctx.lineTo(fin.left, fin.top+(heightBox/2)-10);
ctx.stroke();

inicio=$('#TM-3400').offset();
fin=$('#TM-5500').offset();
ctx.moveTo(inicio.left+widthBox, inicio.top+(heightBox/2)-20);
ctx.lineTo(inicio.left+widthBox+10, inicio.top+(heightBox/2)-20);
ctx.lineTo(inicio.left+widthBox+10, fin.top+(heightBox/2)-7);
ctx.lineTo(fin.left+widthBox+10, fin.top+(heightBox/2)-7);
inicio=fin;
fin=$('#TM-6100').offset();
ctx.lineTo(inicio.left+widthBox+10, fin.top+10);
ctx.lineTo(fin.left+widthBox+10, fin.top+10);
inicio=fin;
fin=$('#TM-7500').offset();
ctx.lineTo(inicio.left+widthBox+10, fin.top+(heightBox/2));
ctx.lineTo(fin.left+widthBox-8, fin.top+(heightBox/2));
ctx.lineTo(fin.left+widthBox-8, fin.top+(heightBox/2)-25);
ctx.lineTo(fin.left+widthBox+10, fin.top+(heightBox/2)-25);

inicio=fin;
fin=$('#TM-8100').offset();
ctx.lineTo(inicio.left+widthBox+10, fin.top+(heightBox/2)+3);
ctx.lineTo(fin.left, fin.top+(heightBox/2)+3);
ctx.stroke();

inicio=$('#TM-6200').offset();
fin=$('#TM-7500').offset();
ctx.moveTo(inicio.left, inicio.top+(heightBox/2)-12);
ctx.lineTo(fin.left, fin.top+(heightBox/2)-12);
ctx.stroke();

inicio=$('#TM-1200').offset();
fin=$('#TM-2200').offset();
ctx.moveTo(inicio.left, inicio.top+(heightBox/2)-10);
ctx.lineTo(inicio.left+(widthBox+10), inicio.top+(heightBox/2)-10);
ctx.lineTo(inicio.left+(widthBox+10), fin.top+(heightBox/2)-22);
ctx.lineTo(fin.left, fin.top+(heightBox/2)-22);
ctx.stroke();

inicio=$('#TM-1300').offset();
ctx.moveTo(inicio.left, inicio.top+(heightBox/2)-10);
ctx.lineTo(fin.left, fin.top+(heightBox/2)-10);
ctx.stroke(); 

inicio=$('#TM-4300').offset();
fin=$('#TM-7100').offset();
ctx.moveTo(inicio.left+2, inicio.top+(heightBox/2)-10);
ctx.lineTo(fin.left, fin.top+(heightBox/2)-10);
ctx.stroke(); 

inicio=$('#TM-1400').offset();
fin=$('#TM-2300').offset();
ctx.moveTo(inicio.left+2, inicio.top+(heightBox/2)-10);
ctx.lineTo(fin.left, fin.top+(heightBox/2)-10);
ctx.stroke(); 

}



