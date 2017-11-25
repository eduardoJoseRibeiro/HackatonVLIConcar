/*
 * Blink
 * Turns on an LED on for one second,
 * then off for one second, repeatedly.
 */

#include <Arduino.h>

float temperatura;
String str;
void setup()
{
  // initialize LED digital pin as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  /*if (Serial.available() > 0)
    {
      temperatura = Serial.parseFloat();
      if(temperatura > 40)
      {
        digitalWrite(LED_BUILTIN, HIGH);
      }
      else
        digitalWrite(LED_BUILTIN, LOW);
    }*/

    while (Serial.available() > 0)
    {
      char d = Serial.read();
      if (d == '\n')
      {
        char t[str.length()+1];
        str.toCharArray(t, (sizeof(t)));
        float intdata = atof(t);
        if(intdata > 40)
        {
          digitalWrite(LED_BUILTIN, HIGH);
        }
        else
          digitalWrite(LED_BUILTIN, LOW);

        delay(1000);
        Serial.print(intdata);
        Serial.print('\n');

        str = String();
      }
      else
      {
          str.concat(d);
      }
      Serial.flush();
    }
}
