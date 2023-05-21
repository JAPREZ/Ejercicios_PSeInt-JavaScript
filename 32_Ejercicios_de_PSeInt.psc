//Ejercicios de PSeInt
//Aqui estan los 32 ejercicios de los videos.
//Estan separados por funciones.

Algoritmo EjerciciosDeLosVideos
	videoN22_calcular_seg();
FinAlgoritmo


Funcion videoN16_ejercicio1()
	//entrada: valores de a, b, y c
	//proceso: con los valores ya ingresados calcular (-b + raiz(b*b - 4*a*c))/(2*a)
	//salida: Resultado de la operacion
	Definir a,b,c,resultado como reales;
	Escribir "Digite el valor de a:";
	Leer a;
	Escribir "Digite el valor de b:";
	Leer b;
	Escribir "Digite el valor de c:";
	Leer c;
	
	resultado<- (-b + raiz(b*b - (4*a*c)))/(2*a);
	
	Escribir "El resultado es:", resultado;
FinFuncion


Funcion videoN17_ejercicio2()
	//determinar la solución logica de la sig expresion
	//entrada: Pedir al usuario que ingrese el valor de a y b
	//proceso: Calcular la operacion ((3+5*8)<3 y ((-6/3*8)+2<2))o (a>b)
	//salida: Dar el resultado de la operacion
	Definir resultado Como Logico;
	Definir a, b Como Real;
	
	Escribir "Digite a:";
	Leer a;
	
	Escribir "Digite b:";
	Leer b;
	
	resultado<- ((3+5*8)<3 y ((-6/3*8)+2<2))o (a>b);
	
	Escribir "El resultado es: ", resultado;
	
FinFuncion


Funcion videoN18_ejercicio3()
	//hacer un programa para intercambiar el valo de 2 variables
	//Entrada: Pedir el valor de las variables a y b
	//Proceso: Intercambiar las variables a y b con la ayuda de una nueva variable aux 
	//Salida: Dar el resultado del proceso
	Definir a, b, aux Como Real;
	
	Escribir "Digite a:";
	leer a;
	Escribir "Digite b:";
	Leer b;
	
	aux <- a;
	a<- b;
	b<- aux;
	
	Escribir "El valor de a es:",a ;
	Escribir "El valor de b es:",b ;
	
FinFuncion


Funcion videoN19_Diagrama_de_flujo()
	//Entrada: Pedir el usuario el valor de c ademas definir a y b y darles un valor numerico
	//Proceso: Realizar la suma de las variables a, b y c
	//Salida: Dar el resulatado de la operacion
	// Mi primer programa
	Definir a,b,c,resultado Como Entero;
	a <- 10;
	b <- 20;
	Escribir 'Digite un número: ';
	Leer c;
	resultado <- a+b+c;
	Escribir 'El resultado es:',resultado;
FinFuncion


Funcion videoN20_DiagramaNS()
	//Entrada: Pedir el valor de b
	//Proceso: Calcular la suma de a + b
	//Salida: Dar el resultado 
	
	definir resultado,b,a como entero;
	a <- 12;
	Escribir "Digite un numero: ";
	Leer b;
	resultado <- a + b;
	Escribir "resultado es: ",resultado;
FinFuncion


Funcion videoN21_Pseudocodigo()
	//Entrada: Pedir el valor de v al usuario
	//Proceso: Calcular la suma de a + v
	//Salida: Mostrar el resultado de suma
	
	Definir a,v,res Como Real;
	a <- 2;
	Escribir "Digite un numero: ";
	Leer v;
	res <- a+v;
	
	Escribir "La respuesta es: ", res;
Finfuncion


Funcion videoN22_calcular_seg()
	//Clacular la cantidad de segundos que tiene las horas, minutos y segundos ingresados por el usuario
	//Entrada: Pedir al usuario que ingrese el valor de horas, min y seg
	//Proceso: Con nuevas variables y formulas calcular el valor en segundos 
	//Salida: Mostrar resultado
	
	Definir horas, minutos, seg Como Entero; //definimos nuestras variables como entero
	Definir horas_seg, min_seg, seg_totales Como Entero;
	
	Escribir "Digite las horas:";
	Leer horas;
	escribir "Digite los minutos";
	Leer minutos;
	Escribir "Digite los segundos: ";
	Leer seg;
	
	//calcular el equivalente en segundos atraves de la sig fórmula
	horas_seg <- horas * 3600;
	min_seg <- minutos * 60;
	seg_totales <- horas_seg + min_seg + seg;
	
	Escribir "Los segundos son: ", seg_totales;
	
