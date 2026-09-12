# Documentación del Proyecto: Carrito de Ventas en Angular

## 1. Arquitectura del Flujo del Carrito
El proyecto está estructurado mediante un servicio centralizado (`CartService`) que actúa como única fuente de verdad para el manejo de los datos.

* **Catálogo de productos (`ProductListComponent`)**: Muestra los artículos disponibles y permite al usuario agregarlos al carrito.
* **Resumen del carrito (`CartSummaryComponent`)**: Visualiza los productos agregados, permite modificar cantidades o eliminar items, y refleja el cálculo final.

## 2. Uso de Observables y Estado Compartido
La comunicación reactiva entre componentes se implementó utilizando **RxJS**:

* **`BehaviorSubject`**: Ubicado dentro de `CartService`, guarda el estado actual del carrito y emite actualizaciones cada vez que se agrega, edita o elimina un producto.
* **`Observable` (`cart$`)**: Expone el flujo de datos hacia los componentes. El componente `CartSummaryComponent` consume este observable mediante la directiva `async` en el HTML, garantizando que la interfaz se actualice de forma automática e instantánea.

## 3. Propósito de los Pipes
Se utilizaron pipes para realizar transformaciones de datos directamente en las plantillas HTML:

* **`SubtotalPipe` (Personalizado)**: Recibe el precio y la cantidad de un producto para calcular el subtotal (`precio * cantidad`).
* **`TotalPipe` (Personalizado)**: Procesa el arreglo completo de productos del carrito y calcula el monto total acumulado.
* **`CurrencyPipe` (Nativo de Angular)**: Aplica formato visual de moneda a los precios y totales.