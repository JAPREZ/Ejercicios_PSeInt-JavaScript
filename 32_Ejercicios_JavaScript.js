// Aqui estan los 32 EJERCICIOS de los videos,
// los cuales se encuentran entre el video 16 hasta el video 46,
// al final del codigo podemos ejecutar el ejercicio que desees escribiendo el nombre de la funcion.
// ejemplo: 	
//				let ejerci= new Ejercicios()
// 				ejerci.video35()  <- aqui cambiamos el nombre de la funcion que desee ejecutar


const Leer = require('prompt-sync')()
const Escribir = console

class Ejercicios {
	
	video16(){
		// entrada: valores de a, b, y c
		// proceso: con los valores ya ingresados calcular (-b + raiz(b*b - 4*a*c))/(2*a)
		// salida: Resultado de la operacion
		console.log("Ejercicio 1")

		let a, b, c, result;
		a = 0; b = 0; c = 0;

		a = Leer("Ingrese el valor de a: ")
		b = Leer("Ingrese el valor de b: ")
		c = Leer("Ingrese el valor de c: ")

		result = (-b + Math. sqrt(b*b - 4*a*c))/(2*a)

		Escribir.log("La respuesta es: ",result)
	}
	
	video17(){
		//determinar la solución logica de la sig expresion
		//entrada: Pedir al usuario que ingrese el valor de a y b
		//proceso: Calcular la operacion ((3+5*8)<3 y ((-6/3*8)+2<2))o (a>b)
		//salida: Dar el resultado de la operacion
		console.log("Ejercicio 2")

		let a, b, result

		a = 0; b = 0;
		a = Leer("Ingrese el primer numero: ")
		b = Leer("Ingrese el segundo numero: ")

		result = ((3+5*8)<3 & (-6/3*8)) || (a > b)

		Escribir.log("El resultado es: ", result)
	}

	video18(){
		//hacer un programa para intercambiar el valor de 2 variables
   		//Entrada: Pedir el valor de las variables A y B
		//Proceso: Intercambiar las variables a y b con la ayuda de una nueva variable aux 
		//Salida: Dar el resultado del proceso	
		console.log("Ejercicio 3")

		let a, b, aux;

		a = 0; b = 0; aux = 0;

		a = Leer("Ingrese el valor de A: ")
		b = Leer("Ingrese el valor de B: ")

		aux = a
		a = b
		b = aux

		Escribir.log ("El valor de A es:", a, " y ", "El valor de B es:", b)
	}

	video19(){
		//Entrada: Pedir el usuario el valor de c ademas definir a=10 y b=20 y darles un valor numerico
		//Proceso: Realizar la suma de las variables a, b y c
		//Salida: Dar el resulatado de la operacion
		console.log("Ejercicio 4")

		let a, b, c, result

		a = 10; b = 20; c = 0

		c = parseInt(Leer("Ingrese el valor de C: "))

		result = a + b + c
		Escribir.log ("El resultado de la suma es:", result)

	}

	video20(){
		//Entrada: Pedir el valor de b
		//Proceso: Calcular la suma de a + b
		//Salida: Dar el resultado 
		console.log("Ejercicio 5")

		let a, b, result
		
		a = 12; b = 0;

		b = parseInt(Leer("Ingrese el valor de b:"))

		result = a + b

		Escribir.log("La suma es:", result)
	}

	video21(){
		//Entrada: Pedir el valor de v al usuario y definir la variable a
		//Proceso: Calcular la suma de a + v
		//Salida: Mostrar el resultado de suma
		console.log("Ejercicio 6")
		
		let a, v, result
		
		a = 5; v = 0;

		v = parseInt(Leer("Ingrese el valor de V: "))

		result = a + v

		Escribir.log("La sumas es:", result)
	}

	video22(){
		//Calcular la cantidad de segundos que tiene las horas, minutos y segundos ingresados por el usuario
		//Entrada: Pedir al usuario que ingrese el valor de horas, min y seg
		//Proceso: Con nuevas variables y formulas calcular el valor en segundos 
		//Salida: Mostrar resultado
		console.log("Ejercicio 7")
		
		let horas, minutos, seg, horas_seg, min_seg, seg_totales

		horas=0;minutos=0;seg=0;

		horas = parseInt(Leer("Ingrese las horas:"))
		minutos = parseInt(Leer("Ingrese los minutos:"))
		seg = parseInt(Leer("Ingrese los segundos:"))

		horas_seg = horas * 3600
		min_seg = minutos * 60
		seg_totales = horas_seg + min_seg + seg

		Escribir.log("Los segundos son:",seg_totales)
	}

