var app = angular.module("app", []);
var activarDescripcion=false;
var activarObjetivos=false;
var activarContenidos=false;
//primer año****************

        //I semestre
var logicaMatematicaComputacion;
var fundamentosDeDibujo;
var fundamentosDeDiseno;
var introduccionInformaticaTecnologiaMultimedia;
var tallerExperimentacion;
      //II semestre
var capturaImagenesDigitales;
var expresionArtisticaDibujo;
var fundamentosProgramacion;
var mediosDigitalesDiseno;
//segundo año***************
      //I semestre
var programación;
var disenoBasesDeDatos;
var redesComunicacionesDeDatos;
var manipulacionDeLaImagen;
var historiaArteVisual;

      //segundo semestre
var desarrolloAppInteractivasI;
var seguridadAplicacionesInteractivas;
var inglesOralInformatica;
var imageMovimiento;
var disenoGrafico;
var produccionJuegos;
//tercer año*****************


//cuarto año*****************

        //I semestre
var comercioElectonico;
var desarrollaRapidoApp;
var gramaticaComposicionInglesaII;
//optativas
var desarrolloDispositivosMoviles;
var programacionDrupal;
var programacionRubyRails;
      //II semestre
var practicaProfesional;
var responsabilidadSocialInformatica;
//******************************
 /************LICENCIATURA***********/
      //I Semestre
 var animacion3D;
 var creacionHistoriasTransmedias;
 var disenoJuegos;
 var fundamentosDisenoInteractivo;
 var lenguajeVisualImagenMovimiento;
      //II Semestre
  var ambientesEfectosArtificiales;
  var animacion3DAv;
  var disenoPersonajes;
  var disenoMediosInteractivos;
//con dataResource inyectamos la factoría
app.controller("appController", function ($scope, $http) {
    //hacemos uso de $http para obtener los datos del json
  
/********************************************************PRIMER AÑO***********************************************************************/
                            /*******************PRIMER SEMESTRE******************/
$http.get('json_files/I/ISemestre/fundamentos_de_dibujo.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.funDib = info;
        fundamentosDeDibujo=info;
    });

$http.get('json_files/I/ISemestre/fundamentos_de_diseno.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.funDisng = info;
        fundamentosDeDiseno=info;
    });

$http.get('json_files/I/ISemestre/introduccion_informatica_y_tecnologia_multimedia.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.intoITM = info;
        introduccionInformaticaTecnologiaMultimedia=info;
    });

$http.get('json_files/I/ISemestre/logica_matematica_para_computacion.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.logMC= info;
        logicaMatematicaComputacion=info;
    });

$http.get('json_files/I/ISemestre/taller_de_experimentacion.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.tallExp= info;
        tallerExperimentacion=info;
    });


                                /**********SEGUNDO SEMESTRE********/


    $http.get('json_files/I/IISemestre/captura-de-imagenes-digitales.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.dat = info;
        capturaImagenesDigitales=info;
        });

       $http.get('json_files/I/IISemestre/expresion_artistica_a_traves_del_dibujo.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.exprAD = info;
        expresionArtisticaDibujo=info;
    });

              $http.get('json_files/I/IISemestre/fundamentos_de_la_programacion.json').success(function (info) {
        //Convert data to array.
    
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.fundProgra = info;
        fundamentosProgramacion=info;
    });
                 $http.get('json_files/I/IISemestre/medios_digitales_para_disenar.json').success(function (info) {
        $scope.medDD = info;
        mediosDigitalesDiseno=info;
    });


  

