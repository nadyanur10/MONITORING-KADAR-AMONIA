#define MQ135_PIN 1   // GPIO ADC ESP32-S3

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println("=== DETEKSI GAS MQ-135 - ESP32 S3 ===");
  Serial.println("Pemanasan sensor...");
  delay(20000); // pemanasan awal
}

void loop() {
  int adcValue = analogRead(MQ135_PIN);
  float tegangan = adcValue * (3.3 / 4095.0);

  Serial.print("ADC: ");
  Serial.print(adcValue);
  Serial.print(" | Tegangan: ");
  Serial.print(tegangan, 2);
  Serial.print(" V | Status: ");

  
  if (adcValue < 1200) {
    Serial.println("AMAN (Udara Normal)");
  }
  else if (adcValue < 2500) {
    Serial.println("WASPADA (Gas Ringan / Asap)");
  }
  else {
    Serial.println("BAHAYA !!! (Gas Beracun Tinggi)");
  }

  delay(1000);
}