	video23(){
		//Calcular el area y la longitud de una circunferencia con el valor de radio que ingree el usuario
		//Entrada: Pedir al usuario que ingrese el radio ademas, definir las variables area, long y radio
		//Proceso: Calcular area = pi * (radio * radio) y longitud = 2 * pi * radio
		//Salida: Mostrar el resulatdo del area y longitud
		console.log("Ejercicio 8")

		let radio, area, long

		radio = parseInt(Leer("Escriba el radio de la circunferencia:"))

		area = Math.PI * (radio * radio)
		long = 2 * Math.PI * radio

		Escribir.log("El area de la circunferencai es:",area)
		Escribir.log("La longitud de la circunferencai es:",long)
	}

	video24(){
		//Sacar el porcentaje de Hombres y Mujeres 
		//Entrada: Pedir al usuario que ingrese el numero de hombres y mujeres y se guarden en las variables h, m respectivamente
		//Proceso: Clacular el porcentaje a partir de los datos y formulas ingresadas
		//Salida: Mostrar el resultado
		console.log("Ejercicio 9")
		
		let hom,muj,totalEs,homP,mujP

		hom = parseInt(Leer("Ingrese la cantidad de hombres:"))
		muj = parseInt(Leer("Ingrese la cantidad de mujeres:"))

		totalEs = hom + muj
		homP = hom/totalEs *100
		mujP = muj/totalEs *100

		Escribir.log("El porcentaje de hombres es: ",homP)
		Escribir.log("El porcentaje de mujeres es: ",mujP)
	}

	video25(){
		//Calcular las horas que se tardara un profesor en revisar los examenes los cuales se dividen en tres tipos
		//Tipo A 5min, B8min, C6min
		//Entrada: Pedir al usuario  qeu ingrese la cantidad de examenes a resolver en las variables A,B Y C
		//Proceso: Usando una formula se procede a calcular el tiempo en que se tardará el  profesor en revisar lo examenes
		//Salida: Mostrar las horas y minutos 
		console.log("Ejercicio 10")

		let tiempo_total, horas, minutos, AT, BT, CT, A, B, C;

		tiempo_total=0;horas=0

		A = parseInt(Leer("Ingrese la cantidad de examenes tipo A: "))
		B = parseInt(Leer("Ingrese la cantidad de examenes tipo B: "))
		C = parseInt(Leer("Ingrese la cantidad de examenes tipo C: "))

		AT =  A * 5;
		BT =  B * 8;
		CT =  C * 6;

		tiempo_total = AT+ BT+ CT;

		horas = Math.trunc(tiempo_total/60);
		minutos = tiempo_total % 60;

		Escribir.log ("El tiempo en revisar las evaluaciones es...")
		Escribir.log ("Es ",horas, " horas y ",minutos," minutos")
	}

	video26(){
		//Mostar el precio a pagar aplicando un descuento del 15%
		//Entrada: Pedir al usuario que ingrese la cantidad a pagar, y definir las variables
		//Proceso: Sacar el descuento del 15% a la cantidad ingresada 
		//Salida: Mostrar el resultado 
		console.log("Ejercicio 11")

		let precio,descuento,precio_final,precio_descuento

		precio = parseInt(Leer("Ingrese el precio: "))

		descuento = 15
		precio_descuento = (descuento*precio)/100;
		precio_final = precio - precio_descuento;

		Escribir.log("El precio final es:",precio_final,"$")
	}