/******************************************************SEGUNDO AÑO***************************************************************/
                                  /****************I SEMESTRE****************/
      $http.get('json_files/II/ISemestre/TM-3100 Programación.json').success(function (info) {
        $scope.progra = info;
        programación=info;
     });

    $http.get('json_files/II/ISemestre/TM-3200 Diseño de bases de datos.json').success(function (info) {
        $scope.disnBD = info;
        disenoBasesDeDatos=info;
     });

    $http.get('json_files/II/ISemestre/TM-3300 Redes y comunicaciones de datos.json').success(function (info) {
        $scope.redes = info;
        redesComunicacionesDeDatos=info;
     });

        $http.get('json_files/II/ISemestre/TM-3400 Manipulación de la imagen.json').success(function (info) {
        $scope.manImagen = info;
        manipulacionDeLaImagen=info;
     });

        $http.get('json_files/II/ISemestre/TM-3500 Historia del Arte Visual.json').success(function (info) {
        $scope.histAV = info;
        historiaArteVisual=info;
     });
                        /********************II SEMESTRE*******************************/
        $http.get('json_files/II/IISemestre/TM-4100 Desarrollo de aplicaciones interactivas I.json').success(function (info) {
        $scope.appInt = info;
        desarrolloAppInteractivasI=info;
     });

        $http.get('json_files/II/IISemestre/TM-4200 Seguridad en las aplicaciones interactivas.json').success(function (info) {
        $scope.segAppInt = info;
        seguridadAplicacionesInteractivas=info;
     });
        

                   $http.get('json_files/II/IISemestre/TM-4400 Imagen en movimiento.json').success(function (info) {
        $scope.imgMov= info;
        imageMovimiento=info;
     }); 

                  $http.get('json_files/II/IISemestre/TM-4500 Diseño Gráfico para Tecnología Multimedia.json').success(function (info) {
        $scope.disngG= info;
        disenoGrafico=info;
     });
                $http.get('json_files/II/IISemestre/TM-4300 Inglés Oral para Informática.json').success(function (info) {
        $scope.inglOI= info;
        inglesOralInformatica=info;
     });  
/******************************************************CUARTO AÑO***************************************************************/
                                  /****************I SEMESTRE****************/

         $http.get('json_files/IV/I Semestre/Comercio Electrónico.json').success(function (info) {
        $scope.comElec= info;
        comercioElectonico=info;
     });  
         $http.get('json_files/IV/I Semestre/Desarrollo rápido de aplicaciones.json').success(function (info) {
        $scope.desRapApp= info;
        desarrollaRapidoApp=info;
     });  
            $http.get('json_files/IV/I Semestre/Gramática y Composición Inglesa II.json').success(function (info) {
        $scope.graComIngII= info;
        gramaticaComposicionInglesaII=info;
     });

         $http.get('json_files/IV/I Semestre/Optativas/Desarrollo para Dispositivos Móviles.json').success(function (info) {
        //$scope.graComIngII= info;
        desarrolloDispositivosMoviles=info;
     });  
          $http.get('json_files/IV/I Semestre/Optativas/Programación en Drupal.json').success(function (info) {
        //$scope.graComIngII= info;
        programacionDrupal=info;
     });  
           $http.get('json_files/IV/I Semestre/Optativas/Programación en Ruby on Rails.json').success(function (info) {
        //$scope.graComIngII= info;
        programacionRubyRails=info;
     });  

                                  /***************II SEMESTRE******************/
              $http.get('json_files/IV/II Semestre/Práctica profesional supervisada.json').success(function (info) {
        $scope.practica= info;
        practicaProfesional=info;
     });
           $http.get('json_files/IV/II Semestre/Responsabilidad Social de la Informática.json').success(function (info) {
        $scope.respSocInf= info;
        responsabilidadSocialInformatica=info;
     });


/******************************************************LICENCIATURA***********************************************************************/
/************************************************************************************************************************************************/

                                /***************I SEMESTRE**************************/
        $http.get('json_files/Licenciatura/I%20semestre/Animacion%203D.json').success(function (info) {
        $scope.anim3D= info;
        animacion3D=info;
     });
        $http.get('json_files/Licenciatura/I semestre/Creacion de historias transmedia.json').success(function (info) {
        $scope.creaHisTr= info;
        creacionHistoriasTransmedias=info;
     });
        $http.get('json_files/Licenciatura/I semestre/Diseño de Juegos.json').success(function (info) {
        $scope.disnJueg= info;
        disenoJuegos=info;
     });
          $http.get('json_files/Licenciatura/I semestre/Fundamentos del diseño interactivo.json').success(function (info) {
        $scope.funDisngInt= info;
        fundamentosDisenoInteractivo=info;
     });
             $http.get('json_files/Licenciatura/I semestre/Lenguaje visual de la imagen en movimiento.json').success(function (info) {
        $scope.lengVisIM= info;
        lenguajeVisualImagenMovimiento=info;
     });
                                            /*****************SEGUNDO SEMESTRE*********************/

        $http.get('json_files/Licenciatura/II semestre/Ambientes y efectos artificiales.json').success(function (info) {
        $scope.ambEfectArt= info;
        ambientesEfectosArtificiales=info;
     });
        $http.get('json_files/Licenciatura/II semestre/Animacion 3D avanzada.json').success(function (info) {
        $scope.anim3DAv= info;
        animacion3DAv=info;
     });
        $http.get('json_files/Licenciatura/II semestre/Diseno de personajes.json').success(function (info) {
        $scope.disnPers= info;
        disenoPersonajes=info;
     });
        $http.get('json_files/Licenciatura/II semestre/Diseno para medios interactivos.json').success(function (info) {
        $scope.disnMedInt= info;
        disenoMediosInteractivos=info;
     });

                $http.get('json_files/Licenciatura/II semestre/Produccion de juegos.json').success(function (info) {
        $scope.prodJug= info;
        produccionJuegos=info;
  
     });

})