Finfuncion


Funcion videoN23_Area_longitud()
	//Calcular el area y la longitud de una circunferencia con el valor de radio que ingree el usuario
	//Entrada: Pedir al usuario que ingrese el radio ademas, definir las variables area, long y radio
	//Proceso: Calcular area = pi * (radio * radio) y longitud = 2 * pi * radio
	//Salida: Mostrar el resulatdo del area y longitud
	
	Definir radio, area, long Como real;
	
	Escribir "Escriba el Radio de la circuferencia: " ;
	Leer radio;
	
	area <- pi * (radio * radio);
	long <- 2 * pi * radio;
	
	Escribir "El area de la circunferencia es: ", area;
	Escribir "La longitud de la circunferencia es: ", long;
	
FinFuncion


Funcion videoN24_ejercicio3()
	//Sacar el porcentaje de Hombres y Mujeres 
	//Entrada: Pedir al usuario que ingrese el numero de hombres y mujeres y se guarden en las variables h, m respectivamente
	//Proceso: Clacular el porcentaje a partir de los datos y formulas ingresadas
	//Salida: Mostrar el resultado
	
	Definir h,m,te Como Real;
	Definir hp,mp Como Real;
	Escribir "Cuantos hombres son: ";
	leer h;
	Escribir "Cuantas mujeres son: ",;
	leer m;
	
	te<- h + m;
	hp<- h/te *100;
	mp<- m/te *100;
	
	Escribir "El porcentaje de hombre es:",hp,"%";
	Escribir "El porcentaje de mujeres es:",mp,"%";
FinFuncion


Funcion videoN25_RevisarEvaluaciones()
	//Calcular las horas que se tardara un profesor en revisar los examenes los cuales se dividen en tres tipos
	//Tipo A 5min, B8min, C6min
	//Entrada: Pedir al usuario  qeu ingrese la cantidad de examenes a resolver en las variables A,B Y C
	//Proceso: Usando una formula se procede a calcular el tiempo en que se tardará el  profesor en revisar lo examenes
	//Salida: Mostrar las horas y minutos 
	
	Definir A,B,C Como Real;
	definir AT, BT, CT Como Real;
	definir tiempo_total, horas, minutos Como Real;
	
	Escribir "Ingrese la cantidad de examenes tipo A:";
	Leer A;
	Escribir "Ingrese la cantidad de examenes tipo B:";
	Leer B;
	Escribir "Ingrese la cantidad de examenes tipo C:";
	Leer C;
	
	//calcular los minutos que se tardará en revisar los cuestionarios
	AT<- A * 5;
	BT<- B * 8;
	CT<- C * 6;
	//sumar el total de minutos
	tiempo_total<-AT+ BT+ CT;
	//calcular las horas y los minutos usando trunc para dar parte entera
	//mod para dar el resto
	horas<- trunc(tiempo_total/60);
	minutos<- tiempo_total mod 60;
	
	
	Escribir "El tiempo en revisar las evaluaciones es...";
	Escribir "Es ",horas, " horas y ",minutos," minutos";
	
FinFuncion


Funcion videoN26_Descuento_Producto()
	//Mostar el precio a pagar aplicando un descuento del 15%
	//Entrada: Pedir al usuario que ingrese la cantidad a pagar
	//Proceso: Sacar el descuento del 15% a la cantidad ingresada 
	//Salida: Mostrar el resultado 
	
	Definir precio,descuento,precio_final,precio_descuento Como Real;
	
	Escribir "Ingrese el total de pago:";
	Leer precio;
	
	//usamos una formula para sacar el descuento
	descuento<- 15;
	precio_descuento <- (descuento*precio)/100;
	precio_final <- precio - precio_descuento;
	
	Escribir "El precio final es:",precio_final;
	
FinFuncion