	video27(){
		//Sacar el promedio final de un estudiante con los sig datos
		//55% del promedio de sus tres parciales
		//30% calificacion ex final
		//15% calificacion trabajo final
		// Entrada: Pedir al estudiante que ingrese las tres notas de sus parciales, la nota del trabajo final y la nota del examen FinAlgoritmo
		//Proceso: Con los datos ingresados calcular el promedio FinAlgoritmo
		//Salida: Mostrar el promedio final
		console.log("Ejercicio 12")

		let Nota1, nota2, nota3, exFinal, TrabajoF, notaparciales, exFinal_nota, TrabajoF_nota, NotaFinal

		Nota1=0;nota2=0;nota3=0;exFinal=0;TrabajoF=0;notaparciales=0;exFinal_nota=0;TrabajoF_nota=0;NotaFinal=0
		
		Nota1 = parseInt(Leer("Ingrese su nota de Primer Parcial:"))
		nota2 = parseInt(Leer("Ingrese su nota de Segundo Parcial:"))
		nota3 = parseInt(Leer("Ingrese su nota de Tercer Parcial:"))
		TrabajoF = parseInt(Leer("Ingrese su nota de Trabajo final:"))
		exFinal = parseInt(Leer("Ingrese su nota de Examen final:"))

		notaparciales = ((Nota1+nota2+nota3)*5.5)/3;
		TrabajoF_nota =  TrabajoF * 1.5;
		exFinal_nota = exFinal * 3;
		NotaFinal = notaparciales + TrabajoF_nota + exFinal_nota

		Escribir.log("La nota final es:",NotaFinal)
	}

	video29(){
		//Mostrar si el valor ingresado por el usuario es par o impar
		//Entrada: Pedir al usuario que ingrese un numero
		//Proceso: Usando Si-SiNo ver si el numero es Par o Impar
		//Salida : Mostrar el resultado		
		console.log("Ejercicio 13")

		let num

		num = parseInt(Leer("Ingrese un numero:"))

		if (num % 2 == 0 ) {
			Escribir.log(num, " Es par")
		}
		else{
			Escribir.log(num, "Es impar")
		}
	}

	video30(){
		//Determinar si en base a su promedio aprueba o reprueba
		//Entrada: Pedir al estudiante que ingrese el valor de Nota1, 2 y 3
		//Proceso: Con los datos ingresados calcular si aprueba o reprueba
		//Salida: Mostrar el resultado
		console.log("Ejercicio 14")

		let nota1, nota2, nota3, promedioF

		nota1=0; nota2=0; nota3=0; promedioF=0

		nota1 = parseInt(Leer("Ingrese su Nota #1:"))
		nota2 = parseInt(Leer("Ingrese su Nota #2:"))
		nota3 = parseInt(Leer("Ingrese su Nota #3:"))

		promedioF = ((nota1 + nota2 + nota3)*10)/3

		if (promedioF >= 70){
			Escribir.log("APROBASTES!!!","Tu promedio final es:",promedioF)
		}
		else{
			Escribir.log("REPROBASTES.","Tu promedio final es:",promedioF)
		}
	}

	video31(){
		//Mostrar al cliente cual es su precio final a pagar aplicando un descuento de 20% solo si su compra supera los 100$
		//Entrada: Pedir al cliente que ingrese el valor del precio a pagar
		//Proceso: Primero analizar si la condicion(Compra supera los 100$) es verdadera luego calcular el precio final aplicando el descuento
		//Salida: Mostrar el precio final 
		console.log("Ejercicio 15")

		let descuento, precio, preciofinal,preciodescuento

		descuento=0;precio=0,preciofinal=0;preciodescuento=0

		precio = parseInt(Leer("Ingrese su monto a pagar:"))

		if (precio <= 99 ) {
			Escribir.log("Precio final es:", precio,"$")
		}
		else{
			descuento = 20;
			preciodescuento = (descuento*precio)/100;
			preciofinal = precio - preciodescuento;
			
			Escribir.log ("Precio final es mayor a 100$.");
			Escribir.log ("Por lo tanto se aplica un 20% de descuento.");
			Escribir.log ("Precio final: ", preciofinal,"$");
		}
	}

	video32(){
		//Pedir al usuario que ingrese dos valores, si son iguales se multiplican, si el primero es el mayor se restan y si el segundo es el mayor de suman
		//ENtrada: Ingrese el valor de nuu=m2 y num2
		//Proceso: Evaluar las condiciones y ejecutar el proceso segun la misma
		//Salida: Mostrar el resultado
		console.log("Ejercicio 16")

		let num1,num2, result

		num1=0; num2=0; result=0

		num1 = parseInt(Leer("Ingrese el primer valor:"))
		num2 = parseInt(Leer("Ingrese el segundo valor:"))

		if (num1 == num2){
			result = num1 * num2
			Escribir.log("La multiplicacion es:", result)
		}
		else{
			if (num1 > num2){
				result = num1 - num2
				Escribir.log("Al ser el primer numero mayor, se restan:", result)
			}
			else{
				result = num1 + num2
				Escribir.log("Al ser el primer numero menor, se suman:", result)
			}
		}
	}