$(document).ready(function() {

$(document).foundation();

if($('title').text()=='Bachillerato ITM')
{
    pintarLineasCanvas();
}


/***************************************************************************************************************************************************************
*****************************************Eventos click a los botones de las esquinas de cada curso*************************************************
***************************************************************************************************************************************************************/

//esquina superior izquierda descripcion del curso
$('.up-left').click(function(event) { /*************************************DESCRIPCION*********************************************/
    /* Act on the event */
    activarDescripcion=false;
   var nombreCurso=$(this).attr('data');
   if(nombreCurso!="OPT-1" && nombreCurso!="OPT-2")
   {
   var curso =getCurso(nombreCurso);
   crearDescripcion(curso, nombreCurso);
   $('#descripcion').foundation('reveal', 'open');
  }

  if(nombreCurso=="OPT-1")
  {
      
  }

  if(nombreCurso=="OPT-2")
  {
    $('#optativas').attr('data','false');
      crearOptativasII();
      $('#optativas').foundation('reveal', 'open');

      $('.opt').click(function(event) {
            nombreCurso=$(this).attr('data');
           
            var curso =getCurso(nombreCurso);
            crearDescripcion(curso, nombreCurso);
              $('#optativas').attr('data', 'true');
              activarDescripcion=true;
           $('#descripcion').foundation('reveal', 'open');

      });
  }


});

//esquina superior derecha objetivos del curso
$('.up-right').click(function(event) { /*************************************OBJETIVOS*********************************************/
    /* Act on the event */
    activarObjetivos=false;
   var nombreCurso=$(this).attr('data');
   
 if(nombreCurso!="OPT-1" && nombreCurso!="OPT-2")
   {
   var curso =getCurso(nombreCurso);
    crearObjetivos(curso,nombreCurso);
    $('#objetivos').foundation('reveal', 'open');
  }

      if(nombreCurso=="OPT-1")
  {
      
  }

  if(nombreCurso=="OPT-2")
  {
    $('#optativas').attr('data','false');
      crearOptativasII();
      $('#optativas').foundation('reveal', 'open');

      $('.opt').click(function(event) {
            nombreCurso=$(this).attr('data');
           
            var curso =getCurso(nombreCurso);
            crearObjetivos(curso, nombreCurso);
              $('#optativas').attr('data', 'true');
              activarObjetivos=true;
           $('#objetivos').foundation('reveal', 'open');

      });
  }
});

//esquina inferior izquierda contenidos del curso
$('.down-left').click(function(event) {/*************************************CONTENIDOS*********************************************/
    /* Act on the event */
   var nombreCurso=$(this).attr('data');
   activarContenidos=false;
    if(nombreCurso!="OPT-1" && nombreCurso!="OPT-2")
   {
   var curso =getCurso(nombreCurso);
   crearContenidos(curso,nombreCurso);
    $('#contenidos').foundation('reveal', 'open');
 }


  if(nombreCurso=="OPT-1")
  {
      
  }

  if(nombreCurso=="OPT-2")
  {
    $('#optativas').attr('data','false');
      crearOptativasII();
      $('#optativas').foundation('reveal', 'open');

      $('.opt').click(function(event) {
            nombreCurso=$(this).attr('data');
           
            var curso =getCurso(nombreCurso);
             crearContenidos(curso,nombreCurso);
              $('#optativas').attr('data', 'true');
              activarContenidos=true;
          $('#contenidos').foundation('reveal', 'open');


      $('.punto').click(function(event) {/***********PUNTOS CONTENIDOS***************/
          /* Act on the event */
            var posContenido=$(this).attr('data');
            crearPuntos(curso,nombreCurso, posContenido);
            $('#contenidos').attr('data', 'true');
            $('#puntos').foundation('reveal', 'open');
             });

      });

   
    }


      $('.punto').click(function(event) {/***********PUNTOS CONTENIDOS***************/
          /* Act on the event */
            var posContenido=$(this).attr('data');
            crearPuntos(curso,nombreCurso, posContenido);
            $('#contenidos').attr('data', 'true');
            $('#puntos').foundation('reveal', 'open');
             });
      
});


  /****************************************************************************************************************************************************************
********************************************** Cuando se cierra un modal verifica cuales y l limpia ******************************************************
/*****************************************************************************************************************************************************************/
  $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
   var id = $(this).attr('id');
   if(id=='descripcion')
   {
        $('div').remove('.descripcion-cont');
        if(activarDescripcion==true)
        {
          $('#optativas').attr('data', 'false');
            $('#optativas').foundation('reveal', 'open');  
        }
    }

    if(id=='objetivos')
   {
        $('div').remove('.objetivos-cont');
         if(activarObjetivos==true)
        {
          $('#optativas').attr('data', 'false');
            $('#optativas').foundation('reveal', 'open');  
        }
    }

    if(id=='contenidos')
   {      
       // alert($(this).attr('data'));
        if($(this).attr('data')=='false')
        {
          $('#contenidos').attr('data', 'false');
        $('div').remove('.contenidos-cont');

          if(activarContenidos==true)
        {
          $('#optativas').attr('data', 'false');
            $('#optativas').foundation('reveal', 'open');  
        }
        }


     }

   if (id=='puntos') {
        $('div').remove('.puntos-cont');
        $('#contenidos').attr('data', 'false');
          $('#contenidos').foundation('reveal', 'open');
        };

        if(id=='optativas')
        {

           if($(this).attr('data')=='false')
            {
        
                $('div').remove('.cursoOPT');
            }
           
        }
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
    
        var descripcion="<div class='row descripcion-cont'><h3 class='text-left small-8 column'>"+curso[0].nombre+"</h3><h4 class='small-8 column'><small>"+curso[0].siglas+"</small></h4></div><div class='row descripcion-cont'><p class='small-8 column'>"+curso[0].descripcion+"</p></div>";
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
      
     var contenidos="";
     if(curso[0].contenidos.length<10)
      {      contenidos ="<div class='row contenidos-cont'><ol>";
             for(var i=0;i<curso[0].contenidos.length;i++)
             {
                
                contenidos+="<li><a class='punto' curso='"+curso[0].nombre+"' href='#'' data='"+i+"'>"+curso[0].contenidos[i].titulo+"</a></li>";
             }
             contenidos+="</ol><div>";
   }
   else{
            contenidos+="<div class='row contenidos-cont'><div class='small-4 column'><ol>";
            for(var i=0;i<10;i++)
             {
                  contenidos+="<li><a class='punto' curso='"+curso[0].nombre+"' href='#'' data='"+i+"'>"+curso[0].contenidos[i].titulo+"</a></li>";
             }
             contenidos+="</ol></div><div class='small-4 column'><ol>";

              for(var i=10;i<curso[0].contenidos.length;i++)
             {
                  contenidos+="<li value='"+i+"'><a class='punto' curso='"+curso[0].nombre+"' href='#'' data='"+i+"'>"+curso[0].contenidos[i].titulo+"</a></li>";
             }
             contenidos+="</ol></div></div>";
   }
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
********************************************************Crea las optativas disponibles para caada bloque*******************************************************
***************************************************************************************************************************************************************/
function crearOptativasI()
{
    var optativas="<div class='row'><div class='small-8 column'>"+
    "<ul>"+
    "<li><a></></li>"+
    "<li><a></></li>"+
    "</ul></div></div>";
}
function crearOptativasII()
{
  var optativas="<div class='row cursoOPT'><div class='small-8 column'>"+
    "<ul>"+
    "<li><a class='opt' data='"+desarrolloDispositivosMoviles[0].nombre+"'>"+desarrolloDispositivosMoviles[0].nombre+"</></li>"+
    "<li><a class='opt' data='"+programacionDrupal[0].nombre+"'>"+programacionDrupal[0].nombre+"</></li>"+
    "<li><a class='opt' data='"+programacionRubyRails[0].nombre+"'>"+programacionRubyRails[0].nombre+"</></li>"+
    "</ul></div></div>";
    $('#optativas').append(optativas);
}

/***************************************************************************************************************************************************************
********************************************************Devuelve el array del curso seleccionado*******************************************************
***************************************************************************************************************************************************************/

function getCurso(nombreCurso)
{

/*******************PRIMER AÑO**************************/
              /**********I SEMESTRE**************/
    if(nombreCurso=='Fundamentos de dibujo')
    {
            return fundamentosDeDibujo;
    }

     if(nombreCurso=='Fundamentos del diseño')
    {
            return fundamentosDeDiseno;
    }

    if(nombreCurso=='Introducción a la Informática y a la Tecnología Multimedia')
    {
            return introduccionInformaticaTecnologiaMultimedia;
    }

     if(nombreCurso=='Lógica matemática para computación')
    {
            return logicaMatematicaComputacion;
    }
        if(nombreCurso=='Taller de experimentación')
    {
            return tallerExperimentacion;
    }

               /**********II SEMESTRE**************/             

    if(nombreCurso=='Captura de imágenes digitales')
    {
      return capturaImagenesDigitales;
    }
    if(nombreCurso=='Expresión artística a través del dibujo')
    {
      return expresionArtisticaDibujo;
    }
     if(nombreCurso=='Fundamentos de programación')
    {
    
      return fundamentosProgramacion;
    }
    if(nombreCurso=='Medios digitales para diseñar')
    {
    
      return mediosDigitalesDiseno;
    }

  

/*******************SEGUNDO AÑO**************************/
              /**********I SEMESTRE**************/
     if(nombreCurso=='Programación')
    {

      return programación;
    }

     if(nombreCurso=='Diseño de bases de datos')
    {

      return disenoBasesDeDatos;
    }

      if(nombreCurso=='Redes y comunicaciones de datos')
    {

      return redesComunicacionesDeDatos;
    }

          if(nombreCurso=='Manipulación de la imagen')
    {

      return manipulacionDeLaImagen;
    }

         if(nombreCurso=='Historia del Arte Visual')
    {

      return historiaArteVisual;
    }

      /*********SEGUNDO SEMESTRE*/
    if(nombreCurso=='Desarrollo de aplicaciones interactivas I')
    {

      return desarrolloAppInteractivasI;

    }

     if(nombreCurso=='Seguridad en las aplicaciones interactivas')
    {
        
      return seguridadAplicacionesInteractivas;

    }

     if(nombreCurso=='Inglés Oral para Informática')
    {
        
      return inglesOralInformatica;

    }

     if(nombreCurso=='Imagen en movimiento')
    {
        
      return imageMovimiento;

    }

     if(nombreCurso=='Diseño Gráfico para Tecnología Multimedia')
    {
        
      return disenoGrafico;

    }

    /*******************CUARTO AÑO**************************/
              /**********I SEMESTRE**************/
     if(nombreCurso=='Comercio Electrónico')
    {
       
      return comercioElectonico;

    }

    if(nombreCurso=='Desarrollo rápido de aplicaciones')
    {
     
      return desarrollaRapidoApp;

    }
      if(nombreCurso=='Gramática y Composición Inglesa II')
    {
     
      return gramaticaComposicionInglesaII;

    }
      if(nombreCurso=='Optativa II (Programación en Ruby on Rails)')
    {
     
      return programacionRubyRails;

    }
      if(nombreCurso=='Optativa II (Desarrollo para Dispositivos Móviles)')
    {
     
      return desarrolloDispositivosMoviles;

    }
      if(nombreCurso=='Optativa II (Programación en Drupal)')
    {
     
      return programacionDrupal;

    }

 
            /*********II SEMESTRE*******************/
       if(nombreCurso=='Práctica profesional supervisada')
    {
          return practicaProfesional;
    }
      if(nombreCurso=='Responsabilidad Social de la Informática')
    {
          return responsabilidadSocialInformatica;
    }

        /*******************LICENCIATURA**************************/
              /**********I SEMESTRE**************/

          if(nombreCurso=='Animación 3D')
    {
    
          return animacion3D;
    }     

         if(nombreCurso=='Creación de Historias Transmedia')
    {
    
          return creacionHistoriasTransmedias;
    }     

    if(nombreCurso=='Diseño de Juegos')
    {
    
          return disenoJuegos;
    }   
       if(nombreCurso=='Fundamentos del diseño interactivo')
    {
    
          return fundamentosDisenoInteractivo;
    }       
    if(nombreCurso=='Lenguaje visual de la imagen en movimiento')
    {
    
          return lenguajeVisualImagenMovimiento;
    }       
 if(nombreCurso=='Ambientes y efectos artificiales')
    {
    
          return ambientesEfectosArtificiales;
    }  
if(nombreCurso=='Animación 3D avanzada')
    {
    
          return animacion3DAv;
    }  
if(nombreCurso=='Diseño de personajes')
    {
    
          return disenoPersonajes;
    }  

    if(nombreCurso=='Diseño para medios interactivos')
    {
          
          return disenoMediosInteractivos;
    }  

    if(nombreCurso=='Producción de juegos')
    {
          
          return produccionJuegos;
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



