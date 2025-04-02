import React from "react";

const CtaSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-1 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Aplicación Web de Control de Mantenimiento
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              La aplicación web de Control de Mantenimiento es una plataforma
              diseñada para gestionar y optimizar el mantenimiento preventivo y
              correctivo de equipos e instalaciones en una organización. Esta
              herramienta permite registrar, planificar y supervisar todas las
              actividades de mantenimiento, garantizando que los activos estén
              en óptimas condiciones operativas.
            </p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Con una interfaz intuitiva, los usuarios pueden programar tareas,
              asignar técnicos, generar órdenes de trabajo y realizar un
              seguimiento detallado del historial de mantenimiento. Además, la
              aplicación ofrece notificaciones automáticas para recordar las
              próximas actividades y facilita la elaboración de informes y
              análisis para mejorar la toma de decisiones.
            </p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Entre las funcionalidades clave se incluyen:
            </p>
            <ul className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              <li>
                - Gestión de órdenes de trabajo: Creación, asignación y
                seguimiento de órdenes de trabajo.
              </li>
              <li>
                - Planificación del mantenimiento preventivo: Programación de
                tareas periódicas para evitar fallos y prolongar la vida útil de
                los equipos.
              </li>
              <li>
                - Control de inventario: Gestión de repuestos y materiales
                necesarios para las tareas de mantenimiento.
              </li>
              <li>
                -Reportes y análisis: Generación de informes detallados sobre el
                estado de los equipos, costos de mantenimiento y cumplimiento de
                tareas.
              </li>
            </ul>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Esta aplicación es esencial para cualquier organización que desee
              mantener la eficiencia operativa, reducir tiempos de inactividad y
              controlar los costos asociados al mantenimiento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