	video33(){
		//Pedir al usuario que ingrese tres valores e indicar cual es el mayor de los tres
		//Entrada: Ingresar el valor de los tres numeros
		//Proceso: Evaluar la condicon y ejecutar el proceso segun la condicion
		//Salida: Mostrar el numero mayor
		console.log("Ejercicio 17")

		let num1,num2,num3
		
		num1=0; num2=0; num3=0

		num1 = parseInt(Leer("Ingrese el primer numero:"))
		num2 = parseInt(Leer("Ingrese el segundo numero:"))
		num3 = parseInt(Leer("Ingrese el tercer numero:"))

		if (num1>num2 & num1>num3){
			Escribir.log("El numero mayor es:", num1)
		}
		else{
			if (num2>num1 & num2>num3){
				Escribir.log("El numero mayor es:",num2)
			}
			else{
				Escribir.log("El numero mayor es:",num3)
			}
		}
	}

	video34(){
		//Usando la tabla como guia calcular el precio a pagar por la compra de manzanas
		//Entrada: Definir las variables y pedir al usuario que ingresse el  valor de 
		//cauntos kilos ha comprado y cuanto cuesta el kilo de manzana.
		//Proceso: Usando If y else calcular 
		//Salida: Mostrar el resultado
		console.log("Ejercicio 18")

		let preciok,kilos,precioI,descuento,preciofinal
		
		preciok=0,kilos=0,precioI=0,descuento=0,preciofinal=0

		preciok = parseInt(Leer("Cuanto cuesta el Kilo de manzana?:"))
		kilos = parseInt(Leer("Cuantos Kilos de manzana a comprado?:"))

		precioI = preciok*kilos

		if (kilos>=0 & kilos<=2){
			descuento = 0
		}
		else{
			if(kilos>=2.01 & kilos<=5){
				descuento = precioI*0.1
			}
			else{
				if(kilos>=5.01 & kilos<=10 ){
					descuento = precioI*0.15
				}
				else{
					descuento = precioI*0.20
				}
			}
		}

		preciofinal = precioI - descuento;
		Escribir.log ("El precio a pagar es: ", preciofinal)
	}

	video35(){
		//Segun el numero ingresado por el usuario mostrar el dia de la semana
		//Pedir al usuario que ingrese el numero
		//Evaluar la condicion segun el numero ingresado por el usuario
		//Mostar el dia de la semana
		console.log("Ejercicio 19")

		let dia=0

		dia = parseInt(Leer("Ingrese un numero entre 1 y 7: "))

		switch (dia) {
			case 1:
				Escribir.log("Lunes")
				break
			case 2:
				Escribir.log("Martes")
				break
			case 3:
				Escribir.log("Miercoles")
				break
			case 4:
				Escribir.log("Jueves")
				break
			case 5:
				Escribir.log("Viernes")
				break
			case 6:
				Escribir.log("Sabado")
				break
			case 7:
				Escribir.log("Domingo")
				break
			default:
				Escribir.log("DIA de la SEMANA incorrecto, ingrese un dia de la SEMANA entre el 1 y 7")
			}
	}

	video36(){
		//Segun el numero ingresado por el usuario mostrar el significado del aniversario
		//Pedir que ingrese el valor en decadas
		//Evaluar las condiciones segun el valor ingresado
		//Mostrar el significado
		console.log("Ejercicio 20")
		
		let numA=0

		Escribir.log("SIGNIFICADO DE ANIVERSARIO SEGUN LA DECADA")
		numA = parseInt(Leer("Ingrese una decada  entre 10-60: "))

		switch (numA) {
			case 10:
				Escribir.log("Bodas de Hojalata")
				break
			case 20:
				Escribir.log("Bodas de Porcelana")
				break
			case 30:
				Escribir.log("Bodas de Perlas")
				break
			case 40:
				Escribir.log("Bodas de Rubí")
				break
			case 50:
				Escribir.log("Bodas de Oro")
				break
			case 60:
				Escribir.log("Bodas Diamante")
				break
			default:
				Escribir.log("Decada INCORRECTA, Ingrese 10, 20, 30, 40, 50, 60.")
			}
	}
	
