import { useEffect, useState, useRef } from "react";
import NotificationModal from "./NotificationModal";

interface Medicine {
  id: number;
  name: string;
  dose: string;
  time: string;
  icon: string;
}

interface NotificationManagerProps {
  medicines: Medicine[];
}

export default function NotificationManager({
  medicines,
}: NotificationManagerProps) {

  //este controla que el modulo se abra o cierre si es true muestra la ventana
  const [isOpen, setIsOpen] = useState(false);

  const [currentMedicine, setCurrentMedicine] =
    useState<Medicine | null>(null);

  //guarda el id de cuáles medicamentos fueron confirmados (tomados)
  const [shownNotifications, setShownNotifications] =
    useState<number[]>([]);

  //guarda medicamentos cancelados recientemente con su timestamp (usar ref para no causar re-renders)
  const recentlyCanceled = useRef<Map<number, number>>(new Map());

  //este es para soliciar al usuario activar las notificaciones
  useEffect(() => {

    //Primero se pregunta si el navegador tiene sorporte para notificaciones
    if ("Notification" in window) {

      //luego se pregunta si ya están activadas las notificaciones, si no están, se hace la pregunta 
      //al usuario para que las active
      if (Notification.permission !== "granted") {
        Notification.requestPermission();
      }

    }

  }, []);

  useEffect(() => {
    //limpia los medicamentos cancelados después de 10 segundos
    const cleanupInterval = setInterval(() => {
      const now = new Date().getTime();
      for (const [medicineId, timestamp] of recentlyCanceled.current.entries()) {
        if (now - timestamp >= 10000) {
          recentlyCanceled.current.delete(medicineId);
        }
      }
    }, 5000); //verifica cada 5 segundos

    return () => clearInterval(cleanupInterval);
  }, []);

  useEffect(() => {
    //revisa si hay medicamentos con la hora indicada
    const checkMedicineTime = () => {

      //se obtiena la hora y fecha actual
      const now = new Date();
      const currentTimeMs = now.getTime();

      //esto covierte la hora en formato 24h
      const currentTime =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0");

      //recorre las medicionas
      medicines.forEach((medicine) => {
        //verifica si el medicamento fue cancelado recientemente
        const canceledTime = recentlyCanceled.current.get(medicine.id);
        const isCanceledRecently =
          canceledTime !== undefined && currentTimeMs - canceledTime < 5000; //5 segundos de espera

        //pregunta si la hora actual es igual a la hora del medicamento
        //y si no fue confirmado (check)
        //y si no fue cancelado recientemente
        if (
          medicine.time === currentTime &&
          !shownNotifications.includes(medicine.id) &&
          !isCanceledRecently
        ) {

          //se guarda el medicamento y abre la ventana
          setCurrentMedicine(medicine);
          setIsOpen(true);

          //prgunta si hay soporte para notificación y si el 
          //usuario dio el permiso
          if (
            "Notification" in window &&
            Notification.permission === "granted"
          ) {

            //crea una notifación que muestra en la parte de notiicaciones de la compu
            new Notification("Medication Reminder", {
              body: `${medicine.name} - ${medicine.dose}`,
              icon: medicine.icon,
            });

          }

        }

      });

    };

    // Ejecuta una vez al cargar
    checkMedicineTime();

    // Revisa cada 10 segundos
    const interval = setInterval(
      checkMedicineTime,
      10000
    );

    return () => clearInterval(interval);

  }, [medicines, shownNotifications]);

  //aquí envía la info al notificationModal para que la muestre
  return (
    <NotificationModal
      isOpen={isOpen}
      medicineName={currentMedicine?.name || ""}
      dose={currentMedicine?.dose || ""}
      time={currentMedicine?.time || ""}
      onConfirm={() => {
        //al confirmar, agrega el medicamento a shownNotifications para que no vuelva a aparecer
        //hasta la próxima hora
        if (currentMedicine) {
          setShownNotifications((prev) => [
            ...prev,
            currentMedicine.id,
          ]);
        }
        setIsOpen(false);
        setCurrentMedicine(null);
      }}
      onClose={() => {
        //al cancelar, se agrega a recentlyCanceled con el timestamp actual
        //para evitar que se muestre inmediatamente (espera 30 segundos)
        if (currentMedicine) {
          recentlyCanceled.current.set(currentMedicine.id, new Date().getTime());
        }
        setIsOpen(false);
        setCurrentMedicine(null);
      }}
    />
  );
}