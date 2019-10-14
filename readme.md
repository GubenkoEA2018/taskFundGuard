# CodeSparks' FED task
Welcome!

Included with this file is a very simple client-side app.
Your mission, is to improve it a bit by implementing some additional features.
Please focus on good coding practices.  

Once done, please send back the new and improved version.

What to do:

1) Make the piece "hollow" when the mouse hovers over it 
(hollow means only the border should be drawn with the color of the piece)
RU -  Сделайте кусок "пустотелым", когда мышь наведет на него курсор
(пустота означает, что только граница должна быть нарисована цветом фигуры)

done

2) The `init` function has too much code duplication - fix it 
RU - Функция `init` имеет слишком много дублирования кода - исправьте это

done

3) Add a 'Reset' button that returns the piece back to its initial location
Добавить кнопку «Сброс», которая возвращает кусок обратно в исходное положение

done

4) Add a 'Randomize' button that places the piece at a random location
Добавьте кнопку «Рандомизация», которая помещает фигуру в случайном месте

done

5) Make sure that the piece never gets off the screen
Убедитесь, что кусок никогда не сходит с экрана

done

6) When the page loads, get today's temperature from an API and set the piece's color according to the following ranges:
    - < 10 degrees: Blue
    - 11 - 20 degrees: Green
    - 21 - 30 degrees: Yellow
    - More than 30 degrees: Red

    You can use this URL to retrieve the weather data for Tel-Aviv:  
    http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv

done    
    
    Когда страница загрузится, получите текущую температуру из API и установите цвет элемента в соответствии со следующими диапазонами:
        - <10 градусов: синий
        - 11 - 20 градусов: зеленый
        - 21 - 30 градусов: желтый
        - более 30 градусов: красный
    
    Вы можете использовать этот URL для получения данных о погоде для Тель-Авива:
        http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv
   
7) Please describe how would you make the motion of the piece smooth instead of jumpy?  
   Implement your suggestion for extra bonus!
   
   Пожалуйста, опишите, как бы вы сделали движение фигуры плавным, а не нервным?
      Реализуйте свое предложение для дополнительного бонуса!
   
   done 
   
8) How would you improve the code of this project?   
Meaning, how would you implement the same application differently (if at all) - did you have parts of the code that you didn't like? would you add anything? Use a different architecture?
Give some suggestions!

Как бы вы улучшили код этого проекта?
То есть, как бы вы реализовали одно и то же приложение по-разному (если вообще) - были ли у вас части кода, которые вам не нравились? ты бы что-нибудь добавил? Использовать другую архитектуру?
Дайте несколько предложений!

I would write this application for a react.js.
The main component would draw everything needed with button "Reset".
I would create the following components:
1) a circle
2) motion control
3) RandomPosition
4) Weather

Thanks and good luck!