	video37(){
		//Mostrar un menu con opciones y realizar la opcion que el usario elija
		//Entrada: Pedir al usuario que ingrese la opcion que quiera, ademas definir las variables
		//Proceso: Usando Switch ejecutar el proceso segun las opcion elejida por el usuario
		//Salida: Mostrar el resultado
		console.log("Ejercicio 21")

		let opcion=0

		console.log("MENU")
		console.log("Opcion 1: Elevar un numero a la potencia X")
		console.log("Opcion 2: Sacar la raiz cuadrada")
		console.log("Opcion 3: Salir")
		opcion = parseInt(Leer("Ingrese una opcion: "))

		switch (opcion) {
			case 1:
				let num=0, pot=0, resolver=0
				num = parseInt(Leer("Ingrese un valor:"))
				pot = parseInt(Leer("Ingrese la potencia:"))
				resolver = Math.pow(num ,pot)
				Escribir.log("El resulatdo es:",resolver)
				break
			case 2:
				let num1=0, respuesta=0
				num1 = parseInt(Leer("Ingrese un valor:"))
				respuesta = Math.sqrt(num1)
				Escribir.log("El resulatdo es:",respuesta)
				break
			case 3:
				break	
		}

	}

	video38(){
		//Como funcionan los ciclos
		console.log("Ejercicio 22")
		let i
		for (i=1; i<=10; i++) {
			Escribir.log (i)
		}
	}

	video39(){
		//Ciclos indeterminados
		console.log("Ejercicio 23")
		let i = 1

		while (i<=10) {
			Escribir.log(i)
			i = i + 1
		}
	}

	video39_2(){
		//Hasta que
		console.log("Ejercicio 24")
		let i = 1

		do {
			Escribir.log(i)
			i = i + 1
		} while (i<=10)
	}

	video40(){
		//Sumar 1 a un valor hasta llegar a 10
		console.log("Ejercicio 25")
		let n,suma,i
		n = parseInt(Leer("Digite el valor a sumarse"))

		suma = 0

		for (i=1; i<=n; i++){
			suma = suma + i
		}
		Escribir.log("La suma es:",suma)
	}

	video41(){
		//Calcular la suma de los numeros pares e impares de los numeros entre 2 a 49
		console.log("Ejercicio 26")
		let suma_pares 
		let suma_impares 
		let i 
		suma_pares = 0
		suma_impares = 0
		for (i=2;i<=49;i++) {
			if (i%2==0) {
				suma_pares = suma_pares+i
			} else {
				suma_impares = suma_impares+i
			}
		}
		Escribir.log("La suma de pares es:",suma_pares)
		Escribir.log("La suma de impares es:",suma_impares)
	}

	video42(){
		//Pedir al usuario que ingrese 10 numeros y mostrar los numeros positivos, negativos y neutros
		console.log("Ejercicio 27")
		let num = 0 ,i = 0,conteo_positivos = 0,conteo_negativos = 0,conteo_neutro = 0
		for (i=1;i<=10;i++) {
			num = Leer(i," Digite un numero:")
			if (num==0) {
				conteo_neutro = conteo_neutro+1
			} else {
				if (num>0) {
					conteo_positivos = conteo_positivos+1
				} else {
					conteo_negativos = conteo_negativos+1
				}
			}
		}
		Escribir.log("La cantidad de positivo es: ",conteo_positivos)
		Escribir.log("La cantidad de negativos es: ",conteo_negativos)
		Escribir.log("La cantidad de neutros es:",conteo_neutro)
	}

	video43(){
		//Ingresar 10 calificaciones y sacar el promedio y la calificacion mas baja
		//Entrada: Definir las variables calificacion , suma, calificacion_promedio, calificacion_baja y i
		//Proceso: Usando el ciclo for sacar el promedio de calificaciones y la nota mas baja
		//Salida: Mostrar el problema
		console.log("Ejercicio 28")
		let calificacion , suma, calificacion_promedio, calificacion_baja, i

		calificacion_baja = 99999
		for (i=1;i<=10;i++) {
			calificacion = parseInt(Leer(i,". Digite una calificacion: "))
			suma = suma+calificacion
			if (calificacion<calificacion_baja) {
				calificacion_baja = calificacion
			}
		calificacion_promedio = suma/10
		}
		Escribir.log("La calificacion promedio es:",calificacion_promedio)
		Escribir.log("La calificacion mas baja es:",calificacion_baja)		
	}	

