#define PH_PIN A0   // pH-4502C terhubung ke A0

void setup() {
  Serial.begin(9600);
  Serial.println("=== Uji Coba Sensor pH-4502C ===");
}

void loop() {
  int nilaiADC = analogRead(PH_PIN);
  float tegangan = nilaiADC * (5.0 / 1023.0);

  // Rumus pH standar (belum kalibrasi)
  float nilaiPH = 3.5 * tegangan;

  Serial.print("ADC: ");
  Serial.print(nilaiADC);
  Serial.print(" | Tegangan: ");
  Serial.print(tegangan, 2);
  Serial.print(" V");
  Serial.print(" | pH: ");
  Serial.println(nilaiPH, 2);

  delay(500); // Delay 1 detik
}