Funcion videoN27_Calificacion_Final()
	//Sacar el promedio final de un estudiante con los sig datos
	//55% del promedio de sus tres parciales
	//30% calificacion ex final
	//15% calificacion trabajo final
	// Entrada: Pedir al estudiante que ingrese las tres notas de sus parciales, la nota del trabajo final y la nota del examen FinAlgoritmo
	//Proceso: Con los datos ingresados calcular el promedio FinAlgoritmo
	//Salida: Mostrar el promedio final
	
	Definir Nota1, nota2, nota3, exFinal, TrabajoF, notaparciales, exFinal_nota, TrabajoF_nota, NotaFinal Como Real;
	
	
	Escribir "Ingrese su nota de Primer Parcial:";
	Leer Nota1;
	Escribir "Ingrese su nota de Segundo Parcial:";
	Leer nota2;
	Escribir "Ingrese su nota de Tercer Parcial:";
	Leer nota3;
	Escribir "Ingrese su nota de Trabajo final:";
	Leer TrabajoF;
	Escribir "Ingrese su nota de Examen final:";
	Leer exFinal;
	
	// sumamos notas de parciales y sacamos la nota atraves de formulas
	
	notaparciales <- ((Nota1+nota2+nota3)*5.5)/3;
	TrabajoF_nota <-  TrabajoF * 1.5;
	exFinal_nota <- exFinal * 3;
	
	NotaFinal <- notaparciales + TrabajoF_nota + exFinal_nota;
	
	Escribir "Su nota final es: ", NotaFinal;
	
FinFuncion


Funcion videoN29_Par_Impar()
	//Mostrar si el valor ingresado por el usuario es par o impar
	//Entrada: Pedir al usuario que ingrese un numero
	//Proceso: Usando Si-SiNo ver si el numero es Par o Impar
	//Salida : Mostrar el resultado
	
	Definir  num Como entero;
	
	Escribir "Ingrese un numero: ";
	Leer num;
	
	Si num mod 2 = 0 Entonces
		Escribir "Es par";
	SiNo
		Escribir "Es impar";
	FinSi
	
FinFuncion


Funcion videoN30_Determinar_aprueba_reprueba()
	//Determinar si en base a su promedio aprueba o reprueba
	//Entrada: Pedir al estudiante que ingrese el valor de Nota1, 3 y 3
	//Proceso: Con los datos ingresados calcular si aprueba o reprueba
	//Salida: Mostrar el resultado
	
	Definir nota1,nota2,nota3,promediofinal Como Real;
	
	Escribir "Ingrese Nota 1:";
	Leer nota1;
	Escribir "Ingrese Nota 2:";
	Leer nota2;
	Escribir "Ingrese Nota 3:";
	Leer nota3;
	
	promediofinal<- ((nota1+nota2+nota3)*10)/3;
	
	si promediofinal >= 70 Entonces
		Escribir "Tu promedio final es: ",promediofinal," Aprobastes!!!";
	SiNo
		Escribir "Tu promedio final es: ",promediofinal," Reprobastes :(";
	FinSi
	
FinFuncion


Funcion videoN31_Almacen_Descuento()
	//Mostrar al cliente cual es su precio final a pagar aplicando un descuento de 20% solo si su compra supera los 100$
	//Entrada: Pedir al cliente que ingrese el valor del precio a pagar
	//Proceso: Primero analizar si la condicion(Compra supera los 100$) es verdadera luego calcular el precio final aplicando el descuento
	//Salida: Mostrar el precio final 
	Definir descuento, precio, preciofinal,preciodescuento Como Real;
	
	Escribir "Ingrese su monto a pagar:";
	Leer precio;
	
	si precio <= 99 Entonces
		Escribir "Precio final es:", precio,"$";
	SiNo
		descuento <- 20;
		preciodescuento <- (descuento*precio)/100;
		preciofinal <- precio - preciodescuento;
		Escribir "Precio final es mayor a 100$.";
		Escribir "Por lo tanto se aplica un 20% de descuento.";
		Escribir "Precio final: ", preciofinal,"$";
	FinSi
	
FinFuncion


