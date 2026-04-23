---
title: Atajos de teclado
description: Atajos útiles en terminal Bash/Zsh y en el emulador de terminal Linux.
---

# Atajos de teclado en Linux

Atajos habituales en la **terminal** con interpretadores tipo **Bash** o **Zsh**. La tecla **Ctrl** se indica como `Ctrl`; en algunos teclados aparece como `Control`.

## Movimiento y edición de línea (Readline)

Estos atajos suelen funcionar en Bash y en muchos programas que usan la biblioteca GNU Readline.

| Atajo | Acción |
|--------|--------|
| `Ctrl+A` | Ir al **inicio** de la línea. |
| `Ctrl+E` | Ir al **final** de la línea. |
| `Ctrl+U` | Borrar desde el cursor hasta el **inicio** de la línea. |
| `Ctrl+K` | Borrar desde el cursor hasta el **final** de la línea. |
| `Ctrl+W` | Borrar la **palabra** anterior al cursor. |
| `Alt+B` / `Esc` `B` | Retroceder **una palabra** (depende del terminal). |
| `Alt+F` / `Esc` `F` | Avanzar **una palabra**. |
| `Ctrl+L` | **Limpiar** la pantalla (similar a `clear`; el historial de la sesión sigue disponible). |
| `Ctrl+C` | Enviar **SIGINT**: interrumpir el proceso en primer plano (o cancelar la línea vacía en algunos casos). |
| `Ctrl+D` | En línea vacía: **cerrar** la sesión del shell (*EOF*). Con texto: a veces borra el carácter bajo el cursor. |
| `Ctrl+R` | **Búsqueda inversa** en el historial de comandos (volver a buscar con `Ctrl+R`). |
| `Ctrl+T` | Intercambiar el carácter bajo el cursor con el anterior (*transpose*). |

## Historial

| Atajo / tecla | Acción |
|----------------|--------|
| `↑` / `↓` | Navegar por el **historial** de comandos. |
| `Ctrl+P` / `Ctrl+N` | Línea anterior / siguiente (equivalente a flechas en muchos entornos). |
| `!!` | Repetir el **último** comando (tras expandir, Enter). |
| `!$` | Último **argumento** del comando anterior (útil para encadenar). |

## Pegado y terminal

- **Pegar** en terminal: suele ser **clic medio**, **Shift+Insert** o **Ctrl+Shift+V** (según emulador y escritorio).
- **Copiar** desde terminal: a menudo **Ctrl+Shift+C** o selección + clic medio.

## Notas

- En **macOS**, `Meta`/`Alt` puede requerir configuración; muchos usuarios mapean **opciones** en iTerm/Terminal.
- En **Vim** o **Nano** los atajos son **distintos**; esta página se centra en el shell interactivo.
- Para listar todos los atajos Readline en Bash: `bind -p` (salida larga).