	video44(){
		// Calcular el factorial
		console.log("Ejercicio 29")

		let num, i, factorial
		do {
			num = parseInt(Leer("Digite un numero: "))
		} while (num<0)
		i = 1
		factorial = 1
		while (i<=num) {
			factorial = factorial*i
			i = i+1
		}
		Escribir.log("El factorial es:",factorial)
	}
	
	video45(){
		//Calcular la siguiente sumatoria de los “N” elementos:
		// Elementos a sumarse
		console.log("Ejercicio 30")
		let i, suma, n_elementos
		n_elementos = parseInt(Leer("Digite la cantidad de elementos a sumarse:"))

		i = 1
		suma = 0
		while (i<=n_elementos) {
			suma = suma+Math.pow(i,2)
			i = i+1
			Escribir.log("La suma es:",suma)
		}
	}

	video46(){
		//Ingresar “N” enteros, visualizar la suma de los
		//numeros pares de la lista, cuantos numeros pares
		//existen y cual es el promedio de los numeros
		//impares.
		console.log("Ejercicio 31")
		let n_elementos ,i ,num ,suma_pares ,conteo_pares ,sumai ,conteoi , promedio
		
		n_elementos = parseInt(Leer("Digite la cantidad de elementos a ingresar:"))

		i = 1
		suma_pares = 0
		conteo_pares = 0
		sumai = 0
		conteoi = 0
		while (i<=n_elementos) {
			num = parseInt(Leer("Digite un numero:"))

			if (num%2==0) {
				suma_pares = suma_pares+num
				conteo_pares = conteo_pares+1
			} else {
				sumai = sumai+num
				conteoi = conteoi+1
			}
			i = i+1
		}
		if (conteo_pares==0) {
			Escribir.log("No se han digitado numeros pares:")
		} else {
			Escribir.log("La suma de los numeros pares es:",suma_pares)
			Escribir.log("El conteo de los numeros pares es:",conteo_pares)
		}
		if (conteoi==0) {
			Escribir.log("No se han digitado numeros impares:")
		} else {
			promedio = sumai/conteoi
			Escribir.log("El promedio de impares es: ",promedio)
		}
	}

	video46_2(){
		// Dada las horas trabajadas de 5 personas y la
		// tarifa de pago calcular el salario, y la
		// sumatoria de todos los salarios.
		console.log("Ejercicio 32")
		
		let salario_cada = 0, horas, tarifa, sumatoria_salario, numero_trabajadores, i
		
		i = 1
		sumatoria_salario = 0
		numero_trabajadores = parseInt(Leer("digite el numero de trabajadores: "))

		while (i<=numero_trabajadores) {
			horas = parseInt(Leer("Digite el valor de horas trabajadas por este trabajador: "))
			tarifa = parseInt(Leer("Digite la tarifa: "))
			salario_cada = horas*tarifa
			
			Escribir.log("El valor a pagar de este trabajador es: ",salario_cada)
			
			i = i+1
			sumatoria_salario = sumatoria_salario+salario_cada
		}
		
		Escribir.log("El valor total de salarios a pagar es de: ",sumatoria_salario)		

	}

}

let ejerci= new Ejercicios()
ejerci.video46_2()
//ejerci.video16()
//ejerci.video17()
//ejerci.video18()
//ejerci.video19()
//ejerci.video20()
//ejerci.video21()
//ejerci.video22()
//ejerci.video23()
//ejerci.video24()
//ejerci.video25()
//ejerci.video26()
//ejerci.video27()
//ejerci.video29()
//ejerci.video30()
//ejerci.vide31()
//ejerci.video32()
//ejerci.video33()
//ejerci.video34()
//ejerci.video35()
//ejerci.video36()
//ejerci.video37()
//ejerci.video38()
//ejerci.video39()
//ejerci.video39_2()
//ejerci.video40()
//ejerci.video41()
//ejerci.video42()
//ejerci.video43()
//ejerci.video44()
//ejerci.video45()
//ejerci.video46()
//ejerci.video46_2()