Funcion videoN32_Leer_dos_numeros()
	//Pedir al usuario que ingrse dos valores, si son iguales se multiplican, si el primero es el mayor se restan y si el segundo es el mayor de suman
	//ENtrada: Ingrese el valor de nuu=m2 y num2
	//Proceso: Evaluar las condiciones y ejecutar el proceso segun la misma
	//Salida: Mostrar el resultado
	Definir num1,num2, multi Como Real;
	
	Escribir "Ingrese el primer valor:";
	leer num1;
	
	Escribir "Ingrese el segundo valoe:";
	Leer num2;
	
	si num1 = num2 Entonces
		multi<- num1 * num2;
		Escribir "Al ser iguales los multiplicamos:", multi;
	SiNo 
		si num1>num2 Entonces
			multi<- num1 - num2;
			Escribir "Al ser el primero mayor se restan:",multi;
		SiNo
			multi <- num1 + num2;
			Escribir "Al ser el primero menor se suman:",multi;
		FinSi
		
	FinSi
	
FinFuncion


Funcion videoN33_Leer_Num_Mayor()
	//Pedir al usuario que ingrese tres valores e indicar cual es el mayor de los tres
	//Entrada: Ingresar el valor de los tres numeros
	//Proceso: Evaluar la condicon y ejecutar el proceso segun la condicion
	//Salida: Mostrar el numero mayor
	
	Definir num1,num2,num3 como real;
	
	Escribir "DIgite tres numeros: ";
	Leer num1,num2,num3;
	
	si num1 > num2 y num1 > num3 Entonces
		Escribir "El numero mayor es:",num1;
	SiNo
		SI num2 > num1 y num2 > num3 Entonces
			Escribir "El numero mayor es:",num2;
		SiNo
			Escribir "El numero mayor es: ",num3;
		FinSi
		
	FinSi
	
FinFuncion


Funcion videoN34_Descuento_Kilos()
	//Usando la tabla como guia calcular el precio a pagar por la compra de manzanas
	Definir preciok,kilos,precioI Como Real;
	Definir descuento,preciofinal Como Real;
	Escribir ' Cuanto cuesta el Kilo de manzana? ';
	Leer preciok;
	Escribir 'Cuantos Kilos de manzana a comprado? ';
	Leer kilos;
	precioI <- preciok*kilos;
	Si kilos>=0 y kilos<=2 Entonces
		descuento <- 0;
	SiNo
		Si kilos>=2.01 y kilos<=5 Entonces
			descuento <- precioI*0.1;
		SiNo
			Si Kilos>=5.01 y kilos<=10 Entonces
				descuento <- precioI*0.15;
			SiNo
				descuento <- precioI*0.20;
			FinSi
		FinSi
	FinSi
	preciofinal <- precioI - descuento;
	Escribir "El precio a pagar es: ", preciofinal;
FinFuncion


Funcion videoN35_DiaSemana()
	//Segun el numero ingresado por el usuario mostrar el dia de la semana
	//Pedir al usuario que ingrese el numero
	//Evaluar la condicion segun el numero ingresado por el usuario
	//Mostar el dia de la semana
	
	Definir Dia como real;
	Escribir "Ingrese un DIA de la SEMANA entre el 1 y 7";
	Leer Dia;
	
	Segun Dia Hacer
		1: 
			Escribir "Lunes";
		2:
			Escribir "Martes";
		3:
			Escribir "Miercoles";
		4:
			Escribir "Jueves";
		5:
			Escribir "Viernes";
		6:
			Escribir "Sabado";
		7:
			Escribir "Domingo";
			
		De Otro Modo:
			
			Escribir "DIA de la SEMANA incorrecto, ingrese un dia de la SEMANA entre el 1 y 7";
			
	FinSegun
	
FinFuncion


Funcion videoN36_Aniversario()
	//Segun el numero ingresado por el usuario mostrar el significado del aniversario
	//Pedir que ingrese el valor en decadas
	//Evaluar las condiciones segun el valor ingresado
	//Mostrar el significado
	
	Definir numA Como Real;
	Escribir "Significado de Aniversario segun las decadas;";
	Escribir "Ingrese una decada entre 10-60: ";
	Leer numA;
	
	Segun numA Hacer
		10: 
			Escribir "Bodas de Hojalata";
		20:
			Escribir "Bodas de Porcelana";
		30:
			Escribir "Bodas de Perlas";
		40:
			Escribir "Bodas de Rubí";
		50:
			Escribir "Bodas de Oro";
		60:
			Escribir "Bodas Diamante";
			
		De Otro Modo:
			
			Escribir "Decada INCORRECTA, Ingrese 10, 20, 30, 40, 50, 60.";
			
	FinSegun
	
