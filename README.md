[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/nnXw0PQJ)
# 📘 DWEC05 - Tarea de Evaluación

## 📝 Descripción general

En esta tarea, desarrollarás tu primera aplicación web [SPA](https://es.wikipedia.org/wiki/Single-page_application) utilizando Angular. Crearás un juego de adivinación de números aleatorios, en el que se podrán configurar varios parámetros para después intentar adivinar el número generado.

El juego será sencillo pero interactivo, proporcionando retroalimentación en tiempo real sobre los intentos.

## 🎯 Objetivos de aprendizaje

- Familiarizarte con TypeScript y Angular, comprendiendo su sintaxis, estructura de directorios y dinámica de funcionamiento.
- Programar formularios para capturar datos del usuario.
- Actualizar dinámicamente la información en pantalla en función de las preferenciasl del usuario.
- Validar entradas asegurando que los datos ingresados sean correctos.
- Construir una aplicación SPA funcional, sin necesidad de recargar la página.

## 🛠️ Ejercicios

### Ejercicio 1: Configuración de Parámetros del Juego

- **Objetivo:** Diseñar un formulario que permita al usuario configurar los parámetros iniciales del juego antes de comenzar la partida.

- **Requisitos:**
  
  - <u>Crea un formulario</u> con los campos
    
    - Nombre y Apellido del jugador
    
    - Rango máximo del número aleatorio a generar. 
    
    - Número de intentos que tendrás para adivinar el número
    
    - Añade un campo de texto oculto al lado o debajo de cada elemento de la interfaz para dar feedback al usuario.
  
  - <u>Botón de recogida de datos</u>
    
    - Al pulsarlo, se debe crear un objeto `Configuracion`que almacene los datos ingresados.
    - Este objeto debe estar definido en el modelo de datos.
  
  - <u>Validación</u>:
    
    - Número aleatorio
      
      - Se generará un número aleatorio entre 0 y el número ingresado.
        
        - *Ejemplo: Si introduces 6, el número aleatorio podrá ser 0, 1, 2, 3, 4 o 5*
      
      - El rango debe ser como mínimo 4.
    
    - Campos de Nombre y Apellido no pueden estar vacíos
    
    - Botón de `Recoger Datos` 
      
      - Inicialmente estará desactivado. 
      
      - Solo se activa si se cumple todo lo anterior:
    
    - Mostrar feedback en tiempo real y en color rojo en el campo de texto oculto al lado de cada elemento si no se cumple lo listado anteriormente
      
      - *Ejemplo:*
        
        - <span style="color:red">*El número introducido es menor que el rango mínimo*</span>
        
        - <span style="color:red">*El nombre no puede estar vacío*</span>
      
      - Mostrar un tick verde ✅ si el campo es correcto.

### Ejercicio 2: Creación del Juego Personalizado

- **Objetivo:** Desarrollar la lógica del juego, permitiendo que el usuario realice intentos para adivinar el número generado y reciba retroalimentación en tiempo real.

- **Requisitos:**
  
  - Mensaje de Bienvenida:
    
    - Cuando comience el juego, debes mostrar: *Ongi Etorri [tuNombre] [tuApellido].*
    
    - Además, bloquea todos los campos de entrada de datos del ejercicio 1 para que el usuario no pueda interactuar con ellos
  
  - Crea un campo de entrada de datos para que el usuario introduzca su número.
  
  - Debes incluir un botón "Enviar" para comprobar si el número ingresado es correcto.
  
  - <u>Validación</u>:
    
    - Si el numero ingresado es mayor que el generado mostrarás el mensaje *Te pasaste*
    
    - Si el numero ingresado es una unidad menor que el generado mostrarás el mensaje <span style="color:red">*Caliente*</span>
    
    - Si el numero ingresado es dos unidades menor que el generado mostrarás el mensaje <span style="color:yellow">*Templado*</span>
    
    - Si el numero ingresado es tres o más unidades menor que el generado mostrarás el mensaje <span style="color:blue">*Frío*</span>
  
  - *<u>Ejemplo</u>: rango = 5, número aleatorio generado=3*
    
    - Introducido: 4 →  *Te pasaste*
    
    - Introducido: 2 → <span style="color:red">*Caliente*</span>
    
    - Introducido: 1 → <span style="color:yellow">*Templado*</span>
    
    - Introducido: 0 → <span style="color:blue">*Frío*</span>
    
    - Introducido: 3 → <span style="color:green">*Has Ganado*</span>
