#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2   // DS18B20 terhubung ke pin 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();

  Serial.println("=== Uji Coba Sensor DS18B20 ===");
}

void loop() {
  sensors.requestTemperatures();            // Minta data suhu
  float suhuC = sensors.getTempCByIndex(0); // Ambil suhu sensor pertama

  if (suhuC == DEVICE_DISCONNECTED_C) {
    Serial.println("Sensor tidak terdeteksi!");
  } else {
    Serial.print("Suhu: ");
    Serial.print(suhuC);
    Serial.println(" °C");
  }

  delay(500); // Baca setiap 1 detik
}