FinFuncion


Funcion videoN37_Menu()
	//Mostrar un menu con opciones y rrealizar la opcion que el usario elija
	
	Definir opcion Como real;
	
	Escribir "MENÚ";
	Escribir "Opción 1: Elevar un número a la potencia X";
	Escribir "Opcion 2: Sacar la raiz cuadrada";
	Escribir "Opcion 3: Salir";
	Escribir "Digite una opcion: ";
	Leer  opcion;
	Segun opcion Hacer
		1:
			Definir num, pot, respuesta Como Real;
			Escribir "Ingrese un valor:";
			Leer num;
			Escribir "Ingrese la potencia:";
			Leer pot;
			respuesta <- num^pot;
			Escribir "El resultado es:", respuesta;
			
		2:
			Definir num,respuesta Como Real;
			Escribir "Ingrese un valor:";
			Leer num;
			respuesta<- raiz(num);
			Escribir "El resultado es:", respuesta;
			
		3:
			
	FinSegun
	
FinFuncion


Funcion videoN38_Ciclos()
	//Como funcionan los ciclos
	
	Definir i Como Entero;
	Para i <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir i;
		
	FinPara
	
FinFuncion


Funcion videoN39_Ciclos_Indeterminados_Mientras()
	//Ciclos indeterminados
	
	Definir i Como Entero;
	
	i <- 1;
	
	Mientras i<= 10 Hacer
		Escribir i;
		i <- i + 1;
	FinMientras
	
FinFuncion


Funcion videoN39_HastaQue()
	//Hasta que
	
	Definir i Como Entero;
	
	i <- 1;
	
	Repetir
		Escribir i;
		i <- i +1;
	Hasta Que i >10;
	
FinFuncion


Funcion videoN40_Suma_N()
	//Sumar 1 a un valor hasta llegar a 10
	
	Definir N,suma, i Como Entero;
	
	Escribir "Digite el valor a sumarse:";
	Leer n;
	
	suma<-0;
	
	Para i <- 1 Hasta N Con Paso 1 Hacer
		suma<- suma + i;
	FinPara
	
	Escribir "La suma es:", suma;
FinFuncion


Funcion videoN41_Suma_Pares_Impares()
	//Calcular la suma de los numeros pares e impares de los numeros entre 2 a 49
	
	Definir suma_pares, suma_impares, i Como Entero;
	
	suma_pares<- 0;
	suma_impares<- 0;
	
	Para i <-2 Hasta 49 Hacer
		Si i mod 2 = 0 Entonces
			suma_pares<- suma_pares+i;
		SiNo
			suma_impares<- suma_impares+i;
		FinSi
		
	FinPara
	
	Escribir "La suma de pares es:", suma_pares;
	Escribir "La suma de impares es:", suma_impares;
FinFuncion


Funcion videoN42_Positivos_Negativos_Neutros()
	//Pedir al usuario que ingrese 10 numeros y mostrar los numeros positivos, negativos y neutros
	
	Definir num,i Como Entero;
	definir conteo_positivos, conteo_negativos, conteo_neutro como enteros;
	conteo_positivos <- 0;
	conteo_negativos <- 0;
	conteo_neutro <- 0;
	Para i<-1 Hasta 10 Hacer
		Escribir i," Digite un numero:";
		Leer num;
		Si num = 0 Entonces
			conteo_neutro <- conteo_neutro+1;
		SiNo
			Si num>0 Entonces
				conteo_positivos <- conteo_positivos+1;
			SiNo
				conteo_negativos <- conteo_negativos+1;
			FinSi
		FinSi
	FinPara
	Escribir "La cantidad de positivo es: ", conteo_positivos;
	Escribir "La cantidad de negativos es: ", conteo_negativos;
	Escribir "La cantidad de neutros es:", conteo_neutro;
FinFuncion


