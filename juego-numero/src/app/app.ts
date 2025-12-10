import { Component } from '@angular/core';
import { Configuracion } from './modelos/configuracion';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Datos del formulario de configuración
  nombre: string = '';
  apellido: string = '';
  rangoMaximo: number | null = null;
  maxIntentos: number | null = null;

  // Mensajes de validación por campo
  msgNombre: string = '';
  msgApellido: string = '';
  msgRango: string = '';
  msgIntentos: string = '';

  // Estado de validación por campo
  nombreValido = false;
  apellidoValido = false;
  rangoValido = false;
  intentosValidos = false;

  // Botón Recoger Datos
  puedeRecogerDatos = false;

  // Configuración definitiva y juego
  configuracion!: Configuracion;
  numeroSecreto: number | null = null;
  juegoIniciado = false;

  // Juego: intentos y feedback
  intentoUsuario: number | null = null;
  mensajeJuego: string = '';
  intentosRestantes: number = 0;
  haGanado = false;

  // ==== VALIDACIONES ====

  validarNombre(): void {
    if (!this.nombre || this.nombre.trim().length === 0) {
      this.msgNombre = 'El nombre no puede estar vacío';
      this.nombreValido = false;
    } else {
      this.msgNombre = '✅';
      this.nombreValido = true;
    }
    this.actualizarEstadoFormulario();
  }

  validarApellido(): void {
    if (!this.apellido || this.apellido.trim().length === 0) {
      this.msgApellido = 'El apellido no puede estar vacío';
      this.apellidoValido = false;
    } else {
      this.msgApellido = '✅';
      this.apellidoValido = true;
    }
    this.actualizarEstadoFormulario();
  }

  validarRango(): void {
    if (this.rangoMaximo === null) {
      this.msgRango = 'Debes introducir un número';
      this.rangoValido = false;
    } else if (this.rangoMaximo < 4) {
      this.msgRango = 'El rango mínimo es 4';
      this.rangoValido = false;
    } else {
      this.msgRango = '✅';
      this.rangoValido = true;
    }
    this.actualizarEstadoFormulario();
  }

  validarIntentos(): void {
    if (this.maxIntentos === null) {
      this.msgIntentos = 'Debes introducir un número de intentos';
      this.intentosValidos = false;
    } else if (this.maxIntentos <= 0) {
      this.msgIntentos = 'El número de intentos debe ser mayor que 0';
      this.intentosValidos = false;
    } else {
      this.msgIntentos = '✅';
      this.intentosValidos = true;
    }
    this.actualizarEstadoFormulario();
  }

  private actualizarEstadoFormulario(): void {
    this.puedeRecogerDatos =
      this.nombreValido &&
      this.apellidoValido &&
      this.rangoValido &&
      this.intentosValidos;
  }

  // ==== RECOGER DATOS Y CREAR CONFIGURACIÓN ====

  recogerDatos(): void {
    if (!this.puedeRecogerDatos || this.rangoMaximo === null || this.maxIntentos === null) {
      return;
    }

    this.configuracion = {
      nombre: this.nombre.trim(),
      apellido: this.apellido.trim(),
      rangoMaximo: this.rangoMaximo,
      maxIntentos: this.maxIntentos
    };

    // Número aleatorio entre 0 (incluido) y rangoMaximo (excluido)
    this.numeroSecreto = Math.floor(Math.random() * this.configuracion.rangoMaximo);

    // Iniciar juego
    this.juegoIniciado = true;
    this.intentosRestantes = this.configuracion.maxIntentos;
    this.mensajeJuego = '';
    this.haGanado = false;
    this.intentoUsuario = null;
  }

  // ==== LÓGICA DEL JUEGO ====

  enviarIntento(): void {
    if (!this.juegoIniciado || this.numeroSecreto === null || this.intentoUsuario === null) {
      return;
    }

    if (this.intentosRestantes <= 0 || this.haGanado) {
      return;
    }

    const intento = this.intentoUsuario;
    const secreto = this.numeroSecreto;

    if (intento === secreto) {
      this.mensajeJuego = 'Has ganado';
      this.haGanado = true;
      this.intentosRestantes--;
      return;
    }

    if (intento > secreto) {
      this.mensajeJuego = 'Te pasaste';
    } else {
      const diff = secreto - intento;
      if (diff === 1) {
        this.mensajeJuego = 'Caliente';
      } else if (diff === 2) {
        this.mensajeJuego = 'Templado';
      } else if (diff >= 3) {
        this.mensajeJuego = 'Frío';
      }
    }

    this.intentosRestantes--;

    if (!this.haGanado && this.intentosRestantes <= 0) {
      this.mensajeJuego = `Has perdido. El número era ${this.numeroSecreto}`;
    }
  }
}