Funcion videoN43_Calificaciones
	//Ingresar 10 calificaciones y sacar el promedio y la calificacion mas baja
	
	Definir calificacion, suma, calificacion_baja, calificacion_promedio Como Real;
	definir i Como Entero;
	
	suma <- 0;
	calificacion_baja<- 99999;
	
	Para i <- 1 Hasta  10 Con Paso 1 Hacer
		Escribir i, ". Digite una calificacion: ";
		Leer calificacion;
		
		suma <- suma + calificacion;
		
		si calificacion < calificacion_baja Entonces
			calificacion_baja <- calificacion;
			
		FinSi
	FinPara
	calificacion_promedio<- suma/10;
	
	Escribir "La calificacion promedio es:", calificacion_promedio;
	Escribir "La calificacion mas baja es:", calificacion_baja;
FinFuncion


Funcion videoN44_Calcular_Factorial()
	//Calcular el factorial
	
	definir num como entero;
	definir i, factorial como enteros;
	Repetir
		Escribir "Digite un numero: ";
		Leer num;
	Hasta Que num>=0
	i <- 1;
	factorial <- 1;
	Mientras i<= num Hacer
		factorial <- factorial *i;
		i <- i +1;
	FinMientras
	Escribir "El factorial es:", factorial;
FinFuncion


Funcion videoN45_Suma_N_Elementos()
	//Elementos a sumarse
	
	definir i, suma como enteros;
	definir n_elementos como entero;
	Escribir "Digite la cantidad de elementos a sumarse:";
	Leer n_elementos;
	i <- 1;
	suma <- 0;
	Mientras i <= n_elementos Hacer
		suma <- suma + i^2;
		i <- i + 1;
		Escribir "La suma es:", suma;
	FinMientras
FinFuncion


Funcion videoN46_Lista()
	Definir n_elementos, i, num como entero;
	Definir suma_pares, conteo_pares Como Entero;
	Definir sumai,conteoi Como Entero;
	Definir promedio como real;
	
	
	Escribir "Digite la cantidad de elementos a ingresar:";
	Leer  n_elementos;
	
	i <- 1;
	suma_pares <- 0;
	conteo_pares <- 0;
	
	sumai <- 0;
	conteoi <- 0;
	
	Mientras i<= n_elementos Hacer
		Escribir i,". Digite un numero";
		Leer num;
		
		si num mod 2 = 0 Entonces
			
			suma_pares <- suma_pares + num;
			conteo_pares <- conteo_pares + 1;
		SiNo
			sumai <- sumai + num;
			conteoi <- conteoi + 1;
			
			
		FinSi
		
		i <- i + 1;
		
	FinMientras
	
	si conteo_pares = 0 Entonces
		Escribir "No se han digitado numeros pares:";
	SiNo
		Escribir "La suma de los numeros pares es:", suma_pares;
		Escribir "El conteo de los numeros pares es:", conteo_pares;
	FinSi
	
	si conteoi = 0 Entonces
		Escribir "No se han digitado numeros impares:";
	SiNo
		promedio <- sumai/conteoi;
		Escribir "El promedio de impares es: ", promedio;
	FinSi
FinFuncion


Funcion video46_Ejercicio8()
	//Dada las horas trabajadas de 5 personas y la
	//tarifa de pago calcular el salario, y la
	//sumatoria de todos los salarios.
	
	Definir i como entero;
	Definir Salario_cada,horas,tarifa,sumatoria_salario,numero_trabajadores como enteros;
	i<-1;
	sumatoria_salario<-0;
	Escribir "digite el numero de trabajadores: ";
	Leer numero_trabajadores;
	
	Escribir "Digite la tarifa: ";
	Leer tarifa;
	
	Mientras i<= numero_trabajadores Hacer
		Escribir i, " .Digite el valor de horas trabajadas por este trabajador: ";
		leer horas;
		Salario_cada<- horas*tarifa;
		Escribir "El valor a pagar de este trabajador es: ", Salario_cada;
		i<-i+1;
		sumatoria_salario<-sumatoria_salario+Salario_cada;
	FinMientras
	
	Escribir "El valor total de salarios a pagar es de : ", Sumatoria_Salario;
	
FinFuncion






